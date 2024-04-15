---
title: 基本语法1
titleTemplate: Python笔记
---

::: danger 所有笔记都是在初学的时候做的，难免不全、有误、深度不够，留个纪念
:::


```python
#每个cell多个输出
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = "all"
```

## 1. python 基本语法元素

1. 摩尔定律（Moore's Law）：单位面积集成电路上可容纳晶体的数量约每两年翻一番。

&emsp;&emsp;执行方式：
<br/>&emsp;&emsp;&emsp;&emsp;编译：将源代码一次性转换成目标代码，编译器，对应静态语言 C/C++/JAVA；
<br/>&emsp;&emsp;&emsp;&emsp;解释：将源代码逐条转换成目标代码同时逐条运行的过程，解释器，对应脚本语言 python/JavaScript/PHP。

&emsp;&emsp;程序编写基本方法：IPO：
<br/>&emsp;&emsp;&emsp;&emsp;I：Input，输入；
<br/>&emsp;&emsp;&emsp;&emsp;P：Procerr，处理；
<br/>&emsp;&emsp;&emsp;&emsp;O：Output，输出。

&emsp;&emsp;python 两种编程方式：
<br/>&emsp;&emsp;&emsp;&emsp;交互式：对每个输入语句即时运行结果，适合语法练习；
<br/>&emsp;&emsp;&emsp;&emsp;文件式：批量执行一组语句，编程的主要方式。

```python
#计算圆的面积
import numpy as np
r=4
area=np.pi*r*r
print(area)
print('{:.2f}'.format(area))
```

    50.26548245743669
    50.27

```python
#温度转换
import time
while True:
    tempStr=input('输入带符号的温度值：')
    if tempStr[-1] in ['F','f']:
        C=(eval(tempStr[0:-1])-32)/1.8
        print('转换后的温度是{:.2f}C'.format(C))
    elif tempStr[-1] in ['C','c']:
        F=1.8*eval(tempStr[0:-1])+32
        print('转换后的温度是{:.2f}F'.format(F))
    else:
        print('输入格式错误，两秒后退出。')
        time.sleep(2)
        break
```

    输入带符号的温度值： 100F

    转换后的温度是37.78C

    输入带符号的温度值： 100C

    转换后的温度是212.00F

    输入带符号的温度值： q

    输入格式错误，两秒后退出。

2. 缩进不正确程序运行错误

<br/>&emsp;&emsp;变量命名规则：大小写字母、数字、下划线和汉字等字符及组合，不能以数字开头。
<br/>&emsp;&emsp;大小写敏感
<br/>&emsp;&emsp;保留字：被编程语言内部定义并保留使用的标识符，共 35 个，如：if、else 等
<br/>&emsp;&emsp;字符串：由 0 个或多个字符组成的有序字符序列，用一对单引号或一对双引号括起来，可以对其中字符进行索引、切片

&emsp;&emsp;删除变量，<b>del s</b>

```python
我的_变量=1
我的_变量
```

    1

```python
变量=1
print(变量)
del 变量
try:
    print(变量)
except Exception as a:
    print(a)
```

    1
    name '变量' is not defined

```python
_d=2
_d
```

    2

```python
a='qw123da'
a[0]
a[-1]
a[::-1]
a[0:2]
a[:2]
```

    'q'


    'a'

    'ad321wq'

    'qw'

    'qw'

列表类型，[]，中间元素用逗号分开，类型可以不同

```python
s=['swe',1,8756,'sfcz','文本']
'文本' in s
```

    True

语句与函数
<br/>&emsp;&emsp;input()函数从控制台获得用户输入的函数，<b>a=input(<提示信息字符串>)</b>，返回输入的字符串
<br/>&emsp;&emsp;print 函数格式化输出，如<b>print('转换后的温度是{:.2f}F'.format(F))</b>，{:.2f}表示槽，后续变量填充到槽中，{:.2f}表示将变量 C 填充到这个位置时取小数点后 2 位
<br/>&emsp;&emsp;<b>eval('asdww')</b>，eval 函数去掉参数<b>最外层引号</b>并执行剩余的表达式语句。
<br/>&emsp;&emsp;<b>exec('a=1+999')、exec('1+999')</b>，exec 函数去掉最外层引号，执行代码块，不返回结果。
<br/>&emsp;&emsp;<b>filter()</b>，对不满足条件的目标进行过滤，第一个参数是条件，第二个参数是目标，返回值用 list 转为列表。
<br/>&emsp;&emsp;<b>map()</b>，对目标中的每个都执行函数，第一个参数是函数，第二个参数是目标，返回值用 list 转为列表

&emsp;&emsp;在 print()中开头加 f 可以使{}中直接写变量，可以获取里面变量的值
<br/>&emsp;&emsp;<b>.format()</b>格式化方法有按位置传参和按名字传参

