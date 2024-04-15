---
title: pandas3
titleTemplate: Python笔记
---

## 2. DataFrame

### 8. 数据重塑和轴向旋转

<br>&emsp;&emsp;&emsp;层次化索引：一个轴上有多个索引
<br>&emsp;&emsp;&emsp;<b>s.unstack()</b>把层次化索引转为 DataFrame
<br>&emsp;&emsp;&emsp;<b>s.unstack().stack()</b>再转回来

&emsp;&emsp;&emsp;DataFrame 的层次化索引，见后面
<br>&emsp;&emsp;&emsp;<b>data.index.name='r'</b>对单行设置单行名
<br>&emsp;&emsp;&emsp;<b>data.columns.name'c'</b>对单列设置单列名
<br>&emsp;&emsp;&emsp;<b>data.index.names=['r1','r2']</b>设置两行名
<br>&emsp;&emsp;&emsp;<b>data.columns.names['c1','c2']</b>设置两列名
<br>&emsp;&emsp;&emsp;<b>data.swaplevel('r1','r2')</b>交换两个索引
<br>&emsp;&emsp;&emsp;<b>df.set_index(['产地','年代'])</b>把这两列变成内外层索引，可以根据新索引进行查看
<br>&emsp;&emsp;&emsp;<b>df.reset_index()</b>索引变成列，多一列

&emsp;&emsp;&emsp;数据旋转
<br>&emsp;&emsp;&emsp;<b>data.T</b>交换行列，不改变原数据，只显示交换后的行列
<br>&emsp;&emsp;&emsp;交换两行和两列，见前面

```python
s=pd.Series(np.arange(1,10),index=[['a','a','a','b','b','c','c','d','d',],
                                   [1,2,3,1,2,3,1,2,3]])
s
s.index
```

    a  1    1
       2    2
       3    3
    b  1    4
       2    5
    c  3    6
       1    7
    d  2    8
       3    9
    dtype: int32

    MultiIndex([('a', 1),
                ('a', 2),
                ('a', 3),
                ('b', 1),
                ('b', 2),
                ('c', 3),
                ('c', 1),
                ('d', 2),
                ('d', 3)],
               )

```python
s[:,1]#外层所有索引，内存1索引
s['c',3]
```

    a    1
    b    4
    c    7
    dtype: int32

    6

```python
#切片
s['a':'c']
s[0:5]
```

    a  1    1
       2    2
       3    3
    b  1    4
       2    5
    c  3    6
       1    7
    dtype: int32

    a  1    1
       2    2
       3    3
    b  1    4
       2    5
    dtype: int32

```python
s.unstack()
s.unstack().stack()
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>a</th>
      <td>1.0</td>
      <td>2.0</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>b</th>
      <td>4.0</td>
      <td>5.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>c</th>
      <td>7.0</td>
      <td>NaN</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>d</th>
      <td>NaN</td>
      <td>8.0</td>
      <td>9.0</td>
    </tr>
  </tbody>
</table>
</div>

    a  1    1.0
       2    2.0
       3    3.0
    b  1    4.0
       2    5.0
    c  1    7.0
       3    6.0
    d  2    8.0
       3    9.0
    dtype: float64

```python
data=pd.DataFrame(np.arange(12).reshape(4,3),index=[['a','a','b','b'],[1,2,1,2]],
                  columns=[['A','A','B'],['Z','X','C']])
data
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th colspan="2" halign="left">A</th>
      <th>B</th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th>Z</th>
      <th>X</th>
      <th>C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">a</th>
      <th>1</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">b</th>
      <th>1</th>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tr>
    <tr>
      <th>2</th>
      <td>9</td>
      <td>10</td>
      <td>11</td>
    </tr>
  </tbody>
</table>
</div>

```python
data['A']#columns为A的两列
data['A','X'][:2]#A中的X列前两行
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>Z</th>
      <th>X</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">a</th>
      <th>1</th>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>4</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">b</th>
      <th>1</th>
      <td>6</td>
      <td>7</td>
    </tr>
    <tr>
      <th>2</th>
      <td>9</td>
      <td>10</td>
    </tr>
  </tbody>
</table>
</div>

    a  1    1
       2    4
    Name: (A, X), dtype: int32

```python
data.loc['a']#a中的两行
data.loc['a',1]['A']#a中1的一行的A列
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th colspan="2" halign="left">A</th>
      <th>B</th>
    </tr>
    <tr>
      <th></th>
      <th>Z</th>
      <th>X</th>
      <th>C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>4</td>
      <td>5</td>
    </tr>
  </tbody>
