/**
 * Technique 15: Converting buffers into other formats
 * 	- by default, node's core APIs return a buffer unless an excoding is specified
 * 	- buffers easily convert to other formats
 *
 * Problem:
 * 	- you want to turn a buffer into plan text
 * Solution:
 * 	- the buffer API allows you to convert a Buffer into a string value
 */
// if we were to load the file using a method from the fs API, we'd get a
// Buffer(buf) by default. When logged out, is shown as a list of octets
// (using hex notation)
var fs = require('fs');
fs.readFile('./names.txt', function (er, buf) {
  console.log(buf);
});

// the buffer class provides a method called toString to convert our data into a
// UTF-8 encoded string
var fs = require('fs');
fs.readFile('./names.txt', function (er, buf) {
  console.log(buf.toString());
});

// since we know that the data is only comprised of ASCII characters, we could
// also get a performance benefit by changing the encoding to ASCII rather than
// UTF-8
var fs = require('fs');
fs.readFile('./names.txt', function (er, buf) {
  // toString accepts an encoding as the first argument
  console.log(buf.toString('ascii'));
});
