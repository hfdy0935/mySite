---
title: 正则表达式
titleTemplate: Python笔记
---

在页面中提取关键信息

```python
import re
```

```python
#每个cell多个输出
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = "all"
```

## 1. Re（正则表达式）库

`regular expression`，用来简洁表达一组字符串的表达式，是一种通用的字符串表达框架。
<br/>如：'PY'、'PYY'、'PYYY'、'PYABDBNDBD’都可以用正则表达式PY+表示。
<br/>'PY'开头，后续存在不多于10个字符，后续字符不能是'P'或'Y'，正则表达式 `PY[^PY]{0,10}`

<br/>应用：
<br/>表达文本类型的特征；
<br/>同时查找或替换一组字符串；
<br/>匹配字符串的全部或部分。

<br/>编译：将符合正则表达式语法的字符串转换成正则表达式。


## 2. 正则表达式的语法

正则表达式由字符和操作符构成

<br/>常用操作符分为元字符和量词：

### 2.1 元字符——具有固定含义的特殊符号
<br/>（1）`.`表示除换行符的任何单个字符
<br/>（2）`\w`匹配所有数字、字母、下划线
<br/>（3）`\d`匹配所有数字，等于[0-9]
<br/>（4）`\n`匹配一个换行符
<br/>（5）`\t`匹配一个制表符
<br/>（6）`^`匹配字符串开头，如\^abc表示abc且在一个字符串的开头
<br/>（7）`$`匹配字符串结尾，如abc$表示abc且在一个字符串的结尾
<br/>（8）`\W`匹配所有非数字、字母、下划线
<br/>（9）`\D`匹配所有非数字，等于[0-9]
<br/>（10）`|`左右表达式任意一个，如abc|def表示匹配abc或def
<br/>（11）`()`分组标记，内部只能使用|操作符，如`(abc)`表示abc，`(abc|def)`表示匹配abc或def
<br/>后面也可以用*、?、+等限定次数
<br/>（12）`[]`字符集，如`[abc]`、`[a-z]`、`[A-Z]`、`[0-9]`某位置字符在字符集中则匹配。`[0-9a-z_]`和`\w`一样
<br/>（13）`[^]`非字符集，对单个字符给出排除范围，如[^abc]表示非a非b非c的单个字符

### 2.2 量词——控制前面的元字符出现的次数
<br/>（1）`*`前一个字符出现0次或无限次扩展，如`abc*`表示ab、abc、abcc、abccc等
<br/>（2）`+`前一个字符1次或无限次扩展，如abc+表示abc、abcc、abccc等
<br/>（3）`?`前一个字符出现0次或1次扩展，如abc?表示ab、abc
<br/>（4）`{m}`扩展前一个字符m次，如`ab{2}c`表示abbc
<br/>（5）`{m,}`扩展前一个字符m次或更多次，如ab{2,}c表示abbc、abbbc、abbbbc等
<br/>（6）`{m, n}`扩展前一个字符m至n次（含n），如`ab{1,3}c`表示abc、abbc、abbbc

例子：
<br/>`^[A-Za-z0-9]+\$`，由26个字母和数字组成的字符串；
<br/>`^-?\d+\$`，整数形式的字符串
<br/>`^[0-9]*[1-9][0-9]\*$`，正整数形式的字符串
<br/>`[1-9]\d{5}`，中国境内邮政编码，6位
<br/>`[\u4e00-\u9fa5]`，匹配中文字符
<br/>`\d{3}-\d{8}|\d{4}-\d{7}`，国内电话号码，010-68913536

IP地址字符串形式的正则表达式：
<br/>0-99：`[1-9]?\d`
<br/>100-199：`1\d{2}`
<br/>200-249：`2[0-4]\d`
<br/>250-255：`25[0-5]`
<br/>总：`(([1-9]?\d|1\d{2}|2[0-4]\d|25[0-5]).){3}([1-9]?\d|1\d{2}|2[0-4]\d|25[0-5])`


## 3. Re库的基本使用

