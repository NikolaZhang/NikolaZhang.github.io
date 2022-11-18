---
isOriginal: true
title: MicroService Introduction ①
date: 2018-11-18


tag:
  - introduce
category: 技术
description: 微服务关键技术介绍
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

# 微服务关键技术概要【上】

![微服务思维导图](/images/article/18/microservice.png)


路由网关
===

## zuul
+ 本质是WebServlet，核心是一系列Filter。
+ 反向代理
+ 只需要访问Zuul的地址，参数为服务注册名和接口名称。（RESTFUL）

<!--more-->
## Nginx
+ 高性能HTTP服务器&反向代理器
>1. 作为web服务器
>2. 负载均衡服务器
>3. 邮件代理服务器
+ 模块
> 1. 核心
> 2. 配置
> 3. 事件
> 4. HTTP
> 5. MAIL
+ 对比TOMCAT
> 1. Nginx`负载均衡、反向代理、处理静态文件`有优势。 Nginx 处理静态请求的速度高于 apache。
> 2. TOMCAT是动态解析服务器，处理动态请求，是编译 JSP\Servlet 的容器。
> 3. Nginx 有`动态分离机制`，静态请求直接就可以通过 Nginx 处理，动态请求才转发请求到后台交由 Tomcat 进行处理。

---
服务中心
===

## Eureka
+ 使用REST服务
+ 用于云端服务发现
+ 实现云端中间层服务发现和故障转移
+ 特点
> 1. 缓存服务注册表，定期更新
> 2. 服务提供者挂掉，移除客户端
> 3. 自我保护，从相邻节点获取注册表信息

## zookeeper
+ 服务注册与发现
+ 通过 Watcher 机制实现 Push 模型，服务注册信息的变更能够及时通知服务消费方。
+ 角色（其他的注册发现没有）解释
> 1. `Leader` 节点是 Zookeeper 集群工作的核心，负责进行选举投票的
发起和决议，更新系统状态；
> 2. `Follower` 节点是 Zookeeper 集群状态的跟随者，用于接收客户端
的请求并向客户端返回结果，在选举过程中参与投票。
> 3. `Observer`可以接受客户端连接，将写请求转发给 Leader 节点，但 Observer 不参加投票过程，
只同步 Leader 节点的状态，Observer 的目的是为了扩展系统，提高读取速度。

## ServiceCenter
+ 通过ServiceCenter提供的接口可以检索微服务信息

## 服务生产与消费
+ Eureka服务治理三角色
> 1. 服务注册中心
> 2. 服务提供者
> 3. 服务消费者
## Ribbon
+ 提供客户端的软件负载均衡算法
+ Ribbon 的负载均衡策略
> 1. 简单轮询负载均衡
> 2. 随机负载均衡，随机选择up状态的server
> 3. 加权响应时间负载均衡，时间越长，越不被选中
> 4. 区域感知轮询负载均衡，复合判断 server 所在区域的性能和 server 的可用性选择 server。

---
缓存服务
===

## redis
+ 数据库，缓存，消息中间件
+ 特征
> 1. 单线程，消除串行控制开销
> 2. 支持数据持久化
> 3. 分布式架构，读写分离
> 4. 数据结构多样
> 5. 支持数据备份
+ Redis Cluster
> 1. 无中心结构，主从结构

_持续更新，以后会在CSDN上发布详细博客_















