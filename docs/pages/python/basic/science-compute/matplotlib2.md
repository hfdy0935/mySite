---
title: matplotlib2
titleTemplate: Python笔记
---

## 2. 电影数据绘图

```python
import warnings
warnings.filterwarnings("ignore") #关闭一些可能出现但对数据分析并无影响的警告
```

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
```

```python
df=pd.read_excel('../data/movie_data3.xlsx')
```

```python
df.head()
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Unnamed: 0</th>
      <th>年代</th>
      <th>产地</th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>评分</th>
      <th>首映地点</th>
      <th>评分等级</th>
      <th>热门程度</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>1994</td>
      <td>美国</td>
      <td>肖申克的救赎</td>
      <td>692795</td>
      <td>剧情/犯罪</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>9.6</td>
      <td>多伦多电影节</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>1957</td>
      <td>美国</td>
      <td>控方证人</td>
      <td>42995</td>
      <td>剧情/悬疑/犯罪</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>9.5</td>
      <td>美国</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2</td>
      <td>1997</td>
      <td>意大利</td>
      <td>美丽人生</td>
      <td>327855</td>
      <td>剧情/喜剧/爱情</td>
      <td>1997-12-20 00:00:00</td>
      <td>116</td>
      <td>9.5</td>
      <td>意大利</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3</td>
      <td>1994</td>
      <td>美国</td>
      <td>阿甘正传</td>
      <td>580897</td>
      <td>剧情/爱情</td>
      <td>1994-06-23 00:00:00</td>
      <td>142</td>
      <td>9.4</td>
      <td>洛杉矶首映</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>4</th>
      <td>4</td>
      <td>1993</td>
      <td>中国大陆</td>
      <td>霸王别姬</td>
      <td>478523</td>
      <td>剧情/爱情/同性</td>
      <td>1993-01-01 00:00:00</td>
      <td>171</td>
      <td>9.4</td>
      <td>香港</td>
      <td>A</td>
      <td>A</td>
    </tr>
  </tbody>
</table>
</div>

（1）折线图和双轴图
<br>&emsp;&emsp;&emsp;<b>plt.plot()、ax.plot()</b>

```python
#绘制每年的电影数量和投票人数图
data1=df.年代.value_counts()
data1=data1.sort_index()[:-2]

data2=df.投票人数.groupby(df.年代).sum()
# data2=df.pivot_table(index='年代',values='投票人数',aggfunc=np.sum)#这样也行
# data2=df.pivot_table(index=['年代'],values=['投票人数'],aggfunc=np.sum)#这样也行
data2=data2[:-2]

plt.title('每年电影数量和投票人数变化图',fontsize=20,color='orange')
ax1=plt.subplot(111)
ax1.plot(data1.index,data1.values,color='#1f77b4')
ax1.set_ylabel('电影数量',fontsize=15,color='#1f77b4')
ax1.set_xlabel('年代')
ax1.tick_params(axis='y',labelcolor='#1f77b4')
x1=data1.index
y1=data1.values
for (a,b) in zip(x1[::10],y1[::10]):
    ax1.text(a,b+50,b,ha='center',va='bottom',fontsize=10)
ax1.annotate('2012年电影数量达到最大值',xy=(2012,data1[2012]),
             xytext=(2025,2100),arrowprops={'width':5,'headwidth':9,
                                            'facecolor':'#1f77b4','edgecolor':'m'})
ax1.text(1980,1000,'电影数量开始快速增长')

ax2=ax1.twinx()
ax2.plot(data2.index,data2,'r')
ax2.set_ylabel('投票人数',fontsize=15,color='r')
ax2.tick_params(axis='y',labelcolor='r')

plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_38_0.png)
    

```python
from scipy.stats import norm#获取正态分布密度函数
fig=plt.figure(figsize=(10,8))
ax1=fig.add_subplot(111)
n,bins,patches=ax1.hist(df.评分,bins=100,color='m',facecolor='c',edgecolor='r')

