---
title: 命令模式
tag:
  - 命令模式
category: 设计模式
description: 提供一种顺序访问聚合对象元素的方法，而又不需要暴露其底层表示。
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-25

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。

![20240125191628](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/19-command/20240125191628.png)

命令模式的主要角色包括:

1. 命令接口 Command: 声明执行操作的接口
2. 具体命令 ConcreteCommand: 实现执行操作的具体命令类。包含了对接收者的引用，通过调用接收者的方法来完成请求的处理。
3. 请求者 Invoker: 要求命令对象执行请求
4. 接受者 Receiver: 知道如何执行与执行请求相关的操作

:::info 特点

1. 将请求者与接收者分离
2. 容易扩展新的命令，不用修改已有类
3. 命令对象可以进行功能扩展，如撤销、记录、排队等
:::

## 代码实现

### 命令接口

```java
public interface Command {
  public void execute();
}
```

### 具体命令

具体命令类中包含了接收者的引用，通过接收者来处理具体命令。

```java
public class ConcreteCommand implements Command {
    private Receiver receiver;

    public ConcreteCommand(Receiver receiver) {
        this.receiver = receiver;
    }
    
    @Override
    public void execute() {
        receiver.action();
    }
}
```

### 接收者

```java
public class Receiver {
    public void action() {
        System.out.println("Called Receiver.action()");
    }

}
```

### 调用者

调用者用于发送命令，通过将请求传递给命令对象来实现。

```java
public class Invoker {
    private Command command;

    public void setCommand(Command command) {
        this.command = command;
    }

    public void executeCommand() {
        command.execute();
    }
}
```

### 测试

```java
public class Client {

    public static void main(String[] args) {
        Receiver receiver = new Receiver();
        Command command = new ConcreteCommand(receiver);
        Invoker invoker = new Invoker();
        invoker.setCommand(command);
        invoker.executeCommand();
    }
}

```