```python
a=1
b=2
print(f'a={a},b={b}')
#如果不加
print('a={a},b={b}')

print('a=',a,'b=',b)
print('a={},b={}'.format(a,b))
#按位置传参数
print('a={1},b={0}'.format(a,b))
#按名字传参数
print('a={s2},b={s1}'.format(s1=a,s2=b))
```

    a=1,b=2
    a={a},b={b}
    a= 1 b= 2
    a=1,b=2
    a=2,b=1
    a=2,b=1

```python
#输入的是字符串
input()
eval(input())
```

     123

    '123'

     123

    123

```python
# eval('a=1')#会报错
a=eval('1')
a
```

    1

```python
exec('a=1+99')
a
```

    100

```python
f=lambda x,y:x+y
f(1,2)
```

    3

```python
list(filter(lambda x:x%2==1,[1,2,3,4,5,6]))
```

    [1, 3, 5]

```python
a=[1,2,3,4,5,6]
[i for i in a if i%2==1]
```

    [1, 3, 5]

```python
f=lambda x:x+1
list(map(f,[1,2,3]))
```

    [2, 3, 4]

```python
eval('1+2')
eval('"1+2"')
eval("print('python')")
```

    3

    '1+2'

    python

3. 多重赋值，所有表达式计算完成后再统一赋值

<br/>&emsp;&emsp;<b>print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)</b>
<br/>&emsp;&emsp;&emsp;&emsp;value：要打印的对象，多个对象记得用逗号分开
<br/>&emsp;&emsp;&emsp;&emsp;sep：输出结果中用什么分隔多个对象，默认用空格
<br/>&emsp;&emsp;&emsp;&emsp;end：设定以什么结尾，默认是换行符<b>'\n'</b>，改成<b>''</b>则不会换行
<br/>&emsp;&emsp;&emsp;&emsp;file：要写入的文件对象，默认为显示器
<br/>&emsp;&emsp;&emsp;&emsp;flush：为 True 时输出会被立刻刷写到文件，为 False 时如何缓存或刷写取决于文件系统
<br/>&emsp;&emsp;print 时会自动把二八十六进制转换为十进制

```python
a,b=0,1
a,b=b,a+b
print(a,b,sep='分隔符')
```

    1分隔符1

```python
#动态显示进度条
import time
for i in range(1,101):
    print('\r{:.2f}%'.format(i),end='')
    time.sleep(0.01)
```

    100.00%

4. decimal 模块中的 Decimal 函数用于创建和操作十进制数值对象。它提供了一种精确的十进制计算方法，适用于需要高精度计算或要避免浮点数精度问题的场景。

<br/>&emsp;&emsp;fraction 库中的 Fraction 用于表示分数，两个参数第一个分子第二个分母，可运算
<br/>&emsp;&emsp;<b>type(a)</b>获取 a 的类型
<br/>&emsp;&emsp;比较运算符的优先级低于算术运算符

<br/><br/>&emsp;&emsp;<b>ord('q')</b>，获取 ASCII 码
<br/>&emsp;&emsp;<b>chr(9801)</b>，获取 ASCII 码对应的字符
<br/>&emsp;&emsp;<b>x=1;id(x)</b>，获取变量的内存地址
<br/>&emsp;&emsp;<b>callable(x)</b>，是否可调用，对函数、方法、lambda表达式、实现了`__call__`的类都返回`True`

```python
# from decimal import Decimal
import decimal
a = decimal.Decimal('0.1')
b = decimal.Decimal('0.2')
c = a + b
print(c)  # 输出结果为 0.3，而不是使用浮点数时可能出现的近似值
print(0.1+0.2)
decimal.Decimal(2.1)
```

    0.3
    0.30000000000000004

    Decimal('2.100000000000000088817841970012523233890533447265625')

```python
import fractions
fractions.Fraction(1,4)+fractions.Fraction(2,5)
```

    Fraction(13, 20)

```python
s='''123
qwe
123
cddddddfd
'''
s
```

    '123\nqwe\n123\ncddddddfd\n'

```python
print(True)
print(False)
print(None)
```

    True
    False
    None

```python
int('123')
str(123)
int(5.6)#直接去掉小数部分
round(5.6)
round(5.65678,3)
```

    123

    '123'

    5

    6

    5.657

```python
print('a'>'b')
print(ord('a'))
print(ord('b'))
```

    False
    97
    98

```python
#十二星座的ASCII码9801-9812
for i in range(12):
    print(chr(9801+i))
```

    ♉
    ♊
    ♋
    ♌
    ♍
    ♎
    ♏
    ♐
    ♑
    ♒
    ♓
    ♔

```python
x=1
id(x)
```

    1850468860144

```python
3<2+2
```

    True

