import t from 'tap'
import { minimatch as mm } from '../src/index.js'

t.equal(mm('/a/b', '/*/b/x/y/z', { partial: true }), true)
t.equal(mm('/a/b/c', '/*/b/x/y/z', { partial: true }), false)
t.equal(mm('/', 'x', { partial: true }), true)
const m = new mm.Minimatch('/*/b/x/y/z')
t.equal(m.match('/a/b', true), true)
t.equal(mm('/b/c/d/a', '/**/a/b/c', { partial: true }), true)
t.equal(mm('/b/c/d/a', '/**/a/b/c/**', { partial: true }), true)

t.equal(mm('a', 'a/**', { partial: true }), true)
t.equal(mm('a', '**', { partial: true }), true)
t.equal(mm('b/a', 'a/**', { partial: true }), false)
t.equal(mm('/b/c/d/a', '/**/a/**/b/c/**', { partial: true }), true)
t.equal(mm('/b/c/d/a', '/**/a/**', { partial: true }), true)

// ** can not walk a dot portion, so nothing under it can match
t.equal(mm('.x', '**/b', { partial: true }), false)
t.equal(mm('.x', '**/.x', { partial: true }), true)
t.equal(mm('.x/', '**/.x', { partial: true }), true)
t.equal(mm('a/.x/', 'a/**/.x', { partial: true }), true)
t.equal(mm('.x/b', '**/.x', { partial: true }), false)
// an empty section at the end of the body
t.equal(mm('a/a', '*/**/?/**', { partial: true }), true)
t.equal(mm('a/a/.x', '*/**/?/**', { partial: true }), false)
t.equal(mm('.x/a', '*/**/?/**', { partial: true }), false)
