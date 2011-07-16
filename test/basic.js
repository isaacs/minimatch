// http://www.bashcookbook.com/bashinfo/source/bash-1.14.7/tests/glob-test

var tap = require("tap")
  , mm = require("../")
  , files = [ "a", "b", "c", "d", "abc"
            , "abd", "abe", "bb", "bcd"
            , "ca", "cb", "dd", "de"
            , "bdir/", "bdir/cfile"]
  , next = files.concat([ "a-b", "aXb"
                        , ".x", ".y" ])

tap.test("basic tests", function (t) {
  t.comment("See: "+
            "http://www.bashcookbook.com/bashinfo"+
            "/source/bash-1.14.7/tests/glob-test")

  // [ pattern, [matches] ]
  ; [ ["a*", ["a", "abc", "abd", "abe"]]
    , ["X*", ["X*"]]
    // allow null glob expansion
    , ["X*", [], { null: true }]

    // isaacs: Slightly different than bash/sh/ksh
    // \\* is not un-escaped to literal "*" in a failed match,
    // but it does make it get treated as a literal star
    , ["\\*", ["\\*"]]
    , ["\\**", ["\\**"]]

    , ["b*/", ["bdir/"]]
    , ["c*", ["c", "ca", "cb"]]
    , ["**", files]


    , ["\\.\\./*/", ["\\.\\./*/"]]
    , ["s/\\..*//", ["s/\\..*//"]]

    // legendary larry crashes bashes
    , ["/^root:/{s/^[^:]*:[^:]*:\([^:]*\).*$/\\1/"
      , ["/^root:/{s/^[^:]*:[^:]*:\([^:]*\).*$/\\1/"]]
    , ["/^root:/{s/^[^:]*:[^:]*:\([^:]*\).*$/\1/"
      , ["/^root:/{s/^[^:]*:[^:]*:\([^:]*\).*$/\1/"]]

    // character classes
    , ["[a-c]b*", ["abc", "abd", "abe", "bb", "cb"]]
    , ["[a-y]*[^c]", ["abd", "abe", "bb", "bcd",
       "bdir/", "ca", "cb", "dd", "de"]]
    , ["a*[^c]", ["abd", "abe"]]
    , function () { files.push("a-b", "aXb") }
    , ["a[X-]b", ["a-b", "aXb"]]
    , function () { files.push(".x", ".y") }
    , ["[^a-c]*", ["d", "dd", "de"]]
    , function () { files.push("a*b/", "a*b/ooo") }
    , ["a\\*b/*", ["a*b/ooo"]]
    , ["a\\*?/*", ["a*b/ooo"]]
    , ["*\\\\!*", [], {null: true}, ["echo !7"]]
    , ["*\\!*", ["echo !7"], null, ["echo !7"]]
    , ["*.\\*", ["r.*"], null, ["r.*"]]
    , ["a[b]c", ["abc"]]
    , ["a[\\b]c", ["abc"]]
    , ["a?c", ["abc"]]
    , ["a\\*c", [], {null: true}, ["abc"]]
    , ["", [""], { null: true }, [""]]

    ].forEach(function (c) {
      if (typeof c === "function") return c()

      var pattern = c[0]
        , expect = c[1].sort(alpha)
        , options = c[2] || {}
        , f = c[3] || files

      // options.debug = true
      var actual = mm.match(f, pattern, options).sort(alpha)

      t.equivalent( actual, expect
                  , JSON.stringify(pattern) + " " + JSON.stringify(expect)
                  , c[4] )
    })
  t.end()
})

function alpha (a, b) {
  return a > b ? 1 : -1
}
