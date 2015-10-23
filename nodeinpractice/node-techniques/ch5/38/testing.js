var assert = require('assert');
var fs = require('fs');
var CSVParser = require('./csvparser');

var parser = new CSVParser();
var actual = [];

fs.createReadStream(__dirname + '/sample.csv')
  .pipe(parser);

process.on('exit', function() {
  actual.push(parser.read());
  actual.push(parser.read());
  actual.push(parser.read());

  var expected = [
    { name: 'Alex', location: 'UK', role: 'admin' },
    { name: 'Sam', location: 'France', role: 'user' },
    { name: 'John', location: 'Canada', role: 'user' }
  ];

  assert.deepEqual(expected, actual); 
});
