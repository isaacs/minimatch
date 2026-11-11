import t from 'tap'
import { minimatch, Minimatch } from '../src/index.js'

// GHSA-2349-h8hg-73g9: deeply nested or very many extglobs in one
// path portion must not exhaust the call stack when the pattern is
// compiled or matched.

const nested = (type: string, n: number) =>
  `${type}(`.repeat(n) + 'a' + ')'.repeat(n)
const inRow = (type: string, n: number) => `${type}(a)`.repeat(n)

const tooMany = {
  name: 'TypeError',
  message: 'pattern has too many extglobs',
}

t.test('deeply nested extglobs are rejected, not a stack overflow', t => {
  for (const type of '*?+@!') {
    for (const n of [1200, 5000, 20000]) {
      const p = nested(type, n)
      t.throws(() => new Minimatch(p), tooMany, `${type} depth=${n}`)
      t.throws(() => minimatch('a', p), tooMany, `${type} depth=${n}`)
    }
  }
  t.end()
})

t.test('many extglobs in a row are rejected, not a stack overflow', t => {
  for (const type of '*?+@!') {
    const p = inRow(type, 8000)
    t.throws(
      () => {
        const mm = new Minimatch(p)
        mm.match('aaa')
        mm.match('b')
      },
      tooMany,
      `${type} x8000`,
    )
  }
  t.end()
})

t.test('the limit is per path portion', t => {
  const p = Array(10).fill(inRow('?', 200)).join('/')
  const path = Array(10).fill('a').join('/')
  t.equal(minimatch(path, p), true)
  t.end()
})

t.test('patterns within the limit still work', t => {
  for (const type of '*?+@') {
    t.equal(minimatch('a', nested(type, 256)), true, `${type} nested`)
    t.equal(minimatch('b', nested(type, 256)), false, `${type} nested`)
  }
  const a256 = 'a'.repeat(256)
  t.equal(minimatch('a', inRow('*', 256)), true, '* in a row')
  t.equal(minimatch('a', inRow('?', 256)), true, '? in a row')
  t.equal(minimatch(a256, inRow('+', 256)), true, '+ in a row')
  t.equal(minimatch(a256, inRow('@', 256)), true, '@ in a row')
  t.equal(minimatch('a', inRow('@', 256)), false, '@ in a row')
  t.type(minimatch('a', nested('!', 256)), 'boolean', '! nested')
  t.equal(minimatch('b', inRow('!', 256)), true, '! in a row')
  t.end()
})

t.test('escaped extglobs and noext are not counted', t => {
  t.equal(minimatch('*(a)'.repeat(300), '\\*(a)'.repeat(300)), true)
  const p = '*(a)'.repeat(300)
  t.equal(minimatch(p, p, { noext: true }), true)
  t.end()
})

t.test('merging brace alternatives does not hit the limit', t => {
  const alts = Array.from({ length: 300 }, (_, i) => `x${i}*(a)`)
  const mm = new Minimatch(`{${alts.join(',')}}`)
  t.equal(mm.match('x299aaa'), true)
  t.equal(mm.match('x0'), true)
  t.equal(mm.match('y0'), false)
  t.end()
})
