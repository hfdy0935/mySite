---
title: 基本语法5
titleTemplate: Python笔记
---

## 14. 类型注解
<br/>&emsp;&emsp;在代码中涉及数据交互的地方，提供数据类型的注解

<br/>&emsp;&emsp;变量的类型注解：<b>变量:类型</b>
<br/>&emsp;&emsp;类对象的类型注解：<b>类对象:类型</b>
<br/>&emsp;&emsp;容器类型注解：<b>容器名:类型</b>，如列表、元组、集合、字典、字符串、Any任何等
<br/>&emsp;&emsp;&emsp;&emsp;基础注解、详细注解
<br/>&emsp;&emsp;注释类型注解，改变量的行写注释<b>#:type=int</b>等

&emsp;&emsp;能直接看出的不定义，一眼看不出的最好注解
<br/>&emsp;&emsp;类型注解仅是提示性的，不符也不会报错

```python
# 注解基础类型
#变量类型注解
a:int=10
b:float=3.14
c:bool=True
d:str='abc'

#类对象类型注解
class s:
    pass
stu:s=s()

#容器类型注解
l:list=[1,2,3]
t:tuple=(1,2,3)
s:set={1,2,3}
d:dict={'name','a'}
my_str:str='sysu'

my_list:list[int]=[1,2,3]
my_tuple:tuple[str,int,bool]=('sysu',2023,True)
my_set:set[int]={1,2,3}
my_dict:dict[str,int]={'sges':666}

#注释形式类型注解
v1=range(1,10) #type:int
my_tuple=('sysu',2023,True) #type: tuple[str,int,bool]

#不会报错
a:int='qw'
```

```python
# 从typing注解

from typing import List, Tuple, Dict, Set, Union, Any
```

对函数（方法）的类型注解——形参注解，调用时让出现形参提示，提示性的不是决定性的

```python
def add(x:int,y:int)->int:#对形参和返回值进行类型注解，没有返回值是None
    return x+y
add(1,2)     
```

    3

```python
# 注解类型为类
class f:
    def __init__(self):
        self.a = 1
a: f = f()
print(a.a)

isinstance(a, f)
```

    1
    

    True

Union类型：联合类型注解

```python
from typing import Union

#对变量类型注解
my_list:list[Union[str,int]]=[1,2,'c1','c2']
my_dict:dict[str,Union[str,int]]={'name':'测绘','邮编':510000}

#对函数类型注解
def func(data:Union[int,str])->Union[int,str]:
    pass
```

```python

```

```python

```

## 15. Anaconda命令

<b>conda --version</b>，查看Anaconda版本
<br/><b>conda env list</b>，查看所有环境
<br/><b>conda create -n env_name python=3.9</b>，创建名为env_name的环境，指定python版本，可不指定
<br/><b>conda activate env_name</b>，切换到env_name环境
<br/><b>pip install ...</b>，切换到对应环境之后再安装第三方库
<br/><b>conda remove -n env_name</b>，删除环境env_name
<br/><b>pip list</b>，环境下已安装的包
<br/>进入虚拟环境，再执行<b>jupyter lab</b>，也可以打开指定路径，实现切换到该环境下

<br/><br/><b>conda env export > environment.yaml</b>，导出环境至文件
<br/><b>conda env create -f environment.yaml</b>，根据yaml文件复现环境

```python

```

## 16. 补充

### 1. 断言
python中的断言语句是一种调试工具，用来测试某个断言条件，如果断言条件为True，则程序将继续正常执行；
<br/>但如果断言条件为假False，则会引发AssertionError异常并显示相关的错误消息。

```python
assert 1>2
```

    ---------------------------------------------------------------------------

    AssertionError                            Traceback (most recent call last)

    Cell In[2], line 1
    ----> 1 assert 1>2
    

    AssertionError: 

```python
assert 1<2
```

### 2. 装饰器decorator

本质是一个函数，可以让其他函数在不做任何代码变动的前提下增加额外功能，如果有多个函数都需要增加这个额外功能，就可以减少代码量
<br/>将其他函数作为该装饰器的输入，调用该函数时会将该函数输入装饰器，最后得到结果

