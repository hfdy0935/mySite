---
title: tkinter
titleTemplate: Python笔记
---

-   python 标准库，自带
-   优点：跨平台
-   缺点：不 fashion

<br><br>
<br><b>import tkinter as tk</b>

## 1. 窗口操作
<br><b>w=tk.Tk()</b>，创建窗口对象
<br><b>w.mainloop()</b>，开启主循环，显示窗口
<br><b>w.destroy()</b>，关闭窗口
<br><b>w.geometry('wxh+x-y')</b>，设置窗口宽高，+x、+y 是窗口左上角距屏幕左侧、上边的距离，-x、-y 是窗口右下角距屏幕右侧、下边的距离
<br><b>w.minsize(800,600)</b>，指定窗口最小宽高
<br><b>w.state('zoomed')</b>，窗口最大化
<br><b>w.title('name')</b>，设置窗口标题/名字，默认是"tk"
<br><b>w['background']='red'</b>，设置背景颜色，颜色名/十六进制
<br><b>w.iconbitmap(ico_path)</b>，设置 icon 图标，左上角标题前面
<br><b>w.resizable(True,False)</b>，窗体水平、竖直方向是否可以拉伸，默认都是 True

<br><b>width,height=w.maxsize()</b>，获取窗口宽高
<br><b>width=w.winfo_screenwidth()</b>，获取窗口宽度
<br><b>height=w.winfo_screenheight()</b>，获取窗口高度
<br>都必须在窗口在的时候才能获取到

<br><br>
也可以这样写，在外面加空间，或者继承<b>tk.Tk()</b>在类里面加

```python
import tkinter as tk

class my_gui(tk.Tk):
    def __init__(self):
        # tk.Tk.__init__(self)
        super().__init__()
        self.label1=tk.Label(self,text='用户名：')
        self.label1.grid(row=0,column=0)
        self.entry1=tk.Entry(self)
        self.entry1.grid(row=0,column=1)
        self.label2=tk.Label(self,text='密码：')
        self.label2.grid(row=1,column=0)
        self.entry2=tk.Entry(self,show='*')
        self.entry2.grid(row=1,column=1)

w=my_gui()
tmp=tk.Label(w,text='None')
tmp.grid(row=2,column=0,columnspan=2)
w.mainloop()
```

## 2. 部件操作

### 2.1. Label

- 在屏幕上显示文本/图片部件

<br><b>tk.Label()</b>，添加内容框，**参数一为父容器名字，必填**
<br>&emsp;&emsp;配置参数有：
<br>&emsp;&emsp;&emsp;&emsp;<b>width</b>宽度整数，<b>height</b>高度整数，<b>text</b>文本，<b>bg</b>背景色，<b>fg</b>前景色即文本色，<b>font</b>字体（类型，大小，粗细，倾斜等），
<br>&emsp;&emsp;&emsp;&emsp;<b>cursor='spider'、'cross'、'plus'</b>鼠标悬浮样式为蜘蛛、×、加号
<br>&emsp;&emsp;&emsp;&emsp;<b>image</b>图像，<b>padx</b>文本与边界的水平距离，<b>pady</b>文本与边界的垂直距离
<br>&emsp;&emsp;&emsp;&emsp;<b>bd</b>边框宽度，<b>relief</b>边框样式（flat 平坦边框（默认值）,raised 凸起边框,sunken 凹陷边框,groove 沟槽式边框,ridgr 脊状边框）
<br>&emsp;&emsp;&emsp;&emsp;<b>anchor</b>文本在标签区域的对齐方式（n, ne, e, se, s, sw, w, nw, or center），当 Label、Button 等指定宽高太大时，起作用
<br>&emsp;&emsp;&emsp;&emsp;<b>state</b>标签状态（'normal'正常,'disabled'禁用,'active'活动-获得焦点或被激活）
<br>&emsp;&emsp;&emsp;&emsp;<b>underline=0</b>，表示需要下划线的字的索引
<br><b>text=tk.Label(w1,width=200,height=50,text='植物大战僵尸',bg='yellow',fg='green',font=('微软雅黑',20,'bold italic'))</b>
<br> Tkinter 使用文本单位（而不是英寸，厘米或像素）来测量宽度和高度，以确保跨平台的应用程序行为一致。
<br><b>text.pack()</b>，将文本内容放置在主窗口内
<br><b>img=tk.PhotoImage(file='data/白天泳池.png')</b>，导入图片
<br><b>tk.Label(w,image=img,bg='green',width=1000,height=600).pack()</b>，图片配置并显示
<br><br>不支持 jpg，如果要加，可以用<b>PIL 库</b>加

```python
from PIL import Image,ImageTK
img=Image.open('xx.jpg')
img1=ImageTK.PhotoImage(img)
#之后再加入Label
```

<br><br><br><b>a=tk.Label()
<br>a['text']</b>获取 Label 中的文本，**字符串**类型，可以更改，来让 a 改变显示
<br><b>a.image=img、a['image']=img、a.config(image=img)</b>都可以改变 a 的图片显示

### 2.2. Button

- 按钮

<br><b>button=tk.Button(w,text='关闭',command=w.destroy)</b>
<br>&emsp;&emsp;&emsp;&emsp;添加按钮，设置按钮文本，command 表示功能（可以是自己写的函数名，lambda 函数，退出窗口等）
<br>&emsp;&emsp;&emsp;&emsp;其他参数和 Label 基本一样，按钮可以是文本也可以是图片
<br><br><br>

```python
# 获取按钮的文本，可以在命令中判断此时的文本，用于切换状态
button['text']
# 修改文本或其他属性
button.config(text='修改的文本')
# 也可以
button['text']='修改的文本'
```

### 2.3. Entry
单行文本输入部件

<br><b>a=tk.Entry(w)</b>，创建部件
<br>&emsp;&emsp;常用参数有：
<br>&emsp;&emsp;&emsp;&emsp;<b>bg='red'</b>背景颜色，<b>bd=3</b>边框宽度，<b>fg</b>前景/字体颜色，<b>show='\*'</b>显示符号（输入密码时用到），<b>font</b>字体，<b>relief</b>边框样式
<br>&emsp;&emsp;&emsp;&emsp;<b>width</b>输入框宽度

<br><b>a.get()</b>，获取其中的文本，只能获取所有文本，不能加参数不然会报错
<br><b>a.delete(0)</b>，删除第一个字符
<br><b>a.delete(0,3)</b>，左闭右闭
<br><b>a.delete(3,tk.END)</b>，从第四个删到末尾

<br><b>a.insert(3,'python')</b>，从索引为 3 的位置开始，插入文本'python'

-   <span style="color:blue" id='2.4'>**Text**</span>，多行文本输入部件

<br><b>b=tk.Text(w)</b>
<br><b>bg、fg、bd、font、relief</b><br>
<br><b>b.get('1.0')</b>，获取第一行第一列的字符。（行号从 1 开始，列号从 0 开始，换行符也算一个字符）
<br><b>b.get('1.0','2.3')</b>，第一行第一列到第二行第三列，不包括后面列号那个位置
<br><b>b.get('1.0',tk.END)</b>，从第一行第一个元素到末尾

<br><b>b.delete('1.0')</b>，删除字符
<br><b>b.delete('1.0','1.4')</b>，删除第一行的列索引为 0、1、2、3 的字符，删除也能用<b>tk.END</b>

<br><b>b.insert('1.0','Hello')</b>，指定位置插入字符（串）
<br>如果要另起一行插入文本，需要手动写上换行符
<br><br>

-   <span style="color:blue" id='2.5'>**Frame**</span>，矩形区域，组织应用程序中小部件的布局

<br>空的 Frame 在窗口小部件中几乎不可见，最好将框架视为其他小部件的**容器**
<br>通过设置窗口小部件的`master`属性将窗口小部件分配给框架
<br>&emsp;&emsp;**frame=tk.Frame()**
<br>&emsp;&emsp;&emsp;&emsp;参数有<b>bg、bd、width、height、relief</b>等
<br>&emsp;&emsp;**a=tk.Label(master=frame)**
<br>可以将多个小部件的 master 分配个同一个 frame，可以整体移动，整体分配边距等，每个 frame 中要用一样的位置形式
<br><br>
<b>tk.LabelFrame(w,text='frame 的标题')</b>，会给 frame 显示一个标题，其他用法和 frame 一样

<br><br>**Label&Button**

```python
import tkinter as tk

w=tk.Tk()
# type(w) #tkinter.Tk
w.geometry('1000x600-100+100')
weight,height=w.maxsize()
# w.state('zoomed')
w.title('Label&Button练习')
w.iconbitmap('data/3.ico')
w.resizable(False,False)

tk.Label(w,text='PVZ中文版',font=('华文行楷',40,'bold'),fg='orange',bg='gray').pack()
img=tk.PhotoImage(file='data/白天泳池.png')
tk.Label(image=img,width=800,height=400).pack()


button=tk.Button(image=img,width=40,height=20,bg='black',fg='white',font=('微软雅黑',20,'bold')).pack()
button=tk.Button(text='退出',width=4,height=1,bg='black',fg='white',font=('微软雅黑',20,'bold'),command=w.destroy).pack(side='bottom')

w.mainloop()
```

效果：<br><br>
![png](/pages/python/basic/library/images/b6cb81d5-6363-43fb-8877-d164c2433656.png)

```python
import tkinter as tk
from tkinter import ttk
w=tk.Tk()

def f1():
    #默认是normal，可点
    b1.config(state='disable')
    # b1['state']='disable'
def f2():
    b1.config(state='normal')
    # b1['state']='normal'

b1=tk.Button(w,text='按钮1')
b1.grid(row=0,column=0,padx=10,pady=10)
b2=tk.Button(w,text='按钮1不可点',command=f1)
b2.grid(row=0,column=1,padx=10,pady=10)
b3=tk.Button(w,text='按钮1恢复可点',command=f2)
b3.grid(row=0,column=2,padx=10,pady=10)

w.mainloop()
```

![png](/pages/python/basic/library/images/d65790ee-5ddd-4fe8-8b2a-4c3ac973b85b.png)

**Entry**

```python
w=tk.Tk()
w.geometry('500x300+100+100')
w.resizable(False,False)
w.title('Entry练习1')

tk.Label(w,text='用户名: ').grid(row=0)
tk.Label(w,text='密码：').grid(row=1)

un=tk.Entry(w,fg='blue')
un.grid(row=0,column=1)
un.insert(0,'apython')
un.delete(0)
un.insert(0,'powerful ')

pwd=tk.Entry(w,fg='red',show='*')
pwd.grid(row=1,column=1)

def print_info():
    print('用户名：',un.get())
    print('密码：',pwd.get())

login_button=tk.Button(w,text='登录',command=print_info)
login_button.grid(row=2,column=1)

w.mainloop()
```

效果：
<br><br>

