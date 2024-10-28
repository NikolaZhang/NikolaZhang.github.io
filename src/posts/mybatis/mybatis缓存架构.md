---
title: mybatis缓存架构
tag:
  - mybatis
  - cache
category: mybatis
description: xxxxx
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-10-28

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> mybatis缓存分为一级缓存和二级缓存，一级缓存又叫做本地缓存。一级缓存默认开启，二级缓存默认关闭，二级缓存需要手动开启。

<!-- more -->

mybatis 缓存架构如下图所示，可以看到一级缓存是在

![20241028145632](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/mybatis缓存架构/20241028145632.png)


## 一级缓存

> 一级缓存也称为本地缓存，它是 MyBatis 默认开启的缓存机制。一级缓存的作用范围是 SqlSession，即同一个 SqlSession 范围内查询到的数据会被缓存起来，后续如果执行相同的查询语句，会直接从缓存中读取数据，而不会再次发送 SQL 到数据库。

一级缓存的架构如下图所示：


