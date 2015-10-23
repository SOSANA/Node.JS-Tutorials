/**
 * Technique 27: Using built-in streams to make a static web server
 * 	- node's core modules often have streamabnle interfaces. They can be used to
 * 		solve many problems more efficiently than their synchronous alternatives
 *
 * Problem:
 * 	- you want to send a file from a web server to a client in a efficient manner
 * 		that will cale up to large files
 * Solution:
 * 	- use 'fs.createReadStream' to open a file and stream it to the client
 * 	- optionally, pipe the resulting stream.Readable through another stream to
 * 		handle features like compression
 *
 * 	- node's core modules for file system and network operations, fs and net,
 * 		both provide streamable interfaces. The fs module has helper methods to
 * 		automatically create instances of the streamable classes. This makes using
 * 		streams for some I/O based problems fairly straight forward.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  // data is piped from a file to node's HTTP response object
  fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(8000);
