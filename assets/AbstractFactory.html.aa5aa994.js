import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as a,a as i,b as l,e as d}from"./app.4001f435.js";const r="/images/article/27/result.png",v="/images/article/27/uml.png",c={},t=i("h2",{id:"\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F","aria-hidden":"true"},"#"),l(" \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F")],-1),u=i("blockquote",null,[i("p",null,"\u62BD\u8C61\u5DE5\u5382\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u76F8\u5173\u6216\u76F8\u4E92\u4F9D\u8D56\u5BF9\u8C61\u7684\u63A5\u53E3\uFF0C\u800C\u65E0\u987B\u6307\u5B9A\u4ED6\u4EEC\u5177\u4F53\u7684\u7C7B\u3002")],-1),m=d(`<p>\u6211\u4EEC\u6709\u4E24\u4E2A\u4E0D\u540C\u7C7B\u7684\u4E1C\u897F\uFF0C\u4E00\u4E2A\u662F\u8F66\uFF0C\u4E00\u4E2A\u662F\u4EBA\uFF1B\u8F66\u5206\u5B9D\u9A6C\u8F66\u3001\u5954\u9A70\u8F66\uFF0C\u4EBA\u5206\u7537\u4EBA\u3001\u5973\u4EBA\u3002\u6211\u4EEC\u60F3\u8981\u901A\u8FC7\u4E00\u4E2A\u5DE5\u5382\u53BB\u83B7\u53D6\u751F\u6210\u7537\u4EBA\u5973\u4EBA\u5B9D\u9A6C\u5954\u9A70\u7684\u5BF9\u8C61\uFF0C\u5E76\u8C03\u7528\u5176\u4E0B\u7684\u65B9\u6CD5\u3002</p><h3 id="\u521B\u5EFA\u8F66\u4E0E\u4EBA\u7684\u63A5\u53E3-\u53CA\u5176\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8F66\u4E0E\u4EBA\u7684\u63A5\u53E3-\u53CA\u5176\u5B9E\u73B0" aria-hidden="true">#</a> \u521B\u5EFA\u8F66\u4E0E\u4EBA\u7684\u63A5\u53E3\uFF0C\u53CA\u5176\u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : Car
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/27 20:46\u3011
 *@Version : 1.0.0
 *************************************************/

public interface Car {
    void run();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : man
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/27 20:51\u3011
 *@Version : 1.0.0
 *************************************************/

public interface Man {
    void driver();
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : BenzCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/27 20:47\u3011
 *@Version : 1.0.0
 *************************************************/

public class BenzCar implements Car {
    @Override
    public void run() {
        System.out.println(&quot;\u5954\u9A70\u8F66\u8DD1\u8D77\u6765\uFF01&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : BWMCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/27 20:46\u3011
 *@Version : 1.0.0
 *************************************************/

public class BWMCar implements Car {
    @Override
    public void run() {
        System.out.println(&quot;\u5B9D\u9A6C\u8F66\u8DD1\u8D77\u6765\uFF01&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : Male
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/27 20:52\u3011
 *@Version : 1.0.0
 *************************************************/

public class Male implements Man {
    @Override
    public void driver() {
        System.out.println(&quot;\u7537\u4EBA&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : Female
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/27 20:53\u3011
 *@Version : 1.0.0
 *************************************************/

public class Female implements Man {
    @Override
    public void driver() {
        System.out.println(&quot;\u5973\u4EBA&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u83B7\u53D6\u4E0D\u540C\u79CD\u7C7B\u5B9E\u4F8B\u7684\u62BD\u8C61\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u83B7\u53D6\u4E0D\u540C\u79CD\u7C7B\u5B9E\u4F8B\u7684\u62BD\u8C61\u7C7B" aria-hidden="true">#</a> \u521B\u5EFA\u83B7\u53D6\u4E0D\u540C\u79CD\u7C7B\u5B9E\u4F8B\u7684\u62BD\u8C61\u7C7B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : AbstractFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/27 20:59\u3011
 *@Version : 1.0.0
 *************************************************/

public abstract class AbstractFactory {
    abstract Car getCar();
    abstract Man getMan();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u4E0A\u9762\u7684\u62BD\u8C61\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E0A\u9762\u7684\u62BD\u8C61\u7C7B" aria-hidden="true">#</a> \u5B9E\u73B0\u4E0A\u9762\u7684\u62BD\u8C61\u7C7B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : AbstractFactoryImplA
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/27 21:15\u3011
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : AbstractFactoryImplA
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/27 21:15\u3011
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.abstractfactory;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/27 21:03\u3011
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u5982\u4E0B\u56FE\uFF1A <img src="`+r+'" alt="\u6D4B\u8BD5\u7ED3\u679C" loading="lazy"></p><p>\u751F\u6210\u7684UML\u5982\u4E0B\uFF1A <img src="'+v+'" alt="UML" loading="lazy"></p>',17);function b(o,p){return n(),s("div",null,[t,u,a("more"),m])}const x=e(c,[["render",b],["__file","AbstractFactory.html.vue"]]);export{x as default};
