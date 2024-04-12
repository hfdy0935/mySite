---
title: JS逆向
titleTemplate: Python笔记
---

## 1. js 基础

javascript 是浏览器上运行的脚本语言，和 java 无关。
<br/>这里在 vscode 中写，新建 html 文件，!+enter 补全基本代码

<b style="color:red">引入</b>
<br/>在 html 文件中引入 js 脚本，可以有多个 script 标签，按顺序执行，引入方法：
<br/>&emsp;&emsp;（1）任意位置加标签<b>\<script> \</script></b>，中间写 js 代码
<br/>&emsp;&emsp;（2）引入 js 文件，任意位置加标签<b>\<script src="xxx.js"> \</script></b>，src 是 js 文件的路径

<b style="color:red">注释</b>
<br/>js 单行注释，//
<br/>js 多行注释，
<br/>&emsp;&emsp;/\*注释内容
<br/>&emsp;&emsp;注释内容
<br/>&emsp;&emsp;注释内容
<br/>&emsp;&emsp;注释内容\*/
<br/>html 的注释，<b>\<!--html 的注释--></b>
<br/><br/>ctrl+/快速注释

<b style="color:red">弹窗</b>
<br/><b>alert("提示信息")</b>，弹出提示信息窗
<br/><b>confirm("是否确认")</b>，弹出确认窗，确认 or 取消

<b style="color:red">数据类型</b>
<br/><b>number</b>，数字类型，整数小数等
<br/><b>string</b>，字符串类型
<br/><b>boolean</b>，布尔值，只有 true 和 false，小写，和 Python 中区别
<br/><b>object</b>，对象，所有被 new 出来的东西都是对象
<br/><b>undefined</b>，未定义，所有没被定义的东西，啥也没有
<br/><b>null</b>，空对象，从属于 object 类型

<b style="color:red">变量声明、赋值</b>
<br/><b>var 全局变量、let 局部变量、const 常量（不能改）</b>
<br/>var 可以重复声明一个变量，后面覆盖前面；let 和 const 不能重复声明同一个变量
<br/>var 和 let 声明的变量可以改，const 声明的变量不能改
<br/>var 会发生变量提升，其他两个不会
<br/>全局中 var 声明的变量可以在后面函数中访问到（函数中 var 声明的变量在外面访问不到），let 和 const 只能在同一个块级作用域内访问到
<br/><br/><b>var a,b,c;</b>，声明但未赋值，alert(a)会显示 undefined，可以在后面语句赋值<b>a=999;</b>
<br/><b>var a,b=18,c,d=25,e='abcdefg';</b>，没写等号是 undefined，写等号就赋值
<br/><b>typeof(d)</b>，返回 d 的类型，字符串'number'
<br/><br/><b>var d=100;</b>，声明并赋值
<br/>&emsp;&emsp;<b>alert(d);</b>，提示信息
<br/>&emsp;&emsp;<b>console.log(d)</b>，在控制台输出

<br/><b>var a="alex";</b>，初始化字符串 string
<br/>&emsp;&emsp;<b>concole.log(a+10)</b>，如果+左右至少有一个是字符串，则是字符串拼接
<br/>&emsp;&emsp;<b>concole.log(10+a)</b>
<br/>&emsp;&emsp;<b>concole.log(20+10)</b>，数字加法

<br/><b>var a=true,b=3>2,c=false,d,e=3<2</b>，布尔类型
<br/>&emsp;&emsp;<b>3>2 && 5!=4</b>，且，true
<br/>&emsp;&emsp;<b>3<2 || 5==4</b>，或，false
<br/>&emsp;&emsp;<b>! 3>2</b>，非

<br/>object
<br/>&emsp;&emsp;<b>var arr1=new Array(11,22,33,44,55)</b>，创建数组
<br/>&emsp;&emsp;<b>var arr2=[11,22,33,44,55]</b>，创建数组，这两个一样
<br/><br/>&emsp;&emsp;<b>var arr3=new Array(2)</b>，结果是<b>[ , , ]</b>，空数组，长度为 3
<br/>&emsp;&emsp;&emsp;&emsp;可以再赋值，<b>arr3[0]="A";arr3[1]="B";arr3[2]="C";arr3[999]="E";</b>，如果超过长度则会增加长度，现在长度是 1000
<br/>&emsp;&emsp;<b>arr.length</b>，数组长度，可用于循环
<br/><br/>&emsp;&emsp;<b>var d={name:"小明",age:"20",school:"sysu",
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;chi:function(){console.log("吃饭")}};</b>，创建对象
<br/>&emsp;&emsp;<b>d['name']</b>或<b>d.name</b>，拿到某个属性的值
<br/>&emsp;&emsp;<b>d\['chi']()</b>或<b>d.chi()</b>，执行里面的函数，可以传参
<br/><br/>&emsp;&emsp;不执行里面的函数
<br/>&emsp;&emsp;<b>for(var n in d){
<br/>&emsp;&emsp;&emsp;&emsp;if(typeof(d[n])!='function'){
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;console.log(d[n]);
<br/>&emsp;&emsp;&emsp;&emsp;}
<br/>&emsp;&emsp;}</b>

<b style="color:red">变量操作</b>
<br/>字符串和数字类型转换
<br/>&emsp;&emsp;字符串转数字：
<br/>&emsp;&emsp;&emsp;&emsp;<b>var c=parseInt("9999")</b>，把字符串转化为 number 类型的整数赋值给 c
<br/>&emsp;&emsp;&emsp;&emsp;<b>var c=parseFloat("9999")</b>，把字符串转化为 number 类型的小数赋值给 c
<br/>&emsp;&emsp;数字转字符串：
<br/>&emsp;&emsp;&emsp;&emsp;方法一：
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>var d=10;console.log(d.toString()+'s')</b>，10 转化为字符串再拼接再输出
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>console.log((10).toString()+'s')</b>，10 转化为字符串再拼接再输出，直接用数字需要用()包起来
<br/>&emsp;&emsp;&emsp;&emsp;方法二：
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>var d=10;d+'';</b>
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>10+'';</b>
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>(10)+'';</b>

<br/>三元表达式
<br/>&emsp;&emsp;<b>var c=10>20 ? 0:1</b>，和 c 语言的一样，如果真返回前面的，如果假返回后面的
<br/>&emsp;&emsp;<b>var a=-10;var b=0;var c=a>b?a:b?a:b</b>，先判断 true 返回 0，再判断 0 为 false 返回 0，c=0

<br/>自增自减
<br/>&emsp;&emsp;<b>var a=10;console.log(a++);</b>，自增，输出 10，a 值变为 11
<br/>&emsp;&emsp;<b>var a=10;console.log(++a);</b>，自增，输出 11，a 值变为 11
<br/>&emsp;&emsp;<b>var a=10;console.log(a--);</b>，自减，输出 10，a 值变为 9
<br/>&emsp;&emsp;<b>var a=10;console.log(--a);</b>，自减，输出 9，a 值变为 9
<br/>&emsp;&emsp;<b>var i=10;j=i++;</b>，i 是 11，j 是 10
<br/>&emsp;&emsp;<b>var i=10;j=++i;</b>，i 是 11，j 是 11
<br/>&emsp;&emsp;<b>var i=10;j=i--;</b>，i 是 9，j 是 10
<br/>&emsp;&emsp;<b>var i=10;j=--i;</b>，i 是 9，j 是 9
<br/>&emsp;&emsp;<b>var i=10;var i=i++</b>，i 是 10。i 表达式结果是 10，i 变成 11，最后赋值把 10 赋给 i，i 的值刷新了
<br/>&emsp;&emsp;<b>var i=10;var i=++i</b>，i 是 11

<br/>判断是否相等
<br/>&emsp;&emsp;<b>console.log('10086'==10086)</b>，返回 true
<br/>&emsp;&emsp;<b>console.log('10086'===10086)</b>，返回 false
<br/>&emsp;&emsp;<b>==</b>，判断两端的值，<b>不管数据类型</b>
<br/>&emsp;&emsp;<b>===</b>，判断两端的值，<b>还要看数据类型</b>

