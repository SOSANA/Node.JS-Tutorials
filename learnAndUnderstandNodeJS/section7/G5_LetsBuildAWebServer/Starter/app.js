var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // adding a caricature '\n' which means a new line
  res.end('Hello World\n');

}).listen(1337, '127.0.0.1');