![png](/pages/python/basic/library/images/03a81945-0667-4fc7-b1d0-5b7b001ad80a.png)

```python
w=tk.Tk()
w.geometry('300x300+100+100')
w.title('Enrty练习2')

t=tk.Entry(w,width=40)
t.pack()
t.insert(0,'abcdefghijklmnopqrstuvwxyz')

def f1():
    print(t.get())
def f2():
    t.delete(0)
def f3():
    t.delete(0,2)
def f4():
    t.insert(tk.END,'#')

tk.Button(text='打印所有字符',command=f1).pack()
tk.Button(text='删除第一个字符',command=f2).pack()
tk.Button(text='删除前两个字符',command=f3).pack()
tk.Button(text='后面添加一个#',command=f4).pack()

w.mainloop()
```

    abcdefghijklmnopqrstuvwxyz
    bcdefghijklmnopqrstuvwxyz
    defghijklmnopqrstuvwxyz
    defghijklmnopqrstuvwxyz#

效果：
<br><br>

![png](/pages/python/basic/library/images/377737fa-58ed-4dcc-864d-29e4d1ec0c09.png)

### 2.4. Text

- 文本区

```python
import tkinter as tk

w=tk.Tk()
w.resizable(False,False)
w.title('Text练习1')

info=tk.Text(w)
info.grid(row=0,column=0)
info.insert('1.0','Hello\nWorld\n!')

tk.Label(text='行数：').grid(row=0,column=1)
r_e=tk.Entry(w)
r_e.grid(row=0,column=2)

tk.Label(text='列数：').grid(row=0,column=4)
c_e=tk.Entry(w)
c_e.grid(row=0,column=5)

show_Entry=tk.Entry(w)
show_Entry.grid(row=2,column=3)

def search_char():
    row=r_e.get()
    column=c_e.get()
    tmp_str=str(row)+'.'+str(column)
    target=info.get(tmp_str)
    show_Entry.delete(0,tk.END)
    if target=='':
        show_Entry.insert('0','没查到！')
    else:
        show_Entry.insert('0',target)

quit_button=tk.Button(text='查询',command=search_char)
quit_button.grid(row=1,column=3)

w.mainloop()
```

效果：
![png](/pages/python/basic/library/images/1300c4fe-ef53-4ab8-9cff-364aa45177a9.png)

```python
w=tk.Tk()
w.title('Text练习2')

t=tk.Text(fg='red')
t.grid(row=0,column=0)
t.insert('1.0','天姥连天向天横，势拔五岳掩赤城；\n天台四万八千长，对此欲倒东南倾斜；\n我欲因之梦吴越，一夜飞渡镜湖月；\n湖月照我影，送我至剡溪。')

def f1():
    print(t.get('1.0'))
def f2():
    t.delete('1.0')
def f3():
    tmp=add.get()
    t.insert('1.0',tmp)
    add.delete('0',tk.END)

tk.Button(text='打印第一个字符',command=f1).grid(row=1)
tk.Button(text='删除一个字符',command=f2).grid(row=2)
tk.Label(text='从头添加一个字符',bg='blue').grid(row=3,column=0)
add=tk.Entry()
add.grid(row=3,column=1)
tk.Button(text='添加',command=f3).grid(row=3,column=2)

w.mainloop()
```

    天
    姥
    连
    天
    梦

效果：
<br><br>

![png](/pages/python/basic/library/images/72975cf0-52b6-4764-9d00-9be8919166c8.png)

### 2.5. Frame

- 子框架、画面

```python
w=tk.Tk()
w.title('Frame练习1')
w.geometry('500x500+100+100')

frame1=tk.Frame()
frame2=tk.Frame()
label1=tk.Label(master=frame1,text='t1')
label2=tk.Label(master=frame2,text='t2')

#这两个也要写，不能缺
label1.pack()
label2.pack()

#显示顺序看的是frame1和frame2的顺序
frame2.pack()
frame1.pack()

w.mainloop()
```

**下面这两个效果一样**

```python
import tkinter as tk
border_effects = {
    "flat": tk.FLAT,
    "sunken": tk.SUNKEN,
    "raised": tk.RAISED,
    "groove": tk.GROOVE,
    "ridge": tk.RIDGE,
 }
window = tk.Tk()
for relief_name, relief in border_effects.items():
    frame = tk.Frame(master=window, relief=relief, borderwidth=5)
    frame.pack(side=tk.LEFT)
    label = tk.Label(master=frame, text=relief_name)
    label.pack()
window.mainloop()
```

```python
border_effects = {
    "flat": 'flat',
    "sunken": 'sunken',
    "raised": 'raised',
    "groove": 'groove',
    "ridge": 'ridge',
 }
window = tk.Tk()
for relief_name, relief in border_effects.items():
    frame = tk.Frame(master=window, relief=relief, borderwidth=5)
    frame.pack(side='left')
    label = tk.Label(master=frame, text=relief_name)
    label.pack()
window.mainloop()

# frame.pack()，size值有'left'、'right'、'top'、'bottom'等
```

![png](/pages/python/basic/library/images/515265ed-5e83-4198-a8c7-f9b7b17f8d04.png)

```python
w=tk.Tk()
frame=tk.LabelFrame(w,text='frame的标题')
frame.pack(padx=50,pady=50)
tk.Button(frame,text='按钮').pack(padx=80,pady=20)
w.mainloop()
```

![png](/pages/python/basic/library/images/bd904caa-14c3-468a-ae77-a34dcee6966b.png)

```python

```

### 2.6. 弹窗

<br><b>tk.messagebox.showinfo(title=None, message=None)</b>，信息提示对话框
<br><b>tk.messagebox.showerror(title=None, message=None)</b>，错误提示对话框
<br><b>tk.messagebox.showwarning(title=None, message=None)</b>，警告对话框

<br><br>
<b>tk.messagebox.askokcancel(title=None, message=None)</b>，确认或取消，提示框，返回 True 或 False
<br><b>tk.messagebox.askretrycancel(title='重试或取消',message='重试或取消')</b>，警告框，返回 True 或 False
<br><b>tk.messagebox.askyesnocancel(title='是否或取消',message='是否或取消')</b>，提示框，返回 True 或 False 或 None
<br>点 × 也算取消，前两个返回 False，第三个返回 None

<br><br>
<b>tk.messagebox.askquestion(title='回答问题',message='回答问题')</b>，是/否，返回 yes/no
<br><b>tk.messagebox.askyesno(title='回答是非题',message='回答是非题')</b>，返回值 True/False
<br>这俩还不能取消，必须得回答

```python
from tkinter import messagebox
w=tk.Tk()
w.geometry('300x300+400+400')

def f1():
    messagebox.showinfo(title='提示',message='点到我了')
def f2():
    messagebox.showerror(title='提示',message='出错了')
def f3():
    messagebox.showwarning(title='提示',message='警告')
tk.Button(w,text='提示',command=f1).pack()
tk.Button(w,text='报错',command=f2).pack()
tk.Button(w,text='警告',command=f3).pack()
w.mainloop()
```

![png](/pages/python/basic/library/images/f8678a0c-50e8-4ac4-ad06-7d75dd6c0246.png)
![png](/pages/python/basic/library/images/e076bf0f-aab8-4354-b370-b16cc7fbfa96.png)
![png](/pages/python/basic/library/images/689e90e2-08ef-4e41-b64f-7d84772065ad.png)

```python
w=tk.Tk()
w.geometry('300x300+400+400')

def f1():
    a=messagebox.askokcancel(title='确认或取消',message='确认或取消')
    if a:
        print('确认了')
    else:
        print('取消了')
def f2():
    a=messagebox.askretrycancel(title='重试或取消',message='重试或取消')
    if a:
        print('重试了')
    else:
        print('取消了')
def f3():
    a=messagebox.askyesnocancel(title='是否或取消',message='是否或取消')
    if a:
        print('是')
    elif a==None:
        print('取消了')
    else:
        print('否')

tk.Button(w,text='确认或取消',command=f1).pack()
tk.Button(w,text='重试或取消',command=f2).pack()
tk.Button(w,text='是否或取消',command=f3).pack()
w.mainloop()
```

    取消了
    取消了
    取消了

![png](/pages/python/basic/library/images/40e2f203-f603-43ae-bac2-87157ea29eca.png)
![png](/pages/python/basic/library/images/278a8a07-a66c-40ab-8a04-b83da696605f.png)
![png](/pages/python/basic/library/images/8a657335-09b3-4d64-a32d-e8ab9cb0650d.png)

```python
w=tk.Tk()
w.geometry('300x300+400+400')

def f1():
    a=messagebox.askquestion(title='回答问题',message='回答问题')
    print(a)
def f2():
    a=messagebox.askyesno(title='回答是非题',message='回答是非题')
    print(a)

tk.Button(w,text='回答问题',command=f1).pack()
tk.Button(w,text='回答是非题',command=f2).pack()

w.mainloop()
```

    yes
    no
    True
    False

![png](/pages/python/basic/library/images/cdfb756a-a0d9-43b8-b1f4-38ed09b42a91.png)
![png](/pages/python/basic/library/images/d91b7b12-1a67-4863-962c-634306e59b7f.png)

### 2.7. 单选框

<br>
<b>v=tk.IntVar()</b>
<br><b>opt1=tk.Radiobutton(frame1,text='Chrome',variable=v,value=1)...</b>，创建多个选项
<br>&emsp;&emsp;单选框按钮设置的variable都要设置为相同，value要不相同
<br>&emsp;&emsp;可以设置参数：
<br>&emsp;&emsp;&emsp;&emsp;<b>bg、bd、fg、padx、pady、width、height、command</b>，command加命令后不用手动更新了，切换到那个选项就自动执行对应函数
<br><b>v.get()</b>，获取单选结果的value，再根据不同value做判断

```python
import tkinter as tk

w=tk.Tk()

frame1=tk.Frame(w)
tk.Label(w,text='查看该库的导入方法').grid(row=0)
v=tk.IntVar()
#单选框按钮设置的variable都要设置为相同，value要不相同
opt1=tk.Radiobutton(frame1,text='selenium',variable=v,value=1)
opt2=tk.Radiobutton(frame1,text='pytorch',variable=v,value=2)
opt3=tk.Radiobutton(frame1,text='matplotlib',variable=v,value=3)
opt4=tk.Radiobutton(frame1,text='pandas',variable=v,value=4)
opt1.grid(row=0,sticky='w',column=0,columnspan=2)
opt2.grid(row=1,sticky='w',column=0,columnspan=2)
opt3.grid(row=2,sticky='w',column=0,columnspan=2)
opt4.grid(row=3,sticky='w',column=0,columnspan=2)
frame1.grid(row=1,column=0,columnspan=2)

frame2=tk.Frame(w)
def p():
    if v.get()==1:
        show['text']='from selenium .webdriver import Chrome'
    elif v.get()==2:
        show['text']='import torch\nimport torch.nn as nn'
    elif v.get()==3:
        show['text']='import matplotlib.pyplot as plt'
    elif v.get()==4:
        show['text']='import pandas as pd'
    else:
        pass

tk.Button(frame2,text='显示选择结果的导入方法',command=p).grid(row=0,column=0)
show=tk.Label(frame2,text='                                              ',fg='blue')
show.grid(row=1,column=0)
frame2.grid(row=2)

w.mainloop()
```

