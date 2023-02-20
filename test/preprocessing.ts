import {Minimatch, braceExpand} from '../'
import t from 'tap'

const m = new Minimatch('*')
const noGS = new Minimatch('*', { noglobstar: true })
const ms = new Minimatch('*', {preserveMultipleSlashes: true})

const patterns = [
  '**/..',
  '**/../',
  '**/../x',
  'a/b/c/**///../x/y/z',
  'a/b/c/..///d',
  'a/{*,c}/b',
  'a/{*,.c}/b',
  'a/{c,*}/b',
  'a/{.c,*}/b',
  'a/{c/b/d,*/b/*}/e',
  'a/{*/b/d,c/b/*}/e',
  'a/{c/b/*,*/b/d}/e',
  '{a/**/b,a/b}',
  'a/{,**/}b',
  'a/{,**/}*/b',
  'a/{**/,}b',
  'a/{**/,}*/b',
]

const exp = (p:string) => braceExpand(p).map(s => s.split('/'))

t.plan(patterns.length)
for (const p of patterns) {
  t.test(p, t => {
    t.matchSnapshot(m.preprocess(exp(p)), 'defaults')
    t.matchSnapshot(noGS.preprocess(exp(p)), 'no globstar')
    t.matchSnapshot(ms.preprocess(exp(p)), 'multislash')
    t.end()
  })
}
