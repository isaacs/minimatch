import { assert, test } from 'ubqtest'
import { minimatch, type MinimatchOptions } from '../src/index.js'

const o: MinimatchOptions = { nonegate: true }

// make sure we didn't break @(!(..))
test('do not break @!', async () => {
  assert.equal(minimatch('by', '@(!(a|b))y', o), false)
  assert.equal(minimatch('by', '!(a|b)y', o), false)
  assert.equal(minimatch('xy', '@(!(a|b))y', o), true)
  assert.equal(minimatch('xy', '!(a|b)y', o), true)

  assert.equal(minimatch('xb', 'x@(!(a|b))', o), false)
  assert.equal(minimatch('xb', 'x!(a|b)', o), false)
  assert.equal(minimatch('xy', 'x@(!(a|b))', o), true)
  assert.equal(minimatch('xy', 'x!(a|b)', o), true)

  assert.equal(minimatch('x', '@(!(a|b))', o), true)
  assert.equal(minimatch('x', '!(a|b)', o), true)
  assert.equal(minimatch('b', '@(!(a|b))', o), false)
  assert.equal(minimatch('b', '!(a|b)', o), false)
})
