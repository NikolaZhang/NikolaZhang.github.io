import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as l,f as d,a as e,e as s}from"./app.4001f435.js";const t="/images/article/181214/prototypeqian.png",a="/images/article/181214/prototype.png",r={},v=e("blockquote",null,[e("p",null,"\u539F\u578B\u6A21\u5F0F\uFF0C\u4F30\u8BA1\u8FD9\u662F\u6700\u7B80\u5355\u7684\u6A21\u5F0F\u4E86\u3002\u8FD9\u4E2A\u6A21\u5F0F\u53EF\u4EE5\u7528\u4E8E\u521B\u5EFA\u91CD\u590D\u7684\u5BF9\u8C61\uFF0C\u540C\u65F6\u53C8\u80FD\u4FDD\u8BC1\u6027\u80FD\u3002\u8FD9\u79CD\u7C7B\u578B\u7684\u8BBE\u8BA1\u6A21\u5F0F\u5C5E\u4E8E\u521B\u5EFA\u578B\u6A21\u5F0F\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u79CD\u521B\u5EFA\u5BF9\u8C61\u7684\u6700\u4F73\u65B9\u5F0F\u3002\u989D\u5916\u8BF4\u4E00\u53E5\uFF0C\u8FD9\u91CC\u7684\u521B\u5EFA\u5BF9\u8C61\u53EA\u662F\u6D45\u62F7\u8D1D\u7684\u3002")],-1),c=s(`<p>\u6CA1\u4EC0\u4E48\u597D\u8BF4\u7684\uFF0C\u76F4\u63A5\u770B\u7A0B\u5E8F\u5427\u3002\u8981\u5B9E\u73B0\u5BF9\u8C61\u7684\u6D45\u62F7\u8D1D\uFF0C\u9700\u8981\u8BA9\u5F85\u62F7\u8D1D\u5BF9\u8C61\u5B9E\u73B0Cloneable\u63A5\u53E3\u3002</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package prototype;


public class Model implements Cloneable {
	private String name;
	private String price;
    private A a = new A(&quot;a&quot;);


    public String getName() {
        return name;
    }

    public String getPrice() {
        return price;
    }

    public A getA() {
        return a;
    }

    protected Object clone() {
		try {
			return super.clone();
		} catch (CloneNotSupportedException e) {
			e.printStackTrace();
			return null;
		}
	}

	public Model(String name, String price) {
		super();
		this.name = name;
		this.price = price;
	}


}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package prototype;

import java.io.*;

public class Test {
	public static void main(String[] args) {
		// \u6D45\u62F7\u8D1D Nikola Zhang  \u30102018/12/14 0014 20:51\u3011
	  Model modelA = new Model(&quot;AAA&quot;,&quot;1111&quot;);
		Model modelB = (Model)modelA.clone();

		System.out.println(modelA);
		System.out.println(modelB);
		System.out.println(modelA.getA());
		System.out.println(modelB.getA());
		System.out.println(modelB.getPrice());
		System.out.println(modelB.getName());
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+t+`" alt="\u7ED3\u679C" loading="lazy"></p><p>\u6839\u636E\u7ED3\u679C\u622A\u56FE\uFF0C\u53EF\u4EE5\u770B\u5230\u5F15\u7528\u7C7B\u578B\u5BF9\u8C61modelA,modelB\u7684\u5730\u5740\u662F\u4E0D\u540C\u7684\u3002\u4F46\u5185\u90E8\u7684\u5F15\u7528\u7C7B\u578BA\u5730\u5740\u786E\u5B9E\u76F8\u540C\u7684\u3002 \u8FD9\u5C31\u5F15\u51FA\u4E86\u4E00\u4E2A\u989D\u5916\u7684\u8BDD\u9898\uFF0C\u6DF1\u62F7\u8D1D\u3002\u6DF1\u62F7\u8D1D\u53EF\u4EE5\u901A\u8FC7\u5B9E\u73B0Cloneable\u63A5\u53E3\u5B9E\u73B0\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5B9E\u73B0Serializable\u63A5\u53E3\u5B9E\u73B0\u3002 \u4EE3\u7801\u5982\u4E0B\uFF1A</p><h2 id="\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package prototype;


import java.io.Serializable;

public class ModelS implements Serializable {
	private String name;
	private String price;
    private A a = new A(&quot;a&quot;);


    public String getName() {
        return name;
    }

    public String getPrice() {
        return price;
    }

    public A getA() {
        return a;
    }

	public ModelS(String name, String price) {
		super();
		this.name = name;
		this.price = price;
	}


}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u6D4B\u8BD5\u6DF1\u62F7\u8D1D</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package prototype;

import java.io.*;

public class Test {
	public static void main(String[] args) {
		// \u6D45\u62F7\u8D1D Nikola Zhang  \u30102018/12/14 0014 20:51\u3011
	    Model modelA = new Model(&quot;AAA&quot;,&quot;1111&quot;);
		Model modelB = (Model)modelA.clone();

		System.out.println(modelA);
		System.out.println(modelB);
		System.out.println(modelA.getA());
		System.out.println(modelB.getA());
		System.out.println(modelB.getPrice());
		System.out.println(modelB.getName());

        // \u6DF1\u62F7\u8D1D Nikola Zhang  \u30102018/12/14 0014 20:51\u3011
		ModelS modelS = new ModelS(&quot;SSS&quot;,&quot;2222&quot;);
        try {
            ByteArrayOutputStream bos=new ByteArrayOutputStream();
            ObjectOutputStream oos=new ObjectOutputStream(bos);
            oos.writeObject(modelS);
            oos.flush();
            ObjectInputStream ois=new ObjectInputStream(new ByteArrayInputStream(bos.toByteArray()));
            ModelS modelS1 =  (ModelS)ois.readObject();
            System.out.println(modelS.getA());
            System.out.println(modelS1.getA());
            ois.close();
            oos.close();
            bos.close();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0CModelS\u4E2D\u7684\u5F15\u7528\u7C7B\u578B\u5FC5\u987B\u5B9E\u73B0Serializable\u63A5\u53E3\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002</p><h2 id="\u7ED3\u679C-1" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C-1" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+a+'" alt="\u7ED3\u679C" loading="lazy"> \u53EF\u4EE5\u770B\u5230\uFF0CModelS\u4E2D\u7684\u5F15\u7528\u7C7B\u578B\u7684\u5730\u5740\u7ECF\u8FC7\u6DF1\u62F7\u8D1D\u540E\u662F\u4E0D\u540C\u7684\u3002\u5F53\u4F60\u66F4\u6539\u5176\u4E2D\u4E00\u4E2A\u7684value\u540E\uFF0C\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7684value\u81EA\u7136\u662F\u4E0D\u4F1A\u6539\u53D8\u3002</p>',15);function u(m,o){return n(),l("div",null,[v,d("more"),c])}const g=i(r,[["render",u],["__file","prototype-pattern.html.vue"]]);export{g as default};