![png](/pages/python/basic/library/images/8049e3f1-d896-468a-b92c-aeb99f7c5cb9.png)

```python
import tkinter as tk
import os
from PIL import Image, ImageTk
from tkinter import messagebox

class my_gui:
    def __init__(self,w):
        self.w=w
        self.w.geometry('1200x600+100+100')
        self.w.resizable(False,False)
        self.w.title('图片切换')

        self.pic=tk.Label(w)
        self.pic.grid(row=0,column=1,rowspan=20)

        self.frame=tk.Frame(self.w)
        self.frame.grid(row=0,column=0)
        self.v=tk.IntVar()

        self.dpath=os.chdir('D:/桌面/python/图形界面/data/图片/')
        self.name=os.listdir()[:20]
        for i in range(len(self.name)):
            exec(f'self.o{i}=tk.Radiobutton(self.frame,text=self.name[i],variable=self.v,value=i,command=self.show_pic)')
            eval(f"self.o{i}.grid(row={i},column=0,sticky='w',padx=20)")


    def show_pic(self):
        path='D:/桌面/python/图形界面/data/图片/'+self.name[self.v.get()]
        try:
            original_image = Image.open(path)  # 替换为你的图像文件路径
            resized_image = original_image.resize((800, 300), Image.LANCZOS)  # 调整图像大小
            # 将 Pillow 图像转换为 Tkinter PhotoImage 对象
            image_for_label = ImageTk.PhotoImage(resized_image)

            # # 设置 Label 的图像
            self.pic.config(image=image_for_label)
            self.pic.image = image_for_label  # 需要保持对图像的引用以防止垃圾回收
        except:
            self.pic.image=None
            messagebox.showerror(title='',message='出错了！')
            pass

w=tk.Tk()
gui=my_gui(w)
w.mainloop()
```

![png](/pages/python/basic/library/images/d5b15fb7-2752-4cab-a93d-735bd6c7e37b.png)

```python
import tkinter as tk
import os
from PIL import Image, ImageTk
from tkinter import messagebox

class my_gui:
    def __init__(self, w):
        self.w = w
        self.w.geometry('1200x600+100+100')
        self.w.resizable(False, False)
        self.w.title('图片切换')

        self.pic_frame = tk.Frame(self.w)
        self.pic_frame.grid(row=0, column=1, rowspan=30)

        self.radio_frame = tk.Frame(self.w)
        self.radio_frame.grid(row=0, column=0)

        self.column_count = 16  # 每列显示的单选框数量

        self.v = tk.IntVar()

        self.dpath = os.chdir('D:/桌面/python/图形界面/data/图片/')
        self.name = os.listdir()

        self.radio_buttons = []

        for i in range(len(self.name)):
            radio_button = tk.Radiobutton(self.radio_frame, text=self.name[i], variable=self.v, value=i, command=self.show_pic)
            self.radio_buttons.append(radio_button)
            row_num = i % self.column_count
            column_num = i // self.column_count
            radio_button.grid(row=row_num, column=column_num, padx=5, pady=5, sticky='w')

        self.show_pic()

    def show_pic(self):
        selected_index = self.v.get()
        if selected_index < 0 or selected_index >= len(self.name):
            return

        selected_image = self.name[selected_index]
        path = 'D:/桌面/python/图形界面/data/图片/' + selected_image
        try:
            original_image = Image.open(path)
            resized_image = original_image.resize((800, 300), Image.LANCZOS)
            image_for_label = ImageTk.PhotoImage(resized_image)

            self.pic_frame.image = image_for_label
            if hasattr(self, 'pic_label'):
                self.pic_label.config(image=image_for_label)
            else:
                self.pic_label = tk.Label(self.pic_frame, image=image_for_label)
                self.pic_label.grid(row=0, column=0)

        except Exception as e:
            print(e)
            messagebox.showerror(title='', message='出错了！')
            pass

w = tk.Tk()
gui = my_gui(w)
w.mainloop()

```

    cannot identify image file 'D:/桌面/python/图形界面/data/图片/点了出错.txt'

![png](/pages/python/basic/library/images/7b5974fe-0c96-445d-a564-2b7c06e22205.png)

### 2.8. 多选框

<br>
多创建几个变量，用来存储多项选的variable，没有value;
<br>后面直接判断每个variable是否为True，True的表示勾选了，False的没勾选
<br><b>v1=tk.IntVar()...</b>
<br><b>check1=tk.Checkbutton(frame1,text='CNN',variable=v1)...</b>

-   width 宽、height 高、bg 背景颜色、fg 前景颜色、image 背景图片、bd 边框宽度、relief 边框样式、
-   command 命令、font 字体、activebackground 激活背景颜色, activeforeground 激活字体颜色、
-   padx、pady、variable(True 选中,False 没选中)、text 文本等
    <br><br>
    全选时把所有的 v1、v2...设为 1 或 True，<b>v1.set(0)、v2.set(True)</b>
    <br>重置时设为 0 或 False，同上
    <br><br><br>**单个多选框可作为勾选框，判断是否勾选**

```python
w=tk.Tk()

v1=tk.IntVar()
v2=tk.IntVar()
v3=tk.IntVar()
v4=tk.IntVar()
tk.Label(w,text='多选').grid(row=0,sticky='nsew')

frame1=tk.Frame(w)
check1=tk.Checkbutton(frame1,text='CNN',variable=v1)
check2=tk.Checkbutton(frame1,text='RNN',variable=v2)
check3=tk.Checkbutton(frame1,text='Transformer',variable=v3)
check4=tk.Checkbutton(frame1,text='ControlNet',variable=v4)
check1.grid(row=0,column=0,sticky='w')
check2.grid(row=0,column=1,sticky='w')
check3.grid(row=1,column=0,sticky='w')
check4.grid(row=1,column=1,sticky='w')
frame1.grid(row=0)


def p():
    nn=['CNN','RNN','Transform','ControlNet']
    string=''
    for index,i in enumerate([v1,v2,v3,v4]):
        if i.get()==True:
            string+=' '*15+nn[index]+'\n'
    Label['text']=string

def re():
    global v1
    global v2
    global v3
    global v4
    Label['text']='     '
    for i in (v1,v2,v3,v4):
        # i.set(0)
        i.set(False)
        #0和False都行

def all_sel():
     for i in (v1,v2,v3,v4):
        # i.set(1)
        i.set(True)
        #1和True都行

show=tk.Button(w,text='显示所选',command=p,padx=30,bg='green')
show.grid(row=2,column=0,sticky='e')

reset=tk.Button(w,text='重置',command=re,width=10)
reset.grid(row=1,column=0,sticky='w')

sel_all=tk.Button(w,text='全选',command=all_sel,padx=30)
sel_all.grid(row=1,column=1,sticky='w')

Label=tk.Label(w)
Label.grid(row=3)

w.mainloop()
```

![png](/pages/python/basic/library/images/3c066e19-d0b2-4158-b104-95530e4fdb23.png)

```python
import tkinter as tk
from tkinter import tk
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import numpy as np

# 创建Tkinter窗口
root = tk.Tk()
root.title("Matplotlib多选框示例")

# 创建Matplotlib图形
fig, ax = plt.subplots()
canvas = FigureCanvasTkAgg(fig, master=root)
canvas.get_tk_widget().pack()

# 创建一个字典，用于存储复选框的状态和对应的数据系列
checkbox_states = {}
data_series = {}

# 创建一个函数，该函数在复选框状态变化时被调用
def update_plot():
    ax.clear()  # 清空当前图形
    for checkbox, state in checkbox_states.items():
        if state.get():  # 如果复选框被选中
            # 获取对应的数据系列并绘制在Matplotlib图形上
            data = data_series[checkbox]
            ax.plot(data[0], data[1], label=f'Checkbox {checkbox}')

    ax.legend()  # 添加图例
    canvas.draw()  # 更新Matplotlib图形

# 添加复选框到Tkinter窗口，并创建数据系列
for i in range(1, 6):
    checkbox_states[i] = tk.BooleanVar()
    checkbox = ttk.Checkbutton(root, text=f"Checkbox {i}", variable=checkbox_states[i], command=update_plot)
    checkbox.pack()

    # 生成示例数据系列（这里用正弦曲线作为示例）
    x = np.linspace(0, 2 * np.pi, 100)
    y = np.sin(i * x)
    data_series[i] = (x, y)

# 初始化图形
update_plot()

# 创建"全选"按钮，当点击时选中所有复选框
def select_all():
    for state in checkbox_states.values():
        state.set(True)
    update_plot()

select_all_button = tk.Button(root, text="全选", command=select_all)
select_all_button.pack()

# 创建"取消全选"按钮，当点击时取消选中所有复选框
def deselect_all():
    for state in checkbox_states.values():
        state.set(False)
    update_plot()

deselect_all_button = tk.Button(root, text="取消全选", command=deselect_all)
deselect_all_button.pack()

# 启动Tkinter主循环
root.mainloop()

```

![png](/pages/python/basic/library/images/5e57bcba-6c50-43b8-9ec7-19f3e152eb39.png)

### 2.9. 顶部菜单

<br>
<b>m=tk.Menu(w)</b>，创建一级菜单
<br>&emsp;&emsp;<b>bg、bd、fg、font、tearoff</b>这个菜单是否可以分离
<br>&emsp;&emsp;<b>activebackground</b>激活背景色（鼠标划过去后的）
<br>&emsp;&emsp;<b>activeborderwidth</b>激活边框宽度、
<br>&emsp;&emsp;<b>activeforeground</b>活动前景色、<b>tearof</b>默认True菜单可以分离出去
<br><b>m.add_command(label='m的子菜单',command=f)...</b>，创建m的子菜单，绑定命令
<br>&emsp;&emsp;添加属性<b>accelerator='w'</b>设置菜单项的快捷键，会显示在菜单项目的右边，必须通过按键绑定实现
<br><br>
<b>u=tk.Menu(m)</b>
<br><b>m.add_cascade(label='文件',menu=u)</b>，可以指定font，创建菜单m的下一级菜单，并命名为u，u要在前面声明，从上一级菜单来的
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;之后可以给u再添加子级或子菜单命令，无限套娃
<br><b>w.config(menu=m)</b>，显示菜单，w里面最终显示的菜单
<br>&emsp;&emsp;这里用menu=u的话只会显示子菜单u的内容，而不是总菜单m
<br><br><br>
<b>m.add_separator()</b>，添加一条分隔线

