// function statement
function greet() {
  console.log('hi');
}
greet();

// functions are First-Class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function Expression
var greetMe = function() {
  console.log('Hi Sosana');
};
greetMe();

// its First-Class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
  console.log('Hello Sosana');
});
