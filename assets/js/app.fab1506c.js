(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],[]]);
//# sourceMappingURL=styles.6c3b407a.js.map/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "assets/js/" + ({}[chunkId]||chunkId) + "." + {"0":"5c65222e","1":"d72961ee","2":"2ebdbb9d","3":"cef0e0f4","4":"c4900291","5":"72a7a525","6":"a77a809c","7":"a677842b","8":"8236a500","9":"edc642b0","10":"562bb5a7","11":"da34b2d7","12":"0d76a7a7","13":"1151c8ca","14":"ab009313","15":"850f06ea","16":"49a13182","17":"2b020610","18":"204d1768","19":"22869ba0","20":"6bf7393d","21":"41355cf4","22":"ffc9d5dd","23":"33912496","24":"dbc15e0b","25":"1372877b","26":"26f7c8f0","27":"ad505b38","28":"df22de2e","29":"2cd2d664","30":"09373f65","31":"e0a48837","32":"59bcb491","33":"931738c4","34":"03291722","35":"1e2c8b69","36":"962c23e8","37":"f34abde1","38":"21819922","39":"60d2fc33","40":"8bb7993a","41":"63f32a9a","42":"f4daf9bb","43":"62a117ec","44":"7627ec8d","45":"f82943d6","46":"62677908","47":"7ed67db0","48":"a334a8bf","49":"af5b92b5","50":"a27fa0a6","51":"5f37b3d5","52":"d3820119","53":"0cb37067","54":"df98f970","55":"5a68d05b","56":"1e5fb376","57":"de3c4634","58":"7ad6546d","59":"e7eb5b8d","60":"3d9e1b9d"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/vuepress-theme-egoist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/builtin/es6/arrayWithHoles.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/arrayWithHoles.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/builtin/es6/arrayWithoutHoles.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/arrayWithoutHoles.js ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/builtin/es6/createClass.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/createClass.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/builtin/es6/iterableToArray.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/iterableToArray.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/builtin/es6/iterableToArrayLimit.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/iterableToArrayLimit.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/builtin/es6/nonIterableRest.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/nonIterableRest.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/builtin/es6/nonIterableSpread.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/nonIterableSpread.js ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/builtin/es6/slicedToArray.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/slicedToArray.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime/helpers/builtin/es6/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime/helpers/builtin/es6/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime/helpers/builtin/es6/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "../../node_modules/@babel/runtime/helpers/builtin/es6/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../../node_modules/@babel/runtime/helpers/builtin/es6/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "../../node_modules/@babel/runtime/helpers/builtin/es6/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/builtin/es6/typeof.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/typeof.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/app/components/LayoutDistributor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??vue-loader-options!../@vuepress/core/lib/app/components/LayoutDistributor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    layout: function layout() {
      if (this.$page.path) {
        return this.$page.frontmatter.layout || 'Layout';
      }

      return 'NotFound';
    }
  }
});

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/app/components/LayoutDistributor.vue?vue&type=template&id=1938a6dc&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??vue-loader-options!../@vuepress/core/lib/app/components/LayoutDistributor.vue?vue&type=template&id=1938a6dc& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.layout,{tag:"component"})}
var staticRenderFns = []



/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/app/components/OutboundLink.vue?vue&type=template&id=f41dccde&functional=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??vue-loader-options!../@vuepress/core/lib/app/components/OutboundLink.vue?vue&type=template&id=f41dccde&functional=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{staticClass:"icon outbound",attrs:{"xmlns":"http://www.w3.org/2000/svg","aria-hidden":"true","x":"0px","y":"0px","viewBox":"0 0 100 100","width":"15","height":"15"}},[_c('path',{attrs:{"fill":"currentColor","d":"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),_vm._v(" "),_c('polygon',{attrs:{"fill":"currentColor","points":"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])}
var staticRenderFns = []



/***/ }),

/***/ "../../node_modules/core-js/modules/_a-function.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_a-function.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_add-to-unscopables.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_an-instance.js":
/*!************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_an-instance.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_an-object.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_an-object.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_array-includes.js":
/*!***************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_array-includes.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_classof.js":
/*!********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_classof.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_cof.js":
/*!****************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_cof.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_collection-strong.js":
/*!******************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_collection-strong.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "../../node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../../node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "../../node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "../../node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "../../node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "../../node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "../../node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_collection.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_collection.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../../node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "../../node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "../../node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "../../node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_core.js":
/*!*****************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_core.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/modules/_create-property.js":
/*!****************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_create-property.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_ctx.js":
/*!****************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_ctx.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_defined.js":
/*!********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_defined.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_descriptors.js":
/*!************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_descriptors.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_dom-create.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_dom-create.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_enum-bug-keys.js":
/*!**************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_enum-bug-keys.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../../node_modules/core-js/modules/_export.js":
/*!*******************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_export.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../../node_modules/core-js/modules/_fails-is-regexp.js":
/*!****************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_fails-is-regexp.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_fails.js":
/*!******************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_fails.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_for-of.js":
/*!*******************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_for-of.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "../../node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../../node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../../node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../../node_modules/core-js/modules/_global.js":
/*!*******************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_global.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/modules/_has.js":
/*!****************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_has.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_hide.js":
/*!*****************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_hide.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_html.js":
/*!*****************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_html.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../../node_modules/core-js/modules/_ie8-dom-define.js":
/*!***************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_inherit-if-required.js":
/*!********************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_inherit-if-required.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "../../node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_invoke.js":
/*!*******************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_invoke.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iobject.js":
/*!********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_iobject.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-array-iter.js":
/*!**************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_is-array-iter.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-object.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_is-object.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-regexp.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_is-regexp.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-call.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_iter-call.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-create.js":
/*!************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_iter-create.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "../../node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-define.js":
/*!************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_iter-define.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../../node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-detect.js":
/*!************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_iter-detect.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-step.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_iter-step.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iterators.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_iterators.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../node_modules/core-js/modules/_library.js":
/*!********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_library.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../node_modules/core-js/modules/_meta.js":
/*!*****************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_meta.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_microtask.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_microtask.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "../../node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_new-promise-capability.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_new-promise-capability.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-assign.js":
/*!**************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_object-assign.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../../node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-create.js":
/*!**************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_object-create.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../../node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../../node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-dp.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_object-dp.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-dps.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_object-dps.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gopd.js":
/*!************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_object-gopd.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gopn.js":
/*!************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_object-gopn.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gops.js":
/*!************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_object-gops.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gpo.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_object-gpo.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-keys-internal.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_object-keys-internal.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../../node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-keys.js":
/*!************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_object-keys.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-pie.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_object-pie.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-sap.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_object-sap.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_own-keys.js":
/*!*********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_own-keys.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../../node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../../node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_perform.js":
/*!********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_perform.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_promise-resolve.js":
/*!****************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_promise-resolve.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../../node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_property-desc.js":
/*!**************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_property-desc.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_redefine-all.js":
/*!*************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_redefine-all.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_redefine.js":
/*!*********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_redefine.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_set-proto.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_set-proto.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "../../node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_set-species.js":
/*!************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_set-species.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_set-to-string-tag.js":
/*!******************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_set-to-string-tag.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_shared-key.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_shared-key.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_shared.js":
/*!*******************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_shared.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../../node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_species-constructor.js":
/*!********************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_species-constructor.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_string-context.js":
/*!***************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_string-context.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../../node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_task.js":
/*!*****************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_task.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../../node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "../../node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-absolute-index.js":
/*!******************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_to-absolute-index.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-integer.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_to-integer.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-iobject.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_to-iobject.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-length.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_to-length.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-object.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_to-object.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-primitive.js":
/*!*************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_to-primitive.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_uid.js":
/*!****************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_uid.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_user-agent.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_user-agent.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "../../node_modules/core-js/modules/_validate-collection.js":
/*!********************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_validate-collection.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_wks.js":
/*!****************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/_wks.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../../node_modules/core-js/modules/core.get-iterator-method.js":
/*!************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/core.get-iterator-method.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "../../node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.iterator.js":
/*!******************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/es6.array.iterator.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "../../node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "../../node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "../../node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.function.name.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/es6.function.name.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.assign.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/es6.object.assign.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "../../node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.freeze.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/es6.object.freeze.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "../../node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "../../node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.keys.js":
/*!***************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/es6.object.keys.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "../../node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.promise.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/es6.promise.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "../../node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../../node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "../../node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "../../node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "../../node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../../node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../../node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../../node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "../../node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "../../node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "../../node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.set.js":
/*!*******************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/es6.set.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "../../node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../../node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "../../node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.starts-with.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/es6.string.starts-with.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "../../node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../../node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "../../node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../../node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "../../node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/web.dom.iterable.js":
/*!****************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/core-js/modules/web.dom.iterable.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "../../node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/index.js?!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/stylus-loader/index.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/app/components/OutboundLink.vue?vue&type=style&index=0&lang=stylus&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/mini-css-extract-plugin/dist/loader.js!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/css-loader??ref--13-oneOf-1-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/postcss-loader/lib??ref--13-oneOf-1-2!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/stylus-loader??ref--13-oneOf-1-3!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??vue-loader-options!../@vuepress/core/lib/app/components/OutboundLink.vue?vue&type=style&index=0&lang=stylus& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "../../node_modules/vue-router/dist/vue-router.esm.js":
/*!**************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-router/dist/vue-router.esm.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),

/***/ "../../node_modules/vue/dist/vue.runtime.esm.js":
/*!********************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue/dist/vue.runtime.esm.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {}
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

/*  */









// add a raw attr (use this in preTransforms)








// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);


/***/ }),

/***/ "../@vuepress/core/lib/app/app.js":
/*!****************************************!*\
  !*** ../@vuepress/core/lib/app/app.js ***!
  \****************************************/
/*! exports provided: createApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "../../node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "../../node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "../../node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _dataMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataMixin */ "../@vuepress/core/lib/app/dataMixin.js");
/* harmony import */ var _internal_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internal/routes */ "./.temp/internal/routes.js");
/* harmony import */ var _internal_siteData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @internal/siteData */ "./.temp/internal/siteData.js");
/* harmony import */ var _internal_app_enhancers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @internal/app-enhancers */ "./.temp/internal/app-enhancers.js");
/* harmony import */ var _internal_global_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @internal/global-ui */ "./.temp/internal/global-ui.js");
/* harmony import */ var _internal_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @internal/i18n */ "./.temp/internal/i18n.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Content */ "../@vuepress/core/lib/app/components/Content.js");
/* harmony import */ var _components_OutboundLink_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/OutboundLink.vue */ "../@vuepress/core/lib/app/components/OutboundLink.vue");
/* harmony import */ var _components_ClientOnly__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ClientOnly */ "../@vuepress/core/lib/app/components/ClientOnly.js");



/* global VUEPRESS_TEMP_PATH */







 // generated from user config

Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(0)]).then(__webpack_require__.t.bind(null, /*! @temp/style.styl */ "./.temp/style.styl", 7)); // built-in components



 // suggest dev server restart on base change

if (false) { var prevBase; }

vue__WEBPACK_IMPORTED_MODULE_2__["default"].config.productionTip = false;
vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]); // mixin for exposing $site and $page

vue__WEBPACK_IMPORTED_MODULE_2__["default"].mixin(Object(_dataMixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_internal_i18n__WEBPACK_IMPORTED_MODULE_9__["default"], _internal_siteData__WEBPACK_IMPORTED_MODULE_6__["siteData"])); // component for rendering markdown content and setting title etc.

vue__WEBPACK_IMPORTED_MODULE_2__["default"].component('Content', _components_Content__WEBPACK_IMPORTED_MODULE_10__["default"]);
vue__WEBPACK_IMPORTED_MODULE_2__["default"].component('OutboundLink', _components_OutboundLink_vue__WEBPACK_IMPORTED_MODULE_11__["default"]); // component for client-only content

vue__WEBPACK_IMPORTED_MODULE_2__["default"].component('ClientOnly', _components_ClientOnly__WEBPACK_IMPORTED_MODULE_12__["default"]); // global helper for adding base path to absolute urls

vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.$withBase = function (path) {
  var base = this.$site.base;

  if (path.charAt(0) === '/') {
    return base + path.slice(1);
  } else {
    return path;
  }
};

function createApp(isServer) {
  var router = new vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]({
    base: _internal_siteData__WEBPACK_IMPORTED_MODULE_6__["siteData"].base,
    mode: 'history',
    fallback: false,
    routes: _internal_routes__WEBPACK_IMPORTED_MODULE_5__["routes"],
    scrollBehavior: function scrollBehavior(to, from, saved) {
      if (saved) {
        return saved;
      } else if (to.hash) {
        if (vue__WEBPACK_IMPORTED_MODULE_2__["default"].$store.disableScrollBehavior) {
          return false;
        }

        return {
          selector: to.hash
        };
      } else {
        return {
          x: 0,
          y: 0
        };
      }
    }
  }); // redirect /foo to /foo/

  router.beforeEach(function (to, from, next) {
    if (!/(\/|\.html)$/.test(to.path)) {
      next(Object.assign({}, to, {
        path: to.path + '/'
      }));
    } else {
      next();
    }
  });
  var options = {};

  try {
    _internal_app_enhancers__WEBPACK_IMPORTED_MODULE_7__["default"].forEach(function (enhancer) {
      if (typeof enhancer === 'function') {
        enhancer({
          Vue: vue__WEBPACK_IMPORTED_MODULE_2__["default"],
          options: options,
          router: router,
          siteData: _internal_siteData__WEBPACK_IMPORTED_MODULE_6__["siteData"],
          isServer: isServer
        });
      }
    });
  } catch (e) {
    console.error(e);
  }

  var app = new vue__WEBPACK_IMPORTED_MODULE_2__["default"](Object.assign(options, {
    router: router,
    render: function render(h) {
      return h('div', {
        attrs: {
          id: 'app'
        }
      }, [h('router-view', {
        ref: 'layout'
      }), h('div', {
        class: 'global-ui'
      }, _internal_global_ui__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (component) {
        return h(component);
      }))]);
    }
  }));
  return {
    app: app,
    router: router
  };
}

/***/ }),

/***/ "../@vuepress/core/lib/app/clientEntry.js":
/*!************************************************!*\
  !*** ../@vuepress/core/lib/app/clientEntry.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "../../node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "../@vuepress/core/lib/app/app.js");


/* global VUEPRESS_VERSION, LAST_COMMIT_HASH*/


var _createApp = Object(_app__WEBPACK_IMPORTED_MODULE_1__["createApp"])(false
/* isServer */
),
    app = _createApp.app,
    router = _createApp.router;

window.__VUEPRESS_VERSION__ = {
  version: "1.0.0",
  hash: "2a46178"
};
router.onReady(function () {
  app.$mount('#app');
});

/***/ }),

/***/ "../@vuepress/core/lib/app/components/ClientOnly.js":
/*!**********************************************************!*\
  !*** ../@vuepress/core/lib/app/components/ClientOnly.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  functional: true,
  render: function render(h, _ref) {
    var parent = _ref.parent,
        children = _ref.children;

    if (parent._isMounted) {
      return children;
    } else {
      parent.$once('hook:mounted', function () {
        parent.$forceUpdate();
      });
    }
  }
});

/***/ }),

/***/ "../@vuepress/core/lib/app/components/Content.js":
/*!*******************************************************!*\
  !*** ../@vuepress/core/lib/app/components/Content.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _internal_page_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internal/page-components */ "./.temp/internal/page-components.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  functional: true,
  props: {
    custom: {
      type: Boolean,
      default: true
    },
    pageKey: String,
    slot: String
  },
  render: function render(h, _ref) {
    var parent = _ref.parent,
        props = _ref.props,
        data = _ref.data;
    var pageKey = props.pageKey || parent.$page.key;

    if (_internal_page_components__WEBPACK_IMPORTED_MODULE_1__["default"][pageKey]) {
      // In SSR, if a component is not registered with the component option
      // vue-server-renderer will not be able to resovle it.
      if (!parent.$ssrContext) {
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].component(pageKey, _internal_page_components__WEBPACK_IMPORTED_MODULE_1__["default"][pageKey]);
      }

      return h(pageKey, {
        class: [props.custom ? 'custom' : '', data.class, data.staticClass],
        style: data.style,
        slot: props.slot || 'default'
      });
    }

    return h('');
  }
});

/***/ }),

/***/ "../@vuepress/core/lib/app/components/LayoutDistributor.vue":
/*!******************************************************************!*\
  !*** ../@vuepress/core/lib/app/components/LayoutDistributor.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutDistributor_vue_vue_type_template_id_1938a6dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutDistributor.vue?vue&type=template&id=1938a6dc& */ "../@vuepress/core/lib/app/components/LayoutDistributor.vue?vue&type=template&id=1938a6dc&");
/* harmony import */ var _LayoutDistributor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutDistributor.vue?vue&type=script&lang=js& */ "../@vuepress/core/lib/app/components/LayoutDistributor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutDistributor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutDistributor_vue_vue_type_template_id_1938a6dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutDistributor_vue_vue_type_template_id_1938a6dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../@vuepress/core/lib/app/components/LayoutDistributor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ../@vuepress/core/lib/app/components/LayoutDistributor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutDistributor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../../../node_modules/babel-loader/lib??ref--3-1!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutDistributor.vue?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/app/components/LayoutDistributor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutDistributor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../@vuepress/core/lib/app/components/LayoutDistributor.vue?vue&type=template&id=1938a6dc&":
/*!*************************************************************************************************!*\
  !*** ../@vuepress/core/lib/app/components/LayoutDistributor.vue?vue&type=template&id=1938a6dc& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutDistributor_vue_vue_type_template_id_1938a6dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutDistributor.vue?vue&type=template&id=1938a6dc& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/app/components/LayoutDistributor.vue?vue&type=template&id=1938a6dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutDistributor_vue_vue_type_template_id_1938a6dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutDistributor_vue_vue_type_template_id_1938a6dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../@vuepress/core/lib/app/components/OutboundLink.vue":
/*!*************************************************************!*\
  !*** ../@vuepress/core/lib/app/components/OutboundLink.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OutboundLink_vue_vue_type_template_id_f41dccde_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutboundLink.vue?vue&type=template&id=f41dccde&functional=true& */ "../@vuepress/core/lib/app/components/OutboundLink.vue?vue&type=template&id=f41dccde&functional=true&");
