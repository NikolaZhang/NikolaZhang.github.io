import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-UEHrMJEm.js";const t="/assets/image-2-ain6kicc.png",o="/assets/image-3-UkqQPUBA.png",i="/assets/image-4-RlWsuq1X.png",p="/assets/image-11--Ai6uDm-.png",l="/assets/image-10-iBFNCR4m.png",c={},u=e('<blockquote><p>使用gitee触发webhook需要外网地址，我们只有内网环境，那么本地如何触发构建呢？这篇文章尝试通过本地添加git hook脚本，在提交之后发送构建请求。</p></blockquote><h2 id="gitee中的webhook" tabindex="-1"><a class="header-anchor" href="#gitee中的webhook" aria-hidden="true">#</a> gitee中的webhook</h2><p>打开项目中的管理菜单，可以找到WebHooks。</p><p><img src="'+t+'" alt="Alt text"></p><p>上图中的账号密码为Jenkins用户的账号密码。</p><p>尝试发送一个请求，看看请求的格式，之后通过本地发送请求触发构建。</p><p><img src="'+o+'" alt="Alt text"></p><h2 id="本地模拟hook请求" tabindex="-1"><a class="header-anchor" href="#本地模拟hook请求" aria-hidden="true">#</a> 本地模拟hook请求</h2><p>请求地址、header、body复制到postman中。</p><p><img src="'+i+`" alt="Alt text"></p><p>之后删除一些属性，发送请求。经过简化，我们发送信息需要包含下面的部分即可。</p><p>header需要包含的内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>X-Git-Oschina-Event: Push Hook
X-Gitee-Event: Push Hook
User-Agent: git-oschina-hook
X-Gitee-Ping: <span class="token boolean">false</span>
Content-Type: application/json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>body需要包含的内容：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;commits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BUILD&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;project&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;git_http_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://gitee.com/NikolaZhang/communicate.git&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">8278595</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;communicate&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NikolaZhang&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ssh_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git@gitee.com:NikolaZhang/communicate.git&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ref&quot;</span><span class="token operator">:</span> <span class="token string">&quot;refs/heads/develop&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sender&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我小叮当&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我小叮当&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面body中的id，为一个数字即可。如果你希望根据其他信息，进行触发构建，可能需要更多参数。我们使用提交信息中的message进行匹配构建，这在<code>【安卓服务器】jenkins项目构建配置</code>文中提及。</p><h2 id="本地添加git-hook脚本" tabindex="-1"><a class="header-anchor" href="#本地添加git-hook脚本" aria-hidden="true">#</a> 本地添加git hook脚本</h2><p>在本地项目的<code>.git/hooks</code>目录中，新建<code>pre-push</code>文件，将下面的内容保存到文件中。</p><p>注意：project中的内容以及其他信息，需要按照自己的实际情况配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token assign-left variable">last_message</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> log <span class="token parameter variable">-1</span> <span class="token parameter variable">--format</span><span class="token operator">=</span>%s<span class="token variable">)</span></span> 

<span class="token assign-left variable">body</span><span class="token operator">=</span><span class="token string">&#39;{
    &quot;commits&quot;: [
        {
            &quot;message&quot;: &quot;&#39;</span><span class="token variable">$last_message</span><span class="token string">&#39;&quot;
        }
    ],
    &quot;project&quot;: {
        &quot;git_http_url&quot;: &quot;https://gitee.com/NikolaZhang/communicate.git&quot;,
        &quot;id&quot;: 8278595,
        &quot;name&quot;: &quot;communicate&quot;,
        &quot;namespace&quot;: &quot;NikolaZhang&quot;,
        &quot;ssh_url&quot;: &quot;git@gitee.com:NikolaZhang/communicate.git&quot;
    },
    &quot;ref&quot;: &quot;refs/heads/develop&quot;,
    &quot;sender&quot;: {
        &quot;name&quot;: &quot;我小叮当&quot;
    },
    &quot;user_name&quot;: &quot;我小叮当&quot;
}
&#39;</span>

<span class="token assign-left variable">url</span><span class="token operator">=</span><span class="token string">&quot;http://admin:1234@192.168.137.221:18080/gitee-project/communicate&quot;</span>

<span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token punctuation">\\</span>
    <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-H</span> <span class="token string">&quot;X-Git-Oschina-Event: Push Hook&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-H</span> <span class="token string">&quot;X-Gitee-Event: Push Hook&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-H</span> <span class="token string">&quot;User-Agent: git-oschina-hook&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-H</span> <span class="token string">&quot;X-Gitee-Ping: false&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$body</span>&quot;</span> <span class="token variable">$url</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本中url需要改为Jenkins提示中的url。</p><p><img src="`+p+`" alt="Alt text"></p><p>打开git bash终端，测试脚本是否可以正常运行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> pre-push <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当消息正常发送，并收到请求结果，则说明脚本可以正常运行。</p><p><img src="`+l+'" alt="Alt text"></p><p>这样以后我们向远程push代码时，本地git就会触发hook，给内网的Jenkins发送构建请求。</p>',27),r=[u];function d(v,m){return n(),a("div",null,r)}const q=s(c,[["render",d],["__file","本地webhook如何触发构建.html.vue"]]);export{q as default};
