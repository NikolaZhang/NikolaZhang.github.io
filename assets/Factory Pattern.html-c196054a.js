import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as l,a as i,b as a,e as d}from"./app-cdab0746.js";const r={},c=i("h2",{id:"简单工厂模式",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#简单工厂模式","aria-hidden":"true"},"#"),a(" 简单工厂模式")],-1),v=i("blockquote",null,[i("p",null,"又称为静态工厂模式，提供一个公有的静态工厂方法，返回一个类的实例。 通过工厂我们不必具体去实例化某一个实例对象。只需要传递某些约定的参数，工厂会自动找到该类并将其实例化。")],-1),t=d(`<ol><li>创建一个接口，接口中定义公用方法。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.simplefactory;

/************************************************
 *@ClassName : Car
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/26 21:19】
 *@Version : 1.0.0
 *************************************************/

public interface Car {
    void run();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建接口对应的实现</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.simplefactory;

/************************************************
 *@ClassName : BWMCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/26 21:20】
 *@Version : 1.0.0
 *************************************************/

public class BWMCar implements Car{
    @Override
    public void run() {
        System.out.println(&quot;宝马跑起来！&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建工厂类</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.simplefactory;

import util.StringUtil;

/************************************************
 *@ClassName : CarFactory
 *@Description : 简单工厂， 使用反射实例化对象
 *@Author : NikolaZhang
 *@Date : 【2018/11/26 21:14】
 *@Version : 1.0.0
 *************************************************/

public class CarFactory {
    private CarFactory(){}
    public static Car getCar(String carName) {
        if(!StringUtil.isEmpty(carName)){
            try {
                return (Car) Class.forName(carName).newInstance();
            } catch (InstantiationException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }
        return null;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>测试</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package factory.simplefactory;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : 【2018/11/26 21:30】
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        CarFactory.getCar(&quot;factory.simplefactory.BWMCar&quot;).run();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>说明 在工厂类中我们使用反射生成对应的实例对象。需要的参数为实体的路径。 当某天我们的系统需要进行扩展时，仅仅需要添加一个实体，并实现接口中的方法。 而我们的工厂方法则不会有什么需要改动的地方。</li></ol>`,9);function u(m,o){return n(),s("div",null,[c,v,l("more"),t])}const g=e(r,[["render",u],["__file","Factory Pattern.html.vue"]]);export{g as default};
