import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as a,c as d,e as r,a as n,d as i,b as s}from"./app-CYrfdzXE.js";const p={},v={href:"https://github.com/ehang-io/nps/releases",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/ehang-io/nps/releases/download/v0.26.10/linux_amd64_server.tar.gz",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/ehang-io/nps/releases",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/ehang-io/nps/releases/download/v0.26.10/windows_amd64_client.tar.gz",target:"_blank",rel:"noopener noreferrer"},c={href:"https://github.com/stascorp/rdpwrap/releases",target:"_blank",rel:"noopener noreferrer"};function g(h,e){const l=o("ExternalLinkIcon");return a(),d("div",null,[e[15]||(e[15]=r('<blockquote><p>通过内网穿透我们可以在外网访问到内网设备，就好像内网设备拥有了公网ip一样。</p></blockquote><h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h2><p>服务端使用阿里云ubuntu服务器，客户端就是本地的win10pc</p><h2 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h2><h3 id="安装服务端" tabindex="-1"><a class="header-anchor" href="#安装服务端" aria-hidden="true">#</a> 安装服务端</h3>',5)),n("ol",null,[n("li",null,[e[2]||(e[2]=i("从github的")),n("a",v,[e[0]||(e[0]=i("ehang-io/nps")),s(l)]),e[3]||(e[3]=i("中获取符合自己环境的发布包，这里我用的是")),n("a",u,[e[1]||(e[1]=i("linux_amd64_server")),s(l)])]),e[4]||(e[4]=n("li",null,[i("解压，"),n("code",null,"tar -zxvf linux_amd64_server.tar.gz")],-1)),e[5]||(e[5]=n("li",null,[i("在"),n("code",null,"linux_amd64_server"),i("目录下我们可以看到解压的文件。")],-1)),e[6]||(e[6]=n("li",null,[i("需要注意的是直接修改此处的配置文件是无效的。运行时使用的配置文件目录为："),n("code",null,"/etc/nps/conf/"),i("。")],-1)),e[7]||(e[7]=n("li",null,"我的配置为：",-1))]),e[16]||(e[16]=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>appname = nps
#Boot mode(dev|pro)
runmode = pro

##bridge
## 客户端与服务端连接方式kcp或tcp
bridge_type=tcp
## 服务端客户端通信端口，也就是说客户端通过访问服务端的这个端口可以进行连接
bridge_port=8024
bridge_ip=0.0.0.0

# Public password, which clients can use to connect to the server
# After the connection, the server will be able to open relevant ports and parse related domain names according to its own configuration file.
## 客户端以配置文件模式启动时的密钥，设置为空表示关闭客户端配置文件连接模式
public_vkey=123123


# log level LevelEmergency-&gt;0  LevelAlert-&gt;1 LevelCritical-&gt;2 LevelError-&gt;3 LevelWarning-&gt;4 LevelNotice-&gt;5 LevelInformational-&gt;6 LevelDebug-&gt;7
# 配置自己想要的日志级别以及日志文件目录
log_level=7
log_path=/home/nikola/app/nps-tool/nps.log

# nps提供网页版的管理系统，此处为相关配置
#web
# 网址可以为ip或者域名
web_host=xxx.xxxx.xxx
# 登录nps的账号
web_username=xxxx
web_password=xxxx
# 使用的端口 注意需要添加安全组
web_port=8888
web_ip=0.0.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的配置替换到<code>nps.conf</code>文件中<br> 6. 使用<code>nps start</code>命令启动服务</p><h3 id="创建隧道和客户端" tabindex="-1"><a class="header-anchor" href="#创建隧道和客户端" aria-hidden="true">#</a> 创建隧道和客户端</h3><ol><li>访问我们配置的web页面, 并使用用户名和密码登录。<br><img src="https://tech-nikola.nikolazhang.top/tools/nps/nps-login.png" alt="登录页面"></li><li>点击左侧客户端，之后点击新增按钮。按照下图进行配置。唯一验证密钥可以不填写，由系统生成。<br><img src="https://tech-nikola.nikolazhang.top/tools/nps/nps-client.png" alt="配置信息"></li><li>保存之后，回到客户端列表页面，在刚才新增的客户端上点击隧道。</li><li>按照下图配置隧道信息。客户端id为之前配置的客户端id可以在列表页面查看。服务端端口需要一个空闲端口。目标为本地的远程连接ip和端口（3389为默认的windows远程连接端口）。<br><img src="https://tech-nikola.nikolazhang.top/tools/nps/nps-suidao.png" alt="隧道信息"></li></ol><h2 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h2><h3 id="安装客户端" tabindex="-1"><a class="header-anchor" href="#安装客户端" aria-hidden="true">#</a> 安装客户端</h3>`,6)),n("p",null,[e[10]||(e[10]=i("从github的")),n("a",b,[e[8]||(e[8]=i("ehang-io/nps")),s(l)]),e[11]||(e[11]=i("中获取符合自己的发布包，这里我用的是")),n("a",m,[e[9]||(e[9]=i("windows_amd64_client")),s(l)])]),e[17]||(e[17]=r('<p>解压该压缩包。并进入解压目录，可以看到一个<code>npc.exe</code>文件，和一个<code>conf</code>配置文件目录。</p><p>推荐你将当前目录添加到环境变量中去。（具体方法是打开控制面板-&gt;系统-&gt;环境变量-&gt;在path下添加该目录）这样我们就可以在全局使用npc命令。</p><p>回到我们服务端的web页面，查看客户端列表的信息。可以看到下图位置的命令行。（<code>npc -server=localhost:8024 -vkey=xxxxxxxx -type=tcp</code>）</p><p>将其复制变将localhost改成上面服务器的ip。执行命令可以看到连接成功的日志提示。</p><p><img src="https://tech-nikola.nikolazhang.top/tools/nps/nps-client-connect.png" alt="success"></p><p>回到服务端的客户端列表页面，此时可以看到客户端已经在线了。</p><p><img src="https://tech-nikola.nikolazhang.top/tools/nps/nps-server-clients.png" alt="client-online"><br><img src="https://tech-nikola.nikolazhang.top/tools/nps/nps-server-suidao.png" alt="suidao-online"></p><h2 id="使用远程连接访问" tabindex="-1"><a class="header-anchor" href="#使用远程连接访问" aria-hidden="true">#</a> 使用远程连接访问</h2>',8)),n("p",null,[e[13]||(e[13]=i("打开windows的远程连接功能。注意需要确保windows具有远程访问的功能，并且能正常使用，有些版本是被阉割的。（可以通过")),n("a",c,[e[12]||(e[12]=i("修复工具")),s(l)]),e[14]||(e[14]=i("解决）"))]),e[18]||(e[18]=n("p",null,[n("img",{src:"https://tech-nikola.nikolazhang.top/tools/nps/nps-win-remote.png",alt:"windows"})],-1)),e[19]||(e[19]=n("p",null,"输入远程电脑的账号密码就可以访问了。",-1))])}const w=t(p,[["render",g],["__file","nps内网穿透.html.vue"]]);export{w as default};
