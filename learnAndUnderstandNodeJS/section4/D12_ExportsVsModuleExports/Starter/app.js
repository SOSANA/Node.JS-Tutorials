// module.exports vs exports, long story short just use module.exports
// broken reference, can only use exports if you Mutate
var greet = require('./greet');
// Mutating exports if you want to use a short hand
var greet2 = require('./greet2');
// now we can use exports
greet2.greet();
