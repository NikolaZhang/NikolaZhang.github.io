import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,f as a,a as n,e as l}from"./app-074f0c84.js";const d="/images/article/30/result.png",t={},r=n("blockquote",null,[n("p",null,"多例模式，即多个单例，并不是简单的new new new，算是个极端，不能完全否定吧。")],-1),v=l(`<h2 id="多例模型" tabindex="-1"><a class="header-anchor" href="#多例模型" aria-hidden="true">#</a> 多例模型</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package multiton;

import java.util.HashMap;
import java.util.Map;

/************************************************
 *@ClassName : multiton
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:07】
 *@Version : 1.0.0
 *************************************************/

public class BranchCompany {
    private static Map&lt;String, BranchCompany&gt; map = new HashMap&lt;&gt;();
    private String info;
    static {
        // 预先设置两个分公司
        BranchCompany bjCom = new BranchCompany();
        bjCom.setInfo(&quot;这是北京的公司&quot;);
        System.out.println(&quot;北京的分公司：&quot;+bjCom);
        map.put(&quot;beijing&quot;, bjCom);
        BranchCompany shCom = new BranchCompany();
        shCom.setInfo(&quot;这是上海的公司&quot;);
        map.put(&quot;shanghai&quot;, shCom);
        System.out.println(&quot;上海的分公司：&quot;+shCom);
        System.out.println(&quot;==============================&quot;);
    }

    public static BranchCompany getInstance(String address){
        return map.get(address);
    }

    public void getInfo(){
        System.out.println(this.info+&quot;/&quot;+this);
    }

    public void setInfo(String info){
        this.info = info;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package multiton;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/30 21:17】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        BranchCompany bj = BranchCompany.getInstance(&quot;beijing&quot;);
        bj.getInfo();
        BranchCompany sh = BranchCompany.getInstance(&quot;shanghai&quot;);
        sh.getInfo();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+d+'" alt="结果"></p>',6);function c(u,m){return e(),s("div",null,[r,a("more"),v])}const h=i(t,[["render",c],["__file","multiton-pattern.html.vue"]]);export{h as default};
