---
isOriginal: true
title: strategy pattern
date: 2018-11-28


tag:
  - strategy pattern
category: 技术
description: 策略模式的实现和介绍
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

>In computer programming, the strategy pattern (also known as the policy pattern) is a behavioral software design pattern that enables selecting an algorithm at runtime. [wiki]


<!--more-->

## 接口

```
package strategy;

/************************************************
 *@ClassName : CreateCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/28 21:05】
 *@Version : 1.0.0
 *************************************************/

public interface CreateCarI {
    void doingSomething();
}

```

## 实现类（举一个例子）
```
package strategy;

/************************************************
 *@ClassName : BuyMetal
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/28 21:09】
 *@Version : 1.0.0
 *************************************************/

public class BuyMetalImpl implements CreateCarI {

    @Override
    public void doingSomething() {
        System.out.println("购买金属材料。");
    }
}

```
## 入口类
```
package strategy;

import com.sun.org.omg.SendingContext.CodeBaseHelper;

/************************************************
 *@ClassName : StartWork
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/28 21:14】
 *@Version : 1.0.0
 *************************************************/

public class StartWork {
    private CreateCarI createCarI;

    public StartWork(CreateCarI createCarI){
        this.createCarI = createCarI;
    }

    public void start(){
        createCarI.doingSomething();
    }
}

```

## 测试
```
package strategy;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/28 21:58】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        StartWork startWork1 = new StartWork(new BuyMetalImpl());
        startWork1.start();
        StartWork startWork2 = new StartWork(new DesignCarModelImpl());
        startWork2.start();
        StartWork startWork3 = new StartWork(new MakeCarImpl());
        startWork3.start();
    }
}

```

## 结果
![结果图片](/images/article/28/result.png)

## UML
![结果图片](/images/article/28/UML.png)
