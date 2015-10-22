function play(track) { 
  this.playing = true;
});

musicPlayer.on('play', play);

musicPlayer.removeListener('play', play);
