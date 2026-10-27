import t from 'tap'
import { minimatch, type MinimatchOptions } from '../src/index.js'

// match() checks the last portion of a path against the last portion
// of each row before it splits the path. These cases are at the edges
// of that check, and each must give the same result as a full match.
const cases: [
  f: string,
  p: string,
  match: boolean,
  o?: MinimatchOptions,
][] = [
  // a trailing / leaves '' as the last portion
  ['a/b/', 'a/*', true],
  ['a/b/', 'a/**/*', true],
  ['a/b/', 'a/b/*', false],
  ['a/b//', 'a/*', true],
  ['a/b/', '*/b/', true],
  ['a/b', '*/b/', false],
  // another row passes the check, and this row's tail does not match
  ['a/c/', '{**/b,c}', false],
  ['a/c/', '{**/c,b}', true],
  // empty paths, and paths that are only slashes
  ['', '', true],
  ['', '*', false],
  ['/', '/', true],
  ['//', '/', true],
  ['/', '*', false],
  // rows that end in ** are not checked
  ['a/b/c', 'a/**', true],
  ['x/b/c', 'a/**', false],
  // matchBase compares the last non-empty portion
  ['x/y/a.js', '*.js', true, { matchBase: true }],
  ['x/y/a.js/', '*.js', true, { matchBase: true }],
  ['x/y/a.md', '*.js', false, { matchBase: true }],
  // negation and flipNegate
  ['a.md', '!*.js', true],
  ['a.js', '!*.js', false],
  ['a.md', '*.js', false, { flipNegate: true }],
  ['x/y', 'a/**', false, { flipNegate: true }],
  // settings that turn the check off
  ['a/b', '*/b/x', true, { partial: true }],
  ['a/b/../c', 'a/c', true, { optimizationLevel: 2 }],
  ['a/c/', '**/b', false, { optimizationLevel: 2 }],
  ['C:\\a\\b.js', 'c:/a/*.js', true, { platform: 'win32' }],
  ['a//', 'a/*', false, { preserveMultipleSlashes: true }],
]

for (const [f, p, match, o] of cases) {
  t.equal(minimatch(f, p, o), match, JSON.stringify([f, p, o]))
}
