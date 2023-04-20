/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/webpack/video.ts":
/*!******************************!*\
  !*** ./src/webpack/video.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VideoPlayer = void 0;
class VideoPlayer {
    constructor(VideoPlayerElements) {
        this.video = VideoPlayerElements.video;
        this.playButton = VideoPlayerElements.playButton;
        this.pauseButton = VideoPlayerElements.pauseButton;
    }
    iniciarEventos() {
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });
        this.pauseButton.addEventListener('click', () => {
            this.pause();
        });
    }
    playToggle() {
        if (this.video.paused) {
            this.video.play();
        }
        else
            this.video.pause();
    }
    pause() {
        this.video.pause();
    }
}
exports.VideoPlayer = VideoPlayer;
const videoPlayer = new VideoPlayer({
    video: document.querySelector('.video'),
    playButton: document.querySelector('.startAndPlay'),
    pauseButton: document.querySelector('.pause'),
});
videoPlayer.iniciarEventos();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./src/webpack/exercicio.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// import './form-control';
__webpack_require__(/*! ./video */ "./src/webpack/video.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map