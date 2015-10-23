/**
 * Technique 36: Using the old streams API
 * 	- before node 0.10 streams had a different API. Code written using API can
 * 		be used with the newer APIs by wrapping it to behave like the newer
 * 		stream.Readable class
 *
 * Problem:
 * 	- you want to use a module that implements the old-style stream API
 * Solution:
 * 	- use Readable.prototype.wrap
 */
var stream = require('stream');
var Readable = stream.Readable;
var util = require('util');

util.inherits(MemoryStream, stream);

function MemoryStream(interval) {
  this.readable = true;

  setInterval(function() {
    var data = process.memoryUsage();
    data.date = new Date();
    this.emit('data', JSON.stringify(data) + '\n');
  }.bind(this), interval);
}

var memoryStream = new MemoryStream(250);
var wrappedStream = new Readable().wrap(memoryStream);

wrappedStream.pipe(process.stdout);
