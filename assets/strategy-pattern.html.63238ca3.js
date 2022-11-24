import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as s,a as e,e as r}from"./app.4001f435.js";const l="/images/article/28/result.png",d="/images/article/28/UML.png",t={},v=e("blockquote",null,[e("p",null,"In computer programming, the strategy pattern (also known as the policy pattern) is a behavioral software design pattern that enables selecting an algorithm at runtime. [wiki]")],-1),c=r(`<h2 id="\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a> \u63A5\u53E3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package strategy;

/************************************************
 *@ClassName : CreateCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/28 21:05\u3011
 *@Version : 1.0.0
 *************************************************/

public interface CreateCarI {
    void doingSomething();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u7C7B-\u4E3E\u4E00\u4E2A\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u7C7B-\u4E3E\u4E00\u4E2A\u4F8B\u5B50" aria-hidden="true">#</a> \u5B9E\u73B0\u7C7B\uFF08\u4E3E\u4E00\u4E2A\u4F8B\u5B50\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package strategy;

/************************************************
 *@ClassName : BuyMetal
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/28 21:09\u3011
 *@Version : 1.0.0
 *************************************************/

public class BuyMetalImpl implements CreateCarI {

    @Override
    public void doingSomething() {
        System.out.println(&quot;\u8D2D\u4E70\u91D1\u5C5E\u6750\u6599\u3002&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5165\u53E3\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3\u7C7B" aria-hidden="true">#</a> \u5165\u53E3\u7C7B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package strategy;

import com.sun.org.omg.SendingContext.CodeBaseHelper;

/************************************************
 *@ClassName : StartWork
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/28 21:14\u3011
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package strategy;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/28 21:58\u3011
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+l+'" alt="\u7ED3\u679C\u56FE\u7247" loading="lazy"></p><h2 id="uml" tabindex="-1"><a class="header-anchor" href="#uml" aria-hidden="true">#</a> UML</h2><p><img src="'+d+'" alt="\u7ED3\u679C\u56FE\u7247" loading="lazy"></p>',12);function u(m,o){return n(),a("div",null,[v,s("more"),c])}const g=i(t,[["render",u],["__file","strategy-pattern.html.vue"]]);export{g as default};
