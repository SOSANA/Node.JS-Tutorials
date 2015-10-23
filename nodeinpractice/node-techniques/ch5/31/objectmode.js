/**
 * 	- creating a stream of JavaScript objects by passing the objectMode option
 */
var stream = require('stream');
var util = require('util');

util.inherits(MemoryStream, stream.Readable);

function MemoryStream(options) {
  options = options || {};
  // this stream should always use objectMode, so set it here and pass the rest
  // of th eoptions to the stream.Readable constructor
  options.objectMode = true;
  stream.Readable.call(this, options);
}

MemoryStream.prototype._read = function(size) {
  // generate an object by calling node's built-in process.memoryUsage() method
  this.push(process.memoryUsage());
};

var memoryStream = new MemoryStream();
// attach a listener to readable to track when the stream is ready to output data
// than call stream.read() to fetch recent values
memoryStream.on('readable', function() {
  var output = memoryStream.read();
  console.log('Type: %s, value: %j', typeof output, output);
});
