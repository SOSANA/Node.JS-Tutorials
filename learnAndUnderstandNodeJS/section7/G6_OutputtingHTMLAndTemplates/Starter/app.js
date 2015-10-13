var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  // remember the MIME type is 'text/html'
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var html = fs.readFileSync(__dirname + '/index.htm',
  'utf8');
  var message = 'Hello world...';
  html = html.replace('{Message}', message);
  res.end(html);

}).listen(1337, '127.0.0.1');
console.log('Server listening on port: 1337');
