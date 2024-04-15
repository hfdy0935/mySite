---
title: Selenium
titleTemplate: Python笔记
---

Selenium是一个用电脑模拟人操作浏览器网页，可以实现自动化，测试等，当然就也可以用于爬虫。
<br/>缺点很慢，通常需要等元素加载出来再下一步操作。
<br/><br/>可以爬取浏览器能显示但requests爬取不到的代码，显示在element(元素)模块

## 1. 用法

需要安装，<b>pip install selenium</b>
<br/>再装一个驱动程序才能打开浏览器，不同浏览器有不同驱动程序，部分参考https://blog.csdn.net/puspos/article/details/118437785

<b style='color:red'>打开浏览器，打开指定网页</b>
<br/><b>from selenium.webdriver import Chrome</b>，导入，也可以导入Edge、Firefox、Ie等等
<br/><b>web=Chrome(options=None,service=None,keep_alive=True)</b>，创建浏览器对象，括号里面不写参数也行
<br/>或者，<b>from selenium import webdriver</b>，再<b>web=webdriver.Chrome()</b>
<br/>&emsp;&emsp;web的类型是selenium.webdriver.edge.webdriver.WebDriver
<br/><b>web.get(url)</b>，用创建的浏览器对象打开url对应的页面

<br/><b style='color:red'>打开新空白页面，再转到另一个网站</b>
<br/><b>web.switch_to.new_window()、web.switch_to.new_window('tab')</b>，打开新空白标签页
<br/><b>web.switch_to_new_window('window')</b>，打开新空白窗口，这个和新建个<b>web=Chrome()</b>一样...
<br/><b>web.get(url)</b>，再新页访问url

<br/><b style='color:red'>切换selenium不同网页视角，不新建</b>
<br/>窗口句柄
<br/><b>web.switch_to.window(web.window_handles[-1])</b>，切换到最后一个页面，即刚打开的页面
<br/><b>web.switch_to.window(web.window_handles[0])</b>，切换到第一个页面

<br/><b style='color:red'>保存当前窗口的句柄</b>
<br/><b>mainWindow = web.current_window_handle</b>
<br/><b>web.switch_to.window(mainWindow)</b>，直接切回这个窗口

<br/><b style='color:red'>同一个网页中iframe切换视角</b>
<br/>网页里面嵌入一个网页，不切换拿不到iframe里面的内容
<br/>先根据元素定位找到iframe
<br/><b>web.switch_to.frame(iframe)</b>切换视角到该iframe下，此时只能获取到该iframe下的元素
<br/><b>web.switch_to.parent_frame()</b>回到父框架，回去之后能获取父框架的元素，获取不到子框架的元素
<br/>可嵌套多层

<br/><b style='color:red'>更细致的操作</b>，
<br/>模拟手机端，见后面

<br/><b style='color:red'>关闭</b>
<br/><b>web.close()</b>，关闭该页
<br/><b>web.quit()</b>，关闭浏览器

<br/><b style='color:red'>页面窗口操作</b>
<br/><b>web.get_window_size()</b>，获取窗口大小，返回字典
<br/><b>web.set_window_size(x,y)</b>，改变窗口大小
<br/><b>web.title</b>，获取页面标题栏的字符串
<br/><b>web.page_source</b>，获取页面代码（在浏览器环境中执行JS和CSS之后的代码，非requests拿到的源代码）
<br/><b>web.current_url</b>，获取当前窗口的url
<br/><b>web.refresh()</b>，更新窗口
<br/><b>web.get_screenshot_as_file('../data/tmp.png')</b>，网页截屏保存为图片
<br/><b>web.back()</b>，回退到上一个窗口
<br/><b>web.forward()</b>，下一个窗口
<br/><b>web.get_cookie</b>，拿到cookie，method形式；加括号，里面写具体值可以拿到对应具体值
<br/><b>web.get_cookies()</b>，拿到所有cookie，字典形式

<br/><b style='color:red'>选取网页中的元素</b>
<br/><b>from selenium.webdriver.common.by import By</b>
<br/><b>web.find_element(By.方法名, 'value')</b>，查找页面中第一个某元素，
<br/><b>web.find_elements(By.方法名, 'value')</b>，查找页面中所有某元素，返回<b>列表</b>
<br/>&emsp;&emsp;如：<b>web.find_element(By.ID, 'value')</b>，根据id查找
<br/>&emsp;&emsp;&emsp;&emsp;<b>web.find_element(By.CLASS_NAME, 'value')</b>，类名
<br/>&emsp;&emsp;&emsp;&emsp;<b>web.find_element(By.NAME, 'value')</b>，name属性
<br/>&emsp;&emsp;&emsp;&emsp;<b>web.find_element(By.TAG_NAME, 'value')</b>，标签名
<br/>&emsp;&emsp;&emsp;&emsp;<b>web.find_element(By.XPATH, 'value')</b>，xpath
<br/>&emsp;&emsp;&emsp;&emsp;<b>web.find_element(By.CSS_SELECTOR, '  ')</b>，css选择器
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;选择id属性，<b>#id值</b>；
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;选择class属性，<b>.class值</b>
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;选择其他属性，<b>[href="https://www.baidu.com"]</b>，或不用双引号，前面可以加标签名限制
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;选择具有多个指定属性的某标签，<b>div[name=n][class=c1]</b>
<br/>&emsp;&emsp;&emsp;&emsp;<b>......</b>

或者这样
<br/><b>web.find_element('方法名', 'value')</b>，查找页面中第一个某元素
<br/><b>web.find_elements('方法名', 'value')</b>，查找页面中所有某元素，返回<b>列表</b>
<br/>&emsp;&emsp;如：<b>web.find_element('id', 'value')</b>，根据id查找
<br/>&emsp;&emsp;&emsp;&emsp;<b>web.find_element('name', 'value')</b>，name属性
<br/>&emsp;&emsp;&emsp;&emsp;<b>web.find_element('xpath', 'value')</b>，xpath

<br/>&emsp;&emsp;&emsp;&emsp;<b>......</b>

<br/><br/>单个查找结果的类型是selenium.webdriver.remote.webelement.WebElement，
<br/>多个查找结果的类型是列表，每个元素类型是selenium.webdriver.remote.webelement.WebElement，
<br/><br/>对返回值还可以再次查找，注意xpath的路径<b>'./'</b>从当前结点开始找
<br/><br/>不能像xpath那样获取文本和标签属性，
<br/>&emsp;&emsp;如button是查找的结果，<b>button.text</b>获取文本、<b>button.get_attribute('属性名')</b>获取属性值
<br/>&emsp;&emsp;<b>button.tag_name</b>获取标签名、<b>button.id</b>获取id、<b>button.location</b>获取位置(字典先x后y)、<b>button.size</b>获取大小(字典先height后width)
<br/>&emsp;&emsp;<b>button.value_of_css_property('background')</b>，获取CSS属性
<br/>&emsp;&emsp;<b>button.is_displayed()</b>判断元素是否显示（True、False）、<b>button.get_property('outerHTML')</b>获取该标签显示的HTML
<br/>&emsp;&emsp;比如  ![png](/pages/python/network/spider/images/selenium-1.png)
<br/>&emsp;&emsp;<b>.get_attribute()</b>用于获取标签的属性，<b>.get_property()</b>用于获取标签的状态

<br/><b style='color:red'>获取下拉列表中的元素</b>
<br/><b>from selenium.webdriver.support.select import Select</b>
<br/>找到下拉列表，赋给s，再<b>sel=Select(s)</b>
<br/>&emsp;&emsp;<b>sel.options</b>获取所有选项，可以遍历获取所有情况下的信息
<br/>&emsp;&emsp;<b>sel.selected_by_index(0)</b>，根据索引切换
<br/>&emsp;&emsp;<b>sel.selected_by_value('value1')</b>，根据value属性值切换
<br/>&emsp;&emsp;<b>sel.selected_by_visible_text('选项一')</b>，根据options标签中间的文本切换

