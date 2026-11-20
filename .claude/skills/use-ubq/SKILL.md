---
name: use-ubq
description: Write, run, and debug tests with ubq (the ubqtest package), or move a project's tests from tap, tape, ava, node:test, vitest, jest, bun:test, mocha, or Playwright Test to ubq. Use when the project has ubqtest in its package.json, when the user asks for ubq, or when the user asks to convert a test suite to ubq.
---

# use-ubq

ubq is a test tool for TypeScript and JavaScript, made for coding
agents. The package is `ubqtest`. The command is `ubq`.

The package has its own guides, and they are correct for the
installed version. Read them before you write a test or run a
command. Do not work from memory of a different test tool: ubq has
no `it`, no `expect`, no hooks, and no `.only`.

```
npx ubq guide            the API, the rules, and the commands
npx ubq guide convert    how to move a project from a different test tool
npx ubq doctor           checks the setup, and prints one FIX line for each problem
```

If `ubqtest` is not installed: `npm install --save-dev ubqtest`.
Read the rules of the project for agents first (`AGENTS.md`,
`CLAUDE.md`). If they do not permit a new dependency or a change
of `package.json`, ask the user before you do it.
Put `"scripts": { "test": "ubq" }` in `package.json`.
`npx ubq --update` runs the tests and writes their snapshots.
On Bun, the command is `bun node_modules/ubqtest/cli.js`. ubq
needs Bun 1.4 or later.

## To write or correct tests

1. `npx ubq guide`
2. Write the test. Each name comes from `'ubqtest'`.
3. `npx ubq <test file>`. A pass prints one line. A failure block
   has the place, the source line, the difference, and a `rerun:`
   command for that one test. Its `since` line names the lines that
   the test ran in its last pass and that changed after it: look
   there first. If a run takes longer than you
   expect, `npx ubq status` names the test that runs now in each
   file, and for how long.
4. After a change to the source:
   - `npx ubq --changed` runs the tests that ran the changed code,
     and the tests that failed in their last run.
   - `npx ubq mutate --diff` tells if the tests of the changed
     lines are strong. Each `SURVIVED` block names the closest
     test: add an assertion there that the change breaks.
5. Before you tell the user that the work is done: `npx ubq
   check`. It runs no test. It fails if a test failed in its last
   run, if code changed after its tests ran, or if changed lines
   ran in no test, and it names the command for each problem.
   A `pass:` line from before your last change is not a result of
   your change. On a pass, end your last message with its output:
   the count of tests that pass, and the changes to the tests that
   a person must look at (removed and skipped tests, fewer or
   changed assertions, changed snapshots). Tell the user why you
   made each of those changes.

For code that runs in a browser, the guide has "Tests in a
browser": `browser()` from `'ubqtest/browser'` gives a Playwright
`Page`. Do not add jsdom or a different driver for a new test.
For tests that a project has with jsdom or Testing Library, the
convert guide has what to do.

If `ubq uncovered` lists code for a different runtime or system,
the guide has "Code for more than one runtime or system": run
the tests in each environment, and merge the stores with `ubq
merge`. Do not write a test that fakes the platform to reach
that code, if a real run can reach it. A `// ubq: not measured:
<reason>` comment is only for code that no test can reach.

For a Cloudflare Worker, the guide has "Tests of a Cloudflare
Worker": the `workers` key of the configuration makes test files
run in workerd, with the bindings of the wrangler config.

## To convert a project

1. `npx ubq guide convert`. Do its steps in order.
2. The command `npx ubq convert <folders>` makes the certain
   changes and writes `// TODO(ubq): ...` where you must decide.
3. A test that passed with the old tool and fails with ubq is
   usually a test that passed for the wrong reason (no assertion,
   a promise that nothing waited for, a loose comparison). The
   guide has a table of these. Correct the test. Do not skip it,
   and do not make its assertion weaker.
4. Report to the user what the guide lists in "When you are done".
