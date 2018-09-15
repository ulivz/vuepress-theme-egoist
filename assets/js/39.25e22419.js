(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/revue-guide.md?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/revue-guide.md?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['target']
});

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/revue-guide.md?vue&type=template&id=1e268286&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/revue-guide.md?vue&type=template&id=1e268286& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('p',[_vm._v("于是小明告诉我他绞尽脑汁想到的几个方法:")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('p',[_vm._v("以上方法都是可行的，但是一旦组件逻辑复杂起来这样的回调啊、绑定啊、同步啊都会乱套。")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('p',[_vm._v("于是出现了 Redux !")]),_vm._v(" "),_c('p',[_vm._v("当然，Redux 不是为 Vue 出现的。不过却成为了解决所有 JavaScript 应用中状态管理的一种方案。")]),_vm._v(" "),_c('p',[_vm._v("我能做的关于 Redux 的介绍就是这样，了解更多请阅读官方"),_c('a',{attrs:{"href":"https://github.com/rackt/redux","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("自述"),_c('OutboundLink')],1),_vm._v("。")]),_vm._v(" "),_vm._m(5),_vm._v(" "),_c('p',[_vm._v("也许你现在知道了 Redux 最初是因为 React 这个 View Layer Framework 而生的，React 和 Vue 一样具有组件系统，需要状态管理。")]),_vm._v(" "),_c('p',[_vm._v("那么就把 Redux 应用到 Vue 中来吧?")]),_vm._v(" "),_c('p',[_vm._v("你可以这么做，也可以使用 Vue 官方的 Flux 实现 "),_c('a',{attrs:{"href":"https://github.com/vuejs/vuex","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Vuex"),_c('OutboundLink')],1),_vm._v("，它和 Redux 非常类似。几乎唯一的区别就是你需要在 action 里直接修改状态。这很好，因为 Vue 本身赞成的是 mutable state。而 Redux 中则是推荐不要修改状态而是返回一个新的状态，选择哪种看你习惯哪种。")]),_vm._v(" "),_vm._m(6),_vm._v(" "),_c('p',[_vm._v("Redux 在 React 中的应用是通过 "),_c('a',{attrs:{"href":"https://github.com/rackt/react-redux","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("React-Redux"),_c('OutboundLink')],1),_vm._v(" 来绑定的，显得十分复杂。在 Vue 中绑定 Redux 却是十分的简单：")]),_vm._v(" "),_vm._m(7),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_c('hr'),_vm._v(" "),_c('p',[_vm._v("相关链接:")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/rackt/redux","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Redux"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/egoist/revue","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Revue"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/vuex","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Vuex"),_c('OutboundLink')],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"缘起小明"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#缘起小明","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("缘起小明")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("前几天小明找到我，说他想用 Vue 做一个小博客，自己写点东西，可是一来就遇到问题了，他发现组件之间的状态传递十分麻烦。父子组件还好点，在 Vue 里面可以用 "),_c('code',[_vm._v("props")]),_vm._v(" 执行函数或者 "),_c('code',[_vm._v("this.$broadcast")]),_vm._v(" "),_c('code',[_vm._v("this.$dispatch")]),_vm._v(" 来传递状态，可是两个完全没有联系的组件要共享状态十分困难啊。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("他是这样说的，他在做编辑器的时候侧边栏和编辑框都想知道用户"),_c('strong',[_vm._v("是否已经保存")]),_vm._v("这个状态， 而这两个组件完全没办法通过上述的几个方法共享 state。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_vm._v("把这个状态放到这两个组件共同的父组件中然后通过 "),_c('code',[_vm._v("prop.sync")]),_vm._v(" 来同步这两个组件的这个状态")]),_vm._v(" "),_c('li',[_vm._v("在这两个组件中都放置这个状态然后通过共同父组件的一个 prop 来在父组件中调用函数执行一个 "),_c('code',[_vm._v("this.$dispatch")]),_vm._v(" 通知子组件这个状态有改动，借此来同步各个组件中的这个状态。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"历史必然"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#历史必然","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("历史必然")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"vue"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#vue","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("Vue?")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"revue"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#revue","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("Revue")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-javascript extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-javascript"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 首先创建你的 reducers/actions/store")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 然后引入 revue 和你的 store")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" Revue "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'revue'")]),_vm._v("\n"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" store "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'./store'")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 将 Revue 作为一个插件在 Vue 中初始化")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 同时绑定这个 store")]),_vm._v("\nVue"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("use")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("Revue"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v(" store "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("这样就大功告成了，之后在每一个 Vue 实例被创建之后每个实例都会有 "),_c('code',[_vm._v("this.$revue")]),_vm._v(" 属性和 "),_c('code',[_vm._v("this.$subscribe")]),_vm._v(" 方法。现在就介绍这些该如何被使用:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-javascript extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-javascript"}},[_c('code',[_c('span',{attrs:{"class":"token keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{attrs:{"class":"token class-name"}},[_vm._v("Vue")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token function"}},[_vm._v("data")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// this.$revue 实际上指向你创建的 redux store 对象")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 所以 store 有的方法都可以通过 this.$revue 调用")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 每一个 state 都需要一个初始状态")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 然后像下面这样调用初始状态")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t\t\tcounter"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("$store"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("state"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("counter "),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 假设默认你设置的是 0")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n\tmethods"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token function"}},[_vm._v("handleClick")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t\t\t"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 点击之后执行 increment 让 counter 自增")]),_vm._v("\n\t\t\t"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_vm._v("$store"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("dispatch")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("type"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(":")]),_vm._v(" "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'INCERMENT'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\t\t\t"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 现在 store 里的 state 改变了!")]),_vm._v("\n\t\t\t"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// this.$revue.getState().counter 的值现在为 1")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token function"}},[_vm._v("ready")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 你改变了 store 里的 state 可是它不会反映到你的实例中!")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 你需要手动订阅这个 state 更新")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("$subscribe")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'counter'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 我的 store 里没有 counter 这个状态，我给它起的名字是 count 怎么办?")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("// 很简单")]),_vm._v("\n\t\t"),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("this")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{attrs:{"class":"token function"}},[_vm._v("$subscribe")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{attrs:{"class":"token string"}},[_vm._v("'count as counter'")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n\t"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n"),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('blockquote',[_c('p',[_vm._v("郑重提醒，本文开头提到的小明不是明哥，如有雷同，明哥不要打我。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('blockquote',[_c('p',[_vm._v("我个人是一般是使用 redux-actions 和 redux-saga 这套组合")])])}]



/***/ }),

/***/ "./source/_posts/revue-guide.md":
/*!**************************************!*\
  !*** ./source/_posts/revue-guide.md ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _revue_guide_md_vue_type_template_id_1e268286___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./revue-guide.md?vue&type=template&id=1e268286& */ "./source/_posts/revue-guide.md?vue&type=template&id=1e268286&");
/* harmony import */ var _revue_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./revue-guide.md?vue&type=script&lang=js& */ "./source/_posts/revue-guide.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _revue_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _revue_guide_md_vue_type_template_id_1e268286___WEBPACK_IMPORTED_MODULE_0__["render"],
  _revue_guide_md_vue_type_template_id_1e268286___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/revue-guide.md?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./source/_posts/revue-guide.md?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_revue_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./revue-guide.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/revue-guide.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_revue_guide_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/revue-guide.md?vue&type=template&id=1e268286&":
/*!*********************************************************************!*\
  !*** ./source/_posts/revue-guide.md?vue&type=template&id=1e268286& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_revue_guide_md_vue_type_template_id_1e268286___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./revue-guide.md?vue&type=template&id=1e268286& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/revue-guide.md?vue&type=template&id=1e268286&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_revue_guide_md_vue_type_template_id_1e268286___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_revue_guide_md_vue_type_template_id_1e268286___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=39.25e22419.js.map