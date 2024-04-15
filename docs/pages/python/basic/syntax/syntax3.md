---
title: 基本语法3
titleTemplate: Python笔记
---


## 7. 文件和数据格式化

（1）文件的使用
<br/>&emsp;&emsp;文件是数据的抽象和集合
<br/>&emsp;&emsp;所有文件都是以二进制0、1形式存储，都可以以二进制方式打开。有统一编码的叫文本文件，没的叫二进制文件。

（2）文件的打开和关闭：
<br/>&emsp;&emsp;把文件变成占用状态，该程序可以唯一的、排他的进行处理。
<br/>&emsp;&emsp;<b>f=open(文件路径,打开模式)</b>，f：文件句柄，不指定模式默认只读。
<br/>&emsp;&emsp;&emsp;&emsp;路径可以是绝对路径/相对路径，python中\是转义符，路径中\要替换为/或\\。
<br/>&emsp;&emsp;&emsp;&emsp;文件打开模式：
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;r：默认值，只读，如果不存在则返回FileNotFoundError，可以有try except捕捉
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;w：覆盖写模式，文件不存在则创建，<b>存在则完全覆盖，原有内容清空</b>
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;x：创建写模式，文件不存在则创建，存在则返回FileExistsError
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;a：追加写模式，文件不存在则创建，存在则在文件后面追加内容
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;b：二进制文件模式
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;t：文本文件模式，默认
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+：与r/w/x/a一同使用，在原功能基础上增加同时读写功能
<br/>&emsp;&emsp;<b>f.close()</b>，关闭文件

&emsp;&emsp;<b>with open(path,'r') as f:</b>，后面缩进对文件进行操作，会自动关闭不用手动

（3）文件内容的读取
<br/>&emsp;&emsp;<b>f.read()</b>，默认参数size=-1读入全部内容，把整个文本读取为一个字符串。如果指定size则读入size长度
<br/>&emsp;&emsp;<b>f.readline()</b>，读入一行，结果为字符串，默认参数size=-1，如果指定size则读入size长度
<br/>&emsp;&emsp;<b>f.readlines()</b>，读入所有行，结果为一个列表，每行是列表的一个元素，默认参数hint=-1。如果后面加索引或切片则读入指定行。可以用<b>for line in f.readlines()</b>循环遍历每行
<br/>&emsp;&emsp;<b>f.read().count('abc')、f.read().count('abc')、f.readline.count('abc')</b>，计数整个文档中、某行、整个文档中字符串abc出现的次数
<br/>&emsp;&emsp;<b>f.read.strip()</b>去除开头和结尾的空格和换行符，<b>f.read().replace('a','b')</b>，把读到的'a'都换成'b'

（4）文件的写入
<br/>&emsp;&emsp;<b>f.write(s)</b>，向文件写入一个字符串或字节流
<br/>&emsp;&emsp;<b>f.writelines(lines)</b>，将一个元素全为字符串的<b>列表</b>写入文件，不换行
<br/>&emsp;&emsp;<b>f.seek(offset)</b>，改变当前文件操作指针的位置，offset值：0回到文件开头，1在当前位置，2去文件结尾

<br/>&emsp;&emsp;用<b>try:    except:   </b>捕获处理所有异常。except可捕获指定异常，如<b>except NameError as e</b>:捕获命名异常；捕获多个异常，异常用括号括起来，逗号分隔；可以不用写<b>as e</b>，写了可以在后面打印出异常信息
<br/>&emsp;&emsp;<b>except Exception as e:</b>捕获所有异常，和不指定异常类型效果一样
<br/>&emsp;&emsp;后面可以再加<b>else:</b>，如果没出现异常则执行
<br/>&emsp;&emsp;可以加<b>finally:</b>，最后都要执行的语句，可用于关闭文件

```python
f=open('test/remotesensing.txt',encoding='utf-8')
d=f.read()
d.count('遥感')
d.replace('遥感','RS')

f=open('test/remotesensing.txt',encoding='utf-8')
f.readlines()
```

    8


    'RS泛指一切不直接接触、远距离观测而获取物体的属性等的一门技术。\n以电磁波为载体的远距离探测感知技术。\n定量RS、RS物理、RS原理与方法、微波RS、海洋RS、极地RS、激光雷达RS\n追加的行\n追加的行'


    ['遥感泛指一切不直接接触、远距离观测而获取物体的属性等的一门技术。\n',
     '以电磁波为载体的远距离探测感知技术。\n',
     '定量遥感、遥感物理、遥感原理与方法、微波遥感、海洋遥感、极地遥感、激光雷达遥感\n',
     '追加的行\n',
     '追加的行']

```python
#以文本形式打开txt
with open('test/remotesensing.txt','rt',encoding='utf-8') as f:
    a=f.readline()
a

bf=open('test/remotesensing.txt','rt',encoding='utf-8')
print(bf.readline())
bf.close()
```

    '遥感泛指一切不直接接触、远距离观测而获取物体的属性等的一门技术。\n'


    遥感泛指一切不直接接触、远距离观测而获取物体的属性等的一门技术。
    
    

