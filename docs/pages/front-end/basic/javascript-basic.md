---
title: JavaScript基础
titleTemplate: 前端笔记
---

**三部分：**
- JavaScript 的核心 **ECMAScript**，即**ES**，描述了该语言的语法和基本对象；
- DOM （Document Object Model）描述了处理网页内容的方法和接口；
- BOM （Browser Object Model）描述了与浏览器进行交互的方法和接口。

## 1.引入方式
- `script`标签内部写，可指定`type="text/javascript"`
- `script`用`scr引入外部js文件` ，记得写`type = 'module`
- 如果用src引入了，标签内部写的会被**忽略**
- 脚本阻塞
    - `async`，有大量后台脚本需要加载，并只想尽快加载到位时用，不同脚本之间加载的先后关系不确定，对其它有依赖的话可能会出错
    - `defer`，脚本按照页面中出现的顺序加载和运行
        ```html
        <script async src="js/vendor/jquery.js"></script>
        <script async src="js/script2.js"></script>
        <script async src="js/script3.js"></script>

        <script defer src="js/vendor/jquery.js"></script>
        <script defer src="js/script2.js"></script>
        <script defer src="js/script3.js"></script>
        ``` 
## 2. 注释
```javascript
// 单行
/* 多行
    多行
    多行
*/
```
## 3. 结束符
- 一句结束要有`;`
- 会忽略多余的空格，可以添加空格提高可读性
- 代码折行
    ```javascript
    document.write("a \
    b")
    ``` 
## 4. 输入和输出
```javascript
alert('输出一句话'); // 弹窗形式展示输出
document.write('<div>123</div>'); // 向页面代码中写，可以动态渲染
console.log('一段话'); // 浏览器控制台输出
console.log(a,b,c,"aaaa");
console.warn('警告内容'); // 输出警告
console.error(); // 控制台输出自定义错误
clear(); // 清空控制台

var a=prompt(); // 提示用户输入，得到的是字符串
prompt('输入年龄：');
```
## 5. 变量及声明
- 用一种声明，再用另一种声明会报错 
- `let`**局部**变量
    - 不能重复声明同一个变量
    - **块作用域**
    - 允许同时声明多个变量并赋值
    - 在能访问到的情况下，先局部变量，没有再找全局
        - 局部没定义直接用，会找全局有没有
- `var`**全局**变量
    - 允许同时声明多个变量并赋值
- `const`**常量**
    - 声明时必须赋值
    - **块作用域**
    - 不能修改，会报错
- `delete s`，删除变量
- 外面var声明，函数里面var再声明，值会被修改，但let不会，循环里面也一样
```javascript
let a;
var a=1,b,c=0,d=0.1,e;
const b=2,c=1,d=5,f=3;

function f() {let a=1}
console.log(a); // 报错
``` 
- 命名规则：
    - 字母、数字、下划线、$，不能数字开头
    - 区分大小写
    - 不允许用保留字做变量名
    - 见名知意

## 6. 数据类型
- 值类型（基本类型）：`String`、`Number`、`Boolean`、`Null`、`Undefined`、`Symbol`
- 引用数据类型（对象类型）：`Object`、`Function`、`Array`、`RegExp`、`Date`
- `typeof`关键字查看数据类型
    ```javascript
    document.write(typeof(a));
    typeof a;
    ```
-  数值
   -  `1、2.3、-100、1e5`
   -  `NaN`表示计算错误，类型为`Object`
   -  `isNaN(a)`，判断变量是否为`NaN`，返回true或false
   -  `Infinity`正无穷、`-Infinity`负无穷，`1/0`、`-1/0`结果
      -  `isFinite()`判断变量是否是有穷数，正负无穷和`NaN`返回false
   -  除了`BigInt`，不存在整数/整形，一个看上去是整数的东西其实是浮点数
   ```javascript
    0.1+0.2; // 0.30000000000000004
    (0.1*10+0.2*10)/10; // 0.3，可以这样代替；或者保留小数
    ``` 
