---
title: tooling 让你从 jQuery 中解脱出来
date: 2016-01-19 20:43:58
subtitle: jQuery 只是个引子，泛指那些不用构建工具的 “显得很方便” 的开发方式
tags:
 - tooling
 - webpack
 - jquery
---

## <span>起因</span>

为什么我还需要用 jQuery？有时候我会有这样的疑惑。我觉得 jQuery 还存在于我某些小项目中的原因就是可以 “即插即用”。新建一个 `index.html`、复制一些代码、新建一个 `style` `script` 标签你就可以开始工作了，这种便利在某些时候非常好。

比如刚才，我想给自己做一个用于收取捐赠的网页（也许会有开源世界的同好喜欢我的项目也说不定呢），我在 “简单粗暴一个 html 搞定” 和 “Webpack + Vue 配合各种构建工具” 之间摇摆不定。

用过 Webpack 的都知道，也许配置和解决 bug 的时间会比写代码的时间更长，而且大部分情况配置文件都大同小异。那为什么不用**一个配置适用多个项目**？于是有了 [`tooling`](https://github.com/egoist/tooling)，它其实就是用一个内置的 Webpack 配置来运行和编译指定的项目。

## <span>tooling 带来了什么？</span>

也许我的表达并不直观，简而言之，tooling 让你开发的便利程度趋近直接用一个 html 搞定。

tooling 内置了 Vue 和 React 的依赖，这意味着你要开发这两种框架的网页几乎是 `no setup`，新建一个项目，不用 `npm init`，不用安装任何依赖，直接：

**index.js**

```javascript
import Vue from 'vue'
import app from './app'

new Vue({
  el: 'body',
  components: {app}
})
```

**app.vue**

```vue
<style>
  $color: cyan;
  body {
    h1 {
      color: $color;
    }
  }
</style>

<template>
  <h1>Wow</h1>
</template>
```

然后运行 `tooling watch -e index` 就可以开着热加载模式进行开发了。

并不需要配置、对开发友好、ES6、PostCSS + PreCSS、享受 Vue 单文件组件的优势、React 的 JS everywhere 的畅快，这些带给你的远不止便利。

## <span>Use Case</span>

如果你实在不知道这玩意能在哪些地方用，那么我告诉你吧。

- 你的开源项目的 gh-pages 主页
- 你个人的一些小实验或者一个大项目的 prototype
- 你的各种需要网页来展示的小发明。
- many more...

看，[donate](https://github.com/egoist/donate) 就是一个例子，如果没用 tooling 的话这个 repo 里会多一堆配置文件，而现在我只需要 focus 这个项目本身。

---

`tooling` 的 GitHub 主页: https://github.com/egoist/tooling