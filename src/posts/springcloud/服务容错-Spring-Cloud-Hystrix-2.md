---
isOriginal: true
title: '服务容错 Spring Cloud Hystrix [2]'
date: 2018-12-22
tag:
  - hystrix
category: 技术
description: 服务容错的简单介绍
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
sticky: false
timeline: true
article: true
star: false
---

> 继续上一篇博客，这次我们聊一聊服务降级，请求合并等实现方法。最近内容有点多。。。。

<!--more-->

## 1 定义服务降级

在Hystrix中通过重载getFallback()方法可以实现服务降级逻辑。Hystrix会在run()执行过程中出现错误、超时、线程池拒绝、断路器熔断等情况时，执行getFallback()方法内的逻辑。

```java
@Override
protected String getFallback() {
    return "服务调用出错!";
}
```

在继承HystrixObservableCommand实现的Hystrix命令中可以重载resumeWithFallback方法实现服务降级逻辑. 该方法返回Observable对象, 当命令执行失败的时候, Hystrix会将Observable中的结果通知给所有订阅者.

```java
@Override
protected Observable<String> resumeWithFallback() {
    return Observable.error(new Throwable("服务调用出错!"));
}
```

通过注解实现:
只需要使用fallbackMethod参数来指定具体的服务降级实现方法.

```java
  // 使用的注解实现的服务降级
  @HystrixCommand(fallbackMethod = "fallback")
  ......
  // fallback也可以定义服务降级逻辑
  @HystrixCommand(fallbackMethod = "fallback1")
  public String fallback(){
      return "访问服务出错！";
  }
```

## 2 异常处理

### 2.1 异常传播

在HystrixCommand实现的run()方法中抛出异常时,除了使用HystrixBadRequestException之外,其他异常均会被Hystrix认为命令执行失败并触发服务降级逻辑, 所以当需要在命令执行中抛出不触发服务降级的异常的时候需要使用它.
使用注册配置实现Hystrix命令时, 还支持忽略指定异常类型功能, 只需要通过设置@HystrixCommand注解的ignoreExceptions参数:

```java
@HystrixCommand(fallbackMethod = "fallback"
        , ignoreExceptions = {BadRequestException.class})
```

抛出的BadRequestException异常, 会包装在HystrixBadRequestException中抛出, 这样就不会触发后续的fallback逻辑.

### 2.2 异常获取

使用传统方式: 使用getFallback()方法通过Throwable getExecutionException()方法来获取具体的异常, 通过判断进行不同的异常处理.

```java
@Override
protected String getFallback() {
    return "服务执行出错!"+getExecutionException().getMessage();
}
```

注解配置方法实现异常获取, 只需要在fallback实现方法的参数中增加Throwable e对象:

```java
public String fallback(Throwable e){
      return "抛出了异常!"+e.getMessage();
}
```

## 3 命令名称, 分组以及线程池划分

+ 继承方式

可以在构造函数中通过Setter静态类设置

```java
private static HystrixCommandGroupKey groupKey = HystrixCommandGroupKey
        .Factory.asKey("ExampleGroup");
private static HystrixCommandKey commandKey = HystrixCommandKey
        .Factory.asKey("Command");
private static HystrixThreadPoolKey threadPoolKey = HystrixThreadPoolKey
        .Factory.asKey("ThreadPool");
public CustomerService(RestTemplate restTemplate) {
    super(Setter.withGroupKey(groupKey)
            .andCommandKey(commandKey)
            .andThreadPoolKey(threadPoolKey)
    );
    this.restTemplate = restTemplate;
}
```

withGroupKey 设置命名组(必备, Hystrix命令默认的线程划分是根据命令分组实现的)
andCommandKey 设置命令名称
HystrixThreadPoolKey 对线程池进行设置, 细粒度的划分线程池. 尽量指定线程池划分, 不同的命令可能从业务逻辑上看是属于同一个组, 但是往往实现本身上需要跟其他命令进行隔离.

+ 注解方法

```java
@HystrixCommand(fallbackMethod = "fallback1"
        , groupKey = "groupkey1"
        , commandKey = "commandkey1"
        , threadPoolKey = "threadpool1"
)
```

## 4 请求缓存

### 4.1 开启请求缓存

通过重载getCacheKey方法来开启请求缓存
但不同的处理逻辑调用同一个依赖服务的时候,Hystrix会根据getCacheKey方法返回的值来区分是否是重复的请求.重复的请求只会请求一次.其余请求则是从缓存中获取.

