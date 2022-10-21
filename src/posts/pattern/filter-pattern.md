---
original: true
title: filter pattern
date: 2018-12-15


tags: 
  - filter pattern
category: 技术
description: 过滤器模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 过滤器模式：这种模式允许开发人员使用不同的标准来过滤一组对象，通过逻辑运算以解耦的方式把它们连接起来。这种类型的设计模式属于结构型模式，它结合多个标准来获得单一标准。【菜鸟】其实就是按条件筛选一组对象出来。

<!--more-->

我们车厂现在车型很多，现在只想筛选出来bwm的数量。

## 定义车
```
package filter;

/************************************************
 *@ClassName : Car
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 17:21】
 *@Version : 1.0.0
 *************************************************/

public class Car {
    private String name;

    public String getName() {
        return name;
    }

    public Car(String name) {
        this.name = name;
    }
}

```

## 过滤器
我们将所有的车作为参数，按条件筛选出来bwm.
```
package filter;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : CarFilter
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 17:20】
 *@Version : 1.0.0
 *************************************************/

public class CarFilter {
    private List<Car> list = new ArrayList<>();

    public List<Car> filterCar(List<Car> listCar){
        for (Car car :listCar){
            if("bwm".equals(car.getName())){
                list.add(car);
            }
        }
        return list;
    }
}

```

## 测试
```
package filter;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 17:20】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        List<Car> list = new ArrayList<>();
        list.add(new Car("bwm"));
        list.add(new Car("benz"));
        list.add(new Car("BWM"));

        CarFilter carFilter = new CarFilter();
        System.out.println("符合条件的车数："+carFilter.filterCar(list).size());
    }
}
```
## 结果
![结果](/images/article/181215/res4.png)
