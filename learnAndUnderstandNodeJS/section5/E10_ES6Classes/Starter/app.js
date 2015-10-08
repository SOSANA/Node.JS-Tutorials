/**
 * es6 classes:
 * a new way to create objects. works the same way as before but adds syntactic sugar
 */
/* jslint node: true */
'use strict';
class Person {
  // adding our properties like we did in a function constructor
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  // creating a method and is automatically added as the prototype
  greet() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
}

// still use the 'new' keyword in es6
var john = new Person('John', 'Doe');
john.greet();
console.log(john.firstname);

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);

/*
 // converting our es5 code to use es6 classes above
 function Person(firstname, lastname) {
   this.firstname = firstname;
   this.lastname = lastname;
 }

 Person.prototype.greet = function() {
   console.log('Hello, ' + this.firstname + ' ' + this.lastname);
 };


 var john = new Person('John', 'Doe');
 john.greet();
 console.log(john.firstname);

 var jane = new Person('Jane', 'Doe');
 jane.greet();

 console.log(john.__proto__);
 console.log(jane.__proto__);
 console.log(john.__proto__ === jane.__proto__);
*/