```python
#以二进制形式打开txt
bf=open('test/remotesensing.txt','rb')
print(bf.readline())
bf.close()
```

    b'\xe9\x81\xa5\xe6\x84\x9f\xe6\xb3\x9b\xe6\x8c\x87\xe4\xb8\x80\xe5\x88\x87\xe4\xb8\x8d\xe7\x9b\xb4\xe6\x8e\xa5\xe6\x8e\xa5\xe8\xa7\xa6\xe3\x80\x81\xe8\xbf\x9c\xe8\xb7\x9d\xe7\xa6\xbb\xe8\xa7\x82\xe6\xb5\x8b\xe8\x80\x8c\xe8\x8e\xb7\xe5\x8f\x96\xe7\x89\xa9\xe4\xbd\x93\xe7\x9a\x84\xe5\xb1\x9e\xe6\x80\xa7\xe7\xad\x89\xe7\x9a\x84\xe4\xb8\x80\xe9\x97\xa8\xe6\x8a\x80\xe6\x9c\xaf\xe3\x80\x82\r\n'
    

```python
f=open('test/remotesensing.txt','r',encoding='utf-8')
f.read()
f.close()
```

    '遥感泛指一切不直接接触、远距离观测而获取物体的属性等的一门技术。\n以电磁波为载体的远距离探测感知技术。\n定量遥感、遥感物理、遥感原理与方法、微波遥感、海洋遥感、极地遥感、激光雷达遥感\n追加的行\n追加的行'

```python
f=open('test/remotesensing.txt','r',encoding='utf-8')
f.readlines()[1]
f.close()
```

    '以电磁波为载体的远距离探测感知技术。\n'

```python
f=open('test/remotesensing.txt','r',encoding='utf-8')
#逐行处理
for line in f.readlines():
    print(line)
f.close()
```

    遥感泛指一切不直接接触、远距离观测而获取物体的属性等的一门技术。
    
    以电磁波为载体的远距离探测感知技术。
    
    定量遥感、遥感物理、遥感原理与方法、微波遥感、海洋遥感、极地遥感、激光雷达遥感
    
    追加的行
    
    追加的行
    

```python
f=open('test/remotesensing.txt','a+',encoding='utf-8')

#文末追加字
f.write('\n追加的行')

#读一行，由于在文末，啥也没读到
f.readline()

#文件开头读取，再用别的位置记得改回来
f.seek(0)
f.readline()

f.close()
```

    5


    ''


    0


    '遥感泛指一切不直接接触、远距离观测而获取物体的属性等的一门技术。\n'

```python
data=[]
f=open('test/玉山.txt','rt',encoding='utf-8')
for line in f.readlines()[1:]:
    data.append(line.strip().split('\t'))
data[:10]
```

    [['2020-07-01T00:00', '23.489', '120.952', '609'],
     ['2020-07-01T00:01', '23.489', '120.952', '579'],
     ['2020-07-01T00:02', '23.489', '120.952', '617'],
     ['2020-07-01T00:03', '23.489', '120.952', '622'],
     ['2020-07-01T00:04', '23.489', '120.952', '625'],
     ['2020-07-01T00:05', '23.489', '120.952', '624'],
     ['2020-07-01T00:06', '23.489', '120.952', '632'],
     ['2020-07-01T00:07', '23.489', '120.952', '642'],
     ['2020-07-01T00:08', '23.489', '120.952', '642'],
     ['2020-07-01T00:09', '23.489', '120.952', '651']]

```python
date=[]
latitude=[]
longitude=[]
NSSR=[]
for i in data:
    date.append(i[0])
    latitude.append(i[1])
    longitude.append(i[2])
    NSSR.append(i[3])
date[:5]
latitude[:5]
longitude[:5]
NSSR[:5]
```

    ['2020-07-01T00:00',
     '2020-07-01T00:01',
     '2020-07-01T00:02',
     '2020-07-01T00:03',
     '2020-07-01T00:04']


    ['23.489', '23.489', '23.489', '23.489', '23.489']


    ['120.952', '120.952', '120.952', '120.952', '120.952']


    ['609', '579', '617', '622', '625']


（5）自动轨迹绘制
<br/>&emsp;&emsp;根据脚本绘制图形，读取文件中的坐标绘制图形，程序与文件通过接口对应
<br/>&emsp;&emsp;<b>map( , )</b>，内嵌函数，将第一个参数的功能作用于第二个参数的每一个元素。第一个参数是函数，第二个参数是迭代类型

