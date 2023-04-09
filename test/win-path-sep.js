const t = require('tap')
t.test('path separator /', t => {
  process.env.__MINIMATCH_TESTING_PLATFORM__ = 'posix'
  const mm = t.mock('../', {}).minimatch
  t.equal(mm('x/y/z', 'x/y/*/z'), false)
  t.equal(mm('x/y/w/z', 'x/y/*/z'), true)
  t.end()
})

t.test('path separator \\', t => {
  process.env.__MINIMATCH_TESTING_PLATFORM__ = 'win32'
  const mm = t.mock('../', {}).minimatch
  t.equal(mm('x\\y\\z', 'x/y/*/z'), false)
  t.equal(mm('x\\y\\w\\z', 'x/y/*/z'), true)
  t.end()
})

t.test('override with options', t => {
  process.env.__MINIMATCH_TESTING_PLATFORM__ = 'win32'
  const mm = t.mock('../', {}).minimatch

  t.equal(
    mm('c:\\foo\\bar', 'c:\\foo\\*', {
      windowsPathsNoEscape: true,
    }),
    true
  )

  t.equal(
    mm('c:\\foo\\bar', 'c:\\foo\\*', {
      allowWindowsEscape: false,
    }),
    true
  )

  t.equal(mm('c:\\foo\\bar', 'c:\\foo\\*', {}), false)

  t.equal(
    mm('c:\\foo\\bar', 'c:\\foo\\*', {
      allowWindowsEscape: null,
    }),
    false
  )

  t.end()
})
