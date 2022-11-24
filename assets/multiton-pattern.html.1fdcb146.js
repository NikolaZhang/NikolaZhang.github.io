import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as s,f as a,a as n,e as l}from"./app.4001f435.js";const d="/images/article/30/result.png",t={},r=n("blockquote",null,[n("p",null,"\u591A\u4F8B\u6A21\u5F0F\uFF0C\u5373\u591A\u4E2A\u5355\u4F8B\uFF0C\u5E76\u4E0D\u662F\u7B80\u5355\u7684new new new\uFF0C\u7B97\u662F\u4E2A\u6781\u7AEF\uFF0C\u4E0D\u80FD\u5B8C\u5168\u5426\u5B9A\u5427\u3002")],-1),v=l(`<h2 id="\u591A\u4F8B\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u591A\u4F8B\u6A21\u578B" aria-hidden="true">#</a> \u591A\u4F8B\u6A21\u578B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package multiton;

import java.util.HashMap;
import java.util.Map;

/************************************************
 *@ClassName : multiton
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/30 21:07\u3011
 *@Version : 1.0.0
 *************************************************/

public class BranchCompany {
    private static Map&lt;String, BranchCompany&gt; map = new HashMap&lt;&gt;();
    private String info;
    static {
        // \u9884\u5148\u8BBE\u7F6E\u4E24\u4E2A\u5206\u516C\u53F8
        BranchCompany bjCom = new BranchCompany();
        bjCom.setInfo(&quot;\u8FD9\u662F\u5317\u4EAC\u7684\u516C\u53F8&quot;);
        System.out.println(&quot;\u5317\u4EAC\u7684\u5206\u516C\u53F8\uFF1A&quot;+bjCom);
        map.put(&quot;beijing&quot;, bjCom);
        BranchCompany shCom = new BranchCompany();
        shCom.setInfo(&quot;\u8FD9\u662F\u4E0A\u6D77\u7684\u516C\u53F8&quot;);
        map.put(&quot;shanghai&quot;, shCom);
        System.out.println(&quot;\u4E0A\u6D77\u7684\u5206\u516C\u53F8\uFF1A&quot;+shCom);
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package multiton;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/30 21:17\u3011
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+d+'" alt="\u7ED3\u679C" loading="lazy"></p>',6);function c(u,m){return e(),s("div",null,[r,a("more"),v])}const h=i(t,[["render",c],["__file","multiton-pattern.html.vue"]]);export{h as default};
