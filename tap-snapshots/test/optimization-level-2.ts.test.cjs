/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/optimization-level-2.ts TAP basic tests > makeRe  1`] = `
false
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe !!a* 1`] = `
/^(?:(?=.)a[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe !(.a|js)@(.*) 1`] = `
/^(?:(?!\\.)(?=.)(?:(?!(?:\\.a|js)(?:\\.[^/]*?))[^/]*?)(?:\\.[^/]*?))$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe !\\!a* 1`] = `
/^(?!^(?:(?=.)\\!a[^/]*?)$).*$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe !a* 1`] = `
/^(?!^(?:(?=.)a[^/]*?)$).*$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe !a* 2`] = `
/^(?:(?=.)\\!a[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe # ignore this 1`] = `
false
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe #* 1`] = `
/^(?:(?=.)\\#[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe * 1`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe * 2`] = `
/^(?:(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe * 3`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *(a/b) 1`] = `
/^(?:(?=.)[^/]*?\\((?!\\.)a\\/b\\))$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *(a|{b),c)} 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)b)*|(?=.)(?:(?!\\.)a|(?!\\.)c)*)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *(a|{b,c}) 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)b)*|(?=.)(?:(?!\\.)a|(?!\\.)c)*)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *(a|{b|c,c}) 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)b|(?!\\.)c)*|(?=.)(?:(?!\\.)a|(?!\\.)c)*)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *(a|{b|c,c}) 2`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\(a\\|b\\|c\\)|(?!\\.)(?=.)[^/]*?\\(a\\|c\\))$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ** 1`] = `
/^(?:(?:(?!(?:\\/|^)\\.).)*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ** 2`] = `
/^(?:(?:(?!(?:\\/|^)\\.).)*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ** 3`] = `
/^(?:(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *******? 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?[^/])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *******c 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?c)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *****?? 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?[^/][^/])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe **/**/** 1`] = `
/^(?:(?:(?!(?:\\/|^)\\.).)*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe **/.x/** 1`] = `
/^(?:(?:\\/|(?:(?!(?:\\/|^)\\.).)*?\\/)?\\.x(?:\\/|(?:(?!(?:\\/|^)\\.).)*?)?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe **/.x/** 2`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\/\\.x\\/(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *.!(js) 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\.(?:(?!(?:js)(?:$|\\/))[^/]*?))$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *.* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\.[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *.* 2`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?\\.[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *.\\* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\.\\*)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *.js 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\.js)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *.js 2`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?\\.js)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *.js 3`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\.js)$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *.js 4`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?\\.js)$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe */man*/bash.* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\/(?=.)man[^/]*?\\/(?=.)bash\\.[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *\\!* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\![^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *\\\\!* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\\\\\![^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *c*?** 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?c[^/]*?[^/][^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe *js 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?js)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe +(a)!(b)+(c) 1`] = `
/^(?:(?=.)(?:(?!\\.)a)+(?:(?!(?:b)(?:c)+)[^/]*?)(?:c)+)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe +(a|*\\|c\\\\|d\\\\\\|e\\\\\\\\|f\\\\\\\\\\|g 1`] = `
/^(?:(?=.)\\+\\((?!\\.)a\\|(?!\\.)[^/]*?\\|c\\\\\\\\\\|(?!\\.)d\\\\\\\\\\|e\\\\\\\\\\\\\\\\\\|(?!\\.)f\\\\\\\\\\\\\\\\\\|g)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe .* 1`] = `
/^(?:(?=.)\\.[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe .* 2`] = `
/^(?:(?=.)\\.[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe .x/**/* 1`] = `
/^(?:\\.x(?:\\/|\\/(?:(?!(?:\\/|^)\\.).)*?\\/)(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe .x/**/* 2`] = `
/^(?:\\.x(?:\\/|\\/(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?\\/)(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe .x/**/**/* 1`] = `
/^(?:\\.x(?:\\/|\\/(?:(?!(?:\\/|^)\\.).)*?\\/)(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe .x/**/**/* 2`] = `
/^(?:\\.x(?:\\/|\\/(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?\\/)(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe .x/**/*/** 1`] = `
/^(?:\\.x(?:\\/|\\/(?:(?!(?:\\/|^)\\.).)*?\\/)(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe .x/**/*/** 2`] = `
/^(?:\\.x(?:\\/|\\/(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?\\/)(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe .x/*/** 1`] = `
/^(?:\\.x\\/(?!\\.)(?=.)[^/]*?(?:\\/|(?:(?!(?:\\/|^)\\.).)*?)?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe .x/*/** 2`] = `
/^(?:\\.x\\/(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?(?:\\/|(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?)?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe .x/*/**/** 1`] = `
/^(?:\\.x\\/(?!\\.)(?=.)[^/]*?(?:\\/|(?:(?!(?:\\/|^)\\.).)*?)?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe .x/*/**/** 2`] = `
/^(?:\\.x\\/(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?(?:\\/|(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?)?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe /^root:/{s/^[^:]*:[^:]*:([^:]*).*$// 1`] = `
/^(?:\\/\\^root:\\/\\{s\\/(?=.)\\^[^:][^/]*?:[^:][^/]*?:\\([^:]\\)[^/]*?\\.[^/]*?\\$\\/\\/)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe /^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\1/ 1`] = `
/^(?:\\/\\^root:\\/\\{s\\/(?=.)\\^[^:][^/]*?:[^:][^/]*?:\\([^:]\\)[^/]*?\\.[^/]*?\\$\\/1\\/)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ? 1`] = `
/^(?:(?!\\.)(?=.)[^/])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?************c****?**** 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?c[^/]*?[^/][^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?*****?? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/][^/])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?*****?c 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]c)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?***?**** 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/][^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?***?****? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/][^/]*?[^/])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?***?****c 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/][^/]*?c)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?.js 1`] = `
/^(?:(?!\\.)(?=.)[^/]\\.js)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?.js 2`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]\\.js)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?.js 3`] = `
/^(?:(?!\\.)(?=.)[^/]\\.js)$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?.js 4`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]\\.js)$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?? 2`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/][^/])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?? 3`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/][^/])$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?? 4`] = `
/^(?:(?!\\.)(?=.)[^/][^/])$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ??**********?****? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/][^/]*?[^/][^/]*?[^/])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ??**********?****c 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/][^/]*?[^/][^/]*?c)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ??? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/][^/])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ??? 2`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/][^/][^/])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?js 1`] = `
/^(?:(?!\\.)(?=.)[^/]js)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?js 2`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]js)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ?js 3`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]js)$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe @(*|.*) 1`] = `
/^(?:(?=.)(?:(?!\\.)[^/]*?|\\.[^/]*?))$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe @(*|a) 1`] = `
/^(?:(?=.)(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))[^/]*?|(?!(?:^|\\/)\\.{1,2}(?:$|\\/))a))$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe @(.*) 1`] = `
/^(?:(?=.)(?:\\.[^/]*?))$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe @(.*) 2`] = `
/^(?:(?=.)(?:\\.[^/]*?))$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe @(.*|*) 1`] = `
/^(?:(?=.)(?:\\.[^/]*?|(?!\\.)[^/]*?))$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe @(.*|js) 1`] = `
/^(?:(?=.)(?:\\.[^/]*?|(?!\\.)js))$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe @(a|a[(])b 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)a\\()b)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe @(a|a[)])b 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)a\\))b)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe @(js|.*) 1`] = `
/^(?:(?=.)(?:(?!\\.)js|\\.[^/]*?))$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe X* 1`] = `
/^(?:(?=.)X[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe X* 2`] = `
/^(?:(?=.)X[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe XYZ 1`] = `
/^(?:XYZ)$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [ 1`] = `
/^(?:\\[)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [!a* 1`] = `
/^(?:(?=.)\\[\\!a[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [#a* 1`] = `
/^(?:(?=.)\\[\\#a[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [* 1`] = `
/^(?:(?=.)\\[[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [-abc] 1`] = `
/^(?:(?!\\.)(?=.)[\\-abc])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]][[:alnum:]] 1`] = `
/^(?:(?!\\.)(?=.)[\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}][\\p{L}\\p{Nl}\\p{Nd}])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]][[:alpha:]] 1`] = `
/^(?:(?!\\.)(?=.)[\\p{L}\\p{Nl}][\\p{L}\\p{Nl}][\\p{L}\\p{Nl}][\\p{L}\\p{Nl}][\\p{L}\\p{Nl}])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]][[:ascii:]] 1`] = `
/^(?:(?!\\.)(?=.)[\\x00-\\x7f][\\x00-\\x7f][\\x00-\\x7f][\\x00-\\x7f][\\x00-\\x7f])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [[:graph:][:digit:]]f* 1`] = `
/^(?:(?!\\.)(?=.)([\\p{Nd}]|[^\\p{Z}\\p{C}])f[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [[:graph:]]f* 1`] = `
/^(?:(?!\\.)(?=.)[^\\p{Z}\\p{C}]f[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [[:xdigit:]][[:xdigit:]]??? 1`] = `
/^(?:(?!\\.)(?=.)[A-Fa-f0-9][A-Fa-f0-9][^/][^/][^/])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]] 1`] = `
/^(?:(?!\\.)(?=.)[A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [[] 1`] = `
/^(?:\\[)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [\\-\\]] 1`] = `
/^(?:(?!\\.)(?=.)[\\-\\]])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [\\\\] 1`] = `
/^(?:\\\\)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [\\b-a] 1`] = `
/^(?:(?=.)$.)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [\\z-a] 1`] = `
/^(?:(?=.)$.)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [] 1`] = `
/^(?:\\[\\])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe []+*] 1`] = `
/^(?:(?!\\.)(?=.)[\\]+*])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe []-] 1`] = `
/^(?:(?!\\.)(?=.)[\\]\\-])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe []] 1`] = `
/^(?:\\])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [^a-c]* 1`] = `
/^(?:(?!\\.)(?=.)[^a-c][^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [a-0][a-Ā] 1`] = `
/^(?:(?=.)$.)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [a-[:alpha:]*] 1`] = `
/^(?:(?=.)$.)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [a-b-c] 1`] = `
/^(?:(?!\\.)(?=.)[a-b\\-c])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [a-c]b* 1`] = `
/^(?:(?!\\.)(?=.)[a-c]b[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [a-y]*[^c] 1`] = `
/^(?:(?!\\.)(?=.)[a-y][^/]*?[^c])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [a-z] 1`] = `
/^(?:(?!\\.)(?=.)[a-z])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [abc 1`] = `
/^(?:\\[abc)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [abc-] 1`] = `
/^(?:(?!\\.)(?=.)[abc\\-])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [f-fz-a]* 1`] = `
/^(?:(?=.)f[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [f-gz-a]* 1`] = `
/^(?:(?!\\.)(?=.)[f-g][^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [fz-a]* 1`] = `
/^(?:(?=.)f[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [ia]?[ck] 1`] = `
/^(?:(?!\\.)(?=.)[ia][^/][ck])$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [z-a] 1`] = `
/^(?:(?=.)$.)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [z-a]* 1`] = `
/^(?:(?=.)$.)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [z-af]* 1`] = `
/^(?:(?=.)f[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe [z\\-a] 1`] = `
/^(?:(?!\\.)(?=.)[z\\-a])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe \\ 1`] = `
/^(?:\\\\)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe \\* 1`] = `
/^(?:\\*)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe \\** 1`] = `
/^(?:(?=.)\\*[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe \\*\\* 1`] = `
/^(?:\\*\\*)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe \\.\\./*/ 1`] = `
/^(?:\\.\\.\\/(?!\\.)(?=.)[^/]*?\\/)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a* 1`] = `
/^(?:(?=.)a[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a********???******* 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/][^/][^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a*****?c 1`] = `
/^(?:(?=.)a[^/]*?[^/]c)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a*****c*?** 1`] = `
/^(?:(?=.)a[^/]*?c[^/]*?[^/][^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a****c**?**??***** 1`] = `
/^(?:(?=.)a[^/]*?c[^/]*?[^/][^/]*?[^/][^/][^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a***c 1`] = `
/^(?:(?=.)a[^/]*?c)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a**?**cd**?**??***k 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/]*?cd[^/]*?[^/][^/]*?[^/][^/][^/]*?k)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a**?**cd**?**??***k** 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/]*?cd[^/]*?[^/][^/]*?[^/][^/][^/]*?k[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a**?**cd**?**??k 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/]*?cd[^/]*?[^/][^/]*?[^/][^/]k)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a**?**cd**?**??k*** 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/]*?cd[^/]*?[^/][^/]*?[^/][^/]k[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a*[^c] 1`] = `
/^(?:(?=.)a[^/]*?[^c])$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a*cd**?**??k 1`] = `
/^(?:(?=.)a[^/]*?cd[^/]*?[^/][^/]*?[^/][^/]k)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a/*/b 1`] = `
/^(?:a\\/(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?\\/b)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a/*/b 2`] = `
/^(?:a\\/(?!\\.)(?=.)[^/]*?\\/b)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a/.*/b 1`] = `
/^(?:a\\/(?=.)\\.[^/]*?\\/b)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a/.*/b 2`] = `
/^(?:a\\/(?=.)\\.[^/]*?\\/b)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a/[2015-03-10T00:23:08.647Z\\]/z 1`] = `
/^(?:a\\/\\[2015\\-03\\-10T00:23:08\\.647Z\\]\\/z)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a/[2015-03-10T00:23:08.647Z]/z 1`] = `
/^(?:a\\/(?!\\.)(?=.)[2010T00:23:08.647Z]\\/z)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a?b 1`] = `
/^(?:(?=.)a[^/]b)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a?c 1`] = `
/^(?:(?=.)a[^/]c)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a[X-]b 1`] = `
/^(?:(?=.)a[X\\-]b)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a[\\b]c 1`] = `
/^(?:abc)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a[b]c 1`] = `
/^(?:abc)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a\\*?/* 1`] = `
/^(?:(?=.)a\\*[^/]\\/(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a\\*b/* 1`] = `
/^(?:a\\*b\\/(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe a\\*c 1`] = `
/^(?:a\\*c)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe ab* 1`] = `
/^(?:(?=.)ab[^/]*?)$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe b*/ 1`] = `
/^(?:(?=.)b[^/]*?\\/)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe c* 1`] = `
/^(?:(?=.)c[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe man/man1/bash.1 1`] = `
/^(?:man\\/man1\\/bash\\.1)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe s/\\..*// 1`] = `
/^(?:s\\/(?=.)\\.\\.[^/]*?\\/)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe x/*/../../a/b/c 1`] = `
/^(?:a\\/b\\/c)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe x/*/../a/b/c 1`] = `
/^(?:x\\/a\\/b\\/c)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe x/z/../*/a/b/c 1`] = `
/^(?:x\\/(?!\\.)(?=.)[^/]*?\\/a\\/b\\/c)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe {/*,*} 1`] = `
/^(?:\\/(?!\\.)(?=.)[^/]*?|(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe {/?,*} 1`] = `
/^(?:\\/(?!\\.)(?=.)[^/]|(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe {a,*(b|c,d)} 1`] = `
/^(?:a|(?=.)[^/]*?\\((?!\\.)b\\|(?!\\.)c|d\\))$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe {a,*(b|{c,d})} 1`] = `
/^(?:a|(?=.)(?:(?!\\.)b|(?!\\.)c)*|(?=.)(?:(?!\\.)b|(?!\\.)d)*)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe {c*,./c*} 1`] = `
/^(?:(?=.)c[^/]*?|\\.\\/(?=.)c[^/]*?)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe Å 1`] = `
/^(?:Å)$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe Å 2`] = `
/^(?:Å)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe Å 3`] = `
/^(?:Å)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe Å 4`] = `
/^(?:Å)$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe å 1`] = `
/^(?:å)$/
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe å 2`] = `
/^(?:å)$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe å 3`] = `
/^(?:å)$/i
`

exports[`test/optimization-level-2.ts TAP basic tests > makeRe å 4`] = `
/^(?:å)$/
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ** > defaults 1`] = `
Array [
  Array [
    "**",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ** > multislash 1`] = `
Array [
  Array [
    "**",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ** > no globstar 1`] = `
Array [
  Array [
    "*",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/.. > defaults 1`] = `
Array [
  Array [
    "**",
    "..",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/.. > multislash 1`] = `
Array [
  Array [
    "**",
    "..",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/.. > no globstar 1`] = `
Array [
  Array [
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../ > defaults 1`] = `
Array [
  Array [
    "**",
    "..",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../ > multislash 1`] = `
Array [
  Array [
    "**",
    "..",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../ > no globstar 1`] = `
Array [
  Array [
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../*/x > defaults 1`] = `
Array [
  Array [
    "..",
    "*",
    "x",
  ],
  Array [
    "**",
    "*",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../*/x > multislash 1`] = `
Array [
  Array [
    "..",
    "*",
    "x",
  ],
  Array [
    "**",
    "*",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../*/x > no globstar 1`] = `
Array [
  Array [
    "*",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x > defaults 1`] = `
Array [
  Array [
    "**",
    "..",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x > defaults 2`] = `
Array [
  Array [
    "**",
    "..",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x > multislash 1`] = `
Array [
  Array [
    "**",
    "..",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x > multislash 2`] = `
Array [
  Array [
    "**",
    "..",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x > no globstar 1`] = `
Array [
  Array [
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x > no globstar 2`] = `
Array [
  Array [
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x/* > defaults 1`] = `
Array [
  Array [
    "..",
    "x",
    "*",
  ],
  Array [
    "**",
    "x",
    "*",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x/* > multislash 1`] = `
Array [
  Array [
    "..",
    "x",
    "*",
  ],
  Array [
    "**",
    "x",
    "*",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x/* > no globstar 1`] = `
Array [
  Array [
    "x",
    "*",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x/y > defaults 1`] = `
Array [
  Array [
    "..",
    "x",
    "y",
  ],
  Array [
    "**",
    "x",
    "y",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x/y > multislash 1`] = `
Array [
  Array [
    "..",
    "x",
    "y",
  ],
  Array [
    "**",
    "x",
    "y",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x/y > no globstar 1`] = `
Array [
  Array [
    "x",
    "y",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x/y/z > defaults 1`] = `
Array [
  Array [
    "..",
    "x",
    "y",
    "z",
  ],
  Array [
    "**",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x/y/z > multislash 1`] = `
Array [
  Array [
    "..",
    "x",
    "y",
    "z",
  ],
  Array [
    "**",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux **/../x/y/z > no globstar 1`] = `
Array [
  Array [
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux */../** > defaults 1`] = `
Array [
  Array [
    ".",
    "**",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux */../** > multislash 1`] = `
Array [
  Array [
    ".",
    "**",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux */../** > no globstar 1`] = `
Array [
  Array [
    "*",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux */../**/?/*/[a-z] > defaults 1`] = `
Array [
  Array [
    ".",
    "**",
    "?",
    "*",
    "[a-z]",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux */../**/?/*/[a-z] > multislash 1`] = `
Array [
  Array [
    ".",
    "**",
    "?",
    "*",
    "[a-z]",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux */../**/?/*/[a-z] > no globstar 1`] = `
Array [
  Array [
    "*",
    "?",
    "*",
    "[a-z]",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./ > defaults 1`] = `
Array [
  Array [
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./ > multislash 1`] = `
Array [
  Array [
    ".",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./ > no globstar 1`] = `
Array [
  Array [
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./** > defaults 1`] = `
Array [
  Array [
    ".",
    "**",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./** > multislash 1`] = `
Array [
  Array [
    ".",
    "**",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./** > no globstar 1`] = `
Array [
  Array [
    ".",
    "*",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./**/ > defaults 1`] = `
Array [
  Array [
    ".",
    "**",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./**/ > multislash 1`] = `
Array [
  Array [
    ".",
    "**",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./**/ > no globstar 1`] = `
Array [
  Array [
    ".",
    "*",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./**/../x > defaults 1`] = `
Array [
  Array [
    ".",
    "**",
    "..",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./**/../x > multislash 1`] = `
Array [
  Array [
    ".",
    "**",
    "..",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./**/../x > no globstar 1`] = `
Array [
  Array [
    ".",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./**/../x/y > defaults 1`] = `
Array [
  Array [
    ".",
    "..",
    "x",
    "y",
  ],
  Array [
    ".",
    "**",
    "x",
    "y",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./**/../x/y > multislash 1`] = `
Array [
  Array [
    ".",
    "..",
    "x",
    "y",
  ],
  Array [
    ".",
    "**",
    "x",
    "y",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./**/../x/y > no globstar 1`] = `
Array [
  Array [
    ".",
    "x",
    "y",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./**/x > defaults 1`] = `
Array [
  Array [
    ".",
    "**",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./**/x > multislash 1`] = `
Array [
  Array [
    ".",
    "**",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./**/x > no globstar 1`] = `
Array [
  Array [
    ".",
    "*",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./././. > defaults 1`] = `
Array [
  Array [
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./././. > multislash 1`] = `
Array [
  Array [
    ".",
    ".",
    ".",
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./././. > no globstar 1`] = `
Array [
  Array [
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./x/.././///.//./ > defaults 1`] = `
Array [
  Array [
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./x/.././///.//./ > multislash 1`] = `
Array [
  Array [
    ".",
    ".",
    "",
    "",
    "",
    ".",
    "",
    ".",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux ./x/.././///.//./ > no globstar 1`] = `
Array [
  Array [
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux //host/share > defaults 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux //host/share > multislash 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux //host/share > no globstar 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux //host/share/ > defaults 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux //host/share/ > multislash 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux //host/share/ > no globstar 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux //host/share//s/o//me////.//path > defaults 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
    "s",
    "o",
    "me",
    "path",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux //host/share//s/o//me////.//path > multislash 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
    "",
    "s",
    "o",
    "",
    "me",
    "",
    "",
    "",
    ".",
    "",
    "path",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux //host/share//s/o//me////.//path > no globstar 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
    "s",
    "o",
    "me",
    "path",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/b/c/**///../x/y/z > defaults 1`] = `
Array [
  Array [
    "a",
    "b",
    "x",
    "y",
    "z",
  ],
  Array [
    "a",
    "b",
    "c",
    "**",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/b/c/**///../x/y/z > multislash 1`] = `
Array [
  Array [
    "a",
    "b",
    "c",
    "**",
    "",
    "",
    "..",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/b/c/**///../x/y/z > no globstar 1`] = `
Array [
  Array [
    "a",
    "b",
    "c",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/b/c/..///d > defaults 1`] = `
Array [
  Array [
    "a",
    "b",
    "d",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/b/c/..///d > multislash 1`] = `
Array [
  Array [
    "a",
    "b",
    "",
    "",
    "d",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/b/c/..///d > no globstar 1`] = `
Array [
  Array [
    "a",
    "b",
    "d",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{**/,}*/b > defaults 1`] = `
Array [
  Array [
    "a",
    "**",
    "*",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{**/,}*/b > multislash 1`] = `
Array [
  Array [
    "a",
    "**",
    "*",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{**/,}*/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "*",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{**/,}b > defaults 1`] = `
Array [
  Array [
    "a",
    "**",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{**/,}b > multislash 1`] = `
Array [
  Array [
    "a",
    "**",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{**/,}b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{*,.c}/b > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    ".c",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{*,.c}/b > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    ".c",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{*,.c}/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    ".c",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{*,c}/b > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{*,c}/b > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{*,c}/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{*/b/d,c/b/*}/e > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{*/b/d,c/b/*}/e > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{*/b/d,c/b/*}/e > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{,**/}*/b > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "**",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{,**/}*/b > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "**",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{,**/}*/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "*",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{,**/}b > defaults 1`] = `
Array [
  Array [
    "a",
    "b",
  ],
  Array [
    "a",
    "**",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{,**/}b > multislash 1`] = `
Array [
  Array [
    "a",
    "b",
  ],
  Array [
    "a",
    "**",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{,**/}b > no globstar 1`] = `
Array [
  Array [
    "a",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{.c,*}/b > defaults 1`] = `
Array [
  Array [
    "a",
    ".c",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{.c,*}/b > multislash 1`] = `
Array [
  Array [
    "a",
    ".c",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{.c,*}/b > no globstar 1`] = `
Array [
  Array [
    "a",
    ".c",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{c,*}/b > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{c,*}/b > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{c,*}/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{c/b/*,*/b/d}/e > defaults 1`] = `
Array [
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{c/b/*,*/b/d}/e > multislash 1`] = `
Array [
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{c/b/*,*/b/d}/e > no globstar 1`] = `
Array [
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{c/b/d,*/b/*}/e > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{c/b/d,*/b/*}/e > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux a/{c/b/d,*/b/*}/e > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux {a/**/b,a/b} > defaults 1`] = `
Array [
  Array [
    "a",
    "**",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux {a/**/b,a/b} > multislash 1`] = `
Array [
  Array [
    "a",
    "**",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization linux {a/**/b,a/b} > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ** > defaults 1`] = `
Array [
  Array [
    "**",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ** > multislash 1`] = `
Array [
  Array [
    "**",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ** > no globstar 1`] = `
Array [
  Array [
    "*",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/.. > defaults 1`] = `
Array [
  Array [
    "**",
    "..",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/.. > multislash 1`] = `
Array [
  Array [
    "**",
    "..",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/.. > no globstar 1`] = `
Array [
  Array [
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../ > defaults 1`] = `
Array [
  Array [
    "**",
    "..",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../ > multislash 1`] = `
Array [
  Array [
    "**",
    "..",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../ > no globstar 1`] = `
Array [
  Array [
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../*/x > defaults 1`] = `
Array [
  Array [
    "..",
    "*",
    "x",
  ],
  Array [
    "**",
    "*",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../*/x > multislash 1`] = `
Array [
  Array [
    "..",
    "*",
    "x",
  ],
  Array [
    "**",
    "*",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../*/x > no globstar 1`] = `
Array [
  Array [
    "*",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x > defaults 1`] = `
Array [
  Array [
    "**",
    "..",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x > defaults 2`] = `
Array [
  Array [
    "**",
    "..",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x > multislash 1`] = `
Array [
  Array [
    "**",
    "..",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x > multislash 2`] = `
Array [
  Array [
    "**",
    "..",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x > no globstar 1`] = `
Array [
  Array [
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x > no globstar 2`] = `
Array [
  Array [
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x/* > defaults 1`] = `
Array [
  Array [
    "..",
    "x",
    "*",
  ],
  Array [
    "**",
    "x",
    "*",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x/* > multislash 1`] = `
Array [
  Array [
    "..",
    "x",
    "*",
  ],
  Array [
    "**",
    "x",
    "*",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x/* > no globstar 1`] = `
Array [
  Array [
    "x",
    "*",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x/y > defaults 1`] = `
Array [
  Array [
    "..",
    "x",
    "y",
  ],
  Array [
    "**",
    "x",
    "y",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x/y > multislash 1`] = `
Array [
  Array [
    "..",
    "x",
    "y",
  ],
  Array [
    "**",
    "x",
    "y",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x/y > no globstar 1`] = `
Array [
  Array [
    "x",
    "y",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x/y/z > defaults 1`] = `
Array [
  Array [
    "..",
    "x",
    "y",
    "z",
  ],
  Array [
    "**",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x/y/z > multislash 1`] = `
Array [
  Array [
    "..",
    "x",
    "y",
    "z",
  ],
  Array [
    "**",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 **/../x/y/z > no globstar 1`] = `
Array [
  Array [
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 */../** > defaults 1`] = `
Array [
  Array [
    ".",
    "**",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 */../** > multislash 1`] = `
Array [
  Array [
    ".",
    "**",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 */../** > no globstar 1`] = `
Array [
  Array [
    "*",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 */../**/?/*/[a-z] > defaults 1`] = `
Array [
  Array [
    ".",
    "**",
    "?",
    "*",
    "[a-z]",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 */../**/?/*/[a-z] > multislash 1`] = `
Array [
  Array [
    ".",
    "**",
    "?",
    "*",
    "[a-z]",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 */../**/?/*/[a-z] > no globstar 1`] = `
Array [
  Array [
    "*",
    "?",
    "*",
    "[a-z]",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./ > defaults 1`] = `
Array [
  Array [
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./ > multislash 1`] = `
Array [
  Array [
    ".",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./ > no globstar 1`] = `
Array [
  Array [
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./** > defaults 1`] = `
Array [
  Array [
    ".",
    "**",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./** > multislash 1`] = `
Array [
  Array [
    ".",
    "**",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./** > no globstar 1`] = `
Array [
  Array [
    ".",
    "*",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./**/ > defaults 1`] = `
Array [
  Array [
    ".",
    "**",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./**/ > multislash 1`] = `
Array [
  Array [
    ".",
    "**",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./**/ > no globstar 1`] = `
Array [
  Array [
    ".",
    "*",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./**/../x > defaults 1`] = `
Array [
  Array [
    ".",
    "**",
    "..",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./**/../x > multislash 1`] = `
Array [
  Array [
    ".",
    "**",
    "..",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./**/../x > no globstar 1`] = `
Array [
  Array [
    ".",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./**/../x/y > defaults 1`] = `
Array [
  Array [
    ".",
    "..",
    "x",
    "y",
  ],
  Array [
    ".",
    "**",
    "x",
    "y",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./**/../x/y > multislash 1`] = `
Array [
  Array [
    ".",
    "..",
    "x",
    "y",
  ],
  Array [
    ".",
    "**",
    "x",
    "y",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./**/../x/y > no globstar 1`] = `
Array [
  Array [
    ".",
    "x",
    "y",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./**/x > defaults 1`] = `
Array [
  Array [
    ".",
    "**",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./**/x > multislash 1`] = `
Array [
  Array [
    ".",
    "**",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./**/x > no globstar 1`] = `
Array [
  Array [
    ".",
    "*",
    "x",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./././. > defaults 1`] = `
Array [
  Array [
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./././. > multislash 1`] = `
Array [
  Array [
    ".",
    ".",
    ".",
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./././. > no globstar 1`] = `
Array [
  Array [
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./x/.././///.//./ > defaults 1`] = `
Array [
  Array [
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./x/.././///.//./ > multislash 1`] = `
Array [
  Array [
    ".",
    ".",
    "",
    "",
    "",
    ".",
    "",
    ".",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 ./x/.././///.//./ > no globstar 1`] = `
Array [
  Array [
    ".",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 //host/share > defaults 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 //host/share > multislash 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 //host/share > no globstar 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 //host/share/ > defaults 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 //host/share/ > multislash 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 //host/share/ > no globstar 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
    "",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 //host/share//s/o//me////.//path > defaults 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
    "s",
    "o",
    "me",
    "path",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 //host/share//s/o//me////.//path > multislash 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
    "",
    "s",
    "o",
    "",
    "me",
    "",
    "",
    "",
    ".",
    "",
    "path",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 //host/share//s/o//me////.//path > no globstar 1`] = `
Array [
  Array [
    "",
    "",
    "host",
    "share",
    "s",
    "o",
    "me",
    "path",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/b/c/**///../x/y/z > defaults 1`] = `
Array [
  Array [
    "a",
    "b",
    "x",
    "y",
    "z",
  ],
  Array [
    "a",
    "b",
    "c",
    "**",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/b/c/**///../x/y/z > multislash 1`] = `
Array [
  Array [
    "a",
    "b",
    "c",
    "**",
    "",
    "",
    "..",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/b/c/**///../x/y/z > no globstar 1`] = `
Array [
  Array [
    "a",
    "b",
    "c",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/b/c/..///d > defaults 1`] = `
Array [
  Array [
    "a",
    "b",
    "d",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/b/c/..///d > multislash 1`] = `
Array [
  Array [
    "a",
    "b",
    "",
    "",
    "d",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/b/c/..///d > no globstar 1`] = `
Array [
  Array [
    "a",
    "b",
    "d",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{**/,}*/b > defaults 1`] = `
Array [
  Array [
    "a",
    "**",
    "*",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{**/,}*/b > multislash 1`] = `
Array [
  Array [
    "a",
    "**",
    "*",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{**/,}*/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "*",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{**/,}b > defaults 1`] = `
Array [
  Array [
    "a",
    "**",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{**/,}b > multislash 1`] = `
Array [
  Array [
    "a",
    "**",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{**/,}b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{*,.c}/b > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    ".c",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{*,.c}/b > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    ".c",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{*,.c}/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    ".c",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{*,c}/b > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{*,c}/b > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{*,c}/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{*/b/d,c/b/*}/e > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{*/b/d,c/b/*}/e > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{*/b/d,c/b/*}/e > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{,**/}*/b > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "**",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{,**/}*/b > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "**",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{,**/}*/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "*",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{,**/}b > defaults 1`] = `
Array [
  Array [
    "a",
    "b",
  ],
  Array [
    "a",
    "**",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{,**/}b > multislash 1`] = `
Array [
  Array [
    "a",
    "b",
  ],
  Array [
    "a",
    "**",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{,**/}b > no globstar 1`] = `
Array [
  Array [
    "a",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{.c,*}/b > defaults 1`] = `
Array [
  Array [
    "a",
    ".c",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{.c,*}/b > multislash 1`] = `
Array [
  Array [
    "a",
    ".c",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{.c,*}/b > no globstar 1`] = `
Array [
  Array [
    "a",
    ".c",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{c,*}/b > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{c,*}/b > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{c,*}/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{c/b/*,*/b/d}/e > defaults 1`] = `
Array [
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{c/b/*,*/b/d}/e > multislash 1`] = `
Array [
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{c/b/*,*/b/d}/e > no globstar 1`] = `
Array [
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{c/b/d,*/b/*}/e > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{c/b/d,*/b/*}/e > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 a/{c/b/d,*/b/*}/e > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 {a/**/b,a/b} > defaults 1`] = `
Array [
  Array [
    "a",
    "**",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 {a/**/b,a/b} > multislash 1`] = `
Array [
  Array [
    "a",
    "**",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP explicit pattern coalescing and optimization win32 {a/**/b,a/b} > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux  > default 1`] = `
Array [
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux  > multislash 1`] = `
Array [
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux . > default 1`] = `
Array [
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux . > multislash 1`] = `
Array [
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux ./ > default 1`] = `
Array [
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux ./ > multislash 1`] = `
Array [
  ".",
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux ./* > default 1`] = `
Array [
  ".",
  "*",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux ./* > multislash 1`] = `
Array [
  ".",
  "*",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux ./. > default 1`] = `
Array [
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux ./. > multislash 1`] = `
Array [
  ".",
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux ././. > default 1`] = `
Array [
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux ././. > multislash 1`] = `
Array [
  ".",
  ".",
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux .////././//././. > default 1`] = `
Array [
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux .////././//././. > multislash 1`] = `
Array [
  ".",
  "",
  "",
  "",
  ".",
  ".",
  "",
  "",
  ".",
  ".",
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux / > default 1`] = `
Array [
  "",
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux / > multislash 1`] = `
Array [
  "",
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux //unc/share///*/../x > default 1`] = `
Array [
  "",
  "unc",
  "share",
  "x",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux //unc/share///*/../x > multislash 1`] = `
Array [
  "",
  "",
  "unc",
  "share",
  "",
  "",
  "x",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux a/../b > default 1`] = `
Array [
  "b",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux a/../b > multislash 1`] = `
Array [
  "b",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux x/.. > default 1`] = `
Array [
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well linux x/.. > multislash 1`] = `
Array [
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32  > default 1`] = `
Array [
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32  > multislash 1`] = `
Array [
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 . > default 1`] = `
Array [
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 . > multislash 1`] = `
Array [
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 ./ > default 1`] = `
Array [
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 ./ > multislash 1`] = `
Array [
  ".",
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 ./* > default 1`] = `
Array [
  ".",
  "*",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 ./* > multislash 1`] = `
Array [
  ".",
  "*",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 ./. > default 1`] = `
Array [
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 ./. > multislash 1`] = `
Array [
  ".",
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 ././. > default 1`] = `
Array [
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 ././. > multislash 1`] = `
Array [
  ".",
  ".",
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 .////././//././. > default 1`] = `
Array [
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 .////././//././. > multislash 1`] = `
Array [
  ".",
  "",
  "",
  "",
  ".",
  ".",
  "",
  "",
  ".",
  ".",
  ".",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 / > default 1`] = `
Array [
  "",
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 / > multislash 1`] = `
Array [
  "",
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 //unc/share///*/../x > default 1`] = `
Array [
  "",
  "",
  "unc",
  "share",
  "x",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 //unc/share///*/../x > multislash 1`] = `
Array [
  "",
  "",
  "unc",
  "share",
  "",
  "",
  "x",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 a/../b > default 1`] = `
Array [
  "b",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 a/../b > multislash 1`] = `
Array [
  "b",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 x/.. > default 1`] = `
Array [
  "",
]
`

exports[`test/optimization-level-2.ts TAP optimize the file as well win32 x/.. > multislash 1`] = `
Array [
  "",
]
`
