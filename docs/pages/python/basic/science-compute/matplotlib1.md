---
title: matplotlib1
titleTemplate: Python笔记
---

```python
import matplotlib.pyplot as plt
import numpy as np
```

```python
import matplotlib
#查看版本
matplotlib.__version__
```

    '3.7.0'

```python
#查看电脑上已安装的字体
from matplotlib.font_manager import FontManager

fm=FontManager()
my_fonts=set(f.name for f in fm.ttflist)
len(my_fonts)
```

    422

```python
#让绘图中可以显示中文
plt.rcParams['font.sans-serif']='SimHei'
#让图片中可以显示负号
plt.rcParams['axes.unicode_minus']=False
```

## 1. 基础

（1）基本绘图
<br>&emsp;&emsp;&emsp;<b>plt.plot(x,y)、plt.plot(x1,y1,x2,y2,xn,yn)</b>
<br>&emsp;&emsp;&emsp;如果不指定x，则会以y的索引作为x

（2）颜色、样式
<br>&emsp;&emsp;&emsp;<b>color='r'、c='r'、c='#FFA500'</b>指定颜色
<br>&emsp;&emsp;&emsp;<b>linestyle='-'、ls='-'</b>指定样式，可以连写<b>'r-'</b>
<br>&emsp;&emsp;&emsp;<b>linewidth='3'、lw='3'</b>指定线宽为3
<br>&emsp;&emsp;&emsp;<b>alpha=0.8</b>指定不透明度为0.8
<br>&emsp;&emsp;&emsp;<b>marker='.'</b>指定标记，<b>markersize=10</b>指定标记大小
<br>&emsp;&emsp;&emsp;<b>mfc='b'</b>指定标记的背景色，markerfacecolor

|字符|颜色|
|-:|-:|
|``'b'``|蓝色，blue|
|``'g'``|绿色，green|
|``'r'``|红色，red|
|``'c'``|青色，cyan|
|``'m'``|品红，magenta|
|``'y'``|黄色，yellow|
|``'k'``|黑色，black|
|``'w'``|白色，white|

|字符|类型|字符|类型|
|-:|-:|-:|-:|
|``'-'``|实线|``'--'``|虚线|
|``'-'.``|虚点线|``':'``|点线|
|``'.'``|点|``','``|像素点|
|``'o'``|圆点|``'v'``|下三角点|
|``'^'``|上三角点|``'<'``|左三角点|
|``'>'``|右三角点|``'1'``|下三叉点|
|``'2'``|上三叉点|``'3'``|左三叉点|
|``'4'``|右三叉点|``'s'``|正方点|
|``'p'``|五角点|``'*'``|星形点|
|``'h'``|六边形点1|``'H'``|六边形点2|
|``'+'``|加号点|``'x'``|乘号点|
|``'D'``|实心菱形点|``'d'``|瘦菱形点|
|``'_'``|横线点|||

（3）画布设置
<br>&emsp;&emsp;&emsp;<b>plt.figure(figsize=(10,6),dpi=200,facecolor='b')</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;设置画布大小10×6、像素密度/分辨率为200、背景颜色（可以是简写、全称、十六进制）
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;当子图之间有重叠时，可以考虑修改画布大小
<br>&emsp;&emsp;&emsp;将整个画布作为一个对象，<b>axes=plt.figure(figsize=(w,h))</b>便于后面画图、嵌套图

```python
x=np.linspace(-2*np.pi,2*np.pi,100)
y1=x
y2=np.sin(x)
y3=np.cos(x)

plt.figure(figsize=(10,6),dpi=100,facecolor='orange')
# plt.plot(x,y1,x,y2,x,y3,color='b',ls='--')
plt.plot(x,y1,color='b',ls='-')
plt.plot(x,y2,'r--')
plt.plot(x,y3,'gp')
plt.grid(axis='y')
plt.show()
```
    
![png](/pages/python/basic/science-compute/images/output_7_0.png)
    