-  字符串<span id="string"></span>
      -  ''或""，可以互相嵌套
      -  \`\`可以用于多行
      -  字符串可以是对象，`let x=new String("abcd");`
      -  输出单引号、双引号、反斜杠等时可以用转义符`\`
            -  `\'`、`\"`、`\\`、`\r`、`\t`
      -  输出时，字符串拼接太长
            -  用反引号\`\`包起来，中间的变量用`${name}`表示——**占位符**
      - `s[0]、s.charAt(0)`根据下标索引
      - `s.toLowerCase();`、`s.toUpperCase();`，字符串s中全转为小写、大写
      - `s.match("abcd")`，匹配，如果找到则返回这个字符
      - `s.trim()`，**去除首尾空格**
      - `s.trimStart()`、`s.trimEnd()`分别去除左侧和右侧的空格
      - `s=s.replace("被替换","替换");`
      - `s.slice()`，按索引取，一个数表示从它开始到最后；两个数左闭右开
      - `s.substring()`，起始、结束位置索引
      - `s.substr()`，起始位置、长度索引
      - `s.indexOf()`，查找元素索引，不存在则返回-1
      - `s.split(",")`，用逗号分隔，结果是数组
      - `a.toString()`，其他类型的转为字符串
      - `.match()`，正则表达式匹配
      - `s.startsWith('a')`、`s.endsWith('b')`，是否以指定字符串开头、结尾
      - `s.repeat()`，重复指定次数
- 布尔类型
    - `boolean`
    - 值有`true`、`false`
    - 转换为布尔类型
        - `''`、`""`、`0`、`undefined`、`null`、`false`、`NaN`转换为false
        - 其他是true
        ```javascript
        // false
        Boolean(0);
        ``` 
- `undefined`未定义类型
    - 未定义
    - **只声明没赋值**
- `null`空类型
    - **赋值了但内容为空**
    - 可以用来**清空变量**
    - `null`和`undefined`的值相等，但类型不同，null是对象，undefined是undefined
    ```javascript
    let obj=null;
    ``` 
- `Symbol`类型
    - ES6中新的数据类型，**给对象添加属性和方法**，表示**独一无二的值**
    - 解决命名冲突问题
    - 不能与其他数据进行运算
    ```javascript
    let s=Symbol(); // 创建
    s.description; // undefined
    let s2=Symbol('字符串1'); 
    s2.description; // '字符串1'
    let s3=Symbol.for('字符串2');
    s3.description; // '字符串2'
    ``` 
    ```javascript
    // 添加方式一
    let game1={
        name: '俄罗斯方块',
        up() {alert('向上');},
        down() {alert('向下');}

    }
    // 想在game对象中新加属性/方法
    // 不知道里面的结构，不知道原来有没有同名的
    // 所以借助Symbol，快速安全加到原对象，不会破坏原来的属性和方法
    let methods={
        up: Symbol(),
        down: Symbol()
    }
    game1[methods.up]=function(){
        alert('我可以向上');
    }
    game1[methods.down]=function(){
        alert('我可以向下');
    }
    // 调用
    game1[methods.up]();
    game1[methods.down]()



    // 添加方式二
    let game2={
        name: '狼人杀',
        [Symbol.for('say')]: function() {
            alert('发言');
        }
    }
    game2[Symbol.for('say')]();



    // 添加方式三
    let game3={
        name:"狼人杀",
        [Symbol('say')]: function() {
            console.log("我可以发言")
        },
        [Symbol('zibao')]: function(){
            console.log('我可以自爆');
        }
    }
    game3[Reflect.ownKeys(game3)[1]]();
    game3[Reflect.ownKeys(game3)[2]]();
    ```
- 指向语言内部使用的方法，在特定场景下自动执行
    - `Symbol.hasInstance` 当其他对象使用 `instanceof` 运算符，判断是否为该对象的实例时，会调用这个方法 
    - `Symbol.isConcatSpreadable` 对象的 `Symbol.isConcatSpreadable` 属性等于的是一个布尔值，表示该对象用于`Array.prototype.concat()`时，是否可以展开。 
    - `Symbol.species` 创建衍生对象时，会使用该属性 
    - `Symbol.match` 当执行`str.match(myObject)` 时，如果该属性存在，会调用它，返回该方法的返回值。 
    - `Symbol.replace` 当该对象被`str.replace(myObject)`方法调用时，会返回该方法的返回值。 
    - `Symbol.search` 当该对象被`str.search (myObject)`方法调用时，会返回该方法的返回值。 
    - `Symbol.split` 当该对象被str. split (myObject)`方法调用时，会返回该方法的返回值。 
    - `Symbol.iterator` 对象进行`for...of`循环时，会调用`Symbol.iterator`方法，返回该对象的默认遍历器 
    - `Symbol.toPrimitive` 该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。 
    - `Symbol. toStringTag` 在该对象上面调用 `toString` 方法时，返回该方法的返回值 
    - `Symbol. unscopables` 该对象指定了使用`with`关键字时，哪些属性会被with环境排除。
    ```javascript
    class Person {
        // param是检测类型时传入的被检查的变量，在这里是o
        // 原来返回的是false
        // 现在可以自定义执行instanceof时，要执行的操作
        // 甚至o不是Person类型，但可以给判断结果改成true
        static [Symbol.hasInstance](param) {
            console.log(param);
            console.log('用于检测类型时触发');
            return true;
        }
    }
    let o={};
    console.log(o instanceof Person);
    ``` 

## 7. 类型转换
- 隐式，某些运算符执行时自动转换
    ```javascript
    let num=13;
    let num2='2';
    console.log(num+num2); // 字符串'132'
    console.log(num-num2); // 数字11

    // 除了加号以外的算术运算符都会把数据转为数字类型，正号也可以
    +'11'; // 11
    +'0x10'; // 16
    '1'*1; // 1
    '11'-11; // 0
    '11'+11+22; // 111122
    ``` 
- 显式转换
    - `Number()`转为数字，失败时结果为NaN
    - `parseInt()`转为十进制整数，转不了的为NaN
        - 转字符串时，第二个参数可选，表示字符串所表示数字的进制
    ```javascript
    parseInt("123",10); // 123
    parseInt("123",8); // 83
    ``` 
    - `parseFloat()`保留小数，只用于解析十进制数
    - `变量.toString(进制)`
    - `String()`转为字符串
    - `Boolean()`，转为布尔值
    ```javascript
    Number('12'); // 12
    Number(12); // 12
    Number('abc') //NaN
    ``` 
