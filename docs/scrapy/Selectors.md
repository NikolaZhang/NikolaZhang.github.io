---
original: false
title: selectors
time: 2021-05-12
tags: 
  - 爬虫
  - scrapy
  - selectors
  - xpath
category: scrapy
description: selectors用于页面字段的提取, 使用xpath语法
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

## **构造选择器(selectors)**

Scrapy selector是以 **文字(text)** 或 **`[TextResponse](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/request-response.html#scrapy.http.TextResponse)`** 构造的 **`[Selector](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.Selector)`** 实例。 其根据输入的类型自动选择最优的分析方法(XML vs HTML):

```bash
>>> from scrapy.selector import Selector
>>> from scrapy.http import HtmlResponse
```

以文字构造:

```bash
>>> body = '<html><body><span>good</span></body></html>'
>>> Selector(text=body).xpath('//span/text()').extract()
[u'good']
```

以response构造:

```bash
>>> response = HtmlResponse(url='http://example.com', body=body)
>>> Selector(response=response).xpath('//span/text()').extract()
[u'good']
```

为了方便起见，response对象以 .selector 属性提供了一个selector， 您可以随时使用该快捷方法:

```bash
>>> response.selector.xpath('//span/text()').extract()
[u'good']
```

## 使用选择器(selectors)

```html
<html>
 <head>
  <base href='http://example.com/' />
  <title>Example website</title>
 </head>
 <body>
  <div id='images'>
   <a href='image1.html'>Name: My image 1 <br /><img src='image1_thumb.jpg' /></a>
   <a href='image2.html'>Name: My image 2 <br /><img src='image2_thumb.jpg' /></a>
   <a href='image3.html'>Name: My image 3 <br /><img src='image3_thumb.jpg' /></a>
   <a href='image4.html'>Name: My image 4 <br /><img src='image4_thumb.jpg' /></a>
   <a href='image5.html'>Name: My image 5 <br /><img src='image5_thumb.jpg' /></a>
  </div>
 </body>
</html>
```

