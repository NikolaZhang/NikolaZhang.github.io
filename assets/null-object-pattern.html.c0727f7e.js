import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as l,a as i,e as a}from"./app.4001f435.js";const d="/images/article/181215/res5.png",r={},v=i("blockquote",null,[i("p",null,"\u7A7A\u5BF9\u8C61\u6A21\u5F0F\uFF1A\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u53D6\u4EE3 NULL \u5BF9\u8C61\u5B9E\u4F8B\u7684\u68C0\u67E5\u3002Null \u5BF9\u8C61\u4E0D\u662F\u68C0\u67E5\u7A7A\u503C\uFF0C\u800C\u662F\u53CD\u5E94\u4E00\u4E2A\u4E0D\u505A\u4EFB\u4F55\u52A8\u4F5C\u7684\u5173\u7CFB\u3002\u8FD9\u6837\u7684 Null \u5BF9\u8C61\u4E5F\u53EF\u4EE5\u5728\u6570\u636E\u4E0D\u53EF\u7528\u7684\u65F6\u5019\u63D0\u4F9B\u9ED8\u8BA4\u7684\u884C\u4E3A\u3002\u3010\u83DC\u9E1F\u3011")],-1),c=a(`<p>\u5F53\u6211\u4EEC\u7684\u7CFB\u7EDF\u4E2D\u627E\u4E0D\u5230\u67D0\u79CD\u8F66\u578B\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5BF9\u8C61\u80AF\u5B9A\u662F\u4E2Anull\u3002\u8FD9\u65F6\u5019\u5982\u679C\u4F60\u4E0D\u505A\u4EC0\u4E48\u5224\u65AD\u5904\u7406\u76F4\u63A5\u8C03\u7528\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5\u80AF\u5B9A\u662F\u4F1A\u4E0D\u62A5\u9519\u7684\u3002\u9000\u4E00\u6B65\u8BF4\u76F4\u63A5\u8FD4\u56DE\u4E3A\u7A7A\uFF0C\u662F\u5426\u6709\u70B9\u66B4\u529B\uFF0C\u592A\u4E0D\u4EBA\u6027\u5316\u4E86\u3002</p><h2 id="\u62BD\u8C61\u5BF9\u8C61\u53CA\u5BF9\u5E94\u7684\u7EE7\u627F\u7C7B\u3002" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u5BF9\u8C61\u53CA\u5BF9\u5E94\u7684\u7EE7\u627F\u7C7B\u3002" aria-hidden="true">#</a> \u62BD\u8C61\u5BF9\u8C61\u53CA\u5BF9\u5E94\u7684\u7EE7\u627F\u7C7B\u3002</h2><p>\u8FD9\u91CC\u6211\u4EEC\u641E\u4E86\u4E00\u4E2A\u62BD\u8C61\u5BF9\u8C61\uFF0C\u5E76\u7528\u4E00\u4E2ARealCar\u548CNullCar\u7EE7\u627F\u5B83\u3002\u5F53\u6211\u4EEC\u4ECE\u5DE5\u5382\u7C7B\u4E2D\u83B7\u53D6\u5230\u5BF9\u5E94\u7684Car\u65F6\u5C31\u8FD4\u56DERealCar\uFF0C\u83B7\u53D6\u4E0D\u5230\u5C31\u8FD4\u56DENullCar\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package nullobject;

import util.StringUtil;

/************************************************
 *@ClassName : AbstractCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 19:30\u3011
 *@Version : 1.0.0
 *************************************************/

public abstract class AbstractCar {
    protected String name;
    public boolean isNull(){
        if(StringUtil.isEmpty(this.name)){
            return true;
        }else{
            return false;
        }
    }
    public abstract String getName();
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package nullobject;

/************************************************
 *@ClassName : AbstractCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 19:30\u3011
 *@Version : 1.0.0
 *************************************************/

public class NullCar extends AbstractCar{
    @Override
    public String getName() {
        return &quot;dont have such car!&quot;;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package nullobject;

/************************************************
 *@ClassName : AbstractCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 19:30\u3011
 *@Version : 1.0.0
 *************************************************/

public class RealCar extends AbstractCar {
    @Override
    public String getName() {
        return &quot;\u5B58\u5728\u8FD9\u8F86\u8F66&quot;;
    }

    public RealCar(String name) {
        super.name = name;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5DE5\u5382" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382" aria-hidden="true">#</a> \u5DE5\u5382</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package nullobject;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/************************************************
 *@ClassName : CarFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 19:39\u3011
 *@Version : 1.0.0
 *************************************************/

public class CarFactory {
    private static List&lt;String&gt; cars = new ArrayList&lt;&gt;();
    static {
        cars.add(&quot;bwm&quot;);
        cars.add(&quot;benz&quot;);
    }
    public static AbstractCar getCar(String name){
        Iterator&lt;String&gt; iterator = cars.iterator();
        while (iterator.hasNext()){
            if(name.equals(iterator.next())) {
                return new RealCar(name);
            }
        }
        return new NullCar();
    }
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package nullobject;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 17:34\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        System.out.println(CarFactory.getCar(&quot;bwm&quot;).getName());
        System.out.println(CarFactory.getCar(&quot;asdfsa&quot;).getName());
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+d+'" alt="\u7ED3\u679C" loading="lazy"></p>',12);function t(u,m){return n(),s("div",null,[v,l("more"),c])}const g=e(r,[["render",t],["__file","null-object-pattern.html.vue"]]);export{g as default};
