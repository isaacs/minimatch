import t from 'tap'
import { unescape, escape, Minimatch } from '../dist/esm/index.js'
import patterns from './patterns.js'

for (const p of patterns) {
  if (!Array.isArray(p) || typeof p[0] !== 'string') continue
  const pattern = p[0]
  const opts = p[2] || {}
  const escapep = escape(pattern)
  const escapew = escape(pattern, { windowsPathsNoEscape: true })
  t.equal(unescape(escapep), pattern, 'posix unescape(' + pattern + ')')
  t.equal(
    unescape(escapew, {
      windowsPathsNoEscape: true,
    }),
    pattern,
    'win32 unescape(' + pattern + ')'
  )
  const mmp = new Minimatch(escapep, { ...opts, nocaseMagicOnly: true })
  const mmw = new Minimatch(escapew, {
    ...opts,
    platform: 'win32',
    windowsPathsNoEscape: true,
    nocaseMagicOnly: true,
  })
  t.equal(mmp.hasMagic(), false, 'posix escape(' + pattern + ')')
  t.equal(mmw.hasMagic(), false, 'win32 escape(' + pattern + ')')
  const maybeMagic = new Minimatch(pattern, opts)
  t.matchSnapshot([maybeMagic.set, maybeMagic.hasMagic()], pattern)
}

// edge case, [\\] should be unescaped as [], not \\
t.equal(unescape('[\\]'), '[]')

t.equal(new Minimatch('{a,b}').hasMagic(), false)
t.equal(new Minimatch('{a,b}', { magicalBraces: true }).hasMagic(), true)
