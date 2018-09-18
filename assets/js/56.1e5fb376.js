(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/girls.md?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/girls.md?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "../../node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "../../node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "../../node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    orderedWaifus: function orderedWaifus() {
      var cvStats = {};
      var waifus = this.$page.frontmatter.waifus;
      waifus.forEach(function (waifu) {
        cvStats[waifu.cv] = cvStats[waifu.cv] || [];
        cvStats[waifu.cv].push(waifu);
      });
      return Object.keys(cvStats).sort(function (a, b) {
        return cvStats[b].length - cvStats[a].length;
      }).reduce(function (res, name) {
        return Object(_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(res).concat(Object(_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cvStats[name]));
      }, []);
    }
  }
});

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/girls.md?vue&type=template&id=a01456e2&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/girls.md?vue&type=template&id=a01456e2& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_vm._m(0),_vm._v(" "),_c('p',[_vm._v("我喜欢小宮惠那的性格，平时是那么灵动、活泼，委屈时的无助却又让人看得心疼。")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('p',[_vm._v("按照声优出现次数排名:")]),_vm._v(" "),_c('div',{staticClass:"waifu"},[_c('ul',_vm._l((_vm.orderedWaifus),function(waifu){return _c('li',{key:waifu.name},[_vm._v("\n      "+_vm._s(waifu.name)+" "),_c('span',{staticClass:"cv"},[_vm._v(_vm._s(waifu.cv))])])}))])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"当前"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#当前","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 当前")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://i.loli.net/2017/12/03/5a23dd8a0870c.jpg","alt":"ena"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"历史"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#历史","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 历史")])}]



/***/ }),

/***/ "./source/girls.md":
/*!*************************!*\
  !*** ./source/girls.md ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _girls_md_vue_type_template_id_a01456e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./girls.md?vue&type=template&id=a01456e2& */ "./source/girls.md?vue&type=template&id=a01456e2&");
/* harmony import */ var _girls_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./girls.md?vue&type=script&lang=js& */ "./source/girls.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _girls_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _girls_md_vue_type_template_id_a01456e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _girls_md_vue_type_template_id_a01456e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/girls.md?vue&type=script&lang=js&":
/*!**************************************************!*\
  !*** ./source/girls.md?vue&type=script&lang=js& ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_girls_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../node_modules/babel-loader/lib??ref--3-1!../../../node_modules/vue-loader/lib??ref--1-1!../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./girls.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/girls.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_girls_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/girls.md?vue&type=template&id=a01456e2&":
/*!********************************************************!*\
  !*** ./source/girls.md?vue&type=template&id=a01456e2& ***!
  \********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_girls_md_vue_type_template_id_a01456e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??ref--1-1!../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./girls.md?vue&type=template&id=a01456e2& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/girls.md?vue&type=template&id=a01456e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_girls_md_vue_type_template_id_a01456e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_girls_md_vue_type_template_id_a01456e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=56.1e5fb376.js.map