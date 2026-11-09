import t from 'tap'
import { escape, unescape } from '../src/index.js'

t.test('default mode unescapes adjacent bracket escapes', t => {
  for (const magicalBraces of [false, true]) {
    const options = { magicalBraces }
    for (const value of ['**', '??', '[]', '[a][b]', '*?[]()', '{}{}']) {
      const escaped = escape(value, {
        windowsPathsNoEscape: true,
        magicalBraces,
      })
      t.equal(
        unescape(escaped, options),
        value,
        JSON.stringify({ value, options }),
      )
    }
    t.equal(unescape('[a][b][c]', options), 'abc')
    t.equal(unescape('x[a][b]y', options), 'xaby')
    t.equal(unescape('\\\\[a][b]', options), '\\ab')
    t.equal(unescape('\\[a][b]', options), '[a]b')
    t.equal(unescape('[/][\\]', options), '[/][]')
  }
  t.end()
})

t.test('backslash and brace options keep their existing behavior', t => {
  for (const magicalBraces of [false, true]) {
    for (const windowsPathsNoEscape of [false, true]) {
      const options = { magicalBraces, windowsPathsNoEscape }
      for (const value of [
        '**',
        '??',
        '[]',
        '[a][b]',
        '*?[]()',
        '{}{}',
        'a/b',
        'a\\b',
      ]) {
        t.equal(unescape(escape(value, options), options), value)
      }
      t.equal(unescape('[a][b][c]', options), 'abc')
      t.equal(unescape('[{][}]', options), magicalBraces ? '{}' : '[{][}]')
      t.equal(
        unescape('\\{\\}', options),
        magicalBraces && !windowsPathsNoEscape ? '{}' : '\\{\\}',
      )
      t.equal(unescape('[/]', options), '[/]')
      t.equal(unescape('\\*', options), windowsPathsNoEscape ? '\\*' : '*')
    }
  }
  t.end()
})
