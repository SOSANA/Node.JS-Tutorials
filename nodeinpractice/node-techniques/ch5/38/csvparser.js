/**
 * Technique 38: Testing streams
 * 	- just like anything else you write, its strongly recommended that you test
 * 		your streams. This technique explains how to use nodes built-in 'assert'
 * 		module to test a class that inherits from stream.Readable
 *
 * Problem:
 * 	- you've written your own stream class and you want to write a unit test
 * 		for it
 * Solution:
 * 	- use some suitable sample data to drive your stream class, and then call
 * 		read() or write() to gather results and compare them to the expected
 * 		output
 *
 * 	- the common pattern for testing streams, used in nodes sources itself and
 * 		by many open source developers, is to drive the stream being tested using
 * 		sample data and then compare the end results against expected values.
 * 	- the most difficult par tof this can be comin gup with a suitable data to
 * 		test. Sometimes its easy to create a text file, or a fixture in testing
 * 		nomenclature, that can be used to drive the stream by piping it. If your
 * 		testing a network-oriented stream, then you shoul dconsider using nodes
 * 		net or http modules to create "mock" servers that generat esuitable test
 * 		data
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
