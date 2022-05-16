const t = require('tap')
t.test('path separator /', t => {
  const mm = t.mock('../', { '../lib/path.js': { sep: '/' }})

  t.equal(mm('x/y/z', 'x/y/*/z'), false)
  t.equal(mm('x/y/w/z', 'x/y/*/z'), true)
  t.end()
})

t.test('path separator \\', t => {
  const mm = t.mock('../', { '../lib/path.js': { sep: '\\' }})

  t.equal(mm('x\\y\\z', 'x/y/*/z'), false)
  t.equal(mm('x\\y\\w\\z', 'x/y/*/z'), true)
  t.end()
})

// just in case Node every adds Mac OS 9 support 😅
t.test('path separator :', t => {
  const mm = t.mock('../', { '../lib/path.js': { sep: ':' }})

  t.equal(mm('x:y:z', 'x/y/*/z'), false)
  t.equal(mm('x:y:w:z', 'x/y/*/z'), true)
  t.end()
})

t.test('windows default', t => {
  const proc = global.process
  global.process = { platform: 'win32' }
  t.equal(t.mock('../lib/path.js').sep, '\\')
  global.process = proc
  t.end()
})

t.test('posix default', t => {
  const proc = global.process
  global.process = { platform: 'posix' }
  t.equal(t.mock('../lib/path.js').sep, '/')
  global.process = proc
  t.end()
})

t.test('override with options', t => {
  const mm = t.mock('../', { '../lib/path.js': {sep: '\\'}})

  Object.defineProperty(process, 'platform', {
    value: 'win32',
    configurable: true,
    enumerable: true,
    writable: true,
  })
  require('path').sep = '\\'

  t.equal(mm('c:\\foo\\bar', 'c:\\foo\\*', {
    windowsPathsNoEscape: true,
  }), true)

  t.equal(mm('c:\\foo\\bar', 'c:\\foo\\*', {
    windowsPathsNoEscape: 'hamburger',
  }), true)

  t.equal(mm('c:\\foo\\bar', 'c:\\foo\\*', {
    allowWindowsEscape: false,
  }), true)

  t.equal(mm('c:\\foo\\bar', 'c:\\foo\\*', {}), false)

  t.equal(mm('c:\\foo\\bar', 'c:\\foo\\*', {
    allowWindowsEscape: null,
  }), false)

  t.end()
})
