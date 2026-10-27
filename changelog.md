# change log

## 11.0

- Match each path portion with `Matcher` from
  `@isaacs/nonrecursive-glob-match`, in place of a `RegExp`.
  Items in `Minimatch.set` are now strings, `Matcher` objects, or
  `GLOBSTAR`.
- Remove `makeRe()`, `Minimatch#regexp`, and the `MMRegExp` type.
- Remove the `AST` class.
- Remove the `maxExtglobRecursion` option.
- An empty path portion, such as the last one in `a/b/`, only
  matches an empty pattern portion. So `a/b/` no longer matches
  `a/b/?(x)` or `a/b/*(x)`, the same as `a/b/*`.
- Add the `normalize` option, to normalize unicode in the pattern
  and in each portion of the tested path.
- Remove the `debug` option and the `debug()` method.
- Remove the `matchOne()`, `slashSplit()`, and
  `levelTwoFileOptimize()` methods. They are internal now.
- Fix patterns with more than one `**` and sections of different
  lengths between them, such as `**/a/b/c/**/d/**`, which failed
  to match some paths since 10.2.3.
- Fix `partial` matching of patterns with `**`, which since
  10.2.3 matched some paths under a dot portion that `**` can not
  walk, and did not match some paths that end in the pattern's
  last portion.
- `partial` matching of patterns with many `**` no longer takes
  exponential time.
- On Windows, a `..` no longer removes the drive letter, or the
  host and share of a UNC path, at the start of a pattern or (at
  optimization level 2) a path. So `C:/a/../../x` no longer
  matches `x` or `/x`.
- On Windows, compare the host and share of UNC paths like
  `//host/share/...` case-insensitively, the same as drive
  letters.
- On Windows, long UNC paths like `//?/UNC/host/share/...` match
  `//host/share/...` and vice versa, the same as `//?/c:/...` and
  `c:/...`.

## 10.2

- Add `braceExpandMax` option

## 10.1

- Add `magicalBraces` option for `escape`
- Fix `makeRe` when `partial: true` is set.
- Fix `makeRe` when pattern ends in a final `**` path part.

## 10.0

- Require node 20 or 22 and higher

## 9.0

- No default export, only named exports.

## 8.0

- Recursive descent parser for extglob, allowing correct support
  for arbitrarily nested extglob expressions
- Bump required Node.js version

## 7.4

- Add `escape()` method
- Add `unescape()` method
- Add `Minimatch.hasMagic()` method

## 7.3

- Add support for posix character classes in a unicode-aware way.

## 7.2

- Add `windowsNoMagicRoot` option

## 7.1

- Add `optimizationLevel` configuration option, and revert the
  default back to the 6.2 style minimal optimizations, making the
  advanced transforms introduced in 7.0 opt-in. Also, process
  provided file paths in the same way in optimizationLevel:2
  mode, so _most_ things that matched with optimizationLevel 1 or
  0 _should_ match with level 2 as well. However, level 1 is the
  default, out of an abundance of caution.

## 7.0

- Preprocess patterns to simplify complicated patterns and reduce
  out `..` pattern portions where possible. Note that this means
  a pattern like `a/b/../*` will be equivalent to `a/*`, and will
  _not_ match the string `a/b/../c`. If this causes problems, it
  can be addressed in a patch release by resolving `..` portions
  in the test string.

## 6.2

- Add nocaseMagicOnly flag

## 6.1

- Handle UNC paths on Windows

  This adds some slightly modified behavior when a pattern or path starts
  with `//` on Windows.
  - In the case of `//?/<drive letter>:/...`, the `?` is treated as a
    literal character, rather than a wildcard. That is, `//?/c:` will
    _not_ match `//x/c:`.
  - UNC patterns starting with `//?/<drive letter>:/` will match file paths
    starting with `<drive letter>:` if the drive letters match
    case-insensitively.
  - File paths starting with `//?/<drive letter>:/` will match file
    patterns starting with `<drive letter>:` if the drive letters match
    case-insensitively.

- Add `{preserveMultipleSlashes:true}` option to suppress the
  behavior where multiple consecutive `/` characters would be
  effectively coerced into a single path portion separator.

## 6.0

- hybrid module supporting both `require()` and `import`
- exported types

## 5.1

- use windowsPathNoEscape/allowWindowsEscape opts
- make character classes more faithful to bash glob behavior
  - fix handling of escapes
  - treat invalid character classes as non-matching pattern
    rather than escaped literals

## 5.0

- brace-expansion: ignore only blocks that begins with $
- Expect exclusively forward slash as path sep, same as node-glob

## 4.2

- makeRe: globstar should match zero+ path portions
- Fix bug with escaped '@' in patterns

## 4.1

- treat `nocase:true` as always having magic
- expose GLOBSTAR marker

## 4.0

- Update to modern JS syntax
- Add `allowWindowsEscape` option

## 3.x

- Added basic redos protection
- Handle unfinished `!(` extglob patterns
- Add `partial: true` option
