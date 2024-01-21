import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as d,f as s,a as e,e as a}from"./app-UXitmlia.js";const l="/images/article/181215/res3.png",r={},v=e("blockquote",null,[e("p",null,"备忘录模式：保存一个对象的某个状态，以便在适当的时候恢复对象。备忘录模式属于行为型模式。")],-1),c=a(`<p>最近我们车厂决定要扩建一个维修厂，这个维修厂可以让让用户的车恢复到之前的任意状态。是不是很牛？！</p><h2 id="首先改造我们的车" tabindex="-1"><a class="header-anchor" href="#首先改造我们的车" aria-hidden="true">#</a> 首先改造我们的车</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package memento;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 15:41】
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里简单说一下类中的方法作用。<br><code>getNameFromMemList</code>从备忘录中获取，车之前的名字，index是索引。<br><code>changeName</code>这个方法支持用户随意设置名字。<br><code>new MemRecord(name);</code>这条语句将名字存放到一个备忘录中。具体见下。</p><h2 id="备份" tabindex="-1"><a class="header-anchor" href="#备份" aria-hidden="true">#</a> 备份</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package memento;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 15:41】
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么要有这个类，这个类的作用是复制一份<code>CarRecord</code>。你想啊，我们将同一个引用类型加到List中。那我们还能备份吗？</p><h2 id="备忘录" tabindex="-1"><a class="header-anchor" href="#备忘录" aria-hidden="true">#</a> 备忘录</h2><p>你之前对车的所有操作都会存在这里。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package memento;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 15:41】
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="恢复" tabindex="-1"><a class="header-anchor" href="#恢复" aria-hidden="true">#</a> 恢复</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package memento;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 15:41】
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p>简单运行之后，看我们的车就恢复到了bbbbb状态。heihei<br><img src="`+l+'" alt="结果"></p>',14);function m(t,u){return n(),d("div",null,[v,s("more"),c])}const h=i(r,[["render",m],["__file","18-memento.html.vue"]]);export{h as default};
