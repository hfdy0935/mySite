---
title: JavaScript对象
titleTemplate: 前端笔记
---

- `globalThis`指向window
## 1. 对象`object`
- `名称 - 值`
    - python中的**字典**
    - Java中的**散列映射表**
    - C/C++中的**散列表**
- 内有属性和方法（函数），无序
- 未赋值的属性值为`undefined`
- 方法可以不用写`:`和`function`关键字
- 可嵌套多层
- 对象的`this.`
    - 指向当前代码运行时的对象
    ```javascript
    // 对象字面量创建空对象
    let my_obj={};
    // 实例化创建空对象
    let a=new Object();
    // 
    let my_obj={
        name:{
            first:'Bob',
            last:'Smith',
        },
        age: 20,
        position: 'China',
        song: function(s){
                alert(s+'唱歌');
        },
        introduceSelf() {
            console.log(`This is ${this.name.first} ${this.name.last}`);
        },
        Info:{
            work1:{
                name:'staff',
                position:'china',
            },
            work2:{
                name:'fireman',
                position:'usa',
            }
        }
    }
    // 查
    // 带-的属性名记得用[""]
    my_obj.name;
    my_obj['name'];
    // 查嵌套对象的属性，链式调用
    my_obj.name.first;
    my_obj['name']['first'];
    my_obj.Info.work1.position;
    // 增
    my_obj.aaa='aaa';
    my_boj['aaa']='aaa';
    // 改
    my_obj.name='zzz';
    my_obj['name']='zzz';
    my_obj.song=function(){alert("改")};
    // 删
    delete my_obj.name;
    delete my_obj['name'];
    // 调用方法
    // 方法名加()表示调用该函数，没有()返回函数定义
    my_obj.song('aaa');
    my_obj.introduceSelf();
    // 返回函数，不执行
    my_obj.introduceSelf;
    // 遍历，k是属性名/方法名的字符串
    for (let k in my_obj) {
        console.log(k,my_obj[k])
    }
    // 获取keys和values，结果都是对象，键都行0开始，有属性.length，可以遍历
    Object.keys(bgObj);
    Object.values(bgObj);
    // 数组，每个元素还是数组（两个元素，key和value），只有第一层是数组
    Object.entries(bgObj);

    // 对象合并
    const new_obj=[...my_obj,...my_obj];
    ```
    <br> 
- 数组/Map转对象
    ```javascript
    const result=Object.fromEntries(arr); // 二维数组转为对象
    const result2=Object.fromEntries(m); // Map转为对象
    ``` 
- 函数方法构建对象<span id="functionObject"></span>
    - `this`单独使用表示全局对象，函数中表示全局对象`[object Window]`
    - 严格模式下，单独使用表示全局对象，函数中this是未定义的
    - `this`会随执行环境而变化
    - 创建对象的模板
    - 存在内存浪费问题，每创建一个对象都要重新声明里面的属性和方法
        - 解决方法：原型
    ```javascript
    function createPerson(name) {
        const obj = {};
        obj.name = name;
        obj.introduceSelf = function () {
             console.log(`你好！我是 ${this.name}。`);
        };
        return obj;
    }
    //创建多个对象
    const salva=createPerson("Salva");
    const frankie=createPerson("Frankie");
    

    // 或者，this指全局对象
    function Person(name) {
        this.name = name;
        this.introduceSelf = function () {
          console.log(`你好！我是 ${this.name}。`);
        };
    }
    const salva = new Person("Salva");
    const frankie = new Person("Frankie");
    ``` 
- `getter`和`setter`
    - getter获取某个特定属性的值
    - setter设定某个特定属性的值
    ```javascript
    var o = {
         a: 7,
         get b() {
           return this.a + 1;
         },
         set c(x) {
           this.a = x / 2;
         },
       };
       console.log(o.a); // 7
       console.log(o.b); // 8
       o.c = 50;
       console.log(o.a); // 25
    ``` 
