---
title: pandas1
titleTemplate: Python笔记
---

```python
#每个cell多个输出
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = "all"
```

```python
import numpy as np
import pandas as pd
#查看版本
pd.__version__
```

    '1.5.3'

## 1. Series 一维

（1）由列表生成 Series：<b>s=pd.Series([],index=)</b>，可指定索引，这样即能用原来的 0-len(s)也能用自定义的索引
<br>&emsp;&emsp;&emsp;由字典生成 Series：<b>s=pd.Series({'python':150,'numpy':100,'pandas':130})</b>
<br>&emsp;&emsp;&emsp;<b>s.index</b>查看索引
<br>&emsp;&emsp;&emsp;<b>s.values</b>查看值
<br>&emsp;&emsp;&emsp;<b>s.size</b>查看元素个数
<br>&emsp;&emsp;&emsp;<b>len(s)</b>查看长度
<br>&emsp;&emsp;&emsp;<b>s.isnull()、pd.isnull(s)</b>判断是否为空，<b>s.notnull()</b>判断是否不为空，返回判断布尔类型结果
<br>&emsp;&emsp;&emsp;<b>s.fillna()</b>，填充缺失值，不会改变原数据，指定 inplace=True 则会改变原数据
<br>&emsp;&emsp;&emsp;<b>s.dropna()</b>，删除缺失值，不会改变原数据，指定 inplace=True 则会改变原数据
<br>&emsp;&emsp;&emsp;<b>s.get('f',100)</b>，判断索引 f 是否在 s 中，如果在则返回对应值，不在则返回指定值（如 100）

```python
s=pd.Series([1,3,5,np.nan,6,'qwe','我'],index=['a','b','c','d','e','f','g'])
s

s1=pd.Series({'python':150,'numpy':100,'pandas':130})
s1

s.index
s.values
s.size
len(s)
```

    a      1
    b      3
    c      5
    d    NaN
    e      6
    f    qwe
    g      我
    dtype: object

    python    150
    numpy     100
    pandas    130
    dtype: int64

    Index(['a', 'b', 'c', 'd', 'e', 'f', 'g'], dtype='object')

    array([1, 3, 5, nan, 6, 'qwe', '我'], dtype=object)

    7

    7

```python
s=pd.Series([1,3,5,np.nan,6,'qwe','我'],index=['a','b','c','d','e','f','g'])
s.isnull()
pd.isnull(s)

#保留非空，~取反
s[~s.isnull()]
s[s.notnull()]
s[pd.notnull(s)]
```

    a    False
    b    False
    c    False
    d     True
    e    False
    f    False
    g    False
    dtype: bool

    a    False
    b    False
    c    False
    d     True
    e    False
    f    False
    g    False
    dtype: bool

    a      1
    b      3
    c      5
    e      6
    f    qwe
    g      我
    dtype: object

    a      1
    b      3
    c      5
    e      6
    f    qwe
    g      我
    dtype: object

    a      1
    b      3
    c      5
    e      6
    f    qwe
    g      我
    dtype: object

```python
s=pd.Series([1,3,5,np.nan,6,'qwe','我'],index=['a','b','c','d','e','f','g'])

s.get(5,'不在')
s.get('h','不在')
s.fillna(9990)
s

s.dropna(inplace=True)#这句没有输出
s
```

    'qwe'

    '不在'

    a       1
    b       3
    c       5
    d    9990
    e       6
    f     qwe
    g       我
    dtype: object

    a      1
    b      3
    c      5
    d    NaN
    e      6
    f    qwe
    g      我
    dtype: object

    a      1
    b      3
    c      5
    e      6
    f    qwe
    g      我
    dtype: object

（2）<b>s[3]</b>查看索引为 3 的元素
<br>&emsp;&emsp;&emsp;<b>s['a']</b>查看索引为 a 的元素
<br>&emsp;&emsp;&emsp;索引、切片类似于数组，用默认索引左闭右开，用自定义索引左闭右闭

&emsp;&emsp;&emsp;索引名称赋值，<b>s.index.name='索引'</b>
<br>&emsp;&emsp;&emsp;改变自定义索引，<b>s.index=list('ABCDEFG')</b>
<br>&emsp;&emsp;&emsp;<b>s.loc[]</b>，可以用默认索引和自定义索引取元素，多行写成列表形式
<br>&emsp;&emsp;&emsp;<b>s.iloc</b>

&emsp;&emsp;&emsp;可以取一个、连续多个、间隔取值、不规则间隔取值

```python
s=pd.Series([1,3,5,np.nan,6,'qwe','我'],index=['a','b','c','d','e','f','g'])
s[0]
s[[0]]
s['f']

s[::2]

s[[1,3]]
s[['a','d']]
s['a':'c']

s1.loc['python']
s1.loc[['python']]
s1.loc[['python','numpy']]

s1.iloc[1]
s1.iloc[0:2]
s1.iloc[[0,2]]
```

    1

    a    1
    dtype: object

    'qwe'

    a    1
    c    5
    e    6
    g    我
    dtype: object

    b      3
    d    NaN
    dtype: object

    a      1
    d    NaN
    dtype: object

    a    1
    b    3
    c    5
    dtype: object

    150

    python    150
    dtype: int64

    python    150
    numpy     100
    dtype: int64

    100

    python    150
    numpy     100
    dtype: int64

    python    150
    pandas    130
    dtype: int64

