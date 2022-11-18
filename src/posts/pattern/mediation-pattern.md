---
original: true
title: mediation pattern
date: 2018-12-14


tag:
  - mediation pattern
category: 技术
description: 中介者模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 中介者模式：用来降低多个对象和类之间的通信复杂性。这种模式提供了一个中介类，该类通常处理不同类之间的通信，并支持松耦合，使代码易于维护。中介者模式属于行为型模式。【菜鸟】

<!--more-->

从工厂模式开始我们工厂就一直在造车，今天终于，终于有人要买我们的车了！于是我们公司就开了和其他公司谈起来了。。。。

## 交谈动作及对象
首先定义一个说话动作的抽象类。客户和我们公司都要说话啊。
```
package mediation;

public abstract class Action {
    private String name;

    public String getName() {
        return name;
    }

    public Action(String name) {
        this.name = name;
    }

	public void saySomething(String words, Action... action){
        Mediator.execute(this, words, action);
	}
}
```

我们公司及客户是这样，继承一下Action就好了
```
package mediation;

public class CarCompany extends Action{

	public CarCompany(String name) {
		super(name);
	}
}

```

## 中介者长这模样
```
package mediation;

public class Mediator {

	public static void execute(Action action, String words, Action... action2) {
	    StringBuffer cusNames = new StringBuffer();
	    for (Action act : action2){
	        cusNames.append(act.getName()+" ");
        }
	    String msg = "【"+action.getName() + "】 对【 "+cusNames.toString()+"】说："+words;
	    System.out.println(msg);
	}
}

```
注意在抽象类中，我们的动作都经过中介者处理。

## 测试
```
package mediation;

public class Test {
	public static void main(String[] args) {
		Action com = new CarCompany("车厂");
		Action cusA = new CustomerA("客户A");
		Action cusB = new CustomerB("客户B");
		com.saySomething("我们的车质量好。", cusA,cusB);
		cusA.saySomething("好不好，跑一跑！", com);
        cusB.saySomething("我看这车行！", com);
        com.saySomething("88折卖你了，客户A不知道的。", cusB);
        cusB.saySomething("o了", com);
        cusA.saySomething("你们在说啥....(⊙_⊙)?", com,cusB);

    }
}
```

## 结果
![结果](/images/article/181214/res.png)
