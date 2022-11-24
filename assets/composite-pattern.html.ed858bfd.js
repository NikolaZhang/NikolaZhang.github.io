import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as s,f as d,a as e,e as t}from"./app.4001f435.js";const a="/images/article/181211/res1.png",l="/images/article/181211/res2.png",v={},c=e("blockquote",null,[e("p",null,"\u7EC4\u5408\u6A21\u5F0F\uFF0C\u9002\u7528\u4E8E\u6811\u72B6\u7ED3\u6784\u3002\u6A21\u5F0F\u6709\u4E09\u4E2A\u89D2\u8272\uFF1A\u7EC4\u5408\u90E8\u4EF6\uFF0C\u5408\u6210\u6A21\u5757\uFF0C\u53F6\u5B50\u3002\u7EC4\u5408\u90E8\u4EF6\u662F\u7EC4\u5408\u5176\u4F59\u4E24\u8005\u7684\u7236\u7C7B\u3002\u5B83\u662F\u4E00\u4E2A\u63D0\u4F9B\u516C\u5171\u5C5E\u6027\uFF0C\u65B9\u6CD5\u7684\u62BD\u8C61\u7C7B\u3002\u5408\u6210\u6A21\u5757\u7528\u4E8E\u5408\u6210\u6700\u7EC8\u7684\u7EC4\u5408\u5BF9\u8C61\uFF0C\u53F6\u5B50\u8282\u70B9\u662F\u7EC4\u5408\u90E8\u4EF6\u7684\u5E95\u5C42\uFF0C\u4E5F\u5C31\u76F8\u5F53\u4E8E\u6811\u679D\u4E0E\u6811\u53F6\u3002\u8BE5\u6A21\u5F0F\u53C8\u4E3A\u5B89\u5168\u6A21\u5F0F\u548C\u900F\u660E\u6A21\u5F0F\u3002\u4E24\u8005\u5374\u522B\u5728\u4E8E\u7236\u7C7B\u662F\u5426\u63D0\u4F9B\u7528\u4E8E\u5408\u6210\u7EC4\u4EF6\u7684\u6240\u6709\u65B9\u6CD5\u3002")],-1),o=t(`<p>\u597D\u4E86\uFF0C\u6211\u4EEC\u7684\u516C\u53F8\u6700\u8FD1\u62DB\u4EBA\u3002\u90A3\u4E48\u5C31\u4EE5\u4EBA\u4E8B\u7684\u7ED3\u6784\u4E3A\u4F8B\u5427\u3002 \u9996\u5148zhangxu\u662F\u8FD9\u4E2A\u865A\u62DF\u516C\u53F8\u7684BOSS\u3002\u4E0B\u9762\u6709\u4E24\u4E2A\u7ECF\u7406\uFF1Alisi,wangwu\u3002\u8FD8\u6709\u51E0\u4E2A\u62DB\u8058\u7684\u5C0F\u5F1F\u3002</p><h1 id="_1-\u900F\u660E\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u900F\u660E\u6A21\u5F0F" aria-hidden="true">#</a> 1 \u900F\u660E\u6A21\u5F0F\uFF1A</h1><h2 id="_1-2-\u62BD\u8C61\u7EC4\u5408\u90E8\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-2-\u62BD\u8C61\u7EC4\u5408\u90E8\u4EF6" aria-hidden="true">#</a> 1.2 \u62BD\u8C61\u7EC4\u5408\u90E8\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package composite.compositiontransparent;

import java.util.ArrayList;
import java.util.List;

public abstract class Component {
	protected String name;
	private List&lt;Component&gt; list = new ArrayList&lt;&gt;();

	public abstract void addSubNode(Component component);
	public void getInfo() {
		System.out.println(this.name);
	}

	public List&lt;Component&gt; getList() {
		return list;
	}
	public void setList(List&lt;Component&gt; list) {
		this.list = list;
	}

}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-\u5408\u6210\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5408\u6210\u6A21\u5757" aria-hidden="true">#</a> 1.3 \u5408\u6210\u6A21\u5757</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package composite.compositiontransparent;

public class Composite extends Component{


	@Override
	public void addSubNode(Component component) {
		super.getList().add(component);
	}

	public Composite(String name) {
		super.name = name;
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4-\u53F6\u5B50" tabindex="-1"><a class="header-anchor" href="#_1-4-\u53F6\u5B50" aria-hidden="true">#</a> 1.4 \u53F6\u5B50</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package composite.compositiontransparent;

public class Leaf extends Component {

	@Override
	public void addSubNode(Component component) {
		System.out.println(&quot;\u53F6\u5B50\u8282\u70B9\u4E0D\u80FD\u6DFB\u52A0\u8282\u70B9&quot;);
	}

	public Leaf(String name) {
		super.name = name;
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-\u5206\u914D\u4EBA\u5458\u5E76\u663E\u793A" tabindex="-1"><a class="header-anchor" href="#_1-5-\u5206\u914D\u4EBA\u5458\u5E76\u663E\u793A" aria-hidden="true">#</a> 1.5 \u5206\u914D\u4EBA\u5458\u5E76\u663E\u793A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package composite.compositiontransparent;

public class Test {
	public static void main(String[] args) {
		Component component1 = new Composite(&quot;zhangxu&quot;);
		Component component2 = new Composite(&quot;lisi&quot;);
		Component component3 = new Composite(&quot;wangwu&quot;);
		Component component4 = new Leaf(&quot;xiaozhen&quot;);
		Component component5 = new Leaf(&quot;xiaochen&quot;);
		Component component6 = new Leaf(&quot;xiaochenchen&quot;);

		component1.addSubNode(component2);
		component1.addSubNode(component3);
		component2.addSubNode(component4);
		component3.addSubNode(component5);
		component1.addSubNode(component6);

		getNodes(component1);
	}

	public static void getNodes(Component component) {
		component.getInfo();
		if(component.getList()==null || component.getList().size() == 0) {
			return;
		}
		for(Component component2 :component.getList()) {
			getNodes(component2);
		}
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-6-\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_1-6-\u7ED3\u679C" aria-hidden="true">#</a> 1.6 \u7ED3\u679C</h2><p><img src="`+a+`" alt="\u7ED3\u679C" loading="lazy"></p><h1 id="_2-\u5B89\u5168\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u5168\u6A21\u5F0F" aria-hidden="true">#</a> 2 \u5B89\u5168\u6A21\u5F0F</h1><h2 id="_2-2-\u62BD\u8C61\u7EC4\u5408\u90E8\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-2-\u62BD\u8C61\u7EC4\u5408\u90E8\u4EF6" aria-hidden="true">#</a> 2.2 \u62BD\u8C61\u7EC4\u5408\u90E8\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package composite.compostitionsafe;

public abstract class Component {
	protected String name;
	protected String pname;

	public void getInfo() {
		System.out.println(this.name+&quot;/\u5C5E\u4E8E\uFF1A&quot;+pname);
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-\u5408\u6210\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5408\u6210\u6A21\u5757" aria-hidden="true">#</a> 2.3 \u5408\u6210\u6A21\u5757</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package composite.compostitionsafe;

import java.util.ArrayList;
import java.util.List;

public class Composite extends Component{
	private List&lt;Component&gt; list = new ArrayList&lt;&gt;();

	public void addSubNode(Component component) {
		component.pname = this.name;
		list.add(component);
	}

	public void getNodes(){
		getInfo();
		for(Component component :this.list){
			if(Leaf.class.isInstance(component)){
				((Leaf)component).getInfo();
				continue;
			}
			((Composite) component).getNodes();
		}
	}

	public Composite(String name) {
		super.name = name;
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-\u53F6\u5B50" tabindex="-1"><a class="header-anchor" href="#_2-4-\u53F6\u5B50" aria-hidden="true">#</a> 2.4 \u53F6\u5B50</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package composite.compostitionsafe;

public class Leaf extends Component {

	public Leaf(String name) {
		super.name = name;
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-5-\u5206\u914D\u4EBA\u5458\u5E76\u663E\u793A" tabindex="-1"><a class="header-anchor" href="#_2-5-\u5206\u914D\u4EBA\u5458\u5E76\u663E\u793A" aria-hidden="true">#</a> 2.5 \u5206\u914D\u4EBA\u5458\u5E76\u663E\u793A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package composite.compostitionsafe;

public class Test {
	public static void main(String[] args) {
		Composite composite1 = new Composite(&quot;zhangxu&quot;);
		Composite composite2 = new Composite(&quot;lisi&quot;);
		Composite composite3 = new Composite(&quot;wangwu&quot;);
		Leaf leaf1 = new Leaf(&quot;xiaozhen&quot;);
		Leaf leaf2 = new Leaf(&quot;xiaochen&quot;);

		composite1.addSubNode(composite2);
		composite1.addSubNode(composite3);
		composite2.addSubNode(leaf1);
		composite3.addSubNode(leaf2);

		composite1.getNodes();
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-6-\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_2-6-\u7ED3\u679C" aria-hidden="true">#</a> 2.6 \u7ED3\u679C</h2><p><img src="`+l+'" alt="\u7ED3\u679C" loading="lazy"></p>',23);function r(m,u){return i(),s("div",null,[c,d("more"),o])}const h=n(v,[["render",r],["__file","composite-pattern.html.vue"]]);export{h as default};
