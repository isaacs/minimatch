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

t.test('rows of different lengths are not merged', t => {
  t.strictSame(new Minimatch('{a*,b*/c}').globParts, [['a*'], ['b*', 'c']])
  t.strictSame(new Minimatch('{a*/x,b*/x/y,c*/x}').globParts, [
    ['@(a*|c*)', 'x'],
    ['b*', 'x', 'y'],
  ])
  t.strictSame(new Minimatch('x/{a,b}*/y/{c,d}*/z').globParts, [
    ['x', '@(a*|b*)', 'y', '@(c*|d*)', 'z'],
  ])
  t.end()
})

// GHSA-cf2h-pxjq-68xw: building a key by joining the whole row at
// every portion made compiling long patterns quadratic
t.test('merging is not quadratic in the pattern length', t => {
  const stars = Array(16000).fill('*').join('/')
  const words = Array.from({ length: 16 }, (_, i) => `w${i}`).join(',')
  for (const p of [
    stars,
    `{${words}}*/${stars.slice(0, 8000)}`,
    `{${words}}/${stars.slice(0, 8000)}`,
  ]) {
    const start = performance.now()
    const mm = new Minimatch(p)
    const elapsed = performance.now() - start
    t.ok(elapsed < 2000, `compiled in ${Math.round(elapsed)}ms`, {
      length: p.length,
    })
    t.equal(mm.set.length, mm.globParts.length)
  }
  t.end()
})