/* harmony import */ var _OutboundLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OutboundLink.vue?vue&type=style&index=0&lang=stylus& */ "../@vuepress/core/lib/app/components/OutboundLink.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _OutboundLink_vue_vue_type_template_id_f41dccde_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OutboundLink_vue_vue_type_template_id_f41dccde_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../@vuepress/core/lib/app/components/OutboundLink.vue?vue&type=style&index=0&lang=stylus&":
/*!*************************************************************************************************!*\
  !*** ../@vuepress/core/lib/app/components/OutboundLink.vue?vue&type=style&index=0&lang=stylus& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_13_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_13_oneOf_1_2_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OutboundLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../../node_modules/css-loader??ref--13-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--13-oneOf-1-2!../../../../../../node_modules/stylus-loader??ref--13-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OutboundLink.vue?vue&type=style&index=0&lang=stylus& */ "../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/index.js?!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/lib/index.js?!../../node_modules/stylus-loader/index.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/app/components/OutboundLink.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_13_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_13_oneOf_1_2_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OutboundLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_13_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_13_oneOf_1_2_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OutboundLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_13_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_13_oneOf_1_2_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OutboundLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_13_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_13_oneOf_1_2_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OutboundLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_13_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_13_oneOf_1_2_node_modules_stylus_loader_index_js_ref_13_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OutboundLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../@vuepress/core/lib/app/components/OutboundLink.vue?vue&type=template&id=f41dccde&functional=true&":
/*!************************************************************************************************************!*\
  !*** ../@vuepress/core/lib/app/components/OutboundLink.vue?vue&type=template&id=f41dccde&functional=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OutboundLink_vue_vue_type_template_id_f41dccde_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./OutboundLink.vue?vue&type=template&id=f41dccde&functional=true& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/app/components/OutboundLink.vue?vue&type=template&id=f41dccde&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OutboundLink_vue_vue_type_template_id_f41dccde_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OutboundLink_vue_vue_type_template_id_f41dccde_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../@vuepress/core/lib/app/dataMixin.js":
/*!**********************************************!*\
  !*** ../@vuepress/core/lib/app/dataMixin.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dataMixin; });
/* harmony import */ var core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.freeze */ "../../node_modules/core-js/modules/es6.object.freeze.js");
/* harmony import */ var core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.starts-with */ "../../node_modules/core-js/modules/es6.string.starts-with.js");
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "../../node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "../../node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "../../node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors */ "../../node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");







/* global VUEPRESS_TEMP_PATH */

function dataMixin(I18n, siteData) {
  prepare(siteData);
  var store = new vue__WEBPACK_IMPORTED_MODULE_6__["default"]({
    data: {
      siteData: siteData,
      disableScrollBehavior: false
    }
  });
  vue__WEBPACK_IMPORTED_MODULE_6__["default"].$store = store;

  if (false) {}

  var I18nConstructor = I18n(store);
  var i18n = new I18nConstructor();
  var descriptors = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(i18n));
  var computed = {};
  Object.keys(descriptors).reduce(function (computed, key) {
    if (key.startsWith('$')) {
      computed[key] = descriptors[key].get;
    }

    return computed;
  }, computed);
  return {
    computed: computed
  };
}

function prepare(siteData) {
  if (siteData.locales) {
    Object.keys(siteData.locales).forEach(function (path) {
      siteData.locales[path].path = path;
    });
  }

  Object.freeze(siteData);
}

/***/ }),

/***/ "../@vuepress/core/lib/app/root-mixins/updateMeta.js":
/*!***********************************************************!*\
  !*** ../@vuepress/core/lib/app/root-mixins/updateMeta.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "../../node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "../../node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "../../node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "../../node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.set */ "../../node_modules/core-js/modules/es6.set.js");
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title;
      this.$ssrContext.lang = this.$lang;
      this.$ssrContext.description = this.$page.description || this.$description;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // update title / meta tags
    this.currentMetaTags = new Set();

    var updateMeta = function updateMeta() {
      document.title = _this.$title;
      document.documentElement.lang = _this.$lang;
      var userMeta = _this.$page.frontmatter.meta || [];
      var meta = userMeta.slice(0);
      var useGlobalDescription = userMeta.filter(function (m) {
        return m.name === 'description';
      }).length === 0; // #665 Avoid duplicate description meta at runtime.

      if (useGlobalDescription) {
        meta.push({
          name: 'description',
          content: _this.$description
        });
      } // Including description meta coming from SSR.


      var descriptionMetas = document.querySelectorAll('meta[name="description"]');

      if (descriptionMetas.length) {
        descriptionMetas.forEach(function (m) {
          return _this.currentMetaTags.add(m);
        });
      }

      _this.currentMetaTags = new Set(updateMetaTags(meta, _this.currentMetaTags));
    };

    this.$watch('$page', updateMeta);
    updateMeta();
  },
  beforeDestroy: function beforeDestroy() {
    updateMetaTags(null, this.currentMetaTags);
  }
});

function updateMetaTags(meta, current) {
  if (current) {
    Object(_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(current).forEach(function (c) {
      document.head.removeChild(c);
    });
  }

  if (meta) {
    return meta.map(function (m) {
      var tag = document.createElement('meta');
      Object.keys(m).forEach(function (key) {
        tag.setAttribute(key, m[key]);
      });
      document.head.appendChild(tag);
      return tag;
    });
  }
}

/***/ }),

/***/ "../@vuepress/core/lib/app/util.js":
/*!*****************************************!*\
  !*** ../@vuepress/core/lib/app/util.js ***!
  \*****************************************/
/*! exports provided: injectComponentOption, findPageForPath, findPageByKey, normalizeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectComponentOption", function() { return injectComponentOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPageForPath", function() { return findPageForPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPageByKey", function() { return findPageByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeConfig", function() { return normalizeConfig; });
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/typeof */ "../../node_modules/@babel/runtime/helpers/builtin/es6/typeof.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "../../node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js");




/**
 * Inject option to Vue SFC
 * @param {object} options
 * @param {string} key
 * @param {any} value
 */
function injectComponentOption(options, key, value) {
  var arrayInject = function arrayInject() {
    var _options$key;

    if (!options[key]) options[key] = [];

    (_options$key = options[key]).push.apply(_options$key, Object(_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(value));
  };

  var objectInject = function objectInject() {
    if (!options[key]) options[key] = {};
    Object.assign(options[key], value);
  }; // const primitiveInject = () => options[key] = value


  switch (key) {
    case 'components':
      objectInject();
      break;

    case 'mixins':
      arrayInject();
      break;

    default:
      throw new Error('Unknown option name.');
  }
}
function findPageForPath(pages, path) {
  for (var i = 0; i < pages.length; i++) {
    var page = pages[i];

    if (page.path === path) {
      return page;
    }
  }

  return {
    path: '',
    frontmatter: {}
  };
}
function findPageByKey(pages, key) {
  for (var i = 0; i < pages.length; i++) {
    var page = pages[i];

    if (page.key === key) {
      return page;
    }
  }

  return {
    path: '',
    frontmatter: {}
  };
}
/**
 * Normalize config.
 * This utility is mainly for plugin developers. For some
 * plugins that need internationalize the text. but it's
 * not recommenbded to let plugin care about to the internal
 * i18n implementation, so this utility was born.
 *
 *
 * Usage:
 *
 * import { normalizeConfig } from '@app/util'
 * export default {
 *   data () {
 *     return { config }
 *   }
 *   computed: {
 *     normalizedConfig() {
 *       return normalizeConfig(this, config)
 *     }
 *   }
 * }
 *
 *
 * e.g.
 *
 * Config: : 'Text'
 * Normalized Config: 'Text'
 *
 * Config: : { '/': 'Text', '/zh/': '文本' }
 * Normalized Config: 'Text' or '文本'
 *
 * @param {Vue} component
 * @param {any} rawConfig
 * @returns {any}
 */

function normalizeConfig(component, rawConfig) {
  var $localePath = component.$localePath;

  if (Object(_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(rawConfig) === 'object' && rawConfig[$localePath]) {
    return rawConfig[$localePath];
  }

  return rawConfig;
}

/***/ }),

/***/ "../@vuepress/plugin-blog/clientPlugin.js":
/*!************************************************!*\
  !*** ../@vuepress/plugin-blog/clientPlugin.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "../../node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "../../node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "../../node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "../../node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck */ "../../node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck.js");
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/createClass */ "../../node_modules/@babel/runtime/helpers/builtin/es6/createClass.js");
/* harmony import */ var _app_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/util */ "../@vuepress/core/lib/app/util.js");
/* harmony import */ var _dynamic_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @dynamic/tag */ "./.temp/dynamic/tag.js");









var Tags =
/*#__PURE__*/
function () {
  function Tags(tagMeta, pages) {
    var _this = this;

    Object(_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Tags);

    this._tagsMap = Object.assign({}, tagMeta);
    Object.keys(this._tagsMap).forEach(function (tagName) {
      var pageKeys = _this._tagsMap[tagName];
      _this._tagsMap[tagName] = pageKeys.map(function (key) {
        return Object(_app_util__WEBPACK_IMPORTED_MODULE_6__["findPageByKey"])(pages, key);
      });
    });
  }

  Object(_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Tags, [{
    key: "getPagesByTagName",
    value: function getPagesByTagName(tagName) {
      return this._tagsMap[tagName];
    }
  }, {
    key: "length",
    get: function get() {
      return Object.keys(this._tagsMap).length;
    }
  }, {
    key: "tags",
    get: function get() {
      var _this2 = this;

      var tags = [];
      Object.keys(this._tagsMap).forEach(function (tagName) {
        tags.push({
          name: tagName,
          posts: _this2._tagsMap[tagName],
          path: "/tag/".concat(tagName, ".html")
        });
      });
      return tags;
    }
  }]);

  return Tags;
}();

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var Vue = _ref.Vue;
  Vue.mixin({
    computed: {
      $tags: function $tags() {
        var pages = this.$site.pages;
        var tags = new Tags(_dynamic_tag__WEBPACK_IMPORTED_MODULE_7__["default"], pages);
        return tags;
      },
      $tag: function $tag() {
        var tagName = this.$route.meta.tagName;
        return {
          tagName: tagName,
          posts: this.$tags.getPagesByTagName(tagName)
        };
      }
    }
  });
});

/***/ }),

/***/ "../@vuepress/plugin-pagination/clientPlugin.js":
/*!******************************************************!*\
  !*** ../@vuepress/plugin-pagination/clientPlugin.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/slicedToArray */ "../../node_modules/@babel/runtime/helpers/builtin/es6/slicedToArray.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "../../node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck */ "../../node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck.js");
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/createClass */ "../../node_modules/@babel/runtime/helpers/builtin/es6/createClass.js");
/* harmony import */ var _dynamic_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dynamic/pagination */ "./.temp/dynamic/pagination.js");






var Pagination =
/*#__PURE__*/
function () {
  function Pagination(pagination, _ref) {
    var _this = this;

    var pages = _ref.pages,
        route = _ref.route;

    Object(_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Pagination);

    var postsFilter = pagination.postsFilter,
        postsSorter = pagination.postsSorter;
    /* eslint-disable no-eval */

    postsFilter = eval(postsFilter);
    postsSorter = eval(postsSorter);
    var path = route.path;
    var paginationPages = pagination.paginationPages;
    paginationPages.forEach(function (page, index) {
      if (page.path === path) {
        _this.paginationIndex = index;
      }
    });

    if (!this.paginationIndex) {
      this.paginationIndex = 0;
    }

    this._paginationPages = paginationPages;
    this._currentPage = paginationPages[this.paginationIndex];
    this._posts = pages.filter(postsFilter).sort(postsSorter);
  }

  Object(_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Pagination, [{
    key: "length",
    get: function get() {
      return this._paginationPages.length;
    }
  }, {
    key: "posts",
    get: function get() {
      var _this$_currentPage$in = Object(_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._currentPage.interval, 2),
          start = _this$_currentPage$in[0],
          end = _this$_currentPage$in[1];

      return this._posts.slice(start, end);
    }
  }, {
    key: "hasPrev",
    get: function get() {
      return this.paginationIndex !== 0;
    }
  }, {
    key: "prevLink",
    get: function get() {
      if (this.hasPrev) {
        return this._paginationPages[this.paginationIndex - 1].path;
      }
    }
  }, {
    key: "hasNext",
    get: function get() {
      return this.paginationIndex !== this.length - 1;
    }
  }, {
    key: "nextLink",
    get: function get() {
      if (this.hasNext) {
        return this._paginationPages[this.paginationIndex + 1].path;
      }
    }
  }]);

  return Pagination;
}();

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var Vue = _ref2.Vue;
  Vue.mixin({
    computed: {
      $pagination: function $pagination() {
        var pages = this.$site.pages;
        var pagination = new Pagination(_dynamic_pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
          pages: pages,
          route: this.$route
        });
        return pagination;
      }
    }
  });
});

/***/ }),

/***/ "./.temp/app-enhancers/0.js":
/*!**********************************!*\
  !*** ./.temp/app-enhancers/0.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_blog_example_source_vuepress_theme_vuepress_theme_egoist_enhanceApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source/.vuepress/theme/vuepress-theme-egoist/enhanceApp.js */ "./source/.vuepress/theme/vuepress-theme-egoist/enhanceApp.js");

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./.temp/app-enhancers/1.js":
/*!**********************************!*\
  !*** ./.temp/app-enhancers/1.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_plugin_blog_clientPlugin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../@vuepress/plugin-blog/clientPlugin.js */ "../@vuepress/plugin-blog/clientPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_plugin_blog_clientPlugin_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./.temp/app-enhancers/2.js":
/*!**********************************!*\
  !*** ./.temp/app-enhancers/2.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_plugin_pagination_clientPlugin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../@vuepress/plugin-pagination/clientPlugin.js */ "../@vuepress/plugin-pagination/clientPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_plugin_pagination_clientPlugin_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./.temp/app-enhancers/global-components-1.js":
/*!****************************************************!*\
  !*** ./.temp/app-enhancers/global-components-1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");

vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("Footer", function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./source/.vuepress/theme/vuepress-theme-egoist/components/Footer.vue */ "./source/.vuepress/theme/vuepress-theme-egoist/components/Footer.vue"));
});
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component("Header", function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./source/.vuepress/theme/vuepress-theme-egoist/components/Header.vue */ "./source/.vuepress/theme/vuepress-theme-egoist/components/Header.vue"));
});
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./.temp/dynamic/pagination.js":
/*!*************************************!*\
  !*** ./.temp/dynamic/pagination.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Generated by "@vuepress/plugin-pagination"
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  "paginationPages": [{
    "path": "/",
    "interval": [0, 9]
  }, {
    "path": "/page/2/",
    "interval": [10, 19]
  }, {
    "path": "/page/3/",
    "interval": [20, 29]
  }, {
    "path": "/page/4/",
    "interval": [30, 39]
  }, {
    "path": "/page/5/",
    "interval": [40, 49]
  }],
  "postsFilter": "({ type }) => type === 'post'",
  "postsSorter": "(prev, next) => {\n      const prevTime = new Date(prev.frontmatter.date).getTime()\n      const nextTime = new Date(next.frontmatter.date).getTime()\n      return prevTime - nextTime > 0 ? -1 : 1\n    }"
});

/***/ }),

/***/ "./.temp/dynamic/tag.js":
/*!******************************!*\
  !*** ./.temp/dynamic/tag.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Generated by "@vuepress/plugin-blog"
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  "anime": ["v-d9993f0d2d98", "v-cb2e9b82170f3", "v-82d70cc1523de", "v-e2b4e1c748466", "v-8e40bc2a106ff"],
  "animes": ["v-0e0a5533c2e95", "v-ea08d4cc05f9f"],
  "javascript": ["v-fe1de9bfc807b", "v-72b3beb2b3ca4", "v-f1cfaf823f70e", "v-374f6ac1f352d", "v-45a3bf9824593", "v-2607554aeff2f", "v-8a9e57635a9ab", "v-7103000f32452", "v-a8d6a58c756dc", "v-c16150a1b5251", "v-7d576a0aaf519"],
  "frontend": ["v-fe1de9bfc807b", "v-f1cfaf823f70e"],
  "localStorage": ["v-5661d9efc1d3f"],
  "thoughts": ["v-b97226c87683"],
  "start": ["v-952d9649913ff"],
  "deploy": ["v-0ff05445cb4c8"],
  "node.js": ["v-0ff05445cb4c8", "v-8a9e57635a9ab"],
  "docker": ["v-0ff05445cb4c8"],
  "bundle": ["v-72b3beb2b3ca4"],
  "bili": ["v-72b3beb2b3ca4"],
  "fuuka": ["v-857322a9deeda"],
  "js": ["v-f1cfaf823f70e"],
  "bootstrap": ["v-f1cfaf823f70e"],
  "jquery": ["v-f1cfaf823f70e", "v-fcc95f5880a29"],
  "vue": ["v-f1cfaf823f70e", "v-7103000f32452", "v-f6b19b10202a2"],
  "react": ["v-f1cfaf823f70e"],
  "mvvm": ["v-f1cfaf823f70e"],
  "canvas": ["v-374f6ac1f352d"],
  "git": ["v-808bae1b3eb96", "v-38dc209164718"],
  "cli": ["v-63d5bcda16dfe"],
  "node": ["v-63d5bcda16dfe"],
  "how-to": ["v-a02bed04ac976"],
  "udo": ["v-38dc209164718"],
  "gulp": ["v-507ac86a723d1"],
  "npm": ["v-507ac86a723d1"],
  "terminal": ["v-aada35a358305"],
  "story": ["v-2607554aeff2f"],
  "otaku": ["v-777bc6536e9e"],
  "life": ["v-fa0eb5814722c"],
  "sindresorhus": ["v-8a9e57635a9ab"],
  "postgresql": ["v-e0f96de97313a"],
  "database": ["v-e0f96de97313a"],
  "redux": ["v-7103000f32452"],
  "revue": ["v-7103000f32452"],
  "rezero": ["v-e2b4e1c748466"],
  "rem": ["v-e2b4e1c748466"],
  "sublime": ["v-519c679542748"],
  "vs code": ["v-519c679542748"],
  "jest": ["v-a8d6a58c756dc"],
  "test": ["v-a8d6a58c756dc"],
  "babel": ["v-0f065777cd9d3"],
  "buble": ["v-0f065777cd9d3"],
  "tooling": ["v-fcc95f5880a29"],
  "webpack": ["v-fcc95f5880a29"],
  "jsx": ["v-f6b19b10202a2"],
  "eslint": ["v-c16150a1b5251"],
  "prettier": ["v-c16150a1b5251"],
  "code": ["v-7d576a0aaf519"],
  "space": ["v-7d576a0aaf519"],
  "tab": ["v-7d576a0aaf519"]
});

/***/ }),

