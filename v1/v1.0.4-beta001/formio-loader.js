(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FormioLoader"] = factory();
	else
		root["FormioLoader"] = factory();
})(globalThis, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 283:
/***/ ((module) => {

module.exports = {
  // Turn off default buttons
  buttonSettings: {
    showCancel: false,
    showPrevious: false,
    showNext: false,
    showSubmit: false
  },
  i18n: {
    en: {
      pattern: "Must use the format shown",
      error: '<h2><span class="fa fa-exclamation-triangle"></span> Please check your answers</h2>'
    }
  }
};

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initFormio": () => (/* binding */ initFormio),
/* harmony export */   "initFormioInstance": () => (/* binding */ initFormioInstance)
/* harmony export */ });
/* harmony import */ var _options_createForm_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _options_createForm_options__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_options_createForm_options__WEBPACK_IMPORTED_MODULE_0__);


const initFormioInstance = (formioElem, opts) => {
  // if already initiated, reject
  if (formioElem.dataset.formioFormUrl) return; // if doesn't have required options, reject

  if (!opts.envUrl || !opts.projectName || !opts.formName) {
    console.warn("Require envUrl, projectName, formName to initiate the form.", opts);
    return;
  }

  const bodyContainer = $("body");
  const defaultRedirect = "contact-us/response/";
  /*
   * setup config
   */

  const baseUrl = `https://${opts.envUrl.trim()}`;
  const formioContainerId = formioElem.getAttribute("id");
  const submitBtn = $(`#${formioContainerId} button[name='data[submit]']`);
  let formName = ""; // Check if value is true/exists and is numeric

  if (opts.form_revision) {
    formName = `${opts.formName}/v/${opts.form_revision}`;
  } else {
    formName = opts.formName;
  }

  const {
    projectName
  } = opts;
  const formConfirmation = opts.formConfirmation || defaultRedirect;
  const namespace = opts.namespace || `formio-${projectName}`;
  const formUrl = `${baseUrl}/${projectName}/${formName}`;
  /*
   * init formio instance
   */

  const formio = new Formio(formUrl, {
    base: baseUrl,
    project: `${baseUrl}/${projectName}`,
    namespace
  });
  formioElem.dataset.formio = JSON.stringify(formio);
  formioElem.dataset.formioFormUrl = formUrl;
  /*
   * load formio form
   */

  Formio.createForm(formioElem, formUrl, // form,
  { ...(_options_createForm_options__WEBPACK_IMPORTED_MODULE_0___default()),
    formio,
    namespace: formio.options.namespace
  }).then(wizard => {
    wizard.formio = formio;
    wizard.options.formio = formio; // eslint-disable-next-line no-underscore-dangle

    const formTitle = wizard._form.title; // eslint-disable-next-line no-underscore-dangle

    const formModified = wizard._form.modified; // Force new tab on formlinks

    bodyContainer.on("click", `#${formioContainerId} a`, e => {
      e.target.target = "_blank";
    }); // Change event/GTM

    wizard.on("click", change => {
      const changeObj = change;

      if (typeof changeObj.changed !== "undefined" && typeof changeObj.changed.component !== "undefined") {
        window.dataLayer.push({
          event: "formio-interaction",
          "formio-name": formTitle,
          "formio-input-id": changeObj.changed.component.id,
          "formio-input-type": changeObj.changed.component.type,
          "formio-input-value": changeObj.changed.component.value,
          "formio-input-key": changeObj.changed.component.key,
          "formio-input-label-raw": changeObj.changed.component.label,
          "formio-version": formModified,
          "formio-category": `Form: ${formTitle}`,
          "formio-action": "Value changed"
        });
      }
    }); // Must use 'applicationSubmit' custom event on primary submit

    wizard.on("applicationSubmit", () => {
      submitBtn.attr("disabled", true);
      wizard.submit().then(() => {
        if (formConfirmation) {
          window.location.href = `/${formConfirmation}`;
        } else {
          // No confirmation set. Using generic redirection
          window.location.href = defaultRedirect;
        }
      }).catch(() => {
        console.debug("Submission error");
      });
    });
  });
}; // polyfill plugin function to fix the namespace option doesn't pass to Formio.makeRequest


const NamespacePlugin = {
  priority: 0,

  preRequest(requestArgs) {
    if (requestArgs.formio) {
      const formioInstance = document.querySelector(`[data-form-url="${requestArgs.formio.formUrl}"]`);

      if (formioInstance) {
        requestArgs.formio = JSON.parse(formioInstance.dataset.formio);
        requestArgs.opts.formio = requestArgs.formio;
      }

      if (requestArgs.formio.options) requestArgs.opts.namespace = requestArgs.formio.options.namespace;
    }

    return Promise.resolve(null);
  }

};

const customiseErrorMessage = () => {
  const newFunc = Formio.Form.prototype.errorForm.bind({});

  Formio.Form.prototype.errorForm = err => {
    if (typeof err === "string" && err.indexOf("Could not connect to API server") !== -1 || typeof err === "object" && err.networkError) {
      console.warn("formio error: ", err);
      return newFunc("This form is currently unavailable due to maintenance. Please try again later.");
    }

    return newFunc(err);
  };
};

const initFormio = () => {
  window.dataLayer = window.dataLayer || []; // Init form

  Formio.icons = "fontawesome";
  if (premium) Formio.use(premium); // custom error message

  customiseErrorMessage(); // register plugin

  Formio.registerPlugin(NamespacePlugin, "namespacePolyfill");
  document.querySelectorAll("[data-formio]").forEach(formioElem => {
    const {
      formioProjectName,
      formioFormName,
      formioEnvUrl,
      formioPdfDownload,
      formioFormConfirmation,
      formioFormRevision,
      formioNamespace
    } = formioElem.dataset;
    initFormioInstance(formioElem, {
      projectName: formioProjectName,
      formName: formioFormName,
      envUrl: formioEnvUrl,
      pdfDownload: formioPdfDownload,
      formConfirmation: formioFormConfirmation,
      formRevision: formioFormRevision,
      namespace: formioNamespace
    });
  });
}; // Persistent fix for iPhone/Safari


window.onpageshow = event => {
  if (event.persisted) {
    window.location.reload();
  }
};


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});