import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as i,c as s,f as c,a as e,d as t,b as d,e as l}from"./app-Bm5mKn2n.js";const o={},v=e("h2",{id:"_1-sql-server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-sql-server","aria-hidden":"true"},"#"),t(" 1. sql server")],-1),u=e("blockquote",null,[e("p",null,[t("最近打算把mysql,sql server,oracle数据库的基操整理一下. [三天假期, 我就这么无聊吗?]"),e("br"),t(" 其实也主要是为了防止弄混. 对于新手这是一个快速入门教程. 对于记忆不好的,容易弄混的,这是一个提词器.欢迎各位路过的客官进行补充."),e("br"),t(" 多谢~")])],-1),b=l('<h3 id="_1-1-数据类型" tabindex="-1"><a class="header-anchor" href="#_1-1-数据类型" aria-hidden="true">#</a> 1.1 数据类型</h3><table><thead><tr><th style="text-align:left;">数字类型</th><th style="text-align:left;">变量类型</th><th style="text-align:left;">大小</th><th style="text-align:left;">使用</th></tr></thead><tbody><tr><td style="text-align:left;">整数</td><td style="text-align:left;">tinyint</td><td style="text-align:left;">1字节</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">smallint</td><td style="text-align:left;">2字节</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">int</td><td style="text-align:left;">4字节</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">bigint</td><td style="text-align:left;">8字节</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">浮点数</td><td style="text-align:left;">float</td><td style="text-align:left;">8字节</td><td style="text-align:left;">可精确到第15位小数(范围:-1.79E308 到1.79E+308)</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">real</td><td style="text-align:left;">4字节</td><td style="text-align:left;">精确到第7位小数(范围:-3.40E38 到 ~3.40E38)</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">decimal</td><td style="text-align:left;">5~17字节</td><td style="text-align:left;">decimal(数字位数,小数位数): 数字位数最大38位</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">numeric</td><td style="text-align:left;">同上</td><td style="text-align:left;">使用方法同上,都是四舍五入</td></tr><tr><td style="text-align:left;">字符类型</td><td style="text-align:left;">char</td><td style="text-align:left;">1~8000</td><td style="text-align:left;">长度固定,短时补充空格,长时截取</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">varchar</td><td style="text-align:left;">1~8000</td><td style="text-align:left;">不会补充空格，长度可变。但超出时依旧会截取</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">nchar</td><td style="text-align:left;">(1~4000)×2</td><td style="text-align:left;">每一个字符为两个字节</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">nvarchar</td><td style="text-align:left;">(1~4000)×2</td><td style="text-align:left;">每一个字符为两个字节。其他同varchar</td></tr><tr><td style="text-align:left;">日期类型</td><td style="text-align:left;">date</td><td style="text-align:left;">3字节</td><td style="text-align:left;">日期。从公元元年1月1日到9999年12月31日</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">datetime</td><td style="text-align:left;">8字节</td><td style="text-align:left;">日期 时间。从公元1753年1月1日00:00:00.000 到9999年12月31日23:59:59.997 ，精确到3.33毫秒</td></tr></tbody></table><blockquote><p><strong>p.s.:</strong></p></blockquote><ol><li>查看字节数可以使用datalength(express)</li><li>一个汉字是两个字节</li></ol>',4),m={href:"https://www.cnblogs.com/HDK2016/p/7782303.html",title:"参考链接",target:"_blank",rel:"noopener noreferrer"},g=l('<h2 id="_1-2-常用方法" tabindex="-1"><a class="header-anchor" href="#_1-2-常用方法" aria-hidden="true">#</a> 1.2 常用方法</h2><h3 id="_1-2-1-转换" tabindex="-1"><a class="header-anchor" href="#_1-2-1-转换" aria-hidden="true">#</a> 1.2.1 转换</h3><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;">convert(type,val)</td><td style="text-align:left;">将val转换为type类型</td><td style="text-align:left;">convert(date, &#39;2018-12-30&#39;)</td></tr><tr><td style="text-align:left;">cast(val as type)</td><td style="text-align:left;">同上</td><td style="text-align:left;">cast(&#39;2018-12-30&#39; as date)</td></tr><tr><td style="text-align:left;">convert(varchar,dateval,fmt)</td><td style="text-align:left;">将日期转换为对应格式</td><td style="text-align:left;">select convert(varchar, getdate(), 120)</td></tr><tr><td style="text-align:left;">format(val,fmt)</td><td style="text-align:left;">将val转换为fmt格式</td><td style="text-align:left;">format(getdate(),&#39;yyyy/MM/dd&#39;)</td></tr></tbody></table><h3 id="_1-2-2-字符串操作" tabindex="-1"><a class="header-anchor" href="#_1-2-2-字符串操作" aria-hidden="true">#</a> 1.2.2 字符串操作</h3><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;">ltrim(val)</td><td style="text-align:left;">去除val左侧空格</td><td style="text-align:left;">ltrim(&#39; abcde&#39;)</td></tr><tr><td style="text-align:left;">rtrim(val)</td><td style="text-align:left;">去除val右侧空格</td><td style="text-align:left;">rtrim(&#39;abcde &#39;)</td></tr><tr><td style="text-align:left;">len(val)</td><td style="text-align:left;">计算字符串长度，汉字算一个</td><td style="text-align:left;">len(&#39;hello&#39;)</td></tr><tr><td style="text-align:left;">isnull(val1,val2)</td><td style="text-align:left;">如果va1是null,返回val2</td><td style="text-align:left;">isnull(null,&#39;isnull&#39;)</td></tr><tr><td style="text-align:left;">concat(varl1,val2)</td><td style="text-align:left;">拼接val1和val2</td><td style="text-align:left;">concat(&#39;a&#39;,&#39;b&#39;)</td></tr><tr><td style="text-align:left;">stuff(src,addr,len,str)</td><td style="text-align:left;">在src上从addr位置上(从1开始)删除len长度的字符，并替换成str</td><td style="text-align:left;">stuff(&#39;abcde&#39;,1,2,&#39;1234&#39;)</td></tr><tr><td style="text-align:left;">replace(src,dest,str)</td><td style="text-align:left;">将src中的dest全部替换为str</td><td style="text-align:left;">replace(&#39;abcde&#39;,&#39;a&#39;,&#39;w&#39;)</td></tr><tr><td style="text-align:left;">replicate(src,val)</td><td style="text-align:left;">将src重复val次输出</td><td style="text-align:left;">replicate(&#39;0&#39;, 10-len(&#39;123&#39;))+&#39;123&#39;</td></tr><tr><td style="text-align:left;">charindex(str,src,addr)</td><td style="text-align:left;">从addr位置上查找str在src中的位置</td><td style="text-align:left;">charindex(&#39;Abc&#39;,&#39;abcdef&#39;,0)</td></tr><tr><td style="text-align:left;">patindex(str,src)</td><td style="text-align:left;">从src中查找str,str可以是模糊查询形式</td><td style="text-align:left;">patindex(&#39;abc%&#39;,&#39;abcdef&#39;)</td></tr><tr><td style="text-align:left;">substring(src,addr,len)</td><td style="text-align:left;">从src第addr开始，截取len长度</td><td style="text-align:left;">substring(&#39;abcdef&#39;,1,2)</td></tr></tbody></table><blockquote><p><strong>P.S.:</strong></p></blockquote><ol><li>sql server没有trim方法可以使用ltrim(rtrim(val))替换</li><li>replicate中的例子是左补0的方法</li><li>charindex支持大小写敏感，只需要在src后加上COLLATE Latin1_General_CS_AS</li><li>patindex如果str不包含%，则逻辑就等是判断src和str是否相同，返回1。<br><code>select patindex(&#39;%bc%&#39;,&#39;abcdef&#39;)</code>返回值为2。表中示例返回为1</li><li>方法的调用使用select [function(a,b,c...)] 形式。</li></ol><h3 id="_1-2-3-日期操作" tabindex="-1"><a class="header-anchor" href="#_1-2-3-日期操作" aria-hidden="true">#</a> 1.2.3 日期操作</h3><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;">getdate()</td><td style="text-align:left;">获取当前时间</td><td style="text-align:left;">getdate()</td></tr><tr><td style="text-align:left;">datediff(type,start,end)</td><td style="text-align:left;">计算start,end之间的type数量，type可为year,day,month...</td><td style="text-align:left;">datediff(day,&#39;2018-12-30&#39;,&#39;2019-12-30&#39;)</td></tr><tr><td style="text-align:left;">dateadd(type,len,src)</td><td style="text-align:left;">在src上增加len个type，type同上，结果为datetime类型</td><td style="text-align:left;">dateadd(month,2,&#39;2018-12-15&#39;)</td></tr><tr><td style="text-align:left;">datename(type,src)</td><td style="text-align:left;">指定日期的指定日期部分的字符串</td><td style="text-align:left;">datename(weekday, &#39;2018-12-30&#39;)</td></tr><tr><td style="text-align:left;">datepart(type,src)</td><td style="text-align:left;">指定日期的指定日期部分的整数</td><td style="text-align:left;">datepart(month, &#39;2018-12-30&#39;)</td></tr></tbody></table>',9),h=e("strong",null,"P.S.:",-1),f=e("br",null,null,-1),x={href:"https://www.cnblogs.com/luna-hehe/p/8191873.html",target:"_blank",rel:"noopener noreferrer"},y=l('<h3 id="_1-2-4-数字操作" tabindex="-1"><a class="header-anchor" href="#_1-2-4-数字操作" aria-hidden="true">#</a> 1.2.4 数字操作</h3><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">作用</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;">celling(val)</td><td style="text-align:left;">向上取整</td><td style="text-align:left;">celling(1.2)</td></tr><tr><td style="text-align:left;">floor(val)</td><td style="text-align:left;">向下取整</td><td style="text-align:left;">floor(1.5)</td></tr><tr><td style="text-align:left;">round(val,len)</td><td style="text-align:left;">四舍五入精确小数点后len位</td><td style="text-align:left;">round(123.4232,3)</td></tr><tr><td style="text-align:left;">power(val,pow)</td><td style="text-align:left;">val的pow次幂</td><td style="text-align:left;">power(2,10)</td></tr></tbody></table><h2 id="_1-3-数据库操作" tabindex="-1"><a class="header-anchor" href="#_1-3-数据库操作" aria-hidden="true">#</a> 1.3 数据库操作</h2><h3 id="_1-3-1-约束" tabindex="-1"><a class="header-anchor" href="#_1-3-1-约束" aria-hidden="true">#</a> 1.3.1 约束</h3><blockquote><p>-- 添加主键约束<br> alter table worker add constraint PK_code primary key(workcode);<br> -- 添加唯一约束<br> alter table worker add constraint UNI_code unique (workcode);<br> -- 添加默认约束<br> alter table worker add constraint DEF_note default &#39;this note should ....&#39; for note1;<br> -- 添加检查约束<br> alter table worker add constraint CHK_note check(len(note1)&gt;10)<br> -- 添加外键约束<br> alter table worker add constraint FOR_note foreign key(comcode) references com(comcode)<br> -- 删除约束<br> alter table worker drop constraint DEF_note;</p></blockquote><h3 id="_1-3-2-索引" tabindex="-1"><a class="header-anchor" href="#_1-3-2-索引" aria-hidden="true">#</a> 1.3.2 索引</h3><blockquote><p>create unique index worker_index on worker (workcode asc)<br> create clustered index workernote_index on worker(note1)<br> create nonclustered index com_index on com(comname)</p></blockquote><p><strong>P.S.:</strong><br> 一个表只能有一个聚集索引.</p><p>可以添加的参数:<br> WITH (<br> --用于指定索引中间级中每个页（节点）上保持开放的空间<br> PAD_INDEX = ON<br> --用于指定在创建索引时，每个索引页的数据占索引页大小的百分<br> 比，fillfactor的值为1到100<br> , FILLFACTOR = 50<br> --用于指定过期的索引统计不会自动重新计算<br> , STATISTICS_NORECOMPUTE = OFF<br> --用于指定创建索引时的中间排序结果将存储在 tempdb 数据库中<br> , SORT_IN_TEMPDB = OFF<br> --用于控制当往包含于一个唯一聚集索引中的列中插入重复数据时SQL Server<br> 所作的反应。<br> , IGNORE_DUP_KEY = ON<br> --用于指定应删除并重新创建已命名的先前存在的聚集索引或者非聚集索引。<br> , DROP_EXISTING = OFF<br> --指定在索引操作期间基础表和关联的索引是否可用于查询和数据修改操作。<br> , ONLINE = OFF<br> --访问索引时允许行锁。<br> , ALLOW_ROW_LOCKS = ON<br> --访问索引时允许页锁。<br> , ALLOW_PAGE_LOCKS = ON<br> )</p>',9),_={href:"https://www.cnblogs.com/knowledgesea/p/3672099.html",target:"_blank",rel:"noopener noreferrer"},p=l(`<h3 id="_1-3-3-序列" tabindex="-1"><a class="header-anchor" href="#_1-3-3-序列" aria-hidden="true">#</a> 1.3.3 序列</h3><blockquote><p>--创建序列<br> create sequence [SEQNAME] as decimal minvalue 1 maxvalue 999999999999 start with 1 increment by 1 no cache<br> --获取序列的下一个值<br> select next value for [SEQNAME]</p></blockquote><h3 id="_1-3-4-函数" tabindex="-1"><a class="header-anchor" href="#_1-3-4-函数" aria-hidden="true">#</a> 1.3.4 函数</h3><ul><li>表值函数<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create function FUNCNAME (
--指定变量
@var1 varchar(10)
, ...
)
--指定返回类型
returns varchar(10)
begin
  --声明变量
  declare @var2 int
  --赋值的时候使用set
  set @var2 = (select age from user where usercode=&#39;000001&#39;);
  --如果查询数据库则可简化位
  select @var2 = age from .....
  --返回
  return @var2
end
--执行函数的方法
select FUNCNAME(&#39;a&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>内联标值函数<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create function FUNC_UserTab_1
(
    @codetype varchar(10)
)
returns table
as
return (select * from sys_code_mst where codetype=@codetype)
-- 查询结果为一张表，所以使用查表法
select * from FUNC_UserTab_1(&#39;salechnl&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>多语句表值函数<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create function selectSMSInfo(
	@othersign varchar(10)
)
returns @smsinfo TABLE (
	url varchar(100) not null
	, username varchar(20) not null
	, password varchar(20) not null
	, msgtype varchar(10) not null
	, encode varchar(10)
)
BEGIN
	DECLARE @url varchar(100)
	DECLARE @username varchar(20)
	DECLARE @password varchar(20)
	DECLARE @msgtype varchar(10)
	DECLARE @encode varchar(10)

	SET @url = (select codename from sys_code_mst where codetype=&#39;sms&#39; and othersign = @othersign and code=&#39;SMSUrl&#39;)
	SET @username = (select codename from sys_code_mst where codetype=&#39;sms&#39; and othersign = @othersign and code=&#39;username&#39;)
	SET @password = (select codename from sys_code_mst where codetype=&#39;sms&#39; and othersign = @othersign and code=&#39;password&#39;)
	SET @msgtype = (select codename from sys_code_mst where codetype=&#39;sms&#39; and othersign = @othersign and code=&#39;msgtype&#39;)
	SET @encode = (select codename from sys_code_mst where codetype=&#39;sms&#39; and othersign = @othersign and code=&#39;encode&#39;)
	insert into @smsinfo(url, username, password, msgtype, encode) values(@url, @username, @password, @msgtype, @encode);
	RETURN
END
--调用方法,可以认为拼出一张表
select * from selectSMSInfo(&#39;a&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_1-3-5-存储过程" tabindex="-1"><a class="header-anchor" href="#_1-3-5-存储过程" aria-hidden="true">#</a> 1.3.5 存储过程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE PROCEDURE addtest
  @a int
  , @b int
  , @result int output
AS
BEGIN
  SET @result = @a+@b;
  return @result;
END

-- 调用
-- 注意output類型的參數可以不用加return
-- 有return可以不用加output
declare @res1 int
declare @res2 int
EXECUTE @res2 = dbo.addtest 1,2,@res1 output
print @res1
print @res2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-6-视图" tabindex="-1"><a class="header-anchor" href="#_1-3-6-视图" aria-hidden="true">#</a> 1.3.6 视图</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create view worker_view as select * from worker;
select * from worker_view;
drop view view_worker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),w={href:"https://www.cnblogs.com/Brambling/p/6731386.html",target:"_blank",rel:"noopener noreferrer"},E=l(`<h3 id="_1-3-7-触发器" tabindex="-1"><a class="header-anchor" href="#_1-3-7-触发器" aria-hidden="true">#</a> 1.3.7 触发器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create trigger worktrigger on worker
after delete as
begin
   insert into backuptable values(&#39;001&#39;, &#39;smith&#39;, getdate())
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>P.S.:</strong><br> 当对worker进行删除操作后就会insert一条数据.<br> 触发器可以加在update insert delete 操作上<br> sql server 有两种触发器instead of和after前者表示不执行预期操作而是执行触发器.</p><h3 id="_1-3-8-游标" tabindex="-1"><a class="header-anchor" href="#_1-3-8-游标" aria-hidden="true">#</a> 1.3.8 游标</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  declare @tempval varchar(10);
  declare cursorname for select columnname from tablename;
  open cursorname;
  fetch next from cursorname into @tempname;
  while @@fetch_status=0
    begin
      ........
    end
  close cursorname;
  deallocate cursorname;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-9-事务" tabindex="-1"><a class="header-anchor" href="#_1-3-9-事务" aria-hidden="true">#</a> 1.3.9 事务</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--定义变量，用于累计事务执行过程中的错误
declare @errorSum int
set @errorSum =0
begin transaction tran1
  begin
      insert into worker(workcode, workname) values(&#39;002&#39;, &#39;nansy&#39;)
      set @errorSum=@errorSum+@@ERROR
      print &#39;a&#39;+convert(varchar,@errorSum)
      insert into worker(workcode,workname) values(&#39;001&#39;, &#39;hyes&#39;)
      insert into worker(workcode,workname) values(&#39;002&#39;, &#39;mtys&#39;)
      set @errorSum = @errorSum+@@ERROR
      print &#39;b&#39;+convert(varchar,@errorSum)

      if @errorSum&gt;0
        begin
          rollback transaction tran1
        end
      else
        begin
          commit transaction tran1
        end
  end

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果数据库中设置了workcode为主键, 当我们第二次插入002时,会出现主键重复,该语句与事务中的语句均回滚.</p><h3 id="_1-3-10-异常" tabindex="-1"><a class="header-anchor" href="#_1-3-10-异常" aria-hidden="true">#</a> 1.3.10 异常</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BEGIN TRY
 declare @res int
 set @res=5/0;
END TRY
BEGIN CATCH
 --返回错误号。
 select ERROR_NUMBER();
 --返回严重性。
 select ERROR_SEVERITY();
 --返回错误状态号。
 select ERROR_STATE();
 --返回出现错误的存储过程或触发器的名称。
 select ERROR_PROCEDURE()
 --返回导致错误的例程中的行号。
 select ERROR_LINE();
 --返回错误消息的完整文本。 该文本可包括任何可替换参数所提供的值，如长度、对象名或时间。
 select ERROR_MESSAGE();
END CATCH

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-11-其他" tabindex="-1"><a class="header-anchor" href="#_1-3-11-其他" aria-hidden="true">#</a> 1.3.11 其他</h3><blockquote><p><strong>添加、删除字段</strong><br> alter table info add note1 varchar(100);<br> alter table info drop column note1;<br><strong>删除表的内容</strong><br> truncate table worker<br><strong>查询分页</strong><br> select top number|percent * from tablename<br> sql server要实现查询从第几条到第几条记录. 可以使用如下方法:</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-- 查询第6到15条记录
select top 10 agntend.agentcode, agntend.sex from uwca.dbo.uw_nb_agent agntend where agntend.agentcode not in (
select top 5 agntstart.agentcode from uwca.dbo.uw_nb_agent agntstart
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用rownumer也可以实现分页:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select ROW_NUMBER() over(order by agentcode) &#39;seq&#39;, agentcode, sex into temp from uwca.dbo.uw_nb_agent
select * from temp where seq between 6 and 15;
drop table temp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function k(S,R){const n=r("ExternalLinkIcon");return i(),s("div",null,[v,u,c("more"),b,e("p",null,[e("a",m,[t("【SqlServer】Sql Server 支持的数据类型"),d(n)])]),g,e("blockquote",null,[e("p",null,[h,f,e("a",x,[t("datename和datepart的使用"),d(n)])])]),y,e("p",null,[t("链接: "),e("a",_,[t("关于索引的高级使用"),d(n)])]),p,e("p",null,[t("链接："),e("a",w,[t("视图"),d(n)])]),E])}const q=a(o,[["render",k],["__file","SqlServer-数据库相关操作.html.vue"]]);export{q as default};
