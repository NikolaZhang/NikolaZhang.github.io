import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as s,a as e,e as d}from"./app.e7c9cb9e.js";const l="/images/article/30/result3.png",r={},v=e("blockquote",null,[e("p",null,"\u95E8\u9762\u6A21\u5F0F\uFF0C\u4E0A\u7EA7\u4E0D\u7528\u77E5\u9053\u4E0B\u7EA7\u5728\u5E72\u4EC0\u4E48\u3002\u4E0B\u7EA7\u6309\u7167\u6D41\u7A0B\u5904\u7406\uFF0C\u53CD\u9988\u7ED9\u4E0A\u7EA7\u7ED3\u679C\u5C31\u597D\u4E86\u3002")],-1),c=d(`<h2 id="\u6D41\u7A0B\u65B9\u6CD5\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u65B9\u6CD5\u63A5\u53E3" aria-hidden="true">#</a> \u6D41\u7A0B\u65B9\u6CD5\u63A5\u53E3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package facade;

/************************************************
 *@ClassName : MakeCarI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/30 21:42\u3011
 *@Version : 1.0.0
 *************************************************/

public interface MakeCarI {
    void findMetal();
    void designCar();
    void createCar();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D41\u7A0B\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u5B9E\u73B0" aria-hidden="true">#</a> \u6D41\u7A0B\u5B9E\u73B0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package facade;

/************************************************
 *@ClassName : MakeCarImpl
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/30 21:43\u3011
 *@Version : 1.0.0
 *************************************************/

public class MakeCarImpl implements MakeCarI {

    @Override
    public void findMetal() {
        System.out.println(&quot;\u627E\u70B9\u91D1\u5C5E&quot;);
    }

    @Override
    public void designCar() {
        System.out.println(&quot;\u753B\u4E2A\u56FE\u7EB8&quot;);
    }

    @Override
    public void createCar() {
        System.out.println(&quot;\u5F00\u59CB\u751F\u4EA7&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8C03\u7528\u6D41\u7A0B\u4E2D\u7684\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u6D41\u7A0B\u4E2D\u7684\u6B65\u9AA4" aria-hidden="true">#</a> \u8C03\u7528\u6D41\u7A0B\u4E2D\u7684\u6B65\u9AA4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package facade;

/************************************************
 *@ClassName : MakeMethod
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/30 21:44\u3011
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u589E\u52A0\u4E86\u4E00\u4E2A\u68C0\u6D4B\u4EA7\u54C1\u7684\u7C7B\uFF0C\u5E76\u5728\u6D41\u7A0B\u4E2D\u8C03\u7528\u4E86<code>check()</code> \u8BE5\u7C7B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package facade;

/************************************************
 *@ClassName : CheckCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/30 21:48\u3011
 *@Version : 1.0.0
 *************************************************/

public class CheckCar {
    public void check(){
        System.out.println(&quot;\u8D28\u91CF\u68C0\u6D4B&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package facade;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/30 21:46\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        MakeMethod makeMethod = new MakeMethod();
        makeMethod.startMakeCar();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+l+'" alt="\u7ED3\u679C" loading="lazy"></p>',12);function u(m,t){return n(),a("div",null,[v,s("more"),c])}const h=i(r,[["render",u],["__file","facade-pattern.html.vue"]]);export{h as default};