<br/>字符串操作
<br/>&emsp;&emsp;<b>s.split()</b>，切割，和 python 一样，结果是个 Array
<br/>&emsp;&emsp;<b>s.substr(3,4)</b>，从索引为 3 开始截，截取 4 个字符。索引从 0 开始。相当于 python 中的<b>s[3:3+4]</b>
<br/>&emsp;&emsp;<b>s.substring(3,4)</b>，从索引 3 开始截，到索引 4，左闭右开
<br/>&emsp;&emsp;<b>s.length</b>，字符串长度
<br/>&emsp;&emsp;<b>s.charAt(3)</b>，索引为 3 的一个字符
<br/>&emsp;&emsp;<b>s.indexOf('xxx')</b>，字符或字符串 xxx 的索引，没有找到返回-1
<br/>&emsp;&emsp;<b>s.includes('xxx')</b>，判断 xxx 是否存在，返回 true 或 false
<br/>&emsp;&emsp;<b>s.toUpperCase()</b>，转成大写字母
<br/>&emsp;&emsp;<b>s.startsWith('xxx')</b>，判断是否以'xxx'开头，等价于<b>s.charAt(0)=='xxx'?true:false</b>

<b style="color:red">条件分支</b>

```js
if (条件1) {
    代码块1;
} else if (条件2) {
    代码块2;
} else {
    代码块3;
}
```

<b style="color:red">switch</b>，固定范围取值

```js
switch (s) {
    case 1:
        代码块1;
        break;
    case 2:
        代码块2;
        break;
    case 3:
        代码块3;
        break;
    case 3:
    case 4:
    case 5:
        代码块4;
        break;
    default:
        代码块; //if else里的最后一个else
}
```

<br/>&emsp;&emsp;case3、case4、case5 对应同一个代码块——case 穿透
<br/>&emsp;&emsp;有一个判断成功了，它的代码和后面 case 的代码都会被执行——case 穿透
<br/>&emsp;&emsp;解决：在每个 case 的代码块后面加上<b>break;</b>成功了一个就退出

<br/><b style="color:red">循环</b>
<br/>while 循环

```js
 while(条件){
    循环体;（里面可以有break或continue等）
  }
```

<br/><br/><br/>do...while 循环，至少执行一次循环体

```js
do{
    循环体;（里面可以有 break 或 continue 等）
  }while();
```

<br/><br/><br/>for 循环

```js
for(初始化;循环条件;改变循环变量){
    循环体;（里面可以有 break 或 continue 等）
  }
```

<br/><br/><br/>例子：

```js
var arr = [11, 22, 33, 44];
for (var item in arr) {
    //拿到的是索引
    console.log(arr[item]);
}

var arr = [11, 22, 33, 44];
for (var i = 0; i < arr.length; i++) {
    //i 是索引
    console.log(arr[i]);
}

var d = { name: '小明', age: '20', school: 'sysu' };
for (var key in d) {
    //拿到的是索引
    console.log(d[key]);
}

var arr = [11, 22, 33, 44]; //列表特有
arr.forEach(function (item) {
    console.log(item + 10); //对 arr 中的每一个执行该函数
});
```

<br/><b style="color:red">控制台</b>
<br/>可以在里面写代码执行，也可以在 js 中调用控制台输出，语句一样
<br/><b>console.log(d)</b>，调用控制台并输出变量 d
<br/><b>console.log(typeof(d))</b>，调用控制台并输出变量 d 的类型——number
<br/><b>clear()</b>，清空代码和输出

<br/><b style="color:red">函数</b>

```js
function 函数名(形参1,形参2,...){
    函数体 //可以有return
  }
```

<br/>把函数赋给变量 a、$、\_、都行
<br/>在前端，只要是个函数，任何东西都可以加()

```js
var a = function (s) {
    console.log('执行语句' + str);
};
a(100);
```

<br/>&emsp;&emsp;a(100);
<br/><br/>自运行函数/匿名函数，页面一加载直接跑

```js
(function (a, b) {
    console.log('这也行？？？' + a + ' ' + b);
})(10, 20);
```

<br/><br/>例子

```js
function fn(a, b) {
    console.log('计算' + a + '+' + b + '的值');
    return a + b;
}
ret = fn(10, 20);
console.log('得到的结果是：' + ret);
```

## 2. js 进阶

<br/><b style="color:red">定时器</b>
<br/>定时器 1：
<br/>&emsp;&emsp;<b>setTimeout(function(){},2000);</b>，2000 毫秒之后自动执行该函数
<br/>&emsp;&emsp;t=setTimeout(function(){},2000);<b>window.clearTimeout(t);</b>，清除计时器，不会弹窗显示

<br/>定时器 2：
<br/>&emsp;&emsp;<b>setInterval(function(){console.log("提示信息");},1000);</b>，每隔 1000 毫秒自动执行该函数
<br/>&emsp;&emsp;t=setInterval(function(){console.log("提示信息");},1000);<b>window.clearInterval(t);</b>，清除计时器，不再显示

<br/>浏览器反扒策略：检测一旦开启开发者工具，每隔 1ms 往内存中写东西，非常卡
<br/>解决：把它停了
<br/><br/>例子

```js
setTimeout(function () {
    alert('提示信息');
}, 5000);
```

<br/><b style="color:red">时间</b>
<br/>获取系统当前时间：
<br/>&emsp;&emsp;<b>var date=new Date();</b>创建一个日期对象，默认得到系统时间，类型为 object
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;格式：Tue Jul 25 2023 19:27:35 GMT+0800 (中国标准时间)
<br/><br/>获取具体年、月、日等以及格式化
<br/>&emsp;&emsp;<b>date.getYear();</b>从 1900 年开始算,number,2023 显示为 123
<br/>&emsp;&emsp;<b>var year=date.getFullYear();</b>正常年份,number,2023 显示为 2023
<br/>&emsp;&emsp;<b>var month=date.getMonth()+1;</b>从 0 开始数,number,7 月显示为 6，需要+1
<br/>&emsp;&emsp;<b>var day=date.getDate();</b>日期，这个是正常的
<br/>&emsp;&emsp;<b>var hours=date.getHours();</b>小时，正常
<br/>&emsp;&emsp;<b>var minutes=date.getMinutes();</b>分钟，正常
<br/>&emsp;&emsp;<b>var sevonds=date.getSeconds();</b>秒，正常
<br/>&emsp;&emsp;<b>alert("现在的时间是:"+year+"年"+month+"月"+day+"日"+hours+"时"+minutes+"分"+seconds+"秒");</b>
<br/>&emsp;&emsp;<b>console.log(("现在的时间是:"+year+"年"+month+"月"+day+"日"+hours+"时"+minutes+"分"+seconds+"秒"));</b>

<br/>练习，每隔 1 秒打印当前时间

```js
setInterval(function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    console.log('现在的时间是:' + year + '年' + month + '月' + day + '日' + hours + '时' + minutes + '分' + seconds + '秒');
}, 1000);
```

<br/>或者先定义函数 fn 获取当前时间并格式化打印，再<b>setInterval(fn,1000);</b>

<br/><br/>一般前端，没有必要给用户展示的话，没有必要格式化
<br/>时间戳，各个语言通用
<br/>从<b>1970 年 1 月 1 日 0 时 0 分 0 秒</b>开始算，到现在经过了多少个单位
<br/>每个语言的单位不同，python 中是秒，前端中是<b>毫秒</b>
<br/>发送请求时，参数可能携带时间戳，可以检查发送时间、避免因为缓存而请求不到最新数据
<br/>&emsp;&emsp;<b>var date=new Date();</b>
<br/>&emsp;&emsp;<b>date.getTime();</b>获取时间戳

