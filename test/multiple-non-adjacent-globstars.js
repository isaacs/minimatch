const t = require('tap')
const { minimatch } = require('../dist/cjs/index.js')
const performance = require('perf_hooks').performance

t.test('GHSA-7r86-cg39-jmmj', async t => {
  const k = 50
  const pattern =
    Array.from({ length: k }, () => '**/a').join('/') + '/b/**'
  const patha = Array(100).fill('a').join('/') + '/a'
  const pathb = Array(100).fill('a').join('/') + '/b/c/d/.e/a/b'
  t.comment({ patha, pathb, pattern })

  const starta = performance.now()
  t.equal(minimatch(patha, pattern), false)
  const dura = performance.now() - starta
  t.ok(dura < 1000, 'should take less than 1s to find mismatch', {
    found: dura,
    wanted: '<1000',
  })

  const startb = performance.now()
  t.equal(minimatch(pathb, pattern, { dot: true }), true)
  const durb = performance.now() - startb
  t.comment({ dura, durb })
  t.ok(durb < 1000, 'should take less than 1s to find match', {
    found: durb,
    wanted: '<1000',
  })

  const startc = performance.now()
  t.equal(minimatch(pathb, pattern), false)
  const durc = performance.now() - startc
  t.comment({ dura, durb, durc })
  t.ok(durc < 1000, 'should take less than 1s to find dot mismatch', {
    found: durc,
    wanted: '<1000',
  })
})

t.test('alphabetical', async t => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(5)
  const pattern = '**/' + alphabet.split('').join('/**/') + '/**'
  const exclude = (c) =>
    alphabet.split('').filter(char => c != char)
  const path =
    alphabet
      .split('')
      .map(c => exclude(c))
      .reduce((set, c) => set.concat(c), [])
      .join('/') +
    '/' +
    exclude('a').concat('a').join('/')
  t.comment(path, pattern)
  const start = performance.now()
  t.equal(minimatch(path, pattern, { maxGlobstarRecursion: 30 }), false)
  t.equal(minimatch(path, pattern), true)
  const dur = performance.now() - start
  t.comment('alphabet time', dur)
})

t.test('tail handling 1', async t => {
  const pattern = '.x/**/*/*/**'
  const match = '.x/.y/.z/'
  const nomatch = '.x/.y/.z'
  t.equal(minimatch(match, pattern, { dot: true }), true)
  t.equal(minimatch(nomatch, pattern, { dot: true }), false)
})

t.test('tail handling 2', async t => {
  const pattern = '.x/**/**/*'
  const match = '.x/.y/.z/'
  const nomatch = '.x/'
  t.equal(minimatch(match, pattern, { dot: true }), true)
  t.equal(minimatch(nomatch, pattern, { dot: true }), false, {
    file: nomatch,
    pattern,
  })
})

t.test('head/tail edge cases', async t => {
  // head mismatch: head 'a' does not match file starting with 'x'
  t.equal(minimatch('x/c', 'a/**/c'), false)
  // tail direct match: tail 'a' matches file[last] on first try
  t.equal(minimatch('b/a', '**/a'), true)
  // tail fallback failure: file ends in '/' but segment before '' is not 'a'
  t.equal(minimatch('b/c/', '**/a'), false)
  // tail too long: head + tail longer than entire file
  t.equal(minimatch('a', 'a/**/b/c'), false)
})
