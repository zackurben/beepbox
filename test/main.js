/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Audio; });\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes */ \"./src/notes.js\");\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Audio =\n/*#__PURE__*/\nfunction () {\n  function Audio(song) {\n    var volume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;\n\n    _classCallCheck(this, Audio);\n\n    this.song = song;\n    this.volume = volume;\n    this.context = new (window.AudioContext || window.webkitAudioContext)();\n    this._volume = this.context.createGain();\n\n    this._volume.connect(this.context.destination);\n\n    this._volume.gain.value = this.volume;\n  }\n\n  _createClass(Audio, [{\n    key: \"play\",\n    value: function play() {\n      var _this = this;\n\n      var out = [];\n      var speed = 1000 / (this.song.beatsPerMinute / 60) / 1000 / 4;\n      var lastNode;\n      var largestTime;\n      this.song.channels.forEach(function (channel) {\n        var _channel$instruments = _slicedToArray(channel.instruments, 1),\n            instrument = _channel$instruments[0];\n\n        channel.sequence.forEach(function (pattern, patternIndex) {\n          [].concat({\n            instrument: 1,\n            notes: []\n          }, channel.patterns)[pattern].notes.forEach(function (note) {\n            note.pitches.forEach(function (pitch) {\n              var _note$points = _slicedToArray(note.points, 2),\n                  start = _note$points[0],\n                  stop = _note$points[1];\n\n              if (!_notes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][pitch]) {\n                return;\n              }\n\n              var noteDuration = (stop.tick - start.tick) * speed;\n              var noteDelay = speed * start.tick + patternIndex * 32 * speed;\n              var end = noteDelay + noteDuration;\n\n              var node = _this.note(_notes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][pitch], noteDuration, noteDelay, instrument.wave, 0.1);\n\n              if (!largestTime) {\n                largestTime = end;\n              }\n\n              if (!lastNode) {\n                lastNode = node;\n              }\n\n              if (end >= largestTime) {\n                largestTime = end;\n                lastNode = node;\n              }\n            });\n          });\n        });\n      });\n      return lastNode;\n    }\n  }, {\n    key: \"loop\",\n    value: function loop() {\n      var _this2 = this;\n\n      var lastNode = this.play();\n\n      lastNode.onended = function () {\n        return _this2.play();\n      };\n    }\n  }, {\n    key: \"stop\",\n    value: function stop(node) {\n      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;\n      this.node.stop(delay);\n    }\n    /**\n     * Play a single note with the given params.\n     *\n     * @param {Number} freq\n     *   The note frequency to play.\n     * @param {Number} len\n     *   The duration to play the note (seconds).\n     * @param {Number} off\n     *   The time offset to play the note (seconds).\n     * @param {String} type\n     *   The OscillatorNode type to use; https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type\n     * @param {Number} gain\n     *   The gain (volume) to play the note at (0.0 - 1.0).\n     */\n\n  }, {\n    key: \"note\",\n    value: function note() {\n      var freq = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 440;\n      var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;\n      var off = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'sine';\n      var gain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.2;\n      var volume = this.context.createGain();\n      volume.connect(this.context.destination);\n      volume.gain.value = gain;\n      var osc = this.context.createOscillator();\n      osc.frequency.value = freq;\n      osc.type = type;\n      var now = this.context.currentTime;\n      osc.connect(volume);\n      osc.start(now + off);\n      osc.stop(now + off + len);\n      return osc;\n    }\n  }]);\n\n  return Audio;\n}();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\n * Key to Frequency map.\n *\n * Taken from: https://pages.mtu.edu/~suits/notefreqs.html\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  107: 7902.13,\n  106: 7458.62,\n  105: 7040.0,\n  104: 6644.88,\n  103: 6271.93,\n  102: 5919.91,\n  101: 5587.65,\n  100: 5274.04,\n  99: 4978.03,\n  98: 4698.63,\n  97: 4434.92,\n  96: 4186.01,\n  95: 3951.07,\n  94: 3729.31,\n  93: 3520.0,\n  92: 3322.44,\n  91: 3135.96,\n  90: 2959.96,\n  89: 2793.83,\n  88: 2637.02,\n  87: 2489.02,\n  86: 2349.32,\n  85: 2217.46,\n  84: 2093.0,\n  83: 1975.53,\n  82: 1864.66,\n  81: 1760.0,\n  80: 1661.22,\n  79: 1567.98,\n  78: 1479.98,\n  77: 1396.91,\n  76: 1318.51,\n  75: 1244.51,\n  74: 1174.66,\n  73: 1108.73,\n  72: 1046.5,\n  71: 987.77,\n  70: 932.33,\n  69: 880.0,\n  68: 830.61,\n  67: 783.99,\n  66: 739.99,\n  65: 698.46,\n  64: 659.25,\n  63: 622.25,\n  62: 587.33,\n  61: 554.37,\n  60: 523.25,\n  59: 493.88,\n  58: 466.16,\n  57: 440.0,\n  56: 415.3,\n  55: 392.0,\n  54: 369.99,\n  53: 349.23,\n  52: 329.63,\n  51: 311.13,\n  50: 293.66,\n  49: 277.18,\n  48: 261.63,\n  47: 246.94,\n  46: 233.08,\n  45: 220.0,\n  44: 207.65,\n  43: 196.0,\n  42: 185.0,\n  41: 174.61,\n  40: 164.81,\n  39: 155.56,\n  38: 146.83,\n  37: 138.59,\n  36: 130.81,\n  35: 123.47,\n  34: 116.54,\n  33: 110.0,\n  32: 103.83,\n  31: 98.0,\n  30: 92.5,\n  29: 87.31,\n  28: 82.41,\n  27: 77.78,\n  26: 73.42,\n  25: 69.3,\n  24: 65.41,\n  23: 61.74,\n  22: 58.27,\n  21: 55.0,\n  20: 51.91,\n  19: 49.0,\n  18: 46.25,\n  17: 43.65,\n  16: 41.2,\n  15: 38.89,\n  14: 36.71,\n  13: 34.65,\n  12: 32.7,\n  11: 30.87,\n  10: 29.14,\n  9: 27.5,\n  8: 25.96,\n  7: 24.5,\n  6: 23.12,\n  5: 21.83,\n  4: 20.6,\n  3: 19.45,\n  2: 18.35,\n  1: 17.32,\n  0: 16.35\n});\n\n//# sourceURL=webpack:///./src/notes.js?");

