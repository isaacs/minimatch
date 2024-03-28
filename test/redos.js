import t from 'tap'
import { minimatch } from '../dist/esm/index.js'

// utility function for generating long strings
var genstr = function (len, chr) {
  var result = ''
  for (var i = 0; i <= len; i++) {
    result = result + chr
  }

  return result
}

var exploit = '!(' + genstr(1024 * 15, '\\') + 'A)'

// within the limits, and valid match
t.ok(minimatch('A', exploit))

// within the limits, but results in an invalid regexp
exploit = '[!(' + genstr(1024 * 15, '\\') + 'A'
t.notOk(minimatch('A', exploit))

t.throws(function () {
  // too long, throws TypeError
  exploit = '!(' + genstr(1024 * 64, '\\') + 'A)'
  minimatch('A', exploit)
}, TypeError)
