---
title: HTML
titleTemplate: 前端笔记
---


::: danger 所有笔记都是在初学的时候做的，难免不全、有误、深度不够，留个纪念
:::

<br/>

**HTML**<br/>
**HyperText Markup Language**<br/>
**超文本标记语言**

## 1. VSCode 快捷键

-   ctrl+L，选中一整行；
-   alt+鼠标左键，多选几处位置；
-   !+enter 或!+tab，快速生成标准格式；
-   lorem，自动生成一段英文；后面加数字指定单词个数；
-   CSS 注释时，前注释中开头写`#region`，后注释中开头写`#endregion`，可以把这段之间的样式折叠

```html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body></body>
</html>
<!-- 分别设置文档声明、语言、编码、移动端、网页标题 -->
<!-- body标签可以添加background标签，指定背景图片 -->
```

## 2. head 标签的配置

```html
<!-- 网页添加图标 -->
<link rel="icon" href="../file/ico/ico1.ico" type="image/x-icon" />

<!-- meta元信息 -->

<!-- 配置字符编码 -->
<meta charset="UTF-8" />
<!-- 针对IE浏览器的兼容性配置 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!-- 针对移动端的配置 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- 配置网页关键字，搜索引擎检索到 -->
<meta name="keywords" content="8-12个以英文逗号隔开的单词/词语" />
<!-- 配置网页描述信息，搜索引擎检索到 -->
<meta name="description" conten="描述" />
<!-- 针对搜索引擎爬虫的配置 -->
<meta name="robots" content="此处可选值见下" />
<!-- index允许爬虫索引此页面，noindex不允许；
follow允许爬虫跟随此页面上的链接，nofollow不允许； -->
<!-- 配置网页作者 -->
<meta name="author" content="tony" />
<!-- 配置网页生成工具 -->
<meta name="generator" content="Visual Studio Code" />
<!-- 配置网页自动跳转 -->
<!-- 10秒后跳转百度 -->
<meta http-equiv="refresh" content="10;url=http://www.baidu.com" />
<!-- 10秒后自动刷新 -->
<meta http-equiv="refresh" content="10" />
```

## 3. VSCode 快速写标签

```html
<!-- 标签名；
[class="c1" id="i1"]里面是属性；
{文本}里面是双标签的文本；
*3前面的标签复制三遍；
$，与*n对应，$的位置从1开始一直到n
()，小括号内的优先级高；
写完鼠标放到最后+enter执行 -->

<!-- ol>[id=ol$]{第$个}*3+(ul>li*3)>(ul>li*3>a)>li -->
<ol>
    <li id="ol1">第1个</li>
    <li id="ol2">第2个</li>
    <li id="ol3">第3个</li>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
    </ul>
    <li></li>
</ol>

<!-- div.a#b -->
<div class="a" id="b"></div>
<!-- div.left+div.right -->
<div class="left"></div>
<div class="right"></div>
<!-- 写CSS属性时，可以简写，h100 -> height: 100px;等等 -->
```

## 4. 排版标签

```html
<!-- 相当于markdown中的# 到####.##.  .-->
<h1>我是1级标题</h1>
<h2>我是2级标题</h2>
<h3>我是3级标题</h3>
<h4>我是4级标题</h4>
<h5>我是5级标题</h5>
<h6>我是6级标题</h6>

<!-- p里面不能有h1-h6、p、div -->
<p>段落标签</p>
<div>无语义</div>

<!-- 一个英文字母大小空格 -->
&nbsp;
<!-- 一个汉字大小空格 -->
&emsp;
<!-- 换行 -->
<br />
<!-- 行分割线 -->
<hr />
<!-- 代码块 -->
<code>from selenium.webdriver import Chrome</code>
<!-- 按原文显示 -->
<pre>
a    b     c
        d    e
           f               aks</pre
>
```

<pre>a    b     c
        d    e
           f               aks</pre>

## 5. 文本修饰标签

```html
<!-- 文本修饰标签 -->
<b>只加粗</b>
<strong>加粗，强调，盲人阅读器会重读</strong>
<i>只倾斜</i>
<em>倾斜，强调</em>
<s>删除线，推荐使用</s>
<del>删除线</del>
<u>u标签，下划线</u>
<sup>上角标文本</sup>
<sub>下角标文本</sub>
CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub>、30<sup>°</sup>
```

<b>只加粗</b>
<strong>加粗，强调，盲人阅读器会重读</strong>
<i>只倾斜</i>
<em>倾斜，强调</em>
<s>删除线，推荐使用</s>
<del>删除线</del>
<u>u 标签，下划线</u>
<sup>上角标文本</sup>
<sub>下角标文本</sub>
CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub>、30<sup>°</sup>

## 6. 超链接/锚点

