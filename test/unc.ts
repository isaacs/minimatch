import t from 'tap'
import { minimatch, Minimatch, MinimatchOptions } from '../dist/esm/index.js'

t.test('UNC patterns do not lose their //', async t => {
  const share = new Minimatch('//host/share/*', { platform: 'win32' })
  t.match(share.set, [['', '', 'host', 'share', RegExp]])
  const uncPath = new Minimatch('//?/d:/*', { platform: 'win32' })
  t.match(uncPath.set, [['', '', '?', 'd:', RegExp]])
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
          expect
        )
        t.end()
      })
      t.test('both \\', t => {
        t.equal(
          minimatch(file.replace(/\//g, '\\'), pattern.replace(/\//g, '\\'), {
            ...opt,
            windowsPathsNoEscape: true,
          }),
          expect
        )
        t.end()
      })
      t.end()
    })
  }
})