```python
#python中的时间戳
import time
t=time.time()
tt=time.localtime()
print(f'当前时间：{tt[0]}年{tt[1]}月{tt[2]}日{tt[3]}时{tt[4]}分{tt[5]}秒')
print('python中的时间戳：',t)
print('js中的时间戳：',t*1000)
```

    当前时间：2023年7月26日7时29分5秒
    python中的时间戳： 1690327745.908017
    js中的时间戳： 1690327745908.0168

<br/><b style="color:red">eval 函数</b>
<br/>和 python 中的 eval 函数作用一样
<br/>js 代码中遇到 eval，把其中的部分拿到 console 中执行，结果赋给变量，以后这一大堆代码用该变量代替
<br/>网页搜在线 js 的 eval 加密/解密工具
<br/>&emsp;&emsp;<b>var s="console.log("提示信息")"</b>
<br/>&emsp;&emsp;<b>eval(s)</b>
<br/>&emsp;&emsp;去掉字符串两边的引号，将中间的部分作为语句

```python
#python中
s='print("打印")'
eval(s)
```

    打印

<br/><b style="color:red">prototype</b>
<br/>原型
<br/><br/>创建类：

```js
function Person(name, age) {
    this.name = name; //self
    this.age = age;
    this.chi = function (fan) {
        console.log(this.name + '在吃' + fan);
    };
}
p1 = new Person('小明', 18);
p2 = new Person('小李', 10);
```

给类扩展功能，增加功能/方法

```js
Person.prototype.sleep = function (when) {
    console.log(this.name + '在' + when + '点睡觉');
};
```

```python
#python中
class Person:
    def __init__(self,name,age):
        self.name=name
        self.age=age

    def chi(self,fan):
        print(self.name,'在吃',fan)

p1=Person('小明',18)
print(p1.name,p1.age)
p1.chi('米饭')
```

    小明 18
    小明 在吃 米饭

<br/><b style="color:red">变量提升</b>
<br/><br/>执行时先检查
<br/>第一次运行显示 undefined（不会报错），后面运行由于有缓存会显示 alex
<br/>可能引发混淆、潜在命名冲突、难以调试......
<br/>js 把变量的声明（只声明不赋值）提到了当前代码块的第一行->变量提升

```js
function fn() {
    console.log(name);
    var name = 'alex';
}
fn();
```

<br/>es6 提出之后推荐使用 let 声明局部变量，解决变量提升。会报错：在初始化之前不能使用 name 变量
<br/>在<b>同一个作用域内</b>，let 声明的变量可以修改，但<b>不允许声明两次</b>
<br/>可以在外面<b>let abc="a"</b>，再在函数内<b>let abc="aaa"</b>

```js
function fn() {
    console.log(name);
    let name = 'alex';
}
fn();
```

<br/><b style="color:red">闭包</b>
<br/>函数内部/其他 js 文件可以改全局变量
<br/>python 中只有声明 global 了才能改全局变量

```js
let name = '周杰伦';
function fn() {
    name = '王力宏';
}
fn();
console.log(name);
```

<br/>闭包，在其他地方想改改不成了

```js
(function () {
    var name = 'xxx1';
    语句块;
})();
```

<br/>闭包：封闭起来打包，保护里面的变量不被其他部分代码修改，外面访问不到里面，里面通过返回值与外部联系
<br/>但是，如果外面要访问局部的函数，需要局部往外扔东西（return）
<br/>定义一个变量接收=函数执行结果，接收返回值
<br/>比如：

```js
var jm = (function () {
    var keys = '12345'; //密钥，不能泄露出去，不能被其他部分修改
    let da = function (data) {
        console.log(data);
        return '用密钥的加密结果';
    };
    return da;
})();
```

<br/>返回的是一个函数，接收要加密的内容，在其它部分调用

```js
var a = jm('要加密的');
console.log(a);
```

<br/>其中的返回值也可以直接返回一个函数，不用变量 da 接收

```js
return function (data) {
    console.log(data);
    return '用密钥的加密结果';
};
```

<br/><br/>如果要返回多个函数的结果，可以返回一个对象，他们之间可以互相调用，比如在其他中<b>ret=this.AES()</b>，再处理 ret

```js
return {
    RSA:function(data){xxx;return xx;};
    AES:function(data){xxx;return xx;};
    MD5:function(data){xxx;return xx;};
  }
```

<br/>这个时候 jm 也是个对象，<b>jm.MD5("要加密的")</b>，用 md5 进行加密

<br/><br/><br/><br/><br/>闭包向外返回一些变量：
<br/>&emsp;&emsp;方法一：<b>return 变量</b>
<br/>&emsp;&emsp;方法二：用 window.n，窗口对象 n->全局变量 n，
<br/>&emsp;&emsp;&emsp;&emsp;函数里面<b>window.n=name</b>，再在函数外面调用<b>console.log(window.n)</b>或<b>console.log(n)</b>

<br/><b style="color:red">JS 和 HTML 的交互</b>
<br/>按钮点击效果，onclick 用于绑定点击结果函数：

```html
<input type="button" value="按钮" onclick="fn()" />   <input type="button" value="js绑定事件按钮" id="btn" />   
<script>
    function fn() {
        alert('点击按钮成功！');
    }
</script>
```

<br/><br/>更多事件见开发者工具->Sources->Event Listeners Breakpoints（事件断点）
<br/>给 button 添加属性，有很多很多，：
<br/>&emsp;&emsp;<b>onmouseup="fn()"、onmousedown="fn()"、onmousemove="fn()"、onmouseleave="fn()"、<br/>&emsp;&emsp;onscroll="fn()"、onfocus="fn()"</b>获取焦点、<b>onblur="fn()"</b>失去焦点
<br/>&emsp;&emsp;<b>onsubmit="fn()"</b>提交表单、<b>onchange="fn()"</b>更换选项

<br/><br/>一般在 js 代码中找到 html 元素绑定事件，不在 html 中写
<br/>注意 script 标签和 html 代码的顺序
<br/>js 代码获取元素：
<br/>&emsp;&emsp;<b>let btn=document.getElementById("btn")</b>，通过 id 拿到按钮，id 一般是唯一的，只有一个结果
<br/>&emsp;&emsp;<b>btn.adddEventListener("click",function(){})</b>，给该按钮绑定事件监听，参数为事件类型和处理函数
<br/>其他选择元素方式，有多个元素，需要遍历逐个绑定事件：

```js
let btnList = document.getElementsByClassName('b1');
let btnList = document.getElementsByName('b');
let btnList = document.getElementsByTagName('button');

for (let i = 0; i < btnList.length; i++)
    btnList[i].addEventListener('mouseleave', function () {
        alert('鼠标离开了！');
    });
```

<br/><br/>&emsp;&emsp;for (let i=0;i<btnList.length;i++)
<br/>&emsp;&emsp;&emsp;&emsp;btnList[i].addEventListener("mouseleave",function(){
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;alert("鼠标离开了！");
<br/>&emsp;&emsp;&emsp;&emsp;});

<br/>querySelector 选择器，语法和 css 选择器基本一样

```js
document.querySelector("p")，// 选择第一个p元素
document.querySelector(".c")，// 选择类为c的元素
document.querySelector("#c")，// 选择id为c的元素
document.querySelectorAll("p")，// 选择所有p元素
document.querySelectorAll(".c")，// 选择所有class为c的元素，需要遍历才能绑定事件在用户点击登录后，绑定事件，执行：拿到账号密码输入框，后面加.value拿到用户输入内容，判断账号密码是否存在/合理，弹窗提醒
```

## 3. jQuery

<br/>问题：原生的 documentById()、querySelector()、addEventListener()太长
<br/>解决：jQuery->一个 js 文件，把这些功能全部进行二次封装，高效精简
<br/>引入 jQuery，这里选择 3.6.4 版本：<b>\<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js"><\/script></b>
<br/><b>`$`</b>，jQuery 标志性的东西
<br/>&emsp;&emsp;之前`window.onload=function(){}`等页面结构和图片等完全加载出来了才开始执行函数，遇到大量图片/视频等很慢
<br/>&emsp;&emsp;jQuery 中`$(document).ready(function(){语句;});`，只要结构加载完了就开始执行函数，不管图片加载
<br/>&emsp;&emsp;也可以简写成`$(function(){语句;})`

