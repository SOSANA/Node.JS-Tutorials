/**
 * Technique 13: Running callbacks periodically with timers
 * 	- node can also run callbacks at regular intervals using 'setInterval()',
 * 		which works in a fashion similar to setTimeout()
 *
 * Problem:
 * 	- you want to run a callback at regular interval
 * Solution:
 * 	- use 'setInterval()', and 'clearInterval()' to stop the timer
 *
 * 	- the callback will be executed on or just after the specified delay, and
 * 		will run in the event loop just after I/O (and any calls to setImmedate(),
 * 		as detailed in technique 14)
 */
function tick() {
  console.log('tick:', Date.now());
}

function tock() {
  console.log('tock:', Date.now());
}

setInterval(tick, 1000);

setTimeout(function() {
  // run another 'setInverval()' after the first one
  setInterval(tock, 1000);
}, 500);
