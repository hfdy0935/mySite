---
title: Beautifulsoup
titleTemplate: Python笔记
---

```python
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = "all"
```

```python
#先用Requests库获取页面源代码，后面会用到demo
import requests
url='http://python123.io/ws/demo.html'
r=requests.get(url)
print(r.text)
demo=r.text
```

```html
<html>
    <head>
        <title>This is a python demo page</title>
    </head>
    <body>
        <p class="title"><b>The demo python introduces several python courses.</b></p>
        <p class="course">
            Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
            <a href="http://www.icourse163.org/course/BIT-268001" class="py1" id="link1">Basic Python</a> and
            <a href="http://www.icourse163.org/course/BIT-1001870001" class="py2" id="link2">Advanced Python</a>.
        </p>
    </body>
</html>
```

<b>soup=BeautifulSoup(r.text,'html.parser')</b>
<br/>&emsp;&emsp;第一个参数是需要 BeautifulSoup 解析的信息；
<br/>&emsp;&emsp;第二个参数是解析器。

```python
# import bs4
from bs4 import BeautifulSoup
```

```python
#读取html文件，路径可以是网络路径、本地路径
soup1=BeautifulSoup('<html>data</html>','html.parser')
```

```python
#读取本地路径的html文件
with open('E://multiply.html', 'r', encoding='utf-8') as file:
    content = file.read()
    soup = BeautifulSoup(content, 'html.parser')
    # print(soup.prettify())#空间有限不展示了
```

## 1. BeautifulSoup 库的基本元素

<b>soup=BeautifulSoup(demo,'html.parser')</b>
Beautiful Soup 库的解析器：
<br/>&emsp;&emsp;bs4 的 HTML 解析器，<b>soup=BeautifulSoup(r.text,'html.parser')</b>
<br/>&emsp;&emsp;lxml 的 HTML 解析器，<b>soup=BeautifulSoup(r.text,'lxml')</b>
<br/>&emsp;&emsp;lxml 的 XML 解析器，<b>soup=BeautifulSoup(r.text,'xml')</b>
<br/>&emsp;&emsp;html5lib 的解析器，<b>soup=BeautifulSoup(r.text,'html5lib')</b>

BeautifulSoup 类的基本元素：
<br/>&emsp;&emsp;Tag：标签，最基本的信息组织单元；
<br/>&emsp;&emsp;&emsp;&emsp;<b>soup.a</b>：返回 a 标签，有多个时返回第一个，str 类型；
<br/>&emsp;&emsp;&emsp;&emsp;<b>soup.a.parent</b>：第一个 a 的父标签，str 类型，可套娃；

&emsp;&emsp;Name：标签名字，格式`<tag>.name`；
<br/>&emsp;&emsp;&emsp;&emsp;<b>soup.a.name</b>：返回第一个 a 标签的名字，str 类型；
<br/>&emsp;&emsp;&emsp;&emsp;<b>soup.a.parent.name</b>：第一个 a 的父标签的名字，str 类型；

&emsp;&emsp;Attributes：标签属性，字典形式，格式`<tag>.attrs`；
<br/>&emsp;&emsp;&emsp;&emsp;无论是否有属性，都会返回字典，无属性时返回空字典。
<br/>&emsp;&emsp;&emsp;&emsp;<b>soup.a.attrs</b>：第一个返回 a 标签的属性，类型为字典；
<br/>&emsp;&emsp;&emsp;&emsp;<b>soup.a.attrs['class']</b>：获取第一个 a 标签的 class 属性的值；
<br/>&emsp;&emsp;&emsp;&emsp;<b>soup.a.get('class')</b>：也可以获取第一个 a 标签的 class 属性值

&emsp;&emsp;NavigableString：标签内非属性字符串，<>...</>中字符串，格式`<tag>.string`；
<br/>&emsp;&emsp;&emsp;&emsp;<b>soup.p.string</b>：返回第一个 p 标签之间的部分，类型为 str，可以跨越多个标签层次，找到内层的部分，而不返回内部嵌套的标签；

