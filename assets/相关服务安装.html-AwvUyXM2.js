import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e as a}from"./app-UXtdUrsC.js";const i={},l=a(`<h2 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper" aria-hidden="true">#</a> zookeeper</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">apt</span> <span class="token function">install</span> zookeeper

<span class="token comment"># 查找安装位置</span>
<span class="token function">whereis</span> zookeeper
<span class="token comment">## 输出为：zookeeper: /etc/zookeeper /usr/share/zookeeper</span>

<span class="token comment"># 启动</span>
<span class="token builtin class-name">cd</span> /usr/share/zookeeper
./zkServer.sh <span class="token parameter variable">--config</span> /etc/zookeeper/conf/zoo.cfg restart

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 版本 &gt;= 7</span>
<span class="token function">apt</span> <span class="token function">install</span> redis

<span class="token comment"># 修改配置，允许远程连接</span>
protected-mode no

<span class="token comment"># 启动</span>
redis-server /etc/redis/redis.conf

<span class="token comment"># 本地登录 设置用户及密码</span>
acl setuser root on <span class="token operator">&gt;</span><span class="token number">1234</span> +@all
<span class="token comment"># 持久化</span>
config rewrite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function r(d,o){return n(),s("div",null,c)}const m=e(i,[["render",r],["__file","相关服务安装.html.vue"]]);export{m as default};
