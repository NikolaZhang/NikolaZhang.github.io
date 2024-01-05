---
title: 抽象工厂模式
tag:
  - 静态工厂模式
  - 简单工厂模式
  - Static Factory
category: 设计模式
description: 静态工厂模式，简单工厂模式
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-05

author: nikola
icon: book

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 又称为静态工厂模式，提供一个公有的静态工厂方法，返回一个类的实例。
通过工厂我们不必具体去实例化某一个实例对象。只需要传递某些约定的参数，工厂会自动找到该类并将其实例化。

<!--more-->
1. 创建一个接口，接口中定义公用方法。

  ```
  package factory.simplefactory;

  /************************************************
   *@ClassName : Car
   *@Description : TODO
   *@Author : NikolaZhang
   *@Date : 【2018/11/26 21:19】
   *@Version : 1.0.0
   *************************************************/

  public interface Car {
      void run();
  }

  ```

2. 创建接口对应的实现

  ```
  package factory.simplefactory;

  /************************************************
   *@ClassName : BWMCar
   *@Description : TODO
   *@Author : NikolaZhang
   *@Date : 【2018/11/26 21:20】
   *@Version : 1.0.0
   *************************************************/

  public class BWMCar implements Car{
      @Override
      public void run() {
          System.out.println("宝马跑起来！");
      }
  }
  ```

3. 创建工厂类

  ```
  package factory.simplefactory;

  import util.StringUtil;

  /************************************************
   *@ClassName : CarFactory
   *@Description : 简单工厂， 使用反射实例化对象
   *@Author : NikolaZhang
   *@Date : 【2018/11/26 21:14】
   *@Version : 1.0.0
   *************************************************/

  public class CarFactory {
      private CarFactory(){}
      public static Car getCar(String carName) {
          if(!StringUtil.isEmpty(carName)){
              try {
                  return (Car) Class.forName(carName).newInstance();
              } catch (InstantiationException e) {
                  e.printStackTrace();
              } catch (IllegalAccessException e) {
                  e.printStackTrace();
              } catch (ClassNotFoundException e) {
                  e.printStackTrace();
              }
          }
          return null;
      }
  }
  ```

4. 测试

  ```
  package factory.simplefactory;

  /************************************************
   *@ClassName : Test
   *@Description : TODO
   *@Author : NikolaZhang
   *@Date : 【2018/11/26 21:30】
   *@Version : 1.0.0
   *************************************************/

  public class Test {
      public static void main(String[] args) {
          CarFactory.getCar("factory.simplefactory.BWMCar").run();
      }
  }

  ```
5. 说明
  在工厂类中我们使用反射生成对应的实例对象。需要的参数为实体的路径。
  当某天我们的系统需要进行扩展时，仅仅需要添加一个实体，并实现接口中的方法。
  而我们的工厂方法则不会有什么需要改动的地方。