```python
import numpy as np
x=np.random.randint(0,11,(3,4))
y1=np.zeros_like(x)
y2=np.zeros_like(x)
y3=np.zeros_like(x)
before1=id(y1)
before2=id(y2)
before3=id(y3)

y1=y1+x#y1的内存地址变了
print(id(y1)==before1)

y2[:]=x+y2#y2的内存地址没变，只改变元素
print(id(y2)==before2)

y3+=x#y3的内存地址没变
print(id(y3)==before3)
```

    False
    True
    True

```python
int(3.6)
```

    3

5. <b>enumerate(iterable, start=0)</b>

<br/>&emsp;&emsp;iterable：可迭代对象（列表、字符串、元组、字典），start：序号起始位置，默认 0）
<br/>&emsp;&emsp;将可迭代对象作为一个索引序列，获取索引和值，返回枚举对象

&emsp;&emsp;同时遍历两个或更多序列，用 zip()函数打包

```python
a=['qw','wer',123,'去']
list(enumerate(a))
```

    [(0, 'qw'), (1, 'wer'), (2, 123), (3, '去')]

## 2. python 基本图形绘制

```python
#绘制蟒蛇
#引入绘图库（海龟库）
import turtle
turtle.setup(640,350,200,200)
turtle.title('python蟒蛇绘制')
turtle.penup()
turtle.speed(9)
turtle.fd(-250)
turtle.pendown()
turtle.pensize(25)
turtle.pencolor('purple')
turtle.seth(-40)
for i in range(4):
    turtle.circle(40,80)
    turtle.circle(-40,80)
turtle.circle(40,80/2)
turtle.fd(40)
turtle.circle(16,180)
turtle.fd(40*2/3)
turtle.done()
```

turtle 库/海龟库，海龟爬行路线绘图，turtle 绘图体系的 python 实现
<br/>（1）turtle 的一个画布空间最小单位是像素；
<br/>（2）<b>turtle.setup(width, height, startx, starty)</b>，设置窗体宽高、窗体左上角坐标，坐标不是必需参数（不指定时默认窗口在屏幕中心）
<br/>（3）turtle 空间坐标系
<br/>&emsp;&emsp;绝对坐标：海龟在中心(0，0)，方向向右。<b>turtle.goto(x,y)</b>去某个位置
<br/>&emsp;&emsp;海龟坐标：<b>turtle.fd(d)</b>向海龟正前方向运动 d，<b>turtle.bk(d)</b>后，<b>turtle.circle(r,angle)</b>以当前方向左侧某点为圆心曲线运动
<br/>（4）turtle 角度坐标系
<br/>&emsp;&emsp;<b>turtle.seth()</b>直接改变海龟行进方向(0-360)，不绘制任何图
<br/>&emsp;&emsp;<b>turtle.left(angle)、turtle.right(angle)</b>海龟向左、向右改变运行方向
<br/>（5）RGB 色彩体系
<br/>&emsp;&emsp;默认采用小数值表示颜色，<b>turtle.colormode(mode)</b>，mode=1.0 则后面都用小数值，mode=255 则后面都用整数值
<br/>（6）库引用——扩充 python 程序功能的方式
<br/>（7）turtle 画笔控制函数
<br/>&emsp;&emsp;<b>turtle.title()</b>标题
<br/>&emsp;&emsp;<b>turtle.penup()</b>抬起画笔，运动时不画图
<br/>&emsp;&emsp;<b>turtle.pendown()</b>放下画笔，运动时绘图
<br/>&emsp;&emsp;<b>turtle.hideturtle()</b>，隐藏画笔
<br/>&emsp;&emsp;<b>turtle.showturtle()</b>，显示画笔
<br/>&emsp;&emsp;<b>turtle.pensize(2)、turtle.width(10)</b>画笔宽度
<br/>&emsp;&emsp;<b>turtle.speed()</b>指定 0-10 之间的整数，数值越大，作图速度越快。当给定值大于 10 或者小于 0.5，则统一设置为 0，速度最快。
<br/>&emsp;&emsp;<b>turtle.delay()</b>海龟作图中的延迟属性。修改属性的延迟为 0，实现加快作图的目的；修改为大于 0 来减慢作图。
<br/>&emsp;&emsp;<b>turtle.width(width)</b>海龟的腰围，二者功能一样
<br/>&emsp;&emsp;<b>turtle.fillcolor('red')</b>，设置填充颜色
<br/>&emsp;&emsp;<b>turtle.begin_fill()</b>，开始填充
<br/>&emsp;&emsp;<b>turtle.end_fill</b>，结束填充
<br/>&emsp;&emsp;<b>turtle.pencolor(color)</b>修改画笔颜色
<br/>&emsp;&emsp;&emsp;&emsp;值为颜色字符串<b>turtle.pencoloe('red')</b>
<br/>&emsp;&emsp;&emsp;&emsp;RGB 小数值<b>turtle.pencolor(0.63,0.13,0.94)</b>
<br/>&emsp;&emsp;&emsp;&emsp;RGB 元组值<b>turtle.pencolor((0.63,0.13,0.94))</b>
<br/>（8）运动控制函数
<br/>&emsp;&emsp;<b>turtle.fd(d)</b>向前行进 d 距离，可以是负数
<br/>&emsp;&emsp;<b>turtle.bk(d)</b>向后行进 d 距离，可以是负数
<br/>&emsp;&emsp;<b>turtle.circle(r,extent=None)</b>，圆心在海龟左侧 r 的位置（r 负数则在右侧），extent 绘制角度，默认 360 度
<br/>&emsp;&emsp;<b>turtle.goto(x,y)</b>，画笔坐标变到 xy
<br/>&emsp;&emsp;<b>turtle.setx(100)、turtle.sety(200)</b>，分别设置 xy 坐标
<br/>（8）方向控制函数
<br/>&emsp;&emsp;<b>turtle.setheading(angle)</b>、<b>turtle.seth(angle)</b>，绝对角度，右 0°，逆时针
<br/>&emsp;&emsp;<b>turtle.left(angle)</b>、<b>turtle.right(angle)</b>
<br/>（9）全局控制函数
<br/>&emsp;&emsp;<b>turtle.clear()</b>，清空绘制窗口，位置和状态不变
<br/>&emsp;&emsp;<b>turtle.reset()</b>，清空绘制窗口，重置位置和状态
<br/>&emsp;&emsp;<b>turtle.undo()</b>，撤销上一个动作
<br/>&emsp;&emsp;<b>turtle.write(arg, move=False, align='left', font=('Arial', 8, 'normal'))</b>，写文本，arg 内容，align 对齐方式（左中右），font 设置字体、大小、类型

