(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/a-light-weight-localstorage-orm.md?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/a-light-weight-localstorage-orm.md?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/a-light-weight-localstorage-orm.md?vue&type=template&id=fb29a832&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/a-light-weight-localstorage-orm.md?vue&type=template&id=fb29a832& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_vm._m(0),_vm._v(" "),_c('p',[_vm._v("你可以简单地预览一下：")]),_vm._v(" "),_vm._m(1),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._m(4),_vm._v(" "),_vm._m(5),_c('p',[_vm._v("这样就查询并返回了一个对象:")]),_vm._v(" "),_vm._m(6),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_c('hr'),_vm._v(" "),_c('p',[_vm._v("更详细的使用可以参考这个用 Vue 和 LocalDB "),_c('a',{attrs:{"href":"http://output.jsbin.com/titeve","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("TodoMVC"),_c('OutboundLink')],1),_vm._v(" 演示和 "),_c('a',{attrs:{"href":"https://egoist.github.io/localdb/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("API"),_c('OutboundLink')],1),_vm._v("。")])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("之前做了一个类似 "),_c('code',[_vm._v("localStorage")]),_vm._v(" 的 "),_c('code',[_vm._v("orm")]),_vm._v(" 之类的东西，可以让你简单地像操作数据库一样地操作 "),_c('code',[_vm._v("localStorage")]),_vm._v("。因为打算做个记事本之类的应用需要在本地储存笔记并方便的进行查询所以建立了这个库。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-javascript extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-javascript"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("// localdb 会自动为新插入的 collcetion 生成 `_id`、`index` 和 `createdAt` ")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 以及 `updatedAt`")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// `_id` 是类似 MongoDB 的 objectId")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" User "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{attrs:{"class":"token class-name"}},[_vm._v("localdb")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'User'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'Array'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token boolean"}},[_vm._v("true")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" users "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  username"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'kevin'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  age"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("16")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  username"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'joe'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  age"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("19")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  username"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'zchan'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  age"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("12")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" opts "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  sort"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("1")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  sortBy"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'age'")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" users_fetched "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" User"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("override")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("users"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token boolean"}},[_vm._v("true")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("find")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("null")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" opts"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\nconsole"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("log")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token constant"}},[_vm._v("JSON")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("stringify")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("users_fetched"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("null")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("2")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("这样就能按照 "),_c('code',[_vm._v("age")]),_vm._v(" 递增输出这样的结果:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-json extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-json"}},[_c('code',[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"username\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"zchan\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"age\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("12")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"index\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("2")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"_id\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"560b780cfac748a940e57438\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"createdAt\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"2015-09-30T05:50:04.156Z\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"updatedAt\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"2015-09-30T05:50:04.156Z\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"username\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"kevin\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"age\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("16")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"index\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("0")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"_id\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"560b780ca4833a2e978efcb2\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"createdAt\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"2015-09-30T05:50:04.156Z\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"updatedAt\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"2015-09-30T05:50:04.156Z\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"username\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"joe\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"age\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("19")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"index\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("1")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"_id\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"560b780c1d6c1f81ca7bf2e9\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"createdAt\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"2015-09-30T05:50:04.156Z\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"updatedAt\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"2015-09-30T05:50:04.156Z\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("如果你想查询 "),_c('code',[_vm._v("username")]),_vm._v(" 为 "),_c('code',[_vm._v("zchan")]),_vm._v(" 的用户:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-javascript extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-javascript"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" query "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  username"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'zchan'")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" zchan "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" User"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("findOne")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("query"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\nconsole"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("log")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token constant"}},[_vm._v("JSON")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("stringify")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("zchan"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("null")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("2")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-json extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-json"}},[_c('code',[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"username\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"zchan\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"age\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("12")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"index\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("2")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"_id\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"560b780cfac748a940e57438\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"createdAt\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"2015-09-30T05:50:04.156Z\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"updatedAt\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"2015-09-30T05:50:04.156Z\"")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('code',[_vm._v(".find")]),_vm._v(" 和 "),_c('code',[_vm._v(".findOne")]),_vm._v(" 类似不过不限制数量且可以进行排序、分页查询等操作。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("甚至支持了 MongoDB 的 "),_c('code',[_vm._v("populate")]),_vm._v(" 特性，不过暂时只能查询一层嵌套:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-javascript extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-javascript"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("// populate another class, eg: your Post have a Author field")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" Post "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{attrs:{"class":"token class-name"}},[_vm._v("localdb")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'Post'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'Array'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" User "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{attrs:{"class":"token class-name"}},[_vm._v("localdb")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'User'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'Array'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// you should have the Author's objectId to create an instance of that class")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" author "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" User"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("extend")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'some_object_id'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\nPost"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("add")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  title"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'mt post title'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  author"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" author\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// then you can populate that field before .find or .findOne")]),_vm._v("\nPost"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("populate")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'author'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("findOne")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])}]



/***/ }),

/***/ "./source/_posts/a-light-weight-localstorage-orm.md":
/*!**********************************************************!*\
  !*** ./source/_posts/a-light-weight-localstorage-orm.md ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _a_light_weight_localstorage_orm_md_vue_type_template_id_fb29a832___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a-light-weight-localstorage-orm.md?vue&type=template&id=fb29a832& */ "./source/_posts/a-light-weight-localstorage-orm.md?vue&type=template&id=fb29a832&");
/* harmony import */ var _a_light_weight_localstorage_orm_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a-light-weight-localstorage-orm.md?vue&type=script&lang=js& */ "./source/_posts/a-light-weight-localstorage-orm.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _a_light_weight_localstorage_orm_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _a_light_weight_localstorage_orm_md_vue_type_template_id_fb29a832___WEBPACK_IMPORTED_MODULE_0__["render"],
  _a_light_weight_localstorage_orm_md_vue_type_template_id_fb29a832___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/a-light-weight-localstorage-orm.md?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./source/_posts/a-light-weight-localstorage-orm.md?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_a_light_weight_localstorage_orm_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./a-light-weight-localstorage-orm.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/a-light-weight-localstorage-orm.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_a_light_weight_localstorage_orm_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/a-light-weight-localstorage-orm.md?vue&type=template&id=fb29a832&":
/*!*****************************************************************************************!*\
  !*** ./source/_posts/a-light-weight-localstorage-orm.md?vue&type=template&id=fb29a832& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_a_light_weight_localstorage_orm_md_vue_type_template_id_fb29a832___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./a-light-weight-localstorage-orm.md?vue&type=template&id=fb29a832& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/a-light-weight-localstorage-orm.md?vue&type=template&id=fb29a832&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_a_light_weight_localstorage_orm_md_vue_type_template_id_fb29a832___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_a_light_weight_localstorage_orm_md_vue_type_template_id_fb29a832___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=16.49a13182.js.map