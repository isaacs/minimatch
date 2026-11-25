// http://www.bashcookbook.com/bashinfo/source/bash-1.14.7/tests/glob-test
//
// TODO: Some of these tests do very bad things with backslashes, and will
// most likely fail badly on windows.  They should probably be skipped.

import { any, assert, describe, test } from 'ubqtest'
const globalBefore = Object.keys(global)
import { GLOBSTAR, minimatch } from '../dist/esm/index.js'
import patterns from './patterns.js'

const mm =
  process.env._MINIMATCH_TEST_OPTIMIZATION_LEVEL ?
    minimatch.defaults({
      optimizationLevel: +process.env._MINIMATCH_TEST_OPTIMIZATION_LEVEL,
    })
  : minimatch

const optimizationLevel = +(
  process.env._MINIMATCH_TEST_OPTIMIZATION_LEVEL ?? 1
)

test('basic tests', function () {
  //var start = Date.now()

  // [ pattern, [matches], MM opts, files, TAP opts]
  patterns.forEach(function (c) {
    if (typeof c === 'function') return c()
    if (typeof c === 'string') return //console.log(c)

    var pattern = c[0],
      expect = c[1].sort(alpha),
      options = c[2] || {},
      f = c[3] || patterns.files,
      tapOpts = c[4] || {}

    // options.debug = true
    var m = new mm.Minimatch(pattern, options)
    assert.snapshot(m.hasMagic(), pattern + ' hasMagic')
    tapOpts.files = JSON.stringify(f)
    tapOpts.glob = pattern
    tapOpts.set = m.set
    tapOpts.globSet = m.globSet
    tapOpts.negated = m.negate
    const o = Object.entries(options)
      .filter(([_, v]) => v)
      .map(([k]) => k)
    if (o.length) {
      tapOpts.flags = o
    }

    var actual = mm.match(f, pattern, options)
    actual.sort(alpha)

    if (optimizationLevel > 0) {
      assert.deepEqual(
        actual,
        expect,
        JSON.stringify(pattern) +
          ' ' +
          JSON.stringify(expect) +
          (options ? ' ' + JSON.stringify(options) : ''),
      )
    } else {
      // optimization level 0 just doesn't match a lot of stuff
      // quite the same way, so handle that with snapshots.
      assert.snapshot(
        actual,
        JSON.stringify(pattern) + ' ' + JSON.stringify(expect),
      )
    }
  })

  //console.log('time=' + (Date.now() - start) + 'ms')
})

test('global leak test', function () {
  var globalAfter = Object.keys(global).filter(function (k) {
    return k !== '__coverage__' && k !== '__core-js_shared__'
  })
  assert.deepEqual(globalAfter, globalBefore, 'no new globals, please')
})

test('invalid patterns', () => {
  const toolong = 'x'.repeat(64 * 1024) + 'y'
  const expectTooLong = { message: 'pattern is too long' }
  assert.throws(() => mm.braceExpand(toolong), expectTooLong)
  assert.throws(() => new mm.Minimatch(toolong), expectTooLong)
  assert.throws(() => mm('xy', toolong), expectTooLong)
  assert.throws(() => mm.match(['xy'], toolong), expectTooLong)

  const invalid = { message: 'invalid pattern' }
  const invalids = [
    null,
    1234,
    NaN,
    Infinity,
    undefined,
    { a: 1 },
    true,
    false,
  ]
  for (const i of invalids) {
    assert.throws(() => mm.braceExpand(i), invalid)
    assert.throws(() => new mm.Minimatch(i), invalid)
    assert.throws(() => mm('xy', i), invalid)
    assert.throws(() => mm.match(['xy'], i), invalid)
  }
})

test('nocomment matches nothing', () => {
  assert.equal(mm('#comment', '#comment', { nocomment: false }), false)
  assert.equal(mm('#comment', '#comment', { nocomment: true }), true)
})

test('filter function', () => {
  assert.deepEqual(['a', 'b', 'c'].filter(mm.filter('@(a|b)')), ['a', 'b'])
})

test('whitespace handling', () => {
  assert.equal(mm('x/y', 'y'), false)
  assert.equal(mm('x/y', 'y', { matchBase: true }), true)
  assert.equal(mm('x/ ', ' '), false)
  assert.equal(mm('x/ ', ' ', { matchBase: true }), true)
  assert.equal(mm('x/', ''), false)
  assert.equal(mm('x/', '', { matchBase: true }), false)
  assert.equal(mm('', ''), true)
  assert.equal(mm(' ', ''), false)
  assert.equal(mm('', ' '), false)
  assert.equal(mm(' ', ' '), true)
})

