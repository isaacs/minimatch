// http://www.bashcookbook.com/bashinfo/source/bash-1.14.7/tests/glob-test
//
// TODO: Some of these tests do very bad things with backslashes, and will
// most likely fail badly on windows.  They should probably be skipped.

var tap = require('tap')
var globalBefore = Object.keys(global)
var mm = require('../')
var patterns = require('./patterns.js')
var regexps = patterns.regexps
var re = 0

tap.test('basic tests', function (t) {
  var start = Date.now()

  // [ pattern, [matches], MM opts, files, TAP opts]
  patterns.forEach(function (c) {
    if (typeof c === 'function') return c()
    if (typeof c === 'string') return t.comment(c)

    var pattern = c[0],
      expect = c[1].sort(alpha),
      options = c[2] || {},
      f = c[3] || patterns.files,
      tapOpts = c[4] || {}

    // options.debug = true
    var m = new mm.Minimatch(pattern, options)
    var r = m.makeRe()
    var expectRe = regexps[re++]
    expectRe = '/' + expectRe.slice(1, -1).replace(new RegExp('([^\\\\])/', 'g'), '$1\\\/') + '/'
    tapOpts.re = String(r) || JSON.stringify(r)
    tapOpts.re = '/' + tapOpts.re.slice(1, -1).replace(new RegExp('([^\\\\])/', 'g'), '$1\\\/') + '/'
    tapOpts.files = JSON.stringify(f)
    tapOpts.pattern = pattern
    tapOpts.set = m.set
    tapOpts.negated = m.negate

    var actual = mm.match(f, pattern, options)
    actual.sort(alpha)

    t.equivalent(
      actual, expect,
      JSON.stringify(pattern) + ' ' + JSON.stringify(expect),
      tapOpts
    )

    t.equal(tapOpts.re, expectRe, null, tapOpts)
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
