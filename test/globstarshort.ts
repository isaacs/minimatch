import t from 'tap'
import { Minimatch, minimatch } from '../src/index.js'

t.test('globstarshort rewrites ** without a following /', t => {
  const mm = new Minimatch('**.js', { globstarshort: true })
  t.equal(mm.pattern, '**/*.js')
  t.same(mm.globParts, [['**', '*.js']])
  t.end()
})

t.test('**.ext matches like **/*.ext', t => {
  const files = [
    'a.ext',
    'dir/a.ext',
    'dir/sub/b.ext',
    'dir/a.js',
    'a.js',
  ]
  const short = minimatch.match(files, '**.ext', { globstarshort: true })
  const long = minimatch.match(files, '**/*.ext')
  t.same(short.sort(), long.sort())
  t.same(short.sort(), ['a.ext', 'dir/a.ext', 'dir/sub/b.ext'])
  t.end()
})

t.test('without globstarshort, **.ext does not act like **/*.ext', t => {
  t.equal(minimatch('dir/a.ext', '**.ext'), false)
  t.equal(minimatch('dir/a.ext', '**.ext', { globstarshort: true }), true)
  t.end()
})

t.test('**/ already has a slash; left unchanged', t => {
  const mm = new Minimatch('**/foo', { globstarshort: true })
  t.equal(mm.pattern, '**/foo')
  t.same(mm.globParts, [['**', 'foo']])
  t.end()
})

t.test('trailing ** becomes **/*', t => {
  const mm = new Minimatch('foo/**', { globstarshort: true })
  t.equal(mm.pattern, 'foo/**/*')
  t.same(mm.globParts, [['foo', '**', '*']])
  t.end()
})

t.test('*** without slash also gets /* inserted', t => {
  const mm = new Minimatch('***.js', { globstarshort: true })
  t.equal(mm.pattern, '***/*.js')
  t.end()
})

t.test('nested path with **.js', t => {
  const mm = new Minimatch('src/**.ts', { globstarshort: true })
  t.equal(mm.pattern, 'src/**/*.ts')
  t.equal(minimatch('src/a.ts', 'src/**.ts', { globstarshort: true }), true)
  t.equal(
    minimatch('src/deep/b.ts', 'src/**.ts', { globstarshort: true }),
    true,
  )
  t.equal(
    minimatch('src/deep/b.js', 'src/**.ts', { globstarshort: true }),
    false,
  )
  t.end()
})

t.test('noglobstar disables globstarshort', t => {
  const mm = new Minimatch('**.js', {
    globstarshort: true,
    noglobstar: true,
  })
  t.equal(mm.pattern, '**.js')
  t.end()
})

t.test('escaped ** is not rewritten', t => {
  const mm = new Minimatch('\\**.js', { globstarshort: true })
  t.equal(mm.pattern, '\\**.js')
  t.end()
})

t.test('brace expansion still works after rewrite', t => {
  t.equal(
    minimatch('a/x.js', '**.{js,ts}', { globstarshort: true }),
    true,
  )
  t.equal(
    minimatch('a/x.ts', '**.{js,ts}', { globstarshort: true }),
    true,
  )
  t.equal(
    minimatch('a/x.c', '**.{js,ts}', { globstarshort: true }),
    false,
  )
  t.end()
})

t.test('defaults() can set globstarshort', t => {
  const mm = minimatch.defaults({ globstarshort: true })
  t.equal(mm('dir/a.ext', '**.ext'), true)
  t.equal(minimatch('dir/a.ext', '**.ext'), false)
  t.end()
})
