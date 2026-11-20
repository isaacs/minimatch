// the **/.. split pass must bound total work, not just pattern count:
// a short pattern with many **/.. occurrences must not exhaust memory
// or take minutes to compile (residual of the 11.0.1 limit)

import { assert, test } from 'ubqtest'
import { Minimatch, minimatch } from '../dist/esm/index.js'

test('many **/.. splits are rejected instead of truncated', () => {
  const p = Array(600).fill('**/../a/b').join('/') + '/z'
  assert.throws(
    () => new Minimatch(p, { optimizationLevel: 2 }),
    RangeError,
  )
})

test('cell exhaustion cannot silently change a match or its negation', () => {
  const p = Array(15).fill('**/../a/b').join('/')
  const f = Array(15).fill('a/b').join('/')
  for (const pattern of [p, '!' + p]) {
    assert.throws(
      () => new Minimatch(pattern, { optimizationLevel: 2 }),
      RangeError,
    )
    assert.throws(
      () => minimatch(f, pattern, { optimizationLevel: 2 }),
      RangeError,
    )
  }
})

test('completed splits still match the same paths', () => {
  const mm = new Minimatch('**/../a/**/../b/z', { optimizationLevel: 2 })
  assert.equal(mm.match('a/b/z'), true)
  assert.equal(mm.match('x/a/y/b/z'), true)
  assert.equal(mm.match('a/z'), false)
})

test('splits below the cell limit are not rejected', () => {
  const p = Array(14).fill('**/../a/b').join('/')
  const f = Array(14).fill('a/b').join('/')
  const mm = new Minimatch(p, { optimizationLevel: 2 })
  assert.equal(mm.match(f), true)
  assert.equal(mm.match(f + '/x'), false)
})

test('the next split is checked before allocating or changing its row', () => {
  const mm = new Minimatch('x', { optimizationLevel: 2 })
  const parts = ['**', '..', ...Array<string>(1_000_000).fill('x')]
  const rows = [parts]
  assert.throws(() => mm.firstPhasePreProcess(rows), RangeError)
  assert.equal(rows.length, 1)
  assert.equal(parts.length, 1_000_002)
  assert.equal(parts[0], '**')
})

test('a split ending exactly at the cell limit is allowed', () => {
  const mm = new Minimatch('x', { optimizationLevel: 2 })
  const parts = ['**', '..', ...Array<string>(999_999).fill('x')]
  const rows = mm.firstPhasePreProcess([parts])
  assert.equal(rows.length, 2)
  assert.equal(rows[0].length, 1_000_000)
  assert.equal(rows[1].length, 1_000_000)
  assert.equal(rows[0][0], '..')
  assert.equal(rows[1][0], '**')
})

test('the cell limit is shared by all input rows', () => {
  const mm = new Minimatch('x', { optimizationLevel: 2 })
  const first = ['**', '..', ...Array<string>(500_000).fill('x')]
  const second = [...first]
  const rows = [first, second]
  assert.throws(() => mm.firstPhasePreProcess(rows), RangeError)
  assert.equal(rows.length, 3, 'only the first row was split')
  assert.equal(second.length, 500_002)
  assert.equal(second[0], '**')
})

test('levels zero and one do not expand **/..', () => {
  const p = Array(15).fill('**/../a/b').join('/')
  for (const optimizationLevel of [0, 1]) {
    const mm = new Minimatch(p, { optimizationLevel })
    assert.equal(mm.set.length, 1)
    assert.equal(mm.match(p), true)
  }
})
