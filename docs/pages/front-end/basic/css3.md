---
title: CSS3
titleTemplate: 前端笔记
---

## 1. 简介

-   私有前缀
    -   如 chrome、edge、Safari 浏览器，`-webkit-border-radius`；Firefox 浏览器，`moz`
    -   浏览器正式支持之前，测试该属性
    -   正式支持之后就不需要了
    -   常用 CSS3 属性，主流浏览器都支持

## 2. 新增长度单位

-   `50vw`、`20vh`，相对于视口宽高的 50%和 20%，移动端用的多，可以动态变化
-   `vmax`、`vmin`，宽和高中的最大值、最小值
-   `height: calc(100vh - 70px)`，表示获取窗口高度-70px，再赋给高度
    -   注意**减号左右有空格**

## 3. 新增盒子模型和属性

-   `front_end-css-CSS3-box-test-sizing`：
    -   默认`content-front_end-css-CSS3-box-test`，标准盒模型，指定的宽高是**文本宽高**
        -   设置 padding 和 border，则总宽高会变
    -   `border-front_end-css-CSS3-box-test`，怪异盒模型，指定的宽高是**盒子总宽高**
        -   设置 padding 和 border 会压缩文本区
-   `resize`：要有`overflow`属性才能调，不管值是什么
    -   `horizontal`，用户可调整水平方向大小
    -   `vertical`，垂直
    -   `both`
-   `front_end-css-CSS3-box-test-shadow`：盒子阴影
    -   默认`none`无阴影
    -   `x-shadow`、`y-shadow`、`blur`、`spread`、`color`、`inset`
    -   `10px 10px;`，水平、垂直方向的阴影范围，正右下，负左上
    -   `-10px 10px blue;`，加颜色
    -   `10px 10px 10px;`，第三个 10px 表示**模糊程度**
    -   `10px 10px 10px blue;`，注意**顺序**
    -   `10px -10px 20px 20px orange;`，阴影外延，向外延伸像素值
    -   `10px 10px 20px 10px red inset;`，内阴影
    -   可用于鼠标悬浮效果等
-   `opacity`：
    -   不透明度，0-1
    -   0 透明，1 完全可见

## 4. 新增背景属性

-   `background-origin`：
    -   设置背景图的**原点**
    -   默认`padding-box`，背景图片从 padding 区域开始放
    -   `border-box`，从文本 border 区域开始放
    -   `content-box`，从 content 区域开始放
-   `background-clip`：
    -   **裁剪**背景（图和颜色都能）
    -   默认`border-box`，边框意外背景图不可见
    -   `padding-bos`，padding 以外的背景图不可见
    -   `content-box`，content 以外的背景图不可见
    -   `text`，前面要写`-webkit-`，背景只呈现在文字上且文字颜色要设置**透明**`transparent`
-   `background-size`：
    -   调整背景**大小**
    -   默认`auto`，找背景左上角的部分
    -   可设置宽高`400px 200px`
    -   设置和该元素一样大`100% 100%`
    -   `contain`，完整包含该图片
        -   让宽和高中较大的撑满
        -   较小的会重复，设置`background-repeat: no-repeat`
    -   `cover`，背景图片中裁最大的和容器宽高相等的图，较好的选择
-   `background`复合属性
    -   背景颜色 背景 url 是否重复 位置/大小 原点 裁剪方式
    -   位置和大小的掐后顺序不能换
-   **多图背景**

```css
background: url(./pic/p5.jpg) no-repeat 0px 0px / 150px 150px, url(./pic/p6.jpg) no-repeat right top, url(./pic/pj.pg) no-repeat left bottom / 150px 150px, url(./pic/s5.jpg)
        no-repeat right bottom / 150px 150px;
```

## 5. 新增边框属性

-   **圆角**
    -   `border-radius: `
        -   `200px`、`50%`，同时设置四个角的 xy 方向，50%就变成圆了
        -   `200px 100px`、`50% 30%`，同时设置四个角的 x、y 方向
        -   `100px 50px 20px 10px / 50px 20px 10px 5px`
            -   左上 x 右上 x 右下 x 左下 x / 左上 y 右上 y 右下 y 左下 y
    -   `border-top-left-radius`
    -   `border-top-right-radius`
    -   `border-bottom-right-radius`
    -   `border-bottom-left-radius`，分别设置四个角
