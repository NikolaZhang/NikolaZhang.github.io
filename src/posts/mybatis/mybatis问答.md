d---
original: true
title: mybatis问答
date: 2021-06-22
tags: 
  - mybatis
  - Q&A
category: Q&A
description: mybatis问答 面试问题
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

## 源码

### Configuration的作用及创建方式

`Configuration`是重要的配置类, 主要有4个作用:

1. 解释mybatis xml配置为Java语言。（比如：解析`environments`节点为`environment`，`settings`各种属性的配置等）
2. 是其他组件的容器。（比如：`mappedStatements`管理`MappedStatement`，`resultMaps`管理`ResultMap`，`parameterMaps`管理`ParameterMap`）
3. 提供实例创建的工厂方法。（比如：`newExecutor`用于创建执行器，`newStatementHandler`用于创建`StatementHandler`）
4. 提供容器管理的注册器实例。（比如：`jdbcTypeHandlerMap`、`typeHandlerMap`、`allTypeHandlersMap`、`unknownTypeHandler`对`TypeHandler`的管理都是通过`typeHandlerRegistry`完成的）

`XMLConfigBuilder`的`parse`方法解析xml配置后返回一个`Configuration`对象。  
具体而言是：通过创建`XMLConfigBuilder`实例时，通过new创建`Configuration`实例，之后通过`parse`解析xml配置，给`Configuration`实例赋值，完成构建。

::: details XPathParser
`XPathParser`是mybatis用于解析xml文件的类。通过实例调用`evalNode`方法即可。

:::

### SqlSession创建过程

1. SqlSession使用工厂模式创建，即通过`SqlSessionFactory`对象调用`openSession`。
2. `openSession`方法进一步调用了工厂类中的`openSessionFromDataSource`方法。
3. `openSessionFromDataSource`方法中通过`Configuration`对象，执行器，是否自动提交，三个参数实例化`DefaultSqlSession`获取`SqlSession`。

::: details openSession方法的介绍
`openSession`存在多个重载方法，支持在运行过程中修改将要创建的`SqlSession`的属性：是否自动提交，连接，事务级别，执行器类型。
默认使用的`SqlSessionFactory`实现为`DefaultSqlSessionFactory`。
:::

::: details 关于事务Transaction
`Transaction`的创建需要通过`TransactionFactory`的`newTransaction`方法。

`TransactionFactory`工厂可以通过`getTransactionFactoryFromEnvironment`获取（顾名思义方法参数为`Environment`）。

1. 如果没有在环境中指定事务工厂则默认使用`ManagedTransactionFactory`。
2. 如果指定事务工厂则使用`environment.getTransactionFactory()`获取。

:::

::: details 执行器
执行器是`Executor`接口的实现。它的创建需要通过`configuration`调用`newExecutor`（需要将`Transaction`以及`ExecutorType`作为参数）。

`ExecutorType`不同值与之对应的执行器

1. BATCH类型对应`BatchExecutor`
2. REUSE类型对应`ReuseExecutor`
3. 其余类型对应`SimpleExecutor`

如果允许缓存则使用`CachingExecutor`，需要注意的是缓存执行器并不是自己去执行sql，而是代理上面的三种执行器。

:::

### SqlSessionFactory创建过程

`SqlSessionFactory`是一个接口，提供了`openSession`方法的定义，以及`getConfiguration`用于获取mybatis的配置信息。

1. `SqlSessionFactory`的创建需要由`SqlSessionFactoryBuilder`的`build`方法来实现。
2. `build`方法中会解析mybatis配置文件得到`Configuration`对象。（调用`XMLConfigBuilder`的`parse`方法）
3. 最后将`Configuration`作为参数实例化`DefaultSqlSessionFactory`。

### SqlSession如何执行sql

由于可以基于接口和xml配置sql，因此分成两种情况考虑。

1. 基于接口的sql执行，可以通过`getMapper`获取接口实现实例。这里使用了动态代理。此处按下不表。
2. 基于xml方式的sql执行可以通过指定语句命名空间，以及参数的方式执行。比如：`update`、`delete`、`selectXXX`方法。当然前者也可以通过这种方式实现。

这部分内容详见 **SqlSession与sql执行**

