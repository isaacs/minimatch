import t from 'tap'
import { minimatch as mm } from '../dist/esm/index.js'

const pattern = 'a/b/*/!(bar)/*'
const nope = 'a/b/c/bar/x'
const yup = 'a/b/c/baz/x'
t.equal(mm(nope, pattern), false)
t.equal(mm(yup, pattern), true)
