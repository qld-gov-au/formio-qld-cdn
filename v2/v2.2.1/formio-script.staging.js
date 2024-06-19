(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FormioScript"] = factory();
	else
		root["FormioScript"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  init: () => (/* binding */ init)
});

;// CONCATENATED MODULE: ./src/helpers/FormioScript/FormioScript.js
const defaultVersion = window.formioQldCdnVersion || "v2/v2.x.x-latest";
const createScripts = (scripts, i, mainResolve) => {
  if (i > scripts.length - 1) {
    FormioLoader.initFormio();
    mainResolve();
    return;
  }
  const {
    type,
    async,
    src,
    href,
    rel
  } = scripts[i];
  if (!document.querySelector("".concat(type, "[src='").concat(src, "']")) && !document.querySelector("".concat(type, "[href='").concat(href, "']"))) {
    const promise = new Promise(resolve => {
      const elem = document.createElement(type);
      if (async !== undefined) elem.setAttribute("async", async);
      if (src !== undefined) elem.setAttribute("src", src);
      if (href !== undefined) elem.setAttribute("href", href);
      if (rel !== undefined) elem.setAttribute("rel", rel);
      document.body.appendChild(elem);
      elem.onload = () => {
        console.info("FormioScript loaded:", src || href);
        resolve();
      };
    });
    promise.then(() => {
      createScripts(scripts, i + 1, mainResolve);
    });
  } else {
    createScripts(scripts, i + 1, mainResolve);
  }
};
const getDefaultCdn = function () {
  let subdomain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "static";
  let version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultVersion;
  return "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version);
};
const getDefaultScripts = baseUrl => {
  return [{
    type: "script",
    src: "".concat(baseUrl, "/formio.full.js"),
    async: false
  }, {
    type: "script",
    src: "".concat(baseUrl, "/premium.min.js"),
    async: false
  }, {
    type: "script",
    src: "".concat(baseUrl, "/formio-qld.js"),
    async: false
  },
  // note: formio-loader should always load last
  {
    type: "script",
    src: "".concat(baseUrl, "/formio-loader.js"),
    async: false
  }, {
    type: "link",
    href: "".concat(baseUrl, "/formio.full.min.css"),
    rel: "stylesheet"
  }, {
    type: "link",
    href: "".concat(baseUrl, "/premium.css"),
    rel: "stylesheet"
  }, {
    type: "link",
    href: "".concat(baseUrl, "/formio-qld.min.css"),
    rel: "stylesheet"
  }];
};
const initScript = function (scripts) {
  let cdn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return new Promise(resolve => {
    if (window.formioScriptLoaded) {
      if (typeof FormioLoader !== "undefined") setTimeout(() => {
        FormioLoader.initFormio(cdn);
        resolve();
      });
    } else {
      window.formioScriptLoaded = true;
      createScripts(scripts, 0, resolve);
    }
  });
};
;// CONCATENATED MODULE: ./src/helpers/FormioScript/index.js

;// CONCATENATED MODULE: ./src/helpers/FormioScript/index.staging.js

const baseUrl = getDefaultCdn("beta-static");
const scripts = getDefaultScripts(baseUrl);
const init = () => initScript(scripts, baseUrl);
/******/ 	return __webpack_exports__;
/******/ })()
;
});