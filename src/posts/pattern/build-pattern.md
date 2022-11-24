---
isOriginal: true
title: build pattern
date: 2018-12-05


tag:
  - build pattern
category: 技术
description: 建造者模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 建造者模式，以某种形式组合出对象。它和工厂模式的区别在于是否有组合的概念。建造者模式中有产品对象，建造者对象，监工对象。产品对象是各种各样的POJO，建造者以某种方式组合产品，监工就比较像工厂，获取产品组合后的对象。这两天看了菜鸟上的讲解和设技模式之禅。这两者讲的有些不同。菜鸟上是产品对象的组合，而设计模式之禅上则偏向对象内部属性的组合。

<!--more-->

之前在模板方法中说道，公司造车过程中我们能使用钩子决定是否使用某个部件。现在我们想要生产多种车型，而且没种车辆能够自由组合零件。那我们应该怎么办呢？

## 创建
首先我们应该想到应该要有一个集合去存放我们需要的零部件。所以我们改造一下CarTemplate类。
```
package builder;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : CarTemplateI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/4 21:15】
 *@Version : 1.0.0
 *************************************************/

public abstract class CarTemplateI {
    protected List chooses = new ArrayList();

    protected abstract void wheel();
    protected abstract void light();
    protected abstract void alarm();

    protected final void run(){
        if(chooses.contains("wheel")){
            wheel();
        }
        if(chooses.contains("light")){
            light();
        }
        if(chooses.contains("alarm")){
            alarm();
        }
    }

    public List getChooses() {
        return chooses;
    }
    public void setChooses(List chooses) {
        this.chooses = chooses;
    }
}

```
有了模型我们就开始造车，先设计个宝马吧。
```
package builder;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : BWMCarImpl
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/4 21:16】
 *@Version : 1.0.0
 *************************************************/

public class BWMCarImpl extends   CarTemplateI {
    @Override
    public void wheel() {
        System.out.println("宝马车轮子");
    }

    @Override
    public void light() {
        System.out.println("宝马车灯");
    }

    @Override
    public void alarm() {
        System.out.println("宝马车鸣笛");
    }

    public List getChooses() {
        return chooses;
    }


}

```
这样造其他的车就和上面的代码一样。

## 建造者
你需要什么车，你的车需要什么零件。统统交给建造者。
```
package builder;

import java.util.List;

/************************************************
 *@ClassName : Builder
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/4 21:58】
 *@Version : 1.0.0
 *************************************************/

public class Builder {
    private List list;

    public void setChoose(List list){
        this.list=list;
    }

    public CarTemplateI getCarTemplate(CarTemplateI carTemplateI){
            carTemplateI.setChooses(list);
            return  carTemplateI;
    }
}

```

## 监工
这个家伙把每个车型需要的零件定好，就可以吩咐建造者干活去了。往往这种看着清闲的家伙，赚钱最多。。。
```
package builder;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : Director
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/5 20:39】
 *@Version : 1.0.0
 *************************************************/

public class Director {
    private Builder builder = new Builder();
    private List list = new ArrayList();

    public CarTemplateI productBWMCar(){
        list.clear();
        list.add("wheel");
        list.add("alarm");
        builder.setChoose(list);
        return builder.getCarTemplate(new BWMCarImpl());
    }

    public CarTemplateI productBenzCar(){
        list.clear();
        list.add("wheel");
        list.add("light");
        list.add("alarm");
        builder.setChoose(list);
        return builder.getCarTemplate(new BenzCarImpl());
    }


}

```

## 测试
好了我们的客户来买车了。
```
package builder;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/4 22:05】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        Director director = new Director();
        director.productBenzCar().run();
        director.productBWMCar().run();

    }
}

```

## 结果
![结果](/images/article/181205/res.png)
诶，我宝马的车灯呢？！
这都是监工干的好事，用户是不知道生产宝马时用了什么零件。这都靠良心啊。

## UML
![uml](/images/article/181205/uml.png)
