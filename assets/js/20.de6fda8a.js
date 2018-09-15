(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/deploy-node-app.md?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--3-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/babel-loader/lib??ref--3-1!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/deploy-node-app.md?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['target']
});

/***/ }),

/***/ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/deploy-node-app.md?vue&type=template&id=078a8db6&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/cache-loader/dist/cjs.js??ref--1-0!/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/node_modules/vue-loader/lib??ref--1-1!../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./source/_posts/deploy-node-app.md?vue&type=template&id=078a8db6& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('p',[_vm._v("当你熟悉 Node.js 之后很可能会自己写些小东西放在 VPS 上跑，比如说一个个人的 API 服务，或者是你的网站。这篇文章分享的内容不管你的 app 大小，都相对适用，因为我们的原则是「run it forever and deploy it smartly」。")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('p',[_vm._v("首先你需要的是把你的 app 代码从本地上传到 VPS，我们不可能用上个世纪的 ftp 方式上传。我们开发的时候用 git 同步本地仓库和远程仓库的代码，你一定有屡试不爽的感觉，同理，这里我们也将使用 git 来操作。")]),_vm._v(" "),_c('p',[_vm._v("以下内容都可以用 "),_c('a',{attrs:{"href":"https://github.com/yyx990803/pod","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("pod"),_c('OutboundLink')],1),_vm._v(" 这个工具来代替，不过相应的你需要用 "),_c('a',{attrs:{"href":"https://github.com/Unitech/pm2","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("PM2"),_c('OutboundLink')],1),_vm._v(" 来管理进程。而这里是个相对 general case。")]),_vm._v(" "),_c('p',[_vm._v("首先我们确认一下：")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_c('p',[_vm._v("现在你就拥有了一个只存在版本管理功能，不包含任何 app 源文件的 git 仓库。")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._m(7),_c('p',[_vm._v("最后，按下 Ctrl+D 来确认保存。")]),_vm._v(" "),_c('p',[_vm._v("为了让你有权限执行这个文件，你需要:")]),_vm._v(" "),_vm._m(8),_vm._m(9),_vm._v(" "),_c('p',[_vm._v("退出 VPS：")]),_vm._v(" "),_vm._m(10),_c('p',[_vm._v("在你的 app 目录里执行：")]),_vm._v(" "),_vm._m(11),_c('p',[_vm._v("哇哦，搞定了。试着将你的 web app 发布吧，就是简单地提交而已：")]),_vm._v(" "),_vm._m(12),_vm._m(13),_vm._v(" "),_vm._m(14),_vm._v(" "),_c('p',[_vm._v("你需要持久化运行你的 app，因为它很可能在高峰时段 crash 掉，同时你也希望在系统重启之后你的 app 也能自动重启。")]),_vm._v(" "),_c('p',[_vm._v("你大可参考 "),_c('a',{attrs:{"href":"http://support.ghost.org/deploying-ghost/#making-ghost-run-forever","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Ghost 部署指南"),_c('OutboundLink')],1),_vm._v(" 来达到这个目的。非常完整，我就不再赘述，不过我推荐使用 Supervisor。")]),_vm._v(" "),_c('p',[_vm._v("你也可以考虑使用 "),_c('a',{attrs:{"href":"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("docker"),_c('OutboundLink')],1),_vm._v(" 这个更现代(?)的解决方案。")]),_vm._v(" "),_vm._m(15),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://certsimple.com/blog/deploy-node-on-linux","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("How to deploy your node app on Linux, 2016 edition"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.terlici.com/2015/06/20/running-node-forever.html","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Running your Node & Express apps forever, no matter what, with Systemd and PM2"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://serverfault.com/questions/191331/should-servers-have-their-timezone-set-to-gmt-utc","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Should servers have their timezone set to GMT/UTC?"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://blog.risingstack.com/operating-node-in-production/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Operating Node.js in Production"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.digitalocean.com/community/tutorials/how-to-use-haproxy-to-set-up-http-load-balancing-on-an-ubuntu-vps","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("How To Use HAProxy to Set Up HTTP Load Balancing on an Ubuntu VPS"),_c('OutboundLink')],1)]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://blog.risingstack.com/node-js-security-tips/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Node.js Security Tips"),_c('OutboundLink')],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"上传代码"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#上传代码","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("上传代码")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('code',[_vm._v("/var/repo")]),_vm._v(" - 这是 VPS 上存储 git repo 的目录")]),_vm._v(" "),_c('li',[_c('code',[_vm._v("/var/www")]),_vm._v(" - 这是 VPS 的网站目录")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"在-vps-上创建一个空-repo"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#在-vps-上创建一个空-repo","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 在 VPS 上创建一个空 repo")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("mkdir")]),_vm._v(" -p /var/repo/app.git\n$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("cd")]),_vm._v(" /var/repo/app.git\n$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" init --bare\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"部署的钩子"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#部署的钩子","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 部署的钩子")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("你需要一个钩子 "),_c('code',[_vm._v("git hook")]),_vm._v("，也就是在每次本地 git push 之后让它自动把上传的文件拷贝到你的网站目录中。这里我们使用 git 内置的 "),_c('code',[_vm._v("post-receive")]),_vm._v(" 钩子：")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("cd")]),_vm._v(" hooks\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 写入内容到这个文件")]),_vm._v("\n$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("cat")]),_vm._v(" "),_c('span',{attrs:{"class":"token operator"}},[_vm._v(">")]),_vm._v(" post-receive\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 回车，输入如下内容：")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_c('span',{attrs:{"class":"token shebang important"}},[_vm._v("#!/bin/sh")]),_vm._v("\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" --work-tree"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v("/var/www/domain.com --git-dir"),_c('span',{attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v("/var/repo/app.git checkout -f\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("cd")]),_vm._v(" /var/www/domain.com\n"),_c('span',{attrs:{"class":"token function"}},[_vm._v("npm")]),_vm._v(" "),_c('span',{attrs:{"class":"token function"}},[_vm._v("install")]),_vm._v("\n"),_c('span',{attrs:{"class":"token comment"}},[_vm._v("# 这里还可以加一些构建脚本，比如 npm run build")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("chmod")]),_vm._v(" +x post-receive\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{"id":"本地配置"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#本地配置","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" 本地配置")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("$ "),_c('span',{attrs:{"class":"token keyword"}},[_vm._v("exit")]),_vm._v("\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" remote add server ssh://user@yourdomain.com/var/repo/app.git\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"language-bash extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-bash"}},[_c('code',[_vm._v("$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" add -A\n$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" commit -m "),_c('span',{attrs:{"class":"token string"}},[_vm._v("\"deploy to server\"")]),_vm._v("\n$ "),_c('span',{attrs:{"class":"token function"}},[_vm._v("git")]),_vm._v(" push server master\n")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("然后检查一下 "),_c('code',[_vm._v("/var/www/domain.com")]),_vm._v(" 吧，你的代码都被同步过去了。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"持久运行你的-app"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#持久运行你的-app","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("持久运行你的 app")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{"id":"延伸阅读"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#延伸阅读","aria-hidden":"true"}},[_vm._v("#")]),_vm._v(" "),_c('span',[_vm._v("延伸阅读")])])}]



/***/ }),

/***/ "./source/_posts/deploy-node-app.md":
/*!******************************************!*\
  !*** ./source/_posts/deploy-node-app.md ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deploy_node_app_md_vue_type_template_id_078a8db6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deploy-node-app.md?vue&type=template&id=078a8db6& */ "./source/_posts/deploy-node-app.md?vue&type=template&id=078a8db6&");
/* harmony import */ var _deploy_node_app_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deploy-node-app.md?vue&type=script&lang=js& */ "./source/_posts/deploy-node-app.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _deploy_node_app_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deploy_node_app_md_vue_type_template_id_078a8db6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deploy_node_app_md_vue_type_template_id_078a8db6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/_posts/deploy-node-app.md?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./source/_posts/deploy-node-app.md?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_deploy_node_app_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./deploy-node-app.md?vue&type=script&lang=js& */ "../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/deploy-node-app.md?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_deploy_node_app_md_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/_posts/deploy-node-app.md?vue&type=template&id=078a8db6&":
/*!*************************************************************************!*\
  !*** ./source/_posts/deploy-node-app.md?vue&type=template&id=078a8db6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_deploy_node_app_md_vue_type_template_id_078a8db6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"bb78cc5a-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../@vuepress/core/lib/webpack/markdownLoader.js??ref--1-2!./deploy-node-app.md?vue&type=template&id=078a8db6& */ "../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"/Users/ulivz/Documents/ULIVZ/__vuepress__/vuepress-next/packages/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"bb78cc5a-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/cache-loader/dist/cjs.js?!../../node_modules/vue-loader/lib/index.js?!../@vuepress/core/lib/webpack/markdownLoader.js?!./source/_posts/deploy-node-app.md?vue&type=template&id=078a8db6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_deploy_node_app_md_vue_type_template_id_078a8db6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_Users_ulivz_Documents_ULIVZ_vuepress_vuepress_next_packages_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_bb78cc5a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_vuepress_core_lib_webpack_markdownLoader_js_ref_1_2_deploy_node_app_md_vue_type_template_id_078a8db6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=20.de6fda8a.js.map