```python
import turtle as t
t.title('自动轨迹绘制')
t.setup(800,600,0,0)
t.pencolor('red')
t.pensize(5)

#打开文件，解析每行数据
#每行格式自定义为行进距离、画完转向标志（0左1右）、转向角度、颜色通道R、颜色通道G、颜色通道B
datals=[]
f=open('test/track.txt','r')
for line in f:
    line=line.replace('\n','')#去掉换行符
    datals.append(list(map(eval,line.split(','))))
    
#绘图
for i in range(len(datals)):
    t.pencolor(datals[i][3],datals[i][4],datals[i][5])
    t.speed(10)
    t.fd(datals[i][0])
    t.right(datals[i][2]) if datals[i][1] else t.left(datals[i][2])
    
t.done()
```

```python
l=[1,2,-3,4,-5]
l
[i**2 for i in l]
list(map(lambda x:x**2,l))
list(map(abs,l))
```

    [1, 2, -3, 4, -5]


    [1, 4, 9, 16, 25]


    [1, 4, 9, 16, 25]


    [1, 2, 3, 4, 5]


（6）一维数据格式化
<br/>&emsp;&emsp;一维数据对应列表、数组、集合等概念
<br/>&emsp;&emsp;一维数据的表示：
<br/>&emsp;&emsp;&emsp;&emsp;有序：列表，可以用for循环遍历
<br/>&emsp;&emsp;&emsp;&emsp;无序：集合，for循环遍历

&emsp;&emsp;一维数据的存储：
<br/>&emsp;&emsp;&emsp;&emsp;空格分隔，逗号分隔，其他符号分隔，符号组合分隔。不能出现用来分隔的字符

&emsp;&emsp;一维数据的处理：
<br/>&emsp;&emsp;&emsp;&emsp;

```python
l='1$2$3$4$5$6$7'
l.split('$')
list(map(eval,l.split('$')))
```

    ['1', '2', '3', '4', '5', '6', '7']


    [1, 2, 3, 4, 5, 6, 7]

```python
#l中除最后一个元素外的所有元素后面都加上s
l='12345'
s=','
s.join(l)
```

    '1,2,3,4,5'


（7）二维数据格式化
<br/>&emsp;&emsp;二维数据的表示：二维列表，两层for循环遍历

&emsp;&emsp;CSV(Comma-Separated Values，用逗号分隔值)格式：
<br/>&emsp;&emsp;&emsp;&emsp;如果某个元素缺失，逗号仍要保留
<br/>&emsp;&emsp;&emsp;&emsp;二维数据的表头可以作为数据存储，也可以另行存储
<br/>&emsp;&emsp;&emsp;&emsp;逗号为英文半角逗号，逗号与数据之间无额外空格

&emsp;&emsp;二维数据的存储：
<br/>&emsp;&emsp;&emsp;&emsp;一般<b>l[row][column]</b>，先行后列索引

&emsp;&emsp;二维数据的处理：
<br/>&emsp;&emsp;&emsp;&emsp;

```python
#读入
f=open('test/two.csv')
ls=[]
for line in f:
    line=line.replace('\n','')
    ls.append(line.split(','))
f.close()
ls
```

    [[''], [''], ['']]

```python
ls
```

    [[1, 2], [3, 4], [5, 6]]

```python
#写入
ls=[[],[],[]]
f=open('test/two.csv','w')
for item in ls:
    f.write(','.join(item)+'\n')
f.close()
```

    1


    1


    1

```python
#遍历
import time
ls=[[1,2],[3,4],[5,6]]
for row in ls:
    for column in row:
        print('\r',column,end='')
        time.sleep(0.5)
```

     6

（8）wordcloud库
<br/>&emsp;&emsp;将一段文本变成词云，根据文本中词语出现的频率等参数绘制词云，形状尺寸颜色可以设定。
<br/>&emsp;&emsp;需安装，anaconda不自带，把词云当作一个WordCloud对象

&emsp;&emsp;步骤：
<br/>&emsp;&emsp;&emsp;&emsp;以空格分隔单词
<br/>&emsp;&emsp;&emsp;&emsp;统计单词出现次数并过滤
<br/>&emsp;&emsp;&emsp;&emsp;根据出现次数配置字号
<br/>&emsp;&emsp;&emsp;&emsp;颜色环境尺寸布局

&emsp;&emsp;<b>c=wordcloud.WordCloud()</b>，生成词云对象，<b>鼠标光标移到函数上按shift+tabs查看函数详情</b>，可以指定属性：
<br/>&emsp;&emsp;&emsp;&emsp;宽高默认400px*200px，可以指定宽<b>width=600</b>，高<b>height=400</b>
<br/>&emsp;&emsp;&emsp;&emsp;字体默认最小4号，可以指定字体最小<b>min_font_size=10</b>，最大<b>max_font_size=20</b>
<br/>&emsp;&emsp;&emsp;&emsp;<b>font_step</b>，指定词云中字体字号的步进间隔，默认为1
<br/>&emsp;&emsp;&emsp;&emsp;<b>font_path</b>，指定字体文件的路径，默认None，如微软雅黑<b>font_path='test/msyh.ttc'</b>、华文行楷<b>font_path='test/STXINGKA.TTF</b>
<br/>&emsp;&emsp;&emsp;&emsp;<b>max_words</b>，词云中显示的最大单词数量，默认200
<br/>&emsp;&emsp;&emsp;&emsp;<b>stopwords</b>，排除词列表，即不显示的单词<b>列表</b>
<br/>&emsp;&emsp;&emsp;&emsp;<b>mask</b>，指定词云形状，默认长方形，需要引用imread()函数导入图片，像素值为0的地方会显示，为255不显示
<br/>&emsp;&emsp;&emsp;&emsp;<b>background_color</b>，背景颜色，默认黑色

