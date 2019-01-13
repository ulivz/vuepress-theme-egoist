---
title: Draw a chat message with canvas
subtitle: I will not learn canvas when I read it.
date: 2017-09-15 21:58:02
tags:
- canvas
- javascript
---

I am not a person who is too motivated. I am tempted by most things, and I like to show off some of my own skills.

I don't know much about canvas because I don't have a place to use it (after all, it's outside my comfort zone). Today I am interested in a long-awaited expression pack, such as one of them:

<img src="https://i.loli.net/2017/09/15/59bbde6f0df7c.jpeg" alt="sticker" width="300">

*[source: https://t.me/addstickers/MadeInBitinn](https://t.me/addstickers/MadeInBitinn)*

So I want to use canvas to automatically generate one from the user input, although I have never used canvas. But based on the previous experience of [slogan] (https://egoist.moe/slogan/) I started.

First I have to create a new canvas element I still remember, and then get its 2d context:

```js
Const $canvas = document.getElementById('canvas')
Const ctx = $canvas.getContext('2d')
```

Then start rendering, I am temporarily ignored for the left avatar, after all, I do not remember how to render the image, so start with other text, I need to render a username and the date on the right:

```js
// Actually, I don’t remember how to render the text.
// Google found out that it is ctx.fillText(text, x, y)
ctx.fillText('EGOIST', 50, 10)
// I reserve 50 width for the left avatar
```

Its effect is:

![p1](https://i.loli.net/2017/09/15/59bbe0f394e51.png)

The user name in the original image seems to be blue bold unknown font, then I also search for APIs for color and fonts:

```js
Ctx.font = 'bold 14px sans-serif'
ctx.fillStyle = 'blue'
```

![p2](https://i.loli.net/2017/09/15/59bbe259e6618.png)

As I saw the `font` and `fillStyle` set before `fillText`, the reason is obvious.

---

Next to render the date on the right, I need to know the width of the username, and I clearly remember that I can get it with `ctx.measureText`:

```js
Const usernameWidth = ctx.measureText('EGOIST').width
// Reset the font and color or it will be the same as the username
Ctx.font = '14px sans-serif'
ctx.fillStyle = '#666'
// The `x` of the time is the width of the username + the width of the reserved avatar + the distance from the time to the username
ctx.fillText('2017/7/7', usernameWidth + 50 + 10, 15)
```

![p3](https://i.loli.net/2017/09/15/59bbe4404645e.png)

---

Next is the body of the message, it may be multi-line and canvas can't automatically wrap, we need to manually identify it based on the newline `\n`:

```js
Const content = `hello world
Goodbye world`

Content.split('\n').forEach((text, index) => {
  ctx.fillText(
    Text,
    / / Reserve the width of the avatar
    50,
    // content distance from the top + approximate height of each line
    30 + 15 * index
  )
})
```

![p4](https://i.loli.net/2017/09/15/59bbe6a3a24df.png)

---

In the end, only the avatar is left. I know I need an `input` element to get the image file, and then somehow let `ctx` render it:

```html
<input type="file" id="avatar">
```

```js
document.getElementById('avatar').addEventListener('change', e => {
  Draw(e.target.files[0])
})

// The following content is basically copied from StackOverflow
Function draw(avatar) {
  // draw an avatar
  Const img = new Image()
  Img.onload = () => {
    // avatar actual width 40
    // The remaining 10px is the margin to the right
    ctx.drawImage(img, 0, 5, 40, 40)
  }
  Img.src = URL.createObjectURL(avatar)

  // ... draw something else
}
```

![p5](https://i.loli.net/2017/09/15/59bbe9cc75c16.gif)

---

The completed code can be found at: https://codepan.net/gist/6630c3910af4495ad06be5426db6c3f8
The original version written in Vue can be found at: https://codepan.net/gist/a4d31a6dc1ac7517bd5d80dc62af1930
Website: https://chat-meme.egoist.moe

##后日谈

The code here may have problems with the way the height of the text is obtained, such as `content` the height of each line. I am the visually `15`. There will definitely be some deviation here. It seems that the height of each line can be approximated as approximately. Equal to `ctx.measureText('M').width`, but don't know if Chinese will be too much, there should be a better and more elegant solution. I am good at scratching, I don't want to ask questions here.

The main purpose of writing this article is to show off my stupid way of writing code for future generations and let the readers gain confidence in the code, you may be much better than me.

<img src="https://i.loli.net/2017/09/15/59bbece2a54ab.png" alt="lol" width="300">
