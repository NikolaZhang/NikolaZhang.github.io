---
isOriginal: true
title: 日志框架-logback属性
date: 2022-10-15
tag:
  - logback
  - 日志
category: 日志
description: 日志框架logback的配置介绍
sticky: false
timeline: true
article: true
star: false
---

# 属性

> logback配置文件支持定义和替换属性。属性可以通过配置文件定义，也可以通过外部文件、资源定义，甚至是在运行中运算和定义。
> 

## 属性定义

1.0.7版本之前通过`property` 标签定义属性，1.0.7及之后的版本也通过`variable` 定义属性。两种方式可以互换。使用属性的方式和shell相似，通过`${}` 包裹定义的属性即可。

### 方式1：在配置文件中定义

```xml
<configuration>

  <variable name="USER_HOME" value="/home/sebastien" />

  <appender name="FILE" class="ch.qos.logback.core.FileAppender">
    <file>${USER_HOME}/myApp.log</file>
    <encoder>
      <pattern>%msg%n</pattern>
    </encoder>
  </appender>

  <root level="debug">
    <appender-ref ref="FILE" />
  </root>
</configuration>
```

### 方式2：使用系统属性

运行命令参考如下，定义`USER_HOME`为`/home/sebastien`

```bash
java -DUSER_HOME="/home/sebastien" MyApp2
```

在xml中可以直接使用USER_HOME

```xml
<configuration>

  <appender name="FILE" class="ch.qos.logback.core.FileAppender">
    <file>${USER_HOME}/myApp.log</file>
    <encoder>
      <pattern>%msg%n</pattern>
    </encoder>
  </appender>

  <root level="debug">
    <appender-ref ref="FILE" />
  </root>
</configuration>
```

### 方式3：外部文件

如果属性很多，那么将属性配置分离会比较方便。`variable` 的file属性可以指定属性文件位置。

```xml
<configuration>

  <variable file="src/main/java/chapters/configuration/variables1.properties" />

  <appender name="FILE" class="ch.qos.logback.core.FileAppender">
     <file>${USER_HOME}/myApp.log</file>
     <encoder>
       <pattern>%msg%n</pattern>
     </encoder>
   </appender>

   <root level="debug">
     <appender-ref ref="FILE" />
   </root>
</configuration>
```

### 方式4：运行中定义

使用`define`标签可以动态定义属性。define标签含有两个必须的属性：`name`，`class` 。name属性指定为要设置的属性名称；class属性指定为`PropertyDefiner`接口的实现，`getPropertyValue` 方法返回作为属性的值。你也可以通过`scope`属性指定属性范围。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration>
<configuration scan="true" scanPeriod="60 seconds" >
    <include resource="org/springframework/boot/logging/logback/defaults.xml"/>

    <property name="LOG_HOME" value="/logs/be-kami/spring-test"/>

    <define name="d1" class="com.nikola.logback.definer.SmilePropertyDefiner">
        <smile>^_^/</smile>
    </define>

    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <pattern>${d1} %clr(%d{yyyy-MM-dd HH:mm:ss.SSS}){yellow} %-5level [%thread] %clr(%logger{15}){blue} - %msg%n</pattern>
        </encoder>
    </appender>

    <root level="info">
        <appender-ref ref="STDOUT"/>
    </root>
    <logger name="com.nikola.logback.model.Foo" level="debug" additivity="false">
        <appender-ref ref="STDOUT"/>
    </logger>

</configuration>
```

```java
package com.nikola.logback.definer;

import ch.qos.logback.core.PropertyDefinerBase;
import lombok.Data;

@Data
public class SmilePropertyDefiner extends PropertyDefinerBase {

    private String smile;

    @Override
    public String getPropertyValue() {
        return smile;
    }

}
```

上面的程序会在每行输出前打印一个笑脸。

```
^_^/ 2022-10-19 15:07:51.476 INFO  [main] c.n.l.TestLogBack - here is info
^_^/ 2022-10-19 15:07:51.478 DEBUG [main] c.n.l.model.Foo - Did it again!
^_^/ 2022-10-19 15:07:51.478 INFO  [main] c.n.l.TestLogBack - Exiting application.
```

### 方法5：使用JNDI属性

`insertFromJNDI` 标签可以直接提取jndi的环境配置，并将属性指定给`as` 属性对应的名称（local scope）。使用scope标签可以修改属性范围。

```xml
<configuration>
  <insertFromJNDI env-entry-name="java:comp/env/appName" as="appName" />
  <contextName>${appName}</contextName>

  <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
    <encoder>
      <pattern>%d ${CONTEXT_NAME} %level %msg %logger{50}%n</pattern>
    </encoder>
  </appender>

  <root level="DEBUG">
    <appender-ref ref="CONSOLE" />
  </root>
</configuration>
```

## 属性范围

属性可以定义在本地范围、上下文范围、或者系统范围，本地是默认的范围。

本地范围（**LOCAL SCOPE**）：是指一个属性从其在配置文件中的定义点开始存在，直到该配置文件的解释/执行结束。由此可知，每次解析和执行一个配置文件时，局部范围内的属性都会被重新定义。

上下文访问（**CONTEXT SCOPE**）：是指属性被插入到上下文中，其持续时间与上下文一样长，或者直到它被清除。一旦定义，上下文范围内的属性就是上下文的一部分。因此，它在所有的日志事件中都可用，包括那些通过序列化发送到远程主机的事件。

系统范围（**SYSTEM SCOPE**）：是指属性被插入到JVM的系统属性，并且持续时间和JVM一样长，直到它被清除。

在替换过程中，属性首先在本地范围内查找，之后在上下文范围内，之后是应用系统属性，最后才是操作系统环境。

`variable`、`property` 、`define`、`insertFromJNDI`标签的`scope`属性可以用于指定属性的范围。值为`local`，`context`，`system`。如果不指定默认值为local

```xml
<variable scope="context" name="nodeId" value="firstNode" />
```

## 属性的默认值

**`:-`** 操作符允许设置属性默认值，如：`${aName**:-golden**}`

当aName没有定义的情况下，设置默认值为golden。

## 属性嵌套

### 值嵌套

如果希望将多个属性值拼接，可以额外定义一个属性，其值为这两个属性的拼接形式。如：

1. 使用属性文件
    
    ```bash
    USER_HOME=/home/sebastien
    fileName=myApp.log
    destination=${USER_HOME}/${fileName}
    ```
    
2. 在配置文件中
    
    ```xml
    <variable name="name1" value="value1"/>
    <property name="name2" value="value2"/>
    <property name="name3" value="${name1}/${name2}"/>
    ```
    

### 命名嵌套

使用的属性名字需要引用另一个属性的。可以使用`${${userid}.password}` 这种方式。如果userid是nikola，那么属性名就是nikola.password。

### 默认值嵌套

默认值可以引用其他属性名，如：`${id**:-**${userid}}` id的默认值为userid属性值。

## HOSTNAME & CONTEXT_NAME

`HOSTNAME` 与`CONTEXT_NAME` 作用范围为context。是内嵌的属性，不需要自定义。