```python
s=pd.Series([1,3,5,np.nan,6,'qwe','我'],index=['a','b','c','d','e','f','g'])
s.index.name='索引'
s

s.index=list('ABCDEFG')
s
```

    索引
    a      1
    b      3
    c      5
    d    NaN
    e      6
    f    qwe
    g      我
    dtype: object

    A      1
    B      3
    C      5
    D    NaN
    E      6
    F    qwe
    G      我
    dtype: object

（3）基本算术运算，加减乘除、取余数、幂运算、求商等
<br>&emsp;&emsp;&emsp;Series 之间的运算，加减，<b>根据索引对应计算，如果长度不同则多出的结果是 NaN</b>

```python
s1=pd.Series([1,2,3])
s2=pd.Series([1,2,3,4],index=[2,1,0,3])

s1
s2
s3=s1+s2
s3

s1.add(s2,fill_value=10)#先把的部分用10填充，再和s2相加，s1、s2顺序没关系
```

    0    1
    1    2
    2    3
    dtype: int64

    2    1
    1    2
    0    3
    3    4
    dtype: int64

    0    4.0
    1    4.0
    2    4.0
    3    NaN
    dtype: float64

    0     4.0
    1     4.0
    2     4.0
    3    14.0
    dtype: float64

## 2. DataFrame

### 1. pd.date_range()

-   参数有开始、截止日期、时间数
    <br>&emsp;&emsp;&emsp;不指定时间数则生成整天，如果指定了时间数（但按整天算数量不符合）会每天再分小时
    <br>&emsp;&emsp;&emsp;也可以只指定开始日期和时间数，或者截止日期和时间数，这两个都默认整天

```python
pd.date_range(start='20230610',end='20230520',periods=12)
```

    DatetimeIndex([          '2023-06-10 00:00:00',
                   '2023-06-08 02:10:54.545454545',
                   '2023-06-06 04:21:49.090909090',
                   '2023-06-04 06:32:43.636363636',
                   '2023-06-02 08:43:38.181818181',
                   '2023-05-31 10:54:32.727272727',
                   '2023-05-29 13:05:27.272727272',
                   '2023-05-27 15:16:21.818181818',
                   '2023-05-25 17:27:16.363636363',
                   '2023-05-23 19:38:10.909090909',
                   '2023-05-21 21:49:05.454545454',
                             '2023-05-20 00:00:00'],
                  dtype='datetime64[ns]', freq=None)

```python
pd.date_range(start='20230610',periods=4)
```

    DatetimeIndex(['2023-06-10', '2023-06-11', '2023-06-12', '2023-06-13'], dtype='datetime64[ns]', freq='D')

```python
pd.date_range(end='20230520',periods=6)
```

    DatetimeIndex(['2023-05-15', '2023-05-16', '2023-05-17', '2023-05-18',
                   '2023-05-19', '2023-05-20'],
                  dtype='datetime64[ns]', freq='D')

### 2. 构造 DataFrame，要求每列数据类型一致，不同列不要求

<br>&emsp;&emsp;&emsp;根据二维数组构造，指定 index 表示每行索引，columns 表示每列名字，可以在构造时指定，也可以在之后获取和修改

&emsp;&emsp;&emsp;根据字典构造

&emsp;&emsp;&emsp;<b>df.head()</b>，查看前几行，不指定行数默认查看前五行
<br>&emsp;&emsp;&emsp;<b>df.tail()</b>，查看后几行，不指定行数默认查看后五行
<br>&emsp;&emsp;&emsp;<b>df.index</b>，查看索引，可修改
<br>&emsp;&emsp;&emsp;<b>df.columns</b>，查看列标，可修改
<br>&emsp;&emsp;&emsp;<b>df.values</b>，查看数据
<br>&emsp;&emsp;&emsp;<b>df.dtypes</b>，查看每列类型

