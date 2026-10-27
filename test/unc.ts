import t from 'tap'
import type { MinimatchOptions } from '../dist/esm/index.js'
import { minimatch, Minimatch } from '../dist/esm/index.js'
import { Matcher } from '@isaacs/nonrecursive-glob-match'

t.test('UNC patterns do not lose their //', async t => {
  const share = new Minimatch('//host/share/*', { platform: 'win32' })
  t.match(share.set, [['', '', 'host', 'share', Matcher]])
  const uncPath = new Minimatch('//?/d:/*', { platform: 'win32' })
  t.match(uncPath.set, [['', '', '?', 'd:', Matcher]])
})

type Case = [f: string, p: string, e: boolean, opt?: MinimatchOptions]
const cases: Case[] = [
  ['c:/x', '//?/c:/*', true],
  ['//?/c:/x', 'c:/*', true],
  ['//?/c:/x', '//?/c:/*', true],
  ['C:/x', '//?/c:/*', true],
  ['//?/C:/x', 'c:/*', true],
  ['//?/C:/x', '//?/c:/*', true],
  ['c:/x', '//?/C:/*', true],
  ['//?/c:/x', 'C:/*', true],
  ['//?/c:/x', '//?/C:/*', true],
  ['c:/x', '//?/C:/*', true],
  ['c:/x', 'C:/*', true],
  ['C:/x', '//?/c:/*', true],
  ['C:/x', 'c:/*', true],

  ['d:/x', '//?/c:/*', false],
  ['//?/d:/x', 'c:/*', false],
  ['//?/d:/x', '//?/c:/*', false],

  // ? is not a wild card
  ['//x/c:/x', '//?/c:/*', false],

  // but UNC remote paths do match
  ['//x/y/z', '//x/y/*', true],

  // and their host and share are compared without case
  ['//HOST/SHARE/z', '//host/share/*', true],
  ['//host/share/z', '//Host/Share/z', true],
  ['//host/share', '//HOST/SHARE', true],
  ['//host/share/a/b', '//HOST/SHARE/**', true],
  ['//host/share/Z', '//HOST/SHARE/z', false],
  ['//host/share/Z', '//HOST/SHARE/z', true, { nocase: true }],
  ['//host/other/z', '//HOST/SHARE/*', false],
  ['//other/share/z', '//HOST/SHARE/*', false],
  // magic in the host or share is matched as usual
  ['//HOST/share/z', '//h*/share/*', false],
  ['//HOST/share/z', '//h*/share/*', true, { nocase: true }],
  // at level 2, the root is compared after .. is resolved
  ['//h/s/../H', '//h/S', false, { optimizationLevel: 2 }],
  ['//h/x/../S', '//H/s', true, { optimizationLevel: 2 }],
]

t.test('UNC drive letter paths match normal paths', async t => {
  for (const [file, pattern, expect, opt = {}] of cases) {
    opt.platform = 'win32'
    t.test(`f=${file} p=${pattern}`, t => {
      t.test('/ only', t => {
        t.equal(minimatch(file, pattern, opt), expect)
        t.end()
      })
      t.test('file \\', t => {
        t.equal(minimatch(file.replace(/\//g, '\\'), pattern, opt), expect)
        t.end()
      })
      t.test('pattern \\', t => {
        t.equal(
          minimatch(file, pattern.replace(/\//g, '\\'), {
            ...opt,
            windowsPathsNoEscape: true,
          }),
          expect,
        )
        t.end()
      })
      t.test('both \\', t => {
        t.equal(
          minimatch(
            file.replace(/\//g, '\\'),
            pattern.replace(/\//g, '\\'),
            {
              ...opt,
              windowsPathsNoEscape: true,
            },
          ),
          expect,
        )
        t.end()
      })
      t.end()
    })
  }
})

t.test('matching a drive letter does not change the pattern', async t => {
  for (const pattern of ['c:/x/**/y', '//?/c:/x/**/y']) {
    const m = new Minimatch(pattern, { platform: 'win32' })
    const before = JSON.stringify(m.set.map(r => r.map(String)))
    t.equal(m.match('C:/x/a/y'), true)
    t.equal(m.match('c:/x/a/y'), true)
    t.equal(m.match('//?/C:/x/y'), true)
    t.equal(m.match('d:/x/a/y'), false)
    t.equal(JSON.stringify(m.set.map(r => r.map(String))), before)
  }
})