```html
<!-- href链接（网页、文件路径、邮箱、电话、短信、锚点、JS代码等）
target打开方式（_blank新页面，_self本页面）
a标签中间的文本是显示内容 -->
<!-- a里面可以放除了a以外的任何标签 -->

<a href="https://www.baidu.com" target="_blank">百度</a>
<a href="../file/pic/p7.jpg" target="_blank">图片</a>

<!-- 对于文件，浏览器能打开则打开，打不开则下载
也可以指定属性download="xxx.abc"所有文件都强制下载 -->

<!-- 唤起应用  -->
<a href="tel:9999">电话联系</a>
<a href="mailto:1952620883@qq.com">邮件联系</a>
<a href="sms:9999">短信联系</a>
<!-- 锚点，页面内跳转，导航栏，回到顶部 -->
<!-- 要跳转到的标签加属性id="xxx"，a标签href="#xxx" -->

<!-- 执行js代码 -->
<a href="javascript:alert('唤起了')">唤起alert</a>
```

## 7. 图片及图片热点链接

```html
<!-- 上级路径../，同级直接写或./，下级直接写 -->

<!-- src路径（绝对、相对、网络），
alt提示文本（加载失败时显示），
width宽，height高，
title鼠标悬停时显示文本，border边框宽度，
vspace、hspace图片距上面和左边的距离 -->
<img src="../file/pic/p4.jpg" alt="猫" width="300px" height="500px" border="2px" />

<!-- 图片热点链接，点不同位置跳转不同链接 -->
<!-- map双标签，加属性name="map1"；
里面定义area标签，每个area标签有shape形状，coords坐标，alt提示文本，href，target；
shape取default所有区域，rect矩形，circle圆形，poly多边形；
coords和shape配合使用；
circle的coords格式为"x,y,r"；
rect为"x1,y1,x3,y3"，对角点；
ploy为"x1,y1,x2,y2,...xn,yn"； -->
<!-- img标签设置属性usemap="#map1"，和map联系起来； -->
<img src="../file/pic/p7.jpg" alt="pet" usemap="#map1" width="400px" height="400px" />
<map name="map1">
    <area shape="rect" title="百度" coords="0,0,200,200" href="https://www.baidu.com" alt="百度" target="_blank" />
    <area shape="rect" title="淘宝" coords="200,0,400,200" href="https://www.taobao.com/" alt="淘宝" target="_blank" />
    <area shape="rect" title="网易" coords="0,200,200,400" href="https://www.163.com/" alt="网易" target="_blank" />
    <area shape="rect" title="京东" coords="200,200,400,400" href="https://www.jd.com/" alt="京东" target="_blank" />
</map>
```

## 8. 有序/无序/自定义列表

-   都可以嵌套/互相嵌套

```html
<!-- 有序列表ol双标签 -->
<!-- ol嵌套li；
ol属性有start="2"表示起始序号；
type=""表示序号类型，有A、a、I、i、1，英文字母、罗马字母、数字 -->

<!-- 无序列表ul双标签 -->
<!-- ul嵌套li；
type前面标识的类型disc默认实心圆，circle空心圆，none无，square实心方框； -->

<!-- 自定义列表dl -->
<dl>
    <dt>帮助中心</dt>
    <dd>账户管理</dd>
    <dd>订单指南</dd>
    <dd>订单操作</dd>
</dl>
```

<dl>
    <dt>帮助中心</dt>
    <dd>账户管理</dd>
    <dd>订单指南</dd>
    <dd
    >订单操作</dd>
</dl>

## 9. 表格

