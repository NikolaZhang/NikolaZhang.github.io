import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as l,a as i,b as a,e as d}from"./app.e7c9cb9e.js";const r={},c=i("h2",{id:"\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F","aria-hidden":"true"},"#"),a(" \u7B80\u5355\u5DE5\u5382\u6A21\u5F0F")],-1),v=i("blockquote",null,[i("p",null,"\u53C8\u79F0\u4E3A\u9759\u6001\u5DE5\u5382\u6A21\u5F0F\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u516C\u6709\u7684\u9759\u6001\u5DE5\u5382\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u7684\u5B9E\u4F8B\u3002 \u901A\u8FC7\u5DE5\u5382\u6211\u4EEC\u4E0D\u5FC5\u5177\u4F53\u53BB\u5B9E\u4F8B\u5316\u67D0\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u3002\u53EA\u9700\u8981\u4F20\u9012\u67D0\u4E9B\u7EA6\u5B9A\u7684\u53C2\u6570\uFF0C\u5DE5\u5382\u4F1A\u81EA\u52A8\u627E\u5230\u8BE5\u7C7B\u5E76\u5C06\u5176\u5B9E\u4F8B\u5316\u3002")],-1),t=d(`<ol><li>\u521B\u5EFA\u4E00\u4E2A\u63A5\u53E3\uFF0C\u63A5\u53E3\u4E2D\u5B9A\u4E49\u516C\u7528\u65B9\u6CD5\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.simplefactory;

/************************************************
 *@ClassName : Car
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/26 21:19\u3011
 *@Version : 1.0.0
 *************************************************/

public interface Car {
    void run();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u521B\u5EFA\u63A5\u53E3\u5BF9\u5E94\u7684\u5B9E\u73B0</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.simplefactory;

/************************************************
 *@ClassName : BWMCar
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/26 21:20\u3011
 *@Version : 1.0.0
 *************************************************/

public class BWMCar implements Car{
    @Override
    public void run() {
        System.out.println(&quot;\u5B9D\u9A6C\u8DD1\u8D77\u6765\uFF01&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u521B\u5EFA\u5DE5\u5382\u7C7B</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.simplefactory;

import util.StringUtil;

/************************************************
 *@ClassName : CarFactory
 *@Description : \u7B80\u5355\u5DE5\u5382\uFF0C \u4F7F\u7528\u53CD\u5C04\u5B9E\u4F8B\u5316\u5BF9\u8C61
 *@Author : NikolaZhang
 *@Date : \u30102018/11/26 21:14\u3011
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u6D4B\u8BD5</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package factory.simplefactory;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/11/26 21:30\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        CarFactory.getCar(&quot;factory.simplefactory.BWMCar&quot;).run();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\u8BF4\u660E \u5728\u5DE5\u5382\u7C7B\u4E2D\u6211\u4EEC\u4F7F\u7528\u53CD\u5C04\u751F\u6210\u5BF9\u5E94\u7684\u5B9E\u4F8B\u5BF9\u8C61\u3002\u9700\u8981\u7684\u53C2\u6570\u4E3A\u5B9E\u4F53\u7684\u8DEF\u5F84\u3002 \u5F53\u67D0\u5929\u6211\u4EEC\u7684\u7CFB\u7EDF\u9700\u8981\u8FDB\u884C\u6269\u5C55\u65F6\uFF0C\u4EC5\u4EC5\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u5B9E\u4F53\uFF0C\u5E76\u5B9E\u73B0\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5\u3002 \u800C\u6211\u4EEC\u7684\u5DE5\u5382\u65B9\u6CD5\u5219\u4E0D\u4F1A\u6709\u4EC0\u4E48\u9700\u8981\u6539\u52A8\u7684\u5730\u65B9\u3002</li></ol>`,9);function u(m,o){return n(),s("div",null,[c,v,l("more"),t])}const g=e(r,[["render",u],["__file","Factory Pattern.html.vue"]]);export{g as default};
