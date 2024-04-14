---
title: 基本语法2
titleTemplate: Python笔记
---

## 4. 程序的控制结构

顺序结构、分支结构、循环结构

分支结构
<br/>&emsp;&emsp;单分支结构，判断条件是否成立，是否执行语句
<br/>&emsp;&emsp;二分支结构，根据条件是否成立，执行不同的语句
<br/>&emsp;&emsp;&emsp;&emsp;紧凑形式<b><表达式 1>if<条件>else<表达式 2></b>
<br/>&emsp;&emsp;多分支结构，多条件多语句，if: elif: elif: else:

条件判断及组合：<b> > < >= \<= == != and or not</b>

异常处理
<br/>&emsp;&emsp;<b>try: <语句块 1> except: <语句块 2> except: <语句块 3> else: <语句块 4> finally: <语句块 5></b>

```python
guess=input()
if guess=='99':
    print('猜对了')
else:
    print('猜错了')
```

     99


    猜对了

```python
guess=eval(input())
print('猜{}了'.format('对' if guess==99 else '错'))
```

     12


    猜错了

```python
if not True:
    print(1)
else:
    print(2)
```

    2

```python
#不发生异常执行1、3、4
#发生异常执行2、4
try:
    num=eval(input('输入一个数：'))
    print(num**2)
except NameError as a:#加异常类型，名字预定义了，后续语句块只能响应该名称对应的异常
    print('发生异常：',a)
else:#不发生异常时执行
    print('不发生异常才执行')
finally:#一定会执行
    print('一定会执行')

print('\n')
try:
    num=eval(input('输入一个数：'))
    print(num**2)
except:
    print('输入不是数')
else:#不发生异常时执行
    print('不发生异常才执行')
finally:#一定会执行
    print('一定会执行')

print('最后一行看会不会执行')
```

    输入一个数： w


    发生异常： name 'w' is not defined
    一定会执行




    输入一个数： 1


    1
    不发生异常才执行
    一定会执行
    最后一行看会不会执行

```python
h,m=eval(input())
BMI=m/h**2
if BMI<18.5:
    BMIg,BMIc='偏瘦','偏瘦'
elif 18.5<BMI<24:
    BMIg,BMIc='正常','正常'
elif 24<BMI<25:
    BMIg,BMIc='正常','偏胖'
elif 25<BMI<28:
    BMIg,BMIc='偏胖','偏胖'
elif 28<BMI<30:
    BMIg,BMIc='偏胖','肥胖'
else:
    BMIg,BMIc='肥胖','肥胖'
print('BMI数值为:{:.2f}'.format(BMI))
print("BMI指标为:国际'{0:}',国内'{1:}'".format(BMIg,BMIc))
```

     1.68,60


    BMI数值为:21.26
    BMI指标为:国际'正常',国内'正常'

```python
#计算BMI
h,w=eval(input('输入身高（米）和体重（公斤）[逗号隔开]：'))
bmi=w/h**2
print('BMI：{:.2f}'.format(bmi))
who=''
if bmi<18.5:
    who='偏瘦'
elif 18.5<=bmi<25:
    who='正常'
elif 25<=bmi<30:
    who='偏胖'
else:
    who='肥胖'
print('BMI指标（国际）：{0}'.format(who))
```

    输入身高（米）和体重（公斤）[逗号隔开]： 1.68,60


    BMI：21.26
    BMI指标（国际）：正常

循环结构
<br/>&emsp;&emsp;遍历循环，for
<br/>&emsp;&emsp;无限循环，while，Ctrl+C 退出当前运行的程序

循环控制保留字
<br/>&emsp;&emsp;break：跳出当前循环，执行循环后面的语句，有多层循环时仅跳出当层循环（一层）
<br/>&emsp;&emsp;continue：跳出当此循环，执行后次循环

循环与 else 语句组合，循环没有被 break 或 continue 时，执行完会执行 else 语句

```python
s='asqwedaqd123啊啊啊'
for i in s:
    print(i,end='|')
print('\n')

for i in range(5):
    print(i**2,end=' ')
print('\n')

for i in [1,2,3,4,5,6,'w','三维']:
    print(i,end=',')


f=open('test.txt','r')
print('\n')
for line in f:#遍历文件每一行
    print(line)
f.close()
print('\n')

with open('test.txt','r') as f:
    print(f.read(3))#读取字符个数
    print(f.readline())#读取下一行
```

    a|s|q|w|e|d|a|q|d|1|2|3|啊|啊|啊|

    0 1 4 9 16

    1,2,3,4,5,6,w,三维,

    10	20	30

    10	20	30

    10	20	30



    10
    20	30

```python
import cv2
vc=cv2.VideoCapture(0)
while True:
    ret,frame=vc.read()
    cv2.imshow('img',frame)
    cv2.imshow('img1',cv2.flip(frame,1))
    if cv2.waitKey(1)==ord('q'):
        break
vc.release()q
cv2.destroyAllWindows()
```

```python
for i in range(5):
    print(i**2)
else:
    print('都运行完了，没有被break和continue。')
```

    0
    1
    4
    9
    16
    都运行完了，没有被break和continue。

```python
for i in range(2,10):
    for n in range(2,i):
        if i%n==0:
            print(i,'不是素数,它等于',n,'*',i//n)
    else:
        print(i,'是素数')
```

    2 是素数
    3 是素数
    4 不是素数,它等于 2 * 2
    4 是素数
    5 是素数
    6 不是素数,它等于 2 * 3
    6 不是素数,它等于 3 * 2
    6 是素数
    7 是素数
    8 不是素数,它等于 2 * 4
    8 不是素数,它等于 4 * 2
    8 是素数
    9 不是素数,它等于 3 * 3
    9 是素数

import random

random 库：使用随机数的 python 标准库
<br/>&emsp;&emsp;伪随机数：采用梅森旋转算法生成的（伪）随机序列中元素

