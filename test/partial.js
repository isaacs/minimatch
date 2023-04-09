const t = require('tap')
const mm = require('../').minimatch
t.equal(mm('/a/b', '/*/b/x/y/z', { partial: true }), true)
t.equal(mm('/a/b/c', '/*/b/x/y/z', { partial: true }), false)
t.equal(mm('/', 'x', { partial: true }), true)
const m = new mm.Minimatch('/*/b/x/y/z')
t.equal(m.match('/a/b', true), true)
