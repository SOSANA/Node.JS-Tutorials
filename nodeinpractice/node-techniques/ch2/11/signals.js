/**
 * Technique 11: Responding to signals
 * 	- node programs dcan respond to signals sent by other process
 *
 * Problem:
 * 	- you need to respond to signals sent by other processes
 * Solution:
 * 	- use the signal events that are sent to the process object
 *
 * 	- most modern os use signals as a way of sending a simple message to a programs
 * 	- signal handlers are typically use in a programs that run in the backround,
 * 		because it might be the only way of communicating with them.
 * 	- the 'process' object is an 'EventEmitter', which means you can add event
 * 		listeners to it
 * 	- signal listeners enable you to cater to the expected behavior of unix programs
 * 		- ex: many servers and daemons will reload config files when they recieve a
 * 					'SIGHUP' signals.
 */
// read from stdin so the program will run until CTRL-C is pressed or killed
process.stdin.resume();
// binding a listener to the SIGHUP signal
process.on('SIGHUP', function () {
  console.log('Reloading configuration...');
});
// the PID is displayed so you can use it to send signals using the kill command
console.log('PID:', process.pid);