## 8. 运算符
- 赋值运算符
    - `=`、`+=`、`-=`、`*=`、`/=`、`%=`
- 算术运算符
    - `+`、`-`、`*`、`/`、`%`、`**`
- 一元运算符
    - `++`、`--`，注意在前面还是后面
        ```javascript
        var a=1;
        // 输出3，a变成2
        ++a+1;
        // 输出3，a变成3
        a++ +1;
        ```  
- 关系运算符
    - `in` ，判断索引是否在数组索引范围内、对象key是否在对象内
        ```javascript
        1 in myArr;
        PI in Math;
        "ab" in "abc";
        ``` 
    - `instanceof`，判断对象是否是指定类型，true/false
        ```javascript
        let a=new Date();
        a instanceof Date; // true
        ``` 
- 比较运算符
    - `>`、`<`、`>=`、`<=`
    - `==`值是否相等，不管类型
    - `===`值和类型是否都相等
    - `!=`，只比较值
        - 特殊`NaN!=NaN`
    - `!==`是否不全等，值、类型完全一致时为false，其他为true
        ```javascript
        // true
        1=='1'
        // false
        1==='1'
        ``` 
- 逻辑运算符
    - `&&`、`||`、`!`
    - 逻辑中断（短路逻辑）`short-circuit logic`
    - 是否执行第二个语句取决于第一个操作数的结果
        ```javascript
        11 && 22; // 都为真则输出最后一个真值
        11 || 22; // 都为真则输出第一个真值
        false && a++; // 第一个为假，后面的不执行
        true || a++; // 第一个为真，后面的不执行
        ``` 
- 运算符优先级
    - 小括号>一元>算数>关系>相等>逻辑>赋值>逗号
- 位逻辑运算符
    - `a&b`，按位与
    - `a|b`，按位或
    - `a^b`，按位异或
    - `~a`，按位取反
    - `a<<b`，将a的二进制串左移b位，右边移入0
    - `a>>b`，右移b位，左边移入0
    - `a>>>b`，右移b位，丢弃被移出的所有位，左边空位补0
        ```javascript
        15 & 9; // 9，1111&1011=1001
        15 | 9; // 15，1111|1001=1111
        15^9; // 6， 111^1001=0110
        ~15; // -16，~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000
        ~9; // -10，~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110
        9<<2; //36，1001变成100100
        9>>2; // 2,1001变成10
        -9>>2; // -2
        19>>>2; // 4，10011变成100
        ``` 
- 字符串运算符
    - `+`、`+=`
- 条件（三元）运算符
    - `条件? 值1 : 值2;`
    - 可选链操作符
        ```javascript
        const a={
            a1:1,
            a2:{
                a21:1,
                a22:3
            }
        }
        // a有吗？如果有，那么a2有吗？如果有那么a22
        console.log(a?.a2?.a22);
        ```
- 逗号运算符
    - 对两个操作数进行求值并返回最终操作数的值
        - `for (let i=0,j=9;i<j;j++){}` 
- 一元操作符
    - `delete`
        - 成功返回true，失败返回false
        - 删除变量，var声明的删不掉会报错
        - 删除对象属性，`delete myObj['name'];`或`delete myObj.name;`
        - 删除数组元素后那个位置仍在，值为undefined
    - `typeof`
        - `typeof a;`
        - `typeof(a);`
    - `void`
        - `void expression;`、`void(expression);`
        - 没有返回值
        ```javascript
        <a href="javascript:void(0)">Click here to do nothing</a>
        ```
        <br>
## 9. 数字进制
- 十进制数可以以0开头，后面接其他十进制数，如果后面数都小于8，则被认为是八进制数
- 二进制，`ob`或`0B`开头，，后面0/1
- 八进制，0开头，如果后面不在0-7，则会被转为十进制
- 十六进制。`0x`或`0X`开头，超0123456789ABCDEF会报错

## 10.  数组
- 数据类型可以任意
- `let arr=[]`、`let arr=new Array()`，空数组
- `arr.length`数组长度，可用于遍历
- `arr[0]`，取第0个，可以修改
- `arr.push('尾部字符串','end')`，尾部添加，一个或多个元素
- `arr.unshift('头部字符串')`，头部添加，一个或多个元素
- `arr.pop()`，删除最后一个元素并返回
- `arr.shift()`，删除第一个元素并返回
- `arr.splice(1)`，删除索引为1到末尾的元素并返回
- `arr.splice(1,1)`，删除索引为1开始，删一个并返回
- `arr.splice(1,2,'x')`，索引为1开始，删两个，插入`x`
- `arr.splice(1,2,'x','y')`，删两个，插入两个
- `arr.splice(2,0,'x')`，索引为2的元素开始，删0个，插入后面的
- `arr.splice(2,0,'x','y')`，插入多个
- `arr.slice(2)`，提取从索引为2到末尾的所有元素
- `arr.slice(1,3)`，提取索引从1到3的元素，左闭右开
- `arr.indexOf('aaa')`，返回'aaa'在数组中的第一个索引，不存在则返回-1
- `arr.lastIndexOf()`，从后向前搜索，返回第一个索引，不存在返回-1
- `arr[0][2]`多维数组取元素
- `arr.join(",")`数组元素之间用逗号连起来，形成字符串，不给参数默认`逗号`
- `arr.toString()`数组转为字符串，逗号连接
- `arr.reverse()`，反转元素
- `arr.sort(function (a,b) {return a-b;})`，升序排列，或者直接`arr.sort()`，后面的有些数组有问题
- `arr.sort(function (a,b) {return b-a;})`，降序排列
- `let arr=arr1.concat(arr2,arr3)`，合并数组，一个或多个
- `arr.map((x) => {})`，对数组中每个元素都作为x输入函数进行运算
    - 里面的函数，一个参数表示数组元素，两个参数则第二个表示**索引**