```python
date=pd.date_range('20230610',periods=6)
df=pd.DataFrame(np.random.randn(6,4),index=date,columns=list('ABCD'))
df

df.index
df.columns=['测','绘','工','程']
df
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2023-06-10</th>
      <td>0.101647</td>
      <td>-0.076880</td>
      <td>-0.817356</td>
      <td>-1.334510</td>
    </tr>
    <tr>
      <th>2023-06-11</th>
      <td>0.041290</td>
      <td>-0.956650</td>
      <td>0.326339</td>
      <td>0.454456</td>
    </tr>
    <tr>
      <th>2023-06-12</th>
      <td>1.962830</td>
      <td>1.817749</td>
      <td>0.817302</td>
      <td>0.435682</td>
    </tr>
    <tr>
      <th>2023-06-13</th>
      <td>-0.750204</td>
      <td>-1.152845</td>
      <td>-0.496289</td>
      <td>0.372312</td>
    </tr>
    <tr>
      <th>2023-06-14</th>
      <td>0.718989</td>
      <td>-0.414434</td>
      <td>1.052482</td>
      <td>-0.467115</td>
    </tr>
    <tr>
      <th>2023-06-15</th>
      <td>0.539968</td>
      <td>-1.205937</td>
      <td>-0.090362</td>
      <td>0.283266</td>
    </tr>
  </tbody>
</table>
</div>

    DatetimeIndex(['2023-06-10', '2023-06-11', '2023-06-12', '2023-06-13',
                   '2023-06-14', '2023-06-15'],
                  dtype='datetime64[ns]', freq='D')

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>测</th>
      <th>绘</th>
      <th>工</th>
      <th>程</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2023-06-10</th>
      <td>0.101647</td>
      <td>-0.076880</td>
      <td>-0.817356</td>
      <td>-1.334510</td>
    </tr>
    <tr>
      <th>2023-06-11</th>
      <td>0.041290</td>
      <td>-0.956650</td>
      <td>0.326339</td>
      <td>0.454456</td>
    </tr>
    <tr>
      <th>2023-06-12</th>
      <td>1.962830</td>
      <td>1.817749</td>
      <td>0.817302</td>
      <td>0.435682</td>
    </tr>
    <tr>
      <th>2023-06-13</th>
      <td>-0.750204</td>
      <td>-1.152845</td>
      <td>-0.496289</td>
      <td>0.372312</td>
    </tr>
    <tr>
      <th>2023-06-14</th>
      <td>0.718989</td>
      <td>-0.414434</td>
      <td>1.052482</td>
      <td>-0.467115</td>
    </tr>
    <tr>
      <th>2023-06-15</th>
      <td>0.539968</td>
      <td>-1.205937</td>
      <td>-0.090362</td>
      <td>0.283266</td>
    </tr>
  </tbody>
</table>
</div>

```python
df2 = pd.DataFrame({'A':1.,'B':pd.Timestamp("20181001"),\
                    'C':pd.Series (1,index = list(range(4)),dtype = float),\
                    'D':np.array([3]*4, dtype = int),\
                    'E':pd.Categorical (["test", "train","test","train"]),\
                    'F':"abc"})
df2
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>F</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1.0</td>
      <td>2018-10-01</td>
      <td>1.0</td>
      <td>3</td>
      <td>test</td>
      <td>abc</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1.0</td>
      <td>2018-10-01</td>
      <td>1.0</td>
      <td>3</td>
      <td>train</td>
      <td>abc</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1.0</td>
      <td>2018-10-01</td>
      <td>1.0</td>
      <td>3</td>
      <td>test</td>
      <td>abc</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1.0</td>
      <td>2018-10-01</td>
      <td>1.0</td>
      <td>3</td>
      <td>train</td>
      <td>abc</td>
    </tr>
  </tbody>
</table>
</div>

### 3. 读取数据及操作

<br>&emsp;&emsp;&emsp;<b>df[:5]、df.head()</b>返回前五行
<br>&emsp;&emsp;&emsp;<b>df[-5:]、df.tail()</b>返回后五行
<br>&emsp;&emsp;&emsp;<b>df.loc[0]、df.loc[1:6]、df.loc[[1,3,6]]</b>，返回对应行，左闭右闭
<br>&emsp;&emsp;&emsp;<b>df.iloc[0]、df.iloc[1:6]、df.iloc[[1,3,6]]</b>，返回对应行，左闭右开
<br>&emsp;&emsp;&emsp;<b>df.评分、df['评分']、df[['评分','产地']]</b>，查找对应一列或多列，前两个等价
<br>&emsp;&emsp;&emsp;<b>df[['评分','产地']][:5]</b>，先找评分产地列，再取前五个，左闭右开
<br>&emsp;&emsp;&emsp;<b>df.loc[3:5]['类型']</b>，索引为 3 到 5 的行的类型列数据
<br>&emsp;&emsp;&emsp;<b>df.loc[[1,5,39],['产地','评分']]、df.loc[[1,5,39]][['产地','评分']]</b>，索引为 1、5、39 行的产地和评分，行数用切片时左闭右闭

&emsp;&emsp;&emsp;添加和删除都不改变原 DataFrame，需要用变量接收
<br>&emsp;&emsp;&emsp;添加一行，构造字典，转 Series，再 append
<br>&emsp;&emsp;&emsp;添加一列，<b>df['列名']=range(1,len(df)+1)</b>，不能用 df.列名
<br>&emsp;&emsp;&emsp;删除一/多行，<b>df.drop(23)、df.drop(1:3)、df.drop([1,25,84])</b>，默认 axis=0 表示对行
<br>&emsp;&emsp;&emsp;删除一/多列，<b>df.drop('评分',axis=1)、df.drop(['评分','年代'],axis=1)</b>，指定 axis=1 表示对列
<br>&emsp;&emsp;&emsp;删除异常数据，<b>df.drop(df[df.时长>1000].index,inplace=True)</b>
<br>&emsp;&emsp;&emsp;交换两行，<b>df1.loc[0],df1.loc[1]=df1.loc[1],df1.loc[0]</b>
<br>&emsp;&emsp;&emsp;交换两列，<b>df1.评分,df1.名字=df1.名字,df1.评分、df1['评分'],df1['名字']=df1['名字'],df1['评分']</b>

&emsp;&emsp;&emsp;条件选择
<br>&emsp;&emsp;&emsp;<b>df.评分.idxmax()、df['评分'].idxmax()、df.评分.idxmin()、df['评分'].idxmin</b>，返回最值索引
<br>&emsp;&emsp;&emsp;<b>df.产地=='美国'、df['产地']=='美国'</b>，返回判断结果，布尔类型
<br>&emsp;&emsp;&emsp;<b>df[df.产地=='中国大陆']</b>，对判断结果索引，返回产地为中国大陆的所有行
<br>&emsp;&emsp;&emsp;<b>df[(df.产地=='美国')|(df.产地=='中国大陆')&(df.评分>9)].head()</b>，产地是美国或中国大陆且评分大于 9 的前五行

