// http://www.bashcookbook.com/bashinfo/source/bash-1.14.7/tests/glob-test
//
// TODO: Some of these tests do very bad things with backslashes, and will
// most likely fail badly on windows.  They should probably be skipped.

import { assert, test } from 'ubqtest'
const globalBefore = Object.keys(global)
import { minimatch as mm } from '../dist/esm/index.js'
import patterns from './patterns.js'

test('basic tests', function () {
  // var start = Date.now()

  // [ pattern, [matches], MM opts, files, TAP opts]
  patterns.forEach(function (c) {
    if (typeof c === 'function') return c()
    if (typeof c === 'string') return // console.log(c)

    var pattern = c[0]
    var expect = c[1].sort(alpha)
    var options = c[2]
    var f = c[3] || patterns.files
    var tapOpts = c[4] || {}

    // options.debug = true
    var Class = mm.defaults(options).Minimatch
    var m = new Class(pattern, {})
    tapOpts.files = JSON.stringify(f)
    tapOpts.pattern = pattern
    tapOpts.set = m.set
    tapOpts.negated = m.negate

    var actual = mm.match(f, pattern, options)
    actual.sort(alpha)

    assert.deepEqual(
      actual,
      expect,
      JSON.stringify(pattern) + ' ' + JSON.stringify(expect),
    )
  })

  // console.log('time=' + (Date.now() - start) + 'ms')
})

test('global leak test', function () {
  var globalAfter = Object.keys(global).filter(function (k) {
    return k !== '__coverage__'
  })
  assert.deepEqual(globalAfter, globalBefore, 'no new globals, please')
})

test('empty defaults obj returns original ctor', () => {
  for (const empty of [{}, undefined]) {
    const defmm = mm.defaults(empty)
    assert.equal(defmm, mm)
    const Class = mm.Minimatch.defaults({})
    assert.equal(Class, mm.Minimatch)
  }
})

test('call defaults mm function', () => {
  const defmm = mm.defaults({ nocomment: true })
  assert.equal(mm('# nocomment', '# nocomment'), false)
  assert.equal(defmm('# nocomment', '# nocomment'), true)
  assert.equal(
    defmm('# nocomment', '# nocomment', { nocomment: false }),
    false,
  )
  const undef = defmm.defaults({ nocomment: false })
  assert.equal(undef('# nocomment', '# nocomment'), false)
  const unm = new undef.Minimatch('asdf')
  assert.deepEqual(unm.options, { nocomment: false })
  const UndefClass = defmm.Minimatch.defaults({ nocomment: false })
  const unmm = new UndefClass('asfd')
  assert.deepEqual(unmm.options, { nocomment: false })

  const f = defmm.filter('#nc')
  assert.deepEqual(['x', '#nc', 'y'].filter(f), ['#nc'])
  assert.deepEqual(defmm.match(['x', '#nc', 'y'], '#nc'), ['#nc'])
  assert.deepEqual(defmm.braceExpand('# {a,b}'), ['# a', '# b'])
})

test('defaults applied to minimatch.escape()', () => {
  const { escape, unescape } = mm
  const { escape: escapew, unescape: unescapew } = mm.defaults({
    windowsPathsNoEscape: true,
  })
  const { escape: escapep, unescape: unescapep } = mm.defaults({
    windowsPathsNoEscape: false,
  })
  assert.equal(escape('*'), '\\*')
  assert.equal(unescape(escape('*')), '*')
  assert.equal(escapew('*'), '[*]')
  assert.equal(unescapew(escapew('*')), '*')
  assert.equal(escapep('*'), '\\*')
  assert.equal(unescapep(escapep('*')), '*')
})

function alpha(a, b) {
  return a > b ? 1 : -1
}
