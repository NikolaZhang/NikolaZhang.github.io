import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as d,f as s,a as i,e as l}from"./app-70cd238e.js";const a="/images/article/181209/res.png",v={},r=i("blockquote",null,[i("p",null,"命令模式主要解决行为请求者与行为执行者的强耦合而出现的一种行为模式。通常模式有三种角色，命令执行者，命令，命令入口。")],-1),c=l(`<h2 id="命令的执行者" tabindex="-1"><a class="header-anchor" href="#命令的执行者" aria-hidden="true">#</a> 命令的执行者</h2><p>为了易于扩展，我们将执行者的行为抽象为接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package command;

/************************************************
 *@ClassName : Invoker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 19:52】
 *@Version : 1.0.0
 *************************************************/

public interface GroupI {
    void add();
    void delete();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建几个执行这类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package command;

/************************************************
 *@ClassName : Invoker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 19:52】
 *@Version : 1.0.0
 *************************************************/

public class WorkGroup implements GroupI{
    @Override
    public void add() {
        System.out.println(&quot;工作组根据命令添加零件&quot;);
    }

    @Override
    public void delete() {
        System.out.println(&quot;工作组根据命令删除零件&quot;);
    }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令模块" tabindex="-1"><a class="header-anchor" href="#命令模块" aria-hidden="true">#</a> 命令模块</h2><p>命令模块更具输入的命令，调用对应的模块执行命令 同样为了易于扩展我们将其做成一个抽象类。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package command;

/************************************************
 *@ClassName : Invoker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 19:52】
 *@Version : 1.0.0
 *************************************************/

public abstract class CommandA {
    protected WorkGroup workGroup = new WorkGroup();
    protected DesignGroup designGroup = new DesignGroup();

    public abstract void execute(String str) ;


}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package command;

/************************************************
 *@ClassName : DesignCommand
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 20:08】
 *@Version : 1.0.0
 *************************************************/

public class WorkCommand extends CommandA{

    @Override
    public void execute(String str) {
        if(&quot;add&quot;.equals(str)){
            super.workGroup.add();
        } else if(&quot;delete&quot;.equals(str)){
            super.workGroup.delete();
        }else {
            System.out.println(&quot;工作组拒绝该命令&quot;);
        }

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令入口" tabindex="-1"><a class="header-anchor" href="#命令入口" aria-hidden="true">#</a> 命令入口</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package command;

/************************************************
 *@ClassName : Invoker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 19:52】
 *@Version : 1.0.0
 *************************************************/

public class Invoker {
    private CommandA commandA;

    public void setCommandA(CommandA commandA) {
        this.commandA = commandA;
    }

    public void action(String str){
        commandA.execute(str);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package command;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/9 0009 20:11】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        Invoker invoker = new Invoker();

        CommandA commandWork = new WorkCommand();
        invoker.setCommandA(commandWork);
        invoker.action(&quot;add&quot;);
        invoker.action(&quot;delete&quot;);
        invoker.action(&quot;update&quot;);

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+a+'" alt="结果"></p>',16);function u(m,t){return e(),d("div",null,[r,s("more"),c])}const p=n(v,[["render",u],["__file","19-command.html.vue"]]);export{p as default};
