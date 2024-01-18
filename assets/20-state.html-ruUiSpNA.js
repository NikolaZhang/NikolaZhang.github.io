import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,f as t,a as n,e as a}from"./app-1RIej2TD.js";const d="/images/article/181213/state.png",l="/images/article/181213/state1.png",c={},v=n("blockquote",null,[n("p",null,"状态模式，这里的状态模式和EDA中的状态设计方法相似，但又是不同的。下面这句话是网上的解释：类的行为是基于它的状态改变的。这种类型的设计模式属于行为型模式。在状态模式中，我们创建表示各种状态的对象和一个行为随着状态对象改变而改变的context对象。【菜鸟教程】")],-1),r=a(`<p>总之，我对这个解释有点不满意，甚至对这个模式都有点质疑了。姑且我们先照着定义做个例子。</p><p>当我们汽车厂生产车的时候是这样的，先启动生产线，再装备原料运行起来，最后下班停止。总的的来说就三个状态start run stop。涉及到的行为动作有启动，运行，关闭。</p><h2 id="一个动作接口-方便以后增加更多的行为" tabindex="-1"><a class="header-anchor" href="#一个动作接口-方便以后增加更多的行为" aria-hidden="true">#</a> 一个动作接口，方便以后增加更多的行为</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package state;

/************************************************
 *@ClassName : Action
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/13 0013 21:06】
 *@Version : 1.0.0
 *************************************************/

public interface Action {
    void doSomething(Context context);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动生产线是这样的" tabindex="-1"><a class="header-anchor" href="#启动生产线是这样的" aria-hidden="true">#</a> 启动生产线是这样的</h2><p>我们只有在生产线停止状态时，才会启动我们的生产线，其余状态启动，明显没有必要。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package state;

/************************************************
 *@ClassName : StartAction
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/13 0013 21:10】
 *@Version : 1.0.0
 *************************************************/

public class StartAction implements Action {

    @Override
    public void doSomething(Context context) {
        String state = context.getContex();
        System.out.println(&quot;ooo当前状态为：&quot;+state);
        if(&quot;stop&quot;.equals(state)){
            System.out.println(&quot;生产线已经启动，准备生产了。。。&quot;);
            context.setContex(&quot;start&quot;);
        }else{
            System.out.println(&quot;生产线已经启动，不需要再启动&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package state;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/13 0013 21:26】
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+d+`" alt="结果"></p><p>无论是设计模式之禅上的context调用动作，还是菜鸟上的多个动作对象（本例）。都觉得有点不完美。我觉得首先动作对象要有一个，而且应该是环境对象改变后，由动作对象触发行为。</p><p>于是我改造了一下，增加了一个ActionManage类。将其他动作类的冗余代码删掉。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package state;

/************************************************
 *@ClassName : ActionMange
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/13 0013 22:18】
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package state;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/13 0013 21:26】
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果</strong><br><img src="`+l+'" alt="结果"></p>',17);function o(u,m){return e(),s("div",null,[v,t("more"),r])}const g=i(c,[["render",o],["__file","20-state.html.vue"]]);export{g as default};
