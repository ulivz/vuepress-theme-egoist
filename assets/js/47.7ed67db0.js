(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/the-most-lightweight-es2015-setup.md?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/the-most-lightweight-es2015-setup.md?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['target']
});

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/the-most-lightweight-es2015-setup.md?vue&type=template&id=79b2898c&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/the-most-lightweight-es2015-setup.md?vue&type=template&id=79b2898c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_vm._m(0),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":"http://babeljs.io/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Babel"),_c('OutboundLink')],1),_vm._v(" 可以说是编译 ES2015+ 代码到 ES5 的首要选择，它的可扩展性很高，基于插件几乎能做任何事。")]),_vm._v(" "),_c('p',[_vm._v("而 "),_c('a',{attrs:{"href":"https://buble.surge.sh/guide/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Buble"),_c('OutboundLink')],1),_vm._v(" 则去掉了这种可扩展性，只会转换能够用 ES5 实现并保证性能的新特性，同时这样也让你免去配置的步骤。")]),_vm._v(" "),_c('p',[_vm._v("对于下面这段代码，你可以通过编译结果看出它们设计上的不同:")]),_vm._v(" "),_vm._m(1),_c('p',[_vm._v("Babel 的结果:")]),_vm._v(" "),_vm._m(2),_c('p',[_vm._v("Buble 的结果:")]),_vm._v(" "),_vm._m(3),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_c('p',[_vm._v("Buble 暂时不支持编译 async/await 和 generator 函数，目前有以下几个工具作为替代:")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/MatAtBread/nodent","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("nodent"),_c('OutboundLink')],1),_vm._v(" (性能比 babel-plugin-tranform-async-to-generator 更好)")]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/leebyron/async-to-gen","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("async-to-gen"),_c('OutboundLink')],1),_vm._v(" (不支持编译 generator)")])]),_vm._v(" "),_c('p',[_vm._v("我一般会将 Rollup、Buble 以及 async-to-gen 配合使用:")]),_vm._v(" "),_vm._m(6),_c('p',[_vm._v("其实由于在开发 web app 的时候基本还是用 webpack 为主而且又是对 ES features 的需求不止于 ES2015，这个时候我一般还是选择用 Babel 编译。")]),_vm._v(" "),_c('p',[_vm._v("而对于可复用的 library，不太需要 async/await 或者只是针对 Node.js 环境的时候，使用 Buble 还是很理想的。")])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"用-buble-替换-babel"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#用-buble-替换-babel","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 用 Buble 替换 Babel")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("class")]),_vm._v(" "),_c('span',{attrs:{"class":"token class-name"}},[_vm._v("Foo")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("constructor")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("pos "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("0")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("say")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("word"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token template-string"}},[_c('span',{attrs:{"class":"token string"}},[_vm._v("`hello ")]),_c('span',{attrs:{"class":"token interpolation"}},[_c('span',{attrs:{"class":"token interpolation-punctuation punctuation"}},[_vm._v("${")]),_vm._v("world"),_c('span',{attrs:{"class":"token interpolation-punctuation punctuation"}},[_vm._v("}")])]),_c('span',{attrs:{"class":"token string"}},[_vm._v("`")])]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("walk")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("pos"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("++")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token string"}},[_vm._v("\"use strict\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" "),_c('span',{attrs:{"class":"token function-variable function"}},[_vm._v("_createClass")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("defineProperties")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("target"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" props"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("for")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" i "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("0")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" i "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("<")]),_vm._v(" props"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("length"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" i"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("++")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" descriptor "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" props"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_vm._v("i"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" descriptor"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("enumerable "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" descriptor"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("enumerable "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("||")]),_vm._v(" "),_c('span',{attrs:{"class":"token boolean"}},[_vm._v("false")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" descriptor"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("configurable "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token boolean"}},[_vm._v("true")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"value\"")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("in")]),_vm._v(" descriptor"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" descriptor"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("writable "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token boolean"}},[_vm._v("true")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" Object"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("defineProperty")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("target"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" descriptor"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("key"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" descriptor"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("Constructor"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" protoProps"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" staticProps"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("protoProps"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("defineProperties")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("Constructor"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("prototype"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" protoProps"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("staticProps"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("defineProperties")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("Constructor"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" staticProps"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" Constructor"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("_classCallCheck")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("instance"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" Constructor"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v("!")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("instance "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("instanceof")]),_vm._v(" "),_c('span',{attrs:{"class":"token class-name"}},[_vm._v("Constructor")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("throw")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{attrs:{"class":"token class-name"}},[_vm._v("TypeError")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"Cannot call a class as a function\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" "),_c('span',{attrs:{"class":"token function-variable function"}},[_vm._v("Foo")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("Foo")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token function"}},[_vm._v("_classCallCheck")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" Foo"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("pos "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("0")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("_createClass")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("Foo"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    key"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"say\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    value"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("say")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("word"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n      "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"hello \"")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("+")]),_vm._v(" world"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    key"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"walk\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    value"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("walk")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n      "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("pos"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("++")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\n  "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" Foo"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" "),_c('span',{attrs:{"class":"token function-variable function"}},[_vm._v("Foo")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("Foo")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("pos "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("0")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\nFoo"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("prototype"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function-variable function"}},[_vm._v("say")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("say")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("word"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"hello \"")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("+")]),_vm._v(" world"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\nFoo"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("prototype"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function-variable function"}},[_vm._v("walk")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("walk")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("pos"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("++")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("总的来说 Buble 的结果可读性更强、更简洁，而且设计初衷就是为了不引入 "),_c('code',[_vm._v("_createClass")]),_vm._v(" 之类的 runtime。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"async-await-和-generator-函数"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#async-await-和-generator-函数","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" async/await 和 generator 函数")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("// rollup.config.js")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("default")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  plugins"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token function"}},[_vm._v("require")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'rollup-plugin-async'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token function"}},[_vm._v("require")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'rollup-plugin-buble'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])}]



