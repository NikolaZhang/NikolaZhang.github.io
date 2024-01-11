import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-0f1114d3.js";const t="/assets/image-430ed8b8.png",p={},c=e('<blockquote><p><code>Adapter</code>，可以充当两个类之间的媒介，它可以转换一个类的接口，这样就可以被另外一个类使用，这使得具有不兼容接口的类能够协同使用。<br><code>Adapter</code>模式实现为客户端所知的接口，并且为客户端提供对不为其所知的类实例的访问。<code>Adapter</code>对象可以在不知道实现该接口的类的情况下，提供该接口的功能。</p></blockquote><p><img src="'+t+`" alt="Alt text"></p><p>适配器模式允许两个或多个不兼容的对象进行交互通信，提高已有功能的重复使用性。</p><p>以下几种情况应该使用适配器模式。</p><ol><li>要使用已有类，而该类接口与所需的接口并不匹配。</li><li>要创建可重用的类，该类可以与不相关的未知类进行协作，也就是说，类之间并不需要兼容接口。</li><li>要在一个不同于已知对象接口的接口环境中使用对象。</li><li>必须要进行多个源之间的接口转换的时候。</li></ol><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><h3 id="已有类的实现" tabindex="-1"><a class="header-anchor" href="#已有类的实现" aria-hidden="true">#</a> 已有类的实现</h3><p>假设系统中已经存在了<code>Adaptee</code>类，并且该类实现了某种功能，或者具有某些我们需要的属性。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adaptee</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">specificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Specific request&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目标类的接口" tabindex="-1"><a class="header-anchor" href="#目标类的接口" aria-hidden="true">#</a> 目标类的接口</h3><p>现在需要新增一个接口以及该接口对应的功能，如下。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Target</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="适配器" tabindex="-1"><a class="header-anchor" href="#适配器" aria-hidden="true">#</a> 适配器</h3><p>我们需要一个适配器类，该类实现了目标类的接口，并且将<code>Adaptee</code>类中的方法进行适配，如下。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token keyword">extends</span> <span class="token class-name">Target</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Adaptee</span> adaptee<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        adaptee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adaptee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        adaptee<span class="token punctuation">.</span><span class="token function">specificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdapterClient</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Target</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        target<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),i=[c];function l(o,d){return a(),s("div",null,i)}const k=n(p,[["render",l],["__file","7-adapter.html.vue"]]);export{k as default};