```python
import tkinter as tk
from tkinter import messagebox

w=tk.Tk()
w.title('菜单')
w.geometry('600x400+200+200')
w.resizable(False,False)

def edit():
    messagebox.showinfo(message='编辑')
def vg():
    messagebox.showinfo(message='视图')
def choose():
    messagebox.showinfo(message='选项')
def help():
    messagebox.askokcancel(message='确定要寻求帮助吗？')
def cm():
    messagebox.showerror(title='错误',message='操作错误')
def create():
    messagebox.showinfo(message='新建成功')
def save():
    messagebox.showinfo(message='保存成功')
def create1(x):
    messagebox.showinfo(message='正在使用键盘快捷键')
    #x.char获取


#创建一个顶级菜单
m=tk.Menu(w)
#给“文件”菜单新建子菜单
u=tk.Menu(m,tearoff=False,activeforeground='red',activebackground='green')
#创建w的下一级菜单
m.add_cascade(label='文件',menu=u)
m.add_command(label='编辑',command=edit)
m.add_command(label='视图',command=vg)
m.add_command(label='选项',command=choose)
m.add_command(label='帮助',command=help)
m.add_command(label='联系我们',command=cm)


u.add_command(label='新建文件',command=create,accelerator='W')
u.add_command(label='新建文件夹',command=create,accelerator='O')
u.add_command(label='保存文件',command=save,accelerator='S')
#添加一条分割线
u.add_separator()
u.add_command(label='退出',accelerator='Q',command=w.destroy)

#组合键
w.bind('<Control-w>',create1)
w.bind('<Control-W>',create1)
#显示菜单
w.config(menu=m)

w.mainloop()
```

![png](/pages/python/basic/library/images/ccc96e3c-0867-4152-9dfc-5e0c99d21c96.png)

```python
w=tk.Tk()
w.geometry('800x600+200+200')

m=tk.Menu(w)

def c():
    messagebox.showinfo(message='选取成功')

earth=tk.Menu(m,tearoff=False)
m.add_cascade(label='地球',menu=earth)
m.add_command(label='月球',command=c)
m.add_command(label='太阳',command=c)
m.add_command(label='水星',command=c)
m.add_command(label='火星',command=c)
m.add_command(label='天王星',command=c)
m.add_command(label='海王星',command=c)
m.add_command(label='冥王星',command=c)
m.add_command(label='土星',command=c)
m.add_command(label='木星',command=c)
m.add_command(label='金星',command=c)

Asia=tk.Menu(earth,tearoff=False)
Europe=tk.Menu(earth,tearoff=False)
earth.add_cascade(label='亚洲',menu=Asia)
earth.add_command(label='非洲',command=c)
earth.add_cascade(label='欧洲',command=c,menu=Europe)
earth.add_command(label='北美洲',command=c)
earth.add_command(label='南极洲',command=c)
earth.add_command(label='大洋洲',command=c)
earth.add_command(label='南美洲',command=c)
earth.add_command(label='太平洋',command=c)
earth.add_command(label='大西洋',command=c)
earth.add_command(label='北冰洋',command=c)
earth.add_command(label='印度洋',command=c)

China=tk.Menu(Asia,tearoff=False)
Asia.add_cascade(label='中国',menu=China)
Asia.add_command(label='朝鲜',command=c)
Asia.add_command(label='印度',command=c)
Asia.add_command(label='韩国',command=c)
Asia.add_command(label='老挝',command=c)
Asia.add_command(label='巴基斯坦',command=c)
Asia.add_command(label='沙特阿拉伯',command=c)
Asia.add_command(label='伊朗',command=c)

Europe.add_command(label='英国',command=c)
Europe.add_command(label='法国',command=c)
Europe.add_command(label='德国',command=c)
Europe.add_command(label='意大利',command=c)
Europe.add_command(label='西班牙',command=c)
Europe.add_command(label='葡萄牙',command=c)
Europe.add_command(label='荷兰',command=c)
Europe.add_command(label='俄罗斯',command=c)

Gansu=tk.Menu(China,tearoff=False)
China.add_command(label='北京市',command=c)
China.add_command(label='上海市',command=c)
China.add_command(label='广东省',command=c)
China.add_command(label='陕西省',command=c)
China.add_command(label='湖南省',command=c)
China.add_command(label='西藏藏族自治区',command=c)
China.add_command(label='湖北省',command=c)
China.add_command(label='福建省',command=c)
China.add_cascade(label='甘肃省',menu=Gansu)
China.add_command(label='新疆维吾尔族自治区',command=c)
China.add_command(label='内蒙古自治区',command=c)
China.add_command(label='青海省',command=c)
China.add_command(label='宁夏回族自治区',command=c)
China.add_command(label='广西壮族自治区',command=c)
China.add_command(label='四川省',command=c)
China.add_command(label='重庆市',command=c)
China.add_command(label='贵州省',command=c)
China.add_command(label='江西省',command=c)
China.add_command(label='山西省',command=c)
China.add_command(label='河南省',command=c)
China.add_command(label='河北省',command=c)
China.add_command(label='安徽省',command=c)
China.add_command(label='山东省',command=c)
China.add_command(label='江苏省',command=c)
China.add_command(label='浙江省',command=c)
China.add_command(label='辽宁省',command=c)
China.add_command(label='吉林省',command=c)
China.add_command(label='天津市',command=c)
China.add_command(label='香港特别行政区',command=c)
China.add_command(label='澳门特别行政区',command=c)
China.add_command(label='海南省',command=c)
China.add_command(label='台湾省',command=c)
China.add_command(label='云南省',command=c)
China.add_command(label='黑龙江省',command=c)


Wuwei=tk.Menu(Gansu,tearoff=False)
Gansu.add_command(label='兰州市',command=c)
Gansu.add_command(label='张掖市',command=c)
Gansu.add_command(label='敦煌市',command=c)
Gansu.add_command(label='酒泉市',command=c)
Gansu.add_command(label='定西市',command=c)
Gansu.add_command(label='庆阳市',command=c)
Gansu.add_command(label='平凉市',command=c)
Gansu.add_command(label='天水市',command=c)
Gansu.add_cascade(label='武威市',menu=Wuwei)

Minqin=tk.Menu(Wuwei,tearoff=False)
Wuwei.add_cascade(label='民勤县',menu=Minqin)
Wuwei.add_command(label='凉州区',command=c)
Wuwei.add_command(label='古浪县',command=c)
Wuwei.add_command(label='天祝藏族自治区',command=c)

Suwu=tk.Menu(Minqin,tearoff=False)
Minqin.add_command(label='大滩镇',command=c)
Minqin.add_command(label='西渠镇',command=c)
Minqin.add_command(label='泉山镇',command=c)
Minqin.add_cascade(label='苏武镇',menu=Suwu)
Minqin.add_command(label='三雷镇',command=c)
Minqin.add_command(label='重兴镇',command=c)
Minqin.add_command(label='红沙岗镇',command=c)

Sanhe=tk.Menu(Suwu,tearoff=False)
Suwu.add_command(label='泉水村',command=c)
Suwu.add_command(label='上东村',command=c)
Suwu.add_command(label='下东村',command=c)
Suwu.add_cascade(label='三合村',menu=Sanhe)

Sanhe.add_command(label='一社',command=c)
Sanhe.add_command(label='二社',command=c)
Sanhe.add_command(label='三社',command=c)
Sanhe.add_command(label='四社',command=c)
Sanhe.add_command(label='五社',command=c)
Sanhe.add_command(label='六社',command=c)

w.config(menu=m)


w.mainloop()
```

![download.png](/pages/python/basic/library/images/04bd10c8-30b1-4857-a3b4-a4172d38185d.png)

### 2.10. 右键菜单

<br>
右击和召唤菜单绑到一起，菜单配置同上

```python
w=tk.Tk()
w.geometry('400x400+300+300')

def f():
    messagebox.showinfo(title='提示',message='操作成功')

mu=tk.Menu(w,tearoff=False)
share=tk.Menu(mu,tearoff=False)
mu.add_command(label='刷新',command=f)
mu.add_cascade(label='分享',menu=share)
mu.add_command(label='复制',command=f)
mu.add_command(label='粘贴',command=f)
mu.add_command(label='剪贴',command=f)
mu.add_command(label='重命名',command=f)
mu.add_command(label='删除',command=f)
mu.add_command(label='属性',command=f)
mu.add_command(label='打开文件所在位置',command=f)

QQ=tk.Menu(share,tearoff=False)
share.add_cascade(label='QQ',menu=QQ)
share.add_command(label='微信',command=f)
share.add_command(label='微博',command=f)
share.add_separator()
share.add_command(label='X',command=f)
share.add_command(label='Telegram',command=f)
share.add_command(label='TikTok',command=f)
share.add_command(label='Facebook',command=f)
share.add_command(label='YouTuBe',command=f)

QQ.add_command(label='分身1',command=f)
QQ.add_command(label='分身2',command=f)


def cod(event):
    # isplay a menu at position X,Y.
    #使用post()在指定位置显示弹出菜单
    mu.post(event.x_root,event.y_root)

w.bind('<Button-3>',cod)

w.mainloop()
```

![png](/pages/python/basic/library/images/ec3608f6-241c-45a0-b5e7-5ea6bc474f89.png)

### 2.11. 按钮菜单

<br>
<b>mb=tk.Menubutton(w,text='点我出现菜单',relief='solid')</b>，创建菜单按钮，再显示
<br><b>fm=tk.Menu(mb,tearoff=False)</b>，把菜单fm加到这个菜单按钮中，再向这个菜单中添加东西
<br><b>mb.config(menu=fm)</b>，显示菜单

```python
w=tk.Tk()
w.geometry('400x400+300+300')
def f():
    messagebox.showinfo(title='提示',message='操作成功')

#创建一个菜单按钮
mb=tk.Menubutton(w,text='点我出现菜单',relief='solid')
#设置位置
mb.grid(padx=35,pady=35)
#添加菜单
#fm这个菜单是mb这个按钮的菜单，如果是w的菜单就变成了顶部菜单
fm=tk.Menu(mb,tearoff=False)
share=tk.Menu(fm,tearoff=False)
fm.add_command(label='刷新',command=f)
fm.add_cascade(label='分享',menu=share)
fm.add_command(label='复制',command=f)
fm.add_command(label='粘贴',command=f)
fm.add_command(label='剪贴',command=f)
fm.add_command(label='重命名',command=f)
fm.add_command(label='删除',command=f)
fm.add_command(label='属性',command=f)
fm.add_command(label='打开文件所在位置',command=f)

QQ=tk.Menu(share,tearoff=False)
share.add_cascade(label='QQ',menu=QQ)
share.add_command(label='微信',command=f)
share.add_command(label='微博',command=f)
share.add_separator()
share.add_command(label='X',command=f)
share.add_command(label='Telegram',command=f)
share.add_command(label='TikTok',command=f)
share.add_command(label='Facebook',command=f)
share.add_command(label='YouTuBe',command=f)

QQ.add_command(label='分身1',command=f)
QQ.add_command(label='分身2',command=f)

#显示菜单，将菜单命令绑定在菜单按钮对象上
mb.config(menu=fm)

w.mainloop()
```

