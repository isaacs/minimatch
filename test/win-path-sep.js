import { assert, env, mockImport, test } from 'ubqtest'

test('path separator /', async () => {
  env({ __MINIMATCH_TESTING_PLATFORM__: 'posix' })
  const { minimatch: mm } = await mockImport(
    () => import('../dist/esm/index.js'),
    [],
  )
  assert.equal(mm('x/y/z', 'x/y/*/z'), false)
  assert.equal(mm('x/y/w/z', 'x/y/*/z'), true)
})

test('path separator \\', async () => {
  env({ __MINIMATCH_TESTING_PLATFORM__: 'win32' })
  const { minimatch: mm } = await mockImport(
    () => import('../dist/esm/index.js'),
    [],
  )
  assert.equal(mm('x\\y\\z', 'x/y/*/z'), false)
  assert.equal(mm('x\\y\\w\\z', 'x/y/*/z'), true)
})

test('override with options', async () => {
  env({ __MINIMATCH_TESTING_PLATFORM__: 'win32' })
  const { minimatch: mm } = await mockImport(
    () => import('../dist/esm/index.js'),
    [],
  )

  assert.equal(
    mm('c:\\foo\\bar', 'c:\\foo\\*', {
      windowsPathsNoEscape: true,
    }),
    true,
  )

  assert.equal(
    mm('c:\\foo\\bar', 'c:\\foo\\*', {
      allowWindowsEscape: false,
    }),
    true,
  )

  assert.equal(mm('c:\\foo\\bar', 'c:\\foo\\*', {}), false)

  assert.equal(
    mm('c:\\foo\\bar', 'c:\\foo\\*', {
      allowWindowsEscape: null,
    }),
    false,
  )
})