（1）使用raw string类型（原生字符串类型，不包含转义符的字符串）表示正则表达式，表示为r'text'
<br/>python中的转义符是`\`，原生字符串中的\不被解释为转义符
<br/>string类型中用`\\`来表示普通的`\`

<br/>（2）Re库主要功能函数，函数式用法，一次性操作：
<br/>`re.search(pattern,string,flags)`在一个字符串中搜索匹配正则表达式的<b>第一个位置</b>，返回match对象
<br/>找到一个就完了
<br/>pattern：正则表达式的字符串或原生字符串表示
<br/>string：待匹配的字符串
<br/>flags：正则表达式使用时的控制标记
<br/>re.I：忽略正则表达式的大小写，[A-Z]能匹配小写字符
<br/>re.M：正则表达式中的^操作符能够将给定字符串的每行当作匹配开始
<br/>re.S：默认匹配除换行符之外的所有字符

<b>re.match(pattern,string,flags=0)</b>从一个字符串的<b>开始位置</b>起匹配正则表达式，返回match对象
<br/>参数同上
<br/>必须开头就匹配到才行

<b>re.findall(pattern,string,flags=0)</b>搜索字符串，以列表类型返回<b>全部能匹配的字符串</b>
<br/>参数同上

<b>re.split(pattern,string,maxsplit=0,flags=0)</b>将一个字符串按照正则表达式匹配结果进行分割，返回列表类型，<b>把与正则表达式匹配的部分去掉再分割</b>
<br/>三个参数同上
<br/>参数同上maxsplit表示最大分割数，如1表示只匹配一次分割一次，剩余部分不管，剩余部分作为最后一个元素输出

<b>re.finditer(pattern,string,flags)</b>搜索字符串，返回所有匹配结果的<b>迭代类型</b>，每个迭代元素是match对象
<br/>参数同上

<b>re.sub(pattern,repl,string,count=0,flags)</b>替换所有匹配正则表达式的字符串，返回替换后的总的字符串
<br/>三个参数同上
<br/>repl：替换匹配字符串的字符串
<br/>参count：匹配替换的最大次数

<br/>（3）面向对象用法，编译后的多次使用：
<br/><b>regex=re.complie(pattern,flags=0)</b>将正则表达式的字符串形式编译成正则表达式对象。
<br/>如<b>pat=re.compile(r'[1-9]\d{5}')</b>
<br/>后面就可以多次使用`pat.search('BIT 100081')`这里需要去掉正则表达式pattern参数

<br/>`re.S`可以让.匹配换行符
<br/>`re.I`，大小写不敏感

```python
#re.search()有就行，不管位置在哪
match=re.search(r'[1-9][0-9]{5}','BIT100081 TSU100084')
match=re.search(r'[1-9]\d{5}','BIT 100081')
match=re.search(r'\d{6}','BIT 100081')#都行，只要匹配到六位数
#判断是否为空，是否匹配出来了结果
if match:
    print(match.group(0))
```

    100081
    

```python
#re.match()必须开头就匹配到才能匹配到
match=re.match(r'[1-9]\d{5}','BIT 100081')
print(match)#空

match=re.match(r'[1-9]\d{5}','100081 BIT')
print(match)
```

    None
    <re.Match object; span=(0, 6), match='100081'>
    

```python
#给定字符串中的所有匹配字符串都表示出来，列表类型
ls=re.findall(r'[1-9]\d{5}','BIT100081 TSU100084')
ls
```

    ['100081', '100084']

```python
re.split(r'[1-9]\d{5}','BIT100081 TSU100084')
re.split(r'[1-9]\d{5}','BIT100081 TSU100084',maxsplit=1)
```

    ['BIT', ' TSU', '']

    ['BIT', ' TSU100084']

```python
for m in re.finditer(r'[1-9]\d{5}','BIT100081 TSU100084'):
    if m:
        print(m.group(0))
```

    100081
    100084
    

```python
re.sub(r'[1-9]\d{5}','zipcode','BIT100081 TSU100084')
```

    'BITzipcode TSUzipcode'



## 4. Re库的match对象

Match对象的属性：
<br/>`match.string`：待匹配的文本；
<br/>`match.re`：匹配时使用的pattern对象（正则表达式）
<br/>`match.pos`：正则表达式搜索文本的开始位置
<br/>`match.endpos`：正则表达式搜索文本的结束位置

Match对象的方法：
<br/>`match.group(0)`从match对象中获得匹配后的字符串
<br/>可以在匹配的时候在正则表达式里面最前面加`?P<组名>`
<br/>把匹配结果分到match对象的'组名'组中，用`m.group('组名')`提取
<br/>`findall(res,s)`不行，因为它返回的是列表
<br/>`match.start()`匹配字符串在原始字符串的开始位置
<br/>`match.end()`匹配字符串在原始字符串的结束位置
<br/>`match.span()`返回(.start(),.end())，元组类型

```python
match=re.search(r'[1-9]\d{5}','BIT 100081')
#判断是否为空，是否匹配出来了结果
if match:
    print(match.group(0))
