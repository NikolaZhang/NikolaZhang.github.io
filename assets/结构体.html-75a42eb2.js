import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-f13d4797.js";const p={},t=e(`<blockquote><p>刚开始接触go, 直观的感觉就是--好奇葩的语言. 对于面向对象的中毒用户, 又一时难以接受里面的一些做法. go不是一门面向对象编程的语言, 没有对象和继承的概念, 也没有多态与重载. go表示一个对象的概念是通过构造体实现的. 这一篇文章我们就详细看看构造体的使用.</p></blockquote><h2 id="长什么样" tabindex="-1"><a class="header-anchor" href="#长什么样" aria-hidden="true">#</a> 长什么样</h2><p>go语言的设计很有c的风格, 包括这个结构体的概念. 通过如下方式可以定义一个构造体:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对一个构造体赋值, 有很多种方式:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>    <span class="token comment">// 声明一个结构体实例, 并赋初值 字段: value</span>
    person <span class="token operator">:=</span> Person<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span>
        Age<span class="token punctuation">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 设置空值</span>
    person <span class="token operator">=</span> Person<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 按照字段顺序进行赋值</span>
    person <span class="token operator">=</span> Person<span class="token punctuation">{</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">}</span>
    <span class="token comment">// 也支持指定某个字段赋值</span>
    person <span class="token operator">=</span> Person<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以通过new关键字, 赋值直接.下面的属性赋值, 不过要注意此时的person为指针类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>    person <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span>
    person<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;zhangxu&quot;</span>
    person<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">23</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>new</code>的作用和<code>&amp;Person{}</code>的作用相同</p><h2 id="绑定方法" tabindex="-1"><a class="header-anchor" href="#绑定方法" aria-hidden="true">#</a> 绑定方法</h2><p>将方法与结构体进行绑定可以参考如下示例</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">changeAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>Age <span class="token operator">+=</span> <span class="token number">100</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后就可以通过<code>person.changeAge()</code>进行调用.</p><p>这里要注意一点, 我们关联的是指针<code>*Person</code>, 此时拷贝的为地址, 如果使用<code>Person</code>则拷贝的为原来的数据, 因此改变内部属性将不会作用到原有变量. 实际表现为Age没有加100</p><h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2><p>很遗憾没有构造器. 但是可以使用方法实现:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int</span><span class="token punctuation">)</span> Person <span class="token punctuation">{</span>
   <span class="token keyword">return</span> Person<span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>person := NewPerson(&quot;zhangsna&quot;, 12)</code>就可以完成声明和初始化</p><h2 id="组合" tabindex="-1"><a class="header-anchor" href="#组合" aria-hidden="true">#</a> 组合</h2><p>这是将一个结构包含进另一个结构的行为</p><p>下面的例子中我们在Person中增加了一个<code>Class</code>, 注意非同名字段可以直接获取, 同名字段只能逐步调用.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Class <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Score <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
    <span class="token operator">*</span>Class
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    person <span class="token operator">:=</span> Person<span class="token punctuation">{</span><span class="token string">&quot;zhangsna&quot;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>Class<span class="token punctuation">{</span><span class="token string">&quot;语文&quot;</span><span class="token punctuation">,</span> <span class="token number">83</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>Score<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>Class<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="传值还是传指针" tabindex="-1"><a class="header-anchor" href="#传值还是传指针" aria-hidden="true">#</a> 传值还是传指针</h2><p>如果结果体内部以值的方式组合一个结构体, 赋值时自然要使用结构体的方式进行赋值, 而不是使用指针.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Class <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Score <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
    Class
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    person <span class="token operator">:=</span> Person<span class="token punctuation">{</span><span class="token string">&quot;zhangsna&quot;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> Class<span class="token punctuation">{</span><span class="token string">&quot;语文&quot;</span><span class="token punctuation">,</span> <span class="token number">83</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>Score<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>Class<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你会发现这两个程序(与上面一节)输出结果是相同的</p><p>个人理解, 就结构体本事讨论没有什么意义, 应该要结合具体的方法使用, 如果你需要修改结构体的值, 那么对应的方法参数肯定需要传指针 如果结构体中是用的是指针, 那么直接传过去就好了. 如果是第二种方式就通过&amp;取地址传过去, 也可以.</p><p>你可以运行一下下面的程序</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Class1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Score <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Class2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Score <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
    <span class="token operator">*</span>Class1
    Class2
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    person <span class="token operator">:=</span> Person<span class="token punctuation">{</span><span class="token string">&quot;zhangsna&quot;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token operator">&amp;</span>Class1<span class="token punctuation">{</span><span class="token string">&quot;语文&quot;</span><span class="token punctuation">,</span> <span class="token number">83</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    Class2<span class="token punctuation">{</span><span class="token string">&quot;数学&quot;</span><span class="token punctuation">,</span> <span class="token number">83</span><span class="token punctuation">}</span><span class="token punctuation">}</span>


    <span class="token function">changeClass1Score</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>Class1<span class="token punctuation">)</span>
    <span class="token function">changeClass2Score</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>person<span class="token punctuation">.</span>Class2<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>Class1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>Class2<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">changeClass1Score</span><span class="token punctuation">(</span>c <span class="token operator">*</span>Class1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span>Score <span class="token operator">+=</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">changeClass2Score</span><span class="token punctuation">(</span>c <span class="token operator">*</span>Class2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span>Score <span class="token operator">+=</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","结构体.html.vue"]]);export{d as default};
