---
title: 在终端里使用第三方登录
date: 2015-10-26 17:44:52
tags:
- terminal
categories:
- skills

---

显然你经常在网页和 APP 里使用第三方登录功能，比如用微博登录、用 QQ 登录、用 GitHub 登录，具体的方式是打开相关网页进行授权或者移动端可以利用应用内授权机制授权，那么在终端里如何操作第三方账号登录呢？

很显然，也只能通过打开授权网页的方式获取需要的 access token 来进行操作。

## <span>新建一个应用</span>

常规步骤，稍后会用在这里获得的 `Client ID` 和 `Client Secret` 进行授权验证。


## <span>思路</span>

这些操作需要你将 API 搭建在自己的服务器上并且拥有数据库读写功能。

你需要用户触发登录操作之后以 GET 的方式打开一个授权网页，比如 `/api/login`，请求时在 URL Query String 中传输一个随机生成的用户 Unique ID，形如 `/api/login?uid=$UID`，推荐使用 [open](https://www.npmjs.org/package/open) 这个库打开网址。

授权成功之后获得的 access token 和 UID 保存到数据库，在之前打开授权页面的同时 POST 请求 `/api/token`，在 body 中传输 UID 信息，设置一个较高的 timeout 让网页不会返回超时。

在授权过程中由于并未获取到 token 所以让 `/api/token` 返回一个 50X 错误，判断获取到 50X 错误后用 setInterval 持续请求这个地址直到返回 200 代码，这个时候 access token 已经被你写入数据库并在这个页面上以 json 的格式输出了，于是这样你得到了需要的 access token，命令行现在可以打印出登录成功的提示信息了。