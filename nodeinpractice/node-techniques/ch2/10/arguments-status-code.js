/**
 * Technique 10: Exiting a program
 * 	- node allows you to specify an exit code when program terminates
 *
 * Problem:
 * 	- your node program needs to exit with specific codes
 * Solution:
 * 	- use 'process.exit()'
 *
 * 	- by default, node program returns a 0 exit status. This means the program
 * 		ran and terminated correctly. Any non-zero status is considered an error
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
    require('fs').createReadStream(file).pipe(process.stdout);
  } else {
    console.error('A file must be provided with the -r option');
    // both console.error and process.exit are used to correctly indidcate
    // an error occured
    process.exit(1);
  }
}

if (process.argv.length > 0) {
  process.argv.forEach(function(arg, index) {
    args[arg].apply(this, process.argv.slice(index + 1));
  });
}
