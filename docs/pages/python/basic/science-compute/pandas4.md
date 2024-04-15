---
title: pandas4
titleTemplate: Python笔记
---

## 2. DataFrame

### 11. 合并数据集

&emsp;&emsp;&emsp;<b>df1.append(df2)</b>竖直方向连接两组数据

&emsp;&emsp;&emsp;<b>pd.merge(left,right,how='inner',on=None,left_on=None,right_on=None)</b>其他参数没列出
<br>&emsp;&emsp;&emsp;&emsp;&emsp;left、right：左右数据
<br>&emsp;&emsp;&emsp;&emsp;&emsp;how：连接方式，默认inner（都有则保留，左有右无则不保留）、outer、left、right
<br>&emsp;&emsp;&emsp;&emsp;&emsp;on：左右数据中相同的一列，用来连接
<br>&emsp;&emsp;&emsp;&emsp;&emsp;left_on、right：如果左右列名不同，需要加，来连接

&emsp;&emsp;&emsp;<b>pd.concat([df1,df2,df3],axis=0)</b>默认axis=0竖直拼接，指定为表示水平拼接，水平按索引拼接、竖直按列名拼接（对不上时没值的地方为NaN）

```python
df_usa=df[df.产地=='美国']
df_china=df[((df.产地=='中国大陆')|(df.产地=='中国香港')|(df.产地=='中国台湾'))]

df_china.append(df_usa)
```

    C:\Users\86188\AppData\Local\Temp\ipykernel_17872\1331672900.py:4: FutureWarning: The frame.append method is deprecated and will be removed from pandas in a future version. Use pandas.concat instead.
      df_china.append(df_usa)
    

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
      <th>4</th>
      <td>4</td>
      <td>霸王别姬</td>
      <td>478523</td>
      <td>剧情/爱情/同性</td>
      <td>中国大陆</td>
      <td>1993-01-01 00:00:00</td>
      <td>171</td>
      <td>1993</td>
      <td>9.400000</td>
      <td>香港</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>21</th>
      <td>21</td>
      <td>大闹天宫</td>
      <td>74881</td>
      <td>动画/奇幻</td>
      <td>中国大陆</td>
      <td>1905-05-14 00:00:00</td>
      <td>114</td>
      <td>1961</td>
      <td>9.200000</td>
      <td>上集</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>29</th>
      <td>29</td>
      <td>穹顶之下</td>
      <td>51113</td>
      <td>纪录片</td>
      <td>中国大陆</td>
      <td>2015-02-28 00:00:00</td>
      <td>104</td>
      <td>2015</td>
      <td>9.200000</td>
      <td>中国大陆</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>38</th>
      <td>38</td>
      <td>茶馆</td>
      <td>10678</td>
      <td>剧情/历史</td>
      <td>中国大陆</td>
      <td>1905-06-04 00:00:00</td>
      <td>118</td>
      <td>1982</td>
      <td>9.200000</td>
      <td>美国</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>45</th>
      <td>45</td>
      <td>山水情</td>
      <td>10781</td>
      <td>动画/短片</td>
      <td>中国大陆</td>
      <td>1905-06-10 00:00:00</td>
      <td>19</td>
      <td>1988</td>
      <td>9.200000</td>
      <td>美国</td>
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
      <td>...</td>
    </tr>
    <tr>
      <th>38149</th>
      <td>38149</td>
      <td>零下的激情</td>
      <td>199</td>
      <td>剧情/爱情/犯罪</td>
      <td>美国</td>
      <td>1987-11-06 00:00:00</td>
      <td>98</td>
      <td>1987</td>
      <td>7.400000</td>
      <td>美国</td>
      <td>B</td>
      <td>D</td>
    </tr>
    <tr>
      <th>38151</th>
      <td>38151</td>
      <td>离别秋波</td>
      <td>240</td>
      <td>剧情/爱情/音乐</td>
      <td>美国</td>
      <td>1986-02-19 00:00:00</td>
      <td>90</td>
      <td>1986</td>
      <td>8.200000</td>
      <td>美国</td>
      <td>B</td>
      <td>C</td>
    </tr>
    <tr>
      <th>38154</th>
      <td>38154</td>
      <td>极乐森林</td>
      <td>45</td>
      <td>纪录片</td>
      <td>美国</td>
      <td>1986-09-14 00:00:00</td>
      <td>90</td>
      <td>1986</td>
      <td>8.100000</td>
      <td>美国</td>
      <td>B</td>
      <td>E</td>
    </tr>
    <tr>
      <th>38156</th>
      <td>38156</td>
      <td>1935年</td>
      <td>57</td>
      <td>喜剧/歌舞</td>
      <td>美国</td>
      <td>1935-03-15 00:00:00</td>
      <td>98</td>
      <td>1935</td>
      <td>7.600000</td>
      <td>美国</td>
      <td>B</td>
      <td>E</td>
    </tr>
    <tr>
      <th>38160</th>
      <td>38160</td>
      <td>复仇者联盟3</td>
      <td>123456</td>
      <td>剧情/科幻</td>
      <td>美国</td>
      <td>2018-05-04 00:00:00</td>
      <td>142</td>
      <td>2018</td>
      <td>6.935704</td>
      <td>美国</td>
      <td>C</td>
      <td>A</td>
    </tr>
  </tbody>
