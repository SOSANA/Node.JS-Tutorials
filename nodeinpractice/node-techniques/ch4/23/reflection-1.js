/**
 * Technique 23: Reflection
 * 	- sometimes you need to dynamically respond to changes to an instance of
 * 		an event EventEmitter, or query its listeners.
 *
 * Problem:
 * 	- you need to either catch when a listener has been added to an emitter, or
 * 		query the existing listeners
 * Solution:
 * 	- to track when listeners are added, EventEmitter emits a special event
 * 		called 'new-Listener'. Listeners added to this event will receive the
 * 		event name and the listener function
 *
 * 	- the difference between writing good Node code and great Node code comes
 * 		down to correctly reflect on EventEmitter. Being able to correctly reflect
 * 		on EventEmitter objects gives rise to a whole range of opportunites for
 *   	creating more flexible and intuitive APIs. One dynamic way of doing this
 *   	is through the 'new-Listener' event, emitted when listeners are added
 *   	using the 'on' method. This event is emitted by using EventEmitter itself,
 *   	it's implemented by using emit
 */
var util = require('util');
var events = require('events');

function EventTracker() {
  events.EventEmitter.call(this);
}

util.inherits(EventTracker, events.EventEmitter);

var eventTracker = new EventTracker();
// track whenever new listeners are added
eventTracker.on('newListener', function(name, listener){
  console.log('Event name added:', name);
});

eventTracker.on('a listener', function() {
  // This will cause 'newListener' to fire
});