<br>&emsp;&emsp;&emsp;<b>df.产地.str.contains('._美国._')</b>，产地包含美国的电影，用正则表达式查询
<br>&emsp;&emsp;&emsp;<b>df[df.产地.isin(['美国','中国'])]</b>，产地是中国和美国的电影
<br>&emsp;&emsp;&emsp;<b>df[df.评分.between(2,4)]</b>，评分在 2 到 4 之间

```python
import pandas as pd
#r用来忽视后面的转义符，防止路径中的\被认为是转义符
df0=pd.read_excel(r'../data/豆瓣电影数据.xlsx',index_col=0)
```

```python
df0[df0.产地.isin(['波兰','中国香港','墨西哥'])]
```

<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>53</th>
      <td>大话西游之大圣娶亲 西遊記大結局之仙履奇</td>
      <td>366223.0</td>
      <td>喜剧/动作/爱情/奇幻/冒险</td>
      <td>中国香港</td>
      <td>2014-10-24 00:00:00</td>
      <td>95</td>
      <td>1995</td>
      <td>9.1</td>
      <td>中国大陆</td>
    </tr>
    <tr>
      <th>92</th>
      <td>1/2</td>
      <td>595.0</td>
      <td>喜剧/爱情</td>
      <td>中国香港</td>
      <td>1996-09-27 00:00:00</td>
      <td>94</td>
      <td>1996</td>
      <td>5.8</td>
      <td>香港</td>
    </tr>
    <tr>
      <th>120</th>
      <td>11</td>
      <td>254.0</td>
      <td>剧情/惊悚</td>
      <td>波兰</td>
      <td>2015-09-09 00:00:00</td>
      <td>81</td>
      <td>2015</td>
      <td>5.7</td>
      <td>威尼斯电影节</td>
    </tr>
    <tr>
      <th>121</th>
      <td>新扎师兄 新紮師</td>
      <td>9348.0</td>
      <td>动作</td>
      <td>中国香港</td>
      <td>2004-05-01 00:00:00</td>
      <td>60</td>
      <td>2004</td>
      <td>6.5</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>182</th>
      <td>翡翠明珠</td>
      <td>7699.0</td>
      <td>剧情/爱情/古装</td>
      <td>中国香港</td>
      <td>2010-08-13 00:00:00</td>
      <td>60</td>
      <td>2010</td>
      <td>5.3</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>38684</th>
      <td>深深的腥红</td>
      <td>617.0</td>
      <td>剧情/爱情/惊悚/犯罪</td>
      <td>墨西哥</td>
      <td>1996-09-09 00:00:00</td>
      <td>111</td>
      <td>1996</td>
      <td>8.2</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38694</th>
      <td>重案实录之惊天械劫案 重案實錄之驚天械劫</td>
      <td>90.0</td>
      <td>动作/犯罪</td>
      <td>中国香港</td>
      <td>1905-06-16 00:00:00</td>
      <td>114</td>
      <td>1994</td>
      <td>7.3</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38700</th>
      <td>92应召女郎 9</td>
      <td>154.0</td>
      <td>喜剧/爱情</td>
      <td>中国香港</td>
      <td>1992-12-01 00:00:00</td>
      <td>90</td>
      <td>1992</td>
      <td>6.8</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38712</th>
      <td>省港旗兵3：逃出香港 省港旗兵第</td>
      <td>1399.0</td>
      <td>动作</td>
      <td>中国香港</td>
      <td>1989-01-12 00:00:00</td>
      <td>100</td>
      <td>1989</td>
      <td>6.1</td>
      <td>香港</td>
    </tr>
    <tr>
      <th>38716</th>
      <td>华沙谍战</td>
      <td>719.0</td>
      <td>动作/传记/犯罪</td>
      <td>波兰</td>
      <td>2014-02-07 00:00:00</td>
      <td>128</td>
      <td>2014</td>
      <td>7.0</td>
      <td>波兰</td>
    </tr>
  </tbody>
</table>
<p>3152 rows × 9 columns</p>
</div>