</table>
<p>18968 rows × 12 columns</p>
</div>

```python
df1=df[:5]
df1
df2=df.loc[:5][['名字','产地']]
df2['票房']=[123344,23454,55556,333,6666,444]
df2

df2=df2.sample(frac=1)#打乱数据
df2.index=range(len(df2))#编号调整
df2
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

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>产地</th>
      <th>票房</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>肖申克的救赎</td>
      <td>美国</td>
      <td>123344</td>
    </tr>
    <tr>
      <th>1</th>
      <td>控方证人</td>
      <td>美国</td>
      <td>23454</td>
    </tr>
    <tr>
      <th>2</th>
      <td>美丽人生</td>
      <td>意大利</td>
      <td>55556</td>
    </tr>
    <tr>
      <th>3</th>
      <td>阿甘正传</td>
      <td>美国</td>
      <td>333</td>
    </tr>
    <tr>
      <th>4</th>
      <td>霸王别姬</td>
      <td>中国大陆</td>
      <td>6666</td>
    </tr>
    <tr>
      <th>5</th>
      <td>泰坦尼克号</td>
      <td>美国</td>
      <td>444</td>
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
      <th>产地</th>
      <th>票房</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>肖申克的救赎</td>
      <td>美国</td>
      <td>123344</td>
    </tr>
    <tr>
      <th>1</th>
      <td>霸王别姬</td>
      <td>中国大陆</td>
      <td>6666</td>
    </tr>
    <tr>
      <th>2</th>
      <td>阿甘正传</td>
      <td>美国</td>
      <td>333</td>
    </tr>
    <tr>
      <th>3</th>
      <td>控方证人</td>
      <td>美国</td>
      <td>23454</td>
    </tr>
    <tr>
      <th>4</th>
      <td>泰坦尼克号</td>
      <td>美国</td>
      <td>444</td>
    </tr>
    <tr>
      <th>5</th>
      <td>美丽人生</td>
      <td>意大利</td>
      <td>55556</td>
    </tr>
  </tbody>
</table>
</div>

```python
#合并
#产地都有而且是根据名字连接的，不是根据产地,索引结果中绘有两个产地
pd.merge(df1,df2,how='inner',on='名字')
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
      <th>产地_x</th>
      <th>上映时间</th>
      <th>时长</th>
      <th>年代</th>
      <th>评分</th>
      <th>首映地点</th>
      <th>评分等级</th>
      <th>热门程度</th>
      <th>产地_y</th>
      <th>票房</th>
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
      <td>美国</td>
      <td>123344</td>
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
      <td>美国</td>
      <td>23454</td>
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
      <td>意大利</td>
      <td>55556</td>
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
      <td>美国</td>
      <td>333</td>
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
      <td>中国大陆</td>
      <td>6666</td>
    </tr>
  </tbody>