<br/><b style='color:red'>对选取对象进行操作</b>
<br/>后面加<b>.send_keys('abc')</b>，给选中的元素发送关键词abc字符串，可用于搜索框；写文件绝对路径，用于上传文件
<br/>&emsp;&emsp;&emsp;<b>.clear()</b>，清除输入框已有的字符串
<br/>&emsp;&emsp;&emsp;<b>.click()</b>，点击按钮
<br/>&emsp;&emsp;&emsp;<b>.location</b>，返回位置，字典
<br/>&emsp;&emsp;&emsp;<b>.size</b>，返回大小，字典
<br/>&emsp;&emsp;&emsp;<b>.tag_name</b>，返回标签名
<br/>&emsp;&emsp;&emsp;<b>.id</b>，返回id，如"D2CC0EFD4EE0C0EDB21FBFBD0F10ABA5_element_2"
<br/>&emsp;&emsp;对img标签，<b>.screenshot_as_png、.screenshot_as_jpg</b>相当于访问链接，再r.content，可以直接写入图片中
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>.screenshot_as_bs64</b>base64格式

<b style='color:red'>模拟键盘操作</b>
<br/><b>from selenium.webdriver.common.keys import Keys</b>
<br/>&emsp;&emsp;&emsp;<b>.send_keys(Keys.ENTER)</b>，按下回车
<br/>&emsp;&emsp;&emsp;常用的还有<b>Keys.BACKSPACE、Keys.TAB、Keys.SHIFT、Keys.CONTROL、Keys.ALT</b>

<b style='color:red'>执行JS代码</b>
<br/>被弹窗挡住的部分不能获取，需要把弹窗删了
<br/>可以从浏览器开发者工具中的console控制台执行JS代码：
<br/>&emsp;&emsp;先根据类名/标签名/ID定位到，再定义变量传给该变量（如果有多个索引012标取），再用该节点的父节点去删它
<br/>&emsp;&emsp;其实也可以直接<b>web.execute_script('arguments[0].remove()',element)</b>
<br/>&emsp;&emsp;<b><i>var a=document.getElementById("s_lg_img")</i></b>
<br/>&emsp;&emsp;<b><i>a.parentNode.removeChild(a)</i></b>
<br/><br/>&emsp;&emsp;根据标签名<b><i>document.getElementByTagName()</i></b>
<br/>&emsp;&emsp;根据类名<b><i>document.getElementByClassName()</i></b>
<br/><br/>在selenium中，提供以下方法动态执行JS代码：
<br/>&emsp;&emsp;<b>web.execute_script('''JS代码''')</b>
<br/>&emsp;&emsp;如果要获取cookie()，可以在前面加return，用变量接收

```python
js_code='return document.cookie'
cookie=web.wxwcute_script(js_code)
# 执行JavaScript代码，并传递参数，这里有两个
result = driver.execute_script("return arguments[0] + arguments[1];", 5, 3)
```

<b style='color:red'>浏览器对象配置</b>
<br/>之前都是<b>web=Chrome()</b>默认配置
<br/><br/><b>from selenium.webdriver.chrome.options import Options</b>，导入配置信息
<br/><b>from selenium.webfriver import Chrome</b>
<br/><b>opts=Options()</b>，初始化配置项
<br/><b>opts.add_argument('user-agent="Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36"')</b>，设置请求头
<br/><b>opts.add_argument('--headless')</b>，配置无界面模式，不会打开浏览器，但能获取到信息
<br/><b>opts.add_argument('--disable-gpu')</b>，禁用GPU
<br/><b>opts.add_argument('--window-size=1000,600')</b>，设置浏览器对象的窗口大小/分辨率，宽高
<br/><b>opts.add_argument('--start-maximized')</b>，浏览器全屏，取元素会报错，不设置
<br/><b>opts.add_argument('--disable-blink-features=AutomationController')</b>，禁用自动化控制器的特性，防低级检测
<br/><b>opts.add_argument('--incognito')</b>，无痕模式
<br/><b>opts.add_argument('--disable-javascript')</b>，禁用JS
<br/><b>opts.add_experimental_option('excludeSwitches',['enable-automation'])、
<br/>&emsp;&emsp;opts.add_experimental_option('useAutoMationExtension',False)</b>，隐藏webdriver提示条和自动化扩展信息
<br/><br/><b>web=Chrome(options=opts)</b>，应用配置

<br/><b style='color:red'>等待的方案</b>
<br/><b>time.sleep(10)</b>，等待10秒
<br/><b>web.implicitly_wait(10)</b>,隐式等待所有操作；最多等10秒，可能提前就结束；一次设置，后面所有查找生效，不用再写

<br/><b>from selenium.webdriver.support.ui import WebDriverWait</b>
<br/><b>WebDriverWait(,10,0.5)</b>，显式等待某指定操作，最多10秒，每隔0.5秒检查一次，超时没等到报错。

```python
import selenium
selenium.__version__
```

    '4.10.0'

```python
from selenium import webdriver
web=webdriver.Chrome()#自动查找浏览器驱动
url='https://www.youtube.com/'
web.get(url)
print(web.title)
```

    YouTube
    

```python
from selenium import webdriver
web=webdriver.Edge()
url='https://www.mihoyo.com/'
web.get(url)
print(web.title)#拿到title标签内容
```

    米哈游-TECH OTAKUS SAVE THE WORLD
    

```python
from selenium.webdriver import Chrome
web=Chrome()
web.get('https://baidu.com')
baidu=web.current_window_handle
web.switch_to.new_window()
web.get('https://www.163.com')
web.switch_to.new_window()
web.get('https://pao.qq.com/main.shtml')
#跳回百度，两种都行
# web.switch_to.window(baidu)
web.switch_to.window(web.window_handles[0])
```

```python
#更细致的操作
#模拟移动端访问
from selenium.webdriver import Chrome
web=Chrome()
web.get('https://sges.sysu.edu.cn/')
web.execute_cdp_cmd(
    'Emulation.setDeviceMetricsOverride',
    {
        'width':500,
        'height':1080,
        'mobile':True,
        'deviceScaleFactor':100
        
    }
)
#好像有点问题...
```

    {}

