---
title: 用 canvas 画一个聊天消息
subtitle: 看了你就学不会 canvas 了
date: 2017-09-15 21:58:02
tags:
- canvas
- javascript
---

我不是个太求上进的人，对大多数事物都是浅尝辄止，喜欢卖弄自己一些一知半解的技巧。

对于 canvas 我不甚了解，因为自己平时没有能用到的地方（毕竟这在我的舒适区之外）。今天我对一个感兴趣已久的表情包再度萌生了兴趣，比如其中一个：

<img src="https://i.loli.net/2017/09/15/59bbde6f0df7c.jpeg" alt="sticker" width="300">

*[source: https://t.me/addstickers/MadeInBitinn](https://t.me/addstickers/MadeInBitinn)*

于是想用 canvas 自动从用户输入的内容中生成一个，虽然我基本没用过 canvas 不过基于以前做 [slogan](https://egoist.moe/slogan/) 的经验我还是开始了。

首先得新建一个 canvas 元素我还是记得的，然后获取它的 2d context:

```js
const $canvas = document.getElementById('canvas')
const ctx = $canvas.getContext('2d')
```

然后开始渲染，对于左边的头像我是暂时忽略的，毕竟我不记得怎么渲染图片了，于是先从其它的文字开始吧，我需要渲染一个用户名和右边的日期:

```js
// 其实我也不记得怎么渲染文字了
// Google 了一下发现是 ctx.fillText(text, x, y)
ctx.fillText('EGOIST', 50, 10)
// 我给左边头像预留 50 宽度
```

它的效果是:

![p1](https://i.loli.net/2017/09/15/59bbe0f394e51.png)

原图里的用户名好像是蓝色加粗未知字体，那我也搜搜改颜色和字体的 API 吧:

```js
ctx.font = 'bold 14px sans-serif'
ctx.fillStyle = 'blue'
```

![p2](https://i.loli.net/2017/09/15/59bbe259e6618.png)

如图我是在 `fillText` 之前设置的 `font` 和 `fillStyle`，原因很明显。

---

接下来要在右边渲染日期，我需要知道用户名的宽度，而我清楚地记得可以用 `ctx.measureText` 获取:

```js
const usernameWidth = ctx.measureText('EGOIST').width
// 重新设置字体和颜色不然会和用户名一样
ctx.font = '14px sans-serif'
ctx.fillStyle = '#666'
// 时间的 `x` 是用户名宽度 + 预留头像的宽度 + 时间到用户名的距离
ctx.fillText('2017/7/7', usernameWidth + 50 + 10, 15)
```

![p3](https://i.loli.net/2017/09/15/59bbe4404645e.png)

---

接下来是消息的主体内容，它可能是多行的而 canvas 无法自动换行，我们需要根据换行符 `\n` 手动识别:

```js
const content = `hello world
goodbye world`

content.split('\n').forEach((text, index) => {
  ctx.fillText(
    text, 
    // 预留头像的宽度
    50,
    // content 距离顶部的距离 + 每一行的大概高度
    30 + 15 * index
  )
})
```

![p4](https://i.loli.net/2017/09/15/59bbe6a3a24df.png)

---

最后只剩下头像了。我知道需要一个 `input` 元素来获取图片文件，然后以某种方式让 `ctx` 能够渲染它:

```html
<input type="file" id="avatar">
```

```js
document.getElementById('avatar').addEventListener('change', e => {
  draw(e.target.files[0])
})

// 下面的内容基本是从 StackOverflow 复制的
function draw(avatar) {
  // 画头像
  const img = new Image()
  img.onload = () => {
    // 头像实际宽度 40
    // 剩下 10px 是到右边的边距
    ctx.drawImage(img, 0, 5, 40, 40)
  }
  img.src = URL.createObjectURL(avatar)

  // ... 画其它东西
}
```

![p5](https://i.loli.net/2017/09/15/59bbe9cc75c16.gif)

---

完成的代码见: https://codepan.net/gist/6630c3910af4495ad06be5426db6c3f8
用 Vue 写的原始版本见: https://codepan.net/gist/a4d31a6dc1ac7517bd5d80dc62af1930
网站: https://chat-meme.egoist.moe

## 后日谈

这里的代码可能有问题的就是文字高度的获取方式，比如 `content` 每一行的高度我是目测的 `15`，这里肯定会出一些偏差，似乎也可以近似地把每一行的高度看成约等于 `ctx.measureText('M').width`，不过不知道中文是否会差的太多，应该会有更好且更优雅的方案吧。我擅长浅尝辄止，这里就不想追问了。

写这篇文章的主要目的是秀出我愚蠢的写代码的方式供后人凭吊且让各位读者获取代码上的自信，你可能比我要好得多。

<img src="https://i.loli.net/2017/09/15/59bbece2a54ab.png" alt="lol" width="300">