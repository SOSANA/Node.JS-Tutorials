// load the countstream.js file
var CountStream = require('./countstream');
// instantiate a CountStream class that counts text matching 'book'
var countStream = new CountStream('book');
var https = require('https');
// download www.manning.com
https.get('https://manning.com/', function(res) {
// pipe the data from the website to CountStream, thereby counting the text
// This Node program does not download the entire file first! It takes the
// file—piece by piece—and processes it. That’s the big thing here, and a critical
// aspect to Node development
  res.pipe(countStream);
});
// listening for changes
countStream.on('total', function(count) {
  console.log('Total matches: ', count);
});