<br/>&emsp;&emsp;&emsp;&emsp;<b>div.text</b>能获 div 中的文字部分，大多数情况和 string 效果一样

&emsp;&emsp;Comment：标签内字符串的注释部分。
<br/>&emsp;&emsp;&emsp;&emsp;也用 string 提取，看起来值一样，但类型和非属性字符串不同。

```python
#先读取整个html页面
soup=BeautifulSoup(demo,'html.parser')

#打印解析结果
print(soup.prettify())
```

```html
<html>
    <head>
        <title>This is a python demo page</title>
    </head>
    <body>
        <p class="title">
            <b> The demo python introduces several python courses. </b>
        </p>
        <p class="course">
            Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
            <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1"> Basic Python </a>
            and
            <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2"> Advanced Python </a>
            .
        </p>
    </body>
</html>
```

```python
#再分别查看标签、标签名字、标签属性、标签内非属性字符串等
print(soup.title)

#获取页面中的a标签，有多个时只返回第一个
#这两个一样
print(soup.a)
print(soup.find('a'))

print(soup.a.name)
print(soup.a.parent)
print(soup.a.parent.name)
print(soup.a.parent.parent.name)
print(soup.a.attrs)
print(soup.a.attrs['href'])
print(soup.a.get('href'))
```

```html
<title>This is a python demo page</title>
<a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a>
<a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a>
a
<p class="course">
    Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
    <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a> and
    <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>.
</p>
p body {'href': 'http://www.icourse163.org/course/BIT-268001', 'class': ['py1'], 'id': 'link1'} http://www.icourse163.org/course/BIT-268001
http://www.icourse163.org/course/BIT-268001
```

```python
type(soup.a.parent.parent.name)#名字类型
```

    str

```python
type(soup.a.attrs)#属性类型
```

    dict

```python
type(soup.a)#标签类型
```

    bs4.element.Tag

```python
print(soup.a.string)
print(type(soup.a.string))
print(soup.p.string)
```

    Basic Python
    <class 'bs4.element.NavigableString'>
    The demo python introduces several python courses.

```python
#标签里面非属性字符串
soup.p.string#可以跨越多个标签层次
```

    'The demo python introduces several python courses.'

```python
#一个cell有多个输出
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = "all"

newsoup=BeautifulSoup('<b><!--This is a comment--></b><p>This is not a comment</p>','html.parser')
newsoup.b.string#注释的<!--和-->被去掉了，二者值看起来一样但类型不同
newsoup.p.string
type(newsoup.b.string)
type(newsoup.p.string)
```

    'This is a comment'

    'This is not a comment'

    bs4.element.Comment

    bs4.element.NavigableString

## 2. 基于 bs4 库的 HTML 内容遍历方法

HTML 和 XML 格式文件都是树型结构。
<br/>遍历方法：
<br/>&emsp;&emsp;下行遍历，从根节点到最后的子节点；
<br/>&emsp;&emsp;&emsp;&emsp;<b>a.contents</b>：a 的儿子节点的<span style='color:red'><b>列表类型</b></span>（只有下一层），将 a 的所有儿子节点存入列表；
<br/>&emsp;&emsp;&emsp;&emsp;<b>a.childern</b>：a 的儿子节点的<span style='color:red'><b>迭代类型</b></span>（只有下一层），与 a.contents 类似，用于循环遍历儿子节点；
<br/>&emsp;&emsp;&emsp;&emsp;<b>a.descendants</b>：a 的子孙节点的<span style='color:red'><b>迭代类型</b></span>，包含后续所有节点（子、孙），用于循环遍历。

&emsp;&emsp;上行遍历；
<br/>&emsp;&emsp;&emsp;&emsp;<b>a.parent</b>：返回 a 节点的父亲节点标签；
<br/>&emsp;&emsp;&emsp;&emsp;<b>a.parents</b>：返回 a 节点的先辈标签的<span style='color:red'><b>迭代类型</b></span>，用于循环遍历先辈节点。<br/>

