---
title: pandas2
titleTemplate: Python笔记
---

## 2. DataFrame

### 4. 缺失值及重复值、异常值处理、数据格式转换
<br>&emsp;&emsp;&emsp;<b>.isnull()</b>，判断是否是缺失值，返回布尔类型
<br>&emsp;&emsp;&emsp;<b>.notnull()</b>，判断是否非缺失值，返回布尔类型
<br>&emsp;&emsp;&emsp;<b>.fillna(value,inplace=False)</b>，填充缺失值，参数inplace默认False不替换，指定=True表示替换原DataFrame
<br>&emsp;&emsp;&emsp;<b>.dropna(inplace=False)</b>，删除缺失值，how='all'删除全为空的行或列（默认any，只要有空的就删该行/列）
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;inplace=True覆盖之前的数据，默认axis=0对行，指定1对列
<br>&emsp;&emsp;&emsp;异常值处理，比如投票人数为小数等，找到并赋值合理的数
<br>&emsp;&emsp;&emsp;数据保存，<b>df.to_excel('../data/movie_data.xlsx')</b>

&emsp;&emsp;&emsp;<b>df.投票人数.dtype</b>，查看格式
<br>&emsp;&emsp;&emsp;<b>df.评分.astype('str')、df['评分'].astype('str')</b>，把评分从浮点数转换为字符串类型

&emsp;&emsp;&emsp;<b>df.isnull().any()</b>寻找有空值的列，只要有一个空值该列就为True，否则为False
<br>&emsp;&emsp;&emsp;<b>df.isnull().all()</b>寻找有空值的列，该列都为空该列才为True，否则为False
<br>&emsp;&emsp;&emsp;<b>df.isnull().any(axis=1)</b>寻找有空值的行，只要有一个空值该行就为True，否则为False
<br>&emsp;&emsp;&emsp;<b>df.isnull().all(axis=1)</b>寻找有空值的行，该行都为空该行才为True，否则为False
<br>&emsp;&emsp;&emsp;notnull()原理同上

&emsp;&emsp;&emsp;<b>df.duplicated()</b>判断行是否和前一行重复，每行返回布尔值
<br>&emsp;&emsp;&emsp;<b>df.drop_duplicates()</b>删除重复

```python
#名字为空和非空的所有数据的前5行
df[df.名字.isnull()][:5]
df[df.名字.notnull()].head()
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
      <th>231</th>
      <td>NaN</td>
      <td>144.0</td>
      <td>纪录片/音乐</td>
      <td>韩国</td>
      <td>2011-02-02 00:00:00</td>
      <td>90</td>
      <td>2011</td>
      <td>9.7</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>361</th>
      <td>NaN</td>
      <td>80.0</td>
      <td>短片</td>
      <td>其他</td>
      <td>1905-05-17 00:00:00</td>
      <td>4</td>
      <td>1964</td>
      <td>5.7</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>369</th>
      <td>NaN</td>
      <td>5315.0</td>
      <td>剧情</td>
      <td>日本</td>
      <td>2004-07-10 00:00:00</td>
      <td>111</td>
      <td>2004</td>
      <td>7.5</td>
      <td>日本</td>
    </tr>
    <tr>
      <th>372</th>
      <td>NaN</td>
      <td>263.0</td>
      <td>短片/音乐</td>
      <td>英国</td>
      <td>1998-06-30 00:00:00</td>
      <td>34</td>
      <td>1998</td>
      <td>9.2</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>374</th>
      <td>NaN</td>
      <td>47.0</td>
      <td>短片</td>
      <td>其他</td>
      <td>1905-05-17 00:00:00</td>
      <td>3</td>
      <td>1964</td>
      <td>6.7</td>
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
  </tbody>
</table>
</div>

```python
df.评分.fillna(np.mean(df.评分),inplace=True)#用其余评分的均值填充
df.评分.isnull().unique()#填充之后都是False，没有空值了
```

    array([False])

```python
df.名字.notnull().unique()
df.名字.fillna('填充名',inplace=True)
df[df.名字.isnull()]#丢填充完了，没有找到缺失值
df[df.名字=='填充名']
```

    array([ True])

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
      <th>231</th>
      <td>填充名</td>
      <td>144.0</td>
      <td>纪录片/音乐</td>
      <td>韩国</td>
      <td>2011-02-02 00:00:00</td>
      <td>90</td>
      <td>2011</td>
      <td>9.7</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>361</th>
      <td>填充名</td>
      <td>80.0</td>
      <td>短片</td>
      <td>其他</td>
      <td>1905-05-17 00:00:00</td>
      <td>4</td>
      <td>1964</td>
      <td>5.7</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>369</th>
      <td>填充名</td>
      <td>5315.0</td>
      <td>剧情</td>
      <td>日本</td>
      <td>2004-07-10 00:00:00</td>
      <td>111</td>
      <td>2004</td>
      <td>7.5</td>
      <td>日本</td>
    </tr>
    <tr>
      <th>372</th>
      <td>填充名</td>
      <td>263.0</td>
      <td>短片/音乐</td>
      <td>英国</td>
      <td>1998-06-30 00:00:00</td>
      <td>34</td>
      <td>1998</td>
      <td>9.2</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>374</th>
      <td>填充名</td>
      <td>47.0</td>
      <td>短片</td>
      <td>其他</td>
      <td>1905-05-17 00:00:00</td>
      <td>3</td>
      <td>1964</td>
      <td>6.7</td>
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
      <th>38523</th>
      <td>填充名</td>
      <td>2190.0</td>
      <td>动作/恐怖/战争</td>
      <td>日本</td>
      <td>1905-06-27 00:00:00</td>
      <td>85</td>
      <td>2005</td>
      <td>7.0</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38555</th>
      <td>填充名</td>
      <td>32.0</td>
      <td>纪录片</td>
      <td>美国</td>
      <td>1905-06-19 00:00:00</td>
      <td>88</td>
      <td>1997</td>
      <td>8.1</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38560</th>
      <td>填充名</td>
      <td>49.0</td>
      <td>纪录片/音乐</td>
      <td>美国</td>
      <td>2004-09-25 00:00:00</td>
      <td>107</td>
      <td>2004</td>
      <td>8.4</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38643</th>
      <td>填充名</td>
      <td>62.0</td>
      <td>恐怖</td>
      <td>美国</td>
      <td>2003-12-30 00:00:00</td>
      <td>90</td>
      <td>2003</td>
      <td>5.2</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>38656</th>
      <td>填充名</td>
      <td>54.0</td>
      <td>喜剧/恐怖</td>
      <td>其他</td>
      <td>2004-01-29 00:00:00</td>
      <td>30</td>
      <td>2004</td>
      <td>8.7</td>
      <td>美国</td>
    </tr>
  </tbody>
</table>
<p>560 rows × 9 columns</p>
</div>

```python
len(df0)
df=df0.copy()
len(df[df.名字.isnull()])#名字空值个数

