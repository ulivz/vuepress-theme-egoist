---
title: 如何在 Git 中使用撤消操作
date: 2015-10-04 14:15:59
tags:
- git
- udo
categories:
- git
---

版本控制系统的一个好处就是你可以轻易地撤销之前错误的操作。

当你用 `git commit` 提交了一个新的更改后 git 会将当时的文件内容暂时保存下来，之后你就可以用 git 随意回滚到任意一个版本。

这篇文章会介绍一些常见的可能用到撤销 `undo` 操作的情况。

## <span>撤销一个已发布的更新</span>

**情景**: 你已经用 `git push` 将代码提交到了 GitHub，然后你意识到这其中的一个 commit 有错误，于是你想撤销那个 commit。

**操作**: `git revert <SHA>`

**效果**: git 会新建一个新的 commit 来执行提供的 `<SHA>` 对应 commit 的相反的更改，任何在该旧 commit 中删除的内容将会在新 commit 中添加进去，反之亦然。

这是 git 里最安全的撤消操作的办法，因为这不会影响你的提交历史。于是现在你可以提交新的 commit 去撤销之前错误的操作了。

## <span>修改上次 commit 的提交信息</span>

**情景**: 你在上次 commit 提交信息中打错了一个单词，比如你执行了 `git commit -m "fxied bug #42"` 然后你意识到应该是 `fixed bug #42`。

**操作**: `git commit --amend` 或 `git commit --amend -m "Fixes bug #42"`

**效果**: `git commit --amend` 结合最新的文件修改情况和上一次提交信息更新并替换上一次提交。没有新的文件更改就直接覆盖上次提交。

## <span>撤销本地修改</span>

**情景**: 你家的喵星人跑到你的键盘上装逼用双爪打字然后不知怎么还点了保存，然后编辑器还崩溃了，你还没有 commit 这只猫做的修改，你想撤销那个文件里被猫修改的内容。

**操作**: `git checkout -- <bad filename>`

**效果**: `git checkout` 会将该文件的内容恢复到上一次 git commit 的状态。你可以提供一个分支名称或者直接提供要回到的 SHA。

请记住，这种方法作出的撤销是彻底的，这些内容不会被 commit 所以之后你并不能再用 git 恢复这些内容。

## <span>重置本地修改</span>

**情景**: 你在本地 commit 了一些内容（并没有 push），但是你搞错了，你想撤销最近这三个 commit，就像让它们从来不存在那样。

**操作**: `git reset <last good SHA>` 或 `git reset --hard <last good SHA>`

**效果**: `git reset` 会让你的 git 历史会退到你指定的 SHA 的状态。这些 commit 不存在了但是你硬盘上的这些文件还是维持在被修改了的状态，这是最安全的做法。但是有时你也想同时撤销硬盘上的修改，这时加上 `--hard` 就会很有用。

## <span>撤销本地修改之后重做</span>

**情景**: 你提交了一些 commit，然后执行 `git reset --hard` 来撤消这些 commit 并清除本地硬盘上的修改。但是最后你意识到你想要回这些 commit！

**操作**: `git reflog` 和 `git reset` 或 `git checkout`

**效果**: `git reflog` 是个修复项目提交历史的好方法。你可以找回几乎所有内容 —— 所有你 commit 过的内容 —— 用 reflog 就行。

你可能对 `git log` 很熟悉，这个操作会列出你的 git 提交历史。`git reflog` 很像它，但是列出的是 `HEAD` 修改的时间。

一些说明:

- `HEAD` 修改。在切换分支时 `HEAD` 会被修改，用 commit 保存修改然后用 reset 撤消修改。但是在你 `git checkout -- <bad filename>` 时并不会被修改，就像上面说过的那样，这些修改不会被 commit，所以 `git reflog` 也不能帮你找回这些内容。
- `git reflog` 不是永远有用的。git 会定期清理那些无法追溯的内容。不要期望能用 `git reflog` 找回一个多月以前的内容。
- 你的 `git reflog` 仅对你有用。你不能用 `git reflog` 来找回其他人 commit 的修改。

![reflog](https://cloud.githubusercontent.com/assets/2077/6953866/f6b9f054-d891-11e4-8c53-838eff9f40ae.png)

然后...接下来怎么做才能撤销之前的撤销？这取决你到你要干什么:

- 如果你想回到一个特定的时间，用 `git reset --hard <SHA>`。
- 如果你想在不修改提交历史的情况下找回那些文件并作为新文件保存，用 `git checkout <SHA> -- <filename>`。
- 如果你想使其中一个 commit 回到你的项目历史中，用 `git cherry-pick <SHA>`。

## <span>提交到了另一个分支</span>

**情景**: 你提交了一些 commits，然后意识到你当前是在 master 分支上，而你其实是想提交到一个 `feature` 分支上。

**操作**: `git branch feature`, `git reset --hard origin/master`, 和 `git checkout feature`

**效果**: 你可能常常使用 `git checkout -b <name>` 操作来检出一个新分支，这是一个很方便的创建新分支的操作，但是你并不想同时切换到那个分支上。现在使用 `git branch feature` 既可以创建一个 `feature` 新分支并且不会切换到那个分支，同时该分支会指向你当前分支最新的一个 commit。

下一步，用 `git reset --hard` 去恢复 `master` 分支到 `origin/master` 的状态。

最后，`git checkout` 到你的 `feature` 分支，你能看到所有的更改。

## <span>覆盖整个分支</span>

**情景**: 你基于 `master` 分支创建了 `feature` 分支，但是 `master` 分支远远落后 `origin/master` 的更改。现在 `master` 分支和 `origin/master` 同步了，你想马上同步到 `feature` 分支，还不是再次远远落后。

**操作**: `git checkout feature` 和 `git rebase master`

**效果**: 你可能知道用 `git reset` 然后重新 commit 来达到类似效果，不过那样会丢失 commit 历史。

---

本文乃原文常用部分译文: [How to undo (almost) anything with Git](https://github.com/blog/2019-how-to-undo-almost-anything-with-git) —— 作者: [jaw6](https://github.com/jaw6)
