---
original: true
title: null object pattern
date: 2018-12-15


tags: 
  - null object pattern
category: 技术
description: 空对象模式的实现和介绍
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 空对象模式：一个空对象取代 NULL 对象实例的检查。Null 对象不是检查空值，而是反应一个不做任何动作的关系。这样的 Null 对象也可以在数据不可用的时候提供默认的行为。【菜鸟】

<!--more-->

当我们的系统中找不到某种车型的时候，直接返回对象肯定是个null。这时候如果你不做什么判断处理直接调用对象中的方法肯定是会不报错的。退一步说直接返回为空，是否有点暴力，太不人性化了。

## 抽象对象及对应的继承类。
这里我们搞了一个抽象对象，并用一个RealCar和NullCar继承它。当我们从工厂类中获取到对应的Car时就返回RealCar，获取不到就返回NullCar。
```
package nullobject;

import util.StringUtil;

/************************************************
 *@ClassName : AbstractCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 19:30】
 *@Version : 1.0.0
 *************************************************/

public abstract class AbstractCar {
    protected String name;
    public boolean isNull(){
        if(StringUtil.isEmpty(this.name)){
            return true;
        }else{
            return false;
        }
    }
    public abstract String getName();
}



```
```
package nullobject;

/************************************************
 *@ClassName : AbstractCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 19:30】
 *@Version : 1.0.0
 *************************************************/

public class NullCar extends AbstractCar{
    @Override
    public String getName() {
        return "dont have such car!";
    }
}

```
```
package nullobject;

/************************************************
 *@ClassName : AbstractCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 19:30】
 *@Version : 1.0.0
 *************************************************/

public class RealCar extends AbstractCar {
    @Override
    public String getName() {
        return "存在这辆车";
    }

    public RealCar(String name) {
        super.name = name;
    }
}

```
## 工厂
```
package nullobject;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/************************************************
 *@ClassName : CarFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 19:39】
 *@Version : 1.0.0
 *************************************************/

public class CarFactory {
    private static List<String> cars = new ArrayList<>();
    static {
        cars.add("bwm");
        cars.add("benz");
    }
    public static AbstractCar getCar(String name){
        Iterator<String> iterator = cars.iterator();
        while (iterator.hasNext()){
            if(name.equals(iterator.next())) {
                return new RealCar(name);
            }
        }
        return new NullCar();
    }
}



```
## 测试
```
package nullobject;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 17:34】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        System.out.println(CarFactory.getCar("bwm").getName());
        System.out.println(CarFactory.getCar("asdfsa").getName());
    }
}

```

## 结果
![结果](/images/article/181215/res5.png)
