(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/how-does-array-slice-call-arguments-work.md?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/how-does-array-slice-call-arguments-work.md?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: ['target']
});

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/how-does-array-slice-call-arguments-work.md?vue&type=template&id=77d9dab3&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/how-does-array-slice-call-arguments-work.md?vue&type=template&id=77d9dab3& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('p',[_vm._v("首先 "),_c('code',[_vm._v(".slice")]),_vm._v(" 这个方法在不接受任何参数的时候会返回 "),_c('code',[_vm._v("this")]),_vm._v(" 本身，这是一个 "),_c('code',[_vm._v("Array.prototype")]),_vm._v(" 下的方法，因此 "),_c('code',[_vm._v("this")]),_vm._v(" 就是指向调用 "),_c('code',[_vm._v(".slice")]),_vm._v(" 方法的数组本身。")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("arguments")]),_vm._v(" 是什么? "),_c('code',[_vm._v("arguments")]),_vm._v(" 是属于函数内部的变量，其值是函数参数列表，一个类数组对象:")]),_vm._v(" "),_c('p',[_vm._v("https://codepan.net/gist/edb0a855276de09d24ac0e5621957974")]),_vm._v(" "),_c('p',[_vm._v("类数组对象可以像真正的数组对象一样操作，除了没有 length 属性，但这足以让 "),_c('code',[_vm._v(".slice")]),_vm._v(" 方法识别了。")]),_vm._v(" "),_c('p',[_vm._v("你不可能用 "),_c('code',[_vm._v("arguments.slice()")]),_vm._v(" 这样的形式调用，因为 "),_c('code',[_vm._v("arguments")]),_vm._v(" 本身还是一个非数组对象，只是像数组。这个时候你想到了 "),_c('code',[_vm._v(".call")]),_vm._v(" 方法，这个方法让你可以自定义调用函数的内部 this 指向哪里，之前说过，默认是指向调用这个函数的对象。")]),_vm._v(" "),_c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_vm._v("Array"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("prototype"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("slice"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("call")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("arguments"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// output:")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'hello'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'world'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n")])])]),_c('p',[_vm._v("这样你就得到了一个真正的参数数组了，而 "),_c('code',[_vm._v(".slice")]),_vm._v(" 除了通过 "),_c('code',[_vm._v("Array.prototype")]),_vm._v(" 访问当然还可以通过对象直接量访问:")]),_vm._v(" "),_c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("slice"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("call")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("arguments"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])])}]



/***/ }),

/***/ "./source/_posts/how-does-array-slice-call-arguments-work.md":
/*!*******************************************************************!*\
  !*** ./source/_posts/how-does-array-slice-call-arguments-work.md ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _how_does_array_slice_call_arguments_work_md_vue_type_template_id_77d9dab3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how-does-array-slice-call-arguments-work.md?vue&type=template&id=77d9dab3& */ "./source/_posts/how-does-array-slice-call-arguments-work.md?vue&type=template&id=77d9dab3&");
/* harmony import */ var _how_does_array_slice_call_arguments_work_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./how-does-array-slice-call-arguments-work.md?vue&type=script&lang=js& */ "./source/_posts/how-does-array-slice-call-arguments-work.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _how_does_array_slice_call_arguments_work_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _how_does_array_slice_call_arguments_work_md_vue_type_template_id_77d9dab3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _how_does_array_slice_call_arguments_work_md_vue_type_template_id_77d9dab3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/how-does-array-slice-call-arguments-work.md?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./source/_posts/how-does-array-slice-call-arguments-work.md?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_how_does_array_slice_call_arguments_work_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./how-does-array-slice-call-arguments-work.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/how-does-array-slice-call-arguments-work.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_how_does_array_slice_call_arguments_work_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/how-does-array-slice-call-arguments-work.md?vue&type=template&id=77d9dab3&":
/*!**************************************************************************************************!*\
  !*** ./source/_posts/how-does-array-slice-call-arguments-work.md?vue&type=template&id=77d9dab3& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_how_does_array_slice_call_arguments_work_md_vue_type_template_id_77d9dab3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./how-does-array-slice-call-arguments-work.md?vue&type=template&id=77d9dab3& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/how-does-array-slice-call-arguments-work.md?vue&type=template&id=77d9dab3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_how_does_array_slice_call_arguments_work_md_vue_type_template_id_77d9dab3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_how_does_array_slice_call_arguments_work_md_vue_type_template_id_77d9dab3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=26.26f7c8f0.js.map