```python
x=np.linspace(0,2*np.pi,20)
plt.plot(x,np.sin(x),c='r',ls='--',marker='*',lw=3,markersize=10,mfc='b')
plt.plot(x,np.cos(x),c='g',ls='-',marker='o',lw=3,markersize=10,mfc='orange')
plt.plot(x,np.sin(x+np.pi/4),c='b',ls='-',marker='>',lw=3,markersize=10,mfc='w')
plt.plot(x,np.sin(x+np.pi/3),c='b',ls='-',marker='>',lw=3,markersize=10,mfc='w',
         alpha=0.4)
plt.legend(['sin(x)','cos(x)','sin(x+pi/4)','sin(x+pi/3)'])
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_8_0.png)
    

（4）
<br>&emsp;&emsp;&emsp;<b>plt.grid()</b>生成网格，默认`axis='both'`横竖都有，指定`axis='x'`只有竖的、`axis='y'`只有横的，`ls`指定网格线形，`lw`线宽
<br>&emsp;&emsp;&emsp;<b>plt.show()</b>显示图，显示之后还有Plot则会在另一幅图上画
<br>&emsp;&emsp;&emsp;<b>plt.subplot(r,c,n)</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;画子图，每次指定行、列以及第几个子图，再画；如果都是个位数可以不写逗号
<br>&emsp;&emsp;&emsp;&emsp;&emsp;可以灵活点，只要不和别的图叠上，可以221、222之后来个212
<br>&emsp;&emsp;&emsp;<b>fig,axes=plt.subplots(2,2,figsize=(12,4))</b>，fig是画布对象，axes是子图对象数组（里面有四个）
<br>&emsp;&emsp;&emsp;&emsp;&emsp;<b>axes=axes.flatten()</b>，展开，可循环画每个子图
<br>&emsp;&emsp;&emsp;<b>plt.title('标题')</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;设置标题，fontsize=14指定大小，color指定颜色，loc指定位置('left'、'center'、'right')默认center
<br>&emsp;&emsp;&emsp;<b>plt.xlabel('x轴')、plt.ylabel('y轴')</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;设置x、y轴显示，fontsize=14指定大小，color指定颜色，rotation指定逆时针旋转角度(y轴默认90°）
<br>&emsp;&emsp;&emsp;<b>plt.xticks(l)、plt.yticks(l)</b>改变x、y轴刻度显示**列表或数组**l，fontsize指定大小，color指定颜色
<br>&emsp;&emsp;&emsp;<b>plt.tick_params(axis='both',labelsize=14,rotation)</b>设置刻度字体大小，默认both，可指定x、y，rotation旋转角度，labelcolor颜色
<br>&emsp;&emsp;&emsp;<b>plt.axis([xmin,xmax,ymin,ymax])</b>设置x、y轴显示范围
<br>&emsp;&emsp;&emsp;<b>plt.axis('equal')</b>设置x、y轴相同刻度的长度相等
<br>&emsp;&emsp;&emsp;<b>plt.xlim(-10,10)、plt.ylim(-2,2)</b>设置x、y轴坐标轴范围
<br>&emsp;&emsp;&emsp;<b>c=plt.colorbar()</b>，添加色条带，默认垂直，指定orientation='horizontal'水平显示，shrink表示色条带相对于图宽/高比例
<br>&emsp;&emsp;&emsp;&emsp;&emsp;<b>c.set_label('色条带文本')</b>设置色条带文本
<br>&emsp;&emsp;&emsp;&emsp;&emsp;<b>c.set_ticks([])</b>，设置色条带显示的数字为列表
<br>&emsp;&emsp;&emsp;<b>plt.text(x,y,s)</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;添加文本，参数为x、y坐标和文本内容，指定color，fontsize，
<br>&emsp;&emsp;&emsp;&emsp;&emsp;ha水平对齐方式('left'、'center'、'right')，va垂直对齐方式('top'、'center'、'bottom')
<br>&emsp;&emsp;&emsp;<b>plt.annotate(text,(x,y),xytext,arrowprops={'width':2,'headwidth':2,'facecolor':'blue','edgecolor':'g'})</b>注释标注
<br>&emsp;&emsp;&emsp;&emsp;&emsp;text标注内容，xy元组/列表（箭头指向的位置），xytext元组/列表（文本位置），
<br>&emsp;&emsp;&emsp;&emsp;&emsp;width箭头宽度，headwidth箭头头部宽度，facecolor箭头填充颜色
<br>&emsp;&emsp;&emsp;<b>fig.tight_layout(pad=0.4, w_pad=0, h_pad=0)</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;pad：绘图区域边缘与画布边缘距离；w_pad、h_pad：绘图区域之间的水平和垂直距离
<br>&emsp;&emsp;&emsp;<b>plt.savefig(path,dpi)</b>保存当前图像，dpi像素密度

```python
x=np.arange(0.1,4,0.01)
y1=x
y2=x**2
y3=np.exp(x)
y4=np.log(x)

