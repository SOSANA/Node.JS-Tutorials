// function constructors
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
// creating a greet prototype
Person.prototype.greet = function() {
  console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

// john and jane objects Inherit from Person  
var john = new Person('John', 'Doe');
john.greet();
console.log(john.firstname);

var jane = new Person('Jane', 'Doe');
jane.greet();
// Do Not Use (Deprecated)
// lets you see what the prototype your working with actually is
console.log(john.__proto__);
console.log(jane.__proto__);
// can also check if john and jane are the same prototype
console.log(john.__proto__ === jane.__proto__);