# df.名字.dropna(inplace=True)#没效果
df.dropna(subset=['名字'],inplace=True)
len(df[df.名字.isnull()])#名字空值个数

df.loc[230:233]#可以看出删了
df.index=range(1,len(df)+1)#解决删除之后索引不连续的情况
len(df)#删除后，序号重新自然数排列的长度

df.to_excel('../data/movie_data.xlsx')
```

    38738

    560

    0

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
      <th>230</th>
      <td>世界奇妙物语 2009春之特别篇 世にも奇妙な物語 豪華キャストで</td>
      <td>5802.0</td>
      <td>悬疑/恐怖</td>
      <td>日本</td>
      <td>2009-03-30 00:00:00</td>
      <td>60</td>
      <td>2009</td>
      <td>7.8</td>
      <td>日本</td>
    </tr>
    <tr>
      <th>232</th>
      <td>睡美人</td>
      <td>5785.0</td>
      <td>喜剧/动画/短片</td>
      <td>加拿大</td>
      <td>2007-06-11 00:00:00</td>
      <td>60</td>
      <td>2007</td>
      <td>8.0</td>
      <td>美国</td>
    </tr>
    <tr>
      <th>233</th>
      <td>2010年青少年选择奖</td>
      <td>313.0</td>
      <td>家庭</td>
      <td>美国</td>
      <td>2010-08-09 00:00:00</td>
      <td>120</td>
      <td>2010</td>
      <td>6.8</td>
      <td>美国</td>
    </tr>
  </tbody>
</table>
</div>

    38178

```python
df=df0.copy()
df.投票人数.dtype
df.投票人数.head()
df.投票人数=df.投票人数.astype(int)
df.投票人数.dtype
df.投票人数.head()
```

    dtype('float64')

    0    692795.0
    1     42995.0
    2    327855.0
    3    580897.0
    4    478523.0
    Name: 投票人数, dtype: float64

    dtype('int32')

    0    692795
    1     42995
    2    327855
    3    580897
    4    478523
    Name: 投票人数, dtype: int32

### 5. 排序
<br>&emsp;&emsp;&emsp;<b>df.sort_values(by='投票人数',ascending=True)</b>按投票人数升序（默认）排列，指定ascending=False降序排列
<br>&emsp;&emsp;&emsp;<b>df.sort_values(by=['投票人数','评分'],ascending=[True,False])</b>按先投票人数后评分降序排列
<br>&emsp;&emsp;&emsp;<b>df.sort_index()</b>按照索引排序，默认升序，指定ascending=False为降序

```python
df=df0.copy()
#先按投票人数升序排列，相同投票人数的按照评分降序排列
df.sort_values(by=['投票人数','评分'],ascending=[True,False])
```

```python
df.sort_index(ascending=False)
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
<p>38738 rows × 9 columns</p>
</div>

