---
title: Git memo
date: 2015-10-07 21:18:54
tags:
- git
categories:
- git
---

Some common operational notes for Git.

## <span>Starting</span>

After installing Git, configure your profile:

```bash
#Configuring username
Git config --global user.name "Your Real Name"
# Configure email address
Git config --global user.email you@email.address
```

Then generate an SSH key:

```bash
Ssh-keygen -C 'your@email.address' -t rsa
```

**Initialize a project**

```bash
# Initialize the git project
Git init
# Add a source called origin
# Using ssh address
Git remote add origin git@github.com:username/reponame.git
# Login to https address using username/password
Git remote add origin https://username@password:github.com/username/reponame.git
```

**Push to server**

```bash
# Record all newly added and deleted files
Git add -A
# Update reason
Git commit -m "message"
# Push to the server side
Git push origin master
```

**Update to local **

```bash
#源 + branch name
Git pull origin master
```

**Clone project**

Useful when downloading code:

```bash
# clone to a folder named after this project name
Git clone https://github.com/username/reponame.git
# clone to your custom folder
Git clone https://github.com/username/reponame.git name
```

*Keep Updating...*
