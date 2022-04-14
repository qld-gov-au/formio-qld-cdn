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

/***/ 203:
/***/ ((module) => {

module.exports = {
  // Turn off default buttons
  buttonSettings: {
    showCancel: false,
    showPrevious: true,
    showNext: true,
    showSubmit: true
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "initFormio": () => (/* reexport */ initFormio),
  "initFormioInstance": () => (/* reexport */ initFormioInstance)
});

// EXTERNAL MODULE: ./src/config/createForm.options.js
var createForm_options = __webpack_require__(203);
var createForm_options_default = /*#__PURE__*/__webpack_require__.n(createForm_options);
;// CONCATENATED MODULE: ./src/config/createForm.controller.js
/* harmony default export */ const createForm_controller = (({
  form,
  formConfirmation
}) => {
  // Change event/GTM
  form.on("click", e => {
    // eslint-disable-next-line no-underscore-dangle
    const formTitle = form._form.title; // eslint-disable-next-line no-underscore-dangle

    const formModified = form._form.modified;

    if (typeof e.changed !== "undefined" && typeof e.changed.component !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "formio-interaction",
        "formio-name": formTitle,
        "formio-input-id": e.changed.component.id,
        "formio-input-type": e.changed.component.type,
        "formio-input-value": e.changed.component.value,
        "formio-input-key": e.changed.component.key,
        "formio-input-label-raw": e.changed.component.label,
        "formio-version": formModified,
        "formio-category": `Form: ${formTitle}`,
        "formio-action": "Value changed"
      });
    }
  });
  form.on("submitDone", () => {
    if (formConfirmation) window.location.href = formConfirmation;
  });
});
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/FormioLoader.js

 // polyfill plugin function to fix the namespace option doesn't pass to Formio.makeRequest

const NamespacePlugin = {
  priority: 0,

  preRequest(requestArgs) {
    if (requestArgs.formio) {
      const formioInstance = document.querySelector(`[data-formio-form-url="${requestArgs.formio.formUrl}"]`);

      if (formioInstance) {
        requestArgs.formio = JSON.parse(formioInstance.dataset.formio);
        requestArgs.opts.formio = requestArgs.formio;
      }

      if (requestArgs.formio.options) requestArgs.opts.namespace = requestArgs.formio.options.namespace;
    }

    return Promise.resolve(null);
  }

};

const initFormioInstance = (elem, opts) => {
  // if already initiated, reject
  if (elem.dataset.formioFormUrl) return; // if doesn't have required options, reject

  if (!opts.envUrl || !opts.projectName || !opts.formName) {
    console.warn("Require envUrl, projectName, formName to initiate the form.", opts);
    return;
  }
  /*
   * setup config
   */


  const baseUrl = `https://${opts.envUrl.trim()}`;
  let formName = ""; // Check if value is true/exists and is numeric

  if (opts.form_revision) {
    formName = `${opts.formName}/v/${opts.form_revision}`;
  } else {
    formName = opts.formName;
  }

  const {
    projectName
  } = opts;
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
  elem.dataset.formio = JSON.stringify(formio);
  elem.dataset.formioFormUrl = formUrl;
  /*
   * load formio form
   */

  const defaultOptions = { ...(createForm_options_default()),
    formio,
    namespace: formio.options.namespace
  };
  const combinedOptions = { ...defaultOptions,
    // combine with hook options
    ...(typeof opts.createFormOptions === "function" && opts.createFormOptions({
      envUrl: opts.envUrl,
      projectName: opts.projectName,
      formName: opts.formName,
      defaultOptions,
      elem
    }))
  }; // register plugin

  if (!Formio.getPlugin("namespacePolyfill")) Formio.registerPlugin(NamespacePlugin, "namespacePolyfill");
  Formio.createForm(elem, formUrl, combinedOptions).then(form => {
    form.formio = formio;
    form.options.formio = formio;
    const callbackProps = {
      form,
      elem,
      envUrl: opts.envUrl,
      projectName: opts.projectName,
      formName: opts.formName
    };

    if (typeof opts.createFormCallback === "function") {
      // call custom callback hook
      opts.createFormCallback(callbackProps);
    } else {
      // Force new tab on formlinks
      $(elem).on("click", `a`, e => {
        e.target.target = "_blank";
      });
    } // default controller


    createForm_controller(callbackProps); // call custom hook controller

    if (typeof opts.createFormController === "function") {
      opts.createFormController(callbackProps);
    }
  });
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
  // Init form
  Formio.icons = "fontawesome";
  if (premium) Formio.use(premium); // custom error message

  customiseErrorMessage();
  document.querySelectorAll("[data-formio]").forEach(elem => {
    const {
      formioProjectName,
      formioFormName,
      formioEnvUrl,
      formioPdfDownload,
      formioFormConfirmation,
      formioFormRevision,
      formioNamespace,
      formioCreateformOptions,
      formioCreateformController,
      formioCreateformCallback
    } = elem.dataset;
    initFormioInstance(elem, {
      projectName: formioProjectName,
      formName: formioFormName,
      envUrl: formioEnvUrl,
      pdfDownload: formioPdfDownload,
      formConfirmation: formioFormConfirmation,
      formRevision: formioFormRevision,
      namespace: formioNamespace,
      createFormOptions: window[formioCreateformOptions],
      createFormController: window[formioCreateformController],
      createFormCallback: window[formioCreateformCallback]
    });
  });
};


;// CONCATENATED MODULE: ./src/helpers/FormioLoader/index.js

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});