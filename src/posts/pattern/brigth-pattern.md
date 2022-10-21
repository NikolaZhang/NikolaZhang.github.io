---
original: true
title: brigth pattern
date: 2018-12-05


tags: 
  - brigth pattern
category: 技术
description: 桥梁模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 桥梁模式提供了一种弱类间关系，关联关系。P.S.:在设计模式中类与类之间的关系主要有6种：依赖、关联、聚合、组合、继承、实现，它们之间的耦合度依次增加。在设计模式之禅的案例中，子类必须实现抽象父类中的所有方法，父类抽象方法的变更，必然导致子类的变更。这是一种强关联关系。强关联有必然使我们的系统不易扩展。所以桥梁模式为化解强关联提供了一种解决方案。

<!--more-->

> 大致的思路应该是这样。首先将程序中容易变更，或者以后需要扩展的部分提取出来，将扩展方法抽象，并封装到一个抽象类中。这个抽象类自然要关联到原来的类中。这样程序从继承会降低到关联（程序中具体是组合关系）关系。

本来我们有一个生产车间，想要让他生产别的产品自然要在车间中加入其它的生产流水线。程序就会变成这样：
```
abstract class Company {
  public abstract void productA();
}
```
这样的话，我们要是经营不错，扩展B、C、D、E、F、G、H....产品咋办，子类方法是不是都得跟着翻倍？继承几次翻几次。

那么干脆将生产的各样产品交给一个抽象类去管理吧，厂房里只留下这个抽象产品类。
## 我们的厂房长这样
```
package bright;

/************************************************
 *@ClassName : CarProductI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/6 7:24】
 *@Version : 1.0.0
 *************************************************/

public abstract class CarCompanyA {
    // 这是桥梁模式的关键
    private CarA carA;

    public void makeMoney(){
        this.carA.productCar();
        this.carA.sellCar();
    }

    public CarCompanyA(CarA carI) {
        this.carA = carI;
    }
}
```
这个CarA就是我们抽象的产品类。

## CarA长这样
```
package bright;

/************************************************
 *@ClassName : OtherCarI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/6 21:36】
 *@Version : 1.0.0
 *************************************************/

public abstract class CarA {
    abstract void productCar();
    abstract void sellCar();
}
```

## CarA下扩展个产品吧，这个很easy
```
package bright;

/************************************************
 *@ClassName : BWMCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/6 21:42】
 *@Version : 1.0.0
 *************************************************/

public class BWMCar extends CarA {
    @Override
    public void productCar() {
        System.out.println("生产宝马车");
    }

    @Override
    public void sellCar() {
        System.out.println("销售宝马车，真香");
    }
}
```

这时候就差不多了，但是我们的车房还是抽象的，继承她呗，抽象只是幻想啊~要脚踏实地。。。
## 实实在在的车房
```
package bright;

/************************************************
 *@ClassName : CopyCompany
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/6 22:13】
 *@Version : 1.0.0
 *************************************************/

public class CopyCompany extends CarCompanyA {

    public CopyCompany(CarA car) {
        super(car);
    }

    @Override
    public void makeMoney() {
        super.makeMoney();
        System.out.println("山寨车赚钱！");
    }
}
```

## 测试
好了，车房产品都有了。生产吧！细心的你或许会发现我们的车房可以扩展，产品也可以扩展，互不影响！！！！（当然了只是从程序上将，你让服装厂生产小轿车，在code的世界里，谁都阻止不了你。或许审查代码的BOSS会打死你~）
```
package bright;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/6 22:04】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        CopyCompany carCompanyCopy = new CopyCompany(new BWMCar());
        carCompanyCopy.makeMoney();
    }
}
```

## 结果
![结果](/images/article/181208/result.png)

## uml
![UML](/images/article/181208/UML.png)
