import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as l,f as d,a as e,e as s}from"./app.e7c9cb9e.js";const a="/images/article/181209/res2.png",r={},v=e("blockquote",null,[e("p",null,"\u88C5\u9970\u5668\u6A21\u5F0F\uFF0C\u987E\u540D\u601D\u4E49\u5C31\u662F\u88C5\u3002\u4EBA\u9760\u8863\u88C5\uFF0C\u9A6C\u9760\u978D\u3002\u5929\u751F\u4E00\u526F\u81ED\u76AE\u56CA\uFF0C\u7A7F\u91D1\u6234\u94F6\u4E4B\u540E\uFF0C\u5C31\u663E\u5F97\u4E0E\u4F17\u4E0D\u540C\u4E8E\u3002\u88C5\u9970\u5668\u6A21\u5F0F\u5728\u4E0D\u6539\u53D8\u539F\u6765\u7C7B\u7ED3\u6784\u7684\u57FA\u7840\u4E0A\uFF0C\u5BF9\u539F\u6765\u7684\u7C7B\u8FDB\u884C\u4E86\u6269\u5C55\u3002\u5E76\u4E14\u8FD9\u662F\u4E00\u79CD\u5F31\u8026\u5408\u5F62\u5F0F\u3002")],-1),c=s(`<p>\u5F53\u6211\u4EEC\u751F\u4EA7\u4E00\u8F86\u8F66\u7684\u65F6\u5019\u4E00\u5F00\u59CB\uFF0C\u6240\u6709\u7684\u8F66\u90FD\u662F\u4E00\u526F\u67B6\u5B50\u3002\u4F46\u662F\u52A0\u4E0A\u4E0D\u540C\u7684\u96F6\u4EF6\u5C31\u662F\u4E0D\u540C\u7684\u8F66\u3002</p><h2 id="\u5929\u751F\u4E00\u526F\u81ED\u76AE\u56CA" tabindex="-1"><a class="header-anchor" href="#\u5929\u751F\u4E00\u526F\u81ED\u76AE\u56CA" aria-hidden="true">#</a> \u5929\u751F\u4E00\u526F\u81ED\u76AE\u56CA</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package decorator;

/************************************************
 *@ClassName : CarModel
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/9 0009 21:15\u3011
 *@Version : 1.0.0
 *************************************************/

public abstract class CarModel {
    public abstract void look();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package decorator;

/************************************************
 *@ClassName : CarModel
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/9 0009 21:15\u3011
 *@Version : 1.0.0
 *************************************************/

public class BWMCarModel extends CarModel {
    @Override
    public void look() {
        System.out.println(&quot;\u94C1\u67B6\u5B50&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EBA\u9760\u8863\u88C5-\u8F66\u9760\u6D82\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4EBA\u9760\u8863\u88C5-\u8F66\u9760\u6D82\u88C5" aria-hidden="true">#</a> \u4EBA\u9760\u8863\u88C5\uFF0C\u8F66\u9760\u6D82\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package decorator;

/************************************************
 *@ClassName : ModelDecoorator
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/9 0009 21:17\u3011
 *@Version : 1.0.0
 *************************************************/

public abstract class ModelDecoorator {
    protected CarModel carModel;
    public abstract void look();

    public ModelDecoorator(CarModel carModel) {
        this.carModel = carModel;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package decorator;

/************************************************
 *@ClassName : BWMDecorator
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/9 0009 21:19\u3011
 *@Version : 1.0.0
 *************************************************/

public class BWMDecorator extends ModelDecoorator {

    public BWMDecorator(CarModel carModel) {
        super(carModel);
    }

    @Override
    public void look() {
        System.out.println(&quot;\u628A\u539F\u6765\u7684\u8F66\u62FF\u51FA\u6765\u3002\u3002\u3002\u3002&quot;);
        carModel.look();
        System.out.println(&quot;\u6D82\u4E0A\u70AB\u9177\u55B7\u6F06&quot;);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EAE\u4E2A\u76F8" tabindex="-1"><a class="header-anchor" href="#\u4EAE\u4E2A\u76F8" aria-hidden="true">#</a> \u4EAE\u4E2A\u76F8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package decorator;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/9 0009 21:25\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        ModelDecoorator modelDecoorator = new BWMDecorator(new BWMCarModel());
        modelDecoorator.look();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F60\u770B\u5230\u4E86\u5565" tabindex="-1"><a class="header-anchor" href="#\u4F60\u770B\u5230\u4E86\u5565" aria-hidden="true">#</a> \u4F60\u770B\u5230\u4E86\u5565</h2><p><img src="`+a+'" alt="\u7ED3\u679C" loading="lazy"></p>',11);function o(u,t){return n(),l("div",null,[v,d("more"),c])}const p=i(r,[["render",o],["__file","decorator-pattern.html.vue"]]);export{p as default};
