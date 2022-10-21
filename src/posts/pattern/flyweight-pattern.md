---
original: true
title: flyweight pattern
date: 2018-12-15


tags: 
  - flyweight pattern
category: 技术
description: 享元模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 享元模式：主要用于减少创建对象的数量，以减少内存占用和提高性能。这种类型的设计模式属于结构型模式，它提供了减少对象数量从而改善应用所需的对象结构的方式。【菜鸟】


<!--more-->

这个模式也比较简单。比如我们要生产相同型号，但涂装不同的宝马。我们生产了黑色宝马后，还有必要再去实例化一个宝马，再去设置它的型号吗？我们是不是直接换一下颜色就可以了？
怎么说呢，你可以理解为直接setColor就生产了另外一辆宝马。

这里我们为了好看，还是使用工厂去生产宝马，同时呢引入一个map用于存放我们已经生产的不同类型的宝马，当我们需要更换涂装时，直接从map中取出对应的型号，涂一下就好了。
## 宝马车长这样
```
package flyweight;

/************************************************
 *@ClassName : BWMCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 15:14】
 *@Version : 1.0.0
 *************************************************/

public class BWMCar {
    private String name;
    private String color;

    public BWMCar(String name, String color) {
        this.name = name;
        this.color = color;
    }
}



```

## 工厂是这样涂装的
map就相当于是仓库，当你发现有个对应的车型没涂色，拉过来涂一下。好了~当你没发现对应的车型，没办法，我们又不能凃空气，只能新造一款车型。造好以后，这种车型以后也是直接涂一下完事。
```
package flyweight;

import java.util.HashMap;
import java.util.Map;

/************************************************
 *@ClassName : CarFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 15:16】
 *@Version : 1.0.0
 *************************************************/

public class CarFactory {
    private static Map<String, BWMCar> bwmCarMap = new HashMap<>();

    public static BWMCar getInstance(String name, String color){
        BWMCar bwmCar = bwmCarMap.get(name);
        if(bwmCar==null){
            bwmCar = new BWMCar(name, color);
            bwmCarMap.put(name, bwmCar);
        }
        return bwmCar;
    }
}



```

## 涂涂涂
```
package flyweight;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 14:40】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        System.out.println(CarFactory.getInstance("bwm1","black"));
        System.out.println(CarFactory.getInstance("bwm1","grey"));
        System.out.println(CarFactory.getInstance("bwm2","grey"));
        System.out.println(CarFactory.getInstance("bwm1","blue"));
    }
}

```

## 结果
![结果](/images/article/181215/res2.png)

可以看到bwm1类型的车都是一个地址，这就是`减少创建对象的数量，以减少内存占用和提高性能`。
