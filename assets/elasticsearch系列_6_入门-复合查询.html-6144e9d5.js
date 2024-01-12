import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as i,a as n,b as s,d as t,e}from"./app-9ef1627c.js";const l={},u=e('<h2 id="boolean-query" tabindex="-1"><a class="header-anchor" href="#boolean-query" aria-hidden="true">#</a> boolean query</h2><p>查询语句中包含布尔类型的子句去匹配文本. 布尔查询中包含如下的事件类型, 可以理解为查询的条件类型.</p><table><thead><tr><th style="text-align:left;">事件</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">must</td><td style="text-align:left;">词句必须出现在匹配的文档中, 并且作用于相关性分数</td></tr><tr><td style="text-align:left;">filter</td><td style="text-align:left;">词句必须出现在匹配的文档中. 但是和<code>must</code>不同, 它不影响得分. 因为filter是在过滤器上下文中作用的.</td></tr><tr><td style="text-align:left;">should</td><td style="text-align:left;">词句应该要出现在匹配的文档中</td></tr><tr><td style="text-align:left;">must_not</td><td style="text-align:left;">词句必须不出现在文档中, 注意这是作用在过滤器上下文中. 但是会返回得分为0的文档</td></tr></tbody></table><p>布尔查询遵循越匹配越好<code>more-matches-is-better</code>的原则. 因此<code>must</code>和<code>should</code>匹配上的得分都会作用到最终的分数上, 也就是文档的<code>_score</code></p><h3 id="should" tabindex="-1"><a class="header-anchor" href="#should" aria-hidden="true">#</a> should</h3><p>刚才我们提到<code>should</code>, 如何理解应该出现在文档中呢? 这需要提及<code>minimum_should_match</code>, 这个参数表示<code>should</code>子句返回的匹配文档必须匹配的程度或者数量.</p><p>如果布尔查询包括至少一个<code>should</code>子句并且没有<code>must</code>或者<code>filter</code>子句, 此时默认值为1, 否则默认值为0.</p>',7),r=n("code",null,"minimum_should_match",-1),d={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-minimum-should-match.html",target:"_blank",rel:"noopener noreferrer"},k=e(`<p><img src="https://tech.nikolazhang.top/2020-02-03-21-23-40.png" alt="2020-02-03-21-23-40"></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /poem/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;one two three four five six&quot;</span>
<span class="token punctuation">}</span>

PUT /poem/_doc/<span class="token number">2</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;one two three seven eight nine&quot;</span>
<span class="token punctuation">}</span>

GET /poem/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;one&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;two&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;four&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;seven&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;minimum_should_match&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-04-13-09-49.png" alt="2020-02-04-13-09-49"></p><p>注意: 在处理百分比时，可以使用负值来获得边缘情况下的不同行为。在处理4个条款时，75%和-25%意味着同样的事情，但在处理5个条件时，75%表示需要3，而-25%表示需要4。 无论计算到达哪个数，都不会使用大于可选子句数的值，或小于1的值。（即：无论计算结果的结果有多低或有多高，所需匹配的最小数目永远不会低于1或大于从句数。</p><h2 id="boosting-query" tabindex="-1"><a class="header-anchor" href="#boosting-query" aria-hidden="true">#</a> Boosting Query</h2><p>返回匹配正查询的文档，同时减少匹配负查询的文档的相关性分数。 使用Boosting Query来降级某些文档，而不将它们排除在搜索结果之外。</p><p><img src="https://tech.nikolazhang.top/2020-02-04-13-40-59.png" alt="2020-02-04-13-40-59"></p><p>参数介绍:</p><p><code>positive</code>: 你想要匹配的查询条件. 返回的文档必须包含该条件. <code>negative</code>: 用于降级文档的条件, 比如文档虽然匹配positive但是含有不是你最想要的东西. 注意匹配该条件的正向匹配得分会乘上<code>negative_boost</code>即为最终得分, 从图中可以看到. <code>negative_boost</code>: 用于在文档匹配负参数时, 通过乘法运算扣分. 注意取值为<code>0-1</code></p><p>注意: 如果你设置值为大于1的, 不是不能运行, 此时的逻辑正好反过来了. 不过从语义上还是遵循既有规则, 设定区间为<code>0-1</code>.</p><p><img src="https://tech.nikolazhang.top/2020-02-04-13-52-16.png" alt="2020-02-04-13-52-16"></p><h2 id="constant-score-query" tabindex="-1"><a class="header-anchor" href="#constant-score-query" aria-hidden="true">#</a> Constant score query</h2><p>包一个筛选器查询，并返回每个匹配文档的相关性分数等于Boost参数值.</p><p><img src="https://tech.nikolazhang.top/2020-02-04-13-58-21.png" alt="2020-02-04-13-58-21"></p><p>我们知道在过滤器上下文查询中. 结果不会返回分数, 常分数查询会直接返回匹配过滤器的文档一个给定的<code>boost</code>分数.</p><h2 id="disjunction-max-queryedit" tabindex="-1"><a class="header-anchor" href="#disjunction-max-queryedit" aria-hidden="true">#</a> Disjunction max queryedit</h2><p>将任何与任一查询匹配的文档作为结果返回，但只将最佳匹配的评分作为查询的评分结果返回.</p><h3 id="参数介绍" tabindex="-1"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h3><p><code>queries</code>: 一系列的查询子句. <code>tie_breaker</code>: 可选参数, 介于0-1之间的浮点数. 用于增加匹配文档的相关性得分.</p><p>如果一个文档匹配多个查询子句, <code>dis_max query</code> 计算相关性分数的规则如下:</p><ol><li>从得分最高的匹配子句中获取相关性分数。</li><li>将任何其他匹配子句的分数乘以<code>tie_breaker</code>值。</li><li>将最高分添加到乘数分数中。</li></ol><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
PUT /dis_test/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Quick brown rabbits&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span>  <span class="token string">&quot;Brown rabbits are commonly seen.&quot;</span>
<span class="token punctuation">}</span>

