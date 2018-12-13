---
title: 二〇一六年的前端入门指南
subtitle: JavaScript is supposed to be easy and powerful, for all of us.
date: 2016-02-06 15:10:05
tags:
 - javascript
 - frontend
---

年初在 V2EX 看到很多人发帖问前端如何入门，我姑且来分享一下我的经验。

或许你不知道我是谁，不过如果你对前端有兴趣，都可以联系我帮你 Review 代码、提供改进建议，这有我的 [GitHub](https://github.com/egoist) 地址。

我假设阅读者只了解过简单的 HTML/CSS。

## <span>HTML</span>

HTML 没有了 CSS 就什么都不是，它相当于给网页各个区域命名，然后让你可以进行更多的操作。比如头部导航栏，你经常会给它起个名字叫 `header`。

## <span>CSS</span>

CSS 是层叠样式表（Cascading Style Sheets）的缩写，它是用来定义你的 HTML 的展现形式的一种语言。比如让你的 HTML 里的文字显示不同字体，一个元素显示不同的高度。

## <span>HTML+CSS</span>

HTML 和 CSS 都是语法非常**松散**的语言，这样的导致了它们入门非常简单，然而一旦代码量变大维护就会很困难。

### 模板引擎

假设你有两个网页，它们共用一个导航栏（header），然后只有主体（content）部分显示不同的内容，在已有知识背景下你只能做两个网页，把导航栏的代码复制两次。

于是有了模板引擎，比如 [pug](https://github.com/pugjs/pug)，他可以让你复用重复的模板，减少代码量，提高可维护性。

### CSS 处理器

看下面这段代码:

```css
.post {
	font-size: 14px;
	-webkit-box-shadow: 0 0 1px #ccc;
	-moz-box-shadow: 0 0 1px #ccc;
	box-shadow: 0 0 1px #ccc;
}

.post .post-content {
	font-size: 16px;
}

.post .post-content .post-date {
	color: #999;
}
```

你会发现上面的 `box-shadow` 写了三次，以便支持不同内核浏览器下的 `box-shadow` 这个属性。

还有随着代码量增大像 `.post .post-content .post-date` 这样长的定义会越来越长。

这是有了 CSS 处理器之后的代码:

```css
.post {
	font-size: 14px;
	box-shadow: 0 0 1px #ccc;
	.content {
		font-size: 16px;
		.date {
			color: #999;
		}
	}
}
```

嵌套的风格让作用域更清晰，你同时可以尽可能地只用标准的 CSS 属性然后让 CSS 处理器帮你兼容其它浏览器。推荐使用 [PostCSS](https://github.com/postcss/postcss)，它本身并不改变你的 CSS 代码，但它把你的代码抽象成一个 JavaScript 对象让你能够通过插件来随心所欲地进行操作，比如实现嵌套风格以及自动加 `-moz` `-webkit` 这些前缀。你可以自己写插件同时它已经有大量[现成的插件](https://github.com/postcss/postcss/blob/master/docs/plugins.md)供你使用。

要记住的是，它只是将你**自定义的 CSS 风格**转换成符合浏览器标准的 CSS，至于为什么？标准的 CSS 不够好用呗，比如刚才遇到的问题。

## <span>HTML+CSS 小结</span>

现在你知道了 HTML/CSS 在一起使用的时候能干什么，也知道了用模板引擎、CSS 处理器可以让你更好地写 HTML/CSS。要记住，「更好」也许只是在代码量增大的情况下更明显。

那么这些模板引擎和 CSS 处理器是怎么实现的？很多都是用的 JavaScript。

推荐阅读: [Learn to Code HTML & CSS](http://learn.shayhowe.com/html-css/) 正如其松散的特性一样，你需要多使用才能更好地掌握用法。

## <span>JavaScript</span>

JavaScript 是一门真正的语言，它简单且强大。（以下简称 JS）

正如 HTML/CSS 是用于网页的样式呈现，JS （在过去）则是用于网页的交互操作上，比如用户点击了一个按钮然后弹出一个框，这些需要 JS 完成。

JS 本身并不具有「监听用户点击」这一功能，在浏览器上，现代浏览器都内置了网页 DOM API，它提供了一套 JS 接口，让你可以用 JS 调用来实现相应功能，而这些功能本身是基于更低级的 C/C++ 语言实现的。

因此，一名及格的前端需要掌握 JS 的基础，比如变量、数组、函数这些几乎所有语言都有的特性，然后就是 DOM API，缺了这个实现网页交互就是纸上谈兵。

推荐阅读: [MDN Web API](https://developer.mozilla.org/zh-CN/docs/Web/API) 非常全，需要更渐进的指南建议 Google。

至于学习 JS 这门语言，推荐三本众所周知的，你并不需要全部都看，挑一本或两本尽量搞清楚就行了:

- [JavaScript 权威指南](https://book.douban.com/subject/10549733/)
- [JavaScript 高级程序设计](https://book.douban.com/subject/10546125/)
- [JavaScript 语言精粹](http://book.douban.com/subject/3590768/)


## <span>Node.js</span>

刚才说过，过去的 JS 就是 JS 本身加上浏览器的 DOM API，于是就有人想到了：能不能把浏览器 DOM API 换成用户操作系统的 API？这样 JS 看起来就更像一门「真正的语言」，即可以在用户本地环境而不只是在浏览器中运行。

幸好，谷歌浏览器（Chrome）使用的 JavaScript 运行环境（v8）发展到近几年已经能非常快地将 JS 代码转为机器码，于是 Node.js 的先驱们就成立了这个组织，基于 Chrome v8 引擎实现了一个跨平台 JavaScript 运行环境 —— 即现在非常流行的 Node.js。

---

这样的感觉是不是很好? JavaScript 开发者的工具也能用 JavaScript 开发了！这才是副标题里描述的「easy and powerful」的前提。

### 如何学习 Node.js

大同小异，如果你在之前知道了如何学习 JavaScript。无非是 JS 本身加上 Node.js 提供的 API 而已。你可以直接打开 Node.js 官网查看其 API。

Node.js 只是一个运行环境，类似于 Java 的 JVM，最重要的还是 JavaScript 本身。

## <span>ES6</span>

很大的可能你现在都是在用 ES5 标准的 JavaScript 语法，而 ES6 则是 TC39(负责制定 JavaScript 语言标准的机构) 在 2015 年新推出的语言标准。

**为什么我要学新的 ES6 标准?**

- 你不必。因为 ES6 及以后的任何一个新的 JS 标准都是向后兼容的，也就是说任何你现在写的代码也是符合未来版本的 JS 的标准的。
- 为什么不？试试又不会怀孕，而且你会有眼前一亮的感觉。任何语言都是在进化的，特别是前端发展那么快。

说得差不多了，不过你可能奇怪为什么不介绍如何学习一些 JS 框架呢？比如 jQuery、Angular、React、Vue 这些。

OK，下期就是这些框架的介绍，同时以后会介绍一些构建工具和其它相关内容。
