import t from 'tap'
import { minimatch, Minimatch } from '../src/index.js'

// é as one code point, and as e and a combining accent
const nfc = 'é'
const nfd = 'é'

t.test('without normalize, the forms do not match', t => {
  t.equal(minimatch(`a/caf${nfd}`, `a/caf${nfc}`), false)
  t.equal(minimatch(`a/caf${nfd}.js`, `**/caf${nfc}*`), false)
  t.end()
})

t.test('string and magic portions', t => {
  for (const normalize of [true, 'NFC', 'NFD'] as const) {
    const o = { normalize }
    t.equal(minimatch(`a/caf${nfd}`, `a/caf${nfc}`, o), true, 'string')
    t.equal(minimatch(`a/caf${nfc}`, `a/caf${nfd}`, o), true, 'string')
    t.equal(minimatch(`caf${nfd}/x.js`, `caf${nfc}/*.js`, o), true)
    t.equal(minimatch(`a/caf${nfd}.js`, `**/caf${nfc}*`, o), true, 'magic')
    t.equal(minimatch(`a/caf${nfd}.js`, `**/caf${nfc}*`, o), true, 'split')
    t.equal(
      minimatch(`a/b/caf${nfd}`, `caf${nfc}`, { ...o, matchBase: true }),
      true,
    )
    t.equal(minimatch(`a/caf${nfd}/b`, `**/caf${nfc}/**`, o), true)
    t.equal(minimatch(`a/cafe/b`, `**/caf${nfc}/**`, o), false)
  }
  t.end()
})

t.test('a portion is normalized after the path is split', t => {
  // with NFKC, a full width solidus normalizes to `/`, but it does not
  // split the path into more portions. It is a char in its portion,
  // the same as in a Matcher.
  const o = { normalize: 'NFKC' } as const
  t.equal(minimatch('a\uff0fb', 'a/b', o), false)
  t.equal(minimatch('a\uff0fb', '*', o), true)
  t.equal(minimatch('x/\uff38', 'x/X', o), true)
  t.end()
})

t.test('roots kept as strings on windows', t => {
  const o = {
    normalize: true,
    platform: 'win32',
    nocase: true,
    windowsNoMagicRoot: true,
  } as const
  t.equal(minimatch(`//h${nfd}st/share/x`, `//h${nfc}st/share/*`, o), true)
  t.end()
})

t.test('matchOne normalizes the parts it is given', t => {
  const m = new Minimatch(`a/caf${nfc}`, { normalize: true })
  t.equal(m.matchOne(['a', `caf${nfd}`], m.set[0]!), true)
  t.end()
})
