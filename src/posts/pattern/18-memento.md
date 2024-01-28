---
title: 备忘录模式
tag:
  - 备忘录模式
category: 设计模式
description: 在不破坏封装性的前提下，捕获一个对象的内部状态并在需要时恢复它。
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-27

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 备忘录模式可以保持对象状态的快照，这样对象可以在不向外界公开其内容的情况下返回到它的最初状态。

![20240128201341](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/18-memento/20240128201341.png)

备忘录模式的主要角色:

- 发起人(Originator) - 需要保存状态的对象。它可以创建一个备忘录,用来记录当前时刻的内部状态。
- 备忘录(Memento) - 用于存储发起人对象的内部状态。
- 管理者(Caretaker) - 管理Memento角色，负责保存好备忘录。

## 代码实现

### 发起人

发起人持有需要保存的状态，并且提供创建备忘录，和恢复状态的方法。

```java
public class Originator {

    private String state;

    public void setState(String state) {
        this.state = state;
    }

    public String getState() {
        return this.state;
    }

    public void setMemento(Memento memento) {
        // 恢复状态
        this.state = memento.getState();

    }

    public Memento createMemento() {
        return new Memento(this.state);
    }
    
}

```

### 备忘录

备忘录中持有状态字段，用于记录发起人的状态。

```java
public class Memento {
    
    private String state;

    public Memento(String state) {
        this.state = state;
    }

    public String getState() {
        return this.state;
    }
}
```

### 管理者

管理者通过`mementoList`记录所有的状态变化，可以将发起人的状态还原到任意时刻。

```java
public class Caretaker {
    
    private List<Memento> mementoList = new ArrayList<Memento>();

    public void add(Memento state) {
        mementoList.add(state);
    }

    public Memento get(int index) {
        return mementoList.get(index);
    }

}

```

### 使用方法

通过发起人对象来创建备忘录，并且通过管理者对象来保存备忘录。

每次发起人状态改变的时候，我们都通过`originator.createMemento`创建当前状态的备忘录；之后通过`caretaker.add`记录备忘录。

状态还原时，通过`caretaker.get`获取某个时刻的备忘录，通过`originator.setMemento`恢复状态。

```java
public class Client {
    public static void main(String[] args) {
        Originator originator = new Originator();
        Caretaker caretaker = new Caretaker();

        originator.setState("State #1");
        caretaker.add(originator.createMemento());
        originator.setState("State #2");
        caretaker.add(originator.createMemento());
        originator.setState("State #3");
        caretaker.add(originator.createMemento());

        originator.setMemento(caretaker.get(0));
        System.out.println(originator.getState());
        originator.setMemento(caretaker.get(1));
        System.out.println(originator.getState());
        originator.setMemento(caretaker.get(2));
        System.out.println(originator.getState());
        
    }
}
```

结果：

![20240128232520](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/18-memento/20240128232520.png)