- `arr.forEach((x) => {})`和上面一样
- `arr.at(1)`，指定位置的元素，用[]更方便
- `arr.flat()`，里面的高维元素展平，参数为深度，不指定默认1只展开一层
- `arr.filter((item, index)=>{})`，返回函数判断为true的元素**组成的数组**，筛选元素
- `Array.from()`，伪数组转为数组
    - 伪数组：比如querySelectorAll的结果等
    ```javascript
    // 筛选
    const arr=[{position:'h1',price:100},{position:'h2',price:200},{position:'h3',price:300}];
    arr.filter(item => item.price>100 && item.price<=200);
    ``` 
- `arr.reduce((previous, current) => {}[,origin])`，累计值，参数是“函数”或“函数,初值”
    - 函数的参数是累计值和当前值
    - 没初值则把数组第一个元素作为初值，初值一般取0
- `arr.includes('string')`，数组是否含有xxx，`true`/`false`
- 数组遍历
    ```javascript
    let arr=['a','b','c','d',0,100,true,false,'asdhd',123];
    for (let i=0; i<=arr.length; i++>){} // 这样也可以
    for (let k in arr) {
        // k是索引，还有可能返回自定义的属性名字
        // 最好判断一下是否是该字符串自己的而不是原型的，不推荐用这个
        console.log(k,arr[k]);
    }
    for (let k of arr) {
        // k是元素，推荐
        console.log(k);
    }
    // 形参可以有1、2、3个
    // 分别表示值、值和索引、值和索引和数组
    arr.forEach((value, index, array) => {
        console.log(value, index, array)};
    );
    ```    
- 数组解构
    ```javascript
    // a=1 b=2 c=3
    // 多了的不管，少了的是undefined
    const [a,b,c] = [1,2,3,4,5,6]; 
    // a=1 b=[2,3,4,5] c=6
    // 剩余参数必须放在最后
    const [a,b,...c]=[1,2,3,4,5,6];
    // 
    Math.max(...[1,2,3,4,5]);
    // 互换值
    [a,b]=[b,a];
    ```       
        
## 11.  语句
- 分支
    - if
        ```javascript
        // 只有if没有else if 和else也符合规则
        // 可以嵌套
        var a=Number(prompt('输入一个数'))
        if (typeof a !=='number'){
            console.log('输入的不是数字');
        } else if (a>100) {
            console.log('大于100');
        } else if (a>=0) {
            console.log('0-100之间');
        } else {
            console.log('小于0');
        }
        ``` 
    - 三元运算符
        ```javascript
        var score=prompt('输入成绩：');
        console.log(Number(score)>=60? '及格':'不及格');
        ``` 
    - switch
        - 记得跟`break`，不然回会再判断后面的
        - `default`可以没有
        ```javascript
        let code=prompt('输入1或2');
        switch (code) {
            case '1':
                console.log('中奖了');
                break;
            case '2':
                console.log('没中奖');
                break;
            default:
                console.log('输入格式错误');
                break;
        }
        ``` 

- 循环
    - `for...in`，循环一个指定的变量来循环一个对象所有可枚举的属性
    - `for...of`，可迭代对象(Array、Map、Set、arguments)上创建一个循环
    - `break`、`continue`
    - 循环嵌套
    - while
        ```javascript
        let count=0;
        while (true) {
            let num=+(prompt('输入一个数字：'));
            count+=1;
            if (!isNaN(num)) {
                console.log(`输入的数字是${num}`);
                break;
            } else if (count === 4) {
                console.log('4次错误，已退出');
                break;
            } else {
                console.log('输入的不是数字');
            }
        }
        ```  

    - do...while
        - 先运行一次再判断
        ```javascript
        var i = 0;
        do {
          if (i === cats.length - 1) {
            info += "and " + cats[i] + ".";
          } else {
            info += cats[i] + ", ";
          }

          i++;
        } while (i < cats.length);
        ``` 

    - for
        ```javascript
        for(let i=1;i<=6;i++) {
            document.write(`<h${i}>这是h${i}标签</h${i}>`);
        }

        for(let i=1;i<=5;i++){
            for(let j=1;j<=i;j++){
                document.write('※');
            }
            document.write('<br>');
        }
        
        // 遍历数组，k是索引
        for (let k in arr) {
            console.log(k,arr[k]);
        }
        ``` 