</table>
</div>

    Z    0
    X    1
    Name: (a, 1), dtype: int32

```python
#索引改名
data.index.names=['r1','r2']
data.columns.names=['c1','c2']
data

data.swaplevel('r1','r2')
data
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>c1</th>
      <th colspan="2" halign="left">A</th>
      <th>B</th>
    </tr>
    <tr>
      <th></th>
      <th>c2</th>
      <th>Z</th>
      <th>X</th>
      <th>C</th>
    </tr>
    <tr>
      <th>r1</th>
      <th>r2</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">a</th>
      <th>1</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">b</th>
      <th>1</th>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tr>
    <tr>
      <th>2</th>
      <td>9</td>
      <td>10</td>
      <td>11</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>c1</th>
      <th colspan="2" halign="left">A</th>
      <th>B</th>
    </tr>
    <tr>
      <th></th>
      <th>c2</th>
      <th>Z</th>
      <th>X</th>
      <th>C</th>
    </tr>
    <tr>
      <th>r2</th>
      <th>r1</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <th>a</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <th>a</th>
      <td>3</td>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <th>1</th>
      <th>b</th>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tr>
    <tr>
      <th>2</th>
      <th>b</th>
      <td>9</td>
      <td>10</td>
      <td>11</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>c1</th>
      <th colspan="2" halign="left">A</th>
      <th>B</th>
    </tr>
    <tr>
      <th></th>
      <th>c2</th>
      <th>Z</th>
      <th>X</th>
      <th>C</th>
    </tr>
    <tr>
      <th>r1</th>
      <th>r2</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">a</th>
      <th>1</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">b</th>
      <th>1</th>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tr>
    <tr>
      <th>2</th>
      <td>9</td>
      <td>10</td>
      <td>11</td>
    </tr>
  </tbody>
</table>
</div>

```python
df=df0.copy()
df.set_index(['产地','年代']).head()
df.reset_index().head()
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>评分</th>
      <th>首映地点</th>
    </tr>
    <tr>
      <th>产地</th>
      <th>年代</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">美国</th>
      <th>1994</th>
      <td>肖申克的救赎</td>
      <td>692795.0</td>
      <td>剧情/犯罪</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>9.6</td>
      <td>多伦多电影节</td>
    </tr>
    <tr>
      <th>1957</th>
      <td>控方证人</td>
      <td>42995.0</td>
      <td>剧情/悬疑/犯罪</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>9.5</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>意大利</th>
      <th>1997</th>
      <td>美丽人生</td>
      <td>327855.0</td>
      <td>剧情/喜剧/爱情</td>
      <td>1997-12-20 00:00:00</td>
      <td>116</td>
      <td>9.5</td>
      <td>意大利</td>
    </tr>
    <tr>
      <th>美国</th>
      <th>1994</th>
      <td>阿甘正传</td>
      <td>580897.0</td>
      <td>剧情/爱情</td>
      <td>1994-06-23 00:00:00</td>
      <td>142</td>
      <td>9.4</td>
      <td>洛杉矶首映</td>
    </tr>
    <tr>
      <th>中国大陆</th>
      <th>1993</th>
      <td>霸王别姬</td>
      <td>478523.0</td>
      <td>剧情/爱情/同性</td>
      <td>1993-01-01 00:00:00</td>
      <td>171</td>
      <td>9.4</td>
      <td>香港</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>index</th>
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
      <td>0</td>
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
      <td>1</td>
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
      <td>2</td>
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
      <td>3</td>
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
      <td>4</td>
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
  </tbody>
</table>
</div>

