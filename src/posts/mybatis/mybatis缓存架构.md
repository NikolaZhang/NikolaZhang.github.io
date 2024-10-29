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
try {
    queryStack++;
    // note zx 通过缓存key匹配数据
    list = resultHandler == null ? (List<E>) localCache.getObject(key) : null;
    if (list != null) {
      log.debug("一级缓存生效");
      // note zx 该方法用于处理存储过程的输出参数
      handleLocallyCachedOutputParameters(ms, key, parameter, boundSql);
    } else {
      list = queryFromDatabase(ms, parameter, rowBounds, resultHandler, key, boundSql);
    }
  } finally {
    queryStack--;
  }
```

一级缓存存在两个作用域：`SESSION` 和 `STATEMENT`。当`LocalCacheScope` 为 `STATEMENT` 时，缓存数据仅在当前 SQL 语句执行期间有效，当 SQL 语句执行完毕后，缓存数据将被清空。

```java
if (configuration.getLocalCacheScope() == LocalCacheScope.STATEMENT) {
  // note zx MyBatis 利用本地缓存机制（Local Cache）防止循环引用和加速重复的嵌套查询。
  // 默认值为 SESSION，会缓存一个会话中执行的所有查询。
  // 若设置值为 STATEMENT，本地缓存将仅用于执行语句，对相同 SqlSession 的不同查询将不会进行缓存。
  // issue #482
  log.debug("STATEMENT级别 清空一级缓存 ");
  clearLocalCache();
}
```

现在我们通过代码进行验证，代码如下。当设置缓存域为SESSION时，日志只打印了一次数据库查询日志。说明，我们的一级缓存生效了。

```java
    Author result;

    // 设置session级别
    SqlSession sqlSession1 = sqlSessionFactory.openSession();
    Configuration configuration = sqlSession1.getConfiguration();
    configuration.setLocalCacheScope(LocalCacheScope.SESSION);

    log.debug("关闭 flushCache");
    result = authorMapper.selectAuthorFlushCacheOff(999);
    assertNotNull(result);
    result = authorMapper.selectAuthorFlushCacheOff(999);
    assertNotNull(result);

```

输出日志：

```plaintext
00:23:55.486 DEBUG [main] o.a.ibatis.executor.BaseExecutor - 当前执行器类型为：SimpleExecutor
00:23:55.486 DEBUG [main] o.a.ibatis.session.LocalCacheTest - 关闭 flushCache
00:23:55.488 DEBUG [main] o.a.i.b.L.selectAuthorFlushCacheOff - ==>  Preparing: select * from author where id = ?
00:23:55.501 DEBUG [main] o.a.i.b.L.selectAuthorFlushCacheOff - ==> Parameters: 999(Integer)
00:23:55.520 DEBUG [main] o.a.i.b.L.selectAuthorFlushCacheOff - <==      Total: 1
00:23:55.522 DEBUG [main] o.a.ibatis.executor.BaseExecutor - 一级缓存生效
```

下面将缓存域设置为STATEMENT，日志打印了两次数据库查询日志。说明，我们的一级缓存失效了。

```java
    Author result;

    // 设置statement级别
    SqlSession sqlSession1 = sqlSessionFactory.openSession();
    Configuration configuration = sqlSession1.getConfiguration();
    configuration.setLocalCacheScope(LocalCacheScope.STATEMENT);

    authorMapper = sqlSession1.getMapper(LocalCachedAuthorMapper.class);


    log.debug("关闭 flushCache");
    result = authorMapper.selectAuthorFlushCacheOff(999);
    assertNotNull(result);
    result = authorMapper.selectAuthorFlushCacheOff(999);
    assertNotNull(result);
```

输出日志：

```plaintext
00:30:11.288 DEBUG [main] o.a.ibatis.executor.BaseExecutor - 当前执行器类型为：SimpleExecutor
00:30:11.288 DEBUG [main] o.a.ibatis.session.LocalCacheTest - 关闭 flushCache
00:30:11.290 DEBUG [main] o.a.i.t.jdbc.JdbcTransaction - Opening JDBC Connection
00:30:11.292 DEBUG [main] o.a.i.t.jdbc.JdbcTransaction - Setting autocommit to false on JDBC Connection [org.apache.derby.impl.jdbc.EmbedConnection@396918327 (XID = 4946), (SESSIONID = 7), (DATABASE = ibderby), (DRDAID = null) ]
00:30:11.292 DEBUG [main] o.a.i.b.L.selectAuthorFlushCacheOff - ==>  Preparing: select * from author where id = ?
00:30:11.313 DEBUG [main] o.a.i.b.L.selectAuthorFlushCacheOff - ==> Parameters: 999(Integer)
00:30:11.334 DEBUG [main] o.a.i.b.L.selectAuthorFlushCacheOff - <==      Total: 1
00:30:11.335 DEBUG [main] o.a.ibatis.executor.BaseExecutor - STATEMENT级别 清空一级缓存 
00:30:11.338 DEBUG [main] o.a.i.b.L.selectAuthorFlushCacheOff - ==>  Preparing: select * from author where id = ?
00:30:11.338 DEBUG [main] o.a.i.b.L.selectAuthorFlushCacheOff - ==> Parameters: 999(Integer)
00:30:11.339 DEBUG [main] o.a.i.b.L.selectAuthorFlushCacheOff - <==      Total: 1
00:30:11.339 DEBUG [main] o.a.ibatis.executor.BaseExecutor - STATEMENT级别 清空一级缓存 
```

另外需要说明的是，在`MapperStatement`中存在`flushCache`配置，如果该配置开启，则每次查询之前都会清理缓存。

```java
  if (queryStack == 0 && ms.isFlushCacheRequired()) {
    clearLocalCache();
  }
```

todo zx 嵌套查询
然而，`STATEMENT`级别意味着关闭一级缓存吗？显然不是，它只是在当前SQL语句执行期间有效，对嵌套查询起作用。
