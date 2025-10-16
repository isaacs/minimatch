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

    t.same(
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
  var globalAfter = Object.keys(global).filter(function (k) {
    return (k !== '__coverage__')
  })
  t.same(globalAfter, globalBefore, 'no new globals, please')
  t.end()
})

tap.test('empty defaults obj returns original ctor', t => {
  for (var empty of [{}, undefined, null, false, 1234, 'xyz']) {
    var defmm = mm.defaults({})
    t.equal(defmm, mm)
    var Class = mm.Minimatch.defaults({})
    t.equal(Class, mm.Minimatch)
  }
  t.end()
})

tap.test('call defaults mm function', t => {
  var defmm = mm.defaults({ nocomment: true })
  t.equal(mm('# nocomment', '# nocomment'), false)
  t.equal(defmm('# nocomment', '# nocomment'), true)
  t.equal(defmm('# nocomment', '# nocomment', { nocomment: false }), false)
  var undef = defmm.defaults({ nocomment: false })
  t.equal(undef('# nocomment', '# nocomment'), false)
  var unm = new undef.Minimatch('asdf')
  t.same(unm.options, { nocomment: false })
  var UndefClass = defmm.Minimatch.defaults({ nocomment: false })
  var unmm = new UndefClass('asfd')
  t.same(unmm.options, { nocomment: false })

  var f = defmm.filter('#nc')
  t.same(['x','#nc', 'y'].filter(f), ['#nc'])
  t.same(defmm.match(['x','#nc', 'y'], '#nc'), ['#nc'])
  t.same(defmm.braceExpand('# {a,b}'), ['# a', '# b'])
  t.same(defmm.makeRe('# {a,b}'), /^(?:\#\ a|\#\ b)$/)
  t.end()
})

function alpha (a, b) {
  return a > b ? 1 : -1
}