/***/ }),

/***/ "./source/_posts/the-most-lightweight-es2015-setup.md":
/*!************************************************************!*\
  !*** ./source/_posts/the-most-lightweight-es2015-setup.md ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _the_most_lightweight_es2015_setup_md_vue_type_template_id_79b2898c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./the-most-lightweight-es2015-setup.md?vue&type=template&id=79b2898c& */ "./source/_posts/the-most-lightweight-es2015-setup.md?vue&type=template&id=79b2898c&");
/* harmony import */ var _the_most_lightweight_es2015_setup_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./the-most-lightweight-es2015-setup.md?vue&type=script&lang=js& */ "./source/_posts/the-most-lightweight-es2015-setup.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _the_most_lightweight_es2015_setup_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _the_most_lightweight_es2015_setup_md_vue_type_template_id_79b2898c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _the_most_lightweight_es2015_setup_md_vue_type_template_id_79b2898c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/the-most-lightweight-es2015-setup.md?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./source/_posts/the-most-lightweight-es2015-setup.md?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_the_most_lightweight_es2015_setup_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./the-most-lightweight-es2015-setup.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/the-most-lightweight-es2015-setup.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_the_most_lightweight_es2015_setup_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/the-most-lightweight-es2015-setup.md?vue&type=template&id=79b2898c&":
/*!*******************************************************************************************!*\
  !*** ./source/_posts/the-most-lightweight-es2015-setup.md?vue&type=template&id=79b2898c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_the_most_lightweight_es2015_setup_md_vue_type_template_id_79b2898c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./the-most-lightweight-es2015-setup.md?vue&type=template&id=79b2898c& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/the-most-lightweight-es2015-setup.md?vue&type=template&id=79b2898c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_the_most_lightweight_es2015_setup_md_vue_type_template_id_79b2898c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_the_most_lightweight_es2015_setup_md_vue_type_template_id_79b2898c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=47.7ed67db0.js.map