import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as s,f as t,a as n,e as a}from"./app.e7c9cb9e.js";const d="/images/article/181213/state.png",l="/images/article/181213/state1.png",c={},v=n("blockquote",null,[n("p",null,"\u72B6\u6001\u6A21\u5F0F\uFF0C\u8FD9\u91CC\u7684\u72B6\u6001\u6A21\u5F0F\u548CEDA\u4E2D\u7684\u72B6\u6001\u8BBE\u8BA1\u65B9\u6CD5\u76F8\u4F3C\uFF0C\u4F46\u53C8\u662F\u4E0D\u540C\u7684\u3002\u4E0B\u9762\u8FD9\u53E5\u8BDD\u662F\u7F51\u4E0A\u7684\u89E3\u91CA\uFF1A\u7C7B\u7684\u884C\u4E3A\u662F\u57FA\u4E8E\u5B83\u7684\u72B6\u6001\u6539\u53D8\u7684\u3002\u8FD9\u79CD\u7C7B\u578B\u7684\u8BBE\u8BA1\u6A21\u5F0F\u5C5E\u4E8E\u884C\u4E3A\u578B\u6A21\u5F0F\u3002\u5728\u72B6\u6001\u6A21\u5F0F\u4E2D\uFF0C\u6211\u4EEC\u521B\u5EFA\u8868\u793A\u5404\u79CD\u72B6\u6001\u7684\u5BF9\u8C61\u548C\u4E00\u4E2A\u884C\u4E3A\u968F\u7740\u72B6\u6001\u5BF9\u8C61\u6539\u53D8\u800C\u6539\u53D8\u7684context\u5BF9\u8C61\u3002\u3010\u83DC\u9E1F\u6559\u7A0B\u3011")],-1),r=a(`<p>\u603B\u4E4B\uFF0C\u6211\u5BF9\u8FD9\u4E2A\u89E3\u91CA\u6709\u70B9\u4E0D\u6EE1\u610F\uFF0C\u751A\u81F3\u5BF9\u8FD9\u4E2A\u6A21\u5F0F\u90FD\u6709\u70B9\u8D28\u7591\u4E86\u3002\u59D1\u4E14\u6211\u4EEC\u5148\u7167\u7740\u5B9A\u4E49\u505A\u4E2A\u4F8B\u5B50\u3002</p><p>\u5F53\u6211\u4EEC\u6C7D\u8F66\u5382\u751F\u4EA7\u8F66\u7684\u65F6\u5019\u662F\u8FD9\u6837\u7684\uFF0C\u5148\u542F\u52A8\u751F\u4EA7\u7EBF\uFF0C\u518D\u88C5\u5907\u539F\u6599\u8FD0\u884C\u8D77\u6765\uFF0C\u6700\u540E\u4E0B\u73ED\u505C\u6B62\u3002\u603B\u7684\u7684\u6765\u8BF4\u5C31\u4E09\u4E2A\u72B6\u6001start run stop\u3002\u6D89\u53CA\u5230\u7684\u884C\u4E3A\u52A8\u4F5C\u6709\u542F\u52A8\uFF0C\u8FD0\u884C\uFF0C\u5173\u95ED\u3002</p><h2 id="\u4E00\u4E2A\u52A8\u4F5C\u63A5\u53E3-\u65B9\u4FBF\u4EE5\u540E\u589E\u52A0\u66F4\u591A\u7684\u884C\u4E3A" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u52A8\u4F5C\u63A5\u53E3-\u65B9\u4FBF\u4EE5\u540E\u589E\u52A0\u66F4\u591A\u7684\u884C\u4E3A" aria-hidden="true">#</a> \u4E00\u4E2A\u52A8\u4F5C\u63A5\u53E3\uFF0C\u65B9\u4FBF\u4EE5\u540E\u589E\u52A0\u66F4\u591A\u7684\u884C\u4E3A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package state;

/************************************************
 *@ClassName : Action
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/13 0013 21:06\u3011
 *@Version : 1.0.0
 *************************************************/

public interface Action {
    void doSomething(Context context);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8\u751F\u4EA7\u7EBF\u662F\u8FD9\u6837\u7684" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u751F\u4EA7\u7EBF\u662F\u8FD9\u6837\u7684" aria-hidden="true">#</a> \u542F\u52A8\u751F\u4EA7\u7EBF\u662F\u8FD9\u6837\u7684</h2><p>\u6211\u4EEC\u53EA\u6709\u5728\u751F\u4EA7\u7EBF\u505C\u6B62\u72B6\u6001\u65F6\uFF0C\u624D\u4F1A\u542F\u52A8\u6211\u4EEC\u7684\u751F\u4EA7\u7EBF\uFF0C\u5176\u4F59\u72B6\u6001\u542F\u52A8\uFF0C\u660E\u663E\u6CA1\u6709\u5FC5\u8981\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package state;

/************************************************
 *@ClassName : StartAction
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/13 0013 21:10\u3011
 *@Version : 1.0.0
 *************************************************/

public class StartAction implements Action {

    @Override
    public void doSomething(Context context) {
        String state = context.getContex();
        System.out.println(&quot;ooo\u5F53\u524D\u72B6\u6001\u4E3A\uFF1A&quot;+state);
        if(&quot;stop&quot;.equals(state)){
            System.out.println(&quot;\u751F\u4EA7\u7EBF\u5DF2\u7ECF\u542F\u52A8\uFF0C\u51C6\u5907\u751F\u4EA7\u4E86\u3002\u3002\u3002&quot;);
            context.setContex(&quot;start&quot;);
        }else{
            System.out.println(&quot;\u751F\u4EA7\u7EBF\u5DF2\u7ECF\u542F\u52A8\uFF0C\u4E0D\u9700\u8981\u518D\u542F\u52A8&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package state;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/13 0013 21:26\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        Context context = new Context(&quot;stop&quot;);
        Action startAction = new StartAction();
        Action runAction = new RunAction();
        Action stopAction = new StopAction();

        startAction.doSomething(context);
        runAction.doSomething(context);
        stopAction.doSomething(context);
        runAction.doSomething(context);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+d+`" alt="\u7ED3\u679C" loading="lazy"></p><p>\u65E0\u8BBA\u662F\u8BBE\u8BA1\u6A21\u5F0F\u4E4B\u7985\u4E0A\u7684context\u8C03\u7528\u52A8\u4F5C\uFF0C\u8FD8\u662F\u83DC\u9E1F\u4E0A\u7684\u591A\u4E2A\u52A8\u4F5C\u5BF9\u8C61\uFF08\u672C\u4F8B\uFF09\u3002\u90FD\u89C9\u5F97\u6709\u70B9\u4E0D\u5B8C\u7F8E\u3002\u6211\u89C9\u5F97\u9996\u5148\u52A8\u4F5C\u5BF9\u8C61\u8981\u6709\u4E00\u4E2A\uFF0C\u800C\u4E14\u5E94\u8BE5\u662F\u73AF\u5883\u5BF9\u8C61\u6539\u53D8\u540E\uFF0C\u7531\u52A8\u4F5C\u5BF9\u8C61\u89E6\u53D1\u884C\u4E3A\u3002</p><p>\u4E8E\u662F\u6211\u6539\u9020\u4E86\u4E00\u4E0B\uFF0C\u589E\u52A0\u4E86\u4E00\u4E2AActionManage\u7C7B\u3002\u5C06\u5176\u4ED6\u52A8\u4F5C\u7C7B\u7684\u5197\u4F59\u4EE3\u7801\u5220\u6389\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package state;

/************************************************
 *@ClassName : ActionMange
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/13 0013 22:18\u3011
 *@Version : 1.0.0
 *************************************************/

public class ActionManage {
    private Action startAction = new StartAction();
    private Action runAction = new RunAction();
    private Action stopAction = new StopAction();
    private Context context;

    public void doSomething(){
        switch (context.getContex()) {
            case &quot;stop&quot; : startAction.doSomething(context);break;
            case &quot;start&quot; : runAction.doSomething(context);break;
            case &quot;run&quot; : stopAction.doSomething(context);break;
        }
    }

    public ActionManage(Context context) {
        this.context = context;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6D4B\u8BD5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package state;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/13 0013 21:26\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        Context context = new Context(&quot;stop&quot;);
        ActionManage actionManage = new ActionManage(context);
        actionManage.doSomething();
        actionManage.doSomething();
        actionManage.doSomething();
        actionManage.doSomething();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7ED3\u679C</strong><img src="`+l+'" alt="\u7ED3\u679C" loading="lazy"></p>',17);function o(u,m){return e(),s("div",null,[v,t("more"),r])}const g=i(c,[["render",o],["__file","state-pattern.html.vue"]]);export{g as default};
