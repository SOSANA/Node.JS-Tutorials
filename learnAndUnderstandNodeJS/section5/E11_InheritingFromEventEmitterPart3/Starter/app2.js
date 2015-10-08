/* jslint node: true */
'use strict';

var EventEmitter = require('events');

// inherits from EventEmitter
class Greetr extends EventEmitter {
	// creating our constructor
	constructor() {
		// instead of directly calling the parent of the constructor like we
		// did in es5 by using 'EventEmitter.call(this);' we can use super to
		// call the constructor (EventEmitter) to make sure each object inherits
		// from EventEmitter
		super();
		this.greeting = 'Hello world!';
	}
	// creating our method
	greet(data) {
		// using template literal with back tick
		console.log(`${this.greeting}: ${data}`);
		this.emit('greet', data);
	}
}
// acreating a new object that inherits from Greetr
var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Sosana');

/*
// updating code blow from es5 to use es6
var EventEmitter = require('events');
var util = require('util');
function Greetr() {
	EventEmitter.call(this);
	this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
};

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Sosana');
*/
