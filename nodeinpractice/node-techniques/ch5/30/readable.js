/**
 * Technique 30: Correctly inheriting from the stream base classes
 * 	- node's base classes for streams can be used as a starting point for new
 * 		modules and subclasses. It's important to understand what problems each
 * 		solves, and how to correctly inherit from them
 *
 * Problem:
 * 	- you want to solve a problem by creting a streamable API, but your're
 * 		not sure which base class to use and how to use it
 * Solution:
 * 	- decide on which base classs closely matches the problem at hand and
 * 		inherit from it using Object.prototype.call and util.inherits();
 *
 * 	-
 */
var Readable = require('stream').Readable;

function MyStream(options) {
  // call the parent constructor, and be sure to pass any options to it as well
  Readable.call(this, options);
}
// use Object.create to correctly set up the prototype chain
MyStream.prototype = Object.create(Readable.prototype, {
  constructor: { value: MyStream }
});