```python
df.T.head()
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
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>8</th>
      <th>9</th>
      <th>...</th>
      <th>38728</th>
      <th>38729</th>
      <th>38730</th>
      <th>38731</th>
      <th>38732</th>
      <th>38733</th>
      <th>38734</th>
      <th>38735</th>
      <th>38736</th>
      <th>38737</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>名字</th>
      <td>肖申克的救赎</td>
      <td>控方证人</td>
      <td>美丽人生</td>
      <td>阿甘正传</td>
      <td>霸王别姬</td>
      <td>泰坦尼克号</td>
      <td>辛德勒的名单</td>
      <td>新世纪福音战士剧场版：Air/真心为你 新世紀エヴァンゲリオン劇場版 Ai</td>
      <td>银魂完结篇：直到永远的万事屋 劇場版 銀魂 完結篇 万事屋よ</td>
      <td>这个杀手不太冷</td>
      <td>...</td>
      <td>离别秋波</td>
      <td>失踪的女中学生</td>
      <td>喧闹村的孩子们</td>
      <td>血战台儿庄</td>
      <td>极乐森林</td>
      <td>神学院 S</td>
      <td>1935年</td>
      <td>血溅画屏</td>
      <td>魔窟中的幻想</td>
      <td>列宁格勒围困之星火战役 Блокада: Фильм 2: Ленинградский ме...</td>
    </tr>
    <tr>
      <th>投票人数</th>
      <td>692795.0</td>
      <td>42995.0</td>
      <td>327855.0</td>
      <td>580897.0</td>
      <td>478523.0</td>
      <td>157074.0</td>
      <td>306904.0</td>
      <td>24355.0</td>
      <td>21513.0</td>
      <td>662552.0</td>
      <td>...</td>
      <td>240.0</td>
      <td>101.0</td>
      <td>36.0</td>
      <td>2908.0</td>
      <td>45.0</td>
      <td>46.0</td>
      <td>57.0</td>
      <td>95.0</td>
      <td>51.0</td>
      <td>32.0</td>
    </tr>
    <tr>
      <th>类型</th>
      <td>剧情/犯罪</td>
      <td>剧情/悬疑/犯罪</td>
      <td>剧情/喜剧/爱情</td>
      <td>剧情/爱情</td>
      <td>剧情/爱情/同性</td>
      <td>剧情/爱情/灾难</td>
      <td>剧情/历史/战争</td>
      <td>剧情/动作/科幻/动画/奇幻</td>
      <td>剧情/动画</td>
      <td>剧情/动作/犯罪</td>
      <td>...</td>
      <td>剧情/爱情/音乐</td>
      <td>儿童</td>
      <td>家庭</td>
      <td>战争</td>
      <td>纪录片</td>
      <td>Adult</td>
      <td>喜剧/歌舞</td>
      <td>剧情/悬疑/犯罪/武侠/古装</td>
      <td>惊悚/恐怖/儿童</td>
      <td>剧情/战争</td>
    </tr>
    <tr>
      <th>产地</th>
      <td>美国</td>
      <td>美国</td>
      <td>意大利</td>
      <td>美国</td>
      <td>中国大陆</td>
      <td>美国</td>
      <td>美国</td>
      <td>日本</td>
      <td>日本</td>
      <td>法国</td>
      <td>...</td>
      <td>美国</td>
      <td>中国大陆</td>
      <td>瑞典</td>
      <td>中国大陆</td>
      <td>美国</td>
      <td>法国</td>
      <td>美国</td>
      <td>中国大陆</td>
      <td>中国大陆</td>
      <td>苏联</td>
    </tr>
    <tr>
      <th>上映时间</th>
      <td>1994-09-10 00:00:00</td>
      <td>1957-12-17 00:00:00</td>
      <td>1997-12-20 00:00:00</td>
      <td>1994-06-23 00:00:00</td>
      <td>1993-01-01 00:00:00</td>
      <td>2012-04-10 00:00:00</td>
      <td>1993-11-30 00:00:00</td>
      <td>1997-07-19 00:00:00</td>
      <td>2013-07-06 00:00:00</td>
      <td>1994-09-14 00:00:00</td>
      <td>...</td>
      <td>1986-02-19 00:00:00</td>
      <td>1905-06-08 00:00:00</td>
      <td>1986-12-06 00:00:00</td>
      <td>1905-06-08 00:00:00</td>
      <td>1986-09-14 00:00:00</td>
      <td>1905-06-05 00:00:00</td>
      <td>1935-03-15 00:00:00</td>
      <td>1905-06-08 00:00:00</td>
      <td>1905-06-08 00:00:00</td>
      <td>1905-05-30 00:00:00</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 38738 columns</p>
</div>

### 9. 数组分组

<br>&emsp;&emsp;&emsp;类似于透视表，只会对数值进行分组运算，把年份改成字符型就不会被分组了
<br>&emsp;&emsp;&emsp;<b>df.评分.groupby(df.产地).mean()</b>每个产地的评分均值
<br>&emsp;&emsp;&emsp;<b>df[['评分','投票人数']].groupby([df.产地,df.年代]).mean()</b>每个产地，每个年代的评分和投票人数的均值

```python
df0=pd.read_excel(r'../data/movie_data2.xlsx')
```

```python
df=df0.copy()
#功能一样
df.评分.groupby(df.产地).mean()
df.pivot_table(index='产地',values='评分',aggfunc=np.mean)
```

```python
df[['评分','投票人数']].groupby([df.产地,df.年代]).mean()
df.pivot_table(index=['产地','年代'],values=['投票人数','评分'],aggfunc=np.mean)
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>评分</th>
      <th>投票人数</th>
    </tr>
    <tr>
      <th>产地</th>
      <th>年代</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">中国台湾</th>
      <th>1963</th>
      <td>6.400000</td>
      <td>121.000000</td>
    </tr>
    <tr>
      <th>1965</th>
      <td>6.800000</td>
      <td>153.666667</td>
    </tr>
    <tr>
      <th>1966</th>
      <td>7.900000</td>
      <td>51.000000</td>
    </tr>
    <tr>
      <th>1967</th>
      <td>8.000000</td>
      <td>4444.000000</td>
    </tr>
    <tr>
      <th>1968</th>
      <td>7.400000</td>
      <td>89.000000</td>
    </tr>
    <tr>
      <th>...</th>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th rowspan="5" valign="top">韩国</th>
      <th>2012</th>
      <td>6.035238</td>
      <td>5812.542857</td>
    </tr>
    <tr>
      <th>2013</th>
      <td>6.062037</td>
      <td>10470.370370</td>
    </tr>
    <tr>
      <th>2014</th>
      <td>5.650833</td>
      <td>3776.266667</td>
    </tr>
    <tr>
      <th>2015</th>
      <td>5.423853</td>
      <td>3209.247706</td>
    </tr>
    <tr>
      <th>2016</th>
      <td>5.730000</td>
      <td>1739.850000</td>
    </tr>
  </tbody>