ax1.set_xlabel('评分',fontsize=15)
ax1.set_ylabel('电影数量',fontsize=15)
ax1.set_title('频率分布图',fontsize=20)

y=norm.pdf(bins,df.评分.mean(),df.评分.std())#拟合
ax2=ax1.twinx()
ax2.plot(bins,y,'b--')
ax2.set_ylabel('概率分布',fontsize=15)
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_39_0.png)
    

（2）柱状图
<br>&emsp;&emsp;&emsp;<b>plt.bar(x,y)、plt.barh(x,y)、ax.bar(x,y)、ax.barh(x,y)</b>
<br>&emsp;&emsp;&emsp;双柱图可以对x做偏移，一个加一个减
<br>&emsp;&emsp;&emsp;再加一个参数<b>width=0.8</b>设置每个柱子的宽度

```python
#每个产地对应的电影数量柱状图
data=df.产地.value_counts()
plt.figure(figsize=(10,8))

ax=plt.subplot(111)
ax.bar(data.index,data,color='g')
ax.set_title('各产地电影数量统计柱状图',fontsize=20)
ax.set_xlabel('产地',fontsize=15)
ax.set_ylabel('电影数量',fontsize=15)
ax.tick_params(axis='x',rotation=45,labelsize=12)

for (a,b) in zip(data.index,data.values):
    ax.text(a,b+200,b,ha='center')
```

    
![png](/pages/python/basic/science-compute/images/output_41_0.png)
    

```python
#这次用面向过程做横向柱状图
data=df.产地.value_counts()
plt.figure(figsize=(10,8))

plt.barh(data.index,data)
plt.title('各产地电影数量柱状图',fontsize=20)
plt.xlabel('电影数量',fontsize=15)
plt.ylabel('产地',fontsize=15)
for (a,b) in zip(data.index,data):
    plt.text(b+20,a,b,va='center')

plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_42_0.png)
    

```python
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.ticker import MaxNLocator
from collections import namedtuple

fig, ax = plt.subplots()

n_groups = 6 #列数
data1=(6,8,10,12,14,16) #柱状1的每一列对应的数据
data2=(7,8,9,13,13,15) #柱状2每一列对应的数据

bar_width = 0.3 #每条柱状的宽度
index=np.arange(n_groups) #刻度索引

#保证横坐标的刻度位于连个柱状之间
rects1 = ax.bar(index-1/2*bar_width, data1, bar_width,label='a') #绘制柱状1
rects2 = ax.bar(index+1/2*bar_width, data2, bar_width,label='b') #绘制柱状2

plt.xticks(index,['a', 'b', 'c', 'd', 'e','f']) #用指定的字符串表示横坐标的刻度

ax.legend(ncol=2) #绘制图例（即右上角的方框）

fig.tight_layout()
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_43_0.png)
    

（3）饼图
<br>&emsp;&emsp;&emsp;<b>plt.pie(x)、ax.pie(x)</b>

&emsp;&emsp;&emsp;```python
&emsp;&emsp;&emsp;pie(x, explode = None, labels = None, colors = None, autopct = None, pctdistance = 0.6,
    shadow = False, labeldistance = 1.1, startangle = None, radius = None)
&emsp;&emsp;&emsp;```