&emsp;&emsp;<b>c.generate(txt)</b>，向WordCloud对象w中加载文本txt，txt是字符串
<br/>&emsp;&emsp;<b>c.to_file(filename)</b>，将词云输出为图像文件，.png或.jpg


```python
import wordcloud
#配置词云对象
c=wordcloud.WordCloud()
#加载词云文本
c.generate('wordcloud by python')
#输出词云文件，默认宽400px，高200px
c.to_file('test/worldcloud.jpg')
```

    <wordcloud.wordcloud.WordCloud at 0x261800a67d0>


    <wordcloud.wordcloud.WordCloud at 0x261800a67d0>

```python
import wordcloud
txt='life is short, you need python'
w=wordcloud.WordCloud(background_color='blue')
w.generate(txt)
w.to_file('test/worldcloud1.png')
```

    <wordcloud.wordcloud.WordCloud at 0x2619003f880>


    <wordcloud.wordcloud.WordCloud at 0x2619003f880>

```python
#中文词云，先把中文形成空格分隔的字符串，再生成词云
import wordcloud
import jieba

txt='遥感是是指非接触的，远距离的探测技术。一般指运用传感器/遥感器对物体的电磁波的辐射、\
反射特性的探测。遥感是通过遥感器这类对电磁波敏感的仪器，在远离目标和非接触目标物体条件下\
探测目标地物。环境遥感、大气遥感、资源遥感、海洋遥感、地质遥感、农业遥感、林业遥感等。'
w=wordcloud.WordCloud(width=1000,font_path='test/STXINGKA.TTF',height=700,background_color='cyan',max_words=12)
w.generate(' '.join(jieba.lcut(txt)))
w.to_file('test/rs.jpg')
```

    <wordcloud.wordcloud.WordCloud at 0x2619003f820>


    <wordcloud.wordcloud.WordCloud at 0x2619003f820>


报告文件词云，两段文本地址：
<br/>&emsp;&emsp;https://python123.io/resources/pye/新时代中国特色社会主义.txt
<br/>&emsp;&emsp;https://python123.io/resources/pye/关于实施乡村振兴战略的意见.txt

```python
import jieba
import wordcloud
f=open('test/新时代中国特色社会主义.txt','r',encoding='utf-8')
t=f.read()
f.close()

w=wordcloud.WordCloud(font_path='test/msyh.ttc',width=1000,height=700,\
                     background_color='white',stopwords=['和','的','是','在'],\
                     max_words=20)
w.generate(' '.join(jieba.lcut(t)))
w.to_file('test/grwordcloud1.png')
```

    Building prefix dict from the default dictionary ...
    Loading model from cache C:\Users\86188\AppData\Local\Temp\jieba.cache
    Loading model cost 0.659 seconds.
    Prefix dict has been built successfully.
    

    <wordcloud.wordcloud.WordCloud at 0x1808d99b070>

```python
import jieba
import wordcloud
f=open('test/关于实施乡村振兴战略的意见.txt','r',encoding='utf-8')
t=f.read()
f.close()

w=wordcloud.WordCloud(font_path='test/msyh.ttc',width=1000,height=700,\
                     background_color='white',stopwords=['和','的'],\
                     max_words=20)
w.generate(' '.join(jieba.lcut(t)))
w.to_file('test/grwordcloud2.png')
```

    <wordcloud.wordcloud.WordCloud at 0x1809039f400>

```python
#绘制圆形和椭圆形mask
import cv2
import numpy as np
a=np.ones((1000,1000))*255
b=np.ones((1000,1000))*255
cv2.circle(a,(500,500),400,(0,0,0),-1)
cv2.imshow('a',a)
cv2.waitKey(0)
cv2.destroyAllWindows()

cv2.ellipse(b,(500,500),(400,200),60,0,360,(0,0,0),-1)
cv2.imshow('b',b)
cv2.waitKey(0)
cv2.destroyAllWindows()

cv2.imwrite('test/bg1.png',a)
cv2.imwrite('test/bg2.png',b)
```

    array([[255., 255., 255., ..., 255., 255., 255.],
           [255., 255., 255., ..., 255., 255., 255.],
           [255., 255., 255., ..., 255., 255., 255.],
           ...,
           [255., 255., 255., ..., 255., 255., 255.],
           [255., 255., 255., ..., 255., 255., 255.],
           [255., 255., 255., ..., 255., 255., 255.]])


    -1


    array([[255., 255., 255., ..., 255., 255., 255.],
           [255., 255., 255., ..., 255., 255., 255.],
           [255., 255., 255., ..., 255., 255., 255.],
           ...,
           [255., 255., 255., ..., 255., 255., 255.],
           [255., 255., 255., ..., 255., 255., 255.],
           [255., 255., 255., ..., 255., 255., 255.]])


    -1


    True


    True