```python
#百度热搜榜
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
import time
import pandas as pd
import numpy as np
import pyautogui

web=Chrome()
web.get('https://www.baidu.com')
#删除百度logo
web.execute_script('''
var a=document.getElementById("s_lg_img")
a.parentNode.removeChild(a)
''')

time.sleep(2)
#搜索框输入，点击搜索，这里两种都行
# web.find_element('id','kw').send_keys('热搜')
# web.find_element('id','su').click()
web.find_element('id','kw').send_keys('热搜',Keys.ENTER)
#跳转方式为_self，不用改selenium的视角

#点击查看完整榜单按钮，_blank，需要改变视角
time.sleep(3)
web.find_element('xpath','//a[@class="boiling-btn_29fbf"]').click()
web.switch_to.window(web.window_handles[-1])

Hot,Name=[],[]

for c in range(1,7):
    time.sleep(1)
    #索引为从1开始是热搜
    button=web.find_elements('xpath','//div[@class="c-theme-color tabs-wrap_3Ac9n"]/a')[c]
    button.click()
    #原页面跳转，不需要改变视角
    #找到后30个热搜，排除有一个置顶但不散排名的
    lists=web.find_elements('xpath','//div[@style="margin-bottom:20px"]/div')[-30:]

    hot,name=[],[]
    if c in [1,6]:
        for list in lists:
            #6这里name最后只有一个div，用div[1]提取也行
            h=list.find_element('xpath','./div[1]/div[2]').text
            n=list.find_element('xpath','./div[2]/a/div[1]').text
            hot.append(h)
            name.append(n)
            # print(hot,name)
    elif c in [2,3,4,5]:
        for list in lists:
            h=list.find_element('xpath','./a[2]/div[2]').text
            n=list.find_element('xpath','./div/a/div').text
            # print(hot,name)
            hot.append(h)
            name.append(n)
    Hot.append(hot)
    Name.append(name)

#数据处理、输出
inf1,inf2,inf3,inf4,inf5,inf6=[],[],[],[],[],[]
num=0
for i in zip(Name,Hot):
    num+=1
    for j in zip(i[0],i[1]):
        eval(f'inf{num}').append(j)
inf4.append(('',''))#少一个，补上
data=[[i[0][0],i[0][1],i[1][0],i[1][1],i[2][0],i[2][1],i[3][0],\
       i[3][1],i[4][0],i[4][1],i[5][0],i[5][1]] for i in zip(inf1,inf2,inf3,inf4,inf5,inf6)]
index=np.linspace(1,len(data),len(data)).astype(np.uint8)
c1,c2=[],[]
for i in ['热搜榜','小说榜','电影榜','电视剧榜','汽车榜','游戏榜']:
    c1.append(i)
    c1.append(i)
for j in range(6):
    c2+=['名字','热度']
columns=[c1,c2]
df=pd.DataFrame(data,index=index,columns=columns)
# df.index.name='排行'

t=time.localtime()
now_time=time.strftime('%Y年%m月%d日%H时%M分%S秒',t)

s=pyautogui.confirm(text='是否保存为Excel？',buttons=['是','否'])
if s=='是':
    df.to_excel(f'../data/{now_time}百度热搜.xlsx')
    pyautogui.alert(text=f'成功保存为\n"../data/{now_time}百度热搜.xlsx"')
```