</table>
</div>

```python
df1=df[:10]
df2=df[100:110]
df3=df[200:210]
pd.concat([df1,df2,df3])
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
    <tr>
      <th>5</th>
      <td>5</td>
      <td>泰坦尼克号</td>
      <td>157074</td>
      <td>剧情/爱情/灾难</td>
      <td>美国</td>
      <td>2012-04-10 00:00:00</td>
      <td>194</td>
      <td>2012</td>
      <td>9.4</td>
      <td>中国大陆</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>6</th>
      <td>6</td>
      <td>辛德勒的名单</td>
      <td>306904</td>
      <td>剧情/历史/战争</td>
      <td>美国</td>
      <td>1993-11-30 00:00:00</td>
      <td>195</td>
      <td>1993</td>
      <td>9.4</td>
      <td>华盛顿首映</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>7</th>
      <td>7</td>
      <td>新世纪福音战士剧场版：Air/真心为你 新世紀エヴァンゲリオン劇場版 Ai</td>
      <td>24355</td>
      <td>剧情/动作/科幻/动画/奇幻</td>
      <td>日本</td>
      <td>1997-07-19 00:00:00</td>
      <td>87</td>
      <td>1997</td>
      <td>9.4</td>
      <td>日本</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>8</th>
      <td>8</td>
      <td>银魂完结篇：直到永远的万事屋 劇場版 銀魂 完結篇 万事屋よ</td>
      <td>21513</td>
      <td>剧情/动画</td>
      <td>日本</td>
      <td>2013-07-06 00:00:00</td>
      <td>110</td>
      <td>2013</td>
      <td>9.4</td>
      <td>日本</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>9</th>
      <td>9</td>
      <td>这个杀手不太冷</td>
      <td>662552</td>
      <td>剧情/动作/犯罪</td>
      <td>法国</td>
      <td>1994-09-14 00:00:00</td>
      <td>133</td>
      <td>1994</td>
      <td>9.4</td>
      <td>法国</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>100</th>
      <td>100</td>
      <td>101</td>
      <td>146</td>
      <td>喜剧/爱情</td>
      <td>韩国</td>
      <td>1993-06-19 00:00:00</td>
      <td>112</td>
      <td>1993</td>
      <td>7.4</td>
      <td>韩国</td>
      <td>B</td>
      <td>D</td>
    </tr>
    <tr>
      <th>101</th>
      <td>101</td>
      <td>10</td>
      <td>186</td>
      <td>喜剧</td>
      <td>英国</td>
      <td>1995-01-25 00:00:00</td>
      <td>101</td>
      <td>1995</td>
      <td>7.4</td>
      <td>美国</td>
      <td>B</td>
      <td>D</td>
    </tr>
    <tr>
      <th>102</th>
      <td>102</td>
      <td>素媛</td>
      <td>114819</td>
      <td>剧情/家庭</td>
      <td>韩国</td>
      <td>2013-10-02 00:00:00</td>
      <td>123</td>
      <td>2013</td>
      <td>9.1</td>
      <td>韩国</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>103</th>
      <td>103</td>
      <td>101忠狗续集：伦敦</td>
      <td>924</td>
      <td>喜剧/动画/家庭</td>
      <td>美国</td>
      <td>2003-01-21 00:00:00</td>
      <td>70</td>
      <td>2003</td>
      <td>7.5</td>
      <td>美国</td>
      <td>B</td>
      <td>B</td>
    </tr>
    <tr>
      <th>104</th>
      <td>104</td>
      <td>10</td>
      <td>9514</td>
      <td>喜剧/家庭</td>
      <td>美国</td>
      <td>2000-09-22 00:00:00</td>
      <td>100</td>
      <td>2000</td>
      <td>7.0</td>
      <td>美国</td>
      <td>C</td>
      <td>A</td>
    </tr>
    <tr>
      <th>105</th>
      <td>105</td>
      <td>10</td>
      <td>601</td>
      <td>剧情</td>
      <td>韩国</td>
      <td>2014-04-24 00:00:00</td>
      <td>93</td>
      <td>2013</td>
      <td>7.2</td>
      <td>美国</td>
      <td>B</td>
      <td>C</td>
    </tr>
    <tr>
      <th>106</th>
      <td>106</td>
      <td>10件或</td>
      <td>1770</td>
      <td>剧情/喜剧/爱情</td>
      <td>美国</td>
      <td>2006-12-01 00:00:00</td>
      <td>82</td>
      <td>2006</td>
      <td>7.7</td>
      <td>美国</td>
      <td>B</td>
      <td>B</td>
    </tr>
    <tr>
      <th>107</th>
      <td>107</td>
      <td>10年</td>
      <td>1531</td>
      <td>喜剧/同性</td>
      <td>美国</td>
      <td>2015-06-02 00:00:00</td>
      <td>90</td>
      <td>2014</td>
      <td>6.9</td>
      <td>美国</td>
      <td>C</td>
      <td>B</td>
    </tr>
    <tr>
      <th>108</th>
      <td>108</td>
      <td>11·25自决之日 三岛由纪夫与年轻人们 11・25自決の</td>
      <td>149</td>
      <td>剧情</td>
      <td>日本</td>
      <td>2012-06-02 00:00:00</td>
      <td>119</td>
      <td>2012</td>
      <td>5.6</td>
      <td>日本</td>
      <td>C</td>
      <td>D</td>
    </tr>
    <tr>
      <th>109</th>
      <td>109</td>
      <td>泰坦尼克号</td>
      <td>535491</td>
      <td>剧情/爱情/灾难</td>
      <td>美国</td>
      <td>1998-04-03 00:00:00</td>
      <td>194</td>
      <td>1997</td>
      <td>9.1</td>
      <td>中国大陆</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>200</th>
      <td>200</td>
      <td>最完美的离婚 2014特别篇</td>
      <td>18478</td>
      <td>剧情/喜剧/爱情</td>
      <td>日本</td>
      <td>2014-02-08 00:00:00</td>
      <td>120</td>
      <td>2014</td>
      <td>9.1</td>
      <td>日本</td>
      <td>A</td>
      <td>A</td>
    </tr>
    <tr>
      <th>201</th>
      <td>201</td>
      <td>2001夜物</td>
      <td>84</td>
      <td>剧情/动画</td>
      <td>日本</td>
      <td>2009-10-02 00:00:00</td>
      <td>80</td>
      <td>2009</td>
      <td>6.6</td>
      <td>美国</td>
      <td>C</td>
      <td>D</td>
    </tr>
    <tr>
      <th>202</th>
      <td>202</td>
      <td>头七 頭</td>
      <td>7039</td>
      <td>恐怖</td>
      <td>中国香港</td>
      <td>2009-05-21 00:00:00</td>
      <td>60</td>
      <td>2009</td>
      <td>6.2</td>
      <td>美国</td>
      <td>C</td>
      <td>A</td>
    </tr>
    <tr>
      <th>203</th>
      <td>203</td>
      <td>火车进站 L</td>
      <td>7001</td>
      <td>纪录片/短片</td>
      <td>法国</td>
      <td>1896-01-06</td>
      <td>60</td>
      <td>1896</td>
      <td>8.8</td>
      <td>法国</td>
      <td>B</td>
      <td>A</td>
    </tr>
    <tr>
      <th>204</th>
      <td>204</td>
      <td>银行舞蹈</td>
      <td>6944</td>
      <td>短片</td>
      <td>美国</td>
      <td>1905-07-01 00:00:00</td>
      <td>60</td>
      <td>2009</td>
      <td>7.8</td>
      <td>美国</td>
      <td>B</td>
      <td>A</td>
    </tr>
    <tr>
      <th>205</th>
      <td>205</td>
      <td>2003提雅</td>
      <td>48</td>
      <td>音乐</td>
      <td>荷兰</td>
      <td>2003-10-07 00:00:00</td>
      <td>200</td>
      <td>2003</td>
      <td>8.9</td>
      <td>美国</td>
      <td>B</td>
      <td>E</td>
    </tr>
    <tr>
      <th>206</th>
      <td>206</td>
      <td>死亡飞车3：地狱烈</td>
      <td>6937</td>
      <td>动作</td>
      <td>美国</td>
      <td>2012-12-12 00:00:00</td>
      <td>60</td>
      <td>2012</td>
      <td>5.8</td>
      <td>美国</td>
      <td>C</td>
      <td>A</td>
    </tr>
    <tr>
      <th>207</th>
      <td>207</td>
      <td>时光钟摆 振り</td>
      <td>6876</td>
      <td>剧情/动画/短片</td>
      <td>日本</td>
      <td>2012-03-20 00:00:00</td>
      <td>60</td>
      <td>2012</td>
      <td>8.7</td>
      <td>美国</td>
      <td>B</td>
      <td>A</td>
    </tr>
    <tr>
      <th>208</th>
      <td>208</td>
      <td>你还可爱么 你還可愛</td>
      <td>6805</td>
      <td>短片</td>
      <td>中国香港</td>
      <td>2011-04-22 00:00:00</td>
      <td>60</td>
      <td>2011</td>
      <td>8.3</td>
      <td>美国</td>
      <td>B</td>
      <td>A</td>
    </tr>
    <tr>
      <th>209</th>
      <td>209</td>
      <td>一碌蔗</td>
      <td>6799</td>
      <td>剧情/喜剧/爱情</td>
      <td>中国香港</td>
      <td>2002-09-19 00:00:00</td>
      <td>60</td>
      <td>2002</td>
      <td>6.7</td>
      <td>美国</td>
      <td>C</td>
      <td>A</td>
    </tr>
  </tbody>
</table>
</div>

```python
df1=df.名字[:10]
df2=df.产地[:10]
df3=df.时长[:10]
df4=df.年代[:10]
dff=pd.concat([df1,df2,df3,df4],axis=1)
dff
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>名字</th>
      <th>产地</th>
      <th>时长</th>
      <th>年代</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>肖申克的救赎</td>
      <td>美国</td>
      <td>142</td>
      <td>1994</td>
    </tr>
    <tr>
      <th>1</th>
      <td>控方证人</td>
      <td>美国</td>
      <td>116</td>
      <td>1957</td>
    </tr>
    <tr>
      <th>2</th>
      <td>美丽人生</td>
      <td>意大利</td>
      <td>116</td>
      <td>1997</td>
    </tr>
    <tr>
      <th>3</th>
      <td>阿甘正传</td>
      <td>美国</td>
      <td>142</td>
      <td>1994</td>
    </tr>
    <tr>
      <th>4</th>
      <td>霸王别姬</td>
      <td>中国大陆</td>
      <td>171</td>
      <td>1993</td>
    </tr>
    <tr>
      <th>5</th>
      <td>泰坦尼克号</td>
      <td>美国</td>
      <td>194</td>
      <td>2012</td>
    </tr>
    <tr>
      <th>6</th>
      <td>辛德勒的名单</td>
      <td>美国</td>
      <td>195</td>
      <td>1993</td>
    </tr>
    <tr>
      <th>7</th>
      <td>新世纪福音战士剧场版：Air/真心为你 新世紀エヴァンゲリオン劇場版 Ai</td>
      <td>日本</td>
      <td>87</td>
      <td>1997</td>
    </tr>
    <tr>
      <th>8</th>
      <td>银魂完结篇：直到永远的万事屋 劇場版 銀魂 完結篇 万事屋よ</td>
      <td>日本</td>
      <td>110</td>
      <td>2013</td>
    </tr>
    <tr>
      <th>9</th>
      <td>这个杀手不太冷</td>
      <td>法国</td>
      <td>133</td>
      <td>1994</td>
    </tr>
  </tbody>
