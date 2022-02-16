const t = require('tap')
const proc = process
global.process = null
const mm = t.mock('../minimatch.js')
global.process = proc
t.equal(mm.sep, '/')
