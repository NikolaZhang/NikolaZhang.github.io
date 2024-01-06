---
isOriginal: true
title: adapter pattern
date: 2018-12-02


tag:
  - adapter pattern
category: 技术
description: 适配器模式
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 适配器模式，你有我需要的信息但是我俩信息封装的类型不同，你无法直接给我。就像我又一个三脚插头，你是两孔的插座。需要一个转换器，让我用上你的电。P.S.:很危险，不要干这种事。。。

<!--more-->

(⊙o⊙)…，我从现在开始以讲故事的形式来说模式，虽然也是看着设计模式之禅那本书学习的，但还是照猫画虎，做做笔记，说说我的理解。

## 不同的客户信息封装
现在我们的汽车公司已经足够强大，要兼并其他公司。其他公司要把他们的客户信息给我们，但是他们的客户信息和我们的客户信息类封装有所不同。
如下：
+ 我们的公司：

  ```
  package adapter;

  /************************************************
   *@ClassName : CompanyHereI
   *@Description : TODO
   *@Author : NikolaZhang
   *@Date : 【2018/12/2 21:09】
   *@Version : 1.0.0
   *************************************************/
  public interface CompanyHereI {
      String getCustomerName();
      String getCustomerPhone();
      String getCustomerAddress();
      String getCustomerTel();
  }

  ```
+ 他们的公司：
  ```
  package adapter;

  import java.util.Map;

  /************************************************
   *@ClassName : CompanyRemoteI
   *@Description : TODO
   *@Author : NikolaZhang
   *@Date : 【2018/12/2 21:10】
   *@Version : 1.0.0
   *************************************************/

  public interface CompanyRemoteI {
      Map<String, String> getCustomerBaseInfo();
      Map<String, String> getCustomerHomeInfo();
  }

  ```
+ 他们公司的客户信息实现：
  ```
  package adapter;

  import java.util.HashMap;
  import java.util.Map;

  /************************************************
   *@ClassName : CompanyRemote
   *@Description : TODO
   *@Author : NikolaZhang
   *@Date : 【2018/12/1 11:40】
   *@Version : 1.0.0
   *************************************************/

  public class CompanyRemoteImpl implements CompanyRemoteI{
      @Override
      public Map<String, String> getCustomerBaseInfo() {
          Map<String, String> map = new HashMap();
          map.put("name", "张旭");
          map.put("phone", "17812345678");
          return map;
      }

      @Override
      public Map<String, String> getCustomerHomeInfo() {
          Map<String, String> map = new HashMap();
          map.put("name", "张旭");
          map.put("tel", "123456");
          map.put("address", "上海市静安区");
          return map;
      }
  }

  ```

## 我能怎么办，当然转换了~
我们要想从他们公司把客户信息提取出来，肯定需要定义一个类，这个类既能从他们公司取值，又能把取到的值赋值给我们公司的客户类。
这个类的写法就见仁见智了，设计模式上将这个类就是适配器。又分为类适配器和对象适配器。
类适配器如下：
```
package adapter;

/************************************************
 *@ClassName : CustomerInfoConvertAdapter
 *@Description : 使用类适配器
 *@Author : NikolaZhang
 *@Date : 【2018/12/2 21:20】
 *@Version : 1.0.0
 *************************************************/

public class CustomerInfoClassAdapter  extends CompanyRemoteImpl implements CompanyHereI{
    @Override
    public String getCustomerName() {
        return super.getCustomerBaseInfo().get("name");
    }

    @Override
    public String getCustomerPhone() {
        return super.getCustomerBaseInfo().get("phone");
    }

    @Override
    public String getCustomerAddress() {
        return super.getCustomerHomeInfo().get("address");
    }

    @Override
    public String getCustomerTel() {
        return super.getCustomerHomeInfo().get("tel");
    }
}

```
对象适配器和类适配器有一点不同，信息目标的获取方式是继承还是依赖。
```
package adapter;

/************************************************
 *@ClassName : CustomerInfoObjectAdapter
 *@Description : 使用对象适配器
 *@Author : NikolaZhang
 *@Date : 【2018/12/2 21:24】
 *@Version : 1.0.0
 *************************************************/

public class CustomerInfoObjectAdapter implements CompanyHereI {
    private CompanyRemoteI companyRemoteI;

    @Override
    public String getCustomerName() {
        return this.companyRemoteI.getCustomerBaseInfo().get("name");
    }

    @Override
    public String getCustomerPhone() {
        return this.companyRemoteI.getCustomerBaseInfo().get("phone");
    }

    @Override
    public String getCustomerAddress() {
        return this.companyRemoteI.getCustomerBaseInfo().get("address");
    }

    @Override
    public String getCustomerTel() {
        return this.companyRemoteI.getCustomerBaseInfo().get("tel");
    }

    public CustomerInfoObjectAdapter(CompanyRemoteI companyRemoteI){
        this.companyRemoteI = companyRemoteI;
    }
}

```

## 测试
```
package adapter;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/2 21:28】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        CompanyHereI companyHereICls = new CustomerInfoClassAdapter();
        System.out.println(companyHereICls.getCustomerName());

        CompanyHereI companyHereIObj = new CustomerInfoObjectAdapter(new CompanyRemoteImpl());
        System.out.println(companyHereIObj.getCustomerPhone());
    }
}

```

## 结果
![结果](/images/article/181202/adapterresult.png)

## uml
![uml](/images/article/181202/adapteruml.png)