</table>
<p>1578 rows × 2 columns</p>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>投票人数</th>
      <th>评分</th>
    </tr>
    <tr>
      <th>产地</th>
      <th>年代</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">中国台湾</th>
      <th>1963</th>
      <td>121.000000</td>
      <td>6.400000</td>
    </tr>
    <tr>
      <th>1965</th>
      <td>153.666667</td>
      <td>6.800000</td>
    </tr>
    <tr>
      <th>1966</th>
      <td>51.000000</td>
      <td>7.900000</td>
    </tr>
    <tr>
      <th>1967</th>
      <td>4444.000000</td>
      <td>8.000000</td>
    </tr>
    <tr>
      <th>1968</th>
      <td>89.000000</td>
      <td>7.400000</td>
    </tr>
    <tr>
      <th>...</th>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th rowspan="5" valign="top">韩国</th>
      <th>2012</th>
      <td>5812.542857</td>
      <td>6.035238</td>
    </tr>
    <tr>
      <th>2013</th>
      <td>10470.370370</td>
      <td>6.062037</td>
    </tr>
    <tr>
      <th>2014</th>
      <td>3776.266667</td>
      <td>5.650833</td>
    </tr>
    <tr>
      <th>2015</th>
      <td>3209.247706</td>
      <td>5.423853</td>
    </tr>
    <tr>
      <th>2016</th>
      <td>1739.850000</td>
      <td>5.730000</td>
    </tr>
  </tbody>
</table>
<p>1578 rows × 2 columns</p>
</div>

### 10. 离散化处理

<br>&emsp;&emsp;&emsp;<b>pd.cut(x,bins,right=True,labels=None,precision=3,include_lowest=False)</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;x：需要离散化的数组、Series、DataFrame 对象
<br>&emsp;&emsp;&emsp;&emsp;&emsp;bins：分组依据
<br>&emsp;&emsp;&emsp;&emsp;&emsp;labels：是否要用标记替换返回出来的数组
<br>&emsp;&emsp;&emsp;&emsp;&emsp;right：包不包括右端，默认左开右闭
<br>&emsp;&emsp;&emsp;&emsp;&emsp;include_lowest：包不包括左端

