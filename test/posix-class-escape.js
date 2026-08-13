// https://github.com/isaacs/minimatch/issues/273
//
// A POSIX class such as `[[:space:]]` compiles to `\p{...}`, which forces the
// `u` flag on the generated regular expression. Under that flag only syntax
// characters may be backslash-escaped, so escaping `,` `-` `#` or whitespace
// made the pattern throw `SyntaxError: Invalid escape`.
import t from 'tap'
import { makeRe, minimatch } from '../dist/esm/index.js'

// Every printable ASCII character, in the same path portion as a POSIX class.
t.test('no character throws when combined with a POSIX class', t => {
  for (let c = 0x20; c < 0x7f; c++) {
    const ch = String.fromCharCode(c)
    const pattern = `a${ch}b[[:digit:]]`
    t.doesNotThrow(
      () => minimatch('x', pattern),
      `pattern ${JSON.stringify(pattern)}`,
    )
  }
  t.end()
})

t.test('the reported pattern matches instead of throwing', t => {
  t.equal(minimatch('foo', ',[[:space:]]'), false)
  t.equal(minimatch(', ', ',[[:space:]]'), true)
  t.equal(minimatch(',x', ',[[:space:]]'), false)
  t.end()
})

t.test('the affected characters still match literally', t => {
  t.equal(minimatch('a,1', 'a,[[:digit:]]'), true)
  t.equal(minimatch('a-1', 'a-[[:digit:]]'), true)
  t.equal(minimatch('a#1', 'a#[[:digit:]]'), true)
  t.equal(minimatch('a 1', 'a [[:digit:]]'), true)
  t.equal(minimatch('a-b', 'a-b'), true)
  t.equal(minimatch('axb', 'a-b'), false)
  t.end()
})

// Characters that really are regex syntax must stay escaped, or a literal
// pattern would start behaving like a regular expression.
t.test('regex syntax characters are still escaped', t => {
  t.equal(minimatch('a.b', 'a.b'), true)
  t.equal(minimatch('axb', 'a.b'), false)
  t.equal(minimatch('a{2}b', 'a{2}b'), true)
  t.equal(minimatch('aab', 'a{2}b'), false)
  t.equal(minimatch('a+b', 'a+b'), true)
  t.equal(minimatch('aab', 'a+b'), false)
  t.equal(minimatch('a$b', 'a$b'), true)
  t.equal(minimatch('a(b)c', 'a(b)c'), true)
  t.end()
})

// The parsed set is derived by unescaping, so an escape scheme that does not
// round-trip would corrupt literal patterns.
t.test('literal patterns round-trip through the parsed set', t => {
  t.strictSame(makeRe('a,b'), /^a,b$/)
  t.strictSame(makeRe('a-b'), /^a-b$/)
  t.equal(minimatch('a,b', 'a,b'), true)
  t.equal(minimatch('au002cb', 'a,b'), false)
  t.end()
})
