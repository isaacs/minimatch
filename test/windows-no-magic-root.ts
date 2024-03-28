import { Minimatch } from '../dist/esm/index.js'
import t from 'tap'

t.test('no magic the root', t => {
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
  t.plan(patterns.length)
  for (const p of patterns) {
    t.test(p, t => {
      t.matchSnapshot(
        new Minimatch(p, {
          platform: 'win32',
          nocase: true,
        }).set,
        'default to true'
      )
      t.matchSnapshot(
        new Minimatch(p, {
          windowsNoMagicRoot: false,
          platform: 'win32',
          nocase: true,
        }).set,
        'set explicitly false'
      )
      t.end()
    })
  }
})
