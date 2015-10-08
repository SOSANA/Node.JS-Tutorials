var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
	// adding all person methods and properties to every object we created
	// with Policeman. 'this' keyword points to person object
	Person.call(this);
	this.badgenumber = '1234';
}
// Policeman inherits from Person
util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
console.log(officer.badgenumber);
