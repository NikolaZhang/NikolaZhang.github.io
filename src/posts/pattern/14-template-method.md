---
title: 模板方法模式
tag:
  - 模板方法模式
category: 设计模式
description: 在一个抽象类中定义一个操作中的算法骨架，而将一些步骤延迟到子类中实现。
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-29

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 模板方法模式，提供了在不重写方法的前提下允许子类重载部分方法的方法。在操作中定义算法的框架，将一些步骤由子类实现。该模式可以在不修改算法结构的情况下，让子类重新定义算法的特定步骤。

![20240211165120](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/14-template-method/20240211165120.png)

## 代码实现

### 抽象类

抽象类定义了算法的骨架，它由一个或多个基本方法和一个模板方法组成。

1. 模板方法是一个具体方法，它实现了算法的框架，并在合适的地方调用基本方法。这个方法通常被声明为`final`，以防止子类重写整个算法流程。
2. 基本方法可以是抽象方法，由子类实现；也可以是具体方法，提供默认实现但允许子类覆盖。

```java
public abstract class AbstractTemplate {

    public final void doAction() {
        clickPowerButton();

        System.out.println("账号：");
        inputUsername();
        System.out.println("密码：");
        inputPassword();

        clickEnterButton();

    }

    public abstract void inputUsername();
    public abstract void inputPassword();


    private void clickPowerButton() {
        System.out.println("按下电源按钮，启动");
    }

    private void clickEnterButton() {
        System.out.println("点击Enter按钮，进入系统");
    }

}

```

### 具体类

```java
public class GuestLogin extends AbstractTemplate {


    @Override
    public void inputUsername() {
        System.out.println("xiaozhang");
    }

    @Override
    public void inputPassword() {
        System.out.println("1234");
    }
}

```

### 使用

```java

public class Client {

    public static void main(String[] args) {
        AbstractTemplate template = new GuestLogin();
        template.doAction();

    }
}

```

结果：

![20240211210731](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/14-template-method/20240211210731.png)
