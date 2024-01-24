---
title: 迭代器模式
tag:
  - 迭代器模式
category: 设计模式
description: 提供一种顺序访问聚合对象元素的方法，而又不需要暴露其底层表示。
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-22

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 迭代器模式，为集合中的有序访问提供了一致的方法，它让对象可以遍历另一个对象的数据集。这种模式可以帮助我们遍历数组、集合和哈希表等。

![20240124214353](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/16-iterator/20240124214353.png)

迭代器模式的主要角色如下：

1. 容器对象（ConcreteIterator）：  
   容器对象提供遍历数据集的接口，它实现了迭代器接口的next()方法。这个方法会返回数据集的下一个元素，直到遍历结束。

2. 迭代器接口（Iterator）：  
   一个接口，定义了迭代器必须支持的的方法，如next()和hasNext()。

## 代码实现

### 