import t from 'tap'
import type { MinimatchOptions } from '../dist/esm/index.js'
import { minimatch, Minimatch } from '../dist/esm/index.js'
import { Matcher } from '@isaacs/nonrecursive-glob-match'

t.test('long UNC roots are not magic', async t => {
  for (const o of [{ nocase: true }, { windowsNoMagicRoot: true }]) {
    const mm = new Minimatch('//?/unc/host/share/*', {
      platform: 'win32',
      ...o,
    })
    t.match(mm.set, [['', '', '?', 'UNC', 'host', 'share', Matcher]])
    t.equal(mm.match('//?/UNC/HOST/SHARE/x'), true)
    t.equal(mm.match('//HOST/share/x'), true)
    t.equal(mm.match('//x/UNC/host/share/x'), false)
  }
  // with magic, the host and share are Matchers
  const mm = new Minimatch('//?/UNC/h*/share/*', {
    platform: 'win32',
    nocase: true,
  })
  t.match(mm.set, [['', '', '?', 'UNC', Matcher, Matcher, Matcher]])
  t.equal(mm.match('//HOST/share/x'), true)
})

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
  // .. can not remove the share, so these are not the same root
  ['//h/s/../H', '//h/S', false, { optimizationLevel: 2 }],
  ['//h/x/../S', '//H/s', false, { optimizationLevel: 2 }],
  ['//h/s/x/../y', '//H/S/y', true, { optimizationLevel: 2 }],

  // long UNC paths, //?/UNC/host/share, are the same root
  ['//?/UNC/host/share/x', '//host/share/*', true],
  ['//host/share/x', '//?/UNC/host/share/*', true],
  ['//?/unc/Host/Share/x', '//?/UNC/HOST/share/x', true],
  ['//?/UNC/host/share/a/b', '//HOST/SHARE/**', true],
  ['//?/UNC/host/other/x', '//host/share/*', false],
  ['//?/UNC/other/share/x', '//?/UNC/host/share/*', false],
  // the ? is not a wild card here either
  ['//x/UNC/host/share/a', '//?/UNC/host/share/a', false],
  // magic in the host or share is matched as usual
  ['//?/UNC/host/s1/x', '//h*/s?/x', true],
  ['//host/s1/x', '//?/UNC/h*/s?/x', true],
  ['//?/UNC/HOST/s1/x', '//h*/s?/x', false],
  // .. can not remove the share
  ['//?/UNC/host/x', '//?/UNC/host/share/../x', false],
  ['//?/UNC/host/share/y', '//?/UNC/host/share/x/../y', true],
  [
    '//?/UNC/host/share/a/../../x',
    '//?/UNC/host/x',
    false,
    { optimizationLevel: 2 },
  ],
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
