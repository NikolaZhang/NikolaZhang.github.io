---
original: true
title: facade pattern
date: 2018-11-30


tags: 
  - facade pattern
category: 技术
description: 门面模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 门面模式，上级不用知道下级在干什么。下级按照流程处理，反馈给上级结果就好了。

<!--more-->

## 流程方法接口
```
package facade;

/************************************************
 *@ClassName : MakeCarI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:42】
 *@Version : 1.0.0
 *************************************************/

public interface MakeCarI {
    void findMetal();
    void designCar();
    void createCar();
}

```
## 流程实现
```
package facade;

/************************************************
 *@ClassName : MakeCarImpl
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:43】
 *@Version : 1.0.0
 *************************************************/

public class MakeCarImpl implements MakeCarI {

    @Override
    public void findMetal() {
        System.out.println("找点金属");
    }

    @Override
    public void designCar() {
        System.out.println("画个图纸");
    }

    @Override
    public void createCar() {
        System.out.println("开始生产");
    }
}

```
## 调用流程中的步骤
```
package facade;

/************************************************
 *@ClassName : MakeMethod
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:44】
 *@Version : 1.0.0
 *************************************************/

public class MakeMethod {
    private MakeCarI makeCarI = new MakeCarImpl();
    private CheckCar checkCar = new CheckCar();
    public void startMakeCar(){
        makeCarI.findMetal();
        makeCarI.designCar();
        makeCarI.createCar();
        checkCar.check();
    }
}

```
这里我们增加了一个检测产品的类，并在流程中调用了`check()`
该类如下：
```
package facade;

/************************************************
 *@ClassName : CheckCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:48】
 *@Version : 1.0.0
 *************************************************/

public class CheckCar {
    public void check(){
        System.out.println("质量检测");
    }
}

```

## 测试
```
package facade;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:46】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        MakeMethod makeMethod = new MakeMethod();
        makeMethod.startMakeCar();
    }
}

```

## 结果
![结果](/images/article/30/result3.png)
