// numeric ranges of 100 or more values are matched as one pattern
// portion, rather than expanded into one pattern each

import { assert, test } from 'ubqtest'
import { braceExpand, Minimatch } from '../dist/esm/index.js'

// match a path against each pattern of the full expansion
const expanded = (pattern: string, path: string) =>
  braceExpand(pattern, { braceExpandMax: 1e6 }).some(p =>
    new Minimatch(p, { nobrace: true }).match(path),
  )

test('same results as full expansion', () => {
  const cases: [string, string[]][] = [
    ['a/{0..999}/b', ['a/0/b', 'a/999/b', 'a/1000/b', 'a/05/b', 'a/x/b']],
    [
      'file-{001..250}.txt',
      ['file-001.txt', 'file-250.txt', 'file-1.txt'],
    ],
    ['{-50..50}', ['-50', '-0', '0', '50', '51', '-51']],
    ['x{0..99}{a,b}', ['x0a', 'x99b', 'x100a', 'x5c']],
    ['{a,{0..999}}/b', ['a/b', '500/b', 'c/b']],
    ['*{100..199}', ['x150', '150', 'x1999', 'x99']],
    // inside an extglob that repeats or negates its contents
    [
      'file-!({1..100}).txt',
      ['file-5.txt', 'file-100.txt', 'file-500.txt', 'file-x.txt'],
    ],
    ['a!({1..100})', ['a5', 'a', 'a500']],
    ['*({1..100})', ['510', '5', '1000', '101']],
    ['+({-100..100})', ['101', '-5-5', '5', '-101']],
    ['x@(y|+({1..100}))', ['x510', 'x5', 'xy']],
    // @(...) and ?(...) pick at most one value
    ['@({1..100}|x)', ['5', 'x', '101', '55']],
    ['a?({1..100})', ['a', 'a5', 'a101']],
  ]
  for (const [pattern, paths] of cases) {
    const mm = new Minimatch(pattern)
    for (const p of paths) {
      assert.equal(mm.match(p), expanded(pattern, p), `${pattern} ${p}`)
    }
  }
})

test('ranges under 100 values are expanded', () => {
  const small = new Minimatch('a/{0..98}/b')
  assert.equal(small.set.length, 99)
  assert.equal(small.hasMagic(), false)
  const big = new Minimatch('a/{0..99}/b')
  assert.equal(big.set.length, 1)
  assert.equal(big.hasMagic(), true)
  assert.equal(big.match('a/99/b'), true)
})

test('ranges that are not marked', () => {
  assert.equal(new Minimatch('\\{0..999}').match('{0..999}'), true)
  assert.equal(new Minimatch('${0..999}').match('${0..999}'), true)
  assert.equal(
    new Minimatch('{0..999}', { nobrace: true }).match('5'),
    false,
  )
  // not safe integers, so brace expansion makes them
  const unsafe = new Minimatch('{0..9007199254740993}', {
    braceExpandMax: 5,
  })
  assert.equal(unsafe.set.length, 5)
})

test('a range that might be in a [...] class is expanded', () => {
  const mm = new Minimatch('[ab]{0..999}')
  assert.equal(mm.match('a5'), true)
  assert.equal(mm.match('a1000'), false)
  // a class after the range is fine
  const after = new Minimatch('{0..999}[ab]')
  assert.equal(after.set.length, 1)
  assert.equal(after.match('999b'), true)
})

test('a range in a !, * or + extglob is expanded', () => {
  assert.equal(new Minimatch('a!({1..100})').globSet.length, 100)
  assert.equal(new Minimatch('*({1..100})').globSet.length, 100)
  assert.equal(new Minimatch('x@(y|+({1..100}))').globSet.length, 100)
  // not after the extglob is closed, or in @(...) or ?(...)
  assert.equal(new Minimatch('*(a){1..100}').globSet.length, 1)
  assert.equal(new Minimatch('@({1..100}|x)').globSet.length, 1)
  assert.equal(new Minimatch('?({1..100})').globSet.length, 1)
  // an escaped paren does not open an extglob
  assert.equal(new Minimatch('*\\({1..100})').globSet.length, 1)
  // with noext, there are no extglobs
  assert.equal(
    new Minimatch('*({1..100})', { noext: true }).globSet.length,
    1,
  )
})

test('the mark is a char that is not in the pattern', () => {
  const mm = new Minimatch('/{0..999}')
  assert.equal(mm.match('/5'), true)
  assert.equal(mm.match('/1000'), false)
  // with every private use char in the pattern, ranges are expanded
  let all = ''
  for (let c = 0xe000; c <= 0xf8ff; c++) all += String.fromCharCode(c)
  const full = new Minimatch(`{${all},{0..199}}`)
  assert.equal(full.set.length, 201)
  assert.equal(full.match('150'), true)
})

test('with negation and optimizationLevel 2', () => {
  const neg = new Minimatch('!x/{0..999}')
  assert.equal(neg.match('x/7'), false)
  assert.equal(neg.match('x/a'), true)
  const mm = new Minimatch('**/{1..200}/*.js', { optimizationLevel: 2 })
  assert.equal(mm.set.length, 1)
  assert.equal(mm.match('a/b/150/c.js'), true)
  assert.equal(mm.match('a/b/201/c.js'), false)
})
