---
title: pyautogui
titleTemplate: Python笔记
---


:::tip 模拟鼠标键盘的自动化工具
:::

```python
#一个cell多个输出
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = 'all'
```

```python
import pyautogui
```

## 1. 获取鼠标位置
<br>&emsp;&emsp;电脑屏幕，横x竖y，从0开始增加
<br>&emsp;&emsp;<b>pyautogui.position()</b>，获取当前鼠标位置
<br>&emsp;&emsp;<b>pyautogui.size()</b>，获取屏幕分辨率
<br>&emsp;&emsp;<b>pyautogui.onScreen(x,y)</b>，判断某点是否在屏幕上
<br>&emsp;&emsp;<b>pyautogui.FAILSAFE=FALSE</b>
<br>&emsp;&emsp;&emsp;&emsp;防止出问题，当鼠标移动到屏幕左上角时引发错误中止程序，可以通过以上命令关闭这种操作

```python
pyautogui.position()
pyautogui.size()
pyautogui.onScreen(1000,500)
pyautogui.onScreen(-10,-200)
```

## 2. 鼠标移动、点击
<br>&emsp;&emsp;<b>pyautogui.PAUSE=2.5</b>
<br>&emsp;&emsp;&emsp;&emsp;每次调用pyautogui的函数之后暂停2.5秒
<br>&emsp;&emsp;<b>pyautogui.moveTo(x=None,y=None,duration=0.0)</b>
<br>&emsp;&emsp;&emsp;&emsp;耗时duration把鼠标移动到x、y的位置
<br>&emsp;&emsp;<b>pyautogui.moveRel(xOffset=None,yOffset=None,duration=0.0)</b>
<br>&emsp;&emsp;&emsp;&emsp;耗时duration，把鼠标向下移动xOffset，向右移动yOffset

<br>&emsp;&emsp;<b>pyautogui.dragTo(x=None,y=None,duration=0.0)</b>
<br>&emsp;&emsp;&emsp;&emsp;耗时duration把鼠标拖拽到x、y
<br>&emsp;&emsp;<b>pyautogui.dragRel(xOffset=None,yOffset=None,duration=0.0)</b>
<br>&emsp;&emsp;&emsp;&emsp;耗时duration把鼠标向下拖拽xOffset，向右移动yOffset

<br>&emsp;&emsp;<b>pyautogui.click(x=None,y=None,clicks=1,interval=0.0, button='primary',duration=0.0)</b>
<br>&emsp;&emsp;&emsp;&emsp;x、y：鼠标移动到的位置，不指定则默认当前位置
<br>&emsp;&emsp;&emsp;&emsp;clicks：点击次数，默认1
<br>&emsp;&emsp;&emsp;&emsp;interval：每次点击间隔，默认0.0
<br>&emsp;&emsp;&emsp;&emsp;button：点击方式，'left'、'middle'、'right'
<br>&emsp;&emsp;<b>pyautogui.leftClick(x=None,y=None,duration=0.0)</b>，左键单击
<br>&emsp;&emsp;<b>pyautogui.rightClick(x=None,y=None,duration=0.0)</b>，右键单击
<br>&emsp;&emsp;<b>pyautogui.middleClick(x=None,y=None,duration=0.0)</b>，中键单击
<br>&emsp;&emsp;<b>pyautogui.doubleClick(x=None,y=None,duration=0.0,button='left')</b>，双击，默认左键
<br>&emsp;&emsp;<b>pyautogui.tripleClick(x=None,y=None,duration=0.0,button='left')</b>，三击，默认左键

```python
pyautogui.PAUSE=0.1
pyautogui.moveTo(1000,500,.5)
pyautogui.moveRel(-200,300,1)
pyautogui.dragTo(1000,500,1)
pyautogui.dragRel(100,-200,1)
```

```python
#原地右键单击
pyautogui.click(button='right')
```

