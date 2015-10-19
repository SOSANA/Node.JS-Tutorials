/**
 * Technique 6: Logging messages
 *
 * Problem:
 * - you want to log different types of messages to the console
 * Solution:
 * - use console.log, console.info, console.error and console.warn. Be sure to
 *   take full advantage of the built-in formatting facilities provided by these
 *   methods
 *
 * - console object has several methods tha tcan be used to output different types
 * 	 of messages.
 * - variables can be interpolated, or simply appended alongside string literals
 *
 * Interpolation:
 * - is a method of constructing new data points within the range of a discrete
 * 	 set of known data points
 */
var name = 'alex';
var user = { name: 'alex' };

console.log('Hello');
// simple variable interpolation can be used with strings or numbers
console.log('Hello %s', name);
// a space will be automatically be added after the colon
console.log('Hello:', name);
console.log('Hello:', user);

console.error('Error, bad user:', user);
