---
title: CSS
titleTemplate: 前端笔记
---

**Cascading Style Sheets**
**层叠样式表**

## 1. 样式类型

-   行内/内联样式，style 属性；
-   内部样式，head 标签内写 style 标签，用于设置样式；
-   外部样式，head 标签内用 link 标签导入外部样式
    -   结构样式完全分离；
    -   样式可多页面共用；
    -   可触发浏览器的缓存机制；
    -   代码结构清晰；

```html
<!-- 例如 -->
<link rel="stylesheet" href="./test.css" />
```

## 2. 优先级

-   行内样式优先级最高；
-   内部和外部的优先级取决于谁最后写，覆盖；

## 3. 基本选择器

```css
/* 通配选择器 */
* {
}

/* 元素选择器 */
div {
}

/* 类选择器 */
.c1 {
}

/* ID选择器 */
#id1 {
}
```

## 4. 复合选择器

-   1.4.1 交集、并集选择器

    ```css
    /* 交集选择器 */
    /* 即...又... */
    /* 且 */

    /* 类名为class1的p标签 */
    /* 元素必须在开头 */
    p.class1 {
    }

    /* 直接用id选择器更简单 */
    p.class1#id1 {
    }

    /* 有这两个类名的标签 */
    .class1.class2 {
    }
    ```

      <br>

    ```css
    /* 并集选择器 */
    /* 或 */
    /* 用逗号分开 */
    /* 竖着写或横着写 */
    .rich,
    #beauty,
    .dog {
    }
    ```

    <br>

-   1.4.2 后代、子代、兄弟选择器

    ```css
    /* 后代选择器 */
    /* ul中所有后代li */
    /* 所有层 */
    ul li {
    }
    ul li a {
    }

    #id1 ol .class1 {
    }
    ```

      <br>

    ```css
    /* 子代选择器 */
    /* 儿子节点 */
    ul > li {
    }

    ul.class1 > li a.class {
    }
    ```

      <br>

    ```css
    /* 兄弟选择器 */
    /* 选中div后面紧靠的p，如果没有则不生效 */
    /* 相邻 */
    div + p {
    }

    /* div所有的兄弟p元素 */
    /* 通用 */
    div ~ p {
    }
    ```

    <br>

-   1.4.3 属性选择器

    ```css
    /* 属性选择器 */
    /* 选中有title属性的标元素 */
    [title] {
    }

    /* 选中有title属性且值为title1的元素 */
    [title='title1'] {
    }

    /* 选中有title属性且值以a开头的元素 */
    [title^='a'] {
    }

    /* 选中有title属性且值以b结尾的元素 */
    [title$='b'] {
    }

    /* 选中有title属性且值包含c的元素 */
    [title*='c'] {
    }
    ```

    <br>

-   1.4.4 伪类选择器-动态伪类

    ```css
    /* 伪类选择器-动态伪类 */
    /* 这四个顺序固定，不然会有的不会生效，被覆盖 */
    /* link和visited只有a元素有，hover和active所有元素都有 */

    /* 选中未访问过的a元素 */
    a:link {
    }
    /* 选中访问过的a元素 */
    a:visited {
    }
    /* 鼠标悬浮在a时 */
    a:hover {
    }
    /* 选中激活状态的a元素 */
    a:active {
    }

    span:hover {
    }

    /* 获得焦点选择器，用于输入框、选择框等 */
    input:focus {
    }
    ```

    <br>

-   1.4.5 伪类选择器-结构伪类

    ```css
    /* 选中div的第一个儿子元素且为p元素的元素 */
    /* 如果第一个不是p则没有元素被选中 */
    div > p:first-child {
    }
    /* 选中div的后代p元素，p父标签是谁无所谓，但p必须是其第一个儿子 */
    div p:first-child {
    }
    /* 选中所有作为父标签的第一个儿子的p */
    p:first-child {
    }

    /* 选中div的最后一个儿子元素且为p元素的元素 */
    div > p:last-child {
    }
    /* div的后代元素中，是其父元素的最后一个元素且为p的元素 */
    div p:last-child {
    }

    /* div的儿子元素中第三个且为p的元素 */
    /* (n)、(2n)、(2n+1)、(-n+5)都行，(an+b)形式，前后顺序不能变 */
    div > p:nth-child(3) {
    }
    /* div的后代元素中是其父元素的第三个子元素且为p的元素 */
    div p:nth-child(3) {
    }

    /* div的子元素中，所有同类型兄弟中的第一个p */
    div > p:first-of-type {
    }
    /* 最后一个 */
    div > p:last-of-type {
    }
    div > p:nth-of-type(4) {
    }

    /* 选中html根元素 */
    :root {
    }
    ```

    <br>

