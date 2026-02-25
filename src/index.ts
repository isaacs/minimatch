import { expand } from 'brace-expansion'
import { assertValidPattern } from './assert-valid-pattern.js'
import { AST, ExtglobType } from './ast.js'
import { escape } from './escape.js'
import { unescape } from './unescape.js'

type Platform =
  | 'aix'
  | 'android'
  | 'darwin'
  | 'freebsd'
  | 'haiku'
  | 'linux'
  | 'openbsd'
  | 'sunos'
  | 'win32'
  | 'cygwin'
  | 'netbsd'

export interface MinimatchOptions {
  nobrace?: boolean
  nocomment?: boolean
  nonegate?: boolean
  debug?: boolean
  noglobstar?: boolean
  noext?: boolean
  nonull?: boolean
  windowsPathsNoEscape?: boolean
  allowWindowsEscape?: boolean
  partial?: boolean
  dot?: boolean
  nocase?: boolean
  nocaseMagicOnly?: boolean
  magicalBraces?: boolean
  matchBase?: boolean
  flipNegate?: boolean
  preserveMultipleSlashes?: boolean
  optimizationLevel?: number
  platform?: Platform
  windowsNoMagicRoot?: boolean
  maxGlobstarRecursion?: number
  maxExtglobRecursion?: number
}

export const minimatch = (
  p: string,
  pattern: string,
  options: MinimatchOptions = {}
) => {
  assertValidPattern(pattern)

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  return new Minimatch(pattern, options).match(p)
}

