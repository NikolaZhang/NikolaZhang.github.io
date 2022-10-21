---
original: true
title: responsibility chain pattern
date: 2018-11-30


tags: 
  - responsibility chain pattern
category: 技术
description: 责任链模式的实现方法
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 责任链模式，将请求和处理对象分离，将请求发送给一个请求处理入口后，谁具有请求的处理权限，谁就处理请求。

<!--more-->

每年这个时候大概都是公司的聚餐季。但是我们的汽车厂，领导们饭后还有特别活动，比如讨论个“来年计划”啥的。我不清楚，我没当过领导。

## 请求入口Position
这里我们将请求的处理者分级，使用Position类型的nextPostion属性。接着创建该类的构造器、set方法等等。这都没什么好说的。关键的是giveNotice方法。方法的第一个参数是我们的请求级别，第二个参数就是请求的内容。通过不断判断nextPosition中的level是否符合条件决定是否将请求交给对象处理。
```
package responsibilitychain;

public abstract class Position {
	private int level;
	private Position nextPosition;
	private String name;

	public void giveNotice(int level, String notice) {
		if(level>=this.level) {
			System.out.println(this.name+"获取："+notice);
		}
		if(this.nextPosition == null){
			return;
		}
		this.nextPosition.giveNotice(level, notice);
	}

	public void setNextPosition(Position position){
		this.nextPosition = position;
	}

	public Position(int level, String name) {
		super();
		this.level = level;
		this.name = name;
	}

}
```

## 继承Position
通过继承我们实现几个不同级别的请求处理者。
```
package responsibilitychain;

/************************************************
 *@ClassName : Woker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/12 0012 21:44】
 *@Version : 1.0.0
 *************************************************/

public class Master extends  Position {
    public Master(int level, String name) {
        super(level,  name);
    }
}
```
可以看到每个请求处理者只是重写了构造器。以后我们实例化一个处理者对象的时候就设置其对应级别level。

## 最近聚餐，周知周知
```
package responsibilitychain;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/12 0012 21:45】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        Position master = new Master(1,  "大BOSS");
        Position leader = new Leader(2,  "组长");
        Position worker = new Worker(3,  "劳动者");
        master.setNextPosition(leader);
        leader.setNextPosition(worker);
        master.giveNotice(3,  "今晚吃个饭");
        master.giveNotice(2,  "饭后唱个K");

    }
}
```

聚餐通知是最低级别的，所有人都会看到。但是唱k通知只有领导们才会看到。

## 结果
![结果](/images/article/181212/res2.png)


最近开始忙了~~~不能快快乐乐的写博客了。。。。悲伤。。
