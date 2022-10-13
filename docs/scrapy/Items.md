---
original: false
title: Item
time: 2021-05-14
tags: 
  - 爬虫
  - scrapy
  - item容器
category: scrapy
description: item容器是爬取数据字段的封装
image: http://image.nikolazhang.top/wallhaven-nrwq11.jpg
---

> Item 对象是种简单的容器，保存了爬取到得数据。 其提供了 类似于词典(dictionary-like) 的API以及用于声明可用字段的简单语法。

## ****Item对象****

> ***class*`scrapy.item.Item`([*arg*])**

返回一个根据给定的参数可选初始化的item。
Item复制了标准的 [dict API](http://docs.python.org/library/stdtypes.html#dict) 。包括初始化函数也相同。

Item唯一额外添加的属性是:**`fields`**一个包含了item所有声明的字段的字典，而不仅仅是获取到的字段。该字典的key是字段(field)的名字，值是 [Item声明](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#topics-items-declaring) 中使用到的 **`[Field](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#scrapy.item.Field)`** 对象。

## ****字段(Field)对象****

> ***class*`scrapy.item.Field`([*arg*])**

**`[Field](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#scrapy.item.Field)`** 仅仅是内置的 [dict](http://docs.python.org/library/stdtypes.html#dict) 类的一个别名，并没有提供额外的方法或者属性。

换句话说， **`[Field](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#scrapy.item.Field)`** 对象完完全全就是Python字典(dict)。被用来基于类属性(class attribute)的方法来支持 [item声明语法](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#topics-items-declaring) 。

---

## **Item字段(Item Fields)**

**`[Field](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#scrapy.item.Field)`** 对象指明了每个字段的元数据(metadata)。例如下面例子中 `last_updated` 中指明了该字段的序列化函数。

```python
import scrapy

class Product(scrapy.Item):
    name = scrapy.Field()
    price = scrapy.Field()
    stock = scrapy.Field()
    last_updated = scrapy.Field(serializer=str)
```

您可以为每个字段指明任何类型的元数据。 **`[Field](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#scrapy.item.Field)`** 对象对接受的值没有任何限制。也正是因为这个原因，文档也无法提供所有可用的元数据的键(key)参考列表。 **`[Field](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#scrapy.item.Field)`** 对象中保存的每个键可以由多个组件使用，并且只有这些组件知道这个键的存在。您可以根据自己的需求，定义使用其他的 **`[Field](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#scrapy.item.Field)`** 键。 设置 **`[Field](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#scrapy.item.Field)`** 对象的主要目的就是在一个地方定义好所有的元数据。 一般来说，那些依赖某个字段的组件肯定使用了特定的键(key)。您必须查看组件相关的文档，查看其用了哪些元数据键(metadata key)。

需要注意的是，用来声明item的 **`[Field](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#scrapy.item.Field)`** 对象并没有被赋值为class的属性。 不过您可以通过 **`[Item.fields](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/items.html#scrapy.item.Item.fields)`** 属性进行访问。

## 案例

### 创建item

```python
>>> product = Product(name='Desktop PC', price=1000)
>>> print product
Product(name='Desktop PC', price=1000)
```

### 获取字段的值

```python
>>> product['name']
Desktop PC
>>> product.get('name')
Desktop PC

>>> product['price']
1000

>>> product['last_updated']
Traceback (most recent call last):
    ...
KeyError: 'last_updated'

>>> product.get('last_updated', 'not set')
not set

>>> product['lala'] # getting unknown field
Traceback (most recent call last):
    ...
KeyError: 'lala'

>>> product.get('lala', 'unknown field')
'unknown field'

# 获取所有字段
>>> product.keys()
['price', 'name']

# 获取所有
>>> product.items()
[('price', 1000), ('name', 'Desktop PC')]
```

### 判断

```python

>>> 'name' in product  # is name field populated?
True

>>> 'last_updated' in product  # is last_updated populated?
False

>>> 'last_updated' in product.fields  # is last_updated a declared field?
True

>>> 'lala' in product.fields  # is lala a declared field?
False
```

### 设置字段的值

```python
>>> product['last_updated'] = 'today'
>>> product['last_updated']
today

>>> product['lala'] = 'test' # setting unknown field
Traceback (most recent call last):
    ...
KeyError: 'Product does not support field: lala'
```

### **其他任务**

复制item:

```python
>>> product2 = Product(product)
>>> print product2
Product(name='Desktop PC', price=1000)

>>> product3 = product2.copy()
>>> print product3
Product(name='Desktop PC', price=1000)
```

根据item创建字典(dict):

```python
>>> dict(product) # create a dict from all populated values
{'price': 1000, 'name': 'Desktop PC'}
```

根据字典(dict)创建item:

```python
>>> Product({'name': 'Laptop PC', 'price': 1500})
Product(price=1500, name='Laptop PC')

>>> Product({'name': 'Laptop PC', 'lala': 1500}) # warning: unknown field in dict
Traceback (most recent call last):
    ...
KeyError: 'Product does not support field: lala'
```

## **扩展Item**

您可以通过继承原始的Item来扩展item(添加更多的字段或者修改某些字段的元数据)。

例如:

```python
class DiscountedProduct(Product):
    discount_percent = scrapy.Field(serializer=str)
    discount_expiration_date = scrapy.Field()
```

您也可以通过使用原字段的元数据,添加新的值或修改原来的值来扩展字段的元数据:

```python
class SpecificProduct(Product):
    name = scrapy.Field(Product.fields['name'], serializer=my_serializer)
```

这段代码在保留所有原来的元数据值的情况下添加(或者覆盖)了 `name` 字段的 `serializer` 。