## 3. 鼠标滚动
<br>&emsp;&emsp;<b>pyautogui.scroll(clicks,x=None,y=None)</b>
<br>&emsp;&emsp;&emsp;&emsp;移动到x、y位置（不指定则会在原地滚动），再向上滚动clicks格（可为负）
<br>&emsp;&emsp;<b>pyautogui.hscroll(clicks,x=None,y=None)</b>，水平方向滚动
<br>&emsp;&emsp;<b>pyautogui.vscroll(clicks,x=None,y=None)</b>，垂直方向滚动

```python
pyautogui.vscroll(-300)
```

## 4. 鼠标按下和抬起
<br>&emsp;&emsp;<b>pyautogui.mouseDown(x=None,y=None,button='primary')</b>
<br>&emsp;&emsp;&emsp;&emsp;移到x、y再按下，默认原地按下
<br>&emsp;&emsp;<b>pyautogui.mouseUp(x=None,y=None,button='primary')</b>
<br>&emsp;&emsp;&emsp;&emsp;移到x、y再抬起，默认原地抬起

```python
pyautogui.PAUSE=1
pyautogui.mouseDown(button='right')
pyautogui.moveRel(200,0)
pyautogui.moveRel(0,-200)
pyautogui.moveRel(-200,300)
pyautogui.mouseUp(button='right')
```

## 5. 缓动/渐变函数
<br>&emsp;&emsp;鼠标移动速度变化

```python
moveToX = 100
moveToY = 100
# #开始慢，结束快
pyautogui.moveTo(moveToX + 5 , moveToY+ 45, 2, pyautogui.easeInQuad)  
# 开始快，结束慢   
pyautogui.moveTo(moveToX + 300, moveToY+ 400, 2, pyautogui.easeOutQuad) 
# 快速开始和结束，中间缓慢
pyautogui.moveTo(moveToX + 500, moveToY+ 400, 2, pyautogui.easeInOutQuad)  
# 最后反弹
pyautogui.moveTo(moveToX + 700, moveToY+ 600, 2, pyautogui.easeInBounce)  
# 反复横跳
pyautogui.moveTo(moveToX + 1300, moveToY+ 800, 2, pyautogui.easeInElastic) 
```

## 6. 键盘函数
<br>&emsp;&emsp;中文无法输入
<br>&emsp;&emsp;<b>pyautogui.typewrite(message,invertial=0.0)</b>
<br>&emsp;&emsp;<b>pyautogui.write(message,invertial=0.0)</b>
<br>&emsp;&emsp;&emsp;&emsp;在当前位置输入文字message，每个字符间隔时间为interval默认0.0
<br>&emsp;&emsp;<b>pyautogui.KEYBOARD_KEYS</b>，查看所有支持键

```python
x,y=pyautogui.position()
pyautogui.moveTo(x,y)
pyautogui.click()
pyautogui.typewrite('first:#OpenCv#~!()*&^%$\n')
pyautogui.write('second:#OpenCv#~!()*&^%$',interval=0.2)
```

```python
first:#OpenCv#~!()*&^%$
second:#OpenCv#~!()*&^%$
```

```python
pyautogui.KEYBOARD_KEYS
```

## 7. 快捷键
<br>&emsp;&emsp;<b>pyautogui.hotkey('ctrl','c')</b>，Ctrl+C
<br>&emsp;&emsp;<b>pyautogui.hotkey('ctrl','v')</b>，Ctrl+V

<br>&emsp;&emsp;<b>pyautogui.keyDown('ctrl')</b>，按下Ctrl键
<br>&emsp;&emsp;<b>pyautogui.keyDown('v')</b>，按下v键
<br>&emsp;&emsp;<b>pyautogui.keyUp('ctrl')</b>，松开Ctrl键
<br>&emsp;&emsp;&emsp;&emsp;不松开会一直生效，不能满足只按一次的情况

