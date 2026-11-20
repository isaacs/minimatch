import { assert, test } from 'ubqtest'
import { minimatch } from '../dist/esm/index.js'

// utility function for generating long strings
var genstr = function (len, chr) {
  var result = ''
  for (var i = 0; i <= len; i++) {
    result = result + chr
  }

  return result
}

test('redos', () => {
  var exploit = '!(' + genstr(1024 * 15, '\\') + 'A)'

  // within the limits, and valid match
  assert(minimatch('A', exploit))

  // within the limits, but results in an invalid regexp
  exploit = '[!(' + genstr(1024 * 15, '\\') + 'A'
  assert(!minimatch('A', exploit))

  assert.throws(function () {
    // too long, throws TypeError
    exploit = '!(' + genstr(1024 * 64, '\\') + 'A)'
    minimatch('A', exploit)
  }, TypeError)
})
