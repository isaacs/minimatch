// Write a fixed list of real paths for realistic.mjs, so that the
// results do not change when node_modules changes. The list is this
// repo's tracked files, the files in node_modules, and the top two
// levels of .git, for some dotfiles.
import { execFileSync } from 'node:child_process'
import { readdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')

const walk = (dir, depth = Infinity, out = []) => {
  for (const e of readdirSync(resolve(root, dir), { withFileTypes: true })) {
    const p = `${dir}/${e.name}`
    out.push(p)
    if (e.isDirectory() && !e.isSymbolicLink() && depth > 1) {
      walk(p, depth - 1, out)
    }
  }
  return out
}

const tracked = execFileSync('git', ['ls-files'], { cwd: root })
  .toString()
  .trim()
  .split('\n')
const paths = [
  ...new Set([...tracked, ...walk('node_modules'), ...walk('.git', 2)]),
].sort()

writeFileSync(
  resolve(import.meta.dirname, 'realistic-paths.json'),
  JSON.stringify(paths, null, 0) + '\n',
)
console.log(paths.length, 'paths')
