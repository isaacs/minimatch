import { assert, test } from 'ubqtest'
import { minimatch } from '../src/index.js'

// é as one code point, and as e and a combining accent
const nfc = 'é'
const nfd = 'é'

test('without normalize, the forms do not match', () => {
  assert.equal(minimatch(`a/caf${nfd}`, `a/caf${nfc}`), false)
  assert.equal(minimatch(`a/caf${nfd}.js`, `**/caf${nfc}*`), false)
})

test('string and magic portions', () => {
  for (const normalize of [true, 'NFC', 'NFD'] as const) {
    const o = { normalize }
    assert.equal(
      minimatch(`a/caf${nfd}`, `a/caf${nfc}`, o),
      true,
      'string',
    )
    assert.equal(
      minimatch(`a/caf${nfc}`, `a/caf${nfd}`, o),
      true,
      'string',
    )
    assert.equal(minimatch(`caf${nfd}/x.js`, `caf${nfc}/*.js`, o), true)
    assert.equal(
      minimatch(`a/caf${nfd}.js`, `**/caf${nfc}*`, o),
      true,
      'magic',
    )
    assert.equal(
      minimatch(`a/caf${nfd}.js`, `**/caf${nfc}*`, o),
      true,
      'split',
    )
    assert.equal(
      minimatch(`a/b/caf${nfd}`, `caf${nfc}`, { ...o, matchBase: true }),
      true,
    )
    assert.equal(minimatch(`a/caf${nfd}/b`, `**/caf${nfc}/**`, o), true)
    assert.equal(minimatch(`a/cafe/b`, `**/caf${nfc}/**`, o), false)
  }
})

test('a portion is normalized after the path is split', () => {
  // with NFKC, a full width solidus normalizes to `/`, but it does not
  // split the path into more portions. It is a char in its portion,
  // the same as in a Matcher.
  const o = { normalize: 'NFKC' } as const
  assert.equal(minimatch('a\uff0fb', 'a/b', o), false)
  assert.equal(minimatch('a\uff0fb', '*', o), true)
  assert.equal(minimatch('x/\uff38', 'x/X', o), true)
})

test('roots kept as strings on windows', () => {
  const o = {
    normalize: true,
    platform: 'win32',
    nocase: true,
    windowsNoMagicRoot: true,
  } as const
  assert.equal(
    minimatch(`//h${nfd}st/share/x`, `//h${nfc}st/share/*`, o),
    true,
  )
})
