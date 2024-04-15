---
title: Scrapy
titleTemplate: Python笔记
---

## 1. 介绍
速度快、简单、可扩展性、流行

组成部分：engine引擎、spider爬虫、downloader下载器、scheduler调度器、pipeline管道
<br>工作流程：（1）spider中有起始url，封装成requests对象后传给engine，再传给scheduler
<br>&emsp;&emsp;&emsp;&emsp;&emsp;（2）scheduler——请求队列/url容器，传给engine，再传给downloader
<br>&emsp;&emsp;&emsp;&emsp;&emsp;（3）downloader执行请求，封装返回响应为response对象，传给engine
<br>&emsp;&emsp;&emsp;&emsp;&emsp;（4）engine把response对象传给spider，解析
<br>&emsp;&emsp;&emsp;&emsp;&emsp;（5）spider把解析结果传给engine，如果解析出数据则传给pipeline存储数据，解析出url则再给scheduler

需要自己写的部分：spider（给出初始url以及进行response解析）和pipeline（数据存储），其他的不需要

## 2. 基本步骤：
<br>（1）切换到指定目录，创建项目，<b>scrapy startproject p</b>，p是项目名称
<br>&emsp;&emsp;生成p项目文件夹，内有p根目录文件夹、scrapy.cfg文件，p根目录中含pipelines.py（管道部分）、settings.py（全局配置部分）等文件
<br><br>（2）进入项目，再进入根目录，<b>cd p/p</b>
<br><br>（3）创建爬虫，<b>scrapy genspider spider1 4399.com</b>，spider1爬虫名，4399.com是域名
<br>&emsp;&emsp;在根目录下文件夹中生成spiders文件夹，内含spider1.py（爬虫部分）等文件
<br><br>（4）可以在spider1.py中修改strat_urls，改成具体要抓取的页面

<br><br>（5）
<br>&emsp;&emsp;对数据进行解析，在spider1.py中的parse(response)方法中解析，父类方法重写
<br>&emsp;&emsp;<b>def parse(self,response):</b>中
<br>&emsp;&emsp;&emsp;&emsp;<b>response.text</b>，拿页面源代码
<br>&emsp;&emsp;&emsp;&emsp;<b>response.css()</b>，css解析，如<b>tr.css('.chartBall01::text').extract()</b>取类名包含chartBall01的tr标签的文本
<br>&emsp;&emsp;&emsp;&emsp;<b>response.xpath()</b>，xpath解析，和lxm中的xpath有区别，比如这个class有多个值，只要用一个值就能被选上
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;一次性提取所有/text()或/@href，返回的是Select对象构成的列表
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;后面加<b>.extract()</b>可以提取出文本/属性值，返回<b>列表</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;后面加<b>.extract_first()</b>可以提取出第一个文本/属性值，返回<b>值</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;先提取出每个li，再遍历，每次提取/text()或/@href，每次返回的是一个Select对象构成的列表
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;后面加<b>.extract()</b>可以提取出文本/属性值，每次返回<b>长度为1的列表</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;后面加<b>.extract_first()</b>可以提取出第一个文本/属性值（本来就只有一个），返回<b>值</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;.extract_first()优点：不存在则返回None，不会报错
<br>&emsp;&emsp;&emsp;&emsp;.css()可与.xpath()混合用，先xpath找到所有li，再遍历，每个用css找到具体标签
<br><br>&emsp;&emsp;&emsp;&emsp;<b>yield 返回数据</b>，类型必须是<b>request</b>或<b>item</b>或<b>None</b>，交给engine，再把数据交给pipeline进行持久化存储，把请求交给scheduler
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;可以给管道直接传字典，但不严谨最好别传
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;None是空
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;items是自定义的返回数据的结构，在<b>items.py</b>中配置
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;items.py的类中写入<b>name = scrapy.Field()   qihao=scrapy.Field()</b>，自定义key，相当于字典的key，可定义多个；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;需要在spider1.py中导包,<b>from p.items import PItem</b>，从根目录p下的items.py文件中导入里面那个定义了item的类；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;在spider1.py中初始化一个item，<b>tmp=PItem()</b>；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;把变量信息传给它，<b>tmp['name']=var1   tmp['qihao']=qihao</b>；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;把它传给管道<b>yield tmp</b>，可以每次遍历时就传
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;传request请求
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>yield scrapy.Request(url=xxx,method='get',callback=self.parse_page)</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;method还可以'post'
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;callback是回调函数（等这个请求传回来时用谁处理，这里是同一个类中的parse_page方法，参数和parse一样，里面需要再自己写）
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;最后在def parse_page: 中yield数据到管道