```python
#绘制同心圆
import turtle

def draw_concentric_circles():
    turtle.speed(0)  # 设置绘制速度，0为最快
    radius = 50
    gap = 10  # 同心圆之间的间隔

    for i in range(5):
        turtle.penup()
        turtle.goto(0, -radius*i)  # 定位到每个同心圆的起始点
        turtle.pendown()
        turtle.circle(radius*i)  # 绘制同心圆

    turtle.done()

# 调用函数进行绘制
draw_concentric_circles()
```

```python
#绘制五角星
from turtle import *
pencolor('red')
pensize(5)
fillcolor('green')
begin_fill()
for i in range(5):
    fd(200)
    right(144)
end_fill()
done()
```

```python
#绘制曲线
import turtle
turtle.color('red')
turtle.left(45)
turtle.fd(150)
turtle.color('blue')
turtle.right(135)
turtle.fd(300)
turtle.color('yellow')
turtle.left(135)
turtle.fd(150)
turtle.color('green')
turtle.seth(90)
turtle.fd(200)


#需要手动关闭turtle，不然会无响应
turtle.done()
```

```python
#画风车
import turtle as t
t.pensize(5)
for i in range(4):
    t.left(45)
    t.fd(150)
    t.left(90)
    t.circle(150,45)
    t.left(90)
    t.fd(150)
    t.right(180)
t.done()
```

```python
import turtle as t
t.setup(500,500,100,400)
for i in range(9):
    t.fd(100)
    t.left(80)
t.done()
```

```python
import turtle as t
angle=10
t.speed(0)

t.penup()
t.fd(200)
t.pendown()
t.begin_fill()
t.left(90)
for i in range(360//angle):

    # t.penup()
    t.color('orange')
    t.circle(200,angle)
    # t.pendown()

    t.right(90)
    t.circle(50,90)
    t.left(180)
    t.circle(-50,90)

    t.right(90)

t.fillcolor('red')
t.end_fill()
t.done()
```

## 3. 基本数据类型

<b>pow(x,y)</b>，<b>np.power(x,y)</b>计算 x^y

```python
import numpy as np
pow(2,10)
np.power(2,10)
```

    1024

    1024

十进制；二进制以 0b/0B 开头；八进制以 0o/0O 开头；十六进制以 0x/0X 开头。进制转换：
<br/>&emsp;&emsp;10 转 2：<b>bin(n)</b>
<br/>&emsp;&emsp;10 转 8：<b>oct(n)</b>
<br/>&emsp;&emsp;10 转 16：<b>hex(n)</b>
<br/>&emsp;&emsp;2、8、16 转 10：<b>int(n,j)</b>，有/无前缀，n 都写成字符串形式，后面跟对应的进制，不写默认十进制
<br/>&emsp;&emsp;2、8、16 之间互相转换：先转成 10，再转到其他

