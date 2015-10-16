// implementingg a stream
var Writable = require('stream').Writable;
var util = require('util');

module.exports = CountStream;
// inherits from Writable stream
util.inherits(CountStream, Writable);

function CountStream(matchText, options) {
  Writable.call(this, options);
  this.count = 0;
  // creating a RegExp object that matches globally and ignores case.
  this.matcher = new RegExp(matchText, 'ig');
}

CountStream.prototype._write = function(chunk, encoding, cb) {
  // convert the current chunk of input into a string and use it to count matches
  var matches = chunk.toString().match(this.matcher);
  if (matches) {
    this.count += matches.length;
  }
  cb();
};

CountStream.prototype.end = function () {
  // when the stream has ended, 'publish' the total number of matches
  this.emit('total', this.count);
};