```python
# 类型包含犯罪的电影
df0[df0.类型.str.contains('.*犯罪.*')]
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>肖申克的救赎</td>
      <td>692795.0</td>
      <td>剧情/犯罪</td>
      <td>美国</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.6</td>
      <td>多伦多电影节</td>
    </tr>
    <tr>
      <th>1</th>
      <td>控方证人</td>
      <td>42995.0</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>9</th>
      <td>这个杀手不太冷</td>
      <td>662552.0</td>
      <td>剧情/动作/犯罪</td>
      <td>法国</td>
      <td>1994-09-14 00:00:00</td>
      <td>133</td>
      <td>1994</td>
      <td>9.4</td>
      <td>法国</td>
    </tr>
    <tr>
      <th>26</th>
      <td>教父</td>
      <td>280871.0</td>
      <td>剧情/犯罪</td>
      <td>美国</td>
      <td>1972-03-15 00:00:00</td>
      <td>175</td>
      <td>1972</td>
      <td>9.2</td>
      <td>纽约首映</td>
    </tr>
    <tr>
      <th>39</th>
      <td>洞</td>
      <td>13757.0</td>
      <td>剧情/惊悚/犯罪</td>
      <td>法国</td>
      <td>1960-03-18 00:00:00</td>
      <td>132</td>
      <td>1960</td>
      <td>9.2</td>
      <td>法国</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>38684</th>
      <td>深深的腥红</td>
      <td>617.0</td>
      <td>剧情/爱情/惊悚/犯罪</td>
      <td>墨西哥</td>
      <td>1996-09-09 00:00:00</td>
      <td>111</td>
      <td>1996</td>
      <td>8.2</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38694</th>
      <td>重案实录之惊天械劫案 重案實錄之驚天械劫</td>
      <td>90.0</td>
      <td>动作/犯罪</td>
      <td>中国香港</td>
      <td>1905-06-16 00:00:00</td>
      <td>114</td>
      <td>1994</td>
      <td>7.3</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38716</th>
      <td>华沙谍战</td>
      <td>719.0</td>
      <td>动作/传记/犯罪</td>
      <td>波兰</td>
      <td>2014-02-07 00:00:00</td>
      <td>128</td>
      <td>2014</td>
      <td>7.0</td>
      <td>波兰</td>
    </tr>
    <tr>
      <th>38726</th>
      <td>零下的激情</td>
      <td>199.0</td>
      <td>剧情/爱情/犯罪</td>
      <td>美国</td>
      <td>1987-11-06 00:00:00</td>
      <td>98</td>
      <td>1987</td>
      <td>7.4</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38735</th>
      <td>血溅画屏</td>
      <td>95.0</td>
      <td>剧情/悬疑/犯罪/武侠/古装</td>
      <td>中国大陆</td>
      <td>1905-06-08 00:00:00</td>
      <td>91</td>
      <td>1986</td>
      <td>7.1</td>
      <td>美国</td>
    </tr>
  </tbody>
</table>
<p>3656 rows × 9 columns</p>
</div>

```python
df=df0.copy()
```

```python
#查看信息
df.info()
```

    <class 'pandas.core.frame.DataFrame'>
    Int64Index: 38738 entries, 0 to 38737
    Data columns (total 9 columns):
     #   Column  Non-Null Count  Dtype
    ---  ------  --------------  -----
     0   名字      38178 non-null  object
     1   投票人数    38738 non-null  float64
     2   类型      38738 non-null  object
     3   产地      38738 non-null  object
     4   上映时间    38736 non-null  object
     5   时长      38738 non-null  object
     6   年代      38738 non-null  object
     7   评分      38738 non-null  float64
     8   首映地点    38737 non-null  object
    dtypes: float64(2), object(7)
    memory usage: 3.0+ MB

```python
#查看统计描述
df.describe()
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>投票人数</th>
      <th>评分</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>38738.000000</td>
      <td>38738.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>6185.833702</td>
      <td>6.935704</td>
    </tr>
    <tr>
      <th>std</th>
      <td>26143.518786</td>
      <td>1.270101</td>
    </tr>
    <tr>
      <th>min</th>
      <td>-118.000000</td>
      <td>2.000000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>98.000000</td>
      <td>6.300000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>341.000000</td>
      <td>7.100000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>1739.750000</td>
      <td>7.800000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>692795.000000</td>
      <td>9.900000</td>
    </tr>
  </tbody>
</table>
</div>

```python
df[-5:]
df.tail()
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>38733</th>
      <td>神学院 S</td>
      <td>46.0</td>
      <td>Adult</td>
      <td>法国</td>
      <td>1905-06-05 00:00:00</td>
      <td>58</td>
      <td>1983</td>
      <td>8.6</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38734</th>
      <td>1935年</td>
      <td>57.0</td>
      <td>喜剧/歌舞</td>
      <td>美国</td>
      <td>1935-03-15 00:00:00</td>
      <td>98</td>
      <td>1935</td>
      <td>7.6</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38735</th>
      <td>血溅画屏</td>
      <td>95.0</td>
      <td>剧情/悬疑/犯罪/武侠/古装</td>
      <td>中国大陆</td>
      <td>1905-06-08 00:00:00</td>
      <td>91</td>
      <td>1986</td>
      <td>7.1</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38736</th>
      <td>魔窟中的幻想</td>
      <td>51.0</td>
      <td>惊悚/恐怖/儿童</td>
      <td>中国大陆</td>
      <td>1905-06-08 00:00:00</td>
      <td>78</td>
      <td>1986</td>
      <td>8.0</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38737</th>
      <td>列宁格勒围困之星火战役 Блокада: Фильм 2: Ленинградский ме...</td>
      <td>32.0</td>
      <td>剧情/战争</td>
      <td>苏联</td>
      <td>1905-05-30 00:00:00</td>
      <td>97</td>
      <td>1977</td>
      <td>6.6</td>
      <td>美国</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>38733</th>
      <td>神学院 S</td>
      <td>46.0</td>
      <td>Adult</td>
      <td>法国</td>
      <td>1905-06-05 00:00:00</td>
      <td>58</td>
      <td>1983</td>
      <td>8.6</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38734</th>
      <td>1935年</td>
      <td>57.0</td>
      <td>喜剧/歌舞</td>
      <td>美国</td>
      <td>1935-03-15 00:00:00</td>
      <td>98</td>
      <td>1935</td>
      <td>7.6</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38735</th>
      <td>血溅画屏</td>
      <td>95.0</td>
      <td>剧情/悬疑/犯罪/武侠/古装</td>
      <td>中国大陆</td>
      <td>1905-06-08 00:00:00</td>
      <td>91</td>
      <td>1986</td>
      <td>7.1</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38736</th>
      <td>魔窟中的幻想</td>
      <td>51.0</td>
      <td>惊悚/恐怖/儿童</td>
      <td>中国大陆</td>
      <td>1905-06-08 00:00:00</td>
      <td>78</td>
      <td>1986</td>
      <td>8.0</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38737</th>
      <td>列宁格勒围困之星火战役 Блокада: Фильм 2: Ленинградский ме...</td>
      <td>32.0</td>
      <td>剧情/战争</td>
      <td>苏联</td>
      <td>1905-05-30 00:00:00</td>
      <td>97</td>
      <td>1977</td>
      <td>6.6</td>
      <td>美国</td>
    </tr>
  </tbody>
</table>
</div>

```python
df.loc[1:3]
df.loc[[1,5,100]]

