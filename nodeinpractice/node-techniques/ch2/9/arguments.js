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
  // pipe out a file through the standard output stream
  require('fs').createReadStream(file).pipe(process.stdout);
}
// call a matching method from the arg parameter model, and slice the full listener
// of arguments to effectively support passsing options from command-line flags
if (process.argv.length > 0) {
  process.argv.forEach(function(arg, index) {
    if (args[arg]) {
      args[arg].apply(this, process.argv.slice(index + 1));
    }
  });
}

displayHelp();
readFile('file.js');
