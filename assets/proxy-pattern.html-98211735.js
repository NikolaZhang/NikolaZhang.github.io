import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,f as a,a as n,e as d}from"./app-6ae140a2.js";const l="/images/article/29/result.png",r="/images/article/29/UML.png",c={},v=n("blockquote",null,[n("p",null,"代理模式: 本身不干活，干活的时候找别人去干。")],-1),u=d(`<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">proxy</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/************************************************
 *@ClassName : CompanyWorkI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 20:27】
 *@Version : 1.0.0
 *************************************************/</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CompanyWorkI</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">buyMetal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">designCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package proxy;

/************************************************
 *@ClassName : CompanyA
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 20:27】
 *@Version : 1.0.0
 *************************************************/

public class CompanyA implements CompanyWorkI {

    @Override
    public void buyMetal() {
        System.out.println(&quot;A公司买材料&quot;);
    }

    @Override
    public void designCar() {
        System.out.println(&quot;A公司设计车&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的这个虽然也实现了 <code>CompanyWorkI</code> 但他实际是不干接口中的工作的的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package proxy;

/************************************************
 *@ClassName : CompanyB
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 20:29】
 *@Version : 1.0.0
 *************************************************/

public class CompanyDad implements CompanyWorkI {
    private CompanyWorkI companyWorkI;

    public CompanyDad(CompanyWorkI companyWorkI){
        this.companyWorkI = companyWorkI;
    }
    public CompanyDad(){
        this.companyWorkI = new CompanyA();
    }

    @Override
    public void buyMetal() {
        companyWorkI.buyMetal();
    }

    @Override
    public void designCar() {
        companyWorkI.designCar();
    }

    public void makeCar(){
        System.out.println(&quot;dad公司生产车&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package proxy;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 20:37】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        CompanyDad companyDad = new CompanyDad();
        companyDad.buyMetal();
        companyDad.designCar();
        companyDad.makeCar();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+l+'" alt="运行结果"></p><h2 id="uml" tabindex="-1"><a class="header-anchor" href="#uml" aria-hidden="true">#</a> UML</h2><p><img src="'+r+'" alt="UML"></p>',12);function m(o,t){return e(),s("div",null,[v,a("more"),u])}const k=i(c,[["render",m],["__file","proxy-pattern.html.vue"]]);export{k as default};