</table>
</div>

### 12.补充
<br>&emsp;&emsp;&emsp;<b>df.评分.transform(np.sqrt)</b>对评分列每个数开方
<br>&emsp;&emsp;&emsp;<b>df.评分.transform([np.sqrt,np.exp,np.square])</b>对评分列每个数开方、取指数、平方
<br>&emsp;&emsp;&emsp;后面也可以时自己写的函数的函数名，让每个元素作为函数的输入，得到返回值

&emsp;&emsp;&emsp;<b>df.transform()</b>默认对每列操作，指定axis=1对每行操作

```python
df=df0.copy()
def fun1(n):
    return 1 if n>8 else -1

df.评分.transform(fun1)
```

    0        1
    1        1
    2        1
    3        1
    4        1
            ..
    38733    1
    38734   -1
    38735   -1
    38736   -1
    38737   -1
    Name: 评分, Length: 38738, dtype: int64

&emsp;&emsp;&emsp;<b>df.info()</b>查看df的信息

```python
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
import pandas as pd
df = pd.DataFrame([1,2,3])
```

&emsp;&emsp;&emsp;<b>df.to_csv('../data/保存数据.csv', mode = 'w', sep = ',', header = True, index = True)</b>保存到csv
<br>&emsp;&emsp;&emsp;&emsp;&emsp;默认header、index为True，保存columns和index，指定为False不保存，可以指定mode='a'或'w'
<br>&emsp;&emsp;&emsp;<b>df=pd.read_csv('../data/保存数据.csv')</b>读取csv
<br>&emsp;&emsp;&emsp;<b>df=pd.read_table('../data/保存数据.csv',sep=',',index_col=0)</b>读取csv
<br>&emsp;&emsp;&emsp;<b>df.to_excel('../data/保存excel.xlsx',sheet_name='Sheet1',header=True,index=True)</b>保存到excel
```python
# 一次写入多个sheet
with pd.ExcelWriter("excel 样例.xlsx") as writer:
    data.to_excel(writer, sheet_name="这是第一个sheet")
    data.to_excel(writer, sheet_name="这是第二个sheet")
    data.to_excel(writer, sheet_name="这是第三个sheet")
```
```python
# 追加
with pd.ExcelWriter("excel 样例.xlsx", mode='a', engine='openpyxl') as writer:
    data.to_excel(writer, sheet_name="这是追加的第1个sheet")
    data.to_excel(writer, sheet_name="这是追加的第2个sheet")
```
<br>&emsp;&emsp;&emsp;<b>df=pd.read_excel('../data/保存excel.xlsx',sheet_name='Sheet1',header=None,names=list('ABCDE'))</b>读取excel

