import { assert, test } from 'ubqtest'
import { Minimatch } from '../dist/esm/index.js'

const patterns = []
for (const a of ['**', '**/**', '**/**/**']) {
  for (const b of ['**', '**/**', '**/**/**']) {
    for (const c of ['**', '**/**', '**/**/**']) {
      patterns.push(`x/${a}/y/${b}/z/${c}`)
    }
  }
}

test('consecutive globstars collapse', () => {
  for (const m of patterns.map(p => new Minimatch(p))) {
    assert.deepEqual(m.globParts, [['x', '**', 'y', '**', 'z', '**']])
  }
})
