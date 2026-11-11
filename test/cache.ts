// minimatch() keeps the Minimatch objects that it used most recently

import { expand } from 'brace-expansion'
import t, { type Test } from 'tap'
import { filter, minimatch } from '../dist/esm/index.js'

t.test('the same pattern with other options', t => {
  t.equal(minimatch('.x', '*'), false)
  t.equal(minimatch('.x', '*', { dot: true }), true)
  t.equal(minimatch('.x', '*'), false)
  t.equal(minimatch('X', 'x', { nocase: true }), true)
  t.equal(minimatch('X', 'x'), false)
  t.end()
})

t.test('a change to the options object after a match', t => {
  const options = { dot: false }
  t.equal(minimatch('.x', '*', options), false)
  options.dot = true
  t.equal(minimatch('.x', '*', options), true)
  options.dot = false
  t.equal(minimatch('.x', '*', options), false)
  t.end()
})

// Minimatch calls expand() for a pattern with a brace set, so the
// number of expand() calls is the number of patterns compiled.
const countCompiles = async (t: Test) => {
  const count = { n: 0 }
  const mm: typeof import('../dist/esm/index.js') = await t.mockImport(
    '../dist/esm/index.js',
    {
      'brace-expansion': {
        expand: (...args: Parameters<typeof expand>) => {
          count.n++
          return expand(...args)
        },
      },
    },
  )
  return { ...mm, count }
}

t.test('a pattern used again after the cache is full', async t => {
  const { minimatch, count } = await countCompiles(t)
  const keep = 'a/{keep,x}.js'
  t.equal(minimatch('a/keep.js', keep), true)
  for (let i = 0; i < 300; i++) {
    t.equal(minimatch(`b/x${i}.js`, `b/{x${i},y}.js`), true)
    if (i % 100 === 0) t.equal(minimatch('a/keep.js', keep), true)
  }
  // the cache was full, so keep is now in the old one
  t.equal(count.n, 301)
  t.equal(minimatch('a/x.js', keep), true)
  t.equal(minimatch('a/x.js', keep, {}), true)
  t.equal(count.n, 301, 'not compiled again')
})

t.test('filter() uses the same cache as minimatch()', async t => {
  const { minimatch, filter, count } = await countCompiles(t)
  const pattern = 'a/{b,c}.js'
  t.equal(minimatch('a/b.js', pattern), true)
  for (let i = 0; i < 10; i++) {
    t.equal(filter(pattern)('a/c.js'), true)
  }
  t.equal(count.n, 1)
})