- `delete`删除属性
    - `delete o.a;`
- 对象解构
    - ajax返回数据等快速赋给变量
    - 默认解构出来的变量名必须是对象的key，才能找到对应关系，可改名
    ```javascript
    // name='name1' age=20
    const { name, age } = {name: 'name1',age: 20};
    // 只解构其中部分参数
    const { name } = {name: 'name1',age: 20};
    // 可以设置默认参数，对象不存在gender属性，但仍能解构成功
    const { name, age, gender='boy'} = {name: 'name1',age: 20};
    // 别名，nn='name1' aa=20, 
    const { name: nn, age: aa} = {name: 'name1',age: 20};
    // 不关心的变量用_占位

    // 嵌套解构，对象的属性还是对象
    // city='Guangzhou' country='China'
    const { name, age, address: {city, country } } = {name: 'name1', age: 20, address: { city: 'GuangZhou', country: 'China'} };
    
    // 包含数组
    const { name, task: [{task1, task2}] } = {name: 'name1', task:[{task1: '作业', task2: '实验'}]};
    ``` 
- 比较对象，两个独立声明的对象永远不会相等，即使属性相同
<br>

## 2. 对象原型/原型对象
- JS中所有对象都有一个内置属性，`prototype`，它**本身也是对象**，称为**原型对象**，也有自己的原型，最终构成**原型链**，终止于拥有`null`作为其原型的对象上；
- 访问对象属性时，如果找不到，就会在原型中搜索，再找不到依次搜索原型的原型...，末端没找到返回`undefined`；
- `Object.prototype`是最基础的原型，所有对象都默认有它，它的原型是`null`，位于原型链的终点；
- `Date`对象从`Date.prototype`继承，`Array`同理
-  构造函数的prototype = 构造出来实例对象的__proto__
    ```javascript
    let a = new Array(1,2,3);
    a.__proto__ === Array.prototype; // true
    let b = [1,2,3,'a'];
    b.__proto__ === Array.prototype; // true
    ```
- 获取对象的原型
    ```javascript
    Object.getPrototypeOf(my_obj);
    ``` 
- 设置对象的原型
    - `Object.create()`，创建新对象，允许指定一个**作为新对象原型的对象**，**对象本身没有新增属性方法，要访问其原型**
    - `setPrototypeOf(o1,o2)`**设置对象原型**，把o1的原型设置为o2
    - `__proto__:`**设置对象原型**
        - 在**实例对象**中，直接给实例设置原型
        - 和\[\[prototype]]意义相同，但可以修改
        - 里面有`constructor`，指向`prototype`
        - 因为有`__proto__`存在，对象才能赢其原型的属性和方法
    ```javascript
    // 原型
    const personPrototype = {
        name: "p1",
        greet() {
          console.log(this.name);
        },
    };

    const carl1 = Object.create(personPrototype);
    carl1.name="p2";
    const carl2={
        name:'p2',
        __proto__:personPrototype}
    const carl3=new Object();
    carl3.name='p2';
    Object.setPrototypeOf(carl3,personPrototype);

    carl1.__proto__===carl2.__proto__; // true
    carl2.__proto__===carl3.__proto__; // true
    carl1.__proto__===carl3.__proto__; // true

    // this指的是继承的对象而不是原型
    car1l.greet(); // p2
    carl2.greet(); // p2

    // 直接以null为原型的对象
    const d=Object.create(null);
    // undefined，d没有继承Object.prototype
    d.hasOwnProperty;
    ``` 
- 修改现有对象的\[\[prototype]]内部属性
    ```javascript
    const obj = { a: 1 };
    const anotherObj = { b: 2 };
    Object.setPrototypeOf(obj, anotherObj); 
    // obj ---> anotherObj ---> Object.prototype ---> null
    ``` 
