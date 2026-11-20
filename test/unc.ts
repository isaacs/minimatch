import { any, assert, describe, test } from 'ubqtest'
import type { MinimatchOptions } from '../dist/esm/index.js'
import { minimatch, Minimatch } from '../dist/esm/index.js'
import { Matcher } from '@isaacs/nonrecursive-glob-match'

test('long UNC roots are not magic', async () => {
  for (const o of [{ nocase: true }, { windowsNoMagicRoot: true }]) {
    const mm = new Minimatch('//?/unc/host/share/*', {
      platform: 'win32',
      ...o,
    })
    assert.match(mm.set, [
      ['', '', '?', 'UNC', 'host', 'share', any.instanceOf(Matcher)],
    ])
    assert.equal(mm.match('//?/UNC/HOST/SHARE/x'), true)
    assert.equal(mm.match('//HOST/share/x'), true)
    assert.equal(mm.match('//x/UNC/host/share/x'), false)
  }
  // with magic, the host and share are Matchers
  const mm = new Minimatch('//?/UNC/h*/share/*', {
    platform: 'win32',
    nocase: true,
  })
  assert.match(mm.set, [
    [
      '',
      '',
      '?',
      'UNC',
      any.instanceOf(Matcher),
      any.instanceOf(Matcher),
      any.instanceOf(Matcher),
    ],
  ])
  assert.equal(mm.match('//HOST/share/x'), true)
})

test('UNC patterns do not lose their //', async () => {
  const share = new Minimatch('//host/share/*', { platform: 'win32' })
  assert.match(share.set, [
    ['', '', 'host', 'share', any.instanceOf(Matcher)],
  ])
  const uncPath = new Minimatch('//?/d:/*', { platform: 'win32' })
  assert.match(uncPath.set, [['', '', '?', 'd:', any.instanceOf(Matcher)]])
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
  ['c:/x', 'C:/*', true],
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

describe('UNC drive letter paths match normal paths', () => {
  for (const [file, pattern, expect, opt = {}] of cases) {
    // the options are part of the name, to keep each name unique
    const o = Object.keys(opt).length ? ` o=${JSON.stringify(opt)}` : ''
    opt.platform = 'win32'
    describe(`f=${file} p=${pattern}${o}`, () => {
      test('/ only', () => {
        assert.equal(minimatch(file, pattern, opt), expect)
      })
      test('file \\', () => {
        assert.equal(
          minimatch(file.replace(/\//g, '\\'), pattern, opt),
          expect,
        )
      })
      test('pattern \\', () => {
        assert.equal(
          minimatch(file, pattern.replace(/\//g, '\\'), {
            ...opt,
            windowsPathsNoEscape: true,
          }),
          expect,
        )
      })
      test('both \\', () => {
        assert.equal(
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
      })
    })
  }
})

test('matching a drive letter does not change the pattern', async () => {
  for (const pattern of ['c:/x/**/y', '//?/c:/x/**/y']) {
    const m = new Minimatch(pattern, { platform: 'win32' })
    const before = JSON.stringify(m.set.map(r => r.map(String)))
    assert.equal(m.match('C:/x/a/y'), true)
    assert.equal(m.match('c:/x/a/y'), true)
    assert.equal(m.match('//?/C:/x/y'), true)
    assert.equal(m.match('d:/x/a/y'), false)
    assert.equal(JSON.stringify(m.set.map(r => r.map(String))), before)
  }
})
