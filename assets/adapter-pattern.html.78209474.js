import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as s,f as l,a as e,e as d}from"./app.e7c9cb9e.js";const a="/images/article/181202/adapterresult.png",r="/images/article/181202/adapteruml.png",v={},t=e("blockquote",null,[e("p",null,"\u9002\u914D\u5668\u6A21\u5F0F\uFF0C\u4F60\u6709\u6211\u9700\u8981\u7684\u4FE1\u606F\u4F46\u662F\u6211\u4FE9\u4FE1\u606F\u5C01\u88C5\u7684\u7C7B\u578B\u4E0D\u540C\uFF0C\u4F60\u65E0\u6CD5\u76F4\u63A5\u7ED9\u6211\u3002\u5C31\u50CF\u6211\u53C8\u4E00\u4E2A\u4E09\u811A\u63D2\u5934\uFF0C\u4F60\u662F\u4E24\u5B54\u7684\u63D2\u5EA7\u3002\u9700\u8981\u4E00\u4E2A\u8F6C\u6362\u5668\uFF0C\u8BA9\u6211\u7528\u4E0A\u4F60\u7684\u7535\u3002P.S.:\u5F88\u5371\u9669\uFF0C\u4E0D\u8981\u5E72\u8FD9\u79CD\u4E8B\u3002\u3002\u3002")],-1),u=d(`<p>(\u2299o\u2299)\u2026\uFF0C\u6211\u4ECE\u73B0\u5728\u5F00\u59CB\u4EE5\u8BB2\u6545\u4E8B\u7684\u5F62\u5F0F\u6765\u8BF4\u6A21\u5F0F\uFF0C\u867D\u7136\u4E5F\u662F\u770B\u7740\u8BBE\u8BA1\u6A21\u5F0F\u4E4B\u7985\u90A3\u672C\u4E66\u5B66\u4E60\u7684\uFF0C\u4F46\u8FD8\u662F\u7167\u732B\u753B\u864E\uFF0C\u505A\u505A\u7B14\u8BB0\uFF0C\u8BF4\u8BF4\u6211\u7684\u7406\u89E3\u3002</p><h2 id="\u4E0D\u540C\u7684\u5BA2\u6237\u4FE1\u606F\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u7684\u5BA2\u6237\u4FE1\u606F\u5C01\u88C5" aria-hidden="true">#</a> \u4E0D\u540C\u7684\u5BA2\u6237\u4FE1\u606F\u5C01\u88C5</h2><p>\u73B0\u5728\u6211\u4EEC\u7684\u6C7D\u8F66\u516C\u53F8\u5DF2\u7ECF\u8DB3\u591F\u5F3A\u5927\uFF0C\u8981\u517C\u5E76\u5176\u4ED6\u516C\u53F8\u3002\u5176\u4ED6\u516C\u53F8\u8981\u628A\u4ED6\u4EEC\u7684\u5BA2\u6237\u4FE1\u606F\u7ED9\u6211\u4EEC\uFF0C\u4F46\u662F\u4ED6\u4EEC\u7684\u5BA2\u6237\u4FE1\u606F\u548C\u6211\u4EEC\u7684\u5BA2\u6237\u4FE1\u606F\u7C7B\u5C01\u88C5\u6709\u6240\u4E0D\u540C\u3002 \u5982\u4E0B\uFF1A</p><ul><li><p>\u6211\u4EEC\u7684\u516C\u53F8\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package adapter;

/************************************************
 *@ClassName : CompanyHereI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/2 21:09\u3011
 *@Version : 1.0.0
 *************************************************/
public interface CompanyHereI {
    String getCustomerName();
    String getCustomerPhone();
    String getCustomerAddress();
    String getCustomerTel();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4ED6\u4EEC\u7684\u516C\u53F8\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package adapter;

import java.util.Map;

/************************************************
 *@ClassName : CompanyRemoteI
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/2 21:10\u3011
 *@Version : 1.0.0
 *************************************************/

public interface CompanyRemoteI {
    Map&lt;String, String&gt; getCustomerBaseInfo();
    Map&lt;String, String&gt; getCustomerHomeInfo();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4ED6\u4EEC\u516C\u53F8\u7684\u5BA2\u6237\u4FE1\u606F\u5B9E\u73B0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package adapter;

import java.util.HashMap;
import java.util.Map;

/************************************************
 *@ClassName : CompanyRemote
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/1 11:40\u3011
 *@Version : 1.0.0
 *************************************************/

public class CompanyRemoteImpl implements CompanyRemoteI{
    @Override
    public Map&lt;String, String&gt; getCustomerBaseInfo() {
        Map&lt;String, String&gt; map = new HashMap();
        map.put(&quot;name&quot;, &quot;\u5F20\u65ED&quot;);
        map.put(&quot;phone&quot;, &quot;17812345678&quot;);
        return map;
    }

    @Override
    public Map&lt;String, String&gt; getCustomerHomeInfo() {
        Map&lt;String, String&gt; map = new HashMap();
        map.put(&quot;name&quot;, &quot;\u5F20\u65ED&quot;);
        map.put(&quot;tel&quot;, &quot;123456&quot;);
        map.put(&quot;address&quot;, &quot;\u4E0A\u6D77\u5E02\u9759\u5B89\u533A&quot;);
        return map;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u6211\u80FD\u600E\u4E48\u529E-\u5F53\u7136\u8F6C\u6362\u4E86" tabindex="-1"><a class="header-anchor" href="#\u6211\u80FD\u600E\u4E48\u529E-\u5F53\u7136\u8F6C\u6362\u4E86" aria-hidden="true">#</a> \u6211\u80FD\u600E\u4E48\u529E\uFF0C\u5F53\u7136\u8F6C\u6362\u4E86~</h2><p>\u6211\u4EEC\u8981\u60F3\u4ECE\u4ED6\u4EEC\u516C\u53F8\u628A\u5BA2\u6237\u4FE1\u606F\u63D0\u53D6\u51FA\u6765\uFF0C\u80AF\u5B9A\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A\u7C7B\uFF0C\u8FD9\u4E2A\u7C7B\u65E2\u80FD\u4ECE\u4ED6\u4EEC\u516C\u53F8\u53D6\u503C\uFF0C\u53C8\u80FD\u628A\u53D6\u5230\u7684\u503C\u8D4B\u503C\u7ED9\u6211\u4EEC\u516C\u53F8\u7684\u5BA2\u6237\u7C7B\u3002 \u8FD9\u4E2A\u7C7B\u7684\u5199\u6CD5\u5C31\u89C1\u4EC1\u89C1\u667A\u4E86\uFF0C\u8BBE\u8BA1\u6A21\u5F0F\u4E0A\u5C06\u8FD9\u4E2A\u7C7B\u5C31\u662F\u9002\u914D\u5668\u3002\u53C8\u5206\u4E3A\u7C7B\u9002\u914D\u5668\u548C\u5BF9\u8C61\u9002\u914D\u5668\u3002 \u7C7B\u9002\u914D\u5668\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package adapter;

/************************************************
 *@ClassName : CustomerInfoConvertAdapter
 *@Description : \u4F7F\u7528\u7C7B\u9002\u914D\u5668
 *@Author : NikolaZhang
 *@Date : \u30102018/12/2 21:20\u3011
 *@Version : 1.0.0
 *************************************************/

public class CustomerInfoClassAdapter  extends CompanyRemoteImpl implements CompanyHereI{
    @Override
    public String getCustomerName() {
        return super.getCustomerBaseInfo().get(&quot;name&quot;);
    }

    @Override
    public String getCustomerPhone() {
        return super.getCustomerBaseInfo().get(&quot;phone&quot;);
    }

    @Override
    public String getCustomerAddress() {
        return super.getCustomerHomeInfo().get(&quot;address&quot;);
    }

    @Override
    public String getCustomerTel() {
        return super.getCustomerHomeInfo().get(&quot;tel&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8C61\u9002\u914D\u5668\u548C\u7C7B\u9002\u914D\u5668\u6709\u4E00\u70B9\u4E0D\u540C\uFF0C\u4FE1\u606F\u76EE\u6807\u7684\u83B7\u53D6\u65B9\u5F0F\u662F\u7EE7\u627F\u8FD8\u662F\u4F9D\u8D56\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package adapter;

/************************************************
 *@ClassName : CustomerInfoObjectAdapter
 *@Description : \u4F7F\u7528\u5BF9\u8C61\u9002\u914D\u5668
 *@Author : NikolaZhang
 *@Date : \u30102018/12/2 21:24\u3011
 *@Version : 1.0.0
 *************************************************/

public class CustomerInfoObjectAdapter implements CompanyHereI {
    private CompanyRemoteI companyRemoteI;

    @Override
    public String getCustomerName() {
        return this.companyRemoteI.getCustomerBaseInfo().get(&quot;name&quot;);
    }

    @Override
    public String getCustomerPhone() {
        return this.companyRemoteI.getCustomerBaseInfo().get(&quot;phone&quot;);
    }

    @Override
    public String getCustomerAddress() {
        return this.companyRemoteI.getCustomerBaseInfo().get(&quot;address&quot;);
    }

    @Override
    public String getCustomerTel() {
        return this.companyRemoteI.getCustomerBaseInfo().get(&quot;tel&quot;);
    }

    public CustomerInfoObjectAdapter(CompanyRemoteI companyRemoteI){
        this.companyRemoteI = companyRemoteI;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package adapter;

/************************************************
 *@ClassName : Test
 *@Description : TODO
 *@Author : NikolaZhang
 *@Date : \u30102018/12/2 21:28\u3011
 *@Version : 1.0.0
 *************************************************/

public class Test {
    public static void main(String[] args) {
        CompanyHereI companyHereICls = new CustomerInfoClassAdapter();
        System.out.println(companyHereICls.getCustomerName());

        CompanyHereI companyHereIObj = new CustomerInfoObjectAdapter(new CompanyRemoteImpl());
        System.out.println(companyHereIObj.getCustomerPhone());
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><p><img src="`+a+'" alt="\u7ED3\u679C" loading="lazy"></p><h2 id="uml" tabindex="-1"><a class="header-anchor" href="#uml" aria-hidden="true">#</a> uml</h2><p><img src="'+r+'" alt="uml" loading="lazy"></p>',15);function m(c,o){return i(),s("div",null,[t,l("more"),u])}const g=n(v,[["render",m],["__file","adapter-pattern.html.vue"]]);export{g as default};
