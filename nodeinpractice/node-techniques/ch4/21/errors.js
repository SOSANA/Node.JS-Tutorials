/**
 * Technique 21: Managing errors
 * 	- error handling with EventEmitter has its own special rules that must be
 * 		adhered to. This technique explains how error handling works
 *
 * Problem:
 * 	- your're using EventEmitterand want to gracefully handle when errors occur,
 * 		but it keeps raising exceptions
 * Solution:
 * 	- to prevent EventEmitter from throwing exceptions whenever an error event
 * 		is emitted, add a listner to the error event. This can be done with
 * 		custom classes or any standard class that inherits from EventEmitter
 *
 * 	- to handle errors, bind a listner to the error event
 */
var util = require('util');
var events = require('events');

function MusicPlayer() {
  events.EventEmitter.call(this);
}

util.inherits(MusicPlayer, events.EventEmitter);

var musicPlayer = new MusicPlayer();

musicPlayer.on('play', function(track) {
  this.emit('error', 'unable to play!');
});
// listening for an error event
musicPlayer.on('error', function(err) { 
  console.error('Error:', err);
});

setTimeout(function() {
  musicPlayer.emit('play', 'Little Comets - Jennifer');
}, 1000);
