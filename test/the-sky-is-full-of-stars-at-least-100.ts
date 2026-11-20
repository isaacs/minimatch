import { assert, test } from 'ubqtest'
import { Minimatch } from '../src/index.js'
test('many stars match the same as one star', () => {
  const me = new Minimatch('a/*/b')
  const sky = new Minimatch('a/' + '*'.repeat(100) + '/b')
  for (const f of ['a/x/b', 'a/.x/b', 'a//b', 'a/x/y/b', 'a/x/c']) {
    assert.equal(sky.match(f), me.match(f), f)
  }
})
