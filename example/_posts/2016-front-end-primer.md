---
title: Beginner's Guide to 2016
subtitle: JavaScript is supposed to be easy and powerful, for all of us.
date: 2016-02-06 15:10:05
tags:
 - javascript
 - frontend
---

At the beginning of the year at V2EX, I saw a lot of people posting questions about how to get started. Let me share my experience.

Maybe you don't know who I am, but if you are interested in the front end, you can contact me to help you with the Review code and provide suggestions for improvement. This is my [GitHub] (https://github.com/egoist) address.

I assume that the reader has only learned about simple HTML/CSS.

## <span>HTML</span>

HTML doesn't have anything without CSS. It's equivalent to naming each area of ​​the page and then allowing you to do more. For example, the head navigation bar, you often give it a name called `header`.

## <span>CSS</span>

CSS is an acronym for Cascading Style Sheets, a language used to define the presentation of your HTML. For example, let the text in your HTML display different fonts, and one element displays different heights.

## <span>HTML+CSS</span>

Both HTML and CSS are languages ​​that are very grammatically loose, which makes them very easy to get started with, but once the amount of code gets bigger, it can be difficult to maintain.

### Template Engine

Suppose you have two web pages, they share a single header, and then only the content part shows different content. You can only do two web pages in the existing knowledge background and copy the code of the navigation bar twice. .

So with a template engine, such as [pug] (https://github.com/pugjs/pug), it allows you to reuse duplicate templates, reduce code size, and improve maintainability.

### CSS Processor

Look at the following code:

```css
.post {
Font-size: 14px;
-webkit-box-shadow: 0 0 1px #ccc;
-moz-box-shadow: 0 0 1px #ccc;
Box-shadow: 0 0 1px #ccc;
}

.post .post-content {
Font-size: 16px;
}

.post .post-content .post-date {
Color: #999;
}
```

You will find the above `box-shadow` written three times to support the `box-shadow` attribute in different kernel browsers.

Also, as the amount of code increases, long definitions like `.post .post-content .post-date` will get longer and longer.

This is the code after the CSS processor:

```css
.post {
Font-size: 14px;
Box-shadow: 0 0 1px #ccc;
.content {
Font-size: 16px;
.date {
Color: #999;
}
}
}
```

Nested styles make the scope clearer, and you can use only standard CSS properties whenever possible and then let the CSS processor help you with other browsers. It is recommended to use [PostCSS] (https://github.com/postcss/postcss), which does not change your CSS code itself, but it abstracts your code into a JavaScript object that allows you to do whatever you want with the plugin. For example, implementing nested styles and automatically adding the prefix `-moz` `-webkit`. You can write your own plugins and it already has a lot of [off-the-shelf plugins] (https://github.com/postcss/postcss/blob/master/docs/plugins.md) for you to use.

The thing to remember is that it just converts your custom CSS style** into a browser-compliant CSS. Why? Standard CSS is not good enough, such as the problem you just encountered.

## <span>HTML+CSS Summary</span>

Now that you know what HTML/CSS can do when you use it together, you know that using the template engine and CSS processor can make you better write HTML/CSS. Keep in mind that "better" may only be more noticeable when the amount of code increases.

So how do you implement these template engines and CSS processors? Many are using JavaScript.

Recommended reading: [Learn to Code HTML & CSS] (http://learn.shayhowe.com/html-css/) As with its loose features, you need to use more to get a better grasp of usage.

## <span>JavaScript</span>

JavaScript is a real language that is simple and powerful. (hereinafter referred to as JS)

Just as HTML/CSS is a style rendering for web pages, JS (in the past) is used for web page interactions, such as a user clicking a button and popping up a box, which requires JS to complete.

JS itself does not have the function of "listening user clicks". In the browser, modern browsers have built-in web page DOM API, which provides a set of JS interfaces, so that you can use JS calls to implement the functions. The functionality itself is based on a lower level C/C++ language.

Therefore, a qualified front end needs to master the basics of JS, such as variables, arrays, functions, and the characteristics of almost all languages, and then the DOM API. The lack of this implementation of web page interaction is a piece of paper.

Recommended reading: [MDN Web API] (https://developer.mozilla.org/zh-CN/docs/Web/API) is very comprehensive and requires a more gradual guideline for Google.

As for learning the language of JS, I recommend three well-known ones. You don't need to look at it all. Pick one or two books and try to figure it out:

- [JavaScript Definitive Guide] (https://book.douban.com/subject/10549733/)
- [JavaScript Advanced Programming] (https://book.douban.com/subject/10546125/)
- [The essence of JavaScript] (http://book.douban.com/subject/3590768/)


## <span>Node.js</span>

As I said earlier, the past JS is the JS itself plus the browser's DOM API, so some people think of it: Can you replace the browser DOM API with the API of the user's operating system? This way JS looks more like a "real language" that can be run in the user's local environment and not just in the browser.

Fortunately, the JavaScript runtime environment (v8) used by Google Chrome has evolved to convert JS code to machine code very quickly in recent years, so the pioneers of Node.js set up this organization, based on Chrome v8. The engine implements a cross-platform JavaScript runtime environment - now very popular Node.js.

---

Is this feeling good? JavaScript developers' tools can also be developed in JavaScript! This is the premise of "easy and powerful" described in the subtitle.

### How to learn Node.js

It's a big deal, if you know how to learn JavaScript before. It's nothing more than JS itself plus the API provided by Node.js. You can view the API directly by opening the Node.js website.

Node.js is just a running environment, similar to the Java JVM, and the most important thing is the JavaScript itself.

## <span>ES6</span>

It's very likely that you are now using the ES5 standard JavaScript syntax, and ES6 is the new language standard introduced in 2015 by TC39, the organization responsible for developing JavaScript language standards.

**Why should I learn a new ES6 standard?**

- you should not. Because ES6 and any new JS standards in the future are backwards compatible, meaning that any code you write now is also compliant with future versions of JS.
- why not? Try it and don't get pregnant, and you will have a bright feeling. Any language is evolving, especially as the front end develops so fast.

It’s almost the same, but you might wonder why you didn’t introduce how to learn some JS frameworks? Such as jQuery, Angular, React, Vue.

OK, the next issue is an introduction to these frameworks, and some build tools and other related content will be introduced in the future.
