import t from 'tap'
import { minimatch, type MinimatchOptions } from '../src/index.js'

const o: MinimatchOptions = { nonegate: true }

// make sure we didn't break @(!(..))
t.test('do not break @!', async t => {
  t.equal(minimatch('by', '@(!(a|b))y', o), false)
  t.equal(minimatch('by', '!(a|b)y', o), false)
  t.equal(minimatch('xy', '@(!(a|b))y', o), true)
  t.equal(minimatch('xy', '!(a|b)y', o), true)

  t.equal(minimatch('xb', 'x@(!(a|b))', o), false)
  t.equal(minimatch('xb', 'x!(a|b)', o), false)
  t.equal(minimatch('xy', 'x@(!(a|b))', o), true)
  t.equal(minimatch('xy', 'x!(a|b)', o), true)

  t.equal(minimatch('x', '@(!(a|b))', o), true)
  t.equal(minimatch('x', '!(a|b)', o), true)
  t.equal(minimatch('b', '@(!(a|b))', o), false)
  t.equal(minimatch('b', '!(a|b)', o), false)
})
