---
title: 用 npm scripts 和 nswatch 替代 gulp
subtitle: Long live gulp, I use npm script
date: 2016-08-29 16:54:30
tags:
  - gulp
  - npm
---

## <span>为什么用 npm scripts ?</span>

首先我觉得  [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.8wsejnq0u) 里说的不用 gulp 的理由基本没有道理:

1. gulp 插件质量、数量和实时性

作者抱怨 gulp 插件的质量取决于插件作者，这可以理解，**但是 npm 的包同样取决于作者啊**。

作者抱怨 gulp 插件的数量不如 npm，**这不是废话吗**。

作者抱怨 gulp 插件不能及时更新，比如 babel 6 升级了 gulp-babel 并没有立刻升级。**又不是看直播，干嘛实时?**

2. debug 很痛苦，gulp crash 掉是因为某个插件吗还是因为版本问题

额，难道直接用 npm package 就没有这些问题吗。

3. 不连贯的文档，比如 gulp-eslint 和 eslint，eslint 的文档就是 gulp 插件的文档好得多

这不又是废话吗，写个插件还要把用的包的文档重新写一遍?

---

好了，原文挑剔 gulp 的理由全被扳倒了，但是其中支持 npm 的理由倒是挺有道理:

1. npm scripts 并不需要你很擅长命令行操作

你并不需要在 npm scripts 里用一些很高深的命令行，很多 unix 命令是需要花很长时间学习的。像类似 rm -rf 之类的命令很容易掌握，而且也有相应的 npm 包 [rimraf](https://github.com/isaacs/rimraf) 让你使用，且跨平台支持。

2. npm scripts 不够强大吗?

```JSON
{
  "scripts": {
    "clean": "rimraf ./dist && mkdir dist",
    "prebuild": "npm run clean",
    "build": "cross-env NODE_ENV=production webpack"
  }
}
```

npm scripts 甚至支持 `pre` `post` 这些 hook 让你在相应的一个 task 之前和之后调用。

你可以直接执行一个文件来完成相应的构建工作，这让你几乎能做任何 gulp 能做的事:

```JSON
{
  "scripts": {
    "build": "node build.js"
  }
}
```

3. npm scripts 不是跨平台的

因为你可能会在 npm scripts 里用一些 unix 命令，解决方案有很多，比如用 npm 包替代这些命令。

4. 可维护性

gulp tasks 也多了以后会变得很难维护，npm scripts 也是。解决方案是推荐写精简的 script，比如一个 script 只干一件事。或者很长很复杂的话你就需要专门放到一个 JS 文件里然后再在 npm scripts 里调用了。

## <span>nswatch</span>

> https://github.com/egoist/nswatch

在 npm scripts 里只执行一个构建任务你可能不需要类似 `gulp.watch` 这样的功能，因为大部分构建工具都自带了 watch 功能，比如 `webpack --watch` 和 `rollup --watch`，但是排除这种情况在构建多个任务的时候就不方便了。

比如你要同时用一些 `.jade` `.css` `.js` 这些文件分别编译成 `.html` `.css` `.js` 文件，开发的时候怎么搞啊，怎么 watch 这些文件然后执行 rebuild 呢？好吧，你又想到了 `gulp` 😂

不过现在有 `nswatch` 了，为了解决类似的需求我今早洗澡之后写的。和 `gulp.watch` 类似，监听一些文件，不过这里是执行相应的 npm script。

你的 npm scripts:

```JSON
{
  "scripts": {
    "build:js": "node scripts/build js",
    "build:html": "node script/build html",
    "build:css": "node scripts/build css"
  }
}
```

然后你可以在 `scripts/build.js` 里用你喜欢的 npm 包，比如 rollup, jade, postcss，来编译相应文件。

最后添加 `nswatch`:

```JSON
{
  "scripts": {
    "watch": "nswatch src/*.js --script build:js & nswatch src/*.css --script build:css  & nswatch src/*.jade --script build:html "
  }
}
```

由于有三个任务所以写得很长，你可以把它放进单独文件 `scripts/watch.js`:

```JavaScript
const watch = require('nswatch')

watch('./src/*.js', ['build:js'])
watch('./src/*.jade', ['build:html'])
watch('./src/*.css', ['build:css'])
```

然后执行 `node scripts/watch` 一切都能运行了！

最后你可能还是需要把 `node scripts/watch` 写进 `package.json`，以后都用 `npm run watch` 来执行:

```JSON
{
  "scripts": {
    "watch": "node scripts/watch"
  }
}
```