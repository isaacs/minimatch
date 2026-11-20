import { assert, test } from 'ubqtest'
import { minimatch } from '../dist/esm/index.js'

test('extglob ending with statechar', function () {
  assert(!minimatch('ax', 'a?(b*)'))
  assert(minimatch('ax', '?(a*|b)'))
})
