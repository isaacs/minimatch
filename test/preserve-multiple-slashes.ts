import { assert, test } from 'ubqtest'
import { Minimatch } from '../dist/esm/index.js'

test('preserve multiple slashes', () => {
  const mm = new Minimatch('a///b', {
    preserveMultipleSlashes: true,
  })

  assert.deepEqual(mm.set, [['a', '', '', 'b']])

  assert.deepEqual(mm.globSet, ['a///b'])
})
