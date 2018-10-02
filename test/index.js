'use strict';

import Audio from '../src/index.js';
import song from './song.json';

const player = new Audio(song);
player.play();
