import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,f as s,a as i,e as l}from"./app-494a87a1.js";const d="/images/article/181215/res2.png",r={},v=i("blockquote",null,[i("p",null,"享元模式：主要用于减少创建对象的数量，以减少内存占用和提高性能。这种类型的设计模式属于结构型模式，它提供了减少对象数量从而改善应用所需的对象结构的方式。【菜鸟】")],-1),t=l(`<p>这个模式也比较简单。比如我们要生产相同型号，但涂装不同的宝马。我们生产了黑色宝马后，还有必要再去实例化一个宝马，再去设置它的型号吗？我们是不是直接换一下颜色就可以了？ 怎么说呢，你可以理解为直接setColor就生产了另外一辆宝马。</p><p>这里我们为了好看，还是使用工厂去生产宝马，同时呢引入一个map用于存放我们已经生产的不同类型的宝马，当我们需要更换涂装时，直接从map中取出对应的型号，涂一下就好了。</p><h2 id="宝马车长这样" tabindex="-1"><a class="header-anchor" href="#宝马车长这样" aria-hidden="true">#</a> 宝马车长这样</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package flyweight;

/************************************************
 *@ClassName : BWMCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 15:14】
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



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工厂是这样涂装的" tabindex="-1"><a class="header-anchor" href="#工厂是这样涂装的" aria-hidden="true">#</a> 工厂是这样涂装的</h2><p>map就相当于是仓库，当你发现有个对应的车型没涂色，拉过来涂一下。好了~当你没发现对应的车型，没办法，我们又不能凃空气，只能新造一款车型。造好以后，这种车型以后也是直接涂一下完事。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package flyweight;

import java.util.HashMap;
import java.util.Map;

/************************************************
 *@ClassName : CarFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 15:16】
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



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="涂涂涂" tabindex="-1"><a class="header-anchor" href="#涂涂涂" aria-hidden="true">#</a> 涂涂涂</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package flyweight;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 14:40】
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+d+'" alt="结果"></p><p>可以看到bwm1类型的车都是一个地址，这就是<code>减少创建对象的数量，以减少内存占用和提高性能</code>。</p>',12);function c(u,m){return e(),a("div",null,[v,s("more"),t])}const p=n(r,[["render",c],["__file","12-flyweight.html.vue"]]);export{p as default};
