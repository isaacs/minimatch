import t from 'tap'
import { minimatch, Minimatch } from '../src/index.js'

// rows from brace expansion that only differ in one Matcher portion
// become one row, with the portions in @(...)
const cases: [p: string, globParts: string[][]][] = [
  ['**/*.{js,ts}', [['**', '@(*.js|*.ts)']]],
  ['{a,b}*/{c,d}*', [['@(a*|b*)', '@(c*|d*)']]],
  [
    'x/{*.a,*.b}/{*.c,d}',
    [
      ['x', '@(*.a|*.b)', '*.c'],
      ['x', '@(*.a|*.b)', 'd'],
    ],
  ],
  // strings stay strings, so they have no magic
  [
    '{a,b}/x',
    [
      ['a', 'x'],
      ['b', 'x'],
    ],
  ],
  // portions that would change meaning in @(...)
  ['{x|,y}*', [['x|*'], ['y*']]],
  ['{@(a,b*}', [['@(a'], ['b*']]],
  ['{*(a)b),c*}', [['*(a)b)'], ['c*']]],
  ['{?(),*a}', [['?()'], ['*a']]],
  ['{[[:alpha:]],*a}', [['[[:alpha:]]'], ['*a']]],
  ['{a,b}*\\', [['a*\\'], ['b*\\']]],
]

for (const [p, globParts] of cases) {
  t.strictSame(new Minimatch(p).globParts, globParts, p)
}

t.test('set and globParts stay in step', t => {
  const m = new Minimatch('{a,b}*/{c,d}*')
  t.equal(m.set.length, m.globParts.length)
  t.match(m.set, [[{ pattern: '@(a*|b*)' }, { pattern: '@(c*|d*)' }]])
  t.end()
})

t.test('not with noext, where @(...) is literal', t => {
  t.strictSame(new Minimatch('**/*.{js,ts}', { noext: true }).globParts, [
    ['**', '*.js'],
    ['**', '*.ts'],
  ])
  t.end()
})

t.test('merged rows match the same paths', t => {
  for (const f of ['x.js', 'a/x.ts', 'a/x.md', '.x.js', 'a/.x.ts']) {
    t.equal(
      minimatch(f, '**/*.{js,ts}'),
      /^(.*\/)?[^.][^/]*\.[jt]s$/.test(f),
      f,
    )
  }
  t.equal(minimatch('.x.js', '**/*.{js,ts}', { dot: true }), true)
  t.end()
})