```html
<!-- table，表格；
caption，表格标题，在table内；
thead，表格头部，内有th；
tbody，表格主体，内有tr,td；
tfoot，表格脚注，内有td； -->

<!-- 属性： -->
<!-- table：width、height、border边框宽度、cellspacing单元格间距、
cellpadding单元格与文字间距、align表格水平对齐方式、bgcolor背景颜色、
bordercolor边框颜色； -->
<!-- thead：height、align内文字水平对齐方式（left、center、right）、
valign内文字垂直对齐方式（top、middle、bottom）； -->
<!-- tbody、tr、tfoot：同thead； -->
<!-- td：width、height、align、valign、rowspan跨行数、colspan跨列数； -->
<!-- th：同td，默认文字居中加粗； -->

<!-- 跨行和跨列时要把位置被占的标签删了 -->

<!-- 行分组，thead、tbody、tfoot，一个表格只有一个thead和tfoot，可以有多个tbody； -->
<!-- 列分组，colorgroup双标签嵌套col标签，指定属性span=""要分组的列数，可以一起设置属性 -->

<table width="600px" height="400px" align="center" "0" border="2px" bordercolor="green">
    <caption><b>课程表</b></caption>
    <colgroup>
        <col span="1" style="background-color:red">
        <col span="5" style="background-image: url(../file/pic/s2.jpg);">
        <col span="2" style="background-color: pink;">
    </colgroup>
    <thead>
        <th>项目</th>
        <th colspan="5">上课</th>
        <th colspan=2>活动与休息</th>
    </thead>
    <tbody>
        <tr align="center">
            <td>星期</td>
            <td>星期一</td>
            <td>星期二</td>
            <td>星期三</td>
            <td>星期四</td>
            <td>星期五</td>
            <td>星期六</td>
            <td>星期日</td>
        </tr>
        <tr align="center">
            <td rowspan="4">上午</td>
            <td>语文</td>
            <td>数学</td>
            <td>英语</td>
            <td>英语</td>
            <td>物理</td>
            <td>数学竞赛</td>
            <td rowspan="4">休息</td>
        </tr>
        <tr align="center">
            <td>数学</td>
            <td>语文</td>
            <td>化学</td>
            <td>物理</td>
            <td>英语</td>
            <td>篮球比赛</td>
        </tr>
        <tr align="center">
            <td>化学</td>
            <td>语文</td>
            <td>体育</td>
            <td>历史</td>
            <td>地理</td>
            <td>每周一考</td>
        </tr>
        <tr align="center">
            <td>体育</td>
            <td>化学</td>
            <td>语文</td>
            <td>数学</td>
            <td>英语</td>
            <td>社会实践</td>
        </tr>
        <tr align="center">
            <td rowspan="2">下午</td>
            <td>语文</td>
            <td>英语</td>
            <td>数学</td>
            <td>物理</td>
            <td>数学</td>
            <td>英语角</td>
            <td rowspan="2">休息</td>
        </tr>
        <tr align="center">
            <td>化学</td>
            <td>物理</td>
            <td>地理</td>
            <td>生物</td>
            <td>体育</td>
            <td>自由活动</td>
        </tr>
    </tbody>
</table>
```

<table width="600px" height="400px" align="center" border="2px" bordercolor="green">
        <caption><b>课程表</b></caption>
        <colgroup>
            <col span="1" style="background-color:red">
            <col span="5" style="background-image: url(../file/pic/s2.jpg);">
            <col span="2" style="background-color: pink;">
        </colgroup>
        <thead>
            <th>项目</th>
            <th colspan="5">上课</th>
            <th colspan=2>活动与休息</th>
        </thead>
        <tbody>
            <tr align="center">
                <td>星期</td>
                <td>星期一</td>
                <td>星期二</td>
                <td>星期三</td>
                <td>星期四</td>
                <td>星期五</td>
                <td>星期六</td>
                <td>星期日</td>
            </tr>
            <tr align="center">
                <td rowspan="4">上午</td>
                <td>语文</td>
                <td>数学</td>
                <td>英语</td>
                <td>英语</td>
                <td>物理</td>
                <td>数学竞赛</td>
                <td rowspan="4">休息</td>
            </tr>
            <tr align="center">
                <td>数学</td>
                <td>语文</td>
                <td>化学</td>
                <td>物理</td>
                <td>英语</td>
                <td>篮球比赛</td>
            </tr>
            <tr align="center">
                <td>化学</td>
                <td>语文</td>
                <td>体育</td>
                <td>历史</td>
                <td>地理</td>
                <td>每周一考</td>
            </tr>
            <tr align="center">
                <td>体育</td>
                <td>化学</td>
                <td>语文</td>
                <td>数学</td>
                <td>英语</td>
                <td>社会实践</td>
            </tr>
            <tr align="center">
                <td rowspan="2">下午</td>
                <td>语文</td>
                <td>英语</td>
                <td>数学</td>
                <td>物理</td>
                <td>数学</td>
                <td>英语角</td>
                <td rowspan="2">休息</td>
            </tr>
            <tr align="center">
                <td>化学</td>
                <td>物理</td>
                <td>地理</td>
                <td>生物</td>
                <td>体育</td>
                <td>自由活动</td>
            </tr>
        </tbody>
    </table>

## 10. 表单

-   form 标签

