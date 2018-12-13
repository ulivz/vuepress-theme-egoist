---
title: 为什么我选择用 tab 而不是 space 来缩进
date: 2016-01-17 22:33:44
tags: 
  - javascript
  - code
  - space
  - tab
---
圣战有很多种，诸如 Vim vs Emacs，Sublime vs Atom，OSX vs Windows，当然也有 Tab vs Space。

很久以前我听信了一个建议，“两个空格的缩进非常棒，你是前端更是如此了。”

“为什么？” 我想问，但我并没有问，因为从网上搜索而来的理论中，“两个空格党” 这股力量不容小觑，我于是随波逐流，并且一直感觉不错，“两个空格” 似乎是对的，JS 嵌套多，空格少看起来不那么 “糟”。

但直到最近，我遭到了两次背叛。

第一次是我下班回来从 24 寸屏切换到家里的 14 寸笔记本，“天啊！两个空格几乎短到看不见了！” 我急忙切换到四个空格这才稍微好点，然而我不可能家里一个配置，公司一个配置，我第一次有了抛弃空格的念头。

第二次是我在某处 copy 了一段代码（没办法，我是面向 GitHub 编程的），“糟糕！他的代码是四个空格缩进！” 于是我还得 “帮他” 把代码缩进调整为两个空格。

---

分手理由充分了，我毫不犹豫地说了再见。

但是 tab 更好？当然。

理由之一是 tab 是非常适合 “有个性的人” 的，根据你的个性你可以调整 tab 的宽度，同样是 “一个 tab” 但你可以让它看起来像 “两个空格” 或者 “四个空格”，而不是生硬地调整 space 的数目，那样对你项目的协作者会非常糟，除非你们用同一个 size 的屏幕，同一个编程习惯。

其实还有非常多的理由，[Why tabs are clearly superior](http://lea.verou.me/2012/01/why-tabs-are-clearly-superior/) 会坚定你选择 tab 的决心。

总结一下就是：

- Tab 占的体积更小。
- Tab 的宽度可以因人而异，更个性化。
- Tab 更利于多人协作。
- Tab 不需要依靠某一个工具，所有编辑器都知道 “如何插入一个 tab”
- Tab 更容易选中，还在为漏选一个 space 而烦恼？
- Tab 现在在网页上不再难看，过去网页上一个 tab 显得非常宽，而现在 CSS3 的 `tab-size` 属性解决了这一痛点。 

> Use tab to indent, use space to align. 
> If you are using space, you are making alignment, not making indention.
