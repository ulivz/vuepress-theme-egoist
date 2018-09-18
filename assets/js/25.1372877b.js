(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/draw-chat-message-with-canvas.md?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/draw-chat-message-with-canvas.md?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['target']
});

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/draw-chat-message-with-canvas.md?vue&type=template&id=00777bb0&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/draw-chat-message-with-canvas.md?vue&type=template&id=00777bb0& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('p',[_vm._v("我不是个太求上进的人，对大多数事物都是浅尝辄止，喜欢卖弄自己一些一知半解的技巧。")]),_vm._v(" "),_c('p',[_vm._v("对于 canvas 我不甚了解，因为自己平时没有能用到的地方（毕竟这在我的舒适区之外）。今天我对一个感兴趣已久的表情包再度萌生了兴趣，比如其中一个：")]),_vm._v(" "),_c('img',{attrs:{"src":"https://i.loli.net/2017/09/15/59bbde6f0df7c.jpeg","alt":"sticker","width":"300"}}),_vm._v(" "),_c('p',[_c('em',[_c('a',{attrs:{"href":"https://t.me/addstickers/MadeInBitinn","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("source: https://t.me/addstickers/MadeInBitinn"),_c('OutboundLink')],1)])]),_vm._v(" "),_c('p',[_vm._v("于是想用 canvas 自动从用户输入的内容中生成一个，虽然我基本没用过 canvas 不过基于以前做 "),_c('a',{attrs:{"href":"https://egoist.moe/slogan/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("slogan"),_c('OutboundLink')],1),_vm._v(" 的经验我还是开始了。")]),_vm._v(" "),_c('p',[_vm._v("首先得新建一个 canvas 元素我还是记得的，然后获取它的 2d context:")]),_vm._v(" "),_vm._m(0),_c('p',[_vm._v("然后开始渲染，对于左边的头像我是暂时忽略的，毕竟我不记得怎么渲染图片了，于是先从其它的文字开始吧，我需要渲染一个用户名和右边的日期:")]),_vm._v(" "),_vm._m(1),_c('p',[_vm._v("它的效果是:")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('p',[_vm._v("原图里的用户名好像是蓝色加粗未知字体，那我也搜搜改颜色和字体的 API 吧:")]),_vm._v(" "),_vm._m(3),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_c('hr'),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._m(8),_vm._v(" "),_c('hr'),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._m(11),_vm._v(" "),_c('hr'),_vm._v(" "),_vm._m(12),_vm._v(" "),_vm._m(13),_vm._m(14),_vm._m(15),_vm._v(" "),_c('hr'),_vm._v(" "),_c('p',[_vm._v("完成的代码见: https://codepan.net/gist/6630c3910af4495ad06be5426db6c3f8\n用 Vue 写的原始版本见: https://codepan.net/gist/a4d31a6dc1ac7517bd5d80dc62af1930\n网站: https://chat-meme.egoist.moe")]),_vm._v(" "),_vm._m(16),_vm._v(" "),_vm._m(17),_vm._v(" "),_c('p',[_vm._v("写这篇文章的主要目的是秀出我愚蠢的写代码的方式供后人凭吊且让各位读者获取代码上的自信，你可能比我要好得多。")]),_vm._v(" "),_c('img',{attrs:{"src":"https://i.loli.net/2017/09/15/59bbece2a54ab.png","alt":"lol","width":"300"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" $canvas "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" document"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("getElementById")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'canvas'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" ctx "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" $canvas"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("getContext")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'2d'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 其实我也不记得怎么渲染文字了")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// Google 了一下发现是 ctx.fillText(text, x, y)")]),_vm._v("\nctx"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("fillText")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'EGOIST'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("50")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("10")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 我给左边头像预留 50 宽度")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://i.loli.net/2017/09/15/59bbe0f394e51.png","alt":"p1"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_vm._v("ctx"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("font "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'bold 14px sans-serif'")]),_vm._v("\nctx"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("fillStyle "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'blue'")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://i.loli.net/2017/09/15/59bbe259e6618.png","alt":"p2"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("如图我是在 "),_c('code',[_vm._v("fillText")]),_vm._v(" 之前设置的 "),_c('code',[_vm._v("font")]),_vm._v(" 和 "),_c('code',[_vm._v("fillStyle")]),_vm._v("，原因很明显。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("接下来要在右边渲染日期，我需要知道用户名的宽度，而我清楚地记得可以用 "),_c('code',[_vm._v("ctx.measureText")]),_vm._v(" 获取:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" usernameWidth "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" ctx"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("measureText")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'EGOIST'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("width\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 重新设置字体和颜色不然会和用户名一样")]),_vm._v("\nctx"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("font "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'14px sans-serif'")]),_vm._v("\nctx"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("fillStyle "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'#666'")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 时间的 `x` 是用户名宽度 + 预留头像的宽度 + 时间到用户名的距离")]),_vm._v("\nctx"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("fillText")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'2017/7/7'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" usernameWidth "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("+")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("50")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("+")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("10")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("15")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://i.loli.net/2017/09/15/59bbe4404645e.png","alt":"p3"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("接下来是消息的主体内容，它可能是多行的而 canvas 无法自动换行，我们需要根据换行符 "),_c('code',[_vm._v("\\n")]),_vm._v(" 手动识别:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" content "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token template-string"}},[_c('span',{attrs:{"class":"token string"}},[_vm._v("`hello world\ngoodbye world`")])]),_vm._v("\n\ncontent"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("split")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'\\n'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("forEach")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("text"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" index"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  ctx"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("fillText")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("\n    text"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" \n    "),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 预留头像的宽度")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token number"}},[_vm._v("50")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// content 距离顶部的距离 + 每一行的大概高度")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token number"}},[_vm._v("30")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("+")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("15")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("*")]),_vm._v(" index\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://i.loli.net/2017/09/15/59bbe6a3a24df.png","alt":"p4"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("最后只剩下头像了。我知道需要一个 "),_c('code',[_vm._v("input")]),_vm._v(" 元素来获取图片文件，然后以某种方式让 "),_c('code',[_vm._v("ctx")]),_vm._v(" 能够渲染它:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-html extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-html"}},[_c('code',[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token tag"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("<")]),_vm._v("input")]),_vm._v(" "),_c('span',{attrs:{"class":"token attr-name"}},[_vm._v("type")]),_c('span',{attrs:{"class":"token attr-value"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("\"")]),_vm._v("file"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("\"")])]),_vm._v(" "),_c('span',{attrs:{"class":"token attr-name"}},[_vm._v("id")]),_c('span',{attrs:{"class":"token attr-value"}},[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("=")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("\"")]),_vm._v("avatar"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("\"")])]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(">")])]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_vm._v("document"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("getElementById")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'avatar'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("addEventListener")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'change'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" e "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token function"}},[_vm._v("draw")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("e"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("target"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("files"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token number"}},[_vm._v("0")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 下面的内容基本是从 StackOverflow 复制的")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("function")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("draw")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("avatar"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 画头像")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" img "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{attrs:{"class":"token class-name"}},[_vm._v("Image")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n  img"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function-variable function"}},[_vm._v("onload")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 头像实际宽度 40")]),_vm._v("\n    "),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 剩下 10px 是到右边的边距")]),_vm._v("\n    ctx"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("drawImage")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("img"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("0")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("5")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("40")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("40")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n  img"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("src "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token constant"}},[_vm._v("URL")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("createObjectURL")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("avatar"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\n  "),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// ... 画其它东西")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://i.loli.net/2017/09/15/59bbe9cc75c16.gif","alt":"p5"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"后日谈"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#后日谈","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 后日谈")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("这里的代码可能有问题的就是文字高度的获取方式，比如 "),_c('code',[_vm._v("content")]),_vm._v(" 每一行的高度我是目测的 "),_c('code',[_vm._v("15")]),_vm._v("，这里肯定会出一些偏差，似乎也可以近似地把每一行的高度看成约等于 "),_c('code',[_vm._v("ctx.measureText('M').width")]),_vm._v("，不过不知道中文是否会差的太多，应该会有更好且更优雅的方案吧。我擅长浅尝辄止，这里就不想追问了。")])}]



/***/ }),

/***/ "./source/_posts/draw-chat-message-with-canvas.md":
/*!********************************************************!*\
  !*** ./source/_posts/draw-chat-message-with-canvas.md ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _draw_chat_message_with_canvas_md_vue_type_template_id_00777bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw-chat-message-with-canvas.md?vue&type=template&id=00777bb0& */ "./source/_posts/draw-chat-message-with-canvas.md?vue&type=template&id=00777bb0&");
/* harmony import */ var _draw_chat_message_with_canvas_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-chat-message-with-canvas.md?vue&type=script&lang=js& */ "./source/_posts/draw-chat-message-with-canvas.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _draw_chat_message_with_canvas_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _draw_chat_message_with_canvas_md_vue_type_template_id_00777bb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _draw_chat_message_with_canvas_md_vue_type_template_id_00777bb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/draw-chat-message-with-canvas.md?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./source/_posts/draw-chat-message-with-canvas.md?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_draw_chat_message_with_canvas_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./draw-chat-message-with-canvas.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/draw-chat-message-with-canvas.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_draw_chat_message_with_canvas_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/draw-chat-message-with-canvas.md?vue&type=template&id=00777bb0&":
/*!***************************************************************************************!*\
  !*** ./source/_posts/draw-chat-message-with-canvas.md?vue&type=template&id=00777bb0& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_draw_chat_message_with_canvas_md_vue_type_template_id_00777bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./draw-chat-message-with-canvas.md?vue&type=template&id=00777bb0& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/draw-chat-message-with-canvas.md?vue&type=template&id=00777bb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_draw_chat_message_with_canvas_md_vue_type_template_id_00777bb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_draw_chat_message_with_canvas_md_vue_type_template_id_00777bb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=25.1372877b.js.map