---
title: "Bili: 打包 JS 库的瑞士军刀"
subtitle: 基于 Rollup 的打包工具
date: 2017-07-08 15:13:17
tags:
---

## 预习

### Rollup

[Rollup](https://github.com/rollup/rollup) 类似 [Webpack](https://webpack.js.org)/Browserify 之类的打包工具，但是打包出来的文件更小，即便是和 Webpack 3 相比。除此之外 Rollup 主要用于打包 library 并且拥有非常简单的 API 接口。

### 瑞士军刀

多种用途，携带方便且操作简单，意外地看起来很酷。

## 授业

> 学生 A：道理我都懂，可是 EGOIST sensei[^sensei]! 为什么给 Rollup 套个皮就拿出来卖了？这根本不是编程！

的确这不是什么有难度、有深度的东西，只是用来解决一个简单的问题：简化打包流程，提高人类自身价值感和归属感。

> 学生 B：哦？是怎么做到的呢，想知道呢！sensei sensei 快告诉我！

既然这个同学可爱地向我提问了那我就简明易懂地告诉大家吧！你可以在 [WIKI](https://github.com/rollup/rollup/wiki/JavaScript-API) 找到 Rollup 的 API 食用方法，简单地说它接受一个参数，而这个参数决定了如何寻找、操作你的源代码，比如:

```js
rollup.rollup({
  // 从这个文件开始:
  entry: 'src/index.js',
  // 用写插件自定义如何转换代码吧
  plugins: []
})
```

然后它会返回一个 Promise 把 `bundle` 送到你手上，你可以决定如何生成文件:

```js
rollup.rollup(options)
  .then(bundle => {
    // 我想写到磁盘上！
    bundle.write({
      // 等等 Rollup 娘，写成 commonjs 格式的哦！
      format: 'cjs',
      // 给生成的文件一个名字吧！
      dest: 'bundle.js'
    })
  })
```

> 学生 C 跳了起来: EGOIST sensei! 这看上去好简单啊，根本没你的 [Bili](https://github.com/egoist/bili) 的出场机会了啊 QAQ

的确很简单，但是你可以看看 [Vue](https://github.com/vuejs/vue/blob/dev/build/build.js) 和 [React](https://github.com/facebook/react/blob/master/scripts/rollup/build.js) 的构建脚本，真是无比地冗长。

越 low level 的 API 看起来就越简单，但在大项目中就会被有经验的开发者用更复杂的方式来使用，人们称这种情况为 **M 属性**，不过这已经在这节课的范畴之外了。

简而言之，大多数项目都会有生成多个 bundle 的需求，比如不同格式的 bundle、抑或替换了不同变量的 bundle，你势必将多次使用 Rollup **简单**的 API 来解决这些需求。而将这一行为抽离出来，放进一个单独的工具中以便重复使用，便是 Bili 干的事:

```bash
bili --format cjs,umd,es --compress umd
```

为了能尽可能直接用命令行就可以使用 Bili 的全部功能，`format` 接受以逗号分割的一个或多个格式名，当然数组也可以不过命令行里不太方便。

让我们来看看使用原汁原味的 Rollup 来写看起来是什么样子:

```js
import { rollup } from 'rollup'

function build(format) {
  const plugins = [
    // ES2015 -> ES5
    require('rollup-plugin-buble')()
  ]

  let compress = false

  if (format.endsWith('Compress')) {
    format = format.replace(/Compress$/, '')
    compress = true
  }

  if (format === 'umd') {
    // 把第三方模块打包进来
    plugins.push(
      require('rollup-plugin-node-resolve')(),
      require('rollup-plugin-commonjs')()
    )
  }

  if (compress) {
    // 压缩
    plugins.push(require('rollup-plugin-uglifyjs')())
  }

  return rollup({
    entry: 'src/index.js',
    plugins
  }).then(bundle => bundle.write({
    dest: `dist/index.${format}.js`,
    format
  }))
}

Promise.all(['umd', 'cjs', 'es', 'umdCompress'].map(build))
  .then(() => console.log('done'))
  .catch(err => console.error(err))
```

就是以上这样的感觉，Bili 最近被中国超高校级的计算机协会授予了节能减排倡导先锋和键盘寿命拯救者的光荣称号，以及还有人类脑细胞的救星、键盘手杀手、让正太和萝莉也很容易地打包了这些市井称号。

[Bili 被大量使用在我的前端库中](https://github.com/search?l=JSON&o=desc&q=bili+scripts+build&s=indexed&type=Code&utf8=%E2%9C%93)，有人会问那 CSS 以及图片、字体什么的怎么办，对于 CSS 我一般不会打包，直接原样交给用户。而字体、图片什么的一般也都是 CSS 里用的，自然同理。当然，我暂时还没有遇到需要字体和图片的情况。

## 放课后

放学后同学们都会到家跃跃欲试，打开电脑，发现了 [Bili](https://github.com/egoist/bili) [v0.17](https://github.com/egoist/bili/releases/tag/v0.17.0) 的数个 breaking changes，当然都是花一分钟就能搞定的变更。

从此，大家过上了幸福的打包生活。

[^sensei]: 日语中老师(センセイ)的意思，由女高中生说出来时才可充分表现语言的张力。