// working with files and fs
var fs = require('fs');
// by default using utf8 but just to show example including it as an argument
// we are using synchronous approach to reading a file
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);
console.log('-------------');

/**
 * always use asynchronous for file reading
 *
 * if no 'utf8' is given as a parameter it returns a buffer binary data
 * could of used .toString() instead of passing 'utf8' as a parameter
 * ex: console.log(data.toString());
 *
 * this is a popular pattern in node called 'error-first callback'
 */
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
function(err, data) {
  console.log(data);
});
// just to show the order in which synchronous and asynchronous flows
console.log('Done!');
