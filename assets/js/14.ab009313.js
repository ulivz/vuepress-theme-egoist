(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/2016-front-end-primer.md?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/2016-front-end-primer.md?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/2016-front-end-primer.md?vue&type=template&id=2d6591c8&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/2016-front-end-primer.md?vue&type=template&id=2d6591c8& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('p',[_vm._v("年初在 V2EX 看到很多人发帖问前端如何入门，我姑且来分享一下我的经验。")]),_vm._v(" "),_c('p',[_vm._v("或许你不知道我是谁，不过如果你对前端有兴趣，都可以联系我帮你 Review 代码、提供改进建议，这有我的 "),_c('a',{attrs:{"href":"https://github.com/egoist","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("GitHub"),_c('OutboundLink')],1),_vm._v(" 地址。")]),_vm._v(" "),_c('p',[_vm._v("我假设阅读者只了解过简单的 HTML/CSS。")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('p',[_vm._v("CSS 是层叠样式表（Cascading Style Sheets）的缩写，它是用来定义你的 HTML 的展现形式的一种语言。比如让你的 HTML 里的文字显示不同字体，一个元素显示不同的高度。")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_c('p',[_vm._v("假设你有两个网页，它们共用一个导航栏（header），然后只有主体（content）部分显示不同的内容，在已有知识背景下你只能做两个网页，把导航栏的代码复制两次。")]),_vm._v(" "),_c('p',[_vm._v("于是有了模板引擎，比如 "),_c('a',{attrs:{"href":"https://github.com/pugjs/pug","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("pug"),_c('OutboundLink')],1),_vm._v("，他可以让你复用重复的模板，减少代码量，提高可维护性。")]),_vm._v(" "),_vm._m(6),_vm._v(" "),_c('p',[_vm._v("看下面这段代码:")]),_vm._v(" "),_vm._m(7),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._v(" "),_c('p',[_vm._v("这是有了 CSS 处理器之后的代码:")]),_vm._v(" "),_vm._m(10),_c('p',[_vm._v("嵌套的风格让作用域更清晰，你同时可以尽可能地只用标准的 CSS 属性然后让 CSS 处理器帮你兼容其它浏览器。推荐使用 "),_c('a',{attrs:{"href":"https://github.com/postcss/postcss","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("PostCSS"),_c('OutboundLink')],1),_vm._v("，它本身并不改变你的 CSS 代码，但它把你的代码抽象成一个 JavaScript 对象让你能够通过插件来随心所欲地进行操作，比如实现嵌套风格以及自动加 "),_c('code',[_vm._v("-moz")]),_vm._v(" "),_c('code',[_vm._v("-webkit")]),_vm._v(" 这些前缀。你可以自己写插件同时它已经有大量"),_c('a',{attrs:{"href":"https://github.com/postcss/postcss/blob/master/docs/plugins.md","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("现成的插件"),_c('OutboundLink')],1),_vm._v("供你使用。")]),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_c('p',[_vm._v("现在你知道了 HTML/CSS 在一起使用的时候能干什么，也知道了用模板引擎、CSS 处理器可以让你更好地写 HTML/CSS。要记住，「更好」也许只是在代码量增大的情况下更明显。")]),_vm._v(" "),_c('p',[_vm._v("那么这些模板引擎和 CSS 处理器是怎么实现的？很多都是用的 JavaScript。")]),_vm._v(" "),_c('p',[_vm._v("推荐阅读: "),_c('a',{attrs:{"href":"http://learn.shayhowe.com/html-css/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Learn to Code HTML & CSS"),_c('OutboundLink')],1),_vm._v(" 正如其松散的特性一样，你需要多使用才能更好地掌握用法。")]),_vm._v(" "),_vm._m(13),_vm._v(" "),_c('p',[_vm._v("JavaScript 是一门真正的语言，它简单且强大。（以下简称 JS）")]),_vm._v(" "),_c('p',[_vm._v("正如 HTML/CSS 是用于网页的样式呈现，JS （在过去）则是用于网页的交互操作上，比如用户点击了一个按钮然后弹出一个框，这些需要 JS 完成。")]),_vm._v(" "),_c('p',[_vm._v("JS 本身并不具有「监听用户点击」这一功能，在浏览器上，现代浏览器都内置了网页 DOM API，它提供了一套 JS 接口，让你可以用 JS 调用来实现相应功能，而这些功能本身是基于更低级的 C/C++ 语言实现的。")]),_vm._v(" "),_c('p',[_vm._v("因此，一名及格的前端需要掌握 JS 的基础，比如变量、数组、函数这些几乎所有语言都有的特性，然后就是 DOM API，缺了这个实现网页交互就是纸上谈兵。")]),_vm._v(" "),_c('p',[_vm._v("推荐阅读: "),_c('a',{attrs:{"href":"https://developer.mozilla.org/zh-CN/docs/Web/API","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("MDN Web API"),_c('OutboundLink')],1),_vm._v(" 非常全，需要更渐进的指南建议 Google。")]),_vm._v(" "),_c('p',[_vm._v("至于学习 JS 这门语言，推荐三本众所周知的，你并不需要全部都看，挑一本或两本尽量搞清楚就行了:")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://book.douban.com/subject/10549733/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("JavaScript 权威指南"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://book.douban.com/subject/10546125/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("JavaScript 高级程序设计"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://book.douban.com/subject/3590768/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("JavaScript 语言精粹"),_c('OutboundLink')],1)])]),_vm._v(" "),_vm._m(14),_vm._v(" "),_c('p',[_vm._v("刚才说过，过去的 JS 就是 JS 本身加上浏览器的 DOM API，于是就有人想到了：能不能把浏览器 DOM API 换成用户操作系统的 API？这样 JS 看起来就更像一门「真正的语言」，即可以在用户本地环境而不只是在浏览器中运行。")]),_vm._v(" "),_c('p',[_vm._v("幸好，谷歌浏览器（Chrome）使用的 JavaScript 运行环境（v8）发展到近几年已经能非常快地将 JS 代码转为机器码，于是 Node.js 的先驱们就成立了这个组织，基于 Chrome v8 引擎实现了一个跨平台 JavaScript 运行环境 —— 即现在非常流行的 Node.js。")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('p',[_vm._v("这样的感觉是不是很好? JavaScript 开发者的工具也能用 JavaScript 开发了！这才是副标题里描述的「easy and powerful」的前提。")]),_vm._v(" "),_vm._m(15),_vm._v(" "),_c('p',[_vm._v("大同小异，如果你在之前知道了如何学习 JavaScript。无非是 JS 本身加上 Node.js 提供的 API 而已。你可以直接打开 Node.js 官网查看其 API。")]),_vm._v(" "),_c('p',[_vm._v("Node.js 只是一个运行环境，类似于 Java 的 JVM，最重要的还是 JavaScript 本身。")]),_vm._v(" "),_vm._m(16),_vm._v(" "),_c('p',[_vm._v("很大的可能你现在都是在用 ES5 标准的 JavaScript 语法，而 ES6 则是 TC39(负责制定 JavaScript 语言标准的机构) 在 2015 年新推出的语言标准。")]),_vm._v(" "),_vm._m(17),_vm._v(" "),_vm._m(18),_vm._v(" "),_c('p',[_vm._v("说得差不多了，不过你可能奇怪为什么不介绍如何学习一些 JS 框架呢？比如 jQuery、Angular、React、Vue 这些。")]),_vm._v(" "),_c('p',[_vm._v("OK，下期就是这些框架的介绍，同时以后会介绍一些构建工具和其它相关内容。")])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"html"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#html","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("HTML")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("HTML 没有了 CSS 就什么都不是，它相当于给网页各个区域命名，然后让你可以进行更多的操作。比如头部导航栏，你经常会给它起个名字叫 "),_c('code',[_vm._v("header")]),_vm._v("。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"css"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#css","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("CSS")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"html-css"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#html-css","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("HTML+CSS")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("HTML 和 CSS 都是语法非常"),_c('strong',[_vm._v("松散")]),_vm._v("的语言，这样的导致了它们入门非常简单，然而一旦代码量变大维护就会很困难。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"模板引擎"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#模板引擎","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 模板引擎")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"css-处理器"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#css-处理器","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" CSS 处理器")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-css extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-css"}},[_c('code',[_c('span',{attrs:{"class":"token selector"}},[_vm._v(".post")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token property"}},[_vm._v("font-size")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" 14px"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token property"}},[_vm._v("-webkit-box-shadow")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" 0 0 1px #ccc"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token property"}},[_vm._v("-moz-box-shadow")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" 0 0 1px #ccc"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token property"}},[_vm._v("box-shadow")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" 0 0 1px #ccc"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token selector"}},[_vm._v(".post .post-content")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token property"}},[_vm._v("font-size")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" 16px"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token selector"}},[_vm._v(".post .post-content .post-date")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token property"}},[_vm._v("color")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" #999"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("你会发现上面的 "),_c('code',[_vm._v("box-shadow")]),_vm._v(" 写了三次，以便支持不同内核浏览器下的 "),_c('code',[_vm._v("box-shadow")]),_vm._v(" 这个属性。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("还有随着代码量增大像 "),_c('code',[_vm._v(".post .post-content .post-date")]),_vm._v(" 这样长的定义会越来越长。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-css extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-css"}},[_c('code',[_c('span',{attrs:{"class":"token selector"}},[_vm._v(".post")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token property"}},[_vm._v("font-size")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" 14px"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token property"}},[_vm._v("box-shadow")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" 0 0 1px #ccc"),_c('span',{attrs:{"class":"token selector"}},[_vm._v(";\n\t.content")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token property"}},[_vm._v("font-size")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" 16px"),_c('span',{attrs:{"class":"token selector"}},[_vm._v(";\n\t\t.date")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t\t\t"),_c('span',{attrs:{"class":"token property"}},[_vm._v("color")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" #999"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("要记住的是，它只是将你"),_c('strong',[_vm._v("自定义的 CSS 风格")]),_vm._v("转换成符合浏览器标准的 CSS，至于为什么？标准的 CSS 不够好用呗，比如刚才遇到的问题。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"html-css-小结"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#html-css-小结","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("HTML+CSS 小结")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"javascript"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#javascript","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("JavaScript")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"node-js"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#node-js","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("Node.js")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"如何学习-node-js"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#如何学习-node-js","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 如何学习 Node.js")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"es6"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#es6","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("ES6")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('strong',[_vm._v("为什么我要学新的 ES6 标准?")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_vm._v("你不必。因为 ES6 及以后的任何一个新的 JS 标准都是向后兼容的，也就是说任何你现在写的代码也是符合未来版本的 JS 的标准的。")]),_vm._v(" "),_c('li',[_vm._v("为什么不？试试又不会怀孕，而且你会有眼前一亮的感觉。任何语言都是在进化的，特别是前端发展那么快。")])])}]



/***/ }),

/***/ "./source/_posts/2016-front-end-primer.md":
/*!************************************************!*\
  !*** ./source/_posts/2016-front-end-primer.md ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _2016_front_end_primer_md_vue_type_template_id_2d6591c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2016-front-end-primer.md?vue&type=template&id=2d6591c8& */ "./source/_posts/2016-front-end-primer.md?vue&type=template&id=2d6591c8&");
/* harmony import */ var _2016_front_end_primer_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2016-front-end-primer.md?vue&type=script&lang=js& */ "./source/_posts/2016-front-end-primer.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _2016_front_end_primer_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _2016_front_end_primer_md_vue_type_template_id_2d6591c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _2016_front_end_primer_md_vue_type_template_id_2d6591c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/2016-front-end-primer.md?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./source/_posts/2016-front-end-primer.md?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_2016_front_end_primer_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./2016-front-end-primer.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/2016-front-end-primer.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_2016_front_end_primer_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/2016-front-end-primer.md?vue&type=template&id=2d6591c8&":
/*!*******************************************************************************!*\
  !*** ./source/_posts/2016-front-end-primer.md?vue&type=template&id=2d6591c8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_2016_front_end_primer_md_vue_type_template_id_2d6591c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./2016-front-end-primer.md?vue&type=template&id=2d6591c8& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/2016-front-end-primer.md?vue&type=template&id=2d6591c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_2016_front_end_primer_md_vue_type_template_id_2d6591c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_2016_front_end_primer_md_vue_type_template_id_2d6591c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=14.ab009313.js.map