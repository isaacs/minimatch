import { assert, test } from 'ubqtest'
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

test('globParts of brace sets', () => {
  for (const [p, globParts] of cases) {
    assert.deepEqual(new Minimatch(p).globParts, globParts, p)
  }
})

test('set and globParts stay in step', () => {
  const m = new Minimatch('{a,b}*/{c,d}*')
  assert.equal(m.set.length, m.globParts.length)
  assert.match(m.set, [[{ pattern: '@(a*|b*)' }, { pattern: '@(c*|d*)' }]])
})

test('not with noext, where @(...) is literal', () => {
  assert.deepEqual(
    new Minimatch('**/*.{js,ts}', { noext: true }).globParts,
    [
      ['**', '*.js'],
      ['**', '*.ts'],
    ],
  )
})

test('merged rows match the same paths', () => {
  for (const f of ['x.js', 'a/x.ts', 'a/x.md', '.x.js', 'a/.x.ts']) {
    assert.equal(
      minimatch(f, '**/*.{js,ts}'),
      /^(.*\/)?[^.][^/]*\.[jt]s$/.test(f),
      f,
    )
  }
  assert.equal(minimatch('.x.js', '**/*.{js,ts}', { dot: true }), true)
})

test('rows of different lengths are not merged', () => {
  assert.deepEqual(new Minimatch('{a*,b*/c}').globParts, [
    ['a*'],
    ['b*', 'c'],
  ])
  assert.deepEqual(new Minimatch('{a*/x,b*/x/y,c*/x}').globParts, [
    ['@(a*|c*)', 'x'],
    ['b*', 'x', 'y'],
  ])
  assert.deepEqual(new Minimatch('x/{a,b}*/y/{c,d}*/z').globParts, [
    ['x', '@(a*|b*)', 'y', '@(c*|d*)', 'z'],
  ])
})

// GHSA-cf2h-pxjq-68xw: building a key by joining the whole row at
// every portion made compiling long patterns quadratic
test('merging is not quadratic in the pattern length', () => {
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
    assert(elapsed < 2000, `compiled in ${Math.round(elapsed)}ms`)
    assert.equal(mm.set.length, mm.globParts.length)
  }
})
