---
isOriginal: true
title: sql server 数据库
date: 2018-11-13
tag:
  - sql server
  - sql语法
category: database
description: sql server数据库的基本数据类型以及相关ddl dml的使用

sticky: false
timeline: true
article: true
star: false
---

## 1. sql server

> 最近打算把mysql,sql server,oracle数据库的基操整理一下. [三天假期, 我就这么无聊吗?]
其实也主要是为了防止弄混. 对于新手这是一个快速入门教程. 对于记忆不好的,容易弄混的,这是一个提词器.欢迎各位路过的客官进行补充.
多谢~

<!--more-->

### 1.1 数据类型
| 数字类型 | 变量类型 | 大小             | 使用                                                                                    |
| :------- | :------- | :--------------- | :-------------------------------------------------------------------------------------- |
| 整数     | tinyint  | 1字节            |                                                                                         |
|          | smallint | 2字节            |                                                                                         |
|          | int      | 4字节            |                                                                                         |
|          | bigint   | 8字节            |                                                                                         |
| 浮点数   | float    | 8字节            | 可精确到第15位小数(范围:-1.79E308 到1.79E+308)                                          |
|          | real     | 4字节            | 精确到第7位小数(范围:-3.40E38 到 ~3.40E38)                                              |
|          | decimal  | 5~17字节         | decimal(数字位数,小数位数): 数字位数最大38位                                            |
|          | numeric  | 同上             | 使用方法同上,都是四舍五入                                                               |
| 字符类型 | char     | 1~8000           | 长度固定,短时补充空格,长时截取                                                          |
|          | varchar  | 1~8000           | 不会补充空格，长度可变。但超出时依旧会截取                                              |
|          | nchar    | (1~4000)&times;2 | 每一个字符为两个字节                                                                    |
|          | nvarchar | (1~4000)&times;2 | 每一个字符为两个字节。其他同varchar                                                     |
| 日期类型 | date     | 3字节            | 日期。从公元元年1月1日到9999年12月31日                                                  |
|          | datetime | 8字节            | 日期 时间。从公元1753年1月1日00:00:00.000 到9999年12月31日23:59:59.997 ，精确到3.33毫秒 |

> **p.s.:**
1. 查看字节数可以使用datalength(express)
2. 一个汉字是两个字节

