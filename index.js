var url = require('url')
var assert = require('assert')

module.exports = parse
parse.format = format
parse.parse = parse

function parse (str, parseQueryString) {
  assert.equal(typeof str, 'string')
  var p = url.parse(str, parseQueryString)
  if ((!p.protocol && !p.hostname && /^\/\//.test(p.pathname)) || !p.slashes) {
    var s = /^\/\//.test(str) ? '' : '//'
    p = url.parse('https:' + s + str, parseQueryString)
  }

  return p
}

function format (str) {
  return url.format(parse(str))
}
