'use strict';

import Audio from '../src/index.js';

const song = require('./song.json');
const player = new Audio(song);
player.play();
