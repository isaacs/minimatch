# change log

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
