import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as l,f as s,a as e,b as i,d as t,e as r,r as o}from"./app.e7c9cb9e.js";const c={},u=e("blockquote",null,[e("p",null,"\u4F7F\u7528Hystrix\u4EEA\u8868\u76D8\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u56FE\u5F62\u754C\u9762\u7684\u5F62\u5F0F,\u770B\u5230\u6211\u4EEC\u7684\u5E94\u7528\u8FD0\u884C\u72B6\u6001")],-1),v=r(`<h2 id="hystrix\u4EEA\u8868\u76D8" tabindex="-1"><a class="header-anchor" href="#hystrix\u4EEA\u8868\u76D8" aria-hidden="true">#</a> Hystrix\u4EEA\u8868\u76D8</h2><blockquote><p>Spring Cloud \u6574\u5408\u4E86Hystrix Dashboard. \u4E3B\u8981\u7528\u6765\u5B9E\u65F6\u76D1\u63A7Hystrix\u7684\u5404\u9879\u6307\u6807\u4FE1\u606F. \u901A\u8FC7Hystrix Dashboard\u53CD\u9988\u7684\u5B9E\u65F6\u4FE1\u606F. \u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u7CFB\u7EDF\u4E2D\u5B58\u5728\u7684\u95EE\u9898, \u4ECE\u800C\u53CA\u65F6\u91C7\u53D6\u5BF9\u5E94\u63AA\u65BD.</p></blockquote><h3 id="_1-\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_1-\u6B65\u9AA4" aria-hidden="true">#</a> 1 \u6B65\u9AA4</h3><h4 id="_1-1-\u521B\u5EFAspringboot\u5DE5\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u521B\u5EFAspringboot\u5DE5\u7A0B" aria-hidden="true">#</a> 1.1 \u521B\u5EFASpringBoot\u5DE5\u7A0B</h4><h4 id="_1-2-\u914D\u7F6Epom" tabindex="-1"><a class="header-anchor" href="#_1-2-\u914D\u7F6Epom" aria-hidden="true">#</a> 1.2 \u914D\u7F6Epom</h4><p>\u4E3B\u8981\u6DFB\u52A0Hystrix Hystrix-Dashboard actuator</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
        &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
        &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix-dashboard&lt;/artifactId&gt;
    &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-\u4E3A\u5E94\u7528\u4E3B\u7C7B\u6DFB\u52A0-enablehystrixdashboard-\u542F\u7528hystrixdashboard\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_1-3-\u4E3A\u5E94\u7528\u4E3B\u7C7B\u6DFB\u52A0-enablehystrixdashboard-\u542F\u7528hystrixdashboard\u529F\u80FD" aria-hidden="true">#</a> 1.3 \u4E3A\u5E94\u7528\u4E3B\u7C7B\u6DFB\u52A0@EnableHystrixDashboard. \u542F\u7528HystrixDashboard\u529F\u80FD.</h4><h4 id="_1-4-\u914D\u7F6Eyml-\u6216\u8005-properties" tabindex="-1"><a class="header-anchor" href="#_1-4-\u914D\u7F6Eyml-\u6216\u8005-properties" aria-hidden="true">#</a> 1.4 \u914D\u7F6Eyml \u6216\u8005 properties</h4><p>\u8981\u4F7F\u7528\u4E00\u4E2A\u672A\u88AB\u5360\u7528\u7684\u7AEF\u53E3</p><h4 id="_1-5-\u8BBF\u95EE\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_1-5-\u8BBF\u95EE\u9A8C\u8BC1" aria-hidden="true">#</a> 1.5 \u8BBF\u95EE\u9A8C\u8BC1</h4>`,11),b={href:"http://ip",target:"_blank",rel:"noopener noreferrer"},p=r(`<ul><li>\u9ED8\u8BA4\u7684\u96C6\u7FA4\u76D1\u63A7</li><li>\u6307\u5B9A\u7684\u96C6\u7FA4\u76D1\u63A7</li><li>\u5355\u4F53\u5E94\u7528\u7684\u76D1\u63A7 Hystrix Dashboard\u76D1\u63A7\u5355\u5B9E\u4F8B\u8282\u70B9\u9700\u8981\u901A\u8FC7\u8BBF\u95EE\u5B9E\u4F8B\u7684/hystrix.stream\u63A5\u53E3\u6765\u5B9E\u73B0, \u6211\u4EEC\u81EA\u7136\u8981\u4E3A\u670D\u52A1\u5B9E\u4F8B\u6DFB\u52A0\u8FD9\u4E2A\u7AEF\u70B9.</li></ul><ul><li>\u5728\u670D\u52A1\u5B9E\u4F8Bpom.xml\u4E2D\u589E\u52A0actuator\u76D1\u63A7\u6A21\u5757\u4EE5\u5F00\u542F\u76D1\u63A7\u76F8\u5173\u7684\u7AEF\u70B9. \u5E76\u5F15\u5165\u65AD\u8DEF\u5668\u7684\u4F9D\u8D56spring-cloud-starter-hystrix</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
        &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
    &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u670D\u52A1\u5B9E\u4F8B\u4E3B\u7C7B\u4F7F\u7528@EnableCircuitBreaker\u6CE8\u89E3, \u5F00\u542F\u65AD\u8DEF\u5668\u529F\u80FD.</p></li><li><p>\u76D1\u63A7\u754C\u9762 \u5B9E\u5FC3\u5706: \u989C\u8272: \u7EFF\u9EC4\u6A59\u7EA2.\u5065\u5EB7\u5EA6\u4F9D\u6B21\u9012\u51CF \u5927\u5C0F: \u8868\u793A\u8BF7\u6C42\u6D41\u91CF, \u6D41\u91CF\u8D8A\u5927\u5B9E\u5FC3\u5706\u8D8A\u5927</p></li></ul><p>\u4EE5\u4E0A\u53EA\u662F\u5BF9\u67D0\u4E00\u4E2A\u5E94\u7528\u8FDB\u884C\u76D1\u63A7,\u5F53\u76D1\u63A7\u591A\u4E2A\u5E94\u7528\u65F6\u9700\u8981\u4F7F\u7528turbine\u8FDB\u884C\u96C6\u7FA4\u76D1\u63A7</p><h3 id="_2-turbine\u96C6\u7FA4\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#_2-turbine\u96C6\u7FA4\u76D1\u63A7" aria-hidden="true">#</a> 2 Turbine\u96C6\u7FA4\u76D1\u63A7</h3><p>Hystrix Dashboard\u4E2D\u7684/turbine.stream\u662F\u5BF9\u96C6\u7FA4\u4F7F\u7528\u7684. \u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B:</p><ol><li>\u6B65\u9AA4\u540C\u4E0A,\u9996\u5148\u521B\u5EFA\u4E00\u4E2Aspringboot\u5DE5\u7A0B, pom\u4E2D\u5F15\u5165turbine\u548Cactuator</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-turbine&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u4E4B\u540E,\u5728\u5E94\u7528\u4E3B\u7C7B\u4E2D\u5E94\u7528@EnableTurbine\u6CE8\u89E3\u5F00\u542FTurbine</li><li>\u6700\u540E\u914D\u7F6Eproperties</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring:
  application:
    name: turbine
server:
  port: 9002
manage:
  port: 9102
eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:1111/eureka
turbine:
  #\u8BE5\u5C5E\u6027\u6307\u5B9A\u9700\u8981\u6536\u96C6\u76D1\u63A7\u4FE1\u606F\u7684\u670D\u52A1\u540D
  app-config: bookservice
  #\u6307\u5B9A\u96C6\u7FA4\u540D\u79F0, \u5F53\u670D\u52A1\u589E\u52A0\u65F6\u53EF\u4EE5\u4F7F\u7528\u96C6\u7FA4\u6765\u5212\u5206\u4E0D\u540C\u7684\u5E94\u7528\u96C6\u5408
  cluster-name-expression: &#39;NikolaZhang&#39;
  #true\u8868\u793A\u540C\u4E00\u4E3B\u673A\u7684\u670D\u52A1\u901A\u8FC7\u4E3B\u673A\u540D\u548C\u7AEF\u53E3\u540D\u7684\u7EC4\u5408\u8FDB\u884C\u533A\u5206, \u9ED8\u8BA4\u60C5\u51B5\u4F7F\u7528\u4E3B\u673A\u540D\u8FDB\u884C\u533A\u5206, \u4F46\u8FD9\u4F1A\u5C06\u4E3B\u673A\u4E0A\u7684\u591A\u4E2A\u670D\u52A1\u805A\u5408\u6210\u4E00\u4E2A\u670D\u52A1.
  combine-host-port: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),g={start:"4"},m={href:"http://localhost:9000/turbine.stream",target:"_blank",rel:"noopener noreferrer"},h=r(`<h3 id="_3-\u4E0E\u6D88\u606F\u4EE3\u7406\u7ED3\u5408" tabindex="-1"><a class="header-anchor" href="#_3-\u4E0E\u6D88\u606F\u4EE3\u7406\u7ED3\u5408" aria-hidden="true">#</a> 3 \u4E0E\u6D88\u606F\u4EE3\u7406\u7ED3\u5408</h3><p>Spring Cloud\u5728\u5C01\u88C5Turbine\u7684\u65F6\u5019, \u8FD8\u5C01\u88C5\u4E86\u57FA\u4E8E\u6D88\u606F\u4EE3\u7406\u7684\u6536\u96C6\u5B9E\u73B0. \u6211\u4EEC\u53EF\u4EE5\u5C06\u6240\u6709\u9700\u8981\u6536\u96C6\u7684\u76D1\u63A7\u4FE1\u606F\u8F93\u51FA\u5230\u6D88\u606F\u4EE3\u7406\u4E2D, \u7136\u540Eturbine\u670D\u52A1\u518D\u4ECE\u6D88\u606F\u4EE3\u7406\u4E2D\u5F02\u6B65\u83B7\u53D6\u8FD9\u4E9B\u76D1\u63A7\u4FE1\u606F. \u6700\u540E\u5C06\u8FD9\u4E9B\u76D1\u63A7\u4FE1\u606F\u805A\u5408\u5E76\u8F93\u51FA\u5230Hystrix Dashboard\u4E2D. \u5B9E\u73B0\u6B65\u9AA4\u5982\u4E0B:</p><ol><li>\u9996\u5148\u521B\u5EFAspringboot\u5DE5\u7A0B, \u5F15\u5165turbine-amqp\u548Cactuator</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-turbine-amqp&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5E94\u7528\u4E3B\u7C7B\u8981\u4F7F\u7528@EnableTurbineStream\u6CE8\u89E3</li><li>\u914D\u7F6Eproperties</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring:
  application:
    name: turbine
server:
  port: 9002
manage:
  port: 9102
eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:1111/eureka
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u6700\u540E,\u5BF9\u670D\u52A1\u8FDB\u884C\u914D\u7F6E, \u4F7F\u76D1\u63A7\u4FE1\u606F\u80FD\u591F\u8F93\u51FA\u5230RabbitMQ \u53EA\u9700\u8981\u5411pom\u4E2D\u6DFB\u52A0\u5982\u4E0Bpom</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-netflix-hystrix-amqp&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),x={start:"5"},f={href:"http://localhost:9000/turbine.stream",target:"_blank",rel:"noopener noreferrer"},_=e("h3",{id:"end",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#end","aria-hidden":"true"},"#"),i(" end")],-1),y=e("p",null,"\u5230\u6B64\u4E3A\u6B62\uFF0C\u670D\u52A1\u5BB9\u9519\u5DF2\u7ECF\u4ECB\u7ECD\u5B8C\u6BD5\uFF0C\u8FD9\u5468\u672B\u6211\u4F1A\u628A\u4E4B\u524D\u7684\u7A0B\u5E8F\u6D4B\u8BD5\u4E00\u4E0B\uFF0C\u7136\u540E\u518D\u6C34\u4E00\u7BC7\u535A\u5BA2\u3002",-1);function I(k,H){const n=o("ExternalLinkIcon");return d(),l("div",null,[u,s("more"),v,e("p",null,[e("a",b,[i("http://ip"),t(n)]),i(":port/hystrix \u4ECE\u9875\u9762\u4E0A\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0CHystrixDashboard\u652F\u6301\u4E09\u79CD\u4E0D\u540C\u7684\u76D1\u63A7\u65B9\u5F0F\uFF1A")]),p,e("ol",g,[e("li",null,[i("\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165"),e("a",m,[i("http://localhost:9000/turbine.stream"),t(n)])])]),h,e("ol",x,[e("li",null,[i("\u9A8C\u8BC1\u8F93\u5165"),e("a",f,[i("http://localhost:9000/turbine.stream"),t(n)]),i(". \u6548\u679C\u540C\u4E0A, \u4F46\u662F\u8FD9\u91CC\u7684\u76D1\u63A7\u4FE1\u606F\u662F\u901A\u8FC7\u6D88\u606F\u4EE3\u7406\u5F02\u6B65\u83B7\u53D6\u4E4B\u540E\u8F93\u51FA\u5230Hystrix Dashboard\u4E2D\u7684.")])]),_,y])}const E=a(c,[["render",I],["__file","\u4EEA\u8868\u76D8.html.vue"]]);export{E as default};
