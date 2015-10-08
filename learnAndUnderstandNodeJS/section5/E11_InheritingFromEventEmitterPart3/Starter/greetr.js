/* jslint node: true */
'use strict';

var EventEmitter = require('events');

// inherits from EventEmitter
// this is called an 'class expression'
module.exports = class Greetr extends EventEmitter {
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
};
