---
original: true
title: 服务容错保护 Spring Cloud Hystrix [1]
date: 2018-12-16


tags: 
  - hystrix
category: 技术
description: 服务容错的简单介绍
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> Hystrix具有服务降级、服务熔断、线程和信号隔离、请求缓存、请求合并以及服务监控等功能。

<!--more-->

## 1 简单的配置:

### 1.1 引入Spring Cloud Hystrix

```java
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-hystrix</artifactId>
</dependency>
```

### 1.2 添加注解

消费者工程主类使用注解`@EnableCircuitBreaker`开启断路器。这时候我们的主类的所有注解如下：

```java
@EnableDiscoveryClient
@EnableCircuitBreaker
@SpringBootApplication
```

P.S.: 可以使用`@SpringCloudApplication`注解。

### 1.3 改造服务消费方式。

  增加HelloService类，注入RestTemplate实例，然后在HelloService中使用restTemplate。最后，在HelloService函数上增加`@HystrixCommand`注解指定回调方法。
重新测试服务关闭的情况，返回信息为我们回调方法的输出。
注意Hystrix的默认超时时间为2000ms。当调用服务超时也会触发熔断。

## <font color=red>2 Hystrix的工作流程</font>

1. 创建HystrixCommand或HystrixObservableCommand对象
2. 命令执行。execute/queue/observe/toObservable
3. 结果是否被缓存
  若当前命令的请求缓存被启用，并且该命令缓存命中。那么缓存的结果会立即以Observable对象的形式返回。
4. 断路器是否打开
  若命令结果没有缓存命中的时候，Hystrix在执行命令前需要检查断路器是否为打开状态。
  如果断路器未打开状态，则Hystrix不会执行命令，而是转接到fallback处理逻辑【第8步】
  若断路器是关闭的，则检查是否有可用资源来执行命令。【第5步】
5. 线程池、请求队列、信号量是否占满。
  如果与命令相关的线程池和请求队列，或者信号量（不适用线程池的时候）已经被占满，那么Hystrix也不会执行命令，而是转到fallback处理逻辑。【第八步】
  需要注意的是，这里Hystrix所判断的线程池并非容器的线程池，而是每个依赖服务的专有线程池。Hystrix为了保证不会因为某个依赖服务的问题影响到其他依赖服务而采用了“舱壁模式”来隔离每个依赖的服务。
6. HystrixObservableCommand.construct()或HystrixCommand.run()
  Hystrix会根据我们编写的方法来决定采取什么样的方式请求依赖服务。
  HystrixCommand.run()：返回一个单一的结果，或者抛出异常。
  HystrixObservableCommand.construct()：返回一个Observable对象来发射多个结果，或通过orError发送错误通知。
  如果run或construct方法的持续时间超过子命令设置的超时阈值，则会抛出超时异常。Hystrix转接fallback处理逻辑。【第8步】
  如果当前命令没有取消或中断，则会最终忽略run，construct方法的返回。
  如果命令没有抛出异常并返回了结果，Hystrix在户口页一些日志并采集监控报告之后将该结果返回。在run的情况下，Hystrix会返回一个Observable，它发射单个结果并产生onCompleted的结果通知；而使用Hystrix会直接返回该方法产生的Observable对象。
7. 计算断路器的健康度
  Hystrix会将“成功”，“失败”，“拒绝”，“超时”等信息报告给断路器，而断路器会维护一组计数器来统计这些数据。
  断路器会使用这些统计数据来决定是否将断路器打开，来对某个依赖服务的请求进行“熔断/短路”，直到恢复期结束。若恢复期结束后，根据统计数据判断如果还是未达到健康指标，就再次“熔断/短路”。
