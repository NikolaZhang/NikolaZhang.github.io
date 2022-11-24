import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as l,a as i,e as a}from"./app.4001f435.js";const d="/images/article/181215/res4.png",r={},v=i("blockquote",null,[i("p",null,"\u8FC7\u6EE4\u5668\u6A21\u5F0F\uFF1A\u8FD9\u79CD\u6A21\u5F0F\u5141\u8BB8\u5F00\u53D1\u4EBA\u5458\u4F7F\u7528\u4E0D\u540C\u7684\u6807\u51C6\u6765\u8FC7\u6EE4\u4E00\u7EC4\u5BF9\u8C61\uFF0C\u901A\u8FC7\u903B\u8F91\u8FD0\u7B97\u4EE5\u89E3\u8026\u7684\u65B9\u5F0F\u628A\u5B83\u4EEC\u8FDE\u63A5\u8D77\u6765\u3002\u8FD9\u79CD\u7C7B\u578B\u7684\u8BBE\u8BA1\u6A21\u5F0F\u5C5E\u4E8E\u7ED3\u6784\u578B\u6A21\u5F0F\uFF0C\u5B83\u7ED3\u5408\u591A\u4E2A\u6807\u51C6\u6765\u83B7\u5F97\u5355\u4E00\u6807\u51C6\u3002\u3010\u83DC\u9E1F\u3011\u5176\u5B9E\u5C31\u662F\u6309\u6761\u4EF6\u7B5B\u9009\u4E00\u7EC4\u5BF9\u8C61\u51FA\u6765\u3002")],-1),t=a(`<p>\u6211\u4EEC\u8F66\u5382\u73B0\u5728\u8F66\u578B\u5F88\u591A\uFF0C\u73B0\u5728\u53EA\u60F3\u7B5B\u9009\u51FA\u6765bwm\u7684\u6570\u91CF\u3002</p><h2 id="\u5B9A\u4E49\u8F66" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u8F66" aria-hidden="true">#</a> \u5B9A\u4E49\u8F66</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package filter;

/************************************************
 *@ClassName : Car
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 17:21\u3011
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u8FC7\u6EE4\u5668</h2><p>\u6211\u4EEC\u5C06\u6240\u6709\u7684\u8F66\u4F5C\u4E3A\u53C2\u6570\uFF0C\u6309\u6761\u4EF6\u7B5B\u9009\u51FA\u6765bwm.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package filter;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : CarFilter
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 17:20\u3011
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package filter;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 17:20\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        List&lt;Car&gt; list = new ArrayList&lt;&gt;();
        list.add(new Car(&quot;bwm&quot;));
        list.add(new Car(&quot;benz&quot;));
        list.add(new Car(&quot;BWM&quot;));

        CarFilter carFilter = new CarFilter();
        System.out.println(&quot;\u7B26\u5408\u6761\u4EF6\u7684\u8F66\u6570\uFF1A&quot;+carFilter.filterCar(list).size());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+d+'" alt="\u7ED3\u679C" loading="lazy"></p>',10);function c(u,m){return n(),s("div",null,[v,l("more"),t])}const p=e(r,[["render",c],["__file","filter-pattern.html.vue"]]);export{p as default};