PUT /dis_test/_doc/<span class="token number">2</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Keeping pets healthy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span>  <span class="token string">&quot;My quick brown fox eats rabbits on a regular basis.&quot;</span>
<span class="token punctuation">}</span>

GET /dis_test/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Brown fox&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;body&quot;</span><span class="token operator">:</span>  <span class="token string">&quot;Brown fox&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET /dis_test/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dis_max&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;queries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Brown fox&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;body&quot;</span><span class="token operator">:</span>  <span class="token string">&quot;Brown fox&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行布尔查询结果: <img src="https://tech.nikolazhang.top/2020-02-04-15-26-58.png" alt="2020-02-04-15-26-58"> 发现结果中最匹配的分数反而不高. 执行dis_max查询: <img src="https://tech.nikolazhang.top/2020-02-04-15-28-06.png" alt="2020-02-04-15-28-06"> 结果正确.</p><p>bool计算评分的方式(这是权威文档上的, 7.5没有找到对应的原文, 有待考据):</p><ol><li>执行 <code>should</code> 语句中的两个查询</li><li>加和两个查询的评分</li><li>乘以匹配语句的总数</li><li>除以所有语句总数</li></ol><p>下面分析一下产生这种结果的原因:</p><p>将两个子句分别执行.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /dis_test/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Brown fox&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时只能匹配文档1, 得分为<code>0.6931472</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /dis_test/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;body&quot;</span><span class="token operator">:</span>  <span class="token string">&quot;Brown fox&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时两个文档均能匹配. 文档1: <code>0.21110919</code>. 文档2: <code>0.77041256</code>.</p><p>按照上面的算法计算最终得分: 文档1: <code>0.6931472 + 0.21110919 = 0.90425639</code>. 文档2: <code>0 + 0.77041256 = 0.77041256</code>.</p><p>因此得出上述结果也就不足奇怪.</p><p>顺便再分析一下<code>dis_max query</code>的规则.</p><p>注意之前的查询没有加tie_breaker参数, 这里我们设置为0.5.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /dis_test/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dis_max&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;queries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Brown fox&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;body&quot;</span><span class="token operator">:</span>  <span class="token string">&quot;Brown fox&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tie_breaker&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文档1: 最高匹配子句的最高得分为<code>0.6931472</code>, 加上其他匹配得分与tie_breaker的乘积. <code>0.6931472 + 0.21110919 * 0.5 = 0.798701795</code></p><p>文档2: 同理: <code>0.77041256 + 0 * 0.5 = 0.77041256</code></p><p>现在对比一下我们分析的结果和实际的结果. ok, 一切就明了了. <img src="https://tech.nikolazhang.top/2020-02-04-19-23-54.png" alt="2020-02-04-19-23-54"></p><h2 id="function-score-query" tabindex="-1"><a class="header-anchor" href="#function-score-query" aria-hidden="true">#</a> Function score query</h2><p>这个查询允许自定义分数计算规则.</p>`,42),v={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"感觉可以放到之后的文章介绍.... 这一篇已经比较长了, 总之敬请期待",-1),b=n("p",null,[n("img",{src:"https://tech.nikolazhang.top/2020-02-04-19-32-49.png",alt:"2020-02-04-19-32-49"})],-1);function q(h,y){const a=p("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[r,s(" 可以设置如下类型的值("),n("a",d,[s("官方文档"),t(a)]),s("):")]),k,n("p",null,[n("a",v,[s("官方文档"),t(a)])]),m,b])}const f=o(l,[["render",q],["__file","elasticsearch系列_6_入门-复合查询.html.vue"]]);export{f as default};
