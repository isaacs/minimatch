var tap = require("tap")
var minimatch = require("../")
var Minimatch = minimatch.Minimatch

tap.test("consecutive stars are coalesced", function (t) {
  var re1 = new Minimatch("a*b").makeRe()
  var re3 = new Minimatch("a***b").makeRe()
  t.equal(re3.toString(), re1.toString(), "a***b same regex as a*b")
  t.end()
})

tap.test("100+ consecutive stars do not cause ReDoS", function (t) {
  var stars = new Array(101).join("*")
  var pattern = "a" + stars + "b"
  var start = Date.now()
  var mm = new Minimatch(pattern)
  var re = mm.makeRe()
  re.test("a" + new Array(26).join("c"))
  var elapsed = Date.now() - start
  t.ok(elapsed < 1000, "completed in " + elapsed + "ms (< 1s)")
  t.end()
})
