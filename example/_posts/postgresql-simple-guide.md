---
title: PostgreSQL 简明指南
date: 2016-04-25 17:06:05
tags:
  - postgresql
  - database
---
边学边记录，有错请指出。（Keep Updating...）

## <span>基础</span>

### 安装

`postgresql-contrib` 不是必需的，它提供一些额外的功能。

```bash
$ sudo apt-get update
$ sudo apt-get install postgresql postgresql-contrib
```

安装完成后，它会自动在你的系统上新建一个叫 `postgres` 的用户，之后你需要切换过去来使用 `PostgreSQL`:

```bash
$ sudo -i -u postgres
```

进入交互模式:

```bash
$ psql
# 想退出则输入 `\q`
```

### 初始化

用默认账户登录到默认数据库:

```bash
$ sudo -u postgres psql template1
```

修改默认账户的密码:

```sql
$ postgres=# ALTER USER postgres with encrypted password 'xxxxxxx';
```

然后修改 `pg_hba.conf` 让其用 `md5` 方式加密:

```bash
# 9.1 是版本号
$ sudo vim /etc/postgresql/9.1/main/pg_hba.conf
```

这样修改: local      all     postgres     ~~peer~~ md5

重启数据库:

```bash
$ sudo /etc/init.d/postgresql restart
```

### 新建用户和数据库

在默认的 Linux 账户 `postgres` 下，你可以创建创建一个新的用户:

```sql
$ postgres=# CREATE USER egoist WITH PASSWORD 'your_password';
```

下一步是创建一个数据库，并让指定用户据有读写权限:

```sql
$ postgres=# CREATE DATABASE database_a;
```

之后给予数据库 `database_a` 的权限到用户 `egoist`:

```sql
$ postgres=# GRANT ALL PRIVILEGES ON DATABASE database_a to egoist;
```

### 数据库相关查询

#### 列出所有数据库

```bash
# 当前用户
# \l 或者 \list
$ user=# \list

# 非 psql 交互模式下
$ psql -U username -l
```

## <span>推荐阅读</span>

- [PostgreSQL Guide](http://postgresguide.com)
