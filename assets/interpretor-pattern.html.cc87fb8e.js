import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as s,f as l,a as n,e as d}from"./app.4001f435.js";const a="/images/article/181215/res1.png",r={},v=n("blockquote",null,[n("p",null,"\u89E3\u91CA\u5668\u6A21\u5F0F\uFF0C\u6700\u7ECF\u5178\u7684\u89E3\u91CA\u5668\u6A21\u578B\u5C31\u662F\u6211\u4EEC\u7528\u7684\u90A3\u4E9BIDE\u3002\u5C06\u4F60\u7F16\u5199\u7684\u8BED\u8A00\u8F6C\u6210\u673A\u5668\u8BED\u8A00\u3002\u8FD9\u4E2A\u8F6C\u6362\u5C31\u53EF\u4EE5\u7406\u89E3\u4E3A\u89E3\u91CA\u3002")],-1),t=d(`<h2 id="\u6A21\u578B\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u7ED3\u6784" aria-hidden="true">#</a> \u6A21\u578B\u7ED3\u6784</h2><p>\u89E3\u91CA\u5668\u6A21\u578B\uFF0C\u6709\u4E09\u4E2A\u4E3B\u8981\u7684\u89D2\u8272\u3002</p><ol><li>Context\uFF1A\u73AF\u5883\u89D2\u8272\uFF0C\u4E3B\u8981\u7528\u4E8E\u5B58\u653E\u4F20\u5165\u7684\u6570\u636E\u3002</li><li>AbstractExpress\uFF1A\u62BD\u8C61\u89E3\u91CA\u5668\uFF0C\u662F\u6240\u6709\u89E3\u91CA\u5668\u7684\u63A5\u53E3\u6216\u8005\u62BD\u8C61\u7236\u7C7B\u3002</li><li>TerminalExpress\uFF1A\u7EC8\u7ED3\u7B26\u8868\u8FBE\u5F0F\uFF0C\u4E3B\u8981\u89E3\u91CA\u6587\u6CD5\u3002</li><li>NonTermianlExpress: \u975E\u7EC8\u7ED3\u7B26\u8868\u8FBE\u5F0F\uFF0C\u4E3B\u8981\u89E3\u91CA\u7B26\u53F7\u6807\u8BB0\u3002 \u6BD4\u5982\uFF1Aselect * from database where name = #{name} select\uFF0Cfrom\uFF0Cwhere [a-z_A-Z]* =,\u662F\u975E\u7EC8\u7ED3\u8868\u8FBE\u5F0F\u3002database,*\uFF0C#{name}\u8FD9\u6837\u7684\u5C31\u5C5E\u4E8E\u7EC8\u7ED3\u8868\u8FBE\u5F0F\u3002 \u4E0B\u9762\u770B\u770B\u6211\u8FD9\u4E2A\u4F8B\u5B50\u5427\u3002\u7B11\u7B11\u5C31\u597D~\u5B9E\u5728\u62D9\u52A3\u3002\u3002\u3002</li></ol><h2 id="\u73AF\u5883\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u89D2\u8272" aria-hidden="true">#</a> \u73AF\u5883\u89D2\u8272</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package interpretor;

/************************************************
 *@ClassName : Context
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 13:24\u3011
 *@Version : 1.0.0
 *************************************************/

public class Context {
    private String condition;
    private String value;
    private String expression;


    public Context(String condition, String value, String expression) {
        this.condition = condition;
        this.value = value;
        this.expression = expression;
    }

    public String getCondition() {
        return condition;
    }

    public String getValue() {
        return value;
    }

    public String getExpression() {
        return expression;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62BD\u8C61\u8868\u8FBE\u5F0F\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u8868\u8FBE\u5F0F\u63A5\u53E3" aria-hidden="true">#</a> \u62BD\u8C61\u8868\u8FBE\u5F0F\u63A5\u53E3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package interpretor;

/************************************************
 *@ClassName : Expression
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 9:27\u3011
 *@Version : 1.0.0
 *************************************************/

public interface  Expression {
    void interpreter(Context context);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC8\u7ED3\u548C\u975E\u7EC8\u7ED3\u8868\u8FBE\u5F0F\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7EC8\u7ED3\u548C\u975E\u7EC8\u7ED3\u8868\u8FBE\u5F0F\u5B9E\u73B0" aria-hidden="true">#</a> \u7EC8\u7ED3\u548C\u975E\u7EC8\u7ED3\u8868\u8FBE\u5F0F\u5B9E\u73B0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package interpretor;

/************************************************
 *@ClassName : TerminalExpression
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 9:29\u3011
 *@Version : 1.0.0
 *************************************************/

public class TerminalExpression implements Expression {
    @Override
    public void interpreter(Context context) {
        String name = context.getCondition();
        String value = context.getValue();
        System.out.println(&quot;\u67E5\u8BE2\u6761\u4EF6\u4E3Aname=&quot;+name);
        System.out.println(&quot;\u9700\u8981\u7684\u7ED3\u679C\u662F\uFF1A&quot;+value);
        if(&quot;age&quot;.equals(value) &amp;&amp; &quot;zhangsan&quot;.equals(name)){
            System.out.println(&quot;\u67E5\u8BE2\u5E74\u9F84\u4E3A\uFF1A23&quot;);
        }
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package interpretor;

/************************************************
 *@ClassName : NonTerminalExpression
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 9:29\u3011
 *@Version : 1.0.0
 *************************************************/

public class NonTerminalExpression implements Expression {

    private Expression expression;

    public NonTerminalExpression(Expression expression) {
        this.expression = expression;
    }

    @Override
    public void interpreter(Context context) {
        String str = context.getExpression();
        if(str.contains(&quot;select&quot;) &amp;&amp; str.contains(&quot;where&quot;)&amp;&amp; str.contains(&quot;=&quot;)){
            System.out.println(&quot;ooo\u6761\u4EF6\u67E5\u8BE2&quot;);
            this.expression.interpreter(context);
        }
    }
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package interpretor;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/15 0015 9:30\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        String input = &quot;select _value where name = _name&quot;;
        Context context = new Context(&quot;zhangsan&quot;, &quot;age&quot;, input);

        Expression tExp = new TerminalExpression();
        Expression ntExp = new NonTerminalExpression(tExp);
        ntExp.interpreter(context);

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+a+'" alt="\u7ED3\u679C" loading="lazy"></p>',14);function c(u,m){return i(),s("div",null,[v,l("more"),t])}const p=e(r,[["render",c],["__file","interpretor-pattern.html.vue"]]);export{p as default};
