import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,f as d,a as e,e as s}from"./app-ZJr67ZWv.js";const l="/images/article/30/result3.png",r={},v=e("blockquote",null,[e("p",null,"门面模式，上级不用知道下级在干什么。下级按照流程处理，反馈给上级结果就好了。")],-1),c=s(`<h2 id="流程方法接口" tabindex="-1"><a class="header-anchor" href="#流程方法接口" aria-hidden="true">#</a> 流程方法接口</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package facade;

/************************************************
 *@ClassName : MakeCarI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:42】
 *@Version : 1.0.0
 *************************************************/

public interface MakeCarI {
    void findMetal();
    void designCar();
    void createCar();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="流程实现" tabindex="-1"><a class="header-anchor" href="#流程实现" aria-hidden="true">#</a> 流程实现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package facade;

/************************************************
 *@ClassName : MakeCarImpl
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:43】
 *@Version : 1.0.0
 *************************************************/

public class MakeCarImpl implements MakeCarI {

    @Override
    public void findMetal() {
        System.out.println(&quot;找点金属&quot;);
    }

    @Override
    public void designCar() {
        System.out.println(&quot;画个图纸&quot;);
    }

    @Override
    public void createCar() {
        System.out.println(&quot;开始生产&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用流程中的步骤" tabindex="-1"><a class="header-anchor" href="#调用流程中的步骤" aria-hidden="true">#</a> 调用流程中的步骤</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package facade;

/************************************************
 *@ClassName : MakeMethod
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:44】
 *@Version : 1.0.0
 *************************************************/

public class MakeMethod {
    private MakeCarI makeCarI = new MakeCarImpl();
    private CheckCar checkCar = new CheckCar();
    public void startMakeCar(){
        makeCarI.findMetal();
        makeCarI.designCar();
        makeCarI.createCar();
        checkCar.check();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们增加了一个检测产品的类，并在流程中调用了<code>check()</code><br> 该类如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package facade;

/************************************************
 *@ClassName : CheckCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:48】
 *@Version : 1.0.0
 *************************************************/

public class CheckCar {
    public void check(){
        System.out.println(&quot;质量检测&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package facade;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:46】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        MakeMethod makeMethod = new MakeMethod();
        makeMethod.startMakeCar();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+l+'" alt="结果"></p>',12);function u(m,t){return n(),a("div",null,[v,d("more"),c])}const h=i(r,[["render",u],["__file","11-facade.html.vue"]]);export{h as default};
