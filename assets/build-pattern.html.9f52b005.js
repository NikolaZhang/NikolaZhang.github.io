import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as l,a as i,e as d}from"./app.e7c9cb9e.js";const a="/images/article/181205/res.png",r="/images/article/181205/uml.png",v={},c=i("blockquote",null,[i("p",null,"\u5EFA\u9020\u8005\u6A21\u5F0F\uFF0C\u4EE5\u67D0\u79CD\u5F62\u5F0F\u7EC4\u5408\u51FA\u5BF9\u8C61\u3002\u5B83\u548C\u5DE5\u5382\u6A21\u5F0F\u7684\u533A\u522B\u5728\u4E8E\u662F\u5426\u6709\u7EC4\u5408\u7684\u6982\u5FF5\u3002\u5EFA\u9020\u8005\u6A21\u5F0F\u4E2D\u6709\u4EA7\u54C1\u5BF9\u8C61\uFF0C\u5EFA\u9020\u8005\u5BF9\u8C61\uFF0C\u76D1\u5DE5\u5BF9\u8C61\u3002\u4EA7\u54C1\u5BF9\u8C61\u662F\u5404\u79CD\u5404\u6837\u7684POJO\uFF0C\u5EFA\u9020\u8005\u4EE5\u67D0\u79CD\u65B9\u5F0F\u7EC4\u5408\u4EA7\u54C1\uFF0C\u76D1\u5DE5\u5C31\u6BD4\u8F83\u50CF\u5DE5\u5382\uFF0C\u83B7\u53D6\u4EA7\u54C1\u7EC4\u5408\u540E\u7684\u5BF9\u8C61\u3002\u8FD9\u4E24\u5929\u770B\u4E86\u83DC\u9E1F\u4E0A\u7684\u8BB2\u89E3\u548C\u8BBE\u6280\u6A21\u5F0F\u4E4B\u7985\u3002\u8FD9\u4E24\u8005\u8BB2\u7684\u6709\u4E9B\u4E0D\u540C\u3002\u83DC\u9E1F\u4E0A\u662F\u4EA7\u54C1\u5BF9\u8C61\u7684\u7EC4\u5408\uFF0C\u800C\u8BBE\u8BA1\u6A21\u5F0F\u4E4B\u7985\u4E0A\u5219\u504F\u5411\u5BF9\u8C61\u5185\u90E8\u5C5E\u6027\u7684\u7EC4\u5408\u3002")],-1),u=d(`<p>\u4E4B\u524D\u5728\u6A21\u677F\u65B9\u6CD5\u4E2D\u8BF4\u9053\uFF0C\u516C\u53F8\u9020\u8F66\u8FC7\u7A0B\u4E2D\u6211\u4EEC\u80FD\u4F7F\u7528\u94A9\u5B50\u51B3\u5B9A\u662F\u5426\u4F7F\u7528\u67D0\u4E2A\u90E8\u4EF6\u3002\u73B0\u5728\u6211\u4EEC\u60F3\u8981\u751F\u4EA7\u591A\u79CD\u8F66\u578B\uFF0C\u800C\u4E14\u6CA1\u79CD\u8F66\u8F86\u80FD\u591F\u81EA\u7531\u7EC4\u5408\u96F6\u4EF6\u3002\u90A3\u6211\u4EEC\u5E94\u8BE5\u600E\u4E48\u529E\u5462\uFF1F</p><h2 id="\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a> \u521B\u5EFA</h2><p>\u9996\u5148\u6211\u4EEC\u5E94\u8BE5\u60F3\u5230\u5E94\u8BE5\u8981\u6709\u4E00\u4E2A\u96C6\u5408\u53BB\u5B58\u653E\u6211\u4EEC\u9700\u8981\u7684\u96F6\u90E8\u4EF6\u3002\u6240\u4EE5\u6211\u4EEC\u6539\u9020\u4E00\u4E0BCarTemplate\u7C7B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package builder;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : CarTemplateI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/4 21:15\u3011
 *@Version : 1.0.0
 *************************************************/

public abstract class CarTemplateI {
    protected List chooses = new ArrayList();

    protected abstract void wheel();
    protected abstract void light();
    protected abstract void alarm();

    protected final void run(){
        if(chooses.contains(&quot;wheel&quot;)){
            wheel();
        }
        if(chooses.contains(&quot;light&quot;)){
            light();
        }
        if(chooses.contains(&quot;alarm&quot;)){
            alarm();
        }
    }

    public List getChooses() {
        return chooses;
    }
    public void setChooses(List chooses) {
        this.chooses = chooses;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u4E86\u6A21\u578B\u6211\u4EEC\u5C31\u5F00\u59CB\u9020\u8F66\uFF0C\u5148\u8BBE\u8BA1\u4E2A\u5B9D\u9A6C\u5427\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package builder;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : BWMCarImpl
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/4 21:16\u3011
 *@Version : 1.0.0
 *************************************************/

public class BWMCarImpl extends   CarTemplateI {
    @Override
    public void wheel() {
        System.out.println(&quot;\u5B9D\u9A6C\u8F66\u8F6E\u5B50&quot;);
    }

    @Override
    public void light() {
        System.out.println(&quot;\u5B9D\u9A6C\u8F66\u706F&quot;);
    }

    @Override
    public void alarm() {
        System.out.println(&quot;\u5B9D\u9A6C\u8F66\u9E23\u7B1B&quot;);
    }

    public List getChooses() {
        return chooses;
    }


}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u9020\u5176\u4ED6\u7684\u8F66\u5C31\u548C\u4E0A\u9762\u7684\u4EE3\u7801\u4E00\u6837\u3002</p><h2 id="\u5EFA\u9020\u8005" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u9020\u8005" aria-hidden="true">#</a> \u5EFA\u9020\u8005</h2><p>\u4F60\u9700\u8981\u4EC0\u4E48\u8F66\uFF0C\u4F60\u7684\u8F66\u9700\u8981\u4EC0\u4E48\u96F6\u4EF6\u3002\u7EDF\u7EDF\u4EA4\u7ED9\u5EFA\u9020\u8005\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package builder;

import java.util.List;

/************************************************
 *@ClassName : Builder
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/4 21:58\u3011
 *@Version : 1.0.0
 *************************************************/

public class Builder {
    private List list;

    public void setChoose(List list){
        this.list=list;
    }

    public CarTemplateI getCarTemplate(CarTemplateI carTemplateI){
            carTemplateI.setChooses(list);
            return  carTemplateI;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u76D1\u5DE5" tabindex="-1"><a class="header-anchor" href="#\u76D1\u5DE5" aria-hidden="true">#</a> \u76D1\u5DE5</h2><p>\u8FD9\u4E2A\u5BB6\u4F19\u628A\u6BCF\u4E2A\u8F66\u578B\u9700\u8981\u7684\u96F6\u4EF6\u5B9A\u597D\uFF0C\u5C31\u53EF\u4EE5\u5429\u5490\u5EFA\u9020\u8005\u5E72\u6D3B\u53BB\u4E86\u3002\u5F80\u5F80\u8FD9\u79CD\u770B\u7740\u6E05\u95F2\u7684\u5BB6\u4F19\uFF0C\u8D5A\u94B1\u6700\u591A\u3002\u3002\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package builder;

import java.util.ArrayList;
import java.util.List;

/************************************************
 *@ClassName : Director
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/5 20:39\u3011
 *@Version : 1.0.0
 *************************************************/

public class Director {
    private Builder builder = new Builder();
    private List list = new ArrayList();

    public CarTemplateI productBWMCar(){
        list.clear();
        list.add(&quot;wheel&quot;);
        list.add(&quot;alarm&quot;);
        builder.setChoose(list);
        return builder.getCarTemplate(new BWMCarImpl());
    }

    public CarTemplateI productBenzCar(){
        list.clear();
        list.add(&quot;wheel&quot;);
        list.add(&quot;light&quot;);
        list.add(&quot;alarm&quot;);
        builder.setChoose(list);
        return builder.getCarTemplate(new BenzCarImpl());
    }


}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p>\u597D\u4E86\u6211\u4EEC\u7684\u5BA2\u6237\u6765\u4E70\u8F66\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package builder;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/4 22:05\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        Director director = new Director();
        director.productBenzCar().run();
        director.productBWMCar().run();

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+a+'" alt="\u7ED3\u679C" loading="lazy"> \u8BF6\uFF0C\u6211\u5B9D\u9A6C\u7684\u8F66\u706F\u5462\uFF1F\uFF01 \u8FD9\u90FD\u662F\u76D1\u5DE5\u5E72\u7684\u597D\u4E8B\uFF0C\u7528\u6237\u662F\u4E0D\u77E5\u9053\u751F\u4EA7\u5B9D\u9A6C\u65F6\u7528\u4E86\u4EC0\u4E48\u96F6\u4EF6\u3002\u8FD9\u90FD\u9760\u826F\u5FC3\u554A\u3002</p><h2 id="uml" tabindex="-1"><a class="header-anchor" href="#uml" aria-hidden="true">#</a> UML</h2><p><img src="'+r+'" alt="uml" loading="lazy"></p>',20);function t(m,b){return n(),s("div",null,[c,l("more"),u])}const h=e(v,[["render",t],["__file","build-pattern.html.vue"]]);export{h as default};