-   1.4.6 否定伪类

    ```css
    /* 排除div的儿子元素p中类值不是fail的元素 */
    div > p:not(.fail) {
    }
    /* 排除title属性为t1的其他元素 */
    div > p:not([title='t1']) {
    }
    /* 排除div的儿子元素p中非第一个元素 */
    div > p:not(:first-child) {
    }
    ```

    <br>

-   1.4.7 UI 伪类

    ```css
    /* 选中的单选/复选框 */
    [type='checkbox']:checked {
    }
    /* 选中被禁用的 */
    input:disabled {
    }
    /* 选中可用的 */
    input:enabled {
    }
    ```

    <br>

-   1.4.8 目标伪类

    ```css
    /* 选中锚点所指向的元素 */
    div:target {
    }
    ```

      <br>

    -   1.4.9 语言伪类

    ```css
    /* 选中lang属性为en的div */
    /* 用属性选择器也行 */
    div:lang(en) {
    }
    /* 选中所有lang属性为en的元素 */
    :lang(en) {
    }
    ```

    <br>

-   1.4.9 伪元素选择器

    ```css
    /* div中的第一个字母 */
    div::first-letter {
    }
    /* 首行 */
    div::first-line {
    }
    /* 鼠标选中的 */
    div::selection {
    }
    /* input元素中的提示文字 */
    input::placeholder {
    }
    /* 元素内容之前插入内容 */
    div::before {
        content: '内容';
    }
    /* 元素内容之后插入 */
    div::after {
        content: '内容';
    }
    /* 插入的内容鼠标选不中 */
    ```

    <br>

-   1.4.10 补充
    -   `:has`判断父元素是否含有满足条件的子元素
    -   用于根据子元素设置父元素样式

```css
.container {
    width: 600px;
    height: 600px;
    background-color: red;
    display: flex;
    justify-content: space-evenly;
    align-content: space-evenly;
    flex-wrap: wrap;
}
.container > div {
    width: 190px;
    height: 190px;
    background-color: deepskyblue;
}
.container:has(.box:hover) {
    background-color: green;
}
```

## 5. 选择器优先级

-   给相同元素设置相同样式名不同值发生冲突时，
-   行内样式 > ID 选择器 > 类选择器 > 元素选择器 > 通配选择器
    -   行内样式>(1,0,0)>(0,1,0)>(0,0,1)>(0,0,0)
-   格式(a,b,c)，从 a 到 c 比较，有一个大的就结束，权重相同则后来者居上覆盖
    -   a：ID 选择器个数；
    -   b：类、伪类、属性选择器个数；
    -   元素、伪元素选择器个数；
-   VScode 鼠标放在选择器那，显示权重；
-   属性值后面加`!important;`，比行内优先级也高；

## 6. CSS 三大特性

-   层叠性
-   继承性：元素会自动拥有其父/祖先元素所设置的某些样式
    -   如：text-???、font-???、line-???、color
    -   优先继承离得近的；
-   优先级
    -   继承的样式优先级最低
    -   !important>行内>ID>类>元素>\*>继承的样式
    -   并集选择器的优先级每个分开计算

## 7. 像素与颜色

-   px 像素，cm、mm，后两个太大了不够精细；
-   颜色：
    -   颜色名：red、blue、green、black、white、pink、orange、purple...
    -   rgb(255,0,0)、rgba(0,17,132,0.6)
    -   十六进制 HEX、HEXA：
        -   #C2185B、#1E63C400、#1E63C4ff
        -   后两位指定透明度，00-ff
    -   HSL、HSLA：
        -   hsl(hue, saturation, lightness)
        -   hsl(120,50%,50%)、hsl(120,50%,50%,0.5)
        -   分别表示色相、饱和度、明度

## 8. 常用字体属性