```python
#生成指定形状
import imageio.v2 as imageio
import jieba
import wordcloud

mask=imageio.imread('test/bg1.png')
f=open('test/新时代中国特色社会主义.txt','r',encoding='utf-8')
t=f.read()
f.close()

w=wordcloud.WordCloud(font_path='test/msyh.ttc',width=1000,height=700,\
                     background_color='white',stopwords=['和','的','是','在'],\
                     mask=mask)
w.generate(' '.join(jieba.lcut(t)))
w.to_file('test/grwordcloud3.png')
```

    <wordcloud.wordcloud.WordCloud at 0x261800a7eb0>


    <wordcloud.wordcloud.WordCloud at 0x261800a7eb0>

```python
import cv2
import jieba
import wordcloud

mask=cv2.imread('test/bg2.png')
f=open('test/关于实施乡村振兴战略的意见.txt','r',encoding='utf-8')
t=f.read()
f.close()

w=wordcloud.WordCloud(font_path='test/msyh.ttc',width=1000,height=700,\
                     background_color='white',stopwords=['和','的'],\
                     mask=mask)
w.generate(' '.join(jieba.lcut(t)))
w.to_file('test/grwordcloud4.png')
```

    <wordcloud.wordcloud.WordCloud at 0x261fbdebaf0>


    <wordcloud.wordcloud.WordCloud at 0x261fbdebaf0>

```python

```

## 8. 程序设计方法学

（1）体育竞技分析
<br/>&emsp;&emsp;模拟比赛过程，分析比赛结果

&emsp;&emsp;自顶向下（设计）：复杂大问题分解为若干个小问题逐个解决

&emsp;&emsp;自底向上（执行）：分单元测试，逐步组装复杂系统

&emsp;&emsp;步骤：
<br/>&emsp;&emsp;（1）打印程序的介绍性信息式
<br/>&emsp;&emsp;（2）用户输入运行参数：A、B的能力值，比赛场数
<br/>&emsp;&emsp;（3）模拟n局比赛
<br/>&emsp;&emsp;（4）输出A和B获胜场次和概率

```python
#A和B，五局三胜，15分胜一局
from random import random
import time

#打印介绍内容
def printIntro():
    print('这个程序模拟两个选手A和B的某种比赛')
    print('程序运行需要A和B的能力值（以0到1之间的小数表示）')

#获得用户输入，返回元组类型
def getInputs():
    a=eval(input('输入选手A的能力值（0-1）：'))
    b=eval(input('输入选手B的能力值（0-1）：'))
    n=eval(input('输入需要模拟比赛的场次：'))
    return a,b,n

#判断比赛是否结束
def gameOver(a,b):
    return a==15 or b==15

#模拟一局比赛
def sinOneGame(probA,probB):
    scoreA,scoreB=0,0
    serving='A'#发球者
    while not gameOver(scoreA,scoreB):
        if serving == 'A':
            if random() < probA:
                scoreA += 1
            else:
                serving = 'B'
        else:
            if random() < probB:
                scoreB += 1
            else:
                serving = 'A'

    return scoreA,scoreB
            
#模拟n场比赛
def simNGames(n,probA,probB):
    winsA,winsB=0,0
    for i in range(n):
        scoreA,scoreB=sinOneGame(probA,probB)
        if scoreA>scoreB:
            winsA+=1
        else:
            winsB+=1
        print('\r分析进度：{:^20.3f}%'.format((i+1)*100/n),end='')
        if (i+1)%10==0:
            time.sleep(0.05)
    return winsA,winsB
    
#打印结果
def printSummary(winsA,winsB):
    n=winsA+winsB
    print('\n共模拟{}场比赛'.format(n))
    print('选手A获胜{}场比赛，胜率{:0.1%}'.format(winsA,winsA/n))
    print('选手B获胜{}场比赛，胜率{:0.1%}'.format(winsB,winsB/n))

def main():
    printIntro()
    probA,probB,n=getInputs()
    winsA,winsB=simNGames(n,probA,probB)
    printSummary(winsA,winsB)
    
main()
```

    这个程序模拟两个选手A和B的某种比赛
    程序运行需要A和B的能力值（以0到1之间的小数表示）
    

    输入选手A的能力值（0-1）： 0.5
    输入选手B的能力值（0-1）： 0.6
    输入需要模拟比赛的场次： 1000
    

    分析进度：      100.000       %
    共模拟1000场比赛
    选手A获胜246场比赛，胜率24.6%
    选手B获胜754场比赛，胜率75.4%
    

