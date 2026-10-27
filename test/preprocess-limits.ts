// optimizationLevel 2 can not make too many patterns, or spend
// too long comparing them to each other

import t from 'tap'
import { Minimatch } from '../dist/esm/index.js'

const optimizationLevel = 2

t.test('**/.. splits stop at braceExpandMax', t => {
  const p = Array(30).fill('**/../a/b').join('/')
  const mm = new Minimatch(p, { optimizationLevel, braceExpandMax: 64 })
  t.equal(mm.set.length, 64)
  t.equal(new Minimatch(p, { optimizationLevel }).set.length, 100_000)
  t.end()
})

t.test('**/.. splits below the max', t => {
  const mm = new Minimatch('**/../a/b/**/../c/d', { optimizationLevel })
  t.equal(mm.set.length, 4)
  t.equal(mm.match('../a/b/../c/d'), true)
  t.equal(mm.match('x/a/b/y/c/d'), true)
  t.end()
})

t.test('large sets are not deduped', t => {
  const small = new Minimatch('{x,*}/{0..9}', { optimizationLevel })
  t.equal(small.set.length, 10)
  const large = new Minimatch('{x,*}/{0..999}', { optimizationLevel })
  t.equal(large.set.length, 2000)
  t.equal(large.match('x/5'), true)
  t.equal(large.match('y/999'), true)
  t.equal(large.match('.y/5'), false)
  t.end()
})