<br/><b style="color:red">选择器</b>

```html
<input type="button" value="绑定事件按钮" id="btn" />
```

```js
$('#btn').click(function () {
    console.log('被点了！');
});
```

<br/><b style="color:red">属性控制</b>
<br/>获取输入框输入的值，`$("#username").val();`，val()不写是获取 value 属性的输入值，写了是往 value 属性
<br/>获取单选控件选择的选项，`$("input[type='radio']:checked").val();`，单选控件也可以用 ID 选择器等
<br/>选中一个 span 元素并让其显示信息，`$("#info").text("显示的信息")`，text()不写是获取信息，写了是显示信息
<br/>可以用来判断表单信息填写是否符合规范，每次点击提交时，检查，不对的可以在对应控件右边的空 span 标签内显示错误信息
<br/>`text("内容")`换成`html("内容")`可以写入 html 代码，支持换行等

<br/>`.trim()`，取出字符串两端的空格、制表符、换行符等

<br/>修改标签的属性，`$("#show").css("display","block");`和`$("#show").css("display","none");`，显示和不显示
<br/>新增属性，`$("#show").attr("abcdefg","aaa");`
<br/>获取属性，`$("#show").attr("abcdefg");`

<br/><b style="color:red">遍历器</b>
<br/>each(function()){}不写参数，需要<b>\$(this)</b>从 dom 对象变成 jQuery 对象，再提取文本
<br/>each(function()){}写参数 i 和 data，<b>\$(data)</b>把 dom 对象转换为 jQuery 对象，再提取文本

```js
$(function () {
    $('ul li').each(function (i, data) {
        console.log($(data).text());
    });
});
```

## 4. 第三方抓包工具 Fiddler

<br/>浏览器抓包被限制时用到
<br/>

打开开发者工具会闪退的情况，用 Fiddler 抓到页面源代码，把检测部分的 script 标签删了，保存为新的 html 文件；
<br/>在右边工具的<b>AutoResponser</b>中，<b>Enable rules</b>开启规则，<b>Add rules</b>添加规则，将每次的响应替换为修改后的 html 文件，勾选<b>Unmatched requests passthrough</b>
<br/>如果多页都有该 script 标签，可以把该标签的 src 文件替换为空的 js 文件

## 5. pyexecjs

<br/>作用：运行 js 代码，解决大部分复杂代码
<br/>应用条件：没有第三方 js 出现，很少 js 原生之外的内容
<br/>环境：依赖于能运行 js 的第三方环境

<b>a=execjs.eval()</b>，直接运行里面的 js 代码
<br/><b>a=execjs.compile()</b>，括号里面加载一段 js 代码，通过 a.call('fn',p1,p2...)访问这段代码中的函数 fn，参数为 p1、p2...

```python
#pip install pyexecjs
import execjs
print(execjs.get().name)#查看运行环境
```

    JScript

```python
ret=execjs.eval('''
    "a_b_c_d_e".split('_') //js代码
''')
print(ret)
```

    ['a', 'b', 'c', 'd', 'e']

```python
js='''
function fn(a,b){
    return a+b;
}
'''
a=execjs.compile(js)

#调用fn
a.call('fn',10,20)
```

    30

## 6. 各种加密算法

<br/><b style="color:red">MD5</b>
<br/>非常常见的加密逻辑，小巧速度快，极难破解。
<br/>非常复杂的哈希算法，单向散列函数，不可逆
<br/>python 计算 MD5 步骤：
<br/>&emsp;&emsp;<b>from hashlib import md5</b>
<br/>&emsp;&emsp;<b>object=md5()</b>，创建 md5 加密器对象
<br/>&emsp;&emsp;也可以加一些盐噪声<b>salt=b'anehdiuj';再 object=md5(salt)</b>
<br/>&emsp;&emsp;要加密的字符串 s，转为字节再加密，<b>obj.update(s.encode('utf-8'))</b>
<br/>&emsp;&emsp;获取密文，32 位，<b>miwen=obj.hexdigest()</b>

<br/>对某个文件计算 md5
<br/>&emsp;&emsp;以<b>'rb'</b>模式打开读取文本，对读出来的字节加密

<br/><b style="color:red">sha1、sha256、sha384、sha512</b>
<br/>和 md5 写法一模一样，也通过 hashlib 导入

```python
#python实现MD5
#自带
from hashlib import md5

#加盐噪声
salt=b'jsdnsnxcjisiwoeufwjkdsafhbvdiwurer9qioewflyhvweis'

#创建加密器对象
# obj=md5()
obj=md5(salt)

#要加密的东西
password="09354121794abc@#"

#输入必须是字节
obj.update(password.encode('utf-8'))
#或者在前面password=b"09354121794abc@#"，转成字节

#获取密文
miwen=obj.hexdigest()
#返回十六进制
print(miwen)
```

    b115ba39b932906b3c5236b8d96d650a

```python
from hashlib import sha1,sha256,sha384,sha512
obj1=sha1();obj2=sha256();obj3=sha384();obj4=sha512();
s=b'09354121794abc@#'
obj1.update(s);obj2.update(s);obj3.update(s);obj4.update(s)
print(obj1.hexdigest(),'长度：',len(obj1.hexdigest()))
print(obj2.hexdigest(),'长度：',len(obj2.hexdigest()))
print(obj3.hexdigest(),'长度：',len(obj3.hexdigest()))
print(obj4.hexdigest(),'长度：',len(obj4.hexdigest()))
```

    f861dc6295e9c2b043a713f3e2f9306b3ccae219 长度： 40
    7b33b7125c51bd4f742690fe190a0d328947b4e3e03835cc3f0ee259265ed297 长度： 64
    d3c1ea1532d1e3ba9507bac9b33f0613465eab67f998e8b6065513254a3b493277d770b2264f856619bd5e2c0c70aaee 长度： 96
    7bcbe4cb230dde81ce790a89d6ed27eec6fd3f95b557587a9c9895008958aea6ae53e0d092723d31e82bb8496d7b08e0cdb2f4dd274a402cc4166a026b7e0d7f 长度： 128

<br/><b style="color:red">URLEncode</b>
<br/>访问 url 时浏览器自动进行的 uelencode 操作，<b>又称百分号编码</b>
<br/>把 url 中的参数变成字节，每个字节再转化为 16 进制数字，前面补<b>%</b>

```python
from urllib.parse import urlencode,unquote

base_url='https://www.baidu.com/s?'
param_dic={
    'wd':'我饿了'
}
res=urlencode(param_dic)
print('urlencode：')
print('\t',res)
print('\t',base_url+res)

print('解码：')
print('\t',unquote(base_url+res))#查看url中的特殊符号和中文信息
```

    urlencode：
    	 wd=%E6%88%91%E9%A5%BF%E4%BA%86
    	 https://www.baidu.com/s?wd=%E6%88%91%E9%A5%BF%E4%BA%86
    解码：
    	 https://www.baidu.com/s?wd=我饿了

<br/><b style="color:red">base64</b>
<br/>传输字节太麻烦
<br/>base->将字节变成<b>字符串</b>并传输
<br/>对字节进行加密得到字节，再转为字符串
<br/>26 小写字母+26 大写字母+10 数字+2 特殊符号(+和/)
<br/>特点：最后是<b>=</b>