-   **轮廓**
    -   **不占位置，只是视觉效果**
    -   `outline-width`，宽度
    -   `outline-color`，颜色
    -   `outline-style`，风格，`none`、`dashed`、`dotted`、`solid`、`double`
    -   `outline: 50px solid blue`，复合写法
    -   `outline-offset`，轮廓偏移
        -   不是`outline`的子属性，要单独写
        -   可以是负值，表示向内偏移

## 6. 新增文本属性

-   **文本阴影**
    -   `text-shadow: `
        -   默认`none`无阴影
        -   `h-shadow`、`v-shadow`、`blur`、`color`
        -   `10px 10px;`，水平、垂直方向的阴影范围，正右下，负左上
        -   `-10px 10px blue;`，加颜色
        -   `10px 10px 10px;`，第三个 10px 表示**模糊程度**
        -   `10px 10px 10px blue;`，注意**顺序**
        -   可用于鼠标悬浮效果、文字显示效果等
-   **文本换行**
    -   `white-space: `
        -   默认`normal`，文本超出边界后自动换行，换行识别为空格
        -   `pre`，按原来的顺序显示，和 pre 标签类似，但超出宽度了也不换行
        -   `pre-wrap`，按原来顺序显示，超出元素边界自动换行
        -   `pre-line`，按原来顺序显示，超出元素边界自动换行，且只识别文本中的换行，空格会忽略
        -   `nowrap`，强制不换行
-   **文本溢出**
    -   `white-space: nowrap`、`overflow: hidden`、`text-overflow: ellipsis`
        -   写这三个，不换行，把溢出的隐藏，文本溢出的位置省略号表示
-   **文本修饰**
    -   `text-decoration`: 复合属性
    -   `text-decoration-line`、`text-decoration-style`、
    -   `text-decoration-color`、`text-decoration-thickness`、
-   **文本描边**
    -   仅 webkit 内核浏览器支持
    -   `-webkit-text-stroke-width`，宽度
    -   `-webkit-text-stroke-color`，颜色
    -   `-webkit-text-stroke`，复合属性，顺序无影响
    -   阴影用的多
-   **文本转换**
    -   `text-transform: `
        -   `capitalize`每个单词首字母大写，其他不变
        -   `uppercase`都大写
        -   `lowercase`都小写

## 7. 新增渐变

-   **线性渐变**

    -   `background-image: linear-gradient(red,yellow,green);`
        -   可以写多个颜色，默认从上向下渐变
    -   `background-image: linear-gradient(to right,red,yellow,green);`
        -   第一个颜色前面加
            -   `to right`向右、`to left`向左、`to top`、`to bottom`
            -   `to right top`向右上、`to top right`也是右上，其他的同理
    -   `background-image: linear-gradient(50deg,red,yellow,green);`
        -   和原来相比**顺时针**旋转 50 度
    -   `background-image: linear-gradient(red 50px,yellow 100px,green 150px);` - 指定**渐变的位置**，50px 时必须为红色...

```css
.front_end-css-CSS3-box-test {
    width: 300px;
    height: 200px;
    border: 1px solid black;
    margin-left: 50px;
}
.front_end-css-CSS3-box-test1 {
    background-image: linear-gradient(red, yellow, green);
}
.front_end-css-CSS3-box-test2 {
    background-image: linear-gradient(to right bottom, red, yellow, green);
}
.front_end-css-CSS3-box-test3 {
    background-image: linear-gradient(50deg, red, yellow, green);
}
.front_end-css-CSS3-box-test4 {
    background-image: linear-gradient(red 50px, yellow 100px, green 150px);
}
.front_end-css-CSS3-box-test5 {
    background-image: linear-gradient(20deg, red 50px, yellow 100px, green 150px);
    color: transparent;
    font-size: 60px;
    text-align: center;
    line-height: 200px;
    font-weight: bold;
    -webkit-background-clip: text;
}
```

