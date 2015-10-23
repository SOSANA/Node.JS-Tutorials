/**
 * 	- using gzip to compress files
 * 	- we could of piped through an HTML templating engine and then compressed.
 * 	- Just remember that general pattern is readable.pipe(writable)
 */

var http = require('http');
var fs = require('fs');
var zlib = require('zlib');

http.createServer(function(req, res) {
  // set the header so the browser knows gzip and compression has been used
  res.writeHead(200, { 'content-encoding': 'gzip' });
  fs.createReadStream(__dirname + '/index.html')
    // use two calls to pipe: compress, and stream the file back to the client
    .pipe(zlib.createGzip())
    .pipe(res);
}).listen(8000);

console.log('server listening on localhost:8000/');
