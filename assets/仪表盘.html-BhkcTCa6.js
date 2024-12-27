import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as s,c as o,a as i,f as u,e as t,d as r,b as d}from"./app-CYrfdzXE.js";const v={},c={href:"http://ip",target:"_blank",rel:"noopener noreferrer"},b={start:"4"},p={href:"http://localhost:9000/turbine.stream",target:"_blank",rel:"noopener noreferrer"},g={start:"5"},m={href:"http://localhost:9000/turbine.stream",target:"_blank",rel:"noopener noreferrer"};function h(x,e){const n=a("ExternalLinkIcon");return s(),o("div",null,[e[9]||(e[9]=i("blockquote",null,[i("p",null,"使用Hystrix仪表盘我们可以通过图形界面的形式,看到我们的应用运行状态")],-1)),u("more"),e[10]||(e[10]=t(`<h2 id="hystrix仪表盘" tabindex="-1"><a class="header-anchor" href="#hystrix仪表盘" aria-hidden="true">#</a> Hystrix仪表盘</h2><blockquote><p>Spring Cloud 整合了Hystrix Dashboard. 主要用来实时监控Hystrix的各项指标信息. 通过Hystrix Dashboard反馈的实时信息. 我们可以发现系统中存在的问题, 从而及时采取对应措施.</p></blockquote><h3 id="_1-步骤" tabindex="-1"><a class="header-anchor" href="#_1-步骤" aria-hidden="true">#</a> 1 步骤</h3><h4 id="_1-1-创建springboot工程" tabindex="-1"><a class="header-anchor" href="#_1-1-创建springboot工程" aria-hidden="true">#</a> 1.1 创建SpringBoot工程</h4><h4 id="_1-2-配置pom" tabindex="-1"><a class="header-anchor" href="#_1-2-配置pom" aria-hidden="true">#</a> 1.2 配置pom</h4><p>主要添加Hystrix Hystrix-Dashboard actuator</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;dependency&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-为应用主类添加-enablehystrixdashboard-启用hystrixdashboard功能" tabindex="-1"><a class="header-anchor" href="#_1-3-为应用主类添加-enablehystrixdashboard-启用hystrixdashboard功能" aria-hidden="true">#</a> 1.3 为应用主类添加@EnableHystrixDashboard. 启用HystrixDashboard功能.</h4><h4 id="_1-4-配置yml-或者-properties" tabindex="-1"><a class="header-anchor" href="#_1-4-配置yml-或者-properties" aria-hidden="true">#</a> 1.4 配置yml 或者 properties</h4><p>要使用一个未被占用的端口</p><h4 id="_1-5-访问验证" tabindex="-1"><a class="header-anchor" href="#_1-5-访问验证" aria-hidden="true">#</a> 1.5 访问验证</h4>`,11)),i("p",null,[i("a",c,[e[0]||(e[0]=r("http://ip")),d(n)]),e[1]||(e[1]=r(":port/hystrix")),e[2]||(e[2]=i("br",null,null,-1)),e[3]||(e[3]=r(" 从页面上我们可以看到，HystrixDashboard支持三种不同的监控方式："))]),e[11]||(e[11]=t(`<ul><li>默认的集群监控</li><li>指定的集群监控</li><li>单体应用的监控<br> Hystrix Dashboard监控单实例节点需要通过访问实例的/hystrix.stream接口来实现, 我们自然要为服务实例添加这个端点.</li></ul><ul><li>在服务实例pom.xml中增加actuator监控模块以开启监控相关的端点. 并引入断路器的依赖spring-cloud-starter-hystrix</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
        &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
    &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>服务实例主类使用@EnableCircuitBreaker注解, 开启断路器功能.</p></li><li><p>监控界面<br> 实心圆:<br> 颜色: 绿黄橙红.健康度依次递减<br> 大小: 表示请求流量, 流量越大实心圆越大</p></li></ul><p>以上只是对某一个应用进行监控,当监控多个应用时需要使用turbine进行集群监控</p><h3 id="_2-turbine集群监控" tabindex="-1"><a class="header-anchor" href="#_2-turbine集群监控" aria-hidden="true">#</a> 2 Turbine集群监控</h3><p>Hystrix Dashboard中的/turbine.stream是对集群使用的. 使用方法如下:</p><ol><li>步骤同上,首先创建一个springboot工程, pom中引入turbine和actuator</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-turbine&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>之后,在应用主类中应用@EnableTurbine注解开启Turbine</li><li>最后配置properties</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
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
  #该属性指定需要收集监控信息的服务名
  app-config: bookservice
  #指定集群名称, 当服务增加时可以使用集群来划分不同的应用集合
  cluster-name-expression: &#39;NikolaZhang&#39;
  #true表示同一主机的服务通过主机名和端口名的组合进行区分, 默认情况使用主机名进行区分, 但这会将主机上的多个服务聚合成一个服务.
  combine-host-port: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)),i("ol",b,[i("li",null,[e[5]||(e[5]=r("在浏览器中输入")),i("a",p,[e[4]||(e[4]=r("http://localhost:9000/turbine.stream")),d(n)])])]),e[12]||(e[12]=t(`<h3 id="_3-与消息代理结合" tabindex="-1"><a class="header-anchor" href="#_3-与消息代理结合" aria-hidden="true">#</a> 3 与消息代理结合</h3><p>Spring Cloud在封装Turbine的时候, 还封装了基于消息代理的收集实现. 我们可以将所有需要收集的监控信息输出到消息代理中, 然后turbine服务再从消息代理中异步获取这些监控信息. 最后将这些监控信息聚合并输出到Hystrix Dashboard中.<br> 实现步骤如下:</p><ol><li>首先创建springboot工程, 引入turbine-amqp和actuator</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-turbine-amqp&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>应用主类要使用@EnableTurbineStream注解</li><li>配置properties</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>最后,对服务进行配置, 使监控信息能够输出到RabbitMQ<br> 只需要向pom中添加如下pom</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-netflix-hystrix-amqp&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)),i("ol",g,[i("li",null,[e[7]||(e[7]=r("验证输入")),i("a",m,[e[6]||(e[6]=r("http://localhost:9000/turbine.stream")),d(n)]),e[8]||(e[8]=r(". 效果同上, 但是这里的监控信息是通过消息代理异步获取之后输出到Hystrix Dashboard中的."))])]),e[13]||(e[13]=i("h3",{id:"end",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#end","aria-hidden":"true"},"#"),r(" end")],-1)),e[14]||(e[14]=i("p",null,"到此为止，服务容错已经介绍完毕，这周末我会把之前的程序测试一下，然后再水一篇博客。",-1))])}const I=l(v,[["render",h],["__file","仪表盘.html.vue"]]);export{I as default};
