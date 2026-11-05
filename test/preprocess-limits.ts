// optimizationLevel 2 can not make too many patterns, or spend
// too long comparing them to each other

import t from 'tap'
import { Minimatch } from '../dist/esm/index.js'

const optimizationLevel = 2

t.test('**/.. splits throw over braceExpandMax', t => {
  const p = Array(6).fill('**/../a/b').join('/')
  t.equal(
    new Minimatch(p, { optimizationLevel, braceExpandMax: 64 }).set.length,
    64,
  )
  t.throws(
    () => new Minimatch(p, { optimizationLevel, braceExpandMax: 63 }),
    RangeError,
  )
  // many short rows stay under the cell limit
  t.throws(
    () =>
      new Minimatch('{0..9}{0..9}{0..9}{0..9}{0..5}/**/../a/b', {
        optimizationLevel,
      }),
    RangeError,
  )
  t.end()
})

t.test('**/.. splits below the max', t => {
  const mm = new Minimatch('**/../a/b/**/../c/d', { optimizationLevel })
  t.equal(mm.set.length, 4)
  t.equal(mm.match('../a/b/../c/d'), true)
  t.equal(mm.match('x/a/b/y/c/d'), true)
  t.end()
})

t.test('large sets are deduped', t => {
  const small = new Minimatch('{x,*}/{0..9}', { optimizationLevel })
  t.equal(small.set.length, 10)
  const large = new Minimatch('{x,*}/{0..9}{0..9}{0..9}', {
    optimizationLevel,
  })
  t.equal(large.set.length, 1000)
  t.equal(large.match('x/005'), true)
  t.equal(large.match('y/999'), true)
  t.equal(large.match('.y/005'), false)
  t.end()
})

t.test('literal sets are deduped in linear time', t => {
  const start = performance.now()
  const mm = new Minimatch('a/{0..9}{0..9}{0..9}{0..9}{0..9}/b', {
    optimizationLevel,
  })
  t.equal(mm.set.length, 100_000)
  t.ok(performance.now() - start < 5000, 'should take less than 5s')
  // the first phase makes a/./c into a/c
  const dupes = new Minimatch('{a/./c,a/c,b/c}', { optimizationLevel })
  t.strictSame(dupes.globParts, [
    ['a', 'c'],
    ['b', 'c'],
  ])
  t.end()
})

t.test('rows shorter than the * positions are kept', t => {
  const mm = new Minimatch('{x/*/c,x/y/c,x}', { optimizationLevel })
  t.strictSame(mm.globParts, [['x', '*', 'c'], ['x']])
  t.end()
})

t.test('too many sets of * positions are not deduped', t => {
  // 512 rows, and 511 different sets of * positions
  const p = Array(9).fill('{*,a}').join('/')
  const mm = new Minimatch(p, { optimizationLevel })
  t.equal(mm.set.length, 512)
  t.equal(mm.match(Array(9).fill('a').join('/')), true)
  t.end()
})

t.test('** rows are not merged with rows of another shape', t => {
  const mm = new Minimatch('{**/x,x/y}', { optimizationLevel })
  t.equal(mm.match('x/y'), true)
  t.equal(mm.match('q/x'), true)
  t.equal(mm.match('x/q'), false)
  t.end()
})