- 属性遮蔽
    - 对象的属性和方法会覆盖其原型的属性和方法
    - 调用时先在对象中找，找不到再从原型中找，再找不到再原型，直到找到或原型为`null`了
    -  当继承的函数被调用时，`this`指向的是**当前继承的对象**，而不是拥有该函数属性的原型对象。当他们有相同的变量时`this.`会调用继承的对象的属性
    - `__proto__: `给对象设置 \[\[Prototype]]
    ```javascript
    const o = {
        a: 1,
        b: 2,
        // __proto__ 设置了 [[Prototype]]，指向另一个对象
        __proto__: {
          b: 3,
          c: 4,
        },
      };
    console.log(o.a); // 1
    console.log(o.b); // 2，属性遮蔽
    console.log(o.c); // 4
    console.log(o.d); // undefined 
    ``` 
- 构造函数
    - 某对象是的原型的构造函数等于该对象本身
    ```javascript
    Array.prototype.constructor===Array; // true
    ``` 
    
    - 通过构造函数新增方法
    ```javascript
    // 通过给原型添加新方法的方式增加新方法
    Array.prototype.sum=function() {
            return this.reduce((pre,cur) => pre+cur,0);
    }
    let arr=new Array(1,2,3);
    arr.sum(); // 可以直接用
    
    Array.prototype.max=function() {
            return Math.max(...this);
    }


    // 通过覆盖原型的方式增加新方法
    // 注意要指定constructor
    Star.prototype = {
        // 指回原函数
        constructor: Star;
        sing() {console.log('唱歌')};
    }
    ``` 

- **assign**
    - 将`personPrototype`对象中定义的方法绑定到`Person`函数的`prototype`属性上，**对象本身有了方法，不继承**
    - 之后用`Person()`创建的对象将获得`Person.prototype`作为原型，自动包含`greet`方法
    - 把第二个对象的属性和方法加到第一个对象中
    ```javascript
    const personPrototype = {
        greet() {
          console.log(`你好，我的名字是 ${this.name}！`);
        },
    };
    function Person(name) {
        this.name = name;
    }
    Object.assign(Person.prototype, personPrototype);
    // 或
    // Person.prototype.greet = personPrototype.greet;
    ``` 
- 自有属性
    - 自己有的，不是继承原型的
    ```javascript
    const irma = new Person("Irma");
    // 检查是否是自有属性
    console.log(Object.hasOwn(irma, "name")); // true
    console.log(Object.hasOwn(irma, "greet")); // false
    ``` 
- 看一看
    ```javascript
    function doSomething() {}
    doSomething.prototype.foo = "bar";
    const doSomeInstancing = new doSomething();
    doSomeInstancing.prop = "some value";
    console.log("doSomeInstancing.prop:     ", doSomeInstancing.prop); // some value
    console.log("doSomeInstancing.foo:      ", doSomeInstancing.foo); // bar
    console.log("doSomething.prop:          ", doSomething.prop); // undefined
    console.log("doSomething.foo:           ", doSomething.foo); // undefined
    console.log("doSomething.prototype.prop:", doSomething.prototype.prop); // undefined
    console.log("doSomething.prototype.foo: ", doSomething.prototype.foo); // bar
    ``` 


## 3. 面向对象
- 一个方法拥有相同的函数名，但在不同类中可以具有不同的实现，--**多态**
- 一个方法在子类中替换了父类中的实现，--**子类重写/重载**了父类中的实现
- 对象内部私有性，外部访问不到，只能通过提供的接口获取和修改，--**封装**
    - 如`private`关键字
    - 或`__`开头
- 可复用
<br>

