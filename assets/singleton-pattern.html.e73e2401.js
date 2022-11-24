import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,f as s,a as n,e as l}from"./app.4001f435.js";const d="/images/article/30/result2.png",v={},r=n("blockquote",null,[n("p",null,"\u5355\u4F8B\u6A21\u5F0F\uFF0C\u53EA\u80FD\u83B7\u53D6\u4E00\u4E2A\u5B9E\u4F8B\u3002")],-1),c=l(`<h2 id="\u5355\u4F8B\u6A21\u5F0F-\u61D2\u6C49\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F-\u61D2\u6C49\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F-\u61D2\u6C49\u6A21\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package singleton;

/************************************************
 *@ClassName : single
 *@Description : \u7B2C\u4E00\u79CD\u5355\u4F8B\u6A21\u5F0F\uFF0C\u61D2\u6C49\u6A21\u5F0F
 *@Author : NikolaZhang
 *@Date : \u30102018/11/29 21:47\u3011
 *@Version : 1.0.0
 *************************************************/

public class MainCompany {
    private static MainCompany mainCompany = null;
    public static MainCompany getInstance(){
        if(mainCompany == null){
            mainCompany = new MainCompany();
        }
        return mainCompany;
    }

    public static void getInfo(){
        System.out.println(&quot;\u603B\u90E8\u53EA\u80FD\u6709\u4E00\u4E2A\uFF01&quot;+mainCompany);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5355\u4F8B\u6A21\u5F0F-\u997F\u6C49\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F-\u997F\u6C49\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F-\u997F\u6C49\u6A21\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package singleton;

/************************************************
 *@ClassName : MainCompany2
 *@Description : \u7B2C\u4E8C\u79CD\u5355\u4F8B\u6A21\u5F0F\uFF0C\u997F\u6C49\u6A21\u5F0F
 *@Author : NikolaZhang
 *@Date : \u30102018/11/29 21:59\u3011
 *@Version : 1.0.0
 *************************************************/

public class MainCompany2 {
    private final static MainCompany2 mainCompany2 = new MainCompany2();

    public static MainCompany2 getInstance(){
        return mainCompany2;
    }

    public void getInfo(){
        System.out.println(&quot;\u997F\u6C49\u6A21\u5F0F&quot;+mainCompany2);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package singleton;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/29 21:50\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        MainCompany mainCom1 = MainCompany.getInstance();
        mainCom1.getInfo();
        MainCompany mainCom2 = MainCompany.getInstance();
        mainCom2.getInfo();
        System.out.println(&quot;====================================&quot;);

        MainCompany2 com1 = MainCompany2.getInstance();
        com1.getInfo();
        MainCompany2 com2 = MainCompany2.getInstance();
        com2.getInfo();

        System.out.println(&quot;\u5982\u679C\u6BCF\u7EC4\u4E0A\u4E0B\u4E24\u4E2A\u7684\u5730\u5740\u76F8\u540C\u5219\u5355\u4F8B\u6210\u529F\uFF0C\u4E0D\u8FC7\u63A8\u8350\u4E0B\u9762\u7684\u65B9\u5F0F&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+d+'" alt="\u7ED3\u679C" loading="lazy"></p>',8);function m(t,u){return e(),a("div",null,[r,s("more"),c])}const p=i(v,[["render",m],["__file","singleton-pattern.html.vue"]]);export{p as default};
