// numeric ranges of 100 or more values are matched as one pattern
// portion, rather than expanded into one pattern each

import t from 'tap'
import { braceExpand, Minimatch } from '../dist/esm/index.js'

// match a path against each pattern of the full expansion
const expanded = (pattern: string, path: string) =>
  braceExpand(pattern, { braceExpandMax: 1e6 }).some(p =>
    new Minimatch(p, { nobrace: true }).match(path),
  )

t.test('same results as full expansion', t => {
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
  ]
  for (const [pattern, paths] of cases) {
    const mm = new Minimatch(pattern)
    for (const p of paths) {
      t.equal(mm.match(p), expanded(pattern, p), `${pattern} ${p}`)
    }
  }
  t.end()
})

t.test('ranges under 100 values are expanded', t => {
  const small = new Minimatch('a/{0..98}/b')
  t.equal(small.set.length, 99)
  t.equal(small.hasMagic(), false)
  const big = new Minimatch('a/{0..99}/b')
  t.equal(big.set.length, 1)
  t.equal(big.hasMagic(), true)
  t.equal(big.match('a/99/b'), true)
  t.end()
})

t.test('ranges that are not marked', t => {
  t.equal(new Minimatch('\\{0..999}').match('{0..999}'), true)
  t.equal(new Minimatch('${0..999}').match('${0..999}'), true)
  t.equal(new Minimatch('{0..999}', { nobrace: true }).match('5'), false)
  // not safe integers, so brace expansion makes them
  const unsafe = new Minimatch('{0..9007199254740993}', {
    braceExpandMax: 5,
  })
  t.equal(unsafe.set.length, 5)
  t.end()
})

t.test('a range that might be in a [...] class is expanded', t => {
  const mm = new Minimatch('[ab]{0..999}')
  t.equal(mm.match('a5'), true)
  t.equal(mm.match('a1000'), false)
  // a class after the range is fine
  const after = new Minimatch('{0..999}[ab]')
  t.equal(after.set.length, 1)
  t.equal(after.match('999b'), true)
  t.end()
})

t.test('the mark is a char that is not in the pattern', t => {
  const mm = new Minimatch('/{0..999}')
  t.equal(mm.match('/5'), true)
  t.equal(mm.match('/1000'), false)
  // with every private use char in the pattern, ranges are expanded
  let all = ''
  for (let c = 0xe000; c <= 0xf8ff; c++) all += String.fromCharCode(c)
  const full = new Minimatch(`{${all},{0..199}}`)
  t.equal(full.set.length, 201)
  t.equal(full.match('150'), true)
  t.end()
})

t.test('with negation and optimizationLevel 2', t => {
  const neg = new Minimatch('!x/{0..999}')
  t.equal(neg.match('x/7'), false)
  t.equal(neg.match('x/a'), true)
  const mm = new Minimatch('**/{1..200}/*.js', { optimizationLevel: 2 })
  t.equal(mm.set.length, 1)
  t.equal(mm.match('a/b/150/c.js'), true)
  t.equal(mm.match('a/b/201/c.js'), false)
  t.end()
})