t.test('each set of options has its own cache key', async t => {
  const { minimatch, count } = await countCompiles(t)
  const booleans = [
    'nobrace',
    'nocomment',
    'nonegate',
    'noglobstar',
    'noext',
    'nonull',
    'windowsPathsNoEscape',
    'allowWindowsEscape',
    'partial',
    'dot',
    'nocase',
    'nocaseMagicOnly',
    'magicalBraces',
    'matchBase',
    'flipNegate',
    'preserveMultipleSlashes',
    'windowsNoMagicRoot',
  ]
  const defaultPlatform =
    process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform
  // [options, true if it needs a new compile]
  const optionSets: [Record<string, unknown>, boolean][] = [
    // the same as the defaults, so the same key as no options
    [{ platform: '' }, false],
    [{ platform: defaultPlatform }, false],
    [{ optimizationLevel: 1 }, false],
    [{ braceExpandMax: 100_000 }, false],
    [{ maxGlobstarRecursion: 200 }, false],
    [{ windowsPathsNoEscape: false }, false],
    [{ allowWindowsEscape: true }, false],
    [
      {
        dot: undefined,
        platform: undefined,
        optimizationLevel: undefined,
        normalize: undefined,
      },
      false,
    ],
    // unknown keys are not part of the key
    [{ unknownOption: true }, false],
    [{ normalize: 'NFC' }, true],
    [{ optimizationLevel: 2 }, true],
    [{ optimizationLevel: 3 }, false],
    [{ optimizationLevel: 0 }, true],
    // these act as level 0
    [{ optimizationLevel: 0.5 }, false],
    [{ optimizationLevel: -1 }, false],
    [{ optimizationLevel: null }, false],
    [{ braceExpandMax: 5 }, true],
    [{ maxGlobstarRecursion: 5 }, true],
    [{ dot: true, nocase: true }, true],
    // the order of the keys does not matter
    [{ nocase: true, dot: true }, false],
    // inherited keys are read, the same as own keys
    [Object.create({ dot: true, nocase: true }), false],
    [{ unknownOption: 1, nocase: true, dot: true }, false],
    // these three all set windowsPathsNoEscape
    [{ windowsPathsNoEscape: true }, true],
    [{ allowWindowsEscape: false }, false],
    [{ windowsPathsNoEscape: false, allowWindowsEscape: false }, false],
  ]
  for (const k of booleans) {
    if (k === 'windowsPathsNoEscape' || k === 'allowWindowsEscape') {
      continue
    }
    // brace sets are expanded unless nobrace is set
    optionSets.push(
      [{ [k]: true }, k !== 'nobrace'],
      [{ [k]: false }, true],
    )
  }
  // options are read as truthy or falsy
  optionSets.push([{ dot: 1 }, false], [{ dot: 0 }, false])
  const pattern = 'a/{b,c}'
  minimatch('a/b', pattern)
  minimatch('a/b', pattern, {})
  t.equal(count.n, 1, 'no options and {} share a key')
  let expect = 1
  for (const [o, compiles] of optionSets) {
    minimatch('a/b', pattern, o)
    if (compiles) expect++
    t.equal(count.n, expect, JSON.stringify(o))
  }
  // with nobrace, the brace set is literal
  t.equal(minimatch('a/{b,c}', pattern, { nobrace: true }), true)
  t.equal(minimatch('a/b', pattern, { nobrace: true }), false)
  // each one again, from the cache
  for (const [o] of optionSets) minimatch('a/b', pattern, { ...o })
  t.equal(count.n, expect, 'not compiled again')
})

t.test('each platform has its own cache key', async t => {
  const env = process.env.__MINIMATCH_TESTING_PLATFORM__
  t.teardown(() => {
    if (env === undefined)
      delete process.env.__MINIMATCH_TESTING_PLATFORM__
    else process.env.__MINIMATCH_TESTING_PLATFORM__ = env
  })
  const platforms = ['darwin', 'linux', 'win32'] as const
  for (const defaultPlatform of platforms) {
    process.env.__MINIMATCH_TESTING_PLATFORM__ = defaultPlatform
    const { minimatch, count } = await countCompiles(t)
    const pattern = 'a/{b,c}'
    minimatch('a/b', pattern)
    minimatch('a/b', pattern, { platform: defaultPlatform })
    t.equal(count.n, 1, `${defaultPlatform}: the default platform`)
    for (const platform of [...platforms, 'aix'] as const) {
      if (platform === defaultPlatform) continue
      const before = count.n
      minimatch('a/b', pattern, { platform })
      minimatch('a/b', pattern, { platform })
      t.equal(count.n, before + 1, `${defaultPlatform}: ${platform}`)
    }
  }
})

t.test('inherited options are used, the same as Minimatch', t => {
  // a pattern that no other test puts in the cache
  const pattern = '?inherited'
  t.equal(
    minimatch('.inherited', pattern, Object.create({ dot: true })),
    true,
  )
  t.equal(minimatch('.inherited', pattern, {}), false)
  t.equal(
    minimatch('.inherited', pattern, Object.create({ dot: false })),
    false,
  )
  t.equal(minimatch('.inherited', pattern, { dot: true }), true)
  t.end()
})

t.test('the cached object keeps a copy of the options', t => {
  // match() reads flipNegate from the options of the object
  const pattern = '!copied'
  const options = { flipNegate: false }
  t.equal(minimatch('x', pattern, options), true)
  options.flipNegate = true
  t.equal(minimatch('x', pattern, { flipNegate: false }), true)
  t.end()
})

