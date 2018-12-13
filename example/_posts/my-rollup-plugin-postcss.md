---
title: 我的 rollup-plugin-postcss
date: 2018-02-27 14:28:14
tags:
  - javascript
  - story
---

[rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss) 是我两年前开源的一个项目，用于为 [Rollup](https://rollupjs.org/guide/en) 提供 [PostCSS](https://github.com/postcss/postcss) 支持。

这基本上是我刚开始工作的时候写的代码，所以见证了我一段心路历程。

## 2015 年 12 月 8 日

我[首次提交了代码](https://github.com/egoist/rollup-plugin-postcss/commit/ed445b067e0772aa39403db23bfb2bc4b6129aef#diff-04c6e90faac2675aa89e2176d2eec7d8)，那个时候我的邮箱还是 `aprilorange.net@icloud.com`[^1]，不过早已由于忘记密码且无法申诉而永久无法登录了。

当时的代码极为简单，仅仅是调用 `postcss` 转换 CSS 代码并提供 `plugins` 参数:

```js
import postcss from 'postcss';
import styleInject from 'style-inject';
 
export default function (options = {}) {
  return {
    intro () {
      return styleInject.toString();
    },
    transform (code, id) {
      if (id.slice( -4 ) !== '.css') {
        return null;
      }
      code = postcss(options.plugins || []).process(code).css;
      code = `export default styleInject(${JSON.stringify(code)});`
      return {
        code,
        map: { mappings: '' }
      };
    }
  };
};
```

之后就在当天，我向 PostCSS 项目提交 PR 请求在 README 上列出我的这个项目，而这个 PR 的序号也很溜: https://github.com/postcss/postcss/pull/666

发这个 Issue 的时候我刚下班，骑着自行车回家的途中发现收到了回复，我就停下车来，靠着自行车在成都万象城旁边傻站着摸着手机回复。

PostCSS 的维护者告诉我应该使用异步的 API，我也就照做了，然后就发生了:

![lol](https://i.loli.net/2018/02/27/5a94fe69825e3.png)

其实我当时还不太懂 Promise，经他指出之后研究了一下才发现一个函数已经返回了 Promise 就不用再把它 wrap 进一个 Promise 了:

![promise](https://i.loli.net/2018/02/27/5a94fec490e73.png)

在这之后我也看到过其它人像我以前那样写，就感觉很好，因为我再也不会那么傻了。

## 2015 年 12 月 23 日

开源两周后，这个项目迎来了[第一个 Issue](https://github.com/egoist/rollup-plugin-postcss/issues/1)，我当时是很激动的:

![issue 1](https://i.loli.net/2018/02/27/5a9500dcc43a7.png)

这个人可能在今天已经为读者们所熟知，也就是 [Preact](https://github.com/developit/preact) 的作者，我记得在当时 Preact 还只有几百个 stars?

## 2016 年 5 月 29 日

半年没更新这个项目了，难道是没人用吗，我也不知道因为我自己也不用。不过当时我似乎挺喜欢用 [AVA](https://github.com/avajs/ava) 写测试，因为 CLI 效果很炫而且默认就支持用 ES2015 写测试。

于是我就 commit 了一发[将 Mocha 替换成 AVA](https://github.com/egoist/rollup-plugin-postcss/commit/9698d66ca1f04a2308c94fe74d94d184f2891b96) 了。

[^1]: 我的笔名叫四月橘林，所以当时英文名就叫 April Orange XD

## 2016 年 9 月 2 日

这天有人来了个 [PR](https://github.com/egoist/rollup-plugin-postcss/pull/5)，尽管不知道 fix 了什么我还是合了吧?

之后又来了一些 contributors，慢慢地我就懒得管了，基本全都是他们在 fix bugs 或者添加新 features，逐渐地我自己也看不懂里面的代码了 😅

## 2018 年 1 月 10 日

过了一年多，我突然找回了责任心，想起了那句责任越大能力越大，打算重写一下这个项目。在此之前我折腾了很久的 webpack，于是就得到了一些重写的灵感，想让这个插件以 `loader` 的方式支持任何 CSS 预处理器，而且刚好 [Parcel](https://github.com/parcel-bundler/parcel) 突然流行了起来，我也就顺便让它无需配置便能编译 CSS/Sass/Less/Stylus。和每次重构之后的心情一样，我再次觉得这次的代码写得很完美了。

![current](https://i.loli.net/2018/02/27/5a9505707f0ea.png)

## 2018 年 2 月 27 日

今天，也就是我写这篇文章的日子，rollup-plugin-postcss 已被 [900](https://github.com/egoist/rollup-plugin-postcss/network/dependents) 多个项目使用，其中包括像 [microbundle](https://github.com/developit/microbundle) 和 [bili](https://github.com/egoist/bili) 这样基于 Rollup 的打包工具。

照目前的趋势来看，目前的代码还没有崩坏的迹象，在一段时间内可读性还能维持在较高范围。
