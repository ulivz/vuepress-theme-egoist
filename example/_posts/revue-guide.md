---
title: Revue 指南
tags:
  - javascript
  - redux
  - revue
  - vue
subtitle: 如何在 Vue 中使用 Redux 管理 State
categories: []
date: 2015-12-18 17:10:00
outdated: 由于多次更新以及不稳定性，本文中关于 Revue 的介绍已不再有效。
---

## <span>缘起小明</span>

前几天小明找到我，说他想用 Vue 做一个小博客，自己写点东西，可是一来就遇到问题了，他发现组件之间的状态传递十分麻烦。父子组件还好点，在 Vue 里面可以用 `props` 执行函数或者 `this.$broadcast` `this.$dispatch` 来传递状态，可是两个完全没有联系的组件要共享状态十分困难啊。

他是这样说的，他在做编辑器的时候侧边栏和编辑框都想知道用户**是否已经保存**这个状态， 而这两个组件完全没办法通过上述的几个方法共享 state。

于是小明告诉我他绞尽脑汁想到的几个方法:

- 把这个状态放到这两个组件共同的父组件中然后通过 `prop.sync` 来同步这两个组件的这个状态
- 在这两个组件中都放置这个状态然后通过共同父组件的一个 prop 来在父组件中调用函数执行一个 `this.$dispatch` 通知子组件这个状态有改动，借此来同步各个组件中的这个状态。

以上方法都是可行的，但是一旦组件逻辑复杂起来这样的回调啊、绑定啊、同步啊都会乱套。

## <span>历史必然</span>

于是出现了 Redux !

当然，Redux 不是为 Vue 出现的。不过却成为了解决所有 JavaScript 应用中状态管理的一种方案。

我能做的关于 Redux 的介绍就是这样，了解更多请阅读官方[自述](https://github.com/rackt/redux)。

## <span>Vue?</span>

也许你现在知道了 Redux 最初是因为 React 这个 View Layer Framework 而生的，React 和 Vue 一样具有组件系统，需要状态管理。

那么就把 Redux 应用到 Vue 中来吧?

你可以这么做，也可以使用 Vue 官方的 Flux 实现 [Vuex](https://github.com/vuejs/vuex)，它和 Redux 非常类似。几乎唯一的区别就是你需要在 action 里直接修改状态。这很好，因为 Vue 本身赞成的是 mutable state。而 Redux 中则是推荐不要修改状态而是返回一个新的状态，选择哪种看你习惯哪种。

## <span>Revue</span>

Redux 在 React 中的应用是通过 [React-Redux](https://github.com/rackt/react-redux) 来绑定的，显得十分复杂。在 Vue 中绑定 Redux 却是十分的简单：

```javascript
// 首先创建你的 reducers/actions/store
// 然后引入 revue 和你的 store
import Revue from 'revue'
import store from './store'
// 将 Revue 作为一个插件在 Vue 中初始化
// 同时绑定这个 store
Vue.use(Revue, { store })
```

这样就大功告成了，之后在每一个 Vue 实例被创建之后每个实例都会有 `this.$revue` 属性和 `this.$subscribe` 方法。现在就介绍这些该如何被使用:

```javascript
new Vue({
	data () {
		// this.$revue 实际上指向你创建的 redux store 对象
		// 所以 store 有的方法都可以通过 this.$revue 调用
		// 每一个 state 都需要一个初始状态
		// 然后像下面这样调用初始状态
		return {
			counter: this.$store.state.counter // 假设默认你设置的是 0
		}
	},
	methods: {
		handleClick () {
			// 点击之后执行 increment 让 counter 自增
			this.$store.dispatch({type: 'INCERMENT'})
			// 现在 store 里的 state 改变了!
			// this.$revue.getState().counter 的值现在为 1
		}
	},
	ready () {
		// 你改变了 store 里的 state 可是它不会反映到你的实例中!
		// 你需要手动订阅这个 state 更新
		this.$subscribe('counter')
		// 我的 store 里没有 counter 这个状态，我给它起的名字是 count 怎么办?
		// 很简单
		this.$subscribe('count as counter')
	}
})
```

> 郑重提醒，本文开头提到的小明不是明哥，如有雷同，明哥不要打我。

> 我个人是一般是使用 redux-actions 和 redux-saga 这套组合

---

相关链接:
- [Redux](https://github.com/rackt/redux)
- [Revue](https://github.com/egoist/revue)
- [Vuex](https://github.com/vuejs/vuex)
