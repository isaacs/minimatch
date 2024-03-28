import t from 'tap'
import { minimatch } from '../dist/esm/index.js'

const files = ['a[]b', '[b-a]x', 'a]b', 'a[]]b', 'a[[]b']

const patterns = [
  '\\[b-a]*',
  '[b-a\\]*',
  'a[]*',
  '[b-a]*',
  'a[]]*',
  'a[[]*',
  'a[[]]*',
]

// uncomment and pipe stderr into a bash script to test bash behavior
// console.error('mkdir x; cd x; shopt -s nullglob')
// for (const f of files) {
//   console.error(`touch '${JSON.stringify(f).slice(1, -1)}'`)
// }
//
// console.error('ls -laF')
// for (const p of patterns) {
//   console.error(`echo PATTERN='${p}'`)
//   console.error(`for i in ${p}; do echo "$i"; done`)
// }
//
// console.error('cd ..; rm -rf x')

const matches = {}

for (const pattern of patterns) {
  for (const file of files) {
    if (minimatch(file, pattern)) {
      matches[pattern] = matches[pattern] || []
      matches[pattern].push(file)
    }
  }
}

t.comment({ files, patterns, matches })
t.matchSnapshot({ files, patterns, matches })