/***/ "./.temp/internal/app-enhancers.js":
/*!*****************************************!*\
  !*** ./.temp/internal/app-enhancers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "../../node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_blog_example_temp_app_enhancers_0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./.temp/app-enhancers/0.js */ "./.temp/app-enhancers/0.js");
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_blog_example_temp_app_enhancers_1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.temp/app-enhancers/1.js */ "./.temp/app-enhancers/1.js");
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_blog_example_temp_app_enhancers_2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./.temp/app-enhancers/2.js */ "./.temp/app-enhancers/2.js");
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_blog_example_temp_app_enhancers_global_components_1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./.temp/app-enhancers/global-components-1.js */ "./.temp/app-enhancers/global-components-1.js");





/* harmony default export */ __webpack_exports__["default"] = ([_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_blog_example_temp_app_enhancers_0_js__WEBPACK_IMPORTED_MODULE_1__["default"], _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_blog_example_temp_app_enhancers_1_js__WEBPACK_IMPORTED_MODULE_2__["default"], _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_blog_example_temp_app_enhancers_2_js__WEBPACK_IMPORTED_MODULE_3__["default"], _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_blog_example_temp_app_enhancers_global_components_1_js__WEBPACK_IMPORTED_MODULE_4__["default"]]);

/***/ }),

/***/ "./.temp/internal/global-ui.js":
/*!*************************************!*\
  !*** ./.temp/internal/global-ui.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([]);

/***/ }),

/***/ "./.temp/internal/i18n.js":
/*!********************************!*\
  !*** ./.temp/internal/i18n.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "../../node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "../../node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "../../node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "../../node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck */ "../../node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck.js");
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/createClass */ "../../node_modules/@babel/runtime/helpers/builtin/es6/createClass.js");







/**
 * Generated by "@vuepress/internal-i18n-temp"
 */
function findPageForPath(pages, path) {
  for (var i = 0; i < pages.length; i++) {
    var page = pages[i];

    if (page.path === path) {
      return page;
    }
  }

  return {
    path: '',
    frontmatter: {}
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function (store
/* null in server side */
) {
  return (
    /*#__PURE__*/
    function () {
      function I18n(dataProvider) {
        Object(_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, I18n);

        this.__ssrContext = true;
        this.__dataProvider = dataProvider;
      }

      Object(_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(I18n, [{
        key: "setSSRContext",
        value: function setSSRContext(context) {
          this.__ssrContext = context;
        }
      }, {
        key: "$site",
        get: function get() {
          if (this.__ssrContext) {
            var siteData = this.__dataProvider();

            if (siteData.locales) {
              Object.keys(siteData.locales).forEach(function (path) {
                siteData.locales[path].path = path;
              });
            }

            return siteData;
          }

          return store.siteData;
        }
      }, {
        key: "$themeConfig",
        get: function get() {
          return this.$site.themeConfig;
        }
      }, {
        key: "$localeConfig",
        get: function get() {
          var _this$$site$locales = this.$site.locales,
              locales = _this$$site$locales === void 0 ? {} : _this$$site$locales;
          var targetLang;
          var defaultLang;

          for (var path in locales) {
            if (path === '/') {
              defaultLang = locales[path];
            } else if (this.$page.path.indexOf(path) === 0) {
              targetLang = locales[path];
            }
          }

          return targetLang || defaultLang || {};
        }
      }, {
        key: "$siteTitle",
        get: function get() {
          return this.$localeConfig.title || this.$site.title || '';
        }
      }, {
        key: "$title",
        get: function get() {
          var page = this.$page;
          var siteTitle = this.$siteTitle;
          var selfTitle = page.frontmatter.home ? null : page.frontmatter.title || // explicit title
          page.title // inferred title
          ;
          return siteTitle ? selfTitle ? selfTitle + ' | ' + siteTitle : siteTitle : selfTitle || 'VuePress';
        }
      }, {
        key: "$description",
        get: function get() {
          // #565 hoist description from meta
          if (this.$page.frontmatter.meta) {
            var descriptionMeta = this.$page.frontmatter.meta.filter(function (item) {
              return item.name === 'description';
            })[0];
            if (descriptionMeta) return descriptionMeta.content;
          }

          return this.$page.frontmatter.description || this.$localeConfig.description || this.$site.description || '';
        }
      }, {
        key: "$lang",
        get: function get() {
          return this.$page.frontmatter.lang || this.$localeConfig.lang || 'en-US';
        }
      }, {
        key: "$localePath",
        get: function get() {
          return this.$localeConfig.path || '/';
        }
      }, {
        key: "$themeLocaleConfig",
        get: function get() {
          return (this.$site.themeConfig.locales || {})[this.$localePath] || {};
        }
      }, {
        key: "$page",
        get: function get() {
          if (this.__ssrContext) {
            return this.__ssrContext;
          }

          return findPageForPath(this.$site.pages, this.$route.path);
        }
      }]);

      return I18n;
    }()
  );
});

/***/ }),

/***/ "./.temp/internal/layout-components.js":
/*!*********************************************!*\
  !*** ./.temp/internal/layout-components.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Generated by "@vuepress/internal-layout-components"
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  "NotFound": function NotFound() {
    return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./source/.vuepress/theme/vuepress-theme-egoist/layouts/404.vue */ "./source/.vuepress/theme/vuepress-theme-egoist/layouts/404.vue"));
  },
  "Layout": function Layout() {
    return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./source/.vuepress/theme/vuepress-theme-egoist/layouts/Layout.vue */ "./source/.vuepress/theme/vuepress-theme-egoist/layouts/Layout.vue"));
  },
  "Page": function Page() {
    return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./source/.vuepress/theme/vuepress-theme-egoist/layouts/Page.vue */ "./source/.vuepress/theme/vuepress-theme-egoist/layouts/Page.vue"));
  },
  "Tag": function Tag() {
    return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./source/.vuepress/theme/vuepress-theme-egoist/layouts/Tag.vue */ "./source/.vuepress/theme/vuepress-theme-egoist/layouts/Tag.vue"));
  },
  "Tags": function Tags() {
    return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./source/.vuepress/theme/vuepress-theme-egoist/layouts/Tags.vue */ "./source/.vuepress/theme/vuepress-theme-egoist/layouts/Tags.vue"));
  }
});

/***/ }),

/***/ "./.temp/internal/page-components.js":
/*!*******************************************!*\
  !*** ./.temp/internal/page-components.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Generated by "@vuepress/internal-page-components"
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  "v-d9993f0d2d98": function vD9993f0d2d98() {
    return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./source/_posts/2015-7-animes-review.md */ "./source/_posts/2015-7-animes-review.md"));
  },
  "v-cb2e9b82170f3": function vCb2e9b82170f3() {
    return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./source/_posts/2015-10-anime-recommendations.md */ "./source/_posts/2015-10-anime-recommendations.md"));
  },
  "v-82d70cc1523de": function v82d70cc1523de() {
    return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./source/_posts/2016-1-anime-recommendations.md */ "./source/_posts/2016-1-anime-recommendations.md"));
  },
  "v-b9b6f5ac34af7": function vB9b6f5ac34af7() {
    return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./source/_posts/2015-10-anime-review.md */ "./source/_posts/2015-10-anime-review.md"));
  },
  "v-0e0a5533c2e95": function v0e0a5533c2e95() {
    return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./source/_posts/2016-4-anime-recommendations.md */ "./source/_posts/2016-4-anime-recommendations.md"));
  },
  "v-ea08d4cc05f9f": function vEa08d4cc05f9f() {
    return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./source/_posts/2016-7-anime-recommendations.md */ "./source/_posts/2016-7-anime-recommendations.md"));
  },
  "v-fe1de9bfc807b": function vFe1de9bfc807b() {
    return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./source/_posts/2016-front-end-primer.md */ "./source/_posts/2016-front-end-primer.md"));
  },
  "v-3602d9adbc8c9": function v3602d9adbc8c9() {
    return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./source/_posts/5-12-memory.md */ "./source/_posts/5-12-memory.md"));
  },
  "v-5661d9efc1d3f": function v5661d9efc1d3f() {
    return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./source/_posts/a-light-weight-localstorage-orm.md */ "./source/_posts/a-light-weight-localstorage-orm.md"));
  },
  "v-7b268f7395e5c": function v7b268f7395e5c() {
    return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./source/_posts/all-things-last-long.md */ "./source/_posts/all-things-last-long.md"));
  },
  "v-b97226c87683": function vB97226c87683() {
    return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./source/_posts/best-thing-ever.md */ "./source/_posts/best-thing-ever.md"));
  },
  "v-771a7494f2dc": function v771a7494f2dc() {
    return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./source/_posts/bili.md */ "./source/_posts/bili.md"));
  },
  "v-952d9649913ff": function v952d9649913ff() {
    return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./source/_posts/Hello-World.md */ "./source/_posts/Hello-World.md"));
  },
  "v-0ff05445cb4c8": function v0ff05445cb4c8() {
    return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./source/_posts/deploy-node-app.md */ "./source/_posts/deploy-node-app.md"));
  },
  "v-72b3beb2b3ca4": function v72b3beb2b3ca4() {
    return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./source/_posts/bundle-front-end-js-library.md */ "./source/_posts/bundle-front-end-js-library.md"));
  },
  "v-857322a9deeda": function v857322a9deeda() {
    return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ./source/_posts/fuuka-fate.md */ "./source/_posts/fuuka-fate.md"));
  },
  "v-f1cfaf823f70e": function vF1cfaf823f70e() {
    return __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./source/_posts/front-end-frameworks.md */ "./source/_posts/front-end-frameworks.md"));
  },
  "v-374f6ac1f352d": function v374f6ac1f352d() {
    return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./source/_posts/draw-chat-message-with-canvas.md */ "./source/_posts/draw-chat-message-with-canvas.md"));
  },
  "v-45a3bf9824593": function v45a3bf9824593() {
    return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./source/_posts/how-does-array-slice-call-arguments-work.md */ "./source/_posts/how-does-array-slice-call-arguments-work.md"));
  },
  "v-808bae1b3eb96": function v808bae1b3eb96() {
    return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./source/_posts/git-memo.md */ "./source/_posts/git-memo.md"));
  },
  "v-6e486519cdf4c": function v6e486519cdf4c() {
    return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! ./source/_posts/good-and-bad-anime.md */ "./source/_posts/good-and-bad-anime.md"));
  },
  "v-63d5bcda16dfe": function v63d5bcda16dfe() {
    return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./source/_posts/how-does-nodejs-cli-program-work.md */ "./source/_posts/how-does-nodejs-cli-program-work.md"));
  },
  "v-a02bed04ac976": function vA02bed04ac976() {
    return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, /*! ./source/_posts/how-to-learn-to-code.md */ "./source/_posts/how-to-learn-to-code.md"));
  },
  "v-2b3eb41f7327f": function v2b3eb41f7327f() {
    return __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! ./source/_posts/linus-and-i.md */ "./source/_posts/linus-and-i.md"));
  },
  "v-38dc209164718": function v38dc209164718() {
    return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./source/_posts/how-to-undo-with-git.md */ "./source/_posts/how-to-undo-with-git.md"));
  },
  "v-507ac86a723d1": function v507ac86a723d1() {
    return __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md */ "./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md"));
  },
  "v-aada35a358305": function vAada35a358305() {
    return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./source/_posts/log-in-with-your-teminal.md */ "./source/_posts/log-in-with-your-teminal.md"));
  },
  "v-2607554aeff2f": function v2607554aeff2f() {
    return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ./source/_posts/my-rollup-plugin-postcss.md */ "./source/_posts/my-rollup-plugin-postcss.md"));
  },
  "v-e10e2abe32a54": function vE10e2abe32a54() {
    return __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./source/_posts/neon-genesis-scaffolding-tool.md */ "./source/_posts/neon-genesis-scaffolding-tool.md"));
  },
  "v-777bc6536e9e": function v777bc6536e9e() {
    return __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./source/_posts/otaku-is-the-best.md */ "./source/_posts/otaku-is-the-best.md"));
  },
  "v-fa0eb5814722c": function vFa0eb5814722c() {
    return __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./source/_posts/new-timetable.md */ "./source/_posts/new-timetable.md"));
  },
  "v-8a9e57635a9ab": function v8a9e57635a9ab() {
    return __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ./source/_posts/node-js-module-style-guide.md */ "./source/_posts/node-js-module-style-guide.md"));
  },
  "v-e0f96de97313a": function vE0f96de97313a() {
    return __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./source/_posts/postgresql-simple-guide.md */ "./source/_posts/postgresql-simple-guide.md"));
  },
  "v-7103000f32452": function v7103000f32452() {
    return __webpack_require__.e(/*! import() */ 41).then(__webpack_require__.bind(null, /*! ./source/_posts/revue-guide.md */ "./source/_posts/revue-guide.md"));
  },
  "v-e2b4e1c748466": function vE2b4e1c748466() {
    return __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! ./source/_posts/subaru-be-loyal-or-jerk.md */ "./source/_posts/subaru-be-loyal-or-jerk.md"));
  },
  "v-be5603de51c1f": function vBe5603de51c1f() {
    return __webpack_require__.e(/*! import() */ 43).then(__webpack_require__.bind(null, /*! ./source/_posts/short-hair.md */ "./source/_posts/short-hair.md"));
  },
  "v-519c679542748": function v519c679542748() {
    return __webpack_require__.e(/*! import() */ 44).then(__webpack_require__.bind(null, /*! ./source/_posts/sublime-vscode-key-bindings.md */ "./source/_posts/sublime-vscode-key-bindings.md"));
  },
  "v-a8d6a58c756dc": function vA8d6a58c756dc() {
    return __webpack_require__.e(/*! import() */ 45).then(__webpack_require__.bind(null, /*! ./source/_posts/tesing-javascript-apps-using-jest.md */ "./source/_posts/tesing-javascript-apps-using-jest.md"));
  },
  "v-54f749dd82bec": function v54f749dd82bec() {
    return __webpack_require__.e(/*! import() */ 46).then(__webpack_require__.bind(null, /*! ./source/_posts/the-world-is-a-big-noise.md */ "./source/_posts/the-world-is-a-big-noise.md"));
  },
  "v-0f065777cd9d3": function v0f065777cd9d3() {
    return __webpack_require__.e(/*! import() */ 47).then(__webpack_require__.bind(null, /*! ./source/_posts/the-most-lightweight-es2015-setup.md */ "./source/_posts/the-most-lightweight-es2015-setup.md"));
  },
  "v-fe18276b65f4d": function vFe18276b65f4d() {
    return __webpack_require__.e(/*! import() */ 48).then(__webpack_require__.bind(null, /*! ./source/_posts/this-is-how-it-started.md */ "./source/_posts/this-is-how-it-started.md"));
  },
  "v-fcc95f5880a29": function vFcc95f5880a29() {
    return __webpack_require__.e(/*! import() */ 49).then(__webpack_require__.bind(null, /*! ./source/_posts/tooling-free-you-from-jquery.md */ "./source/_posts/tooling-free-you-from-jquery.md"));
  },
  "v-7e794b0766a4c": function v7e794b0766a4c() {
    return __webpack_require__.e(/*! import() */ 50).then(__webpack_require__.bind(null, /*! ./source/_posts/true-how-to-learn-to-code.md */ "./source/_posts/true-how-to-learn-to-code.md"));
  },
  "v-1e1ac6d00d035": function v1e1ac6d00d035() {
    return __webpack_require__.e(/*! import() */ 51).then(__webpack_require__.bind(null, /*! ./source/_posts/why-i-wont-marry.md */ "./source/_posts/why-i-wont-marry.md"));
  },
  "v-f6b19b10202a2": function vF6b19b10202a2() {
    return __webpack_require__.e(/*! import() */ 52).then(__webpack_require__.bind(null, /*! ./source/_posts/vue-jsx-full-guide.md */ "./source/_posts/vue-jsx-full-guide.md"));
  },
  "v-8e40bc2a106ff": function v8e40bc2a106ff() {
    return __webpack_require__.e(/*! import() */ 53).then(__webpack_require__.bind(null, /*! ./source/_posts/why-so-addicted-into-anime.md */ "./source/_posts/why-so-addicted-into-anime.md"));
  },
  "v-c16150a1b5251": function vC16150a1b5251() {
    return __webpack_require__.e(/*! import() */ 54).then(__webpack_require__.bind(null, /*! ./source/_posts/write-better-code-with-eslint-and-prettier.md */ "./source/_posts/write-better-code-with-eslint-and-prettier.md"));
  },
  "v-f656cb6893f71": function vF656cb6893f71() {
    return __webpack_require__.e(/*! import() */ 55).then(__webpack_require__.bind(null, /*! ./source/about.md */ "./source/about.md"));
  },
  "v-8aa01dc608728": function v8aa01dc608728() {
    return __webpack_require__.e(/*! import() */ 56).then(__webpack_require__.bind(null, /*! ./source/girls.md */ "./source/girls.md"));
  },
  "v-f022d775e5d71": function vF022d775e5d71() {
    return __webpack_require__.e(/*! import() */ 57).then(__webpack_require__.bind(null, /*! ./source/_posts/wtf-is-front-end-development.md */ "./source/_posts/wtf-is-front-end-development.md"));
  },
  "v-7d576a0aaf519": function v7d576a0aaf519() {
    return __webpack_require__.e(/*! import() */ 58).then(__webpack_require__.bind(null, /*! ./source/_posts/why-i-choose-tab-over-space.md */ "./source/_posts/why-i-choose-tab-over-space.md"));
  },
  "v-1df3523345d37": function v1df3523345d37() {
    return __webpack_require__.e(/*! import() */ 59).then(__webpack_require__.bind(null, /*! ./source/donate.md */ "./source/donate.md"));
  },
  "v-a2cd2476919bb": function vA2cd2476919bb() {
    return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(60)]).then(__webpack_require__.bind(null, /*! ./source/index.md */ "./source/index.md"));
  }
});

