import t from 'tap'
import { minimatch, Minimatch } from '../src/index.js'

// each row of the set is matched against the split path

t.test('a row of the set', t => {
  t.equal(minimatch('a/b/c', 'a/*/c'), true)
  t.equal(minimatch('a/b/d', 'a/*/c'), false)
  t.equal(minimatch('a/b', 'a/*/c'), false)
  t.equal(minimatch('a/b', 'a/*/c', { partial: true }), true)
  t.end()
})

t.test('globstar rows', t => {
  t.equal(minimatch('a/x/y/c.js', 'a/**/c.js'), true)
  t.equal(minimatch('a/.x/c.js', 'a/**/c.js'), false)
  // a trailing '' can follow the last portion. With
  // preserveMultipleSlashes, the path is not checked before it is
  // split, so the row is matched on its parts.
  const o = { preserveMultipleSlashes: true }
  t.equal(minimatch('a/x/b/', 'a/**/b', o), true)
  t.equal(minimatch('a/b/c/', 'a/**/b', o), false)
  t.end()
})

t.test('level 2 resolves the parts', t => {
  const o = { optimizationLevel: 2 }
  t.equal(minimatch('a/b/../c', 'a/c', o), true)
  t.equal(minimatch('a/b/c', 'a/c', o), false)
  // ./ and ./. are resolved to .
  t.equal(minimatch('./', '.', o), true)
  t.equal(minimatch('./.', '.', o), true)
  t.equal(minimatch('./.', '*', o), false)
  t.equal(minimatch('./', '*', { ...o, dot: true }), false)
  // a path that resolves to nothing
  t.equal(minimatch('x/..', '*', o), false)
  // the leading portions of a UNC path are kept
  const win = { ...o, platform: 'win32' } as const
  t.equal(minimatch('//host/share/x', '//host/share/*', win), true)
  t.equal(minimatch('//host/share/./x', '//host/share/x', win), true)
  t.end()
})

t.test('drive letters on windows', t => {
  const m = new Minimatch('c:/x', { platform: 'win32' })
  t.equal(m.match('C:/x'), true)
  t.equal(m.match('d:/x'), false)
  // the row is not changed to the case of the path
  t.strictSame(m.set, [['c:', 'x']])
  t.end()
})