type(match)
```

    100081
    

    re.Match

```python
m=re.search(r'[1-9]\d{5}','BIT100081 TSU100084')
m.string
m.re
m.pos
m.endpos
m.group(0)#只包含一次匹配的结果
#第一次匹配在原字符串中的位置
m.start()
m.end()
m.span()#元组
```

    'BIT100081 TSU100084'

    re.compile(r'[1-9]\d{5}', re.UNICODE)

    0

    19

    '100081'

    3

    9

    (3, 9)

```python
s='''
<div class="西游记"><span id="10010">中国移动</span></div>
<div class="西游记"><span id="10086">中国移动</span></div>
'''
# obj=re.compile(r"<span id='\d+'>.*?</span>")#这样没结果
obj1=re.compile(r'<span id="\d+">.*?</span>')
obj2=re.compile(r'<span id="(\d+)">(.*?)</span>')
#查到后分到match对象的对应组中，不指定组可以用group()或group(0)提取所有结果
obj3=re.compile(r'<span id="(?P<电话>\d+)">(?P<运营商>.*?)</span>')

for i in obj1.finditer(s):
    print(i.group())
obj2.findall(s)
for i in obj3.finditer(s):
    i.group('电话')
    i.group('运营商')
```

    <span id="10010">中国移动</span>
    <span id="10086">中国移动</span>
    

    [('10010', '中国移动'), ('10086', '中国移动')]

    '10010'

    '中国移动'

    '10086'

    '中国移动'


## 5. Re库的贪婪匹配和最小匹配

Re库默认贪婪匹配，即<b>输出匹配最长的子串</b>。

最小匹配操作符：
<br/>`\*?`前一个字符0次或无限次扩展，最小匹配
<br/>`+?`前一个字符1次或无限次扩展，最小匹配
<br/>`\??`前一个字符0次或1次扩展，最小匹配
<br/>`\{m,n}?`扩展前一个字符m至n次（含n），最小匹配

```python
match=re.search(r'PY.*N','PYANVNCNDN')
#有PYAN、PYANVN、PYANVNDN、PYANVNSNDN
#只匹配最长的
match.group(0)
```

    'PYANVNCNDN'

```python
match=re.search(r'PY.*?N','PYANVNCNDN')
#有PYAN、PYANVN、PYANVNDN、PYANVNSNDN
#只匹配最短的
match.group(0)
```

    'PYAN'

```python
m=re.search(r'SYSU{1,3}','SYSU1SYSUSYSU2SYSUSYSUSYSU3')
m.string#贪婪匹配
m.group(0)
```

    'SYSU1SYSUSYSU2SYSUSYSUSYSU3'

    'SYSU'

```python
m
```

    <re.Match object; span=(0, 4), match='SYSU'>

```python
s='<div class="a1"><div></div><div>盒子1</div><div>盒子2</div><div>盒子3</div></div>'
#两个div之间任意字符出现0次或1次，返回第一个
m1=re.search('<div>.?</div>',s)
m1.group()
#出现0次或1次，贪婪匹配
m3=re.search('<div>.*</div>',s)
m3.group()
#出现0次或1次，最小匹配
m2=re.findall('<div>.*?</div>',s)
m2
```

    '<div></div>'

    '<div></div><div>盒子1</div><div>盒子2</div><div>盒子3</div></div>'

    ['<div></div>', '<div>盒子1</div>', '<div>盒子2</div>', '<div>盒子3</div>']

```python
re.search('.*x','123x456x789x')
re.search('.+x','123x456x789x')
re.search('.?x','123x456x789x')

re.search('.*?x','123x456x789x')
re.search('.+?x','123x456x789x')
re.search('.??x','123x456x789x')
```

    <re.Match object; span=(0, 12), match='123x456x789x'>

    <re.Match object; span=(0, 12), match='123x456x789x'>

    <re.Match object; span=(2, 4), match='3x'>

    <re.Match object; span=(0, 4), match='123x'>

    <re.Match object; span=(0, 4), match='123x'>

    <re.Match object; span=(2, 4), match='3x'>

```python
re.findall('.??x','123x456x789x')
```

    ['3x', '6x', '9x']



## 6. re库练习

```python
#电影天堂电影信息爬取
```

```python
import requests
import re
import time
```

```python
url='https://www.dytt.to/'
try:
    r=requests.get(url)
    r.encoding=r.apparent_encoding
