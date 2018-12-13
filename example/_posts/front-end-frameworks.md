---
title: 前端框架概览
subtitle: Do you really need frameworks?
date: 2016-03-21 13:31:32
tags:
  - frontend
  - javascript
  - js
  - bootstrap
  - jquery
  - vue
  - react
  - mvvm
---
前端框架在近来是非常流行的词(Buzz word)，我现在就来介绍一下其中主流的框架，并且帮你区分什么是真正的「前端框架」。

## <span>流行词汇</span>

一说起前端框架你就会听到一些看似很高深的词汇，比如 `mvvm` `vdom` `view layer` `unidirection` 等等，以及这些人们所谓的「框架」：

- Bootstrap
- jQuery
- BackBone
- AngularJS
- React
- Vue

## <span>框架大乱战</span>

### Bootstrap

Bootstrap 是一个框架吗? 是的，就算它只是一系列**常用 CSS 和 jQuery plugin** 的集合，它还是一个框架。不过它更多的是一个常用代码片段的集合，而不是一个那种能带来设计模式的框架。

Bootstrap 带给你的是栅格系统，是预置的按钮、表单、列表、导航、响应式等等样式，它在你独立开发的时候非常有用，因为能节约用来「设计网页」的时间，而且这套预置的样式本身「也不丑」，自然是受很多公司「前期快速开发」的青睐了。

我更愿意把 Bootstrap 称为一个 UI library，就像与之类似的 [purecss](http://purecss.io/)、 [Foundation](foundation.zurb.com) 一样。当然最近比较火的微信移动端使用的 UI 库 [weui](https://github.com/weui/weui) 自然也属于这个范畴。

### jQuery

jQuery 是一个现象，它重新定义了 dom 操作这一行为。

从某种意义讲，jQuery 是一个 framework，因为它让直接操作 dom 来进行 UI 交互成为了一种设计模式（笑）。这是个玩笑， jQuery 更多只能看做一个更抽象的 DOM API，弥补的原生 DOM API 的不足，并增加了很多常用的 helper。

常见的 Web 设计模式就是 MVC 和 MVVM，它们和 jQuery 之间另一个不同就是对于数据的处理。用 jQuery 写的代码常常直接用 dom 来和 data 打交道，需要「手动地」更新页面。反之 MVC 和 MVVM 通常把数据存储在 model 这个 layer 上，通过一定的绑定机制实施更有效率的页面渲染和更新。

### BackBone

BackBone 经常和 jQuery 一起用， MVC 模式 + 一个高度抽象的 DOM API 曾经征服了很多开发者的心。

然而 BackBone 经常被人诟病为「不是 MVC」的 MVC，原因在于你很难把用 jQuery 写出的代码合理地用 MVC 模式来进行归纳，在我看来，这是因为没有一个规范的 View layer 来组织 dom 相关的代码。

### Angular/Vue/React

详见 http://cn.vuejs.org/guide/comparison.html

## <span>我的选择</span>

在我看来 Vue 和 React 是更现代的选择，Angular 2 的学习曲线看起来十分陡峭，让我望而生畏，有爱好者也可以尝试一下。

Vue 和 React 最大的区别就是社区的活跃度和成熟度。

React 社区看似活跃和成熟但是所谓的 best practice 层出不穷，有时候 [一个东西](http://sam.js.org/) 换了一个名字就能拿出来卖弄一番，扰乱视听。

Vue 社区则看起来更加专制，现状是各路菊苣唯 [小右](http://evanyou.me/)  马首是瞻。这不是不好，非常好，正确的东西有很多人追随这没有不对的。而且现在社区也在蓬勃发展，小右本人也开始全职开发 Vue 和相关生态组件。

## <span>如何学习一个框架</span>

### 基础

首先熟悉这个框架是最基本的，通过阅读官方的一些 guide 并且自己动手操作比较好的做法，比如在 [JSbin](http://jsbin.com/) 上试试 Vue。这方面 Vue 的 [官方教程](http://cn.vuejs.org/guide/) 由浅入深、面面俱到堪称业界典范。

### 生态

一个没有生态的框架是活不长的，生态的重要性之一是节省了开发者重复劳动的时间。所以你下一步就是广泛了解相关生态，比如你会用 React 做 todomvc 之后可以去看看 [awesome-react](https://github.com/enaqx/awesome-react)，通常那里也会有一些前人写的指南。

### 持续学习

我自认为作为开发者的一个好习惯就是「凡事尽量自己解决」，有些东西即使别人一次给你说清了，你没有自己解决的经验下次再遇到类似的问题很难触类旁通。

「自己解决」不是指自己做个伸手党，而是指能 Google 就绝不~~百度~~，能~~百度~~就绝不提问，能提问就尽量描述清楚，能描述清楚就想想能不能通过 Google 解决。
