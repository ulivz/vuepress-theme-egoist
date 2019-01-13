---
title: How to deploy a Node.js app
subtitle: What do you tell me?
date: 2016-03-23 15:37:20
tags:
  - deploy
  - node.js
  - docker
---

When you are familiar with Node.js, you are likely to write small things on your VPS, such as a personal API service or your website. The content shared in this article is relatively applicable regardless of the size of your app, because our principle is "run it forever and deploy it smartly".


## <span>Uploading Code</span>

The first thing you need is to upload your app code locally to VPS, which we can't upload using the ftp method of the last century. When we develop git to synchronize the code of the local repository and the remote repository, you must have a feeling of trial and error. Similarly, we will also use git to operate here.

The following can be replaced with the [pod](https://github.com/yyx990803/pod) tool, but you need to manage it with [PM2] (https://github.com/Unitech/pm2) process. And here is a relative general case.

First we confirm:

- `/var/repo` - this is the directory where git repo is stored on the VPS
- `/var/www` - This is the VPS website directory

### Create an empty repo on the VPS

```bash
$ mkdir -p /var/repo/app.git
$ cd /var/repo/app.git
$ git init --bare
```

Now you have a git repository with only version management and no app source files.

### Deployed hooks

You need a hook `git hook`, which is to automatically copy the uploaded file to your website directory after each local git push. Here we use the git built-in `post-receive` hook:

```bash
$ cd hooks
# Write content to this file
$ cat > post-receive
# Enter, enter the following:
```

```bash
#!/bin/sh
Git --work-tree=/var/www/domain.com --git-dir=/var/repo/app.git checkout -f
Cd /var/www/domain.com
Npm install
# Here you can also add some build scripts, such as npm run build
```

Finally, press Ctrl+D to confirm the save.

In order for you to have permission to execute this file, you need to:

```bash
$ chmod +x post-receive
```

### Local configuration

Exit VPS:

```bash
$ exit
```

Execute in your app directory:

```bash
$ git remote add server ssh://user@yourdomain.com/var/repo/app.git
```

Wow, it’s done. Try posting your web app, simply submit it:

```bash
$ git add -A
$ git commit -m "deploy to server"
$ git push server master
```

Then check `/var/www/domain.com` and your code is synced.

## <span>Run your app forever</span>

You need to run your app persistently, as it is likely to crash during peak hours, and you also want your app to restart automatically after the system restarts.

You can do this by referring to the [Ghost Deployment Guide] (http://support.ghost.org/deploying-ghost/#making-ghost-run-forever). Very complete, I won't go into details, but I recommend using Supervisor.

You can also consider using [docker](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) this more modern (?) solution.

## <span>Extended reading</span>

- [How to deploy your node app on Linux, 2016 edition] (https://certsimple.com/blog/deploy-node-on-linux)
- [Running your Node & Express apps forever, no matter what, with Systemd and PM2] (https://www.terlici.com/2015/06/20/running-node-forever.html)
- [Should servers have their timezone set to GMT/UTC?] (http://serverfault.com/questions/191331/should-servers-have-their-timezone-set-to-gmt-utc)
- [Operating Node.js in Production] (https://blog.risingstack.com/operating-node-in-production/)
- [How To Use HAProxy to Set Up HTTP Load Balancing on an Ubuntu VPS] (https://www.digitalocean.com/community/tutorials/how-to-use-haproxy-to-set-up-http-load- Balancing-on-an-ubuntu-vps)
- [Node.js Security Tips] (https://blog.risingstack.com/node-js-security-tips/)