```python
df
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th colspan="2" halign="left">热搜榜</th>
      <th colspan="2" halign="left">小说榜</th>
      <th colspan="2" halign="left">电影榜</th>
      <th colspan="2" halign="left">电视剧榜</th>
      <th colspan="2" halign="left">汽车榜</th>
      <th colspan="2" halign="left">游戏榜</th>
    </tr>
    <tr>
      <th></th>
      <th>名字</th>
      <th>热度</th>
      <th>名字</th>
      <th>热度</th>
      <th>名字</th>
      <th>热度</th>
      <th>名字</th>
      <th>热度</th>
      <th>名字</th>
      <th>热度</th>
      <th>名字</th>
      <th>热度</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>代号“1027行动” 缅北激战持续</td>
      <td>4910465</td>
      <td>我有一剑</td>
      <td>223403</td>
      <td>学爸</td>
      <td>202839</td>
      <td>田耕纪</td>
      <td>621829</td>
      <td>凯绅</td>
      <td>145438</td>
      <td>原神</td>
      <td>100449</td>
    </tr>
    <tr>
      <th>2</th>
      <td>女子为减肥连吃3月胡萝卜变小橘人</td>
      <td>4895076</td>
      <td>逆天邪神</td>
      <td>182217</td>
      <td>你好，恩师</td>
      <td>165490</td>
      <td>为有暗香来</td>
      <td>618829</td>
      <td>奥迪Q7</td>
      <td>141956</td>
      <td>王者荣耀</td>
      <td>74444</td>
    </tr>
    <tr>
      <th>3</th>
      <td>生命之光因拼搏而闪耀</td>
      <td>4703394</td>
      <td>万相之王</td>
      <td>181747</td>
      <td>莫斯科行动</td>
      <td>108408</td>
      <td>问心</td>
      <td>616261</td>
      <td>哈弗H6</td>
      <td>138719</td>
      <td>和平精英</td>
      <td>52695</td>
    </tr>
    <tr>
      <th>4</th>
      <td>彭斯退出美国2024年总统竞选</td>
      <td>4668286</td>
      <td>斗罗大陆</td>
      <td>128154</td>
      <td>河边的错误</td>
      <td>77715</td>
      <td>庆余年第二季</td>
      <td>387512</td>
      <td>欧拉好猫</td>
      <td>106520</td>
      <td>蛋仔派对</td>
      <td>40432</td>
    </tr>
    <tr>
      <th>5</th>
      <td>哈马斯：对美国加入战斗始料未及</td>
      <td>4576184</td>
      <td>斗罗大陆II绝世唐门</td>
      <td>109200</td>
      <td>孤注一掷</td>
      <td>75340</td>
      <td>爱情，开袋即食</td>
      <td>253725</td>
      <td>宝骏310</td>
      <td>91557</td>
      <td>植物大战僵尸</td>
      <td>24718</td>
    </tr>
    <tr>
      <th>6</th>
      <td>《老友记》钱德勒扮演者去世</td>
      <td>4487761</td>
      <td>盖世神医</td>
      <td>104677</td>
      <td>老师，别哭</td>
      <td>73943</td>
      <td>烬相思</td>
      <td>184706</td>
      <td>迈巴赫</td>
      <td>87688</td>
      <td>梦幻西游</td>
      <td>21929</td>
    </tr>
    <tr>
      <th>7</th>
      <td>马斯克发图：伊朗被美军基地包围</td>
      <td>4383673</td>
      <td>剑来</td>
      <td>101125</td>
      <td>坚如磐石</td>
      <td>67843</td>
      <td>梅花红桃</td>
      <td>177650</td>
      <td>朗逸</td>
      <td>83199</td>
      <td>迷你世界</td>
      <td>20350</td>
    </tr>
    <tr>
      <th>8</th>
      <td>养老保险关系转移有限制？真相</td>
      <td>4247968</td>
      <td>修罗武神</td>
      <td>92854</td>
      <td>前任:分手清单</td>
      <td>57429</td>
      <td>叠影狙击</td>
      <td>137710</td>
      <td>雅阁</td>
      <td>80788</td>
      <td>我的世界</td>
      <td>20339</td>
    </tr>
    <tr>
      <th>9</th>
      <td>13岁女孩戴鲨鱼夹滑倒头皮缝了3针</td>
      <td>4123064</td>
      <td>相亲当天，豪门继承人拉着我领证</td>
      <td>88735</td>
      <td>变形金刚</td>
      <td>41443</td>
      <td>好事成双</td>
      <td>109323</td>
      <td>迈腾</td>
      <td>75141</td>
      <td>香肠派对</td>
      <td>18783</td>
    </tr>
    <tr>
      <th>10</th>
      <td>电影上甘岭中王兰原型王清珍逝世</td>
      <td>4056333</td>
      <td>上门龙婿</td>
      <td>77276</td>
      <td>封神第一部</td>
      <td>34206</td>
      <td>莲花楼</td>
      <td>105706</td>
      <td>帕萨特</td>
      <td>72610</td>
      <td>明日方舟</td>
      <td>18482</td>
    </tr>
    <tr>
      <th>11</th>
      <td>探访黑河早市：俄罗斯人跨境逛吃</td>
      <td>3927050</td>
      <td>都市之最强狂兵（又名：都市狂枭）</td>
      <td>72868</td>
      <td>第八个嫌疑人</td>
      <td>32219</td>
      <td>长相思</td>
      <td>98537</td>
      <td>凯美瑞</td>
      <td>69688</td>
      <td>地铁跑酷</td>
      <td>16687</td>
    </tr>
    <tr>
      <th>12</th>
      <td>“尿不湿小孩”街头乞讨 多方介入</td>
      <td>3810928</td>
      <td>做局</td>
      <td>66581</td>
      <td>最好的相遇</td>
      <td>27979</td>
      <td>我的助理不简单</td>
      <td>89984</td>
      <td>星越L</td>
      <td>67357</td>
      <td>元气骑士</td>
      <td>15619</td>
    </tr>
    <tr>
      <th>13</th>
      <td>儿子开玩笑称女友比爸爸还大3岁</td>
      <td>3780507</td>
      <td>混沌剑神</td>
      <td>65077</td>
      <td>铃芽之旅</td>
      <td>27421</td>
      <td>兰闺喜事</td>
      <td>86806</td>
      <td>奔驰E级</td>
      <td>66724</td>
      <td>英雄联盟</td>
      <td>13744</td>
    </tr>
    <tr>
      <th>14</th>
      <td>长沙一公园有人打群架 14人被抓</td>
      <td>3608971</td>
      <td>女总裁的全能兵王</td>
      <td>63554</td>
      <td>消失的她</td>
      <td>27380</td>
      <td>云之羽</td>
      <td>78527</td>
      <td>埃尔法</td>
      <td>62196</td>
      <td>球球大作战</td>
      <td>13524</td>
    </tr>
    <tr>
      <th>15</th>
      <td>男性“断崖式衰老”有两个节点</td>
      <td>3562428</td>
      <td>绝世强龙</td>
      <td>60950</td>
      <td>红毯先生</td>
      <td>26527</td>
      <td>今日不宜喜欢</td>
      <td>76156</td>
      <td>速腾</td>
      <td>61822</td>
      <td>暗区突围</td>
      <td>12488</td>
    </tr>
    <tr>
      <th>16</th>
      <td>协和医生：喷雾爽肤水不补水</td>
      <td>3467404</td>
      <td>九星霸体诀</td>
      <td>60004</td>
      <td>我经过风暴</td>
      <td>24462</td>
      <td>珠江人家</td>
      <td>67238</td>
      <td>思域</td>
      <td>61373</td>
      <td>光遇</td>
      <td>11930</td>
    </tr>
    <tr>
      <th>17</th>
      <td>一飞机靠近拜登住所 美战机升空拦截</td>
      <td>3387532</td>
      <td>吞噬星空</td>
      <td>57566</td>
      <td>蝙蝠侠</td>
      <td>24242</td>
      <td>异人之下</td>
      <td>63558</td>
      <td>问界M7</td>
      <td>60532</td>
      <td>永劫无间</td>
      <td>10217</td>
    </tr>
    <tr>
      <th>18</th>
      <td>和王诗龄合拍的男生该汗流浃背了</td>
      <td>3286595</td>
      <td>我的冰山女总裁（又名离婚后：高冷女总裁后悔了）</td>
      <td>50211</td>
      <td>燃冬</td>
      <td>24229</td>
      <td>偷偷藏不住</td>
      <td>45396</td>
      <td>奥迪A6</td>
      <td>59988</td>
      <td>第五人格</td>
      <td>9202</td>
    </tr>
    <tr>
      <th>19</th>
      <td>科学家：精子运动违背牛顿第三定律</td>
      <td>3139820</td>
      <td>正义的使命</td>
      <td>46741</td>
      <td>敢死队4</td>
      <td>23526</td>
      <td>漫长的季节</td>
      <td>42659</td>
      <td>坦途</td>
      <td>57088</td>
      <td>复古传奇</td>
      <td>8627</td>
    </tr>
    <tr>
      <th>20</th>
      <td>现场：美国总统拜登会见王毅</td>
      <td>3007750</td>
      <td>太荒吞天诀</td>
      <td>46629</td>
      <td>坠楼死亡的剖析</td>
      <td>21972</td>
      <td>特工任务</td>
      <td>40623</td>
      <td>奔驰C级</td>
      <td>56376</td>
      <td>三国志战略版</td>
      <td>8449</td>
    </tr>
    <tr>
      <th>21</th>
      <td>男子砍人未被罚 驾车撞死对方及孩子</td>
      <td>2936357</td>
      <td>女总裁的上门女婿</td>
      <td>44016</td>
      <td>我本是高山</td>
      <td>21102</td>
      <td>甜蜜的你</td>
      <td>40464</td>
      <td>轩逸</td>
      <td>55490</td>
      <td>金铲铲之战</td>
      <td>8446</td>
    </tr>
    <tr>
      <th>22</th>
      <td>被生母虐待致残男童仍惦记妈妈</td>
      <td>2879028</td>
      <td>前妻攻略：傅先生偏要宠我</td>
      <td>41631</td>
      <td>八角笼中</td>
      <td>18060</td>
      <td>长月烬明</td>
      <td>38948</td>
      <td>卡罗拉</td>
      <td>53752</td>
      <td>三国杀</td>
      <td>7617</td>
    </tr>
    <tr>
      <th>23</th>
      <td>9岁女孩捡到4岁萌娃手拉手找警察</td>
      <td>2701951</td>
      <td>尔尔星海</td>
      <td>39111</td>
      <td>再见，士兵</td>
      <td>16989</td>
      <td>南风知我意</td>
      <td>35375</td>
      <td>坦克300</td>
      <td>51473</td>
      <td>坦克世界</td>
      <td>7542</td>
    </tr>
    <tr>
      <th>24</th>
      <td>女子被丈夫打大哭呼救：他要打死我</td>
      <td>2666100</td>
      <td>霍先生乖乖宠我</td>
      <td>37763</td>
      <td>二手杰作</td>
      <td>16607</td>
      <td>西出玉门</td>
      <td>34557</td>
      <td>普拉多</td>
      <td>51009</td>
      <td>艾尔登法环</td>
      <td>7154</td>
    </tr>
    <tr>
      <th>25</th>
      <td>四川夫妻水库溺亡留下2个孩子</td>
      <td>2522096</td>
      <td>剑道第一仙</td>
      <td>36851</td>
      <td>热烈</td>
      <td>15368</td>
      <td>虎鹤妖师录</td>
      <td>31947</td>
      <td>五菱宏光</td>
      <td>50665</td>
      <td>荒野大镖客2</td>
      <td>7146</td>
    </tr>
    <tr>
      <th>26</th>
      <td>小杨哥换头像：身穿YSL西装</td>
      <td>2409459</td>
      <td>神级龙卫</td>
      <td>34819</td>
      <td>深林诡事</td>
      <td>15027</td>
      <td>他从火光中走来</td>
      <td>31703</td>
      <td>宝马5系</td>
      <td>50070</td>
      <td>部落冲突</td>
      <td>6672</td>
    </tr>
    <tr>
      <th>27</th>
      <td>2023年雄安急需紧缺人才目录发布</td>
      <td>2375851</td>
      <td>镇国神婿</td>
      <td>34806</td>
      <td>地狱里的天堂</td>
      <td>14525</td>
      <td>以爱为营</td>
      <td>30608</td>
      <td>本田CR-V</td>
      <td>49168</td>
      <td>绝地求生</td>
      <td>6642</td>
    </tr>
    <tr>
      <th>28</th>
      <td>四川警方通报万达广场持刀伤人事件</td>
      <td>2245311</td>
      <td>龙王医婿</td>
      <td>34477</td>
      <td>花月杀手</td>
      <td>13386</td>
      <td>沉香如屑</td>
      <td>29106</td>
      <td>哈弗枭龙MAX</td>
      <td>47667</td>
      <td>阴阳师</td>
      <td>6569</td>
    </tr>
    <tr>
      <th>29</th>
      <td>14岁男孩肠道里查出20多颗“珍珠”</td>
      <td>2150231</td>
      <td>错撩</td>
      <td>32890</td>
      <td>碟中谍7</td>
      <td>13084</td>
      <td>我们的日子</td>
      <td>29091</td>
      <td>猛士917</td>
      <td>47279</td>
      <td>泰拉瑞亚</td>
      <td>5744</td>
    </tr>
    <tr>
      <th>30</th>
      <td>南通连续4任市公安局长被查</td>
      <td>2057746</td>
      <td>武神主宰</td>
      <td>32802</td>
      <td>速度与激情10</td>
      <td>12383</td>
      <td>星汉灿烂</td>
      <td>27470</td>
      <td>易至EV3</td>
      <td>46479</td>
      <td>使命召唤</td>
      <td>5324</td>
    </tr>
  </tbody>
</table>
</div>

```python
#frame练习
from selenium.webdriver import Chrome
import requests
import time
import matplotlib.pyplot as plt

