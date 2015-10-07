// architecture choice of which module pattern you want to use

// Module Pattern 1
var greet = require('./greet1');
greet();
// Module Pattern 2
// '.' after require, adding a method onto exports
var greet2 = require('./greet2').greet;
greet2();

// Module Pattern 3
var greet3 = require('./greet3');
greet3.greet();
// here we are changing the greet method
greet3.greeting = 'Changed hello world!';

var greet3b = require('./greet3');
// this uses the module cache which in turn uses memory in space
greet3b.greet();

// Module Pattern 4
// passing the function constructor rather than the object
var Greet4 = require('./greet4');
// creating a new greeter objects
var grtr = new Greet4();
grtr.greet();

// Module Pattern 5
var greet5 = require('./greet5');
greet5.greet();
// or
var greet5 = require('./greet5').greet;
greet5();
