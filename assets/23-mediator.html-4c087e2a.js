import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as a,a as e,e as d}from"./app-70cd238e.js";const t="/images/article/181214/res.png",l={},c=e("blockquote",null,[e("p",null,"中介者模式：用来降低多个对象和类之间的通信复杂性。这种模式提供了一个中介类，该类通常处理不同类之间的通信，并支持松耦合，使代码易于维护。中介者模式属于行为型模式。【菜鸟】")],-1),r=d(`<p>从工厂模式开始我们工厂就一直在造车，今天终于，终于有人要买我们的车了！于是我们公司就开了和其他公司谈起来了。。。。</p><h2 id="交谈动作及对象" tabindex="-1"><a class="header-anchor" href="#交谈动作及对象" aria-hidden="true">#</a> 交谈动作及对象</h2><p>首先定义一个说话动作的抽象类。客户和我们公司都要说话啊。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package mediation;

public abstract class Action {
    private String name;

    public String getName() {
        return name;
    }

    public Action(String name) {
        this.name = name;
    }

	public void saySomething(String words, Action... action){
        Mediator.execute(this, words, action);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们公司及客户是这样，继承一下Action就好了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package mediation;

public class CarCompany extends Action{

	public CarCompany(String name) {
		super(name);
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中介者长这模样" tabindex="-1"><a class="header-anchor" href="#中介者长这模样" aria-hidden="true">#</a> 中介者长这模样</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package mediation;

public class Mediator {

	public static void execute(Action action, String words, Action... action2) {
	    StringBuffer cusNames = new StringBuffer();
	    for (Action act : action2){
	        cusNames.append(act.getName()+&quot; &quot;);
        }
	    String msg = &quot;【&quot;+action.getName() + &quot;】 对【 &quot;+cusNames.toString()+&quot;】说：&quot;+words;
	    System.out.println(msg);
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意在抽象类中，我们的动作都经过中介者处理。</p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package mediation;

public class Test {
	public static void main(String[] args) {
		Action com = new CarCompany(&quot;车厂&quot;);
		Action cusA = new CustomerA(&quot;客户A&quot;);
		Action cusB = new CustomerB(&quot;客户B&quot;);
		com.saySomething(&quot;我们的车质量好。&quot;, cusA,cusB);
		cusA.saySomething(&quot;好不好，跑一跑！&quot;, com);
        cusB.saySomething(&quot;我看这车行！&quot;, com);
        com.saySomething(&quot;88折卖你了，客户A不知道的。&quot;, cusB);
        cusB.saySomething(&quot;o了&quot;, com);
        cusA.saySomething(&quot;你们在说啥....(⊙_⊙)?&quot;, com,cusB);

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+t+'" alt="结果"></p>',13);function u(v,m){return n(),s("div",null,[c,a("more"),r])}const p=i(l,[["render",u],["__file","23-mediator.html.vue"]]);export{p as default};
