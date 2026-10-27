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

  // each string portion of a row must be in the path
  ['src/a.js', 'src/**', true],
  ['xsrc/a.js', 'src/**', false],
  ['a/srcx/b', '**/src/**', false],
  ['a/src/b', '**/src/**', true],
  ['a/.git/x', '**/.git/**', true, { dot: true }],
  ['a/git/x', '**/.git/**', false, { dot: true }],
  ['a/test/b/c.js', '**/test/**/*.js', true],
  ['a/tests/b/c.js', '**/test/**/*.js', false],
  ['b/x/c', '{a,b}/x/*', true],
  ['c/x/c', '{a,b}/x/*', false],
  ['lib/a.js', '!src/**', true],
  ['src/a.js', '!src/**', false],
  ['x/LICENSE', 'LICENSE', true, { matchBase: true }],
  ['x/LICENSE.md', 'LICENSE', false, { matchBase: true }],
  ['src/a', 'SRC/**', true, { nocase: true }],
  ['SRC/a', 'src/**', false, { nocase: true, nocaseMagicOnly: true }],
  // level 2 and preserveMultipleSlashes only use this check
  ['x/../src/a', 'src/a', true, { optimizationLevel: 2 }],
  ['x/src/../a', 'src/a', false, { optimizationLevel: 2 }],
  ['src//a', 'src//a', true, { preserveMultipleSlashes: true }],
  ['src/a', 'src//a', false, { preserveMultipleSlashes: true }],
  // partial turns it off
  ['src/a', 'src/**', true, { partial: true }],
  ['s', 'src/**', false, { partial: true }],

  // rows of **/x are matched without splitting the path, if the **
  // can walk the portions before x
  ['a/b/c.js', '**/*.js', true],
  ['c.js', '**/*.js', true],
  ['/a/c.js', '**/*.js', true],
  ['a/.b/c.js', '**/*.js', false],
  ['a/.b/c.js', '**/*.js', true, { dot: true }],
  ['.a/c.js', '**/*.js', false],
  ['a/./c.js', '**/*.js', false, { dot: true }],
  ['a/../c.js', '**/*.js', false, { dot: true }],
  ['../c.js', '**/*.js', false, { dot: true }],
  ['a/..b/c.js', '**/*.js', true, { dot: true }],
  ['a/.../c.js', '**/*.js', true, { dot: true }],
  ['a//b//c.js', '**/*.js', true],
  ['a/c.js/', '**/*.js', true],
  ['a/.b/c.js/', '**/*.js', false],
  ['.c.js', '**/*.js', false],
  ['.c.js', '**/*.js', true, { dot: true }],
  ['a/.c.js', '**/.*', true],
  ['a/b/c', '**/c', true],
  ['a/.b/c', '**/c', false],
  ['a/b/c/', '**/c', true],
  ['a/b/c.js', '!**/*.js', false],
  ['a/.b/c.js', '!**/*.js', true],
  ['a/b/c.js', '**/*.js', true, { flipNegate: true }],
  ['a/b/c.js', '{**/*.js,x}', true],
  ['a/.b/c.js', '{**/*.js,*/.b/*}', true],
]

for (const [f, p, match, o] of cases) {
  t.equal(minimatch(f, p, o), match, JSON.stringify([f, p, o]))
}
