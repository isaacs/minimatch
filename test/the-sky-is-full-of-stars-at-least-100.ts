import t from 'tap'
import { Minimatch } from '../src/index.js'
const me = 'a/*/b'
const sky = 'a/' + '*'.repeat(100) + '/b'
t.strictSame(new Minimatch(sky).set, new Minimatch(me).set)
