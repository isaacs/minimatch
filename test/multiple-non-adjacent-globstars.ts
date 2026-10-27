import t from 'tap'
import { minimatch } from '../src/index.js'

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
  const exclude = (c: string) =>
    alphabet.split('').filter(char => c != char)
  const path =
    alphabet
      .split('')
      .flatMap(c => exclude(c))
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

// https://github.com/isaacs/minimatch/issues/329
t.test('body sections that differ in length', async t => {
  const pattern = '**/a/b/c/**/d/**'
  for (const level of [0, 1, 2]) {
    const o = { optimizationLevel: level }
    t.equal(minimatch('a/b/c/d/e', pattern, o), true)
    t.equal(minimatch('x/a/b/c/d/e', pattern, o), true)
    t.equal(minimatch('a/b/c/x/d/e', pattern, o), true)
    t.equal(minimatch('a/b/c/e', pattern, o), false)
    t.equal(minimatch('a/b/c/d', pattern, o), false)
    t.equal(minimatch('a/b/c/d/e', '**/d/**/a/b/c/**', o), false)
    t.equal(minimatch('d/x/a/b/c/e', '**/d/**/a/b/c/**', o), true)
  }
})

t.test('the tail is not walked by the last **', async t => {
  t.equal(minimatch('.x/.x', '**/.x/**/.x'), true)
  t.equal(minimatch('a/.x/b/.x', '**/.x/**/.x'), true)
  t.equal(minimatch('a/.x/.y/.x', '**/.x/**/.x'), false)
})

t.test('partial does not try a place in the path twice', async t => {
  const pattern =
    Array.from({ length: 50 }, () => '**/a').join('/') + '/b/**'
  const path = Array(100).fill('a').join('/') + '/b/c/d/.e/a/b'
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(5)
  const p2 = '**/' + alphabet.split('').join('/**/') + '/**'
  const f2 = alphabet
    .split('')
    .flatMap(c => alphabet.split('').filter(x => x !== c))
    .join('/')
  for (const [f, p, dot, expect] of [
    [path, pattern, false, false],
    [path, pattern, true, true],
    [`${f2}/.x/y`, p2, false, false],
  ] as const) {
    const start = performance.now()
    t.equal(minimatch(f, p, { partial: true, dot }), expect)
    const dur = performance.now() - start
    t.ok(dur < 1000, 'should take less than 1s', { found: dur })
  }
})
