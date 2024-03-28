import t from 'tap'
import { minimatch } from '../dist/esm/index.js'

var cases = {
  'bar.min.js': {
    '*.!(js|css)': true,
    '!*.+(js|css)': false,
    '*.+(js|css)': true,
  },

  'a-integration-test.js': {
    '*.!(j)': true,
    '!(*-integration-test.js)': false,
    '*-!(integration-)test.js': true,
    '*-!(integration)-test.js': false,
    '*!(-integration)-test.js': true,
    '*!(-integration-)test.js': true,
    '*!(integration)-test.js': true,
    '*!(integration-test).js': true,
    '*-!(integration-test).js': true,
    '*-!(integration-test.js)': true,
    '*-!(integra)tion-test.js': false,
    '*-integr!(ation)-test.js': false,
    '*-integr!(ation-t)est.js': false,
    '*-i!(ntegration-)test.js': false,
    '*i!(ntegration-)test.js': true,
    '*te!(gration-te)st.js': true,
    '*-!(integration)?test.js': false,
    '*?!(integration)?test.js': true,
  },

  'foo-integration-test.js': {
    'foo-integration-test.js': true,
    '!(*-integration-test.js)': false,
  },

  'foo.jszzz.js': {
    '*.!(js).js': true,
  },

  'asd.jss': {
    '*.!(js)': true,
  },

  'asd.jss.xyz': {
    '*.!(js).!(xy)': true,
  },

  'asd.jss.xy': {
    '*.!(js).!(xy)': false,
  },

  'asd.js.xyz': {
    '*.!(js).!(xy)': false,
  },

  'asd.js.xy': {
    '*.!(js).!(xy)': false,
  },

  'asd.sjs.zxy': {
    '*.!(js).!(xy)': true,
  },

  'asd..xyz': {
    '*.!(js).!(xy)': true,
  },

  'asd..xy': {
    '*.!(js).!(xy)': false,
    '*.!(js|x).!(xy)': false,
  },

  'foo.js.js': {
    '*.!(js)': true,
  },

  'testjson.json': {
    '*(*.json|!(*.js))': true,
    '+(*.json|!(*.js))': true,
    '@(*.json|!(*.js))': true,
    '?(*.json|!(*.js))': true,
  },

  'foojs.js': {
    '*(*.json|!(*.js))': false, // XXX bash 4.3 disagrees!
    '+(*.json|!(*.js))': false, // XXX bash 4.3 disagrees!
    '@(*.json|!(*.js))': false,
    '?(*.json|!(*.js))': false,
  },

  'other.bar': {
    '*(*.json|!(*.js))': true,
    '+(*.json|!(*.js))': true,
    '@(*.json|!(*.js))': true,
    '?(*.json|!(*.js))': true,
  },
}

var options = { nonegate: true }

Object.keys(cases).forEach(function (file) {
  t.test(file, function (t) {
    Object.keys(cases[file]).forEach(function (pattern) {
      var res = cases[file][pattern]
      var s = file + ' ' + pattern
      t.equal(minimatch(file, pattern, options), res, s)
    })
    t.end()
  })
})
