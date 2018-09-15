(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/postgresql-simple-guide.md?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/postgresql-simple-guide.md?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/postgresql-simple-guide.md?vue&type=template&id=6e354df3&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/postgresql-simple-guide.md?vue&type=template&id=6e354df3& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('p',[_vm._v("边学边记录，有错请指出。（Keep Updating...）")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._m(4),_vm._v(" "),_vm._m(5),_c('p',[_vm._v("进入交互模式:")]),_vm._v(" "),_vm._m(6),_vm._m(7),_vm._v(" "),_c('p',[_vm._v("用默认账户登录到默认数据库:")]),_vm._v(" "),_vm._m(8),_c('p',[_vm._v("修改默认账户的密码:")]),_vm._v(" "),_vm._m(9),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._m(12),_vm._v(" "),_c('p',[_vm._v("重启数据库:")]),_vm._v(" "),_vm._m(13),_vm._m(14),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_c('p',[_vm._v("下一步是创建一个数据库，并让指定用户据有读写权限:")]),_vm._v(" "),_vm._m(17),_vm._m(18),_vm._v(" "),_vm._m(19),_vm._m(20),_vm._v(" "),_vm._m(21),_vm._v(" "),_vm._m(22),_vm._m(23),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"http://postgresguide.com","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("PostgreSQL Guide"),_c('OutboundLink')],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"基础"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#基础","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("基础")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"安装"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#安装","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 安装")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('code',[_vm._v("postgresql-contrib")]),_vm._v(" 不是必需的，它提供一些额外的功能。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("apt-get")]),_vm._v(" update\n$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("apt-get")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("install")]),_vm._v(" postgresql postgresql-contrib\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("安装完成后，它会自动在你的系统上新建一个叫 "),_c('code',[_vm._v("postgres")]),_vm._v(" 的用户，之后你需要切换过去来使用 "),_c('code',[_vm._v("PostgreSQL")]),_vm._v(":")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" -i -u postgres\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("$ psql\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 想退出则输入 `\\q`")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"初始化"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#初始化","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 初始化")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" -u postgres psql template1\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-sql extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-sql"}},[_c('code',[_vm._v("$ postgres"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# ALTER USER postgres with encrypted password 'xxxxxxx';")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("然后修改 "),_c('code',[_vm._v("pg_hba.conf")]),_vm._v(" 让其用 "),_c('code',[_vm._v("md5")]),_vm._v(" 方式加密:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 9.1 是版本号")]),_vm._v("\n$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" vim /etc/postgresql/9.1/main/pg_hba.conf\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("这样修改: local      all     postgres     "),_c('s',[_vm._v("peer")]),_vm._v(" md5")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("sudo")]),_vm._v(" /etc/init.d/postgresql restart\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"新建用户和数据库"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#新建用户和数据库","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 新建用户和数据库")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("在默认的 Linux 账户 "),_c('code',[_vm._v("postgres")]),_vm._v(" 下，你可以创建创建一个新的用户:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-sql extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-sql"}},[_c('code',[_vm._v("$ postgres"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# CREATE USER egoist WITH PASSWORD 'your_password';")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-sql extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-sql"}},[_c('code',[_vm._v("$ postgres"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# CREATE DATABASE database_a;")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("之后给予数据库 "),_c('code',[_vm._v("database_a")]),_vm._v(" 的权限到用户 "),_c('code',[_vm._v("egoist")]),_vm._v(":")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-sql extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-sql"}},[_c('code',[_vm._v("$ postgres"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# GRANT ALL PRIVILEGES ON DATABASE database_a to egoist;")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"数据库相关查询"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#数据库相关查询","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 数据库相关查询")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h4',{attrs:{"id":"列出所有数据库"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#列出所有数据库","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 列出所有数据库")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 当前用户")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# \\l 或者 \\list")]),_vm._v("\n$ user"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# \\list")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 非 psql 交互模式下")]),_vm._v("\n$ psql -U username -l\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"推荐阅读"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#推荐阅读","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("推荐阅读")])])}]



/***/ }),

/***/ "./source/_posts/postgresql-simple-guide.md":
/*!**************************************************!*\
  !*** ./source/_posts/postgresql-simple-guide.md ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _postgresql_simple_guide_md_vue_type_template_id_6e354df3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postgresql-simple-guide.md?vue&type=template&id=6e354df3& */ "./source/_posts/postgresql-simple-guide.md?vue&type=template&id=6e354df3&");
/* harmony import */ var _postgresql_simple_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postgresql-simple-guide.md?vue&type=script&lang=js& */ "./source/_posts/postgresql-simple-guide.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _postgresql_simple_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _postgresql_simple_guide_md_vue_type_template_id_6e354df3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _postgresql_simple_guide_md_vue_type_template_id_6e354df3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/postgresql-simple-guide.md?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./source/_posts/postgresql-simple-guide.md?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_postgresql_simple_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./postgresql-simple-guide.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/postgresql-simple-guide.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_postgresql_simple_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/postgresql-simple-guide.md?vue&type=template&id=6e354df3&":
/*!*********************************************************************************!*\
  !*** ./source/_posts/postgresql-simple-guide.md?vue&type=template&id=6e354df3& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_postgresql_simple_guide_md_vue_type_template_id_6e354df3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./postgresql-simple-guide.md?vue&type=template&id=6e354df3& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/postgresql-simple-guide.md?vue&type=template&id=6e354df3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_postgresql_simple_guide_md_vue_type_template_id_6e354df3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_postgresql_simple_guide_md_vue_type_template_id_6e354df3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=38.bc96d3a9.js.map