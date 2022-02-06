const t = require('tap')
const mm = t.mock('../', { path: null })
t.equal(mm.sep, '/')
