---
original: false
title: Item Pipeline
time: 2021-05-17
tags: 
  - 爬虫
  - scrapy
  - Pipeline
category: scrapy
description: scrapy中使用管道处理item
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> 当Item在Spider中被收集之后，它将会被传递到Item Pipeline，一些组件会按照一定的顺序执行对Item的处理。

每个item pipeline组件(有时称之为“Item Pipeline”)是实现了简单方法的Python类。他们接收到Item并通过它执行一些行为，同时也决定此Item是否继续通过pipeline，或是被丢弃而不再进行处理。

以下是item pipeline的一些典型应用：

- 清理HTML数据
- 验证爬取的数据(检查item包含某些字段)
- 查重(并丢弃)
- 将爬取结果保存到数据库中

## 编写你自己的item pipeline[¶](chrome-extension://lpmbefndcmjoaepdpgmoonafikcalmnf/data/reader/index.html?id=555&url=https%3A%2F%2Fscrapy-chs.readthedocs.io%2Fzh_CN%2Flatest%2Ftopics%2Fitem-pipeline.html#id1)

编写你自己的item pipeline很简单，每个item pipeline组件是一个独立的Python类，同时必须实现以下方法:

> `process_item`(*self*, *item*, *spider*)

每个item pipeline组件都需要调用该方法，这个方法必须返回一个 `[Item](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#scrapy.item.Item)` (或任何继承类)对象， 或是抛出 `[DropItem](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/exceptions.html#scrapy.exceptions.DropItem)` 异常，被丢弃的item将不会被之后的pipeline组件所处理。

参数:

• **item** (`[Item](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#scrapy.item.Item)` 对象) – 被爬取的item

• **spider** (`[Spider](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/spiders.html#scrapy.spider.Spider)` 对象) – 爬取该item的spider

> **`open_spider`(*self*, *spider*)**

当spider被开启时，这个方法被调用。

参数:

**spider** (**`[Spider](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/spiders.html#scrapy.spider.Spider)`** 对象) – 被开启的spider

> **`close_spider`(*spider*)**

当spider被关闭时，这个方法被调用

参数:

**spider** (**`[Spider](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/spiders.html#scrapy.spider.Spider)`** 对象) – 被关闭的spider

> **`from_crawler`(*cls*, *crawler*)**

If present, this class method is called to create a pipeline instance from a **`[Crawler](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/api.html#scrapy.crawler.Crawler)`**. It must return a new instance of the pipeline. Crawler object provides access to all Scrapy core components like settings and signals; it is a way for pipeline to access them and hook its functionality into Scrapy.

参数:

**crawler** (**`[Crawler](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/api.html#scrapy.crawler.Crawler)`** object) – crawler that uses this pipeline

## 案例

### 验证，同时丢弃

让我们来看一下以下这个假设的pipeline，它为那些不含税(price_excludes_vat 属性)的item调整了 price 属性，同时丢弃了那些没有价格的item:

```python
from scrapy.exceptions import DropItem

class PricePipeline(object):
    vat_factor = 1.15
    def process_item(self, item, spider):
        if item['price']:
            if item['price_excludes_vat']:
                item['price'] = item['price'] * self.vat_factor
            return item
        else:
            raise DropItem("Missing price in %s" % item)
```

### 写入json

以下pipeline将所有(从所有spider中)爬取到的item，存储到一个独立地 items.jl 文件，每行包含一个序列化为JSON格式的item:

```python
import json

class JsonWriterPipeline(object):

    def __init__(self):
        self.file = open('items.jl', 'wb')

    def process_item(self, item, spider):
        line = json.dumps(dict(item)) + "\n"
        self.file.write(line)
        return item
```

### 写入MongoDB

```python
import pymongo

class MongoPipeline(object):

    def __init__(self, mongo_uri, mongo_db):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=crawler.settings.get('MONGO_URI'),
            mongo_db=crawler.settings.get('MONGO_DATABASE', 'items')
        )

    def open_spider(self, spider):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        collection_name = item.__class__.__name__
        self.db[collection_name].insert(dict(item))
        return item
```

### 去重

```python
from scrapy.exceptions import DropItem

class DuplicatesPipeline(object):

    def __init__(self):
        self.ids_seen = set()

    def process_item(self, item, spider):
        if item['id'] in self.ids_seen:
            raise DropItem("Duplicate item found: %s" % item)
        else:
            self.ids_seen.add(item['id'])
            return item
```

## 启用一个Item Pipeline组件

为了启用一个Item Pipeline组件，你必须将它的类添加到 ITEM_PIPELINES 配置，就像下面这个例子:

```python
ITEM_PIPELINES = {
    'myproject.pipelines.PricePipeline': 300,
    'myproject.pipelines.JsonWriterPipeline': 800,
}
```

分配给每个类的整型值，确定了他们运行的顺序，item按数字从低到高的顺序，通过pipeline，通常将这些数字定义在0-1000范围内。