<style module>
.front_end-css-CSS3-box-test {
width: 300px;
height: 200px;
border: 1px solid black;
margin-left: 50px;
}
.front_end-css-CSS3-box-test1 {
background-image: linear-gradient(red,yellow,green);
}
.front_end-css-CSS3-box-test2 {
background-image: linear-gradient(to right bottom,red,yellow,green);
}
.front_end-css-CSS3-box-test3 {
background-image: linear-gradient(50deg,red,yellow,green);
}
.front_end-css-CSS3-box-test4 {
background-image: linear-gradient(red 50px,yellow 100px,green 150px);
}
.front_end-css-CSS3-box-test5 {
background-image: linear-gradient(20deg,red 50px,yellow 100px,green 150px);
color: transparent;
font-size: 60px;
text-align: center;
line-height: 200px;
font-weight: bold;
-webkit-background-clip: text;
}
.front_end-css-CSS3-box-test6 {
    background-image: radial-gradient(red,yellow,green);
}
.front_end-css-CSS3-box-test7 {
    background-image: radial-gradient(at top left,red,yellow,green);
}
.front_end-css-CSS3-box-test8 {
    background-image: radial-gradient(at 100px 50px,red,yellow,green);
}
.front_end-css-CSS3-box-test9 {
    background-image: radial-gradient(circle,red,yellow,green);
}
.front_end-css-CSS3-box-test10 {
    background-image: radial-gradient(200px 200px,red,yellow,green);
}
.front_end-css-CSS3-box-test11 {
    background-image: radial-gradient(red 50px,yellow 100px,green 150px);
}
.front_end-css-CSS3-box-test12 {
    background-image: radial-gradient(100px 50px at 150px 100px,red 50px,yellow 100px,green 150px);
}
</style>

<div class="front_end-css-CSS3-box-test front_end-css-CSS3-box-test1">1</div>
<div class="front_end-css-CSS3-box-test front_end-css-CSS3-box-test2">2</div>
<div class="front_end-css-CSS3-box-test front_end-css-CSS3-box-test3">3</div>
<div class="front_end-css-CSS3-box-test front_end-css-CSS3-box-test4">4</div>
<div class="front_end-css-CSS3-box-test front_end-css-CSS3-box-test5">CSS3</div>

-   **径向渐变**

    -   `background-image: radial-gradient(red,yellow,green);`
        -   从(椭)圆心向外渐变
    -   ` background-image: radial-gradient(at top left,red,yellow,green);`
        -   第一个颜色前面加`at xx`，指定**圆心位置**
    -   `background-image: radial-gradient(at 100px 50px,red,yellow,green);`
        -   像素值指定圆心位置
    -   `background-image: radial-gradient(circle,red,yellow,green);`
        -   指定**圆形渐变**
        -   也可以写`100px 100px`，圆/椭圆
    -   `background-image: radial-gradient(red 50px,yellow 100px,green 150px);`
        -   指定渐变的位置
    -   `background-image: radial-gradient(100px 50px at 150px 100px,red 50px,yellow 100px,green 150px);`
        -   圆/椭圆半径、圆心位置，**顺序固定**

```css
.front_end-css-CSS3-box-test {
    width: 300px;
    height: 200px;
    border: 1px solid black;
    margin-left: 50px;
}
.front_end-css-CSS3-box-test6 {
    background-image: radial-gradient(red, yellow, green);
}
.front_end-css-CSS3-box-test7 {
    background-image: radial-gradient(at top left, red, yellow, green);
}
.front_end-css-CSS3-box-test8 {
    background-image: radial-gradient(at 100px 50px, red, yellow, green);
}
.front_end-css-CSS3-box-test9 {
    background-image: radial-gradient(circle, red, yellow, green);
}
.front_end-css-CSS3-box-test10 {
    background-image: radial-gradient(200px 200px, red, yellow, green);
}
.front_end-css-CSS3-box-test11 {
    background-image: radial-gradient(red 50px, yellow 100px, green 150px);
}
.front_end-css-CSS3-box-test12 {
    background-image: radial-gradient(100px 50px at 150px 100px, red 50px, yellow 100px, green 150px);
}
```

