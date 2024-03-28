/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/escape-has-magic.js > TAP > !!a* 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > !(.a|js)@(.*) 1`] = `
Array [
  Array [
    Array [
      /^(?:(?!(?:\\.a(?:\\.[^/]*?)(?:$|\\/)|js(?:\\.[^/]*?)(?:$|\\/)))(?!\\.)[^/]*?)(?:(?!(?:^|\\/)\\.\\.?(?:$|\\/))\\.[^/]*?)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > !()y 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]+?y$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > !()y 2`] = `
Array [
  Array [
    Array [
      /^[^/]+?y$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > !\\!a* 1`] = `
Array [
  Array [
    Array [
      /^\\!a[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > !a* 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > !a* 2`] = `
Array [
  Array [
    Array [
      /^!a[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ? 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?? 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/][^/]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?? 2`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/][^/]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?? 3`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/][^/]$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?? 4`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/][^/]$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ??? 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/][^/][^/]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ??? 2`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/][^/][^/]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ??**********?****? 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ??**********?****c 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?c$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?.js 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]\\.js$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?.js 2`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]\\.js$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?.js 3`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]\\.js$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?.js 4`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]\\.js$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?(x-!(y)|z) 1`] = `
Array [
  Array [
    Array [
      /^(?:x\\-(?:(?!(?:y(?:$|\\/)))[^/]*?)|z)?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?(x-!(y)|z)b 1`] = `
Array [
  Array [
    Array [
      /^(?:x\\-(?:(?!(?:yb(?:$|\\/)))[^/]*?)|z)?b$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?***?**** 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/][^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?***?****? 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/][^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?***?****c 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/][^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?c$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?*****?? 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?*****?c 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]c$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?************c****?**** 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?c[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?js 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]js$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?js 2`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]js$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ?js 3`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]js$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > .* 1`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))\\.[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > .* 2`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))\\.[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > .x/**/* 1`] = `
Array [
  Array [
    Array [
      ".x",
      Symbol(globstar **),
      /^(?!\\.)[^/]+?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > .x/**/* 2`] = `
Array [
  Array [
    Array [
      ".x",
      Symbol(globstar **),
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]+?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > .x/**/**/* 1`] = `
Array [
  Array [
    Array [
      ".x",
      Symbol(globstar **),
      /^(?!\\.)[^/]+?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > .x/**/**/* 2`] = `
Array [
  Array [
    Array [
      ".x",
      Symbol(globstar **),
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]+?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > .x/**/*/** 1`] = `
Array [
  Array [
    Array [
      ".x",
      Symbol(globstar **),
      /^(?!\\.)[^/]+?$/,
      Symbol(globstar **),
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > .x/**/*/** 2`] = `
Array [
  Array [
    Array [
      ".x",
      Symbol(globstar **),
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]+?$/,
      Symbol(globstar **),
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > .x/*/** 1`] = `
Array [
  Array [
    Array [
      ".x",
      /^(?!\\.)[^/]+?$/,
      Symbol(globstar **),
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > .x/*/** 2`] = `
Array [
  Array [
    Array [
      ".x",
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]+?$/,
      Symbol(globstar **),
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > .x/*/**/** 1`] = `
Array [
  Array [
    Array [
      ".x",
      /^(?!\\.)[^/]+?$/,
      Symbol(globstar **),
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > .x/*/**/** 2`] = `
Array [
  Array [
    Array [
      ".x",
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]+?$/,
      Symbol(globstar **),
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [ 1`] = `
Array [
  Array [
    Array [
      "[",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > [-abc] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[\\-abc]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [!a* 1`] = `
Array [
  Array [
    Array [
      /^\\[!a[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}]$/u,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[\\p{L}\\p{Nl}][\\p{L}\\p{Nl}][\\p{L}\\p{Nl}][\\p{L}\\p{Nl}][\\p{L}\\p{Nl}]$/u,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[\\x00-\\x7f][\\x00-\\x7f][\\x00-\\x7f][\\x00-\\x7f][\\x00-\\x7f]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [[:graph:][:digit:]]f* 1`] = `
Array [
  Array [
    Array [
      /^([\\p{Nd}]|[^\\p{Z}\\p{C}])f[^/]*?$/u,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [[:graph:]]f* 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^\\p{Z}\\p{C}]f[^/]*?$/u,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [[:xdigit:]][[:xdigit:]]??? 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[A-Fa-f0-9][A-Fa-f0-9][^/][^/][^/]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [[] 1`] = `
Array [
  Array [
    Array [
      "[",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > [] 1`] = `
Array [
  Array [
    Array [
      "[]",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > []-] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[\\]\\-]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > []] 1`] = `
Array [
  Array [
    Array [
      "]",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > []+*] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[\\]+*]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [* 1`] = `
Array [
  Array [
    Array [
      /^\\[[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [\\-\\]] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[\\-\\]]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [\\\\] 1`] = `
Array [
  Array [
    Array [
      "\\\\",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > [\\b-a] 1`] = `
Array [
  Array [
    Array [
      /^$.$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [\\z-a] 1`] = `
Array [
  Array [
    Array [
      /^$.$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [#a* 1`] = `
Array [
  Array [
    Array [
      /^\\[\\#a[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [^a-c]* 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^a-c][^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [a-[:alpha:]*] 1`] = `
Array [
  Array [
    Array [
      /^$.$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [a-0][a-Ā] 1`] = `
Array [
  Array [
    Array [
      /^$.$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [a-b-c] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[a-b\\-c]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [a-c]b* 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[a-c]b[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [a-y]*[^c] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[a-y][^/]*?[^c]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [a-z] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[a-z]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [abc 1`] = `
Array [
  Array [
    Array [
      "[abc",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > [abc-] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[abc\\-]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [f-fz-a]* 1`] = `
Array [
  Array [
    Array [
      /^f[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [f-gz-a]* 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[f-g][^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [fz-a]* 1`] = `
Array [
  Array [
    Array [
      /^f[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [ia]?[ck] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[ia][^/][ck]$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [z-a] 1`] = `
Array [
  Array [
    Array [
      /^$.$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [z-a]* 1`] = `
Array [
  Array [
    Array [
      /^$.$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [z-af]* 1`] = `
Array [
  Array [
    Array [
      /^f[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > [z\\-a] 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[z\\-a]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > {/?,*} 1`] = `
Array [
  Array [
    Array [
      "",
      /^(?!\\.)[^/]$/,
    ],
    Array [
      /^(?!\\.)[^/]+?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > {/*,*} 1`] = `
Array [
  Array [
    Array [
      "",
      /^(?!\\.)[^/]+?$/,
    ],
    Array [
      /^(?!\\.)[^/]+?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > {a,*(b|{c,d})} 1`] = `
Array [
  Array [
    Array [
      "a",
    ],
    Array [
      /^(?:b|c)*$/,
    ],
    Array [
      /^(?:b|d)*$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > {a,*(b|c,d)} 1`] = `
Array [
  Array [
    Array [
      "a",
    ],
    Array [
      /^(?!\\.)[^/]*?\\(b\\|c$/,
    ],
    Array [
      "d)",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > {c*,./c*} 1`] = `
Array [
  Array [
    Array [
      /^c[^/]*?$/,
    ],
    Array [
      ".",
      /^c[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > @(.*) 1`] = `
Array [
  Array [
    Array [
      /^(?:(?!(?:^|\\/)\\.\\.?(?:$|\\/))\\.[^/]*?)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > @(.*) 2`] = `
Array [
  Array [
    Array [
      /^(?:(?!(?:^|\\/)\\.\\.?(?:$|\\/))\\.[^/]*?)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > @(.*|*) 1`] = `
Array [
  Array [
    Array [
      /^(?:(?!(?:^|\\/)\\.\\.?(?:$|\\/))\\.[^/]*?|(?!\\.)[^/]+?)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > @(.*|js) 1`] = `
Array [
  Array [
    Array [
      /^(?:(?!(?:^|\\/)\\.\\.?(?:$|\\/))\\.[^/]*?|js)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > @(*|.*) 1`] = `
Array [
  Array [
    Array [
      /^(?:(?!\\.)[^/]+?|(?!(?:^|\\/)\\.\\.?(?:$|\\/))\\.[^/]*?)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > @(*|a) 1`] = `
Array [
  Array [
    Array [
      /^(?:(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]+?|a)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > @(a|a[(])b 1`] = `
Array [
  Array [
    Array [
      /^(?:a|a\\()b$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > @(a|a[)])b 1`] = `
Array [
  Array [
    Array [
      /^(?:a|a\\))b$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > @(js|.*) 1`] = `
Array [
  Array [
    Array [
      /^(?:js|(?!(?:^|\\/)\\.\\.?(?:$|\\/))\\.[^/]*?)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > * 1`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]+?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > * 2`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]+?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > * 3`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]+?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *.!(js) 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?\\.(?:(?!(?:js(?:$|\\/)))[^/]*?)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *.* 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?\\.[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *.* 2`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]*?\\.[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *.\\* 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?\\.\\*$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *.js 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?\\.js$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *.js 2`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]*?\\.js$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *.js 3`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?\\.js$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *.js 4`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]*?\\.js$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *.y 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?\\.y$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *.Y 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?\\.Y$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *.z 1`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]*?\\.z$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *.Z 1`] = `
Array [
  Array [
    Array [
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]*?\\.Z$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *(?) 1`] = `
Array [
  Array [
    Array [
      /^(?:(?:(?!\\.)[^/])(?:(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/])*?)?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *(a/b) 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?\\(a$/,
      "b)",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *(a|{b,c}) 1`] = `
Array [
  Array [
    Array [
      /^(?:a|b)*$/,
    ],
    Array [
      /^(?:a|c)*$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *(a|{b),c)} 1`] = `
Array [
  Array [
    Array [
      /^(?:a|b)*$/,
    ],
    Array [
      /^(?:a|c)*$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *(a|{b|c,c}) 1`] = `
Array [
  Array [
    Array [
      /^(?:a|b|c)*$/,
    ],
    Array [
      /^(?:a|c)*$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *(a|{b|c,c}) 2`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?\\(a\\|b\\|c\\)$/,
    ],
    Array [
      /^(?!\\.)[^/]*?\\(a\\|c\\)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ** 1`] = `
Array [
  Array [
    Array [
      Symbol(globstar **),
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ** 2`] = `
Array [
  Array [
    Array [
      Symbol(globstar **),
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > ** 3`] = `
Array [
  Array [
    Array [
      Symbol(globstar **),
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *****?? 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *******? 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *******c 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?c$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > **/.x/** 1`] = `
Array [
  Array [
    Array [
      Symbol(globstar **),
      ".x",
      Symbol(globstar **),
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > **/.x/** 2`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]+?$/,
      ".x",
      /^(?!\\.)[^/]+?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > **/**/** 1`] = `
Array [
  Array [
    Array [
      Symbol(globstar **),
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > */man*/bash.* 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]+?$/,
      /^man[^/]*?$/,
      /^bash\\.[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *\\!* 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?\\![^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *\\\\!* 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?\\\\![^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *c*?** 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?c[^/]*?[^/][^/]*?[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > *js 1`] = `
Array [
  Array [
    Array [
      /^(?!\\.)[^/]*?js$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > /^root:/{s/^[^:]*:[^:]*:([^:]*).*$// 1`] = `
Array [
  Array [
    Array [
      "",
      "^root:",
      "{s",
      /^\\^[^:][^/]*?:[^:][^/]*?:\\([^:][^/]*?\\)\\.[^/]*?\\$$/,
      "\\u0001",
      "",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > /^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\1/ 1`] = `
Array [
  Array [
    Array [
      "",
      "^root:",
      "{s",
      /^\\^[^:][^/]*?:[^:][^/]*?:\\([^:][^/]*?\\)\\.[^/]*?\\$$/,
      "1",
      "",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > \\ 1`] = `
Array [
  Array [
    Array [
      "\\\\",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > \\.\\./*/ 1`] = `
Array [
  Array [
    Array [
      "..",
      /^(?!\\.)[^/]+?$/,
      "",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > \\* 1`] = `
Array [
  Array [
    Array [
      "*",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > \\** 1`] = `
Array [
  Array [
    Array [
      /^\\*[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > \\*\\* 1`] = `
Array [
  Array [
    Array [
      "**",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > # ignore this 1`] = `
Array [
  Array [],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > #* 1`] = `
Array [
  Array [
    Array [
      /^\\#[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > +(?) 1`] = `
Array [
  Array [
    Array [
      /^(?:(?:(?!\\.)[^/])(?:(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/])*?)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > +(.|a|!(b)) 1`] = `
Array [
  Array [
    Array [
      /^(?:(?:\\.|a|(?:(?!(?:b(?:$|\\/)))(?!\\.)[^/]*?))(?:\\.|a|(?:(?!(?:b(?:$|\\/)))[^/]*?))*?)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > +() 1`] = `
Array [
  Array [
    Array [
      "+()",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > +()*(x|a) 1`] = `
Array [
  Array [
    Array [
      /^(?:)+(?:x|a)*$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > +(a)!(b)+(c) 1`] = `
Array [
  Array [
    Array [
      /^(?:a)+(?:(?!(?:b(?:c)+(?:$|\\/)))[^/]*?)(?:c)+$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > +(a|!(b)) 1`] = `
Array [
  Array [
    Array [
      /^(?:(?:a|(?:(?!(?:b(?:$|\\/)))(?!\\.)[^/]*?))(?:a|(?:(?!(?:b(?:$|\\/)))[^/]*?))*?)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > +(a|?) 1`] = `
Array [
  Array [
    Array [
      /^(?:(?:a|(?!\\.)[^/])(?:a|(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/])*?)$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > +(a|.) 1`] = `
Array [
  Array [
    Array [
      /^(?:a|\\.)+$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > +(a|*\\|c\\\\|d\\\\\\|e\\\\\\\\|f\\\\\\\\\\|g 1`] = `
Array [
  Array [
    Array [
      /^\\+\\(a\\|[^/]*?|c\\\\\\|d\\\\|e\\\\\\\\\\|f\\\\\\\\|g$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > +(x|a[^)]y) 1`] = `
Array [
  Array [
    Array [
      /^(?:x|a[^)]y)+$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > å 1`] = `
Array [
  Array [
    Array [
      "å",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > Å 1`] = `
Array [
  Array [
    Array [
      /^Å$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > å 2`] = `
Array [
  Array [
    Array [
      /^å$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > Å 2`] = `
Array [
  Array [
    Array [
      "Å",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > å 3`] = `
Array [
  Array [
    Array [
      /^å$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > Å 3`] = `
Array [
  Array [
    Array [
      "Å",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > å 4`] = `
Array [
  Array [
    Array [
      "å",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > Å 4`] = `
Array [
  Array [
    Array [
      /^Å$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a?b 1`] = `
Array [
  Array [
    Array [
      /^a[^/]b$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a?c 1`] = `
Array [
  Array [
    Array [
      /^a[^/]c$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a[\\b]c 1`] = `
Array [
  Array [
    Array [
      "abc",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > a[b]c 1`] = `
Array [
  Array [
    Array [
      "abc",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > a[X-]b 1`] = `
Array [
  Array [
    Array [
      /^a[X\\-]b$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a* 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a*[^c] 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?[^c]$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a**?**cd**?**??***k 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/][^/]*?[^/]*?[^/]*?k$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a**?**cd**?**??***k** 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/][^/]*?[^/]*?[^/]*?k[^/]*?[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a**?**cd**?**??k 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/]k$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a**?**cd**?**??k*** 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/]k[^/]*?[^/]*?[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a*****?c 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]c$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a********???******* 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a*****c*?** 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?c[^/]*?[^/][^/]*?[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a****c**?**??***** 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?[^/]*?[^/]*?[^/]*?c[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a***c 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?[^/]*?[^/]*?c$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a*cd**?**??k 1`] = `
Array [
  Array [
    Array [
      /^a[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/]k$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a/.*/b 1`] = `
Array [
  Array [
    Array [
      "a",
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))\\.[^/]*?$/,
      "b",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a/.*/b 2`] = `
Array [
  Array [
    Array [
      "a",
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))\\.[^/]*?$/,
      "b",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a/[2015-03-10T00:23:08.647Z]/z 1`] = `
Array [
  Array [
    Array [
      "a",
      /^(?!\\.)[2010T00:23:08.647Z]$/,
      "z",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a/[2015-03-10T00:23:08.647Z\\]/z 1`] = `
Array [
  Array [
    Array [
      "a",
      "[2015-03-10T00:23:08.647Z]",
      "z",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > a/*/b 1`] = `
Array [
  Array [
    Array [
      "a",
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))[^/]+?$/,
      "b",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a/*/b 2`] = `
Array [
  Array [
    Array [
      "a",
      /^(?!\\.)[^/]+?$/,
      "b",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a\\*?/* 1`] = `
Array [
  Array [
    Array [
      /^a\\*[^/]$/,
      /^(?!\\.)[^/]+?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a\\*b/* 1`] = `
Array [
  Array [
    Array [
      "a*b",
      /^(?!\\.)[^/]+?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > a\\*c 1`] = `
Array [
  Array [
    Array [
      "a*c",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > ab* 1`] = `
Array [
  Array [
    Array [
      /^ab[^/]*?$/i,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > b*/ 1`] = `
Array [
  Array [
    Array [
      /^b[^/]*?$/,
      "",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > c* 1`] = `
Array [
  Array [
    Array [
      /^c[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > man/man1/bash.1 1`] = `
Array [
  Array [
    Array [
      "man",
      "man1",
      "bash.1",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > must match snapshot 1`] = `
Array [
  Array [],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > s/\\..*// 1`] = `
Array [
  Array [
    Array [
      "s",
      /^(?!(?:^|\\/)\\.\\.?(?:$|\\/))\\.\\.[^/]*?$/,
      "",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > X* 1`] = `
Array [
  Array [
    Array [
      /^X[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > X* 2`] = `
Array [
  Array [
    Array [
      /^X[^/]*?$/,
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > x/*/../../a/b/c 1`] = `
Array [
  Array [
    Array [
      "a",
      "b",
      "c",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > x/*/../a/b/c 1`] = `
Array [
  Array [
    Array [
      "x",
      "a",
      "b",
      "c",
    ],
  ],
  false,
]
`

exports[`test/escape-has-magic.js > TAP > x/z/../*/a/b/c 1`] = `
Array [
  Array [
    Array [
      "x",
      /^(?!\\.)[^/]+?$/,
      "a",
      "b",
      "c",
    ],
  ],
  true,
]
`

exports[`test/escape-has-magic.js > TAP > XYZ 1`] = `
Array [
  Array [
    Array [
      /^XYZ$/i,
    ],
  ],
  true,
]
`
