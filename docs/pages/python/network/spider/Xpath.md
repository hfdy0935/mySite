---
title: Xpath
titleTemplate: Python笔记
---

## 1. 用法
```python
#pip install lxml
from lxml import etree
```

lxml库可以解析xml和html

对文本进行解析，返回列表（单个多个结果都返回列表），其中每个元素的类型是lxml.etree._Element
<br><b>et=etree.XML(r.text, parser=None, *, base_url=None)</b>
<br>xml标签可以自定义，没有固定标签，每个标签叫节点，关系有父子、爷孙、兄弟

用et.xpath('')进行解析
<br>&emsp;&emsp;开头<b>/</b>表示从根节点开始
<br>&emsp;&emsp;中间的<b>/</b>表示下一级节点、子节点，一级一级标签往下写
<br>&emsp;&emsp;<b>//</b>表示子孙后代所有节点中找
<br>&emsp;&emsp;<b>*</b>通配符，表示任意节点
<br>&emsp;&emsp;有多个兄弟节点时，通过后面加<b>[3]</b>选择第三个标签，不加返回满足要求的所有节点，比如<b>a[3]</b>
<br>&emsp;&emsp;<b>a[last()]</b>返回最后一个a节点
<br>&emsp;&emsp;<b>a[last()-1]</b>返回倒数第二个a节点
<br>&emsp;&emsp;<b>/text()</b>获取该标签下的文本（没子标签返回1个，有子标签返回所有子标签的文本），返回<b>列表</b>
<br>&emsp;&emsp;<b>//text()</b>获取该节点下所有节点的文本，返回<b>列表</b>
<br>&emsp;&emsp;标签后面跟<b>[@id=1000]</b>，查找属性id为1000的标签，<b>数字不写引号，字母符号需要写</b>，也可以判断其他属性
<br>&emsp;&emsp;标签后面跟<b>/@id</b>，获取该标签的属性id的值，返回<b>列表</b>
<br>&emsp;&emsp;<b>..</b>表示返回父节点

&emsp;&emsp;可以对解析结果再进行解析，后面路径为<b>('./')</b>，表示选取当前节点
<br>&emsp;&emsp;<b>../</b>，选取当前节点的父节点

如果属性有多个，比如说
```html
<a class='a b'>链接</a>
```
就得用<b>a[contains(@class,'a')]</b>或<b>a[contains(@class,'b')]</b>，只要a包含了属性a或b就可以提取出来

```python
#xml
xml='''
    <id>1</id>
    <name>野花遍地香</name>
    <price>1.23</price>
    <nick>臭豆腐</nick>
    <author>
        <nick id="10086">周大强</nick>
        <nick id="10010">周芷若</nick>
        <nick class="joy">周杰伦</nick>
        <nick class="jolin">蔡依林</nick>
    </author>
    <partner>
        <nick id="ij">胖胖陈</nick>
        <nick id="oo">胖胖不陈</nick>
    </partner>
</book>
'''
```

```python
#xml解析
et=etree.XML(xml)
type(et)
```

    lxml.etree._Element

```python
print(type(et.xpath('/book')))
print(et.xpath('/book'))
print(et.xpath('/book/price/text()'))#price的文本
print(et.xpath('/book/*/nick/text()'))#所有book孙辈nick标签的文本
print(et.xpath('/book/author/nick[@id=10086]/text()'))#路径下指定id的一个标签的文本
print(et.xpath('/book//nick/@id'))#book所有后代元素中nick标签的id属性，只有四个
print(et.xpath('/book/partner/nick[@id="oo"]/text()')[0])#数字不用写'，字母等需要写'
print(et.xpath('/book/author/nick[2]/text()'))#第二个nick标签的文本
```

    <class 'list'>
    [<Element book at 0x1e1ce5303c0>]
    ['1.23']
    ['周大强', '周芷若', '周杰伦', '蔡依林', '胖胖陈', '胖胖不陈']
    ['周大强']
    ['10086', '10010', 'ij', 'oo']
    胖胖不陈
    ['周芷若']
    

```python
del et
```

<br><b>et=etree.HTML(r.text, parser=None, *, base_url=None)</b>
<br>html指定标签表示不同元素
<br>其他操作和xml一样

```python
html='''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <div>
            <ul>无序列表
                <li href="#1">风云1号</li>
                <li href="#2">风云2号</li>
                <li href="#3">风云3号</li>
                <li href="#4">风云4号</li>
            </ul>
        </div>
        <div>
            <ol>有序列表
                <li href="#5">北斗</li>
                <li href="#6">GPS</li>
                <li href="#7">伽利略</li>
                <li href="#8" class="c1">格洛纳斯</li>
            </ol>
        </div>
    </div>
</body>
</html>
'''
```

```python
et=etree.HTML(html)
```

```python
type(et.xpath('//li[@href="#1"]')[0])
```

    lxml.etree._Element

```python
et.xpath('//ol/li[last()]/text()')
```

    ['格洛纳斯']

```python
et.xpath('//ol/li[last()-1]/text()')
```

    ['伽利略']

```python
tmp=et.xpath('//ul')[0]
tmp.xpath('./li')
```

    [<Element li at 0x26b57b654c0>,
     <Element li at 0x26b57b65540>,
     <Element li at 0x26b57b65580>,
     <Element li at 0x26b57b655c0>]

```python
#获取父节点
et.xpath('//ul/li/parent::*/text()')
```

    ['无序列表\n                ',
     '\n                ',
     '\n                ',
     '\n                ',
     '\n            ']

```python
#和上面的一样
et.xpath('//ul/li/../text()')
```

    ['无序列表\n                ',
     '\n                ',
     '\n                ',
     '\n                ',
     '\n            ']

