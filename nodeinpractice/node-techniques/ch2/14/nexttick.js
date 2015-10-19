/**
 * Technique 14: Safely managing asynchronous API's
 * 	- sometimes you want to delay an operation just slightly
 * 	- in traditional javascript, it might be acceptable to use 'setTimeOut()'
 * 		with a small delay value.
 * 	- node provides a more efficient solution: 'process.nextTick'
 *
 * Problem:
 * 	- you want to write a method that returns an instance of EventEmitter or
 * 		accepts a callback that sometimes makes an asynchronous API call, but
 * 		not in all cases
 * Solution:
 * 	- use 'process.nextTick()' to wrap the synchronous operation
 *
 * 	- 'process.nextTick()' method allows you to place a callback at the head
 * 		of the next cylce of the run loop. That means it's a way of slightly
 * 		delaying something, and as a result it's more effieent thant just using
 * 		'setTimeOut()' with a zero delay argument
 */
var EventEmitter = require('events').EventEmitter;

function complexOperations() {
  var events = new EventEmitter();
  // the event will now be emitted when the listener is ready
  process.nextTick(function() {
    events.emit('success');
  });

  return events;
}

complexOperations().on('success', function() {
  console.log('success!');
});