8. fallback处理
  当命令执行失败的时候Hystrix会进入fallback的尝试回退处理，通常该操作也称为“服务降级”。

    引起服务降级的操作的可能情况。
    + 第4步，当前命令处于“熔断/短路”状态，断路器是打开的时候。
    + 第5步，当前命令的线程池、请求队列或者信号量被占满的时候。
    + 第6步，HystrixObservableCommand.construct()或HystrixCommand.run()抛出异常的时候。

    在服务降级逻辑中，我们需要实现一个通用的响应结果，并且该结果的处理逻辑应当是从缓存或是根据一些静态逻辑来获取，而不是依赖网络请求获取。如果一定要在降级逻辑中包含网络请求，那么该请求也必须被包装在HystrixObservableCommand或HystrixCommand中，从而形成级联的降级策略，而最终的降级逻辑一定不是一个依赖网络请求的处理，而是一个能够稳定返回结果的处理逻辑。

    在HystrixObservableCommand和HystrixCommand中实现降级逻辑的不同。
    + 当使用HystrixCommand的时候，通过实现HystrixCommand.getFallback()来实现服务降级逻辑。他会返回一个Obse对象，该对象会发射getFallback()的处理结果。
    + 当使用HystrixObservableCommand的时候，通过HystrixObservableCommand.resumeWithFallback()实现服务降级逻辑，该方法直接返回一个Observable对象来发射一个或多个降级结果。

    如果我们没有为命令实现降级逻辑或者降级处理逻辑抛出了异常，Hystrix依然会返回一个Observable对象，但是它不会发射任何处理结果数据，而是通过onError方法通知命令立即中断请求，并通过onError方法将引起命令失败的请求发送给调用者。

    当降级执行失败的时候，Hystrix会有如下处理：
    + execute()：抛出异常。
    + queue()：正常返回Future对象，但是当调用get()来获取结果时候会抛出异常。
    + observe()：正常返回Observable对象，当订阅它的时候，将立即通过调用订阅者的onError方法来通知中止请求。
    + toObservable()：正常返回Obse对象，当订阅它的时候，将通过调用订阅者的onError方法来通知中止请求。

9. 返回成功的响应

当Hystrix命令执行成功后，它会将处理结果直接返回或是以Observable的形式返回。而具体以哪种方法返回取决于之前第2步中所提到的命令的4钟不同执行方式。

+ toObservable()：返回最原始的Observable，必须通过订阅它才会真正触发命令的执行流程。
+ observe()：在toObservable()产生原始Observable后立即订阅它，让命令能够马上开始异步执行，并返回一个Observable对象，当调用它的subscribe时，将重新产生结果和通知给订阅者。
+ quque()：将toObservable()产生的原始Observable通过toBlocking()方法转换成BlockingObservable对象，并调用它的toFuture()方法返回异步的Future对象。
+ execute()：在queue()产生异步结果Future对象后，通过get()方法阻塞并等待结果的返回。

## 3 依赖隔离

  使用该模式实现线程池的隔离，它会为每一个依赖服务创建一个独立的线程池，这样就算某个依赖服务出现延迟过高的情况，也只是对该依赖服务的调用产生影响，而不会拖慢其他的依赖服务。
  优点：

  1. 应用自身不会受不可控的依赖服务影响。即便给依赖服务分配的线程池被填满，也不会影响应用自身的其余部分。
  2. 可以有效降低接入新服务的影响。
  3. 当依赖的服务从失效恢复正常后，它的线程池会被清理并且能够马上恢复健康的服务。相比之下，容器级别的清理恢复速度要慢得多。
  4. 当依赖的服务出现配置错误的时候，线程池会快速反应出此问题。同时，可以在不影响应用功能的情况下通过实时的动态属性刷新来进行处理。
  5. 当依赖的服务因实现机制调整等原因造成其性能出现很大变化的时候，线程池的监控指标信息会反映出这样的变化。
  6. 每个专有线程池都提供了内置的并发实现，可以利用他为同步的依赖服务构建异步访问。

在Hystrix中除了可使用线程池之外，还可以使用信号量来控制单个依赖服务并发度，信号量的开销远比线程池的开销小，但是不能设置超时和实现异步访问。所以只有在依赖服务是可靠的情况下才使用信号量。
HystrixObservableCommand和HystrixCommand中使用信号量的情况：

+ 命令执行：如果将隔离策略参数execution.isolation.strategy设置为SEMAPHORE，Hystrix会使用信号量替代线程池来控制依赖服务的并发。
+ 降级逻辑：当Hystrix尝试降级逻辑时，会在调用线程中使用信号量。
信号量的默认值是10，可以通过动态刷新配置的方式来控制并发线程的数量。信号量的估算方法：仅访问内存数据的请求一般耗时在1ms以内，性能可以达到5000rps(每秒请求5000次)，这样级别的请求可以将信号量设为1或者2。

