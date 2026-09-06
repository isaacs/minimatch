import t from 'tap'
import { escape, minimatch } from '../dist/esm/index.js'

// An escaped `|` must match a literal `|`, and nothing else.
// Previously, when the pattern also contained magic, `\|` was emitted
// into the regular expression unescaped, turning it into an alternation
// that split the pattern in two, so `.*\|` matched anything starting
// with a dot OR the empty string.

const cases: [pattern: string, path: string, expect: boolean][] = [
  // no magic: worked before, should keep working
  ['a\\|', 'a|', true],
  ['a\\|', '', false],
  ['a\\|', 'a', false],

  // with magic, the escaped pipe used to become an alternation
  ['.*\\|', '.x|', true],
  ['.*\\|', '', false],
  ['.*\\|', 'c\\', false],
  ['.*\\|', 'x', false],
  ['\\|?-', '|x-', true],
  ['\\|?-', 'a?b', false],
  ['\\|?-', 'x-', false],
  ['-[a-]c\\|', '-ac|', true],
  ['-[a-]c\\|', '', false],
  ['*\\|*', 'x|y', true],
  ['*\\|*', 'xy', false],
  ['a\\|*', 'a|b', true],
  ['a\\|*', 'b', false],
  ['a\\|*', 'zzz', false],

  // inside an extglob, a pipe escaped in the alternative is literal
  ['@(a\\|b|c)', 'a|b', true],
  ['@(a\\|b|c)', 'c', true],
  ['@(a\\|b|c)', 'a', false],
  ['@(a\\|b|c)', 'b', false],
  ['*@(a\\|b|c)', 'xa|b', true],
  ['*@(a\\|b|c)', 'xb', false],

  // an unescaped pipe outside an extglob was already literal
  ['a|*', 'a|b', true],
  ['a|*', 'b', false],
]

for (const [pattern, path, expect] of cases) {
  t.equal(
    minimatch(path, pattern),
    expect,
    `${JSON.stringify(path)} ${expect ? 'matches' : 'does not match'} ${JSON.stringify(pattern)}`,
  )
}

// escape() leaves `|` alone, since an unescaped `|` outside an extglob
// is already literal; joined with magic it must stay literal.
t.equal(minimatch('a|b.js', escape('a|b') + '.*'), true)
t.equal(minimatch('b.js', escape('a|b') + '.*'), false)
t.equal(minimatch('x.js', 'x' + escape('|') + '.*'), false)
