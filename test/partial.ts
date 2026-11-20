import { assert, test } from 'ubqtest'
import { minimatch as mm } from '../src/index.js'

test('partial matches', () => {
  assert.equal(mm('/a/b', '/*/b/x/y/z', { partial: true }), true)
  assert.equal(mm('/a/b/c', '/*/b/x/y/z', { partial: true }), false)
  assert.equal(mm('/', 'x', { partial: true }), true)
  const m = new mm.Minimatch('/*/b/x/y/z')
  assert.equal(m.match('/a/b', true), true)
  assert.equal(mm('/b/c/d/a', '/**/a/b/c', { partial: true }), true)
  assert.equal(mm('/b/c/d/a', '/**/a/b/c/**', { partial: true }), true)

  assert.equal(mm('a', 'a/**', { partial: true }), true)
  assert.equal(mm('a', '**', { partial: true }), true)
  assert.equal(mm('b/a', 'a/**', { partial: true }), false)
  assert.equal(mm('/b/c/d/a', '/**/a/**/b/c/**', { partial: true }), true)
  assert.equal(mm('/b/c/d/a', '/**/a/**', { partial: true }), true)

  // ** can not walk a dot portion, so nothing under it can match
  assert.equal(mm('.x', '**/b', { partial: true }), false)
  assert.equal(mm('.x', '**/.x', { partial: true }), true)
  assert.equal(mm('.x/', '**/.x', { partial: true }), true)
  assert.equal(mm('a/.x/', 'a/**/.x', { partial: true }), true)
  assert.equal(mm('.x/b', '**/.x', { partial: true }), false)
  // an empty section at the end of the body
  assert.equal(mm('a/a', '*/**/?/**', { partial: true }), true)
  assert.equal(mm('a/a/.x', '*/**/?/**', { partial: true }), false)
  assert.equal(mm('.x/a', '*/**/?/**', { partial: true }), false)
})
