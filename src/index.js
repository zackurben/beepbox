'use strict';

import Note from './notes';

export default class Audio {
  constructor(song, volume = 0.2) {
    this.song = song;
    this.volume = volume;

    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this._volume = this.context.createGain();
    this._volume.connect(this.context.destination);
    this._volume.gain.value = this.volume;
  }

  /**
   * Generate a generic node for common usage.
   *
   * @param {Array} notes
   *   The list of notes to use in the node.
   * @param {OscillatorNode} lastNode
   *   The last node being played in the sequence.
   *
   * @returns {Object}
   *   The generated node.
   */
  static generateNode(notes, lastNode) {
    const node = {
      notes,
      stop: () => notes.forEach(note => note.stop())
    };

    let temp = {};
    if (lastNode) {
      temp.last = lastNode;
    }

    return Object.assign({}, temp, node);
  }

  /**
   * Play the loaded clip once.
   *
   * @returns {Object}
   *   The generic node from Audio.generateNode() for this sequence.
   */
  play() {
    let notes = [];
    let speed = 1000 / (this.song.beatsPerMinute / 60) / 1000 / 4;
    let lastNode;
    let largestTime;

    this.song.channels.forEach(channel => {
      let [instrument] = channel.instruments;

      channel.sequence.forEach((pattern, patternIndex) => {
        []
          .concat(
            {
              instrument: 1,
              notes: []
            },
            channel.patterns
          )
          [pattern].notes.forEach(note => {
            note.pitches.forEach(pitch => {
              let [start, stop] = note.points;
              if (!Note[pitch]) {
                return;
              }

              let noteDuration = (stop.tick - start.tick) * speed;
              let noteDelay = speed * start.tick + patternIndex * 32 * speed;
              let end = noteDelay + noteDuration;
              let node = this.note(
                Note[pitch],
                noteDuration,
                noteDelay,
                instrument.wave,
                0.1
              );

              if (!largestTime) {
                largestTime = end;
              }
              if (!lastNode) {
                lastNode = node;
              }
              if (end >= largestTime) {
                largestTime = end;
                lastNode = node;
              }

              notes.push(node);
            });
          });
      });
    });

    const [last] = lastNode.notes;
    return Audio.generateNode(notes, last);
  }

  /**
   * Play the loaded clip infinitely.
   *
   * @returns {Object}
   *   The generic node from Audio.generateNode() for this sequence.
   */
  loop() {
    let node = this.play();
    if (node.last) {
      node.last.onended = () => Object.assign(node, this.play());
    }

    return node;
  }

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
  note(freq = 440, len = 0.1, off = 0, type = 'sine', gain = 0.2) {
    let volume = this.context.createGain();
    volume.connect(this.context.destination);
    volume.gain.value = gain;

    let osc = this.context.createOscillator();
    osc.frequency.value = freq;
    osc.type = type;

    let now = this.context.currentTime;
    osc.connect(volume);
    osc.start(now + off);
    osc.stop(now + off + len);

    return Audio.generateNode([osc]);
  }
}