![png](/pages/python/basic/library/images/1756d734-a7fc-4321-a4ee-509c9220d4db.png)

### 2.12. 画布 Canvas

<br>
<b>cv=tk.Canvas(w,bg='white')</b>，创建画布，master=w，bg背景颜色
<br>&emsp;&emsp;其他参数有：
<br>&emsp;&emsp;&emsp;&emsp;<b>bd、height、width、relief...</b>
<br>用几何管理工具显示

<br><br><b>cv.create_rectangle(10,10,100,100)</b>，矩形，左上角右下角的坐标，相对于画布左上角的点
<br><b>cv.create_line(10,10,100,300)</b>，线，左上角右下角的坐标，相对于画布左上角的点
<br><b>cv.create_oval(10,10,100,100)</b>，圆，外接正方形左上角右下角的坐标，相对于画布左上角的点
<br><b>cv.create_bitmap(x,y,bitmap='......')</b>，画位图，具体见下面的代码
<br><b>cv.create_arc(50,50,100,100)</b>，扇形
<br><b>cv.create_polygon([x1,y1,x2,y2,x3,y3......])</b>，多边形，坐标列表
<br><b>cv.create_text(100,50,text='添加的文字')</b>，文字
<br><b>cv.create_image(100,100,image=image)</b>，图片，左上角坐标。图片得是 tk.PhotoImage 的

```python
w=tk.Tk()
w.title('画布')
w.geometry('400x300')

#创建画布，白色背景
cv=tk.Canvas(w,bg='white')
cv.pack()

#画矩形，x1,y1,x2,y2，对角线的点，相对于画布左上角的坐标
cv.create_rectangle(10,10,100,100)
#画线，x1,y1,x2,y2，也就是矩形的对角线
cv.create_line(10,10,100,300)
#画圆，x1,y1,x2,y2，圆外接正方形的点
cv.create_oval(10,10,100,100)

w.mainloop()
```

![png](/pages/python/basic/library/images/3066121e-d021-4805-8816-5ca25d65b85b.png)

```python
w=tk.Tk()
w.geometry('300x300+200+200')

cv=tk.Canvas(w)
#画位图bitmap
cv.create_bitmap(20,20,bitmap='question')
cv.create_bitmap(20,60,bitmap='error')
cv.create_bitmap(20,100,bitmap='gray75')
cv.create_bitmap(20,140,bitmap='gray50')
cv.create_bitmap(20,180,bitmap='gray25')
cv.create_bitmap(20,220,bitmap='gray12')
cv.create_bitmap(20,260,bitmap='hourglass')
cv.create_bitmap(60,20,bitmap='info')
cv.create_bitmap(60,60,bitmap='questhead')
cv.create_bitmap(60,100,bitmap='warning')

cv.pack()

w.mainloop()
```

![png](/pages/python/basic/library/images/1237372e-bb8b-492c-8174-f6a3286eb026.png)

```python
from PIL import Image, ImageTk


w=tk.Tk()
w.geometry('400x300')

cv=tk.Canvas(w,bg='gray')
#扇形
cv.create_arc(50,50,100,100)
#三角形，多边形
option=[150,20,200,200,300,30]
cv.create_polygon(option)
#文字
cv.create_text(100,50,text='添加的文字')
#图片
original_image=Image.open('D:/桌面/python/图形界面/data/图片/月夜.png')
resized_image=original_image.resize((100, 30),Image.LANCZOS)
image=ImageTk.PhotoImage(resized_image)
cv.create_image(100,100,image=image)

cv.pack()

w.mainloop()
```

![png](/pages/python/basic/library/images/640d62f9-fc98-44e8-bffb-81b05b0f4a32.png)

### 2.13. tkinter 与 matplotlib

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
plt.rcParams["font.family"]=["SimHei"] #显示中文

df=pd.read_excel('D:/桌面/python/图形界面/data/2023sysu.xlsx')
y=df.院系名称.value_counts()
x=y.index

def draw():
    if v.get()==1:
        ax.clear()
        ax.bar(x,y,color='blue')
        ax.set_title('各学院录取人数柱状图',fontsize=10)
        ax.set_xlabel('院系名称',fontsize=8)
        ax.set_ylabel('录取人数',fontsize=8)
        ax.tick_params(axis='x',rotation=90,labelsize=7)
        for a,b in zip(x,y):
            ax.text(a,b+6,b,ha='center',va='center',fontsize=8)
    elif v.get()==2:
        ax.clear()
        ax.barh(x,y,color='green')
        ax.set_title('各学院录取人数柱状图',fontsize=10)
        ax.set_ylabel('院系名称',fontsize=8)
        ax.set_xlabel('录取人数',fontsize=8)
        ax.tick_params(axis='y',labelsize=6)
        for a,b in zip(y,x):
            ax.text(a+8,b,a,ha='center',va='center',fontsize=6)

    canvas=FigureCanvasTkAgg(fig, master=frame2)
    canvas.get_tk_widget().grid(row=0,column=0,sticky='w')

w=tk.Tk()
w.state('zoomed')

frame1=tk.Frame(w)
frame1.grid(row=0,column=0)

fig,ax=plt.subplots(figsize=(16,8))
# fig=plt.figure(figsize=(6,6))
# ax=plt.gca()

v=tk.IntVar()
barh=tk.Radiobutton(frame1,text='垂直柱状图',variable=v,value=1,command=draw)
barv=tk.Radiobutton(frame1,text='水平柱状图',variable=v,value=2,command=draw)
barh.grid(row=0,padx=10,pady=20,sticky='nsew')
barv.grid(row=1,padx=10,pady=20,sticky='nsew')

frame2=tk.Frame(w)
frame2.grid(row=0,column=1)

w.mainloop()
```

![png](/pages/python/basic/library/images/output_69_0.png)

![png](/pages/python/basic/library/images/output_69_1.png)

### 2.14. 创建新窗口

<br>窗口按钮绑定创建函数

```python
w=tk.Tk()

#无限套娃
def create_w():
    w=tk.Tk()
    tk.Button(w,text='创建新窗口',command=create_w).grid(row=0,column=0)
    tk.Button(w,text='关闭当前窗口',command=w.destroy).grid(row=0,column=1)
    w.mainloop()

tk.Button(w,text='创建新窗口',command=create_w).grid(row=0,column=0)
tk.Button(w,text='关闭当前窗口',command=w.destroy).grid(row=0,column=1)

w.mainloop()
```

#>## 15. 滚动条
```python
tk.Scale(master)
```

-   添加属性<b>from\_</b>从哪个数开始，<b>to</b>到哪个数结束，默认 0 到 100
-   <b>orient</b>水平、竖直(horizontal、vertical)；
-   <b>resolution</b>，每次改变的数值
-   <b>length</b>长度，<b>width</b>(高度)，<b>command</b>命令，<b>tickinterval</b>间隔
-   bg、bd、fg、activebackground、background、font、label

```python
import tkinter as tk

def update_label(value):#自动获取值
    label.config(text=f"Value: {value}")

# 创建主窗口
root = tk.Tk()
root.title("Number Slider")

# 创建一个数值滚动条
scale = tk.Scale(root, from_=0, to=100, orient="horizontal",fg='blue',activebackground='red',
                 length=300,command=update_label,tickinterval=30,width=20,label='滑条',resolution=3)
scale.pack()

# 创建一个标签来显示滚动条的值
label = tk.Label(root, text="Value: 0")
label.pack()

# 启动主循环
root.mainloop()

```

![png](/pages/python/basic/library/images/a716e9ff-70a2-4e26-a497-3196a11c75df.png)

### 2.16. 输入选择控件

```python
s=tk.Spinbox(w)
```

<br/><b>values 表示要显示的文本等，如果是整数用 from\_和 to</b>
<br/><b>increment=3</b>，单击箭头时增/减的间隔
<br/>加<b>textvariable=var</b>，再<b>var.get()</b>获取里面的文本字符串
<br/><b>s.get()</b>获取数字

![png](/pages/python/basic/library/images/7d5b4a4b-ac6b-403b-856d-b2d4439dfd6c.png)

```python
from tkinter import messagebox
import tkinter as tk
w=tk.Tk()

mon=5 #默认单价

var_typ=tk.StringVar()
var_typ.set('绿水晶')
var_pay=tk.StringVar()
var_pay.set('点券')

def show():
    if var_typ.get()=='绿水晶':
        单价=50
    elif var_typ.get()=='红宝石':
        单价=100
    else: 单价=150
    if var_pay.get()=='点券':
        pay=eval(s2.get())*单价/10
    elif var_pay.get()=='钻石':
        pay=eval(s2.get())*单价/5
    else:
        pay=eval(s2.get())*单价

    str=f'已选购"{var_typ.get()}"{s2.get()}件，共需{int(pay)}{var_pay.get()}'
    label.config(text=str)

tk.Label(w,text='购买道具：').grid(row=0,column=0,pady=10)
s1=tk.Spinbox(w,values=('绿水晶','红宝石','生命水'),textvariable=var_typ,command=show);s1.grid(row=0,column=1,pady=10)
tk.Label(w,text='购买数量：').grid(row=1,column=0,pady=10)
s2=tk.Spinbox(w,from_=1,to=10,command=show);s2.grid(row=1,column=1,pady=10)
tk.Label(w,text='支付方式：').grid(row=2,column=0,pady=10)
s3=tk.Spinbox(w,values=('点券','金币','钻石'),textvariable=var_pay,command=show);s3.grid(row=2,column=1,pady=10)
def buy():
    messagebox.showinfo(message='购买成功！')
    var_typ.set('')
    var_pay.set('')
def intro():
    messagebox.showinfo(message='单价：绿水晶5，红宝石10，生命水15\n1点券=2钻石=10金币')
label=tk.Label(w,text=f'总价：',anchor='w');label.grid(row=3,column=0,columnspan=2)
btn1=tk.Button(w,text='说明',command=intro);btn1.grid(row=4,column=0,padx=20)
btn2=tk.Button(w,text='购买',command=buy);btn2.grid(row=4,column=1,padx=10)
w.mainloop()
```

![png](/pages/python/basic/library/images/36e062b9-820f-4dbe-8f08-883c99d3707b.png)

```python

```

### 2.17. 顶层窗口控件

<b>tk.Toplevel()</b>
<br/>弹出一个新窗口，显示在父窗口上层；父窗口被关闭时它也被关闭，但它关闭不影响父窗口
<br/>如果直接创建 tk.Tk()则不会影响父窗口

```python
w=tk.Tk()
def create():
    top=tk.Toplevel()
    tk.Label(top,text='我是w的子窗口，关他我也关，关我它没事').pack()