## 4 Hystrix各接口和注解具体使用方法

在实现其下的方法之前,要确保引入了相关的依赖,注解, 注入RestTemplate
**回顾一下配置: **

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.1.1.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.demo</groupId>
    <artifactId>customer</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>customer</name>
    <description>Demo project for Spring Boot</description>

    <properties>
        <java.version>1.8</java.version>
        <spring-cloud.version>Greenwich.RC2</spring-cloud.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.retry</groupId>
            <artifactId>spring-retry</artifactId>
            <version>1.2.1.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
        </dependency>
    </dependencies>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jar-plugin</artifactId>
                <configuration>
                    <archive>
                        <manifest>
                            <addClasspath>true</addClasspath>
                            <useUniqueVersions>false</useUniqueVersions>
                            <classpathPrefix>lib/</classpathPrefix>
                            <mainClass>com.demo.customer.CustomerApplication</mainClass>
                        </manifest>
                    </archive>
                </configuration>
            </plugin>
        </plugins>
    </build>

    <repositories>
        <repository>
            <id>spring-milestones</id>
            <name>Spring Milestones</name>
            <url>https://repo.spring.io/milestone</url>
        </repository>
    </repositories>

</project>

```

```java
@EnableDiscoveryClient
@EnableCircuitBreaker
@SpringBootApplication
public class CustomerApplication {

    public static void main(String[] args) {
        SpringApplication.run(CustomerApplication.class, args);
    }

