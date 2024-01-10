import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as l,f as d,a as e,b as n,e as a}from"./app-2985c148.js";const r="/assets/image-430ed8b8.png",t="/images/article/181202/adapterresult.png",v="/images/article/181202/adapteruml.png",u={},m=e("blockquote",null,[e("p",null,[e("code",null,"Adapter"),n("，可以充当两个类之间的媒介，它可以转换一个类的接口，这样就可以被另外一个类使用，这使得具有不兼容接口的类能够协同使用。"),e("br"),e("code",null,"Adapter"),n("模式实现为客户端所知的接口，并且为客户端提供对不为其所知的类实例的访问。"),e("code",null,"Adapter"),n("对象可以在不知道实现该接口的类的情况下，提供该接口的功能。")])],-1),c=e("p",null,[e("img",{src:r,alt:"Alt text"})],-1),o=a(`<p>(⊙o⊙)…，我从现在开始以讲故事的形式来说模式，虽然也是看着设计模式之禅那本书学习的，但还是照猫画虎，做做笔记，说说我的理解。</p><h2 id="不同的客户信息封装" tabindex="-1"><a class="header-anchor" href="#不同的客户信息封装" aria-hidden="true">#</a> 不同的客户信息封装</h2><p>现在我们的汽车公司已经足够强大，要兼并其他公司。其他公司要把他们的客户信息给我们，但是他们的客户信息和我们的客户信息类封装有所不同。 如下：</p><ul><li><p>我们的公司：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package adapter;

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>他们的公司：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package adapter;

import java.util.Map;

/************************************************
 *@ClassName : CompanyRemoteI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/2 21:10】
 *@Version : 1.0.0
 *************************************************/

public interface CompanyRemoteI {
    Map&lt;String, String&gt; getCustomerBaseInfo();
    Map&lt;String, String&gt; getCustomerHomeInfo();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>他们公司的客户信息实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package adapter;

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
    public Map&lt;String, String&gt; getCustomerBaseInfo() {
        Map&lt;String, String&gt; map = new HashMap();
        map.put(&quot;name&quot;, &quot;张旭&quot;);
        map.put(&quot;phone&quot;, &quot;17812345678&quot;);
        return map;
    }

    @Override
    public Map&lt;String, String&gt; getCustomerHomeInfo() {
        Map&lt;String, String&gt; map = new HashMap();
        map.put(&quot;name&quot;, &quot;张旭&quot;);
        map.put(&quot;tel&quot;, &quot;123456&quot;);
        map.put(&quot;address&quot;, &quot;上海市静安区&quot;);
        return map;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="我能怎么办-当然转换了" tabindex="-1"><a class="header-anchor" href="#我能怎么办-当然转换了" aria-hidden="true">#</a> 我能怎么办，当然转换了~</h2><p>我们要想从他们公司把客户信息提取出来，肯定需要定义一个类，这个类既能从他们公司取值，又能把取到的值赋值给我们公司的客户类。 这个类的写法就见仁见智了，设计模式上将这个类就是适配器。又分为类适配器和对象适配器。 类适配器如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package adapter;

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
        return super.getCustomerBaseInfo().get(&quot;name&quot;);
    }

    @Override
    public String getCustomerPhone() {
        return super.getCustomerBaseInfo().get(&quot;phone&quot;);
    }

    @Override
    public String getCustomerAddress() {
        return super.getCustomerHomeInfo().get(&quot;address&quot;);
    }

    @Override
    public String getCustomerTel() {
        return super.getCustomerHomeInfo().get(&quot;tel&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象适配器和类适配器有一点不同，信息目标的获取方式是继承还是依赖。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package adapter;

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
        return this.companyRemoteI.getCustomerBaseInfo().get(&quot;name&quot;);
    }

    @Override
    public String getCustomerPhone() {
        return this.companyRemoteI.getCustomerBaseInfo().get(&quot;phone&quot;);
    }

    @Override
    public String getCustomerAddress() {
        return this.companyRemoteI.getCustomerBaseInfo().get(&quot;address&quot;);
    }

    @Override
    public String getCustomerTel() {
        return this.companyRemoteI.getCustomerBaseInfo().get(&quot;tel&quot;);
    }

    public CustomerInfoObjectAdapter(CompanyRemoteI companyRemoteI){
        this.companyRemoteI = companyRemoteI;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package adapter;

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+t+'" alt="结果"></p><h2 id="uml" tabindex="-1"><a class="header-anchor" href="#uml" aria-hidden="true">#</a> uml</h2><p><img src="'+v+'" alt="uml"></p>',15);function b(p,g){return s(),l("div",null,[m,c,d("more"),o])}const I=i(u,[["render",b],["__file","7-adapter.html.vue"]]);export{I as default};
