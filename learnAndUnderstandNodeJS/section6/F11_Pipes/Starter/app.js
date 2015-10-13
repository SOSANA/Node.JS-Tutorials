var fs = require('fs');
var zlib = require('zlib');

// creating a readable stream to connect to greet.txt
var readable = fs.createReadStream(__dirname + '/greet.txt');
// creating a writable stream to write to greetcopy.txt
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
// creating a compressed stream to greet.txt.gz
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
// creating a gzip compressing stream
var gzip = zlib.createGzip();
// reading from greet.txt and than using pipe to write to greetcopy.txt
readable.pipe(writable);
// we are piping by chaining and writing the compressed data to a file
readable.pipe(gzip).pipe(compressed);
