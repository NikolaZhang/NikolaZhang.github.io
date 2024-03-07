import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-DzXEe5Wt.js";const t="/assets/image-zT4J3yWv.png",p={},c=e('<blockquote><p>单例模式，确保一个类只有一个实例，并且提供了对该类的全局访问入口，它可以确保使用这个类实例的所有对象都使用相同的实例。</p></blockquote><p><img src="'+t+`" alt="Alt text"></p><h2 id="单例模式-懒汉模式" tabindex="-1"><a class="header-anchor" href="#单例模式-懒汉模式" aria-hidden="true">#</a> 单例模式-懒汉模式</h2><p>在需要的时候才创建实例，并且只创建一次。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonA</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">SingletonA</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">SingletonA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SingletonA</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SingletonA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单例模式-饿汉模式" tabindex="-1"><a class="header-anchor" href="#单例模式-饿汉模式" aria-hidden="true">#</a> 单例模式-饿汉模式</h2><p>在类加载的时候就创建实例。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonB</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">SingletonB</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SingletonB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SingletonB</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>执行<code>main</code>方法，结果输出均为<code>true</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AbstractProduct</span> productA <span class="token operator">=</span> <span class="token class-name">SimpleFactory</span><span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productA<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AbstractProduct</span> productB <span class="token operator">=</span> <span class="token class-name">SimpleFactory</span><span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productB<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="改进" tabindex="-1"><a class="header-anchor" href="#改进" aria-hidden="true">#</a> 改进</h2><p>如果考虑并发的情形，上面的懒汉模式会创建多个实例，因此需要加锁。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SyncSingletonA</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">SyncSingletonA</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">SyncSingletonA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SyncSingletonA</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">SyncSingletonA</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SyncSingletonA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加锁之后，还要进行判空，目的是为了防止其他线程创建类实例后，当前线程又再次创建。</p>`,15),o=[c];function l(i,u){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","6-singleton.html.vue"]]);export{r as default};