### 6. 基本统计分析
<br>&emsp;&emsp;&emsp;<b>df.describe()</b>对df中的数值型数据进行描述性统计
<br>&emsp;&emsp;&emsp;&emsp;&emsp;返回计数、均值、标准差、最小值、25%分位数、中位数、75%分位数、最大值。
<br>&emsp;&emsp;&emsp;<b>df.评分.max()</b>最大值
<br>&emsp;&emsp;&emsp;<b>df.评分.min()</b>最小值
<br>&emsp;&emsp;&emsp;<b>df.评分.idxmax()</b>最大值索引
<br>&emsp;&emsp;&emsp;<b>df.评分.idxmin()</b>最小值索引
<br>&emsp;&emsp;&emsp;<b>df.评分.diff()</b>一阶差分
<br>&emsp;&emsp;&emsp;<b>df.评分.mean()</b>均值
<br>&emsp;&emsp;&emsp;<b>df.评分.median()</b>中值
<br>&emsp;&emsp;&emsp;<b>df.评分.var()</b>方差
<br>&emsp;&emsp;&emsp;<b>df.评分.std()</b>标准差
<br>&emsp;&emsp;&emsp;<b>df.评分.cumsum()</b>累加值，返回序列的长度与输入序列的长度相同
<br>&emsp;&emsp;&emsp;<b>df.评分.cumprod()</b>累乘值，返回序列的长度与输入序列的长度相同
<br>&emsp;&emsp;&emsp;<b>df.评分.cummax()</b>返回序列的长度与输入序列的长度相同，并且每个元素都等于当前元素和前一个元素之间的较大者
<br>&emsp;&emsp;&emsp;<b>df.评分.cummin()</b>返回序列的长度与输入序列的长度相同，并且每个元素都等于当前元素和前一个元素之间的较小者
<br>&emsp;&emsp;&emsp;<b>df.投票人数.sum()</b>求和
<br>&emsp;&emsp;&emsp;<b>df[['投票人数','评分']].corr()</b>相关系数矩阵
<br>&emsp;&emsp;&emsp;<b>df[['投票人数','评分']].cov()</b>协方差矩阵
<br>&emsp;&emsp;&emsp;<b>len(df)</b>返回长度
<br>&emsp;&emsp;&emsp;<b>df.产地.unique()</b>返回不同的值，即有几个不同的值
<br>&emsp;&emsp;&emsp;<b>df.产地.replace('USA','美国',inplace=True)</b>把所有的USA替换为美国
<br>&emsp;&emsp;&emsp;<b>df.产地.replace(['西德','苏联','中国香港','中国台湾'],['德国','俄罗斯','中国','中国'],inplace=True)</b>同时替换多个用列表或元组
<br>&emsp;&emsp;&emsp;<b>df.年代.value_counts(ascending=False)</b>对出现的所有值进行计数并排序，默认数量降序，指定ascending=True升序

```python
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
df.评分.cummax()
df.投票人数.sum()
```

    0        9.6
    1        9.6
    2        9.6
    3        9.6
    4        9.6
            ... 
    38733    9.9
    38734    9.9
    38735    9.9
    38736    9.9
    38737    9.9
    Name: 评分, Length: 38738, dtype: float64

    239626825.94

```python
df[['投票人数','评分']].corr()
df[['投票人数','评分']].cov()
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
      <th>投票人数</th>
      <td>1.000000</td>
      <td>0.122883</td>
    </tr>
    <tr>
      <th>评分</th>
      <td>0.122883</td>
      <td>1.000000</td>
    </tr>
  </tbody>
</table>
</div>

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
      <th>投票人数</th>
      <td>6.834836e+08</td>
      <td>4080.313942</td>
    </tr>
    <tr>
      <th>评分</th>
      <td>4.080314e+03</td>
      <td>1.613157</td>
    </tr>
  </tbody>
</table>
</div>

```python
df=df0.copy()
df.产地.unique()

df.产地.replace('USA','美国',inplace=True)
df.产地.unique()

df.产地.replace(['西德','苏联','中国香港','中国台湾'],['德国','俄罗斯','中国','中国'],
              inplace=True)