<!-- <style module>
.front_end-css-CSS3-box-test {
    width: 300px;
    height: 200px;
    border: 1px solid black;
    margin-left: 50px;
}
.front_end-css-CSS3-box-test6 {
    background-image: radial-gradient(red,yellow,green);
}
.front_end-css-CSS3-box-test7 {
    background-image: radial-gradient(at top left,red,yellow,green);
}
.front_end-css-CSS3-box-test8 {
    background-image: radial-gradient(at 100px 50px,red,yellow,green);
}
.front_end-css-CSS3-box-test9 {
    background-image: radial-gradient(circle,red,yellow,green);
}
.front_end-css-CSS3-box-test10 {
    background-image: radial-gradient(200px 200px,red,yellow,green);
}
.front_end-css-CSS3-box-test11 {
    background-image: radial-gradient(red 50px,yellow 100px,green 150px);
}
.front_end-css-CSS3-box-test12 {
    background-image: radial-gradient(100px 50px at 150px 100px,red 50px,yellow 100px,green 150px);
}
</style> -->

<div class="front_end-css-CSS3-box-test front_end-css-CSS3-box-test6">1</div>
<div class="front_end-css-CSS3-box-test front_end-css-CSS3-box-test2">2</div>
<div class="front_end-css-CSS3-box-test front_end-css-CSS3-box-test3">3</div>
<div class="front_end-css-CSS3-box-test front_end-css-CSS3-box-test9">4</div>
<div class="front_end-css-CSS3-box-test front_end-css-CSS3-box-test10">5</div>
<div class=" front_end-css-CSS3-box-test front_end-css-CSS3-box-test11">6</div>
<div class="front_end-css-CSS3-box-test front_end-css-CSS3-box-test12">7</div>

-   **重复渐变**
    -   在**没有发生渐变**的区域，继续渐变；渐变充满了则不生效
    -   前面加`repeating-`
    -   `background-image: repeating-linear-gradient(red 50px,yellow 100px,green 150px);`
    -   `background-image: repeating-radial-gradient(red 50px,yellow 100px,green 150px);;`

## 8. Web 字体/网络字体

-   本地没有的字体
-   阿里 Web 字体定制工具：https://www.iconfont.cn/webfont
    ```html
    <style module>
        /* 高兼容性写法，指定地址，浏览器胡自动下载该字体 */
        @font-face {
            font-family: '我的字体';
            font-display: swap;
            src: url('./download/webfont_rgnktxxv1fj/webfont.eot'); /* IE9 */
            src: url('./download/webfont_rgnktxxv1fj/webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
                    url('./download/webfont_rgnktxxv1fj/webfont.woff2') format('woff2'), url('./download/webfont_rgnktxxv1fj/webfont.woff') format('woff'), /* chrome、firefox */
                    url('./download/webfont_rgnktxxv1fj/webfont.ttf') format('truetype'),
                /* chrome、firefox、opera、Safari,
        Android*/ url('./download/webfont_rgnktxxv1fj/webfont.svg#webfont') format('svg'); /* iOS 4.1- */
        }
        /* 使用该字体 */
        .p1 {
            font: 20px '华文行楷';
        }
        .p2 {
            font: 20px '我的字体';
        }
    </style>
    ```

## 9. 字体图标

-   优点：
    -   相对图片更清晰
    -   灵活性高，方便改变大小颜色风格等
    -   兼容性好，IE 也支持
-   阿里图标官网地址：https://www.iconfont.cn/
-   方法：
    -   下载导入.css 文件，设置类名使用
    -   这里只用**在线**使用的一种
    -   把选好的图标加入购物车，负值链接引入
    ```html
    <!DOCTYPE html>
    <html lang="zh-CN">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4326321_uk4io9xx7h.css" />
            <title>Document</title>
        </head>
        <body>
            <i class="iconfont icon-feihang"></i>
            <p class="iconfont icon-fanchuan"></p>
            <p class="iconfont icon-chongwu"></p>
            <p class="iconfont icon-chongwutubiao03"></p>
            <p class="iconfont icon-chongwutubiao16"></p>
            <p class="iconfont icon-chongwu1"></p>
        </body>
    </html>
    ```

## 10. 2D 变换

-   `transform`
    -   各种变换效果可以跟在后面，用空格分开