except:
    print('爬取失败')
```

```python
#页面中找到部分html代码
obj1=re.compile(r'2022新片精品.*?<ul>.*?</ul>',re.S)
res1=obj1.findall(r.text)[0]
res1
```

    '2022新片精品</strong><em><a href="/html/gndy/dyzz/index.html">更多>></a></em></p></div>\r\n \r\n<div class="co_content8">\r\n<ul>\r\n\r\n<table width="100%" border="0" cellspacing="0" cellpadding="0">\r\n\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・<a href=\'/app.html\'><font color="#1641F9" >手机浏览,推荐下载本站app,绿色小巧,简单实用！详情请点击！</font></a><br/>\r\n</td>\r\n\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221016/63063.html\'>2022年惊悚恐怖《月光光心慌慌：终结》BD中英双字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-16</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221013/63055.html\'>2022年动画喜剧《刀锋剑客》BD中英双字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-13</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221012/63053.html\'>2022年剧情《妈妈！/春歌》HD国语中字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-12</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221010/63049.html\'>2022年悬疑恐怖《新养鬼吃人》BD中英双字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-10</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221009/63044.html\'>2022年科幻喜剧《独行月球》HD国语中英双字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-09</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221009/63043.html\'>2022年剧情战争《有史以来最棒的啤酒运送》BD中英双字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-09</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221008/63036.html\'>2022年剧情悬疑《最幸运的女孩》BD中英双字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-08</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221007/63032.html\'>2022年科幻动画《DC萌宠特遣队》BD国英双语中字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-07</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221007/63031.html\'>2022年喜剧《主竞赛》BD西班牙语中字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-07</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221005/63028.html\'>2022年动作战争《狼群》HD国语中字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-05</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221005/63027.html\'>2022年传记战争《特级英雄黄继光》HD国语中字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-04</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221005/63026.html\'>2022年喜剧《一盘大棋》HD国语中字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-04</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221003/63017.html\'>2022年奇幻动画《漂流家园》BD国日双语中字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-02</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221001/63014.html\'>2022年剧情《鸢》BD日语中字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-01</font></td>\r\n</tr>\r\n<tr>\r\n<td width="85%" height="22" class="inddline">\r\n・[<a href="/html/gndy/dyzz/index.html">最新电影下载</a>]<a href=\'/html/gndy/dyzz/20221001/63013.html\'>2022年剧情传记《金发梦露》BD中英双字</a><br/>\r\n</td>\r\n<td width="15%" class="inddline"><font color=#FF0000>2022-10-01</font></td>\r\n</tr>\r\n\r\n</table>\r\n</ul>'

```python
#找到每个电影的名字和页面链接
obj2=re.compile(r"]<a href='(?P<href>.*?)'>(?P<name>.*?)</a>")
res2=obj2.finditer(res1)

t1=time.time()
#爬取每个电影的信息
name=[]

yiming=[]
year=[]
pos=[]
typ=[]
language=[]
word=[]
dir=[]
intro=[]
link=[]

#有些电影数据不全，导致IMDb评分、豆瓣评分、时长等提取不到..
#有beautifulsoup一个可以提取完全
obj3=re.compile('◎译　　名　(?P<yiming>.*?)<br />◎.*?\
年　　代　(?P<year>.*?)<br />◎产　　地　(?P<pos>.*?)<br />◎类　　别　\
(?P<type>.*?)<br />◎语　　言　(?P<language>.*?)<br />◎字　　幕　(?P<word>.*?)\
<br />◎上映日期　(?P<time>.*?)<br />.*?\
◎导　　演　(?P<dir>.*?)<br />◎\
.*?简　　介<br />.*?<br />　　(?P<intro>.*?)<br /><br />')

for i in res2:
    name.append(i.group('name'))
    movie_url=url+i.group('href')
    r=requests.get(movie_url,timeout=30)
    r.encoding=r.apparent_encoding
    link.append(r.url)
    
    for j in obj3.finditer(r.text):
        yiming.append(j.group('yiming'))
        year.append(j.group('year'))
        pos.append(j.group('pos'))
        typ.append(j.group('type'))
        language.append(j.group('language'))
        word.append(j.group('word'))
        dir.append(j.group('dir'))
        intro.append(j.group('intro'))
        
    t2=time.time()
    print('\r                           ',end='')
    print(f'\r已用时：{round(t2-t1,2)}秒',end='')
