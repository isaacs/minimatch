// https://github.com/isaacs/minimatch/issues/318
// .. can not remove the root of a Windows pattern or path, the same
// as the / root of a posix one

import { assert, test } from 'ubqtest'
import { minimatch, Minimatch } from '../src/index.js'

const platform = 'win32'

test('patterns keep their root', () => {
  const cases: [string, string[]][] = [
    ['C:/foo/../..', ['C:', '..']],
    ['C:/../x', ['C:', '..', 'x']],
    ['C:/a/../../x', ['C:', '..', 'x']],
    ['C:/a/b/../../c', ['C:', 'c']],
    ['//srv/share/../x', ['', '', 'srv', 'share', '..', 'x']],
    ['//srv/share/a/../../x', ['', '', 'srv', 'share', '..', 'x']],
    ['//srv/..', ['', '', 'srv', '..']],
    ['//?/C:/a/../../x', ['', '', '?', 'C:', '..', 'x']],
    [
      '//?/UNC/srv/share/a/../../x',
      ['', '', '?', 'UNC', 'srv', 'share', '..', 'x'],
    ],
    ['//srv/*/a/../../x', ['', '', 'srv', '*', '..', 'x']],
  ]
  for (const optimizationLevel of [1, 2]) {
    for (const [p, parts] of cases) {
      const mm = new Minimatch(p, { platform, optimizationLevel })
      assert.deepEqual(
        mm.globParts,
        [parts],
        `${p} level ${optimizationLevel}`,
      )
    }
  }
  // the same as the posix root
  assert.deepEqual(new Minimatch('/a/../../x').globParts, [
    ['', '..', 'x'],
  ])
})

test('match results', () => {
  for (const optimizationLevel of [1, 2]) {
    const o = { platform, optimizationLevel } as const
    assert.equal(minimatch('/', 'C:/foo/../..', o), false)
    assert.equal(minimatch('C:/x', 'C:/../x', o), false)
    assert.equal(minimatch('/x', 'C:/a/../../x', o), false)
    assert.equal(minimatch('x', 'C:/a/../../x', o), false)
    assert.equal(minimatch('//srv/x', '//srv/share/../x', o), false)
    assert.equal(minimatch('C:/c', 'C:/a/b/../../c', o), true)
    assert.equal(minimatch('//srv/share/y', '//srv/share/x/../y', o), true)
  }
  // at level 2, paths are resolved too
  const o = { platform, optimizationLevel: 2 } as const
  assert.equal(minimatch('C:/a/../../x', 'x', o), false)
  assert.equal(minimatch('C:/a/../../x', 'C:/../x', o), true)
  assert.equal(minimatch('//srv/share/a/../../x', '//srv/x', o), false)
  assert.equal(minimatch('C:/a/b/../x', 'C:/a/x', o), true)
})
