var url = require('url')
var querystring = require('querystring');
var assert = require('assert')

module.exports = parse
parse.format = format
parse.parse = parse

function parse (str, parseQueryString) {
  assert.equal(typeof str, 'string')
  var p = url.parse(str, false);
  if (!p.slashes) {
    p = url.parse('http://' + str, false);
  } else if (!p.protocol) {
    p = url.parse('http:' + str, false);
  }
  if (parseQueryString) {
    p.query = querystring.parse(p.query);
  }
  return p;
}

function format (str) {
  return url.format(parse(str))
}
