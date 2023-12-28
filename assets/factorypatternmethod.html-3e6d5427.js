import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as s,a as e,e as d}from"./app-633915bb.js";const l="/images/article/30/result4.png",r={},c=e("blockquote",null,[e("p",null,"工厂方法模式又称为工厂模式，也叫虚拟构造器（Virtual Constructor）模式或者多态工厂模式（Polymorphic Factory），在工厂方法模式中，父类负责定义创建对象的公共接口，而子类则负责生成具体的对象，这样做的目的是将类的实例化操作延迟到子类中完成，即由子类来决定究竟应该实例化（创建）哪一个类。")],-1),v=d(`<h2 id="定义一类生产车的公司接口" tabindex="-1"><a class="header-anchor" href="#定义一类生产车的公司接口" aria-hidden="true">#</a> 定义一类生产车的公司接口</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.methodfactory;

/************************************************
 *@ClassName : CreateCarI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 22:33】
 *@Version : 1.0.0
 *************************************************/

public interface CarCompanyI {
    void buyMetal();
    void designCar();
    void createCar();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="该类公司的实现" tabindex="-1"><a class="header-anchor" href="#该类公司的实现" aria-hidden="true">#</a> 该类公司的实现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.methodfactory;

/************************************************
 *@ClassName : CompanyA
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 22:34】
 *@Version : 1.0.0
 *************************************************/

public class CompanyA implements CarCompanyI{
    @Override
    public void buyMetal() {
        System.out.println(&quot;A公司买材料&quot;);
    }

    @Override
    public void designCar() {
        System.out.println(&quot;A公司设计模型&quot;);
    }

    @Override
    public void createCar() {
        System.out.println(&quot;A公司生产车&quot;);
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工厂-选择使用那个公司" tabindex="-1"><a class="header-anchor" href="#工厂-选择使用那个公司" aria-hidden="true">#</a> 工厂,选择使用那个公司</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.methodfactory;

/************************************************
 *@ClassName : CarFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 22:36】
 *@Version : 1.0.0
 *************************************************/

public class CarFactory {
    public static CarCompanyI getCarCompany(String classname)  {
        CarCompanyI interfaces = null;
        try {
            interfaces = (CarCompanyI) Class.forName(classname).newInstance();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return interfaces;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.methodfactory;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 22:40】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        CarFactory.getCarCompany(&quot;factory.methodfactory.CompanyB&quot;).buyMetal();
        CarFactory.getCarCompany(&quot;factory.methodfactory.CompanyA&quot;).buyMetal();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+l+'" alt="结果"></p>',10);function t(u,m){return n(),a("div",null,[c,s("more"),v])}const p=i(r,[["render",t],["__file","factorypatternmethod.html.vue"]]);export{p as default};
