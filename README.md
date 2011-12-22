# minimatch

A minimal matching utility.

[![Build Status](https://secure.travis-ci.org/isaacs/minimatch.png)](http://travis-ci.org/isaacs/minimatch)


This is the matching library used internally by npm.

Eventually, it will replace the C binding in node-glob.

It works by converting glob expressions into JavaScript `RegExp`
objects.

## Usage

```javascript
var minimatch = require("minimatch")

minimatch("bar.foo", "*.foo") // true!
minimatch("bar.foo", "*.bar") // false!
```

## Features

Supports all glob features.

See:

* `man sh`
* `man fnmatch`
* `man 5 gitignore`

### Departures from zsh/bash/ksh/sh

If the pattern starts with a `!` character, then it is negated.

If a pattern starts with `#`, then it is treated as a comment, and
will not match anything.  (Use `\#` to match a literal `#` at the
start of a line.)

The double-star `**` is always supported, instead of requiring a special
flag.

If an escaped pattern has no matches, and the `null` flag is not set,
then minimatch.match returns the pattern as-provided, rather than
interpreting the character escapes.  For example,
`minimatch.match([], "\\*a\\?")` will return `"\\*a\\?"` rather than
`"*a?"`.

## Functions

### minimatch(path, pattern, options)

Main export.  Tests a path against
the pattern using the options.

### minimatch.filter(pattern, options)

Returns a function that tests its
supplied argument, suitable for use with `Array.filter`.

### minimatch.match(list, pattern, options)

Match against the list of
files, in the style of fnmatch or glob.  If nothing is matched, then
return the pattern (unless `{ null: true }` in the options.)

### minimatch.makeRe(pattern, options)

Make a regular expression object
from the pattern.

## Options

All options are `false` by default.

### debug

Dump a ton of stuff to stderr.

### nobrace

Do not expand `{a,b}` and `{1..3}` brace sets.

### noglobstar

Disable `**` matching against multiple folder names.

### dot

Allow patterns to match filenames starting with a period, even if
the pattern does not explicitly have a period in that spot.

Note that by default, `a/**/b` will **not** match `a/.d/b`, unless `dot`
is set.

### noext

Disable "extglob" style patterns like `+(a|b)`.

### nocase

Perform a case-insensitive match.

### null

Return an empty list from minimatch.match, instead of a list
containing the pattern itself.

### matchBase

If set, then patterns without slashes will be matched
against the basename of the path if it contains slashes.  For example,
`a?b` would match the path `/xyz/123/acb`, but not `/xyz/abc/123`.
