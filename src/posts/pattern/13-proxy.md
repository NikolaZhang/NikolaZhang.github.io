---
title: 代理模式
tag:
  - 代理模式
category: 设计模式
description: 其他对象提供一种代理以控制对这个对象的访问。
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-21

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 代理模式（Proxy Pattern）是一种结构型设计模式，它为另一个对象提供一个代理以控制对这个对象的访问。这种模式通过引入代理类来间接操作真实对象，从而在不修改原始对象的情况下为其增加额外功能或进行访问控制。

![20240122172943](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/13-proxy/20240122172943.png)

在代理模式中，通常存在以下几个关键角色：

1. 抽象主题（Subject）接口：
定义了真实主题和代理主题共同的方法，这样客户端就可以一致地对待它们两者。
1. 真实主题（RealSubject）：
实现了抽象主题接口的具体类，代表了实际需要被代理的对象。
1. 代理主题（ProxySubject）：
也实现了抽象主题接口，内部持有一个对真实主题对象的引用，并在接收到客户端请求时转发给真实主题对象处理。
在转发请求前后，代理可以添加额外的业务逻辑，如权限检查、日志记录、缓存机制、延迟加载、计算耗时等。

## 分类

代理模式根据实现方式的不同，主要分为以下两种类型：

1. 静态代理：
在编译期间就已经确定了代理类，代理类与真实主题类之间存在着静态的关联关系，代理类通常是手动创建的，且需要针对每个具体的真实主题类编写对应的代理类。

2. 动态代理：
在运行时动态生成代理类，例如Java中的JDK动态代理或者CGLIB库提供的代理机制，可以根据接口或者类动态创建代理对象，无需预先知道真实主题的具体类型。

## 代码实现

### 静态代理

#### 抽象主题

抽象主题中只有一个方法，这个方法是真实主题和代理主题都需要实现的。

```java
public interface Subject {

    void request();

}
```

#### 真实主题

真实主题实现了接口的抽象行为。

```java
public class RealSubject implements Subject {

    @Override
    public void request() {
        System.out.println("RealSubject request");
    }
}
```

#### 代理主题

代理主题实现了接口的抽象行为，并且持有真实主题的引用。代理主题在接收到客户端请求后，可以选择在真实主题之前或之后添加额外的业务逻辑。

```java
public class ProxySubject implements Subject{

    private RealSubject realSubject;

    public ProxySubject(RealSubject realSubject) {
        this.realSubject = realSubject;
    }

    @Override
    public void request() {
        beforeRequest();

        // 调用真实主题的方法
        this.realSubject.request();

        afterRequest();
    }

    private void beforeRequest() {
        System.out.println("Proxy: Before the request.");
    }

    private void afterRequest() {
        System.out.println("Proxy: After the request.");
    }
}
```

输出结果中可以看到，通过代理类我们在执行`request`方法前后，加上了日志。

![20240123083940](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/13-proxy/20240123083940.png)

### 动态代理

动态代理的实现过程如下：

1. 定义一个接口，这个接口需要被代理的类实现。
2. 使用JDK的动态代理类`Proxy`生成一个代理对象，这个代理对象实现了接口。
3. 通过代理对象调用真实对象的方法。

这里使用jdk中的`InvocationHandler`接口，重写`invoke`方法，在invoke方法中添加额外的业务逻辑。

![20240123131037](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/13-proxy/20240123131037.png)

```java
public class ProxyInvocationHandler implements InvocationHandler {

    private final Subject subject;

    public ProxyInvocationHandler(Subject subject) {
        this.subject = subject;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        beforeRequest();
        Object result = method.invoke(this.subject, args);
        afterRequest();
        return result;
    }

    private void beforeRequest() {
        System.out.println("Dynamic Proxy: Before the request.");
    }

    private void afterRequest() {
        System.out.println("Dynamic Proxy: After the request.");
    }

}
```

::: info InvocationHandler
`java.lang.reflect.InvocationHandler`是一个接口，它是Java动态代理机制中的核心组件之一。Java的动态代理允许开发者在运行时创建和修改类的行为，而无需硬编码这些行为到实际的类中。

当使用`Proxy.newProxyInstance()`方法创建一个动态代理对象时，需要提供一个实现了`InvocationHandler`接口的类实例作为调用处理器。这个调用处理器将在代理对象的方法被调用时起到关键作用。

`InvocationHandler`接口定义了一个方法：

```java
Object invoke(Object proxy, Method method, Object[] args) throws Throwable;
```

- proxy: 这是当前正在处理方法调用的代理对象引用。
- method: 代表了将要被调用的、位于代理接口上的具体方法。
- args: 包含了调用该方法时传递的实际参数值数组。

当客户端通过代理对象调用方法时，实际上是调用了此`invoke`方法。在此方法内部，开发者可以实现对原始方法调用前后的各种拦截操作，如权限检查、日志记录、数据预处理或后处理等，并最终决定是否以及如何执行原始方法。

:::

在Client中使用动态代理：

```java
public class Client {

    public static void main(String[] args) throws Throwable {
        RealSubject realSubject = new RealSubject();
        ProxyInvocationHandler handler = new ProxyInvocationHandler(realSubject);

        Subject subject = (Subject) Proxy.newProxyInstance(realSubject.getClass().getClassLoader(), 
                                realSubject.getClass().getInterfaces(), handler);

        subject.request();

    }
}

```

执行结果为：

![20240123091600](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/13-proxy/20240123091600.png)
