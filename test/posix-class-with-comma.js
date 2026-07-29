// Test for issue #273: Invalid regex generated when glob includes comma and character class
// https://github.com/isaacs/minimatch/issues/273
//
// When a pattern includes both a comma (or other characters that were previously
// escaped with backslash) and a POSIX character class (which requires the unicode
// flag), the generated regex would be invalid because \, is not a valid escape
// sequence in unicode regex mode.
import t from 'tap'
import { minimatch, Minimatch } from '../dist/esm/index.js'

t.test('comma with POSIX character class should not throw', async t => {
  // This was the original error case - should not throw SyntaxError
  t.doesNotThrow(() => minimatch('foo', ',[[:space:]]'))
  t.doesNotThrow(() => new Minimatch(',[[:space:]]'))

  // Verify correct matching behavior
  t.equal(minimatch('foo', ',[[:space:]]'), false, 'foo does not match ,[[:space:]]')
  t.equal(minimatch(' ', ',[[:space:]]'), false, 'single space does not match (missing comma)')
  t.equal(minimatch(', ', ',[[:space:]]'), true, 'comma-space matches')
  t.equal(minimatch(',\t', ',[[:space:]]'), true, 'comma-tab matches')
  t.equal(minimatch(',\n', ',[[:space:]]'), true, 'comma-newline matches')
  t.equal(minimatch(',x', ',[[:space:]]'), false, 'comma-x does not match')
})

t.test('hash character with POSIX character class should not throw', async t => {
  // Note: # is treated as comment by default, so we need nocomment: true
  const opts = { nocomment: true }
  t.doesNotThrow(() => minimatch('foo', '#[[:alpha:]]', opts))
  t.equal(minimatch('#a', '#[[:alpha:]]', opts), true, 'hash-a matches')
  t.equal(minimatch('#1', '#[[:alpha:]]', opts), false, 'hash-1 does not match')
})

t.test('space character with POSIX character class should not throw', async t => {
  t.doesNotThrow(() => minimatch('foo', ' [[:digit:]]'))
  t.equal(minimatch(' 5', ' [[:digit:]]'), true, 'space-5 matches')
  t.equal(minimatch(' a', ' [[:digit:]]'), false, 'space-a does not match')
})

t.test('hyphen outside character class with POSIX class should not throw', async t => {
  // Hyphen outside of character class in pattern
  t.doesNotThrow(() => minimatch('foo', 'a-[[:lower:]]'))
  t.equal(minimatch('a-b', 'a-[[:lower:]]'), true, 'a-b matches')
  t.equal(minimatch('a-B', 'a-[[:lower:]]'), false, 'a-B does not match (uppercase)')
})

t.test('multiple special chars with POSIX class', async t => {
  // Combination of comma, hash, space with POSIX class
  t.doesNotThrow(() => minimatch('foo', ', #[[:alnum:]]'))
  t.equal(minimatch(', #a', ', #[[:alnum:]]'), true, 'comma space hash a matches')
  t.equal(minimatch(', #1', ', #[[:alnum:]]'), true, 'comma space hash 1 matches')
  t.equal(minimatch(', #!', ', #[[:alnum:]]'), false, 'comma space hash ! does not match')
})
