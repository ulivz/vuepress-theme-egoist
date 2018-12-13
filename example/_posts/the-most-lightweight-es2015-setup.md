---
title: 最轻量的 ES2015 编译配置
subtitle: Sometimes Babel, Sometimes Buble.
date: 2017-04-28 21:11:32
tags:
  - babel
  - buble
---
## 用 Buble 替换 Babel

[Babel](http://babeljs.io/) 可以说是编译 ES2015+ 代码到 ES5 的首要选择，它的可扩展性很高，基于插件几乎能做任何事。

而 [Buble](https://buble.surge.sh/guide/) 则去掉了这种可扩展性，只会转换能够用 ES5 实现并保证性能的新特性，同时这样也让你免去配置的步骤。

对于下面这段代码，你可以通过编译结果看出它们设计上的不同:

```js
class Foo {
  constructor() {
    this.pos = 0
  }

  say(word) {
    return `hello ${world}`
  }

  walk() {
    this.pos++
  }
}
```

Babel 的结果:

```js
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function () {
  function Foo() {
    _classCallCheck(this, Foo);

    this.pos = 0;
  }

  _createClass(Foo, [{
    key: "say",
    value: function say(word) {
      return "hello " + world;
    }
  }, {
    key: "walk",
    value: function walk() {
      this.pos++;
    }
  }]);

  return Foo;
}();
```

Buble 的结果:

```js
var Foo = function Foo() {
  this.pos = 0
};

Foo.prototype.say = function say (word) {
  return ("hello " + world)
};

Foo.prototype.walk = function walk () {
  this.pos++
};
```

总的来说 Buble 的结果可读性更强、更简洁，而且设计初衷就是为了不引入 `_createClass` 之类的 runtime。

## async/await 和 generator 函数

Buble 暂时不支持编译 async/await 和 generator 函数，目前有以下几个工具作为替代:

- [nodent](https://github.com/MatAtBread/nodent) (性能比 babel-plugin-tranform-async-to-generator 更好)
- [async-to-gen](https://github.com/leebyron/async-to-gen) (不支持编译 generator)

我一般会将 Rollup、Buble 以及 async-to-gen 配合使用:

```js
// rollup.config.js
export default {
  plugins: [
    require('rollup-plugin-async')(),
    require('rollup-plugin-buble')()
  ]
}
```

其实由于在开发 web app 的时候基本还是用 webpack 为主而且又是对 ES features 的需求不止于 ES2015，这个时候我一般还是选择用 Babel 编译。

而对于可复用的 library，不太需要 async/await 或者只是针对 Node.js 环境的时候，使用 Buble 还是很理想的。