---
original: true
title: 日志框架-logback条件配置
date: 2022-10-17
tag:
  - logback
  - 日志
category: 日志
description: 日志框架logback的配置介绍
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

# 配置条件处理

当不同的环境需要不同的配置时，需要改动某些配置，而大部分内容则保持不变。如在开发和测试环境我们尽可能打印debug级别的日志，在线上则以error级别的为主。为了避免重复配置和维护，按照条件处理配置文件提供了这方面的便利。

logback中通过`if`，`then`，`else`标签来控制配置处理过程。这里if标签表示条件，含有`condition`属性，值为java表达式。then是满足条件的分支，else是不满足条件的分支。

```
<!-- if-then form -->
   <if condition="some conditional expression">
    <then>
      ...
    </then>
  </if>

  <!-- if-then-else form -->
  <if condition="some conditional expression">
    <then>
      ...
    </then>
    <else>
      ...
    </else>
  </if>
```

在condition表达式中只有上下文属性和系统属性可以使用。

### 内部java方法

1. property()或者简写p()方法将属性名作为参数返回属性的值。如果没有定义该属性那么，方法将会返回空字符串
2. isDefined()方法可以被用来检查属性是否定义。
3. isNull()方法可以检查属性是否为空

```java
<configuration debug="true">

  <if condition='property("HOSTNAME").contains("torino")'>
    <then>
      <appender name="CON" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
          <pattern>%d %-5level %logger{35} - %msg %n</pattern>
        </encoder>
      </appender>
      <root>
        <appender-ref ref="CON" />
      </root>
    </then>
  </if>

  <appender name="FILE" class="ch.qos.logback.core.FileAppender">
    <file>${randomOutputDir}/conditional.log</file>
    <encoder>
      <pattern>%d %-5level %logger{35} - %msg %n</pattern>
   </encoder>
  </appender>

  <root level="ERROR">
     <appender-ref ref="FILE" />
  </root>
</configuration>
```