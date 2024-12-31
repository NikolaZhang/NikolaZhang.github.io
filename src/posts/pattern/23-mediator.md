---
title: 中介者模式
tag:
  - 中介者模式
category: 设计模式
description: 定义一个中介对象来封装系列对象间的交互，降低对象间的耦合度。
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


> 中介者模式通过引入一个能够管理对象间消息分布的对象，简化了系统中对象间的通信。该模式可以减少对象间的相互引用，从而提高了对象间的松耦合度，并且它还可以独立地改变其间的交互

![20240128205628](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/23-mediator/20240128205628.png)

中介者模式的主要角色：

1. 抽象中介者（Abstract Mediator）：

这是一个接口或抽象类，定义了同事对象之间交互的公共方法。
它声明了同事对象需要调用的方法来与其它同事对象通信，而不需要知道具体的接收者是谁。
2. 具体中介者（Concrete Mediator）：

实现了抽象中介者的接口，负责协调和管理同事对象间的交互。
具体中介者了解并维护同事对象，并且知道如何根据接收到的消息转发给适当的同事对象，或者执行相应的业务逻辑。
3. 同事类（Colleague）：

同事类是相互协作的对象，它们通过中介者进行通信而不是直接相互引用。
每个同事类都只知道抽象中介者，不知道具体的实现类。
同事类通常会有一个引用指向中介者实例，并通过这个引用调用中介者的方法来与其他同事对象交互。
4. 具体同事类（Concrete Colleague）：

是同事类的具体实现，它们是系统中的各个组件或模块，它们之间的复杂关系通过中介者来进行解耦。

## 代码实现

### 抽象中介者

```java
public abstract class Mediator {


    private Programmer programmer;
    private Designer designer;
    private Manager manager;

    public abstract void sendMessage(String from, String to, String message);


    public Programmer getProgrammer() {
        return programmer;
    }

    public void setProgrammer(Programmer programmer) {
        this.programmer = programmer;
    }

    public Designer getDesigner() {
        return designer;
    }

    public void setDesigner(Designer designer) {
        this.designer = designer;
    }

    public Manager getManager() {
        return manager;
    }

    public void setManager(Manager manager) {
        this.manager = manager;
    }
}
```

### 具体中介者

```java
public class OfficeMediator extends Mediator {

    @Override
    public void sendMessage(String from, String to, String message) {
        if ("programmer".equals(to)) {
            this.getProgrammer().receiveMessage(from, message);
        } else if ("designer".equals(to)) {
            this.getDesigner().receiveMessage(from, message);
        } else if ("manager".equals(to)) {
            this.getManager().receiveMessage(from, message);
        }
    }
}
```

### 同事类

```java
public abstract class Colleague {
    protected Mediator mediator;

    public void setMediator(Mediator mediator) {
        this.mediator = mediator;
    }

    public abstract void receiveMessage(String from, String message);
}
```

### 具体同事类

```java
public class Designer extends Colleague {
    public void sendMessageToManager(String message) {
        mediator.sendMessage("designer", "manager", message);
    }

    public void sendMessageToProgrammer(String message) {
        mediator.sendMessage("designer", "programmer", message);
    }

    @Override
    public void receiveMessage(String from, String message) {
        System.out.println("Designer received message from " + from + ": " + message);
    }
}
```

可以继续创建其他的同事类

```java
public class Manager extends Colleague {
    public void sendMessageToProgrammer(String message) {
        mediator.sendMessage("manager", "programmer", message);
    }

    public void sendMessageToDesigner(String message) {
        mediator.sendMessage("manager", "designer", message);
    }

    @Override
    public void receiveMessage(String from, String message) {
        System.out.println("Manager received message from " + from + ": " + message);
    }
}

public class Programmer extends Colleague {
    public void sendMessageToManager(String message) {
        mediator.sendMessage("programmer", "manager", message);
    }

    public void sendMessageToDesigner(String message) {
        mediator.sendMessage("programmer", "designer", message);
    }

    @Override
    public void receiveMessage(String from, String message) {
        System.out.println("Programmer received message from " + from + ": " + message);
    }
}

```

### 使用

```java
public class Client {
    public static void main(String[] args) {
        // 创建中介者对象
        Mediator mediator = new OfficeMediator();

        // 创建同事对象并设置中介者
        Manager manager = new Manager();
        manager.setMediator(mediator);

        Programmer programmer = new Programmer();
        programmer.setMediator(mediator);

        Designer designer = new Designer();
        designer.setMediator(mediator);

        // 中介者关联各个同事对象
        mediator.setProgrammer(programmer);
        mediator.setDesigner(designer);
        mediator.setManager(manager);

        // 模拟发送消息
        manager.sendMessageToProgrammer("Please review the code.");
        programmer.sendMessageToDesigner("The design needs some adjustment.");
    }
}
```

结果:

![20240211154804](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/23-mediator/20240211154804.png)
