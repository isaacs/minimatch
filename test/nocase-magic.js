import t from 'tap'
import { Minimatch } from '../dist/esm/index.js'

const nomagic = '../1/2/3'
const yesmagic = '../x'

t.same(new Minimatch(nomagic, { nocase: true }).set, [['..', '1', '2', '3']])

t.same(new Minimatch(yesmagic, { nocase: true }).set, [['..', /^x$/i]])