df.iloc[1:3]
df.iloc[[1,5,100]]
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>控方证人</td>
      <td>42995.0</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>2</th>
      <td>美丽人生</td>
      <td>327855.0</td>
      <td>剧情/喜剧/爱情</td>
      <td>意大利</td>
      <td>1997-12-20 00:00:00</td>
      <td>116</td>
      <td>1997</td>
      <td>9.5</td>
      <td>意大利</td>
    </tr>
    <tr>
      <th>3</th>
      <td>阿甘正传</td>
      <td>580897.0</td>
      <td>剧情/爱情</td>
      <td>美国</td>
      <td>1994-06-23 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.4</td>
      <td>洛杉矶首映</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>控方证人</td>
      <td>42995.0</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>5</th>
      <td>泰坦尼克号</td>
      <td>157074.0</td>
      <td>剧情/爱情/灾难</td>
      <td>美国</td>
      <td>2012-04-10 00:00:00</td>
      <td>194</td>
      <td>2012</td>
      <td>9.4</td>
      <td>中国大陆</td>
    </tr>
    <tr>
      <th>100</th>
      <td>101</td>
      <td>146.0</td>
      <td>喜剧/爱情</td>
      <td>韩国</td>
      <td>1993-06-19 00:00:00</td>
      <td>112</td>
      <td>1993</td>
      <td>7.4</td>
      <td>韩国</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>控方证人</td>
      <td>42995.0</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>2</th>
      <td>美丽人生</td>
      <td>327855.0</td>
      <td>剧情/喜剧/爱情</td>
      <td>意大利</td>
      <td>1997-12-20 00:00:00</td>
      <td>116</td>
      <td>1997</td>
      <td>9.5</td>
      <td>意大利</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>控方证人</td>
      <td>42995.0</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>5</th>
      <td>泰坦尼克号</td>
      <td>157074.0</td>
      <td>剧情/爱情/灾难</td>
      <td>美国</td>
      <td>2012-04-10 00:00:00</td>
      <td>194</td>
      <td>2012</td>
      <td>9.4</td>
      <td>中国大陆</td>
    </tr>
    <tr>
      <th>100</th>
      <td>101</td>
      <td>146.0</td>
      <td>喜剧/爱情</td>
      <td>韩国</td>
      <td>1993-06-19 00:00:00</td>
      <td>112</td>
      <td>1993</td>
      <td>7.4</td>
      <td>韩国</td>
    </tr>
  </tbody>
</table>
</div>

```python
df.评分.tail()
df[['评分','产地']].head()
```

    38733    8.6
    38734    7.6
    38735    7.1
    38736    8.0
    38737    6.6
    Name: 评分, dtype: float64

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>评分</th>
      <th>产地</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>9.6</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>1</th>
      <td>9.5</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>2</th>
      <td>9.5</td>
      <td>意大利</td>
    </tr>
    <tr>
      <th>3</th>
      <td>9.4</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>4</th>
      <td>9.4</td>
      <td>中国大陆</td>
    </tr>
  </tbody>
</table>
</div>

```python
df[['评分','产地']][:5]
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>评分</th>
      <th>产地</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>9.6</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>1</th>
      <td>9.5</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>2</th>
      <td>9.5</td>
      <td>意大利</td>
    </tr>
    <tr>
      <th>3</th>
      <td>9.4</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>4</th>
      <td>9.4</td>
      <td>中国大陆</td>
    </tr>
  </tbody>
</table>
</div>

```python
df.loc[3:5]['类型']
```

    3       剧情/爱情
    4    剧情/爱情/同性
    5    剧情/爱情/灾难
    Name: 类型, dtype: object

```python
df.loc[[1,5,39],['产地','评分']]
df.loc[[1,5,39]][['产地','评分']]
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>产地</th>
      <th>评分</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>美国</td>
      <td>9.5</td>
    </tr>
    <tr>
      <th>5</th>
      <td>美国</td>
      <td>9.4</td>
    </tr>
    <tr>
      <th>39</th>
      <td>法国</td>
      <td>9.2</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>产地</th>
      <th>评分</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>美国</td>
      <td>9.5</td>
    </tr>
    <tr>
      <th>5</th>
      <td>美国</td>
      <td>9.4</td>
    </tr>
    <tr>
      <th>39</th>
      <td>法国</td>
      <td>9.2</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>产地</th>
      <th>评分</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>美国</td>
      <td>9.5</td>
    </tr>
    <tr>
      <th>2</th>
      <td>意大利</td>
      <td>9.5</td>
    </tr>
    <tr>
      <th>3</th>
      <td>美国</td>
      <td>9.4</td>
    </tr>
  </tbody>
