(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/bundle-front-end-js-library.md?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/bundle-front-end-js-library.md?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['target']
});

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/bundle-front-end-js-library.md?vue&type=template&id=4031576f&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/bundle-front-end-js-library.md?vue&type=template&id=4031576f& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('p',[_vm._v("打包 JS 库没有打包 Web App 那样复杂，但还是可以变得更简单。")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('p',[_vm._v("一个 JS 库一般需要一个 CommonJS 版本，它不会打包 node_modules 里的模块。以及一个 UMD 版本的，用于在浏览器中直接使用，它会打包 node_modules 里的模块。")]),_vm._v(" "),_c('p',[_vm._v("使用 "),_c('a',{attrs:{"href":"https://github.com/universe-denpa/bili","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("bili"),_c('OutboundLink')],1),_vm._v(" 一切都会变得简单，简单到只需要一条命令:")]),_vm._v(" "),_vm._m(1),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('p',[_vm._v("打包的一个目的就是使用 Babel 之类的转换器编译 ES next 到 ES5，bili 默认使用 "),_c('a',{attrs:{"href":"https://buble.surge.sh/guide","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("buble"),_c('OutboundLink')],1),_vm._v(" 来转换 JavaScript 代码，相比 Babel 它更轻量。")]),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_c('p',[_vm._v("bili 是基于 "),_c('a',{attrs:{"href":"https://github.com/rollup/rollup","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Rollup"),_c('OutboundLink')],1),_vm._v(" 的，所以相关 Rollup 插件都可以用来编译 JS 代码。")]),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_c('p',[_vm._v("值得一提的是，buble 不支持 "),_c('code',[_vm._v("async/await")]),_vm._v(" 并且不能将 "),_c('code',[_vm._v("generator")]),_vm._v(" 转换成 ES5 代码，所以我们保留了 generator 代码并且用 "),_c('a',{attrs:{"href":"https://github.com/leebyron/async-to-gen","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("async-to-gen"),_c('OutboundLink')],1),_vm._v(" 将 "),_c('code',[_vm._v("async/await")]),_vm._v(" 转换到 "),_c('code',[_vm._v("generator")]),_vm._v("，如果用到了这两个请考虑浏览器兼容性，或者换成 babel 来编译。")]),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_c('p',[_vm._v("bili 还内置了一些常用的 Rollup 插件，更多使用方法请参考 bili 的 "),_c('a',{attrs:{"href":"https://github.com/universe-denpa/bili/wiki","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("GitHub Wiki"),_c('OutboundLink')],1),_vm._v(" 页面。")])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"常见用例"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#常见用例","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("常见用例")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("bili --format cjs --format umd --module-name MyModule\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("这条命令的意思是打包 "),_c('code',[_vm._v("./src/index.js")]),_vm._v(" 到 "),_c('code',[_vm._v("./dist")]),_vm._v(" 目录，并且转换成 "),_c('code',[_vm._v("CommonJS")]),_vm._v(" 和 "),_c('code',[_vm._v("UMD")]),_vm._v(" 格式的文件，其中 "),_c('code',[_vm._v("UMD")]),_vm._v(" 格式中模块名设定为 "),_c('code',[_vm._v("MyModule")]),_vm._v("，这样在浏览器中就可以通过全局变量 "),_c('code',[_vm._v("MyModule")]),_vm._v(" 引用。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("如果你同时需要一个压缩后的 UMD 格式文件，直接加上 "),_c('code',[_vm._v("--compress")]),_vm._v(" 参数就能额外得到一个 "),_c('code',[_vm._v(".min.js")]),_vm._v(" 和它的 "),_c('code',[_vm._v("sourcemap")]),_vm._v(" 文件。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"es2015"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#es2015","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("ES2015")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("你当然也可以在 bili 中使用 babel 来编译代码，这需要用到 bili 的配置文件 "),_c('code',[_vm._v("bili.config.js")]),_vm._v(":")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_vm._v("module"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("exports "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  jsCompiler"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("require")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'rollup-plugin-babel'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    presets"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'preset'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"buble"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#buble","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("Buble")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("正如之前说了，默认我们使用 "),_c('code',[_vm._v("buble")]),_vm._v("，你可以在配置文件中更改 buble 的配置参数:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_vm._v("module"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("exports "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  buble"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    objectAssign"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'objectAssign'")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"watch-mode"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#watch-mode","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("Watch mode")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("在开发的时候编译代码没有 "),_c('code',[_vm._v("watch")]),_vm._v(" 模式会非常痛苦，想开启 bili 的 watch 模式可以直接加上 "),_c('code',[_vm._v("--watch")]),_vm._v(" 参数。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"更多资料"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#更多资料","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("更多资料")])])}]



/***/ }),

/***/ "./source/_posts/bundle-front-end-js-library.md":
/*!******************************************************!*\
  !*** ./source/_posts/bundle-front-end-js-library.md ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bundle_front_end_js_library_md_vue_type_template_id_4031576f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bundle-front-end-js-library.md?vue&type=template&id=4031576f& */ "./source/_posts/bundle-front-end-js-library.md?vue&type=template&id=4031576f&");
/* harmony import */ var _bundle_front_end_js_library_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bundle-front-end-js-library.md?vue&type=script&lang=js& */ "./source/_posts/bundle-front-end-js-library.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bundle_front_end_js_library_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bundle_front_end_js_library_md_vue_type_template_id_4031576f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bundle_front_end_js_library_md_vue_type_template_id_4031576f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/bundle-front-end-js-library.md?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./source/_posts/bundle-front-end-js-library.md?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_bundle_front_end_js_library_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./bundle-front-end-js-library.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/bundle-front-end-js-library.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_bundle_front_end_js_library_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/bundle-front-end-js-library.md?vue&type=template&id=4031576f&":
/*!*************************************************************************************!*\
  !*** ./source/_posts/bundle-front-end-js-library.md?vue&type=template&id=4031576f& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_bundle_front_end_js_library_md_vue_type_template_id_4031576f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./bundle-front-end-js-library.md?vue&type=template&id=4031576f& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/bundle-front-end-js-library.md?vue&type=template&id=4031576f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_bundle_front_end_js_library_md_vue_type_template_id_4031576f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_bundle_front_end_js_library_md_vue_type_template_id_4031576f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=22.ffc9d5dd.js.map