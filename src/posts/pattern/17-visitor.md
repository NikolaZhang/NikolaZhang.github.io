---
title: 访问者模式
tag:
  - 访问者模式
category: 设计模式
description: 表示一个作用于某对象结构中的各元素的操作，它可以在不改变各元素类的前提下定义作用于这些元素的新操作。
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-26

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 访问者模式提供了一种方便的、可维护的方法来表示在对象结构元素上要进行的操作。该模式允许不改变操作元素的类的前提下定义一个新操作。

![20240125152240](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/17-visitor/20240125152240.png)

访问者模式的主要角色：

- 抽象访问者（Visitor）：它声明了一个访问操作的接口，该接口的实现可以访问一个由元素对象结构中的元素所组成的对象结构。
- 具体访问者（ConcreteVisitor）：它实现了抽象访问者接口中声明的访问操作，以便为一个对象结构中的元素执行操作。
- 抽象元素（Element）：它声明了一个接受操作的接口，该接口的实现可以为一个对象结构中的元素接受访问。
- 具体元素（ConcreteElement）：它实现了接受操作接口，以便为一个对象结构中的元素接受访问。
- 对象结构（ObjectStructure）：它可以是元素的集合，也可以是单个元素。
- 客户端（VisitorClient）：它可以访问元素结构中的所有元素，并调用这些元素的操作。

## 代码实现

### 抽象访问者

这里我们定义了访问不同元素的方法。

```java
public abstract class Visitor {

    public abstract void visitConcreteElementA(ConcreteElementA concreteElementA);
    public abstract void visitConcreteElementB(ConcreteElementB concreteElementB);
}
```

### 具体访问者

具体访问者中可以获取到所访问元素的对象，并执行相应的操作。

```java
public class ConcreteVisitor1 extends Visitor {
    @Override
    public void visitConcreteElementA(ConcreteElementA concreteElementA) {
        System.out.println("ConcreteVisitor1: ConcreteElementA visited.");
    }

    @Override
    public void visitConcreteElementB(ConcreteElementB concreteElementB) {
        System.out.println("ConcreteVisitor1: ConcreteElementB visited.");

    }
}

```

你可以仿照这段代码创建`ConcreteVisitor2`。

### 抽象元素

元素类中提供accept方法用于接收对应的访问者，即允许谁访问这个元素。

```java
public abstract class Element {

    public abstract void accept(Visitor visitor);

}

```

### 具体元素

具体元素类中实现了`accept`方法，并将自身作为参数传递给访问者。

```java
public class ConcreteElementA extends Element {
    @Override
    public void accept(Visitor visitor) {
        visitor.visitConcreteElementA(this);
    }
}

```

你可以仿照这段代码创建`ConcreteElementB`。

### 对象结构

```java
public class ObjectStructure {

    private List<Element> elements = new ArrayList<>();

    public void add(Element element) {
        this.elements.add(element);
    }

    public void remove(Element element) {
        this.elements.remove(element);
    }

    public void accept(Visitor visitor) {
        for (Element element : elements) {
            element.accept(visitor);
        }
    }

}

```

### 测试

```java
public class VisitorClient {

    public static void main(String[] args) {
        Visitor visitor1 = new ConcreteVisitor1();
        Visitor visitor2 = new ConcreteVisitor2();

        Element elementA = new ConcreteElementA();
        Element elementB = new ConcreteElementB();

        ObjectStructure objectStructure = new ObjectStructure();
        objectStructure.add(elementA);
        objectStructure.add(elementB);
        
        objectStructure.accept(visitor1);
        objectStructure.accept(visitor2);

        System.out.println("===== remove elementB");
        objectStructure.remove(elementB);
        
        objectStructure.accept(visitor1);
        objectStructure.accept(visitor2);
    }
}
```

结果：

![20240126161905](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/17-visitor/20240126161905.png)