```html
<!-- form双标签；
属性action指定提交地址，与后端人员沟通确认，也可以是"mailto:xxx@qq.com"；
target提交后如何打开页面，_self、_blank；
method提交方式，get变量和值跟在后面，post不跟； -->

<!-- input输入框单标签 -->
    <!-- 属性type="text"文本框，name获取输入数据的变量名，
    value优先填写的值，maxlength最大可输入长度，size文本框长度；
    placeholder文本框中的提示文字； -->
    <!-- 属性type="password"密码框，其他属性同上； -->
    <!-- 属性type="radio"单选框，多个单选框需要相同name才能绑在一起，达到只能选一个效果，
    不同单选框不同value，提交之后根据value判断选了哪个，checked默认勾选； -->
    <!-- 属性type="checkbox"多选框，name不同，value不同，checked默认勾选； -->
    <!-- 属性type="hidden"隐藏域，指定name和value，用户不可见，提交表单时携带的数据，可防止脚本填写等； -->
    <!-- 属性type="submit"提交按钮，value指定显示文字，
    或button标签指定type="submit"，显示的文字在双标签内写； -->
    <!-- 属性type="reset"重置按钮，重置填写内容，value，
    或button标签指定属性type="reset"； -->
    <!-- 属性type="button"普通按钮，默认有提交功能，value，
    或button标签指定书写type="button"； -->
    <!-- 属性type="image"图像按钮，默认有提交功能，src、width、height； -->
    <!-- 属性type="file"文件框，accept属性设置文件类别（后缀，可省），multiple可上传多个文件
    size文件上传框的宽度； -->
    <!-- 属性type="url"网址输入框，max最大值、min最小值、step数字间隔、value、name、size；不为时验证网址，和required搭配使用-->
    <!-- 属性type="email"邮箱输入框；输入不为空时验证@xxxxxxx，和required搭配使用 -->
    <!-- 属性type="date"年月日、"month"年月、"week"年周、"time"、"datetime-local"各种时间； -->
    <!-- 属性type="number"数字，min、max、step、value初始值； -->
    <!-- 属性type="range"滑条，min、max、step、value初始值； -->
    <!-- 属性type="search"搜索，右边有个×，快速清除 -->
    <!-- 属性type="tel"电话，移动端 -->
    <!-- 属性ype="color"颜色，name获取十六进制的颜色 -->

<!-- textarea双标签多行文本，name=变量名获取填写文本，rows=行数，cols=列数，placeholder文本框中的提示文字； -->

<!-- select双标签下拉选择框，name指定变量获取选择的值，multiple指定这是多选（ctrl+鼠标左键多选），size显示选项数； -->
    <!-- 内含多个option双标签，之间写显示的文本，value为name获取的值，selected预先选择； -->

<!-- 属性disabled禁用该控件 -->
<!-- 属性readonly只读 -->
<!-- 属性autofocus自动获取焦点，多了只有第一个获取焦点 -->
<!-- 属性autocomplete="on"或"off"
    文本框开启之后，提交一次之后，再提交显示提示框
    浏览器要打开保存并填写地址设置
    不能用于密码和多行-->
<!-- 属性required必填项 -->
    <!-- 多选写required时这项必须选；
    单选中一个选项写required，从所有的选一个就行 -->
<!-- 属性pattern输入不为空时匹配所填值，正则表达式，不能匹配textarea
一般和required一起使用 -->

<!-- 表单分组：
fieldset标签包裹一些标签分成一组，
内legend标签指定这组的组名； -->

<!-- 用label标签包裹文本，加属性for="i1"，其中i1是控件的id，
这样点该文本时该控件也会获得焦点；
或者把文本和控件整体用label标签包裹，也行，不过不适合中间有其他元素； -->

<!-- form属性"novalidate"，所有标签都不校验了 -->

<form action="mailto:1952620883@qq.com">
        <p>感谢您对社区疫情流调工作的配合！</p>
        <fieldset>
            <legend>基本信息</legend>
            <label for="name"><b>1. 姓名：</b></label>
            <input type="text" id="name" name="xingming" placeholder="输入姓名" required>
            <br>
            <b>2. 性别：</b>
            <label><input type="radio" name="gender" value="male" required>男</label>
            <label><input type="radio" name="gender" value="female" required>女</label>
            <br>
            <label>
                <b>3. 出生日期：</b>
                <input type="date" name="birth-date" required>
            </label>
            <br>
            <b>4. 家庭住址：</b>
            <select name="dis">
                <option value="fir-dis">一区</option>
                <option value="sec-dis">二区</option>
                <option value="thi-dis">三区</option>
            </select>
            <select name="building">
                <option value="fir-b">一栋</option>
                <option value="sec-b">二栋</option>
                <option value="thi-b">三栋</option>
                <option value="fou-b">四栋</option>
            </select>
        </fieldset>
        <fieldset>
            <legend>健康信息</legend>
            <label>
                <b>5. 您现在的身体状况：</b>
                <input type="radio" name="health-status" value="healthy">健康
                <input type="radio" name="health-status" value="fever">发热
                <input type="radio" name="health-status" value="server">严重症状
            <br>
            <b>6. 您的健康码颜色目前是：</b>
            <input type="radio" name="healthy-code" value="green">绿色
            <input type="radio" name="healthy-code" value="yellow">黄色
            <input type="radio" name="healthy-code" value="red">红色
            <br>
            <b>7. 疫苗接种情况：</b>
            <input type="radio" name="vaccine" value="0">未接种
            <input type="radio" name="vaccine" value="1">已接种一针
            <input type="radio" name="vaccine" value="2">已接种二针
            <input type="radio" name="vaccine" value="3">已接种三针
            <br>
            <label>
                <b>8. 对社区疫情防控的建议：</b>
                <textarea name="suggestion"cols="30" rows="10"></textarea>
            </label>
            <br>
            <label>
                <b>9. 防人机验证，请选中此框</b>
                <input type="checkbox" required>
            </label>
        </fieldset>
        <input type="submit" value="上传信息">
        <input type="reset" value="清空信息">
    </form>
```

