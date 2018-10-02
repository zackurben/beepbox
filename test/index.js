'use strict';

import Audio from '../src';

const song = require('./song.json');
const player = Audio(song);
player.play();
