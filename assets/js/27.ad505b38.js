(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/git-memo.md?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/git-memo.md?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['target']
});

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/git-memo.md?vue&type=template&id=a4ea062c&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/git-memo.md?vue&type=template&id=a4ea062c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('p',[_vm._v("Git 的一些常用操作备忘。")]),_vm._v(" "),_c('h2',{attrs:{"id":"起步"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#起步","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("起步")])]),_vm._v(" "),_c('p',[_vm._v("安装好 Git 之后，配置你的资料:")]),_vm._v(" "),_c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 配置用户名")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" config --global user.name "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"Your Real Name\"")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 配置邮箱地址")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" config --global user.email you@email.address\n")])])]),_c('p',[_vm._v("之后生成 SSH 密钥:")]),_vm._v(" "),_c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("ssh-keygen -C "),_c('span',{attrs:{"class":"token string"}},[_vm._v("'your@email.address'")]),_vm._v(" -t rsa\n")])])]),_c('p',[_c('strong',[_vm._v("初始化一个项目")])]),_vm._v(" "),_c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 初始化 git 项目")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" init\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 添加一个叫 origin 的源")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 使用 ssh 地址")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" remote add origin git@github.com:username/reponame.git\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 使用 username/password 登录 https 地址")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" remote add origin https://username@password:github.com/username/reponame.git\n")])])]),_c('p',[_c('strong',[_vm._v("推送到服务器")])]),_vm._v(" "),_c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 记录所有新增和删除的文件")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" add -A\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 更新理由")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" commit -m "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"message\"")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 推送到服务器端")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" push origin master\n")])])]),_c('p',[_c('strong',[_vm._v("更新到本地")])]),_vm._v(" "),_c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 源 + 分支名")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" pull origin master\n")])])]),_c('p',[_c('strong',[_vm._v("克隆项目")])]),_vm._v(" "),_c('p',[_vm._v("下载代码时有用:")]),_vm._v(" "),_c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 克隆到以这个项目名命名的文件夹")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" clone https://github.com/username/reponame.git\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 克隆到你自定义的文件夹")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" clone https://github.com/username/reponame.git name\n")])])]),_c('p',[_c('em',[_vm._v("Keep Updating...")])])])}]



/***/ }),

/***/ "./source/_posts/git-memo.md":
/*!***********************************!*\
  !*** ./source/_posts/git-memo.md ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _git_memo_md_vue_type_template_id_a4ea062c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./git-memo.md?vue&type=template&id=a4ea062c& */ "./source/_posts/git-memo.md?vue&type=template&id=a4ea062c&");
/* harmony import */ var _git_memo_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./git-memo.md?vue&type=script&lang=js& */ "./source/_posts/git-memo.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _git_memo_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _git_memo_md_vue_type_template_id_a4ea062c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _git_memo_md_vue_type_template_id_a4ea062c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/git-memo.md?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./source/_posts/git-memo.md?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_git_memo_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./git-memo.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/git-memo.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_git_memo_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/git-memo.md?vue&type=template&id=a4ea062c&":
/*!******************************************************************!*\
  !*** ./source/_posts/git-memo.md?vue&type=template&id=a4ea062c& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_git_memo_md_vue_type_template_id_a4ea062c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./git-memo.md?vue&type=template&id=a4ea062c& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/git-memo.md?vue&type=template&id=a4ea062c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_git_memo_md_vue_type_template_id_a4ea062c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_git_memo_md_vue_type_template_id_a4ea062c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=27.ad505b38.js.map