```python
df['评分等级']=pd.cut(df.评分,[0,3,5,7,9,10])
df.head()

df['评分等级']=pd.cut(df.评分,[0,3,5,7,9,10],labels=['E','D','C','B','A'])
df.head()
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Unnamed: 0</th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
      <th>评分等级</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>肖申克的救赎</td>
      <td>692795</td>
      <td>剧情/犯罪</td>
      <td>美国</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.6</td>
      <td>多伦多电影节</td>
      <td>(9, 10]</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>控方证人</td>
      <td>42995</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
      <td>(9, 10]</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2</td>
      <td>美丽人生</td>
      <td>327855</td>
      <td>剧情/喜剧/爱情</td>
      <td>意大利</td>
      <td>1997-12-20 00:00:00</td>
      <td>116</td>
      <td>1997</td>
      <td>9.5</td>
      <td>意大利</td>
      <td>(9, 10]</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3</td>
      <td>阿甘正传</td>
      <td>580897</td>
      <td>剧情/爱情</td>
      <td>美国</td>
      <td>1994-06-23 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.4</td>
      <td>洛杉矶首映</td>
      <td>(9, 10]</td>
    </tr>
    <tr>
      <th>4</th>
      <td>4</td>
      <td>霸王别姬</td>
      <td>478523</td>
      <td>剧情/爱情/同性</td>
      <td>中国大陆</td>
      <td>1993-01-01 00:00:00</td>
      <td>171</td>
      <td>1993</td>
      <td>9.4</td>
      <td>香港</td>
      <td>(9, 10]</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Unnamed: 0</th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
      <th>评分等级</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>肖申克的救赎</td>
      <td>692795</td>
      <td>剧情/犯罪</td>
      <td>美国</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.6</td>
      <td>多伦多电影节</td>
      <td>A</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>控方证人</td>
      <td>42995</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
      <td>A</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2</td>
      <td>美丽人生</td>
      <td>327855</td>
      <td>剧情/喜剧/爱情</td>
      <td>意大利</td>
      <td>1997-12-20 00:00:00</td>
      <td>116</td>
      <td>1997</td>
      <td>9.5</td>
      <td>意大利</td>
      <td>A</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3</td>
      <td>阿甘正传</td>
      <td>580897</td>
      <td>剧情/爱情</td>
      <td>美国</td>
      <td>1994-06-23 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.4</td>
      <td>洛杉矶首映</td>
      <td>A</td>
    </tr>
    <tr>
      <th>4</th>
      <td>4</td>
      <td>霸王别姬</td>
      <td>478523</td>
      <td>剧情/爱情/同性</td>
      <td>中国大陆</td>
      <td>1993-01-01 00:00:00</td>
      <td>171</td>
      <td>1993</td>
      <td>9.4</td>
      <td>香港</td>
      <td>A</td>
    </tr>
  </tbody>
</table>
</div>

```python
#根据投票人数刻画电影的热门程度
bins=np.percentile(df.投票人数,[0,20,40,60,80,100])#获取分位数
df['热门程度']=pd.cut(df.投票人数,bins,labels=['E','D','C','B','A'])
df[:5]
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Unnamed: 0</th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
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
      <td>肖申克的救赎</td>
      <td>692795</td>
      <td>剧情/犯罪</td>
      <td>美国</td>
      <td>1994-09-10 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.6</td>
      <td>多伦多电影节</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>控方证人</td>
      <td>42995</td>
      <td>剧情/悬疑/犯罪</td>
      <td>美国</td>
      <td>1957-12-17 00:00:00</td>
      <td>116</td>
      <td>1957</td>
      <td>9.5</td>
      <td>美国</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2</td>
      <td>美丽人生</td>
      <td>327855</td>
      <td>剧情/喜剧/爱情</td>
      <td>意大利</td>
      <td>1997-12-20 00:00:00</td>
      <td>116</td>
      <td>1997</td>
      <td>9.5</td>
      <td>意大利</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3</td>
      <td>阿甘正传</td>
      <td>580897</td>
      <td>剧情/爱情</td>
      <td>美国</td>
      <td>1994-06-23 00:00:00</td>
      <td>142</td>
      <td>1994</td>
      <td>9.4</td>
      <td>洛杉矶首映</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>4</th>
      <td>4</td>
      <td>霸王别姬</td>
      <td>478523</td>
      <td>剧情/爱情/同性</td>
      <td>中国大陆</td>
      <td>1993-01-01 00:00:00</td>
      <td>171</td>
      <td>1993</td>
      <td>9.4</td>
      <td>香港</td>
      <td>A</td>
      <td>A</td>
    </tr>
  </tbody>
</table>
</div>