// Optimized checking for the most common glob patterns.
const starDotExtRE = /^\*+([^+@!?\*\[\(]*)$/
const starDotExtTest = (ext: string) => (f: string) =>
  !f.startsWith('.') && f.endsWith(ext)
const starDotExtTestDot = (ext: string) => (f: string) => f.endsWith(ext)
const starDotExtTestNocase = (ext: string) => {
  ext = ext.toLowerCase()
  return (f: string) => !f.startsWith('.') && f.toLowerCase().endsWith(ext)
}
const starDotExtTestNocaseDot = (ext: string) => {
  ext = ext.toLowerCase()
  return (f: string) => f.toLowerCase().endsWith(ext)
}
const starDotStarRE = /^\*+\.\*+$/
const starDotStarTest = (f: string) => !f.startsWith('.') && f.includes('.')
const starDotStarTestDot = (f: string) =>
  f !== '.' && f !== '..' && f.includes('.')
const dotStarRE = /^\.\*+$/
const dotStarTest = (f: string) => f !== '.' && f !== '..' && f.startsWith('.')
const starRE = /^\*+$/
const starTest = (f: string) => f.length !== 0 && !f.startsWith('.')
const starTestDot = (f: string) => f.length !== 0 && f !== '.' && f !== '..'
const qmarksRE = /^\?+([^+@!?\*\[\(]*)?$/
const qmarksTestNocase = ([$0, ext = '']: RegExpMatchArray) => {
  const noext = qmarksTestNoExt([$0])
  if (!ext) return noext
  ext = ext.toLowerCase()
  return (f: string) => noext(f) && f.toLowerCase().endsWith(ext)
}
const qmarksTestNocaseDot = ([$0, ext = '']: RegExpMatchArray) => {
  const noext = qmarksTestNoExtDot([$0])
  if (!ext) return noext
  ext = ext.toLowerCase()
  return (f: string) => noext(f) && f.toLowerCase().endsWith(ext)
}
const qmarksTestDot = ([$0, ext = '']: RegExpMatchArray) => {
  const noext = qmarksTestNoExtDot([$0])
  return !ext ? noext : (f: string) => noext(f) && f.endsWith(ext)
}
const qmarksTest = ([$0, ext = '']: RegExpMatchArray) => {
  const noext = qmarksTestNoExt([$0])
  return !ext ? noext : (f: string) => noext(f) && f.endsWith(ext)
}
const qmarksTestNoExt = ([$0]: RegExpMatchArray) => {
  const len = $0.length
  return (f: string) => f.length === len && !f.startsWith('.')
}
const qmarksTestNoExtDot = ([$0]: RegExpMatchArray) => {
  const len = $0.length
  return (f: string) => f.length === len && f !== '.' && f !== '..'
}

/* c8 ignore start */
const defaultPlatform: Platform = (
  typeof process === 'object' && process
    ? (typeof process.env === 'object' &&
        process.env &&
        process.env.__MINIMATCH_TESTING_PLATFORM__) ||
      process.platform
    : 'posix'
) as Platform
type Sep = '\\' | '/'
const path: { [k: string]: { sep: Sep } } = {
  win32: { sep: '\\' },
  posix: { sep: '/' },
}
/* c8 ignore stop */

export const sep = defaultPlatform === 'win32' ? path.win32.sep : path.posix.sep
minimatch.sep = sep

export const GLOBSTAR = Symbol('globstar **')
minimatch.GLOBSTAR = GLOBSTAR

// any single thing other than /
// don't need to escape / when using new RegExp()
const qmark = '[^/]'

// * => any number of characters
const star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
const twoStarDot = '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
const twoStarNoDot = '(?:(?!(?:\\/|^)\\.).)*?'

export const filter =
  (pattern: string, options: MinimatchOptions = {}) =>
  (p: string) =>
    minimatch(p, pattern, options)
minimatch.filter = filter

const ext = (a: MinimatchOptions, b: MinimatchOptions = {}) =>
  Object.assign({}, a, b)

export const defaults = (def: MinimatchOptions): typeof minimatch => {
  if (!def || typeof def !== 'object' || !Object.keys(def).length) {
    return minimatch
  }

  const orig = minimatch

  const m = (p: string, pattern: string, options: MinimatchOptions = {}) =>
    orig(p, pattern, ext(def, options))

  return Object.assign(m, {
    Minimatch: class Minimatch extends orig.Minimatch {
      constructor(pattern: string, options: MinimatchOptions = {}) {
        super(pattern, ext(def, options))
      }
      static defaults(options: MinimatchOptions) {
        return orig.defaults(ext(def, options)).Minimatch
      }
    },

    AST: class AST extends orig.AST {
      /* c8 ignore start */
      constructor(
        type: ExtglobType | null,
        parent?: AST,
        options: MinimatchOptions = {}
      ) {
        super(type, parent, ext(def, options))
      }
      /* c8 ignore stop */

      static fromGlob(pattern: string, options: MinimatchOptions = {}) {
        return orig.AST.fromGlob(pattern, ext(def, options))
      }
    },

    unescape: (
      s: string,
      options: Pick<MinimatchOptions, 'windowsPathsNoEscape'> = {}
    ) => orig.unescape(s, ext(def, options)),

    escape: (
      s: string,
      options: Pick<MinimatchOptions, 'windowsPathsNoEscape'> = {}
    ) => orig.escape(s, ext(def, options)),

    filter: (pattern: string, options: MinimatchOptions = {}) =>
      orig.filter(pattern, ext(def, options)),

    defaults: (options: MinimatchOptions) => orig.defaults(ext(def, options)),

    makeRe: (pattern: string, options: MinimatchOptions = {}) =>
      orig.makeRe(pattern, ext(def, options)),

    braceExpand: (pattern: string, options: MinimatchOptions = {}) =>
      orig.braceExpand(pattern, ext(def, options)),

    match: (list: string[], pattern: string, options: MinimatchOptions = {}) =>
      orig.match(list, pattern, ext(def, options)),

    sep: orig.sep,
    GLOBSTAR: GLOBSTAR as typeof GLOBSTAR,
  })
}
minimatch.defaults = defaults

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
export const braceExpand = (
  pattern: string,
  options: MinimatchOptions = {}
) => {
  assertValidPattern(pattern)

  // Thanks to Yeting Li <https://github.com/yetingli> for
  // improving this regexp to avoid a ReDOS vulnerability.
  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}
minimatch.braceExpand = braceExpand

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.

export const makeRe = (pattern: string, options: MinimatchOptions = {}) =>
  new Minimatch(pattern, options).makeRe()
minimatch.makeRe = makeRe

export const match = (
  list: string[],
  pattern: string,
  options: MinimatchOptions = {}
) => {
  const mm = new Minimatch(pattern, options)
  list = list.filter(f => mm.match(f))
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}
minimatch.match = match

// replace stuff like \* with *
const globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/
const regExpEscape = (s: string) =>
  s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')

export type MMRegExp = RegExp & {
  _src?: string
  _glob?: string
}

export type ParseReturnFiltered = string | MMRegExp | typeof GLOBSTAR
export type ParseReturn = ParseReturnFiltered | false

export class Minimatch {
  options: MinimatchOptions
  set: ParseReturnFiltered[][]
  pattern: string

  windowsPathsNoEscape: boolean
  nonegate: boolean
  negate: boolean
  comment: boolean
  empty: boolean
  preserveMultipleSlashes: boolean
  partial: boolean
  globSet: string[]
  globParts: string[][]
  nocase: boolean

  isWindows: boolean
  platform: Platform
  windowsNoMagicRoot: boolean
  maxGlobstarRecursion: number

  regexp: false | null | MMRegExp
  constructor(pattern: string, options: MinimatchOptions = {}) {
    assertValidPattern(pattern)

    options = options || {}
    this.options = options
    this.maxGlobstarRecursion = options.maxGlobstarRecursion ?? 200
    this.pattern = pattern
    this.platform = options.platform || defaultPlatform
    this.isWindows = this.platform === 'win32'
    this.windowsPathsNoEscape =
      !!options.windowsPathsNoEscape || options.allowWindowsEscape === false
    if (this.windowsPathsNoEscape) {
      this.pattern = this.pattern.replace(/\\/g, '/')
    }
    this.preserveMultipleSlashes = !!options.preserveMultipleSlashes
    this.regexp = null
    this.negate = false
    this.nonegate = !!options.nonegate
    this.comment = false
    this.empty = false
    this.partial = !!options.partial
    this.nocase = !!this.options.nocase
    this.windowsNoMagicRoot =
      options.windowsNoMagicRoot !== undefined
        ? options.windowsNoMagicRoot
        : !!(this.isWindows && this.nocase)

    this.globSet = []
    this.globParts = []
    this.set = []

    // make the set of regexps etc.
    this.make()
  }

  hasMagic(): boolean {
    if (this.options.magicalBraces && this.set.length > 1) {
      return true
    }
    for (const pattern of this.set) {
      for (const part of pattern) {
        if (typeof part !== 'string') return true
      }
    }
    return false
  }

  debug(..._: any[]) {}

  make() {
    const pattern = this.pattern
    const options = this.options

    // empty patterns and comments match nothing.
    if (!options.nocomment && pattern.charAt(0) === '#') {
      this.comment = true
      return
    }

    if (!pattern) {
      this.empty = true
      return
    }

    // step 1: figure out negation, etc.
    this.parseNegate()

    // step 2: expand braces
    this.globSet = [...new Set<string>(this.braceExpand())]

    if (options.debug) {
      this.debug = (...args: any[]) => console.error(...args)
    }

    this.debug(this.pattern, this.globSet)

    // step 3: now we have a set, so turn each one into a series of
    // path-portion matching patterns.
    // These will be regexps, except in the case of "**", which is
    // set to the GLOBSTAR object for globstar behavior,
    // and will not contain any / characters
    //
    // First, we preprocess to make the glob pattern sets a bit simpler
    // and deduped.  There are some perf-killing patterns that can cause
    // problems with a glob walk, but we can simplify them down a bit.
    const rawGlobParts = this.globSet.map(s => this.slashSplit(s))
    this.globParts = this.preprocess(rawGlobParts)
    this.debug(this.pattern, this.globParts)

    // glob --> regexps
    let set = this.globParts.map((s, _, __) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        // check if it's a drive or unc path.
        const isUNC =
          s[0] === '' &&
          s[1] === '' &&
          (s[2] === '?' || !globMagic.test(s[2])) &&
          !globMagic.test(s[3])
        const isDrive = /^[a-z]:/i.test(s[0])
        if (isUNC) {
          return [...s.slice(0, 4), ...s.slice(4).map(ss => this.parse(ss))]
        } else if (isDrive) {
          return [s[0], ...s.slice(1).map(ss => this.parse(ss))]
        }
      }
      return s.map(ss => this.parse(ss))
    })

    this.debug(this.pattern, set)

    // filter out everything that didn't compile properly.
    this.set = set.filter(
      s => s.indexOf(false) === -1
    ) as ParseReturnFiltered[][]

    // do not treat the ? in UNC paths as magic
    if (this.isWindows) {
      for (let i = 0; i < this.set.length; i++) {
        const p = this.set[i]
        if (
          p[0] === '' &&
          p[1] === '' &&
          this.globParts[i][2] === '?' &&
          typeof p[3] === 'string' &&
          /^[a-z]:$/i.test(p[3])
        ) {
          p[2] = '?'
        }
      }
    }

    this.debug(this.pattern, this.set)
  }

  // various transforms to equivalent pattern sets that are
  // faster to process in a filesystem walk.  The goal is to
  // eliminate what we can, and push all ** patterns as far
  // to the right as possible, even if it increases the number
  // of patterns that we have to process.
  preprocess(globParts: string[][]) {
    // if we're not in globstar mode, then turn all ** into *
    if (this.options.noglobstar) {
      for (let i = 0; i < globParts.length; i++) {
        for (let j = 0; j < globParts[i].length; j++) {
          if (globParts[i][j] === '**') {
            globParts[i][j] = '*'
          }
        }
      }
    }

    const { optimizationLevel = 1 } = this.options

    if (optimizationLevel >= 2) {
      // aggressive optimization for the purpose of fs walking
      globParts = this.firstPhasePreProcess(globParts)
      globParts = this.secondPhasePreProcess(globParts)
    } else if (optimizationLevel >= 1) {
      // just basic optimizations to remove some .. parts
      globParts = this.levelOneOptimize(globParts)
    } else {
      // just collapse multiple ** portions into one
      globParts = this.adjascentGlobstarOptimize(globParts)
    }

    return globParts
  }

  // just get rid of adjascent ** portions
  adjascentGlobstarOptimize(globParts: string[][]) {
    return globParts.map(parts => {
      let gs: number = -1
      while (-1 !== (gs = parts.indexOf('**', gs + 1))) {
        let i = gs
        while (parts[i + 1] === '**') {
          i++
        }
        if (i !== gs) {
          parts.splice(gs, i - gs)
        }
      }
      return parts
    })
  }

  // get rid of adjascent ** and resolve .. portions
  levelOneOptimize(globParts: string[][]) {
    return globParts.map(parts => {
      parts = parts.reduce((set: string[], part) => {
        const prev = set[set.length - 1]
        if (part === '**' && prev === '**') {
          return set
        }
        if (part === '..') {
          if (prev && prev !== '..' && prev !== '.' && prev !== '**') {
            set.pop()
            return set
          }
        }
        set.push(part)
        return set
      }, [])
      return parts.length === 0 ? [''] : parts
    })
  }

  levelTwoFileOptimize(parts: string | string[]) {
    if (!Array.isArray(parts)) {
      parts = this.slashSplit(parts)
    }
    let didSomething: boolean = false
    do {
      didSomething = false
      // <pre>/<e>/<rest> -> <pre>/<rest>
      if (!this.preserveMultipleSlashes) {
        for (let i = 1; i < parts.length - 1; i++) {
          const p = parts[i]
          // don't squeeze out UNC patterns
          if (i === 1 && p === '' && parts[0] === '') continue
          if (p === '.' || p === '') {
            didSomething = true
            parts.splice(i, 1)
            i--
          }
        }
        if (
          parts[0] === '.' &&
          parts.length === 2 &&
          (parts[1] === '.' || parts[1] === '')
        ) {
          didSomething = true
          parts.pop()
        }
      }

      // <pre>/<p>/../<rest> -> <pre>/<rest>
      let dd: number = 0
      while (-1 !== (dd = parts.indexOf('..', dd + 1))) {
        const p = parts[dd - 1]
        if (p && p !== '.' && p !== '..' && p !== '**') {
          didSomething = true
          parts.splice(dd - 1, 2)
          dd -= 2
        }
      }
    } while (didSomething)
    return parts.length === 0 ? [''] : parts
  }

  // First phase: single-pattern processing
  // <pre> is 1 or more portions
  // <rest> is 1 or more portions
  // <p> is any portion other than ., .., '', or **
  // <e> is . or ''
  //
  // **/.. is *brutal* for filesystem walking performance, because
  // it effectively resets the recursive walk each time it occurs,
  // and ** cannot be reduced out by a .. pattern part like a regexp
  // or most strings (other than .., ., and '') can be.
  //
  // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
  // <pre>/<e>/<rest> -> <pre>/<rest>
  // <pre>/<p>/../<rest> -> <pre>/<rest>
  // **/**/<rest> -> **/<rest>
  //
  // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
  // this WOULD be allowed if ** did follow symlinks, or * didn't
  firstPhasePreProcess(globParts: string[][]) {
    let didSomething = false
    do {
      didSomething = false
      // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
      for (let parts of globParts) {
        let gs: number = -1
        while (-1 !== (gs = parts.indexOf('**', gs + 1))) {
          let gss: number = gs
          while (parts[gss + 1] === '**') {
            // <pre>/**/**/<rest> -> <pre>/**/<rest>
            gss++
          }
          // eg, if gs is 2 and gss is 4, that means we have 3 **
          // parts, and can remove 2 of them.
          if (gss > gs) {
            parts.splice(gs + 1, gss - gs)
          }

          let next = parts[gs + 1]
          const p = parts[gs + 2]
          const p2 = parts[gs + 3]
          if (next !== '..') continue
          if (
            !p ||
            p === '.' ||
            p === '..' ||
            !p2 ||
            p2 === '.' ||
            p2 === '..'
          ) {
            continue
          }
          didSomething = true
          // edit parts in place, and push the new one
          parts.splice(gs, 1)
          const other = parts.slice(0)
          other[gs] = '**'
          globParts.push(other)
          gs--
        }

        // <pre>/<e>/<rest> -> <pre>/<rest>
        if (!this.preserveMultipleSlashes) {
          for (let i = 1; i < parts.length - 1; i++) {
            const p = parts[i]
            // don't squeeze out UNC patterns
            if (i === 1 && p === '' && parts[0] === '') continue
            if (p === '.' || p === '') {
              didSomething = true
              parts.splice(i, 1)
              i--
            }
          }
          if (
            parts[0] === '.' &&
            parts.length === 2 &&
            (parts[1] === '.' || parts[1] === '')
          ) {
            didSomething = true
            parts.pop()
          }
        }

        // <pre>/<p>/../<rest> -> <pre>/<rest>
        let dd: number = 0
        while (-1 !== (dd = parts.indexOf('..', dd + 1))) {
          const p = parts[dd - 1]
          if (p && p !== '.' && p !== '..' && p !== '**') {
            didSomething = true
            const needDot = dd === 1 && parts[dd + 1] === '**'
            const splin = needDot ? ['.'] : []
            parts.splice(dd - 1, 2, ...splin)
            if (parts.length === 0) parts.push('')
            dd -= 2
          }
        }
      }
    } while (didSomething)

    return globParts
  }

  // second phase: multi-pattern dedupes
  // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
  // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
  // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
  //
  // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
  // ^-- not valid because ** doens't follow symlinks
  secondPhasePreProcess(globParts: string[][]): string[][] {
    for (let i = 0; i < globParts.length - 1; i++) {
      for (let j = i + 1; j < globParts.length; j++) {
        const matched = this.partsMatch(
          globParts[i],
          globParts[j],
          !this.preserveMultipleSlashes
        )
        if (matched) {
          globParts[i] = []
          globParts[j] = matched
          break
        }
      }
    }
    return globParts.filter(gs => gs.length)
  }

  partsMatch(
    a: string[],
    b: string[],
    emptyGSMatch: boolean = false
  ): false | string[] {
    let ai = 0
    let bi = 0
    let result: string[] = []
    let which: string = ''
    while (ai < a.length && bi < b.length) {
      if (a[ai] === b[bi]) {
        result.push(which === 'b' ? b[bi] : a[ai])
        ai++
        bi++
      } else if (emptyGSMatch && a[ai] === '**' && b[bi] === a[ai + 1]) {
        result.push(a[ai])
        ai++
      } else if (emptyGSMatch && b[bi] === '**' && a[ai] === b[bi + 1]) {
        result.push(b[bi])
        bi++
      } else if (
        a[ai] === '*' &&
        b[bi] &&
        (this.options.dot || !b[bi].startsWith('.')) &&
        b[bi] !== '**'
      ) {
        if (which === 'b') return false
        which = 'a'
        result.push(a[ai])
        ai++
        bi++
      } else if (
        b[bi] === '*' &&
        a[ai] &&
        (this.options.dot || !a[ai].startsWith('.')) &&
        a[ai] !== '**'
      ) {
        if (which === 'a') return false
        which = 'b'
        result.push(b[bi])
        ai++
        bi++
      } else {
        return false
      }
    }
    // if we fall out of the loop, it means they two are identical
    // as long as their lengths match
    return a.length === b.length && result
  }

  parseNegate() {
    if (this.nonegate) return

    const pattern = this.pattern
    let negate = false
    let negateOffset = 0

    for (let i = 0; i < pattern.length && pattern.charAt(i) === '!'; i++) {
      negate = !negate
      negateOffset++
    }

    if (negateOffset) this.pattern = pattern.slice(negateOffset)
    this.negate = negate
  }

  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(
    file: string[],
    pattern: ParseReturn[],
    partial: boolean = false
  ) {
    let fileStartIndex = 0
    let patternStartIndex = 0

    // UNC paths like //?/X:/... can match X:/... and vice versa
    // Drive letters in absolute drive or unc paths are always compared
    // case-insensitively.
    if (this.isWindows) {
      const fileDrive =
        typeof file[0] === 'string' && /^[a-z]:$/i.test(file[0])
      const fileUNC =
        !fileDrive &&
        file[0] === '' &&
        file[1] === '' &&
        file[2] === '?' &&
        /^[a-z]:$/i.test(file[3])

      const patternDrive =
        typeof pattern[0] === 'string' && /^[a-z]:$/i.test(pattern[0])
      const patternUNC =
        !patternDrive &&
        pattern[0] === '' &&
        pattern[1] === '' &&
        pattern[2] === '?' &&
        typeof pattern[3] === 'string' &&
        /^[a-z]:$/i.test(pattern[3])

      const fdi = fileUNC ? 3 : fileDrive ? 0 : undefined
      const pdi = patternUNC ? 3 : patternDrive ? 0 : undefined
      if (typeof fdi === 'number' && typeof pdi === 'number') {
        const [fd, pd]: [string, string] = [
          file[fdi],
          pattern[pdi] as string,
        ]
        if (fd.toLowerCase() === pd.toLowerCase()) {
          pattern[pdi] = fd
          patternStartIndex = pdi
          fileStartIndex = fdi
        }
      }
    }

    // resolve and reduce . and .. portions in the file as well.
    // dont' need to do the second phase, because it's only one string[]
    const { optimizationLevel = 1 } = this.options
    if (optimizationLevel >= 2) {
      file = this.levelTwoFileOptimize(file)
    }

    if (pattern.includes(GLOBSTAR)) {
      return this.#matchGlobstar(
        file, pattern, partial, fileStartIndex, patternStartIndex
      )
    }

    return this.#matchOne(
      file, pattern, partial, fileStartIndex, patternStartIndex
    )
  }

  #matchGlobstar(
    file: string[],
    pattern: ParseReturn[],
    partial: boolean,
    fileIndex: number,
    patternIndex: number
  ) {
    const firstgs = pattern.indexOf(GLOBSTAR, patternIndex)
    const lastgs = pattern.lastIndexOf(GLOBSTAR)

    const [head, body, tail] = partial ? [
      pattern.slice(patternIndex, firstgs),
      pattern.slice(firstgs + 1),
      [],
    ] : [
      pattern.slice(patternIndex, firstgs),
      pattern.slice(firstgs + 1, lastgs),
      pattern.slice(lastgs + 1),
    ]

    if (head.length) {
      const fileHead = file.slice(fileIndex, fileIndex + head.length)
      if (!this.#matchOne(fileHead, head, partial, 0, 0)) return false
      fileIndex += head.length
    }

    let fileTailMatch: number = 0
    if (tail.length) {
      if (tail.length + fileIndex > file.length) return false
      let tailStart = file.length - tail.length
      if (this.#matchOne(file, tail, partial, tailStart, 0)) {
        fileTailMatch = tail.length
      } else {
        if (
          file[file.length - 1] !== '' ||
          fileIndex + tail.length === file.length
        ) {
          return false
        }
        tailStart--
        if (!this.#matchOne(file, tail, partial, tailStart, 0)) return false
        fileTailMatch = tail.length + 1
      }
    }

    if (!body.length) {
      let sawSome = !!fileTailMatch
      for (let i = fileIndex; i < file.length - fileTailMatch; i++) {
        const f = String(file[i])
        sawSome = true
        if (
          f === '.' || f === '..' ||
          (!this.options.dot && f.startsWith('.'))
        ) {
          return false
        }
      }
      return partial || sawSome
    }

    const bodySegments: [ParseReturn[], number][] = [[[], 0]]
    let currentBody: [ParseReturn[], number] = bodySegments[0]
    let nonGsParts = 0
    const nonGsPartsSums: number[] = [0]
    for (const b of body) {
      if (b === GLOBSTAR) {
        nonGsPartsSums.push(nonGsParts)
        currentBody = [[], 0]
        bodySegments.push(currentBody)
      } else {
        currentBody[0].push(b)
        nonGsParts++
      }
    }
    let i = bodySegments.length - 1
    const fileLength = file.length - fileTailMatch
    for (const b of bodySegments) {
      b[1] = fileLength - ((nonGsPartsSums[i--] as number) + b[0].length)
    }

    return !!this.#matchGlobStarBodySections(
      file, bodySegments, fileIndex, 0, partial, 0, !!fileTailMatch
    )
  }

  #matchGlobStarBodySections(
    file: string[],
    bodySegments: [ParseReturn[], number][],
    fileIndex: number,
    bodyIndex: number,
    partial: boolean,
    globStarDepth: number,
    sawTail: boolean
  ): boolean | null {
    const bs = bodySegments[bodyIndex]
    if (!bs) {
      for (let i = fileIndex; i < file.length; i++) {
        sawTail = true
        const f = file[i]
        if (
          f === '.' || f === '..' ||
          (!this.options.dot && f.startsWith('.'))
        ) {
          return false
        }
      }
      return sawTail
    }

    const [body, after] = bs
    while (fileIndex <= after) {
      const m = this.#matchOne(
        file.slice(0, fileIndex + body.length),
        body, partial, fileIndex, 0
      )
      if (m && globStarDepth < this.maxGlobstarRecursion) {
        const sub = this.#matchGlobStarBodySections(
          file, bodySegments, fileIndex + body.length,
          bodyIndex + 1, partial, globStarDepth + 1, sawTail
        )
        if (sub !== false) return sub
      }
      const f = file[fileIndex]
      if (
        f === '.' || f === '..' ||
        (!this.options.dot && f.startsWith('.'))
      ) {
        return false
      }
      fileIndex++
    }
    return partial || null
  }

  #matchOne(
    file: string[],
    pattern: ParseReturn[],
    partial: boolean,
    fileIndex: number,
    patternIndex: number
  ) {
    let fi: number
    let pi: number
    let pl: number
    let fl: number
    for (
      fi = fileIndex, pi = patternIndex,
        fl = file.length, pl = pattern.length;
      fi < fl && pi < pl;
      fi++, pi++
    ) {
      this.debug('matchOne loop')
      let p = pattern[pi]
      let f = file[fi]

      this.debug(pattern, p, f)

      /* c8 ignore start */
      if (p === false || p === GLOBSTAR) return false
      /* c8 ignore stop */

      let hit: boolean
      if (typeof p === 'string') {
        hit = f === p
        this.debug('string match', p, f, hit)
      } else {
        hit = p.test(f)
        this.debug('pattern match', p, f, hit)
      }

      if (!hit) return false
    }

    if (fi === fl && pi === pl) {
      return true
    } else if (fi === fl) {
      return partial
    } else if (pi === pl) {
      return fi === fl - 1 && file[fi] === ''
      /* c8 ignore start */
    } else {
      throw new Error('wtf?')
    }
    /* c8 ignore stop */
  }

  braceExpand(): string[] {
    return braceExpand(this.pattern, this.options)
  }

  parse(pattern: string): ParseReturn {
    assertValidPattern(pattern)

    const options = this.options

    // shortcuts
    if (pattern === '**') return GLOBSTAR
    if (pattern === '') return ''

    // far and away, the most common glob pattern parts are
    // *, *.*, and *.<ext>  Add a fast check method for those.
    let m: RegExpMatchArray | null
    let fastTest: null | ((f: string) => boolean) = null
    if ((m = pattern.match(starRE))) {
      fastTest = options.dot ? starTestDot : starTest
    } else if ((m = pattern.match(starDotExtRE))) {
      fastTest = (
        options.nocase
          ? options.dot
            ? starDotExtTestNocaseDot
            : starDotExtTestNocase
          : options.dot
          ? starDotExtTestDot
          : starDotExtTest
      )(m[1])
    } else if ((m = pattern.match(qmarksRE))) {
      fastTest = (
        options.nocase
          ? options.dot
            ? qmarksTestNocaseDot
            : qmarksTestNocase
          : options.dot
          ? qmarksTestDot
          : qmarksTest
      )(m)
    } else if ((m = pattern.match(starDotStarRE))) {
      fastTest = options.dot ? starDotStarTestDot : starDotStarTest
    } else if ((m = pattern.match(dotStarRE))) {
      fastTest = dotStarTest
    }

    const re = AST.fromGlob(pattern, this.options).toMMPattern()
    if (fastTest && typeof re === 'object') {
      // Avoids overriding in frozen environments
      Reflect.defineProperty(re, 'test', { value: fastTest })
    }
    return re
  }

  makeRe() {
    if (this.regexp || this.regexp === false) return this.regexp

    // at this point, this.set is a 2d array of partial
    // pattern strings, or "**".
    //
    // It's better to use .match().  This function shouldn't
    // be used, really, but it's pretty convenient sometimes,
    // when you just want to work with a regex.
    const set = this.set

    if (!set.length) {
      this.regexp = false
      return this.regexp
    }
    const options = this.options

    const twoStar = options.noglobstar
      ? star
      : options.dot
      ? twoStarDot
      : twoStarNoDot
    const flags = new Set(options.nocase ? ['i'] : [])

    // regexpify non-globstar patterns
    // if ** is only item, then we just do one twoStar
    // if ** is first, and there are more, prepend (\/|twoStar\/)? to next
    // if ** is last, append (\/twoStar|) to previous
    // if ** is in the middle, append (\/|\/twoStar\/) to previous
    // then filter out GLOBSTAR symbols
    let re = set
      .map(pattern => {
        const pp: (string | typeof GLOBSTAR)[] = pattern.map(p => {
          if (p instanceof RegExp) {
            for (const f of p.flags.split('')) flags.add(f)
          }
          return typeof p === 'string'
            ? regExpEscape(p)
            : p === GLOBSTAR
            ? GLOBSTAR
            : p._src
        }) as (string | typeof GLOBSTAR)[]
        pp.forEach((p, i) => {
          const next = pp[i + 1]
          const prev = pp[i - 1]
          if (p !== GLOBSTAR || prev === GLOBSTAR) {
            return
          }
          if (prev === undefined) {
            if (next !== undefined && next !== GLOBSTAR) {
              pp[i + 1] = '(?:\\/|' + twoStar + '\\/)?' + next
            } else {
              pp[i] = twoStar
            }
          } else if (next === undefined) {
            pp[i - 1] = prev + '(?:\\/|' + twoStar + ')?'
          } else if (next !== GLOBSTAR) {
            pp[i - 1] = prev + '(?:\\/|\\/' + twoStar + '\\/)' + next
            pp[i + 1] = GLOBSTAR
          }
        })
        return pp.filter(p => p !== GLOBSTAR).join('/')
      })
      .join('|')

    // need to wrap in parens if we had more than one thing with |,
    // otherwise only the first will be anchored to ^ and the last to $
    const [open, close] = set.length > 1 ? ['(?:', ')'] : ['', '']
    // must match entire pattern
    // ending in a * or ** will make it less strict.
    re = '^' + open + re + close + '$'

    // can match anything, as long as it's not this.
    if (this.negate) re = '^(?!' + re + ').+$'

    try {
      this.regexp = new RegExp(re, [...flags].join(''))
      /* c8 ignore start */
    } catch (ex) {
      // should be impossible
      this.regexp = false
    }
    /* c8 ignore stop */
    return this.regexp
  }

  slashSplit(p: string) {
    // if p starts with // on windows, we preserve that
    // so that UNC paths aren't broken.  Otherwise, any number of
    // / characters are coalesced into one, unless
    // preserveMultipleSlashes is set to true.
    if (this.preserveMultipleSlashes) {
      return p.split('/')
    } else if (this.isWindows && /^\/\/[^\/]+/.test(p)) {
      // add an extra '' for the one we lose
      return ['', ...p.split(/\/+/)]
    } else {
      return p.split(/\/+/)
    }
  }

  match(f: string, partial = this.partial) {
    this.debug('match', f, this.pattern)
    // short-circuit in the case of busted things.
    // comments, etc.
    if (this.comment) {
      return false
    }
    if (this.empty) {
      return f === ''
    }

    if (f === '/' && partial) {
      return true
    }

    const options = this.options

    // windows: need to use /, not \
    if (this.isWindows) {
      f = f.split('\\').join('/')
    }

    // treat the test path as a set of pathparts.
    const ff = this.slashSplit(f)
    this.debug(this.pattern, 'split', ff)

    // just ONE of the pattern sets in this.set needs to match
    // in order for it to be valid.  If negating, then just one
    // match means that we have failed.
    // Either way, return on the first hit.

    const set = this.set
    this.debug(this.pattern, 'set', set)

    // Find the basename of the path by looking for the last non-empty segment
    let filename: string = ff[ff.length - 1]
    if (!filename) {
      for (let i = ff.length - 2; !filename && i >= 0; i--) {
        filename = ff[i]
      }
    }

    for (let i = 0; i < set.length; i++) {
      const pattern = set[i]
      let file = ff
      if (options.matchBase && pattern.length === 1) {
        file = [filename]
      }
      const hit = this.matchOne(file, pattern, partial)
      if (hit) {
        if (options.flipNegate) {
          return true
        }
        return !this.negate
      }
    }

    // didn't get any hits.  this is success if it's a negative
    // pattern, failure otherwise.
    if (options.flipNegate) {
      return false
    }
    return this.negate
  }

  static defaults(def: MinimatchOptions) {
    return minimatch.defaults(def).Minimatch
  }
}
/* c8 ignore start */
export { AST } from './ast.js'
export { escape } from './escape.js'
export { unescape } from './unescape.js'
/* c8 ignore stop */
minimatch.AST = AST
minimatch.Minimatch = Minimatch
minimatch.escape = escape
minimatch.unescape = unescape