基本随机数函数：
<br/>&emsp;&emsp;<b>random.seed()</b>，随机数种子，相同种子产生相同的随机数，如果不指定则默认使用当前时间作为种子
<br/>&emsp;&emsp;<b>random.random()</b>，0-1，左闭右开，小数随机数

扩展随机数函数：
<br/>&emsp;&emsp;<b>random.randint(a,b)</b>，生成 a 到 b 之间的一个随机整数，<span style='color:red'>左闭右闭，和 np.random.randint 不同</span>
<br/>&emsp;&emsp;<b>random.randrange(m,n[,k])</b>，生成 m 到 n 以 k 位步长的随机整数，左闭右开
<br/>&emsp;&emsp;<b>random.getrandbits(k)</b>，生成一个 k 比特长的随机整数
<br/>&emsp;&emsp;<b>random.uniform(a,b)</b>，生成 a 到 b 之间随机小数，左闭右开
<br/>&emsp;&emsp;<b>random.choice(seq)</b>，从序列 seq 中随机选择一个元素
<br/>&emsp;&emsp;<b>random.shuffle(seq)</b>，将序列 seq 中元素随机排列，返回打乱后的序列
<br/>&emsp;&emsp;<b>random.sample(s,5)</b>，从序列 s 中随机选择 5 个数

```python
import random
random.seed(10)
random.random()
random.seed()
random.random()
random.randint(1,10)
random.randrange(10,100,10)
random.getrandbits(8)
random.uniform(10,100)#16位小数

s=[1,2,3,4,5,1,2,3,4,1,'a','a','q','r','一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五']
random.choice(s)

s1=[1,2,3,4,5,6,7,8,9]
random.shuffle(s1)
print(s1)

random.sample(s,5)
```

    0.5714025946899135

    0.03314126944526641

    2

    70

    182

    72.58152854130807

    'a'

    [7, 3, 5, 1, 9, 6, 4, 8, 2]


    ['q', 1, 3, 2, '七']

