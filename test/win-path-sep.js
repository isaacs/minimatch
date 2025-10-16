var t = require('tap')
var mm = t.mock('../', { path: { sep: '\\' }})

t.equal(mm('x\\y\\z', 'x/y/*/z'), false)
t.equal(mm('x\\y\\w\\z', 'x/y/*/z'), true)
