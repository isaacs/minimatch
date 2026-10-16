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
t.test('body sections of different lengths', async t => {
  const cases: [string, string, boolean][] = [
    ['a/b/c/d/e', '**/a/b/c/**/d/**', true],
    ['a/b/c/x/d/e', '**/a/b/c/**/d/**', true],
    ['x/a/b/c/d/e', '**/a/b/c/**/d/**', true],
    ['a/b/c/d', '**/a/b/c/**/d/**', false],
    ['a/b/c/d/e', '**/a/**/b/c/d/**', true],
    ['a/b/c/d/e/f', '**/a/**/c/d/**/e/**', true],
    ['a/b/c/d/e/f', '**/a/b/**/d/**/f', true],
  ]
  for (const [file, pattern, expect] of cases) {
    t.equal(minimatch(file, pattern), expect, `${file} ${pattern}`)
  }

  // partial: the file may end before the later sections, so a section
  // can start anywhere in it, and the walk still checks every part it
  // skips over (dot files are not matched by ** without dot:true)
  const partialCases: [string, string, boolean][] = [
    ['a/b/c', '**/a/b/c/**/d/**', true],
    ['a/b/c/x', '**/a/b/c/**/d/**', true],
    ['a/b', '**/a/b/c/**/d/**', true],
    ['a/.d', '**/a/b', false],
    ['a/b/a/a/a/.d', '**/b/**/a/**/**', false],
  ]
  for (const [file, pattern, expect] of partialCases) {
    t.equal(
      minimatch(file, pattern, { partial: true }),
      expect,
      `partial ${file} ${pattern}`,
    )
  }
})
