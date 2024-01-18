import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,f as l,a as i,e as t}from"./app-1RIej2TD.js";const a="/images/article/181212/res2.png",d={},r=i("blockquote",null,[i("p",null,"责任链模式，将请求和处理对象分离，将请求发送给一个请求处理入口后，谁具有请求的处理权限，谁就处理请求。")],-1),v=t(`<p>每年这个时候大概都是公司的聚餐季。但是我们的汽车厂，领导们饭后还有特别活动，比如讨论个“来年计划”啥的。我不清楚，我没当过领导。</p><h2 id="请求入口position" tabindex="-1"><a class="header-anchor" href="#请求入口position" aria-hidden="true">#</a> 请求入口Position</h2><p>这里我们将请求的处理者分级，使用Position类型的nextPostion属性。接着创建该类的构造器、set方法等等。这都没什么好说的。关键的是giveNotice方法。方法的第一个参数是我们的请求级别，第二个参数就是请求的内容。通过不断判断nextPosition中的level是否符合条件决定是否将请求交给对象处理。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package responsibilitychain;

public abstract class Position {
	private int level;
	private Position nextPosition;
	private String name;

	public void giveNotice(int level, String notice) {
		if(level&gt;=this.level) {
			System.out.println(this.name+&quot;获取：&quot;+notice);
		}
		if(this.nextPosition == null){
			return;
		}
		this.nextPosition.giveNotice(level, notice);
	}

	public void setNextPosition(Position position){
		this.nextPosition = position;
	}

	public Position(int level, String name) {
		super();
		this.level = level;
		this.name = name;
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承position" tabindex="-1"><a class="header-anchor" href="#继承position" aria-hidden="true">#</a> 继承Position</h2><p>通过继承我们实现几个不同级别的请求处理者。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package responsibilitychain;

/************************************************
 *@ClassName : Woker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/12 0012 21:44】
 *@Version : 1.0.0
 *************************************************/

public class Master extends  Position {
    public Master(int level, String name) {
        super(level,  name);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到每个请求处理者只是重写了构造器。以后我们实例化一个处理者对象的时候就设置其对应级别level。</p><h2 id="最近聚餐-周知周知" tabindex="-1"><a class="header-anchor" href="#最近聚餐-周知周知" aria-hidden="true">#</a> 最近聚餐，周知周知</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package responsibilitychain;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/12/12 0012 21:45】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        Position master = new Master(1,  &quot;大BOSS&quot;);
        Position leader = new Leader(2,  &quot;组长&quot;);
        Position worker = new Worker(3,  &quot;劳动者&quot;);
        master.setNextPosition(leader);
        leader.setNextPosition(worker);
        master.giveNotice(3,  &quot;今晚吃个饭&quot;);
        master.giveNotice(2,  &quot;饭后唱个K&quot;);

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>聚餐通知是最低级别的，所有人都会看到。但是唱k通知只有领导们才会看到。</p><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+a+'" alt="结果"></p><p>最近开始忙了~~~不能快快乐乐的写博客了。。。。悲伤。。</p>',14);function c(o,u){return n(),s("div",null,[r,l("more"),v])}const p=e(d,[["render",c],["__file","22-chain-of-responsibility.html.vue"]]);export{p as default};
