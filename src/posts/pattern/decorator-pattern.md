---
original: true
title: decorator pattern
date: 2018-12-09


tags: 
  - decorator pattern
category: 技术
description: 装饰器模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 装饰器模式，顾名思义就是装。人靠衣装，马靠鞍。天生一副臭皮囊，穿金戴银之后，就显得与众不同于。装饰器模式在不改变原来类结构的基础上，对原来的类进行了扩展。并且这是一种弱耦合形式。

<!--more-->

当我们生产一辆车的时候一开始，所有的车都是一副架子。但是加上不同的零件就是不同的车。
## 天生一副臭皮囊
```
package decorator;

/************************************************
 *@ClassName : CarModel
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 21:15】
 *@Version : 1.0.0
 *************************************************/

public abstract class CarModel {
    public abstract void look();
}
```

```
package decorator;

/************************************************
 *@ClassName : CarModel
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 21:15】
 *@Version : 1.0.0
 *************************************************/

public class BWMCarModel extends CarModel {
    @Override
    public void look() {
        System.out.println("铁架子");
    }
}

```

## 人靠衣装，车靠涂装
```
package decorator;

/************************************************
 *@ClassName : ModelDecoorator
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 21:17】
 *@Version : 1.0.0
 *************************************************/

public abstract class ModelDecoorator {
    protected CarModel carModel;
    public abstract void look();

    public ModelDecoorator(CarModel carModel) {
        this.carModel = carModel;
    }
}

```

```
package decorator;

/************************************************
 *@ClassName : BWMDecorator
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 21:19】
 *@Version : 1.0.0
 *************************************************/

public class BWMDecorator extends ModelDecoorator {

    public BWMDecorator(CarModel carModel) {
        super(carModel);
    }

    @Override
    public void look() {
        System.out.println("把原来的车拿出来。。。。");
        carModel.look();
        System.out.println("涂上炫酷喷漆");
    }

}
```

## 亮个相
```
package decorator;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 21:25】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        ModelDecoorator modelDecoorator = new BWMDecorator(new BWMCarModel());
        modelDecoorator.look();
    }
}

```

## 你看到了啥
![结果](/images/article/181209/res2.png)