&emsp;&emsp;平行遍历，<span style='color:red'><b>在同一个父节点下</b></span>。
<br/>&emsp;&emsp;&emsp;&emsp;<b>a.next_sibling</b>：返回按照 HTML 文本顺序的下一个平行节点标签；注意\n，下同
<br/>&emsp;&emsp;&emsp;&emsp;<b>a.previous_sibling</b>：返回按照 HTML 文本顺序的上一个平行节点标签；
<br/>&emsp;&emsp;&emsp;&emsp;<b>a.next_siblings</b>：<span style='color:red'><b>迭代类型</b></span>，返回按顺序后续所有平行节点标签；
<br/>&emsp;&emsp;&emsp;&emsp;<b>a.previous_siblings</b>：<span style='color:red'><b>迭代类型</b></span>，返回按顺序前面所有平行节点标签。
（1）下行遍历

```python
soup=BeautifulSoup(demo,'html.parser')
soup
```

    <html><head><title>This is a python demo page</title></head>
    <body>
    <p class="title"><b>The demo python introduces several python courses.</b></p>
    <p class="course">Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
    <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a> and <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>.</p>
    </body></html>

```python
soup.head
soup.head.contents#head的儿子节点
soup.body.contents
len(soup.body.contents)#儿子节点数量
soup.body.contents[0]#列表类型，返回第一个节点
```

    <head><title>This is a python demo page</title></head>

    [<title>This is a python demo page</title>]

    ['\n',
     <p class="title"><b>The demo python introduces several python courses.</b></p>,
     '\n',
     <p class="course">Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
     <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a> and <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>.</p>,
     '\n']

    5

    '\n'

```python
for child in soup.body.contents:
    print(child)#'\n'也打印出来了
for child in soup.body.children:
    print(child)
```

    <p class="title"><b>The demo python introduces several python courses.</b></p>


    <p class="course">Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
    <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a> and <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>.</p>




    <p class="title"><b>The demo python introduces several python courses.</b></p>


    <p class="course">Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
    <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a> and <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>.</p>

```python
#body标签的所有子孙标签
for i in soup.body.descendants:
    print(i,'\n')
```

    <p class="title"><b>The demo python introduces several python courses.</b></p>

    <b>The demo python introduces several python courses.</b>

    The demo python introduces several python courses.




    <p class="course">Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
    <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a> and <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>.</p>

    Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:


    <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a>

    Basic Python

     and

    <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>

    Advanced Python

    .

（2）上行遍历

```python
print(soup.body.parent.name)#body标签的父节点是html标签
#html标签的父节点是它本身
```

    html

```python
type(soup.body.a.parents)
for i in soup.a.parents:
    if i is None:#遍历到soup本身，没有先辈，这时不打印标签名
        print(parent)
    else:
        print(i.name,)
```

    generator

    p
    body
    html
    [document]

（3）平行遍历

```python
soup.a.parent
soup.a.next_sibling#有可能是非属性字符串，如果要提取标签要判断是否是标签
soup.a.next_sibling.next_sibling
soup.a.next_sibling.next_sibling.next_siblings#查找不到，是空的，没有
```

    <p class="course">Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
    <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a> and <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>.</p>

    ' and '

    <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>

    <generator object PageElement.next_siblings at 0x000001A25C65BED0>

```python
#第一个p标签的所有后续平行标签
for i in soup.p.next_siblings:#多个后续平行标签用循环
    print(i)#只有一个p标签
```

    <p class="course">Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
    <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a> and <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>.</p>

```python
#两种方法找
soup.a
soup.html.body.p.next_sibling.next_sibling.a
```

    <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a>

    <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a>

## 3. 基于 bs4 库的 HTML 格式化和编码