fig=plt.figure(figsize=(10,6))
style=['r-','g--','b*','c:']
for i in range(1,5):
    plt.subplot(2,2,i)
    plt.plot(x,eval(f'y{i}'),style[i-1])
    plt.title(f'y{i}',fontsize=14,color='r')
    plt.xlabel('x',rotation=45,color='r')
    plt.xticks(np.arange(-1,7,1),fontsize=15,color='m')
    
    if i==4:
        plt.axis([-5,10,-2,3])

#自动调整布局
fig.tight_layout()
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_10_0.png)
    

```python
x=np.linspace(0,9,10)
y=np.array([60,30,20,90,40,60,50,80,70,30])
plt.plot(x,y,c='r',ls='--',marker='o')
plt.xticks(np.arange(0,10))
for a,b in zip(x,y):
    plt.text(a,b,(a,b),color='b',fontsize=10,ha='left',va='top')
plt.annotate('最高点',[3.0,90],(1.0,70),arrowprops={'width':4,'headwidth':15,
                                                 'facecolor':'b','edgecolor':'g'})
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_11_0.png)
    

```python
fig,axes=plt.subplots(2,2,figsize=(12,8))
x=np.arange(0,11,0.01)
y=np.sin(x)
n=0
s=[5,7,13,15]
for i in axes.ravel():#需要展平才能遍历
    i.plot(x,y)
    
    ax1=fig.add_subplot(4,4,s[n])
    ax1.plot(x,y)
    n+=1
    
```

    
![png](/pages/python/basic/science-compute/images/output_12_0.png)
    

（5）面向对象画图

把每个子图当成一个对象
<br>&emsp;&emsp;&emsp;<b>ax=subplot(2,2,1)</b>
<br>&emsp;&emsp;&emsp;<b>ax.plot(x,y)</b>

&emsp;&emsp;&emsp;<b>ax.set_title('标题1')</b>
<br>&emsp;&emsp;&emsp;<b>ax.set_xlabel('x')</b>
<br>&emsp;&emsp;&emsp;<b>ax.set_ylabel('y')</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;标题、x、y都可指定fontsize=14设置字体大小，r/color='r'设置颜色，roration逆时针旋转角度
<br>&emsp;&emsp;&emsp;<b>ax.text(x,y,text)</b>添加文本
<br>&emsp;&emsp;&emsp;<b>ax.annotate(text,(x,y),xytext,arrowprops={'width':2,'headwidth':2,'facecolor':'blue','edgecolor':'red'})</b>添加箭头
<br>&emsp;&emsp;&emsp;<b>ax.axis([xmin,xmax,ymin.ymax])</b>设置x、y轴最值
<br>&emsp;&emsp;&emsp;<b>ax.set_xticks()、ax.set_yticks()</b>设置x、y轴刻度，可以指定数组
<br>&emsp;&emsp;&emsp;<b>ax.set_xlim()、ax.set_ylim()</b>
<br>&emsp;&emsp;&emsp;<b>ax.tick_params(axis='both',labelcolor='r',labelsize=10,rotation)</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;设置刻度，默认xy轴都设置可指定='x'或'y'，labelcolor刻度颜色，labelsize刻度大小,rotation旋转角度

    
<br>&emsp;&emsp;&emsp;<b>line1,line2=plt.plot(x1,y1,x2,y2)</b>
<br>&emsp;&emsp;&emsp;<b>line=plt.plot(x1,y1,x2,y2)</b>，再取出line[0]、line[1]
<br>&emsp;&emsp;&emsp;<b>plt.setp(line1,'color','r','linewidth','4','ls','-')</b>修改某个图对象的属性

<br>&emsp;&emsp;&emsp;<b>ax.axis([-6,15,-1000,25000])</b>设置x、y轴刻度显示范围，xmin、xmax、ymin、ymax

<br><br>嵌套图
<br>&emsp;&emsp;&emsp;<b>fig=plt.figure(figsize=(w,h))</b>画布对象
<br><br>&emsp;&emsp;&emsp;<b>ax1=fig.add_subplot(2,2,3)</b>嵌套图法一，先在fig中划分多个子图，可指定facecolor背景颜色
<br>&emsp;&emsp;&emsp;&emsp;&emsp;<b>ax1.plot(x,y)</b>再绘制嵌套图

&emsp;&emsp;&emsp;<b>ax2=plt.axes([0.55,0.55,0.3,0.3])</b>嵌套图法二
<br>&emsp;&emsp;&emsp;&emsp;&emsp;创建嵌套图对象，分别指定左端位置百分比、底部位置百分比、宽度百分比、高度百分比
<br>&emsp;&emsp;&emsp;&emsp;&emsp;<b>ax2.plot(x,y)</b>画嵌套图

&emsp;&emsp;&emsp;<b>ax3=fig.add_axes([0.18,0.18,0.3,0.3])</b>嵌套图法三
<br>&emsp;&emsp;&emsp;&emsp;&emsp;同上
<br>&emsp;&emsp;&emsp;&emsp;&emsp;<b>ax3.plot(x,y)</b>画嵌套图

```python
#i=1，返回ax1
i=1
ax1=9
t1=eval(f'ax{i}')
t2=eval('ax'+str(eval('i')))
print(t1,'\n',t2)
```

    9 
     9
    

```python
list(map(eval,['1','2']))
```

    [1, 2]

```python
x=np.linspace(-5,5,10)
y1=x
y2=x**2
y3=np.sin(x)
y4=np.sign(x)

