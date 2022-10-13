---
original: true
title: 工厂模式③
time: 2018-11-30


tags: 
  - factory pattern
category: 技术
description: 工厂方法模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 工厂方法模式又称为工厂模式，也叫虚拟构造器（Virtual Constructor）模式或者多态工厂模式（Polymorphic Factory），在工厂方法模式中，父类负责定义创建对象的公共接口，而子类则负责生成具体的对象，这样做的目的是将类的实例化操作延迟到子类中完成，即由子类来决定究竟应该实例化（创建）哪一个类。

<!--more-->

## 定义一类生产车的公司接口
```
package factory.methodfactory;

/************************************************
 *@ClassName : CreateCarI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 22:33】
 *@Version : 1.0.0
 *************************************************/

public interface CarCompanyI {
    void buyMetal();
    void designCar();
    void createCar();
}

```
## 该类公司的实现
```
package factory.methodfactory;

/************************************************
 *@ClassName : CompanyA
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 22:34】
 *@Version : 1.0.0
 *************************************************/

public class CompanyA implements CarCompanyI{
    @Override
    public void buyMetal() {
        System.out.println("A公司买材料");
    }

    @Override
    public void designCar() {
        System.out.println("A公司设计模型");
    }

    @Override
    public void createCar() {
        System.out.println("A公司生产车");
    }

}

```

## 工厂,选择使用那个公司
```
package factory.methodfactory;

/************************************************
 *@ClassName : CarFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 22:36】
 *@Version : 1.0.0
 *************************************************/

public class CarFactory {
    public static CarCompanyI getCarCompany(String classname)  {
        CarCompanyI interfaces = null;
        try {
            interfaces = (CarCompanyI) Class.forName(classname).newInstance();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return interfaces;
    }
}
```
## 测试
```
package factory.methodfactory;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 22:40】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        CarFactory.getCarCompany("factory.methodfactory.CompanyB").buyMetal();
        CarFactory.getCarCompany("factory.methodfactory.CompanyA").buyMetal();
    }
}

```
## 结果
![结果](/images/article/30/result4.png)
