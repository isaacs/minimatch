const which = process.argv[2]

const matchers = new Set([
  //'baseline',
  'minimatch-current',
  //'minimatch-3',
  //'minimatch-4',
  //'minimatch-5',
  // 'anymatch',
  // 'glob-to-regexp',
  'micromatch',
  'picomatch',
])

const patterns = require('./patterns.json')
const filenames = require('./filenames.json')
const totalTests = patterns.length * filenames.length

const runAll = async () => {
  const promiseSpawn = require('@npmcli/promise-spawn')
  const promiseCallLimit = require('promise-call-limit')
  const limit = Math.max(require('os').cpus().length - 1, 1)
  const fns = []
  for (const which of matchers) {
    fns.push(async () => {
      console.error(`testing ${which}...`)
      const start = performance.now()
      const res = await promiseSpawn(process.execPath, [__filename, which], {
        stdioString: true,
      }, { matcher: which })
      const dur = performance.now() - start
      console.error(`finished ${which} (${dur}ms)`)
      return res
    })
  }
  const results = (await promiseCallLimit(fns, limit)).map(result => {
    let output
    try {
      output = JSON.parse(result.stdout)
    } catch (e) {
      output = e
    }
    if (result.stderr) {
      output.stderr = result.stderr
    }
    output.mps = totalTests / output.total
    return [result.matcher, output]
  }).sort(([_,{total:a}], [__,{total:b}]) => b - a)
  const max = Math.min(...results.map(([_, r]) => r.total))
  const mdt = require('markdown-tables')
  // todo: make a pretty graph
  for (const [name, res] of results) {
    console.log(`## ${name} (${round(max/res.total)} ${round(res.mps)}mps)`)
    if (res.stderr) {
      console.error(res.stderr.trim())
    }
    console.log(mdt(['pattern,setup,match,found'].concat(
      Object.entries(res).filter(([t,r]) => typeof r === 'object')
      .map(([pattern, {setup, match, found}]) =>
        [
          pattern.replace(/\,/g, '_'),
          round(setup), round(match), found].join(','))).join('\n')))
  }
  //console.log(require('util').inspect(results, { depth: Infinity }))
}

const R = 100000
const round = n => Math.floor(n * R)/R

const runTest = which => {
  const [[times, results], total] = time(() => runTest_(which))
  times.total = total
  console.log(JSON.stringify(times))

  const logMatches = Object.entries(results).map(([pattern, res]) =>
    `${pattern}\n  ${JSON.stringify(res, 0, 2).split('\n').join('\n  ')}\n`).join('')
  const fs = require('fs')
  fs.writeFileSync(`${__dirname}/matches-${which}.json`, logMatches)
}

const runTest_ = which => {
  const output = {}
  const n = 1000

  const times = {}
  const results = {}
  for (const p of patterns) {
    const [matcher, setup] = time(() => getMatcher(which, p))
    if (!matcher) {
      continue
    }
    const [matched, match] = time(() => filenames.filter(f => matcher(f)))
    times[p] = {setup, match, found: matched.length}
    results[p] = matched
  }
  return [times, results]
}

const getMatcher = (which, pattern) => {
  try {
    const mod = which === 'baseline' ? null : require(which)
    switch (which) {
      case 'baseline': {
        return s => false
      }
      case 'minimatch-3':
      case 'minimatch-4':
      case 'minimatch-5':
      case 'minimatch-current': {
        const m = new mod.Minimatch(pattern, {
          nonegate: true,
          optimizationLevel: 2,
        })
        return s => m.match(s)
      }
      case 'picomatch': {
        const m = mod(pattern)
        return s => m(s)
      }
      case 'anymatch': {
        return s => mod([pattern], s)
      }
      case 'glob-to-regexp': {
        const re = mod(pattern, { extended: true, globstar: true })
        return s => re.test(s)
      }
      case 'nanomatch':
      case 'micromatch': {
        const m = mod.matcher(pattern)
        return s => m(s)
      }
      default: {
        throw new Error(`unknown matcher ${which}`)
      }
    }
  } catch (er) {
    console.error(pattern, er.message)
    return null
  }
}

const time = fn => {
  const start = performance.now()
  const res = fn()
  return [res, performance.now() - start]
}

if (!which) {
  runAll()
} else if (!matchers.has(which)) {
  console.error(`unknown matcher: ${which}`)
  process.exit(1)
} else {
  runTest(which)
}

