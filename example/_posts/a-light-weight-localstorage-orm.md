---
title: A simple localStorage extension implementation
date: 2015-09-30 12:56:03
tags: 
- localStorage
categories:
- JavaScript
---

I used to do something like `orm` of `localStorage`, which allows you to simply manipulate `localStorage` just like you would with a database. This library was created because it is intended to be a notebook and other applications that need to store notes locally and make it easy to query.

You can simply preview it:

```javascript
// localdb will automatically generate `_id`, `index` and `createdAt` for the newly inserted collcetion
// and `updatedAt`
// `_id` is an objectId similar to MongoDB
Var User = new localdb('User', 'Array', true)

Var users = [{
  Username: 'kevin',
  Age: 16
}, {
  Username: 'joe',
  Age: 19
}, {
  Username: 'zchan',
  Age: 12
}]

Var opts = {
  Sort: 1,
  sortBy: 'age'
}
Var users_fetched = User.override(users, true).find(null, opts)

Console.log(JSON.stringify(users_fetched, null, 2))
```

This will output such a result in increments of `age`:

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

If you want to query users whose `username` is `zchan`:

```javascript
Var query = {
  Username: 'zchan'
}

Var zchan = User.findOne(query)

Console.log(JSON.stringify(zchan, null, 2))
```

This queries and returns an object:

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

`.find` is similar to `.findOne` but does not limit the number and can be sorted, paged, etc.

Even the `populate` feature of MongoDB is supported, but only one level of nesting can be queried for the time being:

```javascript
// populate another class, eg: your Post have a Author field
Const Post = new localdb('Post', 'Array')
Const User = new localdb('User', 'Array')

// you should have the Author's objectId to create an instance of that class
Const author = User.extend('some_object_id')

Post.add({
  Title: 'mt post title',
  Author: author
})

// then you can populate that field before .find or .findOne
Post.populate('author').findOne()
```

---

For more detailed use, refer to this Vue and LocalDB [TodoMVC] (http://output.jsbin.com/titeve) demo and [API] (https://egoist.github.io/localdb/).