-   1.8.1 字体大小

    ```css
    /* 通常给body设置字体大小，其他元素继承 */
    /* 不是把字完全包进去，大致的区间 */
    /* g、p会向下超出基线 */
    body {
        font-size: 20px;
    }
    .sgg1 {
        font-size: 10px;
    }
    ```

-   1.8.2 字体族

    ```css
    /* 默认微软雅黑 */
    /* 微软雅黑、宋体、华文彩云、华文琥珀... */
    /* 写多个，用逗号分隔，会按顺序找，用找到的第一个 */
    /* 通常在最后写serif衬线分类，或sans-serif非衬线分类 */
    .sgg1 {
        font-family: '华文行楷';
    }
    /* 衬线字体：棱角感 */
    /* 非衬线字体用的多 */
    ```

-   1.8.3 字体风格

    ```css
    /* 可以改i、em标签的内容 */
    /* 正常 */
    .sgg {
        font-style: normal;
    }
    /* 斜体，推荐使用 */
    .sgg1 {
        font-style: italic;
    }
    /* 斜体 */
    .sgg2 {
        font-style: oblique;
    }
    ```

-   1.8.4 字体粗细

    ```css
    /* 100、200、...、900，从细到粗， */
    /* bold=900，bolder更粗，lighter=100
    normal不加粗 */
    /* 可以改h1-h6的粗细 */
    .sgg1 {
        font-weight: 900;
    }
    ```

-   1.8.5 字体复合属性
    ```css
    /* 字体大小必须写，放在倒数第二位 */
    /* 字体族必须写，放在最后一位 */
    /* 不同属性空格隔开 */
    .sgg1 {
        font: italic 900 100px '华文行楷';
    }
    .sgg2 {
        font: 900 100px '华文行楷';
    }
    ```

## 9. 常用文本属性

-   1.9.1 文本颜色

    -   颜色名、RGB、十六进制
    -   `transparent`透明

    ```css
    div {
        color: red;
    }
    ```

-   1.9.2 文本间距

```css
/* 文字/字母的间距 */
/* 负数会挤到一起 */
div {
    letter-spacing: 10px;
}
/* 单词间距 */
/* 根据空格区分 */
.contain {
    word-spacing: 20px;
}
```

-   1.9.3 文本修饰
-   修饰线
    -   overline 上划线、underline 下划线、line-through 中间线、
    -   none 没有线（去掉 a 标签的下划线）
-   指定修饰线之后，可以写线类型和颜色（这两个的顺序随意） - dotted 点线、dashed 虚线、wavy 波浪线

```css
div {
    text-decoration: overline 1px dashed red;
}
```

-   1.9.4 文本缩进

```css
/* 向右缩进 */
div {
    text-indent: 10px;
}
```

-   1.9.5 文本对齐
    水平对齐
    对行内元素、文本、行内块元素生效
    center 中间、left 左侧默认、right 右侧

```css
div {
    text-align: center;
}
```

-   1.9.6 行高

```css
/* 用于行内元素或行内块元素 */
/* line-height要大于字体大小，不然会超出 */
/* 不写的话浏览器会给一个合适的行高 */
/* 值还可以是normal；、数值;（字体大小的多少倍）、百分比;（相对字体大小）*/
/* 数值用的比较多！可以自动调整行高 */
div {
    line-height: 20px;
    line-height: normal;
    line-height: 1.5;
    line-height: 150%;
}

/* 行高过小文字重叠，最小为0 */
/* 一行中高度最高的文字部分作为本行行高 */
/* div不指定高度，则高度等于行高*行数 */
/* 行高的作用：调整多行文字间距、行高=高度时单行文字垂直居中 */
```

-   1.9.7 `vertical-align`
    -   元素在其所在行垂直方向的对齐方式
    -   不能设置块级元素，只能设置**行内元素**
    -   可以给表格中单元格中文字的垂直位置
    -   top
    -   middle
    -   baseline**默认**基线
    -   bottom

```css
span {
    vertical-align: baseline;
}
```

## 10. 列表相关属性

-   `list-style-type`：列表前面的符号
    -   none 没有
    -   square 实心方框、circle 空心圆、disc 实心圆默认、
    -   lower-roman 小写罗马数字、upper-roman 大写罗马数字、
    -   lower-alpha 小写字母、upper-alpha 大写字母、
    -   decimal 数字
-   `list-style-position`：列表符号相对 li 的位置
    -   inside，里面
    -   outside，外面
