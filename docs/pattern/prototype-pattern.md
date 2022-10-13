---
original: true
title: prototype pattern
time: 2018-12-14


tags: 
  - prototype pattern
category: 技术
description: 原型模式的实现方法
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 原型模式，估计这是最简单的模式了。这个模式可以用于创建重复的对象，同时又能保证性能。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。额外说一句，这里的创建对象只是浅拷贝的。

<!--more-->
没什么好说的，直接看程序吧。要实现对象的浅拷贝，需要让待拷贝对象实现Cloneable接口。
##
```
package prototype;


public class Model implements Cloneable {
	private String name;
	private String price;
    private A a = new A("a");


    public String getName() {
        return name;
    }

    public String getPrice() {
        return price;
    }

    public A getA() {
        return a;
    }

    protected Object clone() {
		try {
			return super.clone();
		} catch (CloneNotSupportedException e) {
			e.printStackTrace();
			return null;
		}
	}

	public Model(String name, String price) {
		super();
		this.name = name;
		this.price = price;
	}


}

```

## 测试
```
package prototype;

import java.io.*;

public class Test {
	public static void main(String[] args) {
		// 浅拷贝 Nikola Zhang  【2018/12/14 0014 20:51】
	  Model modelA = new Model("AAA","1111");
		Model modelB = (Model)modelA.clone();

		System.out.println(modelA);
		System.out.println(modelB);
		System.out.println(modelA.getA());
		System.out.println(modelB.getA());
		System.out.println(modelB.getPrice());
		System.out.println(modelB.getName());
  }
}

```

## 结果
![结果](/images/article/181214/prototypeqian.png)

根据结果截图，可以看到引用类型对象modelA,modelB的地址是不同的。但内部的引用类型A地址确实相同的。
这就引出了一个额外的话题，深拷贝。深拷贝可以通过实现Cloneable接口实现，也可以通过实现Serializable接口实现。
代码如下：
## 深拷贝
```
package prototype;


import java.io.Serializable;

public class ModelS implements Serializable {
	private String name;
	private String price;
    private A a = new A("a");


    public String getName() {
        return name;
    }

    public String getPrice() {
        return price;
    }

    public A getA() {
        return a;
    }

	public ModelS(String name, String price) {
		super();
		this.name = name;
		this.price = price;
	}


}

```

## 测试深拷贝
```
package prototype;

import java.io.*;

public class Test {
	public static void main(String[] args) {
		// 浅拷贝 Nikola Zhang  【2018/12/14 0014 20:51】
	    Model modelA = new Model("AAA","1111");
		Model modelB = (Model)modelA.clone();

		System.out.println(modelA);
		System.out.println(modelB);
		System.out.println(modelA.getA());
		System.out.println(modelB.getA());
		System.out.println(modelB.getPrice());
		System.out.println(modelB.getName());

        // 深拷贝 Nikola Zhang  【2018/12/14 0014 20:51】
		ModelS modelS = new ModelS("SSS","2222");
        try {
            ByteArrayOutputStream bos=new ByteArrayOutputStream();
            ObjectOutputStream oos=new ObjectOutputStream(bos);
            oos.writeObject(modelS);
            oos.flush();
            ObjectInputStream ois=new ObjectInputStream(new ByteArrayInputStream(bos.toByteArray()));
            ModelS modelS1 =  (ModelS)ois.readObject();
            System.out.println(modelS.getA());
            System.out.println(modelS1.getA());
            ois.close();
            oos.close();
            bos.close();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

    }

}

```
需要注意的是，ModelS中的引用类型必须实现Serializable接口，否则会报错。

## 结果
![结果](/images/article/181214/prototype.png)
可以看到，ModelS中的引用类型的地址经过深拷贝后是不同的。当你更改其中一个的value后，另一个对象的value自然是不会改变。
