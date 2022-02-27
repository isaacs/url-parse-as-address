var test = require('tap').test
var parse = require('../')

var tests = {
  'x': 'https://x/',
  'foo.com': 'https://foo.com/',
  'a@b:123/c': 'https://a@b:123/c',
  '//foo.com': 'https://foo.com/',
  'http://foo.com': 'http://foo.com/',
  'https://foo.com': 'https://foo.com/',
}

Object.keys(tests).forEach(function (c) {
  test(c, function (t) {
    t.equal(parse(c).href, tests[c])
    t.equal(parse(tests[c]).href, tests[c])
    t.equal(parse.format(c), tests[c])
    t.end()
  })
})
