import { assert, test } from 'ubqtest'
import { minimatch } from '../src/index.js'

test('GHSA-7r86-cg39-jmmj', async () => {
  const k = 50
  const pattern =
    Array.from({ length: k }, () => '**/a').join('/') + '/b/**'
  const patha = Array(100).fill('a').join('/') + '/a'
  const pathb = Array(100).fill('a').join('/') + '/b/c/d/.e/a/b'
  // console.log({ patha, pathb, pattern })

  const starta = performance.now()
  assert.equal(minimatch(patha, pattern), false)
  const dura = performance.now() - starta
  assert(dura < 10_000, 'should take less than 10s to find mismatch')

  const startb = performance.now()
  assert.equal(minimatch(pathb, pattern, { dot: true }), true)
  const durb = performance.now() - startb
  // console.log({ dura, durb })
  assert(durb < 10_000, 'should take less than 10s to find match')

  const startc = performance.now()
  assert.equal(minimatch(pathb, pattern), false)
  const durc = performance.now() - startc
  // console.log({ dura, durb, durc })
  assert(durc < 10_000, 'should take less than 10s to find dot mismatch')
})

test('alphabetical', async () => {
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
  // console.log(path, pattern)
  const start = performance.now()
  assert.equal(
    minimatch(path, pattern, { maxGlobstarRecursion: 30 }),
    false,
  )
  assert.equal(minimatch(path, pattern), true)
  const dur = performance.now() - start
  // console.log('alphabet time', dur)
})

test('tail handling 1', async () => {
  const pattern = '.x/**/*/*/**'
  const match = '.x/.y/.z/'
  const nomatch = '.x/.y/.z'
  assert.equal(minimatch(match, pattern, { dot: true }), true)
  assert.equal(minimatch(nomatch, pattern, { dot: true }), false)
})

test('tail handling 2', async () => {
  const pattern = '.x/**/**/*'
  const match = '.x/.y/.z/'
  const nomatch = '.x/'
  assert.equal(minimatch(match, pattern, { dot: true }), true)
  assert.equal(minimatch(nomatch, pattern, { dot: true }), false)
})

// https://github.com/isaacs/minimatch/issues/329
test('body sections that differ in length', async () => {
  const pattern = '**/a/b/c/**/d/**'
  for (const level of [0, 1, 2]) {
    const o = { optimizationLevel: level }
    assert.equal(minimatch('a/b/c/d/e', pattern, o), true)
    assert.equal(minimatch('x/a/b/c/d/e', pattern, o), true)
    assert.equal(minimatch('a/b/c/x/d/e', pattern, o), true)
    assert.equal(minimatch('a/b/c/e', pattern, o), false)
    assert.equal(minimatch('a/b/c/d', pattern, o), false)
    assert.equal(minimatch('a/b/c/d/e', '**/d/**/a/b/c/**', o), false)
    assert.equal(minimatch('d/x/a/b/c/e', '**/d/**/a/b/c/**', o), true)
  }
})

test('the tail is not walked by the last **', async () => {
  assert.equal(minimatch('.x/.x', '**/.x/**/.x'), true)
  assert.equal(minimatch('a/.x/b/.x', '**/.x/**/.x'), true)
  assert.equal(minimatch('a/.x/.y/.x', '**/.x/**/.x'), false)
})

test('partial does not try a place in the path twice', async () => {
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
    assert.equal(minimatch(f, p, { partial: true, dot }), expect)
    const dur = performance.now() - start
    assert(dur < 10_000, 'should take less than 10s')
  }
})
