/**
 * Technique 32: Implementing a writable stream
 * 	- writable streams can be used to output data to underlying I/O sinks
 *
 * Problem:
 * 	- you want to output data from a program using an I/O destination that you
 * 		want to wrap with a streamable interface
 * Solution:
 * 	- inherit from stream.Writable and implement a _write method to send data
 * 		to the underlying resource
 *
 * 	- using pipe API helps keep chunks of code reusable and decoupled
 */
var stream = require('stream');
// use the usual inheritance pattern to create a new writable stream class
GreenStream.prototype = Object.create(stream.Writable.prototype, {
  constructor: { value: GreenStream }
});

function GreenStream(options) {
  stream.Writable.call(this, options);
}

GreenStream.prototype._write = function(chunk, encoding, callback) {
  // decorate the chunk with the ANSI escape sequences for green text
  process.stdout.write('\u001b[32m' + chunk + '\u001b[39m');
  // call the callback once the text has been sent to stdout
  callback();
};
// pipe stdin through stdout to transform text into green text
process.stdin.pipe(new GreenStream());
