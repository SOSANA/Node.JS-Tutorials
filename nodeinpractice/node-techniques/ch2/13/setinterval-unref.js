/**
 * 	- keeping a timer alive until the program cleanly exits
 * 	- extremely useful in situations where there isn't a good place to
 * 		call 'clearInterval()';
 */
function monitor() {
  console.log(process.memoryUsage());
}

var id = setInterval(monitor, 1000);
// tell node to stop the interval when the program has finished
// the long running operation
id.unref();

setTimeout(function() {
  console.log('Done!');
}, 5000);
