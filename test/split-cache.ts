import { assert, test } from 'ubqtest'
import { Minimatch } from '../src/index.js'

// match() reuses the parts of the last path that it split. Each of
// these must still split the path in its own way.

test('windows and posix split the same path differently', () => {
  const win = new Minimatch('a/b', { platform: 'win32' })
  const posix = new Minimatch('a/b', { platform: 'linux' })
  assert.equal(win.match('a\\b'), true)
  assert.equal(posix.match('a\\b'), false)
  assert.equal(win.match('a\\b'), true)
})

test('preserveMultipleSlashes', () => {
  const keep = new Minimatch('a//b', { preserveMultipleSlashes: true })
  const merge = new Minimatch('a/b')
  assert.equal(keep.match('a//b'), true)
  assert.equal(merge.match('a//b'), true)
  assert.equal(keep.match('a//b'), true)
  assert.equal(
    new Minimatch('a/b', { preserveMultipleSlashes: true }).match('a//b'),
    false,
  )
})

test('level 2 does not change the shared parts', () => {
  // level 2 resolves the `..` in a path. The escaped dots stay a
  // portion that only matches a literal `..` part.
  const two = new Minimatch('a/c', { optimizationLevel: 2 })
  const lit = new Minimatch('a/b/\\.\\./c')
  assert.equal(lit.match('a/b/../c'), true)
  assert.equal(two.match('a/b/../c'), true)
  assert.equal(lit.match('a/b/../c'), true)
})