&emsp;&emsp;&emsp;**参数：**  
&emsp;&emsp;&emsp;**x：** (每一块）的比例，如果sum(x)>1会使用sum(x)归一化  
&emsp;&emsp;&emsp;**labels：** （每一块）饼图外侧显示的说明文字  
&emsp;&emsp;&emsp;**explode：** （每一块）离开中心距离  
&emsp;&emsp;&emsp;**startangle：** 起始绘制角度，默认图是从x轴正方向逆时针画起，如设定=90则从y轴正方向画起   
&emsp;&emsp;&emsp;**shadow：** 是否阴影  
&emsp;&emsp;&emsp;**labeldistance：** label绘制位置，相对于半径的比例，如<1则绘制在饼图内侧  
&emsp;&emsp;&emsp;**autopct：** 控制饼图内百分比设置，可以使用format字符串或者format function  
&emsp;&emsp;&emsp;**'%1.1f'：** 指小数点前后位数（没有用空格补齐）  
&emsp;&emsp;&emsp;**pctdistance：** 类似于labeldistance，指定autopct的位置刻度  
&emsp;&emsp;&emsp;**radius：** 控制饼图半径

&emsp;&emsp;&emsp;**返回值：**  
&emsp;&emsp;&emsp;如果没有设置autopct，返回(patches,texts)  
&emsp;&emsp;&emsp;如果设置autopct，返回(patches,texts,autotexts)

```python
#根据电影时长
data=pd.cut(df.时长,[0,60,90,110,1000]).value_counts()
plt.title('电影时长分布饼图')
patches,l_text,p_text=plt.pie(data,labels=data.index,autopct='%.2lf%%',
                              colors = "bygr", startangle = 90)

for i in p_text:#内部字体
    i.set_size(15)
    i.set_color('w')
for i in l_text:#外部字体
    i.set_size(15)
    i.set_color('r')
plt.legend(bbox_to_anchor=[0.9,0.9,0.3,0.3])
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_45_0.png)
    

```python
#电影评分占比
data=df.评分
bins=np.percentile(data,[0,20,40,60,80,100])
bins=bins.tolist()
data1=pd.cut(data,bins,labels=['E','D','C','B','A']).value_counts()
data2=pd.cut(data,bins).value_counts()
t=[]
for i in range(len(data1.index)):
    t.append(str(data1.index[i])+str(data2.index[i]))

plt.figure(figsize=(10,8))
_,l_text,_=plt.pie(data1,labels=t,autopct='%.2lf%%',shadow=True)
plt.title('电影评分等级占比')
for i in l_text:
    i.set_color('r')
    i.set_size(15)
plt.legend(loc='center right')
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_46_0.png)
    

（4）直方图

&emsp;&emsp;&emsp;<b>plt.hist()、ax.hist()</b>
<br>&emsp;&emsp;&emsp;hist的参数非常多，但常用的就这六个，只有第一个是必须的，后面可选
<br>&emsp;&emsp;&emsp;arr: 需要计算直方图的一维数组
<br>&emsp;&emsp;&emsp;bins: 直方图的柱数，可选项，默认为10
<br>&emsp;&emsp;&emsp;density：默认False显示频数，指定为True显示频率
<br>&emsp;&emsp;&emsp;facecolor: 直方图颜色
<br>&emsp;&emsp;&emsp;edgecolor: 直方图边框颜色
<br>&emsp;&emsp;&emsp;alpha: 透明度
<br>&emsp;&emsp;&emsp;histtype: 直方图类型，"bar", "barstacked", "step", "stepfilled"

<br>&emsp;&emsp;&emsp;返回值：
<br>&emsp;&emsp;&emsp;n: 直方图向量，是否归一化由参数normed设定
<br>&emsp;&emsp;&emsp;bins: 返回各个bin的区间范围
<br>&emsp;&emsp;&emsp;patches: 返回每一个bin里面包含的数据，是一个list