## 12.  函数
- 数组/对象作为参数传递，函数里面修改了外面也会变，参数也可以是函数
- 函数提升，**先调用后定义**，仅适用于函数声明，不适用于函数表达式
- **函数表达式**，匿名函数或把函数赋给变量
    ```javascript
    // 函数声明
    function my_func() {
        alert("输出内容");
    }
    my_func();
    
    // 函数表达式
    let greeting=function(){
        alert("hello");
    };
    // 带()自动执行该函数
    greeting();
    // 返回函数对象
    greeting;
    ``` 
- 调用自身——递归
- 函数作用域：函数内定义的变量在外面不能访问，函数内可以访问父作用域的变量
- 嵌套函数：函数内部再定义函数，内函数是外函数**私有的**，形成闭包
- 闭包closure：可以拥有独立变量以及绑定了这些变量的环境的表达式（通常是函数）
    - 内部可以访问外部的参数和变量
    - 外部不能访问内部的参数和变量
    - 内部函数只可以通过外部函数访问
    - 在创建新的对象或者类时，方法通常应该关联于对象的**原型**，而不是定义到对象的构造器中
        - 不然每次构造器被调用时，方法都会被重新赋值一次
    - 作用：将可以访问内部变量的外部函数传给外部，使外部可以访问内部变量
    ```javascript
    // 闭包
    function outside(x) {
        function inside(y) {
          return x + y;
        }
        return inside;
      }
      const fnInside = outside(3); // 可以这样想：给我一个可以将提供的值加上 3 的函数
      console.log(fnInside(5)); // 8
      console.log(outside(3)(5)); // 8


      function MyObject(name, message) {
          this.name = name.toString();
          this.message = message.toString();
        }
        MyObject.prototype.getName = function () {
          return this.name;
        };
        MyObject.prototype.getMessage = function () {
          return this.message;
        };


        function count() {
            let i=0;
            function fn() {
                i++;
                console.log(`函数被调用${i}次`);
            }
            return fn;
        }
        const fun=count();
        fun();
        // 每调用一次fun()，显示次数多一次
    ```
- 作用域链：闭包包含多个作用域，它们递归地包含了所有包含它的函数作用域
    - 本质是底层的**变量的查找机制**
- 命名冲突：同一闭包作用域下同名参数/变量，**最近（最里面）的优先级高**
    ```javascript
    function outside() {
        const x = 5;
        function inside(x) {
          return x * 2;
        }
        return inside;
      }
      console.log(outside()(10)); // 20（而不是 10）
    ```
- 实参多于形参，多的会忽略；形参多于实参，少的用`undefined`替代
- 形参可以给值
    ```javascript
    // 2
    (function (a=3,b=1) {
        alert(a+b);
    })(1,1,1,1,1);
    // NaN
    (function (a,b) {
        alert(a+b);
    })(1);
    // 2
    (function (a=3,b=1) {
        alert(a+b);
    })(1);
    // 这样用的多，没给值默认是0
    (function (a,b) {
        a=a||0;
        b=b||0;
        alert(a+b);
    })(1);
    ``` 
- 匿名函数，没有函数名，不会自己做任何事情
    - 通常和事件处理程序一起使用
    ```javascript
        function() {
            alert("输出");
        }
        // 例子
        var myButton=document.querySelector("button");
        myButton.onclick=function(){
            alert("hello");
        }
        ```
- 箭头函数
    - 比函数表达式更简洁，而且没有自己的`this`、`arguments`、`super`、`new.target`，沿作用域链向上找this
    - 如果形参只有一个，则小括号可以省略
    - 如果只有一条语句，则花括号可以省略，语句执行结果作为返回值
    - 使用封闭执行上下文的`this`值
    - 更适合那些本来需要匿名函数的地方
    ```javascript
    (param1, param2, …, paramN) => { statements }
    (param1, param2, …, paramN) => expression
    //相当于：(param1, param2, …, paramN) =>{ return expression; }

    // 当只有一个参数时，圆括号是可选的：
    (singleParam) => { statements }
    singleParam => { statements }
    // 没有参数的函数应该写成一对圆括号。
    () => { statements }
    // 可以赋值给变量
    let f= () => {console.log(1);};
    let f1= x => x+1;
    ``` 
    - 改变this指向
       - `apply()`
        - 任意函数对象的`apply()`方法传递一个**数组**作为参数列表
        ```javascript
        let arr=[1,2,3];
        Math.max.apply(Math,arr);

        // 计算数组最大值也可以
        Math.max(...arr);
        ``` 
        - `call()`
        ```javascript
        function lastNameCaps() {
          return this.last.toUpperCase();
        }
        var s = new Person("Simon", "Willison");
        // 改变this指向，使其指向s
        lastNameCaps.call(s);
        // 和以下方式等价
        s.lastNameCaps = lastNameCaps;
        s.lastNameCaps();
        ```
        - `bind()`
        - 不执行，只改变this指向
        ```javascript
        const fun=fn.bind(obj); 
        fun(); // 执行
        ``` 
    - 在箭头函数出现之前，每一个新函数都定义了自己的 this 值（在构造函数中是一个新的对象；在严格模式下是 undefined；在作为“对象方法”调用的函数中指向这个对象；等等）
    ```javascript
    function Person() {
        // 构造函数 Person() 将 `this` 定义为自身。
        this.age = 0;

        setInterval(function growUp() {
          // 在非严格模式下，growUp() 函数将 `this` 定义为“全局对象”，
          // 这与 Person() 定义的 `this` 不同。
          this.age++;
        }, 1000);
      }
      const p = new Person();
    ``` 
    - 在 ECMAScript 3/5 中，通过把 this 的值赋值给一个变量可以修复这个问题
    ```javascript
    function Person() {
        // 有的人习惯用 `that` 而不是 `self`。
        // 请选择一种方式，并保持前后代码的一致性
        const self = this;
        self.age = 0;

        setInterval(function growUp() {
          // 回调引用 `self` 变量，其值为预期的对象。
          self.age++;
        }, 1000);
      }
    ``` 
    - 用箭头函数
    ```javascript
    function Person() {
        this.age = 0;

        setInterval(() => {
          this.age++; // 这里的 `this` 正确地指向 person 对象
        }, 1000);
      }
      const p = new Person();
    ```  