-   `list-style-image`：自定义列表符号
    -   url("")，注意不要太大
-   `list-style`：复合属性，**和顺序数量无关**
-   对于`li`，`li::marker:{}`设置前面的标记（原点、方框等）

```css
ol > li {
    list-style: none inside;
}
```

## 11. 表格相关属性

-   对 table、th、td：
    -   `width`、`height`
    -   `border-width`：边框宽度
    -   `border-color`：边框颜色
    -   `border-style`：边框样式
        -   （none 默认、solid、dashed、dotted、double）
        -   指定了边框样式才能显示
    -   `border`：复合属性
    -   去掉已有边框`border: 0`
-   **边框相关的属性其他元素也能用**
-   表格独有属性，对 table：
    -   `table-layout`：列宽，auto 自动，fixed 固定（所有列一样宽）
    -   `border-spacing`：单元格间距（等于 cellspacing），具体值，0、1px、2px...
        -   生效的前提是不合并边框
    -   `border-collapse`：合并相邻单元格的边框，默认 separate 不合并，指定 collapse 合并
    -   `empty-cells`：隐藏没有内容的单元格，show、hide
        -   生效的前提是不合并边框
    -   `caption-side`：设置表格标题位置，默认 top，bottom

```css
table,
th,
td,
span {
    border: 2px solid red;
}
table {
    border: 2px solid red;
    width: 400px;
    height: 100px;
    table-layout: fixed;
    border-spacing: 10px;
    border-collapse: collapse;
    empty-cells: hide;
}
```

## 12. 背景相关属性

-   `background-color`：背景颜色，默认 transparent 透明
-   `background-image`：背景图片，url("")
-   `background-repeat`：默认 repeat、no-repeat 不重复、repeat-x、repeat-y
-   `background-position`：背景图片位置，
    -   (left、center、right) 和 (top、center、bottom) 组合
        -   空格分开
        -   只写一个，则另一个方向居中
        -   center center 可以写成 center
    -   具体像素值
        -   10px 20px，表示 x、y 方向
        -   写一个表示 x 方向，y 方向默认居中
-   `background`：复合属性，与顺序数量无关

```css
div {
    width: 400px;
    height: 400px;
    background-color: skyblue;
    border: 5px solid red;
    font-size: 40px;
    background-image: url('./pic/p6.jpg');
    background-repeat: no-repeat;
    background-position: left center;
}
div {
    background: skyblue url('./pic/p6.jpg') no-repeat left center;
}
```

## 13. 鼠标相关属性

-   `cursor`：
    -   pointer，手型
    -   move，拖动
    -   wait，等待
    -   crosshair，十字
    -   help，帮助
    -   not-allowed，不允许
    -   zoom-in，放大镜
    -   自定义图标，url(""),pointer
    -   ......

```css
div {
    cursor: url('./ico/ico2.ico'), pointer;
}
```

## 14. 常用长度单位

-   `px`
-   `em`，
    -   width、height 相对于当前元素的 font-size 倍数
        -   不写 font-size，找父元素的 font-size，没有再找祖先元素
    -   font-size 相对于其父元素的 font-size 倍数
-   `rem`，相对于根元素(html)的 font-size（不写默认 16px）的倍数
-   百分数，
    -   相对于父元素的宽高、font-size
    -   text-indent=2em 相对于 font-size，设置缩进
-   必须加单位，不然失效

## 15. 元素的显示模式

-   块元素，block
    -   独占一行
    -   默认宽度撑满整个父元素
    -   默认高度由内容撑开
    -   可通过 CSS 设置宽高
    -   如：
        -   html、body
        -   h1-h6、hr、p、pre、div
        -   ul、ol、li、dl、dt、dd
        -   table、thead、tbody、tfoot、tr、caption
        -   form、option
-   行内元素，inline
    -   不独占一行
    -   默认宽度由内容撑开
    -   默认高度由内容撑开
    -   无法通过 CSS 设置宽高
    -   如：
        -   br、em、strong、sup、sub、del、ins
        -   a、label
-   行内块元素，inline-block

    -   不独占一行
    -   默认宽度由内容撑开
    -   默认高度由内容撑开
    -   **可以**通过 CSS 设置宽高
    -   如 img 标签
    -   如：
        -   img、td、th、
        -   input、textarea、select、button
        -   iframe

