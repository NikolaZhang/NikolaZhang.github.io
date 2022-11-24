import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as l,a as i,e as t}from"./app.e7c9cb9e.js";const a="/images/article/181212/res2.png",d={},r=i("blockquote",null,[i("p",null,"\u8D23\u4EFB\u94FE\u6A21\u5F0F\uFF0C\u5C06\u8BF7\u6C42\u548C\u5904\u7406\u5BF9\u8C61\u5206\u79BB\uFF0C\u5C06\u8BF7\u6C42\u53D1\u9001\u7ED9\u4E00\u4E2A\u8BF7\u6C42\u5904\u7406\u5165\u53E3\u540E\uFF0C\u8C01\u5177\u6709\u8BF7\u6C42\u7684\u5904\u7406\u6743\u9650\uFF0C\u8C01\u5C31\u5904\u7406\u8BF7\u6C42\u3002")],-1),v=t(`<p>\u6BCF\u5E74\u8FD9\u4E2A\u65F6\u5019\u5927\u6982\u90FD\u662F\u516C\u53F8\u7684\u805A\u9910\u5B63\u3002\u4F46\u662F\u6211\u4EEC\u7684\u6C7D\u8F66\u5382\uFF0C\u9886\u5BFC\u4EEC\u996D\u540E\u8FD8\u6709\u7279\u522B\u6D3B\u52A8\uFF0C\u6BD4\u5982\u8BA8\u8BBA\u4E2A\u201C\u6765\u5E74\u8BA1\u5212\u201D\u5565\u7684\u3002\u6211\u4E0D\u6E05\u695A\uFF0C\u6211\u6CA1\u5F53\u8FC7\u9886\u5BFC\u3002</p><h2 id="\u8BF7\u6C42\u5165\u53E3position" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u5165\u53E3position" aria-hidden="true">#</a> \u8BF7\u6C42\u5165\u53E3Position</h2><p>\u8FD9\u91CC\u6211\u4EEC\u5C06\u8BF7\u6C42\u7684\u5904\u7406\u8005\u5206\u7EA7\uFF0C\u4F7F\u7528Position\u7C7B\u578B\u7684nextPostion\u5C5E\u6027\u3002\u63A5\u7740\u521B\u5EFA\u8BE5\u7C7B\u7684\u6784\u9020\u5668\u3001set\u65B9\u6CD5\u7B49\u7B49\u3002\u8FD9\u90FD\u6CA1\u4EC0\u4E48\u597D\u8BF4\u7684\u3002\u5173\u952E\u7684\u662FgiveNotice\u65B9\u6CD5\u3002\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6211\u4EEC\u7684\u8BF7\u6C42\u7EA7\u522B\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5C31\u662F\u8BF7\u6C42\u7684\u5185\u5BB9\u3002\u901A\u8FC7\u4E0D\u65AD\u5224\u65ADnextPosition\u4E2D\u7684level\u662F\u5426\u7B26\u5408\u6761\u4EF6\u51B3\u5B9A\u662F\u5426\u5C06\u8BF7\u6C42\u4EA4\u7ED9\u5BF9\u8C61\u5904\u7406\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package responsibilitychain;

public abstract class Position {
	private int level;
	private Position nextPosition;
	private String name;

	public void giveNotice(int level, String notice) {
		if(level&gt;=this.level) {
			System.out.println(this.name+&quot;\u83B7\u53D6\uFF1A&quot;+notice);
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EE7\u627Fposition" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627Fposition" aria-hidden="true">#</a> \u7EE7\u627FPosition</h2><p>\u901A\u8FC7\u7EE7\u627F\u6211\u4EEC\u5B9E\u73B0\u51E0\u4E2A\u4E0D\u540C\u7EA7\u522B\u7684\u8BF7\u6C42\u5904\u7406\u8005\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package responsibilitychain;

/************************************************
 *@ClassName : Woker
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/12 0012 21:44\u3011
 *@Version : 1.0.0
 *************************************************/

public class Master extends  Position {
    public Master(int level, String name) {
        super(level,  name);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u6BCF\u4E2A\u8BF7\u6C42\u5904\u7406\u8005\u53EA\u662F\u91CD\u5199\u4E86\u6784\u9020\u5668\u3002\u4EE5\u540E\u6211\u4EEC\u5B9E\u4F8B\u5316\u4E00\u4E2A\u5904\u7406\u8005\u5BF9\u8C61\u7684\u65F6\u5019\u5C31\u8BBE\u7F6E\u5176\u5BF9\u5E94\u7EA7\u522Blevel\u3002</p><h2 id="\u6700\u8FD1\u805A\u9910-\u5468\u77E5\u5468\u77E5" tabindex="-1"><a class="header-anchor" href="#\u6700\u8FD1\u805A\u9910-\u5468\u77E5\u5468\u77E5" aria-hidden="true">#</a> \u6700\u8FD1\u805A\u9910\uFF0C\u5468\u77E5\u5468\u77E5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package responsibilitychain;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/12 0012 21:45\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        Position master = new Master(1,  &quot;\u5927BOSS&quot;);
        Position leader = new Leader(2,  &quot;\u7EC4\u957F&quot;);
        Position worker = new Worker(3,  &quot;\u52B3\u52A8\u8005&quot;);
        master.setNextPosition(leader);
        leader.setNextPosition(worker);
        master.giveNotice(3,  &quot;\u4ECA\u665A\u5403\u4E2A\u996D&quot;);
        master.giveNotice(2,  &quot;\u996D\u540E\u5531\u4E2AK&quot;);

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u805A\u9910\u901A\u77E5\u662F\u6700\u4F4E\u7EA7\u522B\u7684\uFF0C\u6240\u6709\u4EBA\u90FD\u4F1A\u770B\u5230\u3002\u4F46\u662F\u5531k\u901A\u77E5\u53EA\u6709\u9886\u5BFC\u4EEC\u624D\u4F1A\u770B\u5230\u3002</p><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+a+'" alt="\u7ED3\u679C" loading="lazy"></p><p>\u6700\u8FD1\u5F00\u59CB\u5FD9\u4E86~~~\u4E0D\u80FD\u5FEB\u5FEB\u4E50\u4E50\u7684\u5199\u535A\u5BA2\u4E86\u3002\u3002\u3002\u3002\u60B2\u4F24\u3002\u3002</p>',14);function c(o,u){return n(),s("div",null,[r,l("more"),v])}const p=e(d,[["render",c],["__file","responsibility-chain-pattern.html.vue"]]);export{p as default};
