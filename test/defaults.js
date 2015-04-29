// http://www.bashcookbook.com/bashinfo/source/bash-1.14.7/tests/glob-test
//
// TODO: Some of these tests do very bad things with backslashes, and will
// most likely fail badly on windows.  They should probably be skipped.

var tap = require('tap')
var globalBefore = Object.keys(global)
var mm = require('../')

var patterns = require('./patterns.js')

tap.test('basic tests', function (t) {
  var start = Date.now()

  // [ pattern, [matches], MM opts, files, TAP opts]
  patterns.forEach(function (c) {
    if (typeof c === 'function') return c()
    if (typeof c === 'string') return t.comment(c)

    var pattern = c[0]
    var expect = c[1].sort(alpha)
    var options = c[2]
    var f = c[3] || patterns.files
    var tapOpts = c[4] || {}

    // options.debug = true
    var Class = mm.defaults(options).Minimatch
    var m = new Class(pattern, {})
    var r = m.makeRe()
    tapOpts.re = String(r) || JSON.stringify(r)
    tapOpts.files = JSON.stringify(f)
    tapOpts.pattern = pattern
    tapOpts.set = m.set
    tapOpts.negated = m.negate

    var actual = mm.match(f, pattern, options)
    actual.sort(alpha)

    t.equivalent(
      actual,
      expect,
      JSON.stringify(pattern) + ' ' + JSON.stringify(expect),
      tapOpts
    )
  })

  t.comment('time=' + (Date.now() - start) + 'ms')
  t.end()
})

tap.test('global leak test', function (t) {
  var globalAfter = Object.keys(global)
  t.equivalent(globalAfter, globalBefore, 'no new globals, please')
  t.end()
})

function alpha (a, b) {
  return a > b ? 1 : -1
}
