import { expand } from 'brace-expansion'
import { Matcher } from '@isaacs/nonrecursive-glob-match'
import { assertValidPattern } from './assert-valid-pattern.js'
import { escape } from './escape.js'
import { unescape } from './unescape.js'

export type Platform =
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
  /** do not expand `{x,y}` style braces */
  nobrace?: boolean
  /** do not treat patterns starting with `#` as a comment */
  nocomment?: boolean
  /** do not treat patterns starting with `!` as a negation */
  nonegate?: boolean
  /** print LOTS of debugging output */
  debug?: boolean
  /** treat `**` the same as `*` */
  noglobstar?: boolean
  /** do not expand extglobs like `+(a|b)` */
  noext?: boolean
  /** return the pattern if nothing matches */
  nonull?: boolean
  /** treat `\\` as a path separator, not an escape character */
  windowsPathsNoEscape?: boolean
  /**
   * inverse of {@link MinimatchOptions.windowsPathsNoEscape}
   * @deprecated
   */
  allowWindowsEscape?: boolean
  /**
   * Compare a partial path to a pattern. As long as the parts
   * of the path that are present are not contradicted by the
   * pattern, it will be treated as a match. This is useful in
   * applications where you're walking through a folder structure,
   * and don't yet have the full path, but want to ensure that you
   * do not walk down paths that can never be a match.
   */
  partial?: boolean
  /** allow matches that start with `.` even if the pattern does not */
  dot?: boolean
  /** ignore case */
  nocase?: boolean
  /** ignore case only in wildcard patterns */
  nocaseMagicOnly?: boolean
  /** consider braces to be "magic" for the purpose of `hasMagic` */
  magicalBraces?: boolean
  /**
   * If set, then patterns without slashes will be matched
   * against the basename of the path if it contains slashes.
   * For example, `a?b` would match the path `/xyz/123/acb`, but
   * not `/xyz/acb/123`.
   */
  matchBase?: boolean
  /** invert the results of negated matches */
  flipNegate?: boolean
  /** do not collapse multiple `/` into a single `/` */
  preserveMultipleSlashes?: boolean
  /**
   * A number indicating the level of optimization that should be done
   * to the pattern prior to parsing and using it for matches.
   */
  optimizationLevel?: number
  /** operating system platform */
  platform?: Platform
  /**
   * When a pattern starts with a UNC path or drive letter, and in
   * `nocase:true` mode, do not convert the root portions of the
   * pattern into a case-insensitive regular expression, and instead
   * leave them as strings.
   *
   * This is the default when the platform is `win32` and
   * `nocase:true` is set.
   */
  windowsNoMagicRoot?: boolean
  /**
   * max number of `{...}` patterns to expand. Default 100_000.
   */
  braceExpandMax?: number
  /**
   * Max number of non-adjacent `**` patterns to recursively walk down.
   *
   * The default of 200 is almost certainly high enough for most purposes,
   * and can handle absurdly excessive patterns.
   */
  maxGlobstarRecursion?: number
}

export const minimatch = (
  p: string,
  pattern: string,
  options: MinimatchOptions = {},
) => {
  assertValidPattern(pattern)

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  return new Minimatch(pattern, options).match(p)
}

/* c8 ignore start */
const defaultPlatform: Platform = (
  typeof process === 'object' && process ?
    (typeof process.env === 'object' &&
      process.env &&
      process.env.__MINIMATCH_TESTING_PLATFORM__) ||
    process.platform
  : 'posix') as Platform

export type Sep = '\\' | '/'

const path: { [k: string]: { sep: Sep } } = {
  win32: { sep: '\\' },
  posix: { sep: '/' },
}
/* c8 ignore stop */

export const sep =
  defaultPlatform === 'win32' ? path.win32.sep : path.posix.sep
minimatch.sep = sep

