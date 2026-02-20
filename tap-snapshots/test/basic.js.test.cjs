/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/basic.js TAP basic tests > makeRe  1`] = `
false
`

exports[`test/basic.js TAP basic tests > makeRe !!a* 1`] = `
/^(?:(?=.)a[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe !(.a|js)@(.*) 1`] = `
/^(?:(?!\\.)(?=.)(?:(?!(?:\\.a|js)(?:\\.[^/]*?))[^/]*?)(?:\\.[^/]*?))$/
`

exports[`test/basic.js TAP basic tests > makeRe !\\!a* 1`] = `
/^(?!^(?:(?=.)\\!a[^/]*?)$).*$/
`

exports[`test/basic.js TAP basic tests > makeRe !a* 1`] = `
/^(?!^(?:(?=.)a[^/]*?)$).*$/
`

exports[`test/basic.js TAP basic tests > makeRe !a* 2`] = `
/^(?:(?=.)\\!a[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe # ignore this 1`] = `
false
`

exports[`test/basic.js TAP basic tests > makeRe #* 1`] = `
/^(?:(?=.)#[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe * 1`] = `
/^(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe *(a/b) 1`] = `
/^(?:(?=.)[^/]*?\\((?!\\.)a\\/b\\))$/
`

exports[`test/basic.js TAP basic tests > makeRe *(a|{b),c)} 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)b)*|(?=.)(?:(?!\\.)a|(?!\\.)c)*)$/
`

exports[`test/basic.js TAP basic tests > makeRe *(a|{b,c}) 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)b)*|(?=.)(?:(?!\\.)a|(?!\\.)c)*)$/
`

exports[`test/basic.js TAP basic tests > makeRe *(a|{b|c,c}) 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)b|(?!\\.)c)*|(?=.)(?:(?!\\.)a|(?!\\.)c)*)$/
`

exports[`test/basic.js TAP basic tests > makeRe *(a|{b|c,c}) 2`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\(a\\|b\\|c\\)|(?!\\.)(?=.)[^/]*?\\(a\\|c\\))$/
`

exports[`test/basic.js TAP basic tests > makeRe ** 1`] = `
/^(?:(?:(?!(?:\\/|^)\\.).)*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe ** 2`] = `
/^(?:(?:(?!(?:\\/|^)\\.).)*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe ** 3`] = `
/^(?:(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe *******? 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?[^/])$/
`

