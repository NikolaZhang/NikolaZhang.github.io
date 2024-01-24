---
title: 责任链模式
tag:
  - 责任链模式
category: 设计模式
description: 多个对象都有机会处理请求，避免请求的发送者和接收者之间的耦合关系。
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-23

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---


> 责任链模式可以在系统中建立一个链，这样消息可以在首先接收到它的级别被处理，或者可以定位到可以处理它的对象。

![20240124085824](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/22-chain-of-responsibility/20240124085824.png)

责任链模式（Chain of Responsibility Pattern）包含以下主要角色：

1. 抽象处理者(CommandHandler)  
   定义了一个处理请求的接口，通常会包含一个处理请求的方法（如 handleRequest()），以及持有下一个处理者的引用。抽象处理者一般被设计为抽象类或接口。

2. 具体处理者(ConcreteHandler)  
   继承自抽象处理者，实现了处理请求的方法。在实现时，具体处理者可以根据请求内容决定是自己处理还是将请求传递给下一个处理者。如果有能力处理请求，则进行处理；否则，调用其持有的下一个处理者的处理方法。

3. 请求(Request)  
   表示需要被处理的实体对象，它包含了所有必要的信息以供处理者做出是否处理该请求的决策。

4. 客户端(Client)  
   负责构造责任链，并向链头的处理者提交请求。客户端并不关心请求如何在链中被传递和处理，它只需要发起请求即可。

## 代码实现

### 抽象处理器

抽象处理器中包含了一个处理请求的方法，以及持有下一个处理者的引用。前者用于子类进行实现，链条中的每一个节点都应该有自己的处理逻辑，后者用于连接各个环节，我们可以通过该引用依次调用链条上的每个节点。

下面代码中的`successor`是处理请求的入口。这里可以根据自己的需要进行节点的选择。注意

```java
public abstract class CommandHandler {

    private CommandHandler next;

    public CommandHandler(CommandHandler next) {
        this.next = next;
    }

    public void successor(StringBuilder stringBuilder) {
        handleRequest(stringBuilder);
        if (this.next != null) {
            this.next.successor(stringBuilder);
        }
    }

    public abstract void handleRequest(StringBuilder stringBuilder);
}

```

### 具体处理者

具体处理器实现`handleRequest`方法实现处理请求的逻辑。

```java
public class Concretehandler1 extends CommandHandler {

    public Concretehandler1(CommandHandler next) {
        super(next);
    }

    @Override
    public void handleRequest(StringBuilder stringBuilder) {
        stringBuilder.append(" (handled by ConcreteHandler1)");
    }
    
}


```

### 客户端

```java
public class Client {

    public static void main(String[] args) {
        StringBuilder stringBuilder = new StringBuilder("request info");
        
        // 创建链条，commandHandler1-->commandHandler2-->null
        CommandHandler commandHandler2 = new Concretehandler2(null);
        CommandHandler commandHandler1 = new Concretehandler1(commandHandler2);

        commandHandler1.successor(stringBuilder);

        System.out.println(stringBuilder);
    }
    
}

```

结果：

![20240124092812](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/22-chain-of-responsibility/20240124092812.png)

注意：需要防止循环调用，否则会出现死循环。

```java
CommandHandler commandHandler2 = new Concretehandler2(null);
CommandHandler commandHandler1 = new Concretehandler1(commandHandler2);
commandHandler2.setNext(commandHandler1);
```

上面的代码产生了`commandHandler1-->commandHandler2-->commandHandler1`的循环。会导致`StackOverflowError`或者`OOM`。

因此抽象层中最好做循环校验，防止循环调用。比如我们将所有链接节点对象做下对比，看下地址是否相等。
比如：在设置下一个节点的时候，判断节点是否在当前节点的链接列表中，如果在，则不允许再次添加。
