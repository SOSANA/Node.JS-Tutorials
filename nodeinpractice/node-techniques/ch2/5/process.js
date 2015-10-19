/**
 * Technique 5: Reading and writing to standar I/O
 *
 * 	- getting data in and out of a program using the process objects
 *
 * Problem:
 * 	- you want to pipe data to and from program
 * Solution:
 * 	- use process.stdout and process.stdin
 *
 * Run with:
 * 	- cat file.txt | node process.js
 */
// tell the stream we're ready to start reading
process.stdin.resume();
process.stdin.setEncoding('utf8');

// this callback transfors the data in chunks when they're available
process.stdin.on('data', function(text) {
  process.stdout.write(text.toUpperCase());
});
