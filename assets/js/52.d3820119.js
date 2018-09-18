(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/vue-jsx-full-guide.md?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/vue-jsx-full-guide.md?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/vue-jsx-full-guide.md?vue&type=template&id=fce5d6ca&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/vue-jsx-full-guide.md?vue&type=template&id=fce5d6ca& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_vm._m(0),_vm._v(" "),_c('p',[_vm._v("没怎么使用 React 或类似框架的同学可能不太了解 JSX，对此我不做赘述，简而言之这就是一种对 JavaScript 的补充，用来描述组件的 UI 部分，类似模板语言但它完整支持 JavaScript 本身的语言特性。")]),_vm._v(" "),_c('p',[_vm._v("参考 FaceBook "),_c('a',{attrs:{"href":"https://facebook.github.io/react/docs/introducing-jsx.html","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("关于 JSX 的介绍"),_c('OutboundLink')],1),_vm._v("。")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('p',[_vm._v("JSX 只是对 JavaScript 的补充并没有浏览器的支持，所以你需要用 "),_c('a',{attrs:{"href":"http://babeljs.io/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Babel"),_c('OutboundLink')],1),_vm._v(" 搭配 "),_c('a',{attrs:{"href":"https://github.com/vuejs/babel-preset-vue","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("babel-preset-vue"),_c('OutboundLink')],1),_vm._v(" 来获得完整的 Vue JSX 功能。")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('p',[_vm._v("对于以下单文件组件:")]),_vm._v(" "),_vm._m(5),_c('p',[_vm._v("被 webpack + vue-loader 处理后是:")]),_vm._v(" "),_vm._m(6),_c('p',[_c('small',[_c('em',[_c('a',{attrs:{"href":"https://jsx.egoist.moe/gist/8a264502933118ee7afe811139bb52f6","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("在线调试"),_c('OutboundLink')],1)])])]),_vm._v(" "),_c('p',[_vm._v("这里的 "),_c('a',{attrs:{"href":"https://vuejs.org/v2/guide/render-function.html#createElement-Arguments","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("createElement"),_c('OutboundLink')],1),_vm._v(" 函数也经常被叫做 "),_c('code',[_vm._v("h")]),_vm._v(" 函数，它被用来创建一个 "),_c('a',{attrs:{"href":"https://github.com/vuejs/vue/blob/dev/src/core/vdom/vnode.js","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("vNode"),_c('OutboundLink')],1),_vm._v(" (虚拟 DOM 节点)。你可以通过 "),_c('code',[_vm._v("this.$createElement")]),_vm._v(" 访问它但同时它也是 "),_c('code',[_vm._v("render")]),_vm._v(" 函数的第一个参数。")]),_vm._v(" "),_vm._m(7),_vm._v(" "),_c('p',[_vm._v("对于以下源代码:")]),_vm._v(" "),_vm._m(8),_c('p',[_vm._v("它会被转换成:")]),_vm._v(" "),_vm._m(9),_c('p',[_c('small',[_c('em',[_c('a',{attrs:{"href":"https://jsx.egoist.moe/gist/a2bda79dfa96053bc9bb5e743988796e","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("在线调试"),_c('OutboundLink')],1)])])]),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_vm._m(13),_c('p',[_vm._v("对应的 JSX 是:")]),_vm._v(" "),_vm._m(14),_vm._m(15),_vm._v(" "),_c('p',[_vm._v("完整的属性列表请参考相关 "),_c('a',{attrs:{"href":"https://github.com/vuejs/vue/blob/2deda3d4328eb7aea0adb0eaf01d68537ed0e0af/types/vnode.d.ts#L36-L60","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("typing"),_c('OutboundLink')],1),_vm._v(" 和 "),_c('a',{attrs:{"href":"https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("README"),_c('OutboundLink')],1),_vm._v("。")]),_vm._v(" "),_c('h3',{attrs:{"id":"v-model-插件页面"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#v-model-插件页面","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" v-model "),_c('sup',[_c('a',{attrs:{"href":"https://github.com/nickmessing/babel-plugin-jsx-v-model","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("插件页面"),_c('OutboundLink')],1)])]),_vm._v(" "),_c('p',[_vm._v("不久之前 Vue JSX 还不支持 "),_c('code',[_vm._v("v-model")]),_vm._v(" 因为这个转换比较复杂，感谢 "),_c('a',{attrs:{"href":"https://github.com/nickmessing","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("@nickmessing"),_c('OutboundLink')],1),_vm._v(" 的 "),_c('a',{attrs:{"href":"https://github.com/nickmessing/babel-plugin-jsx-v-model","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("babel-plugin-jsx-v-model"),_c('OutboundLink')],1),_vm._v(" 插件。")]),_vm._v(" "),_c('p',[_vm._v("对于以下 template:")]),_vm._v(" "),_vm._m(16),_c('p',[_vm._v("对应的 JSX 是:")]),_vm._v(" "),_vm._m(17),_c('p',[_vm._v("编译后:")]),_vm._v(" "),_vm._m(18),_c('p',[_c('small',[_c('em',[_c('a',{attrs:{"href":"https://jsx.egoist.moe/gist/7de4ca46ae8eb69dbd861e23c4603f64","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("在线演示"),_c('OutboundLink')],1)])])]),_vm._v(" "),_vm._m(19),_vm._v(" "),_c('h3',{attrs:{"id":"事件修饰符-插件页面"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#事件修饰符-插件页面","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 事件修饰符 "),_c('sup',[_c('a',{attrs:{"href":"https://github.com/nickmessing/babel-plugin-jsx-event-modifiers","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("插件页面"),_c('OutboundLink')],1)])]),_vm._v(" "),_c('p',[_vm._v("template 中的键盘事件修饰符在 JSX 中也有完整的支持。")]),_vm._v(" "),_c('p',[_vm._v("对于以下 template:")]),_vm._v(" "),_vm._m(20),_c('p',[_vm._v("对应的 JSX:")]),_vm._v(" "),_vm._m(21),_c('p',[_vm._v("转换之后的 JS:")]),_vm._v(" "),_vm._m(22),_c('p',[_c('small',[_c('em',[_c('a',{attrs:{"href":"https://jsx.egoist.moe/gist/8b99c95854d389df4772e4b677966403","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("在线演示"),_c('OutboundLink')],1)])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"什么是-jsx"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#什么是-jsx","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 什么是 JSX?")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"转换-jsx"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#转换-jsx","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 转换 JSX")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"使用-jsx"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#使用-jsx","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 使用 JSX")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"render-和-createelement-函数"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#render-和-createelement-函数","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" render 和 createElement 函数")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("你也许对 Vue 的 template (模板) 已经很熟悉了，如果你是用了 webpack + vue-loader 之类的组合，它其实是被转换成了 "),_c('code',[_vm._v("render")]),_vm._v(" 函数。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-vue extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-vue"}},[_c('code',[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("template")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v("\n  "),_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("div")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v("{{ msg }}"),_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("div")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v("\n"),_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("</")]),_vm._v("template")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("script")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_c('span',{attrs:{"class":"token script language-javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("default")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("data")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n      msg"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'hello'")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")]),_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("</")]),_vm._v("script")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("default")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("data")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n      msg"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'hello'")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("render")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" _vm "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" _h "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" _vm"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("$createElement"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" _c "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" _vm"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("_self"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("_c "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("||")]),_vm._v(" _h"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("_c")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'div'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_vm._v("_vm"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("_v")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("_vm"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("_s")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("_vm"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("msg"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("_c")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'div'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("在使用 JSX 的时候，类似 template，不过只会转换 "),_c('code',[_vm._v("render")]),_vm._v(" 函数中的 JSX 表达式。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-jsx extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-jsx"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("default")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("data")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n      msg"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'hello'")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("render")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("div")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("msg"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("</")]),_vm._v("div")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("default")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("data")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n      msg"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'hello'")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("render")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" h "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" arguments"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token number"}},[_vm._v("0")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("h")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("\n      "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'div'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n      "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("null")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n      "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("msg"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"vue-jsx-特性"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#vue-jsx-特性","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" Vue JSX 特性")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"和-react-jsx-的不同"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#和-react-jsx-的不同","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 和 React JSX 的不同")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("Vue JSX 中 createElement 的第二个参数 "),_c('code',[_vm._v("data")]),_vm._v(" 与 React 中的有些不同，它是个嵌套的对象并且每个顶层的属性由不同的模块处理，提供不同的功能，比如 "),_c('code',[_vm._v("class")]),_vm._v(" (在 React 中是 "),_c('code',[_vm._v("className")]),_vm._v(") 和 "),_c('code',[_vm._v("on")]),_vm._v(" 这两个属性:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token function"}},[_vm._v("createElement")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'div'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("class")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'foo'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'bar'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  on"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    click"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("click\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'foo'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-jsx extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-jsx"}},[_c('code',[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"token attr-name"}},[_vm._v("class")]),_c('span',{attrs:{"class":"token attr-value"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("\"")]),_vm._v("foo bar"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("\"")])]),_vm._v(" "),_c('span',{attrs:{"class":"token attr-name"}},[_vm._v("onClick")]),_c('span',{attrs:{"class":"token script language-javascript"}},[_c('span',{attrs:{"class":"token script-punctuation punctuation"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("click"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")])]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_c('span',{attrs:{"class":"token plain-text"}},[_vm._v("foo")]),_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("</")]),_vm._v("div")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("对于这种嵌套对象，你可以在 JSX 中用 camelCase 或者 kebeb-case (连字符) 来表示，换句话说这里 JSX 中的 "),_c('code',[_vm._v("onClick")]),_vm._v(" 也可以写成 "),_c('code',[_vm._v("on-click")]),_vm._v("，前者是为了让熟悉 React JSX 的同学更方便而加入的。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-html extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-html"}},[_c('code',[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("input")]),_vm._v(" "),_c('span',{attrs:{"class":"token attr-name"}},[_vm._v("v-model")]),_c('span',{attrs:{"class":"token attr-value"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("\"")]),_vm._v("username"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("\"")])]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-jsx extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-jsx"}},[_c('code',[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("input")]),_vm._v(" "),_c('span',{attrs:{"class":"token attr-name"}},[_vm._v("v-model")]),_c('span',{attrs:{"class":"token script language-javascript"}},[_c('span',{attrs:{"class":"token script-punctuation punctuation"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("username"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")])]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("/>")])]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" _mergeJSXProps "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"babel-helper-vue-jsx-merge-props\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" _this "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("h")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"input\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("_mergeJSXProps")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    domProps"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n      "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"value\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" _this"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("username\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    on"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n      "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"input\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" $event "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n        "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("$event"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("target"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("composing"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n        _this"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("username "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" $event"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("target"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("value"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n      "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    directives"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n      name"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"model\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n      value"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" _this"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("username\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("其实在 JSX 里的 "),_c('code',[_vm._v("v-model")]),_vm._v(" 就是语法糖，你当然可以手动书写对应的逻辑。而这个 Babel 插件则简化了这一步骤。JSX 中的 "),_c('code',[_vm._v("v-model")]),_vm._v(" 拥有 template 中同样的功能。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-html extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-html"}},[_c('code',[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("input")]),_vm._v(" "),_c('span',{attrs:{"class":"token attr-name"}},[_vm._v("@keydown.enter")]),_c('span',{attrs:{"class":"token attr-value"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("\"")]),_vm._v("handleEnter"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("\"")])]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v("\n"),_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("a")]),_vm._v(" "),_c('span',{attrs:{"class":"token attr-name"}},[_vm._v("@click.stop.prevent")]),_c('span',{attrs:{"class":"token attr-value"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("\"")]),_vm._v("doThat"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("\"")])]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("</")]),_vm._v("a")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-jsx extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-jsx"}},[_c('code',[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("input")]),_vm._v(" "),_c('span',{attrs:{"class":"token attr-name"}},[_c('span',{attrs:{"class":"token namespace"}},[_vm._v("onKeydown:")]),_vm._v("enter")]),_c('span',{attrs:{"class":"token script language-javascript"}},[_c('span',{attrs:{"class":"token script-punctuation punctuation"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("handleEnter"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")])]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_c('span',{attrs:{"class":"token plain-text"}},[_vm._v("\n// 多个修饰符用 `-` 连字符连接\n")]),_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("a")]),_vm._v(" "),_c('span',{attrs:{"class":"token attr-name"}},[_c('span',{attrs:{"class":"token namespace"}},[_vm._v("onClick:")]),_vm._v("stop-prevent")]),_c('span',{attrs:{"class":"token script language-javascript"}},[_c('span',{attrs:{"class":"token script-punctuation punctuation"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("doThat"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")])]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_c('span',{attrs:{"class":"token plain-text"}},[_vm._v("Click")]),_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("</")]),_vm._v("a")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_c('span',{attrs:{"class":"token plain-text"}},[_vm._v("\n")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" _this "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("h")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"a\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    on"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n      "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"click\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" $event "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n        $event"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("stopPropagation")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n        $event"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("preventDefault")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\n        _this"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("doThat")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("$event"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n      "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"Click\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n")])])])}]



/***/ }),

/***/ "./source/_posts/vue-jsx-full-guide.md":
/*!*********************************************!*\
  !*** ./source/_posts/vue-jsx-full-guide.md ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_jsx_full_guide_md_vue_type_template_id_fce5d6ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-jsx-full-guide.md?vue&type=template&id=fce5d6ca& */ "./source/_posts/vue-jsx-full-guide.md?vue&type=template&id=fce5d6ca&");
/* harmony import */ var _vue_jsx_full_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-jsx-full-guide.md?vue&type=script&lang=js& */ "./source/_posts/vue-jsx-full-guide.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vue_jsx_full_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vue_jsx_full_guide_md_vue_type_template_id_fce5d6ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vue_jsx_full_guide_md_vue_type_template_id_fce5d6ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/vue-jsx-full-guide.md?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./source/_posts/vue-jsx-full-guide.md?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_vue_jsx_full_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./vue-jsx-full-guide.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/vue-jsx-full-guide.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_vue_jsx_full_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/vue-jsx-full-guide.md?vue&type=template&id=fce5d6ca&":
/*!****************************************************************************!*\
  !*** ./source/_posts/vue-jsx-full-guide.md?vue&type=template&id=fce5d6ca& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_vue_jsx_full_guide_md_vue_type_template_id_fce5d6ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./vue-jsx-full-guide.md?vue&type=template&id=fce5d6ca& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/vue-jsx-full-guide.md?vue&type=template&id=fce5d6ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_vue_jsx_full_guide_md_vue_type_template_id_fce5d6ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_vue_jsx_full_guide_md_vue_type_template_id_fce5d6ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=52.d3820119.js.map