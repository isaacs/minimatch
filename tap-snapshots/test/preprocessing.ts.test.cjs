/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/preprocessing.ts TAP **/.. > defaults 1`] = `
Array [
  Array [
    "**",
    "..",
  ],
]
`

exports[`test/preprocessing.ts TAP **/.. > multislash 1`] = `
Array [
  Array [
    "**",
    "..",
  ],
]
`

exports[`test/preprocessing.ts TAP **/.. > no globstar 1`] = `
Array [
  Array [
    "",
  ],
]
`

exports[`test/preprocessing.ts TAP **/../ > defaults 1`] = `
Array [
  Array [
    "**",
    "..",
    "",
  ],
]
`

exports[`test/preprocessing.ts TAP **/../ > multislash 1`] = `
Array [
  Array [
    "**",
    "..",
    "",
  ],
]
`

exports[`test/preprocessing.ts TAP **/../ > no globstar 1`] = `
Array [
  Array [
    "",
  ],
]
`

exports[`test/preprocessing.ts TAP **/../x > defaults 1`] = `
Array [
  Array [
    "..",
    "x",
  ],
  Array [
    "**",
    "x",
  ],
]
`

exports[`test/preprocessing.ts TAP **/../x > multislash 1`] = `
Array [
  Array [
    "..",
    "x",
  ],
  Array [
    "**",
    "x",
  ],
]
`

exports[`test/preprocessing.ts TAP **/../x > no globstar 1`] = `
Array [
  Array [
    "x",
  ],
]
`

exports[`test/preprocessing.ts TAP a/b/c/**///../x/y/z > defaults 1`] = `
Array [
  Array [
    "a",
    "b",
    "x",
    "y",
    "z",
  ],
  Array [
    "a",
    "b",
    "c",
    "**",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/preprocessing.ts TAP a/b/c/**///../x/y/z > multislash 1`] = `
Array [
  Array [
    "a",
    "b",
    "c",
    "**",
    "",
    "",
    "..",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/preprocessing.ts TAP a/b/c/**///../x/y/z > no globstar 1`] = `
Array [
  Array [
    "a",
    "b",
    "c",
    "x",
    "y",
    "z",
  ],
]
`

exports[`test/preprocessing.ts TAP a/b/c/..///d > defaults 1`] = `
Array [
  Array [
    "a",
    "b",
    "d",
  ],
]
`

exports[`test/preprocessing.ts TAP a/b/c/..///d > multislash 1`] = `
Array [
  Array [
    "a",
    "b",
    "",
    "",
    "d",
  ],
]
`

exports[`test/preprocessing.ts TAP a/b/c/..///d > no globstar 1`] = `
Array [
  Array [
    "a",
    "b",
    "d",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{**/,}*/b > defaults 1`] = `
Array [
  Array [
    "a",
    "**",
    "*",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{**/,}*/b > multislash 1`] = `
Array [
  Array [
    "a",
    "**",
    "*",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{**/,}*/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "*",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{**/,}b > defaults 1`] = `
Array [
  Array [
    "a",
    "**",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{**/,}b > multislash 1`] = `
Array [
  Array [
    "a",
    "**",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{**/,}b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{*,.c}/b > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    ".c",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{*,.c}/b > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    ".c",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{*,.c}/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    ".c",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{*,c}/b > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{*,c}/b > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{*,c}/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{*/b/d,c/b/*}/e > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{*/b/d,c/b/*}/e > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{*/b/d,c/b/*}/e > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{,**/}*/b > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "**",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{,**/}*/b > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "**",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{,**/}*/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "*",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{,**/}b > defaults 1`] = `
Array [
  Array [
    "a",
    "b",
  ],
  Array [
    "a",
    "**",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{,**/}b > multislash 1`] = `
Array [
  Array [
    "a",
    "b",
  ],
  Array [
    "a",
    "**",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{,**/}b > no globstar 1`] = `
Array [
  Array [
    "a",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{.c,*}/b > defaults 1`] = `
Array [
  Array [
    "a",
    ".c",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{.c,*}/b > multislash 1`] = `
Array [
  Array [
    "a",
    ".c",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{.c,*}/b > no globstar 1`] = `
Array [
  Array [
    "a",
    ".c",
    "b",
  ],
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{c,*}/b > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{c,*}/b > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{c,*}/b > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{c/b/*,*/b/d}/e > defaults 1`] = `
Array [
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{c/b/*,*/b/d}/e > multislash 1`] = `
Array [
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{c/b/*,*/b/d}/e > no globstar 1`] = `
Array [
  Array [
    "a",
    "c",
    "b",
    "*",
    "e",
  ],
  Array [
    "a",
    "*",
    "b",
    "d",
    "e",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{c/b/d,*/b/*}/e > defaults 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{c/b/d,*/b/*}/e > multislash 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/preprocessing.ts TAP a/{c/b/d,*/b/*}/e > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
    "*",
    "e",
  ],
]
`

exports[`test/preprocessing.ts TAP {a/**/b,a/b} > defaults 1`] = `
Array [
  Array [
    "a",
    "**",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP {a/**/b,a/b} > multislash 1`] = `
Array [
  Array [
    "a",
    "**",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`

exports[`test/preprocessing.ts TAP {a/**/b,a/b} > no globstar 1`] = `
Array [
  Array [
    "a",
    "*",
    "b",
  ],
  Array [
    "a",
    "b",
  ],
]
`
