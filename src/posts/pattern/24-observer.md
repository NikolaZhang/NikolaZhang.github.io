---
title: 观察者模式
tag:
  - 观察者模式
category: 设计模式
description: 定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知并自动更新。
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

> 观察者模式为组件向相关接收方广播消息提供了灵活的方法。该模式定义了对象间一到多的依赖关系，这样当对象改变状态时，将自动通知并更新它所有的依赖对象。

![20240211160606](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/observer-pattern/20240211160606.png)

观察者模式角色：

1. 抽象主题（Subject）：也称为抽象目标类。这个角色定义了观察者和被观察者之间的接口，它通常包含以下方法：

  `addObserver(Observer observer)`：添加一个观察者到订阅列表中。
  `removeObserver(Observer observer)`：从订阅列表中移除一个观察者。
  `notifyObservers()` 或 `notifyObservers(Datatype update)`：通知所有已注册的观察者对象更新状态，有时候会携带更新的数据。
2. 具体主题（ConcreteSubject）：实现了抽象主题的类，它在内部状态改变时负责通知所有已注册的观察者。
3. 抽象观察者（Observer）：定义了一个接口，该接口使得观察者可以了解主题对象的任何状态变化，并提供相应的方法来更新自己。通常包含：
`update()` 方法，当主题对象的状态发生改变时调用此方法来更新观察者的状态。
4. 具体观察者（ConcreteObserver）：实现了抽象观察者接口的类，存储对主题对象的引用并实现具体的更新逻辑，在接收到主题的通知后更新自身的状态。

## 代码实现

### 抽象主题

抽象主题中，管理所有要通知的观察者集合，并提供`notifyObservers`方法进行遍历通知。

```java
public abstract class Subject {
    private final List<Observer> observers = new ArrayList<>();

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }

    protected void notifyObservers(String message) {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
}
```

### 具体主题

具体主题需要在自身状态发生变化的时候，通知观察者。

```java
public class ConcreteSubject extends Subject {

    private String message;

    public void setMessage(String message) {
        this.message = message;

        notifyObservers(message);
    }

    public String getMessage() {
        return message;
    }
}
```

### 抽象观察者

```java
public interface Observer {
    void update(String message);
}
```

### 具体观察者

```java
public class ConcreteObserver implements Observer {

    @Override
    public void update(String message) {
        System.out.printf("%s: [%s]%n", this.getClass().getName(), message);
    }

}
```

### 使用

```java
public class Client {

    public static void main(String[] args) {
        ConcreteSubject subject = new ConcreteSubject();

        ConcreteObserver concreteObserver = new ConcreteObserver();

        subject.addObserver(concreteObserver);

        subject.setMessage("new messages");
    }
}


```

结果：

![20240211164554](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/24-observer/20240211164554.png)