-   修改元素的显示模式
    -   CSS 设置属性`display`
        -   block 块元素
        -   inline-block 行内块元素
        -   inline 行内元素
        -   none 不显示了

## 16. 盒（子）模型

-   CSS 把所有 HTML 元素看成一个盒子
-   1.16.1 组成部分

    -   `width`和`height`是其中文本的宽高
    -   `padding`：内边距
    -   `border`：边框
    -   `margin`：外边距
        -   只影响盒子位置，不影响盒子大小
    -   **盒子大小：content+左右 padding+左右 border**

-   1.16.2 内容区 content
    -   `width`、`height`
    -   `min-width`最小宽度、`max-width`最大宽度
    -   `min-height`最小高度、`max-height`最大高度
-   1.16.3 关于默认宽度
    -   没给 div 宽度默认撑满，设置 margin 时会压缩 div 宽度
-   1.16.4 内边距 padding

    -   `padding`复合属性
        -   `=2px;`，四个内边距一样
        -   `=10px 20px`，上下、左右内边距
        -   `=10px 20px 30px`，上、左右、下内边距
        -   `=10px 20px 30px 20px`，上、右、下、左内边距
    -   `padding-left`、`padding-right`
    -   `padding-top`、`padding-bottom`
    -   行内元素的上下内边距可能会覆盖上下的元素
    -   padding 不能是负值，无效

-   1.16.5 边框 border

    -   `border` -`border-top`、`border-right`、`border-bottom`、`border-left`
    -   `border-width`
        -   `border-top-width`...
    -   `border-color`
        -   `border-top-color`...
    -   `border-style`
        -   `border-top-style`...

    ```css
    div {
        border-top: solid red 2px;
        border-right: dotted green 5px;
        border-bottom: dashed blue 3px;
        border-left: double orange 10px;
    }
    ```

-   1.16.6 外边距 margin

    -   `margin`
        -   `=2px;`、`=auto`，四个外边距一样
        -   `=10px 20px`，上下、左右外边距
        -   `=10px 20px 30px`，上、左右、下外边距
        -   `=10px 20px 30px 20px`，上、右、下、左外边距
    -   `margin-top`、`margin-right`
    -   `margin-bottom`、`margin-left`
    -   子元素 margin 的位置是参考父元素的 content 计算的；
    -   注意：
        -   `margin-top`、`margin-left`会影响自己的位置
        -   `margin-bottom`、`margin-right`会影响下/右面元素的位置
        -   行内元素左右 margin 可以设置，上下的无效
        -   对于块级元素，左右 margin 都设为 auto，在其父元素内**水平居中**
        -   margin 可以是**负值**

-   1.16.7 margin 塌陷

    -   父元素中给第一个元素设置 margin-top 或给最后一个元素设置 margin-bottom，会**被父元素抢走**
    -   解决：
        -   方案一：父元素设置不为 0 的 padding
        -   方案二：父元素设置宽度不为 0 的 border
        -   方案三：父元素设置 css 样式`overflow: hidden;`
            -   溢出之后的显示模式

    ```css
    div {
        overflow: hidden;
    }
    ```

-   1.16.8 margin 合并
    -   上边元素的下外边距和下边兄弟元素的上外边距合并，取最大值
    -   只存在上下兄弟之间，左右之间没有
    -   无需解决，设置加起来的上/下外边距

## 17. 内容溢出

-   `overflow`
    -   默认 visible，显示
    -   设置 hidden，隐藏
    -   scroll，始终显示滚动条
    -   auto，自动
    -   尽量用这个
-   `overflow-x`
-   `overflow-y`

## 18. 隐藏元素的两种方式

-   `display: none`，不显示，不占位
-   `visibility`：
    -   默认`show`
    -   `hidden`隐藏，不显示，但占位

## 19. 样式的继承

-   子元素继承父元素的 CSS 属性
-   能继承：字体属性、文字属性（除了 vertical-align）、文字颜色等
-   边框、背景、内外边距、宽高、溢出方式等

## 20. 元素的默认样式

-   a 标签，蓝色，下滑实线，鼠标样式
-   继承的样式比默认样式优先级低
-   body 有 8 像素的 margin

## 21. 布局技巧

