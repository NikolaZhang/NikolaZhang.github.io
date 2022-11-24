import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as l,a as i,e as a}from"./app.4001f435.js";const r="/images/article/181210/res.png",d={},v=i("blockquote",null,[i("p",null,"\u8FED\u4EE3\u5668\u6A21\u5F0F\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F88\u597D\u73A9\u7684\u6A21\u5F0F\u3002\u5176\u5B9E\u8FED\u4EE3\u5668\u5DF2\u7ECF\u5B58\u4E8E\u96C6\u5408\u4E2D\u4E86\u3002\u4F46\u662F\u5462\uFF0C\u6211\u4EEC\u53EF\u4EE5\u52A8\u624B\u5199\u4E00\u4E2A\u8FED\u4EE3\u5668\uFF0C\u5E76\u4E14\u5C06\u5176\u8FD0\u7528\u5728\u8FED\u4EE3\u5668\u6A21\u5F0F\u4E2D\uFF0C\u800C\u4E0D\u662F\u5728list\u4E2D\u3002")],-1),t=a(`<p>\u6211\u4EEC\u7684\u8F66\u95F4\u6BCF\u5929\u90FD\u5728\u751F\u4EA7\u8F66\uFF0C\u4F46\u662F\u751F\u4EA7\u591A\u5C11\u8F66\uFF0C\u751F\u4EA7\u7684\u8F66\u53EB\u4EC0\u4E48\u540D\u5B57\uFF0C\u6BCF\u5929\u662F\u4E0D\u662F\u8981\u8FDB\u884C\u62A5\u8868\u7EDF\u8BA1\uFF1F\u5F53\u7136\u4E86\u6211\u4EEC\u6709\u73B0\u6210\u7684Iterator\u63A5\u53E3\u3002\u4F46\u662F\uFF0C\u8BF7\u4F60\u5FD8\u8BB0\u4ED6\u3002\u6211\u4EEC\u81EA\u5DF1\u5199\u4E2A\u8FD9\u6837\u7684\u63A5\u53E3\uFF0C\u60F3\u60F3\u554A\uFF0C\u6211\u4EEC\u81EA\u5DF1\u7684\u63A5\u53E3\u60F3\u5E72\u5565\u5C31\u80FD\u5E72\u5565\u3002</p><h2 id="\u5B9A\u4E49\u4E00\u4E2A\u8FED\u4EE3\u5668\u63A5\u53E3\u53CA\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u4E00\u4E2A\u8FED\u4EE3\u5668\u63A5\u53E3\u53CA\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9A\u4E49\u4E00\u4E2A\u8FED\u4EE3\u5668\u63A5\u53E3\u53CA\u5B9E\u73B0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package iterator;

/************************************************
 *@ClassName : iterator
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/10 0010 21:04\u3011
 *@Version : 1.0.0
 *************************************************/

public interface Iterator {
    boolean hasNext();
    Object next();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B80\u4FBF\u8D77\u89C1\u6211\u4EEC\u7684\u63A5\u53E3\u5C31\u53EA\u6709\u4E24\u4E2A\u62BD\u8C61\u65B9\u6CD5\u3002\u8FD9\u5DF2\u7ECF\u8DB3\u591F\u4E86\u3002\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package iterator;


import java.util.List;

/************************************************
 *@ClassName : CarIterator
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/10 0010 21:05\u3011
 *@Version : 1.0.0
 *************************************************/

public class CarIterator implements Iterator {
    private List&lt;Car&gt; list;
    private int cnt = 0;
    @Override
    public boolean hasNext() {
        return cnt&lt;list.size()?true:false;
    }

    @Override
    public Car next() {
        return list.get(cnt++);;
    }

    public CarIterator(List&lt;Car&gt; list) {
        if(list == null){
            System.out.println(&quot;\u96C6\u5408\u672A\u5B9E\u4F8B\u5316&quot;);
            return;
        }
        this.list = list;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0\u7684\u65B9\u6CD5\u4E5F\u662F\u89C1\u4EBA\u89C1\u667A\u3002</p><h2 id="\u6211\u4EEC\u7EDF\u8BA1\u751F\u4EA7\u7684\u8F66\u662F\u8FD9\u6837\u7684" tabindex="-1"><a class="header-anchor" href="#\u6211\u4EEC\u7EDF\u8BA1\u751F\u4EA7\u7684\u8F66\u662F\u8FD9\u6837\u7684" aria-hidden="true">#</a> \u6211\u4EEC\u7EDF\u8BA1\u751F\u4EA7\u7684\u8F66\u662F\u8FD9\u6837\u7684</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package iterator;

/************************************************
 *@ClassName : Car
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/10 0010 21:08\u3011
 *@Version : 1.0.0
 *************************************************/

public interface Car {
    void addCar(String carName, String price);
    Iterator getIterator();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EDF\u8BA1\u8F66\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u9700\u8981\u8BB0\u5F55\u8F66\u7684\u540D\u5B57\u548C\u4EF7\u683C\u3002\u6BCF\u751F\u4EA7\u51FA\u6765\u4E00\u8F86\u8F66\u6211\u4EEC\u5C31\u8C03\u7528addCar\u8BB0\u5F55\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package iterator;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : CarImpl
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/10 0010 21:13\u3011
 *@Version : 1.0.0
 *************************************************/

public class CarImpl implements Car{
    private List&lt;Car&gt; list = new ArrayList&lt;&gt;();
    private String carName;
    private String price;

    @Override
    public void addCar(String carName, String price) {
        list.add(new CarImpl(carName, price));
    }

    @Override
    public Iterator getIterator() {
        return new CarIterator(list) ;
    }

    private CarImpl(String carName, String price) {
        this.carName = carName;
        this.price = price;
    }

    public CarImpl() {
    }

    public String getCarName() {
        return carName;
    }

    public String getPrice() {
        return price;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F00\u59CB\u8BB0\u5F55\u4E86" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u8BB0\u5F55\u4E86" aria-hidden="true">#</a> \u5F00\u59CB\u8BB0\u5F55\u4E86</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package iterator;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/10 0010 21:21\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        Car car = new CarImpl();
        car.addCar(&quot;\u5B9D\u9A6C&quot;, &quot;1000000&quot;);
        car.addCar(&quot;\u5954\u9A70&quot;, &quot;2000000&quot;);

        // \u7ED9\u8001\u677F\u6C47\u62A5
        Iterator iterator = car.getIterator();
        while(iterator.hasNext()){
            CarImpl car1 = (CarImpl) iterator.next();
            System.out.println(car1.getCarName()+&quot;\u4EF7\u683C\uFF1A&quot;+car1.getPrice());
        }

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+r+'" alt="\u7ED3\u679C" loading="lazy"></p>',14);function c(u,m){return n(),s("div",null,[v,l("more"),t])}const p=e(d,[["render",c],["__file","iterator-pattern.html.vue"]]);export{p as default};
