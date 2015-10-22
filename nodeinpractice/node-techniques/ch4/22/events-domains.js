/**
 * Technique 22: Managing errors with domains
 * 	- dealing with errors from multiple instances of EventEmitter can feel like
 * 		hard work, unless domains are used
 *
 * Problem:
 * 	- your dealing with multiple non-blocking APIs, but are struggling to
 * 		effectively handle errors
 * Solution:
 * 	- node's domain module can be used to centralize error handling for a set of
 * 		asynchronous operations, and this includes EventEmitter instances that emit
 * 		unhandled error events
 *
 * 	- node's domain API provides a way of wrapping existing non-blocking APIs and
 * 		exceptions with error handlers. This helps centralize error handling and is
 * 		particularly useful in cases where multiple interpdependent I/O operations
 * 		are being used
 */
var util = require('util');
// the domain module must be loaded, and then suitable instance created
// with the create method
var domain = require('domain');
var events = require('events');
var audioDomain = domain.create();

function AudioDevice() {
  events.EventEmitter.call(this);
  this.on('play', this.play.bind(this));
}

util.inherits(AudioDevice, events.EventEmitter);

AudioDevice.prototype.play = function() {
  this.emit('error', 'not implemented yet');
};

function MusicPlayer() {
  events.EventEmitter.call(this);

  this.audioDevice = new AudioDevice();
  this.on('play', this.play.bind(this));
  // this error and any other errors will be caught by the same error handler
  this.emit('error', 'No audio tracks are available');
}

util.inherits(MusicPlayer, events.EventEmitter);

MusicPlayer.prototype.play = function() {
  this.audioDevice.emit('play');
  console.log('Now playing');
};

audioDomain.on('error', function(err) {
  console.log('audioDomain error:', err);
});
// any code that raises errors inside this callback will be covered by the domain
audioDomain.run(function() {
  var musicPlayer = new MusicPlayer();
  musicPlayer.play();
});