tk.Button(w,text='创建顶层窗口',command=create).pack()
w.mainloop()
```

![png](/pages/python/basic/library/images/df83df0e-c4cd-4bd2-9284-a22408d94a61.png)

## 3. 几何管理器

<br/>
每个窗口及`Frame`应用程序中的窗口只能使用一个几何管理器

### 3.1. pack()

pack()使用**打包算法**指定顺序将小部件放置在窗口中
<br/>步骤：
<br/>&emsp;&emsp;（1）计算一个矩形区域称为地块
<br/>&emsp;&emsp;（2）除非指定其他位置，不然将小部件**居中显示**
<br/>**多个块，默认按照分配顺序从上到下放置**
<br/><br/>
<b>padx、pady</b>：设置控件距离父级窗口的水平、垂直距离
<br/>
<b>ipadx、ipady</b>：设置控件内的文字距离控件边界的水平、垂直距离，和比如说 Label 的 padx、pady 效果一样
<br/>
<b>anchor</b>：父窗口足够大时，控件在父窗口中的位置，'s'南...
<br/>
<b>fill='x'、fill='y'、fill='both'</b>，设置朝哪个方向填充
<br/>
<b>side='top'、side='bottom'、side='left'、side='right'</b>，几个窗口的排列顺序，默认是'top'，即从上到下
<br/>
指定 fill='both'，再<b>expand=True</b>，拉开的同时水平竖直都可以扩展

```python
w=tk.Tk()
w.geometry('200x200+100+100')
tk.Button(w,text='aaaaa').pack(padx=20,pady=20,anchor='sw')
tk.Button(w,text='bbbbb').pack(padx=20,pady=20,anchor='s',side='right')

w.mainloop()
```

![png](/pages/python/basic/library/images/a29fd445-1bce-4955-a611-ab3ac07b1b22.png)

```python
import tkinter as tk
window = tk.Tk()
window.geometry('200x200+100+100')
frame1 = tk.Frame(master=window, width=100, height=100, bg="red")
frame1.pack()
frame2 = tk.Frame(master=window, width=50, height=50, bg="yellow")
frame2.pack()
frame3 = tk.Frame(master=window, width=25, height=25, bg="blue")
frame3.pack()
window.mainloop()
```

效果：<br/><br/>
![png](/pages/python/basic/library/images/d92aa837-e457-4dea-bde1-11932bb4cf79.png)

```python
import tkinter as tk
window = tk.Tk()
window.resizable(True,False)
frame1 = tk.Frame(master=window, height=100, bg="red")
frame1.pack(fill='x')
frame2 = tk.Frame(master=window, height=50, bg="yellow")
frame2.pack(fill='x')
frame3 = tk.Frame(master=window, height=25, bg="blue")
frame3.pack(fill='x')
window.mainloop()

#不需要设置width，因为水平填充会覆盖任何宽度
```

效果：<br/><br/>
![png](/pages/python/basic/library/images/0d1b2422-f54d-4f1a-a16e-df7fff3e5dfc.png)

```python
import tkinter as tk
window = tk.Tk()
frame1 = tk.Frame(master=window, width=200, height=100, bg="red")
frame1.pack(fill='y', side='left')
frame2 = tk.Frame(master=window, width=100, bg="yellow")
frame2.pack(fill='y', side='left')
frame3 = tk.Frame(master=window, width=50, bg="blue")
frame3.pack(fill='y', side='left')
window.mainloop()
```

效果：<br/><br/>
![png](/pages/python/basic/library/images/38efb3c1-c72a-4d8a-baef-65f609469420.png)

```python
import tkinter as tk
window = tk.Tk()
frame1 = tk.Frame(master=window, width=200, height=100, bg="red")
frame1.pack(fill='both', side=tk.LEFT, expand=True)
frame2 = tk.Frame(master=window, width=100, bg="yellow")
frame2.pack(fill='both', side=tk.LEFT, expand=True)
frame3 = tk.Frame(master=window, width=50, bg="blue")
frame3.pack(fill='both', side=tk.LEFT, expand=True)
window.mainloop()

#水平垂直拉都有颜色扩展
```

### 3.2 place()

<br/>控制**确切位置**，必须提供左上角坐标`x`和`y`，单位是像素，还可以提供<b>width</b>和<b>height</b>
<br/>&emsp;&emsp;<b>relx</b>控件距父容器左侧相对距离 0\~1、<b>rely</b>顶部相对距离、<b>relwidth</b>控件相对父容器宽度 0~1、<b>relheight</b>相对高度
<br/>不经常使用：
<br/>&emsp;&emsp;**难以管控布局**；
<br/>&emsp;&emsp;**不随窗口大小改变而改变**

```python
import tkinter as tk
w=tk.Tk()
w.geometry('300x300+200+200')
w.title('place()')

t=tk.Label(text='x=0, y=0',bg='blue').place(x=0,y=0)
t=tk.Label(text='x=100, y=200',bg='orange').place(x=100,y=200)

w.mainloop()
```

效果：<br/><br/>
![png](/pages/python/basic/library/images/9f0d6e74-4206-4e69-a9e4-2f5a0c94eb13.png)

### 3.3 grid()

<br/>最常用
<br/>`grid()`指定参数行索引 row 和列索引 column 来指定小部件的位置，都从 0 开始
<br/><b>padx、pady</b>，控件到父窗口，外部水平和垂直方向的填充，单位是`像素`，和 pack()中的一样
<br/>Label 也有 padx 和 pady，注意区分
<br/>上面这样，扩展窗口时各 Label 的大小不变，都在左上角

<br/>要想各 Label 随着窗口扩展而变化
<br/>用<b>.columnconfigure()</b>和<b>.rowconfigure()</b>在 window 对象上调整在改变窗口窗口大小时行和列的增长方式
<br/>参数：
<br/>&emsp;&emsp;要配置的网格行或列的索引；
<br/>&emsp;&emsp;**weight**，用于确定行或列相对于其他行或列如何响应窗口大小调整，默认 0 表示不随变化，1 表示同速率变化
<br/>&emsp;&emsp;**minsize**，用于设置行高或列宽的最小尺寸（单位是像素）

<br/><b>sticky='n'</b>，控件填充所分配空间空白区域的方式，参数有：<b>'n'、'N'、'e'、'E'、's'、'S'、'w'、'W'、'ne'、'sw'</b>等等，组合和顺序无关，类似于 anchor
<br/>放置小部件时，可以用<b>sticky='ew'、sticky='ns'、sticky='nsew'</b>分别填充左右、上下、上下左右
<br/>&emsp;&emsp;类似于 pack()中的 fill='x'、fill='y'、fill=both'

<br/>同一个父窗口中 grid()和 pack()不能同时用，不然会报错

<br/>跨行、跨列，grid()里面加**rowspan=2、columnspan=3**，跨两行、跨三列

```python
w=tk.Tk()
w.title('grid()')

for i in range(5):
    for j in range(5):
        tk.Label(text=f'Row {i}\n Column {j}',
                 fg='green',relief='raised',
                 bd=2).grid(row=i,column=j)

w.mainloop()
```

![png](/pages/python/basic/library/images/afffa231-d627-4e37-ae5b-0a3d9927aa4e.png)

```python
w=tk.Tk()
w.title('grid()')

for i in range(5):
    for j in range(5):
        tk.Label(text=f'Row {i}\n Column {j}',
                 fg='green',relief='raised',
                 bd=2).grid(row=i,column=j,padx=5,pady=5)

w.mainloop()
```

![png](/pages/python/basic/library/images/352f9984-d09f-4be0-9118-c2c197d62b08.png)
![png](/pages/python/basic/library/images/90b2f0ec-4256-4f9f-b396-0ec67b1e5d7c.png)

```python
w=tk.Tk()
w.title('grid()')

for i in range(5):
    #0是不动，1是跟着等比例变化，>1是加比例变化
    w.columnconfigure(i,weight=1,minsize=80)
    w.rowconfigure(i,weight=1,minsize=80)
    for j in range(5):
        tk.Label(text=f'Row {i}\n Column {j}',
                 fg='green',relief='raised',
                 bd=2).grid(row=i,column=j,padx=5,pady=5)

w.mainloop()
```

![png](/pages/python/basic/library/images/26a68486-5b42-4f0e-b8c2-52cda6f8d985.png)

```python
w=tk.Tk()
w.title('grid()')

for i in range(5):
    if i<=2:
        w.columnconfigure(i,weight=1,minsize=80)
        w.rowconfigure(i,weight=1,minsize=80)
    else:
        w.columnconfigure(i,weight=10,minsize=100)
        w.rowconfigure(i,weight=10,minsize=100)

    for j in range(5):
        tk.Label(text=f'Row {i}\n Column {j}',
                 fg='green',relief='raised',
                 bd=2).grid(row=i,column=j,padx=5,pady=5)

w.mainloop()
```

![png](/pages/python/basic/library/images/d90d1afc-a571-4af2-999e-9f5271c2974f.png)

```python
import tkinter as tk
w=tk.Tk()

w.columnconfigure(0, minsize=250)
w.rowconfigure([0, 1, 2], minsize=100)
l1=tk.Label(text='A')
l1.grid(row=0,column=0,sticky='ne')
l2=tk.Label(text='B')
l2.grid(row=1,column=0,sticky='ws')
l3=tk.Label(text='C')
l3.grid(row=2,column=0,sticky='we')

w.mainloop()
```

![png](/pages/python/basic/library/images/f3754b53-c9b6-4a9c-90df-7b2443bb20dc.png)

```python
import tkinter as tk
window = tk.Tk()
window.rowconfigure(0, minsize=50)
window.columnconfigure([0, 1, 2, 3], minsize=50)
label1 = tk.Label(text="1", bg="black", fg="white")
label2 = tk.Label(text="2", bg="black", fg="white")
label3 = tk.Label(text="3", bg="black", fg="white")
label4 = tk.Label(text="4", bg="black", fg="white")
label1.grid(row=0, column=0)
label2.grid(row=0, column=1, sticky="ew")
label3.grid(row=0, column=2, sticky="ns")
label4.grid(row=0, column=3, sticky="nsew")
window.mainloop()
```

![png](/pages/python/basic/library/images/59814a7e-9567-466d-b107-e9cbb0ff3e45.png)

```python
#跨行、跨列
#这里面的弹窗也可以用pyautogui实现
w=tk.Tk()
w.resizable(False,False)
w.title('登录')


tk.Label(text='用户名：').grid(row=0,column=0)
un=tk.Entry()
un.grid(row=0,column=1)