t.test('optimizationLevel below 1 is level 0', t => {
  t.equal(minimatch('b', 'a/../b', { optimizationLevel: 1 }), true)
  t.equal(minimatch('b', 'a/../b', { optimizationLevel: 0.5 }), false)
  t.equal(minimatch('b', 'a/../b', { optimizationLevel: 0 }), false)
  // the same as Minimatch, which only defaults undefined to 1
  t.equal(
    minimatch('b', 'a/../b', { optimizationLevel: null as any }),
    false,
  )
  t.end()
})

t.test('windowsPathsNoEscape and allowWindowsEscape', t => {
  const both = { windowsPathsNoEscape: false, allowWindowsEscape: false }
  t.equal(minimatch('a/b', 'a\\b', { windowsPathsNoEscape: false }), false)
  t.equal(minimatch('a/b', 'a\\b', both), true)
  t.equal(minimatch('a/b', 'a\\b', { allowWindowsEscape: true }), false)
  // only false turns it on, not other falsy values
  t.equal(
    minimatch('a/b', 'a\\b', { allowWindowsEscape: 0 as any }),
    false,
  )
  t.end()
})

t.test('filter() uses the options at its first test', t => {
  const options = { dot: false }
  const f = filter('*', options)
  t.equal(f('.x'), false)
  options.dot = true
  t.equal(f('.x'), false)
  t.equal(filter('*', options)('.x'), true)
  t.end()
})

t.test('more patterns than the cache holds', t => {
  for (let r = 0; r < 2; r++) {
    for (let i = 0; i < 600; i++) {
      t.equal(minimatch(`a/x${i}.js`, `a/x${i}.*`), true)
      t.equal(minimatch(`a/x${i}.js`, `a/x${i + 1}.*`), false)
    }
  }
  t.end()
})

// GHSA-hqmv-qgp3-jx75: the cache must not keep large compiled patterns,
// or a few unique patterns with large brace expansions use up the heap.
t.test('a pattern with a large brace expansion is not kept', async t => {
  const { minimatch, count } = await countCompiles(t)
  // 10,000 expanded rows
  const pattern = '{a,b,c,d,e,f,g,h,i,j}'.repeat(4) + '/large'
  t.equal(minimatch('abcd/large', pattern), true)
  t.equal(minimatch('no-match', pattern), false)
  t.equal(count.n, 2, 'compiled each time, not kept in the cache')
  // a small pattern is still kept
  t.equal(minimatch('a/b', 'a/{b,c}'), true)
  t.equal(minimatch('a/c', 'a/{b,c}'), true)
  t.equal(count.n, 3)
})

t.test('a long pattern is not kept', async t => {
  const { minimatch, count } = await countCompiles(t)
  const pattern = '*(a|b)'.repeat(1000) + '{x,y}'
  t.equal(minimatch('ax', pattern), true)
  t.equal(minimatch('ax', pattern), true)
  t.equal(count.n, 2, 'compiled each time, not kept in the cache')
})

t.test(
  'the cache is bounded by the total size of the patterns',
  async t => {
    const { minimatch, count } = await countCompiles(t)
    // each of these is small enough to be kept, but far fewer than
    // 256 of them must not all be kept at once
    const mk = (i: number) =>
      `${i}/{${Array.from({ length: 100 }, (_, j) => `x${j}-long-name`).join(',')}}`
    const first = mk(0)
    t.equal(minimatch('0/x1-long-name', first), true)
    t.equal(minimatch('0/x1-long-name', first), true)
    t.equal(count.n, 1, 'kept')
    for (let i = 1; i < 100; i++) minimatch(`${i}/x1-long-name`, mk(i))
    t.equal(count.n, 100)
    t.equal(minimatch('0/x1-long-name', first), true)
    t.equal(count.n, 101, 'dropped from the cache before 256 patterns')
  },
)