plt.figure(figsize=(20,10))
ax1=plt.subplot(221)
ax2=plt.subplot(222);plt.tick_params(labelsize=30)
ax3=plt.subplot(223);plt.tick_params(axis='x',labelsize=30,labelcolor='r')
ax4=plt.subplot(224);plt.tick_params(axis='y',labelsize=30)
ax1.plot(x,y1,marker='o')
ax2.plot(x,y2)
ax3.plot(x,y3)
ax4.plot(x,y4)

ax1.set_title('y=x')
ax1.set_xlabel('x',fontsize=14,rotation=-45)
ax1.set_ylabel('y',fontsize=30)
ax1.axis([-10,10,-10,10])
ax1.annotate('箭头',(0,0),(3,7),arrowprops={'width':5,'headwidth':20,
                                          'facecolor':'blue','edgecolor':'red'})

ax2.set_title('y=x^2')
ax3.set_title('y=sin(x)')
ax3.set_xticks(np.arange(-10,11,2))
ax4.set_title('y=sign(x)')

plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_16_0.png)
    

```python
x=np.linspace(-2*np.pi,2*np.pi,100)
y1=np.sin(x)
y2=np.cos(x)
fig=plt.figure(figsize=(10,6))

plt.subplot(221)
line1=plt.plot(x,y1,'r-')
plt.title('正弦函数')

plt.subplot(222)
line2=plt.plot(x,y2,'b-')
plt.title('余弦函数')

plt.subplot(212)
line3=plt.plot(x,y1,'r-')
plt.setp(line3,'color','g','linewidth','5','ls','-')
plt.title('正弦函数')
#嵌套图
axes=fig.add_subplot(5,5,21,facecolor='pink')
axes.plot(x,y2)

plt.savefig('../data/fig.jpg')
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_17_0.png)
    

```python
##### 嵌套图
fig=plt.figure(figsize=(10,8))
x=np.linspace(0,2*np.pi,100)
y=np.sin(x)

plt.plot(x,y)

ax1=fig.add_subplot(223)
ax1.plot(x,y,'r')

ax2=fig.add_axes([0.6,0.6,0.2,0.2])
ax2.plot(x,y,'g')
ax2.set_xticks(np.arange(-2,11,1))