web=Chrome()
web.get('https://mail.qq.com/')
#两层iframe
qq_iframe1=web.find_element('xpath','//*[@id="QQMailSdkTool_login_loginBox_qq"]/iframe')
web.switch_to.frame(qq_iframe1)
qq_iframe2=web.find_element('id','ptlogin_iframe')
web.switch_to.frame(qq_iframe2)
src=web.find_element('id','qrlogin_img').get_attribute('src')

t=time.localtime()
now_time=time.strftime('%Y年%m月%d日%H时%M分%S秒',t)
try:
    r=requests.get(src)
    r.encoding=r.apparent_encoding
except:
    print('爬取失败！')
with open(f'../data/QQ邮箱/{now_time}QQ邮箱登录二维码.jpg','wb') as f:
    f.write(r.content)

img=plt.imread(f'../data/QQ邮箱/{now_time}QQ邮箱登录二维码.jpg')
plt.subplot(121)
plt.imshow(img,cmap='gray')
#试了一下可以扫，手机QQ也会出确认登陆界面
#但扫了没反应登不上去

#再返回最开始的页面，拿到背景图片、文本（如果有）
web.switch_to.parent_frame()
web.switch_to.parent_frame()
pic=web.find_element('xpath','//div[@class="login_pictures_picture"]').get_attribute('style')
pic=pic.split('(')[1].split(')')[0].replace('"','')
try:
    r=requests.get(pic)
    r.encoding=r.apparent_encoding
except:
    print('背景图片爬取失败！')
with open(f'../data/QQ邮箱/{now_time}背景图片.jpg','wb') as f:
    f.write(r.content)
plt.subplot(122)
img=plt.imread(f'../data/QQ邮箱/{now_time}背景图片.jpg')
plt.imshow(img)
plt.show()

texts=web.find_elements('xpath','//div[@class="login_pictures_txt"]/p')
if texts !=[]:
    for t in texts[1:]:
        print(t.text)
else:
    print('此页没有文本！')
```

    
![png](/pages/python/network/spider/images/selenium-2.png)
    

    1987年9月14日21时07分
    中国第一封电子邮件
    从北京发往德国
    “越过长城，走向世界”
    

```python

