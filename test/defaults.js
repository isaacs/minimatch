// http://www.bashcookbook.com/bashinfo/source/bash-1.14.7/tests/glob-test
//
// TODO: Some of these tests do very bad things with backslashes, and will
// most likely fail badly on windows.  They should probably be skipped.

import t from 'tap'
const globalBefore = Object.keys(global)
import { minimatch as mm } from '../dist/esm/index.js'
import patterns from './patterns.js'

t.test('basic tests', function (t) {
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

t.test('global leak test', function (t) {
  var globalAfter = Object.keys(global).filter(function (k) {
    return k !== '__coverage__'
  })
  t.same(globalAfter, globalBefore, 'no new globals, please')
  t.end()
})

t.test('empty defaults obj returns original ctor', t => {
  for (const empty of [{}, undefined]) {
    const defmm = mm.defaults(empty)
    t.equal(defmm, mm)
    const Class = mm.Minimatch.defaults({})
    t.equal(Class, mm.Minimatch)
  }
  t.end()
})

t.test('call defaults mm function', t => {
  const defmm = mm.defaults({ nocomment: true })
  t.equal(mm('# nocomment', '# nocomment'), false)
  t.equal(defmm('# nocomment', '# nocomment'), true)
  t.equal(defmm('# nocomment', '# nocomment', { nocomment: false }), false)
  const undef = defmm.defaults({ nocomment: false })
  t.equal(undef('# nocomment', '# nocomment'), false)
  const unm = new undef.Minimatch('asdf')
  t.same(unm.options, { nocomment: false })
  const UndefClass = defmm.Minimatch.defaults({ nocomment: false })
  const unmm = new UndefClass('asfd')
  t.same(unmm.options, { nocomment: false })

  const f = defmm.filter('#nc')
  t.same(['x', '#nc', 'y'].filter(f), ['#nc'])
  t.same(defmm.match(['x', '#nc', 'y'], '#nc'), ['#nc'])
  t.same(defmm.braceExpand('# {a,b}'), ['# a', '# b'])
  t.same(defmm.makeRe('# {a,b}'), /^(?:\#\ a|\#\ b)$/)
  t.end()
})

t.test('defaults applied to minimatch.escape()', t => {
  const { escape, unescape } = mm
  const { escape: escapew, unescape: unescapew } = mm.defaults({
    windowsPathsNoEscape: true,
  })
  const { escape: escapep, unescape: unescapep } = mm.defaults({
    windowsPathsNoEscape: false,
  })
  t.equal(escape('*'), '\\*')
  t.equal(unescape(escape('*')), '*')
  t.equal(escapew('*'), '[*]')
  t.equal(unescapew(escapew('*')), '*')
  t.equal(escapep('*'), '\\*')
  t.equal(unescapep(escapep('*')), '*')
  t.end()
})

t.test('defaults applied to AST class', t => {
  const { AST } = mm
  const { AST: ASTx } = mm.defaults({ nocaseMagicOnly: true, nocase: true })
  t.equal(new AST().options.nocaseMagicOnly, undefined)
  t.equal(new ASTx().options.nocaseMagicOnly, true)
  const fg = ASTx.fromGlob('*')
  t.equal(fg.options.nocaseMagicOnly, true)
  t.end()
})

function alpha(a, b) {
  return a > b ? 1 : -1
}
