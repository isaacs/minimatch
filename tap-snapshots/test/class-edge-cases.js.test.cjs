/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/class-edge-cases.js > TAP > must match snapshot 1`] = `
Object {
  "files": Array [
    "a[]b",
    "[b-a]x",
    "a]b",
    "a[]]b",
    "a[[]b",
  ],
  "matches": Object {
    "[b-a\\\\]*": Array [
      "[b-a]x",
    ],
    "\\\\[b-a]*": Array [
      "[b-a]x",
    ],
    "a[[]]*": Array [
      "a[]b",
      "a[]]b",
    ],
    "a[[]*": Array [
      "a[]b",
      "a[]]b",
      "a[[]b",
    ],
    "a[]]*": Array [
      "a]b",
    ],
    "a[]*": Array [
      "a[]b",
      "a[]]b",
    ],
  },
  "patterns": Array [
    "\\\\[b-a]*",
    "[b-a\\\\]*",
    "a[]*",
    "[b-a]*",
    "a[]]*",
    "a[[]*",
    "a[[]]*",
  ],
}
`
