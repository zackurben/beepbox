'use strict';

import Audio from '../src/index.js';
import song from './song.json';

const player = new Audio(song);
let playing;

// Connect the note button
document.getElementById('note').addEventListener('click', () => {
  if (playing) {
    playing.stop();
  }

  playing = player.note();
});

// Connect the stop button
document.getElementById('stop').addEventListener('click', () => {
  if (playing) {
    playing.stop();
  }
});

// Connect the play button
document.getElementById('play').addEventListener('click', () => {
  if (playing) {
    playing.stop();
  }

  playing = player.play();
});

// Connect the loop button
document.getElementById('loop').addEventListener('click', () => {
  if (playing) {
    playing.stop();
  }

  playing = player.loop();
});
