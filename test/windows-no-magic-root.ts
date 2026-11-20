import { Minimatch } from '../dist/esm/index.js'
import { assert, describe, test } from 'ubqtest'

describe('no magic the root', () => {
  const patterns = [
    '//host/share/x/y/z',
    '//host/share/',
    '//host/share',
    '//?/d:/x/y/z',
    '//?/d:/',
    '//?/d:',
    'd:/x/y/z',
    'd:/',
    'd:',
  ]
  for (const p of patterns) {
    test(p, () => {
      assert.snapshot(
        new Minimatch(p, {
          platform: 'win32',
          nocase: true,
        }).set,
        'default to true',
      )
      assert.snapshot(
        new Minimatch(p, {
          windowsNoMagicRoot: false,
          platform: 'win32',
          nocase: true,
        }).set,
        'set explicitly false',
      )
    })
  }
})
