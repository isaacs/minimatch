if (module === require.main) {
  console.log('1..1\nok')
}

var files = [
  'a', 'b', 'c', 'd', 'abc',
  'abd', 'abe', 'bb', 'bcd',
  'ca', 'cb', 'dd', 'de',
  'bdir/', 'bdir/cfile'
]

module.exports = [
  'http://www.bashcookbook.com/bashinfo/source/bash-1.14.7/tests/glob-test',
  {
    pattern: 'a*',
    matches: ['a', 'abc', 'abd', 'abe']
  },
  {
    pattern: 'X*',
    matches: ['X*'],
    mmOpts: {nonull: true}
  },

  // allow null glob expansion
  {
    pattern: 'X*',
    matches: []
  },

  // isaacs: Slightly different than bash/sh/ksh
  // \\* is not un-escaped to literal "*" in a failed match,
  // but it does make it get treated as a literal star
  {
    pattern: '\\*',
    matches: ['\\*'],
    mmOpts: {nonull: true}
  },
  {
    pattern: '\\**',
    matches: ['\\**'],
    mmOpts: {nonull: true}
  },
  {
    pattern: '\\*\\*',
    matches: ['\\*\\*'],
    mmOpts: {nonull: true}
  },

  {
    pattern: 'b*/',
    matches: ['bdir/']
  },
  {
    pattern: 'c*',
    matches: ['c', 'ca', 'cb']
  },
  {
    pattern: '**',
    matches: files
  },

  {
    pattern: '\\.\\./*/',
    matches: ['\\.\\./*/'],
    mmOpts: {nonull: true}
  },
  {
    pattern: 's/\\..*//',
    matches: ['s/\\..*//'],
    mmOpts: {nonull: true}
  },

  'legendary larry crashes bashes',
  {
    pattern: '/^root:/{s/^[^:]*:[^:]*:\([^:]*\).*$/\\1/',
    matches: ['/^root:/{s/^[^:]*:[^:]*:\([^:]*\).*$/\\1/'],
    mmOpts: {nonull: true}
  },
  {
    pattern: '/^root:/{s/^[^:]*:[^:]*:\([^:]*\).*$/\u0001/',
    matches: ['/^root:/{s/^[^:]*:[^:]*:\([^:]*\).*$/\u0001/'],
    mmOpts: {nonull: true}
  },

  'character classes',
  {
    pattern: '[a-c]b*',
    matches: ['abc', 'abd', 'abe', 'bb', 'cb']
  },
  {
    pattern: '[a-y]*[^c]',
    matches: ['abd', 'abe', 'bb', 'bcd', 'bdir/', 'ca', 'cb', 'dd', 'de']
  },
  {
    pattern: 'a*[^c]',
    matches: ['abd', 'abe']
  },
  function () { files.push('a-b', 'aXb') },
  {
    pattern: 'a[X-]b',
    matches: ['a-b', 'aXb']
  },
  function () { files.push('.x', '.y') },
  {
    pattern: '[^a-c]*',
    matches: ['d', 'dd', 'de']
  },
  function () { files.push('a*b/', 'a*b/ooo') },
  {
    pattern: 'a\\*b/*',
    matches: ['a*b/ooo']
  },
  {
    pattern: 'a\\*?/*',
    matches: ['a*b/ooo']
  },
  {
    pattern: '*\\\\!*',
    matches: [],
    mmOpts: {null: true},
    files: ['echo !7']
  },
  {
    pattern: '*\\!*',
    matches: ['echo !7'],
    files: ['echo !7']
  },
  {
    pattern: '*.\\*',
    matches: ['r.*'],
    files: ['r.*']
  },
  {
    pattern: 'a[b]c',
    matches: ['abc']
  },
  {
    pattern: 'a[\\b]c',
    matches: ['abc']
  },
  {
    pattern: 'a?c',
    matches: ['abc']
  },
  {
    pattern: 'a\\*c',
    matches: [],
    mmOpts: {null: true},
    files: ['abc']
  },
  {
    pattern: '',
    matches: [''],
    mmOpts: {null: true},
    files: ['']
  },
  'http://www.opensource.apple.com/source/bash/bash-23/bash/tests/glob-test',
  function () { files.push('man/', 'man/man1/', 'man/man1/bash.1') },
  {
    pattern: '*/man*/bash.*',
    matches: ['man/man1/bash.1']
  },
  {
    pattern: 'man/man1/bash.1',
    matches: ['man/man1/bash.1']
  },
  {
    pattern: 'a***c',
    matches: ['abc'],
    files: ['abc']
  },
  {
    pattern: 'a*****?c',
    matches: ['abc'],
    files: ['abc']
  },
  {
    pattern: '?*****??',
    matches: ['abc'],
    files: ['abc']
  },
  {
    pattern: '*****??',
    matches: ['abc'],
    files: ['abc']
  },
  {
    pattern: '?*****?c',
    matches: ['abc'],
    files: ['abc']
  },
  {
    pattern: '?***?****c',
    matches: ['abc'],
    files: ['abc']
  },
  {
    pattern: '?***?****?',
    matches: ['abc'],
    files: ['abc']
  },
  {
    pattern: '?***?****',
    matches: ['abc'],
    files: ['abc']
  },
  {
    pattern: '*******c',
    matches: ['abc'],
    files: ['abc']
  },
  {
    pattern: '*******?',
    matches: ['abc'],
    files: ['abc']
  },
  {
    pattern: 'a*cd**?**??k',
    matches: ['abcdecdhjk'],
    files: ['abcdecdhjk']
  },
  {
    pattern: 'a**?**cd**?**??k',
    matches: ['abcdecdhjk'],
    files: ['abcdecdhjk']
  },
  {
    pattern: 'a**?**cd**?**??k***',
    matches: ['abcdecdhjk'],
    files: ['abcdecdhjk']
  },
  {
    pattern: 'a**?**cd**?**??***k',
    matches: ['abcdecdhjk'],
    files: ['abcdecdhjk']
  },
  {
    pattern: 'a**?**cd**?**??***k**',
    matches: ['abcdecdhjk'],
    files: ['abcdecdhjk']
  },
  {
    pattern: 'a****c**?**??*****',
    matches: ['abcdecdhjk'],
    files: ['abcdecdhjk']
  },
  {
    pattern: '[-abc]',
    matches: ['-'],
    files: ['-']
  },
  {
    pattern: '[abc-]',
    matches: ['-'],
    files: ['-']
  },
  {
    pattern: '\\',
    matches: ['\\'],
    files: ['\\']
  },
  {
    pattern: '[\\\\]',
    matches: ['\\'],
    files: ['\\']
  },
  {
    pattern: '[[]',
    matches: ['['],
    files: ['[']
  },
  {
    pattern: '[',
    matches: ['['],
    files: ['[']
  },
  {
    pattern: '[*',
    matches: ['[abc'],
    files: ['[abc']
  },

  'a right bracket shall lose its special meaning and\n' +
  'represent itself in a bracket expression if it occurs\n' +
  'first in the list.  -- POSIX.2 2.8.3.2',
  {
    pattern: '[]]',
    matches: [']'],
    files: [']']
  },
  {
    pattern: '[]-]',
    matches: [']'],
    files: [']']
  },
  {
    pattern: '[a-\z]',
    matches: ['p'],
    files: ['p']
  },
  {
    pattern: '??**********?****?',
    matches: [],
    mmOpts: {null: true},
    files: ['abc']
  },
  {
    pattern: '??**********?****c',
    matches: [],
    mmOpts: {null: true},
    files: ['abc']
  },
  {
    pattern: '?************c****?****',
    matches: [],
    mmOpts: {null: true},
    files: ['abc']
  },
  {
    pattern: '*c*?**',
    matches: [],
    mmOpts: {null: true},
    files: ['abc']
  },
  {
    pattern: 'a*****c*?**',
    matches: [],
    mmOpts: {null: true},
    files: ['abc']
  },
  {
    pattern: 'a********???*******',
    matches: [],
    mmOpts: {null: true},
    files: ['abc']
  },
  {
    pattern: '[]',
    matches: [],
    mmOpts: {null: true},
    files: ['a']
  },
  {
    pattern: '[abc',
    matches: [],
    mmOpts: {null: true},
    files: ['[']
  },

  'nocase tests',
  {
    pattern: 'XYZ',
    matches: ['xYz'],
    mmOpts: { nocase: true, null: true },
    files: ['xYz', 'ABC', 'IjK']
  },
  {
    pattern: 'ab*',
    matches: ['ABC'],
    mmOpts: { nocase: true, null: true },
    files: ['xYz', 'ABC', 'IjK']
  },
  {
    pattern: '[ia]?[ck]',
    matches: ['ABC', 'IjK'],
    mmOpts: { nocase: true, null: true },
    files: ['xYz', 'ABC', 'IjK']
  },

  // [ pattern, [matches], MM opts, files, TAP opts]
  'onestar/twostar',
  {
    pattern: '{/*,*}',
    matches: [],
    mmOpts: {null: true},
    files: ['/asdf/asdf/asdf']
  },
  {
    pattern: '{/?,*}',
    matches: ['/a', 'bb'],
    mmOpts: {null: true},
    files: ['/a', '/b/b', '/a/b/c', 'bb']
  },

  'dots should not match unless requested',
  {
    pattern: '**',
    matches: ['a/b'],
    mmOpts: {},
    files: ['a/b', 'a/.d', '.a/.d']
  },

  // .. and . can only match patterns starting with .,
  // even when options.dot is set.
  function () {
    files = ['a/./b', 'a/../b', 'a/c/b', 'a/.d/b']
  },
  {
    pattern: 'a/*/b',
    matches: ['a/c/b', 'a/.d/b'],
    mmOpts: {dot: true}
  },
  {
    pattern: 'a/.*/b',
    matches: ['a/./b', 'a/../b', 'a/.d/b'],
    mmOpts: {dot: true}
  },
  {
    pattern: 'a/*/b',
    matches: ['a/c/b'],
    mmOpts: {dot: false}
  },
  {
    pattern: 'a/.*/b',
    matches: ['a/./b', 'a/../b', 'a/.d/b'],
    mmOpts: {dot: false}
  },

  // this also tests that changing the options needs
  // to change the cache key, even if the pattern is
  // the same!
  {
    pattern: '**',
    matches: ['a/b', 'a/.d', '.a/.d'],
    mmOpts: { dot: true },
    files: ['.a/.d', 'a/.d', 'a/b']
  },

  'paren sets cannot contain slashes',
  {
    pattern: '*(a/b)',
    matches: ['*(a/b)'],
    mmOpts: {nonull: true},
    files: ['a/b']
  },

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
  {
    pattern: '*(a|{b),c)}',
    matches: ['a', 'ab', 'ac'],
    mmOpts: {},
    files: ['a', 'ab', 'ac', 'ad']
  },

  // test partial parsing in the presence of comment/negation chars
  {
    pattern: '[!a*',
    matches: ['[!ab'],
    mmOpts: {},
    files: ['[!ab', '[ab']
  },
  {
    pattern: '[#a*',
    matches: ['[#ab'],
    mmOpts: {},
    files: ['[#ab', '[ab']
  },

  // like: {a,b|c\\,d\\\|e} except it's unclosed, so it has to be escaped.
  {
    pattern: '+(a|*\\|c\\\\|d\\\\\\|e\\\\\\\\|f\\\\\\\\\\|g',
    matches: ['+(a|b\\|c\\\\|d\\\\|e\\\\\\\\|f\\\\\\\\|g'],
    mmOpts: {},
    files: ['+(a|b\\|c\\\\|d\\\\|e\\\\\\\\|f\\\\\\\\|g', 'a', 'b\\c']
  },

  // crazy nested {,,} and *(||) tests.
  function () {
    files = [
      'a', 'b', 'c', 'd', 'ab', 'ac', 'ad', 'bc', 'cb', 'bc,d',
      'c,db', 'c,d', 'd)', '(b|c', '*(b|c', 'b|c', 'b|cc', 'cb|c',
      'x(a|b|c)', 'x(a|c)', '(a|b|c)', '(a|c)'
    ]
  },
  {
    pattern: '*(a|{b,c})',
    matches: ['a', 'b', 'c', 'ab', 'ac']
  },
  {
    pattern: '{a,*(b|c,d)}',
    matches: ['a', '(b|c', '*(b|c', 'd)']
  },
  // a
  // *(b|c)
  // *(b|d)
  {
    pattern: '{a,*(b|{c,d})}',
    matches: ['a', 'b', 'bc', 'cb', 'c', 'd']
  },
  {
    pattern: '*(a|{b|c,c})',
    matches: ['a', 'b', 'c', 'ab', 'ac', 'bc', 'cb']
  },

  // test various flag settings.
  {
    pattern: '*(a|{b|c,c})',
    matches: ['x(a|b|c)', 'x(a|c)', '(a|b|c)', '(a|c)'],
    mmOpts: {noext: true}
  },
  {
    pattern: 'a?b',
    matches: ['x/y/acb', 'acb/'],
    mmOpts: {matchBase: true},
    files: ['x/y/acb', 'acb/', 'acb/d/e', 'x/y/acb/d']
  },
  {
    pattern: '#*',
    matches: ['#a', '#b'],
    mmOpts: {nocomment: true},
    files: ['#a', '#b', 'c#d']
  },

  // begin channelling Boole and deMorgan...
  'negation tests',
  function () {
    files = ['d', 'e', '!ab', '!abc', 'a!b', '\\!a']
  },

  // anything that is NOT a* matches.
  {
    pattern: '!a*',
    matches: ['\\!a', 'd', 'e', '!ab', '!abc']
  },

  // anything that IS !a* matches.
  {
    pattern: '!a*',
    matches: ['!ab', '!abc'],
    mmOpts: {nonegate: true}
  },

  // anything that IS a* matches
  {
    pattern: '!!a*',
    matches: ['a!b']
  },

  // anything that is NOT !a* matches
  {
    pattern: '!\\!a*',
    matches: ['a!b', 'd', 'e', '\\!a']
  },

  // negation nestled within a pattern
  function () {
    files = [
      'foo.js',
      'foo.bar',
      'foo.js.js',
      'blar.js',
      'foo.',
      'boo.js.boo'
    ]
  },
  // last one is tricky! * matches foo, . matches ., and 'js.js' != 'js'
  // copy bash 4.3 behavior on this.
  {
    pattern: '*.!(js)',
    matches: ['foo.bar', 'foo.', 'boo.js.boo', 'foo.js.js']
  },

  'https://github.com/isaacs/minimatch/issues/5',
  function () {
    files = [
      'a/b/.x/c', 'a/b/.x/c/d', 'a/b/.x/c/d/e', 'a/b/.x', 'a/b/.x/',
      'a/.x/b', '.x', '.x/', '.x/a', '.x/a/b', 'a/.x/b/.x/c', '.x/.x'
    ]
  },
  {
    pattern: '**/.x/**',
    matches: ['.x/', '.x/a', '.x/a/b', 'a/.x/b', 'a/b/.x/', 'a/b/.x/c', 'a/b/.x/c/d', 'a/b/.x/c/d/e']
  },

  'https://github.com/isaacs/minimatch/issues/59',
  {
    pattern: '[z-a]',
    matches: []
  },
  {
    pattern: 'a/[2015-03-10T00:23:08.647Z]/z',
    matches: []
  },
  {
    pattern: '[a-0][a-\u0100]',
    matches: []
  }
]

