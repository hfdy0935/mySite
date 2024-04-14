---
title: 基本语法3
titleTemplate: Python笔记
---

## 10. 模块（Module）和包（Package）

- <span style="color:red;font-size:20px"><b>模块</b></span>是一个<span style="color:red;font-size:20px"><b>.py文件</b></span>，内有类、函数、变量等，可以导入再用
<br/><b>[from 模块名] import [模块|类|变量|函数|*][as 别名]</b>，中括号内的可选
<br/>*表示导入模块中的全部功能，直接<b>sleep()</b>，不用<b>time.sleep()</b>

- 自定义模块，新建py文件，写好代码就可以了
- 模块中有
```python
if __name__ == '__main__':
    print('自己执行时触发')
```
时在直接运行运行模块时会执行，但**导入调用时不会执行**，可用于单独测试模块

- 模块文件中指定`__all__ = ['fun1']`，则在<b>from my_module import *</b>时只能导入函数func1，不能导入函数func2；但不会限制指定名字调用，如<b>from my_module import func2</b>
<br/><br/>
- <span style="color:red;font-size:20px"><b>包</b></span>是<span style="color:red;font-size:20px"><b>文件夹</b></span>，包含`__init__.py`文件（可以为空），<span style="color:red;font-size:20px"><b>内有模块或包</b></span>
<br/>从package包中引用my_module模块：<b>from package import my_module</b>
<br/>也可以用跟其他导入写法
<br/>..表示上级包，如<b>from .. import constant</b>

- 不能像文件路径那样用`..`
    - 上级目录可以
        ```python
        imprt sys
        # sys.path是查找导入的包时要查找的路径列表
        sys.path.append('..') # 进入上级目录
        import xxx
         ```
- 可以导入文件夹、从文件夹中导入模块、从模块中导入变量/函数/类、从文件夹.模块中导入变量/函数/类，并重命名
- 导入路径中的`.`只能用于模块/包，不能用于模块中的变量/函数/类
- 模块内的变量、函数、类等，可以在**导入模块后**用`模块名.`调用，也可以在导入时用`from m import`导入
- `import 文件夹.模块 as xxx`、`from 文件夹 import 模块 as xxx`
- `from 文件夹.模块 import 函数 as f`
- 多级目录可以
    - 依次导入模块
        ```python
        from p import p1
        from p1 import p2
        from p2 import p3 as m
        ``` 
    - 链式导入模块
        ```python
        import p.p1.p2.p3 as m
        ```


```python
# 相对导入需要在模块内使用，脚本内使用会报错
from .. import t
```

    ---------------------------------------------------------------------------

    ImportError                               Traceback (most recent call last)

    Cell In[3], line 2
          1 # 相对导入需要在模块内使用，脚本内使用会报错
    ----> 2 from .. import t
    

    ImportError: attempted relative import with no known parent package

**例1**

```python
# 导入同级目录文件夹
import myModule
dir(myModule)
```

    ['__builtins__',
     '__cached__',
     '__doc__',
     '__file__',
     '__loader__',
     '__name__',
     '__package__',
     '__path__',
     '__spec__']


- 对于包

