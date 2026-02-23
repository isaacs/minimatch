import t from 'tap'
import { AST, minimatch, type MinimatchOptions } from '../dist/cjs/index.js'

const o: MinimatchOptions = { nonegate: true }

const patterns = [
  '!(!(a|b))',
  '?(*(a|b))',
  '?(+(a|b))',
  '@(!(a|b))',
  '@(?(a|b))',
  '@(*(a|b))',
  '@(+(a|b))',
  '+(?(a|b))',
  '+(*(a|b))',
  'x!(!(a|b))',
  'x?(*(a|b))',
  'x?(+(a|b))',
  'x@(!(a|b))',
  'x@(?(a|b))',
  'x@(*(a|b))',
  'x@(+(a|b))',
  'x+(?(a|b))',
  'x+(*(a|b))',
  '!(!(a|b))y',
  '?(*(a|b))y',
  '?(+(a|b))y',
  '@(!(a|b))y',
  '@(?(a|b))y',
  '@(*(a|b))y',
  '@(+(a|b))y',
  '+(?(a|b))y',
  '+(*(a|b))y',
  // plus this weirdo
  '@(a*b)',
  'x@(a*b)',
  '@(a*b)y',
]

for (const p of patterns) {
  t.test(p, t => {
    const a = AST.fromGlob(p)
    t.matchSnapshot(a.toRegExpSource(), 'regexpSource')
    t.matchSnapshot(a.toString(), 'toString after flattening')
    t.end()
  })
}

// make sure we didn't break @(!(..))
t.test('do not break @!', async t => {

  t.equal(minimatch('by', '@(!(a|b))y', o), false)
  t.equal(minimatch('by', '!(a|b)y', o), false)
  t.equal(minimatch('xy', '@(!(a|b))y', o), true)
  t.equal(minimatch('xy', '!(a|b)y', o), true)

  t.equal(minimatch('xb', 'x@(!(a|b))', o), false)
  t.equal(minimatch('xb', 'x!(a|b)', o), false)
  t.equal(minimatch('xy', 'x@(!(a|b))', o), true)
  t.equal(minimatch('xy', 'x!(a|b)', o), true)

  t.equal(minimatch('x', '@(!(a|b))', o), true)
  t.equal(minimatch('x', '!(a|b)', o), true)
  t.equal(minimatch('b', '@(!(a|b))', o), false)
  t.equal(minimatch('b', '!(a|b)', o), false)
})
