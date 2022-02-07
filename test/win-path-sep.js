const t = require('tap')
const mm = t.mock('../', { path: { sep: '\\' }})

t.equal(mm('x\\y\\z', 'x/y/*/z'), false)
t.equal(mm('x\\y\\w\\z', 'x/y/*/z'), true)
