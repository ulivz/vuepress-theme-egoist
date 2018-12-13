---
title: 如何部署 Node.js 应用
subtitle: 你告诉我还能怎么办
date: 2016-03-23 15:37:20
tags:
  - deploy
  - node.js
  - docker
---

当你熟悉 Node.js 之后很可能会自己写些小东西放在 VPS 上跑，比如说一个个人的 API 服务，或者是你的网站。这篇文章分享的内容不管你的 app 大小，都相对适用，因为我们的原则是「run it forever and deploy it smartly」。


## <span>上传代码</span>

首先你需要的是把你的 app 代码从本地上传到 VPS，我们不可能用上个世纪的 ftp 方式上传。我们开发的时候用 git 同步本地仓库和远程仓库的代码，你一定有屡试不爽的感觉，同理，这里我们也将使用 git 来操作。

以下内容都可以用 [pod](https://github.com/yyx990803/pod) 这个工具来代替，不过相应的你需要用 [PM2](https://github.com/Unitech/pm2) 来管理进程。而这里是个相对 general case。

首先我们确认一下：

- `/var/repo` - 这是 VPS 上存储 git repo 的目录
- `/var/www` - 这是 VPS 的网站目录

### 在 VPS 上创建一个空 repo

```bash
$ mkdir -p /var/repo/app.git
$ cd /var/repo/app.git
$ git init --bare
```

现在你就拥有了一个只存在版本管理功能，不包含任何 app 源文件的 git 仓库。

### 部署的钩子

你需要一个钩子 `git hook`，也就是在每次本地 git push 之后让它自动把上传的文件拷贝到你的网站目录中。这里我们使用 git 内置的 `post-receive` 钩子：

```bash
$ cd hooks
# 写入内容到这个文件
$ cat > post-receive
# 回车，输入如下内容：
```

```bash
#!/bin/sh
git --work-tree=/var/www/domain.com --git-dir=/var/repo/app.git checkout -f
cd /var/www/domain.com
npm install
# 这里还可以加一些构建脚本，比如 npm run build
```

最后，按下 Ctrl+D 来确认保存。

为了让你有权限执行这个文件，你需要:

```bash
$ chmod +x post-receive
```

### 本地配置

退出 VPS：

```bash
$ exit
```

在你的 app 目录里执行：

```bash
$ git remote add server ssh://user@yourdomain.com/var/repo/app.git
```

哇哦，搞定了。试着将你的 web app 发布吧，就是简单地提交而已：

```bash
$ git add -A
$ git commit -m "deploy to server"
$ git push server master
```

然后检查一下 `/var/www/domain.com` 吧，你的代码都被同步过去了。

## <span>持久运行你的 app</span>

你需要持久化运行你的 app，因为它很可能在高峰时段 crash 掉，同时你也希望在系统重启之后你的 app 也能自动重启。

你大可参考 [Ghost 部署指南](http://support.ghost.org/deploying-ghost/#making-ghost-run-forever) 来达到这个目的。非常完整，我就不再赘述，不过我推荐使用 Supervisor。

你也可以考虑使用 [docker](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) 这个更现代(?)的解决方案。

## <span>延伸阅读</span>

- [How to deploy your node app on Linux, 2016 edition](https://certsimple.com/blog/deploy-node-on-linux)
- [Running your Node & Express apps forever, no matter what, with Systemd and PM2](https://www.terlici.com/2015/06/20/running-node-forever.html)
- [Should servers have their timezone set to GMT/UTC?](http://serverfault.com/questions/191331/should-servers-have-their-timezone-set-to-gmt-utc)
- [Operating Node.js in Production](https://blog.risingstack.com/operating-node-in-production/)
- [How To Use HAProxy to Set Up HTTP Load Balancing on an Ubuntu VPS](https://www.digitalocean.com/community/tutorials/how-to-use-haproxy-to-set-up-http-load-balancing-on-an-ubuntu-vps)
- [Node.js Security Tips](https://blog.risingstack.com/node-js-security-tips/)