```java
@Override
protected String getCacheKey() {
    logger.info("开启请求缓存,返回参数为缓存对应的值");
    return "res";
}
```

使用注解设置请求缓存

```java
  @CacheResult(cacheKeyMethod = "getCacheKey")
  public String visitServiceSync(){

  }
  // 用于生成key的方法 Nikola Zhang  【2018/12/23 12:29】
  private String getCacheKey(){
      return "res";
  }
```

当方法中存在一个参数(能区分请求)时,可以使用如下的方法

```java
  @CacheResult
  public String visitServiceSync(@CackeKey("id") String id){

  }
```

下面的这种情况也是可以的:
`@CackeKey("id") User user` 其中User中含有id属性
注意:
@CackeKey的优先级比cacheKeyMethod的优先级要低,如果已经使用cacheKeyMethod, 则前者不会生效.

### 4.2 清理失效缓存

当更新数据的时候需要考虑缓存失效问题

+ 可以通过`HystrixRequestCache.clear()`方法来进行缓存的清理.

```java
public static void flushCache(String res){
    HystrixRequestCache.getInstance(commandKey, HystrixConcurrencyStrategyDefault.getInstance())
    .clear(res);
}
```

`HystrixRequestCache.getInstance(commandKey, HystrixConcurrencyStrategyDefault.getInstance()).clear(res);`这种方式从默认的Hystrix并发策略中根据commandKey获取到该命令的请求缓存对象HystrixRequestCache的实例, 调用clear()方法完成缓存的清除.

+ 使用注解方式

```java
  @CacheRemove
  public String visitServiceSync(@CackeKey("id") String id){

  }
```

### 4.3 请求合并

Hystrix提供HystrixCollapser进行请求的合并, 以减少通信消耗和线程数的占用.

+ 在HystrixCollapser抽象类中定义了三个类型:
BatchReturnType: 合并后批量请求的返回类型
ResponseType: 单个请求返回类型
RequestArgumentType: 请求参数类型

+ 需要使用以上三中类型的三种方法及作用:
`RequestArgumentType getRequestArgument()`:该函数用来定义获取请求参数的方法.
`HystrixCommand<BatchReturnType> createCommand(Collection<CollapserRequest<ResponseType, RequestArgumentType>> requests)`: 合并请求产生批量命令的具体实现方法.该方法的collapsedRequests参数保存了延迟时间窗(一想到窗,窗函数就心痛)中收集到的所有的请求.获取所有的请求参数后,调用一个访问服务的方法, 并把这个请求参数的集合做为参数.
`mapResponseToRequests(BatchReturnType batchResponse, Collection<CollapserRequest<ResponseType, RequestArgumentType>> requests)`: 批量命令结果返回后的处理, 这里需要实现将批量结果拆分并传递给合并前的各个原子请求命令的逻辑.

#### 4.3.1 使用继承的方法实现

首先我们要创建一个类用于访问服务的方法,只是这个方法和之前的方法有点区别的是它的参数是一个集合类型, 并且这个集合中存放到并不是我们的直接的请求参数而是组装请求命令后, 获取到的所有请求中的参数的集合. 需要注意的是, 这些请求是在一段时间内(我们可以设置`super(Setter.withCollapserKey(HystrixCollapserKey.Factory.asKey("collapser")).andCollapserPropertiesDefaults(HystrixCollapserProperties.Setter().withTimerDelayInMilliseconds(100)));`)的所有请求的集合.
**新建一个用于访问服务的类**

```java
package com.demo.customer.service;

import com.netflix.hystrix.HystrixCommand;
import com.netflix.hystrix.HystrixCommandGroupKey;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : BatchCommand
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/23 13:08】
 *@Version : 1.0.0
 *************************************************/
public class BatchCommand extends HystrixCommand<List<String>> {

    public BatchCommand() {
        super(Setter.withGroupKey(
                HystrixCommandGroupKey
                    .Factory.asKey("servicecommand")));

    }

    @Override
    protected List<String> run() throws Exception {
        List<String> list = new ArrayList<>();
        list.add("val1");
        list.add("val2");
        list.add("val3");
        return list;
    }
}

```

**请求合并器的实现**

