import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as l,a as i,e as a}from"./app-2985c148.js";const r="/images/article/181210/res.png",d={},v=i("blockquote",null,[i("p",null,"迭代器模式，这是一个很好玩的模式。其实迭代器已经存于集合中了。但是呢，我们可以动手写一个迭代器，并且将其运用在迭代器模式中，而不是在list中。")],-1),t=a(`<p>我们的车间每天都在生产车，但是生产多少车，生产的车叫什么名字，每天是不是要进行报表统计？当然了我们有现成的Iterator接口。但是，请你忘记他。我们自己写个这样的接口，想想啊，我们自己的接口想干啥就能干啥。</p><h2 id="定义一个迭代器接口及实现" tabindex="-1"><a class="header-anchor" href="#定义一个迭代器接口及实现" aria-hidden="true">#</a> 定义一个迭代器接口及实现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package iterator;

/************************************************
 *@ClassName : iterator
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/10 0010 21:04】
 *@Version : 1.0.0
 *************************************************/

public interface Iterator {
    boolean hasNext();
    Object next();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简便起见我们的接口就只有两个抽象方法。这已经足够了。实现如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package iterator;


import java.util.List;

/************************************************
 *@ClassName : CarIterator
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/10 0010 21:05】
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
            System.out.println(&quot;集合未实例化&quot;);
            return;
        }
        this.list = list;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现的方法也是见人见智。</p><h2 id="我们统计生产的车是这样的" tabindex="-1"><a class="header-anchor" href="#我们统计生产的车是这样的" aria-hidden="true">#</a> 我们统计生产的车是这样的</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package iterator;

/************************************************
 *@ClassName : Car
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/10 0010 21:08】
 *@Version : 1.0.0
 *************************************************/

public interface Car {
    void addCar(String carName, String price);
    Iterator getIterator();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>统计车的时候，我们需要记录车的名字和价格。每生产出来一辆车我们就调用addCar记录。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package iterator;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : CarImpl
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/10 0010 21:13】
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开始记录了" tabindex="-1"><a class="header-anchor" href="#开始记录了" aria-hidden="true">#</a> 开始记录了</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package iterator;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/10 0010 21:21】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        Car car = new CarImpl();
        car.addCar(&quot;宝马&quot;, &quot;1000000&quot;);
        car.addCar(&quot;奔驰&quot;, &quot;2000000&quot;);

        // 给老板汇报
        Iterator iterator = car.getIterator();
        while(iterator.hasNext()){
            CarImpl car1 = (CarImpl) iterator.next();
            System.out.println(car1.getCarName()+&quot;价格：&quot;+car1.getPrice());
        }

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+r+'" alt="结果"></p>',14);function c(u,m){return n(),s("div",null,[v,l("more"),t])}const p=e(d,[["render",c],["__file","16-iterator.html.vue"]]);export{p as default};
