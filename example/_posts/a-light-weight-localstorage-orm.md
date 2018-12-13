---
title: 一个简单的 localStorage 扩展实现
date: 2015-09-30 12:56:03
tags: 
- localStorage
categories:
- JavaScript
---
之前做了一个类似 `localStorage` 的 `orm` 之类的东西，可以让你简单地像操作数据库一样地操作 `localStorage`。因为打算做个记事本之类的应用需要在本地储存笔记并方便的进行查询所以建立了这个库。

你可以简单地预览一下：

```javascript
// localdb 会自动为新插入的 collcetion 生成 `_id`、`index` 和 `createdAt` 
// 以及 `updatedAt`
// `_id` 是类似 MongoDB 的 objectId
var User = new localdb('User', 'Array', true)

var users = [{
  username: 'kevin',
  age: 16
}, {
  username: 'joe',
  age: 19
}, {
  username: 'zchan',
  age: 12
}]

var opts = {
  sort: 1,
  sortBy: 'age'
}
var users_fetched = User.override(users, true).find(null, opts)

console.log(JSON.stringify(users_fetched, null, 2))
```

这样就能按照 `age` 递增输出这样的结果:

```json
[
  {
    "username": "zchan",
    "age": 12,
    "index": 2,
    "_id": "560b780cfac748a940e57438",
    "createdAt": "2015-09-30T05:50:04.156Z",
    "updatedAt": "2015-09-30T05:50:04.156Z"
  },
  {
    "username": "kevin",
    "age": 16,
    "index": 0,
    "_id": "560b780ca4833a2e978efcb2",
    "createdAt": "2015-09-30T05:50:04.156Z",
    "updatedAt": "2015-09-30T05:50:04.156Z"
  },
  {
    "username": "joe",
    "age": 19,
    "index": 1,
    "_id": "560b780c1d6c1f81ca7bf2e9",
    "createdAt": "2015-09-30T05:50:04.156Z",
    "updatedAt": "2015-09-30T05:50:04.156Z"
  }
]
```

如果你想查询 `username` 为 `zchan` 的用户:

```javascript
var query = {
  username: 'zchan'
}

var zchan = User.findOne(query)

console.log(JSON.stringify(zchan, null, 2))
```

这样就查询并返回了一个对象:

```json
{
  "username": "zchan",
  "age": 12,
  "index": 2,
  "_id": "560b780cfac748a940e57438",
  "createdAt": "2015-09-30T05:50:04.156Z",
  "updatedAt": "2015-09-30T05:50:04.156Z"
}
```

`.find` 和 `.findOne` 类似不过不限制数量且可以进行排序、分页查询等操作。

甚至支持了 MongoDB 的 `populate` 特性，不过暂时只能查询一层嵌套:

```javascript
// populate another class, eg: your Post have a Author field
const Post = new localdb('Post', 'Array')
const User = new localdb('User', 'Array')

// you should have the Author's objectId to create an instance of that class
const author = User.extend('some_object_id')

Post.add({
  title: 'mt post title',
  author: author
})

// then you can populate that field before .find or .findOne
Post.populate('author').findOne()
```

---

更详细的使用可以参考这个用 Vue 和 LocalDB [TodoMVC](http://output.jsbin.com/titeve) 演示和 [API](https://egoist.github.io/localdb/)。
