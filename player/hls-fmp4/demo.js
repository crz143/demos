const conf = {
  key: '<YOUR PLAYER KEY>'
};

var source = {
  hls: 'https://livehin.fancode.com:443/hls/live/2093039/1686hindi49751ta-di/master.m3u8',
  poster: 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/art-of-motion_poster.jpg'
};

var playerContainer = document.getElementById('player-container');
var player = new bitmovin.player.Player(playerContainer, conf);

player.load(source);
