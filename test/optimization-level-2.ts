// test in posix mode by default
process.env.__MINIMATCH_TESTING_PLATFORM__ = 'linux'

import { assert, describe, env, mockImport, test } from 'ubqtest'
import { braceExpand } from '../dist/esm/index.js'

const optimizationLevel = 2
process.env._MINIMATCH_TEST_OPTIMIZATION_LEVEL = String(optimizationLevel)

// run all the basic tests with this setting
import './basic.js'
import { Minimatch } from '../src/index.js'

describe('explicit pattern coalescing and optimization', () => {
  // a fresh copy of minimatch, loaded with the platform set in the env
  const load = async (platform: string) => {
    env({ __MINIMATCH_TESTING_PLATFORM__: platform })
    const { Minimatch } = await mockImport(
      () => import('../dist/esm/index.js'),
      [],
    )
    const m = new Minimatch('*', { optimizationLevel })
    const noGS = new Minimatch('*', {
      noglobstar: true,
      optimizationLevel,
    })
    const ms = new Minimatch('*', {
      preserveMultipleSlashes: true,
      optimizationLevel,
    })
    return { m, noGS, ms }
  }

  for (const platform of ['win32', 'linux']) {
    describe(platform, () => {
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
        '{*,a,b}',
        '{a,*,b}',
        '{a,b,*}',
      ]

      const exp = (p: string) => braceExpand(p).map(s => s.split('/'))

      for (const p of patterns) {
        test(p, async () => {
          const { m, noGS, ms } = await load(platform)
          assert.snapshot(m.preprocess(exp(p)), 'defaults')
          assert.snapshot(noGS.preprocess(exp(p)), 'no globstar')
          assert.snapshot(ms.preprocess(exp(p)), 'multislash')
        })
      }
    })
  }
})