</table>
</div>

```python
#添加行删除行
df1=df.copy()
dit={'名字':'复仇者联盟3','投票人数':'123456','类型':'剧情/科幻',
     '产地':'美国','上映时间':'9999-99-99 99:99:99','时长':'999',
     '年代':'9999','评分':'9.9','首映地点':'美国'}
s=pd.Series(dit)
s.name=38738#加到最后一行
df1=df1.append(s)
df.tail(2)
df1.tail(2)

df1=df1.drop(len(df1)-1)#删掉最后一行
df1.tail(2)
```

    C:\Users\86188\AppData\Local\Temp\ipykernel_6648\3339075158.py:7: FutureWarning: The frame.append method is deprecated and will be removed from pandas in a future version. Use pandas.concat instead.
      df1=df1.append(s)

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>38736</th>
      <td>魔窟中的幻想</td>
      <td>51.0</td>
      <td>惊悚/恐怖/儿童</td>
      <td>中国大陆</td>
      <td>1905-06-08 00:00:00</td>
      <td>78</td>
      <td>1986</td>
      <td>8.0</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38737</th>
      <td>列宁格勒围困之星火战役 Блокада: Фильм 2: Ленинградский ме...</td>
      <td>32.0</td>
      <td>剧情/战争</td>
      <td>苏联</td>
      <td>1905-05-30 00:00:00</td>
      <td>97</td>
      <td>1977</td>
      <td>6.6</td>
      <td>美国</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>38737</th>
      <td>列宁格勒围困之星火战役 Блокада: Фильм 2: Ленинградский ме...</td>
      <td>32.0</td>
      <td>剧情/战争</td>
      <td>苏联</td>
      <td>1905-05-30 00:00:00</td>
      <td>97</td>
      <td>1977</td>
      <td>6.6</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38738</th>
      <td>复仇者联盟3</td>
      <td>123456</td>
      <td>剧情/科幻</td>
      <td>美国</td>
      <td>9999-99-99 99:99:99</td>
      <td>999</td>
      <td>9999</td>
      <td>9.9</td>
      <td>美国</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>38736</th>
      <td>魔窟中的幻想</td>
      <td>51.0</td>
      <td>惊悚/恐怖/儿童</td>
      <td>中国大陆</td>
      <td>1905-06-08 00:00:00</td>
      <td>78</td>
      <td>1986</td>
      <td>8.0</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38737</th>
      <td>列宁格勒围困之星火战役 Блокада: Фильм 2: Ленинградский ме...</td>
      <td>32.0</td>
      <td>剧情/战争</td>
      <td>苏联</td>
      <td>1905-05-30 00:00:00</td>
      <td>97</td>
      <td>1977</td>
      <td>6.6</td>
      <td>美国</td>
    </tr>
  </tbody>
</table>
</div>

```python
#添加列删除列
df1=df.copy()

df1['序号1']=range(1,len(df)+1)
df1['序号2']=range(len(df)+1,1,-1)
df1[:2]

df1=df1.drop(['序号1','序号2'],axis=1)
df1[:2]
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
      <th>序号1</th>
      <th>序号2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>肖申克的救赎</td>
      <td>692795.0</td>
      <td>剧情/犯罪</td>
      <td>美国</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.6</td>
      <td>多伦多电影节</td>
      <td>1</td>
      <td>38739</td>
    </tr>
    <tr>
      <th>1</th>
      <td>控方证人</td>
      <td>42995.0</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
      <td>2</td>
      <td>38738</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>肖申克的救赎</td>
      <td>692795.0</td>
      <td>剧情/犯罪</td>
      <td>美国</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.6</td>
      <td>多伦多电影节</td>
    </tr>
    <tr>
      <th>1</th>
      <td>控方证人</td>
      <td>42995.0</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
    </tr>
  </tbody>
</table>
</div>

```python
#交换两行
df1=df.copy()
df1.head(2)
df1.loc[0],df1.loc[1]=df1.loc[1],df1.loc[0]
df1.head(2)
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>肖申克的救赎</td>
      <td>692795.0</td>
      <td>剧情/犯罪</td>
      <td>美国</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.6</td>
      <td>多伦多电影节</td>
    </tr>
    <tr>
      <th>1</th>
      <td>控方证人</td>
      <td>42995.0</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>控方证人</td>
      <td>42995.0</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>1</th>
      <td>肖申克的救赎</td>
      <td>692795.0</td>
      <td>剧情/犯罪</td>
      <td>美国</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.6</td>
      <td>多伦多电影节</td>
    </tr>
  </tbody>
</table>
</div>

