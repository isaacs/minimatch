# change log

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
