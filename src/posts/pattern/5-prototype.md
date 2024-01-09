---
title: 原型模式
tag:
  - 原型模式
category: 设计模式
description: 原型模式
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-08

author: nikola
icon: book

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> `Prototype`模式允许对象在不了解要创建对象的确切类以及如何创建等细节的情况下创建自定义对象。使用`Prototype`实例，便指定了要创建的对象类型，而通过复制这个`Prototype`，就可以创建新的对象。  
> `Prototype`模式是通过先给出一个对象的`Prototype`对象，然后再初始化对象的创建。创建初始化后的对象再通过`Prototype`对象对其自身进行复制来创建其他对象。`Prototype`模式使得动态创建对象更加简单，只要将对象类定义能够复制自身就可以实现。

<!--more-->

## 代码实现

```java
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

```java
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

```java
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

```java
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