-   位移：`translate`、`translateX`、`translateY`
    -   百分比是**相对于自己的宽高**
    -   正右下，负左上
    -   不脱离文档流
    -   可以用来元素居中
    -   与定位相比，浏览器处理效率更高
    -   对行内元素无效
    -   位移配合定位，实现元素水平垂直居中，绝对定位`top: 0`和`left: 0`之后向左向上推回宽高一半
    ```css
    .d1 {
        transform: translateX(-20px) translateY(50%);
    }
    .d2 {
        transform: translate(20px, 30px);
    }
    ```
-   缩放：`scale`、`scaleX`、`scaleY`

    -   值为缩放倍数，>1 放大，0-1 缩小，<0 左右/上下边互换再缩放，-1 时翻转
    -   缩放前后中心一样
    -   可以把文字缩小到小于 12px
    -   不能用于行内，可变成行内块再缩放

    ```css
    .d1 {
        transform: scaleX(0.5);
    }
    .d2 {
        transform: scale(0.5, 1.3);
    }
    ```

-   旋转：`rotate`、`rotateZ`

    -   绕 Z
        -   绕中心所在的 Z 轴，正顺时针，负逆时针
        -   绕 Z 旋转之后 X、Y 轴也转了，对平移有影响
        -   rotate 写一个值=rotateZ 写一个值
    -   绕 X、Y 也能旋转，没有 3D 效果，`rotate3d(1,0,1 30deg)`

    ```css
    .d1 {
        transform: rotate(-30deg);
    }
    .d2 {
        transform: rotateZ(30deg);
    }
    ```

-   扭曲/切变：`skew`、`skewX`、`skewY`
-   多重变换：
    -   顺序不一样结果不同
    -   **旋转放在最后**
    ```css
    .d1 {
        /* transform: translate(100px,100px) scale(0.5,0.5); */
        /* transform: scale(0.5,0.5) translate(100px,100px); */
    }
    .d2 {
        /* transform: translate(100px,100px) rotate(30deg); */
        /* transform: rotate(30deg) translate(100px,100px); */
    }
    ```
-   变换原点：`transform-origin`
    -   改变**旋转、缩放中心**
        -   值有`top right`、`top left`...，绕自己的位置转，写的顺序无关
            -   只写一个，另一边在**中心**
        -   或者`50px 50px`，指定位置
        -   或者`50% 50%`，相对于自己宽高
        -   缩放时

## 11. 3D 变换

-   3D 空间与景深
    -   先给父元素加 3D 空间，`transform-style: preserve-3d`，默认是`flat`2D
        -   父元素`perspective: 300px`，设置景深（观察者与 Z 轴距离），默认`none`
    -   也用`transform`
-   3D 透视点位置
    -   观察者的位置，默认在开启 3D 空间元素的正中心
    -   父元素`perspective-origin: 102px 102px;`
-   3D 位移
    -   `transform: translateZ(100px)`，+、-
    -   `transform: translate3d(100px,50%,0)`，三个都必须写，Z 不能写百分比
-   3D 旋转
    -   `transform: rotateX(-45deg)`、Y、Z...
    -   `transform: rotate3d(1,0,1 30deg)`，X 和 Z 转 30 度，Y 不转，只能转相同角度
        -   不同角度可以多写几个`rotated3d()`空格隔开
-   3D 缩放
    -   `transform: scaleZ(4)`、`scale3d(1.5,1.5,4)`三个值都要写
        -   Z 不是元素厚度，可以看成调景深
        -   如：景深 500px，这里写 4，等于景深 125px 时的效果
-   变换原点
    -   `transform-origin: `和 2D 一样
        -   绕 Y 轴旋转比如`100px 0`，绕 X`0 100px`，只需指定对应的值，另一个为 0 就行
        -   绕 Z 轴旋转需要给出两个位置
-   3D 多重变换
    -   `rotateX`...放在最后
-   背部可见性
    -   `backface-visibility`:
        -   默认`visible`
        -   `hidden`，设置背部不可见

## 12. 过渡

-   和数字相关的都能过渡
-   为需要过渡效果的元素设置`transition-property: `
    -   `width,height,left,top,right,bottom,z-index,background-color,transform,front_end-css-CSS3-box-test-shadow,opacity;`，单个/多个
    -   `all`，所有能过渡的都设置
