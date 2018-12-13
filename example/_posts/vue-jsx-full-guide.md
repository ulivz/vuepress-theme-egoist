---
title: Vue JSX 使用指南
subtitle: JSX 相关专利归 NoFaceBoooooooooook 所有
date: 2017-09-21 12:19:14
tags:
- vue
- jsx
---

## 什么是 JSX?

没怎么使用 React 或类似框架的同学可能不太了解 JSX，对此我不做赘述，简而言之这就是一种对 JavaScript 的补充，用来描述组件的 UI 部分，类似模板语言但它完整支持 JavaScript 本身的语言特性。

参考 FaceBook [关于 JSX 的介绍](https://facebook.github.io/react/docs/introducing-jsx.html)。

## 转换 JSX

JSX 只是对 JavaScript 的补充并没有浏览器的支持，所以你需要用 [Babel](http://babeljs.io/) 搭配 [babel-preset-vue](https://github.com/vuejs/babel-preset-vue) 来获得完整的 Vue JSX 功能。

## 使用 JSX

### render 和 createElement 函数

你也许对 Vue 的 template (模板) 已经很熟悉了，如果你是用了 webpack + vue-loader 之类的组合，它其实是被转换成了 `render` 函数。

对于以下单文件组件:

```vue
<template>
  <div>{{ msg }}<div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello'
    }
  }
}
</script>
```

被 webpack + vue-loader 处理后是:

```js
export default {
  data() {
    return {
      msg: 'hello'
    }
  },
  render() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('div', [_vm._v(_vm._s(_vm.msg)), _c('div')])
  }
}
```

<small>*[在线调试](https://jsx.egoist.moe/gist/8a264502933118ee7afe811139bb52f6)*</small>

这里的 [createElement](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments) 函数也经常被叫做 `h` 函数，它被用来创建一个 [vNode](https://github.com/vuejs/vue/blob/dev/src/core/vdom/vnode.js) (虚拟 DOM 节点)。你可以通过 `this.$createElement` 访问它但同时它也是 `render` 函数的第一个参数。

在使用 JSX 的时候，类似 template，不过只会转换 `render` 函数中的 JSX 表达式。

对于以下源代码:

```jsx
export default {
  data() {
    return {
      msg: 'hello'
    }
  },
  render() {
    return <div>{this.msg}</div>
  }
}
```

它会被转换成:

```js
export default {
  data() {
    return {
      msg: 'hello'
    };
  },
  render() {
    const h = arguments[0];

    return h(
      'div',
      null,
      [this.msg]
    );
  }
};
```

<small>*[在线调试](https://jsx.egoist.moe/gist/a2bda79dfa96053bc9bb5e743988796e)*</small>

## Vue JSX 特性

### 和 React JSX 的不同

Vue JSX 中 createElement 的第二个参数 `data` 与 React 中的有些不同，它是个嵌套的对象并且每个顶层的属性由不同的模块处理，提供不同的功能，比如 `class` (在 React 中是 `className`) 和 `on` 这两个属性:

```js
createElement('div', {
  class: ['foo', 'bar'],
  on: {
    click: this.click
  },
  ['foo']
})
```

对应的 JSX 是:

```jsx
<div class="foo bar" onClick={this.click}>foo</div>
```

对于这种嵌套对象，你可以在 JSX 中用 camelCase 或者 kebeb-case (连字符) 来表示，换句话说这里 JSX 中的 `onClick` 也可以写成 `on-click`，前者是为了让熟悉 React JSX 的同学更方便而加入的。

完整的属性列表请参考相关 [typing](https://github.com/vuejs/vue/blob/2deda3d4328eb7aea0adb0eaf01d68537ed0e0af/types/vnode.d.ts#L36-L60) 和 [README](https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx)。

### v-model <sup>[插件页面](https://github.com/nickmessing/babel-plugin-jsx-v-model)</sup>

不久之前 Vue JSX 还不支持 `v-model` 因为这个转换比较复杂，感谢 [@nickmessing](https://github.com/nickmessing) 的 [babel-plugin-jsx-v-model](https://github.com/nickmessing/babel-plugin-jsx-v-model) 插件。

对于以下 template:

```html
<input v-model="username" >
```

对应的 JSX 是:

```jsx
<input v-model={this.username} />
```

编译后:

```js
import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";

var _this = this;

h(
  "input",
  _mergeJSXProps([{
    domProps: {
      "value": _this.username
    },
    on: {
      "input": $event => {
        if ($event.target.composing) return;
        _this.username = $event.target.value;
      }
    }
  }, {
    directives: [{
      name: "model",
      value: _this.username
    }]
  }]),
  []
);
```

<small>*[在线演示](https://jsx.egoist.moe/gist/7de4ca46ae8eb69dbd861e23c4603f64)*</small>

其实在 JSX 里的 `v-model` 就是语法糖，你当然可以手动书写对应的逻辑。而这个 Babel 插件则简化了这一步骤。JSX 中的 `v-model` 拥有 template 中同样的功能。

### 事件修饰符 <sup>[插件页面](https://github.com/nickmessing/babel-plugin-jsx-event-modifiers)</sup>

template 中的键盘事件修饰符在 JSX 中也有完整的支持。

对于以下 template:

```html
<input @keydown.enter="handleEnter">
<a @click.stop.prevent="doThat"></a>
```

对应的 JSX:

```jsx
<input onKeydown:enter={this.handleEnter}>
// 多个修饰符用 `-` 连字符连接
<a onClick:stop-prevent={this.doThat}>Click</a>
```

转换之后的 JS:

```js

var _this = this;

h(
  "a",
  {
    on: {
      "click": $event => {
        $event.stopPropagation();
        $event.preventDefault();

        _this.doThat($event);
      }
    }
  },
  ["Click"]
);
```

<small>*[在线演示](https://jsx.egoist.moe/gist/8b99c95854d389df4772e4b677966403)*</small>
