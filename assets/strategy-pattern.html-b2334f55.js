const e=JSON.parse('{"key":"v-144d934f","path":"/posts/pattern/strategy-pattern.html","title":"strategy pattern","lang":"en-US","frontmatter":{"isOriginal":true,"title":"strategy pattern","date":"2018-11-28T00:00:00.000Z","tag":["strategy pattern"],"category":"技术","description":"策略模式的实现和介绍","image":"http://image.nikolazhang.top/wallhaven-nrwq11.jpg","head":[["meta",{"property":"og:url","content":"https://nikolazhang.github.io/posts/pattern/strategy-pattern.html"}],["meta",{"property":"og:title","content":"strategy pattern"}],["meta",{"property":"og:description","content":"策略模式的实现和介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-08T15:09:36.000Z"}],["meta",{"property":"article:author","content":"我小叮当、"}],["meta",{"property":"article:tag","content":"strategy pattern"}],["meta",{"property":"article:published_time","content":"2018-11-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-08T15:09:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"strategy pattern\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-11-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-08T15:09:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我小叮当、\\",\\"url\\":\\"https://nikolazhang.github.io\\"}]}"]]},"headers":[{"level":2,"title":"接口","slug":"接口","link":"#接口","children":[]},{"level":2,"title":"实现类（举一个例子）","slug":"实现类-举一个例子","link":"#实现类-举一个例子","children":[]},{"level":2,"title":"入口类","slug":"入口类","link":"#入口类","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"结果","slug":"结果","link":"#结果","children":[]},{"level":2,"title":"UML","slug":"uml","link":"#uml","children":[]}],"git":{"createdTime":1686236976000,"updatedTime":1686236976000,"contributors":[{"name":"nikola","email":"nikolazhang@163.com","commits":1}]},"readingTime":{"minutes":0.73,"words":218},"filePathRelative":"posts/pattern/strategy-pattern.md","localizedDate":"November 28, 2018","excerpt":"<blockquote>\\n<p>In computer programming, the strategy pattern (also known as the policy pattern) is a behavioral software design pattern that enables selecting an algorithm at runtime. [wiki]</p>\\n</blockquote>\\n<!--more-->\\n<h2> 接口</h2>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package strategy;\\n\\n/************************************************\\n *@ClassName : CreateCar\\n *@Description : TODO\\n *@Author : NikolaZhang\\n *@Date : 【2018/11/28 21:05】\\n *@Version : 1.0.0\\n *************************************************/\\n\\npublic interface CreateCarI {\\n    void doingSomething();\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};