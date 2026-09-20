import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import t from 'tap'

type EnginesPkg = {
  version?: string
  engines?: { node?: string }
  dependencies?: { 'brace-expansion'?: string }
}

const pkg = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
) as EnginesPkg

const brace = createRequire(import.meta.url)(
  'brace-expansion/package.json',
) as EnginesPkg

t.test('brace-expansion stays installable on declared Node 18', t => {
  // 0215dfe caret-bumped to ^5.0.8; 5.0.8+ requires Node 20+, so
  // npm install warns EBADENGINE on Node 18 while we still claim it.
  t.match(pkg.engines?.node, /\b18\b/, 'engines still include Node 18')
  t.equal(
    pkg.dependencies?.['brace-expansion'],
    '5.0.7',
    'pin exactly; ^/~ 5.0.7 resolves to 5.0.8+ which dropped Node 18',
  )
  t.equal(brace.version, '5.0.7')
  t.match(
    brace.engines?.node,
    /\b18\b/,
    `brace-expansion@${brace.version} engines include Node 18`,
  )
  t.end()
})
