// the **/.. split pass must bound total work, not just pattern count:
// a short pattern with many **/.. occurrences must not exhaust memory
// or take minutes to compile (residual of the 11.0.1 limit)

import t from 'tap'
import { Minimatch, minimatch } from '../dist/esm/index.js'

t.test('many **/.. splits are rejected instead of truncated', t => {
  const p = Array(600).fill('**/../a/b').join('/') + '/z'
  t.throws(() => new Minimatch(p, { optimizationLevel: 2 }), RangeError)
  t.end()
})

t.test(
  'cell exhaustion cannot silently change a match or its negation',
  t => {
    const p = Array(15).fill('**/../a/b').join('/')
    const f = Array(15).fill('a/b').join('/')
    for (const pattern of [p, '!' + p]) {
      t.throws(
        () => new Minimatch(pattern, { optimizationLevel: 2 }),
        RangeError,
      )
      t.throws(
        () => minimatch(f, pattern, { optimizationLevel: 2 }),
        RangeError,
      )
    }
    t.end()
  },
)

t.test('completed splits still match the same paths', t => {
  const mm = new Minimatch('**/../a/**/../b/z', { optimizationLevel: 2 })
  t.equal(mm.match('a/b/z'), true)
  t.equal(mm.match('x/a/y/b/z'), true)
  t.equal(mm.match('a/z'), false)
  t.end()
})

t.test('splits below the cell limit are not rejected', t => {
  const p = Array(14).fill('**/../a/b').join('/')
  const f = Array(14).fill('a/b').join('/')
  const mm = new Minimatch(p, { optimizationLevel: 2 })
  t.equal(mm.match(f), true)
  t.equal(mm.match(f + '/x'), false)
  t.end()
})

t.test(
  'the next split is checked before allocating or changing its row',
  t => {
    const mm = new Minimatch('x', { optimizationLevel: 2 })
    const parts = ['**', '..', ...Array<string>(1_000_000).fill('x')]
    const rows = [parts]
    t.throws(() => mm.firstPhasePreProcess(rows), RangeError)
    t.equal(rows.length, 1)
    t.equal(parts.length, 1_000_002)
    t.equal(parts[0], '**')
    t.end()
  },
)

t.test('a split ending exactly at the cell limit is allowed', t => {
  const mm = new Minimatch('x', { optimizationLevel: 2 })
  const parts = ['**', '..', ...Array<string>(999_999).fill('x')]
  const rows = mm.firstPhasePreProcess([parts])
  t.equal(rows.length, 2)
  t.equal(rows[0].length, 1_000_000)
  t.equal(rows[1].length, 1_000_000)
  t.equal(rows[0][0], '..')
  t.equal(rows[1][0], '**')
  t.end()
})

t.test('the cell limit is shared by all input rows', t => {
  const mm = new Minimatch('x', { optimizationLevel: 2 })
  const first = ['**', '..', ...Array<string>(500_000).fill('x')]
  const second = [...first]
  const rows = [first, second]
  t.throws(() => mm.firstPhasePreProcess(rows), RangeError)
  t.equal(rows.length, 3, 'only the first row was split')
  t.equal(second.length, 500_002)
  t.equal(second[0], '**')
  t.end()
})

t.test('levels zero and one do not expand **/..', t => {
  const p = Array(15).fill('**/../a/b').join('/')
  for (const optimizationLevel of [0, 1]) {
    const mm = new Minimatch(p, { optimizationLevel })
    t.equal(mm.set.length, 1)
    t.equal(mm.match(p), true)
  }
  t.end()
})
