import { fileURLToPath } from 'url'

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log('TAP version 14\n1..1\nok\n')
}

var files = [
  'a',
  'b',
  'c',
  'd',
  'abc',
  'abd',
  'abe',
  'bb',
  'bcd',
  'ca',
  'cb',
  'dd',
  'de',
  'bdir/',
  'bdir/cfile',
]

const patterns = [
  'http://www.bashcookbook.com/bashinfo/source/bash-1.14.7/tests/glob-test',
  ['a*', ['a', 'abc', 'abd', 'abe']],
  ['X*', ['X*'], { nonull: true }],

  // allow null glob expansion
  ['X*', []],

  // isaacs: Slightly different than bash/sh/ksh
  // \\* is not un-escaped to literal "*" in a failed match,
  // but it does make it get treated as a literal star
  ['\\*', ['\\*'], { nonull: true }],
  ['\\**', ['\\**'], { nonull: true }],
  ['\\*\\*', ['\\*\\*'], { nonull: true }],

  ['b*/', ['bdir/']],
  ['c*', ['c', 'ca', 'cb']],
  ['{c*,./c*}', ['c', 'ca', 'cb']],
  ['**', files],
  ['**/**/**', files],

  ['\\.\\./*/', ['\\.\\./*/'], { nonull: true }],
  ['s/\\..*//', ['s/\\..*//'], { nonull: true }],

  'legendary larry crashes bashes',
  [
    '/^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\1/',
    ['/^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\1/'],
    { nonull: true },
  ],
  [
    '/^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\u0001/',
    ['/^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\u0001/'],
    { nonull: true },
  ],

  'character classes',
  ['[a-c]b*', ['abc', 'abd', 'abe', 'bb', 'cb']],
  ['[a-y]*[^c]', ['abd', 'abe', 'bb', 'bcd', 'bdir/', 'ca', 'cb', 'dd', 'de']],
  ['a*[^c]', ['abd', 'abe']],
  () => files.push('a-b', 'aXb'),
  ['a[X-]b', ['a-b', 'aXb']],
  () => files.push('.x', '.y'),
  ['[^a-c]*', ['d', 'dd', 'de']],
  () => files.push('a*b/', 'a*b/ooo'),
  ['a\\*b/*', ['a*b/ooo']],
  ['a\\*?/*', ['a*b/ooo']],
  ['*\\\\!*', [], { null: true }, ['echo !7']],
  ['*\\!*', ['echo !7'], null, ['echo !7']],
  ['*.\\*', ['r.*'], null, ['r.*']],
  ['a[b]c', ['abc']],
  ['a[\\b]c', ['abc']],
  ['a?c', ['abc']],
  ['a\\*c', [], { null: true }, ['abc']],
  ['', [''], { null: true }, ['']],

  'http://www.opensource.apple.com/source/bash/bash-23/' +
    'bash/tests/glob-test',
  () => files.push('man/', 'man/man1/', 'man/man1/bash.1'),
  ['*/man*/bash.*', ['man/man1/bash.1']],
  ['man/man1/bash.1', ['man/man1/bash.1']],
  ['a***c', ['abc'], null, ['abc']],
  ['a*****?c', ['abc'], null, ['abc']],
  ['?*****??', ['abc'], null, ['abc']],
  ['*****??', ['abc'], null, ['abc']],
  ['?*****?c', ['abc'], null, ['abc']],
  ['?***?****c', ['abc'], null, ['abc']],
  ['?***?****?', ['abc'], null, ['abc']],
  ['?***?****', ['abc'], null, ['abc']],
  ['*******c', ['abc'], null, ['abc']],
  ['*******?', ['abc'], null, ['abc']],
  ['a*cd**?**??k', ['abcdecdhjk'], null, ['abcdecdhjk']],
  ['a**?**cd**?**??k', ['abcdecdhjk'], null, ['abcdecdhjk']],
  ['a**?**cd**?**??k***', ['abcdecdhjk'], null, ['abcdecdhjk']],
  ['a**?**cd**?**??***k', ['abcdecdhjk'], null, ['abcdecdhjk']],
  ['a**?**cd**?**??***k**', ['abcdecdhjk'], null, ['abcdecdhjk']],
  ['a****c**?**??*****', ['abcdecdhjk'], null, ['abcdecdhjk']],
  ['[-abc]', ['-'], null, ['-']],
  ['[abc-]', ['-'], null, ['-']],
  ['\\', ['\\'], null, ['\\'], { skip: process.platform === 'win32' }],
  ['[\\\\]', ['\\'], null, ['\\'], { skip: process.platform === 'win32' }],
  ['[[]', ['['], null, ['[']],
  ['[', ['['], null, ['[']],
  ['[*', ['[abc'], null, ['[abc']],

  'a right bracket shall lose its special meaning and\n' +
    'represent itself in a bracket expression if it occurs\n' +
    'first in the list.  -- POSIX.2 2.8.3.2',
  ['[]]', [']'], null, [']']],
  ['[]-]', [']'], null, [']']],
  ['[a-z]', ['p'], null, ['p']],
  ['??**********?****?', [], { null: true }, ['abc']],
  ['??**********?****c', [], { null: true }, ['abc']],
  ['?************c****?****', [], { null: true }, ['abc']],
  ['*c*?**', [], { null: true }, ['abc']],
  ['a*****c*?**', [], { null: true }, ['abc']],
  ['a********???*******', [], { null: true }, ['abc']],
  ['[]', [], { null: true }, ['a']],
  ['[abc', [], { null: true }, ['[']],

  'nocase tests',
  ['XYZ', ['xYz'], { nocase: true, null: true }, ['xYz', 'ABC', 'IjK']],
  ['ab*', ['ABC'], { nocase: true, null: true }, ['xYz', 'ABC', 'IjK']],
  [
    '[ia]?[ck]',
    ['ABC', 'IjK'],
    { nocase: true, null: true },
    ['xYz', 'ABC', 'IjK'],
  ],

  // [ pattern, [matches], MM opts, files, TAP opts]
  'onestar/twostar',
  ['{/*,*}', [], { null: true }, ['/asdf/asdf/asdf']],
  ['{/?,*}', ['/a', 'bb'], { null: true }, ['/a', '/b/b', '/a/b/c', 'bb']],

  'dots should not match unless requested',
  ['**', ['a/b'], {}, ['a/b', 'a/.d', '.a/.d']],

  // .. and . can only match patterns starting with .,
  // even when options.dot is set.
  () => (files = ['a/./b', 'a/../b', 'a/c/b', 'a/.d/b']),
  ['a/*/b', ['a/c/b', 'a/.d/b'], { dot: true }],
  ['a/.*/b', ['a/.d/b'], { dot: true }],
  ['a/*/b', ['a/c/b'], { dot: false }],
  ['a/.*/b', ['a/.d/b'], { dot: false }],

  // this also tests that changing the options needs
  // to change the cache key, even if the pattern is
  // the same!
  ['**', ['a/b', 'a/.d', '.a/.d'], { dot: true }, ['.a/.d', 'a/.d', 'a/b']],

  'paren sets cannot contain slashes',
  ['*(a/b)', ['*(a/b)'], { nonull: true }, ['a/b']],

  // brace sets trump all else.
  //
  // invalid glob pattern.  fails on bash4 and bsdglob.
  // however, in this implementation, it's easier just
  // to do the intuitive thing, and let brace-expansion
  // actually come before parsing any extglob patterns,
  // like the documentation seems to say.
  //
  // XXX: if anyone complains about this, either fix it
  // or tell them to grow up and stop complaining.
  //
  // bash/bsdglob says this:
  // , ["*(a|{b),c)}", ["*(a|{b),c)}"], {}, ["a", "ab", "ac", "ad"]]
  // but we do this instead:
  ['*(a|{b),c)}', ['a', 'ab', 'ac'], {}, ['a', 'ab', 'ac', 'ad']],

  // test partial parsing in the presence of comment/negation chars
  ['[!a*', ['[!ab'], {}, ['[!ab', '[ab']],
  ['[#a*', ['[#ab'], {}, ['[#ab', '[ab']],

  // like: {a,b|c\\,d\\\|e} except it's unclosed, so it has to be escaped.
  [
    '+(a|*\\|c\\\\|d\\\\\\|e\\\\\\\\|f\\\\\\\\\\|g',
    ['+(a|b\\|c\\\\|d\\\\|e\\\\\\\\|f\\\\\\\\|g'],
    {},
    ['+(a|b\\|c\\\\|d\\\\|e\\\\\\\\|f\\\\\\\\|g', 'a', 'b\\c'],
    { skip: process.platform === 'win32' },
  ],

  // crazy nested {,,} and *(||) tests.
  () =>
    (files = [
      'a',
      'b',
      'c',
      'd',
      'ab',
      'ac',
      'ad',
      'bc',
      'cb',
      'bc,d',
      'c,db',
      'c,d',
      'd)',
      '(b|c',
      '*(b|c',
      'b|c',
      'b|cc',
      'cb|c',
      'x(a|b|c)',
      'x(a|c)',
      '(a|b|c)',
      '(a|c)',
    ]),
  ['*(a|{b,c})', ['a', 'b', 'c', 'ab', 'ac']],
  ['{a,*(b|c,d)}', ['a', '(b|c', '*(b|c', 'd)']],
  // a
  // *(b|c)
  // *(b|d)
  ['{a,*(b|{c,d})}', ['a', 'b', 'bc', 'cb', 'c', 'd']],
  ['*(a|{b|c,c})', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'cb']],

  // test various flag settings.
  ['*(a|{b|c,c})', ['x(a|b|c)', 'x(a|c)', '(a|b|c)', '(a|c)'], { noext: true }],
  [
    'a?b',
    ['x/y/acb', 'acb/'],
    { matchBase: true },
    ['x/y/acb', 'acb/', 'acb/d/e', 'x/y/acb/d'],
  ],
  ['#*', ['#a', '#b'], { nocomment: true }, ['#a', '#b', 'c#d']],

  // begin channelling Boole and deMorgan...
  'negation tests',
  () => (files = ['d', 'e', '!ab', '!abc', 'a!b', '\\!a']),

  // anything that is NOT a* matches.
  ['!a*', ['\\!a', 'd', 'e', '!ab', '!abc']],

  // anything that IS !a* matches.
  ['!a*', ['!ab', '!abc'], { nonegate: true }],

  // anything that IS a* matches
  ['!!a*', ['a!b']],

  // anything that is NOT !a* matches
  ['!\\!a*', ['a!b', 'd', 'e', '\\!a']],

  'negation nestled within a pattern',
  () =>
    (files = [
      'foo.js',
      'foo.bar',
      'foo.js.js',
      'blar.js',
      'foo.',
      'boo.js.boo',
    ]),
  // last one is tricky! * matches foo, . matches ., and 'js.js' != 'js'
  // copy bash 4.3 behavior on this.
  ['*.!(js)', ['foo.bar', 'foo.', 'boo.js.boo', 'foo.js.js']],

  'https://github.com/isaacs/minimatch/issues/5',
  () =>
    (files = [
      'a/b/.x/c',
      'a/b/.x/c/d',
      'a/b/.x/c/d/e',
      'a/b/.x',
      'a/b/.x/',
      'a/.x/b',
      '.x',
      '.x/',
      '.x/a/',
      '.x/a/b',
      'a/.x/b/.x/c',
      '.x/.x/',
      '.x/.y',
    ]),
  [
    '**/.x/**',
    [
      '.x/',
      '.x/a/',
      '.x/a/b',
      'a/.x/b',
      'a/b/.x/',
      'a/b/.x/c',
      'a/b/.x/c/d',
      'a/b/.x/c/d/e',
    ],
  ],
  'test equivalence of **/* and */**',
  ['.x/**/*', ['.x/a/', '.x/a/b']],
  ['.x/*/**', ['.x/a/', '.x/a/b']],
  ['.x/**/**/*', ['.x/a/', '.x/a/b']],
  ['.x/**/*/**', ['.x/a/', '.x/a/b']],
  ['.x/*/**/**', ['.x/a/', '.x/a/b']],
  ['.x/**/*', ['.x/a/', '.x/a/b', '.x/.x/', '.x/.y'], { dot: true }],
  ['.x/*/**', ['.x/a/', '.x/a/b', '.x/.x/'], { dot: true }],
  ['.x/**/**/*', ['.x/a/', '.x/a/b', '.x/.x/', '.x/.y'], { dot: true }],
  ['.x/**/*/**', ['.x/a/', '.x/a/b', '.x/.x/'], { dot: true }],
  ['.x/*/**/**', ['.x/a/', '.x/a/b', '.x/.x/'], { dot: true }],

  ['**/.x/**', ['a/.x/b'], { noglobstar: true }],

  'https://github.com/isaacs/minimatch/issues/59',
  ['[z-a]', []],
  ['a/[2015-03-10T00:23:08.647Z]/z', []],
  ['a/[2015-03-10T00:23:08.647Z\\]/z', []],
  ['[a-0][a-\u0100]', []],

  'comments match nothing',
  ['# ignore this', []],

  'escape regex properly within classes',
  ['[\\z-a]', []],
  ['[\\b-a]', []],
  ['[]+*]', []],
  ['[z\\-a]', []],
  ['[\\-\\]]', []],
  ['[a-b-c]', []],

  'https://github.com/isaacs/node-glob/issues/415',
  () => {
    files = ['ac', 'abc', 'acd', 'acc', 'acd', 'adc', 'bbc', 'bac', 'bcc']
  },
  ['+(a)!(b)+(c)', ['ac', 'acc', 'adc']],

  'https://github.com/isaacs/node-glob/issues/394',
  () => (files = ['å']),
  ['å', ['å']],
  ['å', ['å'], { nocase: true }],
  ['Å', ['å'], { nocase: true }],
  ['Å', [], {}],
  () => (files = ['Å']),
  ['Å', ['Å']],
  ['å', ['Å'], { nocase: true }],
  ['Å', ['Å'], { nocase: true }],
  ['å', [], {}],

  'https://github.com/isaacs/node-glob/issues/387',
  () => (files = ['.a', '.a.js', '.js', 'a', 'a.js', 'js']),
  ['.*', ['.a', '.a.js', '.js']],
  ['*', ['.a', '.a.js', '.js', 'a', 'a.js', 'js'], { dot: true }],
  ['@(*|.*)', ['.a', '.a.js', '.js', 'a', 'a.js', 'js']],
  ['@(.*|*)', ['.a', '.a.js', '.js', 'a', 'a.js', 'js']],
  ['@(*|a)', ['.a', '.a.js', '.js', 'a', 'a.js', 'js'], { dot: true }],
  ['@(.*)', ['.a', '.a.js', '.js']],
  ['@(.*)', ['.a', '.a.js', '.js'], { dot: true }],
  ['@(js|.*)', ['js', '.a', '.a.js', '.js']],
  ['@(.*|js)', ['js', '.a', '.a.js', '.js']],
  // doesn't start at 0, no dice
  // neg extglobs don't trigger this behavior.
  ['!(.a|js)@(.*)', ['a.js'], { nonegate: true }],
  () => (files = ['a(b', 'ab', 'a)b']),
  ['@(a|a[(])b', ['a(b', 'ab']],
  ['@(a|a[)])b', ['a)b', 'ab']],

  // TODO: recursive descent parser for extglobs, to do this properly
  // ['@(+(.*))', ['.a', '.a.js', '.js']],

  'optimized checking for some common patterns',
  () =>
    (files = [
      '.a',
      '.a.js',
      '.js',
      'a',
      'a.js',
      'js',
      'JS',
      'a.JS',
      '.a.JS',
      '.JS',
      '.',
      '..',
    ]),
  ['?', ['a']],
  ['??', ['js', 'JS']],
  ['??', ['js', 'JS', '.a'], { dot: true }],
  ['??', ['js', 'JS', '.a'], { dot: true, nocase: true }],
  ['??', ['js', 'JS'], { nocase: true }],
  ['???', []],
  ['???', ['.js', '.JS'], { dot: true }],
  ['?.js', ['a.js']],
  ['?js', []],
  ['?.js', ['a.js'], { dot: true }],
  ['?js', ['.js'], { dot: true }],
  ['?.js', ['a.js', 'a.JS'], { nocase: true }],
  ['?js', ['.js', '.JS'], { dot: true, nocase: true }],
  ['?.js', ['a.js', 'a.JS'], { dot: true, nocase: true }],

  ['*.js', ['a.js']],
  ['*js', ['a.js', 'js']],
  ['*.js', ['a.js', '.a.js', '.js'], { dot: true }],
  ['*.js', ['a.js', 'a.JS'], { nocase: true }],
  [
    '*.js',
    ['a.js', 'a.JS', '.a.js', '.a.JS', '.js', '.JS'],
    { dot: true, nocase: true },
  ],
  ['*.*', ['a.js', 'a.JS']],
  [
    '*.*',
    ['.a', '.a.js', '.js', 'a.js', 'a.JS', '.a.JS', '.JS'],
    { dot: true },
  ],
  ['.*', ['.a', '.a.js', '.js', '.a.JS', '.JS']],
  ['*', ['a', 'a.js', 'js', 'a.JS', 'JS']],
  [
    '*',
    ['.a', '.a.js', '.js', 'a', 'a.js', 'js', 'a.JS', '.a.JS', '.JS', 'JS'],
    { dot: true },
  ],

  () => (files = ['x/y/z/a/b/c', 'x/y/a/b/c', 'x/z/a/b/c', 'x/a/b/c', 'a/b/c']),
  ['x/*/../a/b/c', ['x/a/b/c']],
  ['x/z/../*/a/b/c', ['x/y/a/b/c', 'x/z/a/b/c']],
  ['x/*/../../a/b/c', ['a/b/c']],

  () => (files = ['åéîøü', 'aeiou', 'fffff', '0f7fa', '99999']),
  [
    '[[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]]',
    ['åéîøü', 'aeiou', 'fffff'],
  ],
  [
    '[[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]]',
    ['aeiou', 'fffff', '0f7fa', '99999'],
  ],
  ['[a-[:alpha:]*]', []],
  ['[z-a]*', []],
  ['[z-af]*', ['fffff']],
  ['[fz-a]*', ['fffff']],
  ['[f-gz-a]*', ['fffff']],
  ['[f-fz-a]*', ['fffff']],
  [
    '[[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]]',
    ['fffff', '0f7fa', '99999'],
  ],
  [
    '[[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]]',
    ['åéîøü', 'aeiou', 'fffff', '0f7fa', '99999'],
  ],
  ['[[:xdigit:]][[:xdigit:]]???', ['aeiou', 'fffff', '0f7fa', '99999']],
  ['[[:graph:]]f*', ['fffff', '0f7fa']],
  ['[[:graph:][:digit:]]f*', ['fffff', '0f7fa']],

  'fast track the *.ext patterns',
  () =>
    (files = ['x.y', 'a.y', 'x.z', 'a.z', 'xy', 'ay', 'x', 'a', '.y', '.z']),
  ['*.y', ['x.y', 'a.y']],
  ['*.z', ['x.z', 'a.z', '.z'], { dot: true }],
  ['*.Y', ['x.y', 'a.y'], { nocase: true }],
  ['*.Z', ['x.z', 'a.z', '.z'], { dot: true, nocase: true }],

  () => files.push('+()'),
  ['+()', ['+()']],
  ['+()*(x|a)', ['x', 'a']],
  ['+(x|a[^)]y)', ['x', 'a.y']],
  ['!()y', ['x.y', 'a.y', 'xy', 'ay'], { nonegate: true }],
  ['!()y', ['x.y', 'a.y', 'xy', 'ay', '.y'], { dot: true, nonegate: true }],

  () => (files = ['x-a', 'x-ab', 'x-z', 'a-z', 'zb']),
  ['?(x-!(y)|z)', ['x-a', 'x-ab', 'x-z']],
  ['?(x-!(y)|z)b', ['x-ab', 'zb']],

  () =>
    (files = [
      '.aa',
      '.ab',
      '.ba',
      '.bb',
      'a.a',
      'a.b',
      'b.a',
      'b.b',
      'aa',
      'ab',
      'ba',
      'bb',
      'aa.',
      'ab.',
      'ba.',
      'bb.',
    ]),

  [
    '*(?)',
    [
      'a.a',
      'a.b',
      'b.a',
      'b.b',
      'aa',
      'ab',
      'ba',
      'bb',
      'aa.',
      'ab.',
      'ba.',
      'bb.',
    ],
  ],

  [
    '+(?)',
    [
      'a.a',
      'a.b',
      'b.a',
      'b.b',
      'aa',
      'ab',
      'ba',
      'bb',
      'aa.',
      'ab.',
      'ba.',
      'bb.',
    ],
  ],

  [
    '+(a|?)',
    [
      'a.a',
      'a.b',
      'b.a',
      'b.b',
      'aa',
      'ab',
      'ba',
      'bb',
      'aa.',
      'ab.',
      'ba.',
      'bb.',
    ],
  ],

  [
    '+(a|!(b))',
    [
      'a.a',
      'a.b',
      'aa',
      'aa.',
      'ab',
      'ab.',
      'b.a',
      'b.b',
      'ba',
      'ba.',
      'bb',
      'bb.',
    ],
  ],

  [
    '+(.|a|!(b))',
    [
      '.aa',
      '.ab',
      '.ba',
      '.bb',
      'a.a',
      'a.b',
      'aa',
      'aa.',
      'ab',
      'ab.',
      'b.a',
      'b.b',
      'ba',
      'ba.',
      'bb',
      'bb.',
    ],
  ],

  ['+(a|.)', ['a.a', 'aa', 'aa.', '.aa']],
]

Object.defineProperty(patterns, 'files', {
  get: function () {
    return files
  },
})

export default patterns
