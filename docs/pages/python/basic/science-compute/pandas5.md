---
title: pandas5
titleTemplate: Python笔记
---

## 2. DataFrame

### 13. 绘图

可以指定索引作为x轴，Series和DataFrame都能画

折线图
<br>&emsp;&emsp;&emsp;<b>s.plot</b>

柱状图
<br>&emsp;&emsp;&emsp;<b>s.plot(kind='bar')、s.plot.bar()、s.plot(kind='barh')、s.plot.barh()</b>，前两垂直，后两水平
<br>&emsp;&emsp;&emsp;对DataFrame，<b>stacked=True</b>表示堆叠

直方图
<br>&emsp;&emsp;&emsp;<b>s.plot(kind='hist')</b>无网格
<br>&emsp;&emsp;&emsp;<b>s.hist()</b>有网格
<br>&emsp;&emsp;&emsp;<b>s.plot.hist()</b>无网格
<br>&emsp;&emsp;&emsp;属性bins设置组数，density=True显示频率，=False显示频数（默认）

kde图，核密度估计
<br>&emsp;&emsp;&emsp;<b>s.plot(kind='kde')</b>
<br>&emsp;&emsp;&emsp;<b>s.plot.kde()</b>

饼图
<br>&emsp;&emsp;&emsp;<b>df.plot(kind='pie')、df.c1.plot.pie()</b>对某一列的数据画饼图
<br>&emsp;&emsp;&emsp;属性<b>autopct='%.2f%%'</b>图中显示百分数，指定小数位数
<br>&emsp;&emsp;&emsp;<b>subplots=True</b>画子图
<br>&emsp;&emsp;&emsp;<b>figsize=(8,8)</b>指定图的大小

散点图
<br>&emsp;&emsp;&emsp;<b>df.plot.scatter(x='c1',y='c2')</b>
<br>&emsp;&emsp;&emsp;<b>df.plot(kind='scatter',x='c1',y='c2')</b>

面积图
<br>&emsp;&emsp;&emsp;<b>df.plot.area()</b>
<br>&emsp;&emsp;&emsp;<b>df.plot(kind='area')</b>
<br>&emsp;&emsp;&emsp;默认<b>stacked=True</b>堆叠效果，指定False不堆叠

箱型图
<br>&emsp;&emsp;&emsp;<b>df.plot.box()</b>
<br>&emsp;&emsp;&emsp;<b>df.plot(kind='box')</b>
<br>&emsp;&emsp;&emsp;默认<b>vert=True</b>垂直箱型图，指定=False水平箱型图

```python
#折线图
s=pd.Series([1,2.5,4,2,1.5,1,2.5])
s.plot()

x=np.arange(0,2*np.pi,0.1)
y=np.sin(x)
s=pd.Series(y,index=x)
s.plot()
```

    <Axes: >

    <Axes: >

    
![png](/pages/python/basic/science-compute/images/output_104_2.png)
    

```python
df=pd.DataFrame(np.random.randint(-20,20,(5,5)),index=list('ABCDE'))
df.plot()
```

    <Axes: >

    
![png](/pages/python/basic/science-compute/images/output_105_1.png)
    

```python
#柱状图
s=pd.Series([1,2.5,4,2,1.5,1,2.5])
s.plot(kind='barh')#水平条形图
```

    <Axes: >

    
![png](/pages/python/basic/science-compute/images/output_106_1.png)
    

```python
s.plot.barh()
```

    <Axes: >

    
![png](/pages/python/basic/science-compute/images/output_107_1.png)
    

