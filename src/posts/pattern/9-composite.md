---
title: 组合模式
tag:
  - 组合模式
category: 设计模式
description: 如何使用组合模式来处理树型结构
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-19

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 组合模式，允许创建树型层次结构来改变复杂性，同时允许结构中的每一个元素操作同一个接口。该模式将对象组合成树型结构来表示会整个或部分的层次结构。这就意味着组合模式允许客户端使用单个对象或多个同一对象的组合。

![20240119142212](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/9-composite/20240119142212.png)

::: info 主要角色

1. 抽象构件（Component）角色：定义了所有节点（包括叶子节点和树枝节点）的共有接口或抽象类。
提供了访问和管理子组件的方法，但在安全组合模式下可能不直接提供这些方法。
可能实现了一些默认行为，所有子类都继承并可覆写这些行为。

2. 叶子构件（Leaf）角色：组合中的叶节点对象，表示树结构中最基础的元素。
不包含任何子节点，因此实现了抽象构件接口时，其对应的方法可能为空或者抛出异常，表明它不能添加或删除子节点。
它们通常包含与自身相关的业务逻辑。

3. 树枝构件（Composite）角色 / 中间构件：组合中的分支节点对象，它具有子节点，并且能够存储和管理这些子节点。
实现了抽象构件接口，提供了添加、删除以及遍历子节点的方法。除了自身的业务逻辑之外，还负责协调其子节点的行为。
:::

## 代码实现

### 抽象构件

抽象构建中定义节点的抽象，包含节点的访问方法。

```java
public abstract class Component {
    
    public abstract void operation();
    public abstract void add(Component c);
    public abstract void remove(Component c);
    public abstract Component getChild(int i);
}
```

### 叶子节点

叶子节点是抽象构建的实现，它不含有子节点。

```java

public class Leaf extends Component {

  @Override
  public void operation() {
      // Implement operation
      System.out.println("Leaf operation");
  }

  @Override
  public Component getChild(int index) {
    throw new UnsupportedOperationException("Leaf node has no children"); 
  }

  @Override
  public void remove(Component component) {
    throw new UnsupportedOperationException("Cannot remove from leaf node");
  }

  @Override
  public void add(Component component) {
    throw new UnsupportedOperationException("Cannot add to leaf node");
  }

}
```

### 树枝节点

树枝节点是抽象构建的实现，它可以含有多个子节点。这里使用`List<Component> components`来存放所有的子节点。
并且通过实现抽象组件的方法来实现对子节点的访问和操作。

```java
public class Composite extends Component {

    public String name;
    private List<Component> components = new ArrayList<>();


    public Composite(String name) {
        this.name = name;
    }


    @Override
    public void operation() {
        System.out.println(String.format("【%s】Composite operation", this.name));
        for (Component component : this.components) {
            component.operation();
        }
    }

    @Override
    public Component getChild(int index) {
        if (index < 0 || index >= this.components.size()) {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
        return this.components.get(index);
    }

    @Override
    public void remove(Component component) {
        if (this.components.contains(component)) {
            this.components.remove(component);
        } else {
            throw new IllegalArgumentException("Component not found");
        }
    }

    @Override
    public void add(Component component) {
        if (this.components.contains(component)) {
            throw new IllegalArgumentException("Component already exists");
        } else {
            this.components.add(component);
        }
    }

}

```

### 使用案例

```java

public class CompositeClient {
    public static void main(String[] args) {
        // 创建一个根节点
        Composite composite = new Composite("root");
        composite.add(new Composite("child1"));
        composite.add(new Composite("child2"));
        composite.add(new Leaf());

        composite.operation();

    }
}
```

上面的代码中，首先创建了一个根节点`root`，然后根节点有三个子节点，分别是`child1`，`child2`和`leaf`。
然后调用根节点的`operation`方法，会打印出根节点和所有子节点的操作信息。

结果：
![20240119163135](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/9-composite/20240119163135.png)

## 总结

组合模式主要用来解决树形结构的问题，通过将树形结构中的节点组合成一个整体，从而简化树形结构的处理。
