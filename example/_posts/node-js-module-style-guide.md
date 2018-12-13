---
title: Node.js 模块风格指南
subtitle: 编写高质量、可复用的 Node.js 模块
date: 2016-01-29 09:44:30
tags:
  - node.js
  - javascript
  - sindresorhus

---
JavaScript 代码一向的特点就是难以维护，保持一个良好的代码、组织风格有助于提升效率、重构代码、添加新功能、单元测试等等。

我总结了一下写了 200 个 NPM package 之后的一些个人经验和习惯。

## <span>初始化一个项目</span>

不再使用 `npm init`。因为除了 `package.json` 还有一些额外的配置文件，比如 `circle.yml`、`.editorconfig`、`LICENSE` 、`README.md` 等等。

使用 [yeoman](http://yeoman.io)。如果你喜欢在代码中使用分号和用 travis 来测试，推荐 [sindresorhus](https://github.com/sindresorhus) 用的 [generator-nm](https://github.com/sindresorhus/generator-nm)。如果你不喜欢分号并且用 circle 来测试，推荐我用的 [generator-esnm](https://github.com/egoist/generator-esnm)。

想要定制你的 README.md ? [blah](https://github.com/IonicaBizau/blah) 可以为你定制生成 README.md 以及更多提升效率的功能。

## <span>注释</span>

每一个具有单独意义的代码片段前都推荐写注释，就算再简单的代码你隔几天看也不可能一秒看出它在干什么，而有了注释就可以。对于复杂且意义重大的代码尽量写完整的 jsdoc 来说明。

另一个原因就是这样可以让你的代码显得更格式化，代码挤在一堆很傻且不美观。而且你也可以自动从你代码的 jsdoc 生成 api doc！

```js
/**	
 * Module dependencies
 */
const path = require('path')

/**
 * Reverse array but not change itself
 *
 * @param {Array} names
 * @return {Array}
 */
function rev(names) {
	return names.concat().reverse()
}
```

## <span>编写可复用模块</span>

对于一个项目中多次使用（>1）的代码，推荐放入单独的文件作为模块使用。  
对于更为通用的代码尽量打包进一个单独的 npm module 来使用。

## <span>代码风格指南</span>

对于分号的问题不作讨论，加不加都行。

对于异步代码，尽量不要使用 callback 而是改成 Promise，并且把 HTTP 请求封装进单独的模块，这样更方便配合 [co](https://github.com/tj/co) 来使用。

```js
// fetchData.js
// 老式回调风格
const request = require('superagent')

module.exports = function (callback) {
	request
		.get('xxx.json')
		.end((err, res) => {
			callback(res)
		})
}
// app.js
// 调用它
const fetchData = require('./fetchData')

module.exports = function () {
	fetchData(data => {
		console.log(data)
	})
}

// fetchData.js
// 无阻塞同步代码风格
const fetch = require('node-fetch')

module.exports = co.wrap(function* () {
	const data = yield fetch('xxx.json')
		.then(data => data.json())
	return data
})
// app.js
// 调用它
const fetchData = require('./fetchData')

module.exports = co.wrap(function* () {
	const data = yield fetchData()
	console.log(data)
})
```

**还使用 co? 不是有 async/await 吗?**

在 async/await 没被 v8 引擎实现之前用 co 都还是第一选择，除非某些情况你使用了 babel 那你可以考虑使用 async/await。不过即使现在用 co 在将来 async/await api 被实现的时候也能轻松地迁移过去。

> co is a stepping stone towards ES7 async/await -- TJ Holowaychuk


## <span>ESLint</span>

保持良好代码风格的方法之一就是 lint 你的代码，选择你习惯的代码风格，用编辑器实时 lint 或者添加一些 git hook 在 commit 的时候 lint 也可以。

我目前使用 [xo](https://github.com/sindresorhus/xo) 来检测代码，它默认无需配置但你可以根据你的喜好调整，基于 ESLint 。如果你喜欢这个风格也可以直接在 ESlint 中使用它的[配置文件](https://github.com/sindresorhus/eslint-config-xo)。

## <span>测试</span>

写测试是很有趣的，当且仅当你用 [AVA](https://github.com/sindresorhus/ava) 的时候。

![ava](https://camo.githubusercontent.com/fc55513ee5cb412b2b0d1540032b602ed0142dbe/68747470733a2f2f63646e2e7261776769742e636f6d2f73696e647265736f726875732f6176612f666531636561316361336432633835313863306363333965633862653539326265616239303535382f6d656469612f6c6f676f2e737667)

我使用 AVA 的主要原因是:

- 很快
- 语法简洁
- 内置 ES2015/2016
- many more...

## <span>Commit</span> 风格

不使用没有意义的 Commit 信息，比如单纯只写个 `fix`、`update`、`change`。

尽量描述你干了什么事:

```bash
git commit -m "fix tweak on ie9"
git commit -m "release 0.0.1"
git commit -m "refactor to use es2015"
git commit -m "🔥"
```

更好的做法是使用 [commitizen](https://github.com/commitizen/cz-cli) 来规范你的 commit message 格式。

![commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

## <span>Semantic-Release</span>

发布 NPM 模块是很让人困扰的一步，你需要手动 bump version，需要执行 `npm test` 来看是否有错，然后再手动执行 `npm publish`，这些步骤可以被规范且自动化。

使用 [semantic-release](https://github.com/semantic-release/semantic-release) 可以自动分析你的 commit message 然后根据这些推测你的代码改动来进行语义化的版本号升级并自动更新 changelog，[这些](https://github.com/egoist/tooling/releases) 就是自动生成的。

## <span>2016</span>

200 more modules? Exciting! ✨
