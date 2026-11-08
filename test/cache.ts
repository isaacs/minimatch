// minimatch() keeps the Minimatch objects that it used most recently

import t from 'tap'
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

t.test('a pattern used again after the cache is full', t => {
  t.equal(minimatch('a/keep.js', 'a/keep.*'), true)
  for (let i = 0; i < 300; i++) {
    t.equal(minimatch(`b/x${i}.js`, `b/x${i}.*`), true)
    if (i % 100 === 0) t.equal(minimatch('a/keep.js', 'a/keep.*'), true)
  }
  t.equal(minimatch('a/keep.ts', 'a/keep.*'), true)
  t.equal(minimatch('a/keep.ts', 'a/keep.*', {}), true)
  t.end()
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