print('\n运行完毕！')
```

    已用时：21.54秒                 
    运行完毕！
    

<b>加 r 会把字符串转变为非转义的原始字符串
<br/>字符串前加 f 可以在字符串中的{}内写入变量，执行获得对应的值
<br/>字符串前加 u 是对字符串进行unicode编码</b>

```python
#把电影信息写入文件
#每个write之间自动换行，不需要再\n
with open('../data/movie.txt','w',encoding='utf-8')as f:
    f.write('电影天堂2022新片精品信息爬取\n'.center(110))
    count=1
    #或者也可以for i in zip([name,yiming,year,pos,typ,language,word,dir,link,intro]):
    #后面j=i[0]，把元组i中的列表取出来再替换字符
    for i in zip(name,yiming,year,pos,typ,language,word,dir,link,intro):
        #打包之后i是元组
        #要修改替换其中的符号需要转为列表，改完赋给原列表
        j=list(i)    
        j[7]=j[7].replace('&middot;','·').replace('<br />　　　　&nbsp;&nbsp;'\
                            ,',').replace('<br />　　　　　&nbsp;&nbsp;',',')
        j[9]=j[9].replace('&ldquo;','').replace('&middot;','·').replace\
                            ('&rdquo;','')\
        .replace('&hellip;','...').replace('<br />　　','\n    ')
        f.write(f'\r{count}')
        count+=1
        #这里也可以分开写入，不需要\n
        f.write(f'''\n电影名：{j[0]}\n译名：{j[1]}\n年代：{j[2]}\n产地：{j[3]}
类型：{j[4]}\n语言：{j[5]}\n字幕：{j[6]}\n导演：{j[7]}
链接：{j[8]}\n简介：{j[9]}\n\n\n\n
''')
        #类型前不需要\n，已经有换行
```

```python

```

```python
#前面也可以用findall进行查找，结果是一个列表，写起来简便点，用不着group
```

```python
res22=obj2.findall(res1)
res22
```

    [('/html/gndy/dyzz/20221016/63063.html', '2022年惊悚恐怖《月光光心慌慌：终结》BD中英双字'),
     ('/html/gndy/dyzz/20221013/63055.html', '2022年动画喜剧《刀锋剑客》BD中英双字'),
     ('/html/gndy/dyzz/20221012/63053.html', '2022年剧情《妈妈！/春歌》HD国语中字'),
     ('/html/gndy/dyzz/20221010/63049.html', '2022年悬疑恐怖《新养鬼吃人》BD中英双字'),
     ('/html/gndy/dyzz/20221009/63044.html', '2022年科幻喜剧《独行月球》HD国语中英双字'),
     ('/html/gndy/dyzz/20221009/63043.html', '2022年剧情战争《有史以来最棒的啤酒运送》BD中英双字'),
     ('/html/gndy/dyzz/20221008/63036.html', '2022年剧情悬疑《最幸运的女孩》BD中英双字'),
     ('/html/gndy/dyzz/20221007/63032.html', '2022年科幻动画《DC萌宠特遣队》BD国英双语中字'),
     ('/html/gndy/dyzz/20221007/63031.html', '2022年喜剧《主竞赛》BD西班牙语中字'),
     ('/html/gndy/dyzz/20221005/63028.html', '2022年动作战争《狼群》HD国语中字'),
     ('/html/gndy/dyzz/20221005/63027.html', '2022年传记战争《特级英雄黄继光》HD国语中字'),
     ('/html/gndy/dyzz/20221005/63026.html', '2022年喜剧《一盘大棋》HD国语中字'),
     ('/html/gndy/dyzz/20221003/63017.html', '2022年奇幻动画《漂流家园》BD国日双语中字'),
     ('/html/gndy/dyzz/20221001/63014.html', '2022年剧情《鸢》BD日语中字'),
     ('/html/gndy/dyzz/20221001/63013.html', '2022年剧情传记《金发梦露》BD中英双字')]

```python
name=[]
for i in res22:
    name.append(i[1])
    movie_url=url+i[0]
    r=requests.get(movie_url)
    r.encoding=r.apparent_encoding
    #在需要提取的部分外面加上括号才能只提取它们
    #直接根据列表索引提取，不能写group再提取
    obj3=re.compile('◎译　　名　(.*?)<br />◎.*?\
年　　代　(.*?)<br />◎产　　地　(.*?)<br />◎类　　别　\
(.*?)<br />◎语　　言　(.*?)<br />◎字　　幕　(.*?)\
<br />◎上映日期　(.*?)<br />.*?\
◎导　　演　(.*?)<br />◎\
.*?简　　介<br />.*?<br />　　(.*?)<br /><br />')
    res33=obj3.findall(r.text)
    #yiming.append(res33[0])
    #year.append(res33[1])
    #......
    print(res33)
