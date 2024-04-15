---
title: PyQuery
titleTemplate: Python笔记
---

## 1. 用法
<br>使用CSS选择器方式选择页面内容
<br>&emsp;&emsp;<b>q=PyQuery(r.text)</b>，生成PyQuery类对象，和beautifulsoup类似
<br>&emsp;&emsp;<b>q('a')</b>，选择q对象中的a标签，可以跨层选择
<br>&emsp;&emsp;<b>q('div')('p')('span')('a')</b>，多层选择，链式操作
<br>&emsp;&emsp;<b>q('div p span a')</b>，后代选择器，空格分开
<br>&emsp;&emsp;<b>q('div>p')</b>，子元素选择器
<br>&emsp;&emsp;<b>q('div p soan a.a')</b>，类选择器，最后class为"a"的标签
<br>&emsp;&emsp;<b>q('div p#qq')</b>，ID选择器，指定路径下id="qq"的p标签
<br>&emsp;&emsp;<b>q('div p[ty=ty1]')</b>，其他属性的筛选

&emsp;&emsp;<b>q('a').attr('href')</b>，提取指定标签的href属性值，前面有多个标签时只返回第一个标签的属性
<br>&emsp;&emsp;<b>q('a').text()</b>，文本，前面有多个标签时显示所有文本
<br>&emsp;&emsp;<b>q('div').html()</b>，拿到标签里面的内容，子标签

&emsp;&emsp;<b>q('a').eq(0)</b>，查找到多个标签，返回第0个
<br>&emsp;&emsp;<b>q('a').items()</b>，多个标签的生成器类型，可以遍历，依次拿到每个标签的属性


```python
from pyquery import PyQuery
```


## 2. 练习

```python
html='''
<ul>
    <li class="a"><a href="https://baidu.com">百度</a></li>
    <li class="b" id="qq"><a href="https://www.qq.com">腾讯</a></li>
    <li class="c"><a href="https://www.163.com">网易</a></li>
</ul>
'''
```


```python
#BeautifulSoup提取
from bs4 import BeautifulSoup
soup=BeautifulSoup(html)

a1=soup.li
a2=a1.next_sibling.next_sibling
a3=a2.next_sibling.next_sibling
print(a1.a.attrs['href'],a1.a.text)
print(a2.a.attrs['href'],a2.a.text)
print(a3.a.attrs['href'],a3.a.text)
```

    https://baidu.com 百度
    https://www.qq.com 腾讯
    https://www.163.com 网易
    


```python
#正则表达式提取
import re
l=re.findall('.*?<a href="(.*?)">(.*?)</a></li>',html)
for i in l:
    print(i[0],i[1])
```

    https://baidu.com 百度
    https://www.qq.com 腾讯
    https://www.163.com 网易
    


```python
#xpath提取
from lxml import etree
et=etree.HTML(html)
link=et.xpath('//li/a/@href')
text=et.xpath('//li/a/text()')
for i in zip(link,text):
    print(i[0],i[1])
```

    https://baidu.com 百度
    https://www.qq.com 腾讯
    https://www.163.com 网易
    


```python

```


```python
#PyQuery提取
q=PyQuery(html)
print(q)
print(type(q))
```

    <ul>
        <li class="a"><a href="https://baidu.com">百度</a></li>
        <li class="b" id="qq"><a href="https://www.qq.com">腾讯</a></li>
        <li class="c"><a href="https://www.163.com">网易</a></li>
    </ul>
    <class 'pyquery.pyquery.PyQuery'>
    


```python
#提取结果类型还是PuQuery
print(q('a'))
print(type(q('li')))
```

    <a href="https://baidu.com">百度</a><a href="https://www.qq.com">腾讯</a><a href="https://www.163.com">网易</a>
    <class 'pyquery.pyquery.PyQuery'>
    


```python
print(q('li')('a'))
```

    <a href="https://baidu.com">百度</a><a href="https://www.qq.com">腾讯</a><a href="https://www.163.com">网易</a>
    


```python
#后代选择器
print(q('li a'))
```

    <a href="https://baidu.com">百度</a><a href="https://www.qq.com">腾讯</a><a href="https://www.163.com">网易</a>
    


```python
#类选择器
#class="c"的标签后代中的a标签
print(q('.c a'))
```

    <a href="https://www.163.com">网易</a>
    


```python
#ID选择器
print(q('li#qq a'))
```

    <a href="https://www.qq.com">腾讯</a>
    


```python
#属性值提取
print(q('li').attr('class'))#只显示第一个的属性
print(q('li.b a').attr('class'))
print(q('li.b a').attr('href'))
```

    a
    None
    https://www.qq.com
    


```python
#文本提取
print(q('li').text())#显示所有文本
print(q('li.c a').text())
```

    百度 腾讯 网易
    网易
    


```python
#多个标签拿属性
its=q('li a').items()
print(type(its))#生成器类型
for it in its:
    href,text=it.attr('href'),it.text()
    print(href,text)
```

    <class 'generator'>
    https://baidu.com 百度
    https://www.qq.com 腾讯
    https://www.163.com 网易
    

PyQuery还能修改html代码

&emsp;&emsp;<b>q('a').after('\<p>外面加\</b>')</b>，在定位到的标签后面加标签
<br>&emsp;&emsp;<b>q('a').append('\<p>里面加\</b>')</b>，在定位到的标签里面加标签
<br>&emsp;&emsp;<b>q('a').remove()</b>，删除定位到的标签
<br>&emsp;&emsp;<b>q('a').attr('class','修改属性')</b>，修改定位到的标签的指定属性，属性不存在时新增属性
<br>&emsp;&emsp;<b>q('a').remove_attr('class')</b>，删除定位到的标签的指定属性



```python
html1=html
q1=PyQuery(html1)
for it in q1('li a').items():
    it.after('<p>外面加</p>')
    it.append('<p>里面加</b>')
    it.attr('new','new1')
    it.attr('New','new2')
    it.remove_attr('New')
print(q1)
```

    <ul>
        <li class="a"><a href="https://baidu.com" new="new1">百度<p>里面加</p></a><p>外面加</p></li>
        <li class="b" id="qq"><a href="https://www.qq.com" new="new1">腾讯<p>里面加</p></a><p>外面加</p></li>
        <li class="c"><a href="https://www.163.com" new="new1">网易<p>里面加</p></a><p>外面加</p></li>
    </ul>
    


```python
q1('li.b a').attr('new','new2')
q1('li.c a').attr('new','new3')
print(q1)

print(q1('a[new=new3]'))
```

    <ul>
        <li class="a"><a href="https://baidu.com" new="new1">百度<p>里面加</p></a><p>外面加</p></li>
        <li class="b" id="qq"><a href="https://www.qq.com" new="new2">腾讯<p>里面加</p></a><p>外面加</p></li>
        <li class="c"><a href="https://www.163.com" new="new3">网易<p>里面加</p></a><p>外面加</p></li>
    </ul>
    <a href="https://www.163.com" new="new3">网易<p>里面加</p></a>
    


```python

```


```python
q('a').eq(2).text()
```




    '网易'