```python
eval(bin(100))
```

    100

```python
int(oct(100),8)
```

    100

```python
bin(100)
oct(100)
hex(100)
```

    '0b1100100'

    '0o144'

    '0x64'

```python
int(100)
int('100')
int('100',2)
int('100',8)
int('0x100',16)
```

    100

    100

    4

    64

    256

```python
a=1
str(a)
eval('a')
```

    '1'

    1

浮点数类型
<br/>&emsp;&emsp;取值范围和小数精度都存在限制，常规计算可忽略
<br/>&emsp;&emsp;浮点数运算存在不确定尾数 bug，使用 53 位二进制表示小数部分约 10^-16
<br/>&emsp;&emsp;<b>round(x,d)</b>四舍五入函数，对 x 四舍五入，d 是小数截取位数
<br/>&emsp;&emsp;用字母 e/E 作为幂的符号，以 10 为基数，如 4.3e-3、9.6E5

```python
0.1+0.2
0.1+0.2==0.3
round(0.112321111+0.21211121,4)
round(0.1+0.2,1)==0.3
4.3e-3
9.6E5
```

    0.30000000000000004

    False

    0.3244

    True

    0.0043

    960000.0

复数类型 a+bj 或 a+bJ，可以加减乘除
<br/>&emsp;&emsp;<b>z.real</b>获得实部
<br/>&emsp;&emsp;<b>z.imag</b>获得虚部

布尔类型
<br/>&emsp;&emsp;<b>True、False、None</b>

-   is 操作符用于判断是否为同一个对象
    -   在 Python 中，整型对象和字符串对象是不可变对象，所以 Python 会很高效地对它们进行缓存，所以 id 一样，is 比较结果为 True
    -   但列表元祖等会创建新对象，is 比较结果为 False

\ 转义字符，可以转义引号，还可以表示换行符 \n、横向制表符 tab \t、纵向制表符 \v、光标退回当前行行首即回车 \r、插入反斜杠 \\\、插入单引号 \\'、插入双引号 \\"、响铃 \\a、
<br/>如果不希望特殊字符被转义，可以在第一个引号前面加 r，表示放弃字符串中的转义功能，可用于读取文件路径

```python
z=1.3e-7+4j
z.real
z.imag
```

    1.3e-07

    4.0

```python
123.2+3+4j
123.2+3+4J
```

    (126.2+4j)

    (126.2+4j)

```python
a = 'aaa'
b = 'aaa'
print(a is b)
print(a == b)

a = [1, 2, 3]
b = [1, 2, 3]
print(a is b)
```

    True
    True
    False

数值运算操作符
<br/>&emsp;&emsp;<b>+、-、\*、/、//、%、\*\*</b>
<br/>&emsp;&emsp;&emsp;&emsp;//：整数除，x 与 y 的整数商部分
<br/>&emsp;&emsp;&emsp;&emsp;%：余数
<br/>&emsp;&emsp;&emsp;&emsp;<b>\*\*</b>幂运算

&emsp;&emsp;<b>+=、-=、\*=、/=、//=、%=、\*\*=</b>

&emsp;&emsp;不同的数据类型混合运算时，生成结果为<b>最宽</b>类型，如 123+4.0=127.0

&emsp;&emsp;<b>+、\*</b>可用于字符串连接等

```python
100/3
100//3
10%3
10**3
10**0.5
pow(10,0.5)
```

    33.333333333333336

    33

    1

    1000

    3.1622776601683795

    3.1622776601683795

```python
s1='asd'
s2='asdasd'
s1+s2
s2*3
```

    'asdasdasd'

    'asdasdasdasdasdasd'

数值运算函数
<br/>&emsp;&emsp;<b>abs(x)</b>绝对值
<br/>&emsp;&emsp;<b>divmod(x,y)</b>同时输出商和余数
<br/>&emsp;&emsp;<b>pow(x,y[,z])</b>等价于(x\*\*y)%z
<br/>&emsp;&emsp;<b>round(x[,d])</b>四舍五入，d 是小数位数，默认为 0
<br/>&emsp;&emsp;<b>max(x1,x2,......,xn)</b>最大值
<br/>&emsp;&emsp;<b>min(x1,x2,......,xn)</b>最小值
<br/>&emsp;&emsp;<b>int(x)</b>把 x 变成整数，舍弃小数部分
<br/>&emsp;&emsp;<b>float(x)</b>把 x 变成浮点数，增加小数部分

```python
abs(-10)
divmod(10,3)
#3^3^99的后四位
pow(3,pow(3,99),10000)
# 超过内存了pow(3,pow(3,99))
int(100.01)
float(100)
```

    10

    (3, 1)

    4587

    100

    100.0

```python
round(100.56425)
round(100.56425,2)
```

    101

    100.56

