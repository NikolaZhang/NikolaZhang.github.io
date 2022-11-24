import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as a,a as i,e as d}from"./app.e7c9cb9e.js";const t="/images/article/181214/res.png",l={},c=i("blockquote",null,[i("p",null,"\u4E2D\u4ECB\u8005\u6A21\u5F0F\uFF1A\u7528\u6765\u964D\u4F4E\u591A\u4E2A\u5BF9\u8C61\u548C\u7C7B\u4E4B\u95F4\u7684\u901A\u4FE1\u590D\u6742\u6027\u3002\u8FD9\u79CD\u6A21\u5F0F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u4E2D\u4ECB\u7C7B\uFF0C\u8BE5\u7C7B\u901A\u5E38\u5904\u7406\u4E0D\u540C\u7C7B\u4E4B\u95F4\u7684\u901A\u4FE1\uFF0C\u5E76\u652F\u6301\u677E\u8026\u5408\uFF0C\u4F7F\u4EE3\u7801\u6613\u4E8E\u7EF4\u62A4\u3002\u4E2D\u4ECB\u8005\u6A21\u5F0F\u5C5E\u4E8E\u884C\u4E3A\u578B\u6A21\u5F0F\u3002\u3010\u83DC\u9E1F\u3011")],-1),r=d(`<p>\u4ECE\u5DE5\u5382\u6A21\u5F0F\u5F00\u59CB\u6211\u4EEC\u5DE5\u5382\u5C31\u4E00\u76F4\u5728\u9020\u8F66\uFF0C\u4ECA\u5929\u7EC8\u4E8E\uFF0C\u7EC8\u4E8E\u6709\u4EBA\u8981\u4E70\u6211\u4EEC\u7684\u8F66\u4E86\uFF01\u4E8E\u662F\u6211\u4EEC\u516C\u53F8\u5C31\u5F00\u4E86\u548C\u5176\u4ED6\u516C\u53F8\u8C08\u8D77\u6765\u4E86\u3002\u3002\u3002\u3002</p><h2 id="\u4EA4\u8C08\u52A8\u4F5C\u53CA\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u8C08\u52A8\u4F5C\u53CA\u5BF9\u8C61" aria-hidden="true">#</a> \u4EA4\u8C08\u52A8\u4F5C\u53CA\u5BF9\u8C61</h2><p>\u9996\u5148\u5B9A\u4E49\u4E00\u4E2A\u8BF4\u8BDD\u52A8\u4F5C\u7684\u62BD\u8C61\u7C7B\u3002\u5BA2\u6237\u548C\u6211\u4EEC\u516C\u53F8\u90FD\u8981\u8BF4\u8BDD\u554A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package mediation;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u516C\u53F8\u53CA\u5BA2\u6237\u662F\u8FD9\u6837\uFF0C\u7EE7\u627F\u4E00\u4E0BAction\u5C31\u597D\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package mediation;

public class CarCompany extends Action{

	public CarCompany(String name) {
		super(name);
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E2D\u4ECB\u8005\u957F\u8FD9\u6A21\u6837" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u4ECB\u8005\u957F\u8FD9\u6A21\u6837" aria-hidden="true">#</a> \u4E2D\u4ECB\u8005\u957F\u8FD9\u6A21\u6837</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package mediation;

public class Mediator {

	public static void execute(Action action, String words, Action... action2) {
	    StringBuffer cusNames = new StringBuffer();
	    for (Action act : action2){
	        cusNames.append(act.getName()+&quot; &quot;);
        }
	    String msg = &quot;\u3010&quot;+action.getName() + &quot;\u3011 \u5BF9\u3010 &quot;+cusNames.toString()+&quot;\u3011\u8BF4\uFF1A&quot;+words;
	    System.out.println(msg);
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u5728\u62BD\u8C61\u7C7B\u4E2D\uFF0C\u6211\u4EEC\u7684\u52A8\u4F5C\u90FD\u7ECF\u8FC7\u4E2D\u4ECB\u8005\u5904\u7406\u3002</p><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package mediation;

public class Test {
	public static void main(String[] args) {
		Action com = new CarCompany(&quot;\u8F66\u5382&quot;);
		Action cusA = new CustomerA(&quot;\u5BA2\u6237A&quot;);
		Action cusB = new CustomerB(&quot;\u5BA2\u6237B&quot;);
		com.saySomething(&quot;\u6211\u4EEC\u7684\u8F66\u8D28\u91CF\u597D\u3002&quot;, cusA,cusB);
		cusA.saySomething(&quot;\u597D\u4E0D\u597D\uFF0C\u8DD1\u4E00\u8DD1\uFF01&quot;, com);
        cusB.saySomething(&quot;\u6211\u770B\u8FD9\u8F66\u884C\uFF01&quot;, com);
        com.saySomething(&quot;88\u6298\u5356\u4F60\u4E86\uFF0C\u5BA2\u6237A\u4E0D\u77E5\u9053\u7684\u3002&quot;, cusB);
        cusB.saySomething(&quot;o\u4E86&quot;, com);
        cusA.saySomething(&quot;\u4F60\u4EEC\u5728\u8BF4\u5565....(\u2299_\u2299)?&quot;, com,cusB);

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+t+'" alt="\u7ED3\u679C" loading="lazy"></p>',13);function u(v,m){return n(),s("div",null,[c,a("more"),r])}const p=e(l,[["render",u],["__file","mediation-pattern.html.vue"]]);export{p as default};