```python
df=pd.DataFrame(np.random.randint(0,21,(5,5)),index=['q','w','e','r','t'],columns=[1,2,3,4,5])
df
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>q</th>
      <td>11</td>
      <td>11</td>
      <td>7</td>
      <td>18</td>
      <td>11</td>
    </tr>
    <tr>
      <th>w</th>
      <td>4</td>
      <td>8</td>
      <td>6</td>
      <td>10</td>
      <td>19</td>
    </tr>
    <tr>
      <th>e</th>
      <td>12</td>
      <td>15</td>
      <td>4</td>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <th>r</th>
      <td>17</td>
      <td>17</td>
      <td>4</td>
      <td>1</td>
      <td>11</td>
    </tr>
    <tr>
      <th>t</th>
      <td>12</td>
      <td>5</td>
      <td>19</td>
      <td>10</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>

```python
df.to_csv('../data/保存数据.csv',sep=',')
df.to_excel('../data/保存excel.xlsx',sheet_name='Sheet1')
```

```python
df=pd.read_csv('../data/保存数据.csv',sep=',',header=None,index_col=0)
df

#默认分隔符是\t
df=pd.read_table('../data/保存数据.csv',sep=',',index_col=0)
df

df=pd.read_excel('../data/保存excel.xlsx',sheet_name='Sheet1',header=None,
                 names=list('ABCDE'))
