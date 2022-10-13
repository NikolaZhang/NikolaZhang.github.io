---
original: true
title: golang 接口解析
mathjax: true
tags:
  - golang
  - 接口
category: go
time: 2020-07-05
description: golang语法 接口的介绍
image: https://image.nikolazhang.top/fd34d52e52698798f3a8f057978fe490.jpeg
---

> 本篇文章就看看接口是如何使用的, go的接口可以说非常小巧.

## 定义

go 语言中使用interface关键字表示接口. 可以使用如下的方法定义一个接口:

```go
type Sell interface {
    AutoSell() int
}
```

我们定义了一个Sell接口, 该接口提供了一个抽象方法`AutoSell`, 返回值类型为int

## 接口实现

我们需要使用构造体来实现接口中的方法, 做法与构造体中绑定方法的做法一样.

```go
type Follower struct {
}
func (f *Follower) AutoSell() {
    fmt.Println("Follower AutoSell")
}
```

以上程序我们定义了一个Follower构造体, 并绑定了AutoSell方法, 注意这个方法需要和接口中的方法名称, 返回类型, 参数保持一致.
如果你使用idea作为IDE那么会有一个很明显的`Go to Method Specifications`符号.

## 使用接口

到此之前你会发现接口的定义是多余的, 去掉也不会影响程序运行. 看看下面的代码你一定会恍然大悟:

```go
func sellRecord(s Sell) {
    fmt.Println("==== new sell")
    s.AutoSell()
}
```

`sellRecord`方法需要传入一个Sell, 而Sell又可以有多个构造体实现. 我们再写一个`Book`实现

```go
type Book struct {
}

func (b *Book) AutoSell() {
    fmt.Println("Book AutoSell")
}
```

下面我们调用这个`sellRecord`方法

```go

func main()  {
    b := Book{}
    f:= Follower{}

    sellRecord(&b)
    sellRecord(&f)
}

```

结果输出为:

```
==== new sell
Book AutoSell
==== new sell
Follower AutoSell
```

## 空接口

顾名思义, 空接口就是没有抽象方法的接口. 常常被用来作为任意类型的对象进行传值.
这有点类似java中的Object

```go
func add(a interface{}, b interface{}) interface{} {
    return a.(int)+b.(int)
}
```

上面的方法我们使用, 空接口类型参数a,b作为输入, 计算其和, 并返回一个空接口类型的结果

空接口其实一开始你就接触到了, fmt下的print相关方法, 在传参数时, 就是用了这种方式

```go
func Println(a ...interface{}) (n int, err error) {
	return Fprintln(os.Stdout, a...)
}
```
