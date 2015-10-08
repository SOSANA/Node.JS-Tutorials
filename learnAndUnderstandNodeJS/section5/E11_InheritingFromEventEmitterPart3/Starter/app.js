/* jslint node: true */
'use strict';

var Greetr = require('./greetr');
// acreating a new object that inherits from Greetr
var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');

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

greeter1.greet('Tony');
*/