那么，通过查看 [HTML code](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#topics-selectors-htmlcode) 该页面的源码，我们构建一个XPath来选择title标签内的文字:

```bash
>>> response.selector.xpath('//title/text()')
[<Selector (text) xpath=//title/text()>]
```

由于在response中使用XPath、CSS查询十分普遍，因此，Scrapy提供了两个实用的快捷方式: `response.xpath()` 及 `response.css()`:

```bash
>>> response.xpath('//title/text()')
[<Selector (text) xpath=//title/text()>]
>>> response.css('title::text')
[<Selector (text) xpath=//title/text()>]
```

`.xpath()`及 `.css()` 方法返回一个类 SelectorList 的实例, 它是一个新选择器的列表。这个API可以用来快速的提取嵌套数据。

为了提取真实的原文数据，你需要调用 `.extract()` 方法如下:

```bash
>>> response.xpath('//title/text()').extract()
[u'Example website']
```

注意CSS选择器可以使用CSS3伪元素(pseudo-elements)来选择文字或者属性节点:

```bash
>>> response.css('title::text').extract()
[u'Example website']
```

现在我们将得到根URL(base URL)和一些图片链接:

```bash
>>> response.xpath('//base/@href').extract()
[u'http://example.com/']

>>> response.css('base::attr(href)').extract()
[u'http://example.com/']

>>> response.xpath('//a[contains(@href, "image")]/@href').extract()
[u'image1.html',
 u'image2.html',
 u'image3.html',
 u'image4.html',
 u'image5.html']

>>> response.css('a[href*=image]::attr(href)').extract()
[u'image1.html',
 u'image2.html',
 u'image3.html',
 u'image4.html',
 u'image5.html']

>>> response.xpath('//a[contains(@href, "image")]/img/@src').extract()
[u'image1_thumb.jpg',
 u'image2_thumb.jpg',
 u'image3_thumb.jpg',
 u'image4_thumb.jpg',
 u'image5_thumb.jpg']

>>> response.css('a[href*=image] img::attr(src)').extract()
[u'image1_thumb.jpg',
 u'image2_thumb.jpg',
 u'image3_thumb.jpg',
 u'image4_thumb.jpg',
 u'image5_thumb.jpg']
```

### **嵌套选择器(selectors)**

选择器方法( `.xpath()` or `.css()` )返回相同类型的选择器列表，因此你也可以对这些选择器调用选择器方法。下面是一个例子:

```bash
>>> links = response.xpath('//a[contains(@href, "image")]')
>>> links.extract()
[u'<a href="image1.html">Name: My image 1 <br><img src="image1_thumb.jpg"></a>',
 u'<a href="image2.html">Name: My image 2 <br><img src="image2_thumb.jpg"></a>',
 u'<a href="image3.html">Name: My image 3 <br><img src="image3_thumb.jpg"></a>',
 u'<a href="image4.html">Name: My image 4 <br><img src="image4_thumb.jpg"></a>',
 u'<a href="image5.html">Name: My image 5 <br><img src="image5_thumb.jpg"></a>']

>>> for index, link in enumerate(links):
        args = (index, link.xpath('@href').extract(), link.xpath('img/@src').extract())
        print 'Link number %d points to url %s and image %s' % args

Link number 0 points to url [u'image1.html'] and image [u'image1_thumb.jpg']
Link number 1 points to url [u'image2.html'] and image [u'image2_thumb.jpg']
Link number 2 points to url [u'image3.html'] and image [u'image3_thumb.jpg']
Link number 3 points to url [u'image4.html'] and image [u'image4_thumb.jpg']
Link number 4 points to url [u'image5.html'] and image [u'image5_thumb.jpg']
```

### **结合正则表达式使用选择器(selectors)**

**`[Selector](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.Selector)`** 也有一个 `.re()` 方法，用来通过正则表达式来提取数据。然而，不同于使用 `.xpath()` 或者 `.css()` 方法, `.re()` 方法返回unicode字符串的列表。所以你无法构造嵌套式的 `.re()` 调用。

下面是一个例子，从上面的 [HTML code](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#topics-selectors-htmlcode) 中提取图像名字:

```bash
>>> response.xpath('//a[contains(@href, "image")]/text()').re(r'Name:\s*(.*)')
[u'My image 1',
 u'My image 2',
 u'My image 3',
 u'My image 4',
 u'My image 5']
```

## 使用相对XPaths

记住如果你使用嵌套的选择器，并使用起始为 / 的XPath，那么该XPath将对文档使用绝对路径，而且对于你调用的 Selector 不是相对路径。

下面是比较合适的处理方法(注意 .//p XPath的点前缀):

```python
>>> for p in divs.xpath('.//p'):  # extracts all <p> inside
...     print p.extract()
```

另一种常见的情况将是提取所有直系 <p> 的结果:

```python
>>> for p in divs.xpath('p'):
...     print p.extract()
```

## 使用EXSLT扩展

因建于 lxml 之上, Scrapy选择器也支持一些 EXSLT 扩展，可以在XPath表达式中使用这些预先制定的命名空间：

[Untitled](Selectors%20d1d5e515dc8d4898a988c982ced85ebe/Untitled%20Database%209ca02246fc5349119fdae064fcfab175.csv)

## 正则表达式

例如在XPath的 `starts-with()` 或 `contains()` 无法满足需求时， `test()` 函数可以非常有用。

例如在列表中选择有”class”元素且结尾为一个数字的链接:

```bash
>>> from scrapy import Selector
>>> doc = """
... <div>
...     <ul>
...         <li class="item-0"><a href="link1.html">first item</a></li>
...         <li class="item-1"><a href="link2.html">second item</a></li>
...         <li class="item-inactive"><a href="link3.html">third item</a></li>
...         <li class="item-1"><a href="link4.html">fourth item</a></li>
...         <li class="item-0"><a href="link5.html">fifth item</a></li>
...     </ul>
... </div>
... """
>>> sel = Selector(text=doc, type="html")
>>> sel.xpath('//li//@href').extract()
[u'link1.html', u'link2.html', u'link3.html', u'link4.html', u'link5.html']
>>> sel.xpath('//li[re:test(@class, "item-\d$")]//@href').extract()
[u'link1.html', u'link2.html', u'link4.html', u'link5.html']
>>>
```

## 集合操作

集合操作可以方便地用于在提取文字元素前从文档树中去除一些部分。

```python
>>> for scope in sel.xpath('//div[@itemscope]'):
...     print "current scope:", scope.xpath('@itemtype').extract()
...     props = scope.xpath('''
...                 set:difference(./descendant::*/@itemprop,
...                                .//*[@itemscope]/*/@itemprop)''')
...     print "    properties:", props.extract()
...     print
```

# **内建选择器的参考**

> ***class*`scrapy.selector.Selector`(*response=None*, *text=None*, *type=None*)**

1. **`[Selector](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.Selector)`** 的实例是对选择某些内容响应的封装。
2. **`response`** 是 **`[HtmlResponse](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/request-response.html#scrapy.http.HtmlResponse)`** 或 **`[XmlResponse](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/request-response.html#scrapy.http.XmlResponse)`** 的一个对象，将被用来选择和提取数据。
3. **`text`** 是在 **`response`** 不可用时的一个unicode字符串或utf-8编码的文字。将 **`text`** 和 **`response`** 一起使用是未定义行为。
4. **`type`** 定义了选择器类型，可以是 **`"html"`**, **`"xml"`** or **`None`** (默认).如果 **`type`** 是 **`None`** ，选择器会根据 **`response`** 类型(参见下面)自动选择最佳的类型，或者在和 **`text`** 一起使用时，默认为 **`"html"`** 。
如果 **`type`** 是 **`None`** ，并传递了一个 **`response`** ，选择器类型将从response类型中推导如下：
• **`"html"`** for **`[HtmlResponse](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/request-response.html#scrapy.http.HtmlResponse)`** type
• **`"xml"`** for **`[XmlResponse](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/request-response.html#scrapy.http.XmlResponse)`** type
• **`"html"`** for anything else
其他情况下，如果设定了 **`type`** ，选择器类型将被强制设定，而不进行检测。

> **`xpath`(*query*)**

寻找可以匹配xpath **`query`** 的节点，并返回 **`[SelectorList](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.SelectorList)`** 的一个实例结果，单一化其所有元素。列表元素也实现了 **`[Selector](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.Selector)`** 的接口。
**`query`** 是包含XPATH查询请求的字符串。

为了方便起见，该方法也可以通过 **`response.xpath()`** 调用

> **`css`(*query*)**

应用给定的CSS选择器，返回 **`[SelectorList](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.SelectorList)`** 的一个实例。
**`query`** 是一个包含CSS选择器的字符串。
在后台，通过 cssselect 库和运行 **`.xpath()`** 方法，CSS查询会被转换为XPath查询。

为了方便起见，该方法也可以通过 **`response.css()`** 调用

> **`extract`()**

串行化并将匹配到的节点返回一个unicode字符串列表。 结尾是编码内容的百分比。

> **`re`(*regex*)**

应用给定的regex，并返回匹配到的unicode字符串列表。
**`regex`** 可以是一个已编译的正则表达式，也可以是一个将被 **`re.compile(regex)`** 编译为正则表达式的字符串。**`register_namespace`(*prefix*, *uri*)**注册给定的命名空间，其将在 **`[Selector](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.Selector)`** 中使用。 不注册命名空间，你将无法从非标准命名空间中选择或提取数据。参见下面的例子

> **`remove_namespaces`()**

移除所有的命名空间，允许使用少量的命名空间xpaths遍历文档。参加下面的例子。

> **`__nonzero__`()**

如果选择了任意的真实文档，将返回 **`True`** ，否则返回 **`False`** 。 也就是说， **`[Selector](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.Selector)`** 的布尔值是通过它选择的内容确定的。

### **SelectorList对象**

> ***class*`scrapy.selector.SelectorList`**

**`[SelectorList](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.SelectorList)`** 类是内建 **`list`** 类的子类，提供了一些额外的方法。

> **`xpath`(*query*)**

对列表中的每个元素调用 **`.xpath()`** 方法，返回结果为另一个单一化的 **`[SelectorList](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.SelectorList)`** 。

**`query`** 和 **`[Selector.xpath()](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.Selector.xpath)`** 中的参数相同。

> **`css`(*query*)**

对列表中的各个元素调用 **`.css()`** 方法，返回结果为另一个单一化的 **`[SelectorList](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.SelectorList)`** 。
**`query`** 和 **`[Selector.css()](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/selectors.html#scrapy.selector.Selector.css)`** 中的参数相同。

> **`extract`()**

对列表中的各个元素调用 **`.extract()`** 方法，返回结果为单一化的unicode字符串列表。

> **`re`()**

对列表中的各个元素调用 **`.re()`** 方法，返回结果为单一化的unicode字符串列表。**`__nonzero__`()**列表非空则返回True，否则返回False。