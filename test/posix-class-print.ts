import t from 'tap'
import { minimatch } from '../src/index.js'

// [:print:] matches printable characters: everything except control
// characters, including the space character. It is [:graph:] plus space.
// Regression: [:print:] was translated to `[\p{C}]` (control characters)
// instead of `[^\p{C}]`, so it matched only control characters and never
// matched any printable character.
t.equal(minimatch('a', '[[:print:]]'), true, 'letter is printable')
t.equal(minimatch('Z', '[[:print:]]'), true, 'letter is printable')
t.equal(minimatch('5', '[[:print:]]'), true, 'digit is printable')
t.equal(minimatch(' ', '[[:print:]]'), true, 'space is printable')
t.equal(minimatch('\t', '[[:print:]]'), false, 'tab is a control char, not printable')

// [:graph:] is the sibling class: visible characters, excluding both space
// and control characters. The only difference from [:print:] is the space.
t.equal(minimatch('a', '[[:graph:]]'), true, 'letter is graphic')
t.equal(minimatch('5', '[[:graph:]]'), true, 'digit is graphic')
t.equal(minimatch(' ', '[[:graph:]]'), false, 'space is not graphic')
t.equal(minimatch('\t', '[[:graph:]]'), false, 'tab is not graphic')