export const GLOBSTAR = Symbol('globstar **')
minimatch.GLOBSTAR = GLOBSTAR

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

    unescape: (
      s: string,
      options: Pick<
        MinimatchOptions,
        'windowsPathsNoEscape' | 'magicalBraces'
      > = {},
    ) => orig.unescape(s, ext(def, options)),

    escape: (
      s: string,
      options: Pick<
        MinimatchOptions,
        'windowsPathsNoEscape' | 'magicalBraces'
      > = {},
    ) => orig.escape(s, ext(def, options)),

    filter: (pattern: string, options: MinimatchOptions = {}) =>
      orig.filter(pattern, ext(def, options)),

    defaults: (options: MinimatchOptions) =>
      orig.defaults(ext(def, options)),

    braceExpand: (pattern: string, options: MinimatchOptions = {}) =>
      orig.braceExpand(pattern, ext(def, options)),

    match: (
      list: string[],
      pattern: string,
      options: MinimatchOptions = {},
    ) => orig.match(list, pattern, ext(def, options)),

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
  options: MinimatchOptions = {},
) => {
  assertValidPattern(pattern)

  // Thanks to Yeting Li <https://github.com/yetingli> for
  // improving this regexp to avoid a ReDOS vulnerability.
  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern, { max: options.braceExpandMax })
}
minimatch.braceExpand = braceExpand

export const match = (
  list: string[],
  pattern: string,
  options: MinimatchOptions = {},
) => {
  const mm = new Minimatch(pattern, options)
  list = list.filter(f => mm.match(f))
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}
minimatch.match = match

const globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/

// Index of the `]` that closes the class that starts at `start`,
// or -1 if it is not closed. Posix classes such as `[:alpha:]` are
// not skipped, so this can find a `]` before the real end. That
// only makes a class look less like a literal.
const classEnd = (pattern: string, start: number) => {
  let i = start + 1
  if (pattern.charAt(i) === '!' || pattern.charAt(i) === '^') i++
  let sawStart = false
  for (; i < pattern.length; i++) {
    const c = pattern.charAt(i)
    if (c === ']' && sawStart) return i
    sawStart = true
    if (c === '\\') i++
  }
  return -1
}

// If a path portion pattern has no magic, return the string it
// matches. Otherwise, return undefined. This can report magic for
// a pattern that is in fact literal (eg, `[]`), but never the
// reverse, so a string result is always safe to compare directly.
const literal = (pattern: string, noext: boolean): string | undefined => {
  if (!noext && (pattern === '+()' || pattern === '@()')) return pattern
  let lit = ''
  for (let i = 0; i < pattern.length; i++) {
    const c = pattern.charAt(i)
    if (c === '\\') {
      // a trailing \ is a literal \
      lit += pattern.charAt(++i) || c
    } else if (c === '*' || c === '?') {
      return undefined
    } else if (c === '[') {
      const close = classEnd(pattern, i)
      if (close === -1) {
        // not closed, so the [ is a literal
        lit += c
        continue
      }
      // a class of one char, such as `[*]` or `[\b]`, is a literal
      let body = pattern.slice(i + 1, close)
      if (body.startsWith('\\')) body = body.slice(1)
      if ([...body].length !== 1 || '!^'.includes(pattern.charAt(i + 1))) {
        return undefined
      }
      lit += body
      i = close
    } else if (
      !noext &&
      '+@!'.includes(c) &&
      pattern.charAt(i + 1) === '(' &&
      pattern.includes(')', i + 2)
    ) {
      return undefined
    } else {
      lit += c
    }
  }
  return lit
}