- 按钮绑定函数时
    - 如果要传参，用匿名函数，不然调用定义好的函数会直接执行（不等点击按钮）
    ```javascript
    let b=document.querySelector("button");
    // 匿名函数方式
    b.onclick=function (){alert("abc")};
    // 调用函数方式
    // 不写括号等点了按钮才会执行
    // 不然立即执行
    function fn(s) {
        alert(s);
    }
    // 会立即执行
    b.onclick=fn("abc");

    // 建议addEventListener
    ``` 
- 返回值
    - `return `，return一大串更紧凑，写的更快；或者一大串赋值给变量再return
- 立即执行函数
    ```javascript
    // 也可以有名字，不过不再调用就不给名字了
    // 两种方式
    // 防止变量污染
    // 第一个括号里面形参
    // 后面的括号调用函数。里面可以传实参
    (function (s1,s1) {
        alert(s1+s2);
    })(1,2);
    (function () {
        alert("q");
    }());

    let second=prompt("输入秒数：");
    (function (second) {
        let h=parseInt(second/60/60%24);
        let m=parseInt(second/60%60);
        let s=parseInt(second%60);
        h=h<10?'0'+h:h;
        m=m<10?'0'+m:m;
        s=s<10?'0'+s:s;
        alert(`${h}时${m}分${s}秒`);
    })(second);
    ```
