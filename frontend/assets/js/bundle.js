/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/webpack/votacao.ts":
/*!********************************!*\
  !*** ./src/webpack/votacao.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VotacaoApp = exports.Votacao = void 0;
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');
// Routing App
class Votacao {
    constructor() {
        this._opcoesDeVoto = [];
    }
    addOpcoesVotos(votacaoOpcoes) {
        this._opcoesDeVoto.push(votacaoOpcoes);
    }
    vote(linguagem, cor) {
        for (const opcaoVoto of this._opcoesDeVoto) {
            if (linguagem === opcaoVoto.opcao)
                opcaoVoto.numeroDeVotos += 1;
            if (cor === opcaoVoto.opcao)
                opcaoVoto.numeroDeVotos += 1;
        }
    }
    show() {
        for (const opcaoVoto of this._opcoesDeVoto) {
            const votosTotais = document.getElementById(opcaoVoto.opcao);
            if (votosTotais)
                votosTotais.innerText = `${opcaoVoto.numeroDeVotos}`;
        }
    }
}
exports.Votacao = Votacao;
const votacao = new Votacao();
// define opcoes de votos.
inputs.forEach((input) => {
    votacao.addOpcoesVotos({ opcao: input.value, numeroDeVotos: 0 });
});
class VotacaoApp {
    constructor(linguagem, cor) {
        this.linguagem = linguagem;
        this.cor = cor;
        this.votacao = [];
    }
    addVotos() {
        votacao.vote(this.linguagem, this.cor);
    }
    show() {
        votacao.show();
    }
}
exports.VotacaoApp = VotacaoApp;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const linguagemSelecionada = document.querySelector('input[name="linguagem-favorita"]:checked');
    const corSelecionada = document.querySelector('input[name="cor-favorita"]:checked');
    const formData = new VotacaoApp(linguagemSelecionada.value, corSelecionada.value);
    formData.addVotos();
    formData.show();
    form.reset();
});


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
// import './video';
__webpack_require__(/*! ./votacao.ts */ "./src/webpack/votacao.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map