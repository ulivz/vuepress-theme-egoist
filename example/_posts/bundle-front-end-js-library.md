---
title: 优雅地打包前端 JavaScript 库
date: 2016-11-16 15:55:48
tags:
  - javascript
  - bundle
  - bili
---

打包 JS 库没有打包 Web App 那样复杂，但还是可以变得更简单。

## <span>常见用例</span>

一个 JS 库一般需要一个 CommonJS 版本，它不会打包 node_modules 里的模块。以及一个 UMD 版本的，用于在浏览器中直接使用，它会打包 node_modules 里的模块。

使用 [bili](https://github.com/universe-denpa/bili) 一切都会变得简单，简单到只需要一条命令:

```bash
bili --format cjs --format umd --module-name MyModule
```

这条命令的意思是打包 `./src/index.js` 到 `./dist` 目录，并且转换成 `CommonJS` 和 `UMD` 格式的文件，其中 `UMD` 格式中模块名设定为 `MyModule`，这样在浏览器中就可以通过全局变量 `MyModule` 引用。

如果你同时需要一个压缩后的 UMD 格式文件，直接加上 `--compress` 参数就能额外得到一个 `.min.js` 和它的 `sourcemap` 文件。

## <span>ES2015</span>

打包的一个目的就是使用 Babel 之类的转换器编译 ES next 到 ES5，bili 默认使用 [buble](https://buble.surge.sh/guide) 来转换 JavaScript 代码，相比 Babel 它更轻量。

你当然也可以在 bili 中使用 babel 来编译代码，这需要用到 bili 的配置文件 `bili.config.js`:

```js
module.exports = {
  jsCompiler: require('rollup-plugin-babel')({
    presets: ['preset']
  })
}
```

bili 是基于 [Rollup](https://github.com/rollup/rollup) 的，所以相关 Rollup 插件都可以用来编译 JS 代码。

## <span>Buble</span>

正如之前说了，默认我们使用 `buble`，你可以在配置文件中更改 buble 的配置参数:

```js
module.exports = {
  buble: {
    objectAssign: 'objectAssign'
  }
}
```

值得一提的是，buble 不支持 `async/await` 并且不能将 `generator` 转换成 ES5 代码，所以我们保留了 generator 代码并且用 [async-to-gen](https://github.com/leebyron/async-to-gen) 将 `async/await` 转换到 `generator`，如果用到了这两个请考虑浏览器兼容性，或者换成 babel 来编译。

## <span>Watch mode</span>

在开发的时候编译代码没有 `watch` 模式会非常痛苦，想开启 bili 的 watch 模式可以直接加上 `--watch` 参数。

## <span>更多资料</span>

bili 还内置了一些常用的 Rollup 插件，更多使用方法请参考 bili 的 [GitHub Wiki](https://github.com/universe-denpa/bili/wiki) 页面。