---
original: true
title: proxy pattern
date: 2018-11-29


tag:
  - proxy pattern
category: 技术
description: 代理模式的实现方法
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---


> 代理模式: 本身不干活，干活的时候找别人去干。

<!--more-->

## 接口

```java
package proxy;

/************************************************
 *@ClassName : CompanyWorkI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 20:27】
 *@Version : 1.0.0
 *************************************************/

public interface CompanyWorkI {
    void buyMetal();
    void designCar();
}

```

## 实现
```
package proxy;

/************************************************
 *@ClassName : CompanyA
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 20:27】
 *@Version : 1.0.0
 *************************************************/

public class CompanyA implements CompanyWorkI {

    @Override
    public void buyMetal() {
        System.out.println("A公司买材料");
    }

    @Override
    public void designCar() {
        System.out.println("A公司设计车");
    }
}

```

下面的这个虽然也实现了 `CompanyWorkI` 但他实际是不干接口中的工作的的。

```
package proxy;

/************************************************
 *@ClassName : CompanyB
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 20:29】
 *@Version : 1.0.0
 *************************************************/

public class CompanyDad implements CompanyWorkI {
    private CompanyWorkI companyWorkI;

    public CompanyDad(CompanyWorkI companyWorkI){
        this.companyWorkI = companyWorkI;
    }
    public CompanyDad(){
        this.companyWorkI = new CompanyA();
    }

    @Override
    public void buyMetal() {
        companyWorkI.buyMetal();
    }

    @Override
    public void designCar() {
        companyWorkI.designCar();
    }

    public void makeCar(){
        System.out.println("dad公司生产车");
    }
}

```

## 测试
```
package proxy;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 20:37】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        CompanyDad companyDad = new CompanyDad();
        companyDad.buyMetal();
        companyDad.designCar();
        companyDad.makeCar();
    }
}
```
## 结果
![运行结果](/images/article/29/result.png)

## UML
![UML](/images/article/29/UML.png)