/***/ }),

/***/ "./test/index.js":
/*!***********************!*\
  !*** ./test/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.js */ \"./src/index.js\");\n/* harmony import */ var _song_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song.json */ \"./test/song.json\");\nvar _song_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./song.json */ \"./test/song.json\", 1);\n\n\n\n\nvar player = new _src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_song_json__WEBPACK_IMPORTED_MODULE_1__); // Connect the note button\n\ndocument.getElementById('note').addEventListener('click', function () {\n  return player.note();\n});\n\n//# sourceURL=webpack:///./test/index.js?");

/***/ }),

/***/ "./test/song.json":
/*!************************!*\
  !*** ./test/song.json ***!
  \************************/
/*! exports provided: format, version, scale, key, introBars, loopBars, beatsPerBar, ticksPerBeat, beatsPerMinute, reverb, channels, default */
/***/ (function(module) {

eval("module.exports = {\"format\":\"BeepBox\",\"version\":6,\"scale\":\"easy :)\",\"key\":\"C\",\"introBars\":0,\"loopBars\":16,\"beatsPerBar\":8,\"ticksPerBeat\":4,\"beatsPerMinute\":151,\"reverb\":0,\"channels\":[{\"type\":\"pitch\",\"octaveScrollBar\":3,\"instruments\":[{\"type\":\"chip\",\"volume\":100,\"wave\":\"square\",\"transition\":\"sudden\",\"filter\":\"bright\",\"chorus\":\"union\",\"effect\":\"none\"}],\"patterns\":[{\"instrument\":1,\"notes\":[{\"pitches\":[67],\"points\":[{\"tick\":4,\"pitchBend\":0,\"volume\":100},{\"tick\":5,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[69],\"points\":[{\"tick\":8,\"pitchBend\":0,\"volume\":100},{\"tick\":10,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[60],\"points\":[{\"tick\":14,\"pitchBend\":0,\"volume\":100},{\"tick\":16,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[67],\"points\":[{\"tick\":18,\"pitchBend\":0,\"volume\":100},{\"tick\":20,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[57],\"points\":[{\"tick\":20,\"pitchBend\":0,\"volume\":100},{\"tick\":22,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[55],\"points\":[{\"tick\":22,\"pitchBend\":0,\"volume\":100},{\"tick\":24,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[52],\"points\":[{\"tick\":24,\"pitchBend\":0,\"volume\":100},{\"tick\":26,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[48],\"points\":[{\"tick\":27,\"pitchBend\":0,\"volume\":100},{\"tick\":28,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[45],\"points\":[{\"tick\":28,\"pitchBend\":0,\"volume\":100},{\"tick\":29,\"pitchBend\":0,\"volume\":100}]}]},{\"instrument\":1,\"notes\":[{\"pitches\":[69],\"points\":[{\"tick\":1,\"pitchBend\":0,\"volume\":100},{\"tick\":2,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[67],\"points\":[{\"tick\":3,\"pitchBend\":0,\"volume\":100},{\"tick\":4,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[55],\"points\":[{\"tick\":8,\"pitchBend\":0,\"volume\":100},{\"tick\":9,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[52],\"points\":[{\"tick\":9,\"pitchBend\":0,\"volume\":100},{\"tick\":10,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[50],\"points\":[{\"tick\":11,\"pitchBend\":0,\"volume\":100},{\"tick\":16,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[45],\"points\":[{\"tick\":20,\"pitchBend\":0,\"volume\":100},{\"tick\":21,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[43],\"points\":[{\"tick\":21,\"pitchBend\":0,\"volume\":100},{\"tick\":22,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[40],\"points\":[{\"tick\":22,\"pitchBend\":0,\"volume\":100},{\"tick\":23,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[43],\"points\":[{\"tick\":24,\"pitchBend\":0,\"volume\":100},{\"tick\":25,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[38],\"points\":[{\"tick\":25,\"pitchBend\":0,\"volume\":100},{\"tick\":28,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[40],\"points\":[{\"tick\":28,\"pitchBend\":0,\"volume\":100},{\"tick\":32,\"pitchBend\":0,\"volume\":100}]}]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]}],\"sequence\":[0,0,0,1,1,2,2,1,1,2,2,2,2,2,1,1]},{\"type\":\"pitch\",\"octaveScrollBar\":2,\"instruments\":[{\"type\":\"chip\",\"volume\":100,\"wave\":\"square\",\"transition\":\"seamless\",\"filter\":\"decay medium\",\"chorus\":\"fifths\",\"effect\":\"none\"}],\"patterns\":[{\"instrument\":1,\"notes\":[{\"pitches\":[57],\"points\":[{\"tick\":4,\"pitchBend\":0,\"volume\":100},{\"tick\":6,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[55],\"points\":[{\"tick\":8,\"pitchBend\":0,\"volume\":100},{\"tick\":10,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[52],\"points\":[{\"tick\":14,\"pitchBend\":0,\"volume\":100},{\"tick\":16,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[50],\"points\":[{\"tick\":20,\"pitchBend\":0,\"volume\":100},{\"tick\":22,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[52],\"points\":[{\"tick\":24,\"pitchBend\":0,\"volume\":100},{\"tick\":26,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[57],\"points\":[{\"tick\":28,\"pitchBend\":0,\"volume\":100},{\"tick\":30,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[55],\"points\":[{\"tick\":30,\"pitchBend\":0,\"volume\":100},{\"tick\":32,\"pitchBend\":0,\"volume\":100}]}]},{\"instrument\":1,\"notes\":[{\"pitches\":[55],\"points\":[{\"tick\":2,\"pitchBend\":0,\"volume\":100},{\"tick\":4,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[52],\"points\":[{\"tick\":6,\"pitchBend\":0,\"volume\":100},{\"tick\":8,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[38],\"points\":[{\"tick\":8,\"pitchBend\":0,\"volume\":100},{\"tick\":10,\"pitchBend\":0,\"volume\":67},{\"tick\":12,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[48],\"points\":[{\"tick\":12,\"pitchBend\":0,\"volume\":100},{\"tick\":14,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[48,33],\"points\":[{\"tick\":20,\"pitchBend\":0,\"volume\":100},{\"tick\":22,\"pitchBend\":0,\"volume\":67},{\"tick\":24,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[55],\"points\":[{\"tick\":24,\"pitchBend\":0,\"volume\":100},{\"tick\":28,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[52],\"points\":[{\"tick\":30,\"pitchBend\":0,\"volume\":100},{\"tick\":32,\"pitchBend\":0,\"volume\":100}]}]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]}],\"sequence\":[0,0,1,1,2,1,2,2,2,0,0,1,1,2,2,1]},{\"type\":\"pitch\",\"octaveScrollBar\":1,\"instruments\":[{\"type\":\"chip\",\"volume\":100,\"wave\":\"square\",\"transition\":\"sudden\",\"filter\":\"bright\",\"chorus\":\"union\",\"effect\":\"none\"}],\"patterns\":[{\"instrument\":1,\"notes\":[{\"pitches\":[36],\"points\":[{\"tick\":0,\"pitchBend\":0,\"volume\":100},{\"tick\":4,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[33],\"points\":[{\"tick\":4,\"pitchBend\":0,\"volume\":100},{\"tick\":8,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[28],\"points\":[{\"tick\":8,\"pitchBend\":0,\"volume\":100},{\"tick\":12,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[21],\"points\":[{\"tick\":12,\"pitchBend\":0,\"volume\":100},{\"tick\":16,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[14,16],\"points\":[{\"tick\":20,\"pitchBend\":0,\"volume\":100},{\"tick\":24,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[16],\"points\":[{\"tick\":24,\"pitchBend\":0,\"volume\":100},{\"tick\":28,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[16],\"points\":[{\"tick\":28,\"pitchBend\":0,\"volume\":100},{\"tick\":32,\"pitchBend\":0,\"volume\":100}]}]},{\"instrument\":1,\"notes\":[{\"pitches\":[19],\"points\":[{\"tick\":0,\"pitchBend\":0,\"volume\":100},{\"tick\":3,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[21],\"points\":[{\"tick\":4,\"pitchBend\":0,\"volume\":100},{\"tick\":5,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[21],\"points\":[{\"tick\":8,\"pitchBend\":0,\"volume\":100},{\"tick\":9,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[21],\"points\":[{\"tick\":13,\"pitchBend\":0,\"volume\":100},{\"tick\":14,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[24],\"points\":[{\"tick\":14,\"pitchBend\":0,\"volume\":100},{\"tick\":15,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[26],\"points\":[{\"tick\":16,\"pitchBend\":0,\"volume\":100},{\"tick\":24,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[36],\"points\":[{\"tick\":24,\"pitchBend\":0,\"volume\":100},{\"tick\":25,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[33],\"points\":[{\"tick\":25,\"pitchBend\":0,\"volume\":100},{\"tick\":26,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[31],\"points\":[{\"tick\":26,\"pitchBend\":0,\"volume\":100},{\"tick\":27,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[31],\"points\":[{\"tick\":27,\"pitchBend\":0,\"volume\":100},{\"tick\":28,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[28],\"points\":[{\"tick\":28,\"pitchBend\":0,\"volume\":100},{\"tick\":29,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[26],\"points\":[{\"tick\":29,\"pitchBend\":0,\"volume\":100},{\"tick\":30,\"pitchBend\":0,\"volume\":100}]}]},{\"instrument\":1,\"notes\":[{\"pitches\":[24],\"points\":[{\"tick\":0,\"pitchBend\":0,\"volume\":100},{\"tick\":4,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[26],\"points\":[{\"tick\":4,\"pitchBend\":0,\"volume\":100},{\"tick\":8,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[28],\"points\":[{\"tick\":10,\"pitchBend\":0,\"volume\":100},{\"tick\":14,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[24],\"points\":[{\"tick\":16,\"pitchBend\":0,\"volume\":100},{\"tick\":20,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[21],\"points\":[{\"tick\":20,\"pitchBend\":0,\"volume\":100},{\"tick\":24,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[19],\"points\":[{\"tick\":24,\"pitchBend\":0,\"volume\":100},{\"tick\":28,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[26],\"points\":[{\"tick\":28,\"pitchBend\":0,\"volume\":100},{\"tick\":29,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[21],\"points\":[{\"tick\":30,\"pitchBend\":0,\"volume\":100},{\"tick\":31,\"pitchBend\":0,\"volume\":100}]},{\"pitches\":[24],\"points\":[{\"tick\":31,\"pitchBend\":0,\"volume\":100},{\"tick\":32,\"pitchBend\":0,\"volume\":100}]}]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]}],\"sequence\":[1,1,1,1,1,3,3,2,2,3,3,1,1,2,0,0]},{\"type\":\"drum\",\"octaveScrollBar\":0,\"instruments\":[{\"type\":\"noise\",\"volume\":100,\"wave\":\"white\",\"transition\":\"sudden\"}],\"patterns\":[{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]},{\"instrument\":1,\"notes\":[]}],\"sequence\":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}]};\n\n//# sourceURL=webpack:///./test/song.json?");

/***/ })

/******/ });