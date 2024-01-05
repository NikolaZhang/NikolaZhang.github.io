import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,f as s,a as n,e as l}from"./app-907d9a31.js";const d="/images/article/30/result2.png",v={},r=n("blockquote",null,[n("p",null,"单例模式，只能获取一个实例。")],-1),c=l(`<h2 id="单例模式-懒汉模式" tabindex="-1"><a class="header-anchor" href="#单例模式-懒汉模式" aria-hidden="true">#</a> 单例模式-懒汉模式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package singleton;

/************************************************
 *@ClassName : single
 *@Description : 第一种单例模式，懒汉模式
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 21:47】
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
        System.out.println(&quot;总部只能有一个！&quot;+mainCompany);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单例模式-饿汉模式" tabindex="-1"><a class="header-anchor" href="#单例模式-饿汉模式" aria-hidden="true">#</a> 单例模式-饿汉模式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package singleton;

/************************************************
 *@ClassName : MainCompany2
 *@Description : 第二种单例模式，饿汉模式
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 21:59】
 *@Version : 1.0.0
 *************************************************/

public class MainCompany2 {
    private final static MainCompany2 mainCompany2 = new MainCompany2();

    public static MainCompany2 getInstance(){
        return mainCompany2;
    }

    public void getInfo(){
        System.out.println(&quot;饿汉模式&quot;+mainCompany2);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package singleton;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/29 21:50】
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

        System.out.println(&quot;如果每组上下两个的地址相同则单例成功，不过推荐下面的方式&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+d+'" alt="结果"></p>',8);function m(t,u){return e(),a("div",null,[r,s("more"),c])}const p=i(v,[["render",m],["__file","singleton-pattern.html.vue"]]);export{p as default};
