import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-9ef1627c.js";const t={},o=e(`<h2 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h2><ol><li>查询使用的是GET方式, 比如查询id为1的员工.</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /megacorp/employee/<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-01-13-45-39.png" alt="2020-02-01-13-45-39"> 2. 搜索全部</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /megacorp/employee/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-01-13-49-44.png" alt="2020-02-01-13-49-44"></p><p>响应内容的hits数组中包含了我们所有的三个文档。默认情况下搜索会返回前10个结果。 3. 根据字段值查询 查询last_name包含Smith的员工. 此时仍然使用_search关键词进行查询, 但是需要在请求中添加参数q, 其值为一个键值对, 相当于sql中的条件.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /megacorp/employee/_search?q=last_name<span class="token operator">:</span>Smith
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-01-13-53-46.png" alt="2020-02-01-13-53-46"></p><p>可以看到出现了两个匹配结果 4. 查询部分字段</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /megacorp/employee/<span class="token number">1</span>?_source=first_name<span class="token punctuation">,</span>last_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-01-20-02-12.png" alt="2020-02-01-20-02-12"></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /megacorp/employee/<span class="token number">1</span>/_source
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-01-16-57-09.png" alt="2020-02-01-16-57-09"> 5. 判断文档是否存在,而不关心内容 将GET方法换成HEAD即可, 响应状态为200则存在, 404不存在</p><h3 id="dsl" tabindex="-1"><a class="header-anchor" href="#dsl" aria-hidden="true">#</a> DSL</h3><p>以上使用的查询方法属于简单查询, DSL将查询条件放到请求体中, 以实现更复杂的查询方式. 其全称叫作Domain Specific Language. 它包含两种类型的语句.</p><p>叶查询语句: 主要适用于查询特定字段的特定值. 例如 match，term或 range查询.</p><p>复合查询语句:包含其他的叶查询和复合查询.(下一篇着重接介绍)</p><p>查询语句根据其所在的查询上下文和过滤上下文的不同起到不同的作用.</p><h4 id="查询上下文和过滤上下文" tabindex="-1"><a class="header-anchor" href="#查询上下文和过滤上下文" aria-hidden="true">#</a> 查询上下文和过滤上下文</h4><h5 id="查询上下文" tabindex="-1"><a class="header-anchor" href="#查询上下文" aria-hidden="true">#</a> 查询上下文</h5><p>在这种情况下, 查询语句的关注点是文档对查询语句条件的匹配度. 而这个匹配度通过查询结果的<code>_score</code>(相关性得分)可以看出.</p><p>只要将查询子句传递给query参数(比如Search API 中的query参数), 查询上下文就会生效</p><h5 id="过滤上下文" tabindex="-1"><a class="header-anchor" href="#过滤上下文" aria-hidden="true">#</a> 过滤上下文</h5><p>此时, 查询的关注点是文档是否匹配条件. 结果只能是是或者否. 频繁使用的过滤器会被缓存从而提高性能.</p><p>只要将查询子句传递给filter(如 bool 查询中的 filter 或 must not, constant_score 查询中的 filter 或aggregation中的filter), 过滤上下文就会生效.</p><h5 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /megacorp/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Smith&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;gt&quot;</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个<code>query</code>表示这是一个查询上下文. <code>bool</code>中的<code>must</code>用在查询上下文中去匹配文档. <code>filter</code>参数表示其下为过滤上下文, 用来过滤出符合条件的文档.</p><h3 id="全文搜索" tabindex="-1"><a class="header-anchor" href="#全文搜索" aria-hidden="true">#</a> 全文搜索</h3><p>使用<code>match</code>搜索包含词句的文档, 并返回相关分数</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /megacorp/employee/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;about&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;rock climbing&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-01-14-32-03.png" alt="2020-02-01-14-32-03"></p><p><code>hits</code>中的<code>_score</code>字段表示结果的相关程度.</p><h3 id="短语搜索" tabindex="-1"><a class="header-anchor" href="#短语搜索" aria-hidden="true">#</a> 短语搜索</h3><p>返回同时包含<code>rock</code>和<code>climbing</code>的文档, 当使用<code>match</code>进行全文搜索时, 返回结果为所有匹配到的结果.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /megacorp/employee/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match_phrase&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;about&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;rock climbing&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高亮查询" tabindex="-1"><a class="header-anchor" href="#高亮查询" aria-hidden="true">#</a> 高亮查询</h3><p>将查询结果单独显示出来并通过<code>&lt;em&gt;</code>标签显示匹配结果</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /megacorp/employee/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match_phrase&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;about&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;rock climbing&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;about&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-01-15-13-49.png" alt="2020-02-01-15-13-49"></p>`,41),p=[o];function i(c,l){return s(),a("div",null,p)}const u=n(t,[["render",i],["__file","elasticsearch系列_5_入门-查询.html.vue"]]);export{u as default};
