/**
 * Technique 34: Parsing data with transform streams
 * 	- streams have long been used as a way to create efficient parsers. The
 * 		stream.Transform base classs can be used to do this in Node
 *
 * Problem:
 * 	- you want to use streams to change data into another format in a memory
 * 		efficient manner
 * Solution:
 * 	- inherit from stream.Transform and implement the _transform method
 *
 * 	- transform streams can also sit in the middle of a pipe chain. The
 * 		difference between duplex and transfor streams is that they're expected
 * 		to transform data, and the're implemented by writing a _transform method.
 * 		this method's signature is similar to _write, it takes three aruguments:
 * 		'chunk', 'encoding', and 'callback'. The callback should be executed
 * 		when the data has been transformed, which allows transform streams to
 * 		parse data asynchronously
 */
var stream = require('stream');

module.exports = CSVParser;

CSVParser.prototype = Object.create(stream.Transform.prototype, {
  constructor: { value: CSVParser }
});

function CSVParser(options) {
  options = options || {};
  options.objectMode = true;
  stream.Transform.call(this, options);
  // these properties are used to track the state of the parser
  this.value = '';
  this.headers = [];
  this.values = [];
  this.line = 0;
}
// the _transform implemention
CSVParser.prototype._transform = function(chunk, encoding, done) {
  var c;
  var i;

  chunk = chunk.toString();
  // the input data is turned into a string and then iterated over
  // character by character
  for (i = 0; i < chunk.length; i++) {
    c = chunk.charAt(i);
    // if the character is a comma, add the previously collected data
    // to the internal list of headers or values
    if (c === ',') {
      this.addValue();
    } else if (c === '\n') {
      this.addValue();
      if (this.line > 0) {
        // if the character is a line ending, record the previously
        // collected header or field, and then use push to send a
        // JSON version of the data fields to internal queue
        this.push(this.toObject());
      }
      this.values = [];
      this.line++;
    } else {
      this.value += c;
    }
  }
  // when processing has finsihed, call the callback provided by node
  done();
};

CSVParser.prototype.toObject = function() {
  var i;
  var obj = {};
  // convert the internal array of headers and the most recent line of
  // fields into an object that can be converted to JSON
  for (i = 0; i < this.headers.length; i++) {
    obj[this.headers[i]] = this.values[i];
  }
  return obj;
};

CSVParser.prototype.addValue = function() {
  // headers are assumed to be on the first line, otherwise the most
  // recently collected data is assumed to be a data value
  if (this.line === 0) {
    this.headers.push(this.value);
  } else {
    this.values.push(this.value);
  }
  this.value = '';
};
