---
original: true
title: multiton pattern
time: 2018-11-30


tags: 
  - multiton pattern
category: 技术
description: 多例模式的实现方法
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 多例模式，即多个单例，并不是简单的new new new，算是个极端，不能完全否定吧。

<!--more-->

## 多例模型
```
package multiton;

import java.util.HashMap;
import java.util.Map;

/************************************************
 *@ClassName : multiton
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:07】
 *@Version : 1.0.0
 *************************************************/

public class BranchCompany {
    private static Map<String, BranchCompany> map = new HashMap<>();
    private String info;
    static {
        // 预先设置两个分公司
        BranchCompany bjCom = new BranchCompany();
        bjCom.setInfo("这是北京的公司");
        System.out.println("北京的分公司："+bjCom);
        map.put("beijing", bjCom);
        BranchCompany shCom = new BranchCompany();
        shCom.setInfo("这是上海的公司");
        map.put("shanghai", shCom);
        System.out.println("上海的分公司："+shCom);
        System.out.println("==============================");
    }

    public static BranchCompany getInstance(String address){
        return map.get(address);
    }

    public void getInfo(){
        System.out.println(this.info+"/"+this);
    }

    public void setInfo(String info){
        this.info = info;
    }
}

```

## 测试
```
package multiton;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:17】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        BranchCompany bj = BranchCompany.getInstance("beijing");
        bj.getInfo();
        BranchCompany sh = BranchCompany.getInstance("shanghai");
        sh.getInfo();
    }
}

```

## 结果
![结果](/images/article/30/result.png)
