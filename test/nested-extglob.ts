import t from 'tap'
import { minimatch } from '../src/index.js'

function timed(fn: () => void) {
  const s = performance.now()
  return {
    result: fn(),
    ms: performance.now() - s,
  }
}

const cases: [string, number][] = [
  ['*(+(*(a|b)|c)|d)', 15],
  ['!(a|?(b|c)|d)', 15],
  ['@(a|?(b|c)|d)', 15],
  ['+(a|?(b|c)|d)', 15],
  ['+(a|*(b|c)|d)', 15],
  ['*(*(*(*(*(*(a|f)|g)|h)|i)|j)|k)', 15],
  ['*(+(*(+(*(+(a|m)|n)|o)|p)|q)|r)', 15],
  ['*(*(+(+(?(@(a|t)|u)|v)|w)|x)|y)', 15],
  ['*(*(*(a|a)))', 15],
  ['*(*(*(a|c)))', 17],
  ['*(*(*(a|e)))', 19],
  ['*(*(a|g))', 23],
  ['*(a|i)', 101],
  ['a+(a|*(b|c)|d)', 15],
  ['+(a|*(b|c)|d)a', 15],
  ['a@(a|?(b|c)|d)', 15],
  ['@(a|?(b|c)|d)a', 15],
  ['a+(a|?(b|c)|d)', 15],
  ['+(a|?(b|c)|d)a', 15],
  ['a+(a|*(b|c)|d)', 15],
  ['+(a|*(b|c)|d)a', 15],
]

for (const [pat, n] of cases) {
  const tm = timed(() => minimatch('a'.repeat(n) + 'z', pat))
  t.ok(tm.ms < 100, `${pat} chars=${n} ms=${tm.ms}`, {
    ...tm,
    wanted: 'ms should be < 100',
  })
}