-函数构建对象
    - 如：构造对象的函数，`this`指**全局对象**
    - 详见[函数构建对象](#functionObject)
- [函数对象](#function-object)
- `arguments`对象
    - **不知道传了多少参数，可以用arguments表示所有参数**
    - 类型是`object`
    - keys从0开始，`.length`获取参数个数
    ```javascript
    function func(separator) {
        let result = ""; // 初始化列表
        // 迭代 arguments
        for (let i = 0; i < arguments.length; i++) {
          result += arguments[i];
        }
        return result;
      }
    ``` 
- 默认参数，形参指定值,`function fn(a,b=1){}`
- 剩余参数，**最后一个**参数以`...`为前缀，**数组类型**
    ```javascript
    // 第一个参数赋给multiplier，后面的赋给theArgs
    function multiply(multiplier, ...theArgs) {
        return theArgs.map((x) => multiplier * x);
      }
      const arr = multiply(2, 1, 2, 3);
      console.log(arr); // [2, 4, 6]
    ``` 

<br>

## 13. 错误
- `try`执行语句
- `throw`抛出异常（自定义，是字符串、数字、布尔值、对象都行），直接throw相当于报错
- `catch`捕捉抛出的异常并处理
- `finally`最终会执行
- 抛出异常之后跳转catch部分，不执行try中后面的语句 
- `Error`对象，`new Error("要显示的错误信息");`
- 中间有`return xxx`的话直接返回，不执行后面的语句
- 也可以自定义抛出哪种类型的错误，如`throw new Error;`、`throw new RangeError;`、`throw new RangeError("自定义错误提示");`
```javascript
function myFunction() {
let x = prompt("输入1");
try { 
    if(x == "")  throw "值为空";
    if(isNaN(x)) throw "不是数字";
    x = Number(x);
    if(x!=1) throw "不是1";
}
catch(err) {
    console.log( "错误: " + err);
} finally {
    console.log('完毕');
}
}
```
<br>

## 14. 调试
- `debugger;`
<br>

## 15. 变量提升
- 作用域内，变量的**var声明**都将被提升到该作用域的**最顶部**
    - 可以先使用后声明
- **只提升声明，不提升初始化/赋值**
```javascript
console.log(z); // undefined
var z=10; // 只提升声明不提升初始化/赋值

// let和const必须在声明后（不管赋不赋值）才能用
let a;
console.log(a); // undefined
console.log(b); // 报错
a=1;
let b=1;
 ```
<br>

## 16. 严格模式
- `use strict;`语句，只允许出现在脚本或函数的开头
- 严格模式下不能使用未声明的变量
- 不允许删除变量、函数，不允许变量重名、不允许用八进制、不允许用转义字符
- 变量名不允许用`eval`、`arguments`
- 函数内部严格模式下不能用外部的全局变量
<br>

## 17. 保留关键字
- `abstract`、`arguments`、`boolean`、`break`、`byte`
- `case`、`catch`、`char`、`class*`、`const`
- `continue`、`debugger`、`default`、`delete`、`do`
- `double`、`else`、`enum*`、`eval`、`export*`
- `extends*`、`false`、`final`、`finally`、`float`
- `for`、`function`、`goto`	`if`、`implements`
- `import*`、`in`、`instanceof`	`int`、`interface`
- `let`、`long`、`native`、`new`、`null`
- `package`、`private`、`protected`、`public`、`return`
- `short`、`static`、`super*`、`switch`、`synchronized`
- `this`、`throw`、 `throws`、`transient`、`true`
- `try`、`typeof`、`var`、`void`、`volatile`
- `while`、`with`、`yield`		
<br>

## 18. 文本格式化
- `\x`之后的数值认为是16进制
    ```javascript
    "\xA9"; // "©"
    ``` 
- Unicode转义序列在`\u`之后至少需要4个字符
    ```javascript
    "\u00A9"; // "©"
    ```
<br>

## 19.  迭代器和生成器
- 迭代器是一个对象，定义一个序列，在终止时肯覆盖返回值
- `Array`、`Argument`、`Set`、`Map`、`String`、`NodeList`、`TypeArray`可以用for...of遍历
    - `next()`，返回`value`下一个值和`done`是否是最后一个值
    - 创建一个指针对象，指向当前数据结构的起始位置；第一次调用执行第一个成员，后面每次调用向后移动
        ```javascript
        function makeRangeIterator(start = 0, end = Infinity, step = 1) {
            let nextIndex = start;
            let iterationCount = 0;

            const rangeIterator = {
                next() {
                    let result;
                    if (nextIndex < end) {
                        result = { value: nextIndex, done: false };
                        nextIndex += step;
                        iterationCount++;
                        return result;
                    }
                    return { value: iterationCount, done: true };
                },
            };
            return rangeIterator;
        }

        let it = makeRangeIterator(1, 10, 2);
        let result = it.next();
        while (!result.done) {
            console.log(result.value); // 1 3 5 7 9
            result = it.next();
        }
        console.log(`已迭代序列的大小：${result.value}`); // 5
        ``` 
- 生成器
    - 返回结果是迭代器对象，用`next()`方法可以得到值
    - `yield`相对于函数的暂停标记，也可以认为是函数的**分隔符**，每调用一次next，执行一段代码
    - `next()`可以传实参，作为yield语句的返回值
    ```javascript
    function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
        let iterationCount = 0;
        for (let i = start; i < end; i += step) {
          iterationCount++;
          yield i;
        }
        return iterationCount;
      }
    ``` 

## 20. 模块
- 导出模块功能
    - 变量、函数定义时前面加关键字`export`可以导出
    - 类在后面导出（不是定义时）
    - 或者在文件末尾`export {name,draw,reportArea};`导出多个，用逗号分隔
    - `export {a as f1 , b as f2};`改变导出名字
    - `as`重命名导出/导入，避免重名
    - 对于一个默认导出的，可以用任意名导入；对于分别暴露的，用`{对应变量名}}导入`
    ```javascript
    export const name = "square";
    export function draw(){};
    export { name, draw, reportArea, reportPerimeter };
    export {function1 as f1, function2 as f2};
    // 导出类
    export { Square };
    ``` 
- 导入模块功能到脚本，导入之后可以用
    ```javascript
    import {a} from './modules/square.js';
    import { name, draw, reportArea as r1, reportPerimeter as r2 } from './modules/square.js';
    // 导入类
    import { Square } from './modules/square.js';
    ``` 
- 应用到HTML
    ```html
    <script type="module" src="main.js"></script>
    ``` 
- 默认导出，每个模块只允许有一个**默认导出**
    ```javascript
    export default randomSquare;
    // 匿名函数
    export default function(ctx) {}
    // 导入，这两个都行
    import randomSquare from "./modules/square.js";
    import { default as randomSquare } from "./modules/square.js";
    ``` 
- 创建模块对象
    - 导入所有可用的导出并重命名
    ```javascript
    import * as Module from "/modules/module.js";
    // 调用其中的
    Module.function1();
    Module.function2();
    ``` 
- 动态加载模块
    ```javascript
    // Promise对象
    import("/modules/mymodule.js").then((module) => {
      // Do something with the module.
    });
    ``` 
- 如果报错，尝试给引入的两个js文件的标签加`type="module"`
    - test2.s导入了test1.js导出的变量
    ```html
    <script src="./test1.js" type="module"></script>
    <script src="./test2.js" type="module"></script>
    ``` 

## 21. JavaScript数据类型和数据结构
- **动态**：变量与任何特定值类型没有任何关联，人和便利都可以被赋予和重新赋予各种类型的值；
- **弱类型**：涉及不匹配的类型时允许隐式类型装换
- **原始值**：除了 Object 以外，所有类型都定义了表示在语言最低层面的不可变值。我们将这些值称为原始值
- `undefined`表示**值**的缺失，`null`表示**对象**的缺失
- 正负2^-1044^~2^1024^之外的值会自动转换
    - 大于`Number.MAX_VALUE`的正值转为`+Infinity`
    - 小于`Number.MIN_VALUE`的正值转为`+0`
    - 小于`-Number.MAX_VALUE`的负值转为`-Infinity`
    - 大于`-Number.MAX_VALUE`的负值转为`-0`
- `BigInt`类型：可以表示任意大小的整数，甚至超过安全整数限制2^53^-1=9007199254740991
    - 通过**将n附加到整数末尾**或**调用`BigInt()`函数**
    ```javascript
    const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
    x + 1n === x + 2n; // false，因为 9007199254740992n 和 9007199254740993n 不相等
    // Number
    Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true，因为都等于 9007199254740992
    ``` 
- `Symbol`类型
    - 唯一并且不可变的原始值，可以用来作为对象属性的键

## 22. 垃圾回收机制
- 内存生命周期：内存分配-内存使用-内存回收；
- 内存泄漏：内存未释放/无法释放；
- 引用计数法：没有引用的了就回收。（互相引用会导致内存泄漏）
- 标记清除法：从全局出发，清除访问不到的。

## 23. 深浅拷贝
- 拷贝对象
    ```javascript
    // 直接复制，复制的是地址
    // o改了之后原obj也会改
    const o={...obj};
    
    // 浅拷贝
    // 单层拷贝值，深层拷贝地址
    // 修改a单层数据时不会影响原对象oldObj，深层>=2层会影响
    const a={};
    Object.assign(a,oldObj);


    // 深拷贝
    // 1. 递归（每次判断是否是深层，是的话遍历转成浅层再拷贝）
    let newObj={};
    function deepCopy(newObj, oldObj) {
        for (let k in oldObj) {
            if (oldObj[k] instanceof Array) {
                newObj[k]=[];
                deepCopy(newObj[k],oldObj[k]);
            } else if (oldObj[k] instanceof Object) {
                newObj[k]={};
                deepCopy(newObj[k],oldObj[k]);
            } else {
                newObj[k]=oldObj[k];
            }
        }
    }
    // 2. loadsh库
    // 3. 转为json字符串再转成对象
    JSON.parse(JSON.stringify(oldObj));
    ``` 

## 24. 防抖`debounce`、节流`throttle`
- 防抖：单位时间内频繁触发事件，取消上一次，执行这一次
    - 取消上次的计时器，新建计时器
    - 
- 节流：单位时间内频繁触发事件，执行上一次，取消这一次，不会被打断
    - 上次的计时器不被打断，取消这次的计时器
- 取消计时器用`timer=null`，判断是否存在计时器用`if (timer) { }`



## 25. 事件循环
    - 单线程某一时刻只能执行一行代码
    - 为了让耗时代码不阻塞其他代码而设计
    - 定义：执行代码和收集异步任务的模型，在调用栈空闲，反复调用任务队列里回调函数的执行机制
    - Javascript内部代码执行：
        - 执行同步代码，遇到异步代码交给宿主浏览器执行
        - 异步有结果之后，把回调函数放入任务队列排队
        - 当调用栈空闲后，反复调用任务队列里的回调函数

## 26. 宏任务与微任务

-   宏任务：由浏览器环境执行的异步代码
    -   JS 脚本执行事件、定时器、AJAX、用户交互事件
-   微任务：由 JS 引擎执行的异步代码
    -   `promise`的`.then()`和`.catch()`
-   执行顺序：**同步>微任务>宏任务**

```javascript
console.log(1);
setTimeout(() => {
    console.log(2);
}, 0);
new Promise(resolve => {
    console.log(3);
    resolve();
}).then(() => {
    console.log(4);
    setTimeout(() => {
        console.log(5);
    }, 0);
    new Promise(resolve => {
        console.log(6);
        resolve();
    }).then(() => {
        console.log(7);
    });
});
console.log(8);
// 结果：13846725
```

## 27. 同源策略（Same-Origin Policy）

-   浏览器的一种安全策略
-   协议、域名、端口号必须完全相同
-   违背就是跨域
-   解决跨域：
    -   JSONP
        -   `script`标签具有跨域能力
        -   只能 GET 请求
        ```javascript
        btn.addEventListener('click', async e => {
            let username = e.target.value;
            const script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
            // 在后端接收请求并处理再返回响应
        });
        ```
    -   CORS（Cross-Origin Resource Sharing）跨域资源共享
        -   完全在服务器中进行，不需要客户端做任何特殊操作
        -   原理：设置一个**响应头**高速浏览器，该请求允许跨域，就行了
        -   如：
            ```javascript
            // node中
            router.get('/testAJAX', function (request, response) {
                //通过response 来设置响应头，来允许跨域请求
                //response.set("Access-Control-Allow-Origin","http://127.0.0.1:3000");
                response.set('Access-Control-Allow-Origin', '*');
                response.send('testAJAX 返回的响应');
            });
            // 或者
            //使用通配符 *
            response.setHeader('Access-Control-Allow-Headers', '*');
            //设置一组
            response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
            ```
            ```python
            from fastapi import FastAPI, Response
            from fastapi.middleware.cors import CORSMiddleware
            app = FastAPI()
            app.add_middleware(
                CORSMiddleware,
                allow_origins = '*',
                # 也可以限制指定的源/请求头
                allow_headers = '*'
            )
            ```