```python
link1=et.xpath('//ul/li/text()')
name1=et.xpath('//ul/li/@href')
result1=[i for i in zip(link1,name1)]
result1
```

    [('风云1号', '#1'), ('风云2号', '#2'), ('风云3号', '#3'), ('风云4号', '#4')]

```python
link2=et.xpath('//ol/li/text()')
name2=et.xpath('//ol/li/@href')
result2=[i for i in zip(link2,name2)]
result2
```

    [('北斗', '#5'), ('GPS', '#6'), ('伽利略', '#7'), ('格洛纳斯', '#8"')]

```python
s=et.xpath('//ol//text()')
for i in range(len(s)):
    #把每项中的\n空格换成空
    s[i]=s[i].replace('\n                ','').replace('\n            ','')

for i in s:
    if not i:
        s.remove(i)
s
```

    ['有序列表', '北斗', 'GPS', '伽利略', '格洛纳斯']

```python
t1=et.xpath('//ul/li')
for t2 in t1:
    print(t2.xpath('./text()')[0])
```

    风云1号
    风云2号
    风云3号
    风云4号
    

```python
#类型是一样的，解析方法都能用.xpath
print(type(et))
print(type(t2))
```

    <class 'lxml.etree._Element'>
    <class 'lxml.etree._Element'>
    

## 2. 练习

```python
#七猫小说网
#搜索小说，返回搜到的小说名、图片链接、作者、状态、字数、标签、链接、简介、更新到哪了、更新日期
```

```python
def novel():
    from lxml import etree
    import requests
    import re
    import pyautogui
    import time
    
    s=input('想看什么类型的小说？')
    name,pic,author,status,words,label,link,status,intro,where,date=[],[],[],[],[],[],[],[],[],[],[]
    url='https://www.qimao.com/search/index/?keyword='+s
    #500页，少的不会报错，获取不到就退出
    t1=time.time()
    for i in range(1,501):
        urli=url+'&page='+str(i)
        try:
            r=requests.get(urli)
            r.encoding=r.apparent_encoding
        except:
            print('爬取失败！')
        et=etree.HTML(r.text)
        
        t=et.xpath('//div[@class="txt"]/span[@class="s-tit"]//text()')
        if t==[]:
            break
        #关键词部分在span下的i标签内，没标红的在span内，这里需要span内的所有文本
        name+=[t[l]+t[l+1] for l in range(0,len(t)-1,2)]

        p=et.xpath('//div[@class="pic"]/a/img/@src')
        t=et.xpath('//div[@class="pic"]/a/@href')
        pic+=[k.strip() for k in p]
        link+=['https://www.qimao.com'+k for k in t]
        
        author+=et.xpath('//p/span[@class="s-txt"][1]/a/text()')
        where+=et.xpath('//p/span[@class="s-txt"][2]/a/text()')
        date+=et.xpath('//p/span[@class="s-txt"][2]/em[2]/text()')
        label+=et.xpath('//span[@class="s-tags qm-tags clearfix"]/a/text()')
        
        t=et.xpath('//span[@class="s-tags qm-tags clearfix"]/text()')
        for ii in range(1,int(len(t))+1,2):
            tmp=re.findall('\xa0\xa0\xa0\xa0(.*?)\xa0\xa0\xa0\xa0(.*?)万字',t[ii])
            #tmp是一个列表，每个元素还是个列表，包含两个元素
            #这里取出来了元素，所以用append。或者转换成列表用+
            status.append(tmp[0][0])
            words.append(eval(tmp[0][1]))

        t=et.xpath('//li/div[@class="txt"]/span[@class="s-des"]/text()')
        for iii in range(len(t)):
            t[iii]=t[iii].strip().replace('\n','').replace('\r','')
        intro+=t
        
        t2=time.time()
        print('\r                                         ',end='')
        print(f'\r正在爬取第{i}页，已用时{round(t2-t1,2)}秒',end='')
    pyautogui.alert(text='爬取完毕！')
    return s,name,pic,author,status,words,label,link,intro,where,date
```

```python
s,name,pic,author,status,words,label,link,intro,where,date=novel()
import pyautogui
import os

while True:
    c=pyautogui.confirm(text='选择操作',buttons=['生成excel','保存图片','退出'])
    if c=='生成excel':
        import pandas as pd
        data=[k for k in zip(name,pic,author,status,words,label,link,intro,where,date)]
        列名=['小说名','图片','作者','状态','字数/万字','分类','链接','简介','最新更新位置','更新日期']
        df=pd.DataFrame(data,columns=列名)
        df.to_excel(f'../data/xpath-novel//{s}小说信息.xlsx')
        pyautogui.alert(text=f'成功保存为"../data/xpath-novel/{s}小说信息.xlsx"')
    elif c=='保存图片':
        import requests
        count=1
        #用双斜杠也能表示，以防单斜杠被转义，或者单斜杠但在前面加r，这里已经有f了
        os.mkdir(f'D:\\桌面\\python\\爬虫\\data\\xpath-novel\\{s}小说图片')
        for i in zip(pic,name):
            r=requests.get(i[0])
            r.encoding=r.apparent_encoding
            
            with open(f'../data/xpath-novel/{s}小说图片/{i[1]}.jpg','wb') as f:
                f.write(r.content)
            print('\r                                        ',end='')
            print(f'\r正在保存"{i[1]}.jpg",序号为{count}',end='')
            count+=1
        print('\n保存完毕！')
    else:
        break
```

    想看什么类型的小说？ 修仙
    

    正在保存"修仙，于是众仙陨落！.jpg",序号为602              
    保存完毕！
    
