/**
 * Technique 33: Transmitting and receiving data with duplex streams
 * 	- you want to create a streamable interface to an I/O source that needs to
 * 		be both readable and writable
 *
 * Problem:
 * 	- you want to create a streamable interface to an I/O source that needs to
 * 		be both readable and writable
 * Solution:
 * 	- inherit from stream.Duplex and implement _read and _write methods
 *
 * 	- duplex streams are combination of the Writable and Readable streams, which
 * 		are explained in techniques 31 and 32. Duplex streams require inheriting
 * 		from stream.Duplex and implementations for the _read and _write methods
 */
var stream = require('stream');

HungryStream.prototype = Object.create(stream.Duplex.prototype, {
  constructor: { value: HungryStream }
});

function HungryStream(options) {
  stream.Duplex.call(this, options);
  // this property tracks if the prompt is being displayed
  this.waiting = false;
}

HungryStream.prototype._write = function(chunk, encoding, callback) {
  this.waiting = false;
  this.push('\u001b[32m' + chunk + '\u001b[39m');
  // this _write implementation pushes data onto the internal
  // queue and then calls the supplied callback
  callback();
};

HungryStream.prototype._read = function(size) {
  if (!this.waiting) {
    // display a prompt when waiting for data
    this.push('Feed me data! > ');
    this.waiting = true;
  }
};

var hungryStream = new HungryStream();
// pipe the standard input through duplex stream and then back
// out to standard output
process.stdin.pipe(hungryStream).pipe(process.stdout);