-   **行内元素、行内块元素都可以被父元素当做文本处理**
-   子元素在父元素`水平居中`：
    -   若子元素为`块元素`，则`margin: 0 auto`，**要求子元素必须有宽高**
    -   若子元素为`行内（块）元素`，则父元素加`text-align: center`
-   子元素在父元素`垂直居中`：

    -   若子元素为`块元素`，子元素加`margin-top`，值为(父元素 content-子元素盒子总高)/2
    -   若子元素为`行内（块）元素`，则父元素`height: line-height`、每个子元素加`vertical-align: middle`

    ```css
    /* 块元素内的块元素中的文本水平垂直居中 */
    .outer {
        width: 400px;
        height: 400px;
        background-color: gray;
        overflow: hidden;
    }
    .inner {
        width: 200px;
        height: 100px;
        background-color: orange;
        margin: 0 auto;
        margin-top: 150px;
        text-align: center;
        line-height: 100px;
    }

    /* 块元素内的行内元素中的文本水平垂直居中 */
    .outer {
        width: 400px;
        height: 400px;
        background-color: gray;
        overflow: hidden;
        text-align: center;
        line-height: 400px;
    }
    span {
        background-color: orange;
        font-size: 20px;
    }
    ```

## 22. 元素之间的空白问题

-   行内元素和行内块元素之间的换行会被浏览器解析为一个**空白字符**
-   方案一：去掉换行和空格
-   方案二：父元素`font-size: 0`，子元素设置`font-size`

## 23. 行内块元素的幽灵空白问题

-   行内块元素与文本的**基线**对齐，而文本域文本最低端之间有一定距离
-   方案一：行内块设置`vertical-align`，值不为 baseline 即可
-   方案二：若父元素只有一张图片，设置图片`display: block`
-   方案三：给父元素设置`font-size=0`，如果该行内块内部还有文本，则需单独设置`font-size`（可以用 span 包起来再设置）

## 24. 浮动

-   设计初衷：做文字环绕图片效果
    -   给图片设置`float: left`
-   文字环绕文字

    ```css
    div::first-letter {
        font-size: 80px;
        float: left;
    }
    ```

-   元素浮动后的特点：
    -   脱离文档流
    -   不管浮动之前是什么元素。默认浮动之后宽高都**被内容撑开**，可单独设置宽高
    -   不会独占一行，可与其他元素共用一行
    -   不会 margin 合并和塌陷
    -   不会像行内块一样当做文本处理，没有行内块的空白问题
-   浮动后的影响
    -   后面的兄弟元素会占据浮动之前元素的位置；对前面的兄弟无影响；
    -   不能撑起父元素的高度，导致父元素高度塌陷，但父元素的宽度依然能束缚浮动的元素；
-   解决浮动产生的影响
    1. 给父元素加高度
    2. 给父元素也设置浮动，带来其他影响
    3. 父元素设置`overflow: hidden`
    4. 在所有浮动元素最后面加一个**块元素**，并给他设置`clear: both`
    5. 给浮动元素的父元素设置伪元素，通过伪元素清除浮动，**推荐使用**
        ```html
        .parent::after { content: ''; display: block; clear: both; }
        ```
    -   布局中的一个原则：设置浮动的时候，要么所有兄弟都浮动，要么都不浮动
-   浮动布局练习
    -   也可以用行内块元素，看需求

## 25. 定位

-   相对定位
    -   给元素设置`position: relative`
    -   之后可设置属性`left`、`right`、`top`、`bottom`
    -   相对**原来位置**的距离
    -   特点：
        -   可以是负值
        -   不脱离文档流，只是位置变化，不对其他元素产生影响
        -   **定位元素显示层级高于普通元素**
            -   定位元素覆盖普通元素
            -   都定位则后来居上
        -   `left`和`right`，`top`和`bottom`不能一起设置，**左>右，上>下**
        -   相对定位的元素也能浮动和设置`margin`，但不推荐
    -   应用：微调位置
