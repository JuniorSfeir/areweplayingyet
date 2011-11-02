({
  description: 'Supports MP3 format',
  spec: '#',
  assert: function(finish) {
    var audio = this.audio = new Audio();
    finish( audio.canPlayType && (/probably|maybe/).test( audio.canPlayType('audio/mpeg') ) );
  }
})
