import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as s,f as l,a as e,e as d}from"./app-5ce73423.js";const a="/images/article/181215/res1.png",r={},v=e("blockquote",null,[e("p",null,"解释器模式，最经典的解释器模型就是我们用的那些IDE。将你编写的语言转成机器语言。这个转换就可以理解为解释。")],-1),t=d(`<h2 id="模型结构" tabindex="-1"><a class="header-anchor" href="#模型结构" aria-hidden="true">#</a> 模型结构</h2><p>解释器模型，有三个主要的角色。</p><ol><li>Context：环境角色，主要用于存放传入的数据。</li><li>AbstractExpress：抽象解释器，是所有解释器的接口或者抽象父类。</li><li>TerminalExpress：终结符表达式，主要解释文法。</li><li>NonTermianlExpress: 非终结符表达式，主要解释符号标记。 比如：select * from database where name = #{name} select，from，where [a-z_A-Z]* =,是非终结表达式。database,*，#{name}这样的就属于终结表达式。 下面看看我这个例子吧。笑笑就好~实在拙劣。。。</li></ol><h2 id="环境角色" tabindex="-1"><a class="header-anchor" href="#环境角色" aria-hidden="true">#</a> 环境角色</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package interpretor;

/************************************************
 *@ClassName : Context
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 13:24】
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽象表达式接口" tabindex="-1"><a class="header-anchor" href="#抽象表达式接口" aria-hidden="true">#</a> 抽象表达式接口</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package interpretor;

/************************************************
 *@ClassName : Expression
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 9:27】
 *@Version : 1.0.0
 *************************************************/

public interface  Expression {
    void interpreter(Context context);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="终结和非终结表达式实现" tabindex="-1"><a class="header-anchor" href="#终结和非终结表达式实现" aria-hidden="true">#</a> 终结和非终结表达式实现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package interpretor;

/************************************************
 *@ClassName : TerminalExpression
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 9:29】
 *@Version : 1.0.0
 *************************************************/

public class TerminalExpression implements Expression {
    @Override
    public void interpreter(Context context) {
        String name = context.getCondition();
        String value = context.getValue();
        System.out.println(&quot;查询条件为name=&quot;+name);
        System.out.println(&quot;需要的结果是：&quot;+value);
        if(&quot;age&quot;.equals(value) &amp;&amp; &quot;zhangsan&quot;.equals(name)){
            System.out.println(&quot;查询年龄为：23&quot;);
        }
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package interpretor;

/************************************************
 *@ClassName : NonTerminalExpression
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 9:29】
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
            System.out.println(&quot;ooo条件查询&quot;);
            this.expression.interpreter(context);
        }
    }
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package interpretor;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/15 0015 9:30】
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+a+'" alt="结果"></p>',14);function c(u,m){return i(),s("div",null,[v,l("more"),t])}const p=n(r,[["render",c],["__file","21-interpreter.html.vue"]]);export{p as default};