df.产地.unique()
```

    array(['美国', '意大利', '中国大陆', '日本', '法国', '英国', '韩国', '中国香港', '阿根廷', '德国',
           '印度', '其他', '加拿大', '波兰', '泰国', '澳大利亚', '西班牙', '俄罗斯', '中国台湾', '荷兰',
           '丹麦', '比利时', 'USA', '苏联', '墨西哥', '巴西', '瑞典', '西德'], dtype=object)

    array(['美国', '意大利', '中国大陆', '日本', '法国', '英国', '韩国', '中国香港', '阿根廷', '德国',
           '印度', '其他', '加拿大', '波兰', '泰国', '澳大利亚', '西班牙', '俄罗斯', '中国台湾', '荷兰',
           '丹麦', '比利时', '苏联', '墨西哥', '巴西', '瑞典', '西德'], dtype=object)

    array(['美国', '意大利', '中国大陆', '日本', '法国', '英国', '韩国', '中国', '阿根廷', '德国',
           '印度', '其他', '加拿大', '波兰', '泰国', '澳大利亚', '西班牙', '俄罗斯', '荷兰', '丹麦',
           '比利时', '墨西哥', '巴西', '瑞典'], dtype=object)

```python
df.年代.value_counts()
df.年代.value_counts(ascending=False)
df.年代.value_counts(ascending=True)
```

    2012     2042
    2013     2001
    2008     1963
    2014     1887
    2010     1886
             ... 
    1892        1
    34943       1
    2008‎       1
    39180       1
    1890        1
    Name: 年代, Length: 129, dtype: int64

    2012     2042
    2013     2001
    2008     1963
    2014     1887
    2010     1886
             ... 
    1892        1
    34943       1
    2008‎       1
    39180       1
    1890        1
    Name: 年代, Length: 129, dtype: int64

    1890        1
    39180       1
    2008‎       1
    34943       1
    1892        1
             ... 
    2010     1886
    2014     1887
    2008     1963
    2013     2001
    2012     2042
    Name: 年代, Length: 129, dtype: int64

### 7. 数据透视
<br>&emsp;&emsp;&emsp;得到的结果还是DataFrame类型，可以<b>pd.pivot_table(df,)</b>，也可以<b>df.pivot_table()</b>
<br>&emsp;&emsp;&emsp;<b>pd.set_option('display.max_rows',r)</b>显示r行，为None显示所有行（慎用，数据太大浏览器崩过）
<br>&emsp;&emsp;&emsp;<b>pd.set_option('display.max_columns',c)</b>显示c列，为None显示所有列（慎用，数据太大浏览器崩过）
<br>&emsp;&emsp;&emsp;<b>pd.reset_option('display.max_rows')</b>恢复到默认显示行数
<br>&emsp;&emsp;&emsp;<b>pd.reset_option('display.max_columns')</b>恢复到默认显示列数
<br>&emsp;&emsp;&emsp;<b>pd.set_option('display.precision',15) </b>设置数值显示精度

&emsp;&emsp;&emsp;index和values只有一列时可以不加[]或()，有多列时要加，写成列表或元组形式
<br>&emsp;&emsp;&emsp;指定<b>fill_value=0</b>把非数值的数据在统计时设置为0
<br>&emsp;&emsp;&emsp;加入<b>margins=True</b>，可以在下方显示一些总和数据
<br>&emsp;&emsp;&emsp;<b>df.pivot_table(index=['年代'],values=['评分'])</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;查看每个年代的所有评分
<br>&emsp;&emsp;&emsp;<b>df.pivot_table(index=['年代','产地'],values=['投票人数'],aggfunc=np.sum)</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;每个年代，不同产地的投票人数总和
<br>&emsp;&emsp;&emsp;<b>df.pivot_table(index=['产地'],values=['评分','投票人数'],aggfunc=[np.mean,np.max,np.min])</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;每个产地的评分和投票人数的均值、最大最小值（2×3列数据）
<br>&emsp;&emsp;&emsp;<b>pd.pivot_table(df, index = ["产地"], values = ["投票人数", "评分"], aggfunc = {"投票人数":np.sum, "评分":np.mean}, fill_value = 0)</b>
<br>&emsp;&emsp;&emsp;&emsp;&emsp;如果想对不同values执行不同函数，需要向aggfunc传递一个字典

```python
df=df0.copy()
pd.reset_option('display.max_rows')
# pd.set_option('display.max_rows',20)#没起作用...

df.pivot_table(index=['年代'],values=['评分'],aggfunc=np.mean,margins=True)
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>评分</th>
    </tr>
    <tr>
      <th>年代</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1888</th>
      <td>7.950000</td>
    </tr>
    <tr>
      <th>1890</th>
      <td>4.800000</td>
    </tr>
    <tr>
      <th>1892</th>
      <td>7.500000</td>
    </tr>
    <tr>
      <th>1894</th>
      <td>6.633333</td>
    </tr>
    <tr>
      <th>1895</th>
      <td>7.575000</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
    </tr>
    <tr>
      <th>2016</th>
      <td>5.868217</td>
    </tr>
    <tr>
      <th>34943</th>
      <td>9.900000</td>
    </tr>
    <tr>
      <th>39180</th>
      <td>8.900000</td>
    </tr>
    <tr>
      <th>2008‎</th>
      <td>2.700000</td>
    </tr>
    <tr>
      <th>All</th>
      <td>6.935704</td>
    </tr>
  </tbody>
