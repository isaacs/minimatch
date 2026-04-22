# Evaluation Setup

This file is outside the editable surface. It defines how results are judged. Agents cannot modify the evaluator or the scoring logic — the evaluation is the trust boundary.

Consider defining more than one evaluation criterion. Optimizing for a single number makes it easy to overfit and silently break other things. A secondary metric or sanity check helps keep the process honest.

eval_cores: 1
eval_memory_gb: 1.0
prereq_command: npm run prepare

## Setup

Install dependencies and prepare the evaluation environment:

```bash
npm install
npm run prepare
```

The project uses TypeScript and requires compilation via `tshy` (run by `npm run prepare`). This builds both CommonJS and ESM outputs to the `dist/` directory. The `prereq_command` is set to `npm run prepare` to ensure the benchmark always measures the latest compiled code.

## Run command

```bash
node benchmark.cjs
```

This runs a performance benchmark that:
- Generates 1000 file paths matching the pattern `x/y/z/{1..1000}.js`
- Matches each path against the glob pattern `**/*.js`
- Repeats the matching 1000 times (1 million total match operations)
- Reports operations per second as the metric

## Output format

The benchmark prints `ops_per_sec=<number>` to stdout, which the CLI automatically recognizes as a valid metric format.

## Metric parsing

The CLI looks for `METRIC=<number>` or `ops_per_sec=<number>` in the output.

## Ground truth

The baseline metric represents the performance of the minimatch library at version 10.2.5 (commit 10968ea) when matching file paths against glob patterns. The benchmark measures real-world usage: matching a large set of file paths against a globstar pattern, which is a common operation in build tools, test runners, and file system utilities.

Higher values indicate better performance (more operations per second).
