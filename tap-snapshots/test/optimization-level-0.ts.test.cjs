/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/optimization-level-0.ts TAP basic tests >  hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests >  hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests >  parsed 1`] = `
Array [
  Array [],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > !!a* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > !!a* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > !!a* parsed 1`] = `
Array [
  Array [],
  "!!a*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > !()y hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > !()y hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > !()y hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > !()y hasMagic pre-generate 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > !()y parsed 1`] = `
Array [
  Array [],
  Array [
    "!",
    Array [
      Array [],
      "y",
      Object {},
    ],
  ],
  "y",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > !()y parsed 2`] = `
Array [
  Array [],
  Array [
    "!",
    Array [
      Array [],
      "y",
      Object {},
    ],
  ],
  "y",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > !(.a|js)@(.*) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > !(.a|js)@(.*) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > !(.a|js)@(.*) parsed 1`] = `
Array [
  Array [],
  Array [
    "!",
    Array [
      Array [],
      ".a",
      Array [
        "@",
        Array [
          ".*",
        ],
      ],
      Object {},
    ],
    Array [
      Array [],
      "js",
      Array [
        "@",
        Array [
          ".*",
        ],
      ],
      Object {},
    ],
  ],
  Array [
    "@",
    Array [
      Array [],
      ".*",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > !\\!a* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > !\\!a* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > !\\!a* parsed 1`] = `
Array [
  Array [],
  "!\\\\!a*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > !a* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > !a* hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > !a* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > !a* hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > !a* parsed 1`] = `
Array [
  Array [],
  "!a*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > !a* parsed 2`] = `
Array [
  Array [],
  "!a*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "!!a*" ["a!b"] 1`] = `
Array [
  "a!b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "!()y" [".y","a.y","ay","x.y","xy"] 1`] = `
Array [
  ".y",
  "a.y",
  "ay",
  "x.y",
  "xy",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "!()y" ["a.y","ay","x.y","xy"] 1`] = `
Array [
  "a.y",
  "ay",
  "x.y",
  "xy",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "!(.a|js)@(.*)" ["a.js"] 1`] = `
Array [
  "a.js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "!\\\\!a*" ["\\\\!a","a!b","d","e"] 1`] = `
Array [
  "\\\\!a",
  "a!b",
  "d",
  "e",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "!a*" ["!ab","!abc","\\\\!a","d","e"] 1`] = `
Array [
  "!ab",
  "!abc",
  "\\\\!a",
  "d",
  "e",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "!a*" ["!ab","!abc"] 1`] = `
Array [
  "!ab",
  "!abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "" [""] 1`] = `
Array [
  "",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "# ignore this" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "#*" ["#a","#b"] 1`] = `
Array [
  "#a",
  "#b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*" [".JS",".a",".a.JS",".a.js",".js","JS","a","a.JS","a.js","js"] 1`] = `
Array [
  ".JS",
  ".a",
  ".a.JS",
  ".a.js",
  ".js",
  "JS",
  "a",
  "a.JS",
  "a.js",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*" [".a",".a.js",".js","a","a.js","js"] 1`] = `
Array [
  ".a",
  ".a.js",
  ".js",
  "a",
  "a.js",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*" ["JS","a","a.JS","a.js","js"] 1`] = `
Array [
  "JS",
  "a",
  "a.JS",
  "a.js",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*(a/b)" ["*(a/b)"] 1`] = `
Array [
  "*(a/b)",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*(a|{b),c)}" ["a","ab","ac"] 1`] = `
Array [
  "a",
  "ab",
  "ac",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*(a|{b,c})" ["a","ab","ac","b","c"] 1`] = `
Array [
  "a",
  "ab",
  "ac",
  "b",
  "c",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*(a|{b|c,c})" ["(a|b|c)","(a|c)","x(a|b|c)","x(a|c)"] 1`] = `
Array [
  "(a|b|c)",
  "(a|c)",
  "x(a|b|c)",
  "x(a|c)",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*(a|{b|c,c})" ["a","ab","ac","b","bc","c","cb"] 1`] = `
Array [
  "a",
  "ab",
  "ac",
  "b",
  "bc",
  "c",
  "cb",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "**" [".a/.d","a/.d","a/b"] 1`] = `
Array [
  ".a/.d",
  "a/.d",
  "a/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "**" ["a","abc","abd","abe","b","bb","bcd","bdir/","bdir/cfile","c","ca","cb","d","dd","de"] 1`] = `
Array [
  "a",
  "abc",
  "abd",
  "abe",
  "b",
  "bb",
  "bcd",
  "bdir/",
  "bdir/cfile",
  "c",
  "ca",
  "cb",
  "d",
  "dd",
  "de",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "**" ["a/b"] 1`] = `
Array [
  "a/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*******?" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*******c" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*****??" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "**/**/**" ["a","abc","abd","abe","b","bb","bcd","bdir/","bdir/cfile","c","ca","cb","d","dd","de"] 1`] = `
Array [
  "a",
  "abc",
  "abd",
  "abe",
  "b",
  "bb",
  "bcd",
  "bdir/",
  "bdir/cfile",
  "c",
  "ca",
  "cb",
  "d",
  "dd",
  "de",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "**/.x/**" [".x/",".x/a/",".x/a/b","a/.x/b","a/b/.x/","a/b/.x/c","a/b/.x/c/d","a/b/.x/c/d/e"] 1`] = `
Array [
  ".x/",
  ".x/a/",
  ".x/a/b",
  "a/.x/b",
  "a/b/.x/",
  "a/b/.x/c",
  "a/b/.x/c/d",
  "a/b/.x/c/d/e",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "**/.x/**" ["a/.x/b"] 1`] = `
Array [
  "a/.x/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*.!(js)" ["boo.js.boo","foo.","foo.bar","foo.js.js"] 1`] = `
Array [
  "boo.js.boo",
  "foo.",
  "foo.bar",
  "foo.js.js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*.*" [".JS",".a",".a.JS",".a.js",".js","a.JS","a.js"] 1`] = `
Array [
  ".JS",
  ".a",
  ".a.JS",
  ".a.js",
  ".js",
  "a.JS",
  "a.js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*.*" ["a.JS","a.js"] 1`] = `
Array [
  "a.JS",
  "a.js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*.Y" ["a.y","x.y"] 1`] = `
Array [
  "a.y",
  "x.y",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*.Z" [".z","a.z","x.z"] 1`] = `
Array [
  ".z",
  "a.z",
  "x.z",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*.\\\\*" ["r.*"] 1`] = `
Array [
  "r.*",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*.js" [".JS",".a.JS",".a.js",".js","a.JS","a.js"] 1`] = `
Array [
  ".JS",
  ".a.JS",
  ".a.js",
  ".js",
  "a.JS",
  "a.js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*.js" [".a.js",".js","a.js"] 1`] = `
Array [
  ".a.js",
  ".js",
  "a.js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*.js" ["a.JS","a.js"] 1`] = `
Array [
  "a.JS",
  "a.js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*.js" ["a.js"] 1`] = `
Array [
  "a.js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*.y" ["a.y","x.y"] 1`] = `
Array [
  "a.y",
  "x.y",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*.z" [".z","a.z","x.z"] 1`] = `
Array [
  ".z",
  "a.z",
  "x.z",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*/man*/bash.*" ["man/man1/bash.1"] 1`] = `
Array [
  "man/man1/bash.1",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*\\\\!*" ["echo !7"] 1`] = `
Array [
  "echo !7",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "*\\\\\\\\!*" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "*c*?**" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "*js" ["a.js","js"] 1`] = `
Array [
  "a.js",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "+()" ["+()"] 1`] = `
Array [
  "+()",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "+()*(x|a)" ["a","x"] 1`] = `
Array [
  "a",
  "x",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "+(a)!(b)+(c)" ["ac","acc","adc"] 1`] = `
Array [
  "ac",
  "acc",
  "adc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "+(a|*\\\\|c\\\\\\\\|d\\\\\\\\\\\\|e\\\\\\\\\\\\\\\\|f\\\\\\\\\\\\\\\\\\\\|g" ["+(a|b\\\\|c\\\\\\\\|d\\\\\\\\|e\\\\\\\\\\\\\\\\|f\\\\\\\\\\\\\\\\|g"] 1`] = `
Array [
  "+(a|b\\\\|c\\\\\\\\|d\\\\\\\\|e\\\\\\\\\\\\\\\\|f\\\\\\\\\\\\\\\\|g",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "+(x|a[^)]y)" ["a.y","x"] 1`] = `
Array [
  "a.y",
  "x",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ".*" [".JS",".a",".a.JS",".a.js",".js"] 1`] = `
Array [
  ".JS",
  ".a",
  ".a.JS",
  ".a.js",
  ".js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ".*" [".a",".a.js",".js"] 1`] = `
Array [
  ".a",
  ".a.js",
  ".js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ".x/**/*" [".x/.x/",".x/.y",".x/a/",".x/a/b"] 1`] = `
Array [
  ".x/.x/",
  ".x/.y",
  ".x/a/",
  ".x/a/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ".x/**/*" [".x/a/",".x/a/b"] 1`] = `
Array [
  ".x/a/",
  ".x/a/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ".x/**/**/*" [".x/.x/",".x/.y",".x/a/",".x/a/b"] 1`] = `
Array [
  ".x/.x/",
  ".x/.y",
  ".x/a/",
  ".x/a/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ".x/**/**/*" [".x/a/",".x/a/b"] 1`] = `
Array [
  ".x/a/",
  ".x/a/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ".x/**/*/**" [".x/.x/",".x/a/",".x/a/b"] 1`] = `
Array [
  ".x/.x/",
  ".x/a/",
  ".x/a/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ".x/**/*/**" [".x/a/",".x/a/b"] 1`] = `
Array [
  ".x/a/",
  ".x/a/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ".x/*/**" [".x/.x/",".x/a/",".x/a/b"] 1`] = `
Array [
  ".x/.x/",
  ".x/a/",
  ".x/a/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ".x/*/**" [".x/a/",".x/a/b"] 1`] = `
Array [
  ".x/a/",
  ".x/a/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ".x/*/**/**" [".x/.x/",".x/a/",".x/a/b"] 1`] = `
Array [
  ".x/.x/",
  ".x/a/",
  ".x/a/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ".x/*/**/**" [".x/a/",".x/a/b"] 1`] = `
Array [
  ".x/a/",
  ".x/a/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "/^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\\\1/" ["/^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\\\1/"] 1`] = `
Array [
  "/^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\\\1/",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "/^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\u0001/" ["/^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\u0001/"] 1`] = `
Array [
  "/^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\u0001/",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?" ["a"] 1`] = `
Array [
  "a",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?(x-!(y)|z)" ["x-a","x-ab","x-z"] 1`] = `
Array [
  "x-a",
  "x-ab",
  "x-z",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?(x-!(y)|z)b" ["x-ab","zb"] 1`] = `
Array [
  "x-ab",
  "zb",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?************c****?****" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "?*****??" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?*****?c" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?***?****" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?***?****?" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?***?****c" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?.js" ["a.JS","a.js"] 1`] = `
Array [
  "a.JS",
  "a.js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?.js" ["a.JS","a.js"] 2`] = `
Array [
  "a.JS",
  "a.js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?.js" ["a.js"] 1`] = `
Array [
  "a.js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?.js" ["a.js"] 2`] = `
Array [
  "a.js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "??" [".a","JS","js"] 1`] = `
Array [
  ".a",
  "JS",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "??" [".a","JS","js"] 2`] = `
Array [
  ".a",
  "JS",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "??" ["JS","js"] 1`] = `
Array [
  "JS",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "??" ["JS","js"] 2`] = `
Array [
  "JS",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "??**********?****?" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "??**********?****c" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "???" [".JS",".js"] 1`] = `
Array [
  ".JS",
  ".js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "???" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "?js" [".JS",".js"] 1`] = `
Array [
  ".JS",
  ".js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?js" [".js"] 1`] = `
Array [
  ".js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "?js" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "@(*|.*)" [".a",".a.js",".js","a","a.js","js"] 1`] = `
Array [
  ".a",
  ".a.js",
  ".js",
  "a",
  "a.js",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "@(*|a)" [".a",".a.js",".js","a","a.js","js"] 1`] = `
Array [
  ".a",
  ".a.js",
  ".js",
  "a",
  "a.js",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "@(.*)" [".a",".a.js",".js"] 1`] = `
Array [
  ".a",
  ".a.js",
  ".js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "@(.*)" [".a",".a.js",".js"] 2`] = `
Array [
  ".a",
  ".a.js",
  ".js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "@(.*|*)" [".a",".a.js",".js","a","a.js","js"] 1`] = `
Array [
  ".a",
  ".a.js",
  ".js",
  "a",
  "a.js",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "@(.*|js)" [".a",".a.js",".js","js"] 1`] = `
Array [
  ".a",
  ".a.js",
  ".js",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "@(a|a[(])b" ["a(b","ab"] 1`] = `
Array [
  "a(b",
  "ab",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "@(a|a[)])b" ["a)b","ab"] 1`] = `
Array [
  "a)b",
  "ab",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "@(js|.*)" [".a",".a.js",".js","js"] 1`] = `
Array [
  ".a",
  ".a.js",
  ".js",
  "js",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "X*" ["X*"] 1`] = `
Array [
  "X*",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "X*" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "XYZ" ["xYz"] 1`] = `
Array [
  "xYz",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[!a*" ["[!ab"] 1`] = `
Array [
  "[!ab",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[" ["["] 1`] = `
Array [
  "[",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[#a*" ["[#ab"] 1`] = `
Array [
  "[#ab",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[*" ["[abc"] 1`] = `
Array [
  "[abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[-abc]" ["-"] 1`] = `
Array [
  "-",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]]" ["0f7fa","99999","aeiou","fffff","åéîøü"] 1`] = `
Array [
  "0f7fa",
  "99999",
  "aeiou",
  "fffff",
  "åéîøü",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]]" ["aeiou","fffff","åéîøü"] 1`] = `
Array [
  "aeiou",
  "fffff",
  "åéîøü",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]]" ["0f7fa","99999","aeiou","fffff"] 1`] = `
Array [
  "0f7fa",
  "99999",
  "aeiou",
  "fffff",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[[:graph:][:digit:]]f*" ["0f7fa","fffff"] 1`] = `
Array [
  "0f7fa",
  "fffff",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[[:graph:]]f*" ["0f7fa","fffff"] 1`] = `
Array [
  "0f7fa",
  "fffff",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[[:xdigit:]][[:xdigit:]]???" ["0f7fa","99999","aeiou","fffff"] 1`] = `
Array [
  "0f7fa",
  "99999",
  "aeiou",
  "fffff",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]]" ["0f7fa","99999","fffff"] 1`] = `
Array [
  "0f7fa",
  "99999",
  "fffff",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[[]" ["["] 1`] = `
Array [
  "[",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[\\\\-\\\\]]" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "[\\\\\\\\]" ["\\\\"] 1`] = `
Array [
  "\\\\",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[\\\\b-a]" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "[\\\\z-a]" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "[]" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "[]+*]" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "[]-]" ["]"] 1`] = `
Array [
  "]",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[]]" ["]"] 1`] = `
Array [
  "]",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[^a-c]*" ["d","dd","de"] 1`] = `
Array [
  "d",
  "dd",
  "de",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[a-0][a-Ā]" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "[a-[:alpha:]*]" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "[a-b-c]" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "[a-c]b*" ["abc","abd","abe","bb","cb"] 1`] = `
Array [
  "abc",
  "abd",
  "abe",
  "bb",
  "cb",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[a-y]*[^c]" ["abd","abe","bb","bcd","bdir/","ca","cb","dd","de"] 1`] = `
Array [
  "abd",
  "abe",
  "bb",
  "bcd",
  "bdir/",
  "ca",
  "cb",
  "dd",
  "de",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[a-z]" ["p"] 1`] = `
Array [
  "p",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[abc" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "[abc-]" ["-"] 1`] = `
Array [
  "-",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[f-fz-a]*" ["fffff"] 1`] = `
Array [
  "fffff",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[f-gz-a]*" ["fffff"] 1`] = `
Array [
  "fffff",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[fz-a]*" ["fffff"] 1`] = `
Array [
  "fffff",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[ia]?[ck]" ["ABC","IjK"] 1`] = `
Array [
  "ABC",
  "IjK",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[z-a]" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "[z-a]*" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "[z-af]*" ["fffff"] 1`] = `
Array [
  "fffff",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "[z\\\\-a]" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "\\\\" ["\\\\"] 1`] = `
Array [
  "\\\\",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "\\\\*" ["\\\\*"] 1`] = `
Array [
  "\\\\*",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "\\\\**" ["\\\\**"] 1`] = `
Array [
  "\\\\**",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "\\\\*\\\\*" ["\\\\*\\\\*"] 1`] = `
Array [
  "\\\\*\\\\*",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "\\\\.\\\\./*/" ["\\\\.\\\\./*/"] 1`] = `
Array [
  "\\\\.\\\\./*/",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a*" ["a","abc","abd","abe"] 1`] = `
Array [
  "a",
  "abc",
  "abd",
  "abe",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a********???*******" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "a*****?c" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a*****c*?**" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "a****c**?**??*****" ["abcdecdhjk"] 1`] = `
Array [
  "abcdecdhjk",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a***c" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a**?**cd**?**??***k" ["abcdecdhjk"] 1`] = `
Array [
  "abcdecdhjk",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a**?**cd**?**??***k**" ["abcdecdhjk"] 1`] = `
Array [
  "abcdecdhjk",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a**?**cd**?**??k" ["abcdecdhjk"] 1`] = `
Array [
  "abcdecdhjk",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a**?**cd**?**??k***" ["abcdecdhjk"] 1`] = `
Array [
  "abcdecdhjk",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a*[^c]" ["abd","abe"] 1`] = `
Array [
  "abd",
  "abe",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a*cd**?**??k" ["abcdecdhjk"] 1`] = `
Array [
  "abcdecdhjk",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a/*/b" ["a/.d/b","a/c/b"] 1`] = `
Array [
  "a/.d/b",
  "a/c/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a/*/b" ["a/c/b"] 1`] = `
Array [
  "a/c/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a/.*/b" ["a/.d/b"] 1`] = `
Array [
  "a/.d/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a/.*/b" ["a/.d/b"] 2`] = `
Array [
  "a/.d/b",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a/[2015-03-10T00:23:08.647Z\\\\]/z" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "a/[2015-03-10T00:23:08.647Z]/z" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "a?b" ["acb/","x/y/acb"] 1`] = `
Array [
  "acb/",
  "x/y/acb",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a?c" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a[X-]b" ["a-b","aXb"] 1`] = `
Array [
  "a-b",
  "aXb",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a[\\\\b]c" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a[b]c" ["abc"] 1`] = `
Array [
  "abc",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a\\\\*?/*" ["a*b/ooo"] 1`] = `
Array [
  "a*b/ooo",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a\\\\*b/*" ["a*b/ooo"] 1`] = `
Array [
  "a*b/ooo",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "a\\\\*c" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "ab*" ["ABC"] 1`] = `
Array [
  "ABC",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "b*/" ["bdir/"] 1`] = `
Array [
  "bdir/",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "c*" ["c","ca","cb"] 1`] = `
Array [
  "c",
  "ca",
  "cb",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "man/man1/bash.1" ["man/man1/bash.1"] 1`] = `
Array [
  "man/man1/bash.1",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "s/\\\\..*//" ["s/\\\\..*//"] 1`] = `
Array [
  "s/\\\\..*//",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "x/*/../../a/b/c" ["a/b/c"] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "x/*/../a/b/c" ["x/a/b/c"] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "x/z/../*/a/b/c" ["x/y/a/b/c","x/z/a/b/c"] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "{/*,*}" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "{/?,*}" ["/a","bb"] 1`] = `
Array [
  "/a",
  "bb",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "{a,*(b|c,d)}" ["(b|c","*(b|c","a","d)"] 1`] = `
Array [
  "(b|c",
  "*(b|c",
  "a",
  "d)",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "{a,*(b|{c,d})}" ["a","b","bc","c","cb","d"] 1`] = `
Array [
  "a",
  "b",
  "bc",
  "c",
  "cb",
  "d",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "{c*,./c*}" ["c","ca","cb"] 1`] = `
Array [
  "c",
  "ca",
  "cb",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "Å" ["Å"] 1`] = `
Array [
  "Å",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "Å" ["Å"] 2`] = `
Array [
  "Å",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "Å" ["å"] 1`] = `
Array [
  "å",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "Å" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > "å" ["Å"] 1`] = `
Array [
  "Å",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "å" ["å"] 1`] = `
Array [
  "å",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "å" ["å"] 2`] = `
Array [
  "å",
]
`

exports[`test/optimization-level-0.ts TAP basic tests > "å" [] 1`] = `
Array []
`

exports[`test/optimization-level-0.ts TAP basic tests > # ignore this hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > # ignore this hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > # ignore this parsed 1`] = `
Array [
  Array [],
  "# ignore this",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > #* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > #* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > #* parsed 1`] = `
Array [
  Array [],
  "#*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > * hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > * hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > * hasMagic known 3`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > * hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > * hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > * hasMagic pre-generate 3`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > * parsed 1`] = `
Array [
  Array [],
  "*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > * parsed 2`] = `
Array [
  Array [],
  "*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > * parsed 3`] = `
Array [
  Array [],
  "*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a/b) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a/b) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a/b) parsed 1`] = `
Array [
  Array [],
  Array [
    "*",
    Array [
      Array [],
      "a/b",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a|{b),c)} hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a|{b),c)} hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a|{b),c)} parsed 1`] = `
Array [
  Array [],
  Array [
    "*",
    Array [
      Array [],
      "a",
    ],
    Array [
      Array [],
      "{b",
    ],
  ],
  ",c)}",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a|{b,c}) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a|{b,c}) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a|{b,c}) parsed 1`] = `
Array [
  Array [],
  Array [
    "*",
    Array [
      Array [],
      "a",
    ],
    Array [
      Array [],
      "{b,c}",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a|{b|c,c}) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a|{b|c,c}) hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a|{b|c,c}) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a|{b|c,c}) hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a|{b|c,c}) parsed 1`] = `
Array [
  Array [],
  Array [
    "*",
    Array [
      Array [],
      "a",
    ],
    Array [
      Array [],
      "{b",
    ],
    Array [
      Array [],
      "c,c}",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *(a|{b|c,c}) parsed 2`] = `
Array [
  Array [],
  "*(a|{b|c,c})",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ** hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ** hasMagic known 3`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ** hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ** hasMagic pre-generate 3`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ** parsed 1`] = `
Array [
  Array [],
  "**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ** parsed 2`] = `
Array [
  Array [],
  "**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ** parsed 3`] = `
Array [
  Array [],
  "**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *******? hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *******? hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *******? parsed 1`] = `
Array [
  Array [],
  "*******?",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *******c hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *******c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *******c parsed 1`] = `
Array [
  Array [],
  "*******c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *****?? hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *****?? hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *****?? parsed 1`] = `
Array [
  Array [],
  "*****??",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > **/**/** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > **/**/** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > **/**/** parsed 1`] = `
Array [
  Array [],
  "**/**/**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > **/.x/** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > **/.x/** hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > **/.x/** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > **/.x/** hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > **/.x/** parsed 1`] = `
Array [
  Array [],
  "**/.x/**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > **/.x/** parsed 2`] = `
Array [
  Array [],
  "**/.x/**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *.!(js) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.!(js) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.!(js) parsed 1`] = `
Array [
  Array [],
  "*.",
  Array [
    "!",
    Array [
      "js",
      Object {},
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *.* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.* hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *.* hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *.* parsed 1`] = `
Array [
  Array [],
  "*.*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *.* parsed 2`] = `
Array [
  Array [],
  "*.*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *.Y hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.Y hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *.Y parsed 1`] = `
Array [
  Array [],
  "*.Y",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *.Z hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.Z hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *.Z parsed 1`] = `
Array [
  Array [],
  "*.Z",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *.\\* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.\\* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *.\\* parsed 1`] = `
Array [
  Array [],
  "*.\\\\*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *.js hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.js hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.js hasMagic known 3`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.js hasMagic known 4`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.js hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *.js hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *.js hasMagic pre-generate 3`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *.js hasMagic pre-generate 4`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *.js parsed 1`] = `
Array [
  Array [],
  "*.js",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *.js parsed 2`] = `
Array [
  Array [],
  "*.js",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *.js parsed 3`] = `
Array [
  Array [],
  "*.js",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *.js parsed 4`] = `
Array [
  Array [],
  "*.js",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *.y hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.y hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *.y parsed 1`] = `
Array [
  Array [],
  "*.y",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *.z hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *.z hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *.z parsed 1`] = `
Array [
  Array [],
  "*.z",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > */man*/bash.* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > */man*/bash.* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > */man*/bash.* parsed 1`] = `
Array [
  Array [],
  "*/man*/bash.*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *\\!* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *\\!* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *\\!* parsed 1`] = `
Array [
  Array [],
  "*\\\\!*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *\\\\!* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *\\\\!* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *\\\\!* parsed 1`] = `
Array [
  Array [],
  "*\\\\\\\\!*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *c*?** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *c*?** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *c*?** parsed 1`] = `
Array [
  Array [],
  "*c*?**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > *js hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > *js hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > *js parsed 1`] = `
Array [
  Array [],
  "*js",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > +() hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > +() hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > +() parsed 1`] = `
Array [
  Array [],
  Array [
    Array [],
    "+()",
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > +()*(x|a) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > +()*(x|a) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > +()*(x|a) parsed 1`] = `
Array [
  Array [],
  Array [
    "+",
    Array [
      Array [],
    ],
  ],
  Array [
    "*",
    Array [
      "x",
    ],
    Array [
      "a",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > +(a)!(b)+(c) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > +(a)!(b)+(c) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > +(a)!(b)+(c) parsed 1`] = `
Array [
  Array [],
  Array [
    "+",
    Array [
      Array [],
      "a",
    ],
  ],
  Array [
    "!",
    Array [
      "b",
      Array [
        "+",
        Array [
          "c",
        ],
      ],
      Object {},
    ],
  ],
  Array [
    "+",
    Array [
      "c",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > +(a|*\\|c\\\\|d\\\\\\|e\\\\\\\\|f\\\\\\\\\\|g hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > +(a|*\\|c\\\\|d\\\\\\|e\\\\\\\\|f\\\\\\\\\\|g hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > +(a|*\\|c\\\\|d\\\\\\|e\\\\\\\\|f\\\\\\\\\\|g parsed 1`] = `
Array [
  Array [],
  Array [
    Array [],
    "+(a|*\\\\|c\\\\\\\\|d\\\\\\\\\\\\|e\\\\\\\\\\\\\\\\|f\\\\\\\\\\\\\\\\\\\\|g",
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > +(x|a[^)]y) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > +(x|a[^)]y) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > +(x|a[^)]y) parsed 1`] = `
Array [
  Array [],
  Array [
    "+",
    Array [
      Array [],
      "x",
    ],
    Array [
      Array [],
      "a[^)]y",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > .* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > .* hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > .* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > .* hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > .* parsed 1`] = `
Array [
  Array [],
  ".*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > .* parsed 2`] = `
Array [
  Array [],
  ".*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/* hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/* hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/* parsed 1`] = `
Array [
  Array [],
  ".x/**/*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/* parsed 2`] = `
Array [
  Array [],
  ".x/**/*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/**/* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/**/* hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/**/* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/**/* hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/**/* parsed 1`] = `
Array [
  Array [],
  ".x/**/**/*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/**/* parsed 2`] = `
Array [
  Array [],
  ".x/**/**/*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/*/** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/*/** hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/*/** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/*/** hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/*/** parsed 1`] = `
Array [
  Array [],
  ".x/**/*/**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/**/*/** parsed 2`] = `
Array [
  Array [],
  ".x/**/*/**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/*/** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/*/** hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/*/** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/*/** hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/*/** parsed 1`] = `
Array [
  Array [],
  ".x/*/**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/*/** parsed 2`] = `
Array [
  Array [],
  ".x/*/**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/*/**/** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/*/**/** hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/*/**/** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/*/**/** hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/*/**/** parsed 1`] = `
Array [
  Array [],
  ".x/*/**/**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > .x/*/**/** parsed 2`] = `
Array [
  Array [],
  ".x/*/**/**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > /^root:/{s/^[^:]*:[^:]*:([^:]*).*$// hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > /^root:/{s/^[^:]*:[^:]*:([^:]*).*$// hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > /^root:/{s/^[^:]*:[^:]*:([^:]*).*$// parsed 1`] = `
Array [
  Array [],
  "/^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\u0001/",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > /^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\1/ hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > /^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\1/ hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > /^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\1/ parsed 1`] = `
Array [
  Array [],
  "/^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\\\1/",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ? hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ? hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ? parsed 1`] = `
Array [
  Array [],
  "?",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?(x-!(y)|z) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?(x-!(y)|z) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?(x-!(y)|z) parsed 1`] = `
Array [
  Array [],
  Array [
    "?",
    Array [
      Array [],
      "x-",
      Array [
        "!",
        Array [
          "y",
          Object {},
        ],
      ],
    ],
    Array [
      Array [],
      "z",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?(x-!(y)|z)b hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?(x-!(y)|z)b hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?(x-!(y)|z)b parsed 1`] = `
Array [
  Array [],
  Array [
    "?",
    Array [
      Array [],
      "x-",
      Array [
        "!",
        Array [
          "y",
          "b",
          Object {},
        ],
      ],
    ],
    Array [
      Array [],
      "z",
    ],
  ],
  "b",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?************c****?**** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?************c****?**** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?************c****?**** parsed 1`] = `
Array [
  Array [],
  "?************c****?****",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?*****?? hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?*****?? hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?*****?? parsed 1`] = `
Array [
  Array [],
  "?*****??",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?*****?c hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?*****?c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?*****?c parsed 1`] = `
Array [
  Array [],
  "?*****?c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?***?**** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?***?**** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?***?**** parsed 1`] = `
Array [
  Array [],
  "?***?****",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?***?****? hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?***?****? hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?***?****? parsed 1`] = `
Array [
  Array [],
  "?***?****?",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?***?****c hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?***?****c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?***?****c parsed 1`] = `
Array [
  Array [],
  "?***?****c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?.js hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?.js hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?.js hasMagic known 3`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?.js hasMagic known 4`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?.js hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?.js hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?.js hasMagic pre-generate 3`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?.js hasMagic pre-generate 4`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?.js parsed 1`] = `
Array [
  Array [],
  "?.js",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?.js parsed 2`] = `
Array [
  Array [],
  "?.js",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?.js parsed 3`] = `
Array [
  Array [],
  "?.js",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?.js parsed 4`] = `
Array [
  Array [],
  "?.js",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?? hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?? hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?? hasMagic known 3`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?? hasMagic known 4`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?? hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?? hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?? hasMagic pre-generate 3`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?? hasMagic pre-generate 4`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?? parsed 1`] = `
Array [
  Array [],
  "??",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?? parsed 2`] = `
Array [
  Array [],
  "??",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?? parsed 3`] = `
Array [
  Array [],
  "??",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?? parsed 4`] = `
Array [
  Array [],
  "??",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ??**********?****? hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ??**********?****? hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ??**********?****? parsed 1`] = `
Array [
  Array [],
  "??**********?****?",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ??**********?****c hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ??**********?****c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ??**********?****c parsed 1`] = `
Array [
  Array [],
  "??**********?****c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ??? hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ??? hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ??? hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ??? hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ??? parsed 1`] = `
Array [
  Array [],
  "???",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ??? parsed 2`] = `
Array [
  Array [],
  "???",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?js hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?js hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?js hasMagic known 3`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ?js hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?js hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?js hasMagic pre-generate 3`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ?js parsed 1`] = `
Array [
  Array [],
  "?js",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?js parsed 2`] = `
Array [
  Array [],
  "?js",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ?js parsed 3`] = `
Array [
  Array [],
  "?js",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > @(*|.*) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(*|.*) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(*|.*) parsed 1`] = `
Array [
  Array [],
  Array [
    "@",
    Array [
      Array [],
      "*",
    ],
    Array [
      Array [],
      ".*",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > @(*|a) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(*|a) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(*|a) parsed 1`] = `
Array [
  Array [],
  Array [
    "@",
    Array [
      Array [],
      "*",
    ],
    Array [
      Array [],
      "a",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > @(.*) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(.*) hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(.*) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(.*) hasMagic pre-generate 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(.*) parsed 1`] = `
Array [
  Array [],
  Array [
    "@",
    Array [
      Array [],
      ".*",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > @(.*) parsed 2`] = `
Array [
  Array [],
  Array [
    "@",
    Array [
      Array [],
      ".*",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > @(.*|*) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(.*|*) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(.*|*) parsed 1`] = `
Array [
  Array [],
  Array [
    "@",
    Array [
      Array [],
      ".*",
    ],
    Array [
      Array [],
      "*",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > @(.*|js) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(.*|js) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(.*|js) parsed 1`] = `
Array [
  Array [],
  Array [
    "@",
    Array [
      Array [],
      ".*",
    ],
    Array [
      Array [],
      "js",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > @(a|a[(])b hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(a|a[(])b hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(a|a[(])b parsed 1`] = `
Array [
  Array [],
  Array [
    "@",
    Array [
      Array [],
      "a",
    ],
    Array [
      Array [],
      "a[(]",
    ],
  ],
  "b",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > @(a|a[)])b hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(a|a[)])b hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(a|a[)])b parsed 1`] = `
Array [
  Array [],
  Array [
    "@",
    Array [
      Array [],
      "a",
    ],
    Array [
      Array [],
      "a[)]",
    ],
  ],
  "b",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > @(js|.*) hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(js|.*) hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > @(js|.*) parsed 1`] = `
Array [
  Array [],
  Array [
    "@",
    Array [
      Array [],
      "js",
    ],
    Array [
      Array [],
      ".*",
    ],
  ],
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > X* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > X* hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > X* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > X* hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > X* parsed 1`] = `
Array [
  Array [],
  "X*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > X* parsed 2`] = `
Array [
  Array [],
  "X*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > XYZ hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > XYZ hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > XYZ parsed 1`] = `
Array [
  Array [],
  "XYZ",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [ hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > [ hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [ parsed 1`] = `
Array [
  Array [],
  "[",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [!a* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [!a* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [!a* parsed 1`] = `
Array [
  Array [],
  "[!a*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [#a* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [#a* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [#a* parsed 1`] = `
Array [
  Array [],
  "[#a*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [* parsed 1`] = `
Array [
  Array [],
  "[*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [-abc] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [-abc] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [-abc] parsed 1`] = `
Array [
  Array [],
  "[-abc]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]] parsed 1`] = `
Array [
  Array [],
  "[[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]] parsed 1`] = `
Array [
  Array [],
  "[[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]] parsed 1`] = `
Array [
  Array [],
  "[[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:graph:][:digit:]]f* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:graph:][:digit:]]f* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:graph:][:digit:]]f* parsed 1`] = `
Array [
  Array [],
  "[[:graph:][:digit:]]f*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:graph:]]f* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:graph:]]f* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:graph:]]f* parsed 1`] = `
Array [
  Array [],
  "[[:graph:]]f*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:xdigit:]][[:xdigit:]]??? hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:xdigit:]][[:xdigit:]]??? hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:xdigit:]][[:xdigit:]]??? parsed 1`] = `
Array [
  Array [],
  "[[:xdigit:]][[:xdigit:]]???",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]] parsed 1`] = `
Array [
  Array [],
  "[[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [[] hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > [[] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [[] parsed 1`] = `
Array [
  Array [],
  "[[]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [\\-\\]] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [\\-\\]] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [\\-\\]] parsed 1`] = `
Array [
  Array [],
  "[\\\\-\\\\]]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [\\\\] hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > [\\\\] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [\\\\] parsed 1`] = `
Array [
  Array [],
  "[\\\\\\\\]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [\\b-a] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [\\b-a] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [\\b-a] parsed 1`] = `
Array [
  Array [],
  "[\\\\b-a]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [\\z-a] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [\\z-a] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [\\z-a] parsed 1`] = `
Array [
  Array [],
  "[\\\\z-a]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [] hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > [] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [] parsed 1`] = `
Array [
  Array [],
  "[]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > []+*] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > []+*] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > []+*] parsed 1`] = `
Array [
  Array [],
  "[]+*]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > []-] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > []-] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > []-] parsed 1`] = `
Array [
  Array [],
  "[]-]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > []] hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > []] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > []] parsed 1`] = `
Array [
  Array [],
  "[]]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [^a-c]* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [^a-c]* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [^a-c]* parsed 1`] = `
Array [
  Array [],
  "[^a-c]*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-0][a-Ā] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-0][a-Ā] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-0][a-Ā] parsed 1`] = `
Array [
  Array [],
  "[a-0][a-Ā]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-[:alpha:]*] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-[:alpha:]*] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-[:alpha:]*] parsed 1`] = `
Array [
  Array [],
  "[a-[:alpha:]*]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-b-c] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-b-c] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-b-c] parsed 1`] = `
Array [
  Array [],
  "[a-b-c]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-c]b* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-c]b* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-c]b* parsed 1`] = `
Array [
  Array [],
  "[a-c]b*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-y]*[^c] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-y]*[^c] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-y]*[^c] parsed 1`] = `
Array [
  Array [],
  "[a-y]*[^c]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-z] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-z] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [a-z] parsed 1`] = `
Array [
  Array [],
  "[a-z]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [abc hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > [abc hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [abc parsed 1`] = `
Array [
  Array [],
  "[abc",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [abc-] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [abc-] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [abc-] parsed 1`] = `
Array [
  Array [],
  "[abc-]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [f-fz-a]* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [f-fz-a]* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [f-fz-a]* parsed 1`] = `
Array [
  Array [],
  "[f-fz-a]*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [f-gz-a]* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [f-gz-a]* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [f-gz-a]* parsed 1`] = `
Array [
  Array [],
  "[f-gz-a]*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [fz-a]* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [fz-a]* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [fz-a]* parsed 1`] = `
Array [
  Array [],
  "[fz-a]*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [ia]?[ck] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [ia]?[ck] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [ia]?[ck] parsed 1`] = `
Array [
  Array [],
  "[ia]?[ck]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [z-a] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [z-a] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [z-a] parsed 1`] = `
Array [
  Array [],
  "[z-a]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [z-a]* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [z-a]* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [z-a]* parsed 1`] = `
Array [
  Array [],
  "[z-a]*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [z-af]* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [z-af]* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [z-af]* parsed 1`] = `
Array [
  Array [],
  "[z-af]*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > [z\\-a] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > [z\\-a] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > [z\\-a] parsed 1`] = `
Array [
  Array [],
  "[z\\\\-a]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > \\ hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > \\ hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > \\ parsed 1`] = `
Array [
  Array [],
  "\\\\",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > \\* hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > \\* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > \\* parsed 1`] = `
Array [
  Array [],
  "\\\\*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > \\** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > \\** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > \\** parsed 1`] = `
Array [
  Array [],
  "\\\\**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > \\*\\* hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > \\*\\* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > \\*\\* parsed 1`] = `
Array [
  Array [],
  "\\\\*\\\\*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > \\.\\./*/ hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > \\.\\./*/ hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > \\.\\./*/ parsed 1`] = `
Array [
  Array [],
  "\\\\.\\\\./*/",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a* parsed 1`] = `
Array [
  Array [],
  "a*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a********???******* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a********???******* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a********???******* parsed 1`] = `
Array [
  Array [],
  "a********???*******",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a*****?c hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a*****?c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a*****?c parsed 1`] = `
Array [
  Array [],
  "a*****?c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a*****c*?** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a*****c*?** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a*****c*?** parsed 1`] = `
Array [
  Array [],
  "a*****c*?**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a****c**?**??***** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a****c**?**??***** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a****c**?**??***** parsed 1`] = `
Array [
  Array [],
  "a****c**?**??*****",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a***c hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a***c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a***c parsed 1`] = `
Array [
  Array [],
  "a***c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a**?**cd**?**??***k hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a**?**cd**?**??***k hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a**?**cd**?**??***k parsed 1`] = `
Array [
  Array [],
  "a**?**cd**?**??***k",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a**?**cd**?**??***k** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a**?**cd**?**??***k** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a**?**cd**?**??***k** parsed 1`] = `
Array [
  Array [],
  "a**?**cd**?**??***k**",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a**?**cd**?**??k hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a**?**cd**?**??k hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a**?**cd**?**??k parsed 1`] = `
Array [
  Array [],
  "a**?**cd**?**??k",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a**?**cd**?**??k*** hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a**?**cd**?**??k*** hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a**?**cd**?**??k*** parsed 1`] = `
Array [
  Array [],
  "a**?**cd**?**??k***",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a*[^c] hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a*[^c] hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a*[^c] parsed 1`] = `
Array [
  Array [],
  "a*[^c]",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a*cd**?**??k hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a*cd**?**??k hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a*cd**?**??k parsed 1`] = `
Array [
  Array [],
  "a*cd**?**??k",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a/*/b hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a/*/b hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a/*/b hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a/*/b hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a/*/b parsed 1`] = `
Array [
  Array [],
  "a/*/b",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a/*/b parsed 2`] = `
Array [
  Array [],
  "a/*/b",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a/.*/b hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a/.*/b hasMagic known 2`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a/.*/b hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a/.*/b hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a/.*/b parsed 1`] = `
Array [
  Array [],
  "a/.*/b",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a/.*/b parsed 2`] = `
Array [
  Array [],
  "a/.*/b",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a/[2015-03-10T00:23:08.647Z\\]/z hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > a/[2015-03-10T00:23:08.647Z\\]/z hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a/[2015-03-10T00:23:08.647Z\\]/z parsed 1`] = `
Array [
  Array [],
  "a/[2015-03-10T00:23:08.647Z\\\\]/z",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a/[2015-03-10T00:23:08.647Z]/z hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a/[2015-03-10T00:23:08.647Z]/z hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a/[2015-03-10T00:23:08.647Z]/z parsed 1`] = `
Array [
  Array [],
  "a/[2015-03-10T00:23:08.647Z]/z",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a?b hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a?b hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a?b parsed 1`] = `
Array [
  Array [],
  "a?b",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a?c hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a?c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a?c parsed 1`] = `
Array [
  Array [],
  "a?c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a[X-]b hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a[X-]b hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a[X-]b parsed 1`] = `
Array [
  Array [],
  "a[X-]b",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a[\\b]c hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > a[\\b]c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a[\\b]c parsed 1`] = `
Array [
  Array [],
  "a[\\\\b]c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a[b]c hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > a[b]c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a[b]c parsed 1`] = `
Array [
  Array [],
  "a[b]c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a\\*?/* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a\\*?/* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a\\*?/* parsed 1`] = `
Array [
  Array [],
  "a\\\\*?/*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a\\*b/* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > a\\*b/* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a\\*b/* parsed 1`] = `
Array [
  Array [],
  "a\\\\*b/*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > a\\*c hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > a\\*c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > a\\*c parsed 1`] = `
Array [
  Array [],
  "a\\\\*c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > ab* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > ab* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > ab* parsed 1`] = `
Array [
  Array [],
  "ab*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > b*/ hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > b*/ hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > b*/ parsed 1`] = `
Array [
  Array [],
  "b*/",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > c* hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > c* hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > c* parsed 1`] = `
Array [
  Array [],
  "c*",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe  1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe !!a* 1`] = `
/^a[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe !()y 1`] = `
/^(?!\\.)[^/]+?y$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe !()y 2`] = `
/^[^/]+?y$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe !(.a|js)@(.*) 1`] = `
/^(?:(?!(?:\\.a(?:\\.[^/]*?)(?:$|\\/)|js(?:\\.[^/]*?)(?:$|\\/)))(?!\\.)[^/]*?)(?:(?!\\.\\.?(?:$|\\/))\\.[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe !\\!a* 1`] = `
/^(?!^\\!a[^/]*?$).+$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe !a* 1`] = `
/^(?!^a[^/]*?$).+$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe !a* 2`] = `
/^!a[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe # ignore this 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe #* 1`] = `
/^\\#[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe * 1`] = `
/^(?!\\.\\.?(?:$|\\/))[^/]+?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe * 2`] = `
/^(?!\\.)[^/]+?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe * 3`] = `
/^(?!\\.\\.?(?:$|\\/))[^/]+?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *(a/b) 1`] = `
/^(?!\\.)[^/]*?\\(a\\/b\\)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *(a|{b),c)} 1`] = `
/^(?:(?:a|b)*|(?:a|c)*)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *(a|{b,c}) 1`] = `
/^(?:(?:a|b)*|(?:a|c)*)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *(a|{b|c,c}) 1`] = `
/^(?:(?:a|b|c)*|(?:a|c)*)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *(a|{b|c,c}) 2`] = `
/^(?:(?!\\.)[^/]*?\\(a\\|b\\|c\\)|(?!\\.)[^/]*?\\(a\\|c\\))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ** 1`] = `
/^(?:(?!(?:\\/|^)\\.).)*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ** 2`] = `
/^(?:(?!(?:\\/|^)\\.).)*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ** 3`] = `
/^(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *******? 1`] = `
/^(?!\\.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *******c 1`] = `
/^(?!\\.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?c$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *****?? 1`] = `
/^(?!\\.)[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe **/**/** 1`] = `
/^(?:(?!(?:\\/|^)\\.).)*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe **/.x/** 1`] = `
/^(?:\\/|(?:(?!(?:\\/|^)\\.).)*?\\/)?\\.x(?:\\/|(?:(?!(?:\\/|^)\\.).)*?)?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe **/.x/** 2`] = `
/^(?!\\.)[^/]+?\\/\\.x\\/(?!\\.)[^/]+?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.!(js) 1`] = `
/^(?!\\.)[^/]*?\\.(?:(?!(?:js(?:$|\\/)))[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.* 1`] = `
/^(?!\\.)[^/]*?\\.[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.* 2`] = `
/^(?!\\.\\.?(?:$|\\/))[^/]*?\\.[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.Y 1`] = `
/^(?!\\.)[^/]*?\\.Y$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.Z 1`] = `
/^(?!\\.\\.?(?:$|\\/))[^/]*?\\.Z$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.\\* 1`] = `
/^(?!\\.)[^/]*?\\.\\*$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.js 1`] = `
/^(?!\\.)[^/]*?\\.js$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.js 2`] = `
/^(?!\\.\\.?(?:$|\\/))[^/]*?\\.js$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.js 3`] = `
/^(?!\\.)[^/]*?\\.js$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.js 4`] = `
/^(?!\\.\\.?(?:$|\\/))[^/]*?\\.js$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.y 1`] = `
/^(?!\\.)[^/]*?\\.y$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.z 1`] = `
/^(?!\\.\\.?(?:$|\\/))[^/]*?\\.z$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe */man*/bash.* 1`] = `
/^(?!\\.)[^/]+?\\/man[^/]*?\\/bash\\.[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *\\!* 1`] = `
/^(?!\\.)[^/]*?\\![^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *\\\\!* 1`] = `
/^(?!\\.)[^/]*?\\\\![^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *c*?** 1`] = `
/^(?!\\.)[^/]*?c[^/]*?[^/][^/]*?[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *js 1`] = `
/^(?!\\.)[^/]*?js$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe +() 1`] = `
/^\\+\\(\\)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe +()*(x|a) 1`] = `
/^(?:)+(?:x|a)*$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe +(a)!(b)+(c) 1`] = `
/^(?:a)+(?:(?!(?:b(?:c)+(?:$|\\/)))[^/]*?)(?:c)+$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe +(a|*\\|c\\\\|d\\\\\\|e\\\\\\\\|f\\\\\\\\\\|g 1`] = `
/^\\+\\(a\\|[^/]*?|c\\\\\\|d\\\\|e\\\\\\\\\\|f\\\\\\\\|g$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe +(x|a[^)]y) 1`] = `
/^(?:x|a[^)]y)+$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .* 1`] = `
/^(?!\\.\\.?(?:$|\\/))\\.[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .* 2`] = `
/^(?!\\.\\.?(?:$|\\/))\\.[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/**/* 1`] = `
/^\\.x(?:\\/|\\/(?:(?!(?:\\/|^)\\.).)*?\\/)(?!\\.)[^/]+?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/**/* 2`] = `
/^\\.x(?:\\/|\\/(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?\\/)(?!\\.\\.?(?:$|\\/))[^/]+?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/**/**/* 1`] = `
/^\\.x(?:\\/|\\/(?:(?!(?:\\/|^)\\.).)*?\\/)(?!\\.)[^/]+?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/**/**/* 2`] = `
/^\\.x(?:\\/|\\/(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?\\/)(?!\\.\\.?(?:$|\\/))[^/]+?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/**/*/** 1`] = `
/^\\.x(?:\\/|\\/(?:(?!(?:\\/|^)\\.).)*?\\/)(?!\\.)[^/]+?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/**/*/** 2`] = `
/^\\.x(?:\\/|\\/(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?\\/)(?!\\.\\.?(?:$|\\/))[^/]+?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/*/** 1`] = `
/^\\.x\\/(?!\\.)[^/]+?(?:\\/|(?:(?!(?:\\/|^)\\.).)*?)?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/*/** 2`] = `
/^\\.x\\/(?!\\.\\.?(?:$|\\/))[^/]+?(?:\\/|(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?)?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/*/**/** 1`] = `
/^\\.x\\/(?!\\.)[^/]+?(?:\\/|(?:(?!(?:\\/|^)\\.).)*?)?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/*/**/** 2`] = `
/^\\.x\\/(?!\\.\\.?(?:$|\\/))[^/]+?(?:\\/|(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?)?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe /^root:/{s/^[^:]*:[^:]*:([^:]*).*$// 1`] = `
/^\\/\\^root:\\/\\{s\\/\\^[^:][^/]*?:[^:][^/]*?:\\([^:][^/]*?\\)\\.[^/]*?\\$\\/\\/$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe /^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\1/ 1`] = `
/^\\/\\^root:\\/\\{s\\/\\^[^:][^/]*?:[^:][^/]*?:\\([^:][^/]*?\\)\\.[^/]*?\\$\\/1\\/$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ? 1`] = `
/^(?!\\.)[^/]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?(x-!(y)|z) 1`] = `
/^(?:x\\-(?:(?!(?:y(?:$|\\/)))[^/]*?)|z)?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?(x-!(y)|z)b 1`] = `
/^(?:x\\-(?:(?!(?:yb(?:$|\\/)))[^/]*?)|z)?b$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?************c****?**** 1`] = `
/^(?!\\.)[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?c[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?*****?? 1`] = `
/^(?!\\.)[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?*****?c 1`] = `
/^(?!\\.)[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]c$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?***?**** 1`] = `
/^(?!\\.)[^/][^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?***?****? 1`] = `
/^(?!\\.)[^/][^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?***?****c 1`] = `
/^(?!\\.)[^/][^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?c$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?.js 1`] = `
/^(?!\\.)[^/]\\.js$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?.js 2`] = `
/^(?!\\.\\.?(?:$|\\/))[^/]\\.js$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?.js 3`] = `
/^(?!\\.)[^/]\\.js$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?.js 4`] = `
/^(?!\\.\\.?(?:$|\\/))[^/]\\.js$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?? 1`] = `
/^(?!\\.)[^/][^/]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?? 2`] = `
/^(?!\\.\\.?(?:$|\\/))[^/][^/]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?? 3`] = `
/^(?!\\.\\.?(?:$|\\/))[^/][^/]$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?? 4`] = `
/^(?!\\.)[^/][^/]$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ??**********?****? 1`] = `
/^(?!\\.)[^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ??**********?****c 1`] = `
/^(?!\\.)[^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/]*?[^/]*?c$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ??? 1`] = `
/^(?!\\.)[^/][^/][^/]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ??? 2`] = `
/^(?!\\.\\.?(?:$|\\/))[^/][^/][^/]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?js 1`] = `
/^(?!\\.)[^/]js$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?js 2`] = `
/^(?!\\.\\.?(?:$|\\/))[^/]js$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?js 3`] = `
/^(?!\\.\\.?(?:$|\\/))[^/]js$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(*|.*) 1`] = `
/^(?:(?!\\.)[^/]+?|(?!\\.\\.?(?:$|\\/))\\.[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(*|a) 1`] = `
/^(?:(?!\\.\\.?(?:$|\\/))[^/]+?|a)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(.*) 1`] = `
/^(?:(?!\\.\\.?(?:$|\\/))\\.[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(.*) 2`] = `
/^(?:(?!\\.\\.?(?:$|\\/))\\.[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(.*|*) 1`] = `
/^(?:(?!\\.\\.?(?:$|\\/))\\.[^/]*?|(?!\\.)[^/]+?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(.*|js) 1`] = `
/^(?:(?!\\.\\.?(?:$|\\/))\\.[^/]*?|js)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(a|a[(])b 1`] = `
/^(?:a|a\\()b$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(a|a[)])b 1`] = `
/^(?:a|a\\))b$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(js|.*) 1`] = `
/^(?:js|(?!\\.\\.?(?:$|\\/))\\.[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe X* 1`] = `
/^X[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe X* 2`] = `
/^X[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe XYZ 1`] = `
/^XYZ$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [ 1`] = `
/^\\[$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [!a* 1`] = `
/^\\[!a[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [#a* 1`] = `
/^\\[\\#a[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [* 1`] = `
/^\\[[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [-abc] 1`] = `
/^(?!\\.)[\\-abc]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]] 1`] = `
/^(?!\\.)[\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}]$/u
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]] 1`] = `
/^(?!\\.)[\\p{L}\\p{Nl}][\\p{L}\\p{Nl}][\\p{L}\\p{Nl}][\\p{L}\\p{Nl}][\\p{L}\\p{Nl}]$/u
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]] 1`] = `
/^(?!\\.)[\\x00-\\x7f][\\x00-\\x7f][\\x00-\\x7f][\\x00-\\x7f][\\x00-\\x7f]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:graph:][:digit:]]f* 1`] = `
/^([\\p{Nd}]|[^\\p{Z}\\p{C}])f[^/]*?$/u
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:graph:]]f* 1`] = `
/^(?!\\.)[^\\p{Z}\\p{C}]f[^/]*?$/u
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:xdigit:]][[:xdigit:]]??? 1`] = `
/^(?!\\.)[A-Fa-f0-9][A-Fa-f0-9][^/][^/][^/]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]] 1`] = `
/^(?!\\.)[A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[] 1`] = `
/^\\[$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [\\-\\]] 1`] = `
/^(?!\\.)[\\-\\]]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [\\\\] 1`] = `
/^\\\\$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [\\b-a] 1`] = `
/^$.$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [\\z-a] 1`] = `
/^$.$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [] 1`] = `
/^\\[\\]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe []+*] 1`] = `
/^(?!\\.)[\\]+*]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe []-] 1`] = `
/^(?!\\.)[\\]\\-]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe []] 1`] = `
/^\\]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [^a-c]* 1`] = `
/^(?!\\.)[^a-c][^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [a-0][a-Ā] 1`] = `
/^$.$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [a-[:alpha:]*] 1`] = `
/^$.$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [a-b-c] 1`] = `
/^(?!\\.)[a-b\\-c]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [a-c]b* 1`] = `
/^(?!\\.)[a-c]b[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [a-y]*[^c] 1`] = `
/^(?!\\.)[a-y][^/]*?[^c]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [a-z] 1`] = `
/^(?!\\.)[a-z]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [abc 1`] = `
/^\\[abc$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [abc-] 1`] = `
/^(?!\\.)[abc\\-]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [f-fz-a]* 1`] = `
/^f[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [f-gz-a]* 1`] = `
/^(?!\\.)[f-g][^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [fz-a]* 1`] = `
/^f[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [ia]?[ck] 1`] = `
/^(?!\\.)[ia][^/][ck]$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [z-a] 1`] = `
/^$.$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [z-a]* 1`] = `
/^$.$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [z-af]* 1`] = `
/^f[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [z\\-a] 1`] = `
/^(?!\\.)[z\\-a]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe \\ 1`] = `
/^\\\\$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe \\* 1`] = `
/^\\*$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe \\** 1`] = `
/^\\*[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe \\*\\* 1`] = `
/^\\*\\*$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe \\.\\./*/ 1`] = `
/^\\.\\.\\/(?!\\.)[^/]+?\\/$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a* 1`] = `
/^a[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a********???******* 1`] = `
/^a[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/][^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a*****?c 1`] = `
/^a[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?[^/]c$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a*****c*?** 1`] = `
/^a[^/]*?[^/]*?[^/]*?[^/]*?[^/]*?c[^/]*?[^/][^/]*?[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a****c**?**??***** 1`] = `
/^a[^/]*?[^/]*?[^/]*?[^/]*?c[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/][^/]*?[^/]*?[^/]*?[^/]*?[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a***c 1`] = `
/^a[^/]*?[^/]*?[^/]*?c$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a**?**cd**?**??***k 1`] = `
/^a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/][^/]*?[^/]*?[^/]*?k$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a**?**cd**?**??***k** 1`] = `
/^a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/][^/]*?[^/]*?[^/]*?k[^/]*?[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a**?**cd**?**??k 1`] = `
/^a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/]k$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a**?**cd**?**??k*** 1`] = `
/^a[^/]*?[^/]*?[^/][^/]*?[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/]k[^/]*?[^/]*?[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a*[^c] 1`] = `
/^a[^/]*?[^c]$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a*cd**?**??k 1`] = `
/^a[^/]*?cd[^/]*?[^/]*?[^/][^/]*?[^/]*?[^/][^/]k$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a/*/b 1`] = `
/^a\\/(?!\\.\\.?(?:$|\\/))[^/]+?\\/b$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a/*/b 2`] = `
/^a\\/(?!\\.)[^/]+?\\/b$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a/.*/b 1`] = `
/^a\\/(?!\\.\\.?(?:$|\\/))\\.[^/]*?\\/b$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a/.*/b 2`] = `
/^a\\/(?!\\.\\.?(?:$|\\/))\\.[^/]*?\\/b$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a/[2015-03-10T00:23:08.647Z\\]/z 1`] = `
/^a\\/\\[2015\\-03\\-10T00:23:08\\.647Z\\]\\/z$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a/[2015-03-10T00:23:08.647Z]/z 1`] = `
/^a\\/(?!\\.)[2010T00:23:08.647Z]\\/z$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a?b 1`] = `
/^a[^/]b$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a?c 1`] = `
/^a[^/]c$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a[X-]b 1`] = `
/^a[X\\-]b$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a[\\b]c 1`] = `
/^abc$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a[b]c 1`] = `
/^abc$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a\\*?/* 1`] = `
/^a\\*[^/]\\/(?!\\.)[^/]+?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a\\*b/* 1`] = `
/^a\\*b\\/(?!\\.)[^/]+?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a\\*c 1`] = `
/^a\\*c$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ab* 1`] = `
/^ab[^/]*?$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe b*/ 1`] = `
/^b[^/]*?\\/$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe c* 1`] = `
/^c[^/]*?$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe man/man1/bash.1 1`] = `
/^man\\/man1\\/bash\\.1$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe s/\\..*// 1`] = `
/^s\\/(?!\\.\\.?(?:$|\\/))\\.\\.[^/]*?\\/$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe x/*/../../a/b/c 1`] = `
/^x\\/(?!\\.)[^/]+?\\/\\.\\.\\/\\.\\.\\/a\\/b\\/c$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe x/*/../a/b/c 1`] = `
/^x\\/(?!\\.)[^/]+?\\/\\.\\.\\/a\\/b\\/c$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe x/z/../*/a/b/c 1`] = `
/^x\\/z\\/\\.\\.\\/(?!\\.)[^/]+?\\/a\\/b\\/c$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe {/*,*} 1`] = `
/^(?:\\/(?!\\.)[^/]+?|(?!\\.)[^/]+?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe {/?,*} 1`] = `
/^(?:\\/(?!\\.)[^/]|(?!\\.)[^/]+?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe {a,*(b|c,d)} 1`] = `
/^(?:a|(?!\\.)[^/]*?\\(b\\|c|d\\))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe {a,*(b|{c,d})} 1`] = `
/^(?:a|(?:b|c)*|(?:b|d)*)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe {c*,./c*} 1`] = `
/^(?:c[^/]*?|\\.\\/c[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe Å 1`] = `
/^Å$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe Å 2`] = `
/^Å$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe Å 3`] = `
/^Å$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe Å 4`] = `
/^Å$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe å 1`] = `
/^å$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe å 2`] = `
/^å$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe å 3`] = `
/^å$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe å 4`] = `
/^å$/
`

exports[`test/optimization-level-0.ts TAP basic tests > man/man1/bash.1 hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > man/man1/bash.1 hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > man/man1/bash.1 parsed 1`] = `
Array [
  Array [],
  "man/man1/bash.1",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > s/\\..*// hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > s/\\..*// hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > s/\\..*// parsed 1`] = `
Array [
  Array [],
  "s/\\\\..*//",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > x/*/../../a/b/c hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > x/*/../../a/b/c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > x/*/../../a/b/c parsed 1`] = `
Array [
  Array [],
  "x/*/../../a/b/c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > x/*/../a/b/c hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > x/*/../a/b/c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > x/*/../a/b/c parsed 1`] = `
Array [
  Array [],
  "x/*/../a/b/c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > x/z/../*/a/b/c hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > x/z/../*/a/b/c hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > x/z/../*/a/b/c parsed 1`] = `
Array [
  Array [],
  "x/z/../*/a/b/c",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > {/*,*} hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > {/*,*} hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > {/*,*} parsed 1`] = `
Array [
  Array [],
  "{/*,*}",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > {/?,*} hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > {/?,*} hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > {/?,*} parsed 1`] = `
Array [
  Array [],
  "{/?,*}",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > {a,*(b|c,d)} hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > {a,*(b|c,d)} hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > {a,*(b|c,d)} parsed 1`] = `
Array [
  Array [],
  "{a,",
  Array [
    "*",
    Array [
      "b",
    ],
    Array [
      "c,d",
    ],
  ],
  "}",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > {a,*(b|{c,d})} hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > {a,*(b|{c,d})} hasMagic pre-generate 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > {a,*(b|{c,d})} parsed 1`] = `
Array [
  Array [],
  "{a,",
  Array [
    "*",
    Array [
      "b",
    ],
    Array [
      "{c,d}",
    ],
  ],
  "}",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > {c*,./c*} hasMagic known 1`] = `
true
`

exports[`test/optimization-level-0.ts TAP basic tests > {c*,./c*} hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > {c*,./c*} parsed 1`] = `
Array [
  Array [],
  "{c*,./c*}",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > Å hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > Å hasMagic known 2`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > Å hasMagic known 3`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > Å hasMagic known 4`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > Å hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > Å hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > Å hasMagic pre-generate 3`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > Å hasMagic pre-generate 4`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > Å parsed 1`] = `
Array [
  Array [],
  "Å",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > Å parsed 2`] = `
Array [
  Array [],
  "Å",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > Å parsed 3`] = `
Array [
  Array [],
  "Å",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > Å parsed 4`] = `
Array [
  Array [],
  "Å",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > å hasMagic known 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > å hasMagic known 2`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > å hasMagic known 3`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > å hasMagic known 4`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > å hasMagic pre-generate 1`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > å hasMagic pre-generate 2`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > å hasMagic pre-generate 3`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > å hasMagic pre-generate 4`] = `
undefined
`

exports[`test/optimization-level-0.ts TAP basic tests > å parsed 1`] = `
Array [
  Array [],
  "å",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > å parsed 2`] = `
Array [
  Array [],
  "å",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > å parsed 3`] = `
Array [
  Array [],
  "å",
  Object {},
]
`

exports[`test/optimization-level-0.ts TAP basic tests > å parsed 4`] = `
Array [
  Array [],
  "å",
  Object {},
]
`