```java
package com.demo.customer.service;

import com.netflix.hystrix.HystrixCollapser;
import com.netflix.hystrix.HystrixCollapserKey;
import com.netflix.hystrix.HystrixCollapserProperties;
import com.netflix.hystrix.HystrixCommand;
import com.netflix.hystrix.HystrixCollapser.CollapsedRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/************************************************
 *@ClassName : Collaspser
 *@Description : 继承HystrixCollapser实现请求合并器
 *@Author : NikolaZhang
 *@Date : 【2018/12/23 13:05】
 *@Version : 1.0.0
 *************************************************/

public class Collaspser extends HystrixCollapser<List<String>, String, String>{

    private static Logger logger = LoggerFactory.getLogger(Collaspser.class);

    public Collaspser() {
        super(Setter.withCollapserKey(HystrixCollapserKey
            .Factory.asKey("collapser"))
            .andCollapserPropertiesDefaults(HystrixCollapserProperties
                .Setter().withTimerDelayInMilliseconds(100)));
    }

    @Override
    public String getRequestArgument() {
        logger.info("访问getRequestArgument");
        return "访问: getRequestArgument";
    }

    @Override
    protected HystrixCommand<List<String>> createCommand(
            Collection<CollapsedRequest<String, String>> collection) {
        logger.info("访问createCommand");
        return new BatchCommand();
    }


    @Override
    protected void mapResponseToRequests(List<String> batchResponse
            , Collection<CollapsedRequest<String, String>> collection) {

        logger.info("访问mapResponseToRequests, 请求的数量为: "+collection.size());
        int cnt = 0;
        for (CollapsedRequest<String, String> collapsedRequest : collection) {
            String res = batchResponse.get(cnt++);
            collapsedRequest.setResponse(res);
        }
    }
}

```

尤其需要注意的一点是我们继承的类是HystrixCollapser`<List<String>, String, String>` 这里的泛型定义分别对应我们一开始提到的BatchReturnType/ResponseType/RequestArgumentType.
下面是HystrixCollapser的具体信息:

```java
  public abstract class HystrixCollapser<BatchReturnType,
    ResponseType, RequestArgumentType>
  extends Object
  implements
  com.netflix.hystrix.HystrixExecutable<ResponseType>,com.netflix.hystrix.HystrixObservable<ResponseType>
```

如果我们的请求参数类型是String, 那么组合后的类型是`List<String>`相关的, 这个决定就在于第一步我们定义访问服务的那个方法的需要的参数类型. 在第一步里,我只是直接返回了一个List, 你可以把它改成类似下面的形式:

```java
List<User> result = *.queryUserInfo(usercodes);//访问某一个服务的方法, usercodes是List<String>类型, 返回类型对应User
```

书上的获取所有请求参数的方法: `list.addAll(collection.stream().map(CollapsedRequest::getArgument).collect(Collectors.toList()))`

### 4.3.2 使用注解方式实现请求合并器

```java
@HystrixCollapser(batchMethod = "visitServiceSyncAll"
  , collapserProperties = {@HystrixProperty(name = "timeDelayInMilliseconds", value = "100")
})
@CacheResult(cacheKeyMethod = "getCacheKey")
public String visitServiceSync(){
  ResponseEntity<String> responseEntity = restTemplate.getForEntity("http://bookservice/UserController/hello", String.class);
  return responseEntity.getBody();
}

@HystrixCommand
public List<String> visitServiceSyncAll(){
  ResponseEntity<List> responseEntity = restTemplate.getForEntity("http://bookservice/UserController/helloAll", List.class);
  return responseEntity.getBody();
}
```

这里我们定义了两个HystrixCommand, 一个用于直接访问服务, 一个用于请求多个条件的服务方法. 我们在前者上添加了请求合并器注解, 通过batchMethod属性制定了批量请求的实现方法为visitServiceSyncAll方法.

虽然通过请求合并可以减少请求的数量以缓解依赖服务线程池的资源, 但是请求合并是有额外开销的, 设置请求合并窗的时间是影像请求响应的关键. 一般时间窗的设置需要考虑两个方面:

+ 请求命令本身的延迟: 若果依赖服务端请求命令本身延迟较高, 那么就可以使用请求合并器, 这时候时间窗的时间(基本上是毫秒级)可以忽略.
+ 延迟时间窗内的并发量: 并发量较高, 且服务方提供批量处理接口, 使用请求合并器可以有效减少网络连接数量并提高系统的吞吐量.此时时间窗增加的消耗可以忽略不计.
