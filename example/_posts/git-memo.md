---
title: Git 备忘录
date: 2015-10-07 21:18:54
tags:
- git
categories:
- git
---

Git 的一些常用操作备忘。

## <span>起步</span>

安装好 Git 之后，配置你的资料:

```bash
# 配置用户名
git config --global user.name "Your Real Name"
# 配置邮箱地址
git config --global user.email you@email.address
```

之后生成 SSH 密钥:

```bash
ssh-keygen -C 'your@email.address' -t rsa
```

**初始化一个项目**

```bash
# 初始化 git 项目
git init
# 添加一个叫 origin 的源
# 使用 ssh 地址
git remote add origin git@github.com:username/reponame.git
# 使用 username/password 登录 https 地址
git remote add origin https://username@password:github.com/username/reponame.git
```

**推送到服务器**

```bash
# 记录所有新增和删除的文件
git add -A
# 更新理由
git commit -m "message"
# 推送到服务器端
git push origin master
```

**更新到本地**

```bash
# 源 + 分支名
git pull origin master
```

**克隆项目**

下载代码时有用:

```bash
# 克隆到以这个项目名命名的文件夹
git clone https://github.com/username/reponame.git
# 克隆到你自定义的文件夹
git clone https://github.com/username/reponame.git name
```

*Keep Updating...*