```

    [('月光光心慌慌：终结  / 月光光新慌慌：万圣结(台) / 了结月光光(港) / 万圣节终结', '2022', '美国', '惊悚/恐怖', '英语', '中英双字', '2022-10-14(美国/美国网络)', '大卫&middot;戈登&middot;格林 David Gordon  Green', '&ldquo;这是洛莉&middot;史特罗德的最后一搏。&rdquo;<br />\u3000\u300045年后，影史最受好评与最受尊崇恐怖片电影系列，即将迎来史诗般的惊惧结局，洛莉史特罗德将与恶灵化身麦克&middot;迈尔斯，展开一场最终的生死搏斗，这将会是一场史无前例的终极大战，他们只有一个人能够存活。<br />\u3000\u3000《月光光新慌慌：万圣杀》一片中发生恐怖事件的四年后，洛莉（杰米&middot;李&middot;柯蒂斯  饰）和她的外孙女爱丽森（安迪&middot;马蒂切克  饰）住在一起，并且正在完成她的回忆录。杀人魔麦克迈尔斯自从上次大开杀戒之后就消失无踪，而洛莉这几十年来一直活在麦克&middot;迈尔斯的恐怖阴影下，她受到的心理创伤以及报复心态也左右了她的人生，但是她决定放下长久以来的恐惧和愤怒，终于学会拥抱人生、享受生活。但是当一名年轻男子柯瑞&middot;康宁汉（罗汉&middot;坎贝尔  饰）遭到指控杀害他当保姆的一名男童时，就引发了一连串的暴力和恐怖事件，迫使洛莉和她无法掌控的邪恶力量展开一场终极大战，试图&hellip;&hellip;')]
    [('刀锋剑客', '2022', '英国/中国大陆/加拿大/美国', '喜剧/动作/动画', '英语', '中英双字', '2022-07-15(美国)', '克里斯&middot;贝利 Chris Bailey<br />\u3000\u3000\u3000\u3000&nbsp;&nbsp;\u3000马克&middot;科伊西尔  Mark Koetsier<br />\u3000\u3000\u3000\u3000&nbsp;&nbsp;\u3000罗伯&middot;明可夫 Rob Minkoff', '一只运气不佳的猎犬汉克(迈克尔&middot;塞拉饰)发现自己身处一个全是猫所在的小镇，而这里恰恰需要一个英雄来保护它们。因为一个无情的恶棍誓要把它们的村庄从地图上抹去。汉克必须扮演城镇武士的角色，与小镇居民们一起拯救世界......')]
    [('妈妈！  / 春歌 / Song of  Spring', '2022', '中国大陆', '剧情', '普通话', '中文', '2022-09-10(中国大陆)  / 2022-08-19(北京国际电影节)', '杨荔钠 Lina Yang', '85岁母亲（吴彦姝 饰）和65岁女儿（奚美娟  饰）共同生活。女儿背负着对父亲的愧疚，过着清教徒般的生活，阿尔茨海默病让她变成了另外一个人，年迈的母亲需要付出顽强的生命力照顾女儿。两个生命在进程中彼此成全彼此辉映。')]
    [('养鬼吃人  / 新养鬼吃人', '2022', '美国', '悬疑 / 惊悚 /  恐怖', '英语', '中英双字', '2022-10-07(美国网络)', '大卫&middot;布鲁克纳  David Bruckner', '经典恐怖片《养鬼吃人/猛鬼追魂》将拍新版电影，近日定下导演：大卫&middot;布鲁克纳(《黑森灵》《鬼作秀》)。  <br />\u3000\u3000原版讲述男子Frank不慎打开了另一个次元，被著名恶鬼&ldquo;针头鬼&rdquo;带领的魔鬼Cenobites所杀。而多年后，Frank的哥哥Larry带着妻子Julia，搬到了他已故的妈妈的老宅中，因为一次意外，Larry的血让Frank的尸体重生，也让恶鬼降临&hellip;&hellip;后成了一个系列。新版将从系列第一部开始重启，据称将在忠于原版的基础上有进化。  <br />\u3000\u3000Spyglass媒体公司打造。Ben Collins和Luke  Piotrowski编剧，大卫&middot;S&middot;高耶(《蝙蝠侠：黑暗骑士三部曲》《刀锋战士》)提供故事并参与制片，这个导演、编剧、制片组合也就是今年圣丹斯电影节的热门恐怖片《鬼屋》的班底。')]
    [('独行月球  / Moon Man', '2022', '中国大陆', '喜剧 / 科幻', '汉语普通话 /  英语', '中英双字', '2022-07-29(中国大陆)', '张吃鱼 Chiyu  Zhang', '人类为抵御小行星的撞击，拯救地球，在月球部署了月盾计划。陨石提前来袭，全员紧急撤离时，维修工独孤月（沈腾  饰）因为意外，错过了领队马蓝星（马丽  饰）的撤离通知，一个人落在了月球。不料月盾计划失败，独孤月成为了&ldquo;宇宙最后的人类&rdquo;，开始了他在月球上破罐子破摔的生活&hellip;&hellip;')]
    [('有史以来最棒的啤酒运送  / 在前线干杯 / 有史以来最棒的啤酒', '2022', '美国', '剧情/战争', '英语', '中英双字', '2022-09-10(多伦多电影节)  / 2022-09-30(美国)', '彼得&middot;法雷里 Peter Farrelly', '该片编剧为法雷利和《绿皮书》的联合编剧Brian Currie及Pete  Jones(《嘿咻卡》)，改编自纪实书《The Greatest Beer Run Ever: A True Story of Friendship  Stronger Than War》，讲述John &quot;Chickie&quot;  Donohue的真实故事：越南战争时期的1967年，26岁的前美国海军陆战队成员Donohue从纽约出发，去越南寻找正在当兵的三个儿时好友，给他们送去啤酒。')]
    [('最幸运的女孩  / 你好，法奈利', '2022', '美国', '剧情/悬疑', '英语', '中英双字', '2022-09-30(美国)  / 2022-10-07(美国网络)', '麦克&middot;巴克 Mike Barker', '14岁的蒂芙阿尼&middot;法奈利，出生于普通家庭，被势利的母亲送去布拉德利贵族学校，当作攀附权贵的跳板。美丽的法奈利如愿融入贵族圈子，成为众人追捧的万人迷，却没有人知道她内心的孤独。在一次校园聚会中，法奈利经历了始料未及的侵害，从而卷入让她痛不欲生的校园暴力事件，随后一起校园枪杀案更是彻底改变了法奈利的人生轨迹。')]
    [('DC萌宠特遣队/DC超级宠物联盟/DC超级宠物军团(台)/DC超宠联萌(港)/DC超级宠物战队/超级宠物', '2022', '美国', '喜剧/动作/科幻/动画/冒险', '英语', '中文', '2022-07-29(美国)', '贾里德&middot;斯特恩 Jared  Stern<br />\u3000\u3000\u3000\u3000\u3000&nbsp;&nbsp;山姆&middot;J&middot;莱文 Sam J. Levine', '超狗小氪和超人是形影不离的好朋友。他们共享超能力，在大都会并肩作战打击犯罪。但是当超人和正义联盟的其他成员被绑架时，小氪必须要说服一群收容所里的小动物们，包括猎犬王牌、小胖猪PB、乌龟默顿、松鼠奇奇组成萌宠特遣队，帮助他们掌握刚获得的超能力，一起拯救超级英雄。')]
    [('主竞赛  / 疯狂竞赛片(台) / 玩谢天王巨星(港) / 官方选择 / 人生主竞赛', '2021', '西班牙/阿根廷', '喜剧', '西班牙语', '中文', '2021-09-04(威尼斯电影节)', '马里亚诺&middot;寇恩  Mariano Cohn<br />\u3000\u3000\u3000\u3000\u3000&nbsp;&nbsp;加斯顿&middot;杜帕拉特 Gast&oacute;n Duprat', '一个亿万富豪企业家冲动地制作一部经典电影，于是找来知名电影人萝拉（彭妮露古丝  饰）执导这部野心勃勃的大制作，众星云集的主演阵容里有两位重量级、但麻烦多多的演员：荷里活型男菲力斯（安东尼奥班达拉斯 饰）和偏激的舞台剧演员伊凡（奥斯卡马提涅兹  饰），两个传奇人物同时也是死对头。经过萝拉设下一连串光怪陆离的试炼之后，菲力斯和伊凡不只要正面交锋，还要保全各自的名声。当电影终于开拍时，谁能笑到最后？')]
    [('狼群  / 我的佣兵生涯 / 佣兵 / Wolf Pack', '2022', '中国大陆', '动作 /  战争', '普通话 / 英语', '中文', '2022-09-09(中国大陆)', '蒋丛 Michael  Chiang', '境外恐怖势力掀起能源危机，7名反恐精英秘密守护&ldquo;地下长城&rdquo;！')]
    [('特级英雄黄继光', '2022', '中国大陆', '剧情/传记/战争', '普通话', '中文', '2022-10-01(中国大陆)', '周润泽  Runze Zhou', '影片以中、朝两国授予的抗美援朝特级英雄黄继光为原型，展示了黄继光如何参军并在军队中得到锻炼，不断提高自己的意志力和战场技巧，最终成为了一名优秀的战士。在上甘岭战役中，为了完成上级安排的任务，为了整个部队的胜利，面对着地堡中敌人的机枪，黄继光牺牲自己，英勇堵枪眼，为战友争取到了短暂的时间，从而消灭了敌人。')]
    [('一盘大棋  / 蚂蚁撼大象 /  弹棉花', '2022', '中国大陆', '剧情/喜剧', '普通话', '中文', '2022-10-04(中国大陆)', '江涛  Tao Jiang', '老段（郭涛  饰）多年前因涉嫌一桩案件入狱，刚出狱的他为搞清当年的真相，执意谋划了一盘万般凶险的骗中骗大棋。谁料，此番行动中却卷入了他与三个前妻的三个性格迥异的孩子吴文（小沈阳  饰）、莫墨（修睿 饰）、唐宁（张艺上  饰）。一家四口一边联手抗敌，一边互相拆台，究竟是&ldquo;大小狐狸&rdquo;上阵父子兵，还是&ldquo;猫鼠游戏&rdquo;尔虞我诈，随着一切都逐渐走向失控，这出反转不断的荒诞喜剧让人永远猜不到下一步棋会怎么走&hellip;&hellip;')]
    [('漂流家园', '2022', '日本', '剧情/动画/奇幻/冒险', '国日双语', '中文', '2022-09-09(日本)  / 2022-09-16(日本网络)', '石田�v康 Hiroyasu Ishida', '小学六年级的航�v和夏芽不仅在同一栋公寓长大，也是彼此最好的朋友。夏日里的某天，他们在即将拆除的公寓玩耍，却突然陷入异象，举目所见，尽是一片汪洋。航�v和朋友们有办法回到原来的世界吗？一场夏日告别之旅就此展开。')]
    [('鸢', '2012', '日本', '剧情', '日语', '中文', '2012-01-07(日本)', '�|原登城 Tojo  Kajihara', '昭和37年的广岛备后市，在运输公司工作的阿安（阿部宽 饰） 得知爱妻美佐子（麻生久美子  饰）怀孕后狂喜不已。由于阿安小时候便没有父母，最大的心愿就是建立自己的家庭，儿子旭的出生更让他感到无比幸福。可是好景不常，美佐子突然意外去世。悲伤消沉的阿安在好友们支持下决定振作起来，笨拙地独自将儿子扶养长大。为了不让旭知道母亲死亡的真相，阿安对旭撒了个大谎。时光流逝，成绩优异的旭（北村匠海  饰）考上东京的大学，阿安虽然不舍父子分隔两地，但嘴里却说「在独当一面前都不准回来」。多年后，父子两人终于再次见面&hellip;')]
    [('金发梦露/金发女郎/金发美人', '2022', '美国', '剧情/传记', '英语', '中英双字', '2022-09-08(威尼斯电影节)  / 2022-09-16(美国) / 2022-09-28(美国网络)', '安德鲁&middot;多米尼克 Andrew  Dominik', '《金发梦露》改编自乔伊思&middot;卡罗尔&middot;奥特兹的畅销小说，大胆地再现了好莱坞最不朽的偶像之一玛丽莲&middot;梦露的生活。从她作为诺玛&middot;简的动荡童年，到她的明星地位和爱情纠葛，《金发梦露》模糊了事实和虚构的界限，探索了她的公众自我和私人自我之间日益扩大的割裂。该片由安德鲁&middot;多米尼克担任编剧和导演，由安娜&middot;德&middot;阿玛斯领衔主演，其他演员阵容包括鲍比&middot;坎纳瓦尔、艾德里安&middot;布洛迪、朱丽安妮&middot;尼科尔森、泽维尔&middot;塞缪尔和埃文&middot;威廉斯。')]