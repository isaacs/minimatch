import { assert, test } from 'ubqtest'
import { minimatch as mm } from '../dist/esm/index.js'

var types = '!?+*@'.split('')

types.forEach(function (type) {
  test(type, function () {
    assert(mm(type + '(a|B', type + '(a|B', { nonegate: true }))
    assert(!mm(type + '(a|B', 'B', { nonegate: true }))
  })
})