[【SqlServer】Sql Server 支持的数据类型](https://www.cnblogs.com/HDK2016/p/7782303.html "参考链接")

## 1.2 常用方法
### 1.2.1 转换
| 方法名                       | 作用                 | 示例                                    |
| :--------------------------- | :------------------- | :-------------------------------------- |
| convert(type,val)            | 将val转换为type类型  | convert(date, '2018-12-30')             |
| cast(val as type)            | 同上                 | cast('2018-12-30' as date)              |
| convert(varchar,dateval,fmt) | 将日期转换为对应格式 | select convert(varchar, getdate(), 120) |
| format(val,fmt)              | 将val转换为fmt格式   | format(getdate(),'yyyy/MM/dd')          |

### 1.2.2 字符串操作
| 方法名                  | 作用                                                       | 示例                                |
| :---------------------- | :--------------------------------------------------------- | :---------------------------------- |
| ltrim(val)              | 去除val左侧空格                                            | ltrim('     abcde')                 |
| rtrim(val)              | 去除val右侧空格                                            | rtrim('abcde     ')                 |
| len(val)                | 计算字符串长度，汉字算一个                                 | len('hello')                        |
| isnull(val1,val2)       | 如果va1是null,返回val2                                     | isnull(null,'isnull')               |
| concat(varl1,val2)      | 拼接val1和val2                                             | concat('a','b')                     |
| stuff(src,addr,len,str) | 在src上从addr位置上(从1开始)删除len长度的字符，并替换成str | stuff('abcde',1,2,'1234')           |
| replace(src,dest,str)   | 将src中的dest全部替换为str                                 | replace('abcde','a','w')            |
| replicate(src,val)      | 将src重复val次输出                                         | replicate('0', 10-len('123'))+'123' |
| charindex(str,src,addr) | 从addr位置上查找str在src中的位置                           | charindex('Abc','abcdef',0)         |
| patindex(str,src)       | 从src中查找str,str可以是模糊查询形式                       | patindex('abc%','abcdef')           |
| substring(src,addr,len) | 从src第addr开始，截取len长度                               | substring('abcdef',1,2)             |

> **P.S.:**
1. sql server没有trim方法可以使用ltrim(rtrim(val))替换
2. replicate中的例子是左补0的方法
3. charindex支持大小写敏感，只需要在src后加上COLLATE Latin1_General_CS_AS
4. patindex如果str不包含%，则逻辑就等是判断src和str是否相同，返回1。
`select patindex('%bc%','abcdef')`返回值为2。表中示例返回为1
5. 方法的调用使用select [function(a,b,c...)] 形式。

### 1.2.3 日期操作
| 方法名                   | 作用                                                   | 示例                                    |
| :----------------------- | :----------------------------------------------------- | :-------------------------------------- |
| getdate()                | 获取当前时间                                           | getdate()                               |
| datediff(type,start,end) | 计算start,end之间的type数量，type可为year,day,month... | datediff(day,'2018-12-30','2019-12-30') |
| dateadd(type,len,src)    | 在src上增加len个type，type同上，结果为datetime类型     | dateadd(month,2,'2018-12-15')           |
| datename(type,src)       | 指定日期的指定日期部分的字符串                         | datename(weekday, '2018-12-30')         |
| datepart(type,src)       | 指定日期的指定日期部分的整数                           | datepart(month, '2018-12-30')           |

> **P.S.:**
[datename和datepart的使用](https://www.cnblogs.com/luna-hehe/p/8191873.html)

### 1.2.4 数字操作
| 方法名         | 作用                      | 示例              |
| :------------- | :------------------------ | :---------------- |
| celling(val)   | 向上取整                  | celling(1.2)      |
| floor(val)     | 向下取整                  | floor(1.5)        |
| round(val,len) | 四舍五入精确小数点后len位 | round(123.4232,3) |
| power(val,pow) | val的pow次幂              | power(2,10)       |

## 1.3 数据库操作
### 1.3.1 约束
> -- 添加主键约束
alter table worker add constraint PK_code primary key(workcode);
-- 添加唯一约束
alter table worker add constraint UNI_code unique (workcode);
-- 添加默认约束
alter table worker add constraint DEF_note default 'this note should ....' for note1;
-- 添加检查约束
alter table worker add constraint CHK_note check(len(note1)>10)
-- 添加外键约束
alter table worker add constraint FOR_note foreign key(comcode) references com(comcode)
-- 删除约束
alter table worker drop constraint DEF_note;
### 1.3.2 索引
> create unique index worker_index on worker (workcode asc)
create clustered index workernote_index on worker(note1)
create nonclustered index com_index on com(comname)

**P.S.:**
一个表只能有一个聚集索引.

可以添加的参数:
WITH (
  --用于指定索引中间级中每个页（节点）上保持开放的空间
  PAD_INDEX = ON
  --用于指定在创建索引时，每个索引页的数据占索引页大小的百分
比，fillfactor的值为1到100
  , FILLFACTOR = 50
  --用于指定过期的索引统计不会自动重新计算
  , STATISTICS_NORECOMPUTE = OFF
  --用于指定创建索引时的中间排序结果将存储在 tempdb 数据库中
  , SORT_IN_TEMPDB = OFF
  --用于控制当往包含于一个唯一聚集索引中的列中插入重复数据时SQL Server
所作的反应。
  , IGNORE_DUP_KEY = ON
  --用于指定应删除并重新创建已命名的先前存在的聚集索引或者非聚集索引。
  , DROP_EXISTING = OFF
  --指定在索引操作期间基础表和关联的索引是否可用于查询和数据修改操作。
  , ONLINE = OFF
  --访问索引时允许行锁。
  , ALLOW_ROW_LOCKS = ON
  --访问索引时允许页锁。
  , ALLOW_PAGE_LOCKS = ON
)

链接: [关于索引的高级使用](https://www.cnblogs.com/knowledgesea/p/3672099.html)

### 1.3.3 序列
> --创建序列
create sequence [SEQNAME] as decimal minvalue 1 maxvalue 999999999999 start with 1 increment by 1 no cache
--获取序列的下一个值
select next value for [SEQNAME]
### 1.3.4 函数
+ 表值函数
  ```
  create function FUNCNAME (
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
    set @var2 = (select age from user where usercode='000001');
    --如果查询数据库则可简化位
    select @var2 = age from .....
    --返回
    return @var2
  end
  --执行函数的方法
  select FUNCNAME('a')
  ```
+ 内联标值函数
  ```
  create function FUNC_UserTab_1
  (
      @codetype varchar(10)
  )
  returns table
  as
  return (select * from sys_code_mst where codetype=@codetype)
  -- 查询结果为一张表，所以使用查表法
  select * from FUNC_UserTab_1('salechnl')
  ```
+ 多语句表值函数
  ```
  create function selectSMSInfo(
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

  	SET @url = (select codename from sys_code_mst where codetype='sms' and othersign = @othersign and code='SMSUrl')
  	SET @username = (select codename from sys_code_mst where codetype='sms' and othersign = @othersign and code='username')
  	SET @password = (select codename from sys_code_mst where codetype='sms' and othersign = @othersign and code='password')
  	SET @msgtype = (select codename from sys_code_mst where codetype='sms' and othersign = @othersign and code='msgtype')
  	SET @encode = (select codename from sys_code_mst where codetype='sms' and othersign = @othersign and code='encode')
  	insert into @smsinfo(url, username, password, msgtype, encode) values(@url, @username, @password, @msgtype, @encode);
  	RETURN
  END
  --调用方法,可以认为拼出一张表
  select * from selectSMSInfo('a')
  ```

### 1.3.5 存储过程
  ```
  CREATE PROCEDURE addtest
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
  ```
### 1.3.6 视图
  ```
  create view worker_view as select * from worker;
  select * from worker_view;
  drop view view_worker
  ```
链接：[视图](https://www.cnblogs.com/Brambling/p/6731386.html)
### 1.3.7 触发器
  ```
  create trigger worktrigger on worker
  after delete as
  begin
	 insert into backuptable values('001', 'smith', getdate())
  end
  ```
  **P.S.:**
  当对worker进行删除操作后就会insert一条数据.
  触发器可以加在update insert delete 操作上
  sql server 有两种触发器instead of和after前者表示不执行预期操作而是执行触发器.

### 1.3.8 游标
```
  declare @tempval varchar(10);
  declare cursorname for select columnname from tablename;
  open cursorname;
  fetch next from cursorname into @tempname;
  while @@fetch_status=0
    begin
      ........
    end
  close cursorname;
  deallocate cursorname;
```
### 1.3.9 事务
```
--定义变量，用于累计事务执行过程中的错误
declare @errorSum int
set @errorSum =0
begin transaction tran1
  begin
      insert into worker(workcode, workname) values('002', 'nansy')
      set @errorSum=@errorSum+@@ERROR
      print 'a'+convert(varchar,@errorSum)
      insert into worker(workcode,workname) values('001', 'hyes')
      insert into worker(workcode,workname) values('002', 'mtys')
      set @errorSum = @errorSum+@@ERROR
      print 'b'+convert(varchar,@errorSum)

      if @errorSum>0
        begin
          rollback transaction tran1
        end
      else
        begin
          commit transaction tran1
        end
  end

```
如果数据库中设置了workcode为主键, 当我们第二次插入002时,会出现主键重复,该语句与事务中的语句均回滚.
### 1.3.10 异常
```
BEGIN TRY
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

```

### 1.3.11 其他
> **添加、删除字段**
alter table info add note1 varchar(100);
alter table info drop column note1;
**删除表的内容**
truncate table worker
**查询分页**
select top number|percent * from tablename
sql server要实现查询从第几条到第几条记录. 可以使用如下方法:
```
-- 查询第6到15条记录
select top 10 agntend.agentcode, agntend.sex from uwca.dbo.uw_nb_agent agntend where agntend.agentcode not in (
select top 5 agntstart.agentcode from uwca.dbo.uw_nb_agent agntstart
)
```
使用rownumer也可以实现分页:
```
select ROW_NUMBER() over(order by agentcode) 'seq', agentcode, sex into temp from uwca.dbo.uw_nb_agent
select * from temp where seq between 6 and 15;
drop table temp;
```
