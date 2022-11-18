---
original: true
title: memento pattern
date: 2018-12-15


tag:
  - mediation pattern
category: 技术
description: 备忘录模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 备忘录模式：保存一个对象的某个状态，以便在适当的时候恢复对象。备忘录模式属于行为型模式。

<!--more-->

最近我们车厂决定要扩建一个维修厂，这个维修厂可以让让用户的车恢复到之前的任意状态。是不是很牛？！

## 首先改造我们的车
```
package memento;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 15:41】
 *@Version : 1.0.0
 *************************************************/

public class CarRecord {
    private String name;

    public String getName() {
        return name;
    }

    public String getNameFromMemList(int index) {
        String name = MemList.getMemRecord(index).getName();
        this.name = name;
        return  name;
    }

    public void changeName(String name){
        this.name = name;
        new MemRecord(name);
    }

    public CarRecord(String name) {
        this.name = name;
        new MemRecord(name);
    }
}
```
这里简单说一下类中的方法作用。
`getNameFromMemList`从备忘录中获取，车之前的名字，index是索引。
`changeName`这个方法支持用户随意设置名字。
`new MemRecord(name);`这条语句将名字存放到一个备忘录中。具体见下。

## 备份
```
package memento;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 15:41】
 *@Version : 1.0.0
 *************************************************/

public class MemRecord {
    private String name;

    public String getName() {
        return name;
    }

    public MemRecord(String name) {
        this.name = name;
        MemList.addMemRecord(this);
    }
}

```
为什么要有这个类，这个类的作用是复制一份`CarRecord`。你想啊，我们将同一个引用类型加到List中。那我们还能备份吗？

## 备忘录
你之前对车的所有操作都会存在这里。
```
package memento;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 15:41】
 *@Version : 1.0.0
 *************************************************/

public class MemList {
    private static List<MemRecord> mems;

    static{
        mems = new ArrayList<>();
    }
    private MemList(){}

    public static MemRecord getMemRecord(int index) {
        return mems.get(index);
    }
    public static void addMemRecord(MemRecord mem) {
        mems.add(mem);
    }
}

```

## 恢复
```
package memento;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 15:41】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        CarRecord carRecord = new CarRecord("aaaa");
        carRecord.changeName("bbbbb");
        carRecord.changeName("ccccc");
        carRecord.changeName("ddddd");
        carRecord.changeName("eeeee");

        System.out.println(carRecord.getName());
        System.out.println(carRecord.getNameFromMemList(1));
        System.out.println(carRecord.getName());
    }
}

```

## 结果
简单运行之后，看我们的车就恢复到了bbbbb状态。heihei
![结果](/images/article/181215/res3.png)