/***/ }),

/***/ "./.temp/internal/root-mixins.js":
/*!***************************************!*\
  !*** ./.temp/internal/root-mixins.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_lib_app_root_mixins_updateMeta_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../@vuepress/core/lib/app/root-mixins/updateMeta.js */ "../@vuepress/core/lib/app/root-mixins/updateMeta.js");
/**
 * Generated by "@vuepress/internal-root-mixins"
 */

/* harmony default export */ __webpack_exports__["default"] = ([_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_lib_app_root_mixins_updateMeta_js__WEBPACK_IMPORTED_MODULE_0__["default"]]);

/***/ }),

/***/ "./.temp/internal/routes.js":
/*!**********************************!*\
  !*** ./.temp/internal/routes.js ***!
  \**********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _app_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/util */ "../@vuepress/core/lib/app/util.js");
/* harmony import */ var _internal_root_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internal/root-mixins */ "./.temp/internal/root-mixins.js");
/* harmony import */ var _internal_layout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internal/layout-components */ "./.temp/internal/layout-components.js");
/* harmony import */ var _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/LayoutDistributor.vue */ "../@vuepress/core/lib/app/components/LayoutDistributor.vue");
/**
 * Generated by "@vuepress/internal-routes"
 */




Object(_app_util__WEBPACK_IMPORTED_MODULE_0__["injectComponentOption"])(_app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"], 'mixins', _internal_root_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]);
Object(_app_util__WEBPACK_IMPORTED_MODULE_0__["injectComponentOption"])(_app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"], 'components', _internal_layout_components__WEBPACK_IMPORTED_MODULE_2__["default"]);
var routes = [{
  name: "v-d9993f0d2d98",
  path: "/2015/10/02/_2015-7-animes-review/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/10/02/_2015-7-animes-review/index.html",
  redirect: "/2015/10/02/_2015-7-animes-review/"
}, {
  path: "/_posts/2015-7-animes-review.html",
  redirect: "/2015/10/02/_2015-7-animes-review/"
}, {
  name: "v-cb2e9b82170f3",
  path: "/2015/10/13/_2015-10-anime-recommendations/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/10/13/_2015-10-anime-recommendations/index.html",
  redirect: "/2015/10/13/_2015-10-anime-recommendations/"
}, {
  path: "/_posts/2015-10-anime-recommendations.html",
  redirect: "/2015/10/13/_2015-10-anime-recommendations/"
}, {
  name: "v-82d70cc1523de",
  path: "/2016/01/31/_2016-1-anime-recommendations/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/01/31/_2016-1-anime-recommendations/index.html",
  redirect: "/2016/01/31/_2016-1-anime-recommendations/"
}, {
  path: "/_posts/2016-1-anime-recommendations.html",
  redirect: "/2016/01/31/_2016-1-anime-recommendations/"
}, {
  name: "v-b9b6f5ac34af7",
  path: "/2016/01/11/_2015-10-anime-review/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/01/11/_2015-10-anime-review/index.html",
  redirect: "/2016/01/11/_2015-10-anime-review/"
}, {
  path: "/_posts/2015-10-anime-review.html",
  redirect: "/2016/01/11/_2015-10-anime-review/"
}, {
  name: "v-0e0a5533c2e95",
  path: "/2016/04/11/_2016-4-anime-recommendations/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/04/11/_2016-4-anime-recommendations/index.html",
  redirect: "/2016/04/11/_2016-4-anime-recommendations/"
}, {
  path: "/_posts/2016-4-anime-recommendations.html",
  redirect: "/2016/04/11/_2016-4-anime-recommendations/"
}, {
  name: "v-ea08d4cc05f9f",
  path: "/2016/07/04/_2016-7-anime-recommendations/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/07/04/_2016-7-anime-recommendations/index.html",
  redirect: "/2016/07/04/_2016-7-anime-recommendations/"
}, {
  path: "/_posts/2016-7-anime-recommendations.html",
  redirect: "/2016/07/04/_2016-7-anime-recommendations/"
}, {
  name: "v-fe1de9bfc807b",
  path: "/2016/02/06/_2016-front-end-primer/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/02/06/_2016-front-end-primer/index.html",
  redirect: "/2016/02/06/_2016-front-end-primer/"
}, {
  path: "/_posts/2016-front-end-primer.html",
  redirect: "/2016/02/06/_2016-front-end-primer/"
}, {
  name: "v-3602d9adbc8c9",
  path: "/2017/05/13/_5-12-memory/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2017/05/13/_5-12-memory/index.html",
  redirect: "/2017/05/13/_5-12-memory/"
}, {
  path: "/_posts/5-12-memory.html",
  redirect: "/2017/05/13/_5-12-memory/"
}, {
  name: "v-5661d9efc1d3f",
  path: "/2015/09/30/a-light-weight-localstorage-orm/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/09/30/a-light-weight-localstorage-orm/index.html",
  redirect: "/2015/09/30/a-light-weight-localstorage-orm/"
}, {
  path: "/_posts/a-light-weight-localstorage-orm.html",
  redirect: "/2015/09/30/a-light-weight-localstorage-orm/"
}, {
  name: "v-7b268f7395e5c",
  path: "/2015/06/13/all-things-last-long/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/06/13/all-things-last-long/index.html",
  redirect: "/2015/06/13/all-things-last-long/"
}, {
  path: "/_posts/all-things-last-long.html",
  redirect: "/2015/06/13/all-things-last-long/"
}, {
  name: "v-b97226c87683",
  path: "/2015/11/05/best-thing-ever/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/11/05/best-thing-ever/index.html",
  redirect: "/2015/11/05/best-thing-ever/"
}, {
  path: "/_posts/best-thing-ever.html",
  redirect: "/2015/11/05/best-thing-ever/"
}, {
  name: "v-771a7494f2dc",
  path: "/2017/07/08/bili/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2017/07/08/bili/index.html",
  redirect: "/2017/07/08/bili/"
}, {
  path: "/_posts/bili.html",
  redirect: "/2017/07/08/bili/"
}, {
  name: "v-952d9649913ff",
  path: "/2015/09/23/hello-world/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/09/23/hello-world/index.html",
  redirect: "/2015/09/23/hello-world/"
}, {
  path: "/_posts/Hello-World.html",
  redirect: "/2015/09/23/hello-world/"
}, {
  name: "v-0ff05445cb4c8",
  path: "/2016/03/23/deploy-node-app/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/03/23/deploy-node-app/index.html",
  redirect: "/2016/03/23/deploy-node-app/"
}, {
  path: "/_posts/deploy-node-app.html",
  redirect: "/2016/03/23/deploy-node-app/"
}, {
  name: "v-72b3beb2b3ca4",
  path: "/2016/11/16/bundle-front-end-js-library/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/11/16/bundle-front-end-js-library/index.html",
  redirect: "/2016/11/16/bundle-front-end-js-library/"
}, {
  path: "/_posts/bundle-front-end-js-library.html",
  redirect: "/2016/11/16/bundle-front-end-js-library/"
}, {
  name: "v-857322a9deeda",
  path: "/2017/02/12/fuuka-fate/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2017/02/12/fuuka-fate/index.html",
  redirect: "/2017/02/12/fuuka-fate/"
}, {
  path: "/_posts/fuuka-fate.html",
  redirect: "/2017/02/12/fuuka-fate/"
}, {
  name: "v-f1cfaf823f70e",
  path: "/2016/03/21/front-end-frameworks/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/03/21/front-end-frameworks/index.html",
  redirect: "/2016/03/21/front-end-frameworks/"
}, {
  path: "/_posts/front-end-frameworks.html",
  redirect: "/2016/03/21/front-end-frameworks/"
}, {
  name: "v-374f6ac1f352d",
  path: "/2017/09/16/draw-chat-message-with-canvas/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2017/09/16/draw-chat-message-with-canvas/index.html",
  redirect: "/2017/09/16/draw-chat-message-with-canvas/"
}, {
  path: "/_posts/draw-chat-message-with-canvas.html",
  redirect: "/2017/09/16/draw-chat-message-with-canvas/"
}, {
  name: "v-45a3bf9824593",
  path: "/2015/12/14/how-does-array-slice-call-arguments-work/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/12/14/how-does-array-slice-call-arguments-work/index.html",
  redirect: "/2015/12/14/how-does-array-slice-call-arguments-work/"
}, {
  path: "/_posts/how-does-array-slice-call-arguments-work.html",
  redirect: "/2015/12/14/how-does-array-slice-call-arguments-work/"
}, {
  name: "v-808bae1b3eb96",
  path: "/2015/10/08/git-memo/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/10/08/git-memo/index.html",
  redirect: "/2015/10/08/git-memo/"
}, {
  path: "/_posts/git-memo.html",
  redirect: "/2015/10/08/git-memo/"
}, {
  name: "v-6e486519cdf4c",
  path: "/2015/03/25/good-and-bad-anime/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/03/25/good-and-bad-anime/index.html",
  redirect: "/2015/03/25/good-and-bad-anime/"
}, {
  path: "/_posts/good-and-bad-anime.html",
  redirect: "/2015/03/25/good-and-bad-anime/"
}, {
  name: "v-63d5bcda16dfe",
  path: "/2017/10/19/how-does-nodejs-cli-program-work/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2017/10/19/how-does-nodejs-cli-program-work/index.html",
  redirect: "/2017/10/19/how-does-nodejs-cli-program-work/"
}, {
  path: "/_posts/how-does-nodejs-cli-program-work.html",
  redirect: "/2017/10/19/how-does-nodejs-cli-program-work/"
}, {
  name: "v-a02bed04ac976",
  path: "/2018/07/26/how-to-learn-to-code/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2018/07/26/how-to-learn-to-code/index.html",
  redirect: "/2018/07/26/how-to-learn-to-code/"
}, {
  path: "/_posts/how-to-learn-to-code.html",
  redirect: "/2018/07/26/how-to-learn-to-code/"
}, {
  name: "v-2b3eb41f7327f",
  path: "/2015/12/15/linus-and-i/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/12/15/linus-and-i/index.html",
  redirect: "/2015/12/15/linus-and-i/"
}, {
  path: "/_posts/linus-and-i.html",
  redirect: "/2015/12/15/linus-and-i/"
}, {
  name: "v-38dc209164718",
  path: "/2015/10/04/how-to-undo-with-git/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/10/04/how-to-undo-with-git/index.html",
  redirect: "/2015/10/04/how-to-undo-with-git/"
}, {
  path: "/_posts/how-to-undo-with-git.html",
  redirect: "/2015/10/04/how-to-undo-with-git/"
}, {
  name: "v-507ac86a723d1",
  path: "/2016/08/30/kill-gulp-with-npm-scripts-and-nswatch/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/08/30/kill-gulp-with-npm-scripts-and-nswatch/index.html",
  redirect: "/2016/08/30/kill-gulp-with-npm-scripts-and-nswatch/"
}, {
  path: "/_posts/kill-gulp-with-npm-scripts-and-nswatch.html",
  redirect: "/2016/08/30/kill-gulp-with-npm-scripts-and-nswatch/"
}, {
  name: "v-aada35a358305",
  path: "/2015/10/27/log-in-with-your-teminal/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/10/27/log-in-with-your-teminal/index.html",
  redirect: "/2015/10/27/log-in-with-your-teminal/"
}, {
  path: "/_posts/log-in-with-your-teminal.html",
  redirect: "/2015/10/27/log-in-with-your-teminal/"
}, {
  name: "v-2607554aeff2f",
  path: "/2018/02/27/my-rollup-plugin-postcss/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2018/02/27/my-rollup-plugin-postcss/index.html",
  redirect: "/2018/02/27/my-rollup-plugin-postcss/"
}, {
  path: "/_posts/my-rollup-plugin-postcss.html",
  redirect: "/2018/02/27/my-rollup-plugin-postcss/"
}, {
  name: "v-e10e2abe32a54",
  path: "/2017/05/22/neon-genesis-scaffolding-tool/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2017/05/22/neon-genesis-scaffolding-tool/index.html",
  redirect: "/2017/05/22/neon-genesis-scaffolding-tool/"
}, {
  path: "/_posts/neon-genesis-scaffolding-tool.html",
  redirect: "/2017/05/22/neon-genesis-scaffolding-tool/"
}, {
  name: "v-777bc6536e9e",
  path: "/2016/06/24/otaku-is-the-best/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/06/24/otaku-is-the-best/index.html",
  redirect: "/2016/06/24/otaku-is-the-best/"
}, {
  path: "/_posts/otaku-is-the-best.html",
  redirect: "/2016/06/24/otaku-is-the-best/"
}, {
  name: "v-fa0eb5814722c",
  path: "/2016/03/03/new-timetable/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/03/03/new-timetable/index.html",
  redirect: "/2016/03/03/new-timetable/"
}, {
  path: "/_posts/new-timetable.html",
  redirect: "/2016/03/03/new-timetable/"
}, {
  name: "v-8a9e57635a9ab",
  path: "/2016/01/29/node-js-module-style-guide/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/01/29/node-js-module-style-guide/index.html",
  redirect: "/2016/01/29/node-js-module-style-guide/"
}, {
  path: "/_posts/node-js-module-style-guide.html",
  redirect: "/2016/01/29/node-js-module-style-guide/"
}, {
  name: "v-e0f96de97313a",
  path: "/2016/04/26/postgresql-simple-guide/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/04/26/postgresql-simple-guide/index.html",
  redirect: "/2016/04/26/postgresql-simple-guide/"
}, {
  path: "/_posts/postgresql-simple-guide.html",
  redirect: "/2016/04/26/postgresql-simple-guide/"
}, {
  name: "v-7103000f32452",
  path: "/2015/12/19/revue-guide/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/12/19/revue-guide/index.html",
  redirect: "/2015/12/19/revue-guide/"
}, {
  path: "/_posts/revue-guide.html",
  redirect: "/2015/12/19/revue-guide/"
}, {
  name: "v-e2b4e1c748466",
  path: "/2016/08/04/subaru-be-loyal-or-jerk/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/08/04/subaru-be-loyal-or-jerk/index.html",
  redirect: "/2016/08/04/subaru-be-loyal-or-jerk/"
}, {
  path: "/_posts/subaru-be-loyal-or-jerk.html",
  redirect: "/2016/08/04/subaru-be-loyal-or-jerk/"
}, {
  name: "v-be5603de51c1f",
  path: "/2018/06/14/short-hair/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2018/06/14/short-hair/index.html",
  redirect: "/2018/06/14/short-hair/"
}, {
  path: "/_posts/short-hair.html",
  redirect: "/2018/06/14/short-hair/"
}, {
  name: "v-519c679542748",
  path: "/2016/10/06/sublime-vscode-key-bindings/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/10/06/sublime-vscode-key-bindings/index.html",
  redirect: "/2016/10/06/sublime-vscode-key-bindings/"
}, {
  path: "/_posts/sublime-vscode-key-bindings.html",
  redirect: "/2016/10/06/sublime-vscode-key-bindings/"
}, {
  name: "v-a8d6a58c756dc",
  path: "/2017/11/26/tesing-javascript-apps-using-jest/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2017/11/26/tesing-javascript-apps-using-jest/index.html",
  redirect: "/2017/11/26/tesing-javascript-apps-using-jest/"
}, {
  path: "/_posts/tesing-javascript-apps-using-jest.html",
  redirect: "/2017/11/26/tesing-javascript-apps-using-jest/"
}, {
  name: "v-54f749dd82bec",
  path: "/2017/05/04/the-world-is-a-big-noise/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2017/05/04/the-world-is-a-big-noise/index.html",
  redirect: "/2017/05/04/the-world-is-a-big-noise/"
}, {
  path: "/_posts/the-world-is-a-big-noise.html",
  redirect: "/2017/05/04/the-world-is-a-big-noise/"
}, {
  name: "v-0f065777cd9d3",
  path: "/2017/04/29/the-most-lightweight-es2015-setup/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2017/04/29/the-most-lightweight-es2015-setup/index.html",
  redirect: "/2017/04/29/the-most-lightweight-es2015-setup/"
}, {
  path: "/_posts/the-most-lightweight-es2015-setup.html",
  redirect: "/2017/04/29/the-most-lightweight-es2015-setup/"
}, {
  name: "v-fe18276b65f4d",
  path: "/2017/01/13/this-is-how-it-started/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2017/01/13/this-is-how-it-started/index.html",
  redirect: "/2017/01/13/this-is-how-it-started/"
}, {
  path: "/_posts/this-is-how-it-started.html",
  redirect: "/2017/01/13/this-is-how-it-started/"
}, {
  name: "v-fcc95f5880a29",
  path: "/2016/01/20/tooling-free-you-from-jquery/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/01/20/tooling-free-you-from-jquery/index.html",
  redirect: "/2016/01/20/tooling-free-you-from-jquery/"
}, {
  path: "/_posts/tooling-free-you-from-jquery.html",
  redirect: "/2016/01/20/tooling-free-you-from-jquery/"
}, {
  name: "v-7e794b0766a4c",
  path: "/2018/07/27/true-how-to-learn-to-code/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2018/07/27/true-how-to-learn-to-code/index.html",
  redirect: "/2018/07/27/true-how-to-learn-to-code/"
}, {
  path: "/_posts/true-how-to-learn-to-code.html",
  redirect: "/2018/07/27/true-how-to-learn-to-code/"
}, {
  name: "v-1e1ac6d00d035",
  path: "/2016/04/03/why-i-wont-marry/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/04/03/why-i-wont-marry/index.html",
  redirect: "/2016/04/03/why-i-wont-marry/"
}, {
  path: "/_posts/why-i-wont-marry.html",
  redirect: "/2016/04/03/why-i-wont-marry/"
}, {
  name: "v-f6b19b10202a2",
  path: "/2017/09/21/vue-jsx-full-guide/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2017/09/21/vue-jsx-full-guide/index.html",
  redirect: "/2017/09/21/vue-jsx-full-guide/"
}, {
  path: "/_posts/vue-jsx-full-guide.html",
  redirect: "/2017/09/21/vue-jsx-full-guide/"
}, {
  name: "v-8e40bc2a106ff",
  path: "/2015/07/10/why-so-addicted-into-anime/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2015/07/10/why-so-addicted-into-anime/index.html",
  redirect: "/2015/07/10/why-so-addicted-into-anime/"
}, {
  path: "/_posts/why-so-addicted-into-anime.html",
  redirect: "/2015/07/10/why-so-addicted-into-anime/"
}, {
  name: "v-c16150a1b5251",
  path: "/2017/12/12/write-better-code-with-eslint-and-prettier/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2017/12/12/write-better-code-with-eslint-and-prettier/index.html",
  redirect: "/2017/12/12/write-better-code-with-eslint-and-prettier/"
}, {
  path: "/_posts/write-better-code-with-eslint-and-prettier.html",
  redirect: "/2017/12/12/write-better-code-with-eslint-and-prettier/"
}, {
  name: "v-f656cb6893f71",
  path: "/about.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: "v-8aa01dc608728",
  path: "/girls.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: "v-f022d775e5d71",
  path: "/2018/08/21/wtf-is-front-end-development/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2018/08/21/wtf-is-front-end-development/index.html",
  redirect: "/2018/08/21/wtf-is-front-end-development/"
}, {
  path: "/_posts/wtf-is-front-end-development.html",
  redirect: "/2018/08/21/wtf-is-front-end-development/"
}, {
  name: "v-7d576a0aaf519",
  path: "/2016/01/18/why-i-choose-tab-over-space/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/2016/01/18/why-i-choose-tab-over-space/index.html",
  redirect: "/2016/01/18/why-i-choose-tab-over-space/"
}, {
  path: "/_posts/why-i-choose-tab-over-space.html",
  redirect: "/2016/01/18/why-i-choose-tab-over-space/"
}, {
  name: "v-1df3523345d37",
  path: "/donate.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: "v-a2cd2476919bb",
  path: "/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/index.html",
  redirect: "/"
}, {
  name: "v-d43bfe895b9c3",
  path: "/tag/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/tag/index.html",
  redirect: "/tag/"
}, {
  name: "v-bd7c928dc1ce",
  path: "/category/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/category/index.html",
  redirect: "/category/"
}, {
  name: "v-3869fe609809f",
  path: "/tag/anime.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "anime"
  }
}, {
  name: "v-f69dc235f2273",
  path: "/tag/animes.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "animes"
  }
}, {
  name: "v-55d98920aacd6",
  path: "/tag/javascript.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "javascript"
  }
}, {
  name: "v-3c58c443aa17a",
  path: "/tag/frontend.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "frontend"
  }
}, {
  name: "v-d6667dddf70f1",
  path: "/tag/localStorage.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "localStorage"
  }
}, {
  name: "v-26f8d70ca24bf",
  path: "/tag/thoughts.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "thoughts"
  }
}, {
  name: "v-b84c2ec9cce08",
  path: "/tag/start.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "start"
  }
}, {
  name: "v-c33d93dfbd21c",
  path: "/tag/deploy.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "deploy"
  }
}, {
  name: "v-fab9ba1d2a49f",
  path: "/tag/node.js.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "node.js"
  }
}, {
  name: "v-5b81f1c150e56",
  path: "/tag/docker.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "docker"
  }
}, {
  name: "v-12e4151c245e5",
  path: "/tag/bundle.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "bundle"
  }
}, {
  name: "v-5ac41054c5026",
  path: "/tag/bili.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "bili"
  }
}, {
  name: "v-6790ce3ceb069",
  path: "/tag/fuuka.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "fuuka"
  }
}, {
  name: "v-4f078790f4252",
  path: "/tag/js.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "js"
  }
}, {
  name: "v-f0fea222c5349",
  path: "/tag/bootstrap.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "bootstrap"
  }
}, {
  name: "v-3ab9f8aa9352d",
  path: "/tag/jquery.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "jquery"
  }
}, {
  name: "v-a81cc7376369b",
  path: "/tag/vue.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "vue"
  }
}, {
  name: "v-27526d79e0eaa",
  path: "/tag/react.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "react"
  }
}, {
  name: "v-b7070c687f97f",
  path: "/tag/mvvm.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "mvvm"
  }
}, {
  name: "v-92513ffe9343",
  path: "/tag/canvas.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "canvas"
  }
}, {
  name: "v-48d050e044bb3",
  path: "/tag/git.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "git"
  }
}, {
  name: "v-d1b96daaa6657",
  path: "/tag/cli.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "cli"
  }
}, {
  name: "v-07d3a0fee5e86",
  path: "/tag/node.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "node"
  }
}, {
  name: "v-99c7fd3a910fb",
  path: "/tag/how-to.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "how-to"
  }
}, {
  name: "v-8b148de967bdd",
  path: "/tag/udo.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "udo"
  }
}, {
  name: "v-25826c69a505f",
  path: "/tag/gulp.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "gulp"
  }
}, {
  name: "v-10efe8d7dd50b",
  path: "/tag/npm.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "npm"
  }
}, {
  name: "v-c1c7b1cd93199",
  path: "/tag/terminal.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "terminal"
  }
}, {
  name: "v-c4b461ce21b3e",
  path: "/tag/story.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "story"
  }
}, {
  name: "v-987ccca27908e",
  path: "/tag/otaku.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "otaku"
  }
}, {
  name: "v-4cc524ef89735",
  path: "/tag/life.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "life"
  }
}, {
  name: "v-bbb1a20722394",
  path: "/tag/sindresorhus.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "sindresorhus"
  }
}, {
  name: "v-aad3be667f18f",
  path: "/tag/postgresql.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "postgresql"
  }
}, {
  name: "v-22004c5f1ad0b",
  path: "/tag/database.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "database"
  }
}, {
  name: "v-76631801e2ca5",
  path: "/tag/redux.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "redux"
  }
}, {
  name: "v-3a79ea44d3569",
  path: "/tag/revue.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "revue"
  }
}, {
  name: "v-a4086439efbf5",
  path: "/tag/rezero.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "rezero"
  }
}, {
  name: "v-d99114da76751",
  path: "/tag/rem.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "rem"
  }
}, {
  name: "v-8004695afb5ea",
  path: "/tag/sublime.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "sublime"
  }
}, {
  name: "v-b852f3e769af7",
  path: "/tag/vs code.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "vs code"
  }
}, {
  path: "/tag/vs%20code.html",
  redirect: "/tag/vs code.html"
}, {
  name: "v-891354a80b406",
  path: "/tag/jest.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "jest"
  }
}, {
  name: "v-0a1709b00f185",
  path: "/tag/test.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "test"
  }
}, {
  name: "v-23ebeac3e073d",
  path: "/tag/babel.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "babel"
  }
}, {
  name: "v-e7cf0bec1c26c",
  path: "/tag/buble.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "buble"
  }
}, {
  name: "v-950210aa94495",
  path: "/tag/tooling.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "tooling"
  }
}, {
  name: "v-e6f1d67b3a749",
  path: "/tag/webpack.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "webpack"
  }
}, {
  name: "v-96266c9c186ad",
  path: "/tag/jsx.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "jsx"
  }
}, {
  name: "v-0fd6e0c58b235",
  path: "/tag/eslint.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "eslint"
  }
}, {
  name: "v-7d732402bf6d7",
  path: "/tag/prettier.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "prettier"
  }
}, {
  name: "v-1fbf0070580ef",
  path: "/tag/code.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "code"
  }
}, {
  name: "v-70a64c69a4329",
  path: "/tag/space.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "space"
  }
}, {
  name: "v-9af8b6720f01a",
  path: "/tag/tab.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "tagName": "tab"
  }
}, {
  name: "v-cebc66d0ce3ad",
  path: "/category/anime.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "categoryName": "anime"
  }
}, {
  name: "v-06e859988cf94",
  path: "/category/JavaScript.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "categoryName": "JavaScript"
  }
}, {
  name: "v-d4354ec637236",
  path: "/category/Diary.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "categoryName": "Diary"
  }
}, {
  name: "v-265e7fbb89349",
  path: "/category/thoughts.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "categoryName": "thoughts"
  }
}, {
  name: "v-b8e65356bc894",
  path: "/category/javascript.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "categoryName": "javascript"
  }
}, {
  name: "v-e6e4c72badc4e",
  path: "/category/git.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "categoryName": "git"
  }
}, {
  name: "v-20b3cbde2103a",
  path: "/category/Anime.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "categoryName": "Anime"
  }
}, {
  name: "v-f80fe5840d666",
  path: "/category/tech.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "categoryName": "tech"
  }
}, {
  name: "v-a5b1569d1791f",
  path: "/category/skills.html",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  meta: {
    "categoryName": "skills"
  }
}, {
  name: "v-16278cc72a7af",
  path: "/page/2/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/page/2/index.html",
  redirect: "/page/2/"
}, {
  name: "v-2118d65b9e014",
  path: "/page/3/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/page/3/index.html",
  redirect: "/page/3/"
}, {
  name: "v-306bc664192b2",
  path: "/page/4/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/page/4/index.html",
  redirect: "/page/4/"
}, {
  name: "v-56064e499e848",
  path: "/page/5/",
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "/page/5/index.html",
  redirect: "/page/5/"
}, {
  path: '*',
  component: _app_components_LayoutDistributor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}];

