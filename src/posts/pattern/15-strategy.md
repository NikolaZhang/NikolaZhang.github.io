---
title: 策略模式
tag:
  - 策略模式
category: 设计模式
description: 定义了一系列算法，并将每一个算法封装起来，使它们可以相互替换，让算法的变化独立于使用该算法的客户。
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-22

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 策略模式定义了一组能够用来表示可能行为集合的类。这些行为可以在应用程序中使用，来修改应用程序功能。

![20240124084241](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/15-strategy/20240124084241.png)

策略模式（Strategy pattern）包含以下三个主要角色：

1. 抽象策略角色（Strategy）：定义所有支持的算法的公共接口。在面向对象设计中，通常是一个接口或抽象类，它声明了具体策略角色需要实现的方法。

2. 具体策略角色（ConcreteStrategy）：实现了抽象策略角色所定义的接口，提供了具体的算法实现。根据情况的不同，可以有多个具体策略角色，每个都提供不同的行为实现。

3. 环境角色（StrategyContext）：持有一个策略类的引用，并且使用该策略来执行相关的操作。环境角色可以根据运行时条件改变其使用的具体策略。通过与抽象策略角色交互，环境角色独立于具体的策略实现细节。

## 代码实现

### 抽象策略

抽象策略定义了一个抽象的行为。

```java
public abstract class Strategy {
    public abstract void algorithmInterface();
}

```

### 具体策略

具体角色用于实现这个抽象行为，且支持多种实现方式。

```java
public class ConcreteStrategyA extends Strategy{

    @Override
    public void algorithmInterface() {
        System.out.println("ConcreteStrategyA.algorithmInterface()");
    }
    
}
```

你可以继续创建`ConcreteStrategyB`、 `ConcreteStrategyC`。

### 环境角色

环境角色使用具体的策略角色来执行操作。它包含了一个策略对象的引用。

```java
public class StrategyContext {

    private Strategy strategy;

    public StrategyContext(Strategy strategy) {
        this.strategy = strategy;
    }

    public void contextInterface() {
        strategy.algorithmInterface();
    }
    
}

```

### 使用

在Client类中我们指定不同的策略进行调用。

```java
public class Client {
    public static void main(String[] args) {
        StrategyContext contextA = new StrategyContext(new ConcreteStrategyA());
        contextA.contextInterface();

        StrategyContext contextB = new StrategyContext(new ConcreteStrategyB());
        contextB.contextInterface();

        StrategyContext contextC = new StrategyContext(new ConcreteStrategyC());
        contextC.contextInterface();
    
    }
}
```
