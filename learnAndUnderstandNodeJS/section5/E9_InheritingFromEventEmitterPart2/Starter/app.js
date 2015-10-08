var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	// this one line of code ensures all objects created get all the methods
	// and properties that an EventEmitter would have
	// this is what they call the 'super constructor' in othe languages
	EventEmitter.call(this);
	this.greeting = 'Hello world!';
}
/**
 * 'util.inherits' sets up the prototype chain so that any objects we create with
 * Greetr would find the prototype on EventEmitter down its prototype chain giving all
 * of our Greetr objects access to all the methods and properties that all EventEmitters
 * have access too like '.on' and '.emit'. 'Greetr' inherits from EventEmitter
 */
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
	console.log(this.greeting);
	this.emit('greet');
};

var greeter1 = new Greetr();

greeter1.on('greet', function() {
	console.log('Someone greeted!');
});

greeter1.greet();
