import t from 'tap'
import { AST, minimatch, Minimatch } from '../src/index.js'

const cases: [string, string[], string[]][] = [
  ['@(a/|b)', ['b'], ['a', 'a/', 'a/b', '@(a/|b)']],
  ['@(a|a/b)/*', ['a/b', 'a/x'], ['a/b/c', 'b/x']],
  ['@(a/b|b/c|d)', ['d'], ['a/b', 'b/c', 'a', 'b']],
  ['x@(a/b)y', [], ['xy', 'xay', 'x@(a/b)y']],
  ['x+(a/b)y', [], ['xy', 'xay', 'x+(a/b)y']],
  ['x?(a/b)y', ['xy'], ['xay', 'xa/by']],
  ['x*(a/b)y', ['xy'], ['xay', 'xa/by']],
  ['x!(a/b)y', ['xy', 'xay', 'xby'], ['xa/by']],
  ['x!(a/b|b)y', ['xy', 'xay'], ['xby', 'xa/by']],
  ['x!(@(a/b))y', ['xy', 'xay'], ['xa/by']],
  ['x@(@(a/b))y', [], ['xy', 'xay']],
  ['x+(@(a/b))y', [], ['xy', 'xay']],
  ['x?(@(a/b))y', ['xy'], ['xay']],
  ['x*(@(a/b))y', ['xy'], ['xay']],
  ['x!(a)@(b/c|d)', ['xd', 'xbd'], ['xad', 'xab/c']],
  ['@(x@(a/b|c)|d)', ['xc', 'd'], ['xa/b', 'x', 'xa']],
  ['@(x@(a/b)|d)', ['d'], ['x', 'xa/b']],
  ['@(a/b)', [], ['a/b', '@()', '@(a/b)', '']],
  ['@(a/|b)/@(c/|d)', ['b/d'], ['a/d', 'b/c']],
  ['{x,@(a/|b)}/z', ['x/z', 'b/z'], ['a/z']],
]

for (const [pattern, matches, misses] of cases) {
  t.test(pattern, t => {
    for (const optimizationLevel of [0, 1, 2]) {
      const options = { optimizationLevel, nonegate: true }
      const m = new Minimatch(pattern, options)
      const re = m.makeRe()
      for (const path of matches) {
        t.ok(minimatch(path, pattern, options), `match ${path}`)
        t.ok(re && re.test(path), `makeRe ${path}`)
      }
      for (const path of misses) {
        t.notOk(minimatch(path, pattern, options), `reject ${path}`)
        t.notOk(re && re.test(path), `makeRe reject ${path}`)
      }
    }
    t.end()
  })
}

t.test('ordinary syntax and path splitting', t => {
  t.ok(minimatch('@(a/|b)', '@(a/|b)', { noext: true }))
  t.ok(minimatch('@(a/b', '@(a/b'))
  t.ok(minimatch('@(a/b)', '\\@(a/b)'))
  t.ok(minimatch('[/b', '[/@(a/|b)'))
  t.ok(minimatch('b/x', '@(a/|b)//x'))
  t.ok(minimatch('/b', '///@(a/|b)', { platform: 'win32' }))
  t.ok(minimatch('b', '@(a\\/|b)'))
  t.notOk(
    minimatch('b/x', '@(a/|b)//x', { preserveMultipleSlashes: true }),
  )
  t.ok(minimatch('b//x', '@(a/|b)//x', { preserveMultipleSlashes: true }))
  t.ok(minimatch('C:/b/x', 'C:/@(a/|b)/x', { platform: 'win32' }))
  t.ok(
    minimatch('//srv/share/b', '//srv/share/@(a/|b)', {
      platform: 'win32',
    }),
  )
  t.notOk(minimatch('.b', '@(a/|*)'))
  t.ok(minimatch('.b', '@(a/|*)', { dot: true }))
  t.notOk(minimatch('..', '@(a/|*)', { dot: true }))
  t.end()
})

t.test(
  'deep slash-bearing alternatives do not consume the call stack',
  t => {
    for (const depth of [2000, 16000]) {
      const bad = '@(/'.repeat(depth) + 'a' + ')'.repeat(depth)
      for (const maxExtglobRecursion of [0, 2]) {
        const options = { nonegate: true, maxExtglobRecursion }
        t.notOk(minimatch('a', bad, options))
        t.ok(minimatch('b', `@(${bad}|b)`, options))
        t.notOk(minimatch('a', `x!(a)${bad}`, options))
        const re = new Minimatch(`@(${bad}|b)`, options).makeRe()
        t.ok(re && re.test('b'))
      }
    }
    t.end()
  },
)

t.test('deep surviving alternatives remain matchable', t => {
  const depth = 3000
  const patterns = [
    '@(a/|'.repeat(depth) + 'b' + ')'.repeat(depth),
    '@('.repeat(depth) + 'a/|b' + ')'.repeat(depth),
  ]
  for (const pattern of patterns) {
    for (const maxExtglobRecursion of [undefined, 0]) {
      const options = { maxExtglobRecursion }
      t.ok(minimatch('b', pattern, options))
      t.notOk(minimatch('a', pattern, options))
      const re = new Minimatch(pattern, options).makeRe()
      t.ok(re && re.test('b'))
      t.notOk(re && re.test('a'))
    }
  }
  t.end()
})

