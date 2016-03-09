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

  patterns.forEach(function (c) {
    if (typeof c === 'string') return t.comment(c)

    var pattern = c.pattern
    var expect = c.matches.sort(alpha)
    var options = c.mmOpts
    var f = c.files
    var tapOpts = c.tapOpts || {}

    // options.debug = true
    var m = new mm.Minimatch(pattern, options)
    var r = m.makeRe()
    var expectRe = c.regexp
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
      actual,
      expect,
      JSON.stringify(pattern) + ' ' + JSON.stringify(expect),
      tapOpts
    )

    t.equal(tapOpts.re, expectRe, null, tapOpts)
  })

  t.comment('time=' + (Date.now() - start) + 'ms')
  t.end()
})

tap.test('global leak test', function (t) {
  var globalAfter = Object.keys(global).filter(function (k) {
    return (k !== '__coverage__')
  })
  t.equivalent(globalAfter, globalBefore, 'no new globals, please')
  t.end()
})

function alpha (a, b) {
  return a > b ? 1 : -1
}