```python
#评分分布直方图
plt.figure(figsize=(10,8))
n,bins,patches=plt.hist(df.评分,bins=30,facecolor='c',
                        edgecolor='r',alpha=0.8,density=True)
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_48_0.png)
    

```python
n
```

    array([0.00079605, 0.00626891, 0.0075625 , 0.01850822, 0.02348355,
           0.02139391, 0.03114555, 0.03442927, 0.02636923, 0.05154439,
           0.04348436, 0.07373435, 0.10428286, 0.0866702 , 0.18607724,
           0.22856654, 0.21174993, 0.34697933, 0.36051222, 0.24806982,
           0.4073798 , 0.27215041, 0.33354595, 0.27234942, 0.13144815,
           0.14428449, 0.07403287, 0.02617022, 0.02119489, 0.00328372])

```python
bins
```

    array([2.        , 2.26333333, 2.52666667, 2.79      , 3.05333333,
           3.31666667, 3.58      , 3.84333333, 4.10666667, 4.37      ,
           4.63333333, 4.89666667, 5.16      , 5.42333333, 5.68666667,
           5.95      , 6.21333333, 6.47666667, 6.74      , 7.00333333,
           7.26666667, 7.53      , 7.79333333, 8.05666667, 8.32      ,
           8.58333333, 8.84666667, 9.11      , 9.37333333, 9.63666667,
           9.9       ])

```python
plt.hist(df.年代,bins=20,edgecolor='m')
```

    (array([7.0000e+00, 3.0000e+01, 4.5000e+01, 2.7000e+01, 1.1300e+02,
            1.3600e+02, 2.5500e+02, 2.9000e+02, 3.5600e+02, 4.8800e+02,
            8.0100e+02, 8.5500e+02, 1.3360e+03, 1.2770e+03, 1.8650e+03,
            2.2390e+03, 3.4410e+03, 5.0350e+03, 1.1883e+04, 7.6840e+03]),
     array([1888. , 1894.5, 1901. , 1907.5, 1914. , 1920.5, 1927. , 1933.5,
            1940. , 1946.5, 1953. , 1959.5, 1966. , 1972.5, 1979. , 1985.5,
            1992. , 1998.5, 2005. , 2011.5, 2018. ]),
     <BarContainer object of 20 artists>)

    
![png](/pages/python/basic/science-compute/images/output_51_1.png)
    

（5）散点图
<br>&emsp;&emsp;&emsp;<b>plt.scatter(x,y)</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;color：颜色，可以是名称、rgb值、十六进制，
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;或者指定c=labels，不同点不同labels数字表示
<br>&emsp;&emsp;&emsp;&emsp;&emsp;s：散点大小
<br>&emsp;&emsp;&emsp;&emsp;&emsp;alpha：不透明度
<br>&emsp;&emsp;&emsp;&emsp;&emsp;label：图例标签
<br>&emsp;&emsp;&emsp;&emsp;&emsp;marker：点的形状格式：
|**marker**|**description**|**描述**|
|-|-|-|
|"."|point|点|
|","|pixel|像素|
|"o"|circle|圈|
|"v"|triangle_down|倒三角形|
|"^"|triangle_up|正三角形|
|"<"|triangle_left|左三角形|
|">"|triangle_right|右三角形|
|"1"|tri_down|tri_down|
|"2"|tri_up|tri_up|
|"3"|tri_left|tri_left|
|"4"|tri_right|tri_right|
|"8"|octagon|八角形|
|"s"|square|正方形|
|"p"|pentagon|五角|
|"\*"|star|星星|
|"h"|hexagon1|六角1|
|"H"|hexagon2|六角2|
|"+"|plus|加号|
|"x"|x|x号|
|"D"|diamond|钻石|
|"d"|thin_diamon|细钻|
|"\|"|vline|v线|
|"\_"|hline|H线|

```python
#电影时长和电影评分散点图

x1=df.时长[df.时长>=90][::100]
x2=df.时长[df.时长<90][::100]
y1=df.评分[df.时长>=90][::100]#每隔100点取一个点
y2=df.评分[df.时长<90][::100]

plt.figure(figsize=(10,8))
plt.scatter(x1,y1,color='b',s=10,marker='.',label='时长>=90分钟')
plt.scatter(x2,y2,color='r',s=10,marker='.',label='时长<90分钟')
plt.legend()
plt.title('电影时长与评分散点图',fontsize=20)
plt.xlabel('时长',fontsize=18)
plt.ylabel('评分',fontsize=18)
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_53_0.png)
    

