---
original: true
title: visitor pattern
time: 2018-12-13


tags: 
  - visitor pattern
category: 技术
description: 访问者模式的实现和介绍
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 访问者模式：定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。一个对象状态改变给其他对象通知的问题，而且要考虑到易用和低耦合，保证高度的协作。[菜鸟]

<!--more-->
怎么说呢，访问者模式和观察者模式还是有点像的。但是，访问者模式是你想访问就访问。观察者则是我变了就告诉你。访问者是主动的，观察者是被动的。

通常我们在被访问者类中定义一个accept方法，这个方法的参数是访问者对象。访问者类中定义visit方法，方法的参数是当前被访问对象。visit中调用被访问对象中的方法。为了易于扩展，例子中我们的访问对象和被访问对象都抽象出了一个接口。接口中分别定义公共方法visit，accept。
## 访问者接口
```
package visitor;

/************************************************
 *@ClassName : Visitor
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/13 0013 7:35】
 *@Version : 1.0.0
 *************************************************/

public interface VisitorI {
    void visit(BWMFactory bwmFactory);
    void visit(BenzFactory benzFactory);
}

```
## 实现一个访问者
```
package visitor;

/************************************************
 *@ClassName : Visitor
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/13 0013 7:39】
 *@Version : 1.0.0
 *************************************************/

public class Visitor implements VisitorI {
    @Override
    public void visit(BWMFactory bwmFactory) {
        System.out.println("调查宝马工厂");
        bwmFactory.info();
    }

    @Override
    public void visit(BenzFactory benzFactory) {
        System.out.println("调查奔驰工厂");
        benzFactory.info();
    }
}
```


## 被访问的接口
```
package visitor;

/************************************************
 *@ClassName : CarFacorires
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/13 0013 7:34】
 *@Version : 1.0.0
 *************************************************/

public interface CarFacoriresI {
    void info();
    void accept(VisitorI visitorI);
}

```

## 被访问接口的实现
```
package visitor;

/************************************************
 *@ClassName : BWMFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/13 0013 7:36】
 *@Version : 1.0.0
 *************************************************/

public class BWMFactory implements CarFacoriresI {
    @Override
    public void info(){
        System.out.println("宝马工厂最近亏损");
    }

    @Override
    public void accept(VisitorI visitorI) {
        visitorI.visit(this);
    }
}

```

## 测试
```
package visitor;

import iterator.Car;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/13 0013 7:44】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        VisitorI visitorI = new Visitor();
        CarFacoriresI carFacoriresI1 = new BWMFactory();
        carFacoriresI1.accept(visitorI);
        CarFacoriresI carFacoriresI2 = new BenzFactory();
        carFacoriresI2.accept(visitorI);
    }
}
```

## 结果
![结果](/images/article/181213/visitor.png)
