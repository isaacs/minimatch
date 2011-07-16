// This is a JavaScript implementation of the fnmatch-like
// stuff that git uses in its .gitignore files.
// See `man 5 gitignore`.

module.exports = minimatch

var path = require("path")
  , LRU = require("lru-cache")

minimatch.filter = function (pattern, options) {
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

minimatch.match = function (list, pattern, options) {
  var ret = list.filter(minimatch.filter(pattern, options))

  // set the null flag to allow empty match sets
  // Note that minimatch itself, and filter(), do not
  // respect this flag, only minimatch.match(list, pattern) does.
  if (!options.null && !ret.length) {
    return [pattern]
  }

  return ret
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== "string") {
    throw new TypeError("glob pattern string required")
  }

  if (!options) options = {}

  // to set the cache, just replace with a different obj
  // supporting set(k,v) and v=get(k) methods.
  var cache = options.cache || minimatch.cache
  if (!cache) cache = minimatch.cache = new LRU(1000)

  // "" only matches ""
  if (!pattern) return p === ""

  // comments.
  if (pattern.trim().charAt(0) === "#") return false

  // check the cache
  var re = cache.get(pattern)
  if (!re && re !== false) {
    cache.set(pattern, re = minimatch.makeRe(pattern, options))
  }

  if (options.debug) {
    console.error(pattern + "\t" + re, JSON.stringify(p))
  }

  // some kind of invalid thing
  if (!re) return false


  // patterns that end in / can only match dirs
  // however, dirs also match the same thing that *doesn't*
  // end in a slash.
  var match =
    // a/ should not match a/*, but will match */
    // accomplish this by not applying the regexp
    // directly, unless the pattern would match
    // trailing slash'ed things, or the thing isn't
    // a trailing slash, or slashes are opted-in
    ( ( options.slash ||
        p.substr(-1) !== "/" ||
        pattern.substr(-1) === "/" )
      && !!p.match(re) )

    // a/ should match * or a
    || ( p.substr(-1) === "/" &&
         !!p.slice(0, -1).match(re) )

    // a pattern with *no* slashes will match against
    // either the full path, or just the basename.
    || ( options.matchBase &&
         pattern.indexOf("/") === -1 &&
         path.basename(p).match(re) )

  //console.error("  MINIMATCH: %j %j %j %j",
  //            re.toString(), pattern, p, match)
  return match
}

minimatch.makeRe = makeRe
function makeRe (pattern, options) {
  options = options || {}

  var braceDepth = 0
    , re = ""
    , escaping = false
    , oneStar = "[^\\/]*?"
    , twoStar = ".*?"
    , reSpecials = "().*{}+?[]^$/\\"
    , patternListStack = []
    , stateChar
    , negate = false
    , negating = false
    , inClass = 0

  for ( var i = 0, len = pattern.length, c
      ; (i < len) && (c = pattern.charAt(i))
      ; i ++ ) {

    if (options.debug) {
      console.error("%s\t%s %s %j", pattern, i, re, c)
    }

    switch (c) {
      case "\\":
        if (stateChar) {
          if (stateChar === "*") re += oneStar
          else re += "\\" + stateChar
          stateChar = false
        }
        if (escaping) {
          re += "\\\\" // must match literal \
          escaping = false
        } else {
          escaping = true
        }
        continue

      case "!":
        if (i === 0 || negating) {
          negate = !negate
          negating = true
          break
        } else {
          negating = false
        }
        // fallthrough
      case "+":
      case "@":
      case "*":
      case "?":
       if (options.debug) {
         console.error("%s\t%s %s %j <-- stateChar", pattern, i, re, c)
       }

        negating = false
        if (escaping) {
          re += "\\" + c
          escaping = false
        } else if (c === "*" && stateChar === "*") { // **
          re += twoStar
          stateChar = false
        } else {
          if (stateChar) {
            if (stateChar === "*") re += oneStar
            else re += "\\" + stateChar
          }
          stateChar = c
        }
        continue

      case "(":
        if (escaping) {
          re += "\\("
          escaping = false
        } else if (stateChar) {
          plType = stateChar
          patternListStack.push(plType)
          re += stateChar === "!" ? "(?!" : "(?:"
          stateChar = false
        } else {
          re += "\\("
        }
        continue

      case ")":
        if (escaping) {
          re += "\\)"
          escaping = false
        } else if (patternListStack.length) {
          re += ")"
          plType = patternListStack.pop()
          switch (plType) {
            case "?":
            case "+":
            case "*": re += plType
            case "!":
            case "@": break
          }
        } else {
          re += "\\)"
        }
        continue

      case "|":
        if (escaping) {
          re += "\\|"
          escaping = false
        } else if (patternListStack.length) {
          re += "|"
        } else {
          re += "\\|"
        }
        continue

      // turns out these are the same in regexp and glob :)
      case "[":
        inClass = 2
        // fallthrough, sorry
      case "]":
        inClass --
        // That was like a bad pun.

        if (stateChar) {
          // some state-tracking char was before the [ or ]
          if (inClass && stateChar === "*") {
            re += oneStar
          } else {
            re += stateChar
          }
          stateChar = false
        }

        if (escaping) {
          re += "\\" + c
          escaping = false
        } else {
          re += c
        }
        continue

      case "{":
        if (escaping) {
          re += "\\{"
          escaping = false
        } else {
          re += "(?:"
          braceDepth ++
        }
        continue

      case "}":
        if (escaping || braceDepth === 0) {
          re += "\\}"
          escaping = false
        } else {
          re += ")"
          braceDepth --
        }
        continue

      case ",":
        if (escaping || braceDepth === 0) {
          re += ","
          escaping = false
        } else {
          re += "|"
        }
        continue

      default:
        if (stateChar) {
          // we had some state-tracking character
          // that wasn't consumed by this pass.
          switch (stateChar) {
            case "*":
              re += oneStar
              break
            case "?":
              re += "."
              break
            default:
              re += "\\"+stateChar
              break
          }
          stateChar = false
        }

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials.indexOf(c) !== -1
                   && !(c === "^" && inClass)) {
          re += "\\"
        }

        re += c

    } // switch

    if (negating && c !== "!") negating = false

  } // for

  // handle trailing things that only matter at the very end.
  if (stateChar) {
    // we had some state-tracking character
    // that wasn't consumed by this pass.
    switch (stateChar) {
      case "*":
        re += oneStar
        break
      case "?":
        re += "."
        break
      default:
        re += "\\"+stateChar
        break
    }
    stateChar = false
  } else if (escaping) {
    re += "\\\\"
  }

  // don't match "." files unless pattern starts with "."
  if (!options.dot && pattern.charAt(0) !== ".") {
    re = "(?!\\.)" + re
  }

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = "^" + re + "$"

  // fail on the pattern, but allow anything otherwise.
  if (negate) re = "^(?!" + re + ").*$"

  // really insane glob patterns can cause bad things.
  try {
    return new RegExp(re)
  } catch(ex) {
    return false
  }
}

if (require.main === module) {
  var tests = ["{a,b{c,d}}"
              ,"a.*$?"
              ,"\\{a,b{c,d}}"
              ,"a/{c/,}d/{e/,f/{g,h,i}/}k"
              ,"!*.bak"
              ,"!!*.bak"
              ,"!!!*.bak"
              ,"\\a\\b\\c\\d"
              ]
  tests.forEach(function (t) {
    console.log([t,makeRe(t)])
  })
}


