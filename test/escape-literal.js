// escape() output must only ever match the literal string that was
// escaped, even when it starts with '!' or '#', or is combined with a
// brace group.
import { assert, describe, env, mockImport, test } from 'ubqtest'

// a literal backslash in a path is a separator on windows
const posix = { platform: 'linux' }
const win = { windowsPathsNoEscape: true }
const winBraces = { windowsPathsNoEscape: true, magicalBraces: true }
const posixBraces = { ...posix, magicalBraces: true }

// run on the native platform, and also as the other kind of platform
const platforms =
  process.platform === 'win32' ? ['', 'linux'] : ['', 'win32']
// a fresh copy of minimatch, loaded with the platform set in the env
const load = platform => {
  env({ __MINIMATCH_TESTING_PLATFORM__: platform || undefined })
  return mockImport(() => import('../dist/esm/index.js'), [])
}

for (const platform of platforms) {
  describe(platform || `native (${process.platform})`, () =>
    runTests(() => load(platform)),
  )
}

function runTests(load) {
  test('leading ! is not a negation', async () => {
    const { minimatch, escape, braceExpand } = await load()
    for (const o of [posix, win, posixBraces, winBraces]) {
      const p = escape('!secret.txt', o)
      assert.equal(
        minimatch('!secret.txt', p, o),
        true,
        JSON.stringify([p, o]),
      )
      assert.equal(
        minimatch('passwd', p, o),
        false,
        JSON.stringify([p, o]),
      )
      assert.equal(
        minimatch('secret.txt', p, o),
        false,
        JSON.stringify([p, o]),
      )
      assert.equal(minimatch('x', p, o), false, JSON.stringify([p, o]))
    }
    // with extglobs disabled, the windows encoding fails closed
    const p = escape('!a', win)
    assert.equal(minimatch('b', p, { ...win, noext: true }), false)
    assert.equal(minimatch('a', p, { ...win, noext: true }), false)
  })

  test('leading # is not a comment', async () => {
    const { minimatch, escape, braceExpand } = await load()
    for (const o of [posix, win, posixBraces, winBraces]) {
      const p = escape('#notes.md', o)
      assert.equal(
        minimatch('#notes.md', p, o),
        true,
        JSON.stringify([p, o]),
      )
      assert.equal(
        minimatch('notes.md', p, o),
        false,
        JSON.stringify([p, o]),
      )
    }
  })

  test('escaped backslash survives brace expansion', async () => {
    const { minimatch, escape, braceExpand } = await load()
    const p = escape('x\\*') + '.{js,ts}'
    assert.equal(minimatch('x\\*.js', p, posix), true)
    assert.equal(minimatch('x\\*.ts', p, posix), true)
    assert.equal(minimatch('x\\anything.js', p, posix), false)
    assert.equal(minimatch('x\\.js', p, posix), false)

    // user-supplied brace group, without magicalBraces
    const p2 = escape('x\\*{,}')
    assert.equal(minimatch('x\\anything', p2, posix), false)
    assert.equal(minimatch('x\\*', p2, posix), true)

    // literal backslash before an escaped brace
    const p3 = escape('\\{', posixBraces) + '.{js,ts}'
    assert.equal(minimatch('\\{.js', p3, posixBraces), true)
    assert.equal(minimatch('{.js', p3, posixBraces), false)

    // odd runs still escape the next character as before
    assert.deepEqual(braceExpand('a\\{b,c}'), ['a{b,c}'])
    assert.deepEqual(braceExpand('a\\\\{b,c}'), ['a\\\\b', 'a\\\\c'])
    assert.equal(minimatch('a\\b', 'a\\\\{b,c}', posix), true)
    assert.equal(minimatch('ab', 'a\\\\{b,c}', posix), false)
  })

  test('windowsPathsNoEscape + magicalBraces braces stay literal', async () => {
    const { minimatch, escape, braceExpand } = await load()
    const p = escape('x{a,b}', winBraces)
    assert.equal(minimatch('x{a,b}', p, winBraces), true)
    assert.equal(minimatch('xa', p, winBraces), false)
    assert.equal(minimatch('xb', p, winBraces), false)
    assert.equal(minimatch('x]', p, winBraces), false)
    const p2 = p + '.{js,ts}'
    assert.equal(minimatch('x{a,b}.js', p2, winBraces), true)
    assert.equal(minimatch('x{a,b}.ts', p2, winBraces), true)
    assert.equal(minimatch('xa.js', p2, winBraces), false)
  })

  test('private use characters do not defeat the fix', async () => {
    const { minimatch, escape, braceExpand } = await load()
    let pua = ''
    for (let c = 0xe000; c <= 0xf8ff; c++) pua += String.fromCharCode(c)
    const p = escape('x\\*' + pua) + '.{js,ts}'
    assert.equal(minimatch('x\\*' + pua + '.js', p, posix), true)
    assert.equal(minimatch('x\\ZZZ' + pua + '.js', p, posix), false)
    const p4 = escape('{q,b}' + pua, winBraces)
    assert.equal(minimatch('{q,b}' + pua, p4, winBraces), true)
    assert.equal(minimatch('b' + pua, p4, winBraces), false)
  })
}