exports[`test/basic.js TAP basic tests > makeRe *******c 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?c)$/
`

exports[`test/basic.js TAP basic tests > makeRe *****?? 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?[^/][^/])$/
`

exports[`test/basic.js TAP basic tests > makeRe **/.x/** 1`] = `
/^(?:(?:\\/|(?:(?!(?:\\/|^)\\.).)*?\\/)?\\.x(?:\\/|(?:(?!(?:\\/|^)\\.).)*?)?)$/
`

exports[`test/basic.js TAP basic tests > makeRe **/.x/** 2`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\/\\.x\\/(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe *.!(js) 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\.(?:(?!(?:js)$)[^/]*?))$/
`

exports[`test/basic.js TAP basic tests > makeRe *.\\* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\.\\*)$/
`

exports[`test/basic.js TAP basic tests > makeRe */man*/bash.* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\/(?=.)man[^/]*?\\/(?=.)bash\\.[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe *\\!* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\![^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe *\\\\!* 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?\\\\\\![^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe *c*?** 1`] = `
/^(?:(?!\\.)(?=.)[^/]*?c[^/]*?[^/][^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe +(a)!(b)+(c) 1`] = `
/^(?:(?=.)(?:(?!\\.)a)+(?:(?!(?:b)(?:c)+)[^/]*?)(?:c)+)$/
`

exports[`test/basic.js TAP basic tests > makeRe +(a|*\\|c\\\\|d\\\\\\|e\\\\\\\\|f\\\\\\\\\\|g 1`] = `
/^(?:(?=.)\\+\\((?!\\.)a\\|(?!\\.)[^/]*?\\|c\\\\\\\\\\|(?!\\.)d\\\\\\\\\\|e\\\\\\\\\\\\\\\\\\|(?!\\.)f\\\\\\\\\\\\\\\\\\|g)$/
`

exports[`test/basic.js TAP basic tests > makeRe .* 1`] = `
/^(?:(?=.)\\.[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe /^root:/{s/^[^:]*:[^:]*:([^:]*).*$// 1`] = `
/^(?:\\/\\^root:\\/\\{s\\/(?=.)\\^[^:][^/]*?:[^:][^/]*?:\\([^:]\\)[^/]*?\\.[^/]*?\\$\\/\\/)$/
`

exports[`test/basic.js TAP basic tests > makeRe /^root:/{s/^[^:]*:[^:]*:([^:]*).*$/\\1/ 1`] = `
/^(?:\\/\\^root:\\/\\{s\\/(?=.)\\^[^:][^/]*?:[^:][^/]*?:\\([^:]\\)[^/]*?\\.[^/]*?\\$\\/1\\/)$/
`

exports[`test/basic.js TAP basic tests > makeRe ?************c****?**** 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?c[^/]*?[^/][^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe ?*****?? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/][^/])$/
`

exports[`test/basic.js TAP basic tests > makeRe ?*****?c 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/]c)$/
`

exports[`test/basic.js TAP basic tests > makeRe ?***?**** 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/][^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe ?***?****? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/][^/]*?[^/])$/
`

exports[`test/basic.js TAP basic tests > makeRe ?***?****c 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/]*?[^/][^/]*?c)$/
`

exports[`test/basic.js TAP basic tests > makeRe ??**********?****? 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/][^/]*?[^/][^/]*?[^/])$/
`

exports[`test/basic.js TAP basic tests > makeRe ??**********?****c 1`] = `
/^(?:(?!\\.)(?=.)[^/][^/][^/]*?[^/][^/]*?c)$/
`

exports[`test/basic.js TAP basic tests > makeRe @(*|.*) 1`] = `
/^(?:(?=.)(?:(?!\\.)[^/]*?|\\.[^/]*?))$/
`

exports[`test/basic.js TAP basic tests > makeRe @(*|a) 1`] = `
/^(?:(?=.)(?:(?!(?:^|\\/)\\.{1,2}(?:$|\\/))[^/]*?|(?!(?:^|\\/)\\.{1,2}(?:$|\\/))a))$/
`

exports[`test/basic.js TAP basic tests > makeRe @(.*) 1`] = `
/^(?:(?=.)(?:\\.[^/]*?))$/
`

exports[`test/basic.js TAP basic tests > makeRe @(.*) 2`] = `
/^(?:(?=.)(?:\\.[^/]*?))$/
`

exports[`test/basic.js TAP basic tests > makeRe @(.*|*) 1`] = `
/^(?:(?=.)(?:\\.[^/]*?|(?!\\.)[^/]*?))$/
`

exports[`test/basic.js TAP basic tests > makeRe @(.*|js) 1`] = `
/^(?:(?=.)(?:\\.[^/]*?|(?!\\.)js))$/
`

exports[`test/basic.js TAP basic tests > makeRe @(a|a[(])b 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)a[(])b)$/
`

exports[`test/basic.js TAP basic tests > makeRe @(a|a[)])b 1`] = `
/^(?:(?=.)(?:(?!\\.)a|(?!\\.)a[\\)])b)$/
`

exports[`test/basic.js TAP basic tests > makeRe @(js|.*) 1`] = `
/^(?:(?=.)(?:(?!\\.)js|\\.[^/]*?))$/
`

exports[`test/basic.js TAP basic tests > makeRe X* 1`] = `
/^(?:(?=.)X[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe X* 2`] = `
/^(?:(?=.)X[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe XYZ 1`] = `
/^(?:(?=.)XYZ)$/i
`

exports[`test/basic.js TAP basic tests > makeRe [ 1`] = `
/^(?:\\[)$/
`

exports[`test/basic.js TAP basic tests > makeRe [!a* 1`] = `
/^(?:(?=.)\\[(?=.)\\!a[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe [#a* 1`] = `
/^(?:(?=.)\\[(?=.)#a[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe [* 1`] = `
/^(?:(?=.)\\[(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe [-abc] 1`] = `
/^(?:(?!\\.)(?=.)[-abc])$/
`

exports[`test/basic.js TAP basic tests > makeRe [[] 1`] = `
/^(?:(?!\\.)(?=.)[\\[])$/
`

exports[`test/basic.js TAP basic tests > makeRe [\\-\\]] 1`] = `
/^(?:(?!\\.)(?=.)[-\\]])$/
`

exports[`test/basic.js TAP basic tests > makeRe [\\-\\]] 2`] = `
/^(?:(?!\\.)(?=.)[-\\]])$/
`

exports[`test/basic.js TAP basic tests > makeRe [\\\\] 1`] = `
/^(?:(?!\\.)(?=.)[\\\\])$/
`

exports[`test/basic.js TAP basic tests > makeRe [\\b-a] 1`] = `
/^(?:)$/
`

exports[`test/basic.js TAP basic tests > makeRe [\\b-a] 2`] = `
/^(?:)$/
`

exports[`test/basic.js TAP basic tests > makeRe [\\z-a] 1`] = `
/^(?:\\[z\\-a\\])$/
`

exports[`test/basic.js TAP basic tests > makeRe [\\z-a] 2`] = `
/^(?:\\[z\\-a\\])$/
`

exports[`test/basic.js TAP basic tests > makeRe [] 1`] = `
/^(?:\\[\\])$/
`

exports[`test/basic.js TAP basic tests > makeRe []+*] 1`] = `
/^(?:(?=.)\\[(?=.)\\]\\+[^/]*?\\])$/
`

exports[`test/basic.js TAP basic tests > makeRe []+*] 2`] = `
/^(?:(?=.)\\[(?=.)\\]\\+[^/]*?\\])$/
`

exports[`test/basic.js TAP basic tests > makeRe []-] 1`] = `
/^(?:(?!\\.)(?=.)[\\]-])$/
`

exports[`test/basic.js TAP basic tests > makeRe []] 1`] = `
/^(?:(?!\\.)(?=.)[\\]])$/
`

exports[`test/basic.js TAP basic tests > makeRe [^a-c]* 1`] = `
/^(?:(?!\\.)(?=.)[^a-c][^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe [a-0][a-Ā] 1`] = `
/^(?:(?=.)\\[a-0\\][a-Ā])$/
`

exports[`test/basic.js TAP basic tests > makeRe [a-b-c] 1`] = `
/^(?:(?!\\.)(?=.)[a-b-c])$/
`

exports[`test/basic.js TAP basic tests > makeRe [a-b-c] 2`] = `
/^(?:(?!\\.)(?=.)[a-b-c])$/
`

exports[`test/basic.js TAP basic tests > makeRe [a-c]b* 1`] = `
/^(?:(?!\\.)(?=.)[a-c]b[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe [a-y]*[^c] 1`] = `
/^(?:(?!\\.)(?=.)[a-y][^/]*?[^c])$/
`

exports[`test/basic.js TAP basic tests > makeRe [a-z] 1`] = `
/^(?:(?!\\.)(?=.)[a-z])$/
`

exports[`test/basic.js TAP basic tests > makeRe [abc 1`] = `
/^(?:\\[abc)$/
`

exports[`test/basic.js TAP basic tests > makeRe [abc-] 1`] = `
/^(?:(?!\\.)(?=.)[abc-])$/
`

exports[`test/basic.js TAP basic tests > makeRe [ia]?[ck] 1`] = `
/^(?:(?!\\.)(?=.)[ia][^/][ck])$/i
`

exports[`test/basic.js TAP basic tests > makeRe [z-a] 1`] = `
/^(?:\\[z\\-a\\])$/
`

exports[`test/basic.js TAP basic tests > makeRe [z\\-a] 1`] = `
/^(?:)$/
`

exports[`test/basic.js TAP basic tests > makeRe [z\\-a] 2`] = `
/^(?:)$/
`

exports[`test/basic.js TAP basic tests > makeRe \\ 1`] = `
/^(?:\\\\)$/
`

exports[`test/basic.js TAP basic tests > makeRe \\* 1`] = `
/^(?:\\*)$/
`

exports[`test/basic.js TAP basic tests > makeRe \\** 1`] = `
/^(?:(?=.)\\*[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe \\*\\* 1`] = `
/^(?:\\*\\*)$/
`

exports[`test/basic.js TAP basic tests > makeRe \\.\\./*/ 1`] = `
/^(?:\\.\\.\\/(?!\\.)(?=.)[^/]*?\\/)$/
`

exports[`test/basic.js TAP basic tests > makeRe a* 1`] = `
/^(?:(?=.)a[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe a********???******* 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/][^/][^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe a*****?c 1`] = `
/^(?:(?=.)a[^/]*?[^/]c)$/
`

exports[`test/basic.js TAP basic tests > makeRe a*****c*?** 1`] = `
/^(?:(?=.)a[^/]*?c[^/]*?[^/][^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe a****c**?**??***** 1`] = `
/^(?:(?=.)a[^/]*?c[^/]*?[^/][^/]*?[^/][^/][^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe a***c 1`] = `
/^(?:(?=.)a[^/]*?c)$/
`

exports[`test/basic.js TAP basic tests > makeRe a**?**cd**?**??***k 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/]*?cd[^/]*?[^/][^/]*?[^/][^/][^/]*?k)$/
`

exports[`test/basic.js TAP basic tests > makeRe a**?**cd**?**??***k** 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/]*?cd[^/]*?[^/][^/]*?[^/][^/][^/]*?k[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe a**?**cd**?**??k 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/]*?cd[^/]*?[^/][^/]*?[^/][^/]k)$/
`

exports[`test/basic.js TAP basic tests > makeRe a**?**cd**?**??k*** 1`] = `
/^(?:(?=.)a[^/]*?[^/][^/]*?cd[^/]*?[^/][^/]*?[^/][^/]k[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe a*[^c] 1`] = `
/^(?:(?=.)a[^/]*?[^c])$/
`

exports[`test/basic.js TAP basic tests > makeRe a*cd**?**??k 1`] = `
/^(?:(?=.)a[^/]*?cd[^/]*?[^/][^/]*?[^/][^/]k)$/
`

exports[`test/basic.js TAP basic tests > makeRe a/*/b 1`] = `
/^(?:a\\/(?!(?:^|\\/)\\.{1,2}(?:$|\\/))(?=.)[^/]*?\\/b)$/
`

exports[`test/basic.js TAP basic tests > makeRe a/*/b 2`] = `
/^(?:a\\/(?!\\.)(?=.)[^/]*?\\/b)$/
`

exports[`test/basic.js TAP basic tests > makeRe a/.*/b 1`] = `
/^(?:a\\/(?=.)\\.[^/]*?\\/b)$/
`

exports[`test/basic.js TAP basic tests > makeRe a/.*/b 2`] = `
/^(?:a\\/(?=.)\\.[^/]*?\\/b)$/
`

exports[`test/basic.js TAP basic tests > makeRe a/[2015-03-10T00:23:08.647Z]/z 1`] = `
/^(?:a\\/\\[2015\\-03\\-10T00:23:08\\.647Z\\]\\/z)$/
`

exports[`test/basic.js TAP basic tests > makeRe a?b 1`] = `
/^(?:(?=.)a[^/]b)$/
`

exports[`test/basic.js TAP basic tests > makeRe a?c 1`] = `
/^(?:(?=.)a[^/]c)$/
`

exports[`test/basic.js TAP basic tests > makeRe a[X-]b 1`] = `
/^(?:(?=.)a[X-]b)$/
`

exports[`test/basic.js TAP basic tests > makeRe a[\\b]c 1`] = `
/^(?:(?=.)a[b]c)$/
`

exports[`test/basic.js TAP basic tests > makeRe a[b]c 1`] = `
/^(?:(?=.)a[b]c)$/
`

exports[`test/basic.js TAP basic tests > makeRe a\\*?/* 1`] = `
/^(?:(?=.)a\\*[^/]\\/(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe a\\*b/* 1`] = `
/^(?:a\\*b\\/(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe a\\*c 1`] = `
/^(?:a\\*c)$/
`

exports[`test/basic.js TAP basic tests > makeRe ab* 1`] = `
/^(?:(?=.)ab[^/]*?)$/i
`

exports[`test/basic.js TAP basic tests > makeRe b*/ 1`] = `
/^(?:(?=.)b[^/]*?\\/)$/
`

exports[`test/basic.js TAP basic tests > makeRe c* 1`] = `
/^(?:(?=.)c[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe man/man1/bash.1 1`] = `
/^(?:man\\/man1\\/bash\\.1)$/
`

exports[`test/basic.js TAP basic tests > makeRe s/\\..*// 1`] = `
/^(?:s\\/(?=.)\\.\\.[^/]*?\\/)$/
`

exports[`test/basic.js TAP basic tests > makeRe {/*,*} 1`] = `
/^(?:\\/(?!\\.)(?=.)[^/]*?|(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe {/?,*} 1`] = `
/^(?:\\/(?!\\.)(?=.)[^/]|(?!\\.)(?=.)[^/]*?)$/
`

exports[`test/basic.js TAP basic tests > makeRe {a,*(b|c,d)} 1`] = `
/^(?:a|(?=.)[^/]*?\\((?!\\.)b\\|(?!\\.)c|d\\))$/
`

exports[`test/basic.js TAP basic tests > makeRe {a,*(b|{c,d})} 1`] = `
/^(?:a|(?=.)(?:(?!\\.)b|(?!\\.)c)*|(?=.)(?:(?!\\.)b|(?!\\.)d)*)$/
`
