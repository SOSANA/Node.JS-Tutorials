var Emitter = require('./emitter');

var emtr = new Emitter();

// remember this is property names on an object
// pretending an event greet, and when a greet event happens we
// want to respond to it. Remember 'greet' will a property name
// for the property on the object that will hold all these events
emtr.on('greet', function () {
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function () {
  console.log('A greeting occurred');
});

console.log('Hello!');
emtr.emit('greet');