```

```python
web=Chrome()
web.get('https://www.jumpw.com/')
web.page_source
```

    '<html lang="zh-cn"><head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=11/10/9/8/edge,chrome=1">\n    <title>关于我们 - 跳跃网络</title>\n    <meta name="keywords" content="">\n    <meta name="description" content="">\n    <link rel="stylesheet" href="css/animate.css">\n    <link rel="stylesheet" href="css/owl.carousel.css">\n    <link rel="stylesheet" href="css/owl.theme.css">\n    <link rel="stylesheet" href="css/index.css">\n    <link rel="shortcut icon" href="https://300.jumpw.com/defaults/favicon.ico" type="image/x-icon">\n\t<link rel="stylesheet" type="text/css" href="https://300.jumpw.com/style/grayscale.css">\n</head>\n\n<body class="index">\n    <div class="navbar">\n        <div class="container">\n            <ul class="menu">\n                <li class="active"><a href="index.html" title="关于我们">关于我们</a></li>\n                <li><a href="game-info.html" title="游戏产品">游戏产品</a></li>\n                <li><a href="e-sports.html" title="电子竞技">电子竞技</a></li>\n                <li><a href="ip-development.html" title="IP衍生">IP衍生</a></li>\n                <li><a href="corporate-mission.html" title="企业愿景">企业愿景</a></li>\n                <li><a href="join-us.html" title="加入我们">加入我们</a></li>\n                <li><a href="contact-us.html" title="联系我们">联系我们</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class="sect sect-11">\n        <div class="tab-content">\n            <div role="tabpanel" class="owl-panel active" id="tab1-1">\n                <div class="pic"><img src="./images/game_banner_01.jpg" alt=""></div>\n            </div>\n            <div role="tabpanel" class="owl-panel" id="tab1-2">\n                <div class="pic"><img src="./images/game_banner_02.jpg" alt=""></div>\n            </div>\n            <div role="tabpanel" class="owl-panel" id="tab1-3">\n                <div class="pic"><img src="./images/game_banner_03.jpg" alt=""></div>\n            </div>\n            <div role="tabpanel" class="owl-panel" id="tab1-4">\n                <div class="pic"><img src="./images/game_banner_04.jpg" alt=""></div>\n            </div>\n            <div role="tabpanel" class="owl-panel" id="tab1-5">\n                <div class="pic"><img src="./images/game_banner_05.jpg" alt=""></div>\n            </div>\n            <div role="tabpanel" class="owl-panel" id="tab1-6">\n                <div class="pic"><img src="./images/game_banner_06.jpg" alt=""></div>\n            </div>\n        </div>\n        <div class="owl-carousel owl-one nav-pills owl-theme" role="tablist" style="opacity: 1; display: block;">\n            <div class="owl-wrapper-outer"><div class="owl-wrapper" style="width: 2700px; left: 0px; display: block;"><div class="owl-item" style="width: 225px;"><div class="item active">\n                <a href="#tab1-1" role="tab" data-toggle="tab">300大作战</a>\n            </div></div><div class="owl-item" style="width: 225px;"><div class="item">\n                <a href="#tab1-2" role="tab" data-toggle="tab">我信你个鬼</a>\n            </div></div><div class="owl-item" style="width: 225px;"><div class="item">\n                <a href="#tab1-3" role="tab" data-toggle="tab">迷你攻势</a>\n            </div></div><div class="owl-item" style="width: 225px;"><div class="item">\n                <a href="#tab1-4" role="tab" data-toggle="tab">300大作战5G</a>\n            </div></div><div class="owl-item" style="width: 225px;"><div class="item">\n                <a href="#tab1-5" role="tab" data-toggle="tab">300英雄</a>\n            </div></div><div class="owl-item" style="width: 225px;"><div class="item">\n                <a href="#tab1-6" role="tab" data-toggle="tab">皇家骑士</a>\n            </div></div></div></div>\n            \n            \n            \n            \n            \n        <div class="owl-controls clickable"><div class="owl-buttons"><div class="owl-prev">&lt;</div><div class="owl-next">&gt;</div></div></div></div>\n        <div class="long">\n            <div class="container relative">\n                <span class="item-01"></span><span class="item-02"></span><span class="item-03"></span>\n            </div>\n        </div>\n    </div>\n    <div class="sect sect-09">\n        <div class="container">\n            <div class="tit tit-07">\n                <h3>关于我们</h3>\n            </div>\n            <ul class="about-list clearfix">\n                <li class="item-01">\n                    <div class="long">\n                        <a href="./game-info.html"><img src="./images/img_14.png" alt=""><span class="go"></span></a>\n                    </div>\n                    <div class="short">\n                        <a href="./contact-us.html">\n                            <p>上海跳跃网络科技有限公司成立于2011年，是一家集游戏研发和运营于一体的互联网企业。公司现已成功研发及/或发行《300英雄》《300大作战》《皇家骑士》《枪界》《家庭教师》等多款产品。\n                            </p>\n                        </a>\n                    </div>\n                </li>\n                <li class="item-02">\n                    <div class="long">\n                        <a href="./e-sports.html"><img src="./images/img_15.png" alt=""><span class="go"></span></a>\n                    </div>\n                    <div class="short">\n                        <a href="./ip-development.html"><img src="./images/img_19.jpg" alt="">\n                            <p>经过7年品牌沉淀，300娘现已拥有伊莎、蒂塔、缇米、潘多拉、佩姬和迪斯卓尔6位成员，全球积累超过8500万粉丝。</p><span class="go"></span>\n                        </a>\n                    </div>\n                </li>\n                <li class="item-03">\n                    <div class="short">\n                        <a href="./join-us.html"><img src="./images/img_16.png" alt=""><span class="go"></span></a>\n                    </div>\n                    <div class="long">\n                        <a href="./corporate-mission.html"><img src="./images/img_17.jpg" alt="">\n                            <p>打造最有创造力的中国游戏企业，不断探索游戏、原创IP、动画、周边、电子竞技等更多领域，将最有创意的作品和内容带给所有热爱游戏的二次元玩家。</p><span class="go"></span>\n                        </a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class="sect">\n        <div class="container">\n            <div class="tit tit-08">\n                <h3>发展历程</h3>\n            </div>\n        </div>\n        <div class="times">\n            <div class="container">\n                <ul class="times-list wow fadeInUp" style="visibility: hidden; animation-name: none;">\n                    <li>\n                        <span>2010</span>\n                        <p>10月，团队筹建，开始新征程。</p>\n                    </li>\n                    <li>\n                        <span>2011</span>\n                        <p>4月，张江达尔文路-张江半岛软件园跳跃网络正式成立。</p>\n                    </li>\n                    <li>\n                        <span>2012</span>\n                        <p>6月，《300英雄》运营。</p>\n                    </li>\n                    <li>\n                        <span>2014</span>\n                        <p>1月，《300英雄》荣获2013年“金翎奖”最佳原创网络游戏奖，入围“中国游戏风云榜”十大最受期待网络游戏名单，获十大最受欢迎原创客户端网络游戏。</p>\n                        <p>10月，筹建第二款项目《星际召唤》。</p>\n                    </li>\n                    <li>\n                        <span>2016</span>\n                        <p>2月，二次元社区“宅基地”上线。</p>\n                        <p>10月，《枪界》首次封测。</p>\n                        <p>12月，由跳跃网络原创动漫角色300娘为主角创作的电视动画《魅力英雄》第一季制作完成。</p>\n                    </li>\n                    <li>\n                        <span>2017</span>\n                        <p>7月，《300大作战》不删档测试开启。</p>\n                        <p>12月，VR游戏《陨星危机》上架steam。</p>\n                    </li>\n                    <li>\n                        <span>2018</span>\n                        <p>12月，《300大作战》荣获“2018年度十大最受欢迎电子竞技游戏”奖。</p>\n                    </li>\n                    <li>\n                        <span>2019</span>\n                        <p>7月，《皇家骑士》不删档测试开启。</p>\n                        <p>7月，《300大作战》荣获2019金数娱游戏奖“卓越泛二次元游戏”。</p>\n                        <p>10月，首届300英雄冠军联赛成功举办。</p>\n                    </li>\n                    <li>\n                        <span>2020</span>\n                        <p>1月，《家庭教师》上线。</p>\n                        <p>8月，300大作战咪咕最受欢迎PC云游戏奖</p>\n                        <p>8月，300英雄冠军联赛2021赛季圆满结束</p>\n                        <p>10月，300大作战5G获得OPPO渠道最佳小游戏奖</p>\n                        <p></p>\n                        <p></p>\n                    </li>\n                    <li>\n                        <span>2021</span>\n                        <p>1月，小游戏《我信你个鬼》上线OPPO、QQ等平台</p>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <!-- copyright -->\n    <script src="js/foot.js"></script><div class="foot">\n    <div class="container">\n        <div class="f-link">\n            <a href="https://www.jumpw.com/adpl.html" target="_blank"><img src="./images/img/f_icon_01.png" alt="adpl"></a>\n            <a href="javascript:void(0);"><img src="./images/img/f_icon_02.png" alt="跳跃网络"></a>\n            <a href="https://www.jumpwo.com/"><img src="./images/img/f_icon_wo.png" alt="跳跃互娱"></a>\n            <a href="https://aq.jumpw.com/" target="_blank"><img src="./images/img/f_icon_03.png" alt="家长监护"></a>\n        </div>\n        <div class="f-text">\n            <p class="copyright">\n                <a href="https://passport.jumpw.com/views/serviceprotocol.html" target="_blank">用户协议</a>\n                <a href="https://passport.jumpw.com/views/privacypolicy.html" target="_blank">隐私政策</a>\n                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502007403" target="_blank"><img src="https://300.jumpw.com/images/beian.png" alt="">沪公网安备</a>\n                <a href="http://beian.miit.gov.cn" target="_blank">沪ICP备 11024010号-1</a>\n                <span>沪网文[2015]0743-193号</span>\n            </p>\n            <p>COPYRIGHT ©2011-2020 JUMP. ALL RIGHTS  RESERVED  跳跃网络 版权所有</p>\n            <p>上海跳跃网络科技有限公司 &nbsp;&nbsp;&nbsp;上海跳跃互动娱乐发展有限公司</p>\n            <p><span>金科路2889号长泰广场A座12楼</span><span>适合12岁以上使用</span></p>\n        </div>\n    </div>\n</div>\n\n\n    <script src="https://300.jumpw.com/Activity/cdn/jquery/jquery-1.7.2/jquery.min.js"></script>\n    <script src="js/wow.min.js"></script>\n    <script src="js/owl.carousel.js"></script>\n    <script src="js/tab.js"></script>\n    <script>\n        $(function () {\n            new WOW().init();\n\n            $(\'.owl-one\').owlCarousel({\n                items: 4,\n                loop: true,\n                autoPlay: true,\n                navigation: true,\n                pagination: false,\n                navigationText: ["&lt", "&gt"],\n                itemsDesktop: [1199, 4],\n                itemsDesktopSmall: [979, 4],\n                itemsTablet: [768, 4],\n                itemsMobile: [479, 4],\n            });\n\n            $(\'.owl-one .owl-item .item a\').click(function () {\n                $(this).parents(\'.item\').addClass(\'active\');\n                $(this).parents().siblings().children(\'.item\').removeClass(\'active\');\n            })\n        })\n    </script>\n    <!-- <div id="ie_modal"\n        style="position: absolute;top: 0;right: 0;bottom: 0;left: 0;margin: auto;z-index: 100;width: 500px;height: 300px;background: #fff;border: 2px solid #000;padding: 60px 30px;">\n        <p style="font-size: 22px; text-align: center;color: #d11717;line-height:38px;">\n            您使用的浏览器版本过低，可能会影响到您浏览本页面，建议升级您的浏览器\n        </p>\n        <a href="javascript:void(0);" id="ie_close" style="position: absolute;top: 0px;right: -46px;"><img\n                src="https://ziyuan.jumpw.com/activity/300hero/summer/images/close.png"></a>\n        <script>\n            var ieclose = document.getElementById("ie_close");\n            var iemodal = document.getElementById("ie_modal");\n            ieclose.onclick = function () {\n                iemodal.style.display="none";\n            };\n        </script>\n    </div> -->\n    <!--[if lt IE 9]>\n        <script src="js/ietips.js"></script>\n    <![endif]-->\n\n\n\n</body></html>'

```python
#配置
from selenium.webdriver.chrome.options import Options
from selenium.webdriver import Chrome
import matplotlib.pyplot as plt

