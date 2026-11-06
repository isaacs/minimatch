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

t.test('a range that brace expansion leaves as text is not marked', t => {
  // brace expansion does not expand anything after a group it leaves
  // as text, such as {date}, so the range is literal text too.
  const cases: [string, string[]][] = [
    [
      'logs/{date}/part-{000..999}.gz',
      ['logs/{date}/part-{000..999}.gz', 'logs/{date}/part-005.gz'],
    ],
    ['x{a}{1..200}', ['x{a}{1..200}', 'x{a}5']],
    ['f{}{1..150}', ['f{}{1..150}', 'f{}5']],
    ['{1..{0..150}}', ['{1..{0..150}}', '{1..42}']],
    ['{x{1..200}}', ['{x{1..200}}', '{x5}']],
    ['${a{1..200}}', ['${a{1..200}}', '${a5}']],
  ]
  for (const [pattern, paths] of cases) {
    const mm = new Minimatch(pattern)
    for (const p of paths) {
      t.equal(mm.match(p), expanded(pattern, p), `${pattern} ${p}`)
    }
  }
  t.equal(
    new Minimatch('logs/{date}/part-{000..999}.gz').match(
      'logs/{date}/part-{000..999}.gz',
    ),
    true,
  )
  t.end()
})

t.test('a range in an extglob group is expanded', t => {
  // expanding first makes one pattern per value, so !(x1), !(x2), ...
  // and *(x1), *(x2), ... which is not the same as one group.
  const cases: [string, string[]][] = [
    ['a!(x{1..200})', ['ax5', 'ax201', 'ay']],
    ['*.!(bak{1..100})', ['f.bak7', 'f.txt']],
    ['*(x{1..200})', ['x1x2', 'x1x1', 'x7', '']],
    ['+(x{1..200})', ['x1x2', 'x3x3', 'x9']],
    ['@(x{1..200})', ['x5', 'x201']],
  ]
  for (const [pattern, paths] of cases) {
    const mm = new Minimatch(pattern)
    for (const p of paths) {
      t.equal(mm.match(p), expanded(pattern, p), `${pattern} ${p}`)
    }
  }
  t.equal(new Minimatch('a!(x{1..200})').match('ax5'), true)
  t.equal(new Minimatch('*(x{1..200})').match('x1x2'), false)
  // a second range in the same portion, inside a group. The full
  // expansion is 10,000 rows, so braceExpandMax keeps the first 100:
  // 0!(0) to 0!(99). Marked as one group, 050 would not match.
  const second = new Minimatch('{0..99}!({0..99})', {
    braceExpandMax: 100,
  })
  t.equal(second.match('050'), true)
  // a ) that does not close a group does not hide the group
  t.equal(new Minimatch(')!({100..199})').match(')150'), true)
  t.equal(new Minimatch('\\(!({100..199})').match('(150'), true)
  // a group that is closed before the range does not hold it
  const closed = new Minimatch('@(a|b)x{100..199}')
  t.equal(closed.set.length, 1)
  t.equal(closed.match('ax150'), true)
  t.end()
})

t.test('a range whose outer group expands only for some values', t => {
  // {2..5{a,{-70..29}}} makes {2..5-70} as text, but {2..529} as a
  // numeric range, so the inner range is not marked.
  const pattern = '{2..5{a,{-70..29}}}'
  const mm = new Minimatch(pattern)
  for (const p of ['119', '{2..5a}', '{2..5-70}', '600']) {
    t.equal(mm.match(p), expanded(pattern, p), p)
  }
  t.equal(mm.match('119'), true)
  t.end()
})

t.test('a range in a windows UNC root is expanded', t => {
  const opts = { platform: 'win32', nocase: true } as const
  const unc = new Minimatch('//host{000..150}/share/x', opts)
  t.equal(unc.match('//host042/share/x'), true)
  t.equal(unc.match('//host151/share/x'), false)
  const share = new Minimatch('//host/s{000..150}/x', opts)
  t.equal(share.match('//host/s042/x'), true)
  // a range after the root is still matched without expanding
  const after = new Minimatch('//host/share/{000..150}', opts)
  t.equal(after.set.length, 1)
  t.equal(after.match('//host/share/042'), true)
  // the root of a long UNC path is 6 portions
  const long = new Minimatch('//?/UNC/host{000..150}/share/x', opts)
  t.equal(long.match('//?/UNC/host042/share/x'), true)
  t.equal(long.match('//?/UNC/host151/share/x'), false)
  // a drive root has no range, so the range is not expanded
  const drive = new Minimatch('c:/d{000..150}/x', opts)
  t.equal(drive.set.length, 1)
  t.equal(drive.match('c:/d042/x'), true)
  t.end()
})

t.test('small ranges next to a marked range are still expanded', t => {
  const mm = new Minimatch('x{0..5}/{0..150}')
  t.equal(mm.set.length, 6)
  for (const p of ['x0/150', 'x5/0', 'x6/5', 'x3/151']) {
    t.equal(mm.match(p), expanded('x{0..5}/{0..150}', p), p)
  }
  t.end()
})
