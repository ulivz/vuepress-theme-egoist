(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['target']
});

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=template&id=2a1a051e&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=template&id=2a1a051e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_vm._m(0),_vm._v(" "),_c('p',[_vm._v("首先我觉得  "),_c('a',{attrs:{"href":"https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.8wsejnq0u","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Why I Left Gulp and Grunt for npm Scripts"),_c('OutboundLink')],1),_vm._v(" 里说的不用 gulp 的理由基本没有道理:")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_c('p',[_vm._v("额，难道直接用 npm package 就没有这些问题吗。")]),_vm._v(" "),_vm._m(6),_vm._v(" "),_c('p',[_vm._v("这不又是废话吗，写个插件还要把用的包的文档重新写一遍?")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('p',[_vm._v("好了，原文挑剔 gulp 的理由全被扳倒了，但是其中支持 npm 的理由倒是挺有道理:")]),_vm._v(" "),_vm._m(7),_vm._v(" "),_c('p',[_vm._v("你并不需要在 npm scripts 里用一些很高深的命令行，很多 unix 命令是需要花很长时间学习的。像类似 rm -rf 之类的命令很容易掌握，而且也有相应的 npm 包 "),_c('a',{attrs:{"href":"https://github.com/isaacs/rimraf","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("rimraf"),_c('OutboundLink')],1),_vm._v(" 让你使用，且跨平台支持。")]),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._m(10),_vm._v(" "),_c('p',[_vm._v("你可以直接执行一个文件来完成相应的构建工作，这让你几乎能做任何 gulp 能做的事:")]),_vm._v(" "),_vm._m(11),_vm._m(12),_vm._v(" "),_c('p',[_vm._v("因为你可能会在 npm scripts 里用一些 unix 命令，解决方案有很多，比如用 npm 包替代这些命令。")]),_vm._v(" "),_vm._m(13),_vm._v(" "),_c('p',[_vm._v("gulp tasks 也多了以后会变得很难维护，npm scripts 也是。解决方案是推荐写精简的 script，比如一个 script 只干一件事。或者很长很复杂的话你就需要专门放到一个 JS 文件里然后再在 npm scripts 里调用了。")]),_vm._v(" "),_vm._m(14),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_vm._v(" "),_vm._m(17),_vm._v(" "),_vm._m(18),_vm._v(" "),_c('p',[_vm._v("你的 npm scripts:")]),_vm._v(" "),_vm._m(19),_vm._m(20),_vm._v(" "),_vm._m(21),_vm._v(" "),_vm._m(22),_vm._m(23),_vm._v(" "),_vm._m(24),_vm._m(25),_vm._v(" "),_vm._m(26),_vm._v(" "),_vm._m(27)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"为什么用-npm-scripts"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#为什么用-npm-scripts","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("为什么用 npm scripts ?")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',[_c('li',[_vm._v("gulp 插件质量、数量和实时性")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("作者抱怨 gulp 插件的质量取决于插件作者，这可以理解，"),_c('strong',[_vm._v("但是 npm 的包同样取决于作者啊")]),_vm._v("。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("作者抱怨 gulp 插件的数量不如 npm，"),_c('strong',[_vm._v("这不是废话吗")]),_vm._v("。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("作者抱怨 gulp 插件不能及时更新，比如 babel 6 升级了 gulp-babel 并没有立刻升级。"),_c('strong',[_vm._v("又不是看直播，干嘛实时?")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',{attrs:{"start":"2"}},[_c('li',[_vm._v("debug 很痛苦，gulp crash 掉是因为某个插件吗还是因为版本问题")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',{attrs:{"start":"3"}},[_c('li',[_vm._v("不连贯的文档，比如 gulp-eslint 和 eslint，eslint 的文档就是 gulp 插件的文档好得多")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',[_c('li',[_vm._v("npm scripts 并不需要你很擅长命令行操作")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',{attrs:{"start":"2"}},[_c('li',[_vm._v("npm scripts 不够强大吗?")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-JSON extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-json"}},[_c('code',[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"scripts\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"clean\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"rimraf ./dist && mkdir dist\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"prebuild\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"npm run clean\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"build\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"cross-env NODE_ENV=production webpack\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("npm scripts 甚至支持 "),_c('code',[_vm._v("pre")]),_vm._v(" "),_c('code',[_vm._v("post")]),_vm._v(" 这些 hook 让你在相应的一个 task 之前和之后调用。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-JSON extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-json"}},[_c('code',[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"scripts\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"build\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"node build.js\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',{attrs:{"start":"3"}},[_c('li',[_vm._v("npm scripts 不是跨平台的")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',{attrs:{"start":"4"}},[_c('li',[_vm._v("可维护性")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"nswatch"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#nswatch","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("nswatch")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('blockquote',[_c('p',[_vm._v("https://github.com/egoist/nswatch")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("在 npm scripts 里只执行一个构建任务你可能不需要类似 "),_c('code',[_vm._v("gulp.watch")]),_vm._v(" 这样的功能，因为大部分构建工具都自带了 watch 功能，比如 "),_c('code',[_vm._v("webpack --watch")]),_vm._v(" 和 "),_c('code',[_vm._v("rollup --watch")]),_vm._v("，但是排除这种情况在构建多个任务的时候就不方便了。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("比如你要同时用一些 "),_c('code',[_vm._v(".jade")]),_vm._v(" "),_c('code',[_vm._v(".css")]),_vm._v(" "),_c('code',[_vm._v(".js")]),_vm._v(" 这些文件分别编译成 "),_c('code',[_vm._v(".html")]),_vm._v(" "),_c('code',[_vm._v(".css")]),_vm._v(" "),_c('code',[_vm._v(".js")]),_vm._v(" 文件，开发的时候怎么搞啊，怎么 watch 这些文件然后执行 rebuild 呢？好吧，你又想到了 "),_c('code',[_vm._v("gulp")]),_vm._v(" 😂")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("不过现在有 "),_c('code',[_vm._v("nswatch")]),_vm._v(" 了，为了解决类似的需求我今早洗澡之后写的。和 "),_c('code',[_vm._v("gulp.watch")]),_vm._v(" 类似，监听一些文件，不过这里是执行相应的 npm script。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-JSON extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-json"}},[_c('code',[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"scripts\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"build:js\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"node scripts/build js\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"build:html\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"node script/build html\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"build:css\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"node scripts/build css\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("然后你可以在 "),_c('code',[_vm._v("scripts/build.js")]),_vm._v(" 里用你喜欢的 npm 包，比如 rollup, jade, postcss，来编译相应文件。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("最后添加 "),_c('code',[_vm._v("nswatch")]),_vm._v(":")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-JSON extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-json"}},[_c('code',[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"scripts\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"watch\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"nswatch src/*.js --script build:js & nswatch src/*.css --script build:css  & nswatch src/*.jade --script build:html \"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("由于有三个任务所以写得很长，你可以把它放进单独文件 "),_c('code',[_vm._v("scripts/watch.js")]),_vm._v(":")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-JavaScript extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-javascript"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" watch "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("require")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'nswatch'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("watch")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'./src/*.js'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'build:js'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("watch")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'./src/*.jade'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'build:html'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("watch")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'./src/*.css'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'build:css'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("然后执行 "),_c('code',[_vm._v("node scripts/watch")]),_vm._v(" 一切都能运行了！")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("最后你可能还是需要把 "),_c('code',[_vm._v("node scripts/watch")]),_vm._v(" 写进 "),_c('code',[_vm._v("package.json")]),_vm._v("，以后都用 "),_c('code',[_vm._v("npm run watch")]),_vm._v(" 来执行:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-JSON extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-json"}},[_c('code',[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"scripts\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"watch\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"node scripts/watch\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])}]



/***/ }),

/***/ "./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md":
/*!*****************************************************************!*\
  !*** ./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kill_gulp_with_npm_scripts_and_nswatch_md_vue_type_template_id_2a1a051e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=template&id=2a1a051e& */ "./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=template&id=2a1a051e&");
/* harmony import */ var _kill_gulp_with_npm_scripts_and_nswatch_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=script&lang=js& */ "./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _kill_gulp_with_npm_scripts_and_nswatch_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _kill_gulp_with_npm_scripts_and_nswatch_md_vue_type_template_id_2a1a051e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _kill_gulp_with_npm_scripts_and_nswatch_md_vue_type_template_id_2a1a051e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_kill_gulp_with_npm_scripts_and_nswatch_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_kill_gulp_with_npm_scripts_and_nswatch_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=template&id=2a1a051e&":
/*!************************************************************************************************!*\
  !*** ./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=template&id=2a1a051e& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_kill_gulp_with_npm_scripts_and_nswatch_md_vue_type_template_id_2a1a051e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=template&id=2a1a051e& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/kill-gulp-with-npm-scripts-and-nswatch.md?vue&type=template&id=2a1a051e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_kill_gulp_with_npm_scripts_and_nswatch_md_vue_type_template_id_2a1a051e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_kill_gulp_with_npm_scripts_and_nswatch_md_vue_type_template_id_2a1a051e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=31.faf7e36b.js.map