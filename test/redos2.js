var t = require('tap')

var minimatch = require('../')

// Fixing https://github.com/isaacs/minimatch/issues/275
var exploit = '***************X***************************************'

// Valid match, no timeout
t.ok(minimatch('___________________________________X___', exploit))

// No match, no timeout
t.notOk(minimatch('___________________________________z___', exploit))
