/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./buttons.js":
/*!********************!*\
  !*** ./buttons.js ***!
  \********************/
/***/ (() => {

let readmore = document.querySelector('.description__read-more');
let paraghraph = document.querySelector('.description__paragraph');
let readnext = document.querySelector('.description__read-next');
let arrow = document.querySelector('.description__arrow');
let hidden = false;
readmore.onclick = function () {
  if (!hidden) {
    hidden = true;
    paraghraph.classList.toggle('description__paragraph--hidden');
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "0.6s";
    readnext.textContent = 'Скрыть';
  } else if (hidden) {
    paraghraph.classList.toggle('description__paragraph--hidden');
    arrow.style.transform = "rotate(360deg)";
    readnext.textContent = 'Читать далее';
    hidden = false;
  }
};
let burger = document.querySelector('.navigation__icon--pic1');
let aside = document.querySelector('.aside-menu');
let closemenu = document.querySelector('.feedback__close');
let overlay = document.querySelector('.overlay');
let asideclose = document.querySelector('.svg-image-aside');
burger.onclick = function () {
  aside.classList.add('aside-menu__show');
  overlay.classList.toggle('overlay--show');
  overlay.onclick = function () {
    aside.classList.remove('aside-menu__show');
    overlay.classList.remove('overlay--show');
    feedback.classList.remove('feedback__show');
    modalcall.classList.remove('modal-call__show');
  };
};
asideclose.onclick = function () {
  aside.classList.remove('aside-menu__show');
  overlay.classList.remove('overlay--show');
};
let feedbackbutton = document.querySelector('.svg-image-feedback');
let feedback = document.querySelector('.feedback');
let feedbackbutton2 = document.getElementById('feedback2');
let call = document.getElementById('svg-call');
call.onclick = function () {
  overlay.classList.add('overlay--show');
  modalcall.classList.add('modal-call__show');
  callclose.onclick = function () {
    overlay.classList.remove('overlay--show');
    modalcall.classList.remove('modal-call__show');
    aside.classList.remove('aside-menu__show');
  };
  overlay.onclick = function () {
    overlay.classList.remove('overlay--show');
    modalcall.classList.remove('modal-call__show');
    aside.classList.remove('aside-menu__show');
  };
};
feedbackbutton.onclick = function () {
  feedback.classList.add('feedback__show');
  overlay.classList.add('overlay--show');
  overlay.onclick = function () {
    overlay.classList.remove('overlay--show');
    feedback.classList.remove('feedback__show');
  };
};
feedbackbutton2.onclick = function () {
  feedback.classList.add('feedback__show');
  overlay.classList.add('overlay--show');
  overlay.onclick = function () {
    overlay.classList.remove('overlay--show');
    feedback.classList.remove('feedback__show');
    aside.classList.remove('aside-menu__show');
  };
};
closemenu.onclick = function () {
  feedback.classList.remove('feedback__show');
  overlay.classList.remove('overlay--show');
  aside.classList.remove('aside-menu__show');
};
let callclose = document.querySelector('.modal-call__close');
let callbutton = document.querySelector('.svg-image-call');
let modalcall = document.querySelector('.modal-call');
callbutton.onclick = function () {
  modalcall.classList.add('modal-call__show');
  overlay.classList.add('overlay--show');
  overlay.onclick = function () {
    overlay.classList.remove('overlay--show');
    modalcall.classList.remove('modal-call__show');
  };
};
callclose.onclick = function () {
  modalcall.classList.remove('modal-call__show');
  overlay.classList.remove('overlay--show');
};
let closebutton2 = document.querySelector('.brands__read-more');
let wrapper2 = document.querySelector('.swiper-wrapper--first');
let button2text = document.querySelector('.description__read-next--second');
let arrow2 = document.querySelector('.description__arrow--second');
closebutton2.onclick = function () {
  if (!hidden) {
    hidden = true;
    wrapper2.classList.toggle('swiper-wrapper--opened');
    arrow2.style.transform = "rotate(180deg)";
    arrow2.style.transition = "0.6s";
    button2text.textContent = 'Скрыть';
  } else if (hidden) {
    wrapper2.classList.toggle('swiper-wrapper--opened');
    arrow2.style.transform = "rotate(360deg)";
    arrow2.style.transition = "0.6s";
    button2text.textContent = 'Показать все';
    hidden = false;
  }
};
let button3text = document.querySelector('.description__read-next--third');
let closebutton3 = document.querySelector('.repair__read-more');
let wrapper3 = document.querySelector('.swiper-wrapper--second');
let arrow3 = document.querySelector('.description__arrow--third');
closebutton3.onclick = function () {
  if (!hidden) {
    hidden = true;
    wrapper3.classList.toggle('swiper-wrapper2--opened');
    arrow3.style.transform = "rotate(180deg)";
    arrow3.style.transition = "0.6s";
    button3text.textContent = 'Скрыть';
  } else if (hidden) {
    wrapper3.classList.toggle('swiper-wrapper2--opened');
    arrow3.style.transform = "rotate(360deg)";
    arrow3.style.transition = "0.6s";
    button3text.textContent = 'Показать все';
    hidden = false;
  }
};

/***/ }),

/***/ "./swiper.js":
/*!*******************!*\
  !*** ./swiper.js ***!
  \*******************/
/***/ (() => {

let init = false;
let swiper;
function swiperCard() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

// let hideSlide = document.querySelector('.swiper-slide:nth-child(5)')

// function hide() { 
// if (window.innerWidth <= 768 ) {
//   hideSlide.classList.add('hidden');
//   }
// }
// hide();

/***/ }),

/***/ "../node_modules/normalize.css/normalize.css":
/*!***************************************************!*\
  !*** ../node_modules/normalize.css/normalize.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./img/webpack.svg":
/*!*************************!*\
  !*** ./img/webpack.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "523e1b932381f19b2606.svg";

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_webpack_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/webpack.svg */ "./img/webpack.svg");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swiper */ "./swiper.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons */ "./buttons.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_buttons__WEBPACK_IMPORTED_MODULE_4__);





})();

/******/ })()
;
//# sourceMappingURL=main.3302e7efb9ca396ae642.js.map