```python
import base64
s='宇宙 拉尼亚凯亚超星系团 室女座星系团 本星系群 银河系 猎户臂 古尔德带 本地泡 本星际云 奥尔特云 太阳系第三行星 地球'.encode('utf-8')  #字节
print(s)
print('---------------------------------------------------------------------------------------------')
print(base64.b64encode(s))  #字节
print('---------------------------------------------------------------------------------------------')
print(base64.b64encode(s).decode('utf-8'))  #字符串，最终结果
```

    b'\xe5\xae\x87\xe5\xae\x99 \xe6\x8b\x89\xe5\xb0\xbc\xe4\xba\x9a\xe5\x87\xaf\xe4\xba\x9a\xe8\xb6\x85\xe6\x98\x9f\xe7\xb3\xbb\xe5\x9b\xa2 \xe5\xae\xa4\xe5\xa5\xb3\xe5\xba\xa7\xe6\x98\x9f\xe7\xb3\xbb\xe5\x9b\xa2 \xe6\x9c\xac\xe6\x98\x9f\xe7\xb3\xbb\xe7\xbe\xa4 \xe9\x93\xb6\xe6\xb2\xb3\xe7\xb3\xbb \xe7\x8c\x8e\xe6\x88\xb7\xe8\x87\x82 \xe5\x8f\xa4\xe5\xb0\x94\xe5\xbe\xb7\xe5\xb8\xa6 \xe6\x9c\xac\xe5\x9c\xb0\xe6\xb3\xa1 \xe6\x9c\xac\xe6\x98\x9f\xe9\x99\x85\xe4\xba\x91 \xe5\xa5\xa5\xe5\xb0\x94\xe7\x89\xb9\xe4\xba\x91 \xe5\xa4\xaa\xe9\x98\xb3\xe7\xb3\xbb\xe7\xac\xac\xe4\xb8\x89\xe8\xa1\x8c\xe6\x98\x9f \xe5\x9c\xb0\xe7\x90\x83'
    ---------------------------------------------------------------------------------------------
    b'5a6H5a6ZIOaLieWwvOS6muWHr+S6mui2heaYn+ezu+WboiDlrqTlpbPluqfmmJ/ns7vlm6Ig5pys5pif57O7576kIOmTtuays+ezuyDnjI7miLfoh4Ig5Y+k5bCU5b635bimIOacrOWcsOazoSDmnKzmmJ/pmYXkupEg5aWl5bCU54m55LqRIOWkqumYs+ezu+esrOS4ieihjOaYnyDlnLDnkIM='
    ---------------------------------------------------------------------------------------------
    5a6H5a6ZIOaLieWwvOS6muWHr+S6mui2heaYn+ezu+WboiDlrqTlpbPluqfmmJ/ns7vlm6Ig5pys5pif57O7576kIOmTtuays+ezuyDnjI7miLfoh4Ig5Y+k5bCU5b635bimIOacrOWcsOazoSDmnKzmmJ/pmYXkupEg5aWl5bCU54m55LqRIOWkqumYs+ezu+esrOS4ieihjOaYnyDlnLDnkIM=

```python
#解码回字节
s='5a6H5a6ZIOaLieWwvOS6muWHr+S6mui2heaYn+ezu+WboiDlrqTlpbPluqfmmJ/ns7vlm6Ig5pys5pif57O7576kIOmTtuays+ezuyDnjI7miLfoh4Ig5Y+k5bCU5b635bimIOacrOWcsOazoSDmnKzmmJ/pmYXkupEg5aWl5bCU54m55LqRIOWkqumYs+ezu+esrOS4ieihjOaYnyDlnLDnkIM='
bs=base64.b64decode(s)
print(bs)
print('---------------------------------------------------------------------------------------------')
print(bs.decode('utf-8'))
```

    b'\xe5\xae\x87\xe5\xae\x99 \xe6\x8b\x89\xe5\xb0\xbc\xe4\xba\x9a\xe5\x87\xaf\xe4\xba\x9a\xe8\xb6\x85\xe6\x98\x9f\xe7\xb3\xbb\xe5\x9b\xa2 \xe5\xae\xa4\xe5\xa5\xb3\xe5\xba\xa7\xe6\x98\x9f\xe7\xb3\xbb\xe5\x9b\xa2 \xe6\x9c\xac\xe6\x98\x9f\xe7\xb3\xbb\xe7\xbe\xa4 \xe9\x93\xb6\xe6\xb2\xb3\xe7\xb3\xbb \xe7\x8c\x8e\xe6\x88\xb7\xe8\x87\x82 \xe5\x8f\xa4\xe5\xb0\x94\xe5\xbe\xb7\xe5\xb8\xa6 \xe6\x9c\xac\xe5\x9c\xb0\xe6\xb3\xa1 \xe6\x9c\xac\xe6\x98\x9f\xe9\x99\x85\xe4\xba\x91 \xe5\xa5\xa5\xe5\xb0\x94\xe7\x89\xb9\xe4\xba\x91 \xe5\xa4\xaa\xe9\x98\xb3\xe7\xb3\xbb\xe7\xac\xac\xe4\xb8\x89\xe8\xa1\x8c\xe6\x98\x9f \xe5\x9c\xb0\xe7\x90\x83'
    ---------------------------------------------------------------------------------------------
    宇宙 拉尼亚凯亚超星系团 室女座星系团 本星系群 银河系 猎户臂 古尔德带 本地泡 本星际云 奥尔特云 太阳系第三行星 地球

<br/><b style="color:red">对称加密</b>
<br/><b>加密和解密用同一个密钥</b>
<br/>常见的对称加密：<b>AES、DES、3DES</b>
<br/>加密步骤：
<br/>&emsp;&emsp;（1）要加密的字符串转为字节；
<br/>&emsp;&emsp;（2）AES 将字节长度补为 16 的倍数，DES 补为 8 的倍数，用什么补都可以，只要解密的时候知道就行，别和原字节中的重复了；
<br/>&emsp;&emsp;（3）进行加密，结果是字节。还可以对加密结果再 base64 加密，结果是字符串。
<br/>解密步骤：
<br/>&emsp;&emsp;（1）如果用 base64 加密了，先进行 base64 解密，得到字节。再进行 AES/DES 解密，得到字节；
<br/>&emsp;&emsp;（2）将字节转为字符串，替换掉填充的那些字符，得到原始字符串。

```python
#pip install pycrypto
#不行的话pip install pycryptodome
from Crypto.Cipher import AES
import base64

s='这是我要加密的明文'

#密钥必须是16或24或32位
#创建对象，密钥、模式、IV
obj=AES.new(key=b'wekdsdjfkesjdkeo',mode=AES.MODE_CBC,IV=b'0102030405060708')

bs=s.encode('utf-8')
que=16-len(bs)%16 #缺少字节的个数
bs+=(que*chr(que)).encode('utf-8')#长度补为16的个数，字节

#加密的内容必须是字节，长度是16的倍数。比如缺7个，填充：7*chr(7)
result=obj.encrypt(bs)
print(result)

#result是字节
b64=base64.b64encode(result)
print(b64)
```

    b'\x17\xc0Tq\xfdT\x8f\x9e\xf40"\xc1`_6S>\xe9\xc6\xb6\x81J0\xe7\xb5O1j\x04905'
    b'F8BUcf1Uj570MCLBYF82Uz7pxraBSjDntU8xagQ5MDU='

```python
#解密
miwen='F8BUcf1Uj570MCLBYF82Uz7pxraBSjDntU8xagQ5MDU='
obj=AES.new(b'wekdsdjfkesjdkeo',mode=AES.MODE_CBC,IV=b'0102030405060708')
bs=base64.b64decode(miwen)
r=obj.decrypt(bs)
print(r)

print(r.decode('utf-8'))
print(r.decode('utf-8').replace(chr(que),''))
```

    b'\xe8\xbf\x99\xe6\x98\xaf\xe6\x88\x91\xe8\xa6\x81\xe5\x8a\xa0\xe5\xaf\x86\xe7\x9a\x84\xe6\x98\x8e\xe6\x96\x87\x05\x05\x05\x05\x05'
    这是我要加密的明文
    这是我要加密的明文

```python

```

```python
from Crypto.Cipher import DES
import base64

s='去上学了'

# key必须是长度为8的字节,对DRS.MODE_CBC来说IV长度必须是8
obj=DES.new(key=b'ajskeodn',mode=DES.MODE_CBC,IV=b'01020304')
bs=s.encode('utf-8')
que=8-len(bs)%8 #缺少字节的个数
bs+=(que*chr(que)).encode('utf-8')#字节

#加密的内容必须是字节，长度是8的倍数
r=obj.encrypt(bs)
print(r)
```

    b'`$\x1a\xab\x1e \xd6\xaa\x8c<HJ\xdd\x8d\xe3\xd8'