```python
#柱状图
df=pd.DataFrame(np.random.rand(5,5))
df
df.plot(kind='bar')

df.plot.bar(stacked=True)#也能画柱状图，stacked表示是否堆叠
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>0</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0.370536</td>
      <td>0.583944</td>
      <td>0.186714</td>
      <td>0.983052</td>
      <td>0.794527</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0.685487</td>
      <td>0.947655</td>
      <td>0.493323</td>
      <td>0.585241</td>
      <td>0.034382</td>
    </tr>
    <tr>
      <th>2</th>
      <td>0.277498</td>
      <td>0.050604</td>
      <td>0.501122</td>
      <td>0.315525</td>
      <td>0.779400</td>
    </tr>
    <tr>
      <th>3</th>
      <td>0.991779</td>
      <td>0.618215</td>
      <td>0.832522</td>
      <td>0.399918</td>
      <td>0.845391</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0.498973</td>
      <td>0.807391</td>
      <td>0.010162</td>
      <td>0.684750</td>
      <td>0.585935</td>
    </tr>
  </tbody>
</table>
</div>

    <Axes: >

    <Axes: >

    
![png](/pages/python/basic/science-compute/images/output_108_3.png)
    

    
![png](/pages/python/basic/science-compute/images/output_108_4.png)
    

```python
#直方图
s=pd.Series([1,2,2,2,2,2,2,3,4,5,6,6,3,3,2,1,1,3,4,6,7,8,6,4,3,3,5])
s.hist(bins=6)#有网格
```

    <Axes: >

    
![png](/pages/python/basic/science-compute/images/output_109_1.png)
    

```python
s.plot.hist()
s.plot.kde()
```

    <Axes: ylabel='Frequency'>

    <Axes: ylabel='Density'>

    
![png](/pages/python/basic/science-compute/images/output_110_2.png)
    

```python
s.plot(kind='hist',bins=6,density=True)#无网格，bins设置组数
s.plot(kind='kde')
```

    <Axes: ylabel='Frequency'>

    <Axes: ylabel='Density'>

    
![png](/pages/python/basic/science-compute/images/output_111_2.png)
    

```python
#饼图
df=pd.DataFrame(np.random.rand(4,2),index=list('ABCD'),columns=['c1','c2'])
#对一列画饼图
df.c1.plot(kind='pie',autopct='%.2f%%')
```

    <Axes: ylabel='c1'>

    
![png](/pages/python/basic/science-compute/images/output_112_1.png)
    

```python
df.c1.plot.pie()
```

    <Axes: ylabel='c1'>

    
![png](/pages/python/basic/science-compute/images/output_113_1.png)
    

```python
df.plot.pie(subplots=True,figsize=(8,8),autopct='%.3f%%')
```

    array([<Axes: ylabel='c1'>, <Axes: ylabel='c2'>], dtype=object)

    
![png](/pages/python/basic/science-compute/images/output_114_1.png)
    

```python
#散点图
df=pd.DataFrame(np.random.randn(1000,2),columns=['A','B'])
df.plot(kind='scatter',x='A',y='B')
df.plot.scatter(x='A',y='B')
```

    <Axes: xlabel='A', ylabel='B'>

    <Axes: xlabel='A', ylabel='B'>

    
![png](/pages/python/basic/science-compute/images/output_115_2.png)
    

    
![png](/pages/python/basic/science-compute/images/output_115_3.png)
    

```python
#面积图
df=pd.DataFrame(np.random.rand(10,4),columns=list('ABCD'))

df.plot.area()
df.plot(kind='area',stacked=False)
```

    <Axes: >

    <Axes: >

    
![png](/pages/python/basic/science-compute/images/output_116_2.png)
    

    
![png](/pages/python/basic/science-compute/images/output_116_3.png)
    

```python
#箱型图
df=pd.DataFrame(np.random.rand(10,4),columns=list('ABCD'))
df.plot.box()
df.plot(kind='box',vert=False)
#从上到下依次是最大值、75%值、中值、25%值、最小值，其他点离群值
```

    <Axes: >

    <Axes: >

    
![png](/pages/python/basic/science-compute/images/output_117_2.png)
    

    
![png](/pages/python/basic/science-compute/images/output_117_3.png)
    

（14）相关系数-热力图

```python
import matplotlib.pyplot as plt
#让绘图中可以显示中文
plt.rcParams['font.sans-serif']='SimHei'
#让图片中可以显示负号
plt.rcParams['axes.unicode_minus']=False

df=pd.read_excel('../data/movie_data3.xlsx')
data = df[["投票人数","评分","时长"]]
result = pd.plotting.scatter_matrix(data[::10],diagonal = "kde",
                                    color = 'k',alpha = 0.3,figsize = (10,10)) 
#diagonal = hist:对角线上显示的是数据集各个特征的直方图（默认）；
#kde:数据集各个特征的核密度估计
```

    
![png](/pages/python/basic/science-compute/images/output_119_0.png)
    

```python
result = pd.plotting.scatter_matrix(data[::10],
                                    color = 'k',alpha = 0.3,figsize = (10,10))
```

    
![png](/pages/python/basic/science-compute/images/output_120_0.png)
    

<b>sns.heatmap(data,vmin=None,vmax=None,annot=None,annot_kws=None)</b>
<br>&emsp;&emsp;data：矩阵数据集
<br>&emsp;&emsp;vmin、vmax：热力图颜色取值的最值
<br>&emsp;&emsp;annot：True的话，在每个方格中写入数据
<br>&emsp;&emsp;annot_kws：设置热力图矩阵上数字的大小颜色字体

```python
import seaborn as sns

corr = data.corr() #获取相关系数
corr = abs(corr) #取绝对值

fig = plt.figure(figsize = (10,8))
ax = fig.add_subplot(111)

ax = sns.heatmap(corr,vmax = 1,vmin = 0,annot = True,
                 annot_kws = {"size":13,"weight":"bold"},linewidths = 0.05)

plt.xticks(fontsize = 15)
plt.yticks(fontsize = 15)

plt.show()
```

    (array([0.5, 1.5, 2.5]),
     [Text(0.5, 0, '投票人数'), Text(1.5, 0, '评分'), Text(2.5, 0, '时长')])

    (array([0.5, 1.5, 2.5]),
     [Text(0, 0.5, '投票人数'), Text(0, 1.5, '评分'), Text(0, 2.5, '时长')])

    
![png](/pages/python/basic/science-compute/images/output_122_2.png)
    

<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>