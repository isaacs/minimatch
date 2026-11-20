import { assert, test } from 'ubqtest'
import { minimatch as mm } from '../dist/esm/index.js'

test('negative extglob is anchored', () => {
  const pattern = 'a/b/*/!(bar)/*'
  const nope = 'a/b/c/bar/x'
  const yup = 'a/b/c/baz/x'
  assert.equal(mm(nope, pattern), false)
  assert.equal(mm(yup, pattern), true)
})