<b>函数的装饰器</b>

```python
def double(x):
    return x*2
def triple(x):
    return x**3
#函数被当作参数传到其他函数里
def cal_number(func,x):
    print(func(x))
cal_number(double,3)
```

    6
    

```python
#函数本身也可以作为函数的返回值
def f1(n):
    def f2(x):
        return n*x
    return f2

tmp=f1(2)
print(tmp(4))
```

    8
    

```python
def dec(f):
    print(f)

#如果后面有不同的函数作为参数传给dec函数，都可以在前面加@dec
@dec
def double(x):
    return 10

#用dec调用double
#完全等价于
# double=dec(double)
```

    <function double at 0x0000022655C10790>
    

```python
#带参数的装饰器
import time

def timeit(f):

    #允许变长参数
    def wrapper(*args,**kwargs):
        start=time.time()
        ret=f(*args,**kwargs)
        print(time.time()-start)
        return ret

    return wrapper

@timeit
def my_func(x):
    time.sleep(x)

@timeit
def add(x,y):
    return x+y

my_func(5)
print('--------------------------')
add(2,3)
```

    5.0080296993255615
    --------------------------
    0.0
    

    5

```python
#带参数的装饰器
#多了一次调用
import time

def f1(sleep_time):
    def decorator(f):
        def wrapper(*args, **kwargs):
            tmp = f(*args, **kwargs)
            time.sleep(sleep_time)
            print(f'睡眠了{sleep_time}秒')
            return tmp
        return wrapper
    return decorator

@f1(3)  # 使用带有参数3的f1作为装饰器
def f2(x):
    return x + 1

f2(2)

#返回一个函数，函数再调用double
#等价于
# f2=f1(10)(f2)
```

    睡眠了3秒
    

    3

<b>类装饰器</b>

```python
#类装饰器
import time

class Timer:
    def __init__(self,func):
        self.func=func

    def __call__(self,*args,**kwargs):
        start=time.time()
        ret=self.func(*args,**kwargs)
        print(f'Time:{time.time()-start}')
        return ret

@Timer
def add(a,b):
    return a+b

#把add函数传到类初始化的那个函数的位置
add(2,3)
```

    Time:0.0
    

    5

```python
#上面的装饰器那块等价于
#首先add这个函数被保存在了self.func，然后把add变成Timer对象
add=Timer(add)
add(2,3)

#或者
# Timer(add)(2,3)
```

    Time:0.0
    Time:0.0
    

    5

```python
#带参数的装饰器
#类的参数不再是函数了，而是一个数
class Timer:
    def __init__(self,prefix):
        self.prefix=prefix

    def __call__(self,func):
        def wrapper(*args,**kwargs):
            start=time.time()
            ret=func(*args,**kwargs)
            print(f'{self.prefix}{time.time()-start}')
            return ret
        return wrapper

@Timer(prefix='curr_time: ')
def add(a,b):
    return a+b
add(2,3)

#等价于
# add=Timer(prefix='curr_time: ')(add)
```

    curr_time: 0.0
    

    5

```python
def add_str(cls):
    def __str__(self):
        return str(self.__dict__)
    cls.__str__=__str__
    return cls

@add_str
class MyObject:
    def __init__(self,a,b):
        self.a=a
        self.b=b

o=MyObject(1,2)
print(o)

#等价于
MyObject=add_str(MyObject)
```

    {'a': 1, 'b': 2}
    

### 3. isinstance

isinstance() 函数是 Python 中的一个内置函数，它用于检查一个对象是否是某个类的实例

```python
a=5
isinstance(a,int)
```

    True

```python
type(a)==int
```

    True

```python
# 可以是类
class f:
    def __init__(self):
        self.a = 1
a: f = f()
print(a.a)

isinstance(a, f)
```

    1
    

    True

### 4. 推导式

```python
#列表
[x**2 for x in [1,2,3]]
```

    [1, 4, 9]

```python
#字典
{x:x**3 for x in [1,2,3]}
```

    {1: 1, 2: 8, 3: 27}