module.exports.regexps = [
  '/^(?:(?=.)a[^/]*?)$/',
  '/^(?:(?=.)X[^/]*?)$/',
  '/^(?:(?=.)X[^/]*?)$/',
  '/^(?:\\*)$/',
  '/^(?:(?=.)\\*[^/]*?)$/',
  '/^(?:\\*\\*)$/',
  '/^(?:(?=.)b[^/]*?\\/)$/',
  '/^(?:(?=.)c[^/]*?)$/',
  '/^(?:(?:(?!(?:\\/|^)\\.).)*?)$/',
  '/^(?:\\.\\.\\/(?!\\.)(?=.)[^/]*?\\/)$/',
  '/^(?:s\\/(?=.)\\.\\.[^/]*?\\/)$/',
  '/^(?:\\/\\^root:\\/\\{s\\/(?=.)\\^[^:][^/]*?:[^:][^/]*?:\\([^:]\\)[^/]*?\\.[^/]*?\\$\\/1\\/)$/',
  '/^(?:\\/\\^root:\\/\\{s\\/(?=.)\\^[^:][^/]*?:[^:][^/]*?:\\([^:]\\)[^/]*?\\.[^/]*?\\$\\/\u0001\\/)$/',
  '/^(?:(?!\\.)(?=.)[a-c]b[^/]*?)$/',
  '/^(?:(?!\\.)(?=.)[a-y][^/]*?[^c])$/',
  '/^(?:(?=.)a[^/]*?[^c])$/',
  '/^(?:(?=.)a[X-]b)$/',
  '/^(?:(?!\\.)(?=.)[^a-c][^/]*?)$/',
  '/^(?:a\\*b\\/(?!\\.)(?=.)[^/]*?)$/',
  '/^(?:(?=.)a\\*[^/]\\/(?!\\.)(?=.)[^/]*?)$/',
  '/^(?:(?!\\.)(?=.)[^/]*?\\\\\\![^/]*?)$/',
  '/^(?:(?!\\.)(?=.)[^/]*?\\![^/]*?)$/',
  '/^(?:(?!\\.)(?=.)[^/]*?\\.\\*)$/',
  '/^(?:(?=.)a[b]c)$/',
  '/^(?:(?=.)a[b]c)$/',
  '/^(?:(?=.)a[^/]c)$/',
  '/^(?:a\\*c)$/',
  'false',
  '/^(?:(?!\\.)(?=.)[^/]*?\\/(?=.)man[^/]*?\\/(?=.)bash\\.[^/]*?)$/',
  '/^(?:man\\/man1\\/bash\\.1)$/',
  '/^(?:(?=.)a[^/]*?[^/]*?[^/]*?c)$/',
  '/^(?:(?=.)a[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]c)$/',
  '/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/])$/',
  '/^(?:(?!\\.)(?=.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/])$/',
  '/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]c)$/',
  '/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?c)$/',
  '/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/])$/',
  '/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?)$/',
  '/^(?:(?!\\.)(?=.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?c)$/',
  '/^(?:(?!\\.)(?=.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/])$/',
  '/^(?:(?=.)a[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/]k)$/',
  '/^(?:(?=.)a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/]k)$/',
  '/^(?:(?=.)a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/]k[^/]*?[^/]*?[^/]*?)$/',
  '/^(?:(?=.)a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/][^/]*?[^/]*?[^/]*?k)$/',
  '/^(?:(?=.)a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/][^/]*?[^/]*?[^/]*?k[^/]*?[^/]*?)$/',
  '/^(?:(?=.)a[^/]*?[^/]*?[^/]*?[^/]*?c[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?)$/',
  '/^(?:(?!\\.)(?=.)[-abc])$/',
  '/^(?:(?!\\.)(?=.)[abc-])$/',
  '/^(?:\\\\)$/',
  '/^(?:(?!\\.)(?=.)[\\\\])$/',
  '/^(?:(?!\\.)(?=.)[\\[])$/',
  '/^(?:\\[)$/',
  '/^(?:(?=.)\\[(?!\\.)(?=.)[^/]*?)$/',
  '/^(?:(?!\\.)(?=.)[\\]])$/',
  '/^(?:(?!\\.)(?=.)[\\]-])$/',
  '/^(?:(?!\\.)(?=.)[a-z])$/',
  '/^(?:(?!\\.)(?=.)[^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/])$/',
  '/^(?:(?!\\.)(?=.)[^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?c)$/',
  '/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?c[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?)$/',
  '/^(?:(?!\\.)(?=.)[^/]*?c[^/]*?[^/][^/]*?[^/]*?)$/',
  '/^(?:(?=.)a[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?c[^/]*?[^/][^/]*?[^/]*?)$/',
  '/^(?:(?=.)a[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?)$/',
  '/^(?:\\[\\])$/',
  '/^(?:\\[abc)$/',
  '/^(?:(?=.)XYZ)$/i',
  '/^(?:(?=.)ab[^/]*?)$/i',
  '/^(?:(?!\\.)(?=.)[ia][^/][ck])$/i',
  '/^(?:\\/(?!\\.)(?=.)[^/]*?|(?!\\.)(?=.)[^/]*?)$/',
  '/^(?:\\/(?!\\.)(?=.)[^/]|(?!\\.)(?=.)[^/]*?)$/',
  '/^(?:(?:(?!(?:\\/|^)\\.).)*?)$/',
  '/^(?:a\\/(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?\\/b)$/',
  '/^(?:a\\/(?=.)\\.[^/]*?\\/b)$/',
  '/^(?:a\\/(?!\\.)(?=.)[^/]*?\\/b)$/',
  '/^(?:a\\/(?=.)\\.[^/]*?\\/b)$/',
  '/^(?:(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?)$/',
  '/^(?:(?!\\.)(?=.)[^/]*?\\(a\\/b\\))$/',
  '/^(?:(?!\\.)(?=.)(?:a|b)*|(?!\\.)(?=.)(?:a|c)*)$/',
  '/^(?:(?=.)\\[(?=.)\\!a[^/]*?)$/',
  '/^(?:(?=.)\\[(?=.)#a[^/]*?)$/',
  '/^(?:(?=.)\\+\\(a\\|[^/]*?\\|c\\\\\\\\\\|d\\\\\\\\\\|e\\\\\\\\\\\\\\\\\\|f\\\\\\\\\\\\\\\\\\|g)$/',
  '/^(?:(?!\\.)(?=.)(?:a|b)*|(?!\\.)(?=.)(?:a|c)*)$/',
  '/^(?:a|(?!\\.)(?=.)[^/]*?\\(b\\|c|d\\))$/',
  '/^(?:a|(?!\\.)(?=.)(?:b|c)*|(?!\\.)(?=.)(?:b|d)*)$/',
  '/^(?:(?!\\.)(?=.)(?:a|b|c)*|(?!\\.)(?=.)(?:a|c)*)$/',
  '/^(?:(?!\\.)(?=.)[^/]*?\\(a\\|b\\|c\\)|(?!\\.)(?=.)[^/]*?\\(a\\|c\\))$/',
  '/^(?:(?=.)a[^/]b)$/',
  '/^(?:(?=.)#[^/]*?)$/',
  '/^(?!^(?:(?=.)a[^/]*?)$).*$/',
  '/^(?:(?=.)\\!a[^/]*?)$/',
  '/^(?:(?=.)a[^/]*?)$/',
  '/^(?!^(?:(?=.)\\!a[^/]*?)$).*$/',
  '/^(?:(?!\\.)(?=.)[^\\/]*?\\.(?:(?!(?:js)$)[^\\/]*?))$/',
  '/^(?:(?:(?!(?:\\/|^)\\.).)*?\\/\\.x\\/(?:(?!(?:\\/|^)\\.).)*?)$/',
  '/^(?:\\[z\\-a\\])$/',
  '/^(?:a\\/\\[2015\\-03\\-10T00:23:08\\.647Z\\]\\/z)$/',
  '/^(?:(?=.)\\[a-0\\][a-Ā])$/'
]

Object.defineProperty(module.exports, 'files', {
  get: function () {
    return files
  }
})
