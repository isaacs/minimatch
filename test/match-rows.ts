import { assert, test } from 'ubqtest'
import { minimatch, Minimatch } from '../src/index.js'

// each row of the set is matched against the split path

test('a row of the set', () => {
  assert.equal(minimatch('a/b/c', 'a/*/c'), true)
  assert.equal(minimatch('a/b/d', 'a/*/c'), false)
  assert.equal(minimatch('a/b', 'a/*/c'), false)
  assert.equal(minimatch('a/b', 'a/*/c', { partial: true }), true)
})

test('globstar rows', () => {
  assert.equal(minimatch('a/x/y/c.js', 'a/**/c.js'), true)
  assert.equal(minimatch('a/.x/c.js', 'a/**/c.js'), false)
  // a trailing '' can follow the last portion. With
  // preserveMultipleSlashes, the path is not checked before it is
  // split, so the row is matched on its parts.
  const o = { preserveMultipleSlashes: true }
  assert.equal(minimatch('a/x/b/', 'a/**/b', o), true)
  assert.equal(minimatch('a/b/c/', 'a/**/b', o), false)
})

test('level 2 resolves the parts', () => {
  const o = { optimizationLevel: 2 }
  assert.equal(minimatch('a/b/../c', 'a/c', o), true)
  assert.equal(minimatch('a/b/c', 'a/c', o), false)
  // ./ and ./. are resolved to .
  assert.equal(minimatch('./', '.', o), true)
  assert.equal(minimatch('./.', '.', o), true)
  assert.equal(minimatch('./.', '*', o), false)
  assert.equal(minimatch('./', '*', { ...o, dot: true }), false)
  // a path that resolves to nothing
  assert.equal(minimatch('x/..', '*', o), false)
  // the leading portions of a UNC path are kept
  const win = { ...o, platform: 'win32' } as const
  assert.equal(minimatch('//host/share/x', '//host/share/*', win), true)
  assert.equal(minimatch('//host/share/./x', '//host/share/x', win), true)
})

test('drive letters on windows', () => {
  const m = new Minimatch('c:/x', { platform: 'win32' })
  assert.equal(m.match('C:/x'), true)
  assert.equal(m.match('d:/x'), false)
  // the row is not changed to the case of the path
  assert.deepEqual(m.set, [['c:', 'x']])
})