（2）python程序设计思维
<br/>&emsp;&emsp;逻辑思维、实证思维、计算思维

```python

```

## 9. python计算生态概览

（1）从数据处理到人工智能
<br/>&emsp;&emsp;数据表示：采用合适的方式用程序表达数据
<br/>&emsp;&emsp;数据清洗：数据的归一化、数据转换、异常值处理
<br/>&emsp;&emsp;数据统计：数据的概要理解，数量、分布、中位数等
<br/>&emsp;&emsp;数据可视化：直观方式展示数据内涵
<br/>&emsp;&emsp;数据挖掘：从数据分析获得知识，产生数据外的价值
<br/>&emsp;&emsp;人工智能：数据/语言/图形/视觉等方面深度分析与决策

&emsp;&emsp;<b>PyPDF2</b>库，处理pdf文件，支持获取信息、分隔/整合文件、加密解密等

```python
#似乎不能用，输出的pdf打不开
from PyPDF2 import PdfReader,PdfMerger
merger=PdfMerger()
input1=open('test/2023硕士现实表现复审表1.pdf','rb')
input2=open('test/2023硕士现实表现复审表2.pdf','rb')
# merger.append(fileobj=input1,pages=(0,0))
# merger.merge(position=2,fileobj=input2,pages=(0,0))
merger.append(input1)
merger.append(input2)
output=open('test/merge.pdf','wb')
merger.write(output)
```

<br/>&emsp;&emsp;<b>NLTK</b>库，自然语言文本处理第三方库，支持语言文本分类、标记、语法句法、语义分析等

<br/>&emsp;&emsp;<b>Python-docx</b>创建或更新Microsoft Word文件的第三方库，增加配置段落、图片、表格、文字等

<br/>&emsp;&emsp;<b>Scikit-learn</b>库，机器学习方法工具集
<br/>&emsp;&emsp;&emsp;&emsp;提供统一化的机器学习方法功能接口，聚类、分类、回归、强化学习等

&emsp;&emsp;<b>TensorFlow</b>开源机器学习框架，将数据流图作为基础，图节点代表运算，边代表张量

&emsp;&emsp;<b>MXNet</b>，基于神经网络的深度学习计算框架
<br/>&emsp;&emsp;&emsp;&emsp;提供可扩展的神经网络及深度学习计算功能，可用于自动驾驶、机器翻译、语音识别等众多领域

（2）霍兰德人格分析雷达图
<br/>&emsp;&emsp;人格兴趣与职业之间应有一种内在的对应关系
<br/>&emsp;&emsp;人格分类：研究型、艺术型、社会型、企业型、传统型、现实型

&emsp;&emsp;需求：雷达图方式验证霍兰德人格分析
<br/>&emsp;&emsp;输入：各职业人群结合兴趣的调研数据
<br/>&emsp;&emsp;输出：雷达图

```python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib

matplotlib.rcParams['font.family'] = 'SimHei'

radar_labels = np.array(['研究型(I)', '艺术型(A)', '社会型(S)', '企业型(E)', '常规型(C)', '现实型(R)'])  # 雷达标签
nAttr = 6
data = np.array([[0.40, 0.32, 0.35, 0.30, 0.30, 0.88],
                 [0.85, 0.35, 0.30, 0.40, 0.40, 0.30],
                 [0.43, 0.89, 0.30, 0.28, 0.22, 0.30],
                 [0.30, 0.25, 0.48, 0.85, 0.45, 0.40],
                 [0.20, 0.38, 0.87, 0.45, 0.32, 0.28],
                 [0.34, 0.31, 0.38, 0.40, 0.92, 0.28]])  # 数据值
data_labels = ('艺术家', '实验员', '工程师', '推销员', '社会工作者', '记事员')
angles = np.linspace(0, 2 * np.pi, nAttr, endpoint=False)

fig = plt.figure(facecolor="white")
ax = fig.add_subplot(111, polar=True)

ax.plot(angles, data, 'o-', linewidth=1, alpha=0.2)
ax.fill(angles, data, alpha=0.25)

ax.set_xticks(angles)
ax.set_xticklabels(radar_labels, fontsize=8)

plt.figtext(0.52, 0.95, '霍兰德人格分析', ha='center', size=20)

legend = plt.legend(data_labels, loc=(0.94, 0.80), labelspacing=0.1)
plt.setp(legend.get_texts(), fontsize='large')

plt.grid(True)
plt.savefig('test/holland_radar.jpg')
plt.show()

```

    [<matplotlib.lines.Line2D at 0x2618f84ab30>,
     <matplotlib.lines.Line2D at 0x2618f84b3a0>,
     <matplotlib.lines.Line2D at 0x2618f84b460>,
     <matplotlib.lines.Line2D at 0x2618f84b550>,
     <matplotlib.lines.Line2D at 0x2618f84b640>,
     <matplotlib.lines.Line2D at 0x2618f84b730>]


    [<matplotlib.patches.Polygon at 0x2618f848a90>,
     <matplotlib.patches.Polygon at 0x2618f8480a0>,
     <matplotlib.patches.Polygon at 0x2618f849d80>,
     <matplotlib.patches.Polygon at 0x2618f848e50>,
     <matplotlib.patches.Polygon at 0x2618f848190>,
     <matplotlib.patches.Polygon at 0x2618f84b9a0>]


    [<matplotlib.projections.polar.ThetaTick at 0x2619020ed10>,
     <matplotlib.projections.polar.ThetaTick at 0x2619020f880>,
     <matplotlib.projections.polar.ThetaTick at 0x2618f160490>,
     <matplotlib.projections.polar.ThetaTick at 0x2618f161000>,
     <matplotlib.projections.polar.ThetaTick at 0x2618f1615d0>,
     <matplotlib.projections.polar.ThetaTick at 0x2618f162140>]


    [Text(0.0, 0, '研究型(I)'),
     Text(1.0471975511965976, 0, '艺术型(A)'),
     Text(2.0943951023931953, 0, '社会型(S)'),
     Text(3.141592653589793, 0, '企业型(E)'),
     Text(4.1887902047863905, 0, '常规型(C)'),
     Text(5.235987755982988, 0, '现实型(R)')]


    Text(0.52, 0.95, '霍兰德人格分析')


    [None, None, None, None, None, None, None, None, None, None, None, None]

    