tk.Label(text='密码：').grid(row=1,column=0)
pwd=tk.Entry()
pwd.grid(row=1,column=1)
img=tk.PhotoImage(file='data/白天泳池.png')
tk.Label(image=img,width=800,height=600).grid(row=0,column=2,rowspan=10,columnspan=2)

def f():
    username=un.get()
    password=pwd.get()
    if username and password:
        w_t=tk.Tk()
        w_t.geometry('200x80+900+400')
        tk.Label(w_t,text='登录成功！').pack()
        tk.Button(w_t,text='确认',command=w_t.destroy).pack(side='bottom')
        un.delete(0,tk.END)
        pwd.delete(0,tk.END)
        w_t.mainloop()
    else:
        w_t=tk.Tk()
        w_t.geometry('300x100+900+400')
        tk.Label(w_t,text='登录失败，请检查信息是否填写正确或完全！').pack()
        tk.Button(w_t,text='确认',command=w_t.destroy).pack(side='bottom')
        w_t.mainloop()

def quit_w():
    # s=pg.confirm(text='确定要退出吗？',buttons=['是','否'])
    w_t=tk.Tk()
    w_t.geometry('300x100+900+400')
    tk.Label(w_t,text='确定要退出吗？').pack()
    def df():
        w_t.destroy()
        w.destroy()
    tk.Button(w_t,text='是',command=df,width=10).pack(side='left')
    tk.Button(w_t,text='否',command=w_t.destroy,width=10).pack(side='right')

def forget_pwd():
    w_t=tk.Tk()
    w_t.geometry('200x80+900+400')
    tk.Label(w_t,text='真巧，我也忘了。').pack()
    tk.Button(w_t,text='返回',command=w_t.destroy).pack(side='bottom')

def about_me():
    w_t=tk.Tk()
    w_t.geometry('200x80+900+400')
    tk.Label(w_t,text='关于我们').pack()
    tk.Button(w_t,text='返回',command=w_t.destroy).pack(side='bottom')

tk.Button(text='登录',command=f).grid(row=2,column=0,columnspan=2)
tk.Button(text='忘记密码？',command=forget_pwd,fg='blue').grid(row=3,column=0,columnspan=2)
tk.Button(text='关于我们',command=about_me).grid(row=4,column=0,columnspan=2)
tk.Button(text='退出',command=quit_w).grid(row=10,column=0,columnspan=5)

w.mainloop()
```

## 4. 交互

<br/>给一个动作添加多个函数事件，在后面的 bind 中添加参数<b>add='+'</b>
<br/>取消事件绑定：<b>w.unbind('\<Button-1>')</b>

### 4.1 鼠标点击

```python
def f(event):
    print(event.char)

w.bind('<Button-1>',f) #鼠标左击
w.bind('<Button-2>',f) #鼠标中击
w.bind('<Button-3>',f) #鼠标右击
w.bind('<Button-4>',f) #鼠标滚轮上滚
w.bind('<Button-5>',f) #鼠标滚轮下滚

label.bind('<B1-Motion>',f) #按下鼠标左键并拖动
label.bind('<B2-Motion>',f) #按下鼠标中键并拖动
label.bind('<B3-Motion>',f) #按下鼠标右键并拖动

w.bind('<ButtonRelease-1>',f) #释放左键
w.bind('<ButtonRelease-2>',f) #释放中键
w.bind('<ButtonRelease-3>',f) #释放右键

label.bind('<Double-Button-1>',f) #对label控件左键双击
label.bind('<Double-Button-2>',f)#对label控件中键双击
label.bind('<Double-Button-3>',f)#对label控件右键双击

btn.bind('<Enter>',f) #鼠标进入控件
btn.bind('<Leave>',f) #鼠标移出控件
```

### 4.2 键盘输入/快捷键

```python
w.bind('<Key>',f1) #按下某键，键值会作为event对象参数被传递
w.bind('<Return>',f) #按下回车
w.bind('<space>',f) #按下空格
w.bind('<Shift-Up>',f) #Shift+Up
w.bind('<Shift-Down>',f) #Shift+Down
w.bind('<Control-Up>',f) #Control+Up
w.bind('<Control-n>',f2)#ctrl+n

```

### 4.3 等待后执行

```python
# 对窗口w，300毫秒后调用后面的函数
w.after(300,lambda:self.tmp1.destroy())
```

### 4.4 清空，隐藏控件

```python
# 清空指定一个控件
label.destroy()

# 清空某窗口内所有控件
for widget in w.winfo_children():
    # 保留Label控件
    if not isinstance(widget,tk.Label):
        widget.destroy()

for widget in frame1.winfo_children():
        widget.destroy()

     # 隐藏
# forget之后，还可以正常使用该空间，只是从视图上被隐藏而已。控件和框架都可以进行该操作。
frame.pack_forget() #用于pack布局
frame.grid_forget() #用于grid


```

```python
w=tk.Tk()

w.geometry('300x300+200+200')

def f_in(t):
    tkn.config(text='防御状态，点了没用')
def f_out(t):
    tkn.config(text='开放状态，快来点')
tkn=tk.Button(w,text='点得到我吗？')

tkn.pack()
tkn.bind('<Enter>',f_in)
tkn.bind('<Leave>',f_out)

w.mainloop()
```

![png](/pages/python/basic/library/images/dffb8bae-dfea-4e9e-b836-14b36d28fc84.png)

```python

```

```python
w=tk.Tk()
w.geometry('200x200+100+100')

label_list=[]
t=tk.Label(w,text='')
t.pack()
label_list.append(t)

def refresh_t(event):
    label_list[-1].destroy()
    t=tk.Label(w,text='检测到输入了：'+event.char)
    label_list.append(t)
    t.pack()

w.bind('<Key>',refresh_t)
w.mainloop()
#别用快捷键截，不然检测到的是那些键，没输出
```

![png](/pages/python/basic/library/images/d877615c-1638-4280-8d4a-367fd913aa5b.png)

```python
#加减
w=tk.Tk()
def decrease():
    # value=num['text']
    num['text']=str(eval(num['text'])-1)
def increase():
    # value=num['text']
    num['text']=str(eval(num['text'])+1)

minus=tk.Button(w,text='-',width=6,height=3,command=decrease).grid(row=0,column=0,sticky='nsew')
num=tk.Label(w,text='0',width=6,height=3)
num.grid(row=0,column=1,sticky='nsew')
plus=tk.Button(w,text='+',width=6,height=3,command=increase).grid(row=0,column=2,sticky='nsew')

w.mainloop()
```

![png](/pages/python/basic/library/images/04524210-5e5f-4778-9e81-fae316a1f047.png)

```python
import numpy as np
import tkinter as tk

w=tk.Tk()
w.geometry('800x800+100+100')
w.resizable(False,False)
but_list=[]
num=0
counter_list=[]

def gen_random():
    background_color=['red','green','purple','orange','yellow','blue','white','gray','black','pink','skyblue','brown']
    font_color=['red','green','purple','orange','yellow','blue','gray','black','pink','skyblue','brown']
    x,y=np.random.randint(50,750),np.random.randint(50,750)
    bg,fc=np.random.randint(0,len(background_color)),np.random.randint(0,len(font_color))
    bg=background_color[bg]
    fg=font_color[fc]
    return x,y,bg,fg

def clear_but():
    global but_list
    but_list[-1].destroy()

def refresh_num():
    global num
    num+=1
    counter_list[-1].destroy()

def gen_random_xy():
    x,y,bg_,fg_=gen_random()

    clear_but()
    but=tk.Button(w,text='点我',command=gen_random_xy,bg=bg_,fg=fg_,bd=5)
    global but_list
    but_list.append(but)
    but.place(x=x,y=y)

    refresh_num()
    counter=tk.Label(w,text=f'分数：{num}',bg='skyblue')
    global counter_list
    counter_list.append(counter)
    counter.pack(side='top')

but=tk.Button(text='点我',command=gen_random_xy,bd=5)
but_list.append(but)
but.pack(side='bottom')

c=tk.Label(w,text=f'分数：{num}',bg='skyblue')
c.pack(side='top')
counter_list.append(c)

w.mainloop()
```

```python
#这两个都行
import numpy as np
import tkinter as tk

w=tk.Tk()
w.geometry('800x800+100+100')
w.resizable(False,False)
but_list=[]
num=0

def gen_random():
    background_color=['red','green','purple','orange','yellow','blue','white','gray','black','pink','skyblue','brown']
    font_color=['red','green','purple','orange','yellow','blue','gray','black','pink','skyblue','brown']
    x,y=np.random.randint(50,750),np.random.randint(50,750)
    bg,fc=np.random.randint(0,len(background_color)),np.random.randint(0,len(font_color))
    bg=background_color[bg]
    fg=font_color[fc]
    return x,y,bg,fg

def clear_but():
    global but_list
    but_list[-1].destroy()

def refresh_num():
    global num
    num+=1
    count['text']='分数：'+str(num)


def gen_random_xy():
    x,y,bg_,fg_=gen_random()

    clear_but()
    but=tk.Button(w,text='点我',command=gen_random_xy,bg=bg_,fg=fg_,bd=5)
    global but_list
    but_list.append(but)
    but.place(x=x,y=y)

    refresh_num()


but=tk.Button(w,text='点我',command=gen_random_xy,bd=5)
but_list.append(but)
but.pack(side='bottom')

count=tk.Label(w,text=f'分数：{num}',bg='skyblue')
count.pack(side='top')


w.mainloop()
```

![png](/pages/python/basic/library/images/9e32b50c-d467-48ac-8e5a-822b9d78920f.png)

```python
#温度转换
w=tk.Tk()

def trans1():
    tmp_f=F.get()
    tmp_c=(5/9)*(float(tmp_f)-32)
    C['text']=str(tmp_c)+'°C'

def trans2():
    tmp_c=c.get()
    tmp_f=eval(tmp_c)*9/5+32
    f['text']=str(tmp_f)+'°F'


frame1=tk.Frame(w)
frame1.grid(row=0,column=0,padx=10)
F=tk.Entry(frame1,text='',width=10)
F.grid(row=0,column=0,sticky='e')
tk.Label(frame1,text='°F').grid(row=0,column=1,sticky='w')
tk.Button(frame1,text='→',command=trans1,padx=5,pady=5).grid(row=0,column=2,pady=10,padx=10)
C=tk.Label(frame1,text='°C')
C.grid(row=0,column=3,padx=10)


frame2=tk.Frame(w)
frame2.grid(row=1,column=0,padx=10)
c=tk.Entry(frame2,text='',width=10)
c.grid(row=0,column=0,sticky='e')
tk.Label(frame2,text='°C').grid(row=0,column=1,sticky='w')
tk.Button(frame2,text='→',command=trans2,padx=5,pady=5).grid(row=0,column=2,pady=10,padx=10)
f=tk.Label(frame2,text='°F')
f.grid(row=0,column=3,padx=10)