<form action="mailto:1952620883@qq.com">
        <p>感谢您对社区疫情流调工作的配合！</p>
        <fieldset>
            <legend>基本信息</legend>
            <label for="name"><b>1. 姓名：</b></label>
            <input type="text" id="name" name="xingming" placeholder="输入姓名" required>
            <br>
            <b>2. 性别：</b>
            <label><input type="radio" name="gender" value="male" required>男</label>
            <label><input type="radio" name="gender" value="female" required>女</label>
            <br>
            <label>
                <b>3. 出生日期：</b>
                <input type="date" name="birth-date" required>
            </label>
            <br>
            <b>4. 家庭住址：</b>
            <select name="dis">
                <option value="fir-dis">一区</option>
                <option value="sec-dis">二区</option>
                <option value="thi-dis">三区</option>
            </select>
            <select name="building">
                <option value="fir-b">一栋</option>
                <option value="sec-b">二栋</option>
                <option value="thi-b">三栋</option>
                <option value="fou-b">四栋</option>
            </select>  
        </fieldset>
        <fieldset>
            <legend>健康信息</legend>
            <label>
                <b>5. 您现在的身体状况：</b>
                <input type="radio" name="health-status" value="healthy">健康
                <input type="radio" name="health-status" value="fever">发热
                <input type="radio" name="health-status" value="server">严重症状
            </label>
            <br>
            <b>6. 您的健康码颜色目前是：</b>
            <input type="radio" name="healthy-code" value="green">绿色
            <input type="radio" name="healthy-code" value="yellow">黄色
            <input type="radio" name="healthy-code" value="red">红色
            <br>
            <b>7. 疫苗接种情况：</b>
            <input type="radio" name="vaccine" value="0">未接种
            <input type="radio" name="vaccine" value="1">已接种一针
            <input type="radio" name="vaccine" value="2">已接种二针
            <input type="radio" name="vaccine" value="3">已接种三针
            <br>
            <label>
                <b>8. 对社区疫情防控的建议：</b>
                <textarea name="suggestion"cols="30" rows="10"></textarea>
            </label>
            <br>
            <label>
                <b>9. 防人机验证，请选中此框</b>
                <input type="checkbox" required>
            </label>
        </fieldset>
        <input type="submit" value="上传信息">
        <input type="reset" value="清空信息">
    </form>

## 11. iframe 框架标签

-   在网页中嵌入另一个网页/...，用于广告等

```html
<!-- iframe双标签，属性有name（与a/form的target属性配合，他们的结果在iframe中打开）；
width、height、frameborder是否显示边框（0、1）；
scrolling是否显示滚动条（auto默认需要时才显示，yes始终，no从不）； -->

<iframe src="https://sges.sysu.edu.cn" frameborder="0" scrolling="auto"></iframe>
<br /><br />
<a href="https://sges.sysu.edu.cn" target="iframe1">中山大学测绘科学与技术学院</a>
<iframe name="iframe1"></iframe>
```

<iframe src="https://sges.sysu.edu.cn" frameborder="0" scrolling="auto"></iframe>
<br><br>
<a href="https://sges.sysu.edu.cn" target="iframe1">中山大学测绘科学与技术学院</a>
<iframe name="iframe1"></iframe>

## 12. 网页中的多媒体

-   iframe 这三种都可以用
-   音频 audio
-   视频 video
-   pdf embed（不常用了）

```html
<!-- 音视频只能播放一个，依次播放要用到JS； -->

<!-- 音频 -->
<!-- 属性：src路径、controls显示控件（不写的话啥也看不见）、
loop循环播放、autoplay自动播放、muted静音、
preload预加载（none、metadata、auto）、
audio内可以有多个source标签，属性src，万一不支持可换下一个试试；
如果都不支持则输出audio双标签内的文本；
CSS设置宽度，边框等 -->

<!-- 视频 -->
<!-- 属性：src、controls、loop、preload预加载（none不预加载、metadata、auto）、muted静音、
poster="../..."封面（确保和视频大小一致）或未响应或缓冲时显示的图像、
autoplay自动播放（有的网页媒体参与度低时静音时才能自动播放，防广告） -->

<!-- pdf -->
<!-- width、height、src -->
```

## 13. HTML 实体

