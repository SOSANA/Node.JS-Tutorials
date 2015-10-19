/**
 * 	- this example uses a asynchronous call to read a file from a disk
 * 	- once it has read the file, it'll keep a cached version in memory.
 * 		subsequent calls will return the cashed version. when returning
 * 		the cashed version, 'process.nextTick()' is used so the API still
 * 		behaves asynchronously. That makes the output in the terminal read
 * 		the expected order
 * 	- when your're creating your own classses and methods that behave
 * 		asynchronously, keep behavior consistent, and predictable by using
 * 		'process.nextTick()'
 */
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var content;

function readFileIfRequired(cb) {
  if (!content) {
    // if the content hasn't benn read into memrory, read it asynchronously
    fs.readFile(__filename, 'utf8', function(err, data) {
      content = data;
      console.log('readFileIfRequired: readFile');
      cb(err, content);
    });
  } else {
    // if the content has been read, pass the cached version to the callback,
    // but first use process.nextTick to ensure the callback is executed later
    process.nextTick(function() {
      console.log('readFileIfRequired: cached');
      cb(null, content);
    });
  }
}

readFileIfRequired(function(err, data) {
  // make subsequent calls to the asynchronous operation to ensure it behaves
  // as expected
  console.log('1. Length:', data.length);

  readFileIfRequired(function(err, data2) {
    console.log('2. Length:', data2.length);
  });

  console.log('Reading file again...');
});

console.log('Reading file...');