```python
#交换两列
df1=df.copy()
df1[:1]
df1.评分,df1.名字=df1.名字,df1.评分
# df1['评分'],df1['名字']=df1['名字'],df1['评分']
df1[:1]
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>肖申克的救赎</td>
      <td>692795.0</td>
      <td>剧情/犯罪</td>
      <td>美国</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.6</td>
      <td>多伦多电影节</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>9.6</td>
      <td>692795.0</td>
      <td>剧情/犯罪</td>
      <td>美国</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>肖申克的救赎</td>
      <td>多伦多电影节</td>
    </tr>
  </tbody>
</table>
</div>

```python
#条件选择
df.评分.max()
df['评分'].max()
df.评分.idxmax()

df.评分.min()
df['评分'].min()
df.评分.idxmin()
```

    9.9

    9.9

    1110

    2.0

    2.0

    29100

```python
df.产地=='美国'

df[df.产地=='中国大陆']
len(df[df.产地=='中国大陆'])

df[(df.产地=='美国')|(df.产地=='中国大陆')&(df.评分>9)].head()
```

    0         True
    1         True
    2        False
    3         True
    4        False
             ...
    38733    False
    38734     True
    38735    False
    38736    False
    38737    False
    Name: 产地, Length: 38738, dtype: bool

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>4</th>
      <td>霸王别姬</td>
      <td>478523.0</td>
      <td>剧情/爱情/同性</td>
      <td>中国大陆</td>
      <td>1993-01-01 00:00:00</td>
      <td>171</td>
      <td>1993</td>
      <td>9.4</td>
      <td>香港</td>
    </tr>
    <tr>
      <th>21</th>
      <td>大闹天宫</td>
      <td>74881.0</td>
      <td>动画/奇幻</td>
      <td>中国大陆</td>
      <td>1905-05-14 00:00:00</td>
      <td>114</td>
      <td>1961</td>
      <td>9.2</td>
      <td>上集</td>
    </tr>
    <tr>
      <th>29</th>
      <td>穹顶之下</td>
      <td>51113.0</td>
      <td>纪录片</td>
      <td>中国大陆</td>
      <td>2015-02-28 00:00:00</td>
      <td>104</td>
      <td>2015</td>
      <td>9.2</td>
      <td>中国大陆</td>
    </tr>
    <tr>
      <th>38</th>
      <td>茶馆</td>
      <td>10678.0</td>
      <td>剧情/历史</td>
      <td>中国大陆</td>
      <td>1905-06-04 00:00:00</td>
      <td>118</td>
      <td>1982</td>
      <td>9.2</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>45</th>
      <td>山水情</td>
      <td>10781.0</td>
      <td>动画/短片</td>
      <td>中国大陆</td>
      <td>1905-06-10 00:00:00</td>
      <td>19</td>
      <td>1988</td>
      <td>9.2</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>38727</th>
      <td>T省的八四、八五</td>
      <td>380.0</td>
      <td>剧情</td>
      <td>中国大陆</td>
      <td>1905-06-08 00:00:00</td>
      <td>94</td>
      <td>1986</td>
      <td>8.7</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38729</th>
      <td>失踪的女中学生</td>
      <td>101.0</td>
      <td>儿童</td>
      <td>中国大陆</td>
      <td>1905-06-08 00:00:00</td>
      <td>102</td>
      <td>1986</td>
      <td>7.4</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38731</th>
      <td>血战台儿庄</td>
      <td>2908.0</td>
      <td>战争</td>
      <td>中国大陆</td>
      <td>1905-06-08 00:00:00</td>
      <td>120</td>
      <td>1986</td>
      <td>8.1</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38735</th>
      <td>血溅画屏</td>
      <td>95.0</td>
      <td>剧情/悬疑/犯罪/武侠/古装</td>
      <td>中国大陆</td>
      <td>1905-06-08 00:00:00</td>
      <td>91</td>
      <td>1986</td>
      <td>7.1</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38736</th>
      <td>魔窟中的幻想</td>
      <td>51.0</td>
      <td>惊悚/恐怖/儿童</td>
      <td>中国大陆</td>
      <td>1905-06-08 00:00:00</td>
      <td>78</td>
      <td>1986</td>
      <td>8.0</td>
      <td>美国</td>
    </tr>
  </tbody>
</table>
<p>3803 rows × 9 columns</p>
</div>

    3803

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>肖申克的救赎</td>
      <td>692795.0</td>
      <td>剧情/犯罪</td>
      <td>美国</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.6</td>
      <td>多伦多电影节</td>
    </tr>
    <tr>
      <th>1</th>
      <td>控方证人</td>
      <td>42995.0</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>3</th>
      <td>阿甘正传</td>
      <td>580897.0</td>
      <td>剧情/爱情</td>
      <td>美国</td>
      <td>1994-06-23 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.4</td>
      <td>洛杉矶首映</td>
    </tr>
    <tr>
      <th>4</th>
      <td>霸王别姬</td>
      <td>478523.0</td>
      <td>剧情/爱情/同性</td>
      <td>中国大陆</td>
      <td>1993-01-01 00:00:00</td>
      <td>171</td>
      <td>1993</td>
      <td>9.4</td>
      <td>香港</td>
    </tr>
    <tr>
      <th>5</th>
      <td>泰坦尼克号</td>
      <td>157074.0</td>
      <td>剧情/爱情/灾难</td>
      <td>美国</td>
      <td>2012-04-10 00:00:00</td>
      <td>194</td>
      <td>2012</td>
      <td>9.4</td>
      <td>中国大陆</td>
    </tr>
  </tbody>
</table>
