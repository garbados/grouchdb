var http = require('http');
var assert = require('assert');

var server = require('./server');
var config = require('./config');

var db = server(config);

http.get("http://localhost:10128/hello", function (res) {
  res.on('data', function (chunk) {
    var body = JSON.parse(chunk);
    assert(body.error === '>:(');
    db.close();
  });
});