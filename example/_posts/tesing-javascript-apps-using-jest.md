---
title: 用 Jest 测试 JavaScript 应用
date: 2017-11-26 15:05:04
tags:
  - jest
  - javascript
  - test
---
Jest 是 FaceBook 用来测试 JavaScript 应用的一套测试框架，这些应用当然也包括了 React 应用。它的优点之一是自带了对 React 的支持，同时也很容易支持其它框架。

从最简单的开始，我们可以看看如何用 Jest 测试纯 JS 项目。

假设你需要测试 `sum.js`:

```js
export default (a, b) => a + b
```

你只需要对应地新建一个 `sum.test.js`[^1]:

```js
import sum from './sum'

test('sum', () => {
  expect(sum(2, 3)).toBe(5)
})
```

<details style="margin-bottom: 30px">

<summary>

关于这里的 `expect` 语法

</summary>

这里的 `expect` `toBe` 是 Jest 默认使用的断言语法，也就是用来比较 `值` 的 API，详见[相关文档](https://facebook.github.io/jest/docs/en/using-matchers.html#content)。

</details>

然后在终端运行 `jest` 命令的时候就会自动找到这个文件，执行这里面的测试:

![jest](https://i.loli.net/2017/11/26/5a1a6a9148ca3.png)

额，报错了，原来 Jest 默认只支持你所使用的 node.js 版本所支持的 JS 特性，例如 `import` `export` 就不支持，所以要么你的代码使用系统 node.js 兼容的语法写 (也就是使用 `require`)，要么在这里使用 Babel 转义一下。

在 Jest 中使用 Babel 很简单，只需要安装 `babel-jest` 并新建一个 `.babelrc` 加入你想要的配置就行了，Jest 会自动使用 `babel-jest`。这里我们简单地使用 `babel-preset-env` 即可，对应的 `.babelrc` 是:

```json
{
  "presets": ["env"]
}
```

然后重新运行 jest 测试便通过了:

![jest 2](https://i.loli.net/2017/11/26/5a1a6c085ba32.png)

对于 React 应用，基本和纯 JS 项目类似，不过你需要在 `.babelrc` 中配置对 `JSX` 的支持，在大多数时候你的项目本身就已经在使用 `.babelrc` 了，所以这一步甚至也省略掉了。

## 资源文件

当你要测试的代码引用了非 JS 文件时，Jest 就不知道如何使用这些文件了，例如你的 Webpack 项目中的一个文件:

```js
import './style.css'
```

正如你需要在 Webpack 中配置了 `css-loader` 一样，你也需告诉 Jest 如何处理 CSS 文件。

📝 **package.json:**

```json
{
  "jest": {
    "transform": {
      "^.+\\.(js|jsx)$": "babel-jest",
      "^.+\\.css$": "<rootDir>/jest/css-transform.js"
    }
  }
}
```

<details style="margin-bottom: 30px">

<summary>

关于 babel-jest

</summary>

当你手动在 `package.json` 里设置了 `jest.transform` 时 `babel-jest` 不再会被自动使用了，我们需要在这里手动配置。

</details>

对应的 `./jest/css-transform.js`

```js
// 大多数测试并不关心 CSS 文件里的内容
// 所以这里我们直接返回一个空的对象
module.exports = {
  process() {
    return 'module.exports = {};'
  },
  getCacheKey() {
    // The output is always the same.
    return 'css-cache'
  }
}
```

类似地，你可以使用 `transform` 来设定如何处理其它类型的文件，比如 `.vue`[^2] `.svg` 文件。


[^1]: Jest 默认使用 `[ '**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)' ]` 这些测试文件，当然这是[可配置](https://facebook.github.io/jest/docs/en/configuration.html#testmatch-array-string)的。
[^2]: `.vue` 的 `transform` 可以使用社区的 [jest-vue](https://github.com/eddyerburgh/vue-jest)。

## 浏览器 API

假设你要测试的是一个 Web 应用，依赖于一些浏览器 API 比如 `window` `document`，它在 Jest 中同样可以正常运行，因为 Jest 默认使用了 [js-dom](https://github.com/tmpvar/jsdom) 来模拟浏览器环境，不需要浏览器环境时可以通过使用命令行参数 `--env node` 或者[配置文件](http://facebook.github.io/jest/docs/en/configuration.html#testenvironment-string)来禁用。

## Snapshot 测试

当你期望某个值不会改变的时候，可以使用 snapshot 测试。简单地说，它就是记录这个值的状态到[本地自动生成的 snapshot 文件](https://github.com/facebook/jest/blob/master/examples/snapshot/__tests__/__snapshots__/link.react.test.js.snap)里，然后在下一次测试中用新的值来和其进行对比。这对 UI 之类的测试很有帮助:

```js
import React from 'react'
import Link from '../Link.react'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
```

这确保了 `<Link page="http://www.facebook.com">Facebook</Link>` 渲染出的内容不会出错。

当你更改了 `<Link>` 组件的逻辑，需要更新 snapshot 文件时，可以加上 `--updateSnapshot` 或者 `-u` 来更新。

类似的，Snapshot 测试不止于 UI 测试中，假设你写了个 Markdown 解析器，你可以用它来确保解析出的内容不会改变:

```js
import renderMarkdown from './my-markdown-parser'

test('render correctly', () => {
  const html = renderMarkdown('# markdown code')
  expect(html).toMatchSnapshot()
})
```

查看[相关文档](https://facebook.github.io/jest/docs/en/snapshot-testing.html#content)。

## 异步代码测试

https://facebook.github.io/jest/docs/en/asynchronous.html#content

我就懒得写了... 反正用 `Promise` 或者 `async/await` 就对了。
