import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as s,a as e,e as d}from"./app.4001f435.js";const l="/images/article/30/result4.png",r={},c=e("blockquote",null,[e("p",null,"\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u53C8\u79F0\u4E3A\u5DE5\u5382\u6A21\u5F0F\uFF0C\u4E5F\u53EB\u865A\u62DF\u6784\u9020\u5668\uFF08Virtual Constructor\uFF09\u6A21\u5F0F\u6216\u8005\u591A\u6001\u5DE5\u5382\u6A21\u5F0F\uFF08Polymorphic Factory\uFF09\uFF0C\u5728\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u4E2D\uFF0C\u7236\u7C7B\u8D1F\u8D23\u5B9A\u4E49\u521B\u5EFA\u5BF9\u8C61\u7684\u516C\u5171\u63A5\u53E3\uFF0C\u800C\u5B50\u7C7B\u5219\u8D1F\u8D23\u751F\u6210\u5177\u4F53\u7684\u5BF9\u8C61\uFF0C\u8FD9\u6837\u505A\u7684\u76EE\u7684\u662F\u5C06\u7C7B\u7684\u5B9E\u4F8B\u5316\u64CD\u4F5C\u5EF6\u8FDF\u5230\u5B50\u7C7B\u4E2D\u5B8C\u6210\uFF0C\u5373\u7531\u5B50\u7C7B\u6765\u51B3\u5B9A\u7A76\u7ADF\u5E94\u8BE5\u5B9E\u4F8B\u5316\uFF08\u521B\u5EFA\uFF09\u54EA\u4E00\u4E2A\u7C7B\u3002")],-1),v=d(`<h2 id="\u5B9A\u4E49\u4E00\u7C7B\u751F\u4EA7\u8F66\u7684\u516C\u53F8\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u4E00\u7C7B\u751F\u4EA7\u8F66\u7684\u516C\u53F8\u63A5\u53E3" aria-hidden="true">#</a> \u5B9A\u4E49\u4E00\u7C7B\u751F\u4EA7\u8F66\u7684\u516C\u53F8\u63A5\u53E3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.methodfactory;

/************************************************
 *@ClassName : CreateCarI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/30 22:33\u3011
 *@Version : 1.0.0
 *************************************************/

public interface CarCompanyI {
    void buyMetal();
    void designCar();
    void createCar();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BE5\u7C7B\u516C\u53F8\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u8BE5\u7C7B\u516C\u53F8\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u8BE5\u7C7B\u516C\u53F8\u7684\u5B9E\u73B0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.methodfactory;

/************************************************
 *@ClassName : CompanyA
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/30 22:34\u3011
 *@Version : 1.0.0
 *************************************************/

public class CompanyA implements CarCompanyI{
    @Override
    public void buyMetal() {
        System.out.println(&quot;A\u516C\u53F8\u4E70\u6750\u6599&quot;);
    }

    @Override
    public void designCar() {
        System.out.println(&quot;A\u516C\u53F8\u8BBE\u8BA1\u6A21\u578B&quot;);
    }

    @Override
    public void createCar() {
        System.out.println(&quot;A\u516C\u53F8\u751F\u4EA7\u8F66&quot;);
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5DE5\u5382-\u9009\u62E9\u4F7F\u7528\u90A3\u4E2A\u516C\u53F8" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382-\u9009\u62E9\u4F7F\u7528\u90A3\u4E2A\u516C\u53F8" aria-hidden="true">#</a> \u5DE5\u5382,\u9009\u62E9\u4F7F\u7528\u90A3\u4E2A\u516C\u53F8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.methodfactory;

/************************************************
 *@ClassName : CarFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/30 22:36\u3011
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.methodfactory;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/30 22:40\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        CarFactory.getCarCompany(&quot;factory.methodfactory.CompanyB&quot;).buyMetal();
        CarFactory.getCarCompany(&quot;factory.methodfactory.CompanyA&quot;).buyMetal();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+l+'" alt="\u7ED3\u679C" loading="lazy"></p>',10);function t(u,m){return n(),a("div",null,[c,s("more"),v])}const p=i(r,[["render",t],["__file","factorypatternmethod.html.vue"]]);export{p as default};
