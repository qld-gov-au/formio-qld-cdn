(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FormioScript"] = factory();
	else
		root["FormioScript"] = factory();
})(self, function() {
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
  "init": () => (/* binding */ init)
});

;// CONCATENATED MODULE: ./src/helpers/FormioScript/FormioScript.js
const defaultVersion = window.formioQldCdnVersion || "v1/v1.x.x-latest";
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
const getDefaultScripts = _ref => {
  let {
    subdomain,
    version = defaultVersion
  } = _ref;
  return [{
    type: "script",
    src: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/formio.full.js"),
    async: false
  }, {
    type: "script",
    src: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/premium.min.js"),
    async: false
  }, {
    type: "script",
    src: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/formio-qld.js"),
    async: false
  }, // note: formio-loader should always load last
  {
    type: "script",
    src: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/formio-loader.js"),
    async: false
  }, {
    type: "link",
    href: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/formio.full.min.css"),
    rel: "stylesheet"
  }, {
    type: "link",
    href: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/premium.css"),
    rel: "stylesheet"
  }, {
    type: "link",
    href: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/formio-qld.min.css"),
    rel: "stylesheet"
  }];
};
const initScript = scripts => new Promise(resolve => {
  if (window.formioScriptLoaded) {
    if (typeof FormioLoader !== "undefined") setTimeout(() => {
      FormioLoader.initFormio();
      resolve();
    });
  } else {
    window.formioScriptLoaded = true;
    createScripts(scripts, 0, resolve);
  }
});
;// CONCATENATED MODULE: ./src/helpers/FormioScript/index.js

;// CONCATENATED MODULE: ./src/helpers/FormioScript/index.gitbridge.js

const version = window.formioQldCdnVersion || "248740";
const scripts = [{
  type: "script",
  src: "/__data/assets/git_bridge/0025/".concat(version, "/formio.full.js"),
  async: false
}, {
  type: "script",
  src: "/__data/assets/git_bridge/0025/".concat(version, "/premium.min.js"),
  async: false
}, {
  type: "script",
  src: "/__data/assets/git_bridge/0025/".concat(version, "/formio-qld.js"),
  async: false
}, // note: formio-loader should always load last
{
  type: "script",
  src: "/__data/assets/git_bridge/0025/".concat(version, "/formio-loader.js"),
  async: false
}, {
  type: "link",
  href: "/__data/assets/git_bridge/0025/".concat(version, "/formio.full.min.css"),
  rel: "stylesheet"
}, {
  type: "link",
  href: "/__data/assets/git_bridge/0025/".concat(version, "/premium.css"),
  rel: "stylesheet"
}, {
  type: "link",
  href: "/__data/assets/git_bridge/0025/".concat(version, "/formio-qld.min.css"),
  rel: "stylesheet"
}];
const init = () => initScript(scripts);
/******/ 	return __webpack_exports__;
/******/ })()
;
});