</table>
<p>130 rows × 1 columns</p>
</div>

```python
df.pivot_table(index=['年代','产地'],values='投票人数',aggfunc=np.sum)
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>投票人数</th>
    </tr>
    <tr>
      <th>年代</th>
      <th>产地</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1888</th>
      <th>英国</th>
      <td>776.0</td>
    </tr>
    <tr>
      <th>1890</th>
      <th>美国</th>
      <td>51.0</td>
    </tr>
    <tr>
      <th>1892</th>
      <th>法国</th>
      <td>176.0</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">1894</th>
      <th>法国</th>
      <td>148.0</td>
    </tr>
    <tr>
      <th>美国</th>
      <td>190.0</td>
    </tr>
    <tr>
      <th>...</th>
      <th>...</th>
      <td>...</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">2016</th>
      <th>英国</th>
      <td>160680.0</td>
    </tr>
    <tr>
      <th>韩国</th>
      <td>34797.0</td>
    </tr>
    <tr>
      <th>34943</th>
      <th>中国大陆</th>
      <td>128.0</td>
    </tr>
    <tr>
      <th>39180</th>
      <th>日本</th>
      <td>49.0</td>
    </tr>
    <tr>
      <th>2008‎</th>
      <th>中国大陆</th>
      <td>544.0</td>
    </tr>
  </tbody>
</table>
<p>1626 rows × 1 columns</p>
</div>

```python
df.pivot_table(index=['产地'],values=('评分','投票人数'),
               aggfunc=[np.mean,np.max,np.min])
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th colspan="2" halign="left">mean</th>
      <th colspan="2" halign="left">amax</th>
      <th colspan="2" halign="left">amin</th>
    </tr>
    <tr>
      <th></th>
      <th>投票人数</th>
      <th>评分</th>
      <th>投票人数</th>
      <th>评分</th>
      <th>投票人数</th>
      <th>评分</th>
    </tr>
    <tr>
      <th>产地</th>
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
      <th>USA</th>
      <td>319.132743</td>
      <td>7.313274</td>
      <td>5840.0</td>
      <td>9.7</td>
      <td>31.00</td>
      <td>3.4</td>
    </tr>
    <tr>
      <th>中国台湾</th>
      <td>8474.864078</td>
      <td>7.066667</td>
      <td>443884.0</td>
      <td>9.5</td>
      <td>23.00</td>
      <td>3.1</td>
    </tr>
    <tr>
      <th>中国大陆</th>
      <td>10895.461741</td>
      <td>6.065711</td>
      <td>534791.0</td>
      <td>9.9</td>
      <td>21.00</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>中国香港</th>
      <td>8164.554348</td>
      <td>6.474053</td>
      <td>366223.0</td>
      <td>9.4</td>
      <td>-80.00</td>
      <td>2.5</td>
    </tr>
    <tr>
      <th>丹麦</th>
      <td>1993.858586</td>
      <td>7.245960</td>
      <td>82870.0</td>
      <td>9.1</td>
      <td>31.00</td>
      <td>4.4</td>
    </tr>
    <tr>
      <th>俄罗斯</th>
      <td>1540.036199</td>
      <td>7.139819</td>
      <td>52293.0</td>
      <td>9.3</td>
      <td>29.00</td>
      <td>3.6</td>
    </tr>
    <tr>
      <th>其他</th>
      <td>1590.686979</td>
      <td>7.237448</td>
      <td>254771.0</td>
      <td>9.8</td>
      <td>21.00</td>
      <td>2.4</td>
    </tr>
    <tr>
      <th>加拿大</th>
      <td>1915.304288</td>
      <td>6.733610</td>
      <td>120597.0</td>
      <td>9.7</td>
      <td>23.00</td>
      <td>2.5</td>
    </tr>
    <tr>
      <th>印度</th>
      <td>3210.843137</td>
      <td>6.872269</td>
      <td>549808.0</td>
      <td>9.5</td>
      <td>25.00</td>
      <td>3.5</td>
    </tr>
    <tr>
      <th>墨西哥</th>
      <td>1173.218487</td>
      <td>7.087395</td>
      <td>28732.0</td>
      <td>9.1</td>
      <td>23.00</td>
      <td>3.4</td>
    </tr>
    <tr>
      <th>巴西</th>
      <td>3536.000000</td>
      <td>7.262376</td>
      <td>130931.0</td>
      <td>9.4</td>
      <td>23.00</td>
      <td>4.4</td>
    </tr>
    <tr>
      <th>德国</th>
      <td>2848.099778</td>
      <td>7.155322</td>
      <td>247647.0</td>
      <td>9.6</td>
      <td>24.00</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>意大利</th>
      <td>3340.740988</td>
      <td>7.179306</td>
      <td>501153.0</td>
      <td>9.5</td>
      <td>24.00</td>
      <td>3.1</td>
    </tr>
    <tr>
      <th>日本</th>
      <td>3562.366357</td>
      <td>7.194953</td>
      <td>525505.0</td>
      <td>9.9</td>
      <td>-80.00</td>
      <td>2.8</td>
    </tr>
    <tr>
      <th>比利时</th>
      <td>1230.122302</td>
      <td>7.217986</td>
      <td>21107.0</td>
      <td>9.3</td>
      <td>24.00</td>
      <td>4.6</td>
    </tr>
    <tr>
      <th>法国</th>
      <td>3625.789446</td>
      <td>7.239084</td>
      <td>662552.0</td>
      <td>9.9</td>
      <td>-118.00</td>
      <td>3.5</td>
    </tr>
    <tr>
      <th>波兰</th>
      <td>881.640884</td>
      <td>7.441989</td>
      <td>28904.0</td>
      <td>9.1</td>
      <td>26.00</td>
      <td>5.2</td>
    </tr>
    <tr>
      <th>泰国</th>
      <td>5322.724490</td>
      <td>6.109184</td>
      <td>379595.0</td>
      <td>8.6</td>
      <td>24.00</td>
      <td>2.7</td>
    </tr>
    <tr>
      <th>澳大利亚</th>
      <td>4719.043333</td>
      <td>6.978000</td>
      <td>222409.0</td>
      <td>9.7</td>
      <td>25.00</td>
      <td>3.5</td>
    </tr>
    <tr>
      <th>瑞典</th>
      <td>1495.664948</td>
      <td>7.421649</td>
      <td>29155.0</td>
      <td>9.1</td>
      <td>25.00</td>
      <td>3.8</td>
    </tr>
    <tr>
      <th>美国</th>
      <td>8576.623030</td>
      <td>6.943452</td>
      <td>692795.0</td>
      <td>9.9</td>
      <td>12.87</td>
      <td>2.3</td>
    </tr>
    <tr>
      <th>苏联</th>
      <td>569.449219</td>
      <td>7.912500</td>
      <td>10937.0</td>
      <td>9.6</td>
      <td>28.00</td>
      <td>6.1</td>
    </tr>
    <tr>
      <th>英国</th>
      <td>4795.368440</td>
      <td>7.527181</td>
      <td>345020.0</td>
      <td>9.8</td>
      <td>22.00</td>
      <td>2.9</td>
    </tr>
    <tr>
      <th>荷兰</th>
      <td>934.425806</td>
      <td>7.190323</td>
      <td>35774.0</td>
      <td>9.4</td>
      <td>23.00</td>
      <td>4.1</td>
    </tr>
    <tr>
      <th>西德</th>
      <td>861.515385</td>
      <td>7.494615</td>
      <td>26889.0</td>
      <td>9.4</td>
      <td>25.00</td>
      <td>4.6</td>
    </tr>
    <tr>
      <th>西班牙</th>
      <td>3326.024609</td>
      <td>7.024385</td>
      <td>146787.0</td>
      <td>9.6</td>
      <td>22.00</td>
      <td>3.6</td>
    </tr>
    <tr>
      <th>阿根廷</th>
      <td>2226.474138</td>
      <td>7.273276</td>
      <td>77686.0</td>
      <td>9.6</td>
      <td>25.00</td>
      <td>5.2</td>
    </tr>
    <tr>
      <th>韩国</th>
      <td>6484.885270</td>
      <td>6.362990</td>
      <td>232174.0</td>
      <td>9.9</td>
      <td>25.00</td>
      <td>2.3</td>
    </tr>
  </tbody>
