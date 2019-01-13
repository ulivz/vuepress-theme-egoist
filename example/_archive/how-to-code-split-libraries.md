---
title: Library 的按需加载
date: 2018-04-02 15:48:12
tags:
warning: 本文处于撰写阶段，还没有找到解决方案 😅
---

我在写一个[项目](https://github.com/egoist/docute/tree/dev)，由于一些依赖较大，需要将其按需加载。webpack 自带了[按需加载](https://webpack.js.org/guides/lazy-loading/)的功能，不过似乎只适用于 App 的打包:

```js
// 举个例子，这个项目的入口文件:
// index.js
export default arr =>
  import('lodash/flatten').then(flatten => flatten.default(arr))
```

用以下的 `webpack.config.js` 打包的话:

```js
module.exports = {
  entry: './index.js',
  devtool: false,
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'lodash/flatten': 'commonjs lodash/flatten'
  }
}
```

你会得到:

```js{11}
// dist/main.js
module.exports =
// ...省略数百行
/***/ "lodash/flatten":
/*!*************************!*\
  !*** external "lodash/flatten" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/flatten");

/***/ })

/******/ });
```

如果你使用 webpack 然后引入打包后的 `dist/main.js` 的话就没有按需加载的效果了，因为 `import()` 被转换成了 `require()`，

如果我是要打包成 `umd` 格式，那就不用把 `lodash/flatten` 加到 `externals` 中，也就没这个问题。

现在我找到的疑似解决方案有:

- 用 Rollup，不过很麻烦，只能用于 `es` `cjs` 格式的打包。
- 用其他的方案，比如 SystemJS，不过不太熟 🤔 不知道行不行。

*To be finished..*