ax3=plt.axes([0.24,0.53,0.15,0.15])
ax3.plot(x,y,'y')

plt.savefig('../data/嵌套图.jpg')
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_18_0.png)
    

（6）双轴图
<br>面向对象
<br>&emsp;&emsp;&emsp;<b>ax2=ax1.twinx()</b>共用x轴
<br>&emsp;&emsp;&emsp;<b>ax2=ax1.twiny()</b>共用y轴

```python
#图1
x=np.linspace(-5,10,100)

axes1=plt.gca()#得到当前轴域
axes1.plot(x,np.cos(x),c='r')
axes1.set_xlabel('time',fontsize=20)
axes1.set_ylabel('cos',c='r',fontsize=20)
axes1.tick_params(axis='y',labelcolor='r')
axes1.axis([-6,15,-3,3])

#图2
axes2=axes1.twinx()#和图1共享x轴
axes2.plot(x,np.sin(x),c='b')
axes2.set_ylabel('sin',c='b',fontsize=20)
axes2.tick_params(axis='y',labelcolor='b')
axes2.axis([-6,15,-3,3])#以后设置的为准

plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_20_0.png)
    

（7）图例
<br>&emsp;&emsp;&emsp;绘图时对每条线指定label，后面直接调用<b>plt.legend()</b>
<br>&emsp;&emsp;&emsp;或者不指定，后面指定<b>plt.legend(['sin(x)','cos(x)','sin(x-1)'])</b>
<br>&emsp;&emsp;&emsp;<b>plt.legend()</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;指定<b>fontsize</b>，设置图例大小
<br>&emsp;&emsp;&emsp;&emsp;&emsp;指定<b>ncol</b>，设置显示成几列，默认1列
<br>&emsp;&emsp;&emsp;&emsp;&emsp;指定<b>bbox_to_anchor=[w,h,x,y]</b>，设置图例精确位置，都是相对图的百分比位置和宽高
<br>&emsp;&emsp;&emsp;&emsp;&emsp;指定<b>loc</b>，设置图例位置，'上下参数 左右参数'，
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;上下参数有`'upper'`、`'center'`、`'lower'`
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;左右参数有`'left'`、`'center'`、`'right'`
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'best'自动放到最好的区域，两个center写成'center'

```python
plt.figure(figsize=(10,4))
x=np.linspace(0,2*np.pi,100)

ax1=plt.plot(x,np.sin(x),label='sin(x)')
ax2=plt.plot(x,np.cos(x),label='cos(x)')
ax3=plt.plot(x,np.sin(x-1),label='sin(x-1)')#左加右减

plt.legend(bbox_to_anchor=[0.15,0.1,0.2,0.2])
plt.grid(axis='x')
```

    
![png](/pages/python/basic/science-compute/images/output_22_0.png)
    

```python
plt.figure(figsize=(10,4))
x=np.linspace(0,2*np.pi,100)

ax1=plt.plot(x,np.sin(x))
ax2=plt.plot(x,np.cos(x))
ax3=plt.plot(x,np.sin(x-1))

plt.legend(['sin(x)','cos(x)','sin(x-1)'],loc='lower left',fontsize=10,ncol=3)
plt.grid(axis='x')
```

    
![png](/pages/python/basic/science-compute/images/output_23_0.png)
    

（8）图片操作
<br>&emsp;&emsp;&emsp;<b>plt.imread(path)</b>读取指定路径的图片，RGB形式读入
<br>&emsp;&emsp;&emsp;<b>plt.imsave(path,img[,cmap])</b>保存图片到指定路径，二维图片可指定灰度还是其他
<br>&emsp;&emsp;&emsp;<b>plt.imshow(img[,cmap=''])</b>显示图片
<br>&emsp;&emsp;&emsp;&emsp;&emsp;翻转
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>origin='lower'、img[::-1,:,:]、cv2.flip(img,0)</b>都能上下翻转
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>img[:,::-1,:]、cv2.flip(img,1)</b>都能左右翻转
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>img[::-1,::-1,:]、cv2.flip(img,-1)</b>都能上下左右翻转
<br>&emsp;&emsp;&emsp;&emsp;&emsp;对灰度图片，默认热力值形式显示，指定cmap=''改变配色方式：
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;viridis绿-蓝，plasma红-紫黑，magma黑-红-白，inferno黑-红-黄，
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cividis黄-黑，gray灰，hot黑-红-黄，cool青-紫，jet蓝-绿-黄-红
<br>&emsp;&emsp;&emsp;&emsp;&emsp;截取，图像数组的切片操作

<br>&emsp;&emsp;&emsp;OpenCV读入图片<b>cv2.imread(path)</b>
<br>&emsp;&emsp;&emsp;OpenCV把彩色图片以灰度形式读入<b>cv2.imread(path,0)</b>
<br>&emsp;&emsp;&emsp;OpenCV读图片形式为BGR，用<b>cv2.imshow('winname',img)</b>可以显示，用plt显示的话要转换色彩通道
<br>&emsp;&emsp;&emsp;OpenCV保存图片，<b>cv2.imwrite(path,img)</b>

```python
import cv2

