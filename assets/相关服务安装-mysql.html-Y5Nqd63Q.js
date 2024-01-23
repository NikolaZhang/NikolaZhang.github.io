import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-UEHrMJEm.js";const t={},l=e(`<h2 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql" aria-hidden="true">#</a> 安装mysql</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pkg <span class="token function">install</span> mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在启动之前我们需要改下配置。允许远程访问我们的服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/mysql/mysql.conf.d/mysqld.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找到<code>bind-address</code>，将<code>127.0.0.1</code>改为<code>0.0.0.0</code>，保存退出。</p><p>通过下面的命令进行启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> mysql start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置mysql" tabindex="-1"><a class="header-anchor" href="#配置mysql" aria-hidden="true">#</a> 配置mysql</h2><p>我们接下来还要进行用户授权操作。(首次登录查看<code>/var/log/mysql/error.log</code>中是否含有密码，可以查找带有password的行)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入密码，进入mysql命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> use mysql<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> update user <span class="token builtin class-name">set</span> <span class="token function">host</span> <span class="token operator">=</span> <span class="token string">&#39;%&#39;</span> where user <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里用户root可以远程访问了。</p><p>我们最好再给root用户设置个密码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> alter user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;1234&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关命令" tabindex="-1"><a class="header-anchor" href="#相关命令" aria-hidden="true">#</a> 相关命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建用户</span>
mysql<span class="token operator">&gt;</span> CREATE <span class="token environment constant">USER</span> <span class="token string">&#39;username&#39;</span>@<span class="token string">&#39;host&#39;</span> IDENTIFIED BY <span class="token string">&#39;password&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 删除用户</span>
mysql<span class="token operator">&gt;</span> DROP <span class="token environment constant">USER</span> <span class="token string">&#39;username&#39;</span>@<span class="token string">&#39;host&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 授权 GRANT privileges ON databasename.tablename TO &#39;username&#39;@&#39;host&#39;;</span>
mysql<span class="token operator">&gt;</span> GRANT SELECT, INSERT ON databasename.* TO <span class="token string">&#39;username&#39;</span>@<span class="token string">&#39;host&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 授予全部权限</span>
mysql<span class="token operator">&gt;</span> GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;username&#39;</span>@<span class="token string">&#39;host&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 撤销授权</span>
mysql<span class="token operator">&gt;</span> REVOKE privileges ON databasename.tablename FROM <span class="token string">&#39;username&#39;</span>@<span class="token string">&#39;host&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 设置密码</span>
mysql<span class="token operator">&gt;</span> ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;1234&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 刷新权限</span>
mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>

<span class="token comment"># 查看用户</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> user,host from user<span class="token punctuation">;</span>

<span class="token comment"># 查看权限</span>
mysql<span class="token operator">&gt;</span> show grants <span class="token keyword">for</span> <span class="token string">&#39;username&#39;</span>@<span class="token string">&#39;host&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),i=[l];function o(p,c){return n(),a("div",null,i)}const m=s(t,[["render",o],["__file","相关服务安装-mysql.html.vue"]]);export{m as default};