    @Bean
    @LoadBalanced
        // 创建RestTemplate的spring bean实例，通过@LoadBalanced注解开启客户端均衡负载
    RestTemplate restTemplate(){
        return  new RestTemplate();
    }

}
```

Hystrix用来封装具体的依赖服务调用逻辑。可以使用继承和注解的方式实现。
建议创建两个工程,一个使用继承方式, 一个使用注解方式.

### 4.1 实现请求的同步执行、异步执行、响应式执行。

同步执行: `User u = new UserCommand(restTemplate, 1L).execute()`
异步执行: `Future<User> futureUser = new UserCommand(restTemplate, 1L).queue()`
异步执行的时候,可以通过对返回的futureUser调用get方法来获取结果

+ 使用继承方式
注意我们没有使用@Service 在controller中调用的时候实例化一个就好.

  ```java
  public class CustomerService extends HystrixCommand<String> {

      private static Logger logger = LoggerFactory.getLogger(CustomerService.class);
      private RestTemplate restTemplate;

      public CustomerService(RestTemplate restTemplate) {
          super(HystrixCommandGroupKey.Factory.asKey("ExampleGroup"));
          this.restTemplate = restTemplate;
      }

      @Override
      protected String run() throws Exception {
          logger.info("ooo调用UserCommand run");
          return restTemplate.getForObject("http://bookservice/UserController/hello", String.class);
      }

  }
  ```

下面的代码是调用的方法:

```java
  // 同步执行 Nikola Zhang  【2018/12/22 14:27】
   @RequestMapping(value = "ribbonCustomerSync", method = RequestMethod.GET)
   public String ribbonCustomerSync(){
       logger.info("使用同步方式调用");
       return  new CustomerService(restTemplate).execute();
   }

   // 异步执行 Nikola Zhang  【2018/12/22 14:27】
   @RequestMapping(value = "ribbonCustomerAsync", method = RequestMethod.GET)
   public String ribbonCustomerAsync() throws ExecutionException, InterruptedException {
       Future<String> queue =  new CustomerService(restTemplate).queue();
       logger.info("使用异步方式调用");
       String res = queue.get();
       return res;
   }
  ```

另外还有一种响应式的实现方式:

  ```java

  public class CustomerServiceObservable extends HystrixObservableCommand<String> {

      private RestTemplate restTemplate;
      private static Logger logger = LoggerFactory.getLogger(CustomerServiceObservable.class);
      /**
       * 除了以上两种方法之外还可以使用HystrixCommand提供的toObservable 和observer
       * 方法实现响应式执行方式。以上两种方法均返回observable对象。
       * observe()在调用的时候会立即执行，当Observable每次被订阅的时候重放它的行为。
       * 而toObservable()则是在所有订阅则订阅之后执行
       */

      public CustomerServiceObservable(RestTemplate restTemplate) {
          super(HystrixCommandGroupKey.Factory.asKey("ExampleGroup"));
          this.restTemplate = restTemplate;
      }

      @Override
      // TODO 使用HystrixObservableCommand实现命令封装 Nikola Zhang  【2018/12/20 8:18】
      protected Observable<String> construct() {
          return Observable.create(new Observable.OnSubscribe<String>() {
              @Override
              public void call(Subscriber<? super String> subscriber) {
                  try {
                      if(!subscriber.isUnsubscribed()) {
                          String res = restTemplate.getForObject("http://bookservice/UserController/hello"
                                  , String.class);
                          subscriber.onNext(res);
                          subscriber.onCompleted();
                      }
                  } catch (Exception e){
                      subscriber.onError(e);
                  }
              }
          });
      }

  }

  ```

使用Observable实现响应式执行方式的调用:

  ```java
      // 响应式执行 Nikola Zhang  【2018/12/22 14:27】
      @RequestMapping(value = "ribbonCustomerResCold", method = RequestMethod.GET)
      public Observable<String> ribbonCustomerRes() throws ExecutionException, InterruptedException {
          logger.info("使用响应式冷执行调用");
          Observable<String> stringObservable = new CustomerServiceObservable(restTemplate).toObservable();
          return stringObservable;
      }
      // 响应式执行 Nikola Zhang  【2018/12/22 14:27】
      @RequestMapping(value = "ribbonCustomerResHot", method = RequestMethod.GET)
      public Observable<String> ribbonCustomerResHot() throws ExecutionException, InterruptedException {
          logger.info("使用响应式热执行调用");
          Observable<String> stringObservable = new CustomerServiceObservable(restTemplate).observe();
          return stringObservable;
      }

  ```

+ 使用注解方式

  ```java
    private RestTemplate restTemplate;

    @HystrixCommand
    public String visitServiceSync(){
        ResponseEntity<String> responseEntity = restTemplate.getForEntity("http://bookservice/UserController/hello", String.class);
        return responseEntity.getBody();
    }

    @HystrixCommand
    // 异步实现 Nikola Zhang  【2018/12/20 7:48】
    public Future<String> visitServiceAsync (){
        return new AsyncResult<String>() {
            @Override
            public String invoke() {
                return restTemplate.getForObject("http://bookservice/UserController/hello"
                    , String.class);
            }
        };
    }

    public CustomerService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    /**
     *  使用@HystrixCommand注解实现响应式命令时
     *  ，可以通过observableExecutionMode参数来控制是使用observer()
     *  还是toObservable()的执行方式。该参数有下面两种设置方式。
     * @HystrixCommand(observableExecutionMode=
     * observableExecutionMode.EAGER)：EVGER是该参数的模式值，
     * 表示使用observer()执行方式。
     * @HystrixCommand(observableExecutionMode=
     * observableExecutionMode.LAZY)：表示使用toObservable()执行方式。
     */

    // 使用observer() Nikola Zhang  【2018/12/22 20:47】
    //    @HystrixCommand(observableExecutionMode = ObservableExecutionMode.EAGER )
     // 使用toObservable() Nikola Zhang  【2018/12/22 20:47】
     @HystrixCommand(observableExecutionMode = ObservableExecutionMode.LAZY )
     public Observable<String> visitServiceObservable() {
         return Observable.create(new Observable.OnSubscribe<String>() {
             @Override
             public void call(Subscriber<? super String> subscriber) {
                 try {
                     if(!subscriber.isUnsubscribed()) {
                         String str = restTemplate.getForObject("http://bookservice/UserController/hello"
                             , String.class);
                         subscriber.onNext(str);
                         subscriber.onCompleted();
                     }
                 } catch (Exception e) {
                     subscriber.onError(e);
                 }
             }
         }) ;
     }
  ```

## end

以上都是访问服务的调用方法. 但是我们调用服务的时候, Hystrix命令总有出错的情况(出错, 超时, 线程池拒绝, 断路器熔断等情况), 之后会继续介绍服务降级的处理逻辑.
