const t = require('tap')
const { Minimatch } = require('../').default

const nomagic = '../1/2/3'
const yesmagic = '../x'

t.same(new Minimatch(nomagic, { nocase: true }).set, [
  [ '..', '1', '2', '3']
])

t.same(new Minimatch(yesmagic, { nocase: true }).set, [
  ['..', /^x$/i]
])