```python
#大烂片，投票人数很多，评分很低
df[(df.热门程度=='A')&(df.评分等级=='E')]
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Unnamed: 0</th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
      <th>评分等级</th>
      <th>热门程度</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>623</th>
      <td>623</td>
      <td>B区</td>
      <td>5187</td>
      <td>剧情/惊悚/恐怖</td>
      <td>中国大陆</td>
      <td>2011-06-03 00:00:00</td>
      <td>89</td>
      <td>2011</td>
      <td>2.3</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>4167</th>
      <td>4167</td>
      <td>怖偶</td>
      <td>4867</td>
      <td>悬疑/惊悚</td>
      <td>中国大陆</td>
      <td>2014-05-07 00:00:00</td>
      <td>88</td>
      <td>2014</td>
      <td>2.8</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>5200</th>
      <td>5200</td>
      <td>床下有人</td>
      <td>4309</td>
      <td>悬疑/惊悚</td>
      <td>中国大陆</td>
      <td>2011-10-14 00:00:00</td>
      <td>100</td>
      <td>2011</td>
      <td>2.8</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>6585</th>
      <td>6585</td>
      <td>帝国秘符</td>
      <td>4351</td>
      <td>动作/冒险</td>
      <td>中国大陆</td>
      <td>2013-09-18 00:00:00</td>
      <td>93</td>
      <td>2013</td>
      <td>3.0</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>8009</th>
      <td>8009</td>
      <td>飞天</td>
      <td>4764</td>
      <td>剧情</td>
      <td>中国大陆</td>
      <td>2011-07-01 00:00:00</td>
      <td>115</td>
      <td>2011</td>
      <td>2.9</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>8181</th>
      <td>8181</td>
      <td>分手达人</td>
      <td>3937</td>
      <td>喜剧/爱情</td>
      <td>中国大陆</td>
      <td>2014-06-06 00:00:00</td>
      <td>90</td>
      <td>2014</td>
      <td>2.7</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>9372</th>
      <td>9372</td>
      <td>孤岛惊魂</td>
      <td>2982</td>
      <td>悬疑/惊悚/恐怖</td>
      <td>中国大陆</td>
      <td>2013-01-26 00:00:00</td>
      <td>93</td>
      <td>2012</td>
      <td>2.8</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>10275</th>
      <td>10275</td>
      <td>海天盛宴·韦口</td>
      <td>3788</td>
      <td>情色</td>
      <td>中国大陆</td>
      <td>2013-10-12 00:00:00</td>
      <td>88</td>
      <td>2013</td>
      <td>2.9</td>
      <td>网络</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>16512</th>
      <td>16512</td>
      <td>孪生密码</td>
      <td>6390</td>
      <td>动作/悬疑</td>
      <td>中国大陆</td>
      <td>2013-11-08 00:00:00</td>
      <td>96</td>
      <td>2013</td>
      <td>2.9</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>21189</th>
      <td>21189</td>
      <td>拳皇</td>
      <td>6329</td>
      <td>动作/科幻/冒险</td>
      <td>日本</td>
      <td>2012-10-12 00:00:00</td>
      <td>93</td>
      <td>2010</td>
      <td>3.0</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>22348</th>
      <td>22348</td>
      <td>闪魂</td>
      <td>3119</td>
      <td>惊悚/犯罪</td>
      <td>中国大陆</td>
      <td>2014-02-21 00:00:00</td>
      <td>94</td>
      <td>2013</td>
      <td>2.6</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>22524</th>
      <td>22524</td>
      <td>少年毛泽东</td>
      <td>3058</td>
      <td>动画/儿童/冒险</td>
      <td>中国大陆</td>
      <td>2015-04-30 00:00:00</td>
      <td>76</td>
      <td>2015</td>
      <td>2.4</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>23754</th>
      <td>23754</td>
      <td>史前怪兽</td>
      <td>3543</td>
      <td>动作/惊悚/冒险</td>
      <td>英国</td>
      <td>2014-01-01 00:00:00</td>
      <td>89</td>
      <td>2013</td>
      <td>3.0</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>27832</th>
      <td>27832</td>
      <td>无极限之危情速递</td>
      <td>6319</td>
      <td>喜剧/动作/爱情/冒险</td>
      <td>中国大陆</td>
      <td>2011-08-12 00:00:00</td>
      <td>94</td>
      <td>2011</td>
      <td>2.8</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>31622</th>
      <td>31622</td>
      <td>异度公寓</td>
      <td>3639</td>
      <td>惊悚</td>
      <td>中国大陆</td>
      <td>2010-06-04 00:00:00</td>
      <td>93</td>
      <td>2010</td>
      <td>2.7</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>32006</th>
      <td>32006</td>
      <td>英雄之战</td>
      <td>8359</td>
      <td>动作/爱情</td>
      <td>中国大陆</td>
      <td>2014-03-21 00:00:00</td>
      <td>90</td>
      <td>2014</td>
      <td>3.0</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>32179</th>
      <td>32179</td>
      <td>咏春小龙</td>
      <td>8861</td>
      <td>剧情/动作</td>
      <td>中国大陆</td>
      <td>2013-07-20 00:00:00</td>
      <td>90</td>
      <td>2013</td>
      <td>3.0</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>32988</th>
      <td>32988</td>
      <td>再爱一次好不好</td>
      <td>6999</td>
      <td>喜剧/爱情</td>
      <td>中国大陆</td>
      <td>2014-04-11 00:00:00</td>
      <td>94</td>
      <td>2014</td>
      <td>3.0</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>38088</th>
      <td>38088</td>
      <td>大话天仙</td>
      <td>21629</td>
      <td>喜剧/奇幻/古装</td>
      <td>中国大陆</td>
      <td>2014-02-02 00:00:00</td>
      <td>91</td>
      <td>2014</td>
      <td>3.0</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>38090</th>
      <td>38090</td>
      <td>天机·富春山居图</td>
      <td>74709</td>
      <td>动作/冒险</td>
      <td>中国大陆</td>
      <td>2013-06-09 00:00:00</td>
      <td>122</td>
      <td>2013</td>
      <td>2.9</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>38091</th>
      <td>38091</td>
      <td>特工艾米拉</td>
      <td>10852</td>
      <td>动作/悬疑</td>
      <td>中国大陆</td>
      <td>2014-04-11 00:00:00</td>
      <td>96</td>
      <td>2014</td>
      <td>2.7</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>38095</th>
      <td>38095</td>
      <td>汽车人总动员</td>
      <td>12892</td>
      <td>喜剧/动画/冒险</td>
      <td>中国大陆</td>
      <td>2015-07-03 00:00:00</td>
      <td>85</td>
      <td>2015</td>
      <td>2.3</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>38100</th>
      <td>38100</td>
      <td>2016年中央电视台春节</td>
      <td>17328</td>
      <td>歌舞/真人秀</td>
      <td>中国大陆</td>
      <td>2016-02-07 00:00:00</td>
      <td>280</td>
      <td>2016</td>
      <td>2.3</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
    <tr>
      <th>38106</th>
      <td>38106</td>
      <td>放手爱</td>
      <td>29254</td>
      <td>喜剧/爱情</td>
      <td>中国大陆</td>
      <td>2014-04-30 00:00:00</td>
      <td>93</td>
      <td>2014</td>
      <td>2.3</td>
      <td>中国大陆</td>
      <td>E</td>
      <td>A</td>
    </tr>
  </tbody>
</table>
</div>

```python
#冷门高分
df[(df.热门程度=='E')&(df.评分等级=='A')]
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Unnamed: 0</th>
      <th>名字</th>
      <th>投票人数</th>
      <th>类型</th>
      <th>产地</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
      <th>评分等级</th>
      <th>热门程度</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>563</th>
      <td>563</td>
      <td>BBC喜剧音</td>
      <td>38</td>
      <td>喜剧/音乐/歌舞</td>
      <td>英国</td>
      <td>2011-08-13 00:00:00</td>
      <td>95</td>
      <td>2011</td>
      <td>9.3</td>
      <td>美国</td>
      <td>A</td>
      <td>E</td>
    </tr>
    <tr>
      <th>895</th>
      <td>895</td>
      <td>JOJO的奇妙冒险 特别见面会 Walk Like Crusade</td>
      <td>36</td>
      <td>纪录片</td>
      <td>日本</td>
      <td>2014-10-26 00:00:00</td>
      <td>137</td>
      <td>2014</td>
      <td>9.3</td>
      <td>美国</td>
      <td>A</td>
      <td>E</td>
    </tr>
    <tr>
      <th>1099</th>
      <td>1099</td>
      <td>Pond一家最</td>
      <td>45</td>
      <td>纪录片</td>
      <td>英国</td>
      <td>2012-09-29 00:00:00</td>
      <td>12</td>
      <td>2012</td>
      <td>9.2</td>
      <td>美国</td>
      <td>A</td>
      <td>E</td>
    </tr>
    <tr>
      <th>1540</th>
      <td>1540</td>
      <td>阿森纳：温格的十一人</td>
      <td>74</td>
      <td>运动</td>
      <td>英国</td>
      <td>2007-10-22 00:00:00</td>
      <td>78</td>
      <td>2007</td>
      <td>9.5</td>
      <td>美国</td>
      <td>A</td>
      <td>E</td>
    </tr>
    <tr>
      <th>1547</th>
      <td>1547</td>
      <td>阿斯加德远征</td>
      <td>59</td>
      <td>纪录片</td>
      <td>英国</td>
      <td>2011-09-17 00:00:00</td>
      <td>85</td>
      <td>2009</td>
      <td>9.3</td>
      <td>美国</td>
      <td>A</td>
      <td>E</td>
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
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>36844</th>
      <td>36844</td>
      <td>末了，未了</td>
      <td>34</td>
      <td>剧情/喜剧/爱情</td>
      <td>中国大陆</td>
      <td>2012-12-16 00:00:00</td>
      <td>90</td>
      <td>2012</td>
      <td>9.5</td>
      <td>美国</td>
      <td>A</td>
      <td>E</td>
    </tr>
    <tr>
      <th>36998</th>
      <td>36998</td>
      <td>身经百战</td>
      <td>74</td>
      <td>纪录片</td>
      <td>中国大陆</td>
      <td>2015-03-24 00:00:00</td>
      <td>91</td>
      <td>2015</td>
      <td>9.1</td>
      <td>美国</td>
      <td>A</td>
      <td>E</td>
    </tr>
    <tr>
      <th>37031</th>
      <td>37031</td>
      <td>歌唱神探</td>
      <td>36</td>
      <td>剧情/悬疑/歌舞</td>
      <td>英国</td>
      <td>1986-11-16 00:00:00</td>
      <td>415</td>
      <td>1986</td>
      <td>9.1</td>
      <td>美国</td>
      <td>A</td>
      <td>E</td>
    </tr>
    <tr>
      <th>37555</th>
      <td>37555</td>
      <td>山那边</td>
      <td>70</td>
      <td>剧情</td>
      <td>美国</td>
      <td>1975-11-14 00:00:00</td>
      <td>103</td>
      <td>1975</td>
      <td>9.1</td>
      <td>美国</td>
      <td>A</td>
      <td>E</td>
    </tr>
    <tr>
      <th>37881</th>
      <td>37881</td>
      <td>奎</td>
      <td>62</td>
      <td>纪录片/短片</td>
      <td>美国</td>
      <td>2015-08-19 00:00:00</td>
      <td>9</td>
      <td>2015</td>
      <td>9.1</td>
      <td>纽约电影论坛</td>
      <td>A</td>
      <td>E</td>
    </tr>
  </tbody>
