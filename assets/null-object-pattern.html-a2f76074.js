import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as l,a as i,e as a}from"./app-f13d4797.js";const d="/images/article/181215/res5.png",r={},v=i("blockquote",null,[i("p",null,"空对象模式：一个空对象取代 NULL 对象实例的检查。Null 对象不是检查空值，而是反应一个不做任何动作的关系。这样的 Null 对象也可以在数据不可用的时候提供默认的行为。【菜鸟】")],-1),c=a(`<p>当我们的系统中找不到某种车型的时候，直接返回对象肯定是个null。这时候如果你不做什么判断处理直接调用对象中的方法肯定是会不报错的。退一步说直接返回为空，是否有点暴力，太不人性化了。</p><h2 id="抽象对象及对应的继承类。" tabindex="-1"><a class="header-anchor" href="#抽象对象及对应的继承类。" aria-hidden="true">#</a> 抽象对象及对应的继承类。</h2><p>这里我们搞了一个抽象对象，并用一个RealCar和NullCar继承它。当我们从工厂类中获取到对应的Car时就返回RealCar，获取不到就返回NullCar。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package nullobject;

import util.StringUtil;

/************************************************
 *@ClassName : AbstractCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 19:30】
 *@Version : 1.0.0
 *************************************************/

public abstract class AbstractCar {
    protected String name;
    public boolean isNull(){
        if(StringUtil.isEmpty(this.name)){
            return true;
        }else{
            return false;
        }
    }
    public abstract String getName();
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package nullobject;

/************************************************
 *@ClassName : AbstractCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 19:30】
 *@Version : 1.0.0
 *************************************************/

public class NullCar extends AbstractCar{
    @Override
    public String getName() {
        return &quot;dont have such car!&quot;;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package nullobject;

/************************************************
 *@ClassName : AbstractCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 19:30】
 *@Version : 1.0.0
 *************************************************/

public class RealCar extends AbstractCar {
    @Override
    public String getName() {
        return &quot;存在这辆车&quot;;
    }

    public RealCar(String name) {
        super.name = name;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工厂" tabindex="-1"><a class="header-anchor" href="#工厂" aria-hidden="true">#</a> 工厂</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package nullobject;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/************************************************
 *@ClassName : CarFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 19:39】
 *@Version : 1.0.0
 *************************************************/

public class CarFactory {
    private static List&lt;String&gt; cars = new ArrayList&lt;&gt;();
    static {
        cars.add(&quot;bwm&quot;);
        cars.add(&quot;benz&quot;);
    }
    public static AbstractCar getCar(String name){
        Iterator&lt;String&gt; iterator = cars.iterator();
        while (iterator.hasNext()){
            if(name.equals(iterator.next())) {
                return new RealCar(name);
            }
        }
        return new NullCar();
    }
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package nullobject;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 17:34】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        System.out.println(CarFactory.getCar(&quot;bwm&quot;).getName());
        System.out.println(CarFactory.getCar(&quot;asdfsa&quot;).getName());
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+d+'" alt="结果"></p>',12);function t(u,m){return n(),s("div",null,[v,l("more"),c])}const p=e(r,[["render",t],["__file","null-object-pattern.html.vue"]]);export{p as default};
