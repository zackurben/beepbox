# Beepbox

> Note: This package was originally called `beepbox`, but I've renamed it as `beepbox-lite` to give access to the rightful owner of Beepbox!

A simple library for playing [beepbox](https://www.beepbox.co/) songs. This library is a more polished version of what I made for my [2018 JS13kGames entry](https://github.com/zackurben/js13k-2018)!

This is an open source project under the MIT license, see [LICENSE.md](LICENSE.md) for additional information.

# Usage

### Create an audio context and load a song
```js
import Audio from 'beepbox';
import song from './song.json';
const player = new Audio(song);
```

### Play a beepbox song (once)
```js
/**
 * Play the loaded clip once.
 *
 * @returns {Object}
 *   The generic node from Audio.generateNode() for this sequence.
 */
player.play();
```

### Loop a beepbox song (infinitely)
```js
/**
 * Play the loaded clip infinitely.
 *
 * @returns {Object}
 *   The generic node from Audio.generateNode() for this sequence.
 */
player.loop();
```

### Play a single note
```js
/**
 * Play a single note with the given params.
 *
 * @param {Number} freq
 *   The note frequency to play.
 * @param {Number} len
 *   The duration to play the note (seconds).
 * @param {Number} off
 *   The time offset to play the note (seconds).
 * @param {String} type
 *   The OscillatorNode type to use; https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type
 * @param {Number} gain
 *   The gain (volume) to play the note at (0.0 - 1.0).
 *
 * @returns {Object}
 *   The generic node from Audio.generateNode() for this sequence.
 */
player.note(freq, len, off, type, gain);
```

# Example

```js
'use strict';

import Audio from 'beepbox';
import song from './song.json';

const player = new Audio(song);
player.play();
```

# Contact
  - Author: Zack Urben
  - Twitter: https://twitter.com/zackurben (better)
  - Contact: zackurben@gmail.com
