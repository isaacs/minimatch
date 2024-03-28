import { test } from 'tap'
import { minimatch } from '../dist/esm/index.js'

test('extglob ending with statechar', function (t) {
  t.notOk(minimatch('ax', 'a?(b*)'))
  t.ok(minimatch('ax', '?(a*|b)'))
  t.end()
})
