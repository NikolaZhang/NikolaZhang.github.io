import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,f as s,a as e,e as r}from"./app-YFKytSBV.js";const d="/images/article/28/result.png",l="/images/article/28/UML.png",t={},v=e("blockquote",null,[e("p",null,"In computer programming, the strategy pattern (also known as the policy pattern) is a behavioral software design pattern that enables selecting an algorithm at runtime. [wiki]")],-1),c=r(`<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package strategy;

/************************************************
 *@ClassName : CreateCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/28 21:05】
 *@Version : 1.0.0
 *************************************************/

public interface CreateCarI {
    void doingSomething();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现类-举一个例子" tabindex="-1"><a class="header-anchor" href="#实现类-举一个例子" aria-hidden="true">#</a> 实现类（举一个例子）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package strategy;

/************************************************
 *@ClassName : BuyMetal
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/28 21:09】
 *@Version : 1.0.0
 *************************************************/

public class BuyMetalImpl implements CreateCarI {

    @Override
    public void doingSomething() {
        System.out.println(&quot;购买金属材料。&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="入口类" tabindex="-1"><a class="header-anchor" href="#入口类" aria-hidden="true">#</a> 入口类</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package strategy;

import com.sun.org.omg.SendingContext.CodeBaseHelper;

/************************************************
 *@ClassName : StartWork
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/28 21:14】
 *@Version : 1.0.0
 *************************************************/

public class StartWork {
    private CreateCarI createCarI;

    public StartWork(CreateCarI createCarI){
        this.createCarI = createCarI;
    }

    public void start(){
        createCarI.doingSomething();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package strategy;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/28 21:58】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        StartWork startWork1 = new StartWork(new BuyMetalImpl());
        startWork1.start();
        StartWork startWork2 = new StartWork(new DesignCarModelImpl());
        startWork2.start();
        StartWork startWork3 = new StartWork(new MakeCarImpl());
        startWork3.start();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+d+'" alt="结果图片"></p><h2 id="uml" tabindex="-1"><a class="header-anchor" href="#uml" aria-hidden="true">#</a> UML</h2><p><img src="'+l+'" alt="结果图片"></p>',12);function u(m,o){return n(),a("div",null,[v,s("more"),c])}const g=i(t,[["render",u],["__file","15-strategy.html.vue"]]);export{g as default};