## 4. 内置对象Math
- 数学运算
    ```javascript
    Math.PI;
    // 10
    Math.abs(-10);
    // 向下取整，10
    Math.floor(10.34);
    // 向上取整，11
    Math.ceil(10.4);
    // 四舍五入，保留整数
    Math.round(1.34);
    ///
    Math.max(1,2,4,1,2,3);
    Math.min(5,8,4,2,1,3);
    Math.sin(); Math.cos();Math.tan();
    Math.asin();Math.acos();Math.atan();
    Math.sinh();Math.cosh();Math.tanh();
    Math.asinh();Math.acosh();Math.atanh();
    Math.pow(); Math.sqrt();Math.exp();
    Math.log2();Math.log10();
    Math.cbrt(); // 立方根
    Math.sign(); // 符号函数，-1、0、1
    // 0-1随机数，左闭右开
    Math.random();
    // n-m随机整数
    Math.floor(Math.random()*(m-n+1))+n;
    // 随即改变背景颜色
    let btn=document.querySelector("button");
    let body=document.querySelector("body");
    function random() {
        return Math.floor(Math.random()*256);
    }
    btn.addEventListener("click",()=>{
        let str=String(random())+','+random().toString()+','+random().toString();
        body.style.backgroundColor=`rgb(${str})`;
    })
    ``` 
    <br>

## 5. 函数对象
- 有方法`call()`和`apply()`，第一个参数是对象本身
    ```javascript
    let myObj1,myObj2;
    function myFunction(a, b) {
        return a * b;
    }
    // 结果都是20
    myObj1 = myFunction.call(myOb1, 10, 2);
    myObj2 = myFunction.apply(myObj2,[10,2]);
    ```
<br>

## 6. Number对象
    ```javascript
    Number.parseFloat(); // 转为浮点数
    Number.parseInt(); // 转为整数
    Number.isFinite(); // 是否为有限数字
    Number.isInteger(); // 是否为整数
    Number.isNaN(); // 是否为NaN

    let a=9.394;
    a.toExponential(); // 返回数字的指数形式字符串
    a.toFixed(4); // 9.3940，四舍五入，返回指定小数位数的表示形式
    a.toPrecision(3); // 9.39，四舍五入，返回指定精度的数字
    ``` 
<br>

## 7. String对象
- 数字格式化
    ```javascript
        var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
          style: "currency",
          currency: "CNY",
        });

        console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一，三一四。二五
    ``` 
    ```javascript
    const s1="2+2";
    const s2=new String("2+2");
    s1===s2; // false
    ``` 
<br>

