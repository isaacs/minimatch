// the **/.. split pass must bound total work, not just pattern count:
// a short pattern with many **/.. occurrences must not exhaust memory
// or take minutes to compile (residual of the 11.0.1 limit)

import t from 'tap'
import { Minimatch } from '../dist/esm/index.js'

t.test('many **/.. splits are bounded by total cells, not just count', t => {
  const t0 = Date.now()
  const p = Array(600).fill('**/../a/b').join('/') + '/z'
  const mm = new Minimatch(p, { optimizationLevel: 2 })
  const ms = Date.now() - t0
  t.ok(mm.set.length < 100_000, 'pattern set stays small: ' + mm.set.length)
  t.ok(ms < 5000, 'compiles in bounded time: ' + ms + 'ms')
  t.end()
})

t.test('bounded split still matches the same paths', t => {
  const mm = new Minimatch('**/../a/**/../b/z', { optimizationLevel: 2 })
  t.equal(mm.match('a/b/z'), true)
  t.equal(mm.match('x/a/y/b/z'), true)
  t.equal(mm.match('a/z'), false)
  t.end()
})