```python
#解密
miwen=b'`$\x1a\xab\x1e \xd6\xaa\x8c<HJ\xdd\x8d\xe3\xd8'
obj=DES.new(key=b'ajskeodn',mode=DES.MODE_CBC,IV=b'01020304')
r=obj.decrypt(miwen)
print(r)
print(r.decode('utf-8').replace(chr(que),''))
```

    b'\xe5\x8e\xbb\xe4\xb8\x8a\xe5\xad\xa6\xe4\xba\x86\x04\x04\x04\x04'
    去上学了

<br/><b style="color:red">非对称加密</b>
<br/>加密和解密的密钥不是同一个，一个公钥一个私钥；
<br/>用公钥加密，密文发接收端，在接收端用私钥解密。
<br/>常见非对称加密算法：<b>RAS、DSA</b>，这里用 RSA
<br/><b>RSA 用同一个公钥每次加密的结果不一样</b>
<br/>生成公钥私钥
<br/>&emsp;&emsp;<b>from Crypto.PublicKey import RSA</b>
<br/>&emsp;&emsp;<b>rsa_key=RSA.generate(bits, randfunc=None, e=65537)</b>，生成新的 RSA 密钥对
<br/>&emsp;&emsp;&emsp;&emsp;<b>bits</b>最少 1024，推荐 2048
<br/>&emsp;&emsp;&emsp;&emsp;<b>randfunc</b>生成密钥的随机函数
<br/>&emsp;&emsp;&emsp;&emsp;e...

<br/>&emsp;&emsp;<b>rsa_key.publickey().exportKey()</b>，拿到公钥，<b>字节</b>
<br/>&emsp;&emsp;<b>rsa_key.exportKey()</b>，拿到私钥，<b>字节</b>

<br/>用公钥进行加密
<br/>&emsp;&emsp;<b>from Crypto.Cipher import PKCS1_v1_5</b>
<br/>&emsp;&emsp;<b>rsa_key=RSA.import_key(pub_key)</b>
<br/>&emsp;&emsp;<b>rsa=PKCS1_v1_5.new(rsa_key)</b>，创建加密对象
<br/>&emsp;&emsp;<b>rsa.encrypt(message.encode('utf-8'))</b>
<br/>加密步骤：（1）拿到明文 message；（2）读取公钥；（3）把公钥（字节字符串都行，字符串会自动转为字节）转化成 rsa_key；
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;（4）创建加密对象；（5）加密；（6）b64 处理
<br/><br/><br/>用私钥进行解密
<br/>&emsp;&emsp;<b>from Crypto.Cipher import PKCS1_v1_5</b>
<br/>&emsp;&emsp;<b>rsa_key=RSA.import_key(pri_key)</b>
<br/>&emsp;&emsp;<b>rsa=PKCS1_v1_5.new(rsa_key)</b>，创建解密对象
<br/>&emsp;&emsp;<b>rsa.decrypt(message.encode('utf-8'),sentinel)</b>，sentinel 用 None 就行
<br/>解密步骤：（1）拿到密文；（2）如果用 base64 加密了则先解密为字节；（3）读取私钥；（
<br/>&emsp;&emsp;&emsp;&emsp;&emsp;4）把私钥（字节字符串都行，字符串会自动转为字节）转为 rsa_keys；（5）创建解密对象；（6）解密
<br/><br/>浏览器只有公钥用于加密，服务器有公钥和私钥；浏览器给服务器发用 RSA，RSA 只能浏览器到服务器用，不然会被浏览器中爬出来

```python
#生成公钥和私钥
from Crypto.PublicKey import RSA #管理密钥

rsa_key=RSA.generate(2048)
print(rsa_key)

#拿到私钥，中间是b=ase64
pri_key=rsa_key.exportKey()
print(pri_key)

#公钥
pub_key=rsa_key.publickey().exportKey()
print(pub_key)

```

    Private RSA key at 0x1FDE77FB280
    b'-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAvnS3zR9866e+Lgv7jXvq88kZBBQb9gOAStFijefDtF34paL0\nJ5MSudJerfje5XCRALupcY8Im7hSv0hbhTOvOEygpC5v75vqF+qH82OvjzlU01JC\nHPWNulHFf42e3JnJjeE8q/K3n0tqFcd8/W8sehM3wR2XztvSxZuZYZdXkEtRCSoT\nPw7lzg5YGv6YAFXe3lsvh++4qS00jnfgGzFZMe/4Z33HLp6Be5G6fgz3rJKHLr9j\nBxy56gAnJLA8DxYu7EZUSKSHy0SfmPddg5yIEF/f9A44zWyjNWyKgt8LPcHKs3ji\n38TEVxiD40dBP8D3XSFtd7PM0GcDg6/jbtZmaQIDAQABAoIBAFno6t4cd9Id8bN2\nN65OqhelPziEL8D/XSC04TRBjcuHszqqh11pWmU70TOK8drZvbJdZTv1PKiapwGj\nLIVg5V6MGif3viMc9TGOJ9j4HehctdU/F3PpXhtvv+8b0butpA9lHcnEvvel1/Jp\nJvHTemk0ylTR3hkrAEEGWC3QjudQPSGS9ubWakbUiYai7ZIh5qs/WSNCVBXQrCjW\nQfEtToHPOcWuJfZ7IsBhWraIoXKqypX0UKppxhGLT1M8Ujy5zMHD/W7bkgx523eU\n81G8/k07p69ZD1aJkzYy6Z7F3xiwhWRiOQX5qO0nkr/XFc8uXHXwGtKQORn0B+mD\nPYcN47MCgYEAxR8qHS2bqk8RZhAXHFlCYf+NrGGJ+Mto1xSGdJXfS481SDfIC2wp\nayKjEWySPx9U+JiKDeT2akw1008dXsEGNU6Kf/AOr/OWUDzb5UoAZK0Sy3KWLORh\nO40LNxFO9cRq2muYbsTMFLuZjEu95PebYfbvQhvGW6cdUaLsVgk3TY8CgYEA91fa\n7dDl9hVi9WaNgS3zTCx80x0Z8sDN4piZxj8yRgq1ZWG3pdXV3AuW/uRhcDnl3be7\ns2pCE3/odtbOLRl4MTloYTQqSLCBkxIDn5bdZyIhs6pTh5rPYCm1kvYLrC9Sytso\nTTaynDar4s6iMOJVAfIL6x5oB/7NLF1gVB1LgIcCgYAMV0okr4FKZU7ai/FWdgQg\n7IXrH+Qqblmu9XsBe4ySR3H3hn6AsJHbQjzhT2HMj+Ka+bnS6t2+g+zuwMo+72i7\nF6K2JcpVm7NybIz7yulBZFCD6jWas+Wee9MS7IN8AYMLD6dob+uy9JfFX8yQtCvH\nM1WBVwnRHSJJxSB0tnj+4wKBgQCav9nWjqtBwnGujaIc303oK7FROFTiv2RQ0B7t\nnN5sWgjRzEhlNhteV9X51ZNs7px1kp2aC/IZVx5vM8e9CcFcMsmufz+xSNVY2Z1w\nvKf6/azORtOJ9P6n8JCMyOnWqakICAP4Ay/OcpoqBhQNt51t4S05xkVaMz3U8vrw\nxX9WgwKBgQCLG2bCtL6ZaloFyIqPXYrJJoTxlYFK5dmZB1xElOjAvhw4dpQRLQbZ\nXfNdD5hJZwy93MlH8tiTYZHjGWpU2xI9nwOapPmoRngoBiqS+5Bj4uDRJ0DVAfIb\nQ0ydhn/6ZkkOQTvB55n1sNVIFlbAjQC/U+Z+yInpmfe/2OKP3+XMFw==\n-----END RSA PRIVATE KEY-----'
    b'-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvnS3zR9866e+Lgv7jXvq\n88kZBBQb9gOAStFijefDtF34paL0J5MSudJerfje5XCRALupcY8Im7hSv0hbhTOv\nOEygpC5v75vqF+qH82OvjzlU01JCHPWNulHFf42e3JnJjeE8q/K3n0tqFcd8/W8s\nehM3wR2XztvSxZuZYZdXkEtRCSoTPw7lzg5YGv6YAFXe3lsvh++4qS00jnfgGzFZ\nMe/4Z33HLp6Be5G6fgz3rJKHLr9jBxy56gAnJLA8DxYu7EZUSKSHy0SfmPddg5yI\nEF/f9A44zWyjNWyKgt8LPcHKs3ji38TEVxiD40dBP8D3XSFtd7PM0GcDg6/jbtZm\naQIDAQAB\n-----END PUBLIC KEY-----'

```python
#进行加密
from Crypto.Cipher import PKCS1_v1_5
from Crypto.PublicKey import RSA
import base64

