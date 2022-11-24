import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as s,f as a,a as n,e as l}from"./app.e7c9cb9e.js";const d="/images/article/29/result.png",r="/images/article/29/UML.png",c={},v=n("blockquote",null,[n("p",null,"\u4EE3\u7406\u6A21\u5F0F: \u672C\u8EAB\u4E0D\u5E72\u6D3B\uFF0C\u5E72\u6D3B\u7684\u65F6\u5019\u627E\u522B\u4EBA\u53BB\u5E72\u3002")],-1),u=l(`<h2 id="\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a> \u63A5\u53E3</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">proxy</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/************************************************
 *@ClassName : CompanyWorkI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/29 20:27\u3011
 *@Version : 1.0.0
 *************************************************/</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CompanyWorkI</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">buyMetal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">designCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package proxy;

/************************************************
 *@ClassName : CompanyA
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/29 20:27\u3011
 *@Version : 1.0.0
 *************************************************/

public class CompanyA implements CompanyWorkI {

    @Override
    public void buyMetal() {
        System.out.println(&quot;A\u516C\u53F8\u4E70\u6750\u6599&quot;);
    }

    @Override
    public void designCar() {
        System.out.println(&quot;A\u516C\u53F8\u8BBE\u8BA1\u8F66&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u7684\u8FD9\u4E2A\u867D\u7136\u4E5F\u5B9E\u73B0\u4E86 <code>CompanyWorkI</code> \u4F46\u4ED6\u5B9E\u9645\u662F\u4E0D\u5E72\u63A5\u53E3\u4E2D\u7684\u5DE5\u4F5C\u7684\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package proxy;

/************************************************
 *@ClassName : CompanyB
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/29 20:29\u3011
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
        System.out.println(&quot;dad\u516C\u53F8\u751F\u4EA7\u8F66&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package proxy;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/29 20:37\u3011
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+d+'" alt="\u8FD0\u884C\u7ED3\u679C" loading="lazy"></p><h2 id="uml" tabindex="-1"><a class="header-anchor" href="#uml" aria-hidden="true">#</a> UML</h2><p><img src="'+r+'" alt="UML" loading="lazy"></p>',12);function m(o,t){return e(),s("div",null,[v,a("more"),u])}const k=i(c,[["render",m],["__file","proxy-pattern.html.vue"]]);export{k as default};
