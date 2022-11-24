import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,f as l,a as e,e as d}from"./app.4001f435.js";const s="/images/article/181201/configspringboot.png",r="/images/article/181201/ds.png",a={},v=e("blockquote",null,[e("p",null,"\u4ECE\u4ECA\u5929\u5F00\u59CB\u5FAE\u670D\u52A1\u7684\u642D\u5EFA\u5C31\u6B63\u5F0F\u5F00\u59CB\u4E86\u3002")],-1),c=d('<h1 id="\u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3" aria-hidden="true">#</a> \u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3</h1><h2 id="\u521B\u5EFA\u5DE5\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5DE5\u7A0B" aria-hidden="true">#</a> \u521B\u5EFA\u5DE5\u7A0B</h2><p>\u9996\u5148\u6211\u4EEC\u8981\u521B\u5EFA\u4E00\u4E2Aspringboot\u5DE5\u7A0B\uFF0C\u4F7F\u7528\u81EA\u52A8\u521B\u5EFA\u7684\u65B9\u5F0F\u3002\u9700\u8981\u9009\u62E9eurekaserver <img src="'+s+`" alt="\u9009\u62E9eurekaserver" loading="lazy"></p><p>\u751F\u6210pom\u6587\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;groupId&gt;com.demo&lt;/groupId&gt;
    &lt;artifactId&gt;microserver&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;microserver&lt;/name&gt;
    &lt;description&gt;\u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3&lt;/description&gt;

    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;2.1.1.RELEASE&lt;/version&gt;
        &lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;
    &lt;/parent&gt;

    &lt;properties&gt;
        &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
        &lt;project.reporting.outputEncoding&gt;UTF-8&lt;/project.reporting.outputEncoding&gt;
        &lt;java.version&gt;1.8&lt;/java.version&gt;
        &lt;spring-cloud.version&gt;Greenwich.M3&lt;/spring-cloud.version&gt;
    &lt;/properties&gt;

    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-server&lt;/artifactId&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;
            &lt;scope&gt;runtime&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;

    &lt;dependencyManagement&gt;
        &lt;dependencies&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
                &lt;artifactId&gt;spring-cloud-dependencies&lt;/artifactId&gt;
                &lt;version&gt;\${spring-cloud.version}&lt;/version&gt;
                &lt;type&gt;pom&lt;/type&gt;
                &lt;scope&gt;import&lt;/scope&gt;
            &lt;/dependency&gt;
        &lt;/dependencies&gt;
    &lt;/dependencyManagement&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;

    &lt;repositories&gt;
        &lt;repository&gt;
            &lt;id&gt;spring-milestones&lt;/id&gt;
            &lt;name&gt;Spring Milestones&lt;/name&gt;
            &lt;url&gt;https://repo.spring.io/milestone&lt;/url&gt;
            &lt;snapshots&gt;
                &lt;enabled&gt;false&lt;/enabled&gt;
            &lt;/snapshots&gt;
        &lt;/repository&gt;
    &lt;/repositories&gt;

&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6Eyml" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Eyml" aria-hidden="true">#</a> \u914D\u7F6Eyml</h2><p>\u8FD9\u91CC\u6211\u4EEC\u8BBE\u7F6E\u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3\u7684\u7AEF\u53E3\u53F7\u4E3A1111\uFF0C\u6CE8\u610F\u5728serviceUrl\u4E2D\u7684defaultZone\u4E3A\u6CE8\u518C\u670D\u52A1\u65F6\u7684\u670D\u52A1\u7AEFurl\uFF0C\u4E4B\u540E\u6211\u4EEC\u4F1A\u6784\u5EFA\u4E00\u4E2A\u6CE8\u518C\u670D\u52A1\u96C6\u7FA4\uFF0C\u5C31\u9700\u8981\u8BBE\u7F6E\u76EE\u6807\u670D\u52A1\u5668\u7684url.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server:
  port: 1111

eureka:
  instance:
    hostname: peer1
  client:
    #\u5F53\u524D\u670D\u52A1\u4E3A\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u6545\u4E0D\u5411\u6CE8\u518C\u4E2D\u5FC3\u6CE8\u518C\u81EA\u5DF1
    register-with-eureka: false
    #\u6CE8\u518C\u4E2D\u5FC3\u7528\u4E8E\u7EF4\u62A4\u5B9E\u4F8B\uFF0C\u6545\u4E0D\u53BB\u68C0\u7D22\u670D\u52A1
    fetch-registry: false
    serviceUrl:
      defaultZone: http://\${eureka.instance.hostname}:\${server.port}/eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u7C7B" aria-hidden="true">#</a> \u542F\u52A8\u7C7B</h2><p>\u4F7F\u7528@EnableEurekaServer\u8868\u793A\u6211\u4EEC\u542F\u52A8\u7684\u8FD9\u4E2A\u662F\u4E2A\u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package com.demo.microserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class MicroserverApplication {

    public static void main(String[] args) {
        SpringApplication.run(MicroserverApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u6211\u4EEC\u7684\u6CE8\u518C\u670D\u52A1\u4E2D\u5FC3\u5C31\u6784\u5EFA\u5B8C\u6210\u4E86\u3002 \u73B0\u5728\u6211\u4EEC\u8981\u518D\u642D\u5EFA\u4E00\u4E2A\u6CE8\u518C\u670D\u52A1\uFF0C\u6784\u5EFA\u4E00\u4E2A\u6CE8\u518C\u670D\u52A1\u7684\u96C6\u7FA4\u3002 \u4E3A\u4E86\u65B9\u4FBF\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u91CD\u65B0\u5EFA\u4E00\u4E2Ayml\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u5728\u542F\u52A8\u914D\u7F6E\u4E2D\u8BBE\u7F6E\u542F\u52A8\u53C2\u6570\u5373\u53EF\u3002 \u65B0\u5EFA\u7684yml\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring:
  application:
    name: eureka-server
server:
  port: 1112

eureka:
  instance:
    hostname: peer2
  client:
    #\u7531\u4E8E\u81EA\u5DF1\u5C31\u662F\u670D\u52A1\u5668\uFF0C\u4E0D\u9700\u8981\u6CE8\u518C\u5230\u81EA\u5DF1
    register-with-eureka: false
    #\u7531\u4E8E\u81EA\u5DF1\u5C31\u662F\u670D\u52A1\u5668\uFF0C\u4E0D\u9700\u8981\u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u6CE8\u518C\u4FE1\u606F
    fetch-registry: false
    serviceUrl:
      defaultZone: http://peer1:1111/eureka/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u7531\u4E8E\u6211\u4EEC\u8BBE\u7F6E\u4E86peer1,peer2\u66FF\u6362\u4E86ip\u5730\u5740\u9700\u8981\u5728hosts\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u57DF\u540D\u6620\u5C04\u3002 \u5982\u4E0B\uFF1A <code>127.0.0.1 peer1</code></p><p>\u8BBE\u7F6E\u4E24\u4E2A\u670D\u52A1\u7684\u542F\u52A8\u53C2\u6570\u3002</p><blockquote><ol><li>\u9009\u62E9\u542F\u52A8\u9879\uFF0C\u70B9\u51FB\u4E0B\u62C9\u6846\u4E2D\u7684Edit Configuration\uFF1B</li></ol></blockquote><ol start="2"><li>\u8BBE\u7F6Eprogram arguments\u3002 \u6BD4\u5982\uFF1Apeer1\u5E94\u7528\u5C31\u8BBE\u7F6E <code>--spring.profiles.active=peer1</code> \u6CE8\u610F\u8FD9\u4E2Apeer1\u5BF9\u5E94\u6211\u4EEC\u7684\u914D\u7F6E\u6587\u4EF6application-peer1.yml</li><li>\u8BBE\u7F6E\u540E\uFF0C\u5206\u522B\u542F\u52A8\u3002</li></ol><h2 id="\u9A8C\u8BC1\u6CE8\u518C\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u6CE8\u518C\u670D\u52A1" aria-hidden="true">#</a> \u9A8C\u8BC1\u6CE8\u518C\u670D\u52A1</h2><p>\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165<code>http://peer1:1111</code> <code>http://peer2:1112</code>\u8FDB\u5165Eureka\u754C\u9762\u5219\u6210\u529F\u3002 \u5728\u754C\u9762\u4E2D\u4F60\u4F1A\u770B\u5230\u6709\u4E00\u4E2ADS Replicas\uFF08\u6570\u636E\u5206\u7247\uFF09\u7684\u9879\u76EE\uFF0C\u8FD9\u5C31\u662F\u6211\u4EEC\u7684\u670D\u52A1\u5668\u9700\u8981\u540C\u6B65\u6570\u636E\u7684\u4F4D\u7F6E\u3002\u4E5F\u5C31\u662F\u6211\u4EEC\u5DF2\u7ECF\u6784\u5EFA\u7684\u96C6\u7FA4\u4E2D\u7684\u53E6\u5916\u4E00\u4E2A\u670D\u52A1\u5668\u3002 <img src="`+r+`" alt="\u6570\u636E\u5206\u7247" loading="lazy"></p><h1 id="\u5BA2\u6237\u7AEF\u6CE8\u518C\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u6CE8\u518C\u670D\u52A1" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF\u6CE8\u518C\u670D\u52A1</h1><h2 id="pom" tabindex="-1"><a class="header-anchor" href="#pom" aria-hidden="true">#</a> pom</h2><p>\u540C\u6837\u6211\u4EEC\u9700\u8981\u5F15\u5165eureka\u9879\u76EE\u652F\u6301\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;groupId&gt;com.demo&lt;/groupId&gt;
    &lt;artifactId&gt;booksys&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;booksys&lt;/name&gt;
    &lt;description&gt;Demo project for Spring Boot&lt;/description&gt;

    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;2.1.0.RELEASE&lt;/version&gt;
        &lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;
    &lt;/parent&gt;

    &lt;properties&gt;
        &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
        &lt;project.reporting.outputEncoding&gt;UTF-8&lt;/project.reporting.outputEncoding&gt;
        &lt;java.version&gt;1.8&lt;/java.version&gt;
        &lt;spring-cloud.version&gt;Greenwich.M3&lt;/spring-cloud.version&gt;
    &lt;/properties&gt;

    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;version&gt;2.0.3.RELEASE&lt;/version&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-thymeleaf&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-autoconfigure --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-autoconfigure&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- \u8FD9\u91CC\u4F7F\u7528\u7684\u662FJPA\u5305\uFF0C\u4E5F\u53EF\u4F7F\u7528JDBC\u5305\u8FDB\u884C --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- \u4F7F\u7528mybatis --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;
            &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;
            &lt;version&gt;1.1.1&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;!--\u70ED\u90E8\u7F72--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;
            &lt;optional&gt;true&lt;/optional&gt;
        &lt;/dependency&gt;

        &lt;!-- \u4F7F\u7528driuid\u6570\u636E\u6E90 --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.alibaba&lt;/groupId&gt;
            &lt;artifactId&gt;druid&lt;/artifactId&gt;
            &lt;version&gt;1.1.12&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-server&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.glassfish.jersey.core&lt;/groupId&gt;
            &lt;artifactId&gt;jersey-server&lt;/artifactId&gt;
            &lt;version&gt;2.25.1&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;fork&gt;true&lt;/fork&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-surefire-plugin&lt;/artifactId&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
    &lt;dependencyManagement&gt;
        &lt;dependencies&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
                &lt;artifactId&gt;spring-cloud-dependencies&lt;/artifactId&gt;
                &lt;version&gt;\${spring-cloud.version}&lt;/version&gt;
                &lt;type&gt;pom&lt;/type&gt;
                &lt;scope&gt;import&lt;/scope&gt;
            &lt;/dependency&gt;
        &lt;/dependencies&gt;
    &lt;/dependencyManagement&gt;

    &lt;repositories&gt;
        &lt;repository&gt;
            &lt;id&gt;spring-milestones&lt;/id&gt;
            &lt;name&gt;Spring Milestones&lt;/name&gt;
            &lt;url&gt;https://repo.spring.io/milestone&lt;/url&gt;
            &lt;snapshots&gt;
                &lt;enabled&gt;false&lt;/enabled&gt;
            &lt;/snapshots&gt;
        &lt;/repository&gt;
    &lt;/repositories&gt;

&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u5565\u6709\u8FD9\u4E48\u591A\u4E1C\u897F\u5462\uFF1F\u56E0\u4E3A\u6211\u7528\u7684\u662F\u4E4B\u524D\u5B66\u4E60springboot\u642D\u5EFA\u7684\u90A3\u4E2A\u7B80\u964B\u7684\u56FE\u4E66\u7CFB\u7EDF\u554A\u3002\u5176\u5B9E\u4E5F\u6CA1\u6DFB\u52A0\u4EC0\u4E48\u3002\u5C31\u662F\u4ECE\u524D\u9762\u7684\u670D\u52A1\u5668\u5DE5\u7A0B\u4E2D\u62F7\u8D1D\u4E86eureka\u3002</p><h2 id="yml\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#yml\u914D\u7F6E" aria-hidden="true">#</a> yml\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>eureka:
  instance:
    hostname: booksysservice
  client:
    serviceUrl:
      defaultZone: http://peer1:1111/eureka/,http://peer2:1112/eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u5411peer1\u548Cpeer2\u4E2D\u6CE8\u518C\u6211\u4EEC\u7684\u670D\u52A1\u3002</p><h2 id="\u542F\u52A8\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u6D4B\u8BD5" aria-hidden="true">#</a> \u542F\u52A8\u6D4B\u8BD5</h2><p>\u9879\u76EE\u542F\u52A8\u540E\u6211\u4EEC\u4F1A\u5728\u6D4F\u89C8\u5668\u4E2D\u770B\u5230Instances currently registered with Eureka\u4E2D\u51FA\u73B0\u4E86\u6211\u4EEC\u7684\u670D\u52A1\u3002 \u800C\u4E14\u5728\u6CE8\u518C\u670D\u52A1\u5668\u7684\u63A7\u5236\u53F0\u4E2D\u4F1A\u6709<code>Registered instance BOOKSERVICE/ZHANGXU:bookservice:8080 with status UP (replication=false)</code>\u663E\u793A\u3002</p>`,29);function g(o,u){return i(),t("div",null,[v,l("more"),c])}const b=n(a,[["render",g],["__file","\u5FAE\u670D\u52A1-\u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3.html.vue"]]);export{b as default};