opts=Options()
opts.add_argument('--headless')
# opts.add_argument('--disable-gpu')
# opts.add_argument('--start-maximized')
# opts.add_argument('--window-size=1200,800')
web=Chrome(options=opts)
web.get('https://www.baidu.com')
print(web.title)
logo=web.find_element('id','s_lg_img').screenshot_as_png
with open('../data/baidu.jpg','wb')as f:
    f.write(logo)
```

    百度一下，你就知道
    
## 2. 小进阶

图鉴，http://www.ttshitu.com/
<br/>图像识别网站，调用它的接口。
<br/>可用于识别数字字母验证码、图像识别验证码、点选验证码等
<br/>base64，将二进制字节转化为文本字符串

<br/><b style='color:red'>模拟鼠标操作</b>
<br/>&emsp;&emsp;selenium的模拟鼠标不是真实鼠标动作，鼠标不动，会被检测鼠标轨迹的网站检测到
<br/>&emsp;&emsp;可以考虑搭配<b>pyautogui</b>使用
<br/><b>from selenium.webdriver.common.action_chains import ActionChains</b>，导入动作链
<br/><b>actions = ActionChains(web)</b>，对浏览器对象web创建动作链
<br/><br/>先定义动作，再<b>.perform()</b>执行
<br/><br/><b>actions.move_to_element(element).perform()</b>，鼠标移到某元素左上角，element是查找到的元素
<br/><b>actions.move_to_element_with_offset(element,xoffset,yoffset).perform()</b>，鼠标移到某元素左上角再偏移的位置
<br/><b>actions.move_by_offset(xoffset,yoffset).perform()</b>，鼠标从当前位置移动偏移量
<br/><br/>默认原位置点击，指定元素可点击某元素，下三同
<br/><b>actions.click(element=None).perform()</b>，单击元素
<br/><b>actions.double_click(element=None).perform()</b>，双击元素
<br/><b>actions.context_click(elenemt=None).perform()</b>，右键单击元素
<br/><b>actions.click_and_hold(element=None).perform()</b>，按下不动
<br/><br/><b>actions.drag_and_drop(source_element, target_element).perform()</b>，拖拽元素，从起始元素到目标元素
<br/><b>actions.drag_and_drop_by_offset(source,xoffset,yoffset).perform()</b>，拖拽元素，从起始元素左上角到偏移位置
<br/><br/>动作可组合，动作后面perform()前面再加别的动作
<br/>&emsp;&emsp;如：（1）先调用图鉴api，传入图片，获取点的位置；
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;再按顺序遍历所有点，对每个点actions.move_to_element_with_offsrt(img,x,y).click().perform()
<br/>&emsp;&emsp;&emsp;&emsp;（2）actions.drag_and_drop_by_offset(source,x,y).perform()和
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actions.click_and_hold(source).move_by_offset(x,y).perform()等效

<br/><b style='color:red'>冻结界面</b>
<br/>&emsp;&emsp;问题：鼠标滑过时弹出东西，移开时就没了
<br/>&emsp;&emsp;办法：开发者工具的Console中执行JS代码<b><i>setTimeout(function(){debugger},5000)</i></b>
<br/>&emsp;&emsp;作用：5000毫秒之后执行debugger命令，使浏览器进去debug状态，界面被冻住，不管怎么点都不会触发事件
<br/>便于在页面代码中找会消失元素对应的标签

```python
#用图鉴登录图鉴
import base64
import json
import requests
# 一、图片文字类型(默认 3 数英混合)：
# 1 : 纯数字
# 1001：纯数字2
# 2 : 纯英文
# 1002：纯英文2
# 3 : 数英混合
# 1003：数英混合2
#  4 : 闪动GIF
# 7 : 无感学习(独家)
# 11 : 计算题
# 1005:  快速计算题
# 16 : 汉字
# 32 : 通用文字识别(证件、单据)
# 66:  问答题
# 49 :recaptcha图片识别
# 二、图片旋转角度类型：
# 29 :  旋转类型
#
# 三、图片坐标点选类型：
# 19 :  1个坐标
# 20 :  3个坐标
# 21 :  3 ~ 5个坐标
# 22 :  5 ~ 8个坐标
# 27 :  1 ~ 4个坐标
# 48 : 轨迹类型
#
# 四、缺口识别
# 18 : 缺口识别（需要2张图 一张目标图一张缺口图）
# 33 : 单缺口识别（返回X轴坐标 只需要1张图）
# 五、拼图识别
# 53：拼图识别

#图鉴的用户名、密码、需要识别的图片链接、typeid
def base64_api(uname, pwd, img, typeid):
    # with open(img, 'rb') as f:
    #     base64_data = base64.b64encode(f.read())
    #     b64 = base64_data.decode()
    #直接传入图片转为b64，前面是读取路径下的图片再转为b64
    b64=img
    data = {"username": uname, "password": pwd, "typeid": typeid, "image": b64}
    result = json.loads(requests.post("http://api.ttshitu.com/predict", json=data).text)
    if result['success']:
        return result["data"]["result"]
    else:
        #！！！！！！！注意：返回 人工不足等 错误情况 请加逻辑处理防止脚本卡死 继续重新 识别
        return result["message"]
    return ""

def login():
    #请求图片的地址，提取图片的b64和imageID
    verify_url='https://admin.ttshitu.com/captcha_v2'
    session=requests.session()
    r=session.get(verify_url)
    img=r.json()

    #开始识别
    result=base64_api('hfdy0935','09354121794',img['img'],3)
    print(result)

    login_url='https://admin.ttshitu.com/common/api/login/user' 
    headers={
        'user-agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36 Edg/114.0.1823.82'
    }
    data={"userName":"hfdy0935",
          "password":"09354121794",
          "captcha":result,#待识别
          "imgId":img['imgId'],
          "developerFlag":False,
          "needCheck":True}
    r=session.post(login_url)
    print(r.status_code)
    print(r.text)
    
login()
```

    3926
    200
    {"success":false,"code":"-1","message":"服务器内部异常","data":""}
    

```python
#换个思路
from selenium.webdriver import Chrome
import time

def login():
    
    verify_url='https://admin.ttshitu.com/captcha_v2'
    session=requests.session()
    r=session.get(verify_url)
    img=r.json()

    #开始识别
    result=base64_api('hfdy0935','09354121794',img['img'],3)

    web=Chrome()
    web.get('https://admin.ttshitu.com/common/api/login/user')
    time.sleep(4)
    web.find_element('xpath','//form/div[1]/input').send_keys('hfdy0935')
    time.sleep(3)
    web.find_element('xpath','//form/div[2]/input').send_keys('09354121794')
    time.sleep(2)
    web.find_element('xpath','//form/div[3]/div[1]/input').send_keys(result)
    time.sleep(1)
    web.find_element('xpath','//button[@class="layui-btn layui-btn-normal full-width"]').click()

if __name__=='__main__':
    login()
#貌似不行，selsnium打不开页面...
```

```python

```

```python
#登录豆瓣，滑块验证码
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
import time
from selenium.webdriver.common.by import By
import base64
import requests
import json
from selenium.webdriver.common.action_chains import ActionChains
import re
import pyautogui as pg
import cv2

def base64_api(uname, pwd, img, typeid):
    with open(img, 'rb') as f:
        base64_data = base64.b64encode(f.read())
        b64 = base64_data.decode()
    data = {"username": uname, "password": pwd, "typeid": typeid, "image": b64}
    result = json.loads(requests.post("http://api.ttshitu.com/predict", json=data).text)
    if result['success']:
        return result["data"]["result"]
    else:
        #！！！！！！！注意：返回 人工不足等 错误情况 请加逻辑处理防止脚本卡死 继续重新 识别
        return result["message"]
    return ""

