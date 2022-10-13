---
original: true
title: golang 结构体解析
mathjax: true
tags:
  - golang
  - 结构体
category: go
time: 2020-07-05
description: golang语法 结构体的介绍
image: https://image.nikolazhang.top/leimumolisa.jpg
---

> 刚开始接触go, 直观的感觉就是--好奇葩的语言. 对于面向对象的中毒用户, 又一时难以接受里面的一些做法. go不是一门面向对象编程的语言, 没有对象和继承的概念, 也没有多态与重载. go表示一个对象的概念是通过构造体实现的. 这一篇文章我们就详细看看构造体的使用.

## 长什么样

go语言的设计很有c的风格, 包括这个结构体的概念.
通过如下方式可以定义一个构造体:

```go
type Person struct {
    Name string
    Age int
}
```

对一个构造体赋值, 有很多种方式:

```go
    // 声明一个结构体实例, 并赋初值 字段: value
    person := Person{
        Name: "aaa",
        Age: 23,
    }
    // 设置空值
    person = Person{}
    // 按照字段顺序进行赋值
    person = Person{"bbb", 23}
    // 也支持指定某个字段赋值
    person = Person{Name: "aaa"}
```

还可以通过new关键字, 赋值直接.下面的属性赋值, 不过要注意此时的person为指针类型

```go
    person := new(Person)
    person.Name = "zhangxu"
    person.Age = 23
```

`new`的作用和`&Person{}`的作用相同

## 绑定方法

将方法与结构体进行绑定可以参考如下示例

```go
func (p *Person) changeAge() {
    p.Age += 100
}

```

之后就可以通过`person.changeAge()`进行调用.

这里要注意一点, 我们关联的是指针`*Person`, 此时拷贝的为地址, 如果使用`Person`则拷贝的为原来的数据, 因此改变内部属性将不会作用到原有变量. 实际表现为Age没有加100

## 构造器

很遗憾没有构造器. 但是可以使用方法实现:

```go
func NewPerson(name string, age int) Person {
   return Person{name, age}
}
```

`person := NewPerson("zhangsna", 12)`就可以完成声明和初始化

## 组合

这是将一个结构包含进另一个结构的行为

下面的例子中我们在Person中增加了一个`Class`, 注意非同名字段可以直接获取, 同名字段只能逐步调用.
```go
type Class struct {
    Name string
    Score int
}
type Person struct {
    Name string
    Age int
    *Class
}

func main() {
    person := Person{"zhangsna", 12, &Class{"语文", 83}}
    fmt.Println(person)
    fmt.Println(person.Score)
    fmt.Println(person.Name)
    fmt.Println(person.Class.Name)
}

```

## 传值还是传指针

如果结果体内部以值的方式组合一个结构体, 赋值时自然要使用结构体的方式进行赋值, 而不是使用指针.

```go
type Class struct {
    Name string
    Score int
}
type Person struct {
    Name string
    Age int
    Class
}

func main() {
    person := Person{"zhangsna", 12, Class{"语文", 83}}
    fmt.Println(person)
    fmt.Println(person.Score)
    fmt.Println(person.Name)
    fmt.Println(person.Class.Name)
}

```

你会发现这两个程序(与上面一节)输出结果是相同的

个人理解, 就结构体本事讨论没有什么意义, 应该要结合具体的方法使用, 如果你需要修改结构体的值, 那么对应的方法参数肯定需要传指针
如果结构体中是用的是指针, 那么直接传过去就好了. 如果是第二种方式就通过&取地址传过去, 也可以.

你可以运行一下下面的程序

```go
type Class1 struct {
    Name string
    Score int
}
type Class2 struct {
    Name string
    Score int
}
type Person struct {
    Name string
    Age int
    *Class1
    Class2
}

func main() {

    person := Person{"zhangsna", 12,
        &Class1{"语文", 83},
    Class2{"数学", 83}}


    changeClass1Score(person.Class1)
    changeClass2Score(&person.Class2)

    fmt.Println(person.Class1)
    fmt.Println(person.Class2)

}

func changeClass1Score(c *Class1) {
    c.Score += 10
}
func changeClass2Score(c *Class2) {
    c.Score += 10
}

```
