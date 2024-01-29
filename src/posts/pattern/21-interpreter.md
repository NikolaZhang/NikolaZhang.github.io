---
title: 解释器模式
tag:
  - 命令模式
category: 设计模式
description: 提供了评估语言语法或表达式的方式，通常用于设计小型语言解析器。
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-24

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 解释器模式可以解释定义其语法表示的语言，还提供了用来解释语言中的语句的解释器。

![20240125231757](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/21-interpreter/20240125231757.png)

解释器模式中的主要角色有:

1. 抽象表达式(AbstractExpression)角色  
   定义解释器的接口，约定解释器的解释操作，一般包含解释方法 interpret()。
2. 终结符表达式（TerminalExpression）：  
   实现与文法中的元素相关联的解释操作，通常一个解释器模式中只有一个终结符表达式，但有多个实例，对应不同的终结符。
3. 非终结符表达式（NonterminalExpression）  
   非终结符表达式，文法中的每条规则对应一个非终结表达式
4. 环境角色（Context）：
   包含解释器需要的一些全局信息。

## 代码实现

### 抽象表达式

```java

```

### 具体表达式

```java

```

### 环境

```java

```

