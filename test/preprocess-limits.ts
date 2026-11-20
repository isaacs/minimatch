// optimizationLevel 2 can not make too many patterns, or spend
// too long comparing them to each other

import { assert, test } from 'ubqtest'
import { Minimatch } from '../dist/esm/index.js'

const optimizationLevel = 2

test('**/.. splits throw over braceExpandMax', () => {
  const p = Array(6).fill('**/../a/b').join('/')
  assert.equal(
    new Minimatch(p, { optimizationLevel, braceExpandMax: 64 }).set.length,
    64,
  )
  assert.throws(
    () => new Minimatch(p, { optimizationLevel, braceExpandMax: 63 }),
    RangeError,
  )
  // many short rows stay under the cell limit
  assert.throws(
    () =>
      new Minimatch('{0..9}{0..9}{0..9}{0..9}{0..5}/**/../a/b', {
        optimizationLevel,
      }),
    RangeError,
  )
})

test('**/.. splits below the max', () => {
  const mm = new Minimatch('**/../a/b/**/../c/d', { optimizationLevel })
  assert.equal(mm.set.length, 4)
  assert.equal(mm.match('../a/b/../c/d'), true)
  assert.equal(mm.match('x/a/b/y/c/d'), true)
})

test('large sets are deduped', () => {
  const small = new Minimatch('{x,*}/{0..9}', { optimizationLevel })
  assert.equal(small.set.length, 10)
  const large = new Minimatch('{x,*}/{0..9}{0..9}{0..9}', {
    optimizationLevel,
  })
  assert.equal(large.set.length, 1000)
  assert.equal(large.match('x/005'), true)
  assert.equal(large.match('y/999'), true)
  assert.equal(large.match('.y/005'), false)
})

test('literal sets are deduped in linear time', () => {
  const start = performance.now()
  const mm = new Minimatch('a/{0..9}{0..9}{0..9}{0..9}{0..9}/b', {
    optimizationLevel,
  })
  assert.equal(mm.set.length, 100_000)
  assert(performance.now() - start < 5000, 'should take less than 5s')
  // the first phase makes a/./c into a/c
  const dupes = new Minimatch('{a/./c,a/c,b/c}', { optimizationLevel })
  assert.deepEqual(dupes.globParts, [
    ['a', 'c'],
    ['b', 'c'],
  ])
})

test('rows shorter than the * positions are kept', () => {
  const mm = new Minimatch('{x/*/c,x/y/c,x}', { optimizationLevel })
  assert.deepEqual(mm.globParts, [['x', '*', 'c'], ['x']])
})

test('too many sets of * positions are not deduped', () => {
  // 512 rows, and 511 different sets of * positions
  const p = Array(9).fill('{*,a}').join('/')
  const mm = new Minimatch(p, { optimizationLevel })
  assert.equal(mm.set.length, 512)
  assert.equal(mm.match(Array(9).fill('a').join('/')), true)
})

test('** rows are not merged with rows of another shape', () => {
  const mm = new Minimatch('{**/x,x/y}', { optimizationLevel })
  assert.equal(mm.match('x/y'), true)
  assert.equal(mm.match('q/x'), true)
  assert.equal(mm.match('x/q'), false)
})
