import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,f as s,a as i,e as l}from"./app.e7c9cb9e.js";const d="/images/article/181215/res2.png",r={},v=i("blockquote",null,[i("p",null,"\u4EAB\u5143\u6A21\u5F0F\uFF1A\u4E3B\u8981\u7528\u4E8E\u51CF\u5C11\u521B\u5EFA\u5BF9\u8C61\u7684\u6570\u91CF\uFF0C\u4EE5\u51CF\u5C11\u5185\u5B58\u5360\u7528\u548C\u63D0\u9AD8\u6027\u80FD\u3002\u8FD9\u79CD\u7C7B\u578B\u7684\u8BBE\u8BA1\u6A21\u5F0F\u5C5E\u4E8E\u7ED3\u6784\u578B\u6A21\u5F0F\uFF0C\u5B83\u63D0\u4F9B\u4E86\u51CF\u5C11\u5BF9\u8C61\u6570\u91CF\u4ECE\u800C\u6539\u5584\u5E94\u7528\u6240\u9700\u7684\u5BF9\u8C61\u7ED3\u6784\u7684\u65B9\u5F0F\u3002\u3010\u83DC\u9E1F\u3011")],-1),t=l(`<p>\u8FD9\u4E2A\u6A21\u5F0F\u4E5F\u6BD4\u8F83\u7B80\u5355\u3002\u6BD4\u5982\u6211\u4EEC\u8981\u751F\u4EA7\u76F8\u540C\u578B\u53F7\uFF0C\u4F46\u6D82\u88C5\u4E0D\u540C\u7684\u5B9D\u9A6C\u3002\u6211\u4EEC\u751F\u4EA7\u4E86\u9ED1\u8272\u5B9D\u9A6C\u540E\uFF0C\u8FD8\u6709\u5FC5\u8981\u518D\u53BB\u5B9E\u4F8B\u5316\u4E00\u4E2A\u5B9D\u9A6C\uFF0C\u518D\u53BB\u8BBE\u7F6E\u5B83\u7684\u578B\u53F7\u5417\uFF1F\u6211\u4EEC\u662F\u4E0D\u662F\u76F4\u63A5\u6362\u4E00\u4E0B\u989C\u8272\u5C31\u53EF\u4EE5\u4E86\uFF1F \u600E\u4E48\u8BF4\u5462\uFF0C\u4F60\u53EF\u4EE5\u7406\u89E3\u4E3A\u76F4\u63A5setColor\u5C31\u751F\u4EA7\u4E86\u53E6\u5916\u4E00\u8F86\u5B9D\u9A6C\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u4E3A\u4E86\u597D\u770B\uFF0C\u8FD8\u662F\u4F7F\u7528\u5DE5\u5382\u53BB\u751F\u4EA7\u5B9D\u9A6C\uFF0C\u540C\u65F6\u5462\u5F15\u5165\u4E00\u4E2Amap\u7528\u4E8E\u5B58\u653E\u6211\u4EEC\u5DF2\u7ECF\u751F\u4EA7\u7684\u4E0D\u540C\u7C7B\u578B\u7684\u5B9D\u9A6C\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u66F4\u6362\u6D82\u88C5\u65F6\uFF0C\u76F4\u63A5\u4ECEmap\u4E2D\u53D6\u51FA\u5BF9\u5E94\u7684\u578B\u53F7\uFF0C\u6D82\u4E00\u4E0B\u5C31\u597D\u4E86\u3002</p><h2 id="\u5B9D\u9A6C\u8F66\u957F\u8FD9\u6837" tabindex="-1"><a class="header-anchor" href="#\u5B9D\u9A6C\u8F66\u957F\u8FD9\u6837" aria-hidden="true">#</a> \u5B9D\u9A6C\u8F66\u957F\u8FD9\u6837</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package flyweight;

/************************************************
 *@ClassName : BWMCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 15:14\u3011
 *@Version : 1.0.0
 *************************************************/

public class BWMCar {
    private String name;
    private String color;

    public BWMCar(String name, String color) {
        this.name = name;
        this.color = color;
    }
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5DE5\u5382\u662F\u8FD9\u6837\u6D82\u88C5\u7684" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382\u662F\u8FD9\u6837\u6D82\u88C5\u7684" aria-hidden="true">#</a> \u5DE5\u5382\u662F\u8FD9\u6837\u6D82\u88C5\u7684</h2><p>map\u5C31\u76F8\u5F53\u4E8E\u662F\u4ED3\u5E93\uFF0C\u5F53\u4F60\u53D1\u73B0\u6709\u4E2A\u5BF9\u5E94\u7684\u8F66\u578B\u6CA1\u6D82\u8272\uFF0C\u62C9\u8FC7\u6765\u6D82\u4E00\u4E0B\u3002\u597D\u4E86~\u5F53\u4F60\u6CA1\u53D1\u73B0\u5BF9\u5E94\u7684\u8F66\u578B\uFF0C\u6CA1\u529E\u6CD5\uFF0C\u6211\u4EEC\u53C8\u4E0D\u80FD\u51C3\u7A7A\u6C14\uFF0C\u53EA\u80FD\u65B0\u9020\u4E00\u6B3E\u8F66\u578B\u3002\u9020\u597D\u4EE5\u540E\uFF0C\u8FD9\u79CD\u8F66\u578B\u4EE5\u540E\u4E5F\u662F\u76F4\u63A5\u6D82\u4E00\u4E0B\u5B8C\u4E8B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package flyweight;

import java.util.HashMap;
import java.util.Map;

/************************************************
 *@ClassName : CarFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 15:16\u3011
 *@Version : 1.0.0
 *************************************************/

public class CarFactory {
    private static Map&lt;String, BWMCar&gt; bwmCarMap = new HashMap&lt;&gt;();

    public static BWMCar getInstance(String name, String color){
        BWMCar bwmCar = bwmCarMap.get(name);
        if(bwmCar==null){
            bwmCar = new BWMCar(name, color);
            bwmCarMap.put(name, bwmCar);
        }
        return bwmCar;
    }
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D82\u6D82\u6D82" tabindex="-1"><a class="header-anchor" href="#\u6D82\u6D82\u6D82" aria-hidden="true">#</a> \u6D82\u6D82\u6D82</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package flyweight;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 14:40\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        System.out.println(CarFactory.getInstance(&quot;bwm1&quot;,&quot;black&quot;));
        System.out.println(CarFactory.getInstance(&quot;bwm1&quot;,&quot;grey&quot;));
        System.out.println(CarFactory.getInstance(&quot;bwm2&quot;,&quot;grey&quot;));
        System.out.println(CarFactory.getInstance(&quot;bwm1&quot;,&quot;blue&quot;));
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+d+'" alt="\u7ED3\u679C" loading="lazy"></p><p>\u53EF\u4EE5\u770B\u5230bwm1\u7C7B\u578B\u7684\u8F66\u90FD\u662F\u4E00\u4E2A\u5730\u5740\uFF0C\u8FD9\u5C31\u662F<code>\u51CF\u5C11\u521B\u5EFA\u5BF9\u8C61\u7684\u6570\u91CF\uFF0C\u4EE5\u51CF\u5C11\u5185\u5B58\u5360\u7528\u548C\u63D0\u9AD8\u6027\u80FD</code>\u3002</p>',12);function c(u,m){return e(),a("div",null,[v,s("more"),t])}const p=n(r,[["render",c],["__file","flyweight-pattern.html.vue"]]);export{p as default};
