---
title: Front end frameworks overview
subtitle: Do you really need frameworks?
date: 2016-03-21 13:31:32
tags:
  - frontend
  - javascript
  - js
  - bootstrap
  - jquery
  - vue
  - react
  - mvvm
---
The front-end framework is a very popular word (Buzz word) in the near future. Let me introduce the mainstream framework and help you distinguish what is the real front-end framework.

## <span>popular vocabulary</span>

When you talk about the front-end framework, you will hear some seemingly high-level words, such as `mvvm` `vdom` `view layer` `unidirection` and so on, and what these people call "framework":

- Bootstrap
- jQuery
- BackBone
- AngularJS
- React
- Vue

## <span>Frame chaos</span>

### Bootstrap

Is Bootstrap a framework? Yes, even if it's just a collection of common CSS and jQuery plugin**, it's still a framework. But it's more of a collection of common code snippets than a framework that brings design patterns.

Bootstrap brings you a grid system, which is a preset button, form, list, navigation, responsive style, etc. It is very useful when you are developing independently, because it saves time for "designing web pages". Moreover, the style of this preset is "not ugly", and naturally it is favored by many companies "pre-exploration".

I prefer to refer to Bootstrap as a UI library, just like [purecss] (http://purecss.io/), [Foundation](foundation.zurb.com). Of course, the recently used UI library [weui] (https://github.com/weui/weui) used by the WeChat mobile terminal naturally belongs to this category.

### jQuery

jQuery is a phenomenon that redefines the behavior of dom operations.

In a sense, jQuery is a framework because it makes direct manipulation of dom for UI interaction a design pattern (laughs). This is a joke, jQuery can only be seen as a more abstract DOM API, to make up for the lack of the native DOM API, and to add a lot of commonly used helpers.

The common web design patterns are MVC and MVVM, and another difference between them and jQuery is the processing of data. Code written in jQuery often uses dom to deal with data directly, and needs to "manually" update the page. On the other hand, MVC and MVVM usually store data on the model layer, and implement more efficient page rendering and updating through a certain binding mechanism.

### BackBone

BackBone is often used with jQuery, MVC mode + a highly abstract DOM API that has conquered many developers.

However, BackBone is often criticized as "not MVC" MVC, because it is difficult to reasonably use the code written in jQuery to generalize in MVC mode. In my opinion, this is because there is no standard View layer. Organize dom related code.

### Angular/Vue/React

See http://cn.vuejs.org/guide/comparison.html for details.

## <span>My choice</span>

In my opinion, Vue and React are more modern choices. The learning curve of Angular 2 looks so steep that it makes me daunting, and there are fans who can try it.

The biggest difference between Vue and React is the community's activity and maturity.

The React community seems to be active and mature, but the so-called best practice is endless. Sometimes [a thing] (http://sam.js.org/) can be used to show off and change the name.

The Vue community seems to be more authoritarian, and the status quo is that all the chicory [small right] (http://evanyou.me/) is the leader. This is not bad, very good, there are many people who follow the right thing and there is nothing wrong with it. And now the community is booming, and Xiaoyou himself has started to develop Vue and related ecological components full time.

## <span>How to learn a framework</span>

### 基本

First of all, familiar with this framework is the most basic, by reading some of the official guides and doing it yourself, such as trying Vue on [JSbin] (http://jsbin.com/). In this regard, Vue's [official tutorial] (http://cn.vuejs.org/guide/) is an industry model from the shallower to the deeper.

###生态

A framework without ecology is not long-lived. One of the importance of ecology is to save developers time for repetitive work. So the next step is to have a broad understanding of the ecology. For example, if you use React as a dodomvc, you can check out [awesome-react] (https://github.com/enaqx/awesome-react), usually there will be some before. A guide written by people.

### Continuous learning

I think that a good habit as a developer is to "try everything to solve as much as possible". Some things are clear to you once, and you don't have the experience you have solved yourself. It is difficult to bypass similar problems next time.

"Self-solving" does not mean that you are a party, but that you can never go to Google~~ Baidu~~, can~~ Baidu~~ Never ask questions, can ask questions as much as possible, and describe them clearly. Can it be solved by Google?