```html
<!-- 英文一个字符位置 -->
&nbsp;
<!-- 中文一个字符位置 -->
&emsp;
<!-- 在网页中插入标签，<h1> -->
&lt;h1&gt;
<!-- 在网页中插入& -->
&amp;
<!-- 乘除号 -->
&times; &divide;
<!-- 元 -->
&yen;
<!-- 版权 -->
&copy;
```

&lt;h1&gt;
&amp;
&times;
&divide;
&yen;
&copy;

## 14. HTML 全局属性

-   id
-   class
-   style
-   dir，内容的方向，值 ltr、rtl，左向右、右向左
    -   做全局属性时设置位置；
    -   做 bdo 标签的属性时设置方向；
-   title
-   lang，单独设置语言
    ```html
    <p dir="ltr">你是年少的欢喜</p>
    <p dir="rtl">你是年少的欢喜</p>
    <br /><br />
    <bdo dir="ltr">你是年少的欢喜</bdo>
    <bdo dir="rtl">你是年少的欢喜</bdo>
    ```
      <p dir="ltr">你是年少的欢喜</p>
      <p dir="rtl">你是年少的欢喜</p>
      <br><br>
      <bdo dir="ltr">你是年少的欢喜</bdo>
      <bdo dir="rtl">你是年少的欢喜</bdo>

## 15. SVG

