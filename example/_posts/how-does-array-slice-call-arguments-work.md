---
title: '[].slice.call(arguments) 是如何工作的'
date: 2015-12-13 22:39:30
tags:
  - javascript
categories:
  - javascript
---
首先 `.slice` 这个方法在不接受任何参数的时候会返回 `this` 本身，这是一个 `Array.prototype` 下的方法，因此 `this` 就是指向调用 `.slice` 方法的数组本身。

`arguments` 是什么? `arguments` 是属于函数内部的变量，其值是函数参数列表，一个类数组对象:

https://codepan.net/gist/edb0a855276de09d24ac0e5621957974

类数组对象可以像真正的数组对象一样操作，除了没有 length 属性，但这足以让 `.slice` 方法识别了。

你不可能用 `arguments.slice()` 这样的形式调用，因为 `arguments` 本身还是一个非数组对象，只是像数组。这个时候你想到了 `.call` 方法，这个方法让你可以自定义调用函数的内部 this 指向哪里，之前说过，默认是指向调用这个函数的对象。

```js
Array.prototype.slice.call(arguments)
// output:
['hello', 'world']
```

这样你就得到了一个真正的参数数组了，而 `.slice` 除了通过 `Array.prototype` 访问当然还可以通过对象直接量访问:

```js
[].slice.call(arguments)
```