</table>
</div>

```python
#不指定values默认找到数字类型进行统计
pd.pivot_table(df, index = ["产地"], aggfunc = [np.sum, np.mean], fill_value = 0)
```

    C:\Users\86188\AppData\Local\Temp\ipykernel_9284\1197441552.py:2: FutureWarning: The operation <function sum at 0x0000010F543ACAF0> failed on a column. If any error is raised, this will raise an exception in a future version of pandas. Drop these columns to avoid this warning.
      pd.pivot_table(df, index = ["产地"], aggfunc = [np.sum, np.mean], fill_value = 0)
    C:\Users\86188\AppData\Local\Temp\ipykernel_9284\1197441552.py:2: FutureWarning: The operation <function mean at 0x0000010F543ADF30> failed on a column. If any error is raised, this will raise an exception in a future version of pandas. Drop these columns to avoid this warning.
      pd.pivot_table(df, index = ["产地"], aggfunc = [np.sum, np.mean], fill_value = 0)
    

<div>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th colspan="2" halign="left">sum</th>
      <th colspan="2" halign="left">mean</th>
    </tr>
    <tr>
      <th></th>
      <th>投票人数</th>
      <th>评分</th>
      <th>投票人数</th>
      <th>评分</th>
    </tr>
    <tr>
      <th>产地</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>USA</th>
      <td>3.606200e+04</td>
      <td>826.4</td>
      <td>319.132743</td>
      <td>7.313274</td>
    </tr>
    <tr>
      <th>中国台湾</th>
      <td>5.237466e+06</td>
      <td>4367.2</td>
      <td>8474.864078</td>
      <td>7.066667</td>
    </tr>
    <tr>
      <th>中国大陆</th>
      <td>4.143544e+07</td>
      <td>23067.9</td>
      <td>10895.461741</td>
      <td>6.065711</td>
    </tr>
    <tr>
      <th>中国香港</th>
      <td>2.328531e+07</td>
      <td>18464.0</td>
      <td>8164.554348</td>
      <td>6.474053</td>
    </tr>
    <tr>
      <th>丹麦</th>
      <td>3.947840e+05</td>
      <td>1434.7</td>
      <td>1993.858586</td>
      <td>7.245960</td>
    </tr>
    <tr>
      <th>俄罗斯</th>
      <td>3.403480e+05</td>
      <td>1577.9</td>
      <td>1540.036199</td>
      <td>7.139819</td>
    </tr>
    <tr>
      <th>其他</th>
      <td>3.054119e+06</td>
      <td>13895.9</td>
      <td>1590.686979</td>
      <td>7.237448</td>
    </tr>
    <tr>
      <th>加拿大</th>
      <td>1.384765e+06</td>
      <td>4868.4</td>
      <td>1915.304288</td>
      <td>6.733610</td>
    </tr>
    <tr>
      <th>印度</th>
      <td>1.146271e+06</td>
      <td>2453.4</td>
      <td>3210.843137</td>
      <td>6.872269</td>
    </tr>
    <tr>
      <th>墨西哥</th>
      <td>1.396130e+05</td>
      <td>843.4</td>
      <td>1173.218487</td>
      <td>7.087395</td>
    </tr>
    <tr>
      <th>巴西</th>
      <td>3.571360e+05</td>
      <td>733.5</td>
      <td>3536.000000</td>
      <td>7.262376</td>
    </tr>
    <tr>
      <th>德国</th>
      <td>2.568986e+06</td>
      <td>6454.1</td>
      <td>2848.099778</td>
      <td>7.155322</td>
    </tr>
    <tr>
      <th>意大利</th>
      <td>2.502215e+06</td>
      <td>5377.3</td>
      <td>3340.740988</td>
      <td>7.179306</td>
    </tr>
    <tr>
      <th>日本</th>
      <td>1.800064e+07</td>
      <td>36356.1</td>
      <td>3562.366357</td>
      <td>7.194953</td>
    </tr>
    <tr>
      <th>比利时</th>
      <td>1.709870e+05</td>
      <td>1003.3</td>
      <td>1230.122302</td>
      <td>7.217986</td>
    </tr>
    <tr>
      <th>法国</th>
      <td>1.021385e+07</td>
      <td>20392.5</td>
      <td>3625.789446</td>
      <td>7.239084</td>
    </tr>
    <tr>
      <th>波兰</th>
      <td>1.595770e+05</td>
      <td>1347.0</td>
      <td>881.640884</td>
      <td>7.441989</td>
    </tr>
    <tr>
      <th>泰国</th>
      <td>1.564881e+06</td>
      <td>1796.1</td>
      <td>5322.724490</td>
      <td>6.109184</td>
    </tr>
    <tr>
      <th>澳大利亚</th>
      <td>1.415713e+06</td>
      <td>2093.4</td>
      <td>4719.043333</td>
      <td>6.978000</td>
    </tr>
    <tr>
      <th>瑞典</th>
      <td>2.901590e+05</td>
      <td>1439.8</td>
      <td>1495.664948</td>
      <td>7.421649</td>
    </tr>
    <tr>
      <th>美国</th>
      <td>1.017702e+08</td>
      <td>82391.0</td>
      <td>8576.623030</td>
      <td>6.943452</td>
    </tr>
    <tr>
      <th>苏联</th>
      <td>1.457790e+05</td>
      <td>2025.6</td>
      <td>569.449219</td>
      <td>7.912500</td>
    </tr>
    <tr>
      <th>英国</th>
      <td>1.324960e+07</td>
      <td>20797.6</td>
      <td>4795.368440</td>
      <td>7.527181</td>
    </tr>
    <tr>
      <th>荷兰</th>
      <td>1.448360e+05</td>
      <td>1114.5</td>
      <td>934.425806</td>
      <td>7.190323</td>
    </tr>
    <tr>
      <th>西德</th>
      <td>1.119970e+05</td>
      <td>974.3</td>
      <td>861.515385</td>
      <td>7.494615</td>
    </tr>
    <tr>
      <th>西班牙</th>
      <td>1.486733e+06</td>
      <td>3139.9</td>
      <td>3326.024609</td>
      <td>7.024385</td>
    </tr>
    <tr>
      <th>阿根廷</th>
      <td>2.582710e+05</td>
      <td>843.7</td>
      <td>2226.474138</td>
      <td>7.273276</td>
    </tr>
    <tr>
      <th>韩国</th>
      <td>8.761080e+06</td>
      <td>8596.4</td>
      <td>6484.885270</td>
      <td>6.362990</td>
    </tr>
  </tbody>