-   设置过渡时间
    -   给该元素设置`transition-duration: 1000ms;`，单位 ms 或 s
    -   若为一个则个所有设置过渡的元素都设置该时间
    -   多个给他们分别设置
-   过渡延迟
    -   `transition-delay: 2s`
-   过渡速度`transition-timing-function: `

    -   `ease`，慢快慢
    -   `linear`，线性，记
    -   `ease-in`，先慢后快
    -   `ease-out`，先快后慢
    -   `ease-in-out`，慢快慢，比`ease`刚开始慢一点
    -   `step-start`，刚开始就到终点
    -   `step-end`，刚开始不动，等时间到了立刻到终点
    -   `steps(10)`，分为 10 步，一步一步走
    -   `cubic-bezier(0,4.2,.78,-1.87)`，贝塞尔曲线，橡皮筋效果
        -   在线制作贝赛尔曲线：https://cubic-bezier.com

-   复合属性
    -   一个时间，表示过渡时间
    -   两个时间，表示过渡时间和延迟
    -   其他的无顺序要求
    -   同一元素的多个过渡效果用逗号隔开
    -   `transition: linear all 2s;`

## 13. 动画

-   关键帧：一段动画中起决定性作用的 2-3 帧
-   不用触发条件，直接进行
-   `animation-name： `，动画名，自己取
-   `animation-duration： `，动画持续时间
-   `animation-delay： `，动画延迟
-   `animation-timing-function`，动画速度，可选值和过渡的一样
-   `animation-iteration-count: 3;`，播放次数
    -   `infinite`无限循环
-   `animation-direction: `，动画方向
    -   默认`normal`
    -   `reverse`，反转
    -   `alternate`，先正向的往复运动，如果播放次数只有一次，这两个往复的会忽略
    -   `alternate-reverse`，线反转的往复运动
-   `animation-fill-mode: `，不发生动画时在哪里
    -   `forwards`，动画结束时停到最后
    -   `backwards`，停到开始时的状态
-   `animation-play-state: `，动画播放状态
    -   默认`running`
    -   `pause`，暂停
    -   可以设置鼠标进入某区域暂停/播放动画，单独写
-   复合属性`animation: `
    -   `run-right2 3s 0.5s linear 3 alternate-reverse forwards`
    -   持续时间和延迟有顺序，**先持续时间后延迟**，其他随意
-   CSS 中定义动画

    -   方式一：
        ```css
        /* 定义名为run-right1的动画 */
        /* 指定初始和结束的属性 */
        @keyframes run-right1 {
            /* 第一帧 */
            from {
                transform: translateX(0);
            }
            /* 最后一帧 */
            to {
                transform: translateX(900px);
                background-color: red;
                background-image: url(./pic/p5.jpg);
                background-size: 100% 100%;
            }
        }
        ```
    -   方式二：

        ```css
        @keyframes run-right2 {
            0% {
            }
            50% {
                background-color: red;
                border-radius: 50%;
            }
            100% {
                transform: translateX(900px) rotateZ(90deg);
                background-color: orange;
            }
        }
        ```

## 14. 动画和过渡

-   动画不需要触发条件，过渡需要
-   动画可以**精细**控制没帧

## 15. 多列布局

-   实现报纸类的布局
-   `column-count: 5`，直接指定列数
-   `column-width: 100px`，给定每列宽度，自动计算列数
-   `columns: 6 200px`，复合属性，冲突时选列数少的，不推荐使用
    -   `columns: 6`，也可以这样指定列数
    -   `columns: 200px`
-   `column-gap: 20px`，列间距
-   `column-rule: 2px dashed red`，每列边框
    -   `column-rule-width`
    -   `column-rule-style`
    -   `column-rule-color`
-   `columns-span: `，用于标题跨列
    -   `none`，不跨列
    -   `all`，跨所有列
-   插入图片时，图片宽度设置`100%`，撑满这列

## 16. 伸缩盒模型/弹性盒子

-   容器与项目
    -   伸缩容器：
        -   `display: flex`或`display: inline-flex`，该容器就变成了伸缩容器
        -   后者很少用
        -   一个元素可以同时是伸缩容器、伸缩项目
    -   伸缩项目：
        -   伸缩容器内所有**子元素**自动变成伸缩项目
        -   无论原来是哪种容器（块、行内、行内块），一旦成为伸缩项目，都会“块状化”
