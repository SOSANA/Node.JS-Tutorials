/**
 * Technique 12: Executing functions after a delay with setTimeout
 * 	- its possible to run code once after a delay using node's setTimeout global
 * 		method
 *
 * Problem:
 * 	- you want to execute a funciton after a delay
 * Solution:
 * 	- use 'setTimeout()', and use a function.prototype.bind if necessary
 *
 * 	- this seems simple and contrived, but this is used most commonly in tests
 * 		were asynchronous API's are being tested and a small delay is neccessary to
 * 		simulate real-world behavior
 */
function Bomb() {
  this.message = 'Boom!';
}

Bomb.prototype.explode = function() {
  console.log(this.message);
};

var bomb = new Bomb();
// call .bind to ensure the method is bound correctly
// so it can access internal properties
setTimeout(bomb.explode.bind(bomb), 1000);
