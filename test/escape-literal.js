// escape() output must only ever match the literal string that was
// escaped, even when it starts with '!' or '#', or is combined with a
// brace group.
import t from 'tap'
import { minimatch, escape, braceExpand } from '../dist/esm/index.js'

const posix = {}
const win = { windowsPathsNoEscape: true }
const winBraces = { windowsPathsNoEscape: true, magicalBraces: true }
const posixBraces = { magicalBraces: true }

t.test('leading ! is not a negation', t => {
  for (const o of [posix, win, posixBraces, winBraces]) {
    const p = escape('!secret.txt', o)
    t.equal(minimatch('!secret.txt', p, o), true, JSON.stringify([p, o]))
    t.equal(minimatch('passwd', p, o), false, JSON.stringify([p, o]))
    t.equal(minimatch('secret.txt', p, o), false, JSON.stringify([p, o]))
    t.equal(minimatch('x', p, o), false, JSON.stringify([p, o]))
  }
  // with extglobs disabled, the windows encoding fails closed
  const p = escape('!a', win)
  t.equal(minimatch('b', p, { ...win, noext: true }), false)
  t.equal(minimatch('a', p, { ...win, noext: true }), false)
  t.end()
})

t.test('leading # is not a comment', t => {
  for (const o of [posix, win, posixBraces, winBraces]) {
    const p = escape('#notes.md', o)
    t.equal(minimatch('#notes.md', p, o), true, JSON.stringify([p, o]))
    t.equal(minimatch('notes.md', p, o), false, JSON.stringify([p, o]))
  }
  t.end()
})

t.test('escaped backslash survives brace expansion', t => {
  const p = escape('x\\*') + '.{js,ts}'
  t.equal(minimatch('x\\*.js', p), true)
  t.equal(minimatch('x\\*.ts', p), true)
  t.equal(minimatch('x\\anything.js', p), false)
  t.equal(minimatch('x\\.js', p), false)

  // user-supplied brace group, default options
  const p2 = escape('x\\*{,}')
  t.equal(minimatch('x\\anything', p2), false)
  t.equal(minimatch('x\\*', p2), true)

  // literal backslash before an escaped brace
  const p3 = escape('\\{', posixBraces) + '.{js,ts}'
  t.equal(minimatch('\\{.js', p3, posixBraces), true)
  t.equal(minimatch('{.js', p3, posixBraces), false)

  // odd runs still escape the next character as before
  t.same(braceExpand('a\\{b,c}'), ['a{b,c}'])
  t.same(braceExpand('a\\\\{b,c}'), ['a\\\\b', 'a\\\\c'])
  t.equal(minimatch('a\\b', 'a\\\\{b,c}'), true)
  t.equal(minimatch('ab', 'a\\\\{b,c}'), false)
  t.end()
})

t.test('windowsPathsNoEscape + magicalBraces braces stay literal', t => {
  const p = escape('x{a,b}', winBraces)
  t.equal(minimatch('x{a,b}', p, winBraces), true)
  t.equal(minimatch('xa', p, winBraces), false)
  t.equal(minimatch('xb', p, winBraces), false)
  t.equal(minimatch('x]', p, winBraces), false)
  const p2 = p + '.{js,ts}'
  t.equal(minimatch('x{a,b}.js', p2, winBraces), true)
  t.equal(minimatch('x{a,b}.ts', p2, winBraces), true)
  t.equal(minimatch('xa.js', p2, winBraces), false)
  t.end()
})

t.test('private use characters do not defeat the fix', t => {
  let pua = ''
  for (let c = 0xe000; c <= 0xf8ff; c++) pua += String.fromCharCode(c)
  const p = escape('x\\*' + pua) + '.{js,ts}'
  t.equal(minimatch('x\\*' + pua + '.js', p), true)
  t.equal(minimatch('x\\ZZZ' + pua + '.js', p), false)
  const p4 = escape('{q,b}' + pua, winBraces)
  t.equal(minimatch('{q,b}' + pua, p4, winBraces), true)
  t.equal(minimatch('b' + pua, p4, winBraces), false)
  t.end()
})