</table>
</div>

```python
pd.pivot_table(df, index = ["产地"], values = ["投票人数", "评分"],
               aggfunc = {"投票人数":np.sum, "评分":np.mean}, fill_value = 0)
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>投票人数</th>
      <th>评分</th>
    </tr>
    <tr>
      <th>产地</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>USA</th>
      <td>3.606200e+04</td>
      <td>7.313274</td>
    </tr>
    <tr>
      <th>中国台湾</th>
      <td>5.237466e+06</td>
      <td>7.066667</td>
    </tr>
    <tr>
      <th>中国大陆</th>
      <td>4.143544e+07</td>
      <td>6.065711</td>
    </tr>
    <tr>
      <th>中国香港</th>
      <td>2.328531e+07</td>
      <td>6.474053</td>
    </tr>
    <tr>
      <th>丹麦</th>
      <td>3.947840e+05</td>
      <td>7.245960</td>
    </tr>
    <tr>
      <th>俄罗斯</th>
      <td>3.403480e+05</td>
      <td>7.139819</td>
    </tr>
    <tr>
      <th>其他</th>
      <td>3.054119e+06</td>
      <td>7.237448</td>
    </tr>
    <tr>
      <th>加拿大</th>
      <td>1.384765e+06</td>
      <td>6.733610</td>
    </tr>
    <tr>
      <th>印度</th>
      <td>1.146271e+06</td>
      <td>6.872269</td>
    </tr>
    <tr>
      <th>墨西哥</th>
      <td>1.396130e+05</td>
      <td>7.087395</td>
    </tr>
    <tr>
      <th>巴西</th>
      <td>3.571360e+05</td>
      <td>7.262376</td>
    </tr>
    <tr>
      <th>德国</th>
      <td>2.568986e+06</td>
      <td>7.155322</td>
    </tr>
    <tr>
      <th>意大利</th>
      <td>2.502215e+06</td>
      <td>7.179306</td>
    </tr>
    <tr>
      <th>日本</th>
      <td>1.800064e+07</td>
      <td>7.194953</td>
    </tr>
    <tr>
      <th>比利时</th>
      <td>1.709870e+05</td>
      <td>7.217986</td>
    </tr>
    <tr>
      <th>法国</th>
      <td>1.021385e+07</td>
      <td>7.239084</td>
    </tr>
    <tr>
      <th>波兰</th>
      <td>1.595770e+05</td>
      <td>7.441989</td>
    </tr>
    <tr>
      <th>泰国</th>
      <td>1.564881e+06</td>
      <td>6.109184</td>
    </tr>
    <tr>
      <th>澳大利亚</th>
      <td>1.415713e+06</td>
      <td>6.978000</td>
    </tr>
    <tr>
      <th>瑞典</th>
      <td>2.901590e+05</td>
      <td>7.421649</td>
    </tr>
    <tr>
      <th>美国</th>
      <td>1.017702e+08</td>
      <td>6.943452</td>
    </tr>
    <tr>
      <th>苏联</th>
      <td>1.457790e+05</td>
      <td>7.912500</td>
    </tr>
    <tr>
      <th>英国</th>
      <td>1.324960e+07</td>
      <td>7.527181</td>
    </tr>
    <tr>
      <th>荷兰</th>
      <td>1.448360e+05</td>
      <td>7.190323</td>
    </tr>
    <tr>
      <th>西德</th>
      <td>1.119970e+05</td>
      <td>7.494615</td>
    </tr>
    <tr>
      <th>西班牙</th>
      <td>1.486733e+06</td>
      <td>7.024385</td>
    </tr>
    <tr>
      <th>阿根廷</th>
      <td>2.582710e+05</td>
      <td>7.273276</td>
    </tr>
    <tr>
      <th>韩国</th>
      <td>8.761080e+06</td>
      <td>6.362990</td>
    </tr>
  </tbody>
</table>
</div>