```python
#numpy可以定义随机整数的数量
import numpy as np
np.random.randint(10,11,(10,10))#左闭右开
```

    array([[10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
           [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
           [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
           [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
           [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
           [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
           [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
           [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
           [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
           [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]])

```python
#圆周率近似计算公式
pi=0
N=100
for k in range(N):
    pi+=1/pow(16,k)*(4/(8*k+1)-2/(8*k+4)-1/(8*k+5)-1/(8*k+6))
print('圆周率的值是：{:.20f}'.format(pi))
```

    圆周率的值是：3.14159265358979311600

计算圆周率之蒙特卡洛方法，随机点，圆内点数除以正方形内总点数得到 pi/4

```python
from random import random
from time import perf_counter
DARTS=1000*1000
hits=0.0#圆内点数
start=perf_counter()
for i in range(1,DARTS+1):
    x,y=random(),random()
    dist=pow((x**2+y**2),0.5)
    if dist<=1.0:
        hits+=1
pi=4*(hits/DARTS)
print('圆周率的值是：{:.20f}'.format(pi))
print('运行时间为：{:.5f}s'.format(perf_counter()-start))
```

    圆周率的值是：3.14469200000000004280
    运行时间为：0.84873s

```python

```

## 5. 函数和代码复用

函数的理解和定义：
<br/>&emsp;&emsp;<b>def<函数名>(<参数（0 个或多个）>):
<br/>&emsp;&emsp;&emsp;&emsp;<函数体>
<br/>&emsp;&emsp;&emsp;&emsp;return <返回值></b>

函数的使用及调用过程

函数的参数传递：
<br/>&emsp;&emsp;函数可以有参数也可以没有参数，但必须有括号
<br/>&emsp;&emsp;<span style='color:red'>可选参数必须放在非可选参数后面</span>
<br/>&emsp;&emsp;可变参数传递，不确定函数接收参数的数量，确定要给的参数放在前面，不确定的放在后面如<b>\*b</b>
<br/>&emsp;&emsp;参数传递方式：位置传递（实参和形参位置对应），名称传递（位置可以不对应，但要表明谁等于多少）

函数的返回值：
<br/>&emsp;&emsp;<b>return</b>，可以有返回值也可以没有，可以一个返回值也可以多个（用逗号分开，元组类型），可以有 return 也可以没有 return

局部变量和全局变量：
<br/>&emsp;&emsp;函数运行结束后，局部变量被释放
<br/>&emsp;&emsp;用<b>global</b>保留字在函数内部使用全局变量（全局与局部名字重合时），如果不重合直接在函数内用全局变量就行

pass：
<br/>&emsp;&emsp;用在语法上必须有语句，但程序什么都不做的情况

```python
#计算阶乘
def fact(n,m=1):
    s=1
    for i in range(1,n+1):
        s*=i
    return s//m,n,m

fact(5,2)
fact(5)#不指定m，默认1
fact(5,2)#位置传递
fact(m=2,n=5)#名称传递
a,b,c=fact(5,2)
```

    (60, 5, 2)

    (120, 5, 1)

    (60, 5, 2)

    (60, 5, 2)

```python
#计算阶乘
def fact(n,*b):
    s=1
    for i in range(1,n+1):
        s*=i
    for item in b:
        s*=item
    return s
fact(5,3)
fact(5,2)
```

    360

    240

```python
n,s=10,100
def fact(n):
    global s
    for i in range(1,n+1):
        s*=i
    return s
print(fact(n),s)
```

    362880000 362880000

lambda 函数
<br/>&emsp;&emsp;返回函数名作为结果，简单函数，特殊情况使用

```python
f=lambda x,y:x+y
f(10,15)
```

    25

```python
f=lambda:'lambda函数'
f()
```

    'lambda函数'

七段数码管绘制
<br/>&emsp;&emsp;起始点左中点，方向依次为右下左上上右下
<br/>&emsp;&emsp;模块化思维：确定模块接口，封装功能
<br/>&emsp;&emsp;规则化思维：抽象过程为规则，计算机自动执行
<br/>&emsp;&emsp;化繁为简：将大功能变为小功能组合，分而治之

```python
import turtle
import time

def drawGap():#绘制间隔
    turtle.penup()
    turtle.fd(5)

def drawLine(draw):#绘制单端数码管
    drawGap()
    turtle.pendown() if draw else turtle.penup()
    turtle.fd(40)
    drawGap()
    turtle.right(90)

def drawDigit(digit):#根据数字绘制七段数码管
    drawLine(True) if digit in [2,3,4,5,6,8,9] else drawLine(False)
    drawLine(True) if digit in [0,1,3,4,5,6,7,8,9] else drawLine(False)
    drawLine(True) if digit in [0,2,3,5,6,8,9] else drawLine(False)
    drawLine(True) if digit in [0,2,6,8] else drawLine(False)
    turtle.left(90)#转回向上方向
    drawLine(True) if digit in [0,4,5,6,8,9] else drawLine(False)
    drawLine(True) if digit in [0,2,3,5,6,7,8,9] else drawLine(False)
    drawLine(True) if digit in [0,1,2,3,4,7,8,9] else drawLine(False)
    turtle.left(180)
    turtle.penup()
    turtle.fd(20)

#date为日期，格式为'%Y-%m=%d+'
def drawDate(date):
    turtle.pencolor("red")
    for i in date:
        if i == '-':
            turtle.write('年',font=("Arial", 18, "normal"))
            turtle.pencolor("green")
            turtle.fd(40)
        elif i == '=':
            turtle.write('月',font=("Arial", 18, "normal"))
            turtle.pencolor("blue")
            turtle.fd(40)
        elif i == '+':
            turtle.write('日',font=("Arial", 18, "normal"))
        else:
            drawDigit(eval(i))

def main():
    turtle.setup(800,350,200,200)
    turtle.penup()
    turtle.fd(-300)
    turtle.pensize(5)
    drawDate(time.strftime('%Y-%m=%d+',time.gmtime()))
    turtle.hideturtle()
    turtle.done()

main()
```

```python
#倒计时
import turtle
import time
import random

colorList=['red','yellow','blue','green','purple','black','cyan']

def drawGap():
    turtle.penup()
    turtle.fd(5)

def drawLine(mark):
    drawGap()
    turtle.pendown() if mark else turtle.penup()
    turtle.fd(40)
    drawGap()
    turtle.right(90)

def drawDigit(digit):
    drawLine(True) if digit in [2,3,4,5,6,8,9] else drawLine(False)
    drawLine(True) if digit in [0,1,3,4,5,6,7,8,9] else drawLine(False)
    drawLine(True) if digit in [0,2,3,5,6,8,9] else drawLine(False)
    drawLine(True) if digit in [0,2,6,8] else drawLine(False)
    turtle.left(90)#转回向上方向
    drawLine(True) if digit in [0,4,5,6,8,9] else drawLine(False)
    drawLine(True) if digit in [0,2,3,5,6,7,8,9] else drawLine(False)
    drawLine(True) if digit in [0,1,2,3,4,7,8,9] else drawLine(False)
    turtle.left(180)#转回向右方向
    turtle.penup()
    turtle.fd(20)

def drawL():
    for i in range(9,-1,-1):
        color_rand=random.randint(0,6)
        turtle.pencolor(colorList[color_rand])
        drawDigit(i)
        time.sleep(1)


def main():
    turtle.setup(800,350,200,200)
    turtle.penup()
    turtle.fd(-350)
    turtle.pensize(5)
    drawL()
    turtle.hideturtle()
    turtle.done()

main()
```

代码复用和函数递归
<br/>&emsp;&emsp;函数定义中调用函数自身的方式

```python
#计算阶乘
def jc(n):
    if n==0:
        return 1
    else:
        return n*jc(n-1)

jc(5)
```

    120

```python
#斐波那契（Fibonacci）数列
def fibonacci(n):
    if n in [1,2]:
        return 1
    else:
        return fibonacci(n-1)+fibonacci(n-2)

fibonacci(10)
```

    55

```python
#字符串反转，可以s[::-1]，也可以递归
def rvs(s):
    if s=='':
        return s
    else:
        return rvs(s[1:])+s[0]

rvs('qwerdsqwe')
```

    'ewqsdrewq'

```python
#汉诺塔问题，需要2^n-1次移动，n为圆盘数量
count=0
def hanoi(n,src,dst,mid):#圆盘数量，源柱子，目标柱子，中间柱子
    global count
    if n==1:
        print('第{}个:{}->{}'.format(1,src,dst))
        count+=1
    else:
        hanoi(n-1,src,mid,dst)
        print('第{}个:{}->{}'.format(n,src,dst))
        count+=1
        hanoi(n-1,mid,dst,src)

hanoi(4,'A','C','B')
print(count)
```

    第1个:A->B
    第2个:A->C
    第1个:B->C
    第3个:A->B
    第1个:C->A
    第2个:C->B
    第1个:A->B
    第4个:A->C
    第1个:B->C
    第2个:B->A
    第1个:C->A
    第3个:B->C
    第1个:A->B
    第2个:A->C
    第1个:B->C
    15

PyInstaller 库
<br/>&emsp;&emsp;把 py 源代码转换成可执行文件，如转换成 Windows 下的.exe 可执行文件
<br/>&emsp;&emsp;在 Anaconda Prompt 中输入 pyinstaller -F D:\\桌面\python\python 基础\test\text.py；也可以先切到 test 目录，再直接 pyinstaller -F text.py。
<br/>&emsp;&emsp;生成的.exe 路径<b>（如果不切目录用默认 C 盘目录则生成在 C 盘目录中，若切了目录则生成在切了之后的目录）</b>。
<br/>&emsp;&emsp;<b>cd..</b>返回上一级，<b>cd 文件夹名</b> 来到当前文件夹下的目标文件夹，<b>E：</b>C 盘直接切换到 E 盘
<br/>&emsp;&emsp;常用参数：
<br/>&emsp;&emsp;&emsp;&emsp;<b>pyinstaller -h</b>查看帮助
<br/>&emsp;&emsp;&emsp;&emsp;<b>pyinstaller --clean</b>清理打包过程中的临时文件
<br/>&emsp;&emsp;&emsp;&emsp;<b>pyinstaller -D, pyinstaller --onedir</b>默认值，生成 dist 文件夹
<br/>&emsp;&emsp;&emsp;&emsp;<b>pyinstaller -F, pyinstaller --onefile</b>在 dist 文件夹中只生成独立的打包文件
<br/>&emsp;&emsp;&emsp;&emsp;<b>pyinstaller -i\<图标文件名.ico\></b>指定打包程序使用的图标文件
<br/>&emsp;&emsp;&emsp;&emsp;<b>pyinstaller -p 库的路径</b>引入第三方库

```python
#import PyInstaller
```

```python
#卸载
#pip uninstall PyInstaller
```

```python
#添加图标并生成.exe
#pyinstaller -i D:\桌面\python\python基础\test\cf.ico -F D:\桌面\python\python基础\test\text.py
```

**cx_Freeze**打包

```python
# pip install cx-Freeze
```

```python
# 切到对应目录下
# cxfreeze xxx.py
```

```python

```

科赫雪花小包裹
<br/>&emsp;&emsp;分形几何：一种迭代的几何图形
<br/>&emsp;&emsp;科赫曲线/雪花曲线

```python
import turtle
import random

cl=['red','yellow','cyan','purple','green','orange','blue']
#原始长度，绘制阶数
def koch(size,n):
    if n==0:
        cs=random.randint(0,6)
        turtle.pencolor(cl[cs])
        turtle.fd(size)
    else:
        for angle in [0,60,-120,60]:
            turtle.left(angle)
            koch(size/3,n-1)

def main():
    turtle.setup(800,800)
    turtle.penup()
    turtle.goto(-200,100)
    turtle.pendown()
    turtle.pensize(2)

    level=3#阶数
    koch(400,level)
    turtle.right(120)
    koch(400,level)
    turtle.right(120)
    koch(400,level)

    turtle.hideturtle()
    turtle.done()
main()
```

```python
import turtle
import random

cl=['red','yellow','cyan','purple','green','orange','blue']
#原始长度，绘制阶数
def koch(size,n):
    if n==0:
        cs=random.randint(0,6)
        turtle.pencolor(cl[cs])
        turtle.fd(size)
    else:
        for angle in [0,90,-90,-90,90]:
            turtle.left(angle)
            koch(size/3,n-1)

def main():
    turtle.speed(0)
    turtle.setup(800,800)
    turtle.penup()
    turtle.goto(-200,100)
    turtle.pendown()
    turtle.pensize(2)

    level=2#阶数
    koch(400,level)
    turtle.right(90)
    koch(400,level)
    turtle.right(90)
    koch(400,level)
    turtle.right(90)
    koch(400,level)

    turtle.hideturtle()
    turtle.done()
main()
```

## 6. 组合数据类型

（1）集合
<br/>&emsp;&emsp;多个元素的<b>无序</b>组合，集合中的元素不能被修改
<br/>&emsp;&emsp;用{}表示，元素之间用逗号分割
<br/>&emsp;&emsp;建立集合用{}或 set()函数
<br/>&emsp;&emsp;集合间的运算：
<br/>&emsp;&emsp;&emsp;&emsp;<b>S|T</b>，并集
<br/>&emsp;&emsp;&emsp;&emsp;<b>S-T</b>，差集，在 S 中但不在 T 中
<br/>&emsp;&emsp;&emsp;&emsp;<b>S&T</b>，交集
<br/>&emsp;&emsp;&emsp;&emsp;<b>S^T</b>，补集，返回不相同元素
<br/>&emsp;&emsp;&emsp;&emsp;<b>S<=T 或 S>=T 或 S<T 或 S>T</b>，返回 True/False，包含关系

&emsp;&emsp;增强操作符：
<br/>&emsp;&emsp;&emsp;&emsp;<b>S|=T</b>，并集赋给 S
<br/>&emsp;&emsp;&emsp;&emsp;<b>S-=T</b>，差集赋给 S
<br/>&emsp;&emsp;&emsp;&emsp;<b>S&=T</b>，交集赋给 S
<br/>&emsp;&emsp;&emsp;&emsp;<b>S^=T</b>，补集赋给 S

&emsp;&emsp;集合处理方法：
<br/>&emsp;&emsp;&emsp;&emsp;<b>S.add(x)</b>，如果 x 不在集合 S 中，则将 x 增加到 S 中
<br/>&emsp;&emsp;&emsp;&emsp;<b>S.discard(x)</b>，移除 S 中元素 x，如果 x 不在 S 中不会报错
<br/>&emsp;&emsp;&emsp;&emsp;<b>S.remove(x)</b>，移除 S 中元素 x，如果 x 不在 S 中会产生 KeyErroe 异常<br/>&emsp;&emsp;&emsp;&emsp;<b>S.clear()</b>，清除 S 中所有元素
<br/>&emsp;&emsp;&emsp;&emsp;<b>S.pop()</b>，随机取出一个元素，把这个元素返回给用户，同时在集合中删除，若为空取不出来则产生 KeyErroe 异常
<br/>&emsp;&emsp;&emsp;&emsp;<b>S.copy()</b>，返回集合 S 的一个副本
<br/>&emsp;&emsp;&emsp;&emsp;<b>len(S)</b>，返回集合 S 中的元素个数
<br/>&emsp;&emsp;&emsp;&emsp;<b>x in S</b>，判断 x 是否在 S 中，返回 True/False
<br/>&emsp;&emsp;&emsp;&emsp;<b>x not in S</b>
<br/>&emsp;&emsp;&emsp;&emsp;<b>set(x)</b>，将其他类型变量 x 转变为集合类型

&emsp;&emsp;应用场景：
<br/>&emsp;&emsp;&emsp;&emsp;判断元素是否在集合中
<br/>&emsp;&emsp;&emsp;&emsp;集合之间包含关系的比较，如 A>=B，返回 True/False
<br/>&emsp;&emsp;&emsp;&emsp;利用不重复的特点对其他类型的数据转换成集合<b>去重</b>，再转回原类型

```python
A={'python',123,('python',123)}
A
B=set('pypy123')
B
C={'w','w',1,1}
C
```

    {('python', 123), 123, 'python'}

    {'1', '2', '3', 'p', 'y'}

    {1, 'w'}

```python
A={'p','y',123}
B=set('pypy123')
A
B
A-B
B-A
A&B
A|B
A^B
```

    {123, 'p', 'y'}

    {'1', '2', '3', 'p', 'y'}

    {123}

    {'1', '2', '3'}

    {'p', 'y'}

    {'1', 123, '2', '3', 'p', 'y'}

    {'1', 123, '2', '3'}

```python
A={'p','y',123}
A
for item in A:
    print(item,end='')

A.add('add')
A

A.discard(999)
```

    {123, 'p', 'y'}

    123yp

    {123, 'add', 'p', 'y'}

```python
A={'p','y',123}
try:
    while True:
        print(A.pop(),end='')
except:
    pass

A
```

    py123

    set()

（2）序列（字符串、元组、列表）
<br/>&emsp;&emsp;序列是一维元素向量，元素类型可以不同
<br/>&emsp;&emsp;序列处理函数及方法：
<br/>&emsp;&emsp;&emsp;&emsp;<b>x in s</b>，x 是否在 s 中
<br/>&emsp;&emsp;&emsp;&emsp;<b> x not in s</b>，x 是否不在 s 中
<br/>&emsp;&emsp;&emsp;&emsp;<b>s+t</b>，连接两个序列
<br/>&emsp;&emsp;&emsp;&emsp;<b>s *n</b>*或<b>n \*s</b>，把序列 s 复制 n 次
<br/>&emsp;&emsp;&emsp;&emsp;<b>s[i]</b>，索引
<br/>&emsp;&emsp;&emsp;&emsp;<b>s[i:j]或 s[i:j:k]</b>，切片，从 i 到 j 以 k 为步长（步长默认 1）
<br/>&emsp;&emsp;&emsp;&emsp;<b>len(s)、min(s)、max(s)、s.index(x)</b>返回 x 第一次出现位置的索引、<b>s.count(x)</b>统计 x 出现次数

&emsp;&emsp;元组类型
<br/>&emsp;&emsp;&emsp;&emsp;使用小括号()或 tuple()创建，元素间用逗号分隔。1,2 是元组，(1,2)也是元组，创建后不能修改
<br/>&emsp;&emsp;&emsp;&emsp;元组切片

&emsp;&emsp;列表类型
<br/>&emsp;&emsp;&emsp;&emsp;可修改，用方括号[]或 list()创建，元素间用逗号分隔
<br/>&emsp;&emsp;&emsp;&emsp;索引，可以查找修改元素
<br/>&emsp;&emsp;&emsp;&emsp;<b>del ls[i]</b>，删除列表 ls 中索引为 i 的元素，可以用切片，可以删除整个变量
<br/>&emsp;&emsp;&emsp;&emsp;<b>s+=t</b>，两列表相加，赋给 s
<br/>&emsp;&emsp;&emsp;&emsp;<b>s\*3</b>，三个列表 s 连起来
<br/>&emsp;&emsp;&emsp;&emsp;<b>ls.append()</b>，在列表 ls 最后增加一个元素或一个列表，常用于循环
<br/>&emsp;&emsp;&emsp;&emsp;<b>ls.clear()</b>，清空 ls
<br/>&emsp;&emsp;&emsp;&emsp;<b>ls.copy()</b>，复制
<br/>&emsp;&emsp;&emsp;&emsp;<b>ls.insert(i,x)</b>，在列表 ls 索引为 i 的位置插入元素 x
<br/>&emsp;&emsp;&emsp;&emsp;<b>ls.pop(i)</b>，删除索引为 i 的元素并取出
<br/>&emsp;&emsp;&emsp;&emsp;<b>ls.remove(x)</b>，将出现的第一个 x 删除
<br/>&emsp;&emsp;&emsp;&emsp;<b>ls.reverse()、reversed(ls)</b>，元素反转
<br/>&emsp;&emsp;&emsp;&emsp;<b>sorted(s)</b>，不改变 s 顺序，对纯数字/纯英文字母列表元素从小到大排序（默认 reverse=False)，从大到小再反转，或者指定 reverse=True
<br/>&emsp;&emsp;&emsp;&emsp;<b>s.sort()</b>改变 s 顺序，也可以升序降序

```python
list(range(10))
```

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

```python
#生成式
[x**2 for x in range(5)]
{x:x**2 for x in range(6) if x !=3}
```

    [0, 1, 4, 9, 16]

    {0: 0, 1: 1, 2: 4, 4: 16, 5: 25}

```python
a=[1,2,'qw','去']
a.reverse()
a
print(list(reversed(a)))
```

    ['去', 'qw', 2, 1]

    [1, 2, 'qw', '去']

```python
ls=['p',123,'io','a',123,'a',123]
ls[::-1]
# min(ls)#会报错因为不都是数字
ls.index('a')
ls.count(123)
```

    [123, 'a', 123, 'a', 'io', 123, 'p']

    3

    3

```python
a=1,2,'word',('q',23,'word','我')
a
a[::-1]
a[2][2]
a[3][2][0]
```

    (1, 2, 'word', ('q', 23, 'word', '我'))

    (('q', 23, 'word', '我'), 'word', 2, 1)

    'r'

    'w'

```python
ls=['cat','dog','tiger',1024,'测绘']
ls
ls.append(123)
ls
ls.insert(3,'h')
ls
ls.reverse()
ls
ls.pop(2)
ls
ls[0]=999
ls
999 in ls
ls.index('cat')
lt=tuple(ls)
lt
```

    ['cat', 'dog', 'tiger', 1024, '测绘']

    ['cat', 'dog', 'tiger', 1024, '测绘', 123]

    ['cat', 'dog', 'tiger', 'h', 1024, '测绘', 123]

    [123, '测绘', 1024, 'h', 'tiger', 'dog', 'cat']

    1024

    [123, '测绘', 'h', 'tiger', 'dog', 'cat']

    [999, '测绘', 'h', 'tiger', 'dog', 'cat']

    True

    5

    (999, '测绘', 'h', 'tiger', 'dog', 'cat')

```python
#封装与拆分
s1,s2,s3,s4,s5,s6=ls
s1
s2
s3
s4
s5
s6
```

    999

    '测绘'

    'h'

    'tiger'

    'dog'

    'cat'

```python
a=[1,2,3,4,1,2,3,4,2,1,3,5,65,3,12,43,2]
a.sort()
a
a=[1,2,3,4,1,2,3,4,2,1,3,5,65,3,12,43,2]
sorted(a)
a=[1,2,3,4,1,2,3,4,2,1,3,5,65,3,12,43,2]
a.sort(reverse=True)
a
a=[1,2,3,4,1,2,3,4,2,1,3,5,65,3,12,43,2]
sorted(a,reverse=True)
```

    [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 12, 43, 65]

    [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 12, 43, 65]

    [65, 43, 12, 5, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1]

    [65, 43, 12, 5, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1]

（3）基本统计值计算
<br/>&emsp;&emsp;<b>len()</b>总个数
<br/>&emsp;&emsp;<b>for...in</b>求和
<br/>&emsp;&emsp;求方差、标准差、中位数

```python
#获取多个输入，空格时结束
def getNums():
    nums=[]
    iNumStr=input('输入数字（回车退出）：')
    while iNumStr!='':
        nums.append(eval(iNumStr))
        iNumStr=input('输入数字（回车退出）：')
    return nums

s=getNums()
```

    输入数字（回车退出）： 1
    输入数字（回车退出）： 2
    输入数字（回车退出）：

```python
s
sorted(s)#从小到大
sorted(s)[::-1]#从大到小
```

    [1, 2]

    [1, 2]

    [2, 1]

（4）字典类型
<br/>&emsp;&emsp;用大括号{}或 dict()创建
<br/>&emsp;&emsp;查看 key、value、对应值等
<br/>&emsp;&emsp;<b>del d[k]</b>，删除键 k 对应的数据值
<br/>&emsp;&emsp;<b>k in d</b>，判断是否在字典中
<br/>&emsp;&emsp;<b>d.keys()</b>，返回所有键信息
<br/>&emsp;&emsp;<b>d.values()</b>，返回所有值信息
<br/>&emsp;&emsp;<b>d.items()</b>，返回所有键值对信息
<br/>&emsp;&emsp;<b>d.get(k,\<defalut>)</b>，获取键 k 对应的值，若不存在则返回\<defalut\>值
<br/>&emsp;&emsp;<b>d.pop(k,\<defalut>)</b>，取出键 k 的值，原字典中删除，若不存在则返回\<defalut\>值
<br/>&emsp;&emsp;<b>d.popitem()</b>，随机取出一个键值对，以元组形式返回
<br/>&emsp;&emsp;<b>d.clear()</b>，清除字典
<br/>&emsp;&emsp;<b>d['key1']</b>，返回键 key1 对应的值，可索引可赋值
<br/>&emsp;&emsp;<b>len(d)</b>，返回元素个数

遍历字典，<b>for k in d.keys():
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;for v in d.values():
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;for k,v in d.items():</b>

-   合并两个字典
-   重复的后面的覆盖前面的

```python
# 最简便
{**dic1,**dic2}
```

-   根据字典转为 DataFrame

```python
pd.DataFrame(list(dic.items()))
```

```python
d={'中国':'北京','美国':'华盛顿','法国':'巴黎'}
d.keys()#查看keys
d.values()#查看values
d.items()#查看所有
d['中国']#查看key对应的value
a=dict()#空字典
a
```

    dict_keys(['中国', '美国', '法国'])

    dict_values(['北京', '华盛顿', '巴黎'])

    dict_items([('中国', '北京'), ('美国', '华盛顿'), ('法国', '巴黎')])

    '北京'

    {}

```python
del d['美国']
d
```

    {'中国': '北京', '法国': '巴黎'}

```python
dict1=dict(语言='p',平台='w',数据库='m')
dict1
```

    {'语言': 'p', '平台': 'w', '数据库': 'm'}

```python
dic1 = {'a':1, 'b':2}
dic2 = {'c':3, 'd':4, 'a':10}
dic = {**dic1, **dic2}
dic
```

    {'a': 10, 'b': 2, 'c': 3, 'd': 4}

```python
import pandas as pd
df = pd.DataFrame(list(dic.items()))
df
```

|     |  0  |  1  |
| :-: | :-: | :-: |
|  0  |  a  | 10  |
|  1  |  b  |  2  |
|  2  |  c  |  3  |
|  3  |  d  |  4  |

```python
df = df.T
df
```

|     |  0  |  1  |  2  | 3   |
| :-: | :-: | :-: | :-: | --- |
|  0  |  a  |  b  |  c  | d   |
|  1  | 10  |  2  |  3  | 4   |

```python
df.columns = df.iloc[0]
df = df.iloc[1:]
df.index = [0]
df
```

|     |  a  |  b  |  c  |  d  |
| :-: | :-: | :-: | :-: | :-: |
|  0  | 10  |  2  |  3  |  4  |

（5）jieba 库，<b>import jieba</b>
<br/>&emsp;&emsp;中文分词第三方库，利用中文词库确定汉字之间的关联概率。

&emsp;&emsp;模式：
<br/>&emsp;&emsp;&emsp;&emsp;精确模式：把文本精确分开，不存在冗余单词
<br/>&emsp;&emsp;&emsp;&emsp;全模式：把文本中所有可能的词语都扫描出来，有冗余
<br/>&emsp;&emsp;&emsp;&emsp;搜索引擎模式：在精确模式基础上，对长词再次分割，长短词并存

&emsp;&emsp;常用函数：
<br/>&emsp;&emsp;&emsp;&emsp;<b>jieba.lcut(s)</b>，精确模式，返回一个列表类型的分词结果
<br/>&emsp;&emsp;&emsp;&emsp;<b>jieba.lcut(s,cut_all=True)</b>，全模式，返回列表类型分词结果，存在冗余
<br/>&emsp;&emsp;&emsp;&emsp;<b>jieba.lcut_for_search(s)</b>，搜索引擎模式，返回列表类型的分词结果，存在冗余
<br/>&emsp;&emsp;&emsp;&emsp;<b>jieba.add_word(w)</b>，向分词词典增加新词 w

&emsp;&emsp;词频统计

```python
import jieba
```

```python
s='中山大学测绘科学与技术学院2019级本科生第二党支部'
jieba.lcut(s)
jieba.lcut(s,cut_all=True)
jieba.lcut_for_search(s)
```

    Building prefix dict from the default dictionary ...
    Dumping model to file cache C:\Users\86188\AppData\Local\Temp\jieba.cache
    Loading model cost 0.804 seconds.
    Prefix dict has been built successfully.


    ['中山大学', '测绘', '科学', '与', '技术', '学院', '2019', '级', '本科生', '第二', '党支部']

    ['中山',
     '中山大学',
     '山大',
     '大学',
     '测绘',
     '科学',
     '与',
     '技术',
     '术学',
     '学院',
     '2019',
     '级',
     '本科',
     '本科生',
     '第二',
     '党支部',
     '支部']

    ['中山',
     '山大',
     '大学',
     '中山大学',
     '测绘',
     '科学',
     '与',
     '技术',
     '学院',
     '2019',
     '级',
     '本科',
     '本科生',
     '第二',
     '支部',
     '党支部']

```python
#词频统计
#函数作用：打开文本、全部转小写、其他符号用空格代替
def getText():
    text=open('test/hamlet.txt','r').read()
    text=text.lower()#所有字母都变成小写
    for ch in '!"#$%&()*+,-./:;<=>?@[\\]^_‘{|}~':
        text = text.replace(ch, " ")   #将文本中特殊字符替换为空格
    return text

lbxText=getText()
words=lbxText.split()
counts={}#空字典
for word in words:
    #如果在counts中则返回它出现的次数，否则次数为0把它加到字典中，最后+1表示新加的词要更新出现次数
    counts[word]=counts.get(word,0)+1
items=list(counts.items())#转换成列表类型，不指定items会只转keys
items.sort(key=lambda x:x[1],reverse=True)#将列表按键值对的第二个元素进行降序排序
type(items)
type(items[0])
items[:20]
```

    list

    tuple

    [('the', 1138),
     ('and', 965),
     ('to', 754),
     ('of', 669),
     ('you', 550),
     ('i', 542),
     ('a', 542),
     ('my', 514),
     ('hamlet', 462),
     ('in', 436),
     ('it', 416),
     ('that', 391),
     ('is', 340),
     ('not', 314),
     ('lord', 309),
     ('his', 296),
     ('this', 295),
     ('but', 269),
     ('with', 268),
     ('for', 247)]

（4）字典类型
<br/>&emsp;&emsp;用大括号{}或 dict()创建
<br/>&emsp;&emsp;查看 key、value、对应值等
<br/>&emsp;&emsp;<b>del d[k]</b>，删除键 k 对应的数据值
<br/>&emsp;&emsp;<b>k in d</b>，判断是否在字典中
<br/>&emsp;&emsp;<b>d.keys()</b>，返回所有键信息
<br/>&emsp;&emsp;<b>d.values()</b>，返回所有值信息
<br/>&emsp;&emsp;<b>d.items()</b>，返回所有键值对信息
<br/>&emsp;&emsp;<b>d.get(k,\<defalut>)</b>，获取键 k 对应的值，若不存在则返回\<defalut\>值
<br/>&emsp;&emsp;<b>d.pop(k,\<defalut>)</b>，取出键 k 的值，原字典中删除，若不存在则返回\<defalut\>值
<br/>&emsp;&emsp;<b>d.popitem()</b>，随机取出一个键值对，以元组形式返回
<br/>&emsp;&emsp;<b>d.clear()</b>，清除字典
<br/>&emsp;&emsp;<b>d['key1']</b>，返回键 key1 对应的值，可索引可赋值
<br/>&emsp;&emsp;<b>len(d)</b>，返回元素个数

遍历字典，<b>for k in d.keys():
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;for v in d.values():
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;for k,v in d.items():</b>

-   合并两个字典
-   重复的后面的覆盖前面的

```python
# 最简便
{**dic1,**dic2}
```

-   根据字典转为 DataFrame

```python
pd.DataFrame(list(dic.items()))
```

```python
d={'中国':'北京','美国':'华盛顿','法国':'巴黎'}
d.keys()#查看keys
d.values()#查看values
d.items()#查看所有
d['中国']#查看key对应的value
a=dict()#空字典
a
```

    dict_keys(['中国', '美国', '法国'])

    dict_values(['北京', '华盛顿', '巴黎'])

    dict_items([('中国', '北京'), ('美国', '华盛顿'), ('法国', '巴黎')])

    '北京'

    {}

```python
del d['美国']
d
```

    {'中国': '北京', '法国': '巴黎'}

```python
dict1=dict(语言='p',平台='w',数据库='m')
dict1
```

    {'语言': 'p', '平台': 'w', '数据库': 'm'}

```python
dic1 = {'a':1, 'b':2}
dic2 = {'c':3, 'd':4, 'a':10}
dic = {**dic1, **dic2}
dic
```

    {'a': 10, 'b': 2, 'c': 3, 'd': 4}

```python
import pandas as pd
df = pd.DataFrame(list(dic.items()))
df
```

|     |  0  |  1  |
| :-: | :-: | :-: |
|  0  |  a  | 10  |
|  1  |  b  |  2  |
|  2  |  c  |  3  |
|  3  |  d  |  4  |

```python
df = df.T
df
```

|     |  0  |  1  |  2  | 3   |
| :-: | :-: | :-: | :-: | :-: |
|  0  |  a  |  b  |  c  | d   |
|  1  | 10  |  2  |  3  | 4   |

```python
df.columns = df.iloc[0]
df = df.iloc[1:]
df.index = [0]
df
```

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
      <th>d</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>10</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr>
  </tbody>
</table>

（5）jieba 库，<b>import jieba</b>
<br/>&emsp;&emsp;中文分词第三方库，利用中文词库确定汉字之间的关联概率。

&emsp;&emsp;模式：
<br/>&emsp;&emsp;&emsp;&emsp;精确模式：把文本精确分开，不存在冗余单词
<br/>&emsp;&emsp;&emsp;&emsp;全模式：把文本中所有可能的词语都扫描出来，有冗余
<br/>&emsp;&emsp;&emsp;&emsp;搜索引擎模式：在精确模式基础上，对长词再次分割，长短词并存

&emsp;&emsp;常用函数：
<br/>&emsp;&emsp;&emsp;&emsp;<b>jieba.lcut(s)</b>，精确模式，返回一个列表类型的分词结果
<br/>&emsp;&emsp;&emsp;&emsp;<b>jieba.lcut(s,cut_all=True)</b>，全模式，返回列表类型分词结果，存在冗余
<br/>&emsp;&emsp;&emsp;&emsp;<b>jieba.lcut_for_search(s)</b>，搜索引擎模式，返回列表类型的分词结果，存在冗余
<br/>&emsp;&emsp;&emsp;&emsp;<b>jieba.add_word(w)</b>，向分词词典增加新词 w

&emsp;&emsp;词频统计

```python
import jieba
```

```python
s='中山大学测绘科学与技术学院2019级本科生第二党支部'
jieba.lcut(s)
jieba.lcut(s,cut_all=True)
jieba.lcut_for_search(s)
```

    Building prefix dict from the default dictionary ...
    Dumping model to file cache C:\Users\86188\AppData\Local\Temp\jieba.cache
    Loading model cost 0.804 seconds.
    Prefix dict has been built successfully.


    ['中山大学', '测绘', '科学', '与', '技术', '学院', '2019', '级', '本科生', '第二', '党支部']

    ['中山',
     '中山大学',
     '山大',
     '大学',
     '测绘',
     '科学',
     '与',
     '技术',
     '术学',
     '学院',
     '2019',
     '级',
     '本科',
     '本科生',
     '第二',
     '党支部',
     '支部']

    ['中山',
     '山大',
     '大学',
     '中山大学',
     '测绘',
     '科学',
     '与',
     '技术',
     '学院',
     '2019',
     '级',
     '本科',
     '本科生',
     '第二',
     '支部',
     '党支部']

```python
#词频统计
#函数作用：打开文本、全部转小写、其他符号用空格代替
def getText():
    text=open('test/hamlet.txt','r').read()
    text=text.lower()#所有字母都变成小写
    for ch in '!"#$%&()*+,-./:;<=>?@[\\]^_‘{|}~':
        text = text.replace(ch, " ")   #将文本中特殊字符替换为空格
    return text

lbxText=getText()
words=lbxText.split()
counts={}#空字典
for word in words:
    #如果在counts中则返回它出现的次数，否则次数为0把它加到字典中，最后+1表示新加的词要更新出现次数
    counts[word]=counts.get(word,0)+1
items=list(counts.items())#转换成列表类型，不指定items会只转keys
items.sort(key=lambda x:x[1],reverse=True)#将列表按键值对的第二个元素进行降序排序
type(items)
type(items[0])
items[:20]
```

    list

    tuple

    [('the', 1138),
     ('and', 965),
     ('to', 754),
     ('of', 669),
     ('you', 550),
     ('i', 542),
     ('a', 542),
     ('my', 514),
     ('hamlet', 462),
     ('in', 436),
     ('it', 416),
     ('that', 391),
     ('is', 340),
     ('not', 314),
     ('lord', 309),
     ('his', 296),
     ('this', 295),
     ('but', 269),
     ('with', 268),
     ('for', 247)]

```python
#三国演义人物出场统计
import jieba

#保存txt时编码方式可以设置
txt=open('test/threekindoms.txt','r',encoding='utf-8').read()
excludes={'将军','却说','荆州','二人','不可','不能','如此','如何','商议','主公','军士','左右','军马','引兵','次日','大喜','天下','于是'}#粗略排除词，还有很多
words=jieba.lcut(txt)#列表
counts={}
for word in words:
    if len(word) == 1:
        continue
    elif word == "诸葛亮" or word == "孔明曰":
        rword = "孔明"
    elif word == "关公" or word == "云长":
        rword = "关羽"
    elif word == "玄德" or word == "玄德曰":
        rword = "刘备"
    elif word == "孟德" or word == "丞相":
        rword = "曹操"
    else:
        rword = word
    counts[rword] = counts.get(rword,0) + 1
for word in excludes:
    del counts[word]
items=list(counts.items())
items.sort(key=lambda x:x[1],reverse=True)#将列表按键值对的第二个元素进行降序排序
type(items)
type(items[0])
items[:20]
```

    list

    tuple

    [('曹操', 1451),
     ('孔明', 1383),
     ('刘备', 1252),
     ('关羽', 784),
     ('张飞', 358),
     ('吕布', 300),
     ('赵云', 278),
     ('孙权', 264),
     ('东吴', 251),
     ('今日', 243),
     ('不敢', 239),
     ('魏兵', 233),
     ('陛下', 223),
     ('一人', 221),
     ('都督', 221),
     ('司马懿', 221),
     ('人马', 220),
     ('不知', 219),
     ('周瑜', 217),
     ('汉中', 211)]