<b>soup.prettify()</b>为每个标签后面增加换行符，打印出来。
<br/>对某个具体的标签，<b>soup.a.prettify()</b>清晰漂亮地打印出来。
<br/>多数情况可以把 html 复制到 vscode 中在自动调整显示

编码，'utf-8'，支持中文。

```python
soup.prettify()#每个标签后面加了换行符
```

    '<html>\n <head>\n  <title>\n   This is a python demo page\n  </title>\n </head>\n <body>\n  <p class="title">\n   <b>\n    The demo python introduces several python courses.\n   </b>\n  </p>\n  <p class="course">\n   Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:\n   <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">\n    Basic Python\n   </a>\n   and\n   <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">\n    Advanced Python\n   </a>\n   .\n  </p>\n </body>\n</html>'

```python
print(soup.prettify())#分行显示
```

    <html>
     <head>
      <title>
       This is a python demo page
      </title>
     </head>
     <body>
      <p class="title">
       <b>
        The demo python introduces several python courses.
       </b>
      </p>
      <p class="course">
       Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
       <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">
        Basic Python
       </a>
       and
       <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">
        Advanced Python
       </a>
       .
      </p>
     </body>
    </html>

```python
soup.a.prettify()
```

    '<a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">\n Basic Python\n</a>\n'

```python
print(soup.a.prettify())
```

    <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">
     Basic Python
    </a>

```python
soup=BeautifulSoup('<p>中文</p>','html.parser')
soup.p.string
```

    '中文'

## 4. 信息组织与提取方法

### 4.1 信息标记的三种形式

信息标记：
<br/>&emsp;&emsp;对信息做标记，便于理解信息表达的含义；
<br/>&emsp;&emsp;标记后可形成信息组织结构，增加信息维度；
<br/>&emsp;&emsp;标记后的信息可用于通信、存储和展示；
<br/>&emsp;&emsp;标记后的结构与信息一样具有重要价值；
<br/>&emsp;&emsp;更有利于程序的理解和应用。

<br/>信息标记方式：
<br/>&emsp;&emsp;（1）XML（extensible markup language）扩展标记语言，最早，可扩展性好，但繁琐
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;通过标签形式构建所有信息，基于 HTML 格式发展
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;标签内有内容用两个尖括号，没有可以用一个中括号

&emsp;&emsp;（2）JSON（JavaScript Object Noation），适合程序处理（JS），较简洁
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;有类型的键值对 key:value 构建的表达方式；如<b>"name":"中山大学"</b>、<b>"num":20</b>
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;一个 key 对应多个 value 时，<b>"name":["测绘","遥感"]</b>，逗号分开
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;可以嵌套，用大括号写，<b>"name":{"中文名":"中山大学","英文名":"SYSU"}</b>

&emsp;&emsp;（3）YAML（YAML Ain't Markup Language）文本信息比例最高，可读性好
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;用无类型的键值对，如<b>name:中山大学</b>，没有引号
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;用减号-表达并列关系，name:
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-测绘
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-遥感
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;通过缩进表达所属关系 name:
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;中文名:中山大学
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;英文名:SYSU
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;用竖线|表达整块数据，#标识注释

### 4.2. 三种形式比较

应用：

<br/>&emsp;&emsp;XML：Internet 上的信息交互和传递；
<br/>&emsp;&emsp;JSON：移动应用云端和节点的相互通信，无注释；
<br/>&emsp;&emsp;YAML：各类系统的配置文件，有注释，易读。

### 4.3 信息提取的一般方法

从标记好的信息中提取

<br/>&emsp;&emsp;方法一：完整解析信息的标记形式，再提取关键信息。优：准确，缺：繁琐速度慢。
<br/>&emsp;&emsp;方法二：无视标记形式，直接搜索关键信息。优：快简介，缺：准确性和信息内容相关。
<br/>&emsp;&emsp;融合方法

```python
#后面用到
import requests
from bs4 import BeautifulSoup

url='http://python123.io/ws/demo.html'
r=requests.get(url)
demo=r.text
```