df
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
    </tr>
    <tr>
      <th>0</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>NaN</th>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <th>q</th>
      <td>11</td>
      <td>11</td>
      <td>7</td>
      <td>18</td>
      <td>11</td>
    </tr>
    <tr>
      <th>w</th>
      <td>4</td>
      <td>8</td>
      <td>6</td>
      <td>10</td>
      <td>19</td>
    </tr>
    <tr>
      <th>e</th>
      <td>12</td>
      <td>15</td>
      <td>4</td>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <th>r</th>
      <td>17</td>
      <td>17</td>
      <td>4</td>
      <td>1</td>
      <td>11</td>
    </tr>
    <tr>
      <th>t</th>
      <td>12</td>
      <td>5</td>
      <td>19</td>
      <td>10</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>q</th>
      <td>11</td>
      <td>11</td>
      <td>7</td>
      <td>18</td>
      <td>11</td>
    </tr>
    <tr>
      <th>w</th>
      <td>4</td>
      <td>8</td>
      <td>6</td>
      <td>10</td>
      <td>19</td>
    </tr>
    <tr>
      <th>e</th>
      <td>12</td>
      <td>15</td>
      <td>4</td>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <th>r</th>
      <td>17</td>
      <td>17</td>
      <td>4</td>
      <td>1</td>
      <td>11</td>
    </tr>
    <tr>
      <th>t</th>
      <td>12</td>
      <td>5</td>
      <td>19</td>
      <td>10</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>

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
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>NaN</th>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <th>q</th>
      <td>11</td>
      <td>11</td>
      <td>7</td>
      <td>18</td>
      <td>11</td>
    </tr>
    <tr>
      <th>w</th>
      <td>4</td>
      <td>8</td>
      <td>6</td>
      <td>10</td>
      <td>19</td>
    </tr>
    <tr>
      <th>e</th>
      <td>12</td>
      <td>15</td>
      <td>4</td>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <th>r</th>
      <td>17</td>
      <td>17</td>
      <td>4</td>
      <td>1</td>
      <td>11</td>
    </tr>
    <tr>
      <th>t</th>
      <td>12</td>
      <td>5</td>
      <td>19</td>
      <td>10</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>