/***/ }),

/***/ "./.temp/internal/siteData.js":
/*!************************************!*\
  !*** ./.temp/internal/siteData.js ***!
  \************************************/
/*! exports provided: siteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteData", function() { return siteData; });
/**
 * Generated by "@vuepress/internal-site-data"
 */
var siteData = {
  "title": "庶民样本",
  "description": "EGOIST 在这里写作",
  "base": "/vuepress-theme-egoist/",
  "pages": [{
    "title": "二〇一五年七月新番回顾",
    "frontmatter": {
      "title": "二〇一五年七月新番回顾",
      "date": "2015-10-01T22:46:01.000Z",
      "tags": ["anime"],
      "categories": ["anime"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-d9993f0d2d98",
    "path": "/2015/10/02/_2015-7-animes-review/",
    "regularPath": "/_posts/2015-7-animes-review.html",
    "type": "post"
  }, {
    "title": "二〇一五年十月新番推荐",
    "frontmatter": {
      "title": "二〇一五年十月新番推荐",
      "date": "2015-10-13T11:29:50.000Z",
      "tags": ["anime"],
      "categories": ["anime"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-cb2e9b82170f3",
    "path": "/2015/10/13/_2015-10-anime-recommendations/",
    "regularPath": "/_posts/2015-10-anime-recommendations.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "周一"
    }, {
      "level": 2,
      "title": "",
      "slug": "周二"
    }, {
      "level": 2,
      "title": "",
      "slug": "周三"
    }, {
      "level": 2,
      "title": "",
      "slug": "周四"
    }, {
      "level": 2,
      "title": "",
      "slug": "周五"
    }, {
      "level": 2,
      "title": "",
      "slug": "周六"
    }, {
      "level": 2,
      "title": "",
      "slug": "周日"
    }],
    "type": "post"
  }, {
    "title": "二〇一六年一月新番推荐",
    "frontmatter": {
      "title": "二〇一六年一月新番推荐",
      "date": "2016-01-30T18:54:29.000Z",
      "tags": ["anime"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-82d70cc1523de",
    "path": "/2016/01/31/_2016-1-anime-recommendations/",
    "regularPath": "/_posts/2016-1-anime-recommendations.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "周一"
    }, {
      "level": 2,
      "title": "",
      "slug": "周二"
    }, {
      "level": 2,
      "title": "",
      "slug": "周三"
    }, {
      "level": 2,
      "title": "",
      "slug": "周四"
    }, {
      "level": 2,
      "title": "",
      "slug": "周五"
    }, {
      "level": 2,
      "title": "",
      "slug": "周六"
    }, {
      "level": 2,
      "title": "",
      "slug": "周日"
    }],
    "type": "post"
  }, {
    "title": "二〇一五年十月新番回顾",
    "frontmatter": {
      "title": "二〇一五年十月新番回顾",
      "date": "2016-01-11T12:12:34.000Z",
      "tags": "-anime -review -animegirl",
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-b9b6f5ac34af7",
    "path": "/2016/01/11/_2015-10-anime-review/",
    "regularPath": "/_posts/2015-10-anime-review.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "传颂之物-虚伪的假面"
    }, {
      "level": 2,
      "title": "",
      "slug": "进击！巨人中学"
    }, {
      "level": 2,
      "title": "",
      "slug": "龙珠超"
    }, {
      "level": 2,
      "title": "",
      "slug": "一拳超人"
    }, {
      "level": 2,
      "title": "",
      "slug": "关于我被绑架到贵族女校当“庶民样本”的事"
    }, {
      "level": 2,
      "title": "",
      "slug": "重装武器"
    }, {
      "level": 2,
      "title": "",
      "slug": "学战都市"
    }, {
      "level": 2,
      "title": "",
      "slug": "终结的炽天使-第2期"
    }, {
      "level": 2,
      "title": "",
      "slug": "落第骑士英雄谭"
    }],
    "type": "post"
  }, {
    "title": "二〇一六年四月新番推荐",
    "frontmatter": {
      "title": "二〇一六年四月新番推荐",
      "subtitle": "没有薰的四月，我还有新番",
      "date": "2016-04-10T17:18:27.000Z",
      "tags": ["animes"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-0e0a5533c2e95",
    "path": "/2016/04/11/_2016-4-anime-recommendations/",
    "regularPath": "/_posts/2016-4-anime-recommendations.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "周一"
    }, {
      "level": 3,
      "title": "Re：从零开始的异世界生活",
      "slug": "re：从零开始的异世界生活"
    }, {
      "level": 2,
      "title": "",
      "slug": "周二"
    }, {
      "level": 3,
      "title": "百武装战记",
      "slug": "百武装战记"
    }, {
      "level": 2,
      "title": "",
      "slug": "周三"
    }, {
      "level": 3,
      "title": "双星之阴阳师",
      "slug": "双星之阴阳师"
    }, {
      "level": 2,
      "title": "",
      "slug": "周四"
    }, {
      "level": 2,
      "title": "",
      "slug": "周五"
    }, {
      "level": 3,
      "title": "在下坂本，有何贵干？",
      "slug": "在下坂本，有何贵干？"
    }, {
      "level": 3,
      "title": "线上游戏的老婆不可能是女生",
      "slug": "线上游戏的老婆不可能是女生"
    }, {
      "level": 3,
      "title": "甲铁城的卡巴内利",
      "slug": "甲铁城的卡巴内利"
    }, {
      "level": 2,
      "title": "",
      "slug": "周六"
    }, {
      "level": 3,
      "title": "逆转裁判",
      "slug": "逆转裁判"
    }, {
      "level": 2,
      "title": "",
      "slug": "周日"
    }, {
      "level": 3,
      "title": "忍者杀手 SE",
      "slug": "忍者杀手-se"
    }],
    "type": "post"
  }, {
    "title": "二〇一六年七月新番推荐",
    "frontmatter": {
      "title": "二〇一六年七月新番推荐",
      "date": "2016-07-03T22:22:26.000Z",
      "tags": ["animes"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-ea08d4cc05f9f",
    "path": "/2016/07/04/_2016-7-anime-recommendations/",
    "regularPath": "/_posts/2016-7-anime-recommendations.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "周一"
    }, {
      "level": 3,
      "title": "弹丸论破3 未来篇",
      "slug": "弹丸论破3-未来篇"
    }, {
      "level": 3,
      "title": "orange橙色奇迹",
      "slug": "orange橙色奇迹"
    }, {
      "level": 2,
      "title": "",
      "slug": "周二"
    }, {
      "level": 3,
      "title": "灵能百分百",
      "slug": "灵能百分百"
    }, {
      "level": 3,
      "title": "魔装学园H×H",
      "slug": "魔装学园h×h"
    }, {
      "level": 3,
      "title": "禁忌咒文",
      "slug": "禁忌咒文"
    }, {
      "level": 2,
      "title": "",
      "slug": "周三"
    }, {
      "level": 2,
      "title": "",
      "slug": "周四"
    }, {
      "level": 2,
      "title": "",
      "slug": "周五"
    }, {
      "level": 3,
      "title": "弹丸论破3 绝望篇",
      "slug": "弹丸论破3-绝望篇"
    }, {
      "level": 3,
      "title": "半田君传说",
      "slug": "半田君传说"
    }, {
      "level": 3,
      "title": "ReLIFE",
      "slug": "relife"
    }, {
      "level": 2,
      "title": "",
      "slug": "周六"
    }, {
      "level": 3,
      "title": "91Days",
      "slug": "_91days"
    }, {
      "level": 3,
      "title": "食戟之灵 第二季",
      "slug": "食戟之灵-第二季"
    }, {
      "level": 3,
      "title": "时间旅行少女",
      "slug": "时间旅行少女"
    }, {
      "level": 2,
      "title": "",
      "slug": "周日"
    }, {
      "level": 3,
      "title": "情热传说 the X",
      "slug": "情热传说-the-x"
    }, {
      "level": 3,
      "title": "DAYS",
      "slug": "days"
    }, {
      "level": 3,
      "title": "七大罪 第二季",
      "slug": "七大罪-第二季"
    }],
    "type": "post"
  }, {
    "title": "二〇一六年的前端入门指南",
    "frontmatter": {
      "title": "二〇一六年的前端入门指南",
      "subtitle": "JavaScript is supposed to be easy and powerful, for all of us.",
      "date": "2016-02-06T15:10:05.000Z",
      "tags": ["javascript", "frontend"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-fe1de9bfc807b",
    "path": "/2016/02/06/_2016-front-end-primer/",
    "regularPath": "/_posts/2016-front-end-primer.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "html"
    }, {
      "level": 2,
      "title": "",
      "slug": "css"
    }, {
      "level": 2,
      "title": "",
      "slug": "html-css"
    }, {
      "level": 3,
      "title": "模板引擎",
      "slug": "模板引擎"
    }, {
      "level": 3,
      "title": "CSS 处理器",
      "slug": "css-处理器"
    }, {
      "level": 2,
      "title": "",
      "slug": "html-css-小结"
    }, {
      "level": 2,
      "title": "",
      "slug": "javascript"
    }, {
      "level": 2,
      "title": "",
      "slug": "node-js"
    }, {
      "level": 3,
      "title": "如何学习 Node.js",
      "slug": "如何学习-node-js"
    }, {
      "level": 2,
      "title": "",
      "slug": "es6"
    }],
    "type": "post"
  }, {
    "title": "5·12 那天我在做什么",
    "frontmatter": {
      "title": "5·12 那天我在做什么",
      "date": "2017-05-12T20:44:40.000Z",
      "tags": null,
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-3602d9adbc8c9",
    "path": "/2017/05/13/_5-12-memory/",
    "regularPath": "/_posts/5-12-memory.html",
    "type": "post"
  }, {
    "title": "一个简单的 localStorage 扩展实现",
    "frontmatter": {
      "title": "一个简单的 localStorage 扩展实现",
      "date": "2015-09-30T12:56:03.000Z",
      "tags": ["localStorage"],
      "categories": ["JavaScript"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-5661d9efc1d3f",
    "path": "/2015/09/30/a-light-weight-localstorage-orm/",
    "regularPath": "/_posts/a-light-weight-localstorage-orm.html",
    "type": "post"
  }, {
    "title": "一切漫长的",
    "frontmatter": {
      "title": "一切漫长的",
      "date": "2015-06-12T16:24:51.000Z",
      "categories": ["Diary"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-7b268f7395e5c",
    "path": "/2015/06/13/all-things-last-long/",
    "regularPath": "/_posts/all-things-last-long.html",
    "type": "post"
  }, {
    "title": "天下第一有趣的事",
    "frontmatter": {
      "title": "天下第一有趣的事",
      "date": "2015-11-04T23:23:31.000Z",
      "tags": ["thoughts"],
      "categories": ["thoughts"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-b97226c87683",
    "path": "/2015/11/05/best-thing-ever/",
    "regularPath": "/_posts/best-thing-ever.html",
    "type": "post"
  }, {
    "title": "Bili: 打包 JS 库的瑞士军刀",
    "frontmatter": {
      "title": "Bili: 打包 JS 库的瑞士军刀",
      "subtitle": "基于 Rollup 的打包工具",
      "date": "2017-07-08T15:13:17.000Z",
      "tags": null,
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-771a7494f2dc",
    "path": "/2017/07/08/bili/",
    "regularPath": "/_posts/bili.html",
    "headers": [{
      "level": 2,
      "title": "预习",
      "slug": "预习"
    }, {
      "level": 3,
      "title": "Rollup",
      "slug": "rollup"
    }, {
      "level": 3,
      "title": "瑞士军刀",
      "slug": "瑞士军刀"
    }, {
      "level": 2,
      "title": "授业",
      "slug": "授业"
    }, {
      "level": 2,
      "title": "放课后",
      "slug": "放课后"
    }],
    "type": "post"
  }, {
    "title": "Hello World",
    "frontmatter": {
      "title": "Hello World",
      "date": "2015-09-23T01:09:15.000Z",
      "categories": ["Diary"],
      "tags": ["start"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-952d9649913ff",
    "path": "/2015/09/23/hello-world/",
    "regularPath": "/_posts/Hello-World.html",
    "type": "post"
  }, {
    "title": "如何部署 Node.js 应用",
    "frontmatter": {
      "title": "如何部署 Node.js 应用",
      "subtitle": "你告诉我还能怎么办",
      "date": "2016-03-23T15:37:20.000Z",
      "tags": ["deploy", "node.js", "docker"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-0ff05445cb4c8",
    "path": "/2016/03/23/deploy-node-app/",
    "regularPath": "/_posts/deploy-node-app.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "上传代码"
    }, {
      "level": 3,
      "title": "在 VPS 上创建一个空 repo",
      "slug": "在-vps-上创建一个空-repo"
    }, {
      "level": 3,
      "title": "部署的钩子",
      "slug": "部署的钩子"
    }, {
      "level": 3,
      "title": "本地配置",
      "slug": "本地配置"
    }, {
      "level": 2,
      "title": "",
      "slug": "持久运行你的-app"
    }, {
      "level": 2,
      "title": "",
      "slug": "延伸阅读"
    }],
    "type": "post"
  }, {
    "title": "优雅地打包前端 JavaScript 库",
    "frontmatter": {
      "title": "优雅地打包前端 JavaScript 库",
      "date": "2016-11-16T15:55:48.000Z",
      "tags": ["javascript", "bundle", "bili"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-72b3beb2b3ca4",
    "path": "/2016/11/16/bundle-front-end-js-library/",
    "regularPath": "/_posts/bundle-front-end-js-library.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "常见用例"
    }, {
      "level": 2,
      "title": "",
      "slug": "es2015"
    }, {
      "level": 2,
      "title": "",
      "slug": "buble"
    }, {
      "level": 2,
      "title": "",
      "slug": "watch-mode"
    }, {
      "level": 2,
      "title": "",
      "slug": "更多资料"
    }],
    "type": "post"
  }, {
    "title": "风夏的前世今生",
    "frontmatter": {
      "title": "风夏的前世今生",
      "date": "2017-02-11T19:59:29.000Z",
      "tags": ["fuuka"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-857322a9deeda",
    "path": "/2017/02/12/fuuka-fate/",
    "regularPath": "/_posts/fuuka-fate.html",
    "type": "post"
  }, {
    "title": "前端框架概览",
    "frontmatter": {
      "title": "前端框架概览",
      "subtitle": "Do you really need frameworks?",
      "date": "2016-03-21T13:31:32.000Z",
      "tags": ["frontend", "javascript", "js", "bootstrap", "jquery", "vue", "react", "mvvm"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-f1cfaf823f70e",
    "path": "/2016/03/21/front-end-frameworks/",
    "regularPath": "/_posts/front-end-frameworks.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "流行词汇"
    }, {
      "level": 2,
      "title": "",
      "slug": "框架大乱战"
    }, {
      "level": 3,
      "title": "Bootstrap",
      "slug": "bootstrap"
    }, {
      "level": 3,
      "title": "jQuery",
      "slug": "jquery"
    }, {
      "level": 3,
      "title": "BackBone",
      "slug": "backbone"
    }, {
      "level": 3,
      "title": "Angular/Vue/React",
      "slug": "angular-vue-react"
    }, {
      "level": 2,
      "title": "",
      "slug": "我的选择"
    }, {
      "level": 2,
      "title": "",
      "slug": "如何学习一个框架"
    }, {
      "level": 3,
      "title": "基础",
      "slug": "基础"
    }, {
      "level": 3,
      "title": "生态",
      "slug": "生态"
    }, {
      "level": 3,
      "title": "持续学习",
      "slug": "持续学习"
    }],
    "type": "post"
  }, {
    "title": "用 canvas 画一个聊天消息",
    "frontmatter": {
      "title": "用 canvas 画一个聊天消息",
      "subtitle": "看了你就学不会 canvas 了",
      "date": "2017-09-15T21:58:02.000Z",
      "tags": ["canvas", "javascript"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-374f6ac1f352d",
    "path": "/2017/09/16/draw-chat-message-with-canvas/",
    "regularPath": "/_posts/draw-chat-message-with-canvas.html",
    "headers": [{
      "level": 2,
      "title": "后日谈",
      "slug": "后日谈"
    }],
    "type": "post"
  }, {
    "title": "[].slice.call(arguments) 是如何工作的",
    "frontmatter": {
      "title": "[].slice.call(arguments) 是如何工作的",
      "date": "2015-12-13T22:39:30.000Z",
      "tags": ["javascript"],
      "categories": ["javascript"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-45a3bf9824593",
    "path": "/2015/12/14/how-does-array-slice-call-arguments-work/",
    "regularPath": "/_posts/how-does-array-slice-call-arguments-work.html",
    "type": "post"
  }, {
    "title": "Git 备忘录",
    "frontmatter": {
      "title": "Git 备忘录",
      "date": "2015-10-07T21:18:54.000Z",
      "tags": ["git"],
      "categories": ["git"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-808bae1b3eb96",
    "path": "/2015/10/08/git-memo/",
    "regularPath": "/_posts/git-memo.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "起步"
    }],
    "type": "post"
  }, {
    "title": "动漫与成见",
    "frontmatter": {
      "title": "动漫与成见",
      "date": "2015-03-25T09:04:00.000Z",
      "categories": ["Anime"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-6e486519cdf4c",
    "path": "/2015/03/25/good-and-bad-anime/",
    "regularPath": "/_posts/good-and-bad-anime.html",
    "type": "post"
  }, {
    "title": "Node.js 命令行程序是如何工作的",
    "frontmatter": {
      "title": "Node.js 命令行程序是如何工作的",
      "subtitle": "命令行程序，也就是通过文本在终端中与程序进行交互",
      "date": "2017-10-18T17:15:45.000Z",
      "tags": ["cli", "node"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-63d5bcda16dfe",
    "path": "/2017/10/19/how-does-nodejs-cli-program-work/",
    "regularPath": "/_posts/how-does-nodejs-cli-program-work.html",
    "headers": [{
      "level": 2,
      "title": "命令行参数",
      "slug": "命令行参数"
    }, {
      "level": 2,
      "title": "命令行程序框架",
      "slug": "命令行程序框架"
    }, {
      "level": 3,
      "title": "框架干了哪些事",
      "slug": "框架干了哪些事"
    }, {
      "level": 2,
      "title": "配置 package.json",
      "slug": "配置-package-json"
    }],
    "type": "post"
  }, {
    "title": "如何学写代码",
    "frontmatter": {
      "title": "如何学写代码",
      "date": "2018-07-26T00:00:00.000Z",
      "compileTemplate": true,
      "tags": ["how-to"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-a02bed04ac976",
    "path": "/2018/07/26/how-to-learn-to-code/",
    "regularPath": "/_posts/how-to-learn-to-code.html",
    "type": "post"
  }, {
    "title": "我和 Linus 的开源故事",
    "frontmatter": {
      "title": "我和 Linus 的开源故事",
      "date": "2015-12-15T13:06:03.000Z",
      "categories": ["tech"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-2b3eb41f7327f",
    "path": "/2015/12/15/linus-and-i/",
    "regularPath": "/_posts/linus-and-i.html",
    "type": "post"
  }, {
    "title": "如何在 Git 中使用撤消操作",
    "frontmatter": {
      "title": "如何在 Git 中使用撤消操作",
      "date": "2015-10-04T14:15:59.000Z",
      "tags": ["git", "udo"],
      "categories": ["git"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-38dc209164718",
    "path": "/2015/10/04/how-to-undo-with-git/",
    "regularPath": "/_posts/how-to-undo-with-git.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "撤销一个已发布的更新"
    }, {
      "level": 2,
      "title": "",
      "slug": "修改上次-commit-的提交信息"
    }, {
      "level": 2,
      "title": "",
      "slug": "撤销本地修改"
    }, {
      "level": 2,
      "title": "",
      "slug": "重置本地修改"
    }, {
      "level": 2,
      "title": "",
      "slug": "撤销本地修改之后重做"
    }, {
      "level": 2,
      "title": "",
      "slug": "提交到了另一个分支"
    }, {
      "level": 2,
      "title": "",
      "slug": "覆盖整个分支"
    }],
    "type": "post"
  }, {
    "title": "用 npm scripts 和 nswatch 替代 gulp",
    "frontmatter": {
      "title": "用 npm scripts 和 nswatch 替代 gulp",
      "subtitle": "Long live gulp, I use npm script",
      "date": "2016-08-29T16:54:30.000Z",
      "tags": ["gulp", "npm"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-507ac86a723d1",
    "path": "/2016/08/30/kill-gulp-with-npm-scripts-and-nswatch/",
    "regularPath": "/_posts/kill-gulp-with-npm-scripts-and-nswatch.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "为什么用-npm-scripts"
    }, {
      "level": 2,
      "title": "",
      "slug": "nswatch"
    }],
    "type": "post"
  }, {
    "title": "在终端里使用第三方登录",
    "frontmatter": {
      "title": "在终端里使用第三方登录",
      "date": "2015-10-26T17:44:52.000Z",
      "tags": ["terminal"],
      "categories": ["skills"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-aada35a358305",
    "path": "/2015/10/27/log-in-with-your-teminal/",
    "regularPath": "/_posts/log-in-with-your-teminal.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "新建一个应用"
    }, {
      "level": 2,
      "title": "",
      "slug": "思路"
    }],
    "type": "post"
  }, {
    "title": "我的 rollup-plugin-postcss",
    "frontmatter": {
      "title": "我的 rollup-plugin-postcss",
      "date": "2018-02-27T14:28:14.000Z",
      "tags": ["javascript", "story"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-2607554aeff2f",
    "path": "/2018/02/27/my-rollup-plugin-postcss/",
    "regularPath": "/_posts/my-rollup-plugin-postcss.html",
    "headers": [{
      "level": 2,
      "title": "2015 年 12 月 8 日",
      "slug": "_2015-年-12-月-8-日"
    }, {
      "level": 2,
      "title": "2015 年 12 月 23 日",
      "slug": "_2015-年-12-月-23-日"
    }, {
      "level": 2,
      "title": "2016 年 5 月 29 日",
      "slug": "_2016-年-5-月-29-日"
    }, {
      "level": 2,
      "title": "2016 年 9 月 2 日",
      "slug": "_2016-年-9-月-2-日"
    }, {
      "level": 2,
      "title": "2018 年 1 月 10 日",
      "slug": "_2018-年-1-月-10-日"
    }, {
      "level": 2,
      "title": "2018 年 2 月 27 日",
      "slug": "_2018-年-2-月-27-日"
    }],
    "type": "post"
  }, {
    "title": "新世纪福音脚手架",
    "frontmatter": {
      "title": "新世纪福音脚手架",
      "subtitle": "she said, \"it's futuristic.\"",
      "date": "2017-05-21T20:20:34.000Z",
      "tags": null,
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-e10e2abe32a54",
    "path": "/2017/05/22/neon-genesis-scaffolding-tool/",
    "regularPath": "/_posts/neon-genesis-scaffolding-tool.html",
    "headers": [{
      "level": 2,
      "title": "脚手架",
      "slug": "脚手架"
    }, {
      "level": 2,
      "title": "测试脚手架",
      "slug": "测试脚手架"
    }, {
      "level": 2,
      "title": "最后",
      "slug": "最后"
    }],
    "type": "post"
  }, {
    "title": "死宅什么的最好了",
    "frontmatter": {
      "title": "死宅什么的最好了",
      "date": "2016-06-23T16:02:49.000Z",
      "tags": ["otaku"],
      "categories": ["anime"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-777bc6536e9e",
    "path": "/2016/06/24/otaku-is-the-best/",
    "regularPath": "/_posts/otaku-is-the-best.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "剧情反转"
    }],
    "type": "post"
  }, {
    "title": "新的作息时间",
    "frontmatter": {
      "title": "新的作息时间",
      "date": "2016-03-03T15:39:02.000Z",
      "tags": ["life"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-fa0eb5814722c",
    "path": "/2016/03/03/new-timetable/",
    "regularPath": "/_posts/new-timetable.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "准备工作"
    }, {
      "level": 2,
      "title": "",
      "slug": "热身"
    }, {
      "level": 2,
      "title": "",
      "slug": "日落"
    }, {
      "level": 2,
      "title": "",
      "slug": "周末"
    }],
    "type": "post"
  }, {
    "title": "Node.js 模块风格指南",
    "frontmatter": {
      "title": "Node.js 模块风格指南",
      "subtitle": "编写高质量、可复用的 Node.js 模块",
      "date": "2016-01-29T09:44:30.000Z",
      "tags": ["node.js", "javascript", "sindresorhus"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-8a9e57635a9ab",
    "path": "/2016/01/29/node-js-module-style-guide/",
    "regularPath": "/_posts/node-js-module-style-guide.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "初始化一个项目"
    }, {
      "level": 2,
      "title": "",
      "slug": "注释"
    }, {
      "level": 2,
      "title": "",
      "slug": "编写可复用模块"
    }, {
      "level": 2,
      "title": "",
      "slug": "代码风格指南"
    }, {
      "level": 2,
      "title": "",
      "slug": "eslint"
    }, {
      "level": 2,
      "title": "",
      "slug": "测试"
    }, {
      "level": 2,
      "title": "风格",
      "slug": "commit-风格"
    }, {
      "level": 2,
      "title": "",
      "slug": "semantic-release"
    }, {
      "level": 2,
      "title": "",
      "slug": "_2016"
    }],
    "type": "post"
  }, {
    "title": "PostgreSQL 简明指南",
    "frontmatter": {
      "title": "PostgreSQL 简明指南",
      "date": "2016-04-25T17:06:05.000Z",
      "tags": ["postgresql", "database"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-e0f96de97313a",
    "path": "/2016/04/26/postgresql-simple-guide/",
    "regularPath": "/_posts/postgresql-simple-guide.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "基础"
    }, {
      "level": 3,
      "title": "安装",
      "slug": "安装"
    }, {
      "level": 3,
      "title": "初始化",
      "slug": "初始化"
    }, {
      "level": 3,
      "title": "新建用户和数据库",
      "slug": "新建用户和数据库"
    }, {
      "level": 3,
      "title": "数据库相关查询",
      "slug": "数据库相关查询"
    }, {
      "level": 2,
      "title": "",
      "slug": "推荐阅读"
    }],
    "type": "post"
  }, {
    "title": "Revue 指南",
    "frontmatter": {
      "title": "Revue 指南",
      "tags": ["javascript", "redux", "revue", "vue"],
      "subtitle": "如何在 Vue 中使用 Redux 管理 State",
      "categories": [],
      "date": "2015-12-18T17:10:00.000Z",
      "outdated": "由于多次更新以及不稳定性，本文中关于 Revue 的介绍已不再有效。",
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-7103000f32452",
    "path": "/2015/12/19/revue-guide/",
    "regularPath": "/_posts/revue-guide.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "缘起小明"
    }, {
      "level": 2,
      "title": "",
      "slug": "历史必然"
    }, {
      "level": 2,
      "title": "",
      "slug": "vue"
    }, {
      "level": 2,
      "title": "",
      "slug": "revue"
    }],
    "type": "post"
  }, {
    "title": "菜月昴前传",
    "frontmatter": {
      "title": "菜月昴前传",
      "subtitle": "是人渣、废柴抑或是英雄、天使之路?",
      "date": "2016-08-03T22:46:52.000Z",
      "tags": ["anime", "rezero", "rem"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-e2b4e1c748466",
    "path": "/2016/08/04/subaru-be-loyal-or-jerk/",
    "regularPath": "/_posts/subaru-be-loyal-or-jerk.html",
    "type": "post"
  }, {
    "title": "短发女生",
    "frontmatter": {
      "title": "短发女生",
      "date": "2018/06/14",
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-be5603de51c1f",
    "path": "/2018/06/14/short-hair/",
    "regularPath": "/_posts/short-hair.html",
    "type": "post"
  }, {
    "title": "Sublime Text 和 VS Code 常用快捷键",
    "frontmatter": {
      "title": "Sublime Text 和 VS Code 常用快捷键",
      "date": "2016-10-05T21:00:47.000Z",
      "tags": ["sublime", "vs code"],
      "tip": "持续更新中。",
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-519c679542748",
    "path": "/2016/10/06/sublime-vscode-key-bindings/",
    "regularPath": "/_posts/sublime-vscode-key-bindings.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "显示效果"
    }, {
      "level": 3,
      "title": "重新打开刚刚关闭的标签页",
      "slug": "重新打开刚刚关闭的标签页"
    }, {
      "level": 3,
      "title": "粘贴时自动缩进",
      "slug": "粘贴时自动缩进"
    }, {
      "level": 3,
      "title": "切换标签页",
      "slug": "切换标签页"
    }, {
      "level": 3,
      "title": "分割编辑器",
      "slug": "分割编辑器"
    }, {
      "level": 3,
      "title": "显示 / 隐藏侧边栏",
      "slug": "显示-隐藏侧边栏"
    }, {
      "level": 2,
      "title": "",
      "slug": "选取内容"
    }, {
      "level": 3,
      "title": "选取光标附近的内容",
      "slug": "选取光标附近的内容"
    }, {
      "level": 3,
      "title": "往左 / 右选取一个字符",
      "slug": "往左-右选取一个字符"
    }, {
      "level": 3,
      "title": "选取光标所在的行",
      "slug": "选取光标所在的行"
    }, {
      "level": 3,
      "title": "将光标移至选取的每一行末尾",
      "slug": "将光标移至选取的每一行末尾"
    }, {
      "level": 3,
      "title": "在多个位置显示光标",
      "slug": "在多个位置显示光标"
    }, {
      "level": 3,
      "title": "将光标移至行首 / 行尾",
      "slug": "将光标移至行首-行尾"
    }, {
      "level": 3,
      "title": "从光标所在位置选取到行首 / 行尾的内容",
      "slug": "从光标所在位置选取到行首-行尾的内容"
    }, {
      "level": 2,
      "title": "",
      "slug": "查找内容"
    }, {
      "level": 3,
      "title": "搜索项目中的文件",
      "slug": "搜索项目中的文件"
    }, {
      "level": 3,
      "title": "跳到指定的一行",
      "slug": "跳到指定的一行"
    }, {
      "level": 3,
      "title": "跳到函数定义",
      "slug": "跳到函数定义"
    }, {
      "level": 2,
      "title": "",
      "slug": "移动内容"
    }, {
      "level": 3,
      "title": "上下移动选取的内容",
      "slug": "上下移动选取的内容"
    }],
    "type": "post"
  }, {
    "title": "用 Jest 测试 JavaScript 应用",
    "frontmatter": {
      "title": "用 Jest 测试 JavaScript 应用",
      "date": "2017-11-26T15:05:04.000Z",
      "tags": ["jest", "javascript", "test"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-a8d6a58c756dc",
    "path": "/2017/11/26/tesing-javascript-apps-using-jest/",
    "regularPath": "/_posts/tesing-javascript-apps-using-jest.html",
    "headers": [{
      "level": 2,
      "title": "资源文件",
      "slug": "资源文件"
    }, {
      "level": 2,
      "title": "浏览器 API",
      "slug": "浏览器-api"
    }, {
      "level": 2,
      "title": "Snapshot 测试",
      "slug": "snapshot-测试"
    }, {
      "level": 2,
      "title": "异步代码测试",
      "slug": "异步代码测试"
    }],
    "type": "post"
  }, {
    "title": "世界真喧扰",
    "frontmatter": {
      "title": "世界真喧扰",
      "date": "2017-05-04T13:57:06.000Z",
      "tags": null,
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-54f749dd82bec",
    "path": "/2017/05/04/the-world-is-a-big-noise/",
    "regularPath": "/_posts/the-world-is-a-big-noise.html",
    "type": "post"
  }, {
    "title": "最轻量的 ES2015 编译配置",
    "frontmatter": {
      "title": "最轻量的 ES2015 编译配置",
      "subtitle": "Sometimes Babel, Sometimes Buble.",
      "date": "2017-04-28T21:11:32.000Z",
      "tags": ["babel", "buble"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-0f065777cd9d3",
    "path": "/2017/04/29/the-most-lightweight-es2015-setup/",
    "regularPath": "/_posts/the-most-lightweight-es2015-setup.html",
    "headers": [{
      "level": 2,
      "title": "用 Buble 替换 Babel",
      "slug": "用-buble-替换-babel"
    }, {
      "level": 2,
      "title": "async/await 和 generator 函数",
      "slug": "async-await-和-generator-函数"
    }],
    "type": "post"
  }, {
    "title": "拥有能够眺望的远方",
    "frontmatter": {
      "title": "拥有能够眺望的远方",
      "date": "2017-01-12T17:56:09.000Z",
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-fe18276b65f4d",
    "path": "/2017/01/13/this-is-how-it-started/",
    "regularPath": "/_posts/this-is-how-it-started.html",
    "type": "post"
  }, {
    "title": "tooling 让你从 jQuery 中解脱出来",
    "frontmatter": {
      "title": "tooling 让你从 jQuery 中解脱出来",
      "date": "2016-01-19T20:43:58.000Z",
      "subtitle": "jQuery 只是个引子，泛指那些不用构建工具的 “显得很方便” 的开发方式",
      "tags": ["tooling", "webpack", "jquery"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-fcc95f5880a29",
    "path": "/2016/01/20/tooling-free-you-from-jquery/",
    "regularPath": "/_posts/tooling-free-you-from-jquery.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "起因"
    }, {
      "level": 2,
      "title": "",
      "slug": "tooling-带来了什么？"
    }, {
      "level": 2,
      "title": "",
      "slug": "use-case"
    }],
    "type": "post"
  }, {
    "title": "真・如何学写代码",
    "frontmatter": {
      "title": "真・如何学写代码",
      "compileTemplate": true,
      "date": "Fri Jul 27 2018 19:56:45 GMT+0800 (CST)",
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-7e794b0766a4c",
    "path": "/2018/07/27/true-how-to-learn-to-code/",
    "regularPath": "/_posts/true-how-to-learn-to-code.html",
    "type": "post"
  }, {
    "title": "为什么我不会结婚",
    "frontmatter": {
      "title": "为什么我不会结婚",
      "date": "2016-04-02T19:27:34.000Z",
      "tags": null,
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-1e1ac6d00d035",
    "path": "/2016/04/03/why-i-wont-marry/",
    "regularPath": "/_posts/why-i-wont-marry.html",
    "type": "post"
  }, {
    "title": "Vue JSX 使用指南",
    "frontmatter": {
      "title": "Vue JSX 使用指南",
      "subtitle": "JSX 相关专利归 NoFaceBoooooooooook 所有",
      "date": "2017-09-21T12:19:14.000Z",
      "tags": ["vue", "jsx"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-f6b19b10202a2",
    "path": "/2017/09/21/vue-jsx-full-guide/",
    "regularPath": "/_posts/vue-jsx-full-guide.html",
    "headers": [{
      "level": 2,
      "title": "什么是 JSX?",
      "slug": "什么是-jsx"
    }, {
      "level": 2,
      "title": "转换 JSX",
      "slug": "转换-jsx"
    }, {
      "level": 2,
      "title": "使用 JSX",
      "slug": "使用-jsx"
    }, {
      "level": 3,
      "title": "render 和 createElement 函数",
      "slug": "render-和-createelement-函数"
    }, {
      "level": 2,
      "title": "Vue JSX 特性",
      "slug": "vue-jsx-特性"
    }, {
      "level": 3,
      "title": "和 React JSX 的不同",
      "slug": "和-react-jsx-的不同"
    }, {
      "level": 3,
      "title": "v-model",
      "slug": "v-model-插件页面"
    }, {
      "level": 3,
      "title": "事件修饰符",
      "slug": "事件修饰符-插件页面"
    }],
    "type": "post"
  }, {
    "title": "为什么动漫如此吸引我？",
    "frontmatter": {
      "title": "为什么动漫如此吸引我？",
      "date": "2015-07-10T09:08:51.000Z",
      "categories": ["Anime"],
      "tags": ["anime"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-8e40bc2a106ff",
    "path": "/2015/07/10/why-so-addicted-into-anime/",
    "regularPath": "/_posts/why-so-addicted-into-anime.html",
    "type": "post"
  }, {
    "title": "用 ESLint 和 Prettier 写出高质量代码",
    "frontmatter": {
      "title": "用 ESLint 和 Prettier 写出高质量代码",
      "subtitle": "当然你的代码本身不能是无意义的",
      "date": "2017-12-11T21:37:05.000Z",
      "tags": ["javascript", "eslint", "prettier"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-c16150a1b5251",
    "path": "/2017/12/12/write-better-code-with-eslint-and-prettier/",
    "regularPath": "/_posts/write-better-code-with-eslint-and-prettier.html",
    "headers": [{
      "level": 2,
      "title": "在 ESLint 中使用 eslint-plugin-prettier",
      "slug": "在-eslint-中使用-eslint-plugin-prettier"
    }, {
      "level": 2,
      "title": "使用 prettier-eslint-cli",
      "slug": "使用-prettier-eslint-cli"
    }],
    "type": "post"
  }, {
    "title": "关于这个可爱的男孩子",
    "frontmatter": {
      "title": "关于这个可爱的男孩子",
      "subtitle": "先定一个小目标，写出能用的代码就行了。",
      "layout": "Page"
    },
    "key": "v-f656cb6893f71",
    "path": "/about.html",
    "regularPath": "/about.html",
    "headers": [{
      "level": 2,
      "title": "关于我",
      "slug": "关于我"
    }, {
      "level": 2,
      "title": "抓得到我吗",
      "slug": "抓得到我吗"
    }, {
      "level": 2,
      "title": "赋湿一首",
      "slug": "赋湿一首"
    }, {
      "level": 2,
      "title": "兴♂趣",
      "slug": "兴♂趣"
    }, {
      "level": 2,
      "title": "装备",
      "slug": "装备"
    }, {
      "level": 2,
      "title": "前端开发",
      "slug": "前端开发"
    }, {
      "level": 3,
      "title": "Q: 为什么从事前端?",
      "slug": "q-为什么从事前端"
    }, {
      "level": 3,
      "title": "Q: 为什么没在牛逼的公司工作?",
      "slug": "q-为什么没在牛逼的公司工作"
    }, {
      "level": 3,
      "title": "Q: 我想学前端，给点建议?",
      "slug": "q-我想学前端，给点建议"
    }, {
      "level": 3,
      "title": "Q: 你为什么那么喜欢造轮子?",
      "slug": "q-你为什么那么喜欢造轮子"
    }, {
      "level": 3,
      "title": "Q: 你为什么叫 EGOIST?",
      "slug": "q-你为什么叫-egoist"
    }, {
      "level": 2,
      "title": "三观",
      "slug": "三观"
    }],
    "type": "page"
  }, {
    "title": "那些吸引我的女孩子们",
    "frontmatter": {
      "title": "那些吸引我的女孩子们",
      "subtitle": "来自 EGOIST 的告白",
      "waifus": [{
        "name": "秋月风夏",
        "cv": "Lynn"
      }, {
        "name": "战场原黑仪",
        "cv": "斋藤千和"
      }, {
        "name": "CC",
        "cv": "由加奈"
      }, {
        "name": "蕾姆",
        "cv": "水濑祈"
      }, {
        "name": "三笠·阿克曼",
        "cv": "石川由依"
      }, {
        "name": "惣流·明日香·兰格雷",
        "cv": "宫村优子"
      }, {
        "name": "梦梦·贝莉雅·戴比路克",
        "cv": "丰崎爱生"
      }, {
        "name": "时崎狂三",
        "cv": "真田麻美"
      }, {
        "name": "董香",
        "cv": "雨宫天"
      }, {
        "name": "楪祈",
        "cv": "茅野爱衣"
      }, {
        "name": "阿尔托莉雅·潘德拉贡",
        "cv": "川澄綾子"
      }, {
        "name": "莫德雷德",
        "cv": "泽城美雪"
      }, {
        "name": "朝田诗乃",
        "cv": "泽城美雪"
      }, {
        "name": "小宮惠那",
        "cv": "Lynn"
      }, {
        "name": "碧井风夏",
        "cv": "无"
      }, {
        "name": "牧濑红莉栖",
        "cv": "今井麻美"
      }, {
        "name": "雪之下雪乃",
        "cv": "早见沙织"
      }, {
        "name": "无名",
        "cv": "千本木彩花"
      }, {
        "name": "亚丝娜",
        "cv": "户松遥"
      }, {
        "name": "我妻由乃",
        "cv": "村田知沙"
      }, {
        "name": "Zero Two",
        "cv": "户松遥"
      }, {
        "name": "梅",
        "cv": "市之濑加那"
      }, {
        "name": "安琪丽莎",
        "cv": "水树奈奈"
      }, {
        "name": "朝比奈凉风",
        "cv": "三桥加奈子"
      }, {
        "name": "艾米莉娅",
        "cv": "高桥李依"
      }, {
        "name": "贞德 (Fate)",
        "cv": "坂本真绫"
      }, {
        "name": "艾蕾欧诺拉·维尔塔利亚（艾莲）",
        "cv": "户松遥"
      }, {
        "name": "宫水三叶",
        "cv": "上白石萌音"
      }, {
        "name": "阿尔泰尔",
        "cv": "丰崎爱生"
      }, {
        "name": "赫萝",
        "cv": "小清水亚美"
      }, {
        "name": "生野艾米露",
        "cv": "雾之峰沙罗"
      }, {
        "name": "艾丝·华伦斯坦",
        "cv": "大西沙织"
      }, {
        "name": "冰无小雪",
        "cv": "早见沙织"
      }, {
        "name": "友利奈绪",
        "cv": "佐仓绫音"
      }, {
        "name": "椎名真白",
        "cv": "茅野爱衣"
      }, {
        "name": "加贺",
        "cv": "井口裕香"
      }, {
        "name": "赤城",
        "cv": "藤田咲"
      }, {
        "name": "霞之丘诗羽",
        "cv": "茅野爱衣"
      }, {
        "name": "更识楯无（更识刀奈）",
        "cv": "斋藤千和"
      }, {
        "name": "绚辻词",
        "cv": "名冢佳织"
      }, {
        "name": "常木耀",
        "cv": "佐仓绫音"
      }, {
        "name": "水野茜",
        "cv": "小原好美"
      }, {
        "name": "玛修·基列莱特",
        "cv": "高桥李依"
      }, {
        "name": "乌丸千岁",
        "cv": "千本木彩花"
      }, {
        "name": "森岛遥",
        "cv": "伊藤静"
      }, {
        "name": "绿川花",
        "cv": "花泽香菜"
      }, {
        "name": "希斯特利亚",
        "cv": "三上枝织"
      }, {
        "name": "西宫硝子",
        "cv": "早见沙织"
      }, {
        "name": "西宫结弦",
        "cv": "悠木碧"
      }, {
        "name": "夏川真涼",
        "cv": "田村由香里"
      }, {
        "name": "凉风青叶",
        "cv": "高田忧希"
      }, {
        "name": "山田妖精",
        "cv": "高桥未奈美"
      }, {
        "name": "和泉纱雾",
        "cv": "藤田茜"
      }, {
        "name": "千寿村正",
        "cv": "大西沙织"
      }, {
        "name": "樱宁宁",
        "cv": "朝日奈丸佳"
      }, {
        "name": "七咲逢",
        "cv": "由加奈"
      }, {
        "name": "加藤惠",
        "cv": "安野希世乃"
      }, {
        "name": "一色彩羽",
        "cv": "佐仓绫音"
      }, {
        "name": "惠惠",
        "cv": "高桥李依"
      }, {
        "name": "輝夜月",
        "cv": "不详"
      }],
      "layout": "Page"
    },
    "key": "v-8aa01dc608728",
    "path": "/girls.html",
    "regularPath": "/girls.html",
    "headers": [{
      "level": 2,
      "title": "当前",
      "slug": "当前"
    }, {
      "level": 2,
      "title": "历史",
      "slug": "历史"
    }],
    "type": "page"
  }, {
    "title": "什么是前端开发",
    "frontmatter": {
      "title": "什么是前端开发",
      "date": "2018-08-21T00:00:00.000Z",
      "published": false,
      "warning": "本文正在撰写中...",
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-f022d775e5d71",
    "path": "/2018/08/21/wtf-is-front-end-development/",
    "regularPath": "/_posts/wtf-is-front-end-development.html",
    "headers": [{
      "level": 2,
      "title": "前端开发的历史",
      "slug": "前端开发的历史"
    }],
    "type": "post"
  }, {
    "title": "为什么我选择用 tab 而不是 space 来缩进",
    "frontmatter": {
      "title": "为什么我选择用 tab 而不是 space 来缩进",
      "date": "2016-01-17T22:33:44.000Z",
      "tags": ["javascript", "code", "space", "tab"],
      "layout": "Page",
      "permalink": "/:year/:month/:day/:slug"
    },
    "key": "v-7d576a0aaf519",
    "path": "/2016/01/18/why-i-choose-tab-over-space/",
    "regularPath": "/_posts/why-i-choose-tab-over-space.html",
    "type": "post"
  }, {
    "title": "捐赠支持",
    "frontmatter": {
      "title": "捐赠支持",
      "layout": "Page"
    },
    "key": "v-1df3523345d37",
    "path": "/donate.html",
    "regularPath": "/donate.html",
    "headers": [{
      "level": 2,
      "title": "",
      "slug": "支付宝"
    }, {
      "level": 2,
      "title": "",
      "slug": "微信转账"
    }],
    "type": "page"
  }, {
    "frontmatter": {
      "layout": "Layout"
    },
    "key": "v-a2cd2476919bb",
    "path": "/",
    "regularPath": "/",
    "type": "page"
  }, {
    "frontmatter": {
      "title": "Tags",
      "layout": "Tags"
    },
    "key": "v-d43bfe895b9c3",
    "path": "/tag/",
    "regularPath": "/tag/",
    "type": "page"
  }, {
    "frontmatter": {
      "title": "Categories",
      "layout": "Page"
    },
    "key": "v-bd7c928dc1ce",
    "path": "/category/",
    "regularPath": "/category/",
    "type": "page"
  }, {
    "frontmatter": {
      "title": "anime | Tag",
      "layout": "Tag"
    },
    "key": "v-3869fe609809f",
    "path": "/tag/anime.html",
    "regularPath": "/tag/anime.html"
  }, {
    "frontmatter": {
      "title": "animes | Tag",
      "layout": "Tag"
    },
    "key": "v-f69dc235f2273",
    "path": "/tag/animes.html",
    "regularPath": "/tag/animes.html"
  }, {
    "frontmatter": {
      "title": "javascript | Tag",
      "layout": "Tag"
    },
    "key": "v-55d98920aacd6",
    "path": "/tag/javascript.html",
    "regularPath": "/tag/javascript.html"
  }, {
    "frontmatter": {
      "title": "frontend | Tag",
      "layout": "Tag"
    },
    "key": "v-3c58c443aa17a",
    "path": "/tag/frontend.html",
    "regularPath": "/tag/frontend.html"
  }, {
    "frontmatter": {
      "title": "localStorage | Tag",
      "layout": "Tag"
    },
    "key": "v-d6667dddf70f1",
    "path": "/tag/localStorage.html",
    "regularPath": "/tag/localStorage.html"
  }, {
    "frontmatter": {
      "title": "thoughts | Tag",
      "layout": "Tag"
    },
    "key": "v-26f8d70ca24bf",
    "path": "/tag/thoughts.html",
    "regularPath": "/tag/thoughts.html"
  }, {
    "frontmatter": {
      "title": "start | Tag",
      "layout": "Tag"
    },
    "key": "v-b84c2ec9cce08",
    "path": "/tag/start.html",
    "regularPath": "/tag/start.html"
  }, {
    "frontmatter": {
      "title": "deploy | Tag",
      "layout": "Tag"
    },
    "key": "v-c33d93dfbd21c",
    "path": "/tag/deploy.html",
    "regularPath": "/tag/deploy.html"
  }, {
    "frontmatter": {
      "title": "node.js | Tag",
      "layout": "Tag"
    },
    "key": "v-fab9ba1d2a49f",
    "path": "/tag/node.js.html",
    "regularPath": "/tag/node.js.html"
  }, {
    "frontmatter": {
      "title": "docker | Tag",
      "layout": "Tag"
    },
    "key": "v-5b81f1c150e56",
    "path": "/tag/docker.html",
    "regularPath": "/tag/docker.html"
  }, {
    "frontmatter": {
      "title": "bundle | Tag",
      "layout": "Tag"
    },
    "key": "v-12e4151c245e5",
    "path": "/tag/bundle.html",
    "regularPath": "/tag/bundle.html"
  }, {
    "frontmatter": {
      "title": "bili | Tag",
      "layout": "Tag"
    },
    "key": "v-5ac41054c5026",
    "path": "/tag/bili.html",
    "regularPath": "/tag/bili.html"
  }, {
    "frontmatter": {
      "title": "fuuka | Tag",
      "layout": "Tag"
    },
    "key": "v-6790ce3ceb069",
    "path": "/tag/fuuka.html",
    "regularPath": "/tag/fuuka.html"
  }, {
    "frontmatter": {
      "title": "js | Tag",
      "layout": "Tag"
    },
    "key": "v-4f078790f4252",
    "path": "/tag/js.html",
    "regularPath": "/tag/js.html"
  }, {
    "frontmatter": {
      "title": "bootstrap | Tag",
      "layout": "Tag"
    },
    "key": "v-f0fea222c5349",
    "path": "/tag/bootstrap.html",
    "regularPath": "/tag/bootstrap.html"
  }, {
    "frontmatter": {
      "title": "jquery | Tag",
      "layout": "Tag"
    },
    "key": "v-3ab9f8aa9352d",
    "path": "/tag/jquery.html",
    "regularPath": "/tag/jquery.html"
  }, {
    "frontmatter": {
      "title": "vue | Tag",
      "layout": "Tag"
    },
    "key": "v-a81cc7376369b",
    "path": "/tag/vue.html",
    "regularPath": "/tag/vue.html"
  }, {
    "frontmatter": {
      "title": "react | Tag",
      "layout": "Tag"
    },
    "key": "v-27526d79e0eaa",
    "path": "/tag/react.html",
    "regularPath": "/tag/react.html"
  }, {
    "frontmatter": {
      "title": "mvvm | Tag",
      "layout": "Tag"
    },
    "key": "v-b7070c687f97f",
    "path": "/tag/mvvm.html",
    "regularPath": "/tag/mvvm.html"
  }, {
    "frontmatter": {
      "title": "canvas | Tag",
      "layout": "Tag"
    },
    "key": "v-92513ffe9343",
    "path": "/tag/canvas.html",
    "regularPath": "/tag/canvas.html"
  }, {
    "frontmatter": {
      "title": "git | Tag",
      "layout": "Tag"
    },
    "key": "v-48d050e044bb3",
    "path": "/tag/git.html",
    "regularPath": "/tag/git.html"
  }, {
    "frontmatter": {
      "title": "cli | Tag",
      "layout": "Tag"
    },
    "key": "v-d1b96daaa6657",
    "path": "/tag/cli.html",
    "regularPath": "/tag/cli.html"
  }, {
    "frontmatter": {
      "title": "node | Tag",
      "layout": "Tag"
    },
    "key": "v-07d3a0fee5e86",
    "path": "/tag/node.html",
    "regularPath": "/tag/node.html"
  }, {
    "frontmatter": {
      "title": "how-to | Tag",
      "layout": "Tag"
    },
    "key": "v-99c7fd3a910fb",
    "path": "/tag/how-to.html",
    "regularPath": "/tag/how-to.html"
  }, {
    "frontmatter": {
      "title": "udo | Tag",
      "layout": "Tag"
    },
    "key": "v-8b148de967bdd",
    "path": "/tag/udo.html",
    "regularPath": "/tag/udo.html"
  }, {
    "frontmatter": {
      "title": "gulp | Tag",
      "layout": "Tag"
    },
    "key": "v-25826c69a505f",
    "path": "/tag/gulp.html",
    "regularPath": "/tag/gulp.html"
  }, {
    "frontmatter": {
      "title": "npm | Tag",
      "layout": "Tag"
    },
    "key": "v-10efe8d7dd50b",
    "path": "/tag/npm.html",
    "regularPath": "/tag/npm.html"
  }, {
    "frontmatter": {
      "title": "terminal | Tag",
      "layout": "Tag"
    },
    "key": "v-c1c7b1cd93199",
    "path": "/tag/terminal.html",
    "regularPath": "/tag/terminal.html"
  }, {
    "frontmatter": {
      "title": "story | Tag",
      "layout": "Tag"
    },
    "key": "v-c4b461ce21b3e",
    "path": "/tag/story.html",
    "regularPath": "/tag/story.html"
  }, {
    "frontmatter": {
      "title": "otaku | Tag",
      "layout": "Tag"
    },
    "key": "v-987ccca27908e",
    "path": "/tag/otaku.html",
    "regularPath": "/tag/otaku.html"
  }, {
    "frontmatter": {
      "title": "life | Tag",
      "layout": "Tag"
    },
    "key": "v-4cc524ef89735",
    "path": "/tag/life.html",
    "regularPath": "/tag/life.html"
  }, {
    "frontmatter": {
      "title": "sindresorhus | Tag",
      "layout": "Tag"
    },
    "key": "v-bbb1a20722394",
    "path": "/tag/sindresorhus.html",
    "regularPath": "/tag/sindresorhus.html"
  }, {
    "frontmatter": {
      "title": "postgresql | Tag",
      "layout": "Tag"
    },
    "key": "v-aad3be667f18f",
    "path": "/tag/postgresql.html",
    "regularPath": "/tag/postgresql.html"
  }, {
    "frontmatter": {
      "title": "database | Tag",
      "layout": "Tag"
    },
    "key": "v-22004c5f1ad0b",
    "path": "/tag/database.html",
    "regularPath": "/tag/database.html"
  }, {
    "frontmatter": {
      "title": "redux | Tag",
      "layout": "Tag"
    },
    "key": "v-76631801e2ca5",
    "path": "/tag/redux.html",
    "regularPath": "/tag/redux.html"
  }, {
    "frontmatter": {
      "title": "revue | Tag",
      "layout": "Tag"
    },
    "key": "v-3a79ea44d3569",
    "path": "/tag/revue.html",
    "regularPath": "/tag/revue.html"
  }, {
    "frontmatter": {
      "title": "rezero | Tag",
      "layout": "Tag"
    },
    "key": "v-a4086439efbf5",
    "path": "/tag/rezero.html",
    "regularPath": "/tag/rezero.html"
  }, {
    "frontmatter": {
      "title": "rem | Tag",
      "layout": "Tag"
    },
    "key": "v-d99114da76751",
    "path": "/tag/rem.html",
    "regularPath": "/tag/rem.html"
  }, {
    "frontmatter": {
      "title": "sublime | Tag",
      "layout": "Tag"
    },
    "key": "v-8004695afb5ea",
    "path": "/tag/sublime.html",
    "regularPath": "/tag/sublime.html"
  }, {
    "frontmatter": {
      "title": "vs code | Tag",
      "layout": "Tag"
    },
    "key": "v-b852f3e769af7",
    "path": "/tag/vs code.html",
    "regularPath": "/tag/vs%20code.html"
  }, {
    "frontmatter": {
      "title": "jest | Tag",
      "layout": "Tag"
    },
    "key": "v-891354a80b406",
    "path": "/tag/jest.html",
    "regularPath": "/tag/jest.html"
  }, {
    "frontmatter": {
      "title": "test | Tag",
      "layout": "Tag"
    },
    "key": "v-0a1709b00f185",
    "path": "/tag/test.html",
    "regularPath": "/tag/test.html"
  }, {
    "frontmatter": {
      "title": "babel | Tag",
      "layout": "Tag"
    },
    "key": "v-23ebeac3e073d",
    "path": "/tag/babel.html",
    "regularPath": "/tag/babel.html"
  }, {
    "frontmatter": {
      "title": "buble | Tag",
      "layout": "Tag"
    },
    "key": "v-e7cf0bec1c26c",
    "path": "/tag/buble.html",
    "regularPath": "/tag/buble.html"
  }, {
    "frontmatter": {
      "title": "tooling | Tag",
      "layout": "Tag"
    },
    "key": "v-950210aa94495",
    "path": "/tag/tooling.html",
    "regularPath": "/tag/tooling.html"
  }, {
    "frontmatter": {
      "title": "webpack | Tag",
      "layout": "Tag"
    },
    "key": "v-e6f1d67b3a749",
    "path": "/tag/webpack.html",
    "regularPath": "/tag/webpack.html"
  }, {
    "frontmatter": {
      "title": "jsx | Tag",
      "layout": "Tag"
    },
    "key": "v-96266c9c186ad",
    "path": "/tag/jsx.html",
    "regularPath": "/tag/jsx.html"
  }, {
    "frontmatter": {
      "title": "eslint | Tag",
      "layout": "Tag"
    },
    "key": "v-0fd6e0c58b235",
    "path": "/tag/eslint.html",
    "regularPath": "/tag/eslint.html"
  }, {
    "frontmatter": {
      "title": "prettier | Tag",
      "layout": "Tag"
    },
    "key": "v-7d732402bf6d7",
    "path": "/tag/prettier.html",
    "regularPath": "/tag/prettier.html"
  }, {
    "frontmatter": {
      "title": "code | Tag",
      "layout": "Tag"
    },
    "key": "v-1fbf0070580ef",
    "path": "/tag/code.html",
    "regularPath": "/tag/code.html"
  }, {
    "frontmatter": {
      "title": "space | Tag",
      "layout": "Tag"
    },
    "key": "v-70a64c69a4329",
    "path": "/tag/space.html",
    "regularPath": "/tag/space.html"
  }, {
    "frontmatter": {
      "title": "tab | Tag",
      "layout": "Tag"
    },
    "key": "v-9af8b6720f01a",
    "path": "/tag/tab.html",
    "regularPath": "/tag/tab.html"
  }, {
    "frontmatter": {
      "title": "anime | Category",
      "layout": "Page"
    },
    "key": "v-cebc66d0ce3ad",
    "path": "/category/anime.html",
    "regularPath": "/category/anime.html"
  }, {
    "frontmatter": {
      "title": "JavaScript | Category",
      "layout": "Page"
    },
    "key": "v-06e859988cf94",
    "path": "/category/JavaScript.html",
    "regularPath": "/category/JavaScript.html"
  }, {
    "frontmatter": {
      "title": "Diary | Category",
      "layout": "Page"
    },
    "key": "v-d4354ec637236",
    "path": "/category/Diary.html",
    "regularPath": "/category/Diary.html"
  }, {
    "frontmatter": {
      "title": "thoughts | Category",
      "layout": "Page"
    },
    "key": "v-265e7fbb89349",
    "path": "/category/thoughts.html",
    "regularPath": "/category/thoughts.html"
  }, {
    "frontmatter": {
      "title": "javascript | Category",
      "layout": "Page"
    },
    "key": "v-b8e65356bc894",
    "path": "/category/javascript.html",
    "regularPath": "/category/javascript.html"
  }, {
    "frontmatter": {
      "title": "git | Category",
      "layout": "Page"
    },
    "key": "v-e6e4c72badc4e",
    "path": "/category/git.html",
    "regularPath": "/category/git.html"
  }, {
    "frontmatter": {
      "title": "Anime | Category",
      "layout": "Page"
    },
    "key": "v-20b3cbde2103a",
    "path": "/category/Anime.html",
    "regularPath": "/category/Anime.html"
  }, {
    "frontmatter": {
      "title": "tech | Category",
      "layout": "Page"
    },
    "key": "v-f80fe5840d666",
    "path": "/category/tech.html",
    "regularPath": "/category/tech.html"
  }, {
    "frontmatter": {
      "title": "skills | Category",
      "layout": "Page"
    },
    "key": "v-a5b1569d1791f",
    "path": "/category/skills.html",
    "regularPath": "/category/skills.html"
  }, {
    "frontmatter": {
      "layout": "Layout"
    },
    "key": "v-16278cc72a7af",
    "path": "/page/2/",
    "regularPath": "/page/2/"
  }, {
    "frontmatter": {
      "layout": "Layout"
    },
    "key": "v-2118d65b9e014",
    "path": "/page/3/",
    "regularPath": "/page/3/"
  }, {
    "frontmatter": {
      "layout": "Layout"
    },
    "key": "v-306bc664192b2",
    "path": "/page/4/",
    "regularPath": "/page/4/"
  }, {
    "frontmatter": {
      "layout": "Layout"
    },
    "key": "v-56064e499e848",
    "path": "/page/5/",
    "regularPath": "/page/5/"
  }],
  "themeConfig": {
    "headerTitle": "e.z.",
    "nav": [{
      "text": "about",
      "link": "/about.html"
    }, {
      "text": "girls",
      "link": "/girls.html"
    }, {
      "text": "donate",
      "link": "/donate.html"
    }, {
      "text": "tags",
      "link": "/tag/"
    }]
  }
};

/***/ }),

/***/ "./source/.vuepress/theme/vuepress-theme-egoist/enhanceApp.js":
/*!********************************************************************!*\
  !*** ./source/.vuepress/theme/vuepress-theme-egoist/enhanceApp.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_styles_main_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme/styles/main.styl */ "./source/.vuepress/theme/vuepress-theme-egoist/styles/main.styl");
/* harmony import */ var _theme_styles_main_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_styles_main_styl__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./source/.vuepress/theme/vuepress-theme-egoist/styles/main.styl":
/*!***********************************************************************!*\
  !*** ./source/.vuepress/theme/vuepress-theme-egoist/styles/main.styl ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi ../@vuepress/core/lib/app/clientEntry.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/lib/app/clientEntry.js */"../@vuepress/core/lib/app/clientEntry.js");


/***/ })

/******/ });
//# sourceMappingURL=app.fab1506c.js.map