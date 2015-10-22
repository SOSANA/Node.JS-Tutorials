/**
 * Technique 20: Mixing in EventEmitter
 * 	- sometimes inheritance isn't the right way to use EventEmitter. In these
 * 		cases, mixing in EventEmitter may work
 *
 * Problem:
 * 	- This is an alternative option to technique 19. Rather than using EventEmitter
 * 		as a base class, it's possible to copy its methods into another class, This
 * 		is useful when you have an existing class and can't easily rework it to
 * 		inherit directly from EventEmitter
 * Solution:
 * 	- Using a for-in loop is sufficient for coping the properties from one prototype
 * 		to another. In this way you can copy the necessary properties from EventEmitter
 *
 * 	- this approach is more akin to a mixin, or multiple inheritance
 */
var EventEmitter = require('events').EventEmitter;

function MusicPlayer(track) {
  this.track = track;
  this.playing = false;
  // this is the for-in loop that copies the relevant properties
  for (var methodName in EventEmitter.prototype) {
    this[methodName] = EventEmitter.prototype[methodName];
  }
}

MusicPlayer.prototype = {
  toString: function() {
    if (this.playing) {
      return 'Now playing: ' + this.track;
    } else {
      return 'Stopped';
    }
  }
};

var musicPlayer = new MusicPlayer('Girl Talk - Still Here');

musicPlayer.on('play', function() {
  this.playing = true;
  console.log(this.toString());
});

musicPlayer.emit('play');
