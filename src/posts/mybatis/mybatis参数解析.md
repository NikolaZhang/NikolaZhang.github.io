---
title: mybatis参数解析及设置
tag:
  - mybatis
  - parameter
category: mybatis
description: 关于mybatis parameterHandler的解析
date: 2024-12-26

author: nikola
icon: article

isOriginal: true
sticky: false
timeline: true
article: true
star: false
---

> 在使用 MyBatis 进行数据库操作时，`ParameterHandler` 负责将传入的参数转换为 JDBC 语句可以理解的形式。

<!--- more -->

## ParameterHandler

在mybatis中，`ParameterHandler` 用于将用户提供的参数转换为JDBC语句可以理解的形式。它有一个默认的实现`DefaultParameterHandler`。

`DefaultParameterHandler`存在以下属性：

- `TypeHandlerRegistry typeHandlerRegistry`：用于注册`jdbcType`或者`javaType`对应的处理器
- `Object parameterObject`：执行sql使用的参数对象。
- `BoundSql boundSql`：sql及绑定的参数对象、映射等信息。
- `Configuration`：全局配置信息。
- `MappedStatement mappedStatement`：statement信息。

`ParameterHandler`对外只提供设置参数方法和获取参数方法。

```java

  Object getParameterObject();

  void setParameters(PreparedStatement ps) throws SQLException;

```

下面分析`DefaultParameterHandler`的`setParameters`的处理流程见下：

```mermaid

flowchart TD
    A((开始)) --> B[从boundSql中获取parameterMappings]
    B --> C{{parameterMappings != null?}}
    C -->|No| Z((结束))
    C -->|Yes| D[遍历parameterMappings]
    D --> E{{参数映射模式 Mode != OUT?}}
    E -->|No| D
    E -->|Yes| F{{存在 additionalParameter?}}
    F -->|Yes| G[从additionalParameter中获取value]
    F -->|No| H{{parameterObject == null?}}
    H -->|Yes| I[value = null]
    H -->|No| J{{parameterObject存在TypeHandler?}}
    J -->|Yes| K[value = parameterObject]
    J -->|No| L[从MetaObject中获取value]
    G --> M[获取TypeHandler & JdbcType]
    I --> M
    K --> M
    L --> M
    M --> N{{value null & jdbcType null?}}
    N -->|Yes| O[获取默认的JdbcType for null]
    N -->|No| P[使用TypeHandler设置参数]
    O --> P
    P --> D
    D --> Z
```

当参数映射使用附加的参数映射时，会从`additionalParameter`中获取参数值。

附加参数使用的不是用户指定的参数名称，如`<foreach>`生成的参数名、系统指定的参数名称、数据库id。

![20241226150548](https://raw.githubusercontent.com/NikolaZhang/image-blog/main/mybatis参数解析/20241226150548.png)

非附加参数，则首先判断是否指定了该参数类型对应的处理器，如果指定，则直接使用该参数。

如果没有指定则通过`MetaObject`从对象中获取参数及变量值。

```java
public void setParameters(PreparedStatement ps) {
  ErrorContext.instance().activity("setting parameters").object(mappedStatement.getParameterMap().getId());
  List<ParameterMapping> parameterMappings = boundSql.getParameterMappings();
  if (parameterMappings != null) {
    for (int i = 0; i < parameterMappings.size(); i++) {
      ParameterMapping parameterMapping = parameterMappings.get(i);
      if (parameterMapping.getMode() != ParameterMode.OUT) {
        // 如果不是out则设置参数
        Object value;
        String propertyName = parameterMapping.getProperty();
        if (boundSql.hasAdditionalParameter(propertyName)) { // issue #448 ask first for additional params
          // 获取额外参数
          value = boundSql.getAdditionalParameter(propertyName);
        } else if (parameterObject == null) {
          value = null;
        } else if (typeHandlerRegistry.hasTypeHandler(parameterObject.getClass())) {
          // 如果参数类型是注册typehandler类型，则直接使用
          // 后续通过typehandler直接处理parameterObject
          value = parameterObject;
        } else {
          // 如果参数是一个pojo，则使用pojo的属性值
          MetaObject metaObject = configuration.newMetaObject(parameterObject);
          value = metaObject.getValue(propertyName);
        }
        // note zx 获取参数映射中的typeHandler，jdbcType
        TypeHandler typeHandler = parameterMapping.getTypeHandler();
        JdbcType jdbcType = parameterMapping.getJdbcType();
        if (value == null && jdbcType == null) {
          jdbcType = configuration.getJdbcTypeForNull();
        }
        try {
          // note zx 给PreparedStatement设置参数，此处是调用typeHandler的setParameter方法，
          typeHandler.setParameter(ps, i + 1, value, jdbcType);
        } catch (TypeException | SQLException e) {
          throw new TypeException("Could not set parameters for mapping: " + parameterMapping + ". Cause: " + e, e);
        }
      }
    }
  }
}
```

### MetaObject的使用

`MetaObject`是mybatis中用于封装对象和属性的类。它提供了一些方法来获取和设置对象的属性，以及执行一些操作，如属性的获取和设置、属性的遍历等。

`MetaObject`的使用方法可以参考`MetaObjectTest`。

下面举几个例子：

```java
RichType rich = new RichType();
MetaObject meta = SystemMetaObject.forObject(rich);
meta.setValue("richField", "foo");
assertEquals("foo", meta.getValue("richField"));
meta.setValue("richType.richField", "foo");
assertEquals("foo", meta.getValue("richType.richField"));
meta.setValue("richMap.key", "foo");
assertEquals("foo", meta.getValue("richMap.key"));
meta.setValue("richMap[key]", "foo");
assertEquals("foo", meta.getValue("richMap[key]"));
meta.setValue("richList[0]", "foo");
assertEquals("foo", meta.getValue("richList[0]"));
```
