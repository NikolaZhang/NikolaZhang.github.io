---
original: true
title: singleton pattern
date: 2018-11-30


tag:
  - singleton pattern
category: 技术
description: 单例模式的实现方法
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 单例模式，只能获取一个实例。

<!--more-->

## 单例模式-懒汉模式
```
package singleton;

/************************************************
 *@ClassName : single
 *@Description : 第一种单例模式，懒汉模式
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 21:47】
 *@Version : 1.0.0
 *************************************************/

public class MainCompany {
    private static MainCompany mainCompany = null;
    public static MainCompany getInstance(){
        if(mainCompany == null){
            mainCompany = new MainCompany();
        }
        return mainCompany;
    }

    public static void getInfo(){
        System.out.println("总部只能有一个！"+mainCompany);
    }
}

```

## 单例模式-饿汉模式
```
package singleton;

/************************************************
 *@ClassName : MainCompany2
 *@Description : 第二种单例模式，饿汉模式
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 21:59】
 *@Version : 1.0.0
 *************************************************/

public class MainCompany2 {
    private final static MainCompany2 mainCompany2 = new MainCompany2();

    public static MainCompany2 getInstance(){
        return mainCompany2;
    }

    public void getInfo(){
        System.out.println("饿汉模式"+mainCompany2);
    }
}

```

## 测试
```
package singleton;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 21:50】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        MainCompany mainCom1 = MainCompany.getInstance();
        mainCom1.getInfo();
        MainCompany mainCom2 = MainCompany.getInstance();
        mainCom2.getInfo();
        System.out.println("====================================");

        MainCompany2 com1 = MainCompany2.getInstance();
        com1.getInfo();
        MainCompany2 com2 = MainCompany2.getInstance();
        com2.getInfo();

        System.out.println("如果每组上下两个的地址相同则单例成功，不过推荐下面的方式");
    }
}

```

## 结果
![结果](/images/article/30/result2.png)
