import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as a,a as i,e as l}from"./app-074f0c84.js";const d="/images/article/181215/res4.png",r={},v=i("blockquote",null,[i("p",null,"过滤器模式：这种模式允许开发人员使用不同的标准来过滤一组对象，通过逻辑运算以解耦的方式把它们连接起来。这种类型的设计模式属于结构型模式，它结合多个标准来获得单一标准。【菜鸟】其实就是按条件筛选一组对象出来。")],-1),t=l(`<p>我们车厂现在车型很多，现在只想筛选出来bwm的数量。</p><h2 id="定义车" tabindex="-1"><a class="header-anchor" href="#定义车" aria-hidden="true">#</a> 定义车</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package filter;

/************************************************
 *@ClassName : Car
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 17:21】
 *@Version : 1.0.0
 *************************************************/

public class Car {
    private String name;

    public String getName() {
        return name;
    }

    public Car(String name) {
        this.name = name;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h2><p>我们将所有的车作为参数，按条件筛选出来bwm.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package filter;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : CarFilter
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 17:20】
 *@Version : 1.0.0
 *************************************************/

public class CarFilter {
    private List&lt;Car&gt; list = new ArrayList&lt;&gt;();

    public List&lt;Car&gt; filterCar(List&lt;Car&gt; listCar){
        for (Car car :listCar){
            if(&quot;bwm&quot;.equals(car.getName())){
                list.add(car);
            }
        }
        return list;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package filter;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 17:20】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        List&lt;Car&gt; list = new ArrayList&lt;&gt;();
        list.add(new Car(&quot;bwm&quot;));
        list.add(new Car(&quot;benz&quot;));
        list.add(new Car(&quot;BWM&quot;));

        CarFilter carFilter = new CarFilter();
        System.out.println(&quot;符合条件的车数：&quot;+carFilter.filterCar(list).size());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+d+'" alt="结果"></p>',10);function c(u,m){return n(),s("div",null,[v,a("more"),t])}const p=e(r,[["render",c],["__file","filter-pattern.html.vue"]]);export{p as default};