-   主轴和侧轴
    -   伸缩项目沿着主轴排列，默认水平向右
    -   侧轴与主轴垂直，默认向下
    -   调整主轴方向`flex-direction: `，侧轴方向也对应变化
        -   默认`row`，从左到右排列
        -   `row-reverse`，从右到左排列，主轴朝左
        -   `column`，从上到下，主轴朝下
        -   `column-reverse`，从下到上，主轴朝上
-   主轴换行方式`flex-warp`
    -   默认`nowrap`，不换行，挤在一起，宽度可能会压缩
    -   `warp`，超出宽度了换行（向下、向右等）
    -   `warp-reverse`，反向换行（向上、向左等）
-   复合属性`flex-flow`：
    -   主轴方向和主轴换行方式的复合属性，无顺序要求
    -   默认`row nowrap`，向右，不换行挤在一起
    -   最常用`row warp`
    -   可调
-   主轴**对齐方式**`justify-content: `
    -   加在伸缩容器上
    -   默认`start`，主轴方向上起始位置对齐
    -   `end`，主轴方向上结束位置对齐
    -   `space-around`
        -   项目均匀分布在一行中
        -   项目与项目之间距离是项目与边缘距离的**两倍**
    -   `space-between`
        -   项目均与分布在一行中
        -   项目间距离相等，两端项目**紧贴边缘**
        -   用的多
    -   `space-evenly`
        -   项目均匀分布在一行中
        -   项目与项目之间距离和项目与边缘距离**相等**
    -   `center`，主轴方向上居中
-   侧轴**对齐方式一行**`align-items: `
    -   加在伸缩容器上
    -   `flex-start`，起始位置对齐
    -   `flex-end`，结束位置对齐
    -   `flex-center`，中间对齐
    -   `baseline`，基线对齐
    -   `stretch`，拉伸到整个父容器，（前提：伸缩项目未设置侧轴方向长度）
-   侧轴**对齐方式多行**`align-content: `
    -   加在伸缩容器上
    -   `start`，起始位置对齐
    -   `end`，结束位置对齐
    -   `center`，中间位置对齐
    -   `space-around`，同主轴的
    -   `space-between`，同主轴的
    -   `space-evenly`，同主轴的
    -   `stretch`，同主轴的
-   水平垂直居中
    -   方案一：
        ` justify-content: center; align-items: center;`
    -   方案二：
        `margin: auto`
-   基准长度`flex-basis: `
    -   很少用
    -   浏览器根据它计算主轴上是否有多余空间
    -   默认`auto`
    -   设置伸缩项目沿着主轴方向的基准长度
        -   横向设置宽
        -   纵向设置高
-   伸缩性
    -   拉伸
        -   给需要拉伸的伸缩项目设置`flex-grow: `，
        -   默认 0
        -   表示空余长度分配**权重**
        -   如：1/(1+2+3)=第一个元素的拉伸长度分配比例
        -   **写 0 表示不变，不会被拉伸**
    -   压缩
        -   把主轴换行方向设置为不换行，就能压缩了
            -   `flex-wrap: nowrap;`
            -   但这时每个伸缩项目不是均匀压缩，压缩程度与宽度成正比
        -   `flex-shrink: `
            -   默认 1
            -   给需要拉伸的伸缩项目设置压缩权重
            -   如：200/(200\*1+300\*2+200\*3)=第一个元素的压缩长度分配比例
            -   这样做为了小的元素不被一下压缩没
            -   **写 0 表示不变，不会被压缩**
-   flex 复合属性`flex`
    -   复合`flex-grow`、`flex-shrink`、`flex-basis`
        -   默认`0 1 auto`，简写`0 auto`
        -   `1 1 auto`，简写`auto`
        -   `1 1 0`，简写`1`
        -   `0 0 auto`，简写`none`
-   排序与单独对齐
    -   排序：给伸缩项目添加`order:`，小的排在前面
    -   单独对齐：单独设置`align-self: `
        -   `flex-start`、`flex-end`、`center`
