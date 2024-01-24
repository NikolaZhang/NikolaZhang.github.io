import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-hDKtsod9.js";const p={},t=e(`<blockquote><p>责任链模式可以在系统中建立一个链，这样消息可以在首先接收到它的级别被处理，或者可以定位到可以处理它的对象。</p></blockquote><p><img src="https://raw.githubusercontent.com/NikolaZhang/image-blog/main/22-chain-of-responsibility/20240124085824.png" alt="20240124085824"></p><p>责任链模式（Chain of Responsibility Pattern）包含以下主要角色：</p><ol><li><p>抽象处理者(CommandHandler)<br> 定义了一个处理请求的接口，通常会包含一个处理请求的方法（如 handleRequest()），以及持有下一个处理者的引用。抽象处理者一般被设计为抽象类或接口。</p></li><li><p>具体处理者(ConcreteHandler)<br> 继承自抽象处理者，实现了处理请求的方法。在实现时，具体处理者可以根据请求内容决定是自己处理还是将请求传递给下一个处理者。如果有能力处理请求，则进行处理；否则，调用其持有的下一个处理者的处理方法。</p></li><li><p>请求(Request)<br> 表示需要被处理的实体对象，它包含了所有必要的信息以供处理者做出是否处理该请求的决策。</p></li><li><p>客户端(Client)<br> 负责构造责任链，并向链头的处理者提交请求。客户端并不关心请求如何在链中被传递和处理，它只需要发起请求即可。</p></li></ol><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><h3 id="抽象处理器" tabindex="-1"><a class="header-anchor" href="#抽象处理器" aria-hidden="true">#</a> 抽象处理器</h3><p>抽象处理器中包含了一个处理请求的方法，以及持有下一个处理者的引用。前者用于子类进行实现，链条中的每一个节点都应该有自己的处理逻辑，后者用于连接各个环节，我们可以通过该引用依次调用链条上的每个节点。</p><p>下面代码中的<code>successor</code>是处理请求的入口。这里可以根据自己的需要进行节点的选择。注意</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">CommandHandler</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">CommandHandler</span> next<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">CommandHandler</span><span class="token punctuation">(</span><span class="token class-name">CommandHandler</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">successor</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span> stringBuilder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleRequest</span><span class="token punctuation">(</span>stringBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">successor</span><span class="token punctuation">(</span>stringBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span> stringBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="具体处理者" tabindex="-1"><a class="header-anchor" href="#具体处理者" aria-hidden="true">#</a> 具体处理者</h3><p>具体处理器实现<code>handleRequest</code>方法实现处理请求的逻辑。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Concretehandler1</span> <span class="token keyword">extends</span> <span class="token class-name">CommandHandler</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Concretehandler1</span><span class="token punctuation">(</span><span class="token class-name">CommandHandler</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span> stringBuilder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stringBuilder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot; (handled by ConcreteHandler1)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> stringBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">&quot;request info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 创建链条，commandHandler1--&gt;commandHandler2--&gt;null</span>
        <span class="token class-name">CommandHandler</span> commandHandler2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Concretehandler2</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CommandHandler</span> commandHandler1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Concretehandler1</span><span class="token punctuation">(</span>commandHandler2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        commandHandler1<span class="token punctuation">.</span><span class="token function">successor</span><span class="token punctuation">(</span>stringBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stringBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><p><img src="https://raw.githubusercontent.com/NikolaZhang/image-blog/main/22-chain-of-responsibility/20240124092812.png" alt="20240124092812"></p><p>注意：需要防止循环调用，否则会出现死循环。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">CommandHandler</span> commandHandler2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Concretehandler2</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">CommandHandler</span> commandHandler1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Concretehandler1</span><span class="token punctuation">(</span>commandHandler2<span class="token punctuation">)</span><span class="token punctuation">;</span>
commandHandler2<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>commandHandler1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码产生了<code>commandHandler1--&gt;commandHandler2--&gt;commandHandler1</code>的循环。会导致<code>StackOverflowError</code>或者<code>OOM</code>。</p><p>因此抽象层中最好做循环校验，防止循环调用。比如我们将所有链接节点对象做下对比，看下地址是否相等。<br> 比如：在设置下一个节点的时候，判断节点是否在当前节点的链接列表中，如果在，则不允许再次添加。</p>`,20),c=[t];function l(o,i){return s(),a("div",null,c)}const r=n(p,[["render",l],["__file","22-chain-of-responsibility.html.vue"]]);export{r as default};
