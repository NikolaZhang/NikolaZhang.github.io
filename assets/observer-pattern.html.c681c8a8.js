import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as s,a as e,e as r}from"./app.4001f435.js";const l="/images/article/181212/observable.png",d="/images/article/181212/res1.png",t={},v=e("blockquote",null,[e("p",null,"\u89C2\u5BDF\u6A21\u5F0F\uFF0C\u63D0\u4F9B\u4E86\u4E00\u79CD\u5B9E\u65F6\u76D1\u542C\u65B9\u6848\u3002\u5B9A\u4E49\u5BF9\u8C61\u95F4\u7684\u4E00\u79CD\u4E00\u5BF9\u591A\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5F53\u4E00\u4E2A\u5BF9\u8C61\u7684\u72B6\u6001\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u6240\u6709\u4F9D\u8D56\u4E8E\u5B83\u7684\u5BF9\u8C61\u90FD\u5F97\u5230\u901A\u77E5\u5E76\u88AB\u81EA\u52A8\u66F4\u65B0\u3002[\u83DC\u9E1F]")],-1),c=r(`<p>\u5F53\u6211\u4EEC\u7684\u6D41\u6C34\u7EBF\uFF0C\u6BCF\u751F\u4EA7\u4E00\u8F86\u8F66\uFF0C\u6211\u4EEC\u90FD\u8981\u8BB0\u5F55\u5E76\u68C0\u9A8C\u8FD9\u8F86\u8F66\u3002 \u8FD9\u91CC\u7684\u8BB0\u5F55\u5458\u548C\u8D28\u68C0\u5458\u5C31\u662F\u89C2\u5BDF\u8005\u3002\u751F\u4EA7\u7EBF\u5219\u662F\u88AB\u89C2\u5BDF\u8005\u3002\u5F53\u88AB\u89C2\u5BDF\u8005\u53D8\u5316\u65F6\uFF0C\u5C31\u8981\u901A\u77E5\u5176\u4F9D\u8D56\u7684\u8FD9\u4E9B\u8BB0\u5F55\u5458\u548C\u8D28\u68C0\u5458\u3002</p><h2 id="\u88AB\u89C2\u5BDF\u8005" tabindex="-1"><a class="header-anchor" href="#\u88AB\u89C2\u5BDF\u8005" aria-hidden="true">#</a> \u88AB\u89C2\u5BDF\u8005</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package observer;

import java.util.Observable;

public class Beltline extends Observable {

	public void productCar(String carName) {
		System.out.println(&quot;start producting car&quot;);
		super.setChanged();
		super.notifyObservers(carName);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u76F4\u63A5\u7EE7\u627F\u4E86java util\u5305\u4E2D\u7684Observable\u7C7B\u3002\u8FD9\u4E2A\u7C7B\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2AVector\u96C6\u5408\u7528\u4E8E\u5B58\u653E\u6240\u6709\u7684\u89C2\u5BDF\u8005\u3002\u63D0\u4F9BaddObserver(Observer o) \u65B9\u6CD5\u7528\u4E8E\u6DFB\u52A0\u89C2\u5BDF\u8005\u3002\u6CE8\u610FObserver\u662F\u4E2A\u63A5\u53E3\u5F53\u6211\u4EEC\u5B9A\u4E49\u89C2\u5BDF\u8005\u7C7B\u7684\u65F6\u5019\u9700\u8981\u5B9E\u73B0\u5B83\u3002 <img src="`+l+`" alt="Observable" loading="lazy"></p><p>\u6211\u4EEC\u4F7F\u7528<code>super.notifyObservers(carName);</code>\u7528\u4E8E\u901A\u77E5\u6240\u6709\u7684\u89C2\u5BDF\u8005\u3002\u8FD9\u4E2A\u65B9\u6CD5\u662F\u7EBF\u7A0B\u540C\u6B65\u7684\u3002\u5F53\u89C2\u5BDF\u8005\u8F83\u591A\u65F6\u8FD8\u662F\u5F88\u8017\u65F6\u7684\u3002</p><h2 id="\u89C2\u5BDF\u8005" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u8005" aria-hidden="true">#</a> \u89C2\u5BDF\u8005</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package observer;

import java.util.Observable;
import java.util.Observer;

public class CheckCar implements Observer{

	@Override
	public void update(Observable o, Object arg) {
		System.out.println(&quot;check the car named : &quot;+arg);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package observer;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+d+'" alt="\u7ED3\u679C" loading="lazy"></p>',11);function u(b,o){return n(),a("div",null,[v,s("more"),c])}const h=i(t,[["render",u],["__file","observer-pattern.html.vue"]]);export{h as default};