t.test('fromGlob does not cache before the first serialization', t => {
  const ast = AST.fromGlob('a')
  ast.push('b')
  t.equal(ast.toString(), 'ab')
  t.end()
})

t.test('unfinished components preserve later complete extglobs', t => {
  for (const optimizationLevel of [0, 1, 2]) {
    for (const maxExtglobRecursion of [undefined, 0]) {
      const options = { optimizationLevel, maxExtglobRecursion }
      for (const [path, pattern] of [
        ['@(a/c', '@(a/@(b/|c)'],
        ['@(a/b/x', '@(a/@(b|b/c)/*'],
        ['+(a/c', '+(a/@(b/|c)'],
      ]) {
        t.ok(minimatch(path, pattern, options), pattern)
        const re = new Minimatch(pattern, options).makeRe()
        t.ok(re && re.test(path), `makeRe ${pattern}`)
      }
      const literal = '@(a@(b/|c)'
      t.ok(minimatch(literal, literal, options))
    }
  }
  const many = '@(/'.repeat(3000)
  t.ok(minimatch(many + 'c', many + '@(b/|c)'))
  t.end()
})

t.test('class boundaries in unfinished and complete groups', t => {
  const cases: [string, string[], string[]][] = [
    ['@(a[/@(b/|c)', ['@(a[/c'], ['@(a[/b']],
    ['@(a[/@(b/|c)/]', ['@(a[/c/]'], ['@(a[/b/]']],
    ['@([a/)]|c)', ['c'], ['a', ')', 'a/']],
    ['@([!]/)]|c)', ['c'], ['a', ')']],
    ['@([a/\\)]|c)', ['c'], ['a', ')']],
  ]
  for (const [pattern, matches, misses] of cases) {
    for (const maxExtglobRecursion of [undefined, 0]) {
      const options = { maxExtglobRecursion }
      const re = new Minimatch(pattern, options).makeRe()
      for (const path of matches) {
        t.ok(minimatch(path, pattern, options), `${pattern}: ${path}`)
        t.ok(re && re.test(path), `makeRe ${pattern}: ${path}`)
      }
      for (const path of misses) {
        t.notOk(minimatch(path, pattern, options), `${pattern}: ${path}`)
        t.notOk(re && re.test(path), `makeRe ${pattern}: ${path}`)
      }
    }
  }
  const prefix = '@(a[/'.repeat(3000)
  t.ok(minimatch(prefix + 'c', prefix + '@(b/|c)'))
  t.end()
})

t.test('recovered groups use the component recursion budget', t => {
  const pattern = '@(a[/@(!(b/|c)|d)'
  for (const maxExtglobRecursion of [undefined, 0, 1]) {
    const options = { maxExtglobRecursion }
    const expected = maxExtglobRecursion !== 0
    t.equal(minimatch('@(a[/d', pattern, options), expected)
    const re = new Minimatch(pattern, options).makeRe()
    t.equal(!!re && re.test('@(a[/d'), expected)
  }
  t.notOk(minimatch('@(a[/c', '@(a[/@(b/|c)', { maxExtglobRecursion: -1 }))
  t.notOk(minimatch('@(a[/c/]', '@(a[/@(b/|c)/])'))
  t.ok(minimatch('d', '@(a[/@(b/|c)/]|d)'))
  t.notOk(minimatch('@(a[/c', '@(a[/\\@(b/|c)'))
  t.ok(minimatch('@(a[/@(b/|c)', '@(a[/\\@(b/|c)'))
  t.end()
})

t.test('path boundaries respect exhausted recursion budgets', t => {
  for (const optimizationLevel of [0, 1, 2]) {
    const cases: [string, number | undefined][] = [
      ['@(!(a)/x|b)', 0],
      ['@(!(!(!(a)))/x|b)', undefined],
    ]
    for (const [pattern, maxExtglobRecursion] of cases) {
      const options = {
        nonegate: true,
        optimizationLevel,
        maxExtglobRecursion,
      }
      const path = '!(a/x|b)'
      t.ok(minimatch(path, pattern, options), pattern)
      const re = new Minimatch(pattern, options).makeRe()
      t.ok(re && re.test(path), `makeRe ${pattern}`)
    }
  }
  t.end()
})

t.test('large recursion budgets share equivalent unfinished states', t => {
  const depth = 3000
  const prefix = '!(a/'.repeat(depth)
  const pattern = prefix + '@(b/|c)'
  const expected = [...Array<string>(depth).fill('!(a'), '@(b/|c)']
  for (const maxExtglobRecursion of [2, depth / 2, Infinity]) {
    t.same(AST.splitGlob(pattern, { maxExtglobRecursion }), expected)
  }
  t.end()
})

t.test('classes next to slash-bearing extglobs', t => {
  t.ok(minimatch('xb', '[!a]@(x/|b)'))
  t.ok(minimatch('xb', '[^]]@(x/|b)'))
  t.ok(minimatch(']b', '[]a]@(x/|b)'))
  t.ok(minimatch('c', String.raw`@([\]/)]|c)`))
  t.end()
})