// True if the portion pattern has the same meaning as an alternative
// inside `@(...)`. It must not have a `|` or `)` that is not in a
// closed extglob (those are literal at the top level), an extglob
// that is not closed (the `)` of the `@(...)` would close it), or a
// trailing `\` (it would escape the next `|`). A pattern that is
// only an empty extglob, such as `?()`, is literal on its own, but
// not in `@(...)`. Posix classes such as `[:alpha:]` can hide a `]`
// from classEnd, so patterns with them are not merged.
const extSafe = (pattern: string) => {
  if (/^[?*+@]\(\)$/.test(pattern) || pattern.includes('[:')) return false
  let depth = 0
  for (let i = 0; i < pattern.length; i++) {
    const c = pattern.charAt(i)
    if (c === '\\') {
      if (++i === pattern.length) return false
    } else if (c === '[') {
      const close = classEnd(pattern, i)
      if (close !== -1) i = close
    } else if ('+@!?*'.includes(c) && pattern.charAt(i + 1) === '(') {
      depth++
      i++
    } else if (c === ')') {
      if (!depth--) return false
    } else if (c === '|' && !depth) {
      return false
    }
  }
  return !depth
}

// The last path that Minimatch#match split, and its parts. A path is
// often tested against many patterns in a row (such as a list of
// ignore patterns), so this saves splitting it again. The parts are
// never changed, so they can be shared.
let lastSplit:
  | {
      f: string
      isWindows: boolean
      preserveMultipleSlashes: boolean
      slashSplit: Minimatch['slashSplit']
      parts: string[]
    }
  | undefined

// The last path that Minimatch#match checked before splitting it. If
// the same path is checked again, it is being tested against many
// patterns, so it is split and the parts are kept for the others.
let lastChecked: string | undefined

export type ParseReturnFiltered = string | Matcher | typeof GLOBSTAR

// true if a pattern portion that is not ** matches a path portion.
// An empty path portion only matches an empty pattern portion.
const portionMatch = (p: string | Matcher, f: string) =>
  typeof p === 'string' ? f === p : f !== '' && p.test(f)

// true if the last portion of a row matches the last portion of a
// path, or the one before a trailing `/`
const endMatch = (
  p: string | Matcher,
  last: string,
  prev: string | undefined,
) => portionMatch(p, last) || (prev !== undefined && portionMatch(p, prev))

/**
 * A pattern row split on its first and last `**`, from a start
 * index. Each body segment has the number of path portions that it
 * and the ones after it need, to find the last index where it can
 * start in a path.
 */
