/**
 * Technique 9: Passing command-line Arguments
 *
 * Problem:
 * 	- you're writing a program that needs to receive simple aurgments from the
 * 		command line
 * Solution:
 * 	- use process.argv
 *
 * 	- 'process.argv' array allows you to check if any arguments were passed to
 * 		your script
 */
var args = {
  '-h': displayHelp,
  '-r': readFile
};

function displayHelp() {
  console.log('Argument processor:', args);
}

function readFile(file) {
  console.log('Reading:', file);
  require('fs').createReadStream(file).pipe(process.stdout);
}

if (process.argv.length > 0) {
  process.argv.forEach(function(arg, index) {
    if (args[arg]) {
      args[arg].apply(this, process.argv.slice(index + 1));
    }
  });
}

displayHelp();
readFile('file.js');
