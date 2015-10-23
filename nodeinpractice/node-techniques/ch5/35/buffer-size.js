/**
 * Technique 35: Optimizing streams
 * 	- built-in streams and the classes used to build custom streams allow
 * 		the internal buffer size to be configured. It's useful to know how
 * 		to optimize this value to attain the desired performance characteristics
 *
 * Problem:
 * 	- you want to read data from a file, but are concerned about either speed
 * 		or memory performance
 * Solution:
 * 	- optimize the streams buffer size to suit your applications requirements
 *
 * 	- the built-in stream functions take a bufffer size parameter, which allows
 * 		the perfomance characteristics to be tailored to a given application. the
 * 		'fs.createReadStream' method takes 'options' arugment that can include a
 * 		'bufferSize' property. This option is passed to stream.Readable so it'll
 * 		control the internal buffer used to temporarily store file data before
 * 		it's used elsewhere
 */
var fs = require('fs');
var zlib = require('zlib');

function benchStream(inSize, outSize) {
  // hrtime is used to get precise nanosecond measurements of the current time
  var time = process.hrtime();
  var watermark = process.memoryUsage().rss;
  var input = fs.createReadStream('/usr/share/dict/words', {
    bufferSize: inSize
  });
  var gzip = zlib.createGzip({ chunkSize: outSize });
  var output = fs.createWriteStream('out.gz', { bufferSize: inSize });
  // a timer callback is uded to periodically check on memory usage and record
  // the highest usage for the current benchmark
  var memoryCheck = setInterval(function() {
    var rss = process.memoryUsage().rss;

    if (rss > watermark) {
      watermark = rss;
    }
  }, 50);
  // when the input has ended, gather the statistics
  input.on('end', function() {
    var memoryEnd = process.memoryUsage();
    clearInterval(memoryCheck);

    var diff = process.hrtime(time);
    // log the results of the memory usage and time, converting the nanosecond
    // mesurements into milliseconds
    console.log([
      inSize,
      outSize,
      (diff[0] * 1e9 + diff[1]) / 1000000,
      watermark / 1024].join(', ')
    );
  });
  // stream the input file through the gzip instance and back out to a file
  input.pipe(gzip).pipe(output);

  return input;
}

console.log('file size, gzip size, ms, RSS');

var fileSize = 128;
var zipSize = 5024;

function run(times) {
  // a callback that will run when each benchmark finishes
  benchStream(fileSize, zipSize).on('end', function() {
    times--;
    fileSize *= 2;
    zipSize *= 2;

    if (times > 0) {
      // recursively call the benchmark function
      run(times);
    }
  });
}
// initally call the benchmark funciton with the number of times we want it
// to run
run(10);
