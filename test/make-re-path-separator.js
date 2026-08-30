import t from 'tap'
import { makeRe, minimatch } from '../dist/esm/index.js'

for (const [pattern, path, valid] of [
  ['[^a]', '/', 'b'],
  ['*[^a]', 'a/', 'ab'],
  ['[[:punct:]]', '/', '!'],
]) {
  t.test(pattern, t => {
    const re = makeRe(pattern)
    t.ok(re)
    t.notOk(minimatch(path, pattern))
    t.notOk(re.test(path))
    t.ok(minimatch(valid, pattern))
    t.ok(re.test(valid))
    t.end()
  })
}
