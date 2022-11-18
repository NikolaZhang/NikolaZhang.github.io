---
isOriginal: true
title: 工厂模式②
date: 2018-11-27


tag:
  - factory pattern
category: patterns
description: 抽象工厂模式
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

## 抽象工厂模式
> 抽象工厂提供了一系列相关或相互依赖对象的接口，而无须指定他们具体的类。

<!--more-->

我们有两个不同类的东西，一个是车，一个是人；车分宝马车、奔驰车，人分男人、女人。我们想要通过一个工厂去获取生成男人女人宝马奔驰的对象，并调用其下的方法。

### 创建车与人的接口，及其实现

```
package factory.abstractfactory;

/************************************************
 *@ClassName : Car
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:46】
 *@Version : 1.0.0
 *************************************************/

public interface Car {
    void run();
}

```
```
package factory.abstractfactory;

/************************************************
 *@ClassName : man
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:51】
 *@Version : 1.0.0
 *************************************************/

public interface Man {
    void driver();
}


```
```
package factory.abstractfactory;

/************************************************
 *@ClassName : BenzCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:47】
 *@Version : 1.0.0
 *************************************************/

public class BenzCar implements Car {
    @Override
    public void run() {
        System.out.println("奔驰车跑起来！");
    }
}

```
```
package factory.abstractfactory;

/************************************************
 *@ClassName : BWMCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:46】
 *@Version : 1.0.0
 *************************************************/

public class BWMCar implements Car {
    @Override
    public void run() {
        System.out.println("宝马车跑起来！");
    }
}

```
```
package factory.abstractfactory;

/************************************************
 *@ClassName : Male
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:52】
 *@Version : 1.0.0
 *************************************************/

public class Male implements Man {
    @Override
    public void driver() {
        System.out.println("男人");
    }
}

```
```
package factory.abstractfactory;

/************************************************
 *@ClassName : Female
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:53】
 *@Version : 1.0.0
 *************************************************/

public class Female implements Man {
    @Override
    public void driver() {
        System.out.println("女人");
    }
}

```
### 创建获取不同种类实例的抽象类
```
package factory.abstractfactory;

/************************************************
 *@ClassName : AbstractFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:59】
 *@Version : 1.0.0
 *************************************************/

public abstract class AbstractFactory {
    abstract Car getCar();
    abstract Man getMan();
}
```
### 实现上面的抽象类
```
package factory.abstractfactory;

/************************************************
 *@ClassName : AbstractFactoryImplA
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 21:15】
 *@Version : 1.0.0
 *************************************************/

public class AbstractFactoryImplA extends AbstractFactory {
    @Override
    Car getCar() {
        return new BenzCar();
    }

    @Override
    Man getMan() {
        return new Male();
    }
}

```
```
package factory.abstractfactory;

/************************************************
 *@ClassName : AbstractFactoryImplA
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 21:15】
 *@Version : 1.0.0
 *************************************************/

public class AbstractFactoryImplB extends AbstractFactory {
    @Override
    Car getCar() {
        return new BWMCar();
    }

    @Override
    Man getMan() {
        return new Female();
    }
}

```

### 测试
```
package factory.abstractfactory;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 21:03】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        AbstractFactory abstractFactoryA = new AbstractFactoryImplA();
        abstractFactoryA.getCar().run();
        abstractFactoryA.getMan().driver();

        AbstractFactory abstractFactoryB = new AbstractFactoryImplB();
        abstractFactoryB.getCar().run();
        abstractFactoryB.getMan().driver();
    }
}

```

结果如下图：
![测试结果](/images/article/27/result.png)

生成的UML如下：
![UML](/images/article/27/uml.png)
