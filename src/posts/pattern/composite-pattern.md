---
original: true
title: composite pattern
date: 2018-12-11


tags: 
  - composite pattern
category: 技术
description: 组合模式的介绍和实现
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 组合模式，适用于树状结构。模式有三个角色：组合部件，合成模块，叶子。组合部件是组合其余两者的父类。它是一个提供公共属性，方法的抽象类。合成模块用于合成最终的组合对象，叶子节点是组合部件的底层，也就相当于树枝与树叶。该模式又为安全模式和透明模式。两者却别在于父类是否提供用于合成组件的所有方法。

<!--more-->

好了，我们的公司最近招人。那么就以人事的结构为例吧。
首先zhangxu是这个虚拟公司的BOSS。下面有两个经理：lisi,wangwu。还有几个招聘的小弟。

# 1 透明模式：
## 1.2 抽象组合部件
```
package composite.compositiontransparent;

import java.util.ArrayList;
import java.util.List;

public abstract class Component {
	protected String name;
	private List<Component> list = new ArrayList<>();

	public abstract void addSubNode(Component component);
	public void getInfo() {
		System.out.println(this.name);
	}

	public List<Component> getList() {
		return list;
	}
	public void setList(List<Component> list) {
		this.list = list;
	}

}


```
## 1.3 合成模块
```
package composite.compositiontransparent;

public class Composite extends Component{


	@Override
	public void addSubNode(Component component) {
		super.getList().add(component);
	}

	public Composite(String name) {
		super.name = name;
	}

}

```
## 1.4 叶子
```
package composite.compositiontransparent;

public class Leaf extends Component {

	@Override
	public void addSubNode(Component component) {
		System.out.println("叶子节点不能添加节点");
	}

	public Leaf(String name) {
		super.name = name;
	}

}

```
## 1.5 分配人员并显示
```
package composite.compositiontransparent;

public class Test {
	public static void main(String[] args) {
		Component component1 = new Composite("zhangxu");
		Component component2 = new Composite("lisi");
		Component component3 = new Composite("wangwu");
		Component component4 = new Leaf("xiaozhen");
		Component component5 = new Leaf("xiaochen");
		Component component6 = new Leaf("xiaochenchen");

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

```
## 1.6 结果
![结果](/images/article/181211/res1.png)

# 2 安全模式
## 2.2 抽象组合部件
```
package composite.compostitionsafe;

public abstract class Component {
	protected String name;
	protected String pname;

	public void getInfo() {
		System.out.println(this.name+"/属于："+pname);
	}
}

```
## 2.3 合成模块
```
package composite.compostitionsafe;

import java.util.ArrayList;
import java.util.List;

public class Composite extends Component{
	private List<Component> list = new ArrayList<>();

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

```
## 2.4 叶子
```
package composite.compostitionsafe;

public class Leaf extends Component {

	public Leaf(String name) {
		super.name = name;
	}

}

```
## 2.5 分配人员并显示
```
package composite.compostitionsafe;

public class Test {
	public static void main(String[] args) {
		Composite composite1 = new Composite("zhangxu");
		Composite composite2 = new Composite("lisi");
		Composite composite3 = new Composite("wangwu");
		Leaf leaf1 = new Leaf("xiaozhen");
		Leaf leaf2 = new Leaf("xiaochen");

		composite1.addSubNode(composite2);
		composite1.addSubNode(composite3);
		composite2.addSubNode(leaf1);
		composite3.addSubNode(leaf2);

		composite1.getNodes();
	}

}

```
## 2.6 结果
![结果](/images/article/181211/res2.png)
