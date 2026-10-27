import t from 'tap'
import { Minimatch } from '../src/index.js'

// matchOne() matches a split path against one row of the set
t.test('a row of the set', t => {
  const m = new Minimatch('a/*/c')
  const [row] = m.set
  t.equal(m.matchOne(['a', 'b', 'c'], row!), true)
  t.equal(m.matchOne(['a', 'b', 'd'], row!), false)
  t.equal(m.matchOne(['a', 'b'], row!), false)
  t.equal(m.matchOne(['a', 'b'], row!, true), true)
  t.end()
})

t.test('globstar rows', t => {
  const m = new Minimatch('a/**/c.js')
  const [row] = m.set
  t.equal(m.matchOne(['a', 'x', 'y', 'c.js'], row!), true)
  t.equal(m.matchOne(['a', '.x', 'c.js'], row!), false)
  // a trailing '' can follow the last portion
  const ab = new Minimatch('a/**/b')
  t.equal(ab.matchOne(['a', 'x', 'b', ''], ab.set[0]!), true)
  t.equal(ab.matchOne(['a', 'x', 'c', ''], ab.set[0]!), false)
  t.end()
})

t.test('level 2 resolves the parts it is given', t => {
  const m = new Minimatch('a/c', { optimizationLevel: 2 })
  const [row] = m.set
  const parts = ['a', 'b', '..', 'c']
  t.equal(m.matchOne(parts, row!), true)
  // the parts are not changed
  t.strictSame(parts, ['a', 'b', '..', 'c'])
  t.equal(m.matchOne(['a', 'b', 'c'], row!), false)
  t.end()
})

t.test('drive letters on windows', t => {
  const m = new Minimatch('c:/x', { platform: 'win32' })
  const [row] = m.set
  t.equal(m.matchOne(['C:', 'x'], row!), true)
  t.equal(m.matchOne(['d:', 'x'], row!), false)
  t.strictSame(row, ['c:', 'x'])
  t.end()
})

t.test('a subclass that resolves paths in its own way', t => {
  class Resolver extends Minimatch {
    levelTwoFileOptimize(parts: string | string[]) {
      return super.levelTwoFileOptimize(parts)
    }
  }
  const m = new Resolver('**/*.js', { optimizationLevel: 2 })
  for (let i = 0; i < 2; i++) {
    t.equal(m.match('a/x/../b.js'), true)
    t.equal(m.match('a/.x/b.js'), false)
  }
  t.end()
})
