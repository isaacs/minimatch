// test in posix mode by default
process.env.__MINIMATCH_TESTING_PLATFORM__ = 'linux'

import t from 'tap'
import { braceExpand } from '../dist/esm/index.js'

const optimizationLevel = 2
process.env._MINIMATCH_TEST_OPTIMIZATION_LEVEL = String(optimizationLevel)

// run all the basic tests with this setting
import './basic.js'

t.test('explicit pattern coalescing and optimization', t => {
  t.plan(2)
  for (const platform of ['win32', 'linux']) {
    t.test(platform, async t => {
      process.env.__MINIMATCH_TESTING_PLATFORM__ = platform
      const { Minimatch } = await t.mockImport('../dist/esm/index.js', {})
      const m = new Minimatch('*', { optimizationLevel })
      const noGS = new Minimatch('*', { noglobstar: true, optimizationLevel })
      const ms = new Minimatch('*', {
        preserveMultipleSlashes: true,
        optimizationLevel,
      })

      const patterns = [
        '**',
        '**/../x',
        '**/../*/x',
        '**/../x/*',
        './**',
        './**/',
        './**/x',
        './**/../x',
        './**/../x/y',
        '//host/share',
        '//host/share/',
        '//host/share//s/o//me////.//path',
        '**/..',
        '**/../',
        '**/../x',
        '**/../x/y',
        '**/../x/y/z',
        'a/b/c/**///../x/y/z',
        'a/b/c/..///d',
        'a/{*,c}/b',
        'a/{*,.c}/b',
        'a/{c,*}/b',
        'a/{.c,*}/b',
        'a/{c/b/d,*/b/*}/e',
        'a/{*/b/d,c/b/*}/e',
        'a/{c/b/*,*/b/d}/e',
        '{a/**/b,a/b}',
        'a/{,**/}b',
        'a/{,**/}*/b',
        'a/{**/,}b',
        'a/{**/,}*/b',
        './././.',
        './',
        './x/.././///.//./',
        '*/../**',
        '*/../**/?/*/[a-z]',
      ]

      const exp = (p: string) => braceExpand(p).map(s => s.split('/'))

      t.plan(patterns.length)
      for (const p of patterns) {
        t.test(p, t => {
          t.matchSnapshot(m.preprocess(exp(p)), 'defaults')
          t.matchSnapshot(noGS.preprocess(exp(p)), 'no globstar')
          t.matchSnapshot(ms.preprocess(exp(p)), 'multislash')
          t.end()
        })
      }
    })
  }
})

t.test('optimize the file as well', t => {
  const files = [
    './*',
    '//unc/share///*/../x',
    '/',
    '',
    '.',
    '././.',
    './.',
    './',
    './///././//././.',
    'x/..',
    'a/../b',
  ]
  for (const platform of ['win32', 'linux']) {
    t.test(platform, async t => {
      process.env.__MINIMATCH_TESTING_PLATFORM__ = platform
      const { Minimatch } = await t.mockImport('../dist/esm/index.js', {})
      const mm = new Minimatch('.')
      const ms = new Minimatch('.', {
        preserveMultipleSlashes: true,
        optimizationLevel,
      })

      for (const file of files) {
        t.test(file, t => {
          t.matchSnapshot(
            mm.levelTwoFileOptimize(mm.slashSplit(file)),
            'default'
          )
          t.matchSnapshot(ms.levelTwoFileOptimize(file), 'multislash')
          t.end()
        })
      }
      t.end()
    })
  }
  t.end()
})
