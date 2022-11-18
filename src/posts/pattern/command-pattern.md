---
original: true
title: command pattern
date: 2018-12-09


tag:
  - command pattern
category: 技术
description: 命令模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 命令模式主要解决行为请求者与行为执行者的强耦合而出现的一种行为模式。通常模式有三种角色，命令执行者，命令，命令入口。

<!--more-->
## 命令的执行者
为了易于扩展，我们将执行者的行为抽象为接口
```
package command;

/************************************************
 *@ClassName : Invoker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 19:52】
 *@Version : 1.0.0
 *************************************************/

public interface GroupI {
    void add();
    void delete();
}

```
创建几个执行这类
```
package command;

/************************************************
 *@ClassName : Invoker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 19:52】
 *@Version : 1.0.0
 *************************************************/

public class WorkGroup implements GroupI{
    @Override
    public void add() {
        System.out.println("工作组根据命令添加零件");
    }

    @Override
    public void delete() {
        System.out.println("工作组根据命令删除零件");
    }
}


```
## 命令模块
命令模块更具输入的命令，调用对应的模块执行命令
同样为了易于扩展我们将其做成一个抽象类。
```
package command;

/************************************************
 *@ClassName : Invoker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 19:52】
 *@Version : 1.0.0
 *************************************************/

public abstract class CommandA {
    protected WorkGroup workGroup = new WorkGroup();
    protected DesignGroup designGroup = new DesignGroup();

    public abstract void execute(String str) ;


}
```
子类：
```
package command;

/************************************************
 *@ClassName : DesignCommand
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 20:08】
 *@Version : 1.0.0
 *************************************************/

public class WorkCommand extends CommandA{

    @Override
    public void execute(String str) {
        if("add".equals(str)){
            super.workGroup.add();
        } else if("delete".equals(str)){
            super.workGroup.delete();
        }else {
            System.out.println("工作组拒绝该命令");
        }

    }
}

```

## 命令入口
```
package command;

/************************************************
 *@ClassName : Invoker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 19:52】
 *@Version : 1.0.0
 *************************************************/

public class Invoker {
    private CommandA commandA;

    public void setCommandA(CommandA commandA) {
        this.commandA = commandA;
    }

    public void action(String str){
        commandA.execute(str);
    }
}

```

## 测试
```
package command;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 20:11】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        Invoker invoker = new Invoker();

        CommandA commandWork = new WorkCommand();
        invoker.setCommandA(commandWork);
        invoker.action("add");
        invoker.action("delete");
        invoker.action("update");

    }
}

```

## 结果
![结果](/images/article/181209/res.png)