```python
#电影时长和电影评分散点图
count=0
df1=df[['时长','评分']]
df1['标签']=np.zeros(len(df.时长))
for i in df1.iterrows():
    if i[1][0]<90 and i[1][1]<7.0:
        df1['标签'][count]=1
    elif i[1][0]>=90 and i[1][1]<7.0:
        df1['标签'][count]=2
    elif i[1][0] and i[1][1]>=7.0:
        df1['标签'][count]=3
    else:
        df1['标签'][count]=4
    count+=1

plt.figure(figsize=(10,8))
plt.scatter(df1.时长[::50],df1.评分[::50],s=5,c=df1.标签[::50])
#这样写只能显示一个图例，要想显示4个图例i需要画四个散点图
# plt.legend(['1','2','3','4'])
plt.title('电影时长与评分散点图',fontsize=20)
plt.xlabel('时长',fontsize=18)
plt.ylabel('评分',fontsize=18)
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_54_0.png)
    

（6）箱型图

**一般计算过程**

（ 1 ）计算上四分位数（ Q3 ），中位数，下四分位数（ Q1 ）

（ 2 ）计算上四分位数和下四分位数之间的差值，即四分位数差（IQR, interquartile range）Q3-Q1

（ 3 ）绘制箱线图的上下范围，上限为上四分位数，下限为下四分位数。在箱子内部中位数的位置绘制横线

（ 4 ）大于上四分位数1.5倍四分位数差的值，或者小于下四分位数1.5倍四分位数差的值，划为异常值（outliers）

（ 5 ）异常值之外，最靠近上边缘和下边缘的两个值处，画横线，作为箱线图的触须

（ 6 ）极端异常值，即超出四分位数差3倍距离的异常值，用实心点表示；较为温和的异常值，即处于1.5倍-3倍四分位数差之间的异常值，用空心点表示

（ 7 ）为箱线图添加名称，数轴等

**参数详解**

```python
plt.boxplot(x,notch=None,sym=None,vert=None,
    whis=None,positions=None,widths=None,
    patch_artist=None,meanline=None,showmeans=None,
    showcaps=None,showbox=None,showfliers=None,
    boxprops=None,labels=None,flierprops=None,
    medianprops=None,meanprops=None,
    capprops=None,whiskerprops=None,)
```
<b>x</b>: 指定要绘制箱线图的数据；

notch: 是否是凹口的形式展现箱线图，默认非凹口；

sym: 指定异常点的形状，默认为+号显示；

<b>vert</b>: 是否需要将箱线图垂直摆放，默认垂直摆放；

<b>whis</b>: 指定上下须与上下四分位的距离，默认为为1.5倍的四分位差；

positions: 指定箱线图的位置，默认为[0,1,2...]；

widths: 指定箱线图的宽度，默认为0.5；

<b>patch_artist</b>: 是否填充箱体的颜色；

meanline:是否用线的形式表示均值，默认用点来表示；

showmeans: 是否显示均值，默认不显示；

showcaps: 是否显示箱线图顶端和末端的两条线，默认显示；

showbox: 是否显示箱线图的箱体，默认显示；

showfliers: 是否显示异常值，默认显示；

<b>boxprops</b>: 设置箱体的属性，如边框色，填充色等；

labels: 为箱线图添加标签，类似于图例的作用；

<b>filerprops</b>: 设置异常值的属性，如异常点的形状、大小、填充色等；

medainprops: 设置中位数的属性，如线的类型、粗细等

meanprops: 设置均值的属性，如点的大小，颜色等；

capprops: 设置箱线图顶端和末端线条的属性，如颜色、粗细等；

whiskerprops: 设置须的属性，如颜色、粗细、线的类型等

```python
data1 = df[df.产地 == "中国大陆"]["评分"]
data2 = df[df.产地 == "日本"]["评分"]
data3 = df[df.产地 == "中国香港"]["评分"]
data4 = df[df.产地 == "英国"]["评分"]
data5 = df[df.产地 == "法国"]["评分"]

plt.figure(figsize = (12,8))
plt.boxplot([data1,data2,data3,data4,data5],
            labels = ["中国大陆","日本","中国香港","英国","法国"],
           whis = 2,flierprops = {"marker":'o',"markerfacecolor":"r","color":'k'}
           ,patch_artist = True, boxprops = {"color":'k',"facecolor":"#66ccff"})

