/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/optimization-level-0.ts TAP basic tests > "!!a*" ["a!b"] 1`] = `
Array [
  "a!b",
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

exports[`test/optimization-level-0.ts TAP basic tests > makeRe  1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe !!a* 1`] = `
/^(?:(?=.)a[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe !(.a|js)@(.*) 1`] = `
/^(?:(?!\\.)(?=.)(?:(?!(?:\\.a|js)(?:\\.[^/]*?))[^/]*?)(?:\\.[^/]*?))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe !\\!a* 1`] = `
/^(?!^(?:(?=.)\\!a[^/]*?)$).*$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe !a* 1`] = `
/^(?!^(?:(?=.)a[^/]*?)$).*$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe !a* 2`] = `
/^(?:(?=.)\\!a[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe # ignore this 1`] = `
false
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe #* 1`] = `
/^(?:(?=.)\\#[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe * 1`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe * 2`] = `
/^(?:(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe * 3`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *(a/b) 1`] = `
/^(?:(?=.)[^/]*?\\((?!\\.)a\\/b\\))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *(a|{b),c)} 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)b)*|(?=.)(?:(?!\\.)a|(?!\\.)c)*)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *(a|{b,c}) 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)b)*|(?=.)(?:(?!\\.)a|(?!\\.)c)*)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *(a|{b|c,c}) 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)b|(?!\\.)c)*|(?=.)(?:(?!\\.)a|(?!\\.)c)*)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *(a|{b|c,c}) 2`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\(a\\|b\\|c\\)|(?!\\.)(?=.)[^/]*?\\(a\\|c\\))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ** 1`] = `
/^(?:(?:(?!(?:\\/|^)\\.).)*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ** 2`] = `
/^(?:(?:(?!(?:\\/|^)\\.).)*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ** 3`] = `
/^(?:(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *******? 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?[^/])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *******c 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?c)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *****?? 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?[^/][^/])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe **/**/** 1`] = `
/^(?:(?:(?!(?:\\/|^)\\.).)*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe **/.x/** 1`] = `
/^(?:(?:\\/|(?:(?!(?:\\/|^)\\.).)*?\\/)?\\.x(?:\\/|(?:(?!(?:\\/|^)\\.).)*?)?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe **/.x/** 2`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\/\\.x\\/(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.!(js) 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\.(?:(?!(?:js)(?:$|\\/))[^/]*?))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\.[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.* 2`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?\\.[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.\\* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\.\\*)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.js 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\.js)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.js 2`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?\\.js)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.js 3`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\.js)$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *.js 4`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?\\.js)$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe */man*/bash.* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\/(?=.)man[^/]*?\\/(?=.)bash\\.[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *\\!* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\![^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *\\\\!* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\\\\\![^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *c*?** 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?c[^/]*?[^/][^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe *js 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?js)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe +(a)!(b)+(c) 1`] = `
/^(?:(?=.)(?:(?!\\.)a)+(?:(?!(?:b)(?:c)+)[^/]*?)(?:c)+)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe +(a|*\\|c\\\\|d\\\\\\|e\\\\\\\\|f\\\\\\\\\\|g 1`] = `
/^(?:(?=.)\\+\\((?!\\.)a\\|(?!\\.)[^/]*?\\|c\\\\\\\\\\|(?!\\.)d\\\\\\\\\\|e\\\\\\\\\\\\\\\\\\|(?!\\.)f\\\\\\\\\\\\\\\\\\|g)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .* 1`] = `
/^(?:(?=.)\\.[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .* 2`] = `
/^(?:(?=.)\\.[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/**/* 1`] = `
/^(?:\\.x(?:\\/|\\/(?:(?!(?:\\/|^)\\.).)*?\\/)(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/**/* 2`] = `
/^(?:\\.x(?:\\/|\\/(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?\\/)(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/**/**/* 1`] = `
/^(?:\\.x(?:\\/|\\/(?:(?!(?:\\/|^)\\.).)*?\\/)(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/**/**/* 2`] = `
/^(?:\\.x(?:\\/|\\/(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?\\/)(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/**/*/** 1`] = `
/^(?:\\.x(?:\\/|\\/(?:(?!(?:\\/|^)\\.).)*?\\/)(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/**/*/** 2`] = `
/^(?:\\.x(?:\\/|\\/(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?\\/)(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/*/** 1`] = `
/^(?:\\.x\\/(?!\\.)(?=.)[^/]*?(?:\\/|(?:(?!(?:\\/|^)\\.).)*?)?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/*/** 2`] = `
/^(?:\\.x\\/(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?(?:\\/|(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?)?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/*/**/** 1`] = `
/^(?:\\.x\\/(?!\\.)(?=.)[^/]*?(?:\\/|(?:(?!(?:\\/|^)\\.).)*?)?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe .x/*/**/** 2`] = `
/^(?:\\.x\\/(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?(?:\\/|(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?)?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe /^root:/{s/^[^:]*:[^:]*:([^:]*).*$// 1`] = `
/^(?:\\/\\^root:\\/\\{s\\/(?=.)\\^[^:][^/]*?:[^:][^/]*?:\\([^:]\\)[^/]*?\\.[^/]*?\\$\\/\\/)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe /^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\1/ 1`] = `
/^(?:\\/\\^root:\\/\\{s\\/(?=.)\\^[^:][^/]*?:[^:][^/]*?:\\([^:]\\)[^/]*?\\.[^/]*?\\$\\/1\\/)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ? 1`] = `
/^(?:(?!\\.)(?=.)[^/])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?************c****?**** 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?c[^/]*?[^/][^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?*****?? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/][^/])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?*****?c 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]c)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?***?**** 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/][^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?***?****? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/][^/]*?[^/])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?***?****c 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/][^/]*?c)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?.js 1`] = `
/^(?:(?!\\.)(?=.)[^/]\\.js)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?.js 2`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]\\.js)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?.js 3`] = `
/^(?:(?!\\.)(?=.)[^/]\\.js)$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?.js 4`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]\\.js)$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?? 2`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/][^/])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?? 3`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/][^/])$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?? 4`] = `
/^(?:(?!\\.)(?=.)[^/][^/])$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ??**********?****? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/][^/]*?[^/][^/]*?[^/])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ??**********?****c 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/][^/]*?[^/][^/]*?c)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ??? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/][^/])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ??? 2`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/][^/][^/])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?js 1`] = `
/^(?:(?!\\.)(?=.)[^/]js)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?js 2`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]js)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ?js 3`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]js)$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(*|.*) 1`] = `
/^(?:(?=.)(?:(?!\\.)[^/]*?|\\.[^/]*?))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(*|a) 1`] = `
/^(?:(?=.)(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))[^/]*?|(?!(?:^|\\/)\\.{1,2}(?:$|\\/))a))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(.*) 1`] = `
/^(?:(?=.)(?:\\.[^/]*?))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(.*) 2`] = `
/^(?:(?=.)(?:\\.[^/]*?))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(.*|*) 1`] = `
/^(?:(?=.)(?:\\.[^/]*?|(?!\\.)[^/]*?))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(.*|js) 1`] = `
/^(?:(?=.)(?:\\.[^/]*?|(?!\\.)js))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(a|a[(])b 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)a\\()b)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(a|a[)])b 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)a\\))b)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe @(js|.*) 1`] = `
/^(?:(?=.)(?:(?!\\.)js|\\.[^/]*?))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe X* 1`] = `
/^(?:(?=.)X[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe X* 2`] = `
/^(?:(?=.)X[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe XYZ 1`] = `
/^(?:XYZ)$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [ 1`] = `
/^(?:\\[)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [!a* 1`] = `
/^(?:(?=.)\\[\\!a[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [#a* 1`] = `
/^(?:(?=.)\\[\\#a[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [* 1`] = `
/^(?:(?=.)\\[[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [-abc] 1`] = `
/^(?:(?!\\.)(?=.)[\\-abc])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]] 1`] = `
/^(?:(?!\\.)(?=.)[\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]] 1`] = `
/^(?:(?!\\.)(?=.)[\\p{L}\\p{Nl}][\\p{L}\\p{Nl}][\\p{L}\\p{Nl}][\\p{L}\\p{Nl}][\\p{L}\\p{Nl}])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]] 1`] = `
/^(?:(?!\\.)(?=.)[\\x00-\\x7f][\\x00-\\x7f][\\x00-\\x7f][\\x00-\\x7f][\\x00-\\x7f])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:graph:][:digit:]]f* 1`] = `
/^(?:(?!\\.)(?=.)([\\p{Nd}]|[^\\p{Z}\\p{C}])f[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:graph:]]f* 1`] = `
/^(?:(?!\\.)(?=.)[^\\p{Z}\\p{C}]f[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:xdigit:]][[:xdigit:]]??? 1`] = `
/^(?:(?!\\.)(?=.)[A-Fa-f0-9][A-Fa-f0-9][^/][^/][^/])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]] 1`] = `
/^(?:(?!\\.)(?=.)[A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [[] 1`] = `
/^(?:\\[)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [\\-\\]] 1`] = `
/^(?:(?!\\.)(?=.)[\\-\\]])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [\\\\] 1`] = `
/^(?:\\\\)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [\\b-a] 1`] = `
/^(?:(?=.)$.)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [\\z-a] 1`] = `
/^(?:(?=.)$.)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [] 1`] = `
/^(?:\\[\\])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe []+*] 1`] = `
/^(?:(?!\\.)(?=.)[\\]+*])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe []-] 1`] = `
/^(?:(?!\\.)(?=.)[\\]\\-])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe []] 1`] = `
/^(?:\\])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [^a-c]* 1`] = `
/^(?:(?!\\.)(?=.)[^a-c][^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [a-0][a-Ā] 1`] = `
/^(?:(?=.)$.)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [a-[:alpha:]*] 1`] = `
/^(?:(?=.)$.)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [a-b-c] 1`] = `
/^(?:(?!\\.)(?=.)[a-b\\-c])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [a-c]b* 1`] = `
/^(?:(?!\\.)(?=.)[a-c]b[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [a-y]*[^c] 1`] = `
/^(?:(?!\\.)(?=.)[a-y][^/]*?[^c])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [a-z] 1`] = `
/^(?:(?!\\.)(?=.)[a-z])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [abc 1`] = `
/^(?:\\[abc)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [abc-] 1`] = `
/^(?:(?!\\.)(?=.)[abc\\-])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [f-fz-a]* 1`] = `
/^(?:(?=.)f[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [f-gz-a]* 1`] = `
/^(?:(?!\\.)(?=.)[f-g][^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [fz-a]* 1`] = `
/^(?:(?=.)f[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [ia]?[ck] 1`] = `
/^(?:(?!\\.)(?=.)[ia][^/][ck])$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [z-a] 1`] = `
/^(?:(?=.)$.)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [z-a]* 1`] = `
/^(?:(?=.)$.)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [z-af]* 1`] = `
/^(?:(?=.)f[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe [z\\-a] 1`] = `
/^(?:(?!\\.)(?=.)[z\\-a])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe \\ 1`] = `
/^(?:\\\\)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe \\* 1`] = `
/^(?:\\*)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe \\** 1`] = `
/^(?:(?=.)\\*[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe \\*\\* 1`] = `
/^(?:\\*\\*)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe \\.\\./*/ 1`] = `
/^(?:\\.\\.\\/(?!\\.)(?=.)[^/]*?\\/)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a* 1`] = `
/^(?:(?=.)a[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a********???******* 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/][^/][^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a*****?c 1`] = `
/^(?:(?=.)a[^/]*?[^/]c)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a*****c*?** 1`] = `
/^(?:(?=.)a[^/]*?c[^/]*?[^/][^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a****c**?**??***** 1`] = `
/^(?:(?=.)a[^/]*?c[^/]*?[^/][^/]*?[^/][^/][^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a***c 1`] = `
/^(?:(?=.)a[^/]*?c)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a**?**cd**?**??***k 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/]*?cd[^/]*?[^/][^/]*?[^/][^/][^/]*?k)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a**?**cd**?**??***k** 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/]*?cd[^/]*?[^/][^/]*?[^/][^/][^/]*?k[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a**?**cd**?**??k 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/]*?cd[^/]*?[^/][^/]*?[^/][^/]k)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a**?**cd**?**??k*** 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/]*?cd[^/]*?[^/][^/]*?[^/][^/]k[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a*[^c] 1`] = `
/^(?:(?=.)a[^/]*?[^c])$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a*cd**?**??k 1`] = `
/^(?:(?=.)a[^/]*?cd[^/]*?[^/][^/]*?[^/][^/]k)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a/*/b 1`] = `
/^(?:a\\/(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?\\/b)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a/*/b 2`] = `
/^(?:a\\/(?!\\.)(?=.)[^/]*?\\/b)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a/.*/b 1`] = `
/^(?:a\\/(?=.)\\.[^/]*?\\/b)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a/.*/b 2`] = `
/^(?:a\\/(?=.)\\.[^/]*?\\/b)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a/[2015-03-10T00:23:08.647Z\\]/z 1`] = `
/^(?:a\\/\\[2015\\-03\\-10T00:23:08\\.647Z\\]\\/z)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a/[2015-03-10T00:23:08.647Z]/z 1`] = `
/^(?:a\\/(?!\\.)(?=.)[2010T00:23:08.647Z]\\/z)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a?b 1`] = `
/^(?:(?=.)a[^/]b)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a?c 1`] = `
/^(?:(?=.)a[^/]c)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a[X-]b 1`] = `
/^(?:(?=.)a[X\\-]b)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a[\\b]c 1`] = `
/^(?:abc)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a[b]c 1`] = `
/^(?:abc)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a\\*?/* 1`] = `
/^(?:(?=.)a\\*[^/]\\/(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a\\*b/* 1`] = `
/^(?:a\\*b\\/(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe a\\*c 1`] = `
/^(?:a\\*c)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe ab* 1`] = `
/^(?:(?=.)ab[^/]*?)$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe b*/ 1`] = `
/^(?:(?=.)b[^/]*?\\/)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe c* 1`] = `
/^(?:(?=.)c[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe man/man1/bash.1 1`] = `
/^(?:man\\/man1\\/bash\\.1)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe s/\\..*// 1`] = `
/^(?:s\\/(?=.)\\.\\.[^/]*?\\/)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe x/*/../../a/b/c 1`] = `
/^(?:x\\/(?!\\.)(?=.)[^/]*?\\/\\.\\.\\/\\.\\.\\/a\\/b\\/c)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe x/*/../a/b/c 1`] = `
/^(?:x\\/(?!\\.)(?=.)[^/]*?\\/\\.\\.\\/a\\/b\\/c)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe x/z/../*/a/b/c 1`] = `
/^(?:x\\/z\\/\\.\\.\\/(?!\\.)(?=.)[^/]*?\\/a\\/b\\/c)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe {/*,*} 1`] = `
/^(?:\\/(?!\\.)(?=.)[^/]*?|(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe {/?,*} 1`] = `
/^(?:\\/(?!\\.)(?=.)[^/]|(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe {a,*(b|c,d)} 1`] = `
/^(?:a|(?=.)[^/]*?\\((?!\\.)b\\|(?!\\.)c|d\\))$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe {a,*(b|{c,d})} 1`] = `
/^(?:a|(?=.)(?:(?!\\.)b|(?!\\.)c)*|(?=.)(?:(?!\\.)b|(?!\\.)d)*)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe {c*,./c*} 1`] = `
/^(?:(?=.)c[^/]*?|\\.\\/(?=.)c[^/]*?)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe Å 1`] = `
/^(?:Å)$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe Å 2`] = `
/^(?:Å)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe Å 3`] = `
/^(?:Å)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe Å 4`] = `
/^(?:Å)$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe å 1`] = `
/^(?:å)$/
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe å 2`] = `
/^(?:å)$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe å 3`] = `
/^(?:å)$/i
`

exports[`test/optimization-level-0.ts TAP basic tests > makeRe å 4`] = `
/^(?:å)$/
`