w.mainloop()
```

![png](/pages/python/basic/library/images/296ab6b2-c354-42d3-a201-451074b248e8.png)

```python
#文件编辑器
from tkinter.filedialog import askopenfilename, asksaveasfilename
def open_file():
    """Open a file for editing."""
    filepath = askopenfilename(
        #两种可选文件类型
        filetypes=[("Text Files", "*.txt"), ("All Files", "*.*")]
    )
    if not filepath:
        return
    txt_edit.delete(1.0, tk.END)
    with open(filepath, "r") as input_file:
        text = input_file.read()
        txt_edit.insert(tk.END, text)
    w.title(f"Simple Text Editor - {filepath}")
def save_file():
    """Save the current file as a new file."""
    filepath = asksaveasfilename(
        defaultextension="txt",
        filetypes=[("Text Files", "*.txt"), ("All Files", "*.*")],
    )
    if not filepath:
        return
    with open(filepath, "w") as output_file:
        text = txt_edit.get(1.0, tk.END)
        output_file.write(text)
    w.title(f"Simple Text Editor - {filepath}")

w=tk.Tk()
w.title('文件编辑器')
w.rowconfigure(0,minsize=800,weight=1)
w.columnconfigure(1,minsize=800,weight=1)
txt_edit=tk.Text(w)
fr_buttons=tk.Frame(w,relief='raised',bd=2)
but_open=tk.Button(fr_buttons,text='打开',command=open_file)
but_save=tk.Button(fr_buttons,text='保存',command=save_file)
but_open.grid(row=0,column=0,sticky='ew',padx=5,pady=5)
but_save.grid(row=1,column=0,sticky='ew',padx=5)#确保两个按钮大小相同

fr_buttons.grid(row=0,column=0,sticky='ns')
txt_edit.grid(row=0,column=1,sticky='nsew')

w.mainloop()
```

![png](/pages/python/basic/library/images/9df59db5-8d61-48ca-b776-f831bcdd7208.png)

```python

```

## 5. ttk

<br/><b>tk：Windows 经典主题风格，ttk：Windows 默认主题风格
<br/>tk 有的控件 ttk 都有，tk 没的 ttk 还有</b>

### 5.1 设置风格

<br/>ttk 模块中的控件兼容性不是很好，可以试试直接加属性，不行的话用 style 加
<br/>找到控件方式，控件加<b>style=''</b>
<br/>&emsp;&emsp;对某一类控件，比如说<b>TButton、TLabel...</b>
<br/>&emsp;&emsp;对某个控件，可以<b>name.TButton、label1.TLabel</b>，前面可以自己取名，后面逗号加固定标签名

```python
w=tk.Tk()
w.title('my_gui')
#创建样式
style=ttk.Style()
#找到控件并为其设置风格
style.configure('TButton',font=14,relief='flat',background='#00f5ff')
btn=ttk.Button(text='按钮',style='TButton')
btn.pack(pady=20)

ttk.Label(w,text='abc',background='red').pack()
w.mainloop()
```

![png](/pages/python/basic/library/images/ecb31fb8-2703-487e-8b48-bd195ca74161.png)

```python

```

### 5.2 下拉菜单

<br/><b>c=ttk.Combobox(w)</b>
<br/>定义<b>var=tk.StringVar()</b>，给 c 添加属性<b>textvariable=var</b>，再<b>var.get()</b>获取选择的内容
<br/>或者也可以<b>c.get()</b>

```python
from tkinter import ttk
w=tk.Tk()

frame1=tk.Frame(w)
label1=tk.Label(frame1,text='下拉菜单：')
label1.grid(row=0,column=0)
x=tk.StringVar()#创建变量，用于取值
com=tk.ttk.Combobox(frame1,textvariable=x,value=['山东','河北','河南','江苏','广东','福建','黑龙江'])#创建下拉菜单
# com.current(2)#默认值，索引为2
com.grid(row=0,column=1,padx=10,pady=10)
frame1.grid(row=0,column=0)

frame2=tk.Frame(w)
label2=tk.Label(frame2,text='选择了：')
label2.grid(row=0,column=0)
frame2.grid(row=1,column=0)

def f(event):
    #两种方法获取下拉菜单的值
    # v=com.get()
    v=x.get()
    label2.config(text=f'选择了：{v}')


w.bind('<<ComboboxSelected>>',f)

w.mainloop()
```

![png](/pages/python/basic/library/images/bbb37a45-c03c-43c9-88f9-a0b9cf222d73.png)

```python

```

### 5.3 树形菜单

集树状结构和表格为一体，设计表格或树形菜单，且设置树形菜单时可以折叠或展开子菜单<br/>
<b>ttk.Treeview(w)</b>
<br/>其他参数有：

-   <b>columns</b>：列名组成的列表
-   displaycolumns：列表是否显示及显示顺序，元组类型，指定索引顺序，可用于调换列
-   padding：标题栏内容距离组件边缘的间距
-   <b>height</b>：表格的高度（可以显示几行数据），数据多了可以滚动
-   selectmode：选择行的方式，'extended'可以 Ctrl+鼠标选多行，'browse'只能选一行，'none'不能改变选择
-   show：显示哪些列，默认'tree headings'显示所有列，'tree'显示第一列（图标列），'headings'显示其他列

<br/><br/>
<b>tree.insert(父对象 ID,插入位置,ID,text,image,values,open,tags)</b>添加树形菜单的子项目
<br/>&emsp;&emsp;ID 可为''，自动分配，用一个变量接受父菜单的创建，可以把这个变量用作创建它的子菜单时的 ID；
<br/>&emsp;&emsp;插入位置必须写
<br/>&emsp;&emsp;text 树形菜单中子项目显示的名称、image 子项目前面的图标、values 子项目一行的值
<br/>&emsp;&emsp;open 子菜单展开或关闭；tags 与 items 关联的标记

<br/><b>tree.column('key',anchor='center')</b>，这列的文本居中显示
<br/>要显示序号，可以在 columns 前面新加一列，添加每行时前面加对应序号

<br/><b>selections=tree.selection()</b>，获取选中的行，结果是选中行的 ID 组成的元组
<br/>对选中行数据中的每行，<b>.items()</b>获取这行数据，<b>/index()</b>获取这行索引

```python
# s的格式为I001、I002...
for s in selection:
    print(tree.item(s),tree.index(s))
```

```python
from tkinter import ttk
import random
import tkinter as tk

class my_gui(tk.Tk):
    def __init__(self):
        super().__init__()
        self.tree=ttk.Treeview(self,
                               columns=('Chinese','Math','English','Politics','History','Geography','Biology'),
                              height=10)
        #定义每列的标题及居中显示
        self.tree.heading('Chinese',text='语文',anchor='center')
        self.tree.column('Chinese',anchor='center')
        self.tree.heading('Math',text='数学',anchor='center')
        self.tree.column('Math',anchor='center')
        self.tree.heading('English',text='英语',anchor='center')
        self.tree.column('English',anchor='center')
        self.tree.heading('Politics',text='政治',anchor='center')
        self.tree.column('Politics',anchor='center')
        self.tree.heading('History',text='历史',anchor='center')
        self.tree.column('History',anchor='center')
        self.tree.heading('Geography',text='地理',anchor='center')
        self.tree.column('Geography',anchor='center')
        self.tree.heading('Biology',text='生物',anchor='center')
        self.tree.column('Biology',anchor='center')
        #插入10行数据
        for i in range(20):
            self.tree.insert('',tk.END,values=[random.randint(70,101) for _ in range(7)])
        self.tree.pack()
w=my_gui()
w.mainloop()
```

![png](/pages/python/basic/library/images/567bf4b5-22ab-4195-968f-cd2ca4170013.png)

添加子菜单，需要通过 ID 绑定父元素

```python
w=tk.Tk()

tree=ttk.Treeview(w)

tree.heading('#0',text='皇帝')
#手动设置ID'wei'
tree.insert('',0,'wei',text='魏')
#后面这两个省略ID，由Treeview自动分配
shu=tree.insert('',1,text='蜀')
wu=tree.insert('',2,text='吴')

tree.insert('wei',0,text='曹操')#设置父元素为wei
tree.insert(shu,0,text='刘备')#设置父元素为shu
tree.insert(wu,0,text='孙权')#设置父元素为wu
tree.pack()


w.mainloop()
```

![png](/pages/python/basic/library/images/4006bf49-73e4-46f7-a64a-169736f71c96.png)

```python
w=tk.Tk()

tree=ttk.Treeview(w)

tree.heading('#0',text='学习经历')

paramary=tree.insert('',index=0,text='小学')
junior=tree.insert('',index=1,text='初中')
senior=tree.insert('',index=2,text='高中')
university=tree.insert('',index=3,text='大学')
siciety=tree.insert('',index=4,text='社会')

p=['一','二','三','四','五','六']
for i in range(6):
    tree.insert(paramary,index=i,text=f'{p[i]}年级')
j=['七','八','九']
s=['高一','高二','高三']
for i in range(3):
    tree.insert(junior,index=i,text=f'{j[i]}年级')
    tree.insert(senior,index=i,text=s[i])

tree.insert(university,index=0,text='本科')
yjs=tree.insert(university,index=1,text='研究生')

tree.insert(yjs,index=0,text='硕士')
tree.insert(yjs,index=1,text='博士')

tree.pack()

w.mainloop()
```

![png](/pages/python/basic/library/images/0f39aacb-4b14-4a4e-8c7c-499411660100.png)

```python
import tkinter as tk
from tkinter import ttk

def get_selected_row():
    selection = tree.selection()
    if selection:
        # selected_item是一个包含选中项ID的元组，可以使用这个ID来获取数据
        for s in selection:
            print(s,' '*10,tree.item(s),' '*10,tree.index(s))

# 创建主窗口
root = tk.Tk()
root.title("获取TreeView选中行")

# 创建TreeView
tree = ttk.Treeview(root, columns=("Name", "Age"), show="headings")

# 添加表头
tree.heading("Name", text="姓名")
tree.heading("Age", text="年龄")

# 插入示例数据
tree.insert("", "end", values=("Alice", "25"))
tree.insert("", "end", values=("Bob", "30"))
tree.insert("", "end", values=("Charlie", "22"))

# 将TreeView放置在窗口中
tree.pack()

# 创建按钮来获取选中的行
get_selected_button = tk.Button(root, text="获取选中的行", command=get_selected_row)
get_selected_button.pack()

# 启动主循环
root.mainloop()

```

    I001            {'text': '', 'image': '', 'values': ['Alice', 25], 'open': 0, 'tags': ''}            0
    I002            {'text': '', 'image': '', 'values': ['Bob', 30], 'open': 0, 'tags': ''}            1
    I003            {'text': '', 'image': '', 'values': ['Charlie', 22], 'open': 0, 'tags': ''}            2

![png](/pages/python/basic/library/images/061e6581-4abd-4438-8e63-aec64c07d053.png)
