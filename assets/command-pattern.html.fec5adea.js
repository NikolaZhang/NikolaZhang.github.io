import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as d,f as s,a as i,e as l}from"./app.4001f435.js";const a="/images/article/181209/res.png",v={},r=i("blockquote",null,[i("p",null,"\u547D\u4EE4\u6A21\u5F0F\u4E3B\u8981\u89E3\u51B3\u884C\u4E3A\u8BF7\u6C42\u8005\u4E0E\u884C\u4E3A\u6267\u884C\u8005\u7684\u5F3A\u8026\u5408\u800C\u51FA\u73B0\u7684\u4E00\u79CD\u884C\u4E3A\u6A21\u5F0F\u3002\u901A\u5E38\u6A21\u5F0F\u6709\u4E09\u79CD\u89D2\u8272\uFF0C\u547D\u4EE4\u6267\u884C\u8005\uFF0C\u547D\u4EE4\uFF0C\u547D\u4EE4\u5165\u53E3\u3002")],-1),c=l(`<h2 id="\u547D\u4EE4\u7684\u6267\u884C\u8005" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u7684\u6267\u884C\u8005" aria-hidden="true">#</a> \u547D\u4EE4\u7684\u6267\u884C\u8005</h2><p>\u4E3A\u4E86\u6613\u4E8E\u6269\u5C55\uFF0C\u6211\u4EEC\u5C06\u6267\u884C\u8005\u7684\u884C\u4E3A\u62BD\u8C61\u4E3A\u63A5\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package command;

/************************************************
 *@ClassName : Invoker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/9 0009 19:52\u3011
 *@Version : 1.0.0
 *************************************************/

public interface GroupI {
    void add();
    void delete();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u51E0\u4E2A\u6267\u884C\u8FD9\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package command;

/************************************************
 *@ClassName : Invoker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/9 0009 19:52\u3011
 *@Version : 1.0.0
 *************************************************/

public class WorkGroup implements GroupI{
    @Override
    public void add() {
        System.out.println(&quot;\u5DE5\u4F5C\u7EC4\u6839\u636E\u547D\u4EE4\u6DFB\u52A0\u96F6\u4EF6&quot;);
    }

    @Override
    public void delete() {
        System.out.println(&quot;\u5DE5\u4F5C\u7EC4\u6839\u636E\u547D\u4EE4\u5220\u9664\u96F6\u4EF6&quot;);
    }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u547D\u4EE4\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u6A21\u5757" aria-hidden="true">#</a> \u547D\u4EE4\u6A21\u5757</h2><p>\u547D\u4EE4\u6A21\u5757\u66F4\u5177\u8F93\u5165\u7684\u547D\u4EE4\uFF0C\u8C03\u7528\u5BF9\u5E94\u7684\u6A21\u5757\u6267\u884C\u547D\u4EE4 \u540C\u6837\u4E3A\u4E86\u6613\u4E8E\u6269\u5C55\u6211\u4EEC\u5C06\u5176\u505A\u6210\u4E00\u4E2A\u62BD\u8C61\u7C7B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package command;

/************************************************
 *@ClassName : Invoker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/9 0009 19:52\u3011
 *@Version : 1.0.0
 *************************************************/

public abstract class CommandA {
    protected WorkGroup workGroup = new WorkGroup();
    protected DesignGroup designGroup = new DesignGroup();

    public abstract void execute(String str) ;


}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B50\u7C7B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package command;

/************************************************
 *@ClassName : DesignCommand
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/9 0009 20:08\u3011
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
            System.out.println(&quot;\u5DE5\u4F5C\u7EC4\u62D2\u7EDD\u8BE5\u547D\u4EE4&quot;);
        }

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u547D\u4EE4\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u5165\u53E3" aria-hidden="true">#</a> \u547D\u4EE4\u5165\u53E3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package command;

/************************************************
 *@ClassName : Invoker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/9 0009 19:52\u3011
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package command;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/9 0009 20:11\u3011
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+a+'" alt="\u7ED3\u679C" loading="lazy"></p>',16);function u(m,t){return e(),d("div",null,[r,s("more"),c])}const p=n(v,[["render",u],["__file","command-pattern.html.vue"]]);export{p as default};
