/**
 * Technique 19: Inheriting from EventEmitter
 * 	- create custom classes based on EventEmitter. By understanding the principles
 * 		in this technique, you'll learn how to use EventEmitter, and how to better
 * 		use modules that are built with it
 *
 * Problem:
 * 	- you want to use an event-based approach to solave a problem. You have a
 * 		class that you'd like to operate when asynchronous events occur
 * Solution:
 * 	- the canonical example of using event sin NOde is inheriting from EventEmitter.
 * 		This can be done by using a simple prototype class.
 * 	- remember to to call EventEmitter's constructor from within your new constructor
 *
 * 	- web, desktop, and mobile user interfaces have one thing common: they're
 * 		event-based. Events are great paradigm for dealing with something inherently
 * 		asynchrounous: the input from human beings.
 */
var util = require('util');
var events = require('events');
var AudioDevice = {
  play: function(track) {
    // Stub: Trigger playback through iTunes, mpg123, etc.
  },

  stop: function() {
  }
};

function MusicPlayer() {
  this.playing = false;
  events.EventEmitter.call(this);
}

util.inherits(MusicPlayer, events.EventEmitter);

var musicPlayer = new MusicPlayer();

musicPlayer.on('play', function(track) {
  this.playing = true;
  AudioDevice.play(track);
});

musicPlayer.on('stop', function() {
  this.playing = false;
  AudioDevice.stop();
});

musicPlayer.emit('play', 'The Roots - The Fire');

setTimeout(function() {
  musicPlayer.emit('stop');
}, 1000);
