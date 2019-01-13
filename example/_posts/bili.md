---
title: "Bili: Swiss Army Knife Packing the JS Library"
subtitle: Rollup-based packaging tool
date: 2017-07-08 15:13:17
tags:
---
## Preview

### Rollup

[Rollup](https://github.com/rollup/rollup) is similar to the packaging tool like [Webpack] (https://webpack.js.org)/Browserify, but the packaged files are smaller, even if and Compared to Webpack 3. In addition to this, Rollup is mainly used to package libraries and has a very simple API interface.

### Swiss Army Knife

A variety of uses, easy to carry and easy to operate, unexpectedly looks cool.

## 授业

> Student A: I understand the truth, but EGOIST sensei[^sensei]! Why did you roll out the Rollup and sell it? This is not programming at all!

It's true that this is not something that is difficult or in-depth. It is only used to solve a simple problem: simplify the packaging process and improve people's sense of value and belonging.

> Student B: Oh? How did it do it, I want to know! Sensei sensei Tell me soon!

Since this classmate asked me cutely, I will tell you in a simple and easy way! You can find Rollup's API eating method at [WIKI] (https://github.com/rollup/rollup/wiki/JavaScript-API). Simply put, it accepts a parameter, which determines how to find and manipulate you. Source code, such as:

```js
Rollup.rollup({
  // Start with this file:
  Entry: 'src/index.js',
  // Customize how to convert code with a write plugin
  Plugins: []
})
```

Then it will return a Promise to send `bundle` to your hand, and you can decide how to generate the file:

```js
Rollup.rollup(options)
  .then(bundle => {
    // I want to write to disk!
    Bundle.write({
      // Wait, Rollup mother, written in commonjs format!
      Format: 'cjs',
      // Give the generated file a name!
      Dest: 'bundle.js'
    })
  })
```

> Student C jumped up: EGOIST sensei! This looks so simple, there is no chance for you to play [Bili] (https://github.com/egoist/bili) QAQ

It's really simple, but you can check out [Vue] (https://github.com/vuejs/vue/blob/dev/build/build.js) and [React](https://github.com/facebook/ The build script for react/blob/master/scripts/rollup/build.js) is incredibly long.

The lower the level of the API, the simpler it seems, but in larger projects it will be used by experienced developers in more complex ways. People call this the **M attribute**, but this is already here. The scope of the lesson is beyond.

In short, most projects have the need to generate multiple bundles, such as bundles of different formats, or bundles with different variables. You are bound to use Rollup ** simple APIs to solve these requirements multiple times. And pulling this out and putting it in a separate tool for reuse is what Bili does:

```bash
Bili --format cjs,umd,es --compress umd
```

In order to use Bili's full functionality as much as possible directly with the command line, `format` accepts one or more format names separated by commas. Of course, arrays can be inconvenient on the command line.

Let's take a look at using the original Rollup to write what it looks like:

```js
Import { rollup } from 'rollup'

Function build(format) {
  Const plugins = [
    // ES2015 -> ES5
    Require('rollup-plugin-buble')()
  ]

  Let compress = false

  If (format.endsWith('Compress')) {
    Format = format.replace(/Compress$/, '')
    Compress = true
  }

  If (format === 'umd') {
    // package the third party module
    Plugins.push(
      Require('rollup-plugin-node-resolve')(),
      Require('rollup-plugin-commonjs')()
    )
  }

  If (compress) {
    // compression
    Plugins.push(require('rollup-plugin-uglifyjs')())
  }

  Return rollup({
    Entry: 'src/index.js',
    Plugins
  }).then(bundle => bundle.write({
    Dest: `dist/index.${format}.js`,
    Format
  }))
}

Promise.all(['umd', 'cjs', 'es', 'umdCompress'].map(build))
  .then(() => console.log('done'))
  .catch(err => console.error(err))
```

It is the feeling of the above, Bili was recently awarded the honorary title of energy saving and emission reduction advocacy pioneer and keyboard life saver by China's super-university computer association, as well as the savior of human brain cells, keyboard player killer, Jean Zhengtai and Loli. These market names are easily packaged.

[Bili is heavily used in my front-end library] (https://github.com/search?l=JSON&o=desc&q=bili+scripts+build&s=indexed&type=Code&utf8=%E2%9C%93), someone will ask What about CSS and pictures, fonts, etc. For CSS, I generally don't pack it and hand it to the user as it is. The fonts and pictures are generally used in CSS, and naturally the same. Of course, I haven't encountered the need for fonts and images for the time being.

## After class

After school, students will be eager to go home, open the computer and found [Bili] (https://github.com/egoist/bili) [v0.17] (https://github.com/egoist/bili/releases/tag /v0.17.0) Several breaking changes, of course, are changes that can be made in a minute.

Since then, everyone has lived a happy package life.

[^sensei]: The meaning of the teacher (センセイ) in Japanese, when the female high school student speaks, can fully express the tension of the language.