```python
#例
dayup=pow(1.001,365)
daydown=pow(0.999,365)
print('向上：{:.2f}，向下：{:.2f}'.format(dayup,daydown))
```

    向上：1.44，向下：0.69


```python

#工作日进步 1%，周末退步 1%
dayup=1.0
dayfactor=0.01
for i in range(365):
if (i+1)%7 in [6,0]:
dayup=dayup*(1-dayfactor)
else:
dayup=dayup*(1+dayfactor)
dayup

````

    4.7199651868963945


```python
#A365填每天1%
#B工作日进步，周末退步1%
#B工作日需要进步多少才能赶上A？
def dayup(df):
    dayup=1
    for i in range(365):
        if (i+1)%7 in [6,0]:
            dayup=dayup*(1-0.01)
        else:
            dayup=dayup*(1+df)
    return dayup

dayfactor=0.01
while dayup(dayfactor)<37.78:
    dayfactor+=0.001
print('工作日的努力参数是：{:.3f}'.format(dayfactor))
````

    工作日的努力参数是：0.019

字符串类型及操作

&emsp;&emsp;（1）表示方式：
<br/>&emsp;&emsp;&emsp;&emsp;单引号、双引号括起来，单行字符；
<br/>&emsp;&emsp;&emsp;&emsp;三引号，多行字符
<br/>&emsp;&emsp;&emsp;&emsp;'和"
<br/>&emsp;&emsp;（2）索引和切片
<br/>&emsp;&emsp;&emsp;&emsp;正向递增序号和反向递减序号，正向从 0 开始增加，反向从-1 开始减小
<br/>&emsp;&emsp;&emsp;&emsp;切片，<b>[m:n:k]</b>，m 缺失表示从头开始，n 缺失表示到结尾，k 表示步长缺失默认 1，<b>左闭右开</b>
<br/>&emsp;&emsp;&emsp;&emsp;<b>a[::-1]</b>取反
<br/>&emsp;&emsp;&emsp;&emsp;首索引比尾索引大时返回空字符串
<br/>&emsp;&emsp;转义符\，转义符之后的字符会当作字符的本义理解，如\b 回退、\n 换行、\r 回车、\t Tab
<br/>&emsp;&emsp;（3）字符串操作符
<br/>&emsp;&emsp;&emsp;&emsp;<b>x+y</b>：两个字符串连接
<br/>&emsp;&emsp;&emsp;&emsp;<b>n\*x 或 x\*n</b>：复制 n 次字符串 x
<br/>&emsp;&emsp;&emsp;&emsp;<b>x in s</b>：如果 x 是 s 的子串则返回 True，否则返回 False
<br/>&emsp;&emsp;&emsp;&emsp;<b>a is b</b>：判断两个字符串是否相等
<br/>&emsp;&emsp;（4）字符串处理函数
<br/>&emsp;&emsp;&emsp;&emsp;<b>len(x)</b>计算字符串 x 的长度
<br/>&emsp;&emsp;&emsp;&emsp;<b>str(x)</b>将任何类型的 x 转换为字符串形式
<br/>&emsp;&emsp;&emsp;&emsp;<b>hex(x)、oct(x)</b>计算 x 对应的十六进制和八进制数
<br/>&emsp;&emsp;&emsp;&emsp;<b>ord('q')</b>返回字符 q 对应的 ASCII 码
<br/>&emsp;&emsp;&emsp;&emsp;<b>chr(113)</b>返回 ASCII 码 113 对应的字符
<br/>&emsp;&emsp;&emsp;&emsp;<b>isdigit(s)</b>判断 s 是否完全由数字组成，返回 True 或 False，带正负号会 False
<br/>&emsp;&emsp;（5）字符串处理方法
<br/>&emsp;&emsp;&emsp;&emsp;<b>s.index('q'[,start[,end]])</b>返回 s 中字符 q 的索引，可指定起始和结束位置
<br/>&emsp;&emsp;&emsp;&emsp;<b>s.lower()、s.upper()</b>返回 s 的副本，全部字符小写/大写
<br/>&emsp;&emsp;&emsp;&emsp;<b>s.split(',')</b>可以是任何 s 中有的字符，这里用逗号分割字符串 s，返回列表，
<br/>&emsp;&emsp;&emsp;&emsp;<b>s.count(sub[, start[, end]])</b>s 中字符 a 出现的次数，开始位置索引、结束位置索引
<br/>&emsp;&emsp;&emsp;&emsp;<b>s.replace(old,new[,num])</b>返回副本，old 替换为 new，num 为替换数量（默认-1 表示所有），原字符串不变
<br/>&emsp;&emsp;&emsp;&emsp;<b>s.center(width[,fillchar])</b>s 根据宽度 width 居中，fillchar 为填充字符（可选，默认为空格）
<br/>&emsp;&emsp;&emsp;&emsp;<b>s.strip(chars)</b>从 str 中去掉在其左右两侧 chars 中列出的字符
<br/>&emsp;&emsp;&emsp;&emsp;<b>s.join(iter)</b>在 iter 变量除最后元素外每个元素后增加一个 s，iter 可以是字符串、列表、元组
<br/>&emsp;&emsp;&emsp;&emsp;<b>s.startswith('a')、s.endswith('abc')</b>，字符串是否以某字符/字符串开头/结尾
<br/>&emsp;&emsp;&emsp;&emsp;<b>s.capitalize()</b>，首字母大写
<br/>&emsp;&emsp;&emsp;&emsp;<b>s.zfill(10)</b>在 s 左侧填充 0 使其长度达到 10，如果已经超过 10 则不填充
<br/>&emsp;&emsp;（6）字符串类型的格式化
<br/>&emsp;&emsp;&emsp;&emsp;<b>{<参数序号>:<格式控制标记>}</b>
<br/>&emsp;&emsp;&emsp;&emsp;每个槽{}与 format()中参数对应，槽中的数字为对应的 format 参数的编号（0、1、2 等）
<br/>&emsp;&emsp;&emsp;&emsp;如果严格按照参数次序使用，大括号可以不带数字
<br/>&emsp;&emsp;&emsp;&emsp;冒号：作为引导符号，控制某变量在该槽位置的格式，格式控制标记有属性的话按顺序写
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b><填充></b>，用于填充单个字符
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b><对齐></b>，<左对齐，>右对齐，^居中对齐
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b><宽度></b>，槽设定的输出宽度
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b><,></b>，数字的千位分隔符
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b><.精度></b>，浮点数小数精度或字符串最大输出长度
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b><类型></b>，整数类型 b,c,d,o,x,X,浮点数类型 e,E,f,%

