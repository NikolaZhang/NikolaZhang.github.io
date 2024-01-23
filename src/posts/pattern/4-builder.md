---
title: 建造者模式
tag:
  - 建造者模式
category: 设计模式
description: 将复杂对象的构建与表示分离，使得同样的构建过程可以创建不同的表示。
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-05

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 建造者模式将复杂对象的构建与其表示相分离，这样相同的构造过程可以创建不同的对象。
> 通过只指定对象的类型和内容，建造者模式允许客户端对象构建一个复杂对象。客户端可以不受该对象构造细节的影响。这样通过定义一个能够构建其他类实例的类，就可以简化复杂对象的创建过程。
> 建造者模式生产一个主要产品，而该产品中可能有多个类，但是通常只有一个主类。当使用该模式的时候，可以一次创建所有的复杂对象。而其他模式一次就只能创建一个对象。

![Alt text](images/4-builder/image.png)

建造者模式包含以下角色：

- AbstractBuilder：抽象建造者  
    这个角色用于规范产品对象的各个组成成分的建造。
- ConcreteBuilder：具体建造者  
    在指导者的调用下创建产品实例。
- Director：指挥者
    调用具体建造者角色创建产品对象。
- Product：产品角色

## 代码实现

为了说明建造者模式的使用,下面使用一个电脑产品构建的例子。

在`AbstractBuilder`中我们定义创建产品的各个部件的抽象方法：

### 抽象建造者

```java
public abstract class AbstractBuilder {

    protected Product product;

    public abstract AbstractBuilder setName();

    public abstract AbstractBuilder setCpu();

    public abstract AbstractBuilder setMemory();

    public abstract AbstractBuilder setStorage();

    public abstract AbstractBuilder setKeyboard();

    public abstract AbstractBuilder setScreen();

    public abstract AbstractBuilder setMouse();

    public Product build() {
        return this.product;
    }
}
```

### 具体建造者

在`ConcreteBuilder`中实现了各个部件的构建方法，当然我们也可以扩展一些方法。

```java
public class ConcreteBuilder extends AbstractBuilder {

    public ConcreteBuilder() {
        this.product = new Product();
    }

    

    @Override
    public ConcreteBuilder setName() {
        this.product.setName("MacBook Pro");
        return this;
    }

    @Override
    public ConcreteBuilder setCpu() {
        this.product.setCpu("Intel Core i7");
        return this;
    }

    @Override
    public ConcreteBuilder setMemory() {
        this.product.setMemory("16 GB");
        return this;
    }

    @Override
    public ConcreteBuilder setStorage() {
        this.product.setStorage("256 GB");
        return this;
    }

    @Override
    public ConcreteBuilder setKeyboard() {
        this.product.setKeyboard("USB");
        return this;
    }

    @Override
    public ConcreteBuilder setScreen() {
        this.product.setScreen("13.3-inch");
        return this;
    }

    @Override
    public ConcreteBuilder setMouse() {
        this.product.setMouse("USB");
        return this;
    }
}

```

### 产品类

```java

public class Product {

    private String name;
    private String cpu;
    private String memory;
    private String storage;
    private String keyboard;
    private String screen;
    private String mouse;

    // warning: get set 方法省略，需要添加
  
    @Override
    public String toString() {
        return "Product{" +
                "name='" + name + '\'' +
                ", cpu='" + cpu + '\'' +
                ", memory='" + memory + '\'' +
                ", storage='" + storage + '\'' +
                ", keyboard='" + keyboard + '\'' +
                ", screen='" + screen + '\'' +
                ", mouse='" + mouse + '\'' +
                '}';
    }
}

```

### 指挥者

在`Director`中调用`AbstractBuilder`中的方法进行产品的创建。

```java
public class Director {

    private AbstractBuilder builder;

    public Director(AbstractBuilder builder) {
        this.builder = builder;
    }

    public Product build() {
        return builder.setName()
                .setCpu()
                .setMemory()
                .setStorage()
                .setKeyboard()
                .setScreen()
                .setMouse()
                .build();
    }
}
```

### 开始生产

最后创建一个类调用`Director`类进行，产品的创建。

```java
public class Client {
    
    public static void main(String[] args) {
        Director director = new Director(new ConcreteBuilder());
        Product product = director.build();
        System.out.println(product.toString());
    }
}
```

输出结果：

```bash
Product{name='MacBook Pro', cpu='Intel Core i7', memory='16 GB', storage='256 GB', keyboard='USB', screen='13.3-inch', mouse='USB'}
```
