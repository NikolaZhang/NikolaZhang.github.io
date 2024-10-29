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

mybatis 缓存架构如下图所示：

![20241028145632](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/mybatis缓存架构/20241028145632.png)

## 一级缓存

> 一级缓存也称为本地缓存，它是 MyBatis 默认开启的缓存机制。一级缓存的作用范围是 `SqlSession`，即同一个 `SqlSession` 范围内查询到的数据会被缓存起来，后续如果执行相同的查询语句，会直接从缓存中读取数据，而不会再次发送到数据库。

在`BaseExecutor` 类中，`PerpetualCache localCache`为一级缓存对象。在它的内部通过`Map<Object, Object> cache = new HashMap<>()`进行缓存的管理。key为`CacheKey`，value为数据库查询结果。

### CacheKey

`CacheKey` 是一个类，用于生成缓存的 key。它包含以下信息：

在`BaseExecutor` 中，`CacheKey` 通过方法 `createCacheKey` 创建，它包含以下信息：

1. statementId：SQL 语句的唯一标识符。
2. 分页参数：offset 和 limit。
3. sql语句
4. 查询参数
5. 环境id，configuration中的环境配置

### 一级缓存源码

在`BaseExecutor` 类中，`query` 方法中，先创建`CacheKey`，通过`cacheKey`获取缓存，如果缓存中没有数据，则执行`queryFromDatabase`方法，查询数据库，并将查询结果放入缓存中。

```java

```

