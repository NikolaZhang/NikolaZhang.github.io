---
title: 桥接模式
tag:
  - 桥接模式
category: 设计模式
description: 桥接模式
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2023-01-08

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 桥接模式可以将一个复杂组件分成两个独立但又相关的继承层次结构：功能性的抽象和内部实现。
> 改变组件的这两个层次结构很简单
> 
> 
> 桥梁模式提供了一种弱类间关系，关联关系。P.S.:在设计模式中类与类之间的关系主要有6种：依赖、关联、聚合、组合、继承、实现，它们之间的耦合度依次增加。在设计模式之禅的案例中，子类必须实现抽象父类中的所有方法，父类抽象方法的变更，必然导致子类的变更。这是一种强关联关系。强关联有必然使我们的系统不易扩展。所以桥梁模式为化解强关联提供了一种解决方案。

<!--more-->

> 大致的思路应该是这样。首先将程序中容易变更，或者以后需要扩展的部分提取出来，将扩展方法抽象，并封装到一个抽象类中。这个抽象类自然要关联到原来的类中。这样程序从继承会降低到关联（程序中具体是组合关系）关系。
