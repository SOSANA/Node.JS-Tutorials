// Module Pattern 4
function Greetr() {
  this.greeting = 'Hello World!!!';
  this.greet = function() {
    console.log(this.greeting);
  };
}
// notice we are not creating an object with 'new Greetr()' like in greet3 but
// rather with the function constructor itself
module.exports = Greetr;
