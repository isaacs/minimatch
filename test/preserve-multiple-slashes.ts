import t from 'tap'
import { Minimatch } from '../dist/esm/index.js'

const mm = new Minimatch('a///b', {
  preserveMultipleSlashes: true,
})

t.same(mm.set, [['a', '', '', 'b']])

t.same(mm.globSet, ['a///b'])
