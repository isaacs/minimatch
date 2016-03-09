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
    matches: ['a', 'abc', 'abd', 'abe'],
    regexp: '/^(?:(?=.)a[^/]*?)$/'
  },
  {
    pattern: 'X*',
    matches: ['X*'],
    mmOpts: {nonull: true},
    regexp: '/^(?:(?=.)X[^/]*?)$/'
  },

  // allow null glob expansion
  {
    pattern: 'X*',
    matches: [],
    regexp: '/^(?:(?=.)X[^/]*?)$/'
  },

  // isaacs: Slightly different than bash/sh/ksh
  // \\* is not un-escaped to literal "*" in a failed match,
  // but it does make it get treated as a literal star
  {
    pattern: '\\*',
    matches: ['\\*'],
    mmOpts: {nonull: true},
    regexp: '/^(?:\\*)$/'
  },
  {
    pattern: '\\**',
    matches: ['\\**'],
    mmOpts: {nonull: true},
    regexp: '/^(?:(?=.)\\*[^/]*?)$/'
  },
  {
    pattern: '\\*\\*',
    matches: ['\\*\\*'],
    mmOpts: {nonull: true},
    regexp: '/^(?:\\*\\*)$/'
  },

  {
    pattern: 'b*/',
    matches: ['bdir/'],
    regexp: '/^(?:(?=.)b[^/]*?\\/)$/'
  },
  {
    pattern: 'c*',
    matches: ['c', 'ca', 'cb'],
    regexp: '/^(?:(?=.)c[^/]*?)$/'
  },
  {
    pattern: '**',
    matches: files,
    regexp: '/^(?:(?:(?!(?:\\/|^)\\.).)*?)$/'
  },

  {
    pattern: '\\.\\./*/',
    matches: ['\\.\\./*/'],
    mmOpts: {nonull: true},
    regexp: '/^(?:\\.\\.\\/(?!\\.)(?=.)[^/]*?\\/)$/'
  },
  {
    pattern: 's/\\..*//',
    matches: ['s/\\..*//'],
    mmOpts: {nonull: true},
    regexp: '/^(?:s\\/(?=.)\\.\\.[^/]*?\\/)$/'
  },

  'legendary larry crashes bashes',
  {
    pattern: '/^root:/{s/^[^:]*:[^:]*:\([^:]*\).*$/\\1/',
    matches: ['/^root:/{s/^[^:]*:[^:]*:\([^:]*\).*$/\\1/'],
    mmOpts: {nonull: true},
    regexp: '/^(?:\\/\\^root:\\/\\{s\\/(?=.)\\^[^:][^/]*?:[^:][^/]*?:\\([^:]\\)[^/]*?\\.[^/]*?\\$\\/1\\/)$/'
  },
  {
    pattern: '/^root:/{s/^[^:]*:[^:]*:\([^:]*\).*$/\u0001/',
    matches: ['/^root:/{s/^[^:]*:[^:]*:\([^:]*\).*$/\u0001/'],
    mmOpts: {nonull: true},
    regexp: '/^(?:\\/\\^root:\\/\\{s\\/(?=.)\\^[^:][^/]*?:[^:][^/]*?:\\([^:]\\)[^/]*?\\.[^/]*?\\$\\/\u0001\\/)$/'
  },

  'character classes',
  {
    pattern: '[a-c]b*',
    matches: ['abc', 'abd', 'abe', 'bb', 'cb'],
    regexp: '/^(?:(?!\\.)(?=.)[a-c]b[^/]*?)$/'
  },
  {
    pattern: '[a-y]*[^c]',
    matches: ['abd', 'abe', 'bb', 'bcd', 'bdir/', 'ca', 'cb', 'dd', 'de'],
    regexp: '/^(?:(?!\\.)(?=.)[a-y][^/]*?[^c])$/'
  },
  {
    pattern: 'a*[^c]',
    matches: ['abd', 'abe'],
    regexp: '/^(?:(?=.)a[^/]*?[^c])$/'
  },
  function () { files.push('a-b', 'aXb') },
  {
    pattern: 'a[X-]b',
    matches: ['a-b', 'aXb'],
    regexp: '/^(?:(?=.)a[X-]b)$/'
  },
  function () { files.push('.x', '.y') },
  {
    pattern: '[^a-c]*',
    matches: ['d', 'dd', 'de'],
    regexp: '/^(?:(?!\\.)(?=.)[^a-c][^/]*?)$/'
  },
  function () { files.push('a*b/', 'a*b/ooo') },
  {
    pattern: 'a\\*b/*',
    matches: ['a*b/ooo'],
    regexp: '/^(?:a\\*b\\/(?!\\.)(?=.)[^/]*?)$/'
  },
  {
    pattern: 'a\\*?/*',
    matches: ['a*b/ooo'],
    regexp: '/^(?:(?=.)a\\*[^/]\\/(?!\\.)(?=.)[^/]*?)$/'
  },
  {
    pattern: '*\\\\!*',
    matches: [],
    mmOpts: {null: true},
    files: ['echo !7'],
    regexp: '/^(?:(?!\\.)(?=.)[^/]*?\\\\\\![^/]*?)$/'
  },
  {
    pattern: '*\\!*',
    matches: ['echo !7'],
    files: ['echo !7'],
    regexp: '/^(?:(?!\\.)(?=.)[^/]*?\\![^/]*?)$/'
  },
  {
    pattern: '*.\\*',
    matches: ['r.*'],
    files: ['r.*'],
    regexp: '/^(?:(?!\\.)(?=.)[^/]*?\\.\\*)$/'
  },
  {
    pattern: 'a[b]c',
    matches: ['abc'],
    regexp: '/^(?:(?=.)a[b]c)$/'
  },
  {
    pattern: 'a[\\b]c',
    matches: ['abc'],
    regexp: '/^(?:(?=.)a[b]c)$/'
  },
  {
    pattern: 'a?c',
    matches: ['abc'],
    regexp: '/^(?:(?=.)a[^/]c)$/'
  },
  {
    pattern: 'a\\*c',
    matches: [],
    mmOpts: {null: true},
    files: ['abc'],
    regexp: '/^(?:a\\*c)$/'
  },
  {
    pattern: '',
    matches: [''],
    mmOpts: {null: true},
    files: [''],
    regexp: 'false'
  },
  'http://www.opensource.apple.com/source/bash/bash-23/bash/tests/glob-test',
  function () { files.push('man/', 'man/man1/', 'man/man1/bash.1') },
  {
    pattern: '*/man*/bash.*',
    matches: ['man/man1/bash.1'],
    regexp: '/^(?:(?!\\.)(?=.)[^/]*?\\/(?=.)man[^/]*?\\/(?=.)bash\\.[^/]*?)$/'
  },
  {
    pattern: 'man/man1/bash.1',
    matches: ['man/man1/bash.1'],
    regexp: '/^(?:man\\/man1\\/bash\\.1)$/'
  },
  {
    pattern: 'a***c',
    matches: ['abc'],
    files: ['abc'],
    regexp: '/^(?:(?=.)a[^/]*?[^/]*?[^/]*?c)$/'
  },
  {
    pattern: 'a*****?c',
    matches: ['abc'],
    files: ['abc'],
    regexp: '/^(?:(?=.)a[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]c)$/'
  },
  {
    pattern: '?*****??',
    matches: ['abc'],
    files: ['abc'],
    regexp: '/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/])$/'
  },
  {
    pattern: '*****??',
    matches: ['abc'],
    files: ['abc'],
    regexp: '/^(?:(?!\\.)(?=.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/])$/'
  },
  {
    pattern: '?*****?c',
    matches: ['abc'],
    files: ['abc'],
    regexp: '/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]c)$/'
  },
  {
    pattern: '?***?****c',
    matches: ['abc'],
    files: ['abc'],
    regexp: '/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?c)$/'
  },
  {
    pattern: '?***?****?',
    matches: ['abc'],
    files: ['abc'],
    regexp: '/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/])$/'
  },
  {
    pattern: '?***?****',
    matches: ['abc'],
    files: ['abc'],
    regexp: '/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?)$/'
  },
  {
    pattern: '*******c',
    matches: ['abc'],
    files: ['abc'],
    regexp: '/^(?:(?!\\.)(?=.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?c)$/'
  },
  {
    pattern: '*******?',
    matches: ['abc'],
    files: ['abc'],
    regexp: '/^(?:(?!\\.)(?=.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/])$/'
  },
  {
    pattern: 'a*cd**?**??k',
    matches: ['abcdecdhjk'],
    files: ['abcdecdhjk'],
    regexp: '/^(?:(?=.)a[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/]k)$/'
  },
  {
    pattern: 'a**?**cd**?**??k',
    matches: ['abcdecdhjk'],
    files: ['abcdecdhjk'],
    regexp: '/^(?:(?=.)a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/]k)$/'
  },
  {
    pattern: 'a**?**cd**?**??k***',
    matches: ['abcdecdhjk'],
    files: ['abcdecdhjk'],
    regexp: '/^(?:(?=.)a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/]k[^/]*?[^/]*?[^/]*?)$/'
  },
  {
    pattern: 'a**?**cd**?**??***k',
    matches: ['abcdecdhjk'],
    files: ['abcdecdhjk'],
    regexp: '/^(?:(?=.)a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/][^/]*?[^/]*?[^/]*?k)$/'
  },
  {
    pattern: 'a**?**cd**?**??***k**',
    matches: ['abcdecdhjk'],
    files: ['abcdecdhjk'],
    regexp: '/^(?:(?=.)a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/][^/]*?[^/]*?[^/]*?k[^/]*?[^/]*?)$/'
  },
  {
    pattern: 'a****c**?**??*****',
    matches: ['abcdecdhjk'],
    files: ['abcdecdhjk'],
    regexp: '/^(?:(?=.)a[^/]*?[^/]*?[^/]*?[^/]*?c[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?)$/'
  },
  {
    pattern: '[-abc]',
    matches: ['-'],
    files: ['-'],
    regexp: '/^(?:(?!\\.)(?=.)[-abc])$/'
  },
  {
    pattern: '[abc-]',
    matches: ['-'],
    files: ['-'],
    regexp: '/^(?:(?!\\.)(?=.)[abc-])$/'
  },
  {
    pattern: '\\',
    matches: ['\\'],
    files: ['\\'],
    regexp: '/^(?:\\\\)$/'
  },
  {
    pattern: '[\\\\]',
    matches: ['\\'],
    files: ['\\'],
    regexp: '/^(?:(?!\\.)(?=.)[\\\\])$/'
  },
  {
    pattern: '[[]',
    matches: ['['],
    files: ['['],
    regexp: '/^(?:(?!\\.)(?=.)[\\[])$/'
  },
  {
    pattern: '[',
    matches: ['['],
    files: ['['],
    regexp: '/^(?:\\[)$/'
  },
  {
    pattern: '[*',
    matches: ['[abc'],
    files: ['[abc'],
    regexp: '/^(?:(?=.)\\[(?!\\.)(?=.)[^/]*?)$/'
  },

  'a right bracket shall lose its special meaning and\n' +
  'represent itself in a bracket expression if it occurs\n' +
  'first in the list.  -- POSIX.2 2.8.3.2',
  {
    pattern: '[]]',
    matches: [']'],
    files: [']'],
    regexp: '/^(?:(?!\\.)(?=.)[\\]])$/'
  },
  {
    pattern: '[]-]',
    matches: [']'],
    files: [']'],
    regexp: '/^(?:(?!\\.)(?=.)[\\]-])$/'
  },
  {
    pattern: '[a-\z]',
    matches: ['p'],
    files: ['p'],
    regexp: '/^(?:(?!\\.)(?=.)[a-z])$/'
  },
  {
    pattern: '??**********?****?',
    matches: [],
    mmOpts: {null: true},
    files: ['abc'],
    regexp: '/^(?:(?!\\.)(?=.)[^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/])$/'
  },
  {
    pattern: '??**********?****c',
    matches: [],
    mmOpts: {null: true},
    files: ['abc'],
    regexp: '/^(?:(?!\\.)(?=.)[^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?c)$/'
  },
  {
    pattern: '?************c****?****',
    matches: [],
    mmOpts: {null: true},
    files: ['abc'],
    regexp: '/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?c[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?)$/'
  },
  {
    pattern: '*c*?**',
    matches: [],
    mmOpts: {null: true},
    files: ['abc'],
    regexp: '/^(?:(?!\\.)(?=.)[^/]*?c[^/]*?[^/][^/]*?[^/]*?)$/'
  },
  {
    pattern: 'a*****c*?**',
    matches: [],
    mmOpts: {null: true},
    files: ['abc'],
    regexp: '/^(?:(?=.)a[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?c[^/]*?[^/][^/]*?[^/]*?)$/'
  },
  {
    pattern: 'a********???*******',
    matches: [],
    mmOpts: {null: true},
    files: ['abc'],
    regexp: '/^(?:(?=.)a[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?)$/'
  },
  {
    pattern: '[]',
    matches: [],
    mmOpts: {null: true},
    files: ['a'],
    regexp: '/^(?:\\[\\])$/'
  },
  {
    pattern: '[abc',
    matches: [],
    mmOpts: {null: true},
    files: ['['],
    regexp: '/^(?:\\[abc)$/'
  },

  'nocase tests',
  {
    pattern: 'XYZ',
    matches: ['xYz'],
    mmOpts: { nocase: true, null: true },
    files: ['xYz', 'ABC', 'IjK'],
    regexp: '/^(?:(?=.)XYZ)$/i'
  },
  {
    pattern: 'ab*',
    matches: ['ABC'],
    mmOpts: { nocase: true, null: true },
    files: ['xYz', 'ABC', 'IjK'],
    regexp: '/^(?:(?=.)ab[^/]*?)$/i'
  },
  {
    pattern: '[ia]?[ck]',
    matches: ['ABC', 'IjK'],
    mmOpts: { nocase: true, null: true },
    files: ['xYz', 'ABC', 'IjK'],
    regexp: '/^(?:(?!\\.)(?=.)[ia][^/][ck])$/i'
  },

  // [ pattern, [matches], MM opts, files, TAP opts]
  'onestar/twostar',
  {
    pattern: '{/*,*}',
    matches: [],
    mmOpts: {null: true},
    files: ['/asdf/asdf/asdf'],
    regexp: '/^(?:\\/(?!\\.)(?=.)[^/]*?|(?!\\.)(?=.)[^/]*?)$/'
  },
  {
    pattern: '{/?,*}',
    matches: ['/a', 'bb'],
    mmOpts: {null: true},
    files: ['/a', '/b/b', '/a/b/c', 'bb'],
    regexp: '/^(?:\\/(?!\\.)(?=.)[^/]|(?!\\.)(?=.)[^/]*?)$/'
  },

  'dots should not match unless requested',
  {
    pattern: '**',
    matches: ['a/b'],
    mmOpts: {},
    files: ['a/b', 'a/.d', '.a/.d'],
    regexp: '/^(?:(?:(?!(?:\\/|^)\\.).)*?)$/'
  },

  // .. and . can only match patterns starting with .,
  // even when options.dot is set.
  function () {
    files = ['a/./b', 'a/../b', 'a/c/b', 'a/.d/b']
  },
  {
    pattern: 'a/*/b',
    matches: ['a/c/b', 'a/.d/b'],
    mmOpts: {dot: true},
    regexp: '/^(?:a\\/(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?\\/b)$/'
  },
  {
    pattern: 'a/.*/b',
    matches: ['a/./b', 'a/../b', 'a/.d/b'],
    mmOpts: {dot: true},
    regexp: '/^(?:a\\/(?=.)\\.[^/]*?\\/b)$/'
  },
  {
    pattern: 'a/*/b',
    matches: ['a/c/b'],
    mmOpts: {dot: false},
    regexp: '/^(?:a\\/(?!\\.)(?=.)[^/]*?\\/b)$/'
  },
  {
    pattern: 'a/.*/b',
    matches: ['a/./b', 'a/../b', 'a/.d/b'],
    mmOpts: {dot: false},
    regexp: '/^(?:a\\/(?=.)\\.[^/]*?\\/b)$/'
  },

  // this also tests that changing the options needs
  // to change the cache key, even if the pattern is
  // the same!
  {
    pattern: '**',
    matches: ['a/b', 'a/.d', '.a/.d'],
    mmOpts: { dot: true },
    files: ['.a/.d', 'a/.d', 'a/b'],
    regexp: '/^(?:(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?)$/'
  },

  'paren sets cannot contain slashes',
  {
    pattern: '*(a/b)',
    matches: ['*(a/b)'],
    mmOpts: {nonull: true},
    files: ['a/b'],
    regexp: '/^(?:(?!\\.)(?=.)[^/]*?\\(a\\/b\\))$/'
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
    files: ['a', 'ab', 'ac', 'ad'],
    regexp: '/^(?:(?!\\.)(?=.)(?:a|b)*|(?!\\.)(?=.)(?:a|c)*)$/'
  },

  // test partial parsing in the presence of comment/negation chars
  {
    pattern: '[!a*',
    matches: ['[!ab'],
    mmOpts: {},
    files: ['[!ab', '[ab'],
    regexp: '/^(?:(?=.)\\[(?=.)\\!a[^/]*?)$/'
  },
  {
    pattern: '[#a*',
    matches: ['[#ab'],
    mmOpts: {},
    files: ['[#ab', '[ab'],
    regexp: '/^(?:(?=.)\\[(?=.)#a[^/]*?)$/'
  },

  // like: {a,b|c\\,d\\\|e} except it's unclosed, so it has to be escaped.
  {
    pattern: '+(a|*\\|c\\\\|d\\\\\\|e\\\\\\\\|f\\\\\\\\\\|g',
    matches: ['+(a|b\\|c\\\\|d\\\\|e\\\\\\\\|f\\\\\\\\|g'],
    mmOpts: {},
    files: ['+(a|b\\|c\\\\|d\\\\|e\\\\\\\\|f\\\\\\\\|g', 'a', 'b\\c'],
    regexp: '/^(?:(?=.)\\+\\(a\\|[^/]*?\\|c\\\\\\\\\\|d\\\\\\\\\\|e\\\\\\\\\\\\\\\\\\|f\\\\\\\\\\\\\\\\\\|g)$/'
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
    matches: ['a', 'b', 'c', 'ab', 'ac'],
    regexp: '/^(?:(?!\\.)(?=.)(?:a|b)*|(?!\\.)(?=.)(?:a|c)*)$/'
  },
  {
    pattern: '{a,*(b|c,d)}',
    matches: ['a', '(b|c', '*(b|c', 'd)'],
    regexp: '/^(?:a|(?!\\.)(?=.)[^/]*?\\(b\\|c|d\\))$/'
  },
  // a
  // *(b|c)
  // *(b|d)
  {
    pattern: '{a,*(b|{c,d})}',
    matches: ['a', 'b', 'bc', 'cb', 'c', 'd'],
    regexp: '/^(?:a|(?!\\.)(?=.)(?:b|c)*|(?!\\.)(?=.)(?:b|d)*)$/'
  },
  {
    pattern: '*(a|{b|c,c})',
    matches: ['a', 'b', 'c', 'ab', 'ac', 'bc', 'cb'],
    regexp: '/^(?:(?!\\.)(?=.)(?:a|b|c)*|(?!\\.)(?=.)(?:a|c)*)$/'
  },

  // test various flag settings.
  {
    pattern: '*(a|{b|c,c})',
    matches: ['x(a|b|c)', 'x(a|c)', '(a|b|c)', '(a|c)'],
    mmOpts: {noext: true},
    regexp: '/^(?:(?!\\.)(?=.)[^/]*?\\(a\\|b\\|c\\)|(?!\\.)(?=.)[^/]*?\\(a\\|c\\))$/'
  },
  {
    pattern: 'a?b',
    matches: ['x/y/acb', 'acb/'],
    mmOpts: {matchBase: true},
    files: ['x/y/acb', 'acb/', 'acb/d/e', 'x/y/acb/d'],
    regexp: '/^(?:(?=.)a[^/]b)$/'
  },
  {
    pattern: '#*',
    matches: ['#a', '#b'],
    mmOpts: {nocomment: true},
    files: ['#a', '#b', 'c#d'],
    regexp: '/^(?:(?=.)#[^/]*?)$/'
  },

  // begin channelling Boole and deMorgan...
  'negation tests',
  function () {
    files = ['d', 'e', '!ab', '!abc', 'a!b', '\\!a']
  },

  // anything that is NOT a* matches.
  {
    pattern: '!a*',
    matches: ['\\!a', 'd', 'e', '!ab', '!abc'],
    regexp: '/^(?!^(?:(?=.)a[^/]*?)$).*$/'
  },

  // anything that IS !a* matches.
  {
    pattern: '!a*',
    matches: ['!ab', '!abc'],
    mmOpts: {nonegate: true},
    regexp: '/^(?:(?=.)\\!a[^/]*?)$/'
  },

  // anything that IS a* matches
  {
    pattern: '!!a*',
    matches: ['a!b'],
    regexp: '/^(?:(?=.)a[^/]*?)$/'
  },

  // anything that is NOT !a* matches
  {
    pattern: '!\\!a*',
    matches: ['a!b', 'd', 'e', '\\!a'],
    regexp: '/^(?!^(?:(?=.)\\!a[^/]*?)$).*$/'
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
    matches: ['foo.bar', 'foo.', 'boo.js.boo', 'foo.js.js'],
    regexp: '/^(?:(?!\\.)(?=.)[^\\/]*?\\.(?:(?!(?:js)$)[^\\/]*?))$/'
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
    matches: ['.x/', '.x/a', '.x/a/b', 'a/.x/b', 'a/b/.x/', 'a/b/.x/c', 'a/b/.x/c/d', 'a/b/.x/c/d/e'],
    regexp: '/^(?:(?:(?!(?:\\/|^)\\.).)*?\\/\\.x\\/(?:(?!(?:\\/|^)\\.).)*?)$/'
  },

  'https://github.com/isaacs/minimatch/issues/59',
  {
    pattern: '[z-a]',
    matches: [],
    regexp: '/^(?:\\[z\\-a\\])$/'
  },
  {
    pattern: 'a/[2015-03-10T00:23:08.647Z]/z',
    matches: [],
    regexp: '/^(?:a\\/\\[2015\\-03\\-10T00:23:08\\.647Z\\]\\/z)$/'
  },
  {
    pattern: '[a-0][a-\u0100]',
    matches: [],
    regexp: '/^(?:(?=.)\\[a-0\\][a-Ā])$/'
  }
]

Object.defineProperty(module.exports, 'files', {
  get: function () {
    return files
  }
})
