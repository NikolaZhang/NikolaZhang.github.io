---
title: 享元模式
tag:
  - 享元模式
category: 设计模式
description: 运用共享技术有效地支持大量细粒度的对象，减少系统中的对象数量，从而节省资源。
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-20

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 享元模式可以通过共享对象减少系统中低等级的、详细的对象数目。如果一个类实例包含用来互换使用的相同信息，该模式允许程序通过共享一个接口来避免使用多个具有相同信息的类实例所带来的开销。

![20240121112418](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/12-flyweight/20240121112418.png)

主要角色：

1. 抽象享元（Flyweight）角色：  
这通常是一个接口或抽象类，定义了具体享元类公共的方法和内部状态（Intrinsic State）的访问方式。
内部状态是存储在享元对象内部，并且在整个系统中可以被多个享元对象共享的状态。
抽象享元角色也可能提供一个方法来接收外部状态（Extrinsic State），外部状态是不能被共享的，它依赖于具体的使用场景。
1. 具体享元（Concrete Flyweight）角色：  
实现抽象享元角色所定义的接口，为内部状态提供了存储空间，并实现了相应的操作。
具体享元对象是可共享的，系统中对于具有相同内部状态的对象只创建一个实例。
通常结合单例模式或其他机制来确保同一内部状态对应的具体享元只有一个实例。
1. 享元工厂（Flyweight Factory）角色：  
负责创建和管理享元对象，客户端不直接创建具体享元对象，而是通过享元工厂获取。
工厂会根据需要重用已有的享元对象，或者在没有可用享元对象时才创建新的实例。
1. 客户端（Flyweight Client）角色：  
客户端并不直接操作具体享元对象，而是通过抽象享元接口与享元对象交互，并向享元对象传入外部状态。

::: info 信息
通过这种设计，当系统中有大量相似对象时，可以通过享元模式大大节省内存消耗并提高程序性能。例如，在抢火车票的例子中，每种座位类别（如硬座、软座、硬卧等）可以作为一个具体享元类，它们共享诸如起始站、终点站和价格等不变的内部状态，而购买者的个人信息则作为外部状态由客户端在请求时传入。
:::

## 代码实现

### 抽象享元

抽象享元定义了传入外部状态的方法。如果子类之间的内部状态是不互通的，可以将内部状态定义到子类中。建议是有一个通用的状态，并且这个状态是可以通过工厂定位到唯一的实例的。

```java
public abstract class Flyweight {
    
    public abstract void operation(String extrinsicState);
}
```

### 具体享元

具体享元实现了抽象享元中的抽象行为，并且存储了内部状态。

```java
public class ConcreteFlyweight extends Flyweight {

    private String intrisicState;

    public ConcreteFlyweight(String intrisicState) {
        this.intrisicState = intrisicState;
    }

    @Override
    public void operation(String extrinsicState) {
        System.out.println("ConcreteFlyweight operation, extrinsicState:" + extrinsicState);
    }
    
}
```

之后我们仿照上面的代码定义`UnshareConcreteFlyweight`。

### 享元工厂

享元工厂是享元对象的工厂，它负责创建和管理享元对象，享元工厂是单例模式。如果不存在享元则创建一个新的享元对象；否则直接从内存中获取。

```java
public class FlyweightFactory {

    private static Map<String, Flyweight> flyweights = new HashMap<>();

    public static Flyweight getConcreteFlyweight(String state) {
        if (!flyweights.containsKey(state)) {
            flyweights.put(state, new ConcreteFlyweight(state));
        }
        return flyweights.get(state);
    }
    

}

```

### 客户端

客户端通过享元工厂获取具体享元对象，并传入外部状态。

```java
public class FlyweightClient {
    
    public static void main(String[] args) {
        Flyweight flyweight1 = FlyweightFactory.getConcreteFlyweight("state1");
        flyweight1.operation("state1");

    }
}
```
