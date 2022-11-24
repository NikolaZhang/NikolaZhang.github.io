import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as d,f as s,a as e,e as a}from"./app.e7c9cb9e.js";const l="/images/article/181215/res3.png",r={},v=e("blockquote",null,[e("p",null,"\u5907\u5FD8\u5F55\u6A21\u5F0F\uFF1A\u4FDD\u5B58\u4E00\u4E2A\u5BF9\u8C61\u7684\u67D0\u4E2A\u72B6\u6001\uFF0C\u4EE5\u4FBF\u5728\u9002\u5F53\u7684\u65F6\u5019\u6062\u590D\u5BF9\u8C61\u3002\u5907\u5FD8\u5F55\u6A21\u5F0F\u5C5E\u4E8E\u884C\u4E3A\u578B\u6A21\u5F0F\u3002")],-1),c=a(`<p>\u6700\u8FD1\u6211\u4EEC\u8F66\u5382\u51B3\u5B9A\u8981\u6269\u5EFA\u4E00\u4E2A\u7EF4\u4FEE\u5382\uFF0C\u8FD9\u4E2A\u7EF4\u4FEE\u5382\u53EF\u4EE5\u8BA9\u8BA9\u7528\u6237\u7684\u8F66\u6062\u590D\u5230\u4E4B\u524D\u7684\u4EFB\u610F\u72B6\u6001\u3002\u662F\u4E0D\u662F\u5F88\u725B\uFF1F\uFF01</p><h2 id="\u9996\u5148\u6539\u9020\u6211\u4EEC\u7684\u8F66" tabindex="-1"><a class="header-anchor" href="#\u9996\u5148\u6539\u9020\u6211\u4EEC\u7684\u8F66" aria-hidden="true">#</a> \u9996\u5148\u6539\u9020\u6211\u4EEC\u7684\u8F66</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package memento;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 15:41\u3011
 *@Version : 1.0.0
 *************************************************/

public class CarRecord {
    private String name;

    public String getName() {
        return name;
    }

    public String getNameFromMemList(int index) {
        String name = MemList.getMemRecord(index).getName();
        this.name = name;
        return  name;
    }

    public void changeName(String name){
        this.name = name;
        new MemRecord(name);
    }

    public CarRecord(String name) {
        this.name = name;
        new MemRecord(name);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7B80\u5355\u8BF4\u4E00\u4E0B\u7C7B\u4E2D\u7684\u65B9\u6CD5\u4F5C\u7528\u3002 <code>getNameFromMemList</code>\u4ECE\u5907\u5FD8\u5F55\u4E2D\u83B7\u53D6\uFF0C\u8F66\u4E4B\u524D\u7684\u540D\u5B57\uFF0Cindex\u662F\u7D22\u5F15\u3002 <code>changeName</code>\u8FD9\u4E2A\u65B9\u6CD5\u652F\u6301\u7528\u6237\u968F\u610F\u8BBE\u7F6E\u540D\u5B57\u3002 <code>new MemRecord(name);</code>\u8FD9\u6761\u8BED\u53E5\u5C06\u540D\u5B57\u5B58\u653E\u5230\u4E00\u4E2A\u5907\u5FD8\u5F55\u4E2D\u3002\u5177\u4F53\u89C1\u4E0B\u3002</p><h2 id="\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u5907\u4EFD" aria-hidden="true">#</a> \u5907\u4EFD</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package memento;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 15:41\u3011
 *@Version : 1.0.0
 *************************************************/

public class MemRecord {
    private String name;

    public String getName() {
        return name;
    }

    public MemRecord(String name) {
        this.name = name;
        MemList.addMemRecord(this);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4EC0\u4E48\u8981\u6709\u8FD9\u4E2A\u7C7B\uFF0C\u8FD9\u4E2A\u7C7B\u7684\u4F5C\u7528\u662F\u590D\u5236\u4E00\u4EFD<code>CarRecord</code>\u3002\u4F60\u60F3\u554A\uFF0C\u6211\u4EEC\u5C06\u540C\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u52A0\u5230List\u4E2D\u3002\u90A3\u6211\u4EEC\u8FD8\u80FD\u5907\u4EFD\u5417\uFF1F</p><h2 id="\u5907\u5FD8\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5907\u5FD8\u5F55" aria-hidden="true">#</a> \u5907\u5FD8\u5F55</h2><p>\u4F60\u4E4B\u524D\u5BF9\u8F66\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u4F1A\u5B58\u5728\u8FD9\u91CC\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package memento;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 15:41\u3011
 *@Version : 1.0.0
 *************************************************/

public class MemList {
    private static List&lt;MemRecord&gt; mems;

    static{
        mems = new ArrayList&lt;&gt;();
    }
    private MemList(){}

    public static MemRecord getMemRecord(int index) {
        return mems.get(index);
    }
    public static void addMemRecord(MemRecord mem) {
        mems.add(mem);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#\u6062\u590D" aria-hidden="true">#</a> \u6062\u590D</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package memento;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 15:41\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        CarRecord carRecord = new CarRecord(&quot;aaaa&quot;);
        carRecord.changeName(&quot;bbbbb&quot;);
        carRecord.changeName(&quot;ccccc&quot;);
        carRecord.changeName(&quot;ddddd&quot;);
        carRecord.changeName(&quot;eeeee&quot;);

        System.out.println(carRecord.getName());
        System.out.println(carRecord.getNameFromMemList(1));
        System.out.println(carRecord.getName());
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p>\u7B80\u5355\u8FD0\u884C\u4E4B\u540E\uFF0C\u770B\u6211\u4EEC\u7684\u8F66\u5C31\u6062\u590D\u5230\u4E86bbbbb\u72B6\u6001\u3002heihei <img src="`+l+'" alt="\u7ED3\u679C" loading="lazy"></p>',14);function m(t,u){return n(),d("div",null,[v,s("more"),c])}const h=i(r,[["render",m],["__file","memento-pattern.html.vue"]]);export{h as default};
