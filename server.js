var http = require('http');

function get_quote (quotes) {
  var i = Math.floor(Math.random() * (quotes.length));

  return quotes[i];
}

function start (config) {
  var quotes = config.quotes;
  var port = config.port;
  var server = http.createServer();

  server.on('request', function (req, res) {
    var body = JSON.stringify({
      error: '>:(',
      reason: get_quote(quotes)
    });

    res.writeHead(400, {
      'Content-Type': 'application/json',
      'Content-Length': body.length
    });

    res.end(body);
  });

  server.listen(port);

  return server;
}

module.exports = start;