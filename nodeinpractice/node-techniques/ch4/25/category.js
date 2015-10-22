/**
 * Technique 25: Categorizing event names
 * 	- some projects just have too many events. This technique shows how to
 * 		deals with bugs caused by mistyped event names
 *
 * Problem:
 * 	- your losing track of the events in your program, and are concerned that
 * 		it may be too easy to write an incorrect event name somewhere causing a
 * 		difficult-to-track bug
 * Solution:
 * 	- the easiest way to solve this problem is to use an object to act as central
 * 		dictionary for all the event names. This creates a centralized location of
 * 		each event in the project
 *
 * 	- its hard to keep track of event names littered throughout a project. one
 * 		way to manage this is to keep each event name in one place
 */
var util = require('util');
var events = require('events');

function MusicPlayer() {
  events.EventEmitter.call(this);
  this.on(MusicPlayer.events.play, this.play.bind(this));
}
// the object used to store the event list is aliased for convenience
var e = MusicPlayer.events = {
  play: 'play',
  pause: 'pause',
  stop: 'stop',
  ff: 'ff',
  rw: 'rw',
  addTrack: 'add-track'
};

util.inherits(MusicPlayer, events.EventEmitter);

MusicPlayer.prototype.play = function() {
  this.playing = true;
};

var musicPlayer = new MusicPlayer();
// when adding new listeners, users of the class can refer to the events list
// rather than writing the event names as strings
musicPlayer.on(e.play, function() {
  console.log('Now playing');
});

musicPlayer.emit(e.play);
