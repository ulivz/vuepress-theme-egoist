(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/node-js-module-style-guide.md?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/node-js-module-style-guide.md?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['target']
});

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/node-js-module-style-guide.md?vue&type=template&id=15940ac7&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/node-js-module-style-guide.md?vue&type=template&id=15940ac7& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('p',[_vm._v("JavaScript 代码一向的特点就是难以维护，保持一个良好的代码、组织风格有助于提升效率、重构代码、添加新功能、单元测试等等。")]),_vm._v(" "),_c('p',[_vm._v("我总结了一下写了 200 个 NPM package 之后的一些个人经验和习惯。")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('p',[_vm._v("使用 "),_c('a',{attrs:{"href":"http://yeoman.io","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("yeoman"),_c('OutboundLink')],1),_vm._v("。如果你喜欢在代码中使用分号和用 travis 来测试，推荐 "),_c('a',{attrs:{"href":"https://github.com/sindresorhus","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("sindresorhus"),_c('OutboundLink')],1),_vm._v(" 用的 "),_c('a',{attrs:{"href":"https://github.com/sindresorhus/generator-nm","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("generator-nm"),_c('OutboundLink')],1),_vm._v("。如果你不喜欢分号并且用 circle 来测试，推荐我用的 "),_c('a',{attrs:{"href":"https://github.com/egoist/generator-esnm","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("generator-esnm"),_c('OutboundLink')],1),_vm._v("。")]),_vm._v(" "),_c('p',[_vm._v("想要定制你的 README.md ? "),_c('a',{attrs:{"href":"https://github.com/IonicaBizau/blah","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("blah"),_c('OutboundLink')],1),_vm._v(" 可以为你定制生成 README.md 以及更多提升效率的功能。")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('p',[_vm._v("每一个具有单独意义的代码片段前都推荐写注释，就算再简单的代码你隔几天看也不可能一秒看出它在干什么，而有了注释就可以。对于复杂且意义重大的代码尽量写完整的 jsdoc 来说明。")]),_vm._v(" "),_c('p',[_vm._v("另一个原因就是这样可以让你的代码显得更格式化，代码挤在一堆很傻且不美观。而且你也可以自动从你代码的 jsdoc 生成 api doc！")]),_vm._v(" "),_vm._m(3),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_c('p',[_vm._v("对于分号的问题不作讨论，加不加都行。")]),_vm._v(" "),_c('p',[_vm._v("对于异步代码，尽量不要使用 callback 而是改成 Promise，并且把 HTTP 请求封装进单独的模块，这样更方便配合 "),_c('a',{attrs:{"href":"https://github.com/tj/co","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("co"),_c('OutboundLink')],1),_vm._v(" 来使用。")]),_vm._v(" "),_vm._m(7),_vm._m(8),_vm._v(" "),_c('p',[_vm._v("在 async/await 没被 v8 引擎实现之前用 co 都还是第一选择，除非某些情况你使用了 babel 那你可以考虑使用 async/await。不过即使现在用 co 在将来 async/await api 被实现的时候也能轻松地迁移过去。")]),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_c('p',[_vm._v("保持良好代码风格的方法之一就是 lint 你的代码，选择你习惯的代码风格，用编辑器实时 lint 或者添加一些 git hook 在 commit 的时候 lint 也可以。")]),_vm._v(" "),_c('p',[_vm._v("我目前使用 "),_c('a',{attrs:{"href":"https://github.com/sindresorhus/xo","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("xo"),_c('OutboundLink')],1),_vm._v(" 来检测代码，它默认无需配置但你可以根据你的喜好调整，基于 ESLint 。如果你喜欢这个风格也可以直接在 ESlint 中使用它的"),_c('a',{attrs:{"href":"https://github.com/sindresorhus/eslint-config-xo","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("配置文件"),_c('OutboundLink')],1),_vm._v("。")]),_vm._v(" "),_vm._m(11),_vm._v(" "),_c('p',[_vm._v("写测试是很有趣的，当且仅当你用 "),_c('a',{attrs:{"href":"https://github.com/sindresorhus/ava","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("AVA"),_c('OutboundLink')],1),_vm._v(" 的时候。")]),_vm._v(" "),_vm._m(12),_vm._v(" "),_c('p',[_vm._v("我使用 AVA 的主要原因是:")]),_vm._v(" "),_vm._m(13),_vm._v(" "),_vm._m(14),_vm._v(" "),_vm._m(15),_vm._v(" "),_c('p',[_vm._v("尽量描述你干了什么事:")]),_vm._v(" "),_vm._m(16),_c('p',[_vm._v("更好的做法是使用 "),_c('a',{attrs:{"href":"https://github.com/commitizen/cz-cli","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("commitizen"),_c('OutboundLink')],1),_vm._v(" 来规范你的 commit message 格式。")]),_vm._v(" "),_vm._m(17),_vm._v(" "),_vm._m(18),_vm._v(" "),_vm._m(19),_vm._v(" "),_c('p',[_vm._v("使用 "),_c('a',{attrs:{"href":"https://github.com/semantic-release/semantic-release","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("semantic-release"),_c('OutboundLink')],1),_vm._v(" 可以自动分析你的 commit message 然后根据这些推测你的代码改动来进行语义化的版本号升级并自动更新 changelog，"),_c('a',{attrs:{"href":"https://github.com/egoist/tooling/releases","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("这些"),_c('OutboundLink')],1),_vm._v(" 就是自动生成的。")]),_vm._v(" "),_vm._m(20),_vm._v(" "),_c('p',[_vm._v("200 more modules? Exciting! ✨")])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"初始化一个项目"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#初始化一个项目","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("初始化一个项目")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("不再使用 "),_c('code',[_vm._v("npm init")]),_vm._v("。因为除了 "),_c('code',[_vm._v("package.json")]),_vm._v(" 还有一些额外的配置文件，比如 "),_c('code',[_vm._v("circle.yml")]),_vm._v("、"),_c('code',[_vm._v(".editorconfig")]),_vm._v("、"),_c('code',[_vm._v("LICENSE")]),_vm._v(" 、"),_c('code',[_vm._v("README.md")]),_vm._v(" 等等。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"注释"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#注释","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("注释")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("/**\t\n * Module dependencies\n */")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" path "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("require")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'path'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("/**\n * Reverse array but not change itself\n *\n * @param {Array} names\n * @return {Array}\n */")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("rev")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("names"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" names"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("concat")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("reverse")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"编写可复用模块"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#编写可复用模块","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("编写可复用模块")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("对于一个项目中多次使用（>1）的代码，推荐放入单独的文件作为模块使用。"),_c('br'),_vm._v("\n对于更为通用的代码尽量打包进一个单独的 npm module 来使用。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"代码风格指南"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#代码风格指南","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("代码风格指南")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("// fetchData.js")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 老式回调风格")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" request "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("require")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'superagent'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\nmodule"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function-variable function"}},[_vm._v("exports")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("callback"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\trequest\n\t\t"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("get")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'xxx.json'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("end")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("err"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" res"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t\t\t"),_c('span',{attrs:{"class":"token function"}},[_vm._v("callback")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("res"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// app.js")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 调用它")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" fetchData "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("require")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'./fetchData'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\nmodule"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function-variable function"}},[_vm._v("exports")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token function"}},[_vm._v("fetchData")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("data "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t\tconsole"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("log")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("data"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// fetchData.js")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 无阻塞同步代码风格")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" fetch "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("require")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'node-fetch'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\nmodule"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("exports "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" co"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("wrap")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v("*")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" data "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("yield")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("fetch")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'xxx.json'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("then")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("data "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" data"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("json")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" data\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// app.js")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 调用它")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" fetchData "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("require")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'./fetchData'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\nmodule"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("exports "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" co"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("wrap")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v("*")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" data "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("yield")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("fetchData")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\tconsole"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("log")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("data"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('strong',[_vm._v("还使用 co? 不是有 async/await 吗?")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('blockquote',[_c('p',[_vm._v("co is a stepping stone towards ES7 async/await -- TJ Holowaychuk")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"eslint"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#eslint","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("ESLint")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"测试"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#测试","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("测试")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://camo.githubusercontent.com/fc55513ee5cb412b2b0d1540032b602ed0142dbe/68747470733a2f2f63646e2e7261776769742e636f6d2f73696e647265736f726875732f6176612f666531636561316361336432633835313863306363333965633862653539326265616239303535382f6d656469612f6c6f676f2e737667","alt":"ava"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_vm._v("很快")]),_vm._v(" "),_c('li',[_vm._v("语法简洁")]),_vm._v(" "),_c('li',[_vm._v("内置 ES2015/2016")]),_vm._v(" "),_c('li',[_vm._v("many more...")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"commit-风格"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#commit-风格","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("Commit")]),_vm._v(" 风格")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("不使用没有意义的 Commit 信息，比如单纯只写个 "),_c('code',[_vm._v("fix")]),_vm._v("、"),_c('code',[_vm._v("update")]),_vm._v("、"),_c('code',[_vm._v("change")]),_vm._v("。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" commit -m "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"fix tweak on ie9\"")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" commit -m "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"release 0.0.1\"")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" commit -m "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"refactor to use es2015\"")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" commit -m "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"🔥\"")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png","alt":"commitizen"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"semantic-release"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#semantic-release","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("Semantic-Release")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("发布 NPM 模块是很让人困扰的一步，你需要手动 bump version，需要执行 "),_c('code',[_vm._v("npm test")]),_vm._v(" 来看是否有错，然后再手动执行 "),_c('code',[_vm._v("npm publish")]),_vm._v("，这些步骤可以被规范且自动化。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"_2016"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#_2016","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("2016")])])}]



/***/ }),

/***/ "./source/_posts/node-js-module-style-guide.md":
/*!*****************************************************!*\
  !*** ./source/_posts/node-js-module-style-guide.md ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_js_module_style_guide_md_vue_type_template_id_15940ac7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-js-module-style-guide.md?vue&type=template&id=15940ac7& */ "./source/_posts/node-js-module-style-guide.md?vue&type=template&id=15940ac7&");
/* harmony import */ var _node_js_module_style_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-js-module-style-guide.md?vue&type=script&lang=js& */ "./source/_posts/node-js-module-style-guide.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _node_js_module_style_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _node_js_module_style_guide_md_vue_type_template_id_15940ac7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_js_module_style_guide_md_vue_type_template_id_15940ac7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/node-js-module-style-guide.md?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./source/_posts/node-js-module-style-guide.md?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_node_js_module_style_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./node-js-module-style-guide.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/node-js-module-style-guide.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_node_js_module_style_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/node-js-module-style-guide.md?vue&type=template&id=15940ac7&":
/*!************************************************************************************!*\
  !*** ./source/_posts/node-js-module-style-guide.md?vue&type=template&id=15940ac7& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_node_js_module_style_guide_md_vue_type_template_id_15940ac7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./node-js-module-style-guide.md?vue&type=template&id=15940ac7& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/node-js-module-style-guide.md?vue&type=template&id=15940ac7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_node_js_module_style_guide_md_vue_type_template_id_15940ac7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_node_js_module_style_guide_md_vue_type_template_id_15940ac7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=39.60d2fc33.js.map