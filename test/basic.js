var test = require('tap').test
var parse = require('../')

var tests = {
  'x': 'http://x/',
  'foo.com': 'http://foo.com/',
  'a@b:123/c': 'http://a@b:123/c',
  'twitter.com:443': 'http://twitter.com:443/'
}

Object.keys(tests).forEach(function (c) {
  test(c, function (t) {
    t.equal(parse(c).href, tests[c])
    t.equal(parse(tests[c]).href, tests[c])
    t.equal(parse.format(c), tests[c])
    t.end()
  })
})

Object.keys(tests).forEach(function (c) {
  test(c, function (t) {
    t.equal(parse(c, true).href, tests[c])
    t.equal(parse(tests[c], true).href, tests[c])
    t.equal(parse.format(c), tests[c])
    t.end()
  })
})
