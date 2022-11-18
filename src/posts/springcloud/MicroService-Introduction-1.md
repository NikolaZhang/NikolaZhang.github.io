---
isOriginal: true
title: MicroService Introduction ②
date: 2018-11-20


tag:
  - introduce
category: 技术
description: 微服务关键技术介绍
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

# MicroService 关键技术概要【下】

![pic](/images/article/20/microservice_all.png)

## MemCache
+ 分布式高速缓存
+ 用于动态web应用减轻数据库负载
+ 存储键值对的hashmap
+ C/S架构
<!--more-->
+ 一台服务器上可以启动多个不同端口号的 MemCached 进程
+ 在服务器端启动后，以守护程序的方式，监听客户端的请求。
+ MemCache 缓存的数据全部存储在 MemCache 管理的内存中，所以重启服务
器之后缓存数据会清空，不支持持久化。
+ 原理
> + 内存管理
> + 分布式存储
> + 线程管理
+ 特性与限制

## 消息队列
+ 分类
> + RabbitMQ
> + ActiveMQ
> + Kafka

## END
