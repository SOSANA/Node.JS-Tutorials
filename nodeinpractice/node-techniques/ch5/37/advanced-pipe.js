/**
 * Technique 37: Adapting streams based on their destination
 * 	- stream classes are typically designed to solve a specific problem, but
 * 		there's also a potential for customizing their behavior by detecting
 * 		how the stream is being used
 *
 * Problem:
 * 	- you want to make a stream behave differently when it's piped to the TTY
 * 		(the user's shell)
 * Solution:
 * 	- bind a listener to the pipe event, and then use stream.isTTY to check
 * 		if the stream is bound to a terminal
 *
 * 	- this technique is a specific example of adapting a stream's behavior to
 * 		its environment, bu tthe general approach could be adapted to other
 * 		problems as well. Sometimes it's useful to detect whether a stream is
 * 		writing output to TTY or something else, purhaps a file because different
 * 		behavior in each is disirable. For example, when printing to a TTY, some
 * 		commands will use ANSI colors, but this isn't usually advisable when
 * 		writing files because strange characters would clutter the results
 */
var stream = require('stream');
var util = require('util');

util.inherits(MemoryStream, stream.Readable);
util.inherits(OutputStream, stream.Writable);

function MemoryStream() {
  // set an internal flag to record what kind of output is expected
  this.isTTY = process.stdout.isTTY;
  stream.Readable.call(this);
}

MemoryStream.prototype._read = function() {
  var text = JSON.stringify(process.memoryUsage()) + '\n';
  // use ANSI colors when printing to a terminal
  if (this.isTTY) {
    this.push('\u001b[32m' + text + '\u001b[39m');
  } else {
    this.push(text);
  }
};

// A simple writable stream
function OutputStream() {
  stream.Writable.call(this);
  // when writable stream is bound with a pipe, change the
  // destinations isTTY state
  this.on('pipe', function(dest) {
    dest.isTTY = this.isTTY;
  }.bind(this));
}

OutputStream.prototype._write = function(chunk, encoding, cb) {
  util.print(chunk.toString());
  cb();
};

var memoryStream = new MemoryStream();

// Switch the desired output stream by commenting one of these lines:
//memoryStream.pipe(new OutputStream);
memoryStream.pipe(process.stdout);