-   Scalable Vector Graphics 可缩放矢量图
-   基于形状描述，不会失真
-   双标签
-   属性 width、height

    ```html
    <!-- 矩形 -->
    <!-- rect标签，
        属性：x、y、width、height、
        fill填充颜色、fill-opacity填充不透明度、
        stroke边框颜色、stroke-width边框宽度、
        stroke-opacity边框不透明度、
        opacity总不透明度 -->
    <!-- 圆角矩形 -->
    <!-- 矩形加属性rx、ry，表示拐角处x、y方向半径 -->
    <!-- 圆 -->
    <!-- circle标签，
        属性cx、cy圆心坐标、r、
        fill、fill-opacity、
        stroke、stroke-width、
        stroke-opacity、
        opacity -->
    <!-- 椭圆 -->
    <!-- ellipse标签，
        属性cx、cy、rx、ry、
        fill、fill-opacity、
        stroke、stroke-width、
        stroke-opacity、
        opacity -->
    <svg width="400" height="300">
        <rect x="100" y="100" width="300" height="100" fill="blue" stroke-width="3" stroke="red" fill-opacity="0.4" />
    </svg>
    <br />
    <svg width="400" height="180" opacity="0.5">
        <rect x="50" y="20" width="150" height="150" fill="tomato" stroke-width="5" stroke="black" rx="20" ry="20" />
    </svg>
    <br />
    <svg width="100" height="100" opacity="0.7">
        <circle cx="50" cy="50" r="40" stroke="black" fill="green" stroke-width="4" />
    </svg>
    <br />
    <svg width="500" height="140">
        <ellipse cx="200" cy="80" rx="100" ry="50" fill="yellow" opacity="0.6" stroke="10" />
    </svg>
    ```

      <svg width="400" height="300">
          <rect x="100" y="100" width="300" height="100" fill="blue" stroke-width="3" stroke="red" fill-opacity="0.4" />
      </svg>
      <br>
      <svg width="400" height="180" opacity="0.5">
          <rect x="50" y="20" width="150" height="150" fill="tomato" stroke-width="5" stroke="black" rx="20" ry="20" />
      </svg>
      <br>
      <svg width="100" height="100" opacity="0.7">
          <circle cx="50" cy="50" r="40" stroke="black" fill="green" stroke-width="4"/>
      </svg>
      <br>
      <svg width="500" height="140">
          <ellipse cx="200" cy="80" rx="100" ry="50" fill="yellow" opacity="0.6"
          stroke="10"/>
      </svg>

    ```html
    <!-- 线条 -->
    <!-- line标签，
        属性x1、y1、x2、y2、stroke... -->
    <!-- 多边形 -->
    <!-- polygon标签，
        顺序points="x1,y2 x2,y2 ...xn,yn"，stroke... -->
    <!-- 折线 -->
    <!-- polyline标签，
        属性points=""... -->
    <!-- 文本 -->
    <!-- text标签，
        属性x、y、transform="rotate(30,20,40)"旋转角度和中心点坐标、fill...
        text标签设置统一格式，内含多个tspan标签可设置各自的格式；
        a标签把text标签包起来，链接； -->
    <svg width="500" height="210">
        <line x1="0" y1="0" x2="200" y2="200" stroke="red" stroke-width="2" />
    </svg>
    <svg width="500" height="210">
        <polygon points="200,20 250,190 160,210 120,123 12,133 74,20" fill="red" stroke="blue" stroke-width="10" fill-opacity="0.5" />
    </svg>
    <br />
    <svg width="200" height="200">
        <polyline points="20,20 40,25 60,40 80,120 120,140 200,180" stroke="orange" stroke-width="5" fill="none" />
    </svg>
    <br />
    <svg width="300" height="50">
        <text x="0" y="15" fill="red" transform="rotate(30 20,40)">
            四个字!
            <tspan x="0" y="30">1111</tspan>
            <tspan x="0" y="45">2222</tspan>
        </text>
    </svg>
    <svg width="200" height="30">
        <a href="https://www.baidu.com" target="_blank">
            <text x="10" y="15" fill="red">点击打开新页面！</text>
        </a>
    </svg>
    ```

      <svg width="500" height="210">
          <line x1="0" y1="0" x2="200" y2="200" stroke="red" stroke-width="2"/>
      </svg>
      <svg width="500" height="210">
          <polygon points="200,20 250,190 160,210 120,123 12,133 74,20"
          fill="red" stroke="blue" stroke-width="10" fill-opacity="0.5"/>
      </svg>
      <br>
      <svg width="200" height="200">
          <polyline points="20,20 40,25 60,40 80,120 120,140 200,180"
          stroke="orange" stroke-width="5" fill="none"/>
      </svg>
      <br>
      <svg width="300" height="50">
          <text x="0" y="15" fill="red" transform="rotate(30 20,40)">四个字!
              <tspan x="0" y="30">1111</tspan>
              <tspan x="0" y="45">2222</tspan>
          </text>
      </svg>
      <svg width="200" height="30">
          <a href="https://www.baidu.com" target="_blank">
              <text x="10" y="15" fill="red">点击打开新页面！</text>
          </a>
      </svg>

    ```html
    <!-- 路径 -->
    <!-- path标签，
        属性d包含常用命令：
            M，moveto，d="M 150 0"表示移动到(150,0)；
            L，lineto，d="l 175 200"表示绘制路径；
            q，贝塞尔取消，d="q 150 -300 300 0"控制点和终点坐标；
            M和L大写表示相对左上角的坐标，小写表示相对上一个点的坐标；
            可以先M后多加几个l连续绘制； -->
    <!-- 属性有：stroke、stroke-width、
        stroke-linecap（butt么有线帽、round圆形线帽、square方形线帽）、
        stroke-dasharray创建虚线（定义线条和空隙的大小，值是一组数，
        按照这组数循环形成虚线，至少两个数字） -->
    <!-- g标签包裹多个绘图元素，可设置公共属性； -->
    <svg width="450" height="400">
        <path d="M 100 350 l 150 -300" stroke="red" stroke-width="3" fill="none" />
        <path d="M 250 50 l 150 300" stroke="red" stroke-width="3" fill="none" />
        <path d="M 175 200 l 150 0" stroke="green" stroke-width="3" fill="none" />
        <path d="M 100 350 q 150 -300 300 0" stroke="blue" stroke-width="5" fill="none" />
        <g fill="red">
            <circle cx="100" cy="350" r="3" />
            <circle cx="250" cy="50" r="3" />
            <circle cx="400" cy="350" r="3" />
        </g>
        <g font-size="30" fill="black" text-anchor="middle">
            <text x="100" y="350" dx="-30">A</text>
            <text x="250" y="50" dx="-30">B</text>
            <text x="400" y="350" dx="-30">C</text>
        </g>
        <path d="M 10 10 L 10 400" stroke="green" stroke-width="4" stroke-dasharray="20,10,5,5,5,10" />
        <path d="M 40 10 L 40 400" stroke="green" stroke-width="10" stroke-linecap="round" />
        <path d="M 10 50 l 100 100" stroke="red" stroke-width="5"></path>
    </svg>
    ```

      <svg width="450" height="400">
          <path d="M 100 350 l 150 -300" stroke="red" stroke-width="3"
          fill="none"/>
          <path d="M 250 50 l 150 300" stroke="red" stroke-width="3"
          fill="none"/>
          <path d="M 175 200 l 150 0" stroke="green" stroke-width="3"
          fill="none"/>
          <path d="M 100 350 q 150 -300 300 0" stroke="blue" stroke-width="5"
          fill="none"/>
          <g fill="red">
              <circle cx="100" cy="350" r="3"/>
              <circle cx="250" cy="50" r="3"/>
              <circle cx="400" cy="350" r="3"/>
          </g>
          <g font-size="30" fill="black" text-anchor="middle">
              <text x="100" y="350" dx="-30">A</text>
              <text x="250" y="50" dx="-30">B</text>
              <text x="400" y="350" dx="-30">C</text>
          </g>
          <path d="M 10 10 L 10 400" stroke="green" stroke-width="4" stroke-dasharray="20,10,5,5,5,10"/>
          <path d="M 40 10 L 40 400" stroke="green" stroke-width="10" stroke-linecap="round"/>
          <path d="M 10 50 l 100 100" stroke="red" stroke-width="5"></path>
      </svg>

    ```html
    <!-- 模糊、阴影、线性渐变、径向渐变 -->
    <!-- defs双标签内-->

    <!-- 定义filter标签，里面包含一个或多个效果滤镜标签，filter加id属性，绘图元素通过调用id使用效果；  -->
    <!-- 模糊 -->
    <!-- feGaussianBlur双标签，高斯滤波，属性stdDeviation=""模糊程度 -->
    <!-- 阴影 -->
    <!-- feOffset标签，属性dx、dy阴影偏移，
                in=""阴影来源（SourceAlpha黑色阴影、SourceGraphic原图像阴影）， -->
    <!-- feBlend标签，偏移图像上混合原图像，属性in="SourceGraphic" -->

    <!-- linearGradient标签线性渐变，加id -->
    <!-- 属性x1、y1、x2、y2定义渐变起止点的坐标； -->
    <!-- 其中定义stop标签，属性有offset和stop-color，表示每个渐变点的百分比位置和颜色； -->
    <!-- radialGradient标签径向渐变，加id -->
    <!-- 属性id、cx、cy外圆、r渐变半径、fx、fy内圆， -->
    <!-- 其重点以stop标签，同上 -->

    <!-- 绘图元素用法，fill="url(#id值)" -->

    <svg width="110" height="110">
        <defs>
            <filter x="0" y="0" id="f1">
                <feGaussianBlur stdDeviation="15" />
            </filter>
        </defs>
        <rect filter="url(#f1)" width="90" height="90" fill="yellow" stroke="green" stroke-width="3" />
    </svg>
    <br />
    <svg width="140" height="140">
        <defs>
            <filter x="0" y="0" width="200" height="200" id="f2">
                <feOffset in="SourceAlpha" dx="20" dy="20" />
                <feGaussianBlur stdDeviation="10" />
                <feBlend in="SourceGraphic" />
            </filter>
        </defs>
        <rect filter="url(#f2)" width="90" height="90" stroke="green" stroke-width="3" fill="yellow" />
    </svg>
    <br />
    <svg width="400" height="300">
        <defs>
            <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id="grad1">
                <stop offset="0%" stop-color="rgb(255,0,0)" />
                <stop offset="50%" stop-color="rgb(0,255,0)" />
                <stop offset="100%" stop-color="rgb(0,0,255)" />
            </linearGradient>
        </defs>
        <ellipse fill="url(#grad1)" cx="200" cy="70" rx="85" ry="55" />
        <text fill="url(#grad1)" font-size="45" x="200" y="200">SVG</text>
    </svg>
    <br />
    <svg width="500" height="150">
        <defs>
            <radialGradient cx="30%" cy="30%" fx="30%" fy="30%" id="grad2">
                <stop offset="0%" stop-color="white" />
                <stop offset="100%" stop-color="blue" />
            </radialGradient>
        </defs>
        <ellipse fill="url(#grad2)" cx="200" cy="70" rx="85" ry="55" />
    </svg>
    ```

      <svg width="110" height="110">
          <defs>
              <filter x="0" y="0" id="f1">
                  <feGaussianBlur stdDeviation="15"/>
              </filter>
          </defs>
              <rect filter="url(#f1)" width="90" height="90" fill="yellow"
              stroke="green" stroke-width="3"/>
      </svg>
      <br>
      <svg width="140" height="140">
          <defs>
              <filter x="0" y="0" width="200" height="200" id="f2">
                  <feOffset in="SourceAlpha" dx="20" dy="20"/>
                  <feGaussianBlur stdDeviation="10"/>
                  <feBlend in="SourceGraphic"/>
              </filter>
          </defs>
          <rect filter="url(#f2)" width="90" height="90" stroke="green"
          stroke-width="3" fill="yellow"/>
      </svg>
      <br>
      <svg width="400" height="300">
          <defs>
              <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id="grad1">
                  <stop offset="0%" stop-color="rgb(255,0,0)"/>
                  <stop offset="50%" stop-color="rgb(0,255,0)"/>
                  <stop offset="100%" stop-color="rgb(0,0,255)"/>
              </linearGradient>
          </defs>
          <ellipse fill="url(#grad1)" cx="200" cy="70" rx="85" ry="55"/>
          <text fill="url(#grad1)" font-size="45" x="200" y="200">SVG</text>
      </svg>
      <br>
      <svg width="500" height="150">
          <defs>
              <radialGradient cx="30%" cy="30%" fx="30%" fy="30%" id="grad2">
                  <stop offset="0%" stop-color="white"/>
                  <stop offset="100%" stop-color="blue"/>
              </radialGradient>
          </defs>
          <ellipse fill="url(#grad2)" cx="200" cy="70" rx="85" ry="55"/>
      </svg>
