---
title: 过滤器模式
tag:
  - 过滤器模式
category: 设计模式
description: 通过逻辑条件对对象集合进行筛选操作，而不需要修改这些对象。
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
date: 2024-01-27

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 过滤器模式（Filter Pattern）允许开发人员通过逻辑条件对对象集合进行筛选操作，而不需要修改这些对象。这种模式属于行为型设计模式，通过提供一系列的过滤器来处理数据集，并根据需要选择合适的过滤器。

![20240211213307](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/25-filter/20240211213307.png)

在过滤器模式中，主要包含以下角色：

1. 目标接口（Target Interface）： 这个接口定义了所有待过滤对象共享的方法，通常用于获取原始数据集。
2. 具体目标类（Concrete Target）： 实现目标接口的具体类，包含了要被过滤的数据集合。
3. 过滤器接口（Filter Interface）： 定义了一个抽象方法，该方法接受目标对象并可能返回一个经过过滤的新集合。每个过滤器都实现了这个接口。
4. 具体过滤器类（Concrete Filter）： 每个具体过滤器类实现过滤器接口，并定义了具体的过滤逻辑。它们可以链接起来形成过滤链，以便对数据进行多级过滤。

## 代码实现

有这么一个需求，我们希望将分数高于某个分数的学生筛选出来，这时候可以使用过滤器模式。

### 目标接口

目标接口暴露提供给过滤器使用的条件。

```java
public interface Student {
    double getScore();
    String getName();
}

```

### 具体目标类

具体目标类中我们维护学生的姓名及分数。

```java
public class ConcreteStudent implements Student {
    private String name;
    private double score;

    public ConcreteStudent(String name, double score) {
        this.name = name;
        this.score = score;
    }

    @Override
    public double getScore() {
        return score;
    }

    @Override
    public String getName() {
        return name;
    }

}

```

### 过滤器接口

过滤器接口接收所有学生的结合，通过子类实现过滤逻辑，返回满足条件的学生集合。

```java
public interface Criteria {
    List<Student> meetCriteria(List<Student> students);
}

```

### 具体过滤器类

具体过滤器中需要指定分数线，并按照这个参数对输入的集合进行过滤。

```java

public class HighScoreCriteria implements Criteria {
    private double passingScore;

    public HighScoreCriteria(double passingScore) {
        this.passingScore = passingScore;
    }

    @Override
    public List<Student> meetCriteria(List<Student> students) {
        List<Student> filteredStudents = new ArrayList<>();
        for (Student student : students) {
            if (student.getScore() >= passingScore) {
                filteredStudents.add(student);
            }
        }
        return filteredStudents;
    }
}

```

### 使用

```java
public class Client {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new ConcreteStudent("Alice", 90),
            new ConcreteStudent("Bob", 85),
            new ConcreteStudent("Charlie", 70)
        );

        Criteria highScoreFilter = new HighScoreCriteria(85);
        List<Student> highScoringStudents = highScoreFilter.meetCriteria(students);

        for (Student student : highScoringStudents) {
            System.out.println(student.getName() + " 的分数为: " + student.getScore());
        }
    }
}

```

结果：

![20240211213525](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/25-filter/20240211213525.png)