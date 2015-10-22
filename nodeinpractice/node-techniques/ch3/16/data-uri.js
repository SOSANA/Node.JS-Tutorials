/**
 * Technique 16: Changing string encodings using buffers
 * 	- in addition to converting buffers, you can also utilize buffers to turn
 * 		one string ecoding into another
 *
 * Problem:
 * 	- you want to change from one string encoding to another
 * Solution:
 * 	- the node buffer API provides a mechanism to change encodings
 */
var fs = require('fs');
var zlib = require('zlib');

var base = fs.readFileSync('./monkey.png');
console.log('base', base.length);

var encoded = base.toString('base64');
console.log('pre', Buffer.byteLength(encoded));

zlib.deflate(encoded, function (er, buf) { console.log('zlib-post', buf.length) })
zlib.gzip(encoded, function (er, buf) { console.log('gzip-post', buf.length) })

console.log('data:image/png;base64,'+encoded);
fs.writeFileSync('./secondmonkey.png', Buffer(encoded, 'base64'));
