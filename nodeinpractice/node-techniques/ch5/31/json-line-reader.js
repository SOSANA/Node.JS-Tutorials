/**
 * Technique 31: Implementing a readable stream
 * 	- readable streams can be used to provide a flexiable API around I/O
 * 		sources, and also act as parsers
 *
 * Problem:
 * 	- you'd like to wrap an I/O source with a streamable API that provides
 * 		a higher-level interface than would otherwise be posssible with the
 * 		underlying data
 * Solution:
 * 	- implement a readable stream by inheriting from the stream.Readable
 * 		class and creating a _read(size) method
 *
 * 	- implementing a custom stream.Readable class can be useful when a
 * 		higher level of abstraction around an underlying data source is
 * 		required
 */
var stream = require('stream');
var util = require('util');
var fs = require('fs');

function JSONLineReader(source) {
  // always ensure the constructors parent is called
  stream.Readable.call(this);
  this._source = source;
  this._foundLineEnd = false;
  this._buffer = '';

  source.on('readable', function() {
    // call read() when the source is ready to trigger a subsequent reads
    this.read();
  }.bind(this));
}
// inherit from stream.Readable to create a new class that can be customized
util.inherits(JSONLineReader, stream.Readable);
// all custom stream.Readable classes must implement the _read() method
JSONLineReader.prototype._read = function(size) {
  var chunk;
  var line;
  var lineIndex;
  var result;
  // when the class is ready for more data, call read() on the source
  if (this._buffer.length === 0) {
    chunk = this._source.read();
    this._buffer += chunk;
  }

  lineIndex = this._buffer.indexOf('\n');

  if (lineIndex !== -1) {
    // slice from the start of the bufffer to the first newline to grab
    // some text to parse
    line = this._buffer.slice(0, lineIndex);
    if (line) {
      result = JSON.parse(line);
      this._buffer = this._buffer.slice(lineIndex + 1);
      // emitting an 'object' event whenever a JSON record has been parsed
      // is unique to this class and isn't necessarily required
      this.emit('object', result);
      // send th parsed JSON back to the internal queue
      this.push(util.inspect(result));
    } else {
      this._buffer = this._buffer.slice(1);
    }
  }
};

var input = fs.createReadStream(__dirname + '/json-lines.txt', {
  encoding: 'utf8'
});
// create an instance of jsonLineReader and give it a file stream to process
var jsonLineReader = new JSONLineReader(input);

jsonLineReader.on('object', function(obj) {
  console.log('pos:', obj.position, '- letter:', obj.letter);
});
