---
title: 门面模式
tag:
  - 门面模式
category: 设计模式
description: 为子系统中的一组接口提供一个统一的高层接口，简化了外部调用接口，隐藏内部复杂性。
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

> 门面(Facade)模式是一种结构型设计模式，提供了一个统一的接口，用来访问子系统中的一群接口。门面模式定义了一个高层接口，这个接口使得子系统更容易使用。

![20240120122205](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/11-facade/20240120122205.png)

::: info 使用场景

1. 对复杂子系统提供一个简单接口。
2. 客户端需要和多个子系统进行交互,门面模式提供一个统一接口减少客户端的复杂性。
3. 在层次化结构中,提供系统各层之间的入口点。
:::

## 代码实现

### 子系统的接口

假设我们的子系统中提供上图的接口。

```java
public class Class2 {
    
}

```

其他类的创建类似。

### 门面

门面类实际上将逻辑上的复杂关系，封装到它的方法中，并且提供接口给客户端访问。

```java
public class Facade {
    
    public void operation() {
        Class2 class2 = new Class2();
        Class3 class3 = new Class3();
        Class4 class4 = new Class4();
        Class5 class5 = new Class5();

        System.out.println(class2);
        System.out.println(class3);
        System.out.println(class4);
        System.out.println(class5);
    }
}
```
