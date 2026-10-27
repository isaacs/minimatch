import t from 'tap'
import { Minimatch } from '../src/index.js'
const me = new Minimatch('a/*/b')
const sky = new Minimatch('a/' + '*'.repeat(100) + '/b')
for (const f of ['a/x/b', 'a/.x/b', 'a//b', 'a/x/y/b', 'a/x/c']) {
  t.equal(sky.match(f), me.match(f), f)
}
