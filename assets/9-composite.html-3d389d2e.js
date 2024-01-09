import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as s,f as d,a as e,e as t}from"./app-da30e7cd.js";const a="/images/article/181211/res1.png",l="/images/article/181211/res2.png",v={},c=e("blockquote",null,[e("p",null,"组合模式，适用于树状结构。模式有三个角色：组合部件，合成模块，叶子。组合部件是组合其余两者的父类。它是一个提供公共属性，方法的抽象类。合成模块用于合成最终的组合对象，叶子节点是组合部件的底层，也就相当于树枝与树叶。该模式又为安全模式和透明模式。两者却别在于父类是否提供用于合成组件的所有方法。")],-1),o=t(`<p>好了，我们的公司最近招人。那么就以人事的结构为例吧。 首先zhangxu是这个虚拟公司的BOSS。下面有两个经理：lisi,wangwu。还有几个招聘的小弟。</p><h1 id="_1-透明模式" tabindex="-1"><a class="header-anchor" href="#_1-透明模式" aria-hidden="true">#</a> 1 透明模式：</h1><h2 id="_1-2-抽象组合部件" tabindex="-1"><a class="header-anchor" href="#_1-2-抽象组合部件" aria-hidden="true">#</a> 1.2 抽象组合部件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package composite.compositiontransparent;

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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-合成模块" tabindex="-1"><a class="header-anchor" href="#_1-3-合成模块" aria-hidden="true">#</a> 1.3 合成模块</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package composite.compositiontransparent;

public class Composite extends Component{


	@Override
	public void addSubNode(Component component) {
		super.getList().add(component);
	}

	public Composite(String name) {
		super.name = name;
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4-叶子" tabindex="-1"><a class="header-anchor" href="#_1-4-叶子" aria-hidden="true">#</a> 1.4 叶子</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package composite.compositiontransparent;

public class Leaf extends Component {

	@Override
	public void addSubNode(Component component) {
		System.out.println(&quot;叶子节点不能添加节点&quot;);
	}

	public Leaf(String name) {
		super.name = name;
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-分配人员并显示" tabindex="-1"><a class="header-anchor" href="#_1-5-分配人员并显示" aria-hidden="true">#</a> 1.5 分配人员并显示</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package composite.compositiontransparent;

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-6-结果" tabindex="-1"><a class="header-anchor" href="#_1-6-结果" aria-hidden="true">#</a> 1.6 结果</h2><p><img src="`+a+`" alt="结果"></p><h1 id="_2-安全模式" tabindex="-1"><a class="header-anchor" href="#_2-安全模式" aria-hidden="true">#</a> 2 安全模式</h1><h2 id="_2-2-抽象组合部件" tabindex="-1"><a class="header-anchor" href="#_2-2-抽象组合部件" aria-hidden="true">#</a> 2.2 抽象组合部件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package composite.compostitionsafe;

public abstract class Component {
	protected String name;
	protected String pname;

	public void getInfo() {
		System.out.println(this.name+&quot;/属于：&quot;+pname);
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-合成模块" tabindex="-1"><a class="header-anchor" href="#_2-3-合成模块" aria-hidden="true">#</a> 2.3 合成模块</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package composite.compostitionsafe;

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-叶子" tabindex="-1"><a class="header-anchor" href="#_2-4-叶子" aria-hidden="true">#</a> 2.4 叶子</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package composite.compostitionsafe;

public class Leaf extends Component {

	public Leaf(String name) {
		super.name = name;
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-5-分配人员并显示" tabindex="-1"><a class="header-anchor" href="#_2-5-分配人员并显示" aria-hidden="true">#</a> 2.5 分配人员并显示</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package composite.compostitionsafe;

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-6-结果" tabindex="-1"><a class="header-anchor" href="#_2-6-结果" aria-hidden="true">#</a> 2.6 结果</h2><p><img src="`+l+'" alt="结果"></p>',23);function r(m,u){return i(),s("div",null,[c,d("more"),o])}const h=n(v,[["render",r],["__file","9-composite.html.vue"]]);export{h as default};