opts=Options()
opts.add_argument('--start-maximized')
web=Chrome(options=opts)
web.get('https://www.douban.com/')
web.implicitly_wait(10)

iframe1=web.find_element('xpath','//iframe[@style="height: 300px; width: 300px;"]')
web.switch_to.frame(iframe1)
web.implicitly_wait(10)
web.find_element('xpath','//li[@class="account-tab-account"]').click()
web.find_element('xpath','//input[@id="username"]').send_keys('18893521427')
web.find_element('xpath','//input[@id="password"]').send_keys('09354121794zzw@')
web.find_element('xpath','//a[@class="btn btn-account btn-active"]').click()
iframe2=web.find_element('xpath','//iframe[@name="https://t.captcha.qq.com"]')
web.switch_to.frame(iframe2)
web.implicitly_wait(10)
time.sleep(2)
style=web.find_element('xpath','//div[@id="slideBg"]').get_attribute('style')

res=re.findall('.*?width: (.*?)px; height: (.*?)px.*?',style)
w_in=eval(res[0][0])#网页上显示的图片宽
h_in=eval(res[0][1])#高
img=style.split('url("')[1].split('");')[0]#图片地址
r=requests.get(img)
with open('../data/p1.png','wb') as f:
    f.write(r.content)
    
#返回缺口x坐标，是相对于下载出来的图片
result=base64_api('hfdy0935','09354121794','../data/p1.png',33)
#定位滑块
# button=web.find_elements('xpath','//div[@aria-label="拖动下方滑块完成拼图"][2]')
time.sleep(1)
#滑动
# actions=ActionChains(web)
#按理说两种都行，这里滑块框有点大，点左上角滑不动
# actions.drag_and_drop_by_offset(button,eval(result),0).perform()
# actions.click_and_hold(button).move_by_offset(eval(result),0).perform()

image=cv2.imread('../data/p1.png')
w_out=p1.shape[1]
result1=int(eval(result)*(w_in/w_out))
# #试试pyautogui

pg.PAUSE=0.5
dx=int(0.07*image.shape[1])
pg.moveTo(1181+dx,600,1)
pg.mouseDown()
pg.moveRel(result1,0,2)
pg.mouseUp()
#或者也可以移到滑块位置，按下，移动，到达后松手
#没成功，以后再看
```

```python
#B站登录
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
import time
import requests
import base64
import json
import cv2
import pyautogui as pg

def base64_api(uname, pwd, img, typeid):
    with open(img, 'rb') as f:
        base64_data = base64.b64encode(f.read())
        b64 = base64_data.decode()
    data = {"username": uname, "password": pwd, "typeid": typeid, "image": b64}
    result = json.loads(requests.post("http://api.ttshitu.com/predict", json=data).text)
    if result['success']:
        return result["data"]["result"]
    else:
        #！！！！！！！注意：返回 人工不足等 错误情况 请加逻辑处理防止脚本卡死 继续重新 识别
        return result["message"]
    return ""
    

opts=Options()
opts.add_argument('--start-maximized')
web=Chrome(options=opts)
web.get('https://www.bilibili.com/')
web.implicitly_wait(10)
web.find_element('xpath','//*[@id="i_cecream"]/div[2]/div[1]/div[1]/ul[2]/li[1]').click()
time.sleep(2)

web.implicitly_wait(10)
web.find_element('xpath','/html/body/div[3]/div/div[4]/div[2]/form/div[1]/input').send_keys('3493138528208963')
time.sleep(2)
web.find_element('xpath','/html/body/div[3]/div/div[4]/div[2]/form/div[3]/input').send_keys('09354121794zzw@')
time.sleep(1)
web.find_element('xpath','/html/body/div[3]/div/div[4]/div[2]/div[2]/div[2]').click()

on=web.find_element('xpath','/html/body/div[4]/div[2]/div[6]/div/div/div[1]/div[1]/div[2]')
url=on.get_attribute('style').split('url("')[1].split('")')[0]
r=requests.get(url)
path='../data/blbl.png'
with open(path,'wb') as f:
    f.write(r.content)
#查询结果格式为x1 y1|x2 y2|x3 y3......
result=base64_api('hfdy0935','09354121794',path,27)

# res=re.findall('.*?width: (.*?)px; height: (.*?)px.*?',style)
# width=eval(res[0][0])
# height=eval(res[0][1])
#显示的图像宽高
width=305.02
height=305.02

img=cv2.imread(path)
#保存的图像宽高
w=img.shape[1]
h=img.shape[0]-40
h_index=width/w#水平缩放系数
v_index=height/h#垂直缩放系数

# div=web.find_element('xpath','//div[@class="geetest_item_wrap"]')
# actions=ActionChains(web)
sx=759#左上角x
sy=395#左上角y
for xy in result.split('|'):
    #实际在图像中需要点击的点坐标
    x=int(eval(xy.split(',')[0])*h_index)
    y=int(eval(xy.split(',')[1])*v_index)
    # actions.move_to_element_with_offset(div,x,y).click()
    pg.moveTo(sx+x+30,sy+y+40,1)
    pg.click()
    time.sleep(1)
    
web.find_element('xpath','/html/body/div[4]/div[2]/div[6]/div/div/div[3]/a').click()
#成功了！
```

```python
#点击过程
import cv2
path='../data/blbl.png'
img=cv2.imread(path)
import matplotlib.pyplot as plt
img1=img[:344,:,:]
plt.figure(figsize=(20,12))
plt.subplot(211)
plt.imshow(cv2.cvtColor(img1,cv2.COLOR_BGR2RGB))

sx=759#左上角x
sy=395#左上角y
n=1
for xy in result.split('|'):
    x=int(eval(xy.split(',')[0])*h_index)
    y=int(eval(xy.split(',')[1])*v_index)
    cv2.circle(img1,[x,y+25],20,(0,0,255),5)
    plt.subplot(2,3,n+3)
    plt.imshow(cv2.cvtColor(img1,cv2.COLOR_BGR2RGB))
    n+=1

#成功了！
```

![png](/pages/python/network/spider/images/selenium-3.png)
    

**深度学习验证码识别**

<br/><b style='color:red'>控制已打开的浏览器</b>
<br/>不用再管网站对selenium的检测
<br/>（1）cmd切换到chrome浏览器所在的文件夹下，或者直接默路径，输入<b>start chrome --remote-debugging-port=9527 --user-data-dir='E:\selenium'</b>
<br/>&emsp;&emsp;其中9527是端口号，可以随便输入，只要后面保持一致就行
<br/>（2）这样会自动打开chrome，可以人工打开一些网站，完成登录等
<br/>（3）这样配置，<b>opts.add_experimental_option("debuggerAddress", "127.0.0.1:9527")</b>
<br/>（4）正常使用selenium即可
<br/><br/>也可以用os库调用命令行<b>os.popen('start chrome --remote-debugging-port=9527 --user-data-dir="E:\selenium"')</b>
<br/>&emsp;&emsp;注意单双引号
<br/>&emsp;&emsp;chrome路径要加到环境变量中
<br/>&emsp;&emsp;端口号和调用方式同上

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import os

os.popen('start chrome --remote-debugging-port=9999 --user-data-dir="E:/selenium"')
opts=Options()
opts.add_experimental_option('debuggerAddress','127.0.0.1:9999')
web=webdriver.Chrome(options=opts)
web.get('https://www.baidu.com')
```

<br/><b style='color:red'>连接其他电脑</b>
<br/>其他电脑也要安装selenium和驱动

![image.png](/pages/python/network/spider/images/selenium-4.png)

```python
from selenium.webdriver import Remote
# 需要加目标的IP，其他可选
```