import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as l,f as d,a as e,e as s}from"./app-074f0c84.js";const t="/images/article/181214/prototypeqian.png",a="/images/article/181214/prototype.png",r={},v=e("blockquote",null,[e("p",null,"原型模式，估计这是最简单的模式了。这个模式可以用于创建重复的对象，同时又能保证性能。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。额外说一句，这里的创建对象只是浅拷贝的。")],-1),c=s(`<p>没什么好说的，直接看程序吧。要实现对象的浅拷贝，需要让待拷贝对象实现Cloneable接口。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package prototype;


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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package prototype;

import java.io.*;

public class Test {
	public static void main(String[] args) {
		// 浅拷贝 Nikola Zhang  【2018/12/14 0014 20:51】
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><p><img src="`+t+`" alt="结果"></p><p>根据结果截图，可以看到引用类型对象modelA,modelB的地址是不同的。但内部的引用类型A地址确实相同的。 这就引出了一个额外的话题，深拷贝。深拷贝可以通过实现Cloneable接口实现，也可以通过实现Serializable接口实现。 代码如下：</p><h2 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package prototype;


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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试深拷贝" tabindex="-1"><a class="header-anchor" href="#测试深拷贝" aria-hidden="true">#</a> 测试深拷贝</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package prototype;

import java.io.*;

public class Test {
	public static void main(String[] args) {
		// 浅拷贝 Nikola Zhang  【2018/12/14 0014 20:51】
	    Model modelA = new Model(&quot;AAA&quot;,&quot;1111&quot;);
		Model modelB = (Model)modelA.clone();

		System.out.println(modelA);
		System.out.println(modelB);
		System.out.println(modelA.getA());
		System.out.println(modelB.getA());
		System.out.println(modelB.getPrice());
		System.out.println(modelB.getName());

        // 深拷贝 Nikola Zhang  【2018/12/14 0014 20:51】
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，ModelS中的引用类型必须实现Serializable接口，否则会报错。</p><h2 id="结果-1" tabindex="-1"><a class="header-anchor" href="#结果-1" aria-hidden="true">#</a> 结果</h2><p><img src="`+a+'" alt="结果"> 可以看到，ModelS中的引用类型的地址经过深拷贝后是不同的。当你更改其中一个的value后，另一个对象的value自然是不会改变。</p>',15);function u(m,o){return n(),l("div",null,[v,d("more"),c])}const g=i(r,[["render",u],["__file","prototype-pattern.html.vue"]]);export{g as default};
