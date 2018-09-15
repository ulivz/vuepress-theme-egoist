(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/how-does-nodejs-cli-program-work.md?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/how-does-nodejs-cli-program-work.md?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['target']
});

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/how-does-nodejs-cli-program-work.md?vue&type=template&id=fdd155e2&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/how-does-nodejs-cli-program-work.md?vue&type=template&id=fdd155e2& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('p',[_vm._v("你可能已经知道，在终端里可以调用不同的解释器来执行你的程序，比如:")]),_vm._v(" "),_vm._m(0),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_c('p',[_vm._v("然后在终端可以看到期望的结果:")]),_vm._v(" "),_vm._m(12),_vm._v(" "),_vm._m(13),_vm._v(" "),_c('hr'),_vm._v(" "),_c('p',[_vm._v("正如浏览器里的 URL 有相应的各种路由解析库一样，将 "),_c('code',[_vm._v("/user/egoist")]),_vm._v(" 解析成 "),_c('code',[_vm._v("{ username: 'egoist' }")]),_vm._v(" 之类的，命令行参数当然也有，"),_c('a',{attrs:{"href":"https://github.com/substack/minimist","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("minimist"),_c('OutboundLink')],1),_vm._v(" 便是 node.js 社区里应用最多的一个:")]),_vm._v(" "),_vm._m(14),_c('p',[_vm._v("使用不同的命令执行一下这段代码试试:")]),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_vm._v(" "),_vm._m(17),_vm._v(" "),_vm._m(18),_vm._v(" "),_vm._m(19),_vm._v(" "),_c('p',[_vm._v("类似 web 开发，你当然可以完全从头写你的命令行程序，自己实现一个命令行参数解释器，然后自行判断如何根据参数返回结果。")]),_vm._v(" "),_c('p',[_vm._v("不过这有点浪费时间且本末倒置，如果你就是想学习那些方面的内容，你可以那样干，否则如果你只是想为你的一个奇思妙实现一个命令行工具，那就有点得不偿失，不如直接使用现成的框架来加速达成你原本的目标。")]),_vm._v(" "),_vm._m(20),_vm._v(" "),_vm._m(21),_vm._v(" "),_c('p',[_vm._v("在这里我就不过多介绍框架了，毕竟只要了解原理就能举一反三，不过我还是推荐几个常用的，节省读者的时间:")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/sindresorhus/meow","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Meow"),_c('OutboundLink')],1),_vm._v(": 简单的基于 "),_c('a',{attrs:{"href":"https://github.com/substack/minimist","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("minimist"),_c('OutboundLink')],1),_vm._v(" 的包装，没什么新功能。")]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/tj/commander.js","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Commander.js"),_c('OutboundLink')],1),_vm._v(": 功能齐全的框架，提供类似 git 的子命令系统，自动生成帮助信息等。")]),_vm._v(" "),_c('li',[_c('strong',[_c('a',{attrs:{"href":"https://github.com/egoist/cac","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("CAC"),_c('OutboundLink')],1),_vm._v(": 类似 Commander.js 但更轻巧、现代，支持插件。(我做的)")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://yargs.js.org/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Yargs"),_c('OutboundLink')],1),_vm._v(": 功能强大的框架，但显得过于臃肿。")])]),_vm._v(" "),_c('p',[_vm._v("这里用 CAC 举个简单的例子，介绍一下如何使用:")]),_vm._v(" "),_vm._m(22),_vm._m(23),_vm._v(" "),_vm._m(24),_vm._v(" "),_vm._m(25),_vm._v(" "),_vm._m(26),_vm._v(" "),_vm._m(27),_vm._v(" "),_vm._m(28),_vm._v(" "),_vm._m(29),_vm._v(" "),_vm._m(30),_vm._m(31),_vm._v(" "),_c('p',[_vm._v("这里通过配置 "),_c('a',{attrs:{"href":"https://docs.npmjs.com/files/package.json#bin","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("bin"),_c('OutboundLink')],1),_vm._v(" 让 npm 在安装程序的时候在 "),_c('code',[_vm._v("{prefix}/bin")]),_vm._v(" 目录创建一个"),_c('a',{attrs:{"href":"https://zh.wikipedia.org/zh-hans/%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("符号链接"),_c('OutboundLink')],1),_vm._v("指向 "),_c('code',[_vm._v("./cli.js")]),_vm._v(" 的绝对路径。在不同的情况下这个 "),_c('code',[_vm._v("prefix")]),_vm._v(" 不同:")]),_vm._v(" "),_vm._m(32),_vm._v(" "),_vm._m(33)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 执行一段 shell 脚本")]),_vm._v("\nsh ./foo.sh\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 执行一段 node.js 代码")]),_vm._v("\nnode ./bar.js\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("下一步你想做的可能是省略解释器，直接通过运行 "),_c('code',[_vm._v("./foo.sh")]),_vm._v(" 或者 "),_c('code',[_vm._v("./bar.js")]),_vm._v(" 来执行你的程序。想在命令行输入命令时省略解释器，你可以将它写入实际运行的程序中，比如 "),_c('code',[_vm._v("./bar.js")]),_vm._v(":")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_vm._v("#"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("!")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v("/")]),_vm._v("usr"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("/")]),_vm._v("bin"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("/")]),_vm._v("env node\nconsole"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("log")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'bar'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("这段程序第一行由两部分组成，即 "),_c('strong',[_vm._v("Shebang")]),_vm._v(" 和 "),_c('strong',[_vm._v("解释器命令")]),_vm._v("。"),_c('strong',[_vm._v("Shebang")]),_vm._v(" 就是开头的 "),_c('code',[_vm._v("#!")]),_vm._v("，它告诉系统调用后面声明的解释器，而我们需要调用的解释器是 "),_c('code',[_vm._v("node")]),_vm._v("，执行 "),_c('code',[_vm._v("/usr/bin/env node")]),_vm._v(" 可以寻找到系统 "),_c('code',[_vm._v("$PATH")]),_vm._v(" 里第一个出现的 "),_c('code',[_vm._v("node")]),_vm._v(" 命令。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("这样你便可以通过执行 "),_c('code',[_vm._v("./bar.js")]),_vm._v(" 来执行这段程序了:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("❯ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("chmod")]),_vm._v(" +x bar.js\n❯ ./bar.js\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("第一行的 "),_c('code',[_vm._v("chmod +x bar.js")]),_vm._v(" 是让系统允许将文件 "),_c('code',[_vm._v("bar.js")]),_vm._v(" 直接作为一段程序运行。现在你可以成功看到期望的输出:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://i.loli.net/2017/10/18/59e724560f339.png","alt":"bar"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"命令行参数"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#命令行参数","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 命令行参数")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("在网页应用里，我们依靠 "),_c('em',[_vm._v("URL")]),_vm._v(" 来获得展现页面内容所需要的参数，比如依靠路径 "),_c('code',[_vm._v("/user/egoist")]),_vm._v(" 来获取数据并渲染用户 "),_c('code',[_vm._v("egoist")]),_vm._v(" 的页面。而命令行程序所依靠的便是命令行参数。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("以刚才的 "),_c('code',[_vm._v("bar.js")]),_vm._v(" 为例，假设你需要将 "),_c('code',[_vm._v("bar")]),_vm._v(" 字符串重复 n 次输出，而 n 是用户决定的，你会这样做:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_vm._v("#"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("!")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v("/")]),_vm._v("usr"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("/")]),_vm._v("bin"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("/")]),_vm._v("env node\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" times "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" process"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("argv"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token number"}},[_vm._v("2")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("||")]),_vm._v(" "),_c('span',{attrs:{"class":"token number"}},[_vm._v("1")]),_vm._v("\nconsole"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("log")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'bar'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("repeat")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("times"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://ooo.0o0.ooo/2017/10/18/59e72774a1ce7.png","alt":"process.argv"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('code',[_vm._v("process.argv")]),_vm._v(" 是实际执行的命令参数列表(数组)，比如运行 "),_c('code',[_vm._v("./bar 4")]),_vm._v(" 实际执行的是 "),_c('code',[_vm._v("node ./bar 4")]),_vm._v("，第一个参数是解释器命令 "),_c('code',[_vm._v("node")]),_vm._v("，第二个是被执行的程序路径。而我们这里只需要第三个参数。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" minimist "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("require")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'minimist'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 大多数情况我们不需要关心 process.argv 的前两项")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" argv "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("minimist")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("process"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("argv"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("slice")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token number"}},[_vm._v("2")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\nconsole"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("log")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("argv"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://i.loli.net/2017/10/18/59e72c19cea1f.png","alt":"minimist"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("之后你便可以灵活地通过 "),_c('code',[_vm._v("argv")]),_vm._v(" 来判断如何输出用户期望的内容了。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('strong',[_vm._v("命令行参数小贴士")]),_vm._v(":")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_vm._v("形如 "),_c('code',[_vm._v("--foo")]),_vm._v(" 的叫做 "),_c('code',[_vm._v("switch")]),_vm._v("，也就是代表了一个布尔值 "),_c('code',[_vm._v("foo: true")]),_vm._v("，后面不加任何值。\n"),_c('ul',[_c('li',[_vm._v("一般用 "),_c('code',[_vm._v("--no-foo")]),_vm._v(" 来表示布尔值 "),_c('code',[_vm._v("foo: false")]),_vm._v("。")])])]),_vm._v(" "),_c('li',[_vm._v("形如 "),_c('code',[_vm._v("--name egoist")]),_vm._v(" 的叫做 "),_c('code',[_vm._v("flag")]),_vm._v(", 即后面要加值，比如字符串和数字。\n"),_c('ul',[_c('li',[_vm._v("类似的写法是 "),_c('code',[_vm._v("--name=egoist")]),_vm._v("，用 "),_c('code',[_vm._v("=")]),_vm._v(" 而不是空格来连接。")])])]),_vm._v(" "),_c('li',[_vm._v("只有一个连字符的一般用于其它 flag 的简写，比如用 "),_c('code',[_vm._v("-f")]),_vm._v(" 作为 "),_c('code',[_vm._v("--foo")]),_vm._v(" 的简写，使用这两个之中任何一个的效果相同。连字符后面一般是单个字符，而一个连字符加多个字符其实相当于合并了多个简写，比如 "),_c('code',[_vm._v("-xFd")]),_vm._v(" 相当于 "),_c('code',[_vm._v("-x -F -d")]),_vm._v("。")]),_vm._v(" "),_c('li',[_vm._v("某些命令行参数解释器支持用英文小数点 "),_c('code',[_vm._v(".")]),_vm._v(" 连接的参数，比如: "),_c('code',[_vm._v("--foo.bar baz")]),_vm._v("，解析之后对象 "),_c('code',[_vm._v("foo")]),_vm._v(" 的属性 "),_c('code',[_vm._v("bar")]),_vm._v(" 的值就是 "),_c('code',[_vm._v("baz")]),_vm._v("。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"命令行程序框架"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#命令行程序框架","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 命令行程序框架")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"框架干了哪些事"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#框架干了哪些事","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 框架干了哪些事")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_vm._v("根据不同的命令[^1]调用不同的模块。")]),_vm._v(" "),_c('li',[_vm._v("自动生成帮助信息，比如执行 "),_c('code',[_vm._v("git --help")]),_vm._v(" 显示的内容。")]),_vm._v(" "),_c('li',[_vm._v("让整个程序更安全，比如指定 flag 哪些是必需的。")]),_vm._v(" "),_c('li',[_vm._v("自动命令补全。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 假设把它放在 cli.js 里")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" cli "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("require")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'cac'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 定义一个命令")]),_vm._v("\ncli"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("command")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'hi'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'打招呼'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" input "),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  console"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("log")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token template-string"}},[_c('span',{attrs:{"class":"token string"}},[_vm._v("`Hi ")]),_c('span',{attrs:{"class":"token interpolation"}},[_c('span',{attrs:{"class":"token interpolation-punctuation punctuation"}},[_vm._v("${")]),_vm._v("input"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{attrs:{"class":"token number"}},[_vm._v("0")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("]")]),_c('span',{attrs:{"class":"token interpolation-punctuation punctuation"}},[_vm._v("}")])]),_c('span',{attrs:{"class":"token string"}},[_vm._v("`")])]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 开始解析 process.argv 并执行相应命令")]),_vm._v("\ncli"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("parse")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("执行 "),_c('code',[_vm._v("./cli.js")]),_vm._v(" 试试:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://i.loli.net/2017/10/18/59e76be370455.png","alt":"cac"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("如你所见，这里只会在执行 "),_c('code',[_vm._v("hi")]),_vm._v(" 命令之后才会打招呼。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("同时添加 "),_c('code',[_vm._v("--help")]),_vm._v(" flag 会打印出帮助信息:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('img',{attrs:{"src":"https://ooo.0o0.ooo/2017/10/18/59e76f8c2d27a.png","alt":"help"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"配置-package-json"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#配置-package-json","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 配置 package.json")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("要想让你的程序的可执行文件全局可用，你需要将其加入到系统 "),_c('code',[_vm._v("PATH")]),_vm._v(" 中，而 npm 简化了这一步骤:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-json extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-json"}},[_c('code',[_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"name\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"my-cli\"")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n  "),_c('span',{attrs:{"class":"token property"}},[_vm._v("\"bin\"")]),_c('span',{attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"./cli.js\"")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("在本地测试时执行 "),_c('code',[_vm._v("npm link")]),_vm._v(" 或者 "),_c('code',[_vm._v("npm i -g .")]),_vm._v(" 系统便有了 "),_c('code',[_vm._v("my-cli")]),_vm._v(" 命令。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_vm._v("全局安装的模块(即 "),_c('code',[_vm._v("npm install -g")]),_vm._v(")的 "),_c('code',[_vm._v("prefix")]),_vm._v(" 是执行 "),_c('code',[_vm._v("npm prefix -g")]),_vm._v(" 得到的路径。")]),_vm._v(" "),_c('li',[_vm._v("否则将是当前目录里的 "),_c('code',[_vm._v("./node_modules/.bin")]),_vm._v("。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("[^1]: 这里的命令指程序中的命令，比如 "),_c('code',[_vm._v("git")]),_vm._v(" 程序中有个命令叫 "),_c('code',[_vm._v("log")]),_vm._v("，你可以通过执行 "),_c('code',[_vm._v("git log")]),_vm._v(" 使用。")])}]



/***/ }),

/***/ "./source/_posts/how-does-nodejs-cli-program-work.md":
/*!***********************************************************!*\
  !*** ./source/_posts/how-does-nodejs-cli-program-work.md ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _how_does_nodejs_cli_program_work_md_vue_type_template_id_fdd155e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how-does-nodejs-cli-program-work.md?vue&type=template&id=fdd155e2& */ "./source/_posts/how-does-nodejs-cli-program-work.md?vue&type=template&id=fdd155e2&");
/* harmony import */ var _how_does_nodejs_cli_program_work_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./how-does-nodejs-cli-program-work.md?vue&type=script&lang=js& */ "./source/_posts/how-does-nodejs-cli-program-work.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _how_does_nodejs_cli_program_work_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _how_does_nodejs_cli_program_work_md_vue_type_template_id_fdd155e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _how_does_nodejs_cli_program_work_md_vue_type_template_id_fdd155e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/how-does-nodejs-cli-program-work.md?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./source/_posts/how-does-nodejs-cli-program-work.md?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_how_does_nodejs_cli_program_work_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./how-does-nodejs-cli-program-work.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/how-does-nodejs-cli-program-work.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_how_does_nodejs_cli_program_work_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/how-does-nodejs-cli-program-work.md?vue&type=template&id=fdd155e2&":
/*!******************************************************************************************!*\
  !*** ./source/_posts/how-does-nodejs-cli-program-work.md?vue&type=template&id=fdd155e2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_how_does_nodejs_cli_program_work_md_vue_type_template_id_fdd155e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./how-does-nodejs-cli-program-work.md?vue&type=template&id=fdd155e2& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/how-does-nodejs-cli-program-work.md?vue&type=template&id=fdd155e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_how_does_nodejs_cli_program_work_md_vue_type_template_id_fdd155e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_how_does_nodejs_cli_program_work_md_vue_type_template_id_fdd155e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=28.bb772fc6.js.map