![png](/pages/python/basic/syntax/images/holland.png)
    

（3）从Web解析到网络空间

&emsp;&emsp;网页爬取
<br/>&emsp;&emsp;&emsp;&emsp;<b>requests</b>库，页面级网络爬虫库
<br/>&emsp;&emsp;&emsp;&emsp;<b>Scrapy</b>库，
<br/>&emsp;&emsp;&emsp;&emsp;<b>pyspider</b>库，完整的网页爬取系统构建功能
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;支持数据库后端、消息队列、优先级、分布式架构等

&emsp;&emsp;页面解析
<br/>&emsp;&emsp;&emsp;&emsp;<b>BeautifulSoup</b>库，HTML和XML的解析库
<br/>&emsp;&emsp;&emsp;&emsp;<b>Re</b>库，正则表达式解析和处理功能库，不需要安装
<br/>&emsp;&emsp;&emsp;&emsp;<b>Python-Goose</b>库，提取文章类型Web页面的功能库，提取文章信息/视频

&emsp;&emsp;Web网站开发
<br/>&emsp;&emsp;&emsp;&emsp;<b>Django</b>，最流行的Web应用框架，MTV模式（模式Model、模板Template、视图View）
<br/>&emsp;&emsp;&emsp;&emsp;<b>Pyramid</b>，规模适中的Web应用框架
<br/>&emsp;&emsp;&emsp;&emsp;<b>Flask</b>，Web引用开发微框架

&emsp;&emsp;网络应用开发
<br/>&emsp;&emsp;&emsp;&emsp;<b>WeRoBot</b>库，微信公众号开发框架
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;提供解析微信服务器消息及反馈消息的功能
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;建立微信机器人的重要手段
<br/>&emsp;&emsp;&emsp;&emsp;<b>aip</b>，百度AI开放平台接口
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;提供访问百度AI服务的Python功能接口
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;语音、人脸、OCR、NLP、知识图谱、图像搜索等
<br/>&emsp;&emsp;&emsp;&emsp;<b>MyQR</b>，生成二维码（基本二维码、艺术二维码、动态二维码）


```python
from bs4 import BeautifulSoup
```

```python
import re
```

```python
from flask import Flask
app=Flask(__name__)
@app.route('/')
def hello_world():
    return 'Hello,World!'
```

（4）从人机交互到艺术设计

&emsp;&emsp;图形用户界面GUI
<br/>&emsp;&emsp;&emsp;&emsp;<b>PyQt5</b>，Qt开发框架的Python接口，成熟的跨平台桌面应用开发系统，完整工业链条
<br/>&emsp;&emsp;&emsp;&emsp;<b>wxPython</b>，跨平台GUI开发框架，专用于Python的跨平台开发框架
<br/>&emsp;&emsp;&emsp;&emsp;<b>PyGObjext</b>，使用GTK+开发GUI的功能库