export type GlobstarParts = {
  head: ParseReturn[]
  body: ParseReturn[]
  tail: ParseReturn[]
  segments: [segment: ParseReturn[], need: number][]
}
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
  // the path can be checked against the last portion, and the string
  // portions, of each row before it is split. See #canMatch.
  #endCheck: boolean
  #literalCheck: boolean
  // the string portions of each row in the set
  #literals: string[][] = []
  // brace expansion can make the same portion in many rows, so they
  // share one Matcher, and the states that it caches
  #matchers = new Map<string, Matcher>()
  // the GlobstarParts of each pattern row, by start index and partial
  #globstarParts = new WeakMap<ParseReturn[], GlobstarParts[]>()

  constructor(pattern: string, options: MinimatchOptions = {}) {
    assertValidPattern(pattern)

    options = options || {}
    this.options = options
    this.maxGlobstarRecursion = options.maxGlobstarRecursion ?? 200
    this.pattern = pattern
    this.platform = options.platform || defaultPlatform
    this.isWindows = this.platform === 'win32'
    // avoid the annoying deprecation flag lol
    const awe = ('allowWindow' + 'sEscape') as keyof MinimatchOptions
    this.windowsPathsNoEscape =
      !!options.windowsPathsNoEscape || options[awe] === false
    if (this.windowsPathsNoEscape) {
      this.pattern = this.pattern.replace(/\\/g, '/')
    }
    this.preserveMultipleSlashes = !!options.preserveMultipleSlashes
    this.negate = false
    this.nonegate = !!options.nonegate
    this.comment = false
    this.empty = false
    this.partial = !!options.partial
    this.nocase = !!this.options.nocase
    this.windowsNoMagicRoot =
      options.windowsNoMagicRoot !== undefined ?
        options.windowsNoMagicRoot
      : !!(this.isWindows && this.nocase)

    this.globSet = []
    this.globParts = []
    this.set = []
    const slashes =
      !this.isWindows && this.slashSplit === Minimatch.prototype.slashSplit
    this.#endCheck =
      slashes &&
      !this.preserveMultipleSlashes &&
      (options.optimizationLevel ?? 1) < 2

    // make the set of Matchers etc.
    this.make()

    // with the end check, the last portion is already checked
    this.#literals = this.set.map(row => [
      ...new Set(
        (this.#endCheck ? row.slice(0, -1) : row).filter(
          (p): p is string => typeof p === 'string' && !!p,
        ),
      ),
    ])
    this.#literalCheck = slashes && this.#literals.some(l => l.length)
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

  debug(..._: unknown[]) {}

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
    this.globSet = [...new Set(this.braceExpand())]

    if (options.debug) {
      //oxlint-disable-next-line no-console
      this.debug = (...args: unknown[]) => console.error(...args)
    }

    this.debug(this.pattern, this.globSet)

    // step 3: now we have a set, so turn each one into a series of
    // path-portion matching patterns.
    // These will be Matchers, except in the case of "**", which is
    // set to the GLOBSTAR object for globstar behavior,
    // and will not contain any / characters
    //
    // First, we preprocess to make the glob pattern sets a bit simpler
    // and deduped.  There are some perf-killing patterns that can cause
    // problems with a glob walk, but we can simplify them down a bit.
    const rawGlobParts = this.globSet.map(s => this.slashSplit(s))
    this.globParts = this.preprocess(rawGlobParts)
    this.debug(this.pattern, this.globParts)

    // glob --> Matchers
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
          return [
            ...s.slice(0, 4),
            ...s.slice(4).map(ss => this.parse(ss)),
          ]
        } else if (isDrive) {
          return [s[0], ...s.slice(1).map(ss => this.parse(ss))]
        }
      }
      return s.map(ss => this.parse(ss))
    })

    this.debug(this.pattern, set)

    // filter out everything that didn't compile properly.
    this.set = set.filter(
      s => s.indexOf(false) === -1,
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

    // with noext, `@(...)` would be literal
    if (!options.noext) this.mergeRows()

    this.debug(this.pattern, this.set)
  }

  // Merge rows that only differ in one portion, where each of them
  // is a Matcher, into one row that matches any of them with
  // `@(a|b|...)`. Then a path is only walked once for all of them,
  // for example with `**/*.{js,ts}`.
  mergeRows() {
    let merged = true
    while (merged) {
      merged = false
      const len = Math.max(0, ...this.set.map(r => r.length))
      for (let k = 0; k < len; k++) {
        // the rows that are the same other than at portion k
        const groups = new Map<string, number[]>()
        this.set.forEach((row, i) => {
          if (
            !(row[k] instanceof Matcher) ||
            !extSafe(this.globParts[i]![k]!)
          ) {
            return
          }
          const parts = [...this.globParts[i]!]
          parts[k] = ''
          const key = `${row.length}/${parts.join('/')}`
          const g = groups.get(key)
          if (g) g.push(i)
          else groups.set(key, [i])
        })
        const drop = new Set<number>()
        for (const g of groups.values()) {
          if (g.length < 2) continue
          const [first, ...rest] = g as [number, ...number[]]
          const alts = g.map(i => this.globParts[i]![k]!)
          const glob = `@(${alts.join('|')})`
          this.globParts[first]![k] = glob
          this.set[first]![k] = this.parse(glob) as Matcher
          for (const i of rest) drop.add(i)
        }
        if (drop.size) {
          merged = true
          this.set = this.set.filter((_, i) => !drop.has(i))
          this.globParts = this.globParts.filter((_, i) => !drop.has(i))
        }
      }
    }
  }

  // various transforms to equivalent pattern sets that are
  // faster to process in a filesystem walk.  The goal is to
  // eliminate what we can, and push all ** patterns as far
  // to the right as possible, even if it increases the number
  // of patterns that we have to process.
  preprocess(globParts: string[][]) {
    // if we're not in globstar mode, then turn ** into *
    if (this.options.noglobstar) {
      for (const partset of globParts) {
        for (let j = 0; j < partset.length; j++) {
          if (partset[j] === '**') {
            partset[j] = '*'
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

  // False if no row can match the path, so it does not need to be
  // split. These are only checks that a match needs. None of them
  // apply with partial, where the path can end before the row does.
  //
  // Each string portion of a row must be a portion of the path, so the
  // path must contain it. Level 2 can only take portions out of the
  // path, so this is still true then. This does not apply to Windows
  // paths (where drive letters do not need to have the same case), or
  // a subclass that splits paths in its own way.
  //
  // The last portion of a row must match the last portion of the path,
  // or the one before a trailing `/` (as a/* and a/**/* match a/b/).
  // This does not apply to rows that end in **, or with level 2 (which
  // can resolve the last portion away), Windows paths,
  // preserveMultipleSlashes (which can leave more than one '' at the
  // end), or a subclass that splits paths in its own way.
  #canMatch(f: string) {
    let last: string | undefined
    let prev: string | undefined
    if (this.#endCheck) {
      // the same portions that f.split(/\/+/) would end with
      const i = f.lastIndexOf('/')
      last = f.slice(i + 1)
      if (last === '' && i >= 0) {
        let j = i
        while (j > 0 && f.charCodeAt(j - 1) === 47) j--
        prev = j === 0 ? '' : f.slice(f.lastIndexOf('/', j - 1) + 1, j)
      }
    }
    // A string compare is cheaper than includes(), and a Matcher test
    // costs more, so the cheaper check goes first.
    ROWS: for (let r = 0; r < this.set.length; r++) {
      const row = this.set[r]!
      const p = row[row.length - 1]
      const end = last !== undefined && p !== undefined && p !== GLOBSTAR
      if (end && typeof p === 'string' && !endMatch(p, last!, prev))
        continue
      if (this.#literalCheck) {
        for (const l of this.#literals[r]!) {
          if (!f.includes(l)) continue ROWS
        }
      }
      if (end && typeof p !== 'string' && !endMatch(p, last!, prev))
        continue
      return true
    }
    return false
  }

  // the parts from the last split, if it was the same path with the
  // same split settings
  #cachedSplit(f: string) {
    const last = lastSplit
    return (
        last?.f === f &&
          last.isWindows === this.isWindows &&
          last.preserveMultipleSlashes === this.preserveMultipleSlashes &&
          last.slashSplit === this.slashSplit
      ) ?
        last.parts
      : undefined
  }

  // split a path for match(), and keep the parts for the next call
  #split(f: string) {
    const { isWindows, preserveMultipleSlashes, slashSplit } = this
    // windows: need to use /, not \
    const parts = this.slashSplit(isWindows ? f.split('\\').join('/') : f)
    lastSplit = {
      f,
      isWindows,
      preserveMultipleSlashes,
      slashSplit,
      parts,
    }
    return parts
  }

  levelTwoFileOptimize(parts: string | string[]) {
    // work on a copy, so that the caller's parts do not change
    parts = Array.isArray(parts) ? [...parts] : this.slashSplit(parts)
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
        if (
          p &&
          p !== '.' &&
          p !== '..' &&
          p !== '**' &&
          !(this.isWindows && /^[a-z]:$/i.test(p))
        ) {
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
          !this.preserveMultipleSlashes,
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
    emptyGSMatch: boolean = false,
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
    partial: boolean = false,
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

      const fdi =
        fileUNC ? 3
        : fileDrive ? 0
        : undefined
      const pdi =
        patternUNC ? 3
        : patternDrive ? 0
        : undefined
      if (typeof fdi === 'number' && typeof pdi === 'number') {
        const [fd, pd]: [string, string] = [
          file[fdi],
          pattern[pdi] as string,
        ]
        // the drives match, so start matching after them
        if (fd.toLowerCase() === pd.toLowerCase()) {
          patternStartIndex = pdi + 1
          fileStartIndex = fdi + 1
        }
      }
    }

    // resolve and reduce . and .. portions in the file as well.
    // don't need to do the second phase, because it's only one string[]
    const { optimizationLevel = 1 } = this.options
    if (optimizationLevel >= 2) {
      file = this.levelTwoFileOptimize(file)
    }

    if (pattern.includes(GLOBSTAR)) {
      return this.#matchGlobstar(
        file,
        pattern,
        partial,
        fileStartIndex,
        patternStartIndex,
      )
    }

    return this.#matchOne(
      file,
      pattern,
      partial,
      fileStartIndex,
      patternStartIndex,
    )
  }

  #matchGlobstar(
    file: string[],
    pattern: ParseReturn[],
    partial: boolean,
    fileIndex: number,
    patternIndex: number,
  ) {
    const { head, body, tail, segments } = this.#getGlobstarParts(
      pattern,
      partial,
      patternIndex,
    )

    // check the head, from the current file/pattern index.
    if (head.length) {
      const headEnd = fileIndex + head.length
      if (!this.#matchOne(file, head, partial, fileIndex, 0, headEnd)) {
        return false
      }
      fileIndex += head.length
      patternIndex += head.length
    }
    // now we know the head matches!

    // if the last portion is not empty, it MUST match the end
    // check the tail
    let fileTailMatch: number = 0
    if (tail.length) {
      // if head + tail > file, then we cannot possibly match
      if (tail.length + fileIndex > file.length) return false

      // try to match the tail
      let tailStart = file.length - tail.length
      if (this.#matchOne(file, tail, partial, tailStart, 0)) {
        fileTailMatch = tail.length
      } else {
        // affordance for stuff like a/**/* matching a/b/
        // if the last file portion is '', and there's more to the pattern
        // then try without the '' bit.
        if (
          file[file.length - 1] !== '' ||
          fileIndex + tail.length === file.length
        ) {
          return false
        }
        tailStart--
        if (!this.#matchOne(file, tail, partial, tailStart, 0)) {
          return false
        }
        fileTailMatch = tail.length + 1
      }
    }

    // now we know the tail matches!

    // the middle is zero or more portions wrapped in **, possibly
    // containing more ** sections.
    // so a/**/b/**/c/**/d has become **/b/**/c/**
    // if it's empty, it means a/**/b, just verify we have no bad dots
    // if there's no tail, so it ends on /**, then we must have *something*
    // after the head, or it's not a matc
    if (!body.length) {
      let sawSome = !!fileTailMatch
      for (let i = fileIndex; i < file.length - fileTailMatch; i++) {
        const f = String(file[i])
        sawSome = true
        if (
          f === '.' ||
          f === '..' ||
          (!this.options.dot && f.startsWith('.'))
        ) {
          return false
        }
      }
      // in partial mode, we just need to get past all file parts
      return partial || sawSome
    }

    // now we know that there's one or more body sections, which can
    // be matched anywhere from the 0 index (because the head was pruned)
    // through to the length-fileTailMatch index.
    return !!this.#matchGlobStarBodySections(
      file,
      segments,
      file.length - fileTailMatch,
      fileIndex,
      0,
      partial,
      0,
      !!fileTailMatch,
    )
  }

  // Split the pattern into head, tail, and middle of ** delimited
  // parts. The tail has to be at the end, and the others just have to
  // be found in order from the head. These only depend on the pattern
  // row, so they are kept for the next path.
  #getGlobstarParts(
    pattern: ParseReturn[],
    partial: boolean,
    patternIndex: number,
  ): GlobstarParts {
    let byStart = this.#globstarParts.get(pattern)
    if (!byStart) {
      byStart = []
      this.#globstarParts.set(pattern, byStart)
    }
    const key = patternIndex * 2 + (partial ? 1 : 0)
    const found = byStart[key]
    if (found) return found

    const firstgs = pattern.indexOf(GLOBSTAR, patternIndex)
    const lastgs = pattern.lastIndexOf(GLOBSTAR)
    const head = pattern.slice(patternIndex, firstgs)
    const body = pattern.slice(firstgs + 1, partial ? undefined : lastgs)
    const tail = partial ? [] : pattern.slice(lastgs + 1)

    // split the body up into sections, and note the number of
    // portions that must come after the start of each one
    const segments: [ParseReturn[], number][] = [[[], 0]]
    let current = segments[0]!
    let nonGsParts = 0
    const nonGsPartsSums: number[] = [0]
    for (const b of body) {
      if (b === GLOBSTAR) {
        nonGsPartsSums.push(nonGsParts)
        current = [[], 0]
        segments.push(current)
      } else {
        current[0].push(b)
        nonGsParts++
      }
    }
    let i = segments.length - 1
    for (const b of segments) {
      b[1] = (nonGsPartsSums[i--] as number) + b[0].length
    }

    const parts = { head, body, tail, segments }
    byStart[key] = parts
    return parts
  }

  // return false for "nope, not matching"
  // return null for "not matching, cannot keep trying"
  #matchGlobStarBodySections(
    file: string[],
    // pattern section, and the portions that it and the rest need
    bodySegments: [ParseReturn[], number][],
    // the end of the file portions that the body can match
    fileLength: number,
    fileIndex: number,
    bodyIndex: number,
    partial: boolean,
    globStarDepth: number,
    sawTail: boolean,
  ): boolean | null {
    // take the first body segment, and walk from fileIndex to its "after"
    // value at the end
    // If it doesn't match at that position, we increment, until we hit
    // that final possible position, and give up.
    // If it does match, then advance and try to rest.
    // If any of them fail we keep walking forward.
    // this is still a bit recursively painful, but it's more constrained
    // than previous implementations, because we never test something that
    // can't possibly be a valid matching condition.
    const bs = bodySegments[bodyIndex]
    if (!bs) {
      // just make sure that there's no bad dots
      for (let i = fileIndex; i < file.length; i++) {
        sawTail = true
        const f = file[i]
        if (
          f === '.' ||
          f === '..' ||
          (!this.options.dot && f.startsWith('.'))
        ) {
          return false
        }
      }
      return sawTail
    }

    // have a non-globstar body section to test, up to the last index
    // where it can start
    const [body, need] = bs
    const after = fileLength - need
    while (fileIndex <= after) {
      const m = this.#matchOne(
        file,
        body,
        partial,
        fileIndex,
        0,
        fileIndex + body.length,
      )
      // if limit exceeded, no match. intentional false negative,
      // acceptable break in correctness for security.
      if (m && globStarDepth < this.maxGlobstarRecursion) {
        // match! see if the rest match. if so, we're done!
        const sub = this.#matchGlobStarBodySections(
          file,
          bodySegments,
          fileLength,
          fileIndex + body.length,
          bodyIndex + 1,
          partial,
          globStarDepth + 1,
          sawTail,
        )
        if (sub !== false) {
          return sub
        }
      }
      const f = file[fileIndex]
      if (
        f === '.' ||
        f === '..' ||
        (!this.options.dot && f.startsWith('.'))
      ) {
        return false
      }

      fileIndex++
    }
    // walked off. no point continuing
    return partial || null
  }

  #matchOne(
    file: string[],
    pattern: ParseReturn[],
    partial: boolean,
    fileIndex: number,
    patternIndex: number,
    // only match the file portions before this index
    fileEnd: number = file.length,
  ) {
    let fi: number
    let pi: number
    let pl: number
    let fl: number
    for (
      fi = fileIndex,
        pi = patternIndex,
        fl = Math.min(fileEnd, file.length),
        pl = pattern.length;
      fi < fl && pi < pl;
      fi++, pi++
    ) {
      this.debug('matchOne loop')
      let p = pattern[pi]
      let f = file[fi]

      this.debug(pattern, p, f)

      // should be impossible.
      /* c8 ignore start */
      if (p === false || p === GLOBSTAR) {
        return false
      }
      /* c8 ignore stop */

      // something other than **
      // non-magic patterns just have to match exactly
      // patterns with magic have been turned into Matchers.
      const hit = portionMatch(p, f)
      this.debug(
        typeof p === 'string' ? 'string match' : 'pattern match',
        p,
        f,
        hit,
      )

      if (!hit) return false
    }

    // Note: ending in / means that we'll get a final ""
    // at the end of the pattern.  This can only match a
    // corresponding "" at the end of the file.
    // If the file ends in /, then it can only match a
    // a pattern that ends in /, unless the pattern just
    // doesn't have any more for it. But, a/b/ should *not*
    // match "a/b/*", even though * can match "", except in
    // partial mode, where it might simply not be reached yet.
    // However, a/b/ should still satisfy a/*

    // now either we fell off the end of the pattern, or we're done.
    if (fi === fl && pi === pl) {
      // ran out of pattern and filename at the same time.
      // an exact hit!
      return true
    } else if (fi === fl) {
      // ran out of file, but still had pattern left.
      // this is ok if we're doing the match as part of
      // a glob fs traversal.
      return partial
    } else if (pi === pl) {
      // ran out of pattern, still have file left.
      // this is only acceptable if we're on the very last
      // empty segment of a file with a trailing slash.
      // a/* should match a/b/
      return fi === fl - 1 && file[fi] === ''

      /* c8 ignore start */
    } else {
      // should be unreachable.
      throw new Error('wtf?')
    }
    /* c8 ignore stop */
  }

  braceExpand() {
    return braceExpand(this.pattern, this.options)
  }

  parse(pattern: string): ParseReturn {
    assertValidPattern(pattern)

    const options = this.options

    // shortcuts
    if (pattern === '**') return GLOBSTAR
    if (pattern === '') return ''

    const { nocase, nocaseMagicOnly, noext = false, dot } = options
    const lit = literal(pattern, noext)
    // in nocase mode, a literal with cased chars still needs a
    // Matcher, unless nocaseMagicOnly is set.
    if (
      lit !== undefined &&
      !(
        nocase &&
        !nocaseMagicOnly &&
        pattern.toUpperCase() !== pattern.toLowerCase()
      )
    ) {
      return lit
    }

    let m = this.#matchers.get(pattern)
    if (!m) {
      m = new Matcher(pattern, { nocase, noext, dot })
      this.#matchers.set(pattern, m)
    }
    return m
  }

  slashSplit(p: string) {
    // if p starts with // on windows, we preserve that
    // so that UNC paths aren't broken.  Otherwise, any number of
    // / characters are coalesced into one, unless
    // preserveMultipleSlashes is set to true.
    if (this.preserveMultipleSlashes) {
      return p.split('/')
    } else if (this.isWindows && /^\/\/[^/]+/.test(p)) {
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

    // treat the test path as a set of pathparts. If it was not just
    // split or checked, check that it can match before splitting it.
    let ff = this.#cachedSplit(f)
    if (!ff) {
      if (
        !partial &&
        (this.#endCheck || this.#literalCheck) &&
        lastChecked !== f
      ) {
        lastChecked = f
        if (!this.#canMatch(f)) {
          return options.flipNegate ? false : this.negate
        }
      }
      ff = this.#split(f)
    }
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

    for (const pattern of set) {
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
export { escape } from './escape.js'
export { unescape } from './unescape.js'
/* c8 ignore stop */
minimatch.Minimatch = Minimatch
minimatch.escape = escape
minimatch.unescape = unescape