test('in noglobstar mode, ** is equivalent to *', () => {
  const set2s = new mm.Minimatch('**', { noglobstar: true }).set
  const set1s = new mm.Minimatch('*', { noglobstar: true }).set
  assert.deepEqual(set2s, set1s)
})

test('flipNegate', () => {
  assert.equal(mm('x', '!x', { flipNegate: true }), true)
  assert.equal(mm('x', '!!x', { flipNegate: true }), true)
  assert.equal(mm('x', 'x', { flipNegate: true }), true)

  assert.equal(mm('x', '!y', { flipNegate: true }), false)
  assert.equal(mm('x', '!!y', { flipNegate: true }), false)
  assert.equal(mm('x', 'y', { flipNegate: true }), false)
})

function alpha(a, b) {
  return a > b ? 1 : -1
}

test('GLOBSTAR marker exposed', () => {
  assert.match(mm.GLOBSTAR, any.symbol)
})

describe('globstar matches zero or more path portions', () => {
  const cases = {
    'path/**': {
      'path/x.html': true,
      'path/x/y.html': true,
      'path/x/y/z.html': true,
      'path//x.html': true,
      'path//x//y.html': true,
      'path//x//y//z.html': true,
      'path.html': false,
      'pathx.html': false,
      'pathx/y.html': false,
      'pathx/y/z.html': false,
    },
    'path/**/*.html': {
      'path/x.html': true,
      'path/x/y.html': true,
      'path/x/y/z.html': true,
      'path//x.html': true,
      'path//x//y.html': true,
      'path//x//y//z.html': true,
      'path.html': false,
      'pathx.html': false,
      'pathx/y.html': false,
      'pathx/y/z.html': false,
    },
    'path/**/**/*.html': {
      'path/x.html': true,
      'path/x/y.html': true,
      'path/x/y/z.html': true,
      'path//x.html': true,
      'path//x//y.html': true,
      'path//x//y//z.html': true,
      'path.html': false,
      'pathx.html': false,
      'pathx/y.html': false,
      'pathx/y/z.html': false,
    },
    '**/*.html': {
      'path/x.html': true,
      'path/x/y.html': true,
      'path/x/y/z.html': true,
      'path//x.html': true,
      'path//x//y.html': true,
      'path//x//y//z.html': true,
      'path.html': true,
      'pathx.html': true,
      'pathx/y.html': true,
      'pathx/y/z.html': true,
      '/z.html': true,
    },
    '**/**/*.html': {
      'path/x.html': true,
      'path/x/y.html': true,
      'path/x/y/z.html': true,
      'path//x.html': true,
      'path//x//y.html': true,
      'path//x//y//z.html': true,
      'path.html': true,
      'pathx.html': true,
      'pathx/y.html': true,
      'pathx/y/z.html': true,
      '/z.html': true,
    },
  }
  for (const [pattern, set] of Object.entries(cases)) {
    test(pattern, () => {
      for (const [path, res] of Object.entries(set)) {
        assert.equal(mm(path, pattern), res, path)
      }
    })
  }
})

test('do not create empty pattern via ..', () => {
  const m = new mm.Minimatch('*/..')
  assert.equal(m.globParts.length, 1)
  assert.notEqual(m.globParts[0].length, 0)
})

test('option to only nocase regexps, not strings', () => {
  assert.match(
    new mm.Minimatch('test/*.js', {
      nocase: true,
      nocaseMagicOnly: true,
    }).set,
    [['test', { pattern: '*.js' }]],
  )
  assert.match(
    new mm.Minimatch('test/*.js', {
      nocase: true,
    }).set,
    [[{ pattern: 'test' }, { pattern: '*.js' }]],
  )
})

test('preprocess out multiple ** portions, opt 0', () => {
  const { set } = new mm.Minimatch('test/**/**/**/**/**/**/*.js', {
    optimizationLevel: 0,
  })
  assert.match(set, [['test', GLOBSTAR, { pattern: '*.js' }]])
})

test('preprocess out multiple ** portions, opt 1', () => {
  const { set } = new mm.Minimatch('test/**/**/**/**/**/**/*.js', {
    optimizationLevel: 1,
  })
  assert.match(set, [['test', GLOBSTAR, { pattern: '*.js' }]])
})

test('preprocess out multiple ** portions, opt 2', () => {
  const m = new mm.Minimatch('test/**/**/**/**/**/**/*.js', {
    optimizationLevel: 2,
  })
  assert.match(m.set, [['test', GLOBSTAR, { pattern: '*.js' }]])

  // optimize the file, too
  assert.equal(m.match('test//.//a/x.js'), true)
})
