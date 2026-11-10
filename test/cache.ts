// minimatch() keeps the Minimatch objects that it used most recently

import { expand } from 'brace-expansion'
import t, { type Test } from 'tap'
import { filter, minimatch } from '../dist/esm/index.js'

t.test('the same pattern with other options', t => {
  t.equal(minimatch('.x', '*'), false)
  t.equal(minimatch('.x', '*', { dot: true }), true)
  t.equal(minimatch('.x', '*'), false)
  t.equal(minimatch('X', 'x', { nocase: true }), true)
  t.equal(minimatch('X', 'x'), false)
  t.end()
})

t.test('a change to the options object after a match', t => {
  const options = { dot: false }
  t.equal(minimatch('.x', '*', options), false)
  options.dot = true
  t.equal(minimatch('.x', '*', options), true)
  options.dot = false
  t.equal(minimatch('.x', '*', options), false)
  t.end()
})

// Minimatch calls expand() for a pattern with a brace set, so the
// number of expand() calls is the number of patterns compiled.
const countCompiles = async (t: Test) => {
  const count = { n: 0 }
  const mm: typeof import('../dist/esm/index.js') = await t.mockImport(
    '../dist/esm/index.js',
    {
      'brace-expansion': {
        expand: (...args: Parameters<typeof expand>) => {
          count.n++
          return expand(...args)
        },
      },
    },
  )
  return { ...mm, count }
}

t.test('a pattern used again after the cache is full', async t => {
  const { minimatch, count } = await countCompiles(t)
  const keep = 'a/{keep,x}.js'
  t.equal(minimatch('a/keep.js', keep), true)
  for (let i = 0; i < 300; i++) {
    t.equal(minimatch(`b/x${i}.js`, `b/{x${i},y}.js`), true)
    if (i % 100 === 0) t.equal(minimatch('a/keep.js', keep), true)
  }
  // the cache was full, so keep is now in the old one
  t.equal(count.n, 301)
  t.equal(minimatch('a/x.js', keep), true)
  t.equal(minimatch('a/x.js', keep, {}), true)
  t.equal(count.n, 301, 'not compiled again')
})

t.test('filter() uses the same cache as minimatch()', async t => {
  const { minimatch, filter, count } = await countCompiles(t)
  const pattern = 'a/{b,c}.js'
  t.equal(minimatch('a/b.js', pattern), true)
  for (let i = 0; i < 10; i++) {
    t.equal(filter(pattern)('a/c.js'), true)
  }
  t.equal(count.n, 1)
})

t.test('filter() uses the options at its first test', t => {
  const options = { dot: false }
  const f = filter('*', options)
  t.equal(f('.x'), false)
  options.dot = true
  t.equal(f('.x'), false)
  t.equal(filter('*', options)('.x'), true)
  t.end()
})

t.test('more patterns than the cache holds', t => {
  for (let r = 0; r < 2; r++) {
    for (let i = 0; i < 600; i++) {
      t.equal(minimatch(`a/x${i}.js`, `a/x${i}.*`), true)
      t.equal(minimatch(`a/x${i}.js`, `a/x${i + 1}.*`), false)
    }
  }
  t.end()
})
