---
title: Node.js 命令行程序是如何工作的
subtitle: 命令行程序，也就是通过文本在终端中与程序进行交互
date: 2017-10-18 17:15:45
tags:
  - cli
  - node
---
你可能已经知道，在终端里可以调用不同的解释器来执行你的程序，比如:

```bash
# 执行一段 shell 脚本
sh ./foo.sh
# 执行一段 node.js 代码
node ./bar.js
```

下一步你想做的可能是省略解释器，直接通过运行 `./foo.sh` 或者 `./bar.js` 来执行你的程序。想在命令行输入命令时省略解释器，你可以将它写入实际运行的程序中，比如 `./bar.js`:

```js
#!/usr/bin/env node
console.log('bar')
```

这段程序第一行由两部分组成，即 **Shebang** 和 **解释器命令**。**Shebang** 就是开头的 `#!`，它告诉系统调用后面声明的解释器，而我们需要调用的解释器是 `node`，执行 `/usr/bin/env node` 可以寻找到系统 `$PATH` 里第一个出现的 `node` 命令。

这样你便可以通过执行 `./bar.js` 来执行这段程序了:

```bash
❯ chmod +x bar.js
❯ ./bar.js
```

第一行的 `chmod +x bar.js` 是让系统允许将文件 `bar.js` 直接作为一段程序运行。现在你可以成功看到期望的输出:

![bar](https://i.loli.net/2017/10/18/59e724560f339.png)

## 命令行参数

在网页应用里，我们依靠 *URL* 来获得展现页面内容所需要的参数，比如依靠路径 `/user/egoist` 来获取数据并渲染用户 `egoist` 的页面。而命令行程序所依靠的便是命令行参数。

以刚才的 `bar.js` 为例，假设你需要将 `bar` 字符串重复 n 次输出，而 n 是用户决定的，你会这样做:

```js
#!/usr/bin/env node
const times = process.argv[2] || 1
console.log('bar'.repeat(times))
```

然后在终端可以看到期望的结果:

![process.argv](https://ooo.0o0.ooo/2017/10/18/59e72774a1ce7.png)

`process.argv` 是实际执行的命令参数列表(数组)，比如运行 `./bar 4` 实际执行的是 `node ./bar 4`，第一个参数是解释器命令 `node`，第二个是被执行的程序路径。而我们这里只需要第三个参数。

---

正如浏览器里的 URL 有相应的各种路由解析库一样，将 `/user/egoist` 解析成 `{ username: 'egoist' }` 之类的，命令行参数当然也有，[minimist](https://github.com/substack/minimist) 便是 node.js 社区里应用最多的一个:

```js
const minimist = require('minimist')

// 大多数情况我们不需要关心 process.argv 的前两项
const argv = minimist(process.argv.slice(2))
console.log(argv)
```

使用不同的命令执行一下这段代码试试:

![minimist](https://i.loli.net/2017/10/18/59e72c19cea1f.png)

之后你便可以灵活地通过 `argv` 来判断如何输出用户期望的内容了。

**命令行参数小贴士**:

- 形如 `--foo` 的叫做 `switch`，也就是代表了一个布尔值 `foo: true`，后面不加任何值。
  - 一般用 `--no-foo` 来表示布尔值 `foo: false`。
- 形如 `--name egoist` 的叫做 `flag`, 即后面要加值，比如字符串和数字。
  - 类似的写法是 `--name=egoist`，用 `=` 而不是空格来连接。
- 只有一个连字符的一般用于其它 flag 的简写，比如用 `-f` 作为 `--foo` 的简写，使用这两个之中任何一个的效果相同。连字符后面一般是单个字符，而一个连字符加多个字符其实相当于合并了多个简写，比如 `-xFd` 相当于 `-x -F -d`。
- 某些命令行参数解释器支持用英文小数点 `.` 连接的参数，比如: `--foo.bar baz`，解析之后对象 `foo` 的属性 `bar` 的值就是 `baz`。

## 命令行程序框架

类似 web 开发，你当然可以完全从头写你的命令行程序，自己实现一个命令行参数解释器，然后自行判断如何根据参数返回结果。

不过这有点浪费时间且本末倒置，如果你就是想学习那些方面的内容，你可以那样干，否则如果你只是想为你的一个奇思妙实现一个命令行工具，那就有点得不偿失，不如直接使用现成的框架来加速达成你原本的目标。

### 框架干了哪些事

- 根据不同的命令[^1]调用不同的模块。
- 自动生成帮助信息，比如执行 `git --help` 显示的内容。
- 让整个程序更安全，比如指定 flag 哪些是必需的。
- 自动命令补全。

在这里我就不过多介绍框架了，毕竟只要了解原理就能举一反三，不过我还是推荐几个常用的，节省读者的时间:

- [Meow](https://github.com/sindresorhus/meow): 简单的基于 [minimist](https://github.com/substack/minimist) 的包装，没什么新功能。
- [Commander.js](https://github.com/tj/commander.js): 功能齐全的框架，提供类似 git 的子命令系统，自动生成帮助信息等。
- **[CAC](https://github.com/egoist/cac): 类似 Commander.js 但更轻巧、现代，支持插件。(我做的)**
- [Yargs](http://yargs.js.org/): 功能强大的框架，但显得过于臃肿。

这里用 CAC 举个简单的例子，介绍一下如何使用:

```js
// 假设把它放在 cli.js 里
const cli = require('cac')()

// 定义一个命令
cli.command('hi', '打招呼', input => {
  console.log(`Hi ${input[0]}`)
})

// 开始解析 process.argv 并执行相应命令
cli.parse()
```

执行 `./cli.js` 试试:

![cac](https://i.loli.net/2017/10/18/59e76be370455.png)

如你所见，这里只会在执行 `hi` 命令之后才会打招呼。

同时添加 `--help` flag 会打印出帮助信息:

![help](https://ooo.0o0.ooo/2017/10/18/59e76f8c2d27a.png)

## 配置 package.json

要想让你的程序的可执行文件全局可用，你需要将其加入到系统 `PATH` 中，而 npm 简化了这一步骤:

```json
{
  "name": "my-cli",
  "bin": "./cli.js"
}
```

在本地测试时执行 `npm link` 或者 `npm i -g .` 系统便有了 `my-cli` 命令。

这里通过配置 [bin](https://docs.npmjs.com/files/package.json#bin) 让 npm 在安装程序的时候在 `{prefix}/bin` 目录创建一个[符号链接](https://zh.wikipedia.org/zh-hans/%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5)指向 `./cli.js` 的绝对路径。在不同的情况下这个 `prefix` 不同:

- 全局安装的模块(即 `npm install -g`)的 `prefix` 是执行 `npm prefix -g` 得到的路径。
- 否则将是当前目录里的 `./node_modules/.bin`。

[^1]: 这里的命令指程序中的命令，比如 `git` 程序中有个命令叫 `log`，你可以通过执行 `git log` 使用。