```python
'''python
            语言'''
```

    'python\n            语言'

```python
a='qwer'
#逆序
a[::-1]
```

    'rewq'

```python
b=a.upper()
b
c=b.lower()
c
```

    'QWER'

    'qwer'

```python
s='qwe a adcs fifek aqmcd'
s.capitalize()
```

    'Qwe a adcs fifek aqmcd'

```python
'测绘' in '测绘科学与技术'
'遥感'*5
'1'+'2'
eval('1'+'+2')
```

    True

    '遥感遥感遥感遥感遥感'

    '12'

    3

```python
str(12)
str(None)
str(1+2J)
ord('q')
chr(114)
```

    '12'

    'None'

    '(1+2j)'

    113

    'r'

```python
chr(113)
chr(10004)
#十二个星座的字符,end=''表示不换行
for i in range(9800,9813):
    print(chr(i),' ',end='')
```

    'q'

    '✔'

    ♈  ♉  ♊  ♋  ♌  ♍  ♎  ♏  ♐  ♑  ♒  ♓  ♔

```python
s='qwedeSJDK1'
s.lower()
s.upper()
s.split('q')
s.count('e')
s.replace('e','E',1)
s.center(20)
s.center(50,'=')
s.strip('q')
s.join('///')
```

    'qwedesjdk1'

    'QWEDESJDK1'

    ['', 'wedeSJDK1']

    2

    'qwEdeSJDK1'

    '     qwedeSJDK1     '

    '====================qwedeSJDK1===================='

    'wedeSJDK1'

    '/qwedeSJDK1/qwedeSJDK1/'

```python
'{0:=^20}'.format('python')
'{0:*>20}'.format('bit')
'{:10}'.format('bit')

'{0:,.2f}'.format(12345.6789)
'{0:b},{0:c},{0:d},{0:o},{0:x},{0:X}'.format(425)
'{0:e},{0:E},{0:f},{0:%}'.format(3.14)
```

    '=======python======='

    '*****************bit'

    'bit       '

    '12,345.68'

    '110101001,Ʃ,425,651,1a9,1A9'

    '3.140000e+00,3.140000E+00,3.140000,314.000000%'

```python
print('t1{},t2{}'.format('1','2'))
print('t1{1},t2{0}'.format('1','2'))
print('t1{s1},t2{s2}'.format(s1='1',s2='2'))
```

    t11,t22
    t12,t21
    t11,t22

```python
a = 10.23456
# 保留位数，不是保留小数位数
print(f'a = {a:.5}')

print(f'a = {round(a,3)}')
```

    a = 10.235
    a = 10.235

```python
b = 'abcd'
# 域宽为10，右对齐
# <左对齐，^居中
print(f'{b:>10}')
print('{0:>10}'.format(b))
```

          abcd
          abcd

```python
chr(425)
'-3.14'.zfill(10)
```

    'Ʃ'

    '-000003.14'

