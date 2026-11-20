import { assert, test } from 'ubqtest'
import { Minimatch } from '../dist/esm/index.js'

const nomagic = '../1/2/3'
const yesmagic = '../x'

test('nocase with and without magic', () => {
  assert.deepEqual(new Minimatch(nomagic, { nocase: true }).set, [
    ['..', '1', '2', '3'],
  ])

  assert.match(new Minimatch(yesmagic, { nocase: true }).set, [
    ['..', { pattern: 'x', options: { nocase: true } }],
  ])
})