```python
#提取HTML中的所有URL链接
soup=BeautifulSoup(demo,'html.parser')

for link in soup.find_all('a'):
    print(link.get('href'))
```

    http://www.icourse163.org/course/BIT-268001
    http://www.icourse163.org/course/BIT-1001870001

```python
for link in soup('a'):
    print(link.attrs['href'])
```

    http://www.icourse163.org/course/BIT-268001
    http://www.icourse163.org/course/BIT-1001870001

## 5. 基于 bs4 库的 HTML 内容查找方法

<b>p.find(name,attrs,recursive,string,**kwargs)</b>只查找一个结果
<br/><b>p.find_all(name,attrs,recursive,string,**kwargs)</b>
<br/>&emsp;&emsp;name：对标签名称的检索字符串，<b>多个标签写成列表形式</b>，如果标签名为 True 则返回所有标签；
<br/>&emsp;&emsp;如果想搜索以某字母开头的所有标签，要用到正则表达式；
<br/>&emsp;&emsp;attrs：对标签属性值的检索字符串，检索标签属性中是否包含某字符串，找到则返回结果列表，找不到返回空列表；用法：<b>attrs={'class':'c1'}</b>
<br/><b>soup.find_all(id='link1')</b>查找 id 为 link1 的标签；
<br/>&emsp;&emsp;recursive：是否对子孙全部检索，默认 True，False 表示只搜索当前节点下一层的信息；
<br/>&emsp;&emsp;string：对<>...</>中字符串区域的检索字符串。