time 库的使用,处理时间的标准库，<b>import time</b>
<br/>&emsp;&emsp;三类函数：
<br/>&emsp;&emsp;&emsp;&emsp;（1）时间获取：
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>time.time()</b>：获取当前时间戳，即计算机内部的时间值，即从 1970 年 1 约 1 日 0：00 到现在的秒数
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>time.ctime()</b>：返回<b>字符串</b>，时间更易读
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>time.gmtime()</b>：获取当前格林尼治时间，表示为计算机可处理的时间格式
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>time.localtime()</b>：获取当前本地时间，表示为计算机可处理的时间格式
<br/>&emsp;&emsp;&emsp;&emsp;（2）时间格式化，将时间以合理的方式展示出来
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>time.strftime(tlp,ts)</b>：tlp 是格式化模板字符串，用来定义输出效果，内含多个控制符，每个控制符都以%加一个字母形式表示，%Y 年份，%m 月份，%B 月份名称，%b 月份名称缩写，%d 日期，%A 星期，%a 星期缩写，%H 时间（24h），%I 时间（12h），%p 上下午（AM/PM），%M 分钟，%S 秒。%ts 是计算机内部时间类型变量。
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>time.strptime(str,tpl)</b>和<b>time.strftime()</b>互补，把一段字符串变成时间。str 字符串，tpl 格式化模板字符串，用来定义输入效果。
<br/>&emsp;&emsp;&emsp;&emsp;（2）程序计时：
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>time.sleep()</b>让程序休眠会，单位秒，可以是浮点数
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>time.perf_counter()</b>获取精准时间

```python
import time
#从1970年1约1日0：00到现在的秒数
time.time()
time.ctime()
time.gmtime()
time.localtime()

type(time.time())
type(time.ctime())
type(time.gmtime())
type(time.localtime())
```

    1689727499.824603

    'Wed Jul 19 08:44:59 2023'

    time.struct_time(tm_year=2023, tm_mon=7, tm_mday=19, tm_hour=0, tm_min=44, tm_sec=59, tm_wday=2, tm_yday=200, tm_isdst=0)

    time.struct_time(tm_year=2023, tm_mon=7, tm_mday=19, tm_hour=8, tm_min=44, tm_sec=59, tm_wday=2, tm_yday=200, tm_isdst=0)

    float

    str

    time.struct_time

    time.struct_time

```python
t=time.gmtime()
time.strftime('%Y-%m-%d %p %H:%M:%S',t)

t=time.localtime()
time.strftime('%Y年%m月%d天%H时%M分%S秒%A')
```

    '2023-07-19 AM 00:47:01'

    '2023年07月19天08时47分01秒Wednesday'

```python
#比time.time()更精确，包括休眠时间
start=time.perf_counter()
time.sleep(2)
end=time.perf_counter()
end-start
```

    2.0087519000007887

```python
#不包括休眠时间
s=time.process_time()
e=time.process_time()
time.sleep(2)
e-s
```

    0.0

文本进度条

```python
import time
scale=20
print('----------执行开始----------')
for i in range(scale+1):
    a='*'*i
    b='.'*(scale-i)
    c=(i/scale)*100
    print('{:^3.1f}%[{}->{}]'.format(c,a,b))
    time.sleep(0.1)
print('----------执行结束----------')
```

----------执行开始----------
0.0%[->....................]
5.0%[*->...................]
10.0%[**->..................]
15.0%[***->.................]
20.0%[****->................]
25.0%[*****->...............]
30.0%[******->..............]
35.0%[*******->.............]
40.0%[********->............]
45.0%[*********->...........]
50.0%[**********->..........]
55.0%[***********->.........]
60.0%[************->........]
65.0%[*************->.......]
70.0%[**************->......]
75.0%[***************->.....]
80.0%[****************->....]
85.0%[*****************->...]
90.0%[******************->..]
95.0%[*******************->.]
100.0%[********************->]
----------执行结束----------

print()函数
<br/>&emsp;&emsp;'\r'光标退回到行首
<br/>&emsp;&emsp;属性 end=''，把换行符替换为空，不换行

```python
#单行动态刷新，后一次覆盖到前面的
#域宽小于精度位数时按照实际位数显示
import time
scale=50
print('执行开始'.center(scale+12,'-'))
start=time.perf_counter()
for i in range(scale+1):
    a='*'*i
    b='.'*(scale-i)
    c=(i/scale)*100
    dur=time.perf_counter()-start
    print('\r{:^6.2f}%[{}->{}]{:.2f}s'.format(c,a,b,dur),end='')
    time.sleep(0.1)
print('\n','执行结束'.center(scale+12,'-'))
```

    -----------------------------执行开始-----------------------------
    100.00%[**************************************************->]5.36s
     -----------------------------执行结束-----------------------------