## 8. Array对象
- [更多见上面](#Array)
- 创建长度不为0，但没元素
- 数组长度不一定等于元素个数，而是等于**最大索引+1**
    ```javascript
    // 三种方法
    const arr1 = new Array(arrayLength);
    const arr2 = Array(arrayLength);
    const arr3 = [];
    arr3.length = arrayLength;
    ``` 
- 创建单个元素的数组
    ```javascript
    const arr = Array.of(9.3); // arr 只包含一个元素：9.3
    ``` 
- 初始化时赋值
    ```javascript
    let a=new Array(1,2,3,4,5,'a');
    let a=Array('a','s','d',12,'v');
    let a=['a',123,42,4,2];
    ```
- 根据索引拿/修改元素、遍历数组
- `a.length`获取长度，赋0会清空，赋小于长度的值会截断
- `a.forEach()`遍历
    ```javascript
    a.forEach((element)=>{
        console.log(element);
    });
    // 不建议用for...in，因为普通元素和所有可枚举属性都会被列出
    ``` 
- `a.filter()`查找元素
- `a.find()`查找元素
    ```javascript
    let y1 = a.filter((item,index) => {
        return item == "5";
    });
    let y2 = arr.find((item,index)=>{
        return item == "5";
    });

    ```
- 稀疏数组
    - 包含空槽
    ```javascript
    const a = Array(5); // [ <5 empty items> ]

    const b = [1, 2, , , 5]; // 连续逗号，[ 1, 2, <2 empty items>, 5 ]
    
    // 直接给大于 array.length 的索引设置值以形成空槽：
    const c = [1, 2];
    c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

    // 通过直接设置 .length 拉长一个数组：
    const d = [1, 2];
    d.length = 5; // [ 1, 2, <3 empty items> ]

    // 删除元素：
    const e = [1, 2, 3, 4, 5];
    delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]
    ``` 
    - 迭代时空槽跳过
    - 访问不存在的数组索引时返回`undefined`
    - 多维数组`a[1][2][5]`
    <br> 

## 9.  Date日期对象
- 创建日期对象，返回**字符串**
    ```javascript
    // 无参数
    // new Date([parameters]);
    let date=new Date();
    // 如果省略时分秒将被设为0
    // Mon Dec 25 2023 13:30:00 GMT+0800 (中国标准时间)
    let date=new Date("December 25, 2023 13:30:00");
    // Mon Dec 18 2023 00:00:00 GMT+0800 (中国标准时间)
    let date=new Date(2023,11,18);
    // Mon Dec 18 2023 13:30:00 GMT+0800 (中国标准时间)
    let date=new Date(2023,11,18,13,30,00);
    ``` 
- 方法 
    ```javascript
    date.getYear(); // 123，从1900年开始算
    date.getDay(); // 5，本周第六天，星期天是0
    date.getTime(); // 返1970年1月1日至今的毫秒数，时间戳
    Date.now(); // 也能获取时间戳
    date.getMilliseconds(); // 24，毫秒0-999
    date.toLocalString(); // '2023/11/23 09:14:41'，这种形式
    
    date.getFullYear();  // 2023
    date.getMonth(); //10，0-11,11月是10
    date.getDate(); // 17，1-31
    date.getHours(); // 19
    date.getMinutes(); //21
    date.getSeconds(); // 40

    // 设置日期
    // 年，月0-11，日1-31
    date.setFullYear(2010,0,14); 

    // 两个日期比较、运算
    // true, false
    date1>date2;
    date1-date2; // 时间戳相减
    ``` 
<br>

## 10.  `RexExp`正则表达式对象
- Regular Expression
- `let patt=new RegExp("runoob",modidiers)`，主体+修饰符（可省），和下面的等价
- `/主体/修饰符（可省）`，如`let patt=/runoob/i;`，i表示不区分大小写
- 不写修饰符返回的是数组，可以`s.match('Runoob')`、`s.match(/Runoob/)`
- `s.search(patt)`，检索字符串s中指定的字符串，返回起始位置
- 这种完全替换的用字符串替换更好
- `s.replace(patt)`,替换
    ```javascript
    let s='Visit Runoob!';
    let n=s.search(/Runoob/i); // 6
    s.replace(/microsoft/i,'Runoob'); // 把microsoft替换为Runoob
    s.replace('microsoft','Runoob');
    ``` 
- 修饰符
    - `i`，不区分大小写
    - `g`，全局匹配，匹配所有而不是第一个
    - `m`，多行匹配
    - `s`，**允许`.`换行匹配**
- 表达式
    - `[abc]`，查找方括号中的任何字符
    - `0-9`，0-9之间数字
    - `[a-zA-Z0-9]`所有字母数字
    - `x|y`，x或y
    - `{n}`，前面一个字符出现n次
    - `{n,}、{n,m}`，前面一个字符至少出现n次，n到m次
    - `\d`，一个数字，相当于`[0-9]`
    - `\D`，除了数字，相当于`[^0-9]`
    - `\w`，任意字母数字下划线，相当于`[a-zA-Z0-9_]`
    - `\W`，非单字字符，等价于`[^A-Za-z0-9_]`
    - `\s`，空格，相当于`[\t\r\n\v\f]`
    - `\S`，非空格，相当于`[^\t\r\n\v\f]`
    - `\b`，单词边界
    - `n+`，n出现1或多次
    - `n*`，n出现0或多次
    - `n?`，n出现0或1次
    - `.`，**除换行符以外的任何单个字符**
    - `^`，写在开头，以后面的字符开头
    - `$`，结尾，以前面的字符结尾
    - `\t`、`\v`，水平、垂直制表符
    - `\n`、`\r`、`\f`，换行、回车、换页
    - `(?:x)`，如果后面有{}，可用于匹配整个x字符串，而不是x的最后一个字符
        - `/(?:foo){1,2}/` 
    - 要匹配有上面的字符的字符串，用`\`转义
    - 例子
        - `/^[a-zA-Z0-9-_]{6,16}$/`，数字字母下划线短横线6-16位 
- `reg.test(s)`检测字符串是否匹配某模式
    ```javascript
    /e/.test('The best things.'); // true

    const input=document.querySelector("input");
    const span=document.querySelector("span");
    input.addEventListener("input",() => {
        if (!/^\d{6,10}$/.test(input.value)) {
            span.innerText="请输入6到10位数字！";
        } else {
            span.innerText="";
        }
    })
    ``` 
- `reg.exec(s)`检索字符串中正则表达式的匹配，返回数组，未匹配到返回`null`
    ```javascript
    /e/.exec('The best things.'); // ['e', index: 2, input: 'The best things.', groups: undefined]
    ``` 
- `s.match`返回第一个匹配结果的数组，未匹配返回`null`
- `s.matchAll`返回迭代器，正则表达式要有`g`表示全局,返回可迭代对象，用for...or遍历，或[...result]展开
- `s.search`返回匹配到的第一个位置索引，失败返回-1
- `s.replace`替换匹配到的字符串
- `s.split`用正则表达式或固定字符分隔一个字符串，返回分隔结果数组
- 正则表达式中`()`括起来表示分组，用`"$1"、"s2"...`提取
    ```javascript
    var re = /(\w+)\s(\w+)/;
    var str = "John Smith";
    var newstr = str.replace(re, "$2, $1");
    console.log(newstr); //  "Smith, John"
    ``` 
- 命名捕获分组
    -`(.*?)`，要提取的部分用括号括起来，在结果中用索引提取；`.`任意字符、`*`出现0次或多次、`?`最小匹配
    - 也可以指定名，`(?<target>.*?)` ，结果中按照`.groups.target`作为索引提取
    ```javascript
    let str="<a href='https://www.baidu.com'>百度</a>";
    const reg=/<a href='(?<href>.*?)'>(?<name>.*?)<\/a>/;
    const result=reg.exec(str);
    console.log(result.groups.href,result.groups.name);
    ```
- 正向断言：根据后面的判断前面的是否满足
- 反向断言：根据前面的判断后面的是否满足
    ```javascript
    let str='JS211314你知道么555啦啦啦';
    const reg1=/\d+(?=啦)/;
    reg1.exec(str);

    const reg2=/(?<=么)\d+/;
    reg2.exec(str);
    ```
- 可用于表单校验等
<br>

## 11.  带键的集合
- `Map`对象
    - 按照插入时的顺序遍历所有元素
    - 键可以是**任意类型**
    ```javascript
    const sayings = new Map();
    sayings.set("dog", "woof");
    sayings.set("cat", "meow");
    sayings.set("elephant", [1,2,3,'a','b']);
    sayings.size; // 3
    sayings.get("dog"); // woof
    sayings.get("fox"); // undefined
    sayings.has("bird"); // false
    sayings.delete("dog");
    sayings.has("dog"); // false

    // 一个值指的是数组，包括key和value
    for (const [key, value] of sayings) {
      console.log(`${key} goes ${value}`);
    }
    // "cat goes meow"
    // "elephant goes 1,2,3,a,b"

    sayings.clear(); // 清空
    sayings.size; // 0，获取大小
    ``` 
    
- `Set`对象
    - **唯一值**的集合，元素不能重复
    - 可用于数组去重
    ```javascript
    const mySet = new Set();
    mySet.add(1);
    mySet.add("some text");
    mySet.add("foo");

    mySet.has(1); // true
    mySet.delete("foo");
    mySet.size; // 2，元素个数

    let result = [...new Set(arr)].filter(item => new Set(arr2).has(item)); // 交集
    let union = [...new Set([...arr, ...arr2])]; // 并集
    let diff = [...new Set(arr)].filter(item => !(new Set(arr2).has(item))); // 差集

    for (const item of mySet) {
      console.log(item);
    }
    // 1
    // "some text"
    ``` 
    - 数组和集合转换
    ```javascript
    Array.from(mySet); // Set转数组
    [...mySet2]; // 展开语法，Set转数组
    mySet2=new Set([1,2,3,4]); // 数组转Set
    ``` 

## 12.  类
- 定义
    ```javascript
    class Person {
        // 可以省略
        // name='';也行，单个变量
        // name;
        // name1;name2;多个变量

        // constructor关键字构造函数，初始化
        // 如果不需要传入初始化参数，可以不写初始化，会默认生成
        constructor(name,age) {
            this.name=name;
            this.age=age;
        }
        // 可以传参，有返回值用return
        introduceSelf() {
            console.log(`Hi! I'm ${this.name}. I'm ${this.age} years old.`);
        }
    }
    // 调用
    const giles = new Person("Giles",20);
    giles.introduceSelf(); // Hi! I'm Giles. I'm 20 years old.
    ``` 
    <br>

- 继承，Professor继承了Person
    - 子类无法访问父类的私有字段
    ```javascript
    class Professor extends Person {
        teaches;

        // super(name,age)表示调用父类的构造函数
        // 可以都继承，也可以部分继承
        // 形参是构建类时传入的参数，想让继承特定值可以不传这两个参数，直接super("Walsh",40);
        constructor(name,age,teaches) {
            super(name,age);
            this.teaches = teaches;
        }
        // 覆盖父类的方法
        introduceSelf() {
            console.log(
              `My name is ${this.name}. I'm ${this.age} years old and I will be your ${this.teaches} professor.`
            );
        }
        grade(paper) {
            const grade = Math.floor(Math.random() * (5 - 1) + 1);
            console.log(grade);
        }
    }
    const walsh = new Professor("Walsh", 35,"Psychology");
    walsh.introduceSelf(); // My name is Walsh. I'm 35 years old and I will be your Psychology professor.
    walsh.grade("my paper"); // 随机数
    ``` 
    <br>
    
- 封装
    - 私有属性要在类中刚开始声明，`#age;`，私有方法不用
    - `this.#age`，私有属性，只能类内部访问
    - `#method(){}`，私有方法，只能类内部访问
    - 类方法可以读取其他实例的私有字段，只要术语同一个类就行
    ```javascript
    class Color {
        #values;
        constructor(r, g, b) {
            this.#values = [r, g, b];
        }
        redDifference(anotherColor) {
            // #values 不一定要从 this 访问：
            // 你也可以访问属于同一个类的其他实例的私有字段。
            return this.#values[0] - anotherColor.#values[0];
        }
    }
    const red = new Color(255, 0, 0);
    const crimson = new Color(220, 20, 60);
    red.redDifference(crimson); // 35
    ``` 
- 类中也有`getter`和`setter`
    - 如果getter和setter两个都有，可以看成方法来操作；
    - 如果只有一个，只能按照属性操作
- 静态方法
    - 方法名前加`static`关键字
    - 只能类内部直接调用
    - 如果要外部调用，需要`类名.方法名(对象名)`
- 类声明**不会提升**
- 每次调用`new`都会创建一个新的实例，各不相等
<br>

## 13. JSON
- `Javascript Object Notation` 
- 轻量级数据交换格式
- 字符串->原生对象，**反序列化**，反之**序列化**，字符串用于网络传输
- 纯数据格式，只有属性没有方法
- 要用双引号，单引号无效
- 属性必须加引号
- `parse()`，以文本字符串形式接受JSON对象，返回相应的对象
- `stringify()`，接受一个对象作为参数，返回对应JSON字符串
<br>