-   弹性盒子可用于局部大量规则分布的块

## 17. 响应式布局-媒体查询

-   媒体类型

    -   不同媒体设备上呈现不同效果
    -   写在普通样式后面，不然可能会被覆盖，起不到作用

    ```css
    h1 {
        width: 600px;
        height: 400px;
        background-image: linear-gradient(45deg, red, yellow, green);
        margin: 0 auto;
        text-align: center;
        color: white;
        font-size: 100px;
        line-height: 400px;
        text-shadow: 0 0 10px black;
    }
    /* 只有在打印机或打印预览时才应用的样式 */
    @media print {
        h1 {
            /* 这两个都行 */
            /* background-image: none; */
            background: transparent;
        }
    }
    /* 只有在屏幕上才应用的样式 */
    @media screen {
        h1 {
            font-family: '华文行楷';
        }
    }
    /* 一直都应用的样式 */
    @media all {
    }
    ```

-   媒体特性

    -   视口宽度`width`、视口最大宽度`max-width`、视口最小宽度`min-width`（浏览器窗口宽高）
    -   视口高度`height`、视口最大高度`max-height`、视口最小高度`min-height`
    -   设备宽度`device-width`、设备高度`device-height`（电脑屏幕宽高），也有`min-`和`max-`
    -   检测视口方向，是否横屏，`orientation:`
        -   `portrait`，竖屏
        -   `landscape`，横屏
    -   **注意先后，样式覆盖**

    ```css
    /* 检测到视角的宽度=800px时应用以下样式 */
    @media (width: 800px) {
        h1 {
            background-color: green;
        }
    }
    /* 视口宽度<=700时应用 */
    @media (max-width: 700px) {
        h1 {
            background-color: orange;
        }
    }
    /* 视口宽度>=900px时应用 */
    @media (min-width: 900px) {
        h1 {
            background-color: skyblue;
        }
    }
    ```

-   运算符

    -   `and` ，且
    -   `or`，或
    -   `not`，非，否定
    -   `only`，肯定，和不写结果一样；为了解决 IE 兼容性问题

    ```css
    @media (min-width: 600px) and (max-width: 800px) {
        h1 {
            background-color: green;
        }
    }
    @media print and (min-width: 1000px) {
    }
    @media only print and (max-device-width: 1000px) {
    }
    ```

## 18. 响应式布局-常用阈值

-   建含媒体查询的多个 CSS 文件，再 link 标签都引入
-   或者不同 CSS 对应不同媒体类型，但没有媒体查询，在引入时 link 标签加属性`media="screen and (max-width:768px)"`，根据不同媒体类型引入不同 CSS

```css
/* 小屏幕 */
@media screen and (max-width: 768px) {
}
/* 中等屏幕 */
@media screen and (min-width: 768px) and (max-width: 992px) {
}
/* 大屏幕 */
@media screen and (min-width: 992px) and (max-width: 1200px) {
}
/* 超大屏幕 */
@media screen and (min-width: 1200px) {
}
```

## 19. BFC

-   Block Formatting Context，块级格式上下文
-   $\approx$元素的一个特异功能
-   默认关闭，当满足某些条件开启/激活
-   元素开启 BFC 能解决什么问题：
    -   子元素不再产生 margin 塌陷问题；
    -   自己不会被其他浮动元素覆盖；
    -   就算其子元素浮动，元素自身高度也不会塌陷；
-   如何开启 BFC：
    -   根元素`html`
    -   浮动元素
    -   绝对定位、固定定位的元素
    -   行内块元素
    -   表格的`table`、`thead`、`tbody`、`tfoot`、`th`、`td`、`tr`、`caption`
    -   `overflow`不为`visible`的块元素
    -   伸缩项目
    -   多列容器
    -   `column-span`为`all`的元素（即钙元素没有包裹在多列容器中）
    -   `display`的值设置为`flow-root`的元素

## 20. 补充

-   `user-select: `，用户是否可选中该元素内的文字
    -   `none`不可选中
    -   `all`、`auto`、`contain`、`text`
-   给元素设置`min-height`、`min-width`，最小高宽
-   `scroll-behavior: smooth`，让滚动条/本页锚点跳转平滑滚动，只能给`html`元素设置，
