// This is a JavaScript implementation of the fnmatch-like
// stuff that git uses in its .gitignore files.
// See `man 5 gitignore`.

module.exports = minimatch

var path = require("path")
  , LRU = require("lru-cache")

minimatch.filter = function (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

minimatch.match = function (list, pattern, options) {
  if (!options) options = {}
  var ret = list.filter(minimatch.filter(pattern, options))
  if (options.debug) console.error("\nmatch: %s %j %j", pattern, list, ret)

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

  options = options || {}

  // to set the cache, just replace with a different obj
  // supporting set(k,v) and v=get(k) methods.
  var cache = options.cache || minimatch.cache
  if (!cache) cache = minimatch.cache = new LRU(1000)

  // "" only matches ""
  if (!pattern) return p === ""

  // comments.
  if (pattern.trim().charAt(0) === "#") return false

  // check the cache
  var re = cache.get(pattern + "\n" + JSON.stringify(options))
  if (!re && re !== false) {
    cache.set(pattern, re = makeRe(pattern, options))
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

// need to expand braces first.
// then, turn each piece into a pattern, and join
// together.
// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c

minimatch.braceExpand = braceExpand
function braceExpand (pattern) {
  // console.error("braceExpand", pattern)
  if (!pattern.match(/\{/) || !pattern.match(/\}/)) {
    // shortcut. definitely no sets.
    return [pattern]
  }

  var escaping = false

  // examples and comments refer to this crazy pattern:
  // a{b,c{d,e},{f,g}h}x{y,z}
  // expected:
  // abxy
  // abxz
  // acdxy
  // acdxz
  // acexy
  // acexz
  // afhxy
  // afhxz
  // aghxy
  // aghxz

  // everything before the first { is just a prefix.
  // So, we pluck that off, and work with the rest,
  // and then prepend it to everything we find.
  if (pattern.charAt(0) !== "{") {
    // console.error(pattern)
    var prefix = null
    for (var i = 0, l = pattern.length; i < l; i ++) {
      var c = pattern.charAt(i)
      // console.error(i, c)
      if (c === "\\") {
        escaping = !escaping
      } else if (c === "{" && !escaping) {
        prefix = pattern.substr(0, i)
        break
      }
    }

    // actually no sets, all { were escaped.
    if (prefix === null) {
      // console.error("no sets")
      return [pattern]
    }

    var tail = braceExpand(pattern.substr(i))
    return tail.map(function (t) {
      return prefix + t
    })
  }

  // now we have something like:
  // {b,c{d,e},{f,g}h}x{y,z}
  // walk through the set, expanding each part, until
  // the set ends.  then, we'll expand the suffix.
  // If the set only has a single member, then'll put the {} back

  // first, handle numeric sets, since they're easier
  var numset = pattern.match(/^\{(-?[0-9]+)\.\.(-?[0-9]+)\}/)
  if (numset) {
    // console.error("numset", numset[1], numset[2])
    var suf = braceExpand(pattern.substr(numset[0].length))
      , start = +numset[1]
      , end = +numset[2]
      , inc = start > end ? -1 : 1
      , set = []
    for (var i = start; i != (end + inc); i += inc) {
      // append all the suffixes
      for (var ii = 0, ll = suf.length; ii < ll; ii ++) {
        set.push(i + suf[ii])
      }
    }
    return set
  }

  // ok, walk through the set
  // We hope, somewhat optimistically, that there
  // will be a } at the end.
  // If the closing brace isn't found, then the pattern is
  // interpreted as braceExpand("\\" + pattern) so that
  // the leading { will be interpreted literally.
  var i = 1 // skip the {
    , depth = 1
    , set = []
    , member = ""
    , sawEnd = false
    , escaping = false

  function addMember () {
    set.push(member)
    member = ""
  }

  // console.error("Entering for")
  FOR: for (i = 1, l = pattern.length; i < l; i ++) {
    var c = pattern.charAt(i)
    // console.error("", i, c)

    if (escaping) {
      escaping = false
      member += "\\" + c
    } else {
      switch (c) {
        case "\\":
          escaping = true
          continue

        case "{":
          depth ++
          member += "{"
          continue

        case "}":
          depth --
          // if this closes the actual set, then we're done
          if (depth === 0) {
            addMember()
            // pluck off the close-brace
            i ++
            break FOR
          } else {
            member += c
            continue
          }

        case ",":
          if (depth === 1) {
            addMember()
          } else {
            member += c
          }
          continue

        default:
          member += c
          continue
      } // switch
    } // else
  } // for

  // now we've either finished the set, and the suffix is
  // pattern.substr(i), or we have *not* closed the set,
  // and need to escape the leading brace
  if (depth !== 0) {
    // console.error("didn't close", pattern)
    return braceExpand("\\" + pattern)
  }

  // x{y,z} -> ["xy", "xz"]
  // console.error("set", set)
  // console.error("suffix", pattern.substr(i))
  var suf = braceExpand(pattern.substr(i))
  // ["b", "c{d,e}","{f,g}h"] ->
  //   [["b"], ["cd", "ce"], ["fh", "gh"]]
  var addBraces = set.length === 1
  // console.error("set pre-expanded", set)
  set = set.map(braceExpand)
  // console.error("set expanded", set)


  // [["b"], ["cd", "ce"], ["fh", "gh"]] ->
  //   ["b", "cd", "ce", "fh", "gh"]
  set = set.reduce(function (l, r) {
    return l.concat(r)
  })

  if (addBraces) {
    set = set.map(function (s) {
      return "{" + s + "}"
    })
  }

  // now attach the suffixes.
  var ret = []
  for (var i = 0, l = set.length; i < l; i ++) {
    for (var ii = 0, ll = suf.length; ii < ll; ii ++) {
      ret.push(set[i] + suf[ii])
    }
  }
  return ret
}


minimatch.makeRe = makeRe
function makeRe (pattern, options) {
  options = options || {}
  if (options.nobrace) return makeRe2(pattern, options)

  return braceExpand(pattern).map(function (p) {
    return makeRe2(p, options)
  }).join("|")
}


function makeRe2 (pattern, options) {
  options = options || {}

  function clearStateChar () {
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
  }

  var re = ""
    , escaping = false
    , oneStar = options.dot ? "[^\\/]*?"
      : "(?:(?!(?:\\\/|^)\\.)[^\\/])*?"
    , twoStar = options.dot ? ".*?"
      // not a ^ or / followed by a dot,
      // followed by anything, any number of times.
      : "(?:(?!(?:\\\/|^)\\.).)*?"
    , reSpecials = "().*{}+?[]^$/\\"
    , patternListStack = []
    , plType
    , stateChar
    , negate = false
    , negating = false
    , inClass = false
    , reClassStart = -1
    , classStart = -1
    , classStartPattern = options.dot ? ""
      : "(?:(?!(?:\\\/|^)\\.)"
    , classEndPattern = options.dot ? "" : ")"

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

      // the various stateChar values
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
        } else if (inClass) {
          re += c
        } else if (c === "*" && stateChar === "*") { // **
          re += twoStar
          stateChar = false
        } else {
          if (stateChar) {
            if (stateChar === "*") re += oneStar
            else if (stateChar === "?") re += "."
            else re += "\\" + stateChar
          }
          stateChar = c
        }
        continue

      case "(":
        if (escaping) {
          re += "\\("
          escaping = false
        } else if (inClass) {
          re += "("
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
        if (escaping || inClass) {
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
        if (escaping || inClass) {
          re += "\\|"
          escaping = false
        } else if (patternListStack.length) {
          re += "|"
        } else {
          re += "\\|"
        }
        continue

      // these are mostly the same in regexp and glob :)
      case "[":
        // swallow any state-tracking char before the [
        clearStateChar()

        if (escaping || inClass) {
          re += "\\" + c
          escaping = false
        } else {
          inClass = true
          classStart = i
          reClassStart = re.length
          re += classStartPattern
          re += c
        }
        continue

      case "]":
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1) escaping = true

        if (escaping || !inClass) {
          re += "\\" + c
          escaping = false
        } else {
          inClass = false
          re += c + classEndPattern
        }
        continue

      case "/":
        if (patternListStack.length && !escaping && !inClass) {
          return false
        }

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

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
    clearStateChar()
  } else if (escaping) {
    re += "\\\\"
  }

  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    var cs = re.substr(reClassStart + classStartPattern.length + 1)
      , csOpts = Object.create(options)
    csOpts.partial = true

    re = re.substr(0, reClassStart) + "\\["
       + makeRe(cs, csOpts)
  }

  if (options.partial) return re

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = "^" + re + "$"

  // fail on the pattern, but allow anything otherwise.
  if (negate) re = "^(?!" + re + ").*$"

  // really insane glob patterns can cause bad things.
  var flags = ""
  if (options.nocase) flags += "i"

  if (options.debug) {
    console.error("/%s/%s", re, flags)
  }

  try {
    return new RegExp(re, flags)
  } catch (ex) {
    return false
  }
}
