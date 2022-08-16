(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FormioLoader"] = factory();
	else
		root["FormioLoader"] = factory();
})(self, function() {
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
  // https://help.form.io/developers/translations#introduction
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
;// CONCATENATED MODULE: ./src/utils/pushDataLayer.js
const pushDataLayer = data => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
};
;// CONCATENATED MODULE: ./src/config/createForm.controller.js
/* eslint-disable no-underscore-dangle */

/* harmony default export */ const createForm_controller = (_ref => {
  let {
    form,
    formConfirmation
  } = _ref;
  // Change event/GTM
  form.on("change", e => {
    if (typeof e.changed !== "undefined" && typeof e.changed.component !== "undefined") {
      pushDataLayer({
        event: "formio-interaction",
        "formio-input-id": e.changed.component.id,
        "formio-input-type": e.changed.component.type,
        "formio-input-value": e.changed.value,
        "formio-input-key": e.changed.component.key,
        "formio-input-label-raw": e.changed.component.label,
        "formio-name": form._form.title,
        "formio-version": form._form.modified,
        "formio-category": "Form: ".concat(form._form.title),
        "formio-action": "filled in"
      });
    }
  }); // backward compatibility, for old forms that using this event to do submission

  form.on("applicationSubmit", () => {
    form.submit();
  }); // in a form submission, it will either fire `submitDone` or `submitError`, after getting the response from the formio api.

  form.on("submitDone", () => {
    pushDataLayer({
      event: "formio-submission",
      submissionsUrl: "form.io: ".concat(form.formio.submissionsUrl),
      "formio-name": form._form.title,
      "formio-version": form._form.modified
    });
    if (formConfirmation) setTimeout(() => {
      window.location.href = formConfirmation;
    }, 500);
  });
  form.on("submitError", error => {
    pushDataLayer({
      event: "ngErrorEvent",
      ngErrorLocation: form._form.title,
      ngErrorMsg: (error === null || error === void 0 ? void 0 : error.message) || error,
      ngErrorStack: ""
    });
  });
});
;// CONCATENATED MODULE: ./src/utils/delegateSelector.js
const delegateSelector = (elements, event, childSelector, handler) => {
  const is = (el, s) => {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, s);
  };

  const addEvent = el => {
    el.addEventListener(event, e => {
      if (is(e.target, childSelector)) {
        handler(e);
      }
    });
  };

  if (Array.isArray(elements)) {
    [].forEach.call(elements, addEvent);
  } else {
    addEvent(elements);
  }
};
;// CONCATENATED MODULE: ./src/helpers/FormioLoader/FormioLoader.js


 // plugin function to fix the namespace/project option doesn't pass to Formio.makeRequest/Formio.makeStaticRequest

const requestPluginHandler = (requestArgs, opts) => {
  var _requestArgs$url;

  if (requestArgs !== null && requestArgs !== void 0 && requestArgs.formio) {
    const formioInstance = document.querySelector("[data-formio-form-url=\"".concat(requestArgs.formio.formUrl, "\"]"));

    if (formioInstance) {
      requestArgs.formio = JSON.parse(formioInstance.dataset.formio);
      requestArgs.opts.formio = requestArgs.formio;
    }

    if (requestArgs.formio.options) {
      requestArgs.opts.base = requestArgs.formio.options.base;
      requestArgs.opts.project = requestArgs.formio.options.project;
      requestArgs.opts.namespace = requestArgs.formio.options.namespace;
      Formio.setProjectUrl(requestArgs.formio.options.project);
      Formio.setBaseUrl(requestArgs.formio.options.base);
    }
  } // the request url generated by recaptcha component doesn't honor the form options
  // https://github.com/formio/formio.js/blob/master/src/components/recaptcha/ReCaptcha.js#L114
  // hence the workaround is to inject the project id to the url


  if (requestArgs !== null && requestArgs !== void 0 && (_requestArgs$url = requestArgs.url) !== null && _requestArgs$url !== void 0 && _requestArgs$url.includes("".concat(opts.formio.base, "/recaptcha"))) {
    requestArgs.url = requestArgs.url.replace("".concat(opts.formio.base, "/recaptcha"), "".concat(opts.formio.projectUrl, "/recaptcha"));
  }

  return Promise.resolve(null);
};

const RequestPlugin = opts => ({
  priority: 0,

  preRequest(requestArgs) {
    return requestPluginHandler(requestArgs, opts);
  },

  preStaticRequest(requestArgs) {
    return requestPluginHandler(requestArgs, opts);
  },

  request(requestArgs) {
    return requestPluginHandler(requestArgs, opts);
  },

  staticRequest(requestArgs) {
    return requestPluginHandler(requestArgs, opts);
  }

});

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


  const baseUrl = "https://".concat(opts.envUrl.trim());
  let formName = ""; // Check if value is true/exists and is numeric

  if (opts.formRevision) {
    formName = "".concat(opts.formName, "/v/").concat(opts.formRevision);
  } else {
    formName = opts.formName;
  }

  const {
    projectName
  } = opts;
  const namespace = opts.namespace || "formio-".concat(projectName);
  const formUrl = "".concat(baseUrl, "/").concat(projectName, "/").concat(formName);
  /*
   * init formio instance
   */

  const formio = new Formio(formUrl, {
    base: baseUrl,
    project: "".concat(baseUrl, "/").concat(projectName),
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
    ...(typeof opts.createFormOptions === "function" && opts.createFormOptions({ ...opts,
      defaultOptions,
      elem
    }))
  }; // register plugin

  if (!Formio.getPlugin("requestPlugin")) Formio.registerPlugin(RequestPlugin(combinedOptions), "requestPlugin");
  Formio.createForm(elem, formUrl, combinedOptions).then(form => {
    form.formio = formio;
    form.options.formio = formio;
    const callbackProps = {
      form,
      elem,
      ...opts
    };

    if (typeof opts.createFormCallback === "function") {
      // call custom callback hook
      opts.createFormCallback(callbackProps);
    } else {
      // Force new tab on formlinks
      delegateSelector(elem, "click", "a", e => {
        e.target.target = "_blank";
      });
    } // default controller


    createForm_controller(callbackProps); // call custom hook controller

    if (typeof opts.createFormController === "function") {
      opts.createFormController(callbackProps);
    }
  });
};

const overrideErrorForm = renderMsg => {
  // customise error message
  const newFunc = Formio.Form.prototype.errorForm.bind({});

  Formio.Form.prototype.errorForm = err => {
    if (typeof err === "string" && err.indexOf("Could not connect to API server") !== -1 || typeof err === "object" && err.networkError) {
      console.warn("formio error: ", err);
      return newFunc(typeof renderMsg === "function" ? renderMsg(err) : err);
    }

    return newFunc(err);
  };
};

const defaultInitFormioAction = () => {
  overrideErrorForm(() => "This form is currently unavailable due to maintenance. Please try again later.");
};

const initFormio = () => {
  // Init form
  Formio.icons = "fontawesome";
  if (premium) Formio.use(premium); // default callback after Formio is loaded

  if (typeof window.initFormioHook === "function") {
    window.initFormioHook({
      overrideErrorForm
    });
  } else {
    defaultInitFormioAction();
  }

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