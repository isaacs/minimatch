// Match typical glob and ignore patterns against a list of real
// paths, the way that a glob walk or an ignore filter does.
//
// Each pattern is first timed on its own, over all the paths. Then
// all of the patterns are timed with the paths in the outer loop, as
// an ignore list tests each path against every pattern in turn.
//
// usage: node benchmark/realistic.mjs [minimatch esm entry ...]
//
// With no args, test the build in ../dist. With more than one, show
// them side by side. Each one runs in its own process. Run
// gen-realistic-paths.mjs first to make the path list.
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const ROUNDS = 7

/** @type {[string, object?][]} */
const patterns = [
  ['**/*.js'],
  ['**/*.{js,mjs,cjs,ts,mts,cts}'],
  ['**/*.d.ts'],
  ['**/node_modules/**'],
  ['**/test/**/*.@(js|ts)'],
  ['**/!(*.d).ts'],
  ['**/*.md'],
  ['**/*.md', { nocase: true }],
  ['**/[A-Z]*.md'],
  ['**/package.json'],
  ['**/LICENSE*'],
  ['**/*.@(png|jpg|gif|svg)'],
  ['**/*.min.js'],
  ['**/?(*.)@(spec|test).[jt]s'],
  ['**/@(dist|build)/**'],
  ['**/!(node_modules)/**/*.md'],
  ['**/.*', { dot: true }],
  ['**/.git/**', { dot: true }],
  ['*.js', { matchBase: true }],
  ['node_modules/*/package.json'],
  ['src/**'],
]

const runOne = async entry => {
  const { Minimatch } = await import(pathToFileURL(entry))
  const paths = JSON.parse(
    readFileSync(resolve(import.meta.dirname, 'realistic-paths.json'), 'utf8'),
  )
  const results = []
  for (const [pattern, options = {}] of patterns) {
    const t0 = performance.now()
    const mm = new Minimatch(pattern, options)
    const setup = performance.now() - t0
    const times = []
    let found = 0
    for (let r = 0; r < ROUNDS; r++) {
      found = 0
      const t = performance.now()
      for (const p of paths) if (mm.match(p)) found++
      times.push(performance.now() - t)
    }
    times.sort((a, b) => a - b)
    results.push({ setup, match: times[ROUNDS >> 1], found })
  }
  const mms = patterns.map(([p, o = {}]) => new Minimatch(p, o))
  const times = []
  let found = 0
  for (let r = 0; r < ROUNDS; r++) {
    found = 0
    const t = performance.now()
    for (const p of paths) for (const mm of mms) if (mm.match(p)) found++
    times.push(performance.now() - t)
  }
  times.sort((a, b) => a - b)
  return {
    paths: paths.length,
    results,
    pathOuter: { match: times[ROUNDS >> 1], found },
  }
}

const label = ([p, o]) =>
  o ? `${p} ${JSON.stringify(o).replace(/"/g, '')}` : p

if (process.argv[2] === '--run') {
  console.log(JSON.stringify(await runOne(process.argv[3])))
} else {
  const entries = process.argv.slice(2)
  if (!entries.length) {
    entries.push(resolve(import.meta.dirname, '../dist/esm/index.js'))
  }
  const runs = entries.map(e =>
    JSON.parse(
      execFileSync(process.execPath, [import.meta.filename, '--run', e], {
        encoding: 'utf8',
      }),
    ),
  )
  const ms = n => n.toFixed(2).padStart(9)
  const width = Math.max(...patterns.map(p => label(p).length))
  console.log(`${runs[0].paths} paths, median of ${ROUNDS} rounds, ms\n`)
  entries.forEach((e, i) => console.log(`[${i}] ${e}`))
  console.log(
    '\n' +
      'pattern'.padEnd(width) +
      entries.map((_, i) => `[${i}]`.padStart(9)).join('') +
      '   found',
  )
  const totals = entries.map(() => 0)
  patterns.forEach((p, j) => {
    const row = runs.map(r => r.results[j])
    row.forEach((r, i) => (totals[i] += r.match))
    const found = [...new Set(row.map(r => r.found))]
    console.log(
      label(p).padEnd(width) +
        row.map(r => ms(r.match)).join('') +
        '   ' +
        (found.length === 1 ? found[0] : `DIFFERS: ${found.join(' / ')}`),
    )
  })
  console.log('total'.padEnd(width) + totals.map(ms).join(''))
  const outer = runs.map(r => r.pathOuter)
  const found = [...new Set(outer.map(r => r.found))]
  console.log(
    'all, paths outer'.padEnd(width) +
      outer.map(r => ms(r.match)).join('') +
      '   ' +
      (found.length === 1 ? found[0] : `DIFFERS: ${found.join(' / ')}`),
  )
}