&emsp;&emsp;游戏开发
<br/>&emsp;&emsp;&emsp;&emsp;<b>PyGame</b>，简单游戏开发库（最主要）
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;基于SDL简单游戏开发功能及实现引擎
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;理解游戏对外部输入的响应机制及角色构建和交互机制
<br/>&emsp;&emsp;&emsp;&emsp;<b>Panda3D</b>，开源、可跨平台的3D渲染和游戏开发库
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;3D游戏引擎，提供python和C++接口
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;现金特性：法线贴图、光泽贴图、卡通渲染等
<br/>&emsp;&emsp;&emsp;&emsp;<b>cocos2d</b>，构建2D游戏和图形界面交互式应用的框架
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;提供基于OpenGL的游戏开发图形渲染功能
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;支持GPU加速，采用树形结构分层管理游戏对象类型
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;适用于2D专业级游戏开发

&emsp;&emsp;虚拟现实
<br/>&emsp;&emsp;&emsp;&emsp;<b>VR Zero</b>，树莓派上开发VR应用的库
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;大量与VR开发相关的功能，支持设备小型化，配置简单化，适合初学者
<br/>&emsp;&emsp;&emsp;&emsp;<b>pyovr</b>，Oculus Rift的python开发接口，基于成熟VR蛇杯，提供全套文档，工业级应用设备
<br/>&emsp;&emsp;&emsp;&emsp;<b>Vizard</b>，基于Python的通用VR开发引擎，专业的企业级虚拟现实开发引擎，通用性，详细官方文档

&emsp;&emsp;图形艺术
<br/>&emsp;&emsp;&emsp;&emsp;<b>Quads</b>库，迭代的艺术
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;对图片进行四分迭代，形成像素风，可以生成动图或静图图像
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;简单易用，非常高的展示度
<br/>&emsp;&emsp;&emsp;&emsp;<b>acsii_art</b>，ASCII艺术库风格
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;将普通图片转换为ASCII艺术风格
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;输出纯文本或彩色文本，或图片格式
<br/>&emsp;&emsp;&emsp;&emsp;<b>turtle</b>，海龟绘图，加上随机数绘制Random Art

```python
#这个库装不上
import wx
app=wx.App(False)
frame=wx.Frame(None,wx.ID_ANY,'hello eorld')
frame.Show(True)
app.MainLoop()
```

    ---------------------------------------------------------------------------

    ModuleNotFoundError                       Traceback (most recent call last)

    Cell In[256], line 2
          1 #这个库装不上
    ----> 2 import wx
          3 app=wx.App(False)
          4 frame=wx.Frame(None,wx.ID_ANY,'hello eorld')
    

    ModuleNotFoundError: No module named 'wx'

（5）例子：玫瑰花绘制

```python
import turtle as t
# 定义一个曲线绘制函数
def DegreeCurve(n, r, d=1):
    for i in range(n):
        t.left(d)
        t.circle(r, abs(d))
# 初始位置设定
s = 0.2 # size
t.setup(450*5*s, 750*5*s)
t.pencolor("black")
t.fillcolor("red")
t.speed(100)
t.penup()
t.goto(0, 900*s)
t.pendown()
# 绘制花朵形状
t.begin_fill()
t.circle(200*s,30)
DegreeCurve(60, 50*s)
t.circle(200*s,30)
DegreeCurve(4, 100*s)
t.circle(200*s,50)
DegreeCurve(50, 50*s)
t.circle(350*s,65)
DegreeCurve(40, 70*s)
t.circle(150*s,50)
DegreeCurve(20, 50*s, -1)
t.circle(400*s,60)
DegreeCurve(18, 50*s)
t.fd(250*s)
t.right(150)
t.circle(-500*s,12)
t.left(140)
t.circle(550*s,110)
t.left(27)
t.circle(650*s,100)
t.left(130)
t.circle(-300*s,20)
t.right(123)
t.circle(220*s,57)
t.end_fill()
# 绘制花枝形状
t.left(120)
t.fd(280*s)
t.left(115)
t.circle(300*s,33)
t.left(180)
t.circle(-300*s,33)
DegreeCurve(70, 225*s, -1)
t.circle(350*s,104)
t.left(90)
t.circle(200*s,105)
t.circle(-500*s,63)
t.penup()
t.goto(170*s,-30*s)
t.pendown()
t.left(160)
DegreeCurve(20, 2500*s)
DegreeCurve(220, 250*s, -1)
# 绘制一个绿色叶子
t.fillcolor('green')
t.penup()
t.goto(670*s,-180*s)
t.pendown()
t.right(140)
t.begin_fill()
t.circle(300*s,120)
t.left(60)
t.circle(300*s,120)
t.end_fill()
t.penup()
t.goto(180*s,-550*s)
t.pendown()
t.right(85)
t.circle(600*s,40)
# 绘制另一个绿色叶子
t.penup()
t.goto(-150*s,-1000*s)
t.pendown()
t.begin_fill()
t.rt(120)
t.circle(300*s,115)
t.left(75)
t.circle(300*s,100)
t.end_fill()
t.penup()
t.goto(430*s,-1070*s)
t.pendown()
t.right(30)
t.circle(-600*s,35)
t.done()
```

```python

```
