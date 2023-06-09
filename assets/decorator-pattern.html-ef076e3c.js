import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as d,f as s,a as e,e as l}from"./app-96e0e0d3.js";const a="/images/article/181209/res2.png",r={},v=e("blockquote",null,[e("p",null,"装饰器模式，顾名思义就是装。人靠衣装，马靠鞍。天生一副臭皮囊，穿金戴银之后，就显得与众不同于。装饰器模式在不改变原来类结构的基础上，对原来的类进行了扩展。并且这是一种弱耦合形式。")],-1),c=l(`<p>当我们生产一辆车的时候一开始，所有的车都是一副架子。但是加上不同的零件就是不同的车。</p><h2 id="天生一副臭皮囊" tabindex="-1"><a class="header-anchor" href="#天生一副臭皮囊" aria-hidden="true">#</a> 天生一副臭皮囊</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package decorator;

/************************************************
 *@ClassName : CarModel
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 21:15】
 *@Version : 1.0.0
 *************************************************/

public abstract class CarModel {
    public abstract void look();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package decorator;

/************************************************
 *@ClassName : CarModel
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 21:15】
 *@Version : 1.0.0
 *************************************************/

public class BWMCarModel extends CarModel {
    @Override
    public void look() {
        System.out.println(&quot;铁架子&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="人靠衣装-车靠涂装" tabindex="-1"><a class="header-anchor" href="#人靠衣装-车靠涂装" aria-hidden="true">#</a> 人靠衣装，车靠涂装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package decorator;

/************************************************
 *@ClassName : ModelDecoorator
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 21:17】
 *@Version : 1.0.0
 *************************************************/

public abstract class ModelDecoorator {
    protected CarModel carModel;
    public abstract void look();

    public ModelDecoorator(CarModel carModel) {
        this.carModel = carModel;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package decorator;

/************************************************
 *@ClassName : BWMDecorator
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 21:19】
 *@Version : 1.0.0
 *************************************************/

public class BWMDecorator extends ModelDecoorator {

    public BWMDecorator(CarModel carModel) {
        super(carModel);
    }

    @Override
    public void look() {
        System.out.println(&quot;把原来的车拿出来。。。。&quot;);
        carModel.look();
        System.out.println(&quot;涂上炫酷喷漆&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="亮个相" tabindex="-1"><a class="header-anchor" href="#亮个相" aria-hidden="true">#</a> 亮个相</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package decorator;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 21:25】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        ModelDecoorator modelDecoorator = new BWMDecorator(new BWMCarModel());
        modelDecoorator.look();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="你看到了啥" tabindex="-1"><a class="header-anchor" href="#你看到了啥" aria-hidden="true">#</a> 你看到了啥</h2><p><img src="`+a+'" alt="结果"></p>',11);function o(u,t){return n(),d("div",null,[v,s("more"),c])}const p=i(r,[["render",o],["__file","decorator-pattern.html.vue"]]);export{p as default};
