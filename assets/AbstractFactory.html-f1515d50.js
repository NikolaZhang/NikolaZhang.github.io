import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as a,a as i,b as d,e as l}from"./app-cdab0746.js";const r="/images/article/27/result.png",v="/images/article/27/uml.png",c={},t=i("h2",{id:"抽象工厂模式",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#抽象工厂模式","aria-hidden":"true"},"#"),d(" 抽象工厂模式")],-1),u=i("blockquote",null,[i("p",null,"抽象工厂提供了一系列相关或相互依赖对象的接口，而无须指定他们具体的类。")],-1),m=l(`<p>我们有两个不同类的东西，一个是车，一个是人；车分宝马车、奔驰车，人分男人、女人。我们想要通过一个工厂去获取生成男人女人宝马奔驰的对象，并调用其下的方法。</p><h3 id="创建车与人的接口-及其实现" tabindex="-1"><a class="header-anchor" href="#创建车与人的接口-及其实现" aria-hidden="true">#</a> 创建车与人的接口，及其实现</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : Car
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:46】
 *@Version : 1.0.0
 *************************************************/

public interface Car {
    void run();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : man
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:51】
 *@Version : 1.0.0
 *************************************************/

public interface Man {
    void driver();
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : BenzCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:47】
 *@Version : 1.0.0
 *************************************************/

public class BenzCar implements Car {
    @Override
    public void run() {
        System.out.println(&quot;奔驰车跑起来！&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : BWMCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:46】
 *@Version : 1.0.0
 *************************************************/

public class BWMCar implements Car {
    @Override
    public void run() {
        System.out.println(&quot;宝马车跑起来！&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : Male
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:52】
 *@Version : 1.0.0
 *************************************************/

public class Male implements Man {
    @Override
    public void driver() {
        System.out.println(&quot;男人&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : Female
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:53】
 *@Version : 1.0.0
 *************************************************/

public class Female implements Man {
    @Override
    public void driver() {
        System.out.println(&quot;女人&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建获取不同种类实例的抽象类" tabindex="-1"><a class="header-anchor" href="#创建获取不同种类实例的抽象类" aria-hidden="true">#</a> 创建获取不同种类实例的抽象类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : AbstractFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 20:59】
 *@Version : 1.0.0
 *************************************************/

public abstract class AbstractFactory {
    abstract Car getCar();
    abstract Man getMan();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现上面的抽象类" tabindex="-1"><a class="header-anchor" href="#实现上面的抽象类" aria-hidden="true">#</a> 实现上面的抽象类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : AbstractFactoryImplA
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 21:15】
 *@Version : 1.0.0
 *************************************************/

public class AbstractFactoryImplA extends AbstractFactory {
    @Override
    Car getCar() {
        return new BenzCar();
    }

    @Override
    Man getMan() {
        return new Male();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : AbstractFactoryImplA
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 21:15】
 *@Version : 1.0.0
 *************************************************/

public class AbstractFactoryImplB extends AbstractFactory {
    @Override
    Car getCar() {
        return new BWMCar();
    }

    @Override
    Man getMan() {
        return new Female();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/27 21:03】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        AbstractFactory abstractFactoryA = new AbstractFactoryImplA();
        abstractFactoryA.getCar().run();
        abstractFactoryA.getMan().driver();

        AbstractFactory abstractFactoryB = new AbstractFactoryImplB();
        abstractFactoryB.getCar().run();
        abstractFactoryB.getMan().driver();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下图： <img src="`+r+'" alt="测试结果"></p><p>生成的UML如下： <img src="'+v+'" alt="UML"></p>',17);function b(o,p){return n(),s("div",null,[t,u,a("more"),m])}const x=e(c,[["render",b],["__file","AbstractFactory.html.vue"]]);export{x as default};