<b>遍历每行</b>
```python
for row_index,row in df.iterrows():
    print(row_index,row)
```

```python
for row_index,row in df.iterrows():
    print(row_index,row)
```

    nan A    1
    B    2
    C    3
    D    4
    E    5
    Name: nan, dtype: int64
    q A    11
    B    11
    C     7
    D    18
    E    11
    Name: q, dtype: int64
    w A     4
    B     8
    C     6
    D    10
    E    19
    Name: w, dtype: int64
    e A    12
    B    15
    C     4
    D     3
    E     1
    Name: e, dtype: int64
    r A    17
    B    17
    C     4
    D     1
    E    11
    Name: r, dtype: int64
    t A    12
    B     5
    C    19
    D    10
    E     3
    Name: t, dtype: int64
    

<b>遍历每列</b>
```python
for column_index,column in iteritems():
    print(column_index,coulmn)
```

```python
for column_index,column in df.iteritems():
    print(column_index,column)
```

    A NaN     1
    q      11
    w       4
    e      12
    r      17
    t      12
    Name: A, dtype: int64
    B NaN     2
    q      11
    w       8
    e      15
    r      17
    t       5
    Name: B, dtype: int64
    C NaN     3
    q       7
    w       6
    e       4
    r       4
    t      19
    Name: C, dtype: int64
    D NaN     4
    q      18
    w      10
    e       3
    r       1
    t      10
    Name: D, dtype: int64
    E NaN     5
    q      11
    w      19
    e       1
    r      11
    t       3
    Name: E, dtype: int64
    

    C:\Users\86188\AppData\Local\Temp\ipykernel_14512\2955837127.py:1: FutureWarning: iteritems is deprecated and will be removed in a future version. Use .items instead.
      for column_index,column in df.iteritems():