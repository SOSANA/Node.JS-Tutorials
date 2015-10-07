// Module Pattern 5, one of the most popular pattern and is also known as the revealing module pattern
// you won't have access to this variable outside module.exports
var greeting = 'Hello world!!!!';

function greet() {
  console.log(greeting);
}
// only exposing the greet function
module.exports = {
  greet: greet
}
