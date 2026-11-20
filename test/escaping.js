import { assert, test } from 'ubqtest'
import { minimatch } from '../dist/esm/index.js'

// test all characters with codes in range [mincc,maxcc]
var mincc = 0x20
var maxcc = 0xff
// except listed in exceptions array
var exceptions = ['/', '\\']
var pre = 'x' // prepended to the testable character
var post = 'y' // appended to the testable character

function escapeChar(cc) {
  return '"\\u' + ('000' + cc.toString(16).toUpperCase()).slice(-4) + '"'
}

test('escaping tests', function () {
  for (var cc = mincc; cc <= maxcc; ++cc) {
    var cp = String.fromCharCode(cc)
    if (exceptions.indexOf(cp) === -1) {
      var str = pre + cp + post
      var pattern = '*\\' + cp + '*'
      var msg =
        JSON.stringify(str) +
        ' (for codepoint ' +
        escapeChar(cc) +
        ')' +
        ' should match pattern ' +
        JSON.stringify(pattern)
      assert.equal(minimatch(str, pattern), true, msg)
    }
  }
})

test('class escaping tests', function () {
  for (var cc = mincc; cc <= maxcc; ++cc) {
    var cp = String.fromCharCode(cc)
    if (exceptions.indexOf(cp) === -1) {
      var str = pre + cp + post
      var pattern = '*[\\' + cp + ']*'
      var msg =
        JSON.stringify(str) +
        ' (for codepoint ' +
        escapeChar(cc) +
        ')' +
        ' should match pattern ' +
        JSON.stringify(pattern)
      assert.equal(minimatch(str, pattern), true, msg)
    }
  }
})

test('escapes in *.ext are not compared literally', () => {
  assert.equal(minimatch('a.js', '*.j\\s'), true)
  assert.equal(minimatch('a.j\\s', '*.j\\s'), false)
  assert.equal(minimatch('a.JS', '*.j\\s', { nocase: true }), true)
})
