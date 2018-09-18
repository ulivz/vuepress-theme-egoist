(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/tesing-javascript-apps-using-jest.md?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/tesing-javascript-apps-using-jest.md?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
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

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/tesing-javascript-apps-using-jest.md?vue&type=template&id=37ff4138&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/tesing-javascript-apps-using-jest.md?vue&type=template&id=37ff4138& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('p',[_vm._v("Jest 是 FaceBook 用来测试 JavaScript 应用的一套测试框架，这些应用当然也包括了 React 应用。它的优点之一是自带了对 React 的支持，同时也很容易支持其它框架。")]),_vm._v(" "),_c('p',[_vm._v("从最简单的开始，我们可以看看如何用 Jest 测试纯 JS 项目。")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._m(2),_vm._v(" "),_vm._m(3),_c('details',{staticStyle:{"margin-bottom":"30px"}},[_vm._m(4),_vm._v(" "),_c('p',[_vm._v("这里的 "),_c('code',[_vm._v("expect")]),_vm._v(" "),_c('code',[_vm._v("toBe")]),_vm._v(" 是 Jest 默认使用的断言语法，也就是用来比较 "),_c('code',[_vm._v("值")]),_vm._v(" 的 API，详见"),_c('a',{attrs:{"href":"https://facebook.github.io/jest/docs/en/using-matchers.html#content","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("相关文档"),_c('OutboundLink')],1),_vm._v("。")])]),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_c('p',[_vm._v("然后重新运行 jest 测试便通过了:")]),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_c('p',[_vm._v("当你要测试的代码引用了非 JS 文件时，Jest 就不知道如何使用这些文件了，例如你的 Webpack 项目中的一个文件:")]),_vm._v(" "),_vm._m(13),_vm._m(14),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_vm._m(17),_vm._v(" "),_vm._m(18),_vm._v(" "),_vm._m(19),_vm._m(20),_vm._v(" "),_c('p',[_vm._v("[^1]: Jest 默认使用 "),_c('code',[_vm._v("[ '**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)' ]")]),_vm._v(" 这些测试文件，当然这是"),_c('a',{attrs:{"href":"https://facebook.github.io/jest/docs/en/configuration.html#testmatch-array-string","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("可配置"),_c('OutboundLink')],1),_vm._v("的。\n[^2]: "),_c('code',[_vm._v(".vue")]),_vm._v(" 的 "),_c('code',[_vm._v("transform")]),_vm._v(" 可以使用社区的 "),_c('a',{attrs:{"href":"https://github.com/eddyerburgh/vue-jest","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("jest-vue"),_c('OutboundLink')],1),_vm._v("。")]),_vm._v(" "),_vm._m(21),_vm._v(" "),_c('p',[_vm._v("假设你要测试的是一个 Web 应用，依赖于一些浏览器 API 比如 "),_c('code',[_vm._v("window")]),_vm._v(" "),_c('code',[_vm._v("document")]),_vm._v("，它在 Jest 中同样可以正常运行，因为 Jest 默认使用了 "),_c('a',{attrs:{"href":"https://github.com/tmpvar/jsdom","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("js-dom"),_c('OutboundLink')],1),_vm._v(" 来模拟浏览器环境，不需要浏览器环境时可以通过使用命令行参数 "),_c('code',[_vm._v("--env node")]),_vm._v(" 或者"),_c('a',{attrs:{"href":"http://facebook.github.io/jest/docs/en/configuration.html#testenvironment-string","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("配置文件"),_c('OutboundLink')],1),_vm._v("来禁用。")]),_vm._v(" "),_vm._m(22),_vm._v(" "),_c('p',[_vm._v("当你期望某个值不会改变的时候，可以使用 snapshot 测试。简单地说，它就是记录这个值的状态到"),_c('a',{attrs:{"href":"https://github.com/facebook/jest/blob/master/examples/snapshot/__tests__/__snapshots__/link.react.test.js.snap","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("本地自动生成的 snapshot 文件"),_c('OutboundLink')],1),_vm._v("里，然后在下一次测试中用新的值来和其进行对比。这对 UI 之类的测试很有帮助:")]),_vm._v(" "),_vm._m(23),_vm._m(24),_vm._v(" "),_vm._m(25),_vm._v(" "),_c('p',[_vm._v("类似的，Snapshot 测试不止于 UI 测试中，假设你写了个 Markdown 解析器，你可以用它来确保解析出的内容不会改变:")]),_vm._v(" "),_vm._m(26),_c('p',[_vm._v("查看"),_c('a',{attrs:{"href":"https://facebook.github.io/jest/docs/en/snapshot-testing.html#content","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("相关文档"),_c('OutboundLink')],1),_vm._v("。")]),_vm._v(" "),_vm._m(27),_vm._v(" "),_c('p',[_vm._v("https://facebook.github.io/jest/docs/en/asynchronous.html#content")]),_vm._v(" "),_vm._m(28)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("假设你需要测试 "),_c('code',[_vm._v("sum.js")]),_vm._v(":")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("default")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("a"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" b"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" a "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("+")]),_vm._v(" b\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("你只需要对应地新建一个 "),_c('code',[_vm._v("sum.test.js")]),_vm._v("[^1]:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" sum "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'./sum'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("test")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'sum'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("expect")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("sum")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token number"}},[_vm._v("2")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("3")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("toBe")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token number"}},[_vm._v("5")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('summary',[_c('p',[_vm._v("关于这里的 "),_c('code',[_vm._v("expect")]),_vm._v(" 语法")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("然后在终端运行 "),_c('code',[_vm._v("jest")]),_vm._v(" 命令的时候就会自动找到这个文件，执行这里面的测试:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://i.loli.net/2017/11/26/5a1a6a9148ca3.png","alt":"jest"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("额，报错了，原来 Jest 默认只支持你所使用的 node.js 版本所支持的 JS 特性，例如 "),_c('code',[_vm._v("import")]),_vm._v(" "),_c('code',[_vm._v("export")]),_vm._v(" 就不支持，所以要么你的代码使用系统 node.js 兼容的语法写 (也就是使用 "),_c('code',[_vm._v("require")]),_vm._v(")，要么在这里使用 Babel 转义一下。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("在 Jest 中使用 Babel 很简单，只需要安装 "),_c('code',[_vm._v("babel-jest")]),_vm._v(" 并新建一个 "),_c('code',[_vm._v(".babelrc")]),_vm._v(" 加入你想要的配置就行了，Jest 会自动使用 "),_c('code',[_vm._v("babel-jest")]),_vm._v("。这里我们简单地使用 "),_c('code',[_vm._v("babel-preset-env")]),_vm._v(" 即可，对应的 "),_c('code',[_vm._v(".babelrc")]),_vm._v(" 是:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-json extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-json"}},[_c('code',[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"presets\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"env\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://i.loli.net/2017/11/26/5a1a6c085ba32.png","alt":"jest 2"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("对于 React 应用，基本和纯 JS 项目类似，不过你需要在 "),_c('code',[_vm._v(".babelrc")]),_vm._v(" 中配置对 "),_c('code',[_vm._v("JSX")]),_vm._v(" 的支持，在大多数时候你的项目本身就已经在使用 "),_c('code',[_vm._v(".babelrc")]),_vm._v(" 了，所以这一步甚至也省略掉了。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"资源文件"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#资源文件","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 资源文件")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'./style.css'")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("正如你需要在 Webpack 中配置了 "),_c('code',[_vm._v("css-loader")]),_vm._v(" 一样，你也需告诉 Jest 如何处理 CSS 文件。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("📝 "),_c('strong',[_vm._v("package.json:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-json extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-json"}},[_c('code',[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"jest\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"transform\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n      "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"^.+\\\\.(js|jsx)$\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"babel-jest\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n      "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"^.+\\\\.css$\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"<rootDir>/jest/css-transform.js\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('details',{staticStyle:{"margin-bottom":"30px"}},[_c('summary',[_c('p',[_vm._v("关于 babel-jest")])]),_vm._v(" "),_c('p',[_vm._v("当你手动在 "),_c('code',[_vm._v("package.json")]),_vm._v(" 里设置了 "),_c('code',[_vm._v("jest.transform")]),_vm._v(" 时 "),_c('code',[_vm._v("babel-jest")]),_vm._v(" 不再会被自动使用了，我们需要在这里手动配置。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("对应的 "),_c('code',[_vm._v("./jest/css-transform.js")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 大多数测试并不关心 CSS 文件里的内容")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 所以这里我们直接返回一个空的对象")]),_vm._v("\nmodule"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("exports "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("process")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'module.exports = {};'")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("getCacheKey")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// The output is always the same.")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'css-cache'")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("类似地，你可以使用 "),_c('code',[_vm._v("transform")]),_vm._v(" 来设定如何处理其它类型的文件，比如 "),_c('code',[_vm._v(".vue")]),_vm._v("[^2] "),_c('code',[_vm._v(".svg")]),_vm._v(" 文件。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"浏览器-api"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#浏览器-api","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 浏览器 API")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"snapshot-测试"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#snapshot-测试","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" Snapshot 测试")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" React "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'react'")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" Link "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'../Link.react'")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" renderer "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'react-test-renderer'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("it")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'renders correctly'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" tree "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" renderer\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("create")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v("<")]),_vm._v("Link page"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"http://www.facebook.com\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(">")]),_vm._v("Facebook"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("<")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v("/")]),_vm._v("Link"),_c('span',{attrs:{"class":"token operator"}},[_vm._v(">")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("toJSON")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("expect")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("tree"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("toMatchSnapshot")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("这确保了 "),_c('code',[_vm._v("<Link page=\"http://www.facebook.com\">Facebook</Link>")]),_vm._v(" 渲染出的内容不会出错。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("当你更改了 "),_c('code',[_vm._v("<Link>")]),_vm._v(" 组件的逻辑，需要更新 snapshot 文件时，可以加上 "),_c('code',[_vm._v("--updateSnapshot")]),_vm._v(" 或者 "),_c('code',[_vm._v("-u")]),_vm._v(" 来更新。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" renderMarkdown "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'./my-markdown-parser'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("test")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'render correctly'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" html "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("renderMarkdown")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'# markdown code'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("expect")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("html"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("toMatchSnapshot")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"异步代码测试"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#异步代码测试","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 异步代码测试")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("我就懒得写了... 反正用 "),_c('code',[_vm._v("Promise")]),_vm._v(" 或者 "),_c('code',[_vm._v("async/await")]),_vm._v(" 就对了。")])}]



/***/ }),

/***/ "./source/_posts/tesing-javascript-apps-using-jest.md":
/*!************************************************************!*\
  !*** ./source/_posts/tesing-javascript-apps-using-jest.md ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tesing_javascript_apps_using_jest_md_vue_type_template_id_37ff4138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tesing-javascript-apps-using-jest.md?vue&type=template&id=37ff4138& */ "./source/_posts/tesing-javascript-apps-using-jest.md?vue&type=template&id=37ff4138&");
/* harmony import */ var _tesing_javascript_apps_using_jest_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tesing-javascript-apps-using-jest.md?vue&type=script&lang=js& */ "./source/_posts/tesing-javascript-apps-using-jest.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tesing_javascript_apps_using_jest_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tesing_javascript_apps_using_jest_md_vue_type_template_id_37ff4138___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tesing_javascript_apps_using_jest_md_vue_type_template_id_37ff4138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/tesing-javascript-apps-using-jest.md?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./source/_posts/tesing-javascript-apps-using-jest.md?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_tesing_javascript_apps_using_jest_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./tesing-javascript-apps-using-jest.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/tesing-javascript-apps-using-jest.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_tesing_javascript_apps_using_jest_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/tesing-javascript-apps-using-jest.md?vue&type=template&id=37ff4138&":
/*!*******************************************************************************************!*\
  !*** ./source/_posts/tesing-javascript-apps-using-jest.md?vue&type=template&id=37ff4138& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_tesing_javascript_apps_using_jest_md_vue_type_template_id_37ff4138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./tesing-javascript-apps-using-jest.md?vue&type=template&id=37ff4138& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/tesing-javascript-apps-using-jest.md?vue&type=template&id=37ff4138&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_tesing_javascript_apps_using_jest_md_vue_type_template_id_37ff4138___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_tesing_javascript_apps_using_jest_md_vue_type_template_id_37ff4138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=45.f82943d6.js.map