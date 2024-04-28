import library from './vimeo/player.js';
import "github.com/vimeo/player.js/tree/master/src/lib";
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});


const save = (currentTime, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem("videoplayer-current-time", serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  
  const load = timeupdate => {
    try {
      const serializedState = localStorage.getItem(currentTime);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };
  
  export default {
    save,
    load,
  };

  const onPlay = function(data) {
    // data is an object containing properties specific to that event
    currentTime;
    timeupdate;
};
player.on('play', onPlay);

player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