FY=plt.imread('../data/FY.jpg')
plt.figure(figsize=(10,8))

plt.subplot(5,1,1)
plt.imshow(FY)

#上下翻转
plt.subplot(5,3,4)
plt.imshow(FY,origin='lower')

plt.subplot(5,3,5)
plt.imshow(FY[::-1,:,:])

plt.subplot(5,3,6)
plt.imshow(cv2.flip(FY,0))

#左右翻转
plt.subplot(5,3,8)
plt.imshow(FY[:,::-1,:])

plt.subplot(5,3,9)
plt.imshow(cv2.flip(FY,1))

#上下左右翻转
plt.subplot(5,3,11)
plt.imshow(FY[::-1,::-1,:])

plt.subplot(5,3,12)
plt.imshow(cv2.flip(FY,-1))

plt.show()
plt.imsave('../data/save.jpg',FY)
```

    
![png](/pages/python/basic/science-compute/images/output_25_0.png)
    

```python
fy_cv=cv2.imread('../data/FY.jpg') # BGR
fy_plt=plt.imread('../data/FY.jpg') # RGB
fig,ax=plt.subplots(1,2)
ax[0].imshow(fy_cv)
ax[0].set_title('cv2.imread()')
ax[1].imshow(fy_plt)
ax[1].set_title('plt.imread()')
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_26_0.png)
    

```python
fy_cv==fy_plt[:,:,::-1]
```

    array([[[ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True],
            ...,
            [ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True]],
    
           [[ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True],
            ...,
            [ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True]],
    
           [[ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True],
            ...,
            [ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True]],
    
           ...,
    
           [[ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True],
            ...,
            [ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True]],
    
           [[ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True],
            ...,
            [ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True]],
    
           [[ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True],
            ...,
            [ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True]]])

```python
cv2.cvtColor(fy_cv,cv2.COLOR_BGR2RGB)==fy_plt
```

    array([[[ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True],
            ...,
            [ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True]],
    
           [[ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True],
            ...,
            [ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True]],
    
           [[ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True],
            ...,
            [ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True]],
    
           ...,
    
           [[ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True],
            ...,
            [ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True]],
    
           [[ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True],
            ...,
            [ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True]],
    
           [[ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True],
            ...,
            [ True,  True,  True],
            [ True,  True,  True],
            [ True,  True,  True]]])

```python
import cv2
fy=cv2.imread('../data/FY.jpg')
plt.subplot(131)
plt.imshow(fy)#不对

#通道转换
plt.subplot(132)
plt.imshow(cv2.cvtColor(fy,cv2.COLOR_BGR2RGB))
plt.show()

plt.subplot(133)
plt.imshow(fy[:,:,::-1])
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_29_0.png)
    

    
![png](/pages/python/basic/science-compute/images/output_29_1.png)
    

```python
cv2.imshow('FY',fy) # 正常
cv2.imshow('FY1',fy[:,:,::-1]) # 颜色反转
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
img=cv2.imread('../data/FY.jpg',0)#以灰度形式导入图片
plt.figure(figsize=(10,8))
c=['viridis','plasma','magma','inferno','cividis','gray','hot','cool','jet']
for i in range(9):
    plt.subplot(3,3,i+1)
    plt.imshow(img,cmap=c[i])
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_31_0.png)
    

