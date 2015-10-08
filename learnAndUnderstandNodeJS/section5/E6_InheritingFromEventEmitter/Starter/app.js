// Inheriting from event emitter with 'on' listener and 'emit' emitter
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  this.greeting = 'Hello World';
}
// takes two parameters, first being the function we create, and second
// being from the module we wish to inherit from, ex: events
// Greetr inherits from EventEmitter
util.inherits(Greetr, EventEmitter);
// creating a new method greet that logs a greeting and emits this change
Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
};
// creating a new object that inherits from Greeter object
var greeter1 = new Greetr();
// applying 'on' method from events module to listen for changes (emit) and
// add our property on our object to an array that can be called
greeter1.on('greet', function(data) {
  console.log('Someone greeted!: ' + data);
});
//invoking our new object with greet method and passing in some data
greeter1.greet('Sosana');
