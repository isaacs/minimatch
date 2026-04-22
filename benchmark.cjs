const { minimatch } = require('./dist/commonjs/index.js')
const { expand } = require('brace-expansion')

// Generate test files
const pattern = '**/*.js'
const files = expand('x/y/z/{1..1000}.js')

// Warmup
for (let i = 0; i < 100; i++) {
  for (let f = 0; f < files.length; f++) {
    minimatch(files[f], pattern)
  }
}

// Benchmark
const iterations = 1000
const start = process.hrtime.bigint()

for (let i = 0; i < iterations; i++) {
  for (let f = 0; f < files.length; f++) {
    minimatch(files[f], pattern)
  }
}

const end = process.hrtime.bigint()
const durationNs = Number(end - start)
const durationSec = durationNs / 1e9
const totalOps = iterations * files.length
const opsPerSec = totalOps / durationSec

console.log(`ops_per_sec=${opsPerSec.toFixed(2)}`)