ax = plt.gca() #获取当时的坐标系
ax.patch.set_facecolor("gray") #设置坐标系背景颜色
ax.patch.set_alpha(0.3) #设置背景透明度

plt.title("电影评分箱线图",fontsize = 20)
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_57_0.png)
    

```python
data1 = df[df.产地 == "中国大陆"]["评分"]
data2 = df[df.产地 == "日本"]["评分"]
data3 = df[df.产地 == "中国香港"]["评分"]
data4 = df[df.产地 == "英国"]["评分"]
data5 = df[df.产地 == "法国"]["评分"]

plt.figure(figsize = (12,8))
plt.boxplot([data1,data2,data3,data4,data5],
            labels = ["中国大陆","日本","中国香港","英国","法国"],
           whis = 2,flierprops = {"marker":'o',"markerfacecolor":"r","color":'k'}
           ,patch_artist = True, boxprops = {"color":'k',"facecolor":"#66ccff"},
           vert=False)

ax = plt.gca() #获取当时的坐标系
ax.patch.set_facecolor("gray") #设置坐标系背景颜色
ax.patch.set_alpha(0.3) #设置背景透明度

plt.title("电影评分箱线图",fontsize = 20)
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_58_0.png)
    

## 3. 其他图

（1）面积图
<br>&emsp;&emsp;&emsp;<b>plt.stackplot(x,y)</b>

```python
x=np.linspace(0,10,100)
y1=np.random.randn(100)+10
y2=np.random.randn(100)+20
y3=np.random.randn(100)+30
y4=np.random.randn(100)+40
y5=np.random.randn(100)+50
c=['b','g','r','c','m']
#循环画出五个面积图，先画上面大的，再画下面小的覆盖上面的一部分
for i in range(5,0,-1):
    plt.stackplot(x,eval(f'y{i}'),color=c[i-1])
```

    
![png](/pages/python/basic/science-compute/images/output_61_0.png)
    

（2）热力图
<br>&emsp;&emsp;&emsp;<b>plt.imshow()</b>
<br>&emsp;&emsp;&emsp;指定cmap=''

```python
#鸢尾花数据
from sklearn import datasets
iris = datasets.load_iris()
data=iris.data[:10]
data1=pd.DataFrame(iris.data[:10],columns=['特征1','特征2','特征3','特征4'])
plt.imshow(data,cmap='Blues')

x=data1.columns
y=data1.index
plt.xticks(range(len(x)),x)
plt.yticks(range(len(y)),y)

#添加文字
for i in range(len(x)):
    for j in range(len(y)):
        plt.text(x=i,y=j,s=data[j,i],
                 ha='center',va='center',fontsize=10)

#颜色条
plt.colorbar()
plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_63_0.png)
    

（3）极坐标图
<br>&emsp;&emsp;&emsp;本质上是把平面直角坐标系的图画在极坐标图上
<br>&emsp;&emsp;&emsp;创建子图对象时指定<b>projection='polar'</b>或者<b>polar=True</b>
<br>&emsp;&emsp;&emsp;之后用<b>plt.bar()、plt.barh()、plt.plot()、plt.scatter()</b>等画图，注意先极角后极径

```python
fig=plt.figure(figsize=(15,8))

ax1=fig.add_subplot(121,projection='polar')
N=8
x=np.linspace(0,2*np.pi,N,endpoint=False)
y=np.random.randint(3,15,N)
width=2*np.pi/N
color=np.random.rand(8,3)
ax1.bar(x,y,width,color=color)
ax1.set_xlabel('x')
ax1.set_ylabel('y')
ax1.set_ylim(0,16)

ax2=fig.add_subplot(122,projection='polar')
ax2.barh(x,y,width,color=color)
ax2.set_ylim(0,8)

plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_65_0.png)
    

```python
import numpy as np
import matplotlib.pyplot as plt

fig=plt.figure(figsize=(15,8))

