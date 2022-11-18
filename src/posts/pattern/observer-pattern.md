---
original: true
title: observer pattern
date: 2018-12-12


tag:
  - observer pattern
category: 技术
description: 观察者模式的实现和介绍
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 观察模式，提供了一种实时监听方案。定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。[菜鸟]

<!--more-->
当我们的流水线，每生产一辆车，我们都要记录并检验这辆车。
这里的记录员和质检员就是观察者。生产线则是被观察者。当被观察者变化时，就要通知其依赖的这些记录员和质检员。

## 被观察者
```
package observer;

import java.util.Observable;

public class Beltline extends Observable {

	public void productCar(String carName) {
		System.out.println("start producting car");
		super.setChanged();
		super.notifyObservers(carName);
	}
}
```
这里我们直接继承了java util包中的Observable类。这个类中定义了一个Vector集合用于存放所有的观察者。提供addObserver(Observer o) 方法用于添加观察者。注意Observer是个接口当我们定义观察者类的时候需要实现它。
![Observable](/images/article/181212/observable.png)

我们使用`super.notifyObservers(carName);`用于通知所有的观察者。这个方法是线程同步的。当观察者较多时还是很耗时的。
## 观察者
```
package observer;

import java.util.Observable;
import java.util.Observer;

public class CheckCar implements Observer{

	@Override
	public void update(Observable o, Object arg) {
		System.out.println("check the car named : "+arg);
	}

}
```

## 测试
```
package observer;

public class Test {
	public static void main(String[] args) {
		Beltline beltline = new Beltline();
		beltline.addObserver(new CheckCar());
		beltline.addObserver(new RecordCar());
		beltline.productCar("BWM");
		beltline.productCar("Benz");
		beltline.productCar("five edges great light");
	}

}
```

## 结果
![结果](/images/article/181212/res1.png)