```python
for i in dir(myModule):
    print(i)
    print(eval(f'myModule.{i}'))
    print('*' * 120)
```

    __builtins__
    {'__name__': 'builtins', '__doc__': "Built-in functions, types, exceptions, and other objects.\n\nThis module provides direct access to all 'built-in'\nidentifiers of Python; for example, builtins.len is\nthe full name for the built-in function len().\n\nThis module is not normally accessed explicitly by most\napplications, but can be useful in modules that provide\nobjects with the same name as a built-in value, but in\nwhich the built-in of that name is also needed.", '__package__': '', '__loader__': <class '_frozen_importlib.BuiltinImporter'>, '__spec__': ModuleSpec(name='builtins', loader=<class '_frozen_importlib.BuiltinImporter'>, origin='built-in'), '__build_class__': <built-in function __build_class__>, '__import__': <built-in function __import__>, 'abs': <built-in function abs>, 'all': <built-in function all>, 'any': <built-in function any>, 'ascii': <built-in function ascii>, 'bin': <built-in function bin>, 'breakpoint': <built-in function breakpoint>, 'callable': <built-in function callable>, 'chr': <built-in function chr>, 'compile': <built-in function compile>, 'delattr': <built-in function delattr>, 'dir': <built-in function dir>, 'divmod': <built-in function divmod>, 'eval': <built-in function eval>, 'exec': <built-in function exec>, 'format': <built-in function format>, 'getattr': <built-in function getattr>, 'globals': <built-in function globals>, 'hasattr': <built-in function hasattr>, 'hash': <built-in function hash>, 'hex': <built-in function hex>, 'id': <built-in function id>, 'input': <bound method Kernel.raw_input of <ipykernel.ipkernel.IPythonKernel object at 0x0000016DC9911C50>>, 'isinstance': <built-in function isinstance>, 'issubclass': <built-in function issubclass>, 'iter': <built-in function iter>, 'aiter': <built-in function aiter>, 'len': <built-in function len>, 'locals': <built-in function locals>, 'max': <built-in function max>, 'min': <built-in function min>, 'next': <built-in function next>, 'anext': <built-in function anext>, 'oct': <built-in function oct>, 'ord': <built-in function ord>, 'pow': <built-in function pow>, 'print': <built-in function print>, 'repr': <built-in function repr>, 'round': <built-in function round>, 'setattr': <built-in function setattr>, 'sorted': <built-in function sorted>, 'sum': <built-in function sum>, 'vars': <built-in function vars>, 'None': None, 'Ellipsis': Ellipsis, 'NotImplemented': NotImplemented, 'False': False, 'True': True, 'bool': <class 'bool'>, 'memoryview': <class 'memoryview'>, 'bytearray': <class 'bytearray'>, 'bytes': <class 'bytes'>, 'classmethod': <class 'classmethod'>, 'complex': <class 'complex'>, 'dict': <class 'dict'>, 'enumerate': <class 'enumerate'>, 'filter': <class 'filter'>, 'float': <class 'float'>, 'frozenset': <class 'frozenset'>, 'property': <class 'property'>, 'int': <class 'int'>, 'list': <class 'list'>, 'map': <class 'map'>, 'object': <class 'object'>, 'range': <class 'range'>, 'reversed': <class 'reversed'>, 'set': <class 'set'>, 'slice': <class 'slice'>, 'staticmethod': <class 'staticmethod'>, 'str': <class 'str'>, 'super': <class 'super'>, 'tuple': <class 'tuple'>, 'type': <class 'type'>, 'zip': <class 'zip'>, '__debug__': True, 'BaseException': <class 'BaseException'>, 'BaseExceptionGroup': <class 'BaseExceptionGroup'>, 'Exception': <class 'Exception'>, 'GeneratorExit': <class 'GeneratorExit'>, 'KeyboardInterrupt': <class 'KeyboardInterrupt'>, 'SystemExit': <class 'SystemExit'>, 'ArithmeticError': <class 'ArithmeticError'>, 'AssertionError': <class 'AssertionError'>, 'AttributeError': <class 'AttributeError'>, 'BufferError': <class 'BufferError'>, 'EOFError': <class 'EOFError'>, 'ImportError': <class 'ImportError'>, 'LookupError': <class 'LookupError'>, 'MemoryError': <class 'MemoryError'>, 'NameError': <class 'NameError'>, 'OSError': <class 'OSError'>, 'ReferenceError': <class 'ReferenceError'>, 'RuntimeError': <class 'RuntimeError'>, 'StopAsyncIteration': <class 'StopAsyncIteration'>, 'StopIteration': <class 'StopIteration'>, 'SyntaxError': <class 'SyntaxError'>, 'SystemError': <class 'SystemError'>, 'TypeError': <class 'TypeError'>, 'ValueError': <class 'ValueError'>, 'Warning': <class 'Warning'>, 'FloatingPointError': <class 'FloatingPointError'>, 'OverflowError': <class 'OverflowError'>, 'ZeroDivisionError': <class 'ZeroDivisionError'>, 'BytesWarning': <class 'BytesWarning'>, 'DeprecationWarning': <class 'DeprecationWarning'>, 'EncodingWarning': <class 'EncodingWarning'>, 'FutureWarning': <class 'FutureWarning'>, 'ImportWarning': <class 'ImportWarning'>, 'PendingDeprecationWarning': <class 'PendingDeprecationWarning'>, 'ResourceWarning': <class 'ResourceWarning'>, 'RuntimeWarning': <class 'RuntimeWarning'>, 'SyntaxWarning': <class 'SyntaxWarning'>, 'UnicodeWarning': <class 'UnicodeWarning'>, 'UserWarning': <class 'UserWarning'>, 'BlockingIOError': <class 'BlockingIOError'>, 'ChildProcessError': <class 'ChildProcessError'>, 'ConnectionError': <class 'ConnectionError'>, 'FileExistsError': <class 'FileExistsError'>, 'FileNotFoundError': <class 'FileNotFoundError'>, 'InterruptedError': <class 'InterruptedError'>, 'IsADirectoryError': <class 'IsADirectoryError'>, 'NotADirectoryError': <class 'NotADirectoryError'>, 'PermissionError': <class 'PermissionError'>, 'ProcessLookupError': <class 'ProcessLookupError'>, 'TimeoutError': <class 'TimeoutError'>, 'IndentationError': <class 'IndentationError'>, 'IndexError': <class 'IndexError'>, 'KeyError': <class 'KeyError'>, 'ModuleNotFoundError': <class 'ModuleNotFoundError'>, 'NotImplementedError': <class 'NotImplementedError'>, 'RecursionError': <class 'RecursionError'>, 'UnboundLocalError': <class 'UnboundLocalError'>, 'UnicodeError': <class 'UnicodeError'>, 'BrokenPipeError': <class 'BrokenPipeError'>, 'ConnectionAbortedError': <class 'ConnectionAbortedError'>, 'ConnectionRefusedError': <class 'ConnectionRefusedError'>, 'ConnectionResetError': <class 'ConnectionResetError'>, 'TabError': <class 'TabError'>, 'UnicodeDecodeError': <class 'UnicodeDecodeError'>, 'UnicodeEncodeError': <class 'UnicodeEncodeError'>, 'UnicodeTranslateError': <class 'UnicodeTranslateError'>, 'ExceptionGroup': <class 'ExceptionGroup'>, 'EnvironmentError': <class 'OSError'>, 'IOError': <class 'OSError'>, 'WindowsError': <class 'OSError'>, 'open': <built-in function open>, 'copyright': Copyright (c) 2001-2023 Python Software Foundation.
    All Rights Reserved.
    
    Copyright (c) 2000 BeOpen.com.
    All Rights Reserved.
    
    Copyright (c) 1995-2001 Corporation for National Research Initiatives.
    All Rights Reserved.
    
    Copyright (c) 1991-1995 Stichting Mathematisch Centrum, Amsterdam.
    All Rights Reserved., 'credits':     Thanks to CWI, CNRI, BeOpen.com, Zope Corporation and a cast of thousands
        for supporting Python development.  See www.python.org for more information., 'license': See https://www.python.org/psf/license/, 'help': Type help() for interactive help, or help(object) for help about object., 'execfile': <function execfile at 0x0000016DC8568220>, 'runfile': <function runfile at 0x0000016DC867C5E0>, '__IPYTHON__': True, 'display': <function display at 0x0000016DC6ECCD60>, 'get_ipython': <bound method InteractiveShell.get_ipython of <ipykernel.zmqshell.ZMQInteractiveShell object at 0x0000016DC9911590>>}
    ************************************************************************************************************************
    __cached__
    D:\桌面\python\python基础\myModule\__pycache__\__init__.cpython-311.pyc
    ************************************************************************************************************************
    __doc__
    None
    ************************************************************************************************************************
    __file__
    D:\桌面\python\python基础\myModule\__init__.py
    ************************************************************************************************************************
    __loader__
    <_frozen_importlib_external.SourceFileLoader object at 0x0000016DC41A2050>
    ************************************************************************************************************************
    __name__
    myModule
    ************************************************************************************************************************
    __package__
    myModule
    ************************************************************************************************************************
    __path__
    ['D:\\桌面\\python\\python基础\\myModule']
    ************************************************************************************************************************
    __spec__
    ModuleSpec(name='myModule', loader=<_frozen_importlib_external.SourceFileLoader object at 0x0000016DC41A2050>, origin='D:\\桌面\\python\\python基础\\myModule\\__init__.py', submodule_search_locations=['D:\\桌面\\python\\python基础\\myModule'])
    ************************************************************************************************************************
    

- 模块中
    - `__file__`，<span style="color:red; font-size:20px"><b>当前模块</b></span>的路径，包含模块名`xxx.py`
    - `os.getcwd()`是调用这个模块的文件的文件名
    - 如果模块中切路径了，调用它的文件中的`os.getcwd()`会变成模块切的路径
    - 模块中引入其他模块默认是相对于调用该模块的文件的路径，前面加`.`改成相对于该模块的路径
        - `from .HomeData import data`
    - `__name__`，当前文件自己执行则是`__main__`，被其他调用则是该模块的**模块名**

```python
# 导入同级目录文件夹下的py文件
from myModule import myModule1
d1 = dir(myModule1)
print(d1)

import myModule.myModule1 as m
d1 == dir(m)
```

    ['PI', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'fibonacci', 'requestBaidu']
    

    True

```python
# 变量
print(myModule1.PI)

# 函数
a = myModule1.fibonacci(10)
print(a)

# 类
r = myModule1.requestBaidu(2)
print(r.timeout)
r.requestResult()
```

    3.14159
    89
    2
    

    {'result': '<!DOCTYPE html>\r\n<!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/bdorz/baidu.min.css><title>百度一下，你就知道</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus=autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=百度一下 class="bg s_btn" autofocus></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>新闻</a> <a href=https://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>地图</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>视频</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>贴吧</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>登录</a> </noscript> <script>document.write(\'<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u=\'+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ \'" name="tj_login" class="lb">登录</a>\');\r\n                </script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">更多产品</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>关于百度</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>&copy;2017&nbsp;Baidu&nbsp;<a href=http://www.baidu.com/duty/>使用百度前必读</a>&nbsp; <a href=http://jianyi.baidu.com/ class=cp-feedback>意见反馈</a>&nbsp;京ICP证030173号&nbsp; <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> </body> </html>\r\n',
     'status_code': 200}

```python
# 也可以
from myModule.myModule1 import PI, fibonacci as fb, requestBaidu
print(PI)
print(fb(12))

# PI不是子模块，而是变量
# 会报错
import myModule.myModule1.PI
```

    3.14159
    233
    

    ---------------------------------------------------------------------------

    ModuleNotFoundError                       Traceback (most recent call last)

    Cell In[5], line 8
          4 print(fb(12))
          6 # PI不是子模块，而是变量
          7 # 会报错
    ----> 8 import myModule.myModule1.PI
    

    ModuleNotFoundError: No module named 'myModule.myModule1.PI'; 'myModule.myModule1' is not a package

**例2**

在`myModule/file/a.ipynb`中，要导入`myModule`下的文件
```python
import sys
sys.path.append('..')
import myModule1
```

**例3**

```python
# 都行
import myModule.myModule2 as myModule2
from myModule import myModule2

# myModule2中的路径和本脚本的一样
# myModule2中用__file__获取myModule2的路径
# myModule2内对应函数/类里最前面面写字符串，可以在jupyter中脚本调用时shift+tab显示Docstring

example = myModule2.getRandomMedia()
with open('./t.jpg', 'wb') as f:
    f.write(example.image())

from matplotlib import pyplot as plt
a = plt.imread('./t.jpg')
plt.imshow(a)
plt.show()
```

    
![png](/pages/python/basic/syntax/images//cat.png)
    


```python
# 也可以直接导入类
from myModule.myModule2 import getRandomMedia
```

- 动态引入
- 在程序运行时导入模块，而不是在程序启动时就静态地导入

```python
__import__(name, globals=None, locals=None, fromlist=(), level=0)

```

```python
a = __import__('myModule')
example = a.myModule2.getRandomMedia()
with open('./t.jpg', 'wb') as f:
    f.write(example.image())

from matplotlib import pyplot as plt
a = plt.imread('./t.jpg')
plt.imshow(a)
plt.show()
```

    2573824


    <matplotlib.image.AxesImage at 0x1ca85c69ed0>

    
![png](/pages/python/basic/syntax/images/antenna.png)
    


```python

```

```python

```

```python

```

```python

```

## 11. JSON
<br/>&emsp;&emsp;一种轻量级的数据交互格式，可以按照JSON指定的格式去组织和封装数据，本质上是一个带有特定格式的字符串。
<br/>&emsp;&emsp;在各个编程语言中流通的数据格式，负责数据传递和交互，如python和C。
<br/>&emsp;&emsp;格式：键值对
<br/>&emsp;&emsp;英文全称是 JavaScript Object Notation，即“JavaScript 对象表示法”。
<br/>&emsp;&emsp;简单来讲，JSON 就是 Javascript 对象和数组的字符串表示法，它使用文本表示一个 JS 对象或数组的信息，因此，JSON 的本质是<b>字符串</b>，含有一个字典或多个字典组成的列表。
<br/>&emsp;&emsp;<b>import json</b>

&emsp;&emsp;<b>json.loads(json_str)</b>，**把json格式的<span style="color:red">字符串</span>转化为python的列表（内含字典）**<br/>
&emsp;&emsp;<b>json.load(f)</b>，**把json格式的<span style="color:red">文件</span>转化为python的列表（内含字典）**

&emsp;&emsp;<b>json.dumps(data)</b>，**把含字典的列表data转化为json格式的字符串**<br/>
&emsp;&emsp;<b>json.dump(data,f)</b>，**把含字典的列表data转化为json格式的字符串并存入文件f中**
<br/>&emsp;&emsp;&emsp;&emsp;如果有中文，加属性<b>ensure_ascii=False</b>会显示中文，表明不使用ASCII码去转换它，不然中文显示Unicode编码
<br/>&emsp;&emsp;&emsp;&emsp;加<b>indent=2</b>表示缩进为2，看起来更顺眼

```python

```

```python
import json
```

```python
#python中的列表
data=[{'name':'张大山','age':11},{'name':'王大锤','age':13},{'name':'赵小虎','age':16}]
```

```python
#python列表（内含字典）转json
#无缩进
json_str=json.dumps(data,ensure_ascii=False)
print(type(json_str))
json_str
```

    <class 'str'>
    

    '[{"name": "张大山", "age": 11}, {"name": "王大锤", "age": 13}, {"name": "赵小虎", "age": 16}]'

```python
#将中文转为ascii码了
json.dumps(data)
```

    '[{"name": "\\u5f20\\u5927\\u5c71", "age": 11}, {"name": "\\u738b\\u5927\\u9524", "age": 13}, {"name": "\\u8d75\\u5c0f\\u864e", "age": 16}]'

```python
#不过也能手动转回来
json.dumps(data).encode().decode('unicode-escape')
```

    '[{"name": "张大山", "age": 11}, {"name": "王大锤", "age": 13}, {"name": "赵小虎", "age": 16}]'

```python
#有缩进
json.dumps(data,ensure_ascii=False,indent=2)
```

    '[\n  {\n    "name": "张大山",\n    "age": 11\n  },\n  {\n    "name": "王大锤",\n    "age": 13\n  },\n  {\n    "name": "赵小虎",\n    "age": 16\n  }\n]'

```python
#打印出来或者写到文件中就能看出来了
print(json.dumps(data,ensure_ascii=False,indent=2))
```

    [
      {
        "name": "张大山",
        "age": 11
      },
      {
        "name": "王大锤",
        "age": 13
      },
      {
        "name": "赵小虎",
        "age": 16
      }
    ]
    

```python
#把python列表写入json文件
with open('t1.json','w',encoding='utf-8') as f:
    json.dump(data,f,ensure_ascii=False,indent=2)
```

```python

```

```python
#把json格式转为python列表（字典组成的）
t=json.loads(json_str)
print(type(t))#多个是列表类型，单个是字典类型
print(t)
```

    <class 'list'>
    [{'name': '张大山', 'age': 11}, {'name': '王大锤', 'age': 13}, {'name': '赵小虎', 'age': 16}]
    

```python
#从json文件中读取json格式并转为python
with open("t1.json",'r',encoding="utf-8") as f:
    a=json.load(f)

with open("t1.json",'r',encoding="utf-8") as f:
    t=f.read()
    b=json.loads(t)
    
#两种方法读取
a==b
```

    True

```python
a
```

    [{'name': '张大山', 'age': 11},
     {'name': '王大锤', 'age': 13},
     {'name': '赵小虎', 'age': 16}]

```python
#会报错，json格式必须用双引号
json.loads("[{'name': '张大山', 'age': 11}, {'name': '王大锤', 'age': 13}, {'name': '赵小虎', 'age': 16}]")
```

## 12. 第三方包命令
&emsp;&emsp;<b>pip list</b>，列出所有已安装的包
<br/>&emsp;&emsp;<b>pip install numpy</b>，安装包（如numpy）
<br/>&emsp;&emsp;<b>pip install numpy==1.23.5</b>，安装指定版本的包
<br/>&emsp;&emsp;<b>pip uninstall pygame</b>，卸载已安装的包
<br/>&emsp;&emsp;<b>pip show matplotlib</b>，显示包信息
<br/>&emsp;&emsp;<b>pip download numpy</b>，下载但不安装
<br/>&emsp;&emsp;<b>pip install--upgrade numpy</b>，已安装的包更新
<br/>&emsp;&emsp;<b>pip freeze >requirements.txt</b>，将所有安装的包的列表生成文档；
<br/>&emsp;&emsp;再到目标计算机执行<b>pip install -r requirements.txt</b>一次性全部安装
<br/>&emsp;&emsp;<b>pip install --upgrade pip</b>，pip自身也有版本，更新版本

## 13. 类和对象

（1）使用类封装属性，基于类创建出一个个对象来使用
<br/>类：设计图纸、模子

创建类
<br/><b>&emsp;&emsp;class 类名称:</b>
<br/>&emsp;&emsp;&emsp;&emsp;<span style='color:red'>类的属性</span>，即定义在类中的变量；
<br/>&emsp;&emsp;&emsp;&emsp;<span style='color:red'>类的行为</span>，即定义在类中的函数，方法。方法中访问成员变量需要写<b>self.变量名称</b>，外部调用该方法不需要写self
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>def 方法名(self,形参1,形参2,......,形参n):
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;方法体</b>

创建对象
<br/>&emsp;&emsp;<b>对象=类名称()</b>

（2）类对象的构造方法（其它语言中称为构造函数）
<br/>&emsp;&emsp;<b>\_\_init\_\_()</b>，前后各两个下划线
<br/>&emsp;&emsp;创建类时会自动执行，将传入参数（必须有self，其他参数是类的属性）自动传递给__init__方法使用，

（3）类内置方法（魔术方法，包括上面的__init__）
<br/>&emsp;&emsp;<b>\_\_str\_\_</b>，指定print的返回值，不指定则返回内存地址
<br/>&emsp;&emsp;<b>\_\_lt\_\_</b>，两个对象的比较功能>或<，改变符号实现切换
<br/>&emsp;&emsp;<b>\_\_le\_\_</b>，两个对象的比较功能>=或<=，改变符号实现切换
<br/>&emsp;&emsp;<b>\_\_eq\_\_</b>，两个对象的比较功能==，如果不指定则比较内存地址
<br/>&emsp;&emsp;<b>\_\_del\_\_</b>，释放对象时自动执行。释放对象<b>del stu1</b>

（4）属性的增加和删除
<br/>&emsp;&emsp;<b>del Student.name、del stu1.name</b>分别删除类和实例的属性

（5）导入类
<br/>&emsp;&emsp;将Student类存储在student.py文件中，用到时<b>from student.py import Student</b>

（6）常用装饰器
<br/>&emsp;&emsp;`@staticmethod`，静态方法，该方法**只能在类内使用**，不能再类的实例化对象上使用；
<br/>&emsp;&emsp;`@property`，可以像调用属性那样调用方法
<br/>&emsp;&emsp;`@dataclass`，数据类，类似于C的结构体

```python
#设计类——设计登记表
class Student:
    name=None#姓名
    gender=None#性别
    def say_hi(self):
        #f表示要进行格式化，这两句都行，第二个有空格分隔
        print(f'hi大家好，我是{self.name}，性别{self.gender},多多关照！')
        # print('hi大家好，我是',self.name,'性别',self.gender,'多多关照！')
    
    def say_hi2(self,msg):
        print(f'hi大家好，我是{self.name},性别{self.gender},{msg}')

#创建对象——打印每张表
stu1=Student()
stu2=Student()

#对象属性赋值——填表
stu1.name='张伟'
stu1.gender='男'

stu2.name='李华'
stu2.gender='女'

#使用类里面的变量
stu1.name
#使用类里面的方法，self不用写
stu1.say_hi()
stu2.say_hi()

print('\n')
stu1.say_hi2('诶呦你干嘛')
stu2.say_hi2('\n诶呦不错呦')
```

    '张伟'


    hi大家好，我是张伟，性别男,多多关照！
    hi大家好，我是李华，性别女,多多关照！
    
    
    hi大家好，我是张伟,性别男,诶呦你干嘛
    hi大家好，我是李华,性别女,
    诶呦不错呦
    

```python
#例子
class Clock:
    #这两行可以省略，如果写了下面就是只赋值，如果没写下面就是定义并赋值
    id=None
    price=None
    
    def ring(self):
        import winsound
        #2000表示频率，3000表示持续时间
        winsound.Beep(2000,3000)
    
    def print_info(self):
        print(f'闹钟ID：{self.id}，闹钟价格：{self.price}')
        
    def __init__(self,id,price):
        self.id=id
        self.price=price
        

      
#定义的时候顺手就赋值了
clock1=Clock('001',19.9)
clock2=Clock('001',20.9)

clock1.print_info()
clock2.print_info()
clock1.ring()

#如果没有def __str__，会直接打印会输出内存地址
print(clock1)
#有了可以指定要输出什么
print(str(clock1))

```

    闹钟ID：001，闹钟价格：19.9
    闹钟ID：001，闹钟价格：20.9
    <__main__.Clock object at 0x000001CA85CA2750>
    <__main__.Clock object at 0x000001CA85CA2750>
    

```python
#例子
class Clock:
    #这两行可以省略，如果写了下面就是只赋值，如果没写下面就是定义并赋值
    id=None
    price=None

    
    def ring(self):
        import winsound
        #2000表示频率，3000表示持续时间
        winsound.Beep(2000,2000)
    
    def print_info(self):
        print(f'闹钟ID：{self.id}，闹钟价格：{self.price}')
        
    def __init__(self,id,price):
        self.id=id
        self.price=price
    
    def __str__(self):
        return f'闹钟ID：{self.id}，闹钟价格：{self.price}'
    
    #这里返回第一个是否小于第二个，要与后面判断什么相对应
    def __lt__(self,other):
        return self.price<other.price
    
    def __le__(self,other):
        return self.price<=other.price
    
    def __eq__(self,other):
        return self.price==other.price
        

        
#定义的时候顺手就赋值了
clock1=Clock('001',19.9)
clock2=Clock('001',20.9)

clock1.print_info()
clock2.print_info()
clock1.ring()

#如果没有def __str__，会直接打印会输出内存地址
print(clock1)
#有了可以指定要输出什么
print(str(clock1))

#比较，不写__lt__会报错
clock1<clock2
clock1>=clock2
clock1==clock2
```

**数据类**

```python
from dataclasses import dataclass
import dataclasses

@dataclass
class Item:
    name:str
    id:str
    address:str
    isChecked:bool = True
    age:int = 20

# 没默认值的从类获取会报错，没有该属性
print(Item.age, Item.isChecked)

item = Item('张三','10000','银河系地球亚洲', False, 30)
print(item.name, item.id, item.address, item.isChecked, item.age)

# 转为字典
# dataclasses.asdict(Item)，会报错，转的必须是实例

dic = dataclasses.asdict(item)
dic
```

    20 True
    张三 10000 银河系地球亚洲 False 30
    

    {'name': '张三',
     'id': '10000',
     'address': '银河系地球亚洲',
     'isChecked': False,
     'age': 30}

```python
from dataclasses import dataclass

# 不可修改，frozen默认False
# 无默认值在有默认值前面
@dataclass(frozen = True)
class Item:
    name:str
    id:str
    address:str
    isChecked:bool = True
    age:int = 20

# 初始化
item = Item('张三','10000','银河系地球亚洲', False, 30)
print(item.name, item.id, item.address, item.isChecked, item.age)
# 修改，会报错
item.age = 100
```

    张三 10000 银河系地球亚洲 False 30
    

    ---------------------------------------------------------------------------

    FrozenInstanceError                       Traceback (most recent call last)

    Cell In[27], line 16
         14 print(item.name, item.id, item.address, item.isChecked, item.age)
         15 # 修改，会报错
    ---> 16 item.age = 100
    

    File <string>:4, in __setattr__(self, name, value)
    

    FrozenInstanceError: cannot assign to field 'age'

**pydantic的BaseModel**

```python
from pydantic import BaseModel
# 可以用typing进行注解

class Item(BaseModel):
    name:str
    id:str
    address:str
    isChecked:bool = True
    age:int = 20

# 用处：如Fastapi中接收请求体参数
```

（7）封装
<br/>&emsp;&emsp;面向对象编程：基于模板（类）创建实体（对象），使用对象完成功能开发
<br/>&emsp;&emsp;面向对象包含三大主要特征：封装、继承、多态

&emsp;&emsp;变量名前面加<b>\__</b>（两个下划线），变成私有变量了
<br/>&emsp;&emsp;方法名前面加<b>__</b>（两个下划线），变成私有方法了
<br/>&emsp;&emsp;<b>类对象不能获取、修改私有变量，不能执行私有方法</b>
<br/>&emsp;&emsp;<b>私有变量、方法可以被类中其他成员访问</b>

```python
class phone:
    __pd='0935'  #密码
    
    def __init__(self,id,name,date,price):
        phone.id=id
        phone.name=name
        phone.date=date
        phone.price=price
        
    def __spd(self):
        print(f'密码是：{self.__pd}')

    @staticmethod
    def get_pwd(self):
        print(f'密码是：{self.__pd}')
        
    def spd(self):
        print(f'密码是：{self.__pd}')
        
phone1=phone('0001','p1','20230530',5999)

phone1.name
#下面这三句都会报错
# phone1.__pd
# phone1.get_pwd()
# phone1.__spd()
phone1.spd()
```

    'p1'


    密码是：0935
    

```python
#例子
class Phone:
    __is_5g_enable=False
    def __check_5g(self):
        if self.__is_5g_enable:
            print('5g开启')
        else:
            print('5g关闭，使用4g网络')
    
    def call_by_5g(self):
        self.__check_5g()
        print('正在通话中')
        
phone=Phone()
phone.call_by_5g()
```

    5g关闭，使用4g网络
    正在通话中
    

（8）继承
<br/>&emsp;&emsp;新的类从旧的类进行修改产生，不从头写；原来的变量和方法都在，可以直接调用；
<br/>&emsp;&emsp;也可以在子类的初始化中再初始化父类，来修改继承父类的属性；
<br/>&emsp;&emsp;也可以加新的类和方法。

<br/>&emsp;&emsp;单继承：继承一个父类；多继承：继承多个父类
<br/>&emsp;&emsp;如果新类只是继承多个类而没有新增，内容直接pass
<br/>&emsp;&emsp;如果多个父类中有变量或方法同名的，先继承（左边的）优先级高

&emsp;&emsp;<b>class 类名(父类名):
<br/>&emsp;&emsp;&emsp;&emsp;类体内容</b>

&emsp;&emsp;<b>class 类名(父类1,父类2,父类3,......父类n):
<br/>&emsp;&emsp;&emsp;&emsp;类体内容</b>

<br/>&emsp;&emsp;复写：
<br/>&emsp;&emsp;&emsp;&emsp;子类继承了父类的属性和方法之后，可以对其进行修改，在子类中重新定义即可
<br/>&emsp;&emsp;&emsp;&emsp;如果还想在子类中使用原来父类的属性/方法：
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;方法一：<b>父类名.成员变量、父类名.成员方法(self)</b>
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;方法二：<b>super().成员变量、super().成员方法()</b>，如果多个父类有相同变量名或方法名，左边优先

```python
class Phone:
    id='01'
    producer=None
    def call_by_4g(self):
        print('4g通话')
        
class NFCReader:
    nfc_type='第五代'
    producer='HM'
    def read_card(self):
        print('NFC读卡')
        
class RemoteControl:
    rc_type='红外遥控'
    id='02'
    def control(self):
        print('红外遥控开启')
        

#手机出新版了，通过继承得到新的类，老功能都在，加了新功能，更简便
class PhoneNew(Phone,NFCReader,RemoteControl):#多继承
    face_id=True
    nfc_type='第六代'#复写
    def call_by_5g(self):
        print('2023最新5g通话')

phone1=PhoneNew()
phone1.call_by_5g()
phone1.read_card()
phone1.nfc_type#复写
phone1.rc_type
phone1.id

```

    2023最新5g通话
    NFC读卡
    

    '第六代'


    '红外遥控'


    '01'

```python
class f1:
    id='1'
    
class f2:
    id='2'
    
class p(f1,f2):
    id='3'
    id_l=f1.id
    def p(self):
        print(super().id)

r=p()
r.id
r.id_l
r.p()
```

    '3'


    '1'


    1
    

```python
class Employee:
    def __init__(self,name,id):
        self.name=name
        self.id=id
        self.tt=1

    def print_info(self):
        print(f'员工名字：{self.name}，工号：{self.id}')

class FullTimeEmployee(Employee):
    def __init__(self,name,id,monthly_salary):
        #如果这里不调用父类的初始化的话，只会执行子类初始化的属性
        super().__init__(name,id)
        #直接调用父类初始化更简洁
        # self.name=name
        # self.id=id
        self.monthly_salary=monthly_salary

    def calculate_monthly_pay(self):
        return self.monthly_salary

class PartTimeEmployee(Employee):
    def __init__(self,name,id,daily_salary,work_days):
        super().__init__(name,id)
        self.daily_salary=daily_salary
        self.work_days=work_days

    def calculate_monthly_pay(self):
        return self.daily_salary*self.work_days

zhang=FullTimeEmployee('张三','1001',6000)
li=PartTimeEmployee('李四','1002',300,25)

zhang.print_info()
li.print_info()
print(zhang.calculate_monthly_pay())
print(li.calculate_monthly_pay())
print(zhang.tt)
```

    员工名字：张三，工号：1001
    员工名字：李四，工号：1002
    6000
    7500
    1
    

（9）多态
<br/>&emsp;&emsp;多种状态，即完成某个行为时，使用不同的对象会得到不同的状态

```python
#顶层抽象父类
class Animal:
    def speak(self):
        pass
    
class Dog(Animal):
    def speak(self):
        print('汪汪汪')
        
class Cat(Animal):
    def speak(self):
        print('喵喵喵')
        
def make_noise(animal:Animal):#传入一个类
    animal.speak()#执行该类里面的speak方法
    
#传入了不同对象（两个不同的类对象），分别执行其中的speak方法，结果不同
make_noise(Dog())
make_noise(Cat())
```

    汪汪汪
    喵喵喵
    
