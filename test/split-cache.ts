import t from 'tap'
import { Minimatch } from '../src/index.js'

// match() reuses the parts of the last path that it split. Each of
// these must still split the path in its own way.

t.test('windows and posix split the same path differently', t => {
  const win = new Minimatch('a/b', { platform: 'win32' })
  const posix = new Minimatch('a/b', { platform: 'linux' })
  t.equal(win.match('a\\b'), true)
  t.equal(posix.match('a\\b'), false)
  t.equal(win.match('a\\b'), true)
  t.end()
})

t.test('preserveMultipleSlashes', t => {
  const keep = new Minimatch('a//b', { preserveMultipleSlashes: true })
  const merge = new Minimatch('a/b')
  t.equal(keep.match('a//b'), true)
  t.equal(merge.match('a//b'), true)
  t.equal(keep.match('a//b'), true)
  t.equal(
    new Minimatch('a/b', { preserveMultipleSlashes: true }).match('a//b'),
    false,
  )
  t.end()
})

t.test('level 2 does not change the shared parts', t => {
  // level 2 resolves the `..` in a path. The escaped dots stay a
  // portion that only matches a literal `..` part.
  const two = new Minimatch('a/c', { optimizationLevel: 2 })
  const lit = new Minimatch('a/b/\\.\\./c')
  t.equal(lit.match('a/b/../c'), true)
  t.equal(two.match('a/b/../c'), true)
  t.equal(lit.match('a/b/../c'), true)
  t.end()
})
