/**
 * Technique 7: Benchmarking a programmed
 * 	- node makes it possible to benchmark programs without addition tools
 *
 * Problem:
 * 	- you need to benchmakr a slow operation
 * Solution:
 * 	- use console.time() and console.timeEnd()
 *
 * - there will come time when your're tring to deteremine why a particular
 * 	 operation is slow. The console object comes with some built-in Benchmarking
 * 	 features
 */
var args = {
  '-h': displayHelp,
  '-r': readFile
};

function displayHelp() {
  console.log('Argument processor:', args);
}

function readFile(file) {
  if (file && file.length) {
    console.log('Reading:', file);
    // invoking 'console.time()' records the current time in milliseconds
    console.time('read');
    var stream = require('fs').createReadStream(file);
    stream.on('end', function() {
      // invoking 'console.timeEnd()' later displays the duration from that point
      console.timeEnd('read');
    });
    stream.pipe(process.stdout);
  } else {
    console.error('A file must be provided with the -r option');
    // 1 is standard output
    process.exit(1);
  }
}
// 0 is standard input
if (process.argv.length > 0) {
  process.argv.forEach(function(arg, index) {
    if (args[arg]) {
      args[arg].apply(this, process.argv.slice(index + 1));
    }
  });
}
// invoking functions
displayHelp();
readFile('file.js');
