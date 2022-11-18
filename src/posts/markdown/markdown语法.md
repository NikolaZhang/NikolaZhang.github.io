---
original: true
title: markdown初尝试
date: 2018-11-17
tag:
  - markdown
  - 语法
category: markdown
description: MarkDown语法的学习
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

# MarkDown使用语法

## 段落&换行
【段落】前后要加上一个以上的空行。
关于缩进
&emsp; 一个中文
&ensp; 半个中文
&nbsp; 1/4个中文

<!--more-->

## 标题
第一节
===
第二节
---
#{1~6} 表示1~6节标题

## 区块引用
在区块引用中可以使用<br\>进行换行。md文件最后还是要编译生成html的。
> 你好啊，我是Nikola Zhang。<br>此处使用<br\>进行换行。
喜欢。。。敲代码。

区块引用，结束时空一行。区块引用可以嵌套其他语法。
> ### 你好啊
> 小逗比
>> 小逗比的弟弟

## 列表
* 支持有序和无序
  - 阿达
  - 无序列表你有三种选择
    + 第一
    - 第二
    * 第三
    + 顺序没有关系
    + 从代码风格上，<br>不同级的使用不同类型的符号<br>可以提高易读性
* 以上就是无序列表


1. 这就是有序列表
3. 哈哈哈， 从一个开始计数。
4. 之后的顺序是无关的<br>相信你看到的是1234<br>而我实际写的是1342
2. 列表之间要空两行。
5. 因为空一行，每一块会被当做段落处理。空两行就好了。

## 代码区块
我最喜欢这个了~大好き #^_^#

    【四个空格】
    print
    <input >
    class aaaa{

    }
asdf 当没有缩进后，代码区块的作用失效

试试csdn博客上的。个人偏向这个
```
class aaa{

}
```
```html
<input type="text" name="name">
```
_注意代码区块中markdown语法不会转换_

## 分割线
我是华丽的分割线【如果分割线和文字间不空行的话，嘿嘿，我已经写过了，自己想吧】

*********

--------------

【算了我还是再说一遍吧， 那就会变成标题啊】
披着分割线的标题
-------------


## 最后的补充
### 基本上关于文字编辑以上的就够了
#### **粗体**
#### *斜体*
#### ~~我被删除了，O_o~~
#### <u>下划线， 啊哈</u>

-------------

## 链接
[先来个度娘](http://www.baidu.com "这是title")<br>
[这样的度娘，你见过没？][1]

[1]:http://www.baidu.com "外关联中间至少空一行"

## 图片
![这是图片啊] [2]

[2]: /images/article/01CFFE54.jpg

## 表格
第二行分割表头和内容， 并设置格式

| 姓名 | 技能  | 排行 |
| ---: | :---: | ---: |
| 刘备 |  哭   | 大哥 |
| 关羽 |  打   | 二哥 |
| 张飞 |  骂   | 三弟 |

## 字体及颜色
<font size=28 face="楷体" color=#654321>哈哈哈</font>
<br>`这里感觉和html差不多啊`
`你不知道的， 使用html就好了~~~~`

## END
如果你需要这个文档（.md）<br>请点击链接
[点我][3]

[3]:https://github.com/NikolaZhang/NikolaZhang.github.io/master/source/_posts/welcome-to-my-blog.md

## 这篇博客的markdown截图

![文档截图](/images/article/markdown_doucument.png "markdown文档")