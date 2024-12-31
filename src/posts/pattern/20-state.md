---
title: 状态模式
tag:
  - 状态模式
category: 设计模式
description: 允许对象在其内部状态改变时改变其行为，对象看起来似乎修改了它的类。
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-02-11

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 状态模式允许对象在其内部状态改变时改变其行为，对象看起来似乎修改了它的类。

![20240210164438](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/20-state/20240210164438.png)

状态模式包含下列角色：

1. 上下文（StateContext）：  
   上下文是拥有状态的对象。它定义了客户端需要的接口，并维护一个当前状态对象的引用。
2. 抽象状态角色（State）：  
   抽象状态通常包含一些操作或方法，这些方法由具体状态类实现。
3. 具体状态角色（Concrete State）：  
   是抽象状态角色的实现，每个具体状态对应系统中的一个具体状态值。每个具体状态类都实现了抽象状态接口中定义的方法，并且可以改变环境对象的状态（即上下文的当前状态）。

## 代码实现

### 上下文

上下文具有两种状态切换的行为，即`start`、`close`两个方法。而且状态切换是由内部的`state`对象完成的。

```java
public class StateContext {
    private State state;

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public void start() {
        this.state.start(this);
    }

    public void close() {
        this.state.close(this);
    }
}

```

### 抽象状态

抽象状态中定义了对象状态切换的方法。根据上下文对象可知，需要定义两个状态切换的操作。

```java
public abstract class State {


    public abstract void start(StateContext context);

    public abstract void close(StateContext context);

}


```

### 具体状态

由上下文可知，具体状态有两种（`start`，`close`）。下面分别为这两个状态定义对应的类，以及实现状态切换的方法。

```java
public class StartState extends State {


    @Override
    public void start(StateContext context) {
        System.out.println("已经处于start状态");
    }

    @Override
    public void close(StateContext context) {
        context.setState(new StopState());
        System.out.println("start切换到close状态");
    }
}

```

同理可以写出`StopState`的实现。

```java
public class StopState extends State {
    @Override
    public void start(StateContext context) {
        context.setState(new StartState());
        System.out.println("close切换到start状态");
    }

    @Override
    public void close(StateContext context) {
        System.out.println("已经处于close状态");
    }
}

```

### 使用

```java
public class Client {
    public static void main(String[] args) {
        StateContext context = new StateContext();
        context.setState(new StartState());

        context.start();
        context.close();
    }
}

```

运行结果：

![20240210212410](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/20-state/20240210212410.png)
