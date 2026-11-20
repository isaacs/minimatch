import { assert, test } from 'ubqtest'
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

test('deeply nested extglobs are rejected, not a stack overflow', () => {
  for (const type of '*?+@!') {
    for (const n of [1200, 5000, 20000]) {
      const p = nested(type, n)
      assert.throws(() => new Minimatch(p), tooMany, `${type} depth=${n}`)
      assert.throws(() => minimatch('a', p), tooMany, `${type} depth=${n}`)
    }
  }
})

test('many extglobs in a row are rejected, not a stack overflow', () => {
  for (const type of '*?+@!') {
    const p = inRow(type, 8000)
    assert.throws(
      () => {
        const mm = new Minimatch(p)
        mm.match('aaa')
        mm.match('b')
      },
      tooMany,
      `${type} x8000`,
    )
  }
})

test('the limit is per path portion', () => {
  const p = Array(10).fill(inRow('?', 200)).join('/')
  const path = Array(10).fill('a').join('/')
  assert.equal(minimatch(path, p), true)
})

test('patterns within the limit still work', () => {
  for (const type of '*?+@') {
    assert.equal(minimatch('a', nested(type, 256)), true, `${type} nested`)
    assert.equal(
      minimatch('b', nested(type, 256)),
      false,
      `${type} nested`,
    )
  }
  const a256 = 'a'.repeat(256)
  assert.equal(minimatch('a', inRow('*', 256)), true, '* in a row')
  assert.equal(minimatch('a', inRow('?', 256)), true, '? in a row')
  assert.equal(minimatch(a256, inRow('+', 256)), true, '+ in a row')
  assert.equal(minimatch(a256, inRow('@', 256)), true, '@ in a row')
  assert.equal(minimatch('a', inRow('@', 256)), false, '@ in a row')
  assert.equal(typeof minimatch('a', nested('!', 256)), 'boolean')
  assert.equal(minimatch('b', inRow('!', 256)), true, '! in a row')
})

test('escaped extglobs and noext are not counted', () => {
  assert.equal(minimatch('*(a)'.repeat(300), '\\*(a)'.repeat(300)), true)
  const p = '*(a)'.repeat(300)
  assert.equal(minimatch(p, p, { noext: true }), true)
})

test('merging brace alternatives does not hit the limit', () => {
  const alts = Array.from({ length: 300 }, (_, i) => `x${i}*(a)`)
  const mm = new Minimatch(`{${alts.join(',')}}`)
  assert.equal(mm.match('x299aaa'), true)
  assert.equal(mm.match('x0'), true)
  assert.equal(mm.match('y0'), false)
})
