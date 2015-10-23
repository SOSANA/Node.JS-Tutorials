/**
 * Technique 29: Using streams from third-party modules
 * 	- many open source developers have recognized the importance of streams
 * 		and incorporated streamable interfaces into their modules. In this
 * 		technique you'll learn how to identify such implementations and use them
 * 		to solve problems more efficiently
 *
 * Problem:
 * 	- you want to know how to use streams with a popular third-party module
 * 		that you've downloaded with npm
 * Solution:
 * 	- look at the module's documentation or src code to figure out if it
 * 		implements a streamable API, and if so, how to use it
 */
var stream = require('stream');
var util = require('util');
var express = require('express');
var app = express();
// create a readable stream by inheriting from stream.Readable and calling
// the parent's constructor
util.inherits(StatStream, stream.Readable);

function StatStream(limit) {
  stream.Readable.call(this);
  this.limit = limit;
}

StatStream.prototype._read = function(size) {
  if (this.limit === 0) {
    // Done
    this.push();
  } else {
    // respond with some data, this sends a string representation of the node
    // process's memory usage
    this.push(util.inspect(process.memoryUsage()));
    // creating a newline character
    this.push('\n');
    this.limit--;
  }
};

app.get('/', function(req, res) {
  var statStream = new StatStream(10);
  // use the standard readable.pipe(writable) pattern to send data back to the
  // browser
  statStream.pipe(res);
});

app.listen(3000);