</table>
<p>177 rows × 12 columns</p>
</div>

<b>.map()</b>，对前面的对象中的每个数执行 map 中的操作（可以是函数可以是语句），可以判断某列成绩是否及格，新建列返回布尔判断值

```python
df=df0.copy()
bins=np.percentile(df.投票人数,[0,20,40,60,80,100])#获取分位数
def fun1(n):#判断评分
    if n>9.0:
        return 'A'
    elif n>7.0:
        return 'B'
    elif n>5.0:
        return 'C'
    elif n>3.0:
        return 'D'
    else:
        return 'E'

def fun2(n):#判断投票人数
    if n>bins[4]:
        return 'A'
    elif n>bins[3]:
        return 'B'
    elif n>bins[2]:
        return 'C'
    elif n>bins[1]:
        return 'D'
    else:
        return 'E'

df['评分等级']=df.评分.map(fun1)
df['热门程度']=df.投票人数.map(fun2)
df
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
      <th>评分等级</th>
      <th>热门程度</th>
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
      <td>A</td>
      <td>A</td>
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
      <td>A</td>
      <td>A</td>
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
      <td>A</td>
      <td>A</td>
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
      <td>A</td>
      <td>A</td>
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
      <td>A</td>
      <td>A</td>
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
      <td>...</td>
      <td>...</td>
    </tr>
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
      <td>B</td>
      <td>E</td>
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
      <td>B</td>
      <td>E</td>
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
      <td>B</td>
      <td>D</td>
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
      <td>B</td>
      <td>E</td>
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
      <td>C</td>
      <td>E</td>
    </tr>
  </tbody>
</table>
<p>38738 rows × 11 columns</p>
</div>
