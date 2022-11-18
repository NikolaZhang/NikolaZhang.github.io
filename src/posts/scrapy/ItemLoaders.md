---
original: false
title: Item Pipeline
date: 2021-05-16
tag:
  - 爬虫
  - scrapy
  - Pipeline
category: scrapy
description: scrapy中使用管道处理item
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> Item Loaders提供了一种便捷的方式填充抓取到的 :Items 。 虽然Items可以使用自带的类字典形式API填充，但是Items Loaders提供了更便捷的API， 可以分析原始数据并对Item进行赋值。

从另一方面来说， Items 提供保存抓取数据的 容器 ， 而 Item Loaders提供的是 填充 容器的机制。

## 填充items

Item Loader在每个(Item)字段中都包含了一个`输入处理器`和一个`输出处理器`｡ 

输入处理器收到数据时立刻提取数据 (通过 add_xpath(), add_css() 或者 add_value() 方法) 之后输入处理器的结果被收集起来并且保存在ItemLoader内. 

收集到所有的数据后, 调用 ItemLoader.load_item() 方法来填充,并得到填充后的 Item 对象. 这是当输出处理器被和之前收集到的数据(和用输入处理器处理的)被调用.输出处理器的结果是被分配到Item的最终值｡

```python
from scrapy.contrib.loader import ItemLoader
from myproject.items import Product

def parse(self, response):
    l = ItemLoader(item=Product(), response=response)
		# 将两个不同位置的数据收集起来
    l.add_xpath('name', '//div[@class="product_name"]')
    l.add_xpath('name', '//div[@class="product_title"]')

    l.add_xpath('price', '//p[@id="price"]')
    l.add_css('stock', 'p#stock]')
    l.add_value('last_updated', 'today') # you can also use literal values
    return l.load_item()
```

## 定义ItemLoaders

```python
from scrapy.contrib.loader.processor import TakeFirst, MapCompose, Join

class ProductLoader(ItemLoader):

    default_output_processor = TakeFirst()

    name_in = MapCompose(unicode.title)
    name_out = Join()

    price_in = MapCompose(unicode.strip)

    # ...
```

输入处理器使用`_in`作为后缀, 输出处理器使用 `_out`作为后缀

使用 `default_input_processor`  `default_output_processor` 来指定默认的输入输出处理器

## 定义输入输出处理器

```python
import scrapy
from scrapy.contrib.loader.processor import Join, MapCompose, TakeFirst
from w3lib.html import remove_tags

def filter_price(value):
    if value.isdigit():
        return value

class Product(scrapy.Item):
    name = scrapy.Field(
        input_processor=MapCompose(remove_tags),
        output_processor=Join(),
    )
    price = scrapy.Field(
        input_processor=MapCompose(remove_tags, filter_price),
        output_processor=TakeFirst(),
    )
```

```bash
>>> from scrapy.contrib.loader import ItemLoader
>>> il = ItemLoader(item=Product())
>>> il.add_value('name', [u'Welcome to my', u'<strong>website</strong>'])
>>> il.add_value('price', [u'&euro;', u'<span>1000</span>'])
>>> il.load_item()
{'name': u'Welcome to my website', 'price': u'1000'}
```

输入输出处理器的优先级:

1. Item Loader field-specific attributes: `field_in` and `field_out` (most precedence)
2. Field metadata (`input_processor` and `output_processor` key)
3. Item Loader defaults: **`[ItemLoader.default_input_processor()](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/loaders.html#scrapy.contrib.loader.ItemLoader.default_input_processor)`** and **`[ItemLoader.default_output_processor()](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/loaders.html#scrapy.contrib.loader.ItemLoader.default_output_processor)`** (least precedence)

## Item Loader Context

上下文是一种字典, 可以在ItemLoader的输入输出处理器共享. 当定义/实例化/使用ItemLoader的时候可以被传递. 被用于修改输入输出处理器的行为.

```python
def parse_length(text, loader_context):
    unit = loader_context.get('unit', 'm')
    # ... length parsing code goes here ...
    return parsed_length
```

有几种方法可以修改 Item Loader 上下文值:

1. 通过修改当前活动的 Item Loader 上下文(context 属性) :

    ```python
    loader = ItemLoader(product)
    loader.context['unit'] = 'cm'
    ```

2. Item Loader 实例化(Item Loader 构造函数的关键字参数存储在 Item Loader 上下文中) :

    ```python
    loader = ItemLoader(product, unit='cm')
    ```

3. 在 Item Loader 声明中，用于那些支持使用 Item Loader 上下文实例化它们的输入/输出处理器。MapCompose 就是其中之一:

```python
class ProductLoader(ItemLoader):
    length_out = MapCompose(parse_length, unit='cm')
```