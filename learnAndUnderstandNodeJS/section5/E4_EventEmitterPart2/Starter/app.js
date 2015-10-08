/**
 * avoid having a 'magical string' that has some special meaning in our code
 * this is bad because it makes it easy for a typo to cause a bug, and hard
 * for tools to help us find it, instead we use a common design pattern such
 * as the example below with eventConfig, look at original example in part 1
 */
var Emitter = require('events');
var eventConfig = require('./config').events;
var emtr = new Emitter();

// remember this is property names on an object
// pretending an event greet, and when a greet event happens we
// want to respond to it. Remember 'greet' will a property name
// for the property on the object that will hold all these events
emtr.on(eventConfig.GREET, function () {
  console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function () {
  console.log('A greeting occurred');
});

console.log(eventConfig.GREET);
emtr.emit(eventConfig.GREET);
