import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as a,a as i,e as d}from"./app.e7c9cb9e.js";const l="/images/article/181213/visitor.png",r={},v=i("blockquote",null,[i("p",null,"\u8BBF\u95EE\u8005\u6A21\u5F0F\uFF1A\u5B9A\u4E49\u5BF9\u8C61\u95F4\u7684\u4E00\u79CD\u4E00\u5BF9\u591A\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5F53\u4E00\u4E2A\u5BF9\u8C61\u7684\u72B6\u6001\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u6240\u6709\u4F9D\u8D56\u4E8E\u5B83\u7684\u5BF9\u8C61\u90FD\u5F97\u5230\u901A\u77E5\u5E76\u88AB\u81EA\u52A8\u66F4\u65B0\u3002\u4E00\u4E2A\u5BF9\u8C61\u72B6\u6001\u6539\u53D8\u7ED9\u5176\u4ED6\u5BF9\u8C61\u901A\u77E5\u7684\u95EE\u9898\uFF0C\u800C\u4E14\u8981\u8003\u8651\u5230\u6613\u7528\u548C\u4F4E\u8026\u5408\uFF0C\u4FDD\u8BC1\u9AD8\u5EA6\u7684\u534F\u4F5C\u3002[\u83DC\u9E1F]")],-1),c=d(`<p>\u600E\u4E48\u8BF4\u5462\uFF0C\u8BBF\u95EE\u8005\u6A21\u5F0F\u548C\u89C2\u5BDF\u8005\u6A21\u5F0F\u8FD8\u662F\u6709\u70B9\u50CF\u7684\u3002\u4F46\u662F\uFF0C\u8BBF\u95EE\u8005\u6A21\u5F0F\u662F\u4F60\u60F3\u8BBF\u95EE\u5C31\u8BBF\u95EE\u3002\u89C2\u5BDF\u8005\u5219\u662F\u6211\u53D8\u4E86\u5C31\u544A\u8BC9\u4F60\u3002\u8BBF\u95EE\u8005\u662F\u4E3B\u52A8\u7684\uFF0C\u89C2\u5BDF\u8005\u662F\u88AB\u52A8\u7684\u3002</p><p>\u901A\u5E38\u6211\u4EEC\u5728\u88AB\u8BBF\u95EE\u8005\u7C7B\u4E2D\u5B9A\u4E49\u4E00\u4E2Aaccept\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u7684\u53C2\u6570\u662F\u8BBF\u95EE\u8005\u5BF9\u8C61\u3002\u8BBF\u95EE\u8005\u7C7B\u4E2D\u5B9A\u4E49visit\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u7684\u53C2\u6570\u662F\u5F53\u524D\u88AB\u8BBF\u95EE\u5BF9\u8C61\u3002visit\u4E2D\u8C03\u7528\u88AB\u8BBF\u95EE\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5\u3002\u4E3A\u4E86\u6613\u4E8E\u6269\u5C55\uFF0C\u4F8B\u5B50\u4E2D\u6211\u4EEC\u7684\u8BBF\u95EE\u5BF9\u8C61\u548C\u88AB\u8BBF\u95EE\u5BF9\u8C61\u90FD\u62BD\u8C61\u51FA\u4E86\u4E00\u4E2A\u63A5\u53E3\u3002\u63A5\u53E3\u4E2D\u5206\u522B\u5B9A\u4E49\u516C\u5171\u65B9\u6CD5visit\uFF0Caccept\u3002</p><h2 id="\u8BBF\u95EE\u8005\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u8005\u63A5\u53E3" aria-hidden="true">#</a> \u8BBF\u95EE\u8005\u63A5\u53E3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package visitor;

/************************************************
 *@ClassName : Visitor
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/13 0013 7:35\u3011
 *@Version : 1.0.0
 *************************************************/

public interface VisitorI {
    void visit(BWMFactory bwmFactory);
    void visit(BenzFactory benzFactory);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u73B0\u4E00\u4E2A\u8BBF\u95EE\u8005" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u8BBF\u95EE\u8005" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A\u8BBF\u95EE\u8005</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package visitor;

/************************************************
 *@ClassName : Visitor
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/13 0013 7:39\u3011
 *@Version : 1.0.0
 *************************************************/

public class Visitor implements VisitorI {
    @Override
    public void visit(BWMFactory bwmFactory) {
        System.out.println(&quot;\u8C03\u67E5\u5B9D\u9A6C\u5DE5\u5382&quot;);
        bwmFactory.info();
    }

    @Override
    public void visit(BenzFactory benzFactory) {
        System.out.println(&quot;\u8C03\u67E5\u5954\u9A70\u5DE5\u5382&quot;);
        benzFactory.info();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u88AB\u8BBF\u95EE\u7684\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u88AB\u8BBF\u95EE\u7684\u63A5\u53E3" aria-hidden="true">#</a> \u88AB\u8BBF\u95EE\u7684\u63A5\u53E3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package visitor;

/************************************************
 *@ClassName : CarFacorires
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/13 0013 7:34\u3011
 *@Version : 1.0.0
 *************************************************/

public interface CarFacoriresI {
    void info();
    void accept(VisitorI visitorI);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u88AB\u8BBF\u95EE\u63A5\u53E3\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u88AB\u8BBF\u95EE\u63A5\u53E3\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u88AB\u8BBF\u95EE\u63A5\u53E3\u7684\u5B9E\u73B0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package visitor;

/************************************************
 *@ClassName : BWMFactory
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/13 0013 7:36\u3011
 *@Version : 1.0.0
 *************************************************/

public class BWMFactory implements CarFacoriresI {
    @Override
    public void info(){
        System.out.println(&quot;\u5B9D\u9A6C\u5DE5\u5382\u6700\u8FD1\u4E8F\u635F&quot;);
    }

    @Override
    public void accept(VisitorI visitorI) {
        visitorI.visit(this);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package visitor;

import iterator.Car;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/13 0013 7:44\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        VisitorI visitorI = new Visitor();
        CarFacoriresI carFacoriresI1 = new BWMFactory();
        carFacoriresI1.accept(visitorI);
        CarFacoriresI carFacoriresI2 = new BenzFactory();
        carFacoriresI2.accept(visitorI);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+l+'" alt="\u7ED3\u679C" loading="lazy"></p>',14);function t(u,m){return n(),s("div",null,[v,a("more"),c])}const h=e(r,[["render",t],["__file","visitor-pattern.html.vue"]]);export{h as default};