<b>div('a')等价于 div.find_all('a')<br/>
soup('h1)等价于 soup.find_all('h1')</b>

<br/>对查找的结果还可以继续查找

<br/>扩展方法，都与 find_all 有同样的参数，区别是检索区域不同和检索个数不同
<br/>&emsp;&emsp;<>.find()搜索且只返回一个结果，字符串类型；
<br/>&emsp;&emsp;<>.find_parents()在先辈节点中搜索，返回列表类型；
<br/>&emsp;&emsp;<>.find_parent()在先辈节点中返回一个结果，字符串类型；
<br/>&emsp;&emsp;<>.find_next_siblings()在后续平行节点中搜索，返回列表类型；
<br/>&emsp;&emsp;<>.find_next_sibling()在后续平行节点中返回一个结果，字符串类型；
<br/>&emsp;&emsp;<>.find_pervious_siblings()在前序平行节点中搜索，返回列表类型；
<br/>&emsp;&emsp;<>.find_pervious_sibling()在前序平行节点中返回一个结果，字符串类型。

```python
#检索a标签，返回列表
soup.find_all('a')
```

    [<a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a>,
     <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>]

```python
#和上一个效果一样
soup('a')
```

    [<a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a>,
     <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>]

```python
#查找多个要写成一个列表
soup.find_all(['a','b'])
```

    [<b>The demo python introduces several python courses.</b>,
     <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a>,
     <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>]

```python
#查找所有标签
for i in soup.find_all(True):
    print(i.name)
```

    html
    head
    title
    body
    p
    b
    p
    a
    a

```python
#正则表达式
import re
#正则表达式返回以b开头的所有的信息作为查找要素
for i in soup.find_all(re.compile('b')):
    print(i.name)
```

    body
    b

```python
#检索p标签中是否含有'course'字符串
soup.find_all('p','course')
```

    [<p class="course">Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
     <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a> and <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>.</p>]

```python
soup.find_all('p','curse')
```

    []

```python
soup.find_all('p',attrs={'class':'course'})
```

    [<p class="course">Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
     <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a> and <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>.</p>]

```python
#查找id为link1的标签
soup.find_all(id='link1')
```

    [<a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a>]

```python
#正则表达式查找id以以link开头的标签
import re
soup.find_all(id=re.compile('link'))
```

    [<a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a>,
     <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>]

```python
#只查找当前节点下一层的标签
soup.find_all('a',recursive=False)
```

    []

```python
#从中间检索一个字符串
soup.find_all(string='Basic Python')
```

    ['Basic Python']

```python
#把页面中所有出现python的字符串域全部检索出来
soup.find_all(string=re.compile('python'))
```

    ['This is a python demo page',
     'The demo python introduces several python courses.']

```python
print(soup.prettify())
```

```html
<html>
    <head>
        <title>This is a python demo page</title>
    </head>
    <body>
        <p class="title">
            <b> The demo python introduces several python courses. </b>
        </p>
        <p class="course">
            Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
            <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1"> Basic Python </a>
            and
            <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2"> Advanced Python </a>
            .
        </p>
    </body>
</html>
```

```python
#简短写法
soup.p.next_sibling.next_sibling('a')
```

    [<a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a>,
     <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>]

## 6. 中国大学排名爬虫

定向爬虫：只对输入 URL 进行爬取，不扩展爬取。

```python
import requests
from bs4 import BeautifulSoup
import bs4
import re

#将URL信息爬取下来，将HTML页面返回
def getHTMLText(url):
    try:
        r=requests.get(url,timeout=30)
        r.raise_for_status()
        r.encoding=r.apparent_encoding
        return r.text
    except:
        return ''

#提取HTML中关键的数据并填到一个列表中
def fillUnivList(ulist,html):
    soup=BeautifulSoup(html,'html.parser')
    num=0
    for i in soup.tbody.children:#i其实就是每个tr
        #排名
        ran=extractNumbers(i.td.div.string)

        #学校名称
        c_name=i.a.string

        #办学水平
        level=i.p.string

        #省市
        pro=extractChineseCharacters(i.td.next_sibling.next_sibling.get_text())

        #类型
        cat=extractChineseCharacters(i.td.next_sibling.next_sibling.next_sibling.get_text())

        #总分
        gra=extractNumbers(i.td.next_sibling.next_sibling.next_sibling.next_sibling.get_text())

        #学科水平
        sub=extractNumbers(i.td.next_sibling.next_sibling.next_sibling.next_sibling.next_sibling.get_text())

        ulist.append([ran,c_name,level,pro,cat,gra,sub])
        num+=1

def printUnivList(ulist,num):
    tplt=tplt = '{0:^10}\t{1:^20}\t{2:^10}\t{3:^10}\t{4:^10}\t{5:^10}\t{6:^10}\t{7:^10}'
    #打印表头
    print(tplt.format('排名','学校名称',chr(12288),'办学水平','省市','类型','总分','学科水平'))
    for i in range(num):
        u=ulist[i]
        print(tplt.format(u[0],u[1],chr(12288),u[2],u[3],u[4],u[5],u[6]))


#只保留str中的汉字
def extractChineseCharacters(text):
    pattern = re.compile(r'[\u4e00-\u9fa5]')  # 匹配中文字符的正则表达式
    chinese_chars = ''.join(pattern.findall(text))  # 提取字符串中的中文字符并拼接为新字符串
    return chinese_chars

#只保留str中的数字
def extractNumbers(text):
    pattern = re.compile(r'\d+')  # 匹配数字的正则表达式
    numbers = ''.join(pattern.findall(text))  # 提取字符串中的数字并拼接为新字符串
    return numbers

def main():
    uinfo=[]
    url='https://www.shanghairanking.cn/rankings/bcur/2023'
    html=getHTMLText(url)
    fillUnivList(uinfo,html)
    printUnivList(uinfo,30)#显示前30所
main()
```

        排名    	        学校名称        	    　     	   办学水平   	    省市    	    类型    	    总分    	   学科水平
        1     	       清华大学         	    　     	双一流/985/211	    北京    	    综合    	  10041   	   375
        2     	       北京大学         	    　     	双一流/985/211	    北京    	    综合    	   9105   	   350
        3     	       浙江大学         	    　     	双一流/985/211	    浙江    	    综合    	   8229   	   359
        4     	      上海交通大学        	    　     	双一流/985/211	    上海    	    综合    	   7786   	   357
        5     	       复旦大学         	    　     	双一流/985/211	    上海    	    综合    	   7124   	   365
        6     	       南京大学         	    　     	双一流/985/211	    江苏    	    综合    	   6762   	   377
        7     	     中国科学技术大学       	    　     	双一流/985/211	    安徽    	    理工    	   6086   	   400
        8     	      华中科技大学        	    　     	双一流/985/211	    湖北    	    综合    	   6062   	   322
        9     	       武汉大学         	    　     	双一流/985/211	    湖北    	    综合    	   5991   	   318
        10    	      西安交通大学        	    　     	双一流/985/211	    陕西    	    综合    	   5726   	   342
        11    	       中山大学         	    　     	双一流/985/211	    广东    	    综合    	   5700   	   311
        12    	       四川大学         	    　     	双一流/985/211	    四川    	    综合    	   5469   	   315
        13    	      哈尔滨工业大学       	    　     	双一流/985/211	   黑龙江    	    理工    	   5442   	   327
        14    	     北京航空航天大学       	    　     	双一流/985/211	    北京    	    理工    	   5435   	   334
        15    	       东南大学         	    　     	双一流/985/211	    江苏    	    综合    	   5323   	   354
        16    	      北京理工大学        	    　     	双一流/985/211	    北京    	    理工    	   5293   	   334
        17    	       同济大学         	    　     	双一流/985/211	    上海    	    综合    	   5270   	   332
        18    	      中国人民大学        	    　     	双一流/985/211	    北京    	    综合    	   5263   	   347
        19    	      北京师范大学        	    　     	双一流/985/211	    北京    	    师范    	   5234   	   330
        20    	       南开大学         	    　     	双一流/985/211	    天津    	    综合    	   4904   	   317
        21    	       天津大学         	    　     	双一流/985/211	    天津    	    理工    	   4805   	   330
        22    	       山东大学         	    　     	双一流/985/211	    山东    	    综合    	   4728   	   297
        23    	       中南大学         	    　     	双一流/985/211	    湖南    	    综合    	   4661   	   307
        24    	       厦门大学         	    　     	双一流/985/211	    福建    	    综合    	   4632   	   325
        25    	      西北工业大学        	    　     	双一流/985/211	    陕西    	    理工    	   4620   	   334
        26    	      华南理工大学        	    　     	双一流/985/211	    广东    	    理工    	   4442   	   308
        27    	       吉林大学         	    　     	双一流/985/211	    吉林    	    综合    	   4391   	   305
        28    	      电子科技大学        	    　     	双一流/985/211	    四川    	    理工    	   4370   	   322
        29    	       湖南大学         	    　     	双一流/985/211	    湖南    	    综合    	   4355   	   315
        30    	      中国农业大学        	    　     	双一流/985/211	    北京    	    农业    	   4328   	   318

```python
print(soup.prettify())
# 格式化一下，使显示有层级，更符合DOM结构
# 太多了就不展示了
```

```python
soup=BeautifulSoup(demo)
print(soup.prettify())
```

```html
<html>
    <head>
        <title>This is a python demo page</title>
    </head>
    <body>
        <p class="title">
            <b> The demo python introduces several python courses. </b>
        </p>
        <p class="course">
            Python is a wonderful general-purpose programming language. You can learn Python from novice to professional by tracking the following courses:
            <a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1"> Basic Python </a>
            and
            <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2"> Advanced Python </a>
            .
        </p>
    </body>
</html>
```

```python
soup.p.next_sibling.next_sibling('a')
```

    [<a class="py1" href="http://www.icourse163.org/course/BIT-268001" id="link1">Basic Python</a>,
     <a class="py2" href="http://www.icourse163.org/course/BIT-1001870001" id="link2">Advanced Python</a>]
