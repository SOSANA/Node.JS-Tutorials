/**
 * shows how to incorrectly triggering asynchronous methods with events
 */
var EventEmitter = require('events').EventEmitter;

function complexOperations() {
  var events = new EventEmitter();

  events.emit('success');

  return events;
}
// this is an event that is triggered outside of any asynchronous callbacks
complexOperations().on('success', function() {
  console.log('success!');
});