```python
#集合
{x**2 for x in [1,2,3]}
```

    {1, 4, 9}

```python
[x**2 for x in range(10) if x % 2 == 0]
```

    [0, 4, 16, 36, 64]

### 5. 枚举

获得索引和值

```python
a='aabbbcc'
for i in enumerate(a):
    print(i[0],i[1])
print('-'*10)
for index,item in enumerate(a):
    print(index,item)
```

    0 a
    1 a
    2 b
    3 b
    4 b
    5 c
    6 c
    ----------
    0 a
    1 a
    2 b
    3 b
    4 b
    5 c
    6 c
    

### 6. 链式比较

```python
a=2
if 1<a<3:
    print(True)
```

    True
    

### 7. any()和all()

any() 和 all() 是 Python 中用于处理可迭代对象（如列表、元组、集合等）的两个内置函数，它们用于对元素进行逻辑判断

```python
import numpy as np

a=np.array([1,2,3,4,5,6,7])
b=np.array([2,3,4,5])
```

```python
#只要有一个非0就返回True
a.any()
```

    True

```python
#有一个0
np.array([0,1,2,3,4]).all()
```

    False

```python
a.all()>0
```

    True

```python
b.all()>2
```

    False

```python
c=['a',1,'',None]
any(c)
#至少有一个元素不为空
```

    True

```python
all(c)
#所有元素不都为非空
```

    False

### 8. 自增自减

```python
a = 1
a += 1
print(a)
a -= 1
print(a)
```

    2
    1
    

```python
a=1
print(++a)
a=1
print(a++) # 会报错
```

      Cell In[4], line 4
        print(a++) # 会报错
                 ^
    SyntaxError: invalid syntax
    

### 9. 断点

当程序执行到breakpoint()时，它会暂停，并在调用位置进入调试器模式，你可以输入命令检查变量的值、执行代码，或者进一步调试程序。当调试完成后，你可以输入命令continue让程序继续执行

在py文件中看

```python
a:int = 1
b:int = 2
def f(a ,b) -> int:
    c:int = a+b
    breakpoint()
    print(c)

```

```python

```

### 10. 闭包

- 函数里面嵌套函数，内部函数能访问外部函数，外部访问不到内部
    - 闭包无法修改外部函数的局部变量

**1**

```python
def out(x: int):
    def _in(y: int):
        return x + y
    # 返回值为函数
    return _in
```

```python
# 函数
out(10) 
```

    <function __main__.out.<locals>._in(y: int)>

```python
# 函数
out
```

    <function __main__.out(x: int)>

```python
out(10)(20)
```

    30

**2**

```python
def out():
    x = 0
    def _in():
        x = 1
        print(f'内层函数修改的x= {x}')
    print(f'外层函数的x = {x}')
    _in()
    print(f'执行内层函数之后，外层函数的x = {x}')

out()
```

    外层函数的x = 0
    内层函数修改的x= 1
    执行内层函数之后，外层函数的x = 0
    

```python
x = 0
def out():
    x = 0
    def _in():
        global x
        x = 1
        print(f'内层函数修改全局x= {x}')
    print(f'外层函数的x = {x}')
    _in()
    print(f'执行内层函数之后，外层函数的x = {x}，没变')

out()
print(f'全局的x = {x}， 已修改')
```

    外层函数的x = 0
    内层函数修改全局x= 1
    执行内层函数之后，外层函数的x = 0，没变
    全局的x = 1， 已修改
    

```python
x = 0
def out():
    global x
    x = 0
    def _in():
        global x
        x = 1
        print(f'内层函数修改全局x= {x}')
    print(f'外层函数的全局x = {x}')
    _in()
    print(f'执行内层函数之后，外层函数的全局x = {x}，没变')

out()
print(f'全局的x = {x}， 已修改')
```

    外层函数的全局x = 0
    内层函数修改全局x= 1
    执行内层函数之后，外层函数的全局x = 1，没变
    全局的x = 1， 已修改
    
- `global`：全局
- `nonlocal`：非全局非本局部，外部的局部