r = np.arange(0,1,0.01)
theta = 2*2*np.pi*r
ax1=fig.add_subplot(131,projection='polar')
#projection = 'polar' 指定为极坐标
ax1.plot(theta, r, linewidth=3,color='red')
#第一个参数为极角，第二个参数为极径
ax1.grid(True) #是否有网格

ax2=fig.add_subplot(132,projection='polar')
x=np.linspace(0,2*np.pi,6,endpoint=False)
y=[80,60,90,70,70,100]
#首尾相连
x=np.hstack([x,x[0]])
y=np.hstack([y,y[0]])
ax2.plot(x,y,'o-',lw=3)
ax2.fill(x,y,alpha=0.3,facecolor='m')#填充
ax2.set_title('雷达图')
# ax2.grid(False)

ax3=fig.add_subplot(133,projection='polar')
x=np.random.randint(-150,150,200)
y=x
ax3.scatter(x,y,s=30,c='g',marker='^',)
ax3.set_title('散点图')

plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_66_0.png)
    

（4）等高线图
<br>&emsp;&emsp;<b>plt.contour(x,y,z)</b>，轮廓线
<br>&emsp;&emsp;<b>plt.contourf(x,y,z)</b>，填充区域
<br>&emsp;&emsp;<b>np.meshgrid(x,y)</b>根据一维数组x、y生成格网，分别作为结果的x轴索引和y轴索引，
<br>&emsp;&emsp;&emsp;&emsp;返回两个值（所有点的行索引数组，所有点的列索引数组）

```python
x=np.linspace(-5,5,100)
y=np.linspace(-5,5,100)

#将x和y变成网格形式
X,Y=np.meshgrid(x,y)

Z=np.sqrt(X**2+Y**2)
plt.figure(figsize=(10,4))
#画等高线
plt.subplot(121)
plt.contourf(X,Y,Z)
plt.colorbar()

plt.subplot(122)
plt.contour(X,Y,Z)
plt.colorbar()

plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_68_0.png)
    

（5）3D图
<br>&emsp;&emsp;指定子图的投影方式为'3d'，后面再注意画对应的哪个维度的数据

```python
#projection='3d' 参数表示创建一个三维坐标系
import numpy as np
import matplotlib.pyplot as plt

fig=plt.figure(figsize=[15,15])

ax1=fig.add_subplot(2,2,1,projection='3d')
# Prepare arrays x, y, z
theta = np.linspace(-4 * np.pi, 4 * np.pi, 100)
z = np.linspace(-2, 2, 100)
r = z**2 + 1
x = r * np.sin(theta)
y = r * np.cos(theta)
ax1.scatter(x,y,z,label = "scatter",c='r')
ax1.plot(x,y,z,label = "parametric curve")
ax1.legend()

#后面这三种在二维平面上就可以画出来
ax2=fig.add_subplot(2,2,2,projection='3d')
ax2.scatter(x,z,label = "scatter",c='g',s=25)
#ax1的图在xoz平面的投影
ax2.plot(x,z,label = "parametric curve")
ax2.legend()

ax3=fig.add_subplot(2,2,3,projection='3d')
ax3.scatter(x,y,label = "scatter",c='orange',s=25)
#ax1的图在xoy平面的投影
ax3.plot(x,y,label = "parametric curve")
ax3.legend()

ax4=fig.add_subplot(2,2,4,projection='3d')
ax4.scatter(y,z,label = "scatter",c='c',s=25)
#ax1的图在yoz平面的投影
ax4.plot(y,z,label = "parametric curve")
ax4.legend()

plt.show()
```

    
![png](/pages/python/basic/science-compute/images/output_70_0.png)
    

（6）兰伯特投影图

```python
fig=plt.figure(figsize=(10,6))
ax1=fig.add_subplot(1,2,1,projection='lambert')
x=np.linspace(0,360,500)
y=x
ax1.plot(x,y)
ax1.grid()
```

    
![png](/pages/python/basic/science-compute/images/output_72_0.png)
    