<br>&emsp;&emsp;&emsp;&emsp;循环读取下一页，可以找到页面源代码中下一页的a标签的href链接，需要拼接则拼接，再访问；
<br>&emsp;&emsp;&emsp;&emsp;确定是否是最后一页，判断条件；
<br>&emsp;&emsp;&emsp;&emsp;并把这次的链接封装成scrapy.Request()，callback是self.parse

<br><br><br>&emsp;&emsp;如果要模拟登录，需要在spider1.py的类中对<b>def start_requests(self):</b>方法进行重写
<br>&emsp;&emsp;&emsp;&emsp;可以携带cookie进行登录。返回<b>yield scrapy.Request(url=self.start_url[0],cookie=dic)</b>，
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cookie的形式是<b>字典</b>，可以在登录了的网站上拿到cookie字符串再分割再组合成字典
<br>&emsp;&emsp;&emsp;&emsp;也可以携带账号密码登录。返回<b>yield scrapy.Request(url=url,method='post',body='loginName=12331&password=1231123',callback=self.parse)</b>，看具体网站的格式

<br><br>（6）在pipelines.py中完成数据存储，初始一个类，可以自己加类，一个类表示一个管道；
<br>&emsp;&emsp;&emsp;每个类中的方法名和参数process_item(self,item,spider):固定不能改，item表示spider.py返回的数据，spider是爬虫；
<br>&emsp;&emsp;&emsp;每个类方法可以设置返回值给下一个管道，没返回值则下一个管道收不到数据；
<br><br>&emsp;&emsp;&emsp;数据存储方案：存为csv、xlsx、存到myaql数据库、存到mongodb数据库、存到本地

<br>&emsp;&emsp;写入文件：
<br>&emsp;&emsp;&emsp;类中写<b>def open_spider(self,spider): xxxxxx</b>方法，表示在开始时要执行的操作
<br>&emsp;&emsp;&emsp;类中写<b>def close_spider(self,spider): xxxxxx</b>方法，表示在结束时要执行的操作
<br>&emsp;&emsp;&emsp;用途：开始方法中，定义<b>self.list=[]</b>或打开个文件<b>self.f=open()</b>，也可以在process_item类的初始化<b>def \_\_init\_\_(self):</b>中进行
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;之后在process_item中每次append或者往文件中写入
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;结束方法中，在close_spider中将列表存为xlsx或关闭打开的文件

<br>&emsp;&emsp;起始只有一个管道：
<br>&emsp;&emsp;<b>class 类名:
<br>&emsp;&emsp;&emsp;&emsp;def process_item(self,item,spider):
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;return item</b>

<br>&emsp;&emsp;下载图片：
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;需要先导入<b>from scrapy.pipelines.images import ImagesPipeline</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;在settings中添加配置，表示保存路径文件夹，如<b>IMAGES_STORE='D:/桌面/python/爬虫/data/scrapy'</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;在pipelines.py中添加一个类，继承ImagesPipeline，类名自定义，并在该类中重写三个方法
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;下载图片，<b>def get_media_requests(self,item,info):return scrapy.Request(url)</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;这里的url是上一个管道传来的参数item（图片url）里面获取的
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;准备文件路径，<b>def file_path(self, request, response=None, info=None, *, item=None): path='xxxx' return path</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;图片名可以根据request.url.split['/'][-1]获取
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;上面的配置路径+这里的路径，构成了图片保存的总路径
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;返回文件详细信息，<b>def item_completed(self,results,item,info):</b>可以打印下载信息
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;results的构成：<b>[(下载成功与否,{url,path,chechsum,status})]</b>，后面四个都是键值对
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;在settings中为添加的类（新的管道）设置优先级

<br><br>（7）在settings.py中对pipeline进行生效设置
<br>&emsp;&emsp;不同类（管道）的优先级-值越小优先级越高，越先执行
<br>&emsp;&emsp;<b>ITEM_PIPELINES={"项目名.pipelines.管道类1名":300,"项目名.pipelines.管道类2名":299}</b>
<br><br>（8）运行爬虫
<br>&emsp;&emsp;终端，<b>scrapy crawl spider1</b>，spider1是爬虫名

<br><br>注意：
<br>&emsp;&emsp;在settings.py中设置<b>LOG_LEVEL="WARNING"</b>，只显示WARING及以上的日志，不然显示的太多
<br>&emsp;&emsp;日志级别：DEBUG、INFO、WARNING、ERROR、CRITICAL
<br><br>&emsp;&emsp;settings.py中默认<b>ROBOTSTXT_OBEY=True</b>，表示遵守robots.txt，设置为False不遵守
<br><br>&emsp;&emsp;可以在spider1.py中<b>def parse(self,response,**kwargs):</b>，表示和父类中的参数一致，不加有可能警告但不影响
<br>&emsp;&emsp;形参response的名字可以随便取，该方法内都用该名字就行


```python
import scrapy
scrapy.__version__
```


