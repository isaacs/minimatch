import t from 'tap'
import { Minimatch } from '../dist/esm/index.js'

t.test('consecutive stars are coalesced', t => {
  const re1 = new Minimatch('a*b').makeRe()
  const re3 = new Minimatch('a***b').makeRe()
  t.equal(re3.toString(), re1.toString(), 'a***b same regex as a*b')
  t.end()
})

t.test('100+ consecutive stars do not cause ReDoS', t => {
  const stars = '*'.repeat(100)
  const pattern = 'a' + stars + 'b'
  const start = Date.now()
  const mm = new Minimatch(pattern)
  const re = mm.makeRe()
  re.test('a' + 'c'.repeat(25))
  const elapsed = Date.now() - start
  t.ok(elapsed < 1000, 'completed in ' + elapsed + 'ms (< 1s)')
  t.end()
})