message='晚上没吃饭我饿了'

rsa_key=RSA.import_key(pub_key)
#创建加密对象
rsa=PKCS1_v1_5.new(rsa_key)

#加密
miwen=rsa.encrypt(message.encode('utf-8'))
print(miwen)

#变成base64进行数据传输
trans=base64.b64encode(miwen).decode('utf-8')
print(trans)
```

    b'd\xb8\x9bE(\xc2v\xac\xbc\x9e&\xfe\rE\xbd\nH\x862\x1f\xc7-/\xed\x13$\x80eDm\xf1\xa1\xa1B\xb1\xbc\x97\x87U\x13\x90\xb0\x08\xb8N\x14\xc1~2,s\xfe\x03\xca\xc7\xd7\x8e!\x133}\xe1\xda\xe2\xe1]\xecDz\xef\xfc]#/\x05L\xc0"\xb2\x9f\x1eP3\xab)\xd6\x88O\x17\xca"G!\xb2\xc0\xab\xfe\x02\xa1jd(K\xe9C\xc9>\x9c\x9a\x80`\x97\x0f\xa4\x08\x87z\x00\xd2\xf3\x10H\x7f\xd9M\x18\x1e+\xd8T\x83\xb3\x88\xe9]\x14X\x08T\x1a\xc1\xf0\xe1\x113\xdb\xbf\tTf\x14\x1d\x05.\x889fD%8d8\xec\x8f\xd0\x99\xbe\x91e|\x88\xf3\xc5q<\xe9\x91Y_\xebe\xfcg\xa4N|\xb3\x1f\x06\xd7\t\x92\x0bq\xb5\x87Ka,]\xbf\x7f=}\x88\x88j\xb1\xa7\xbd\x8c\x18\x00\xe9\xb2\xd4.Ia\xe7\xed\xae\x06\xcfF}owZ\xb8\x14\xaa\x12\xf9:=\x07zP\xb9\xe9\xf5{5T\x0e\xc1\xeb\x7f\x02\xa0Yg>\xb5\xdd'
    ZLibRSjCdqy8nib+DUW9CkiGMh/HLS/tEySAZURt8aGhQrG8l4dVE5CwCLhOFMF+Mixz/gPKx9eOIRMzfeHa4uFd7ER67/xdIy8FTMAisp8eUDOrKdaITxfKIkchssCr/gKhamQoS+lDyT6cmoBglw+kCId6ANLzEEh/2U0YHivYVIOziOldFFgIVBrB8OERM9u/CVRmFB0FLog5ZkQlOGQ47I/Qmb6RZXyI88VxPOmRWV/rZfxnpE58sx8G1wmSC3G1h0thLF2/fz19iIhqsae9jBgA6bLULklh5+2uBs9GfW93WrgUqhL5Oj0HelC56fV7NVQOwet/AqBZZz613Q==

```python

```

```python
#解密
from Crypto.Cipher import PKCS1_v1_5
from Crypto.PublicKey import RSA

data=trans #字符串

rsa_key=RSA.import_key(pri_key)
#创建解密对象
rsa=PKCS1_v1_5.new(rsa_key)

#解密
mingwen_bytes=rsa.decrypt(base64.b64decode(data.encode('utf-8')),None)
print(mingwen_bytes)
print(mingwen_bytes.decode('utf-8'))
```

    b'\xe6\x99\x9a\xe4\xb8\x8a\xe6\xb2\xa1\xe5\x90\x83\xe9\xa5\xad\xe6\x88\x91\xe9\xa5\xbf\xe4\xba\x86'
    晚上没吃饭我饿了

```python
#例子：中大网校的登陆密码加密过程
#在Networt->Initiator，查看请求从开始到结束经历了哪些js的处理
#cookie：访问识别区别每一台计算机
#requests处理时推荐用session，让上下文处理请求时自动用上次的cookie，不用再管了

#步骤：（1）进入登录页面，拿到cookie；
#      （2）获取到验证码->打码平台，搞定验证码
#      （3）把密码进行加密
#      （4）携带参数进行登录
#      （5）对登录后的cookie信息进行整理

import requests
from Crypto.Cipher import PKCS1_v1_5
from Crypto.PublicKey import RSA
import base64
import json

def base64_api(uname, pwd, b64, typeid):
    data = {"username": uname, "password": pwd, "typeid": typeid, "image": b64}
    result = json.loads(requests.post("http://api.ttshitu.com/predict", json=data).text)
    if result['success']:
        return result["data"]["result"]
    else:
        #！！！！！！！注意：返回 人工不足等 错误情况 请加逻辑处理防止脚本卡死 继续重新 识别
        return result["message"]
    return ""

#（1）
sess=requests.session()
resp=sess.get('https://user.wangxiao.cn/login')
print(resp.cookies)
print(sess.cookies)#一样
#resp.cookies.get('sessionId')，也要拼到后面的cookies中

#（2）
verify_code_url='https://user.wangxiao.cn/apis//common/getImageCaptcha'
headers={
    'User-Agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
    'referer':'https://user.wangxiao.cn/login?url=https%3A%2F%2Fwww.wangxiao.cn%2F',
    'Content-Type':'application/json;charset=UTF-8'#必须加
}
r=sess.post(verify_code_url,headers=headers)
dic=r.json()
bs64_vcode=dic['data'].split(',')[1] #拿到base64的验证码
result=base64_api('hfdy0935','09354121794',bs64_vcode,3) #识别验证码

#（3）
pwd='09354121794zzw#'
#公钥从js文件中找的
pub_key="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDA5Zq6ZdH/RMSvC8WKhp5gj6Ue4Lqjo0Q2PnyGbSkTlYku0HtVzbh3S9F9oHbxeO55E8tEEQ5wj/+52VMLavcuwkDypG66N6c1z0Fo2HgxV3e0tqt1wyNtmbwg7ruIYmFM+dErIpTiLRDvOy+0vgPcBVDfSUHwUSgUtIkyC47UNQIDAQAB"

#公钥处理
pub_key='-----BEGIN PUBLIC KEY-----\n'+pub_key+'\n-----END PUBLIC KEY-----'
#加载公钥
rsa_key=RSA.import_key(pub_key)

#也可以这样
#公钥处理
# pub_key='-----BEGIN PUBLIC KEY-----\n'+pub_key+'\n-----END PUBLIC KEY-----'
#加载公钥
# rsa_key=RSA.import_key(base64.b64decode(pub_key))

get_time_url='https://user.wangxiao.cn/apis//common/getTime'
 #密码处理
r1=sess.post(get_time_url,headers=headers)
data=str(r1.json()['data'])
pwd+=data

#创建加密对象
rsa=PKCS1_v1_5.new(rsa_key)
# 加密
miwen=rsa.encrypt(pwd.encode('utf-8')) #字节
miwen=base64.b64encode(miwen).decode('utf-8') #字符串

#（4）
login_url='https://user.wangxiao.cn/apis//login/passwordLogin'
login_data={
    'imageCaptchaCode':result,
    'password':miwen,
    'userName':18893521427
}
login_resp=sess.post(login_url,data=json.dumps(login_data),headers=headers)
#可以模拟正常的登录请求了

login_info=login_resp.json()
print(login_info)

#（5）
#找到成功登录后请求的cookies，把其中的参数拼成字典，以后发送请求直接在headers中带上该参数
#cookies有失效时间
```

    <RequestsCookieJar[<Cookie sessionId=1690521064295 for user.wangxiao.cn/>]>
    <RequestsCookieJar[<Cookie sessionId=1690521064295 for user.wangxiao.cn/>]>
    {'code': 0, 'msg': '成功', 'data': {'userName': 'pc_038211201', 'token': 'e4eb984b-80c5-4cac-b3e2-87a4328e8454', 'headImg': None, 'nickName': '188****1427', 'sign': 'fangchan', 'isBindingMobile': '1', 'isSubPa': '0', 'userNameCookies': 'O0U3dkJultGPRd+SvgCglQ==', 'passwordCookies': 'lD7TRqxIdtfdXcCSX9mZOw=='}, 'operation_date': '2023-07-28 13:11:05'}

```python
login_resp.json()['data']
```

    {'userName': 'pc_038211201',
     'token': 'e4eb984b-80c5-4cac-b3e2-87a4328e8454',
     'headImg': None,
     'nickName': '188****1427',
     'sign': 'fangchan',
     'isBindingMobile': '1',
     'isSubPa': '0',
     'userNameCookies': 'O0U3dkJultGPRd+SvgCglQ==',
     'passwordCookies': 'lD7TRqxIdtfdXcCSX9mZOw=='}

## 7. 例子

简单的 JS 代码用 python 重写，复杂的可以复制过来用 pyexecjs 调用
<br/>浏览器开发者工具使用：
<br/>&emsp;&emsp;（1）对 Network 的请求，在 Initiator 中查看其请求过程中所有参与处理的 js 文件，找到其中发送请求的 js 文件，点进去设置断点调试；
<br/>&emsp;&emsp;（2）点进去之后右侧的 BreakPoint 时断点列表，可添加新断点或设置启用/禁止某断点；
<br/>&emsp;&emsp;（3）右侧的 Scope 中是遍历，包括本地、全局等，一般在逐步调试设置断点/断点放行过程中关注本地变量的变化；
<br/>&emsp;&emsp;（4）右上角||用来放行断点，注意它右下角有没有三角符号，用于多个请求的切换，根据自己需要的变量值选择；
<br/>&emsp;&emsp;（5）右侧 Call Stack 是断点处变量的处理流程中的 js 文件，点进去可以逐步查找密文是怎么加密来的
<br/><br/>无限 debug 解决：Fiddler 或者 Charles 抓包替换其中 debug 部分代码；禁用所有断点（不能调试了，只能看着分析）

```python
#网易云音乐下载
#先找到在哪加的密，再分析加密算法，在js中实现，再转为python的写法

from Crypto.Cipher import AES
import json
import base64
import requests

def to16(data):
    pad_len=16-(len(data)%16)
    data+=(chr(pad_len)*pad_len).encode('utf-8')
    return data

def enc(data,p3):#接收字符串
    data_bs=data.encode('utf-8')
    key_bs=p3.encode('utf-8')
    aes=AES.new(key_bs,mode=AES.MODE_CBC,IV=b'0102030405060708')
    data_bs=to16(data_bs) #填充到长度16整数倍
    bs=aes.encrypt(data_bs)
    s=base64.b64encode(bs).decode('utf-8')
    return s #返回字符串


#对参数进行加密
def net_music_enc(data):
    p1='010001'
    p2='00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
    p3='0CoJUm6Qyw8W8jud'
    i='c9deesvOsKmhuE3R'
    encText=enc(data,p3)
    encText=enc(encText,i) #params
    encSecKey ='007b93c6eb7a7d003ced554b4586b89851cfa07afc7593411a90a9c3079ebb8ce1c299de3ac5c37dab2db3b911607ff144987ba90bb31b83c3f33b5c319ebdc6f674e9e4de949fbb5c8affe474723e38289f4b75f5c93b265d11c5cf1426a765d4d8b5d80593db836704c0a3152e7306075728d5d7359284c5726c1214f5dc3e'

    return encText,encSecKey

if __name__=='__main__':
    #原始数据
    #不登录的话后面没有csrf_token
    url='https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token='
    data={
        'csrf_token': '',
        'encodeType': 'aac',
        'ids':'[191024]',
        'level':'standard',
    }
    encText,encSecKey=net_music_enc(json.dumps(data)) #变成json再传
    print(encText,'\n',encSecKey)

    r=requests.post(url=url,data={'params':encText,'encSecKey':encSecKey})
    print(r.json()) #成功了
    song_url=r.json()['data'][0]['url']
    song_id=r.json()['data'][0]['id']
    res=requests.get(song_url)
    with open(f'../data/网易云{song_id}.mp4','wb') as f:
        f.write(res.content)
    #大功告成！
```

    rSwc0UI5y7B/wLaH4bxhM5OegaI8tcsaodRXkcWVGhHPN1oOcnl1Hn9lYY4NTZvZdK/WMig/JvIsNDPgPBLopiD+0hy9dd3q3RHdQMrcYoWVOHnJWMcHuOSxB5Vx+IepIs4FTVTiU6IpOT/3p4y9Qw==
     007b93c6eb7a7d003ced554b4586b89851cfa07afc7593411a90a9c3079ebb8ce1c299de3ac5c37dab2db3b911607ff144987ba90bb31b83c3f33b5c319ebdc6f674e9e4de949fbb5c8affe474723e38289f4b75f5c93b265d11c5cf1426a765d4d8b5d80593db836704c0a3152e7306075728d5d7359284c5726c1214f5dc3e
    {'data': [{'id': 191024, 'url': 'http://m801.music.126.net/20230728193258/612445c8699caf95182de46a7fe991fa/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482139576/1b9e/2863/c160/63ec5f158b1324e3a55ee11a2a92136a.m4a', 'br': 96009, 'size': 3375838, 'md5': '63ec5f158b1324e3a55ee11a2a92136a', 'code': 200, 'expi': 1200, 'type': 'm4a', 'gain': 0.0, 'peak': 1.3097, 'fee': 8, 'uf': None, 'payed': 0, 'flag': 4, 'canExtend': False, 'freeTrialInfo': None, 'level': 'standard', 'encodeType': 'aac', 'freeTrialPrivilege': {'resConsumable': False, 'userConsumable': False, 'listenType': None, 'cannotListenReason': None}, 'freeTimeTrialPrivilege': {'resConsumable': False, 'userConsumable': False, 'type': 0, 'remainTime': 0}, 'urlSource': 0, 'rightSource': 0, 'podcastCtrp': None, 'effectTypes': None, 'time': 277200}], 'code': 200}

```python
import requests
url='https://cn-sxxa-cm-01-03.bilivideo.com/upgcxcode/39/40/1013604039/1013604039-1-16.mp4?'
params={
    'e': 'ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=',
    'uipk': '5',
    'nbs': '1',
    'deadline': '1690277509',
    'gen': 'playurlv2',
    'os': 'bcache',
    'oi': '613320968',
    'trid': '0000f62183d6fc104b9b9ccfa4f1d6c2cbfch',
    'mid': '3493138528208963',
    'platform': 'html5',
    'upsig': 'dfb94be92a223fbcf77d2e914f8078d6',
    'uparams': 'e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform',
    'cdnid': '6602',
    'bvc': 'vod',
    'nettype': '0',
    'bw': '35740',
    'logo': '80000000',
}
headers={
    'user-agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
    'Referer':'https://m.bilibili.com/'
}
r=requests.get(url,params=params,headers=headers)
```

```python
r.status_code
```

    403

```python
with open('../data/spider.mp4','ab') as f:
    f.write(r.content)
```
