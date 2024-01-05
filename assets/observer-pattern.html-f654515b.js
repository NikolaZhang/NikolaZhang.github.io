import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as s,a as e,e as r}from"./app-907d9a31.js";const l="/images/article/181212/observable.png",d="/images/article/181212/res1.png",t={},v=e("blockquote",null,[e("p",null,"观察模式，提供了一种实时监听方案。定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。[菜鸟]")],-1),c=r(`<p>当我们的流水线，每生产一辆车，我们都要记录并检验这辆车。 这里的记录员和质检员就是观察者。生产线则是被观察者。当被观察者变化时，就要通知其依赖的这些记录员和质检员。</p><h2 id="被观察者" tabindex="-1"><a class="header-anchor" href="#被观察者" aria-hidden="true">#</a> 被观察者</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package observer;

import java.util.Observable;

public class Beltline extends Observable {

	public void productCar(String carName) {
		System.out.println(&quot;start producting car&quot;);
		super.setChanged();
		super.notifyObservers(carName);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们直接继承了java util包中的Observable类。这个类中定义了一个Vector集合用于存放所有的观察者。提供addObserver(Observer o) 方法用于添加观察者。注意Observer是个接口当我们定义观察者类的时候需要实现它。 <img src="`+l+`" alt="Observable"></p><p>我们使用<code>super.notifyObservers(carName);</code>用于通知所有的观察者。这个方法是线程同步的。当观察者较多时还是很耗时的。</p><h2 id="观察者" tabindex="-1"><a class="header-anchor" href="#观察者" aria-hidden="true">#</a> 观察者</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package observer;

import java.util.Observable;
import java.util.Observer;

public class CheckCar implements Observer{

	@Override
	public void update(Observable o, Object arg) {
		System.out.println(&quot;check the car named : &quot;+arg);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package observer;

public class Test {
	public static void main(String[] args) {
		Beltline beltline = new Beltline();
		beltline.addObserver(new CheckCar());
		beltline.addObserver(new RecordCar());
		beltline.productCar(&quot;BWM&quot;);
		beltline.productCar(&quot;Benz&quot;);
		beltline.productCar(&quot;five edges great light&quot;);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+d+'" alt="结果"></p>',11);function u(b,o){return n(),a("div",null,[v,s("more"),c])}const h=i(t,[["render",u],["__file","observer-pattern.html.vue"]]);export{h as default};
