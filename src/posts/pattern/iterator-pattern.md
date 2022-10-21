---
original: true
title: iterator pattern
date: 2018-12-10


tags: 
  - iterator pattern
category: 技术
description: 迭代器模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 迭代器模式，这是一个很好玩的模式。其实迭代器已经存于集合中了。但是呢，我们可以动手写一个迭代器，并且将其运用在迭代器模式中，而不是在list中。

<!--more-->

我们的车间每天都在生产车，但是生产多少车，生产的车叫什么名字，每天是不是要进行报表统计？当然了我们有现成的Iterator接口。但是，请你忘记他。我们自己写个这样的接口，想想啊，我们自己的接口想干啥就能干啥。
## 定义一个迭代器接口及实现
```
package iterator;

/************************************************
 *@ClassName : iterator
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/10 0010 21:04】
 *@Version : 1.0.0
 *************************************************/

public interface Iterator {
    boolean hasNext();
    Object next();
}

```
简便起见我们的接口就只有两个抽象方法。这已经足够了。实现如下：
```
package iterator;


import java.util.List;

/************************************************
 *@ClassName : CarIterator
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/10 0010 21:05】
 *@Version : 1.0.0
 *************************************************/

public class CarIterator implements Iterator {
    private List<Car> list;
    private int cnt = 0;
    @Override
    public boolean hasNext() {
        return cnt<list.size()?true:false;
    }

    @Override
    public Car next() {
        return list.get(cnt++);;
    }

    public CarIterator(List<Car> list) {
        if(list == null){
            System.out.println("集合未实例化");
            return;
        }
        this.list = list;
    }
}
```
实现的方法也是见人见智。

## 我们统计生产的车是这样的
```
package iterator;

/************************************************
 *@ClassName : Car
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/10 0010 21:08】
 *@Version : 1.0.0
 *************************************************/

public interface Car {
    void addCar(String carName, String price);
    Iterator getIterator();
}

```
统计车的时候，我们需要记录车的名字和价格。每生产出来一辆车我们就调用addCar记录。
```
package iterator;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : CarImpl
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/10 0010 21:13】
 *@Version : 1.0.0
 *************************************************/

public class CarImpl implements Car{
    private List<Car> list = new ArrayList<>();
    private String carName;
    private String price;

    @Override
    public void addCar(String carName, String price) {
        list.add(new CarImpl(carName, price));
    }

    @Override
    public Iterator getIterator() {
        return new CarIterator(list) ;
    }

    private CarImpl(String carName, String price) {
        this.carName = carName;
        this.price = price;
    }

    public CarImpl() {
    }

    public String getCarName() {
        return carName;
    }

    public String getPrice() {
        return price;
    }
}
```

## 开始记录了
```
package iterator;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/10 0010 21:21】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        Car car = new CarImpl();
        car.addCar("宝马", "1000000");
        car.addCar("奔驰", "2000000");

        // 给老板汇报
        Iterator iterator = car.getIterator();
        while(iterator.hasNext()){
            CarImpl car1 = (CarImpl) iterator.next();
            System.out.println(car1.getCarName()+"价格："+car1.getPrice());
        }

    }
}

```
## 结果
![结果](/images/article/181210/res.png)