-   绝对定位
    -   给元素设置`position: absolute`
    -   之后可设置属性`left`、`right`、`top`、`bottom`
    -   相对于它的**包含块**
        -   对于没有脱离文档流的元素，包含块是父元素；
        -   对于脱离文档流的元素，包含块是**第一个拥有定位元素的祖先标签**（若都没有，则是 html 元素）
    -   特点：
        -   可以是负值
        -   脱离文档流，对后面的兄弟元素、父元素都有影响
        -   `left`>`right`、`top`>`bottom`
        -   绝对定位和浮动不能同时设置，不然浮动失效
        -   绝对定位的元素能设置`margin`，但不推荐
        -   无论什么元素，设置绝对定位之后都变成**定位元素**，大小默认由内容撑开，能设置宽高
    -   应用：覆盖原有元素
-   固定定位
    -   给元素设置`position: fixed`
    -   之后可设置属性`left`、`right`、`top`、`bottom`
    -   相对于**视口**，不管窗口怎么滚动，位置都不变
    -   特点：
        -   脱离文档流，对后面的兄弟元素、父元素都有影响
        -   `left`>`right`、`top`>`bottom`
        -   固定定位和浮动不能同时设置，不然浮动失效
        -   能设置`margin`，但不推荐
        -   无论什么元素，设置固定定位之后都变成**定位元素**，能设置宽高
-   粘性定位
    -   给元素设置`position: sticky`
    -   之后可设置属性`left`、`right`、`top`、`bottom`，最常用`top`
    -   相对于离它最近的拥有**滚动机制**的元素
        -   加滚动机制：高度小于内容高度，可滚动
        -   但元素加了`overflow: scroll`没有滚动条只有滚动框，也会触发粘性定位，滚不了，所以不生效
    -   特点：
        -   不会脱离文档流
        -   和浮动同时设置则浮动不生效
        -   能`margin`但不推荐
        -   在元素到达某个位置时将其置顶
-   定位的层级
    -   **定位元素层级都高于普通元素，会覆盖**
    -   定位元素之间平级，设置`z-index: `赋给层级
        -   值是数字没单位
        -   只有定位元素才能用`z-index`
        -   默认 auto，后写的覆盖先写的
        -   可手动指定，大的在小的上面
        -   若大的没有覆盖小的，检查包含块的`z-index`
-   **[定位练习]**
-   定位的特殊应用
    -   固定定位、绝对定位之后变成**定位元素**，默认宽高**被内容撑开**，可以设置宽高
    -   只针对绝对定位和固定定位
    -   应用一：让定位元素充满包含块：
        -   块宽想和包含块一致，给定位元素设置`left:0 `、`right: 0`
        -   块高想和包含块一致，给定位元素设置`top: 0`、`bottom: 0`
    -   应用二：让定位元素在包含块中居中
        -   方法一：`left: 0`、`right: 0`、`top: 0`、`bottom: 0`、`margin: auto`，用这个
        -   方法二： `left: 50%`、`right: 50%`、`margin-top: 负的宽度一半`、`margin-left: 负的高度一半`
        -   方法三：`margin: 宽度差的一半 高度差的一半`
    -   **[定位的特殊应用]**

## 26. 布局

-   版心：排版中心`container`
    -   PC 网页中固定宽度且水平居中的盒子，显示网页主要内容
    -   一半宽度 960px-1200px
    -   可以多个
-   常用类名`class=`
    -   顶部导航条`topbar`...
    -   页头`header`、`page-header`...
    -   导航`nav`、`navigator`、`navbar`...
    -   搜索框`search`、`search-box`...
    -   横幅、广告、宣传图`banner`...
    -   主要内容`content`、`main`...
    -   侧边栏`aside`、`sidebar`...
    -   页脚`footer`、`page-footer`...
-   重置默认样式
    -   默认样式：
        -   `p`元素有默认`margin`
        -   `h1`-`h6`有`margin`且字体加粗
        -   `body`有 8px 的`margin`
        -   超链接有默认文字颜色和下划线
        -   ul 元素有默认左`padding`
    -   重置方式：
        -   全局选择器
            -   选所有元素，简单页面用
        -   `reset.css`
            -   外部样式引入，可以自定义
            -   选择具有默认样式的元素，清空其默认样式
        -   `Normalize.css`
            -   清楚默认样式的基础上，保留了一些有价值的默认样式
            -   为大部分元素提供了一般化的样式

## 27. 补充

-   表单中`textarea`
    -   有默认 1px 的边框和 2px 的 padding
    -   `min-width`、`min-height`、`max-width`、`max-height`，大和小设置一样不可缩放
    -   `resize: none;`不可缩放