<br>&emsp;&emsp;<b>pyautogui.press('alt')</b>，按下某个键再释放某个键，只生效一次
<br>&emsp;&emsp;<b>pyautogui.press('right')</b>，按右箭头键
<br>&emsp;&emsp;<b>pyautogui.press('left')</b>，按左箭头键
<br>&emsp;&emsp;<b>pyautogui.press(['win',v'])</b>，按顺序依次按，间隔极短
<br>&emsp;&emsp;<b>pyautogui.press(['%','#'],presses=5)</b>，设置按压次数5次

```python
x,y=pyautogui.position()
#原来是选中的，点一下左键取消选中
pyautogui.click(x,y,button='left')
#按下左键并向右移动再抬起，选中
pyautogui.mouseDown(x,y,button='left')
pyautogui.moveTo(x+300,y)
pyautogui.mouseUp(button='left')
#复制，换行粘贴
pyautogui.hotkey('ctrl','c')
pyautogui.click(x+200,y,button='left')
# pyautogui.keyDown('enter')
pyautogui.press('enter')
pyautogui.hotkey('ctrl','v')
```

```python
#2023年6月21号
#2023年6月21号
```

```python
#输出斐波那契数列，和0-9的1-4次幂
def fb(n):
    if n==1 or n==2:
        return 1
    else:
        return fb(n-1)+fb(n-2)

pyautogui.PAUSE=0.1
x,y=pyautogui.position()
for i in range(1,11):
    message=str(fb(i))
    if i==1:
        message='#'+message
        pyautogui.click(x,y,button='left')
    pyautogui.write(message+'  ')

for j in range(1,5):
    #pyautogui.write('\n')
    pyautogui.press('enter')
    pyautogui.click(x,y+23*j,button='left')
    for i in range(1,11):
        message=str(i**j)
        if i==1:
            message='#'+message
        pyautogui.write(message+'  ') 
```

```python
#测试cell
#1  1  2  3  5  8  13  21  34  55  
#1  2  3  4  5  6  7  8  9  10  
#1  4  9  16  25  36  49  64  81  100  
#1  8  27  64  125  216  343  512  729  1000  
#1  16  81  256  625  1296  2401  4096  6561  10000  
```

```python
x,y=pyautogui.position()
pyautogui.click(x,y,button='left')
pyautogui.PAUSE=1

#先英文输入法，再中文输入法
pyautogui.press(['#','t','t','k','p',' '],presses=3)
pyautogui.press(['shift','enter','#'])
pyautogui.press('shift')
pyautogui.press(['t','t','k','p'])
pyautogui.press('1')
```

```python
#ttkp #ttkp #ttkp 
#天天酷跑
```

```python
#动态显示鼠标当前位置
import cv2
while True:
    x,y=pyautogui.position()
    print('\r当前鼠标位置：x={},y={}'.format(x,y),end='')
    if cv2.waitKey(1)==ord('q'):
        break
```

## 8. hold()上下文管理器
<br>&emsp;&emsp;hold()函数可以用作上下文管理器，
<br>&emsp;&emsp;&emsp;&emsp;从pyautogui.KEYBOARD_KEYS传递一个字符串，并且该键将在上下文块的持续时间内保持。

```python
x,y=pyautogui.position()
pyautogui.moveTo(x,y)
pyautogui.keyDown('enter')
pyautogui.keyUp('enter')
pyautogui.PAUSE=1

with pyautogui.hold('shift'):
    #按三个字母,然后松开shift
    pyautogui.press(['a','b','c'])

pyautogui.write('\n')

#等价于
pyautogui.keyDown('shift')
pyautogui.press(['a','b','c'])
pyautogui.keyUp('shift')
```

```python
ABC
ABC
```

## 9. 消息框函数
<br>&emsp;&emsp;暂停程序直到用户点击，或者向用户显示一些信息，有些值默认为空
<br>&emsp;&emsp;<b>pyautogui.alert(text='',title='',button='')</b>
<br>&emsp;&emsp;&emsp;&emsp;提示窗口，设置提示内容、标题、按钮
<br>&emsp;&emsp;<b>pyautogui.confirm(text='',title='',buttons=('OK','Cancel'))</b>
<br>&emsp;&emsp;&emsp;&emsp;确认窗口，设置内容、标题、按钮
<br>&emsp;&emsp;<b>pyautogui.prompt(text='',title='',defalut='')</b>
<br>&emsp;&emsp;&emsp;&emsp;defalut默认文字
<br>&emsp;&emsp;&emsp;&emsp;输入之后，点ok保存输入的密码，点calcel返回None
<br>&emsp;&emsp;<b>pyautogui.password(text='',title='',default='',mask='*')</b>
<br>&emsp;&emsp;&emsp;&emsp;default默认文字，mask用什么符号代替输入的密码
<br>&emsp;&emsp;&emsp;&emsp;输入之后，点ok保存输入的密码，点calcel返回None

```python
alert_result=pyautogui.alert(text='恭喜通过',title='通知')
```

```python
confirm_result=pyautogui.confirm(text='是否明白？',buttons=('我已知晓','我不明白'))
```

```python
prompt_result=pyautogui.prompt(text='输入手机号',title='手机号验证',default='+86 ')
```

```python
password_result=pyautogui.password(text='输入密码',title='密码验证',mask='密')
```

```python
alert_result
```

    'OK'

```python
confirm_result
```

    '我不明白'

```python
prompt_result
```

    '+86 12345'

```python
password_result
```

    '我是密码我是密码233￥￥￥@'

```python
import pyautogui
s=['123','qwes','352erg','好名字']
while True:
    if a:=pyautogui.prompt(text='输入账号',title='信息确认')=='q':
        break
    elif a:=pyautogui.prompt(text='输入账号',title='信息确认') in s:
        print('查询成功')
    else:
        print('查询失败')
```

    查询失败
    查询成功
    查询成功
    查询成功
    

## 10. 截图函数
<br>&emsp;&emsp;<b>img=pyautogui.screenshot(imageFilename=None, region=None)</b>
<br>&emsp;&emsp;&emsp;&emsp;返回截图对象，img时PIL中的Image对象
<br>&emsp;&emsp;&emsp;&emsp;imageFilename保存文件位置，
<br>&emsp;&emsp;&emsp;&emsp;region截图区域[x,y,w,h]，左上角坐标和区域宽高，不指定默认截全屏
<br>&emsp;&emsp;<b>img.save(path)</b>，保存图片

```python
import matplotlib.pyplot as plt
```

```python
img=pyautogui.screenshot()
plt.imshow(img)
print(type(img))
img.save('screenshot.jpg')
```

    <class 'PIL.Image.Image'>
    

    
![png](/pages/python/basic/library/images/output_40_1.png)
    

```python
img_part=pyautogui.screenshot(region=[600,300,800,400])
plt.imshow(img_part)
```

    <matplotlib.image.AxesImage at 0x220ec2b6bc0>

    
![png](/pages/python/basic/library/images/output_41_1.png)
    

```python
#用opencv显示PIL的Image对象
#np.asarray()将结构数据转化为ndarray
import numpy as np
import cv2
img1=cv2.cvtColor(np.asarray(img),cv2.COLOR_RGB2BGR)

cv2.namedWindow('show',cv2.WINDOW_NORMAL)
cv2.resizeWindow('show',1080,640)
while True:
    cv2.imshow('show',img1)
    if cv2.waitKey(1)==ord('q'):
        break
cv2.destroyAllWindows()
```

```python
#根据符号获取ASCII码
print(ord('q'))
#根据十二星座的ASCII码获取符号
list(map(chr,range(9800,9813)))
```

    113
    

    ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '♔']

## 11. 图像定位
<br>&emsp;&emsp;从左上角开始向右向下搜索截图位置
<br>&emsp;&emsp;<b>pyautogui.locateOnScreen(image,grayscale=False)</b>
<br>&emsp;&emsp;&emsp;&emsp;在屏幕中返回和image最类似区域的(x,y,w,h)，如果没找到返回None
<br>&emsp;&emsp;&emsp;&emsp;grayscale设置是否灰度查找

<br>&emsp;&emsp;<b>pyautogui.locateCenterOnScreen(image,grayscale=False)</b>
<br>&emsp;&emsp;&emsp;&emsp;在屏幕中返回最类似区域的中心坐标(x,y)

<br>&emsp;&emsp;<b>pyautogui.locateAllOnScreen(image,grayscale=False)</b>
<br>&emsp;&emsp;&emsp;&emsp;在屏幕中返回和image所有类似区域的坐标(x,y,w,h)的生成器

<br>&emsp;&emsp;<b>pyautogui.locate(needleImage,haystackImage,grayscale=False)</b>
<br>&emsp;&emsp;&emsp;&emsp;在haystackImage中返回和needleImage最类似区域的坐标(x,y,w,h)

<br>&emsp;&emsp;<b>pyautogui.locateAll(needleImage,haystackImage,grayscale=False)</b>
<br>&emsp;&emsp;&emsp;&emsp;在haystackImage中返回和needleImage所有类似区域的坐标(x,y,w,h)的生成器

<br>&emsp;&emsp;grayscale=True可以给定位函数轻微加速，但会降低图像和屏幕截图的颜色饱和度
<br>&emsp;&emsp;可以指定confidence置信度，大于它的将被认为是匹配结果
<br>&emsp;&emsp;用opencv中的模板匹配效果更好

```python
img1=pyautogui.screenshot(region=[1800,200,100,300])
plt.imshow(img1)
plt.show()
match_pos=pyautogui.locateOnScreen(img1)
match_center=pyautogui.locateCenterOnScreen(img1)
match_all=pyautogui.locateAllOnScreen(img1,confidence=0.8)
print(match_pos)
print(match_center)
#遍历所有结果
# for i in match_all:
#     print(i)
list(match_all)
```

    
![png](/pages/python/basic/library/images/output_45_0.png)
    

    Box(left=1800, top=200, width=100, height=300)
    Point(x=1850, y=350)
    

    [Box(left=1800, top=197, width=100, height=300),
     Box(left=1799, top=198, width=100, height=300),
     Box(left=1800, top=198, width=100, height=300),
     Box(left=1799, top=199, width=100, height=300),
     Box(left=1800, top=199, width=100, height=300),
     Box(left=1801, top=199, width=100, height=300),
     Box(left=1799, top=200, width=100, height=300),
     Box(left=1800, top=200, width=100, height=300),
     Box(left=1801, top=200, width=100, height=300),
     Box(left=1802, top=200, width=100, height=300),
     Box(left=1799, top=201, width=100, height=300),
     Box(left=1800, top=201, width=100, height=300),
     Box(left=1801, top=201, width=100, height=300),
     Box(left=1800, top=202, width=100, height=300),
     Box(left=1801, top=202, width=100, height=300)]

&emsp;&emsp;获取屏幕某个位置的RGB像素值
<br>&emsp;&emsp;<b>pyautogui.pixel(x,y)</b>
<br>&emsp;&emsp;颜色匹配
<br>&emsp;&emsp;<b>pyautogui.pixelMatchesColor(x,y,(r,g,b),tolerance=0)</b>
<br>&emsp;&emsp;&emsp;&emsp;判断该位置的像素值是否和已知RGB值匹配，tolerance表示RGB允许误差范围

```python
#两种都可以
im=pyautogui.screenshot()
print(im.getpixel((1000,500)))
print(pyautogui.pixel(1000,500))

pyautogui.pixelMatchesColor(1000,500,(210,210,210),tolerance=20)
```

    (229, 222, 203)
    (229, 222, 203)
    

