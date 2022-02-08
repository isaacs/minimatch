const t = require('tap')
t.test('path separator \\', t => {
  const mm = t.mock('../', { path: { sep: '\\' }})

  t.equal(mm('x\\y\\z', 'x/y/*/z'), false)
  t.equal(mm('x\\y\\w\\z', 'x/y/*/z'), true)
  t.end()
})

// just in case Node every adds Mac OS 9 support 😅
t.test('path separator :', t => {
  const mm = t.mock('../', { path: { sep: ':' }})

  t.equal(mm('x:y:z', 'x/y/*/z'), false)
  t.equal(mm('x:y:w:z', 'x/y/*/z'), true)
  t.end()
})
