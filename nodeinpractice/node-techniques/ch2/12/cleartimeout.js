/**
 * to cancel scheduled functions, retain a reference to the 'timeoutId()' returned
 * by 'setTimeout()' and then call 'clearTimeout'.
 */
function Bomb() {
  this.message = 'Boom!';
}

Bomb.prototype.explode = function() {
  console.log(this.message);
};

var bomb = new Bomb();

var timeoutId = setTimeout(bomb.explode.bind(bomb), 1000);
// defuse the bomb by calling 'clearTimeout()'
// to prevent bomb.explode from running
clearTimeout(timeoutId);
