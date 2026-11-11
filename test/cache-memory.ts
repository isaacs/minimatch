// The minimatch() cache must not keep an unbounded amount of memory,
// even when each pattern compiles to a very large Minimatch object.

import { spawnSync } from 'node:child_process'
import { expand } from 'brace-expansion'
import t from 'tap'

const index = new URL('../dist/esm/index.js', import.meta.url).href

t.test('large compiled patterns are not all kept', t => {
  // Each of these 84 byte patterns compiles to 8192 rows, which hold
  // several MB. If the cache kept all of them, a 64 MB heap would be
  // exhausted long before the loop ends.
  const script = `
    import { minimatch } from ${JSON.stringify(index)}
    for (let i = 0; i < 30; i++) {
      if (minimatch('a/b', '{a,b}/'.repeat(13) + '*' + i)) {
        throw new Error('should not match')
      }
    }
    console.log('ok')
  `
  const res = spawnSync(
    process.execPath,
    ['--max-old-space-size=64', '--input-type=module', '-e', script],
    { encoding: 'utf8' },
  )
  t.equal(res.stdout.trim(), 'ok', 'process survives')
  t.equal(res.status, 0, 'exit code 0', { stderr: res.stderr.slice(-500) })
  t.end()
})

t.test('a pattern too large to keep still matches', async t => {
  const count = { n: 0 }
  const { minimatch, filter }: typeof import('../dist/esm/index.js') =
    await t.mockImport('../dist/esm/index.js', {
      'brace-expansion': {
        expand: (...args: Parameters<typeof expand>) => {
          count.n++
          return expand(...args)
        },
      },
    })
  const big = `{1..20000..1}/x`
  t.equal(minimatch('5/x', big), true)
  t.equal(minimatch('20001/x', big), false)
  t.equal(filter(big)('77/x'), true)
  // it is compiled each time, because it is not kept
  t.equal(count.n, 3)

  // small patterns are still kept
  const small = 'a/{b,c}.js'
  t.equal(minimatch('a/b.js', small), true)
  t.equal(minimatch('a/c.js', small), true)
  t.equal(count.n, 4)
})

t.test('the cache is full when its objects are large', async t => {
  const count = { n: 0 }
  const { minimatch }: typeof import('../dist/esm/index.js') =
    await t.mockImport('../dist/esm/index.js', {
      'brace-expansion': {
        expand: (...args: Parameters<typeof expand>) => {
          count.n++
          return expand(...args)
        },
      },
    })
  // 128 rows each, small enough to keep, but far fewer than 256 of
  // them fill the cache
  const medium = (i: number) => '{a,b}/'.repeat(6) + `{x${i},y}`
  t.equal(minimatch('a/'.repeat(6) + 'x0', medium(0)), true)
  t.equal(minimatch('b/'.repeat(6) + 'y', medium(0)), true)
  t.equal(count.n, 1, 'kept')
  for (let i = 1; i < 80; i++) {
    t.equal(minimatch('a/'.repeat(6) + 'x' + i, medium(i)), true)
  }
  t.equal(count.n, 80)
  t.equal(minimatch('a/'.repeat(6) + 'x0', medium(0)), true)
  t.equal(count.n, 81, 'pushed out by the weight of the others')
})
