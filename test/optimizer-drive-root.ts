import t from 'tap'
import { minimatch, Minimatch } from '../src/index.js'

const win32 = { platform: 'win32' as const }

t.test('optimizationLevel 2 keeps the Windows drive root', t => {
  const pattern = 'C:/foo/../..'
  const options = { ...win32, optimizationLevel: 2 }
  t.equal(minimatch('C:/', pattern, options), true)
  t.equal(minimatch('/', pattern, options), false)
  t.match(new Minimatch(pattern, options).globParts, [['C:']])
  t.end()
})

t.test('optimizationLevel 2 keeps the UNC share', t => {
  const pattern = '//srv/share/../x'
  const options = { ...win32, optimizationLevel: 2 }
  t.equal(minimatch('//srv/share/x', pattern, options), true)
  t.equal(minimatch('//srv/x', pattern, options), false)
  t.match(new Minimatch(pattern, options).globParts, [
    ['', '', 'srv', 'share', 'x'],
  ])
  t.end()
})
