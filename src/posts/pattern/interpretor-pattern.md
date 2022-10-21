---
original: true
title: interpretor pattern
date: 2018-12-15


tags: 
  - interpretor pattern
category: 技术
description: 解释器模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 解释器模式，最经典的解释器模型就是我们用的那些IDE。将你编写的语言转成机器语言。这个转换就可以理解为解释。

<!--more-->

## 模型结构
解释器模型，有三个主要的角色。
1. Context：环境角色，主要用于存放传入的数据。
2. AbstractExpress：抽象解释器，是所有解释器的接口或者抽象父类。
3. TerminalExpress：终结符表达式，主要解释文法。
4. NonTermianlExpress: 非终结符表达式，主要解释符号标记。
比如：select * from database where name = #{name}
select，from，where [a-z_A-Z]* =,是非终结表达式。database,*，#{name}这样的就属于终结表达式。
下面看看我这个例子吧。笑笑就好~实在拙劣。。。
## 环境角色
```
package interpretor;

/************************************************
 *@ClassName : Context
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 13:24】
 *@Version : 1.0.0
 *************************************************/

public class Context {
    private String condition;
    private String value;
    private String expression;


    public Context(String condition, String value, String expression) {
        this.condition = condition;
        this.value = value;
        this.expression = expression;
    }

    public String getCondition() {
        return condition;
    }

    public String getValue() {
        return value;
    }

    public String getExpression() {
        return expression;
    }
}

```

## 抽象表达式接口
```
package interpretor;

/************************************************
 *@ClassName : Expression
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 9:27】
 *@Version : 1.0.0
 *************************************************/

public interface  Expression {
    void interpreter(Context context);
}

```
## 终结和非终结表达式实现
```
package interpretor;

/************************************************
 *@ClassName : TerminalExpression
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 9:29】
 *@Version : 1.0.0
 *************************************************/

public class TerminalExpression implements Expression {
    @Override
    public void interpreter(Context context) {
        String name = context.getCondition();
        String value = context.getValue();
        System.out.println("查询条件为name="+name);
        System.out.println("需要的结果是："+value);
        if("age".equals(value) && "zhangsan".equals(name)){
            System.out.println("查询年龄为：23");
        }
    }

}

```
```
package interpretor;

/************************************************
 *@ClassName : NonTerminalExpression
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 9:29】
 *@Version : 1.0.0
 *************************************************/

public class NonTerminalExpression implements Expression {

    private Expression expression;

    public NonTerminalExpression(Expression expression) {
        this.expression = expression;
    }

    @Override
    public void interpreter(Context context) {
        String str = context.getExpression();
        if(str.contains("select") && str.contains("where")&& str.contains("=")){
            System.out.println("ooo条件查询");
            this.expression.interpreter(context);
        }
    }
}



```

## 测试
```
package interpretor;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 9:30】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        String input = "select _value where name = _name";
        Context context = new Context("zhangsan", "age", input);

        Expression tExp = new TerminalExpression();
        Expression ntExp = new NonTerminalExpression(tExp);
        ntExp.interpreter(context);

    }
}

```

## 结果
![结果](/images/article/181215/res1.png)
