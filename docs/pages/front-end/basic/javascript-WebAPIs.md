---
title: Web APIs
titleTemplate: 前端笔记
---

- API(`Application Programming Interface`)，应用程序接口
- 类型：
    - 浏览器API
        - 操作文档API，DOM文档对象模型
        - BOM浏览器对象模型
        - 从服务器获取的API，`XMLHttpRequest`、`fetch`...
        - 用于绘制和操作图像的API，`Canvas`、`WebGL`...
        - 音视频API
        - 设备API
        - 客户端存储API
    - 第三方API
        - 从提供者那获取，推特、百度地图、谷歌地图、YouTube、...
- 都是基于对象的

## 1. DOM
- `document.cookie`获取cookie
- `document.title`网页标题
- `document.lastModified`，最后修改时间
- 获取元素（对象类型）
- 获取结果为对象，可以用点，也可以用['']获取属性
- `Cookie`对象
    ```javascript
    // 字符串形式，cookie1=value1; cookie2=value2;...
    // 创建、修改
    document.cookie="username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
    // 读取
    document.cookie;
    // 删除
    // 指定为空，有效期赋予以前的时间
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    ``` 
- `document.querySelector()`，CSS选择器选择第一个满足条件的元素
- `document.querySelectorAll()`，返回所有满足条件的元素构成的**对象**，key从0开始
    - 需要遍历每个，再获取/修改/添加属性等
    ```javascript
    document.documentElement; // 获取所有元素，从html标签开始
    //  获取整个页面的滚动距离，可改，可用于锚点
    document.documentElement.scrollTop; 
    document.documentElement.scrollTop;
    
    document.body; // body标签
    document.URL; // 页面的url
    document.querySelector("#content > article > div");
    let array=document.querySelectorAll(".d1");
    // 如果获取的是按钮存入变量btn，btn.click()可以点击按钮

    // 老版本，不推荐，根据ID和类名、标签名获取
    document.getElementById("myId");
    document.getElementByClassName("c1");
    document.getElementByTagName("p");
    ``` 
- 获取父、兄弟元素
    ```javascript
    div1.parentNode;
    div1.previousElementSibling;
    div1.nextElementSibling;
    ```
- 获取子元素
    ```javascript
    // 没有返回false
    // 可用于删除所有子元素，循环，每次判断是否有子元素
    div1.firstChild;
    while (div1.firstChild) {
        div1.remove(div1.firstChild);
    }
    ``` 
- 克隆节点
    ```javascript
    // 参数默认false，只克隆div1本身
    // true表示还克隆div1的子节点
    const div2=div1.cloneNode();
    ```
     
- 获取/修改元素属性
    ```javascript
    // 双标签内的文本
    div1.textContent;
    // 只有里面所有内容没有标签
    div1.innerText;
    // 里面的所有标签+所有内容
    div1.innerHTML;
    // 对象本身标签+里面的标签+内容
    div1.outerHTML;
    ```
    ```html
    <div>外层容器
        <div>内层容器<span> 文本</span></div>
    </div>
    <script>
        const div=document.querySelector("div>div");
        div.addEventListener("click",function (e) {
            console.log(this.innerText); // 内层容器 文本
            console.log(this.innerHTML); // 内层容器<span> 文本</span>
            console.log(this.outerHTML); // <div>内层容器<span> 文本</span></div>
        });
    </script>
    ```
    ```javascript
    //
    div1.href;
    div1.title;
    div1.id;
    div1.tagName;
    div1.className;

    // 类名数组
    div1.classList;
    // 是否包含某类名
    div1.classList.contains("c1"); // true、false
    // 添加和移除某类名，多个用逗号分开
    div1.classList.add("");
    div1.classList.remove("");

    // 获取、删除和修改任意属性值
    div1.getAttribute("class");
    video.removeAttribute("controls");
    div1.setAttribute("class","xxxx");

    
    // 返回对象，分别有元素的x、y、width(包括border)、height、top、left、right、bottom
    // 主要用前4个
    div1.getBoundingClientRect();

    div1.clientWidth; // 元素宽度（content+padding）
    div1.clientHeight; // 元素高度（content+padding）

    div1.offsetWidth; // 元素宽度（content+padding+border）
    div1.offsetHeight; // 元素高度（content+padding+border）
    div1.offsetLeft; // 相对于有定位父元素的左侧距离
    div1.offsetTop; // 相对于有定位父元素的上面距离
    
    // input、textarea、select的值
    input.value;
    // 多选/单选框是否选中
    // 选中为true，没选中为false，可改
    input.checked;
    // 是否禁用，true/false
    input.disabled;
    // 表单提交和重置
    form.submit();
    form.reset();

    // 修改
    div1.title="新标题";

    ```  
- 获取/修改元素样式
    ```javascript
    // 所有样式
    document.styleSheets;
    // 样式
    div.style;
    // 具体样式
    div1.style.backgroundImage;
    div1.style.width;
    // 修改
    div1.style.backgroundColor="red";
    ``` 
- 创建并追加元素
    ```javascript
    const sect=document.createElement('section');
    const para=document.createElement('p');
    para.textContent="新加文本";
    sect.appendChild(para);
    ``` 
- 删除元素
    ```javascript 
    // 用父元素删
    div1.parentNode.removeChild(div1);
    // 自己删自己，老浏览器不支持
    div1.remove();
    ```
- 自定义属性
    ```javascript
    // 拿到所有自定义的属性，data-xxx形式
    div1.dataset;
    // 拿到data-spm属性
    div1.dataset.spm;
    ```
<br>

## 2. 事件
- 选择、点击、悬停、键盘输入、调整浏览器窗口大小、关闭浏览器窗口、网页结束加载、表单提交、水平播放、暂停、结束、发生错误
    ```javascript
    // 点击事件
    // 也可以btn.onclick=function(){}，不过这样只能有一个事件，再加会覆盖
    // 用添加事件监听可以添加多个事件
    // 可以写匿名函数可可以单独写函数再调用
    const btn = document.querySelector("button");
    btn.addEventListener("click",() => {
        alert("点击事件");
    })
    ``` 
- 事件：
    - `click`点击
    - `mouseover`鼠标移到上面、`mouseout`鼠标离开，搭配起来等于**hover**
    - `mousedown`鼠标按下、`mouseup`鼠标释放
    - `contextmenu`右键菜单，要先阻止默认菜单，再进行后面的步骤
    - `keydown`按下一个键，`keyup`抬起
    - `focus`按钮获取焦点、`blur`按钮失焦，用于搜索框等
    - `input`输入
    - `dblclick`双击
    - `change`发生改变，如选项卡、输入框0等
    - `play`只对某些（如video标签）元素有效，`pause`暂停
    - `load`加载完毕触发的事件
        - 可以给`window`对象添加，页面加载完毕触发
    - `DOMContentLoaded`给`document`加，无需等待样式表、图片等完全加载就能执行
    - `scroll`滚动，一般给`window`加，可用于楼梯导航等
    - `resize`缩放
    ```javascript
    document.querySelector("div").addEventListener("contextmenu",(e) => {
            e.preventDefault();
            console.log(1);
        })
    ``` 
- M端事件，移动端事件
    - `touchstart`触摸
    - `touchmove`手指放在元素上滑动
    - `touchend`手指从元素上离开
<br> 

- 添加事件监听
    ```javascript
    // 外面定义函数再引用，this指向myButton
    div1.addEventListener('click',f1);
    function f1 () {
        alert("点击事件");
    }

    // 匿名函数，this指向myButton
    var myButton=document.querySelector("button");
    myButton.addEventListener('click',function () {
        alert("hello");
    });

    // 箭头函数，没自己的this
    myButton.addEventListener('click',() => {alert("hello")});
    // 或者也可以，其他元素也能加点击事件
    <input type="button" value="点我" onclick="alert('被点了')">



    // 如果用箭头函数，里面调用this表示整个窗口
    const btn=document.querySelector("button");
    btn.addEventListener("click", (e) => {
        console.log(this===e.target); // false
    })
    // 如果用其他函数，则表示绑定该事件的元素对象
    // 这里只有一个元素button，这两个的结果一样
    const btn=document.querySelector("button");
    btn.addEventListener("click",function (e) {
        console.log(this===e.target); // true
        console.log((this===e.currentTarget)); //true
    })
    ```

- 移除监听器
    ```javascript
    btn.removeEventListener("click", changeBackground);
    ``` 
- 添加多个，多次添加
- 内联事件处理器，标签属性`onclick=fn()`，少用
- 为所有元素添加事件监听
    ```javascript
    const buttons = document.querySelectorAll("button");
    for (const button of buttons) {
        button.addEventListener("click", bgChange);
    }
    ``` 
- 事件对象`e`、`evt`、`event`，提供额外功能和信息
    - 作为参数传给监听函数
    - `e.target`点到哪个元素了，鼠标所在位置，即使它没有绑定点击事件
    - `e.currentTarget`绑定点击事件的元素
        - 没有嵌套元素，则这两个相同
        - 有嵌套元素，事件绑定在父元素。则前面的是点了的子元素，后面的是绑定了的父元素
    - 可用于选项卡切换事件
        - 给整体父元素添加事件
        - 判断`e.target.tagName`，如果是子元素，则激活
        - 子元素自定义属性获取索引
        - 根据索引激活对应图片
    ```javascript
    // 这里的this指的是全局窗口
    document.querySelector("ul").addEventListener("click",(e) => {
        console.log(e.target.textContent); // 拿到鼠标所点的那个li的内容
        console.log(e.currentTarget.textContent);  // 拿到ul的内容
    })

    // 这里的this指的是ul
    document.querySelector("ul").addEventListener("click",function(e) {
        console.log(this===e.target); // false
        console.log(this===e.currentTarget); // true
        })
    ``` 
    - `e.type`事件类型
    - `e.offsetX`、`e.offsetY`表示事件位置对点击元素左上角的偏移
    - `e.clientX`、`e.clientY`表示事件位置对浏览器左上角的偏移
- `keydown`事件有一个专门的Event对象，`event.key`是**被按的那个键/键盘输出的内容**
    ```javascript
    textBox.addEventListener("keydown", (event) => {
        output.textContent = `You pressed "${event.key}".`;
    });
    ```
- 阻止默认行为
    - 表单的`submit`事件，检查是否为空
    ```javascript
    const form = document.querySelector("form");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const para = document.querySelector("p");

    form.addEventListener("submit", (e) => {
        if (fname.value === "" || lname.value === "") {
          e.preventDefault();// 阻止默认行为
          para.textContent = "You need to fill in both names!";
        }
    });
    ``` 
- 冒泡示例
    - 事件从被点击的**最里面的元素**冒泡而出
    - body>div>a，都加了监听输出标签名，则输出顺序是a、div、body
    - 问题：多个事件同时运行时可能效果不对
    - 解决：Event对象的`stopPropagation()`函数，防止事件向任何其他元素传递，到这就停了
    - ul和li都有事件，但点li只会触发li的
    ```html
    <body>
        <ul>
            <li>项目1</li>
            <li>项目2</li>
            <li>项目3</li>
            <li>项目4</li>
            <li>项目5</li>
        </ul>
        <script>
            document.querySelector("ul").addEventListener("click",function(e){
                console.log(e.currentTarget);
            })
            document.querySelectorAll("ul>li")[0].addEventListener("click",function(e){
                console.log(e.target);
                e.stopPropagation(); // 不会触发父元素的点击事件
            })
        </script>
    </body>
    ``` 
- 事件捕获
    - 默认禁用，开启后和冒泡顺序相反，先在最小嵌套元素发生，再到更深元素
    ```javascript
    // 这样开
    document.body.addEventListener("click", handleClick, { capture: true });
    container.addEventListener("click", handleClick, { capture: true });
    button.addEventListener("click", handleClick);
    // body>div>button，输出是BODY,DIV,BUTTON
    ``` 
- 事件委托
    - 父元素有多个子元素，通过给父元素设置添加事件监听，点击每个子元素时会冒泡到父元素上从而触发
<br>

## 3. BOM
- `Browser Object Model` 浏览器对象模型
- `window`对象
    ```javascript
    window.document;
    // 窗口内部高度、宽度（高阔滚动条）
    window.innerHeight; 
    window.innerWidth;
    
    window.open(); // 打开新窗口
    window.close(); // 关闭当前窗口
    window.moveTo(); // 移动当前窗口
    ``` 
- `window.screen`对象，可以直接`screen`
    ```javascript
    // 可用的屏幕宽高
    screen.availWidth;
    screen.availHeight;
    ``` 
- `window.location`对象，可以直接`location`
    ```javascript
    location.hostname; // web主机域名
    location.pathname; // 当前页面路径和文件名
    location.port; // web主机端口
    location.protocol; // 用的web协议
    location.href; // 当前页面的url，可修改，实现跳转
    location.search; // 地址中携带的参数
    location.hash; // 地址中的哈希值，#后面的部分
    location.reload(); // 刷新页面，参数true表示强制刷新
    ``` 
- `window.history`对象，可以直接`history`
    ```javascript
    history.back(); // 页面后退
    history.forward(); // 页面向前
    history.go(); // 参数1表示前进，-1表示后退
    ``` 
- `window.navigator`对象，可以直接`navigator`
    ```javascript
    navigator.appCodeName; // 浏览器代号
    navigator.appName; // 浏览器名称
    navigator.appVersion; // 浏览器版本
    navigator.cookieEnable; // 启用Cookies
    navigator.platform; // 硬件平台
    navigator.userAgent; // 用户代理，PC/移动，版本
    navigator.language; // 用户代理语言


    const clipObj=navigator.clipboard; // 剪贴板对象
    clipObj.readText(); //复制剪贴板中的文本数据至
    clipObj.read(); // 复制剪贴板中的数据，文本/二进制（图片等）
    clipObj.writeText("要写入的内容或变量"); // 将文本写入剪贴板
    clipObj.write(); // 将数据写入剪贴板
    const textArea=document.querySelector("textArea");
    const btnPaste=document.querySelector(".paste");
    const btnClip=document.querySelector(".clip");
    btnPaste.addEventListener("click",() => {
        navigator.clipboard.readText()
        .then((data) => {
            try {
                textArea.value=data;
            } catch(error) {
                console.log(`出错了：${error}`);
            }
        })
    })
    btnClip.addEventListener("click",() => {
        navigator.clipboard.writeText(textArea.value);
    })


    // 获取经纬度
    const btn=document.querySelector("button");
    const div=document.querySelector("div");
    btn.addEventListener("click",() => {
        if (!navigator.geolocation) {
            div.innerHTML="不支持定位";
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat=position.coords.latitude;
                let lon=position.coords.longitude;
                div.innerHTML=`<p>纬度：${lat}</p><p>经度：${lon}</p>`;
            });
        }
    });
    ```
- 弹窗
    - 都可以省略`window.`
    ```javascript
    alert(); // 提示框
    confirm(); // 确认/取消框，返回true/false
    prompt(); // 输入框
    ``` 
- 计时器
    - 也省略了`window.`
    - 一段时间之后执行（一次）
    - 时间设置为0
        - 因为浏览器是单线程的，所以先执行后面同步的
     ```javascript
     let t=setTimeout(fn,1000);
     clearTimeout(t); // 清除
     // 或者用匿名、箭头函数
     ``` 
     - 每隔一段时间执行一次
         - 阅读协议内容，轮播等
         - 第一个参数是函数，第二个是时间ms
         - 返回一个id
         - 把计时器赋给变量n，`clearInterval(n)`清除计时器
         - 要再开启**同一个计时器**，把计时器赋给**原来的变量**
         ```javascript
         function show() {
             const num=Math.floor(Math.random()*8)+1;
             div.style.backgroundImage=`url(../../../html&css/file/pic/p${num}.jpg)`;
         }
         // 不加括号，不然会立即执行
         setInterval(show,1000);

         // 或者用匿名函数/箭头函数
         // 用let，后面会改
         let time=setInterval(()=>{
             const num=Math.floor(Math.random()*8)+1;
             let a=Math.floor(Math.random()*2)+1;
             if (a===1) {
                 div.style.backgroundImage=`url(../../../html&css/file/pic/p${num}.jpg)`;
             } else {
                 div.style.backgroundImage=`url(../../../html&css/file/pic/s${num}.jpg)`;
             }
         },1000)
         
         div.addEventListener("mouseover",()=>{
             clearInterval(time);
         })
         div.addEventListener("mouseout",()=>{
             time=setInterval(()=>{
             const num=Math.floor(Math.random()*8)+1;
             div.style.backgroundImage=`url(../../../html&css/file/pic/s${num}.jpg)`;
         },1000)
         })


         // 
         let btn=document.querySelector("button");
         let i=10;
         let time=setInterval(()=>{
             btn.textContent=`${i}s我已阅读上述协议`;
             if (i===0){
                 clearInterval(time);
                 btn.textContent="我已阅读上述协议";
                 btn.style.backgroundColor="skyblue";
                 btn.style.border=0;
                 btn.disabled=false;
             }
             i--;
         },1000);
         ```
    - 如果需要定时器还在运行时清楚，在里面用`clearTimeout(timer)`、`clearInterval(timer)`得到结果不为假
        - 最好用`timer=null;`
<br>

## 4. `Promise`
- 语法上是一个构造函数
- 连续执行多个异步操作，上一个操作成功后开始下一个并带着上一步的返回结果，不成功则被catch捕捉
    ```javascript
    const p=new Promise((resolve,reject) =>{
        let data='读取成功';
        resolve(data); // 改变状态为成功，传给.then()

        // let data='读取失败';
        // reject(data); // 改变状态为失败，传给.catch()
    })
    p.then((result) => {
        console.log(result);
    }).catch((result) => {
        console.error(result);
    })


    new Promise((resolve,reject) => {
        let data='读取成功';
        resolve(data);
    }).then(result => console.log(result))
    .catch(result => console.error(result))
    ```
- `() => x`是`() => {return x;}`的简写
- **一定要有返回值**，否则无法获取上一个Promise的结果
    ```javascript
    doSomething()
        .then(function (result) {
            return doSomethingElse(result);
        })
        .then(function (newResult) {
            return doThirdThing(newResult);
        })
        .then(function (finalResult) {
            console.log(`得到最终结果：${finalResult}`);
        })
        .catch(failureCallback);

    doSomething()
        .then((result) => doSomethingElse(result))
        .then((newResult) => doThirdThing(newResult))
        .then((finalResult) => {
          console.log(`得到最终结果：${finalResult}`);
        })
        .catch(failureCallback);



    // 嵌套
    const listOfIngredients = [];
    doSomething()
      .then((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            listOfIngredients.push(data);
          }),
      )
      .then(() => {
        console.log(listOfIngredients);
      });
    // 完全扁平化，推荐
    doSomething()
      .then((url) => fetch(url))
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      })
      .then(() => {
        console.log(listOfIngredients);
      });
    ``` 

## 5. 从服务器获取数据
- `fetch API`
    - 允许页面中运行的Javascript向服务器发起HTTP请求来获取特定资源
    - `response.text()`、`response.json()`、`response.blob()`二进制大对象（图片音频视频等）
    - 每次的返回值都是`Promise`
    ```javascript
    fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP 错误：${response.status}`);
          }
          return response.text();
        })
        .then((text) => (poemDisplay.textContent = text;))
        .catch((error) => (poemDisplay.textContent = `获取诗歌失败：${error}`;));
    ``` 

- `XMLHttpRequest API`
    - 简写为`XHR`，早于fetch，第一个广泛用于实现AJAX的API
    - `open()`方法
        - 第一个参数时请求方法`GET`、`POST`、`HEAD`等
        - 第二个是url
        - 第三个true/false，是否异步，默认true
    - `send()`方法发送请求
    ```javascript
    const request = new XMLHttpRequest();
    try{
        // 这里可以判断一些是否创建失败，if (!request) {} else {}
        request.open("GET",url);
        request.responseType="text";
        // 设置请求头
        request.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded",
        );
        request.addEventListener("load",() => {});
        request.addEventListener("error",()=> console.error("XHR error"));
        request.send();
        // 延迟，不然拿不到响应
        setTimeout(() => {poemDisplay.textContent=request.responseText;},100)
      } catch(error) {
            console.log(`XHR error ${request.status}`);
        }
    ```

- AJAX
    - 异步Javascript和XML
    - 本身不是一种技术，而是一种将现有技术结合起来实用的方法
    - 不需要刷新页面就能更新
    - 例如`XMLHttpRequest`，新建对象`request`，`open()`和`send()`之后
        - 请求状态`request.readyState`
            - 0，未初始化
            - 1，正在加载，已建立服务器链接
            - 2，请求已接收
            - 3，正在处理请求
            - 4，请求已完成并响应已准备好
    ```javascript
    // 检查请求和响应状态，判断是否可以继续执行
    try {
        if (request.readyState === XMLHttpRequest.DONE) { // 或者=== 4
            if (request.status === 200) {
                // 成功，接下来的步骤
            } else {
                // 
                alert("请求遇到了问题");
            }
        }
    } catch(error) {
        alert(`遇到错误：${error}`);
    }
    ``` 
    - `request.responseText`，以文本字符串的方式返回范围响应
    - `request.responseXML`，以`XMLDocument`对象的形式放回服务器响应

## 6. 第三方API
- 通过`<script type="text/javascript" src="xxxxx"></script>`连接到第三方服务器开放的Javascript库
- 用到自己的`key`
- 然后就可以使用该库中的对象了

## 7. 绘图
- 二维
    - 默认300 x 150px
    - 如果不支持就会显示内容
    - 创建画布、背景涂色、画矩形
    ```html
    <canvas width="320" height="240"><p>浏览器不支持</p></canvas>
    <script>
        const canvas=document.querySelector("canvas");
        // 给width和canvas.width都赋值
        let width=(canvas.width=window.innerWidth);
        let height=(canvas.height=window.innerHeight);

        // 2d画布
        let ctx=canvas.getContext("2d");
        // 背景涂黑
        ctx.fillStyle="rgb(0,0,0)";
        ctx.fillRect(0,0,width,height);  
        
         // 简单矩形，x、y、w、h
        // 重叠时会覆盖
        ctx.fillStyle="rgb(255,0,0)";
        ctx.fillRect(50,50,100,150);
        ctx.fillStyle="rgba(0,0,255,0.5)";
        ctx.fillRect(100,100,200,200);
    </script>
    ``` 
    - 描边和线宽
    ```javascript
    ctx.strokeStyle="rgb(255,255,255)";
    // 默认线宽1px，可调
    // 放到这两行中间才有效，设置好了再画
    ctx.lineWidth=5;
    ctx.strokeRect(25,25,175,200);
    ``` 
    - 绘制路径
    ```javascript
    // 绘制路径
    ctx.strokeStyle="rgb(0,255,255)";
    // ctx.beginPath(); // 似乎没啥用
    ctx.moveTo(50,50); // 从这开始
    ctx.lineTo(150,150); // 画到这
    ctx.stroke();
    ``` 
    - 画圆
    ```javascript
     // 角度转弧度
        function degToRad(deg) {
            return deg*Math.PI/180;
        }
        // 画圆
        ctx.fillStyle="orange";
        ctx.beginPath();
        // 圆心x、y，半径，起止角度，方向（true逆时针、false顺）
        ctx.arc(300,300,50,degToRad(0),degToRad(200),false);
        ctx.fill();// 角度转弧度
    function degToRad(deg) {
        return deg*180/Math.PI;
    }
    // 画圆
    ctx.fillStyle="orange";
    ctx.beginPath();
    // 圆心x、y，半径，起止角度，方向（true逆时针、false顺）
    ctx.arc(150,106,50,degToRad(0),degToRad(360),false);
    ctx.fill();
    ``` 
    - 先这样了，以后用到了再学，估计用不到了...

## 8. 音视频API
- `HTMLMediaElement API`
- 标签的属性有`controls`、`loop`、`autoplay`、`muted`静音、`preload`预加载、视频封面`poster`
    ```javascript
    audio=document.querySelector("audio");
    video=document.querySelector("video");

    // 暂停
    audio.pause();
    video.pause();
    // 播放
    audio.play();
    video.play();
    // 总时长
    audio.duration;
    video.duration;
    // 目前位置
    audio.currentTime;
    video.currentTime;
    // 设置/取消静音
    audio.muted=true;
    video.muted=false;
    ``` 

## 9. 客户端存储
- 由Javascript APIs组成的，允许在客户端存储数据
- 用处：个性化网站偏好、保存之前的站点行为、站点更快、保存web已经产生的文档在离线状态访问
    - 传统方法：`cookies`，`document.cookie`
    - 新流派：`Web Storage`、`IndexedDB`
    - 未来：`Cache API`
- 简单数据存储——`Web Storage`
    - 用于保存数据的类似于对象的结构
        - `sessionStorage`浏览器关闭数据会丢失
        - `localStorage`浏览器关了数据还在，这里用这个
    ```javascript
    // 保存数据项
    // 把字符串myName保存在变量name中
    // 如果存对象，需要转化成JSON字符串再存
    localStorage.setItem("name","zzw");
    // 检索数据项
    let myName=localStorage.getItem("name"); // zzw
    // 删除数据项
    localStorage.removeItem("name");
    // 清空
    localStorage.clear();

    // 例子
    document.querySelector("button").addEventListener("click",() => {
            const un=document.querySelector("input").value;
            localStorage.setItem("userName",un);
        })
        if (localStorage.getItem("userName")) {
            if (confirm("是否自动填入已保存账号？")) {
                document.querySelector("input").value=localStorage.getItem("userName");
            }
        }
    ```  
- 复杂数据存储——`IndexedDB`
    - 可以存储视频、图像等
    - 见[MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
- 离线文件存储
    - 见[MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
        

## 10. 表单
- 方式
    - 手工构建`XMLHttpRequest`
    ```javascript
    const btn = document.querySelector("button");
    function sendData(data) {
        console.log("Sending data");
        const XHR = new XMLHttpRequest();
        const urlEncodedDataPairs = [];
        // 将数据对象转换为 URL 编码的键/值对数组。
        for (const [name, value] of Object.entries(data)) {
          urlEncodedDataPairs.push(
            `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
          );
        }
        // 将配对合并为单个字符串，并将所有 % 编码的空格替换为
        // “+”字符；匹配浏览器表单提交的行为。
        const urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");
        // 定义成功数据提交时发生的情况
        XHR.addEventListener("load", (event) => {
          alert("耶！已发送数据并加载响应。");
        });
        // 定义错误提示
        XHR.addEventListener("error", (event) => {
          alert("哎呀！出问题了。");
        });
        // 建立我们的请求
        XHR.open("POST", "https://example.com/cors.php");
        // 为表单数据 POST 请求添加所需的 HTTP 头
        XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // 最后，发送我们的数据。
        XHR.send(urlEncodedData);
    }
    btn.addEventListener("click", () => {
        sendData({ test: "ok" });
    });
    ``` 
    - 使用独立的`FormData`对象，用的最多
    ```javascript
    const btn = document.querySelector("button");
    function sendData(data) {
        const XHR = new XMLHttpRequest();
        const FD = new FormData(); // 后面可以直接发送这个对象
        // 把我们的数据添加到这个 FormData 对象中
        for (const [name, value] of Object.entries(data)) {
            // 后端接收要用到这个名字
            // 如果加表单值外的文件，第三个参数要指定文件名，fastapi的file.filename才能获取到文件名
            FD.append(name, value);
        }
        // 定义数据成功发送并返回后执行的操作
        XHR.addEventListener("load", (event) => {
          alert("耶！已发送数据并加载响应。");
        });
        // 定义发生错误时执行的操作
        XHR.addEventListener("error", (event) => {
          alert("Oops! 出错了。");
        });
        // 设置请求地址和方法
        XHR.open("POST", "https://example.com/cors.php");
        // 发送这个 formData 对象，HTTP 请求头会自动设置
        XHR.send(FD);
    }
    btn.addEventListener("click", () => {
        sendData({ test: "ok" });
    });
    ``` 
    - 使用绑定到`<form>`元素的`FormData`
    ```javascript
    window.addEventListener("load", () => {
        function sendData() {
            const XHR = new XMLHttpRequest();
            // 我们把这个 FormData 和表单元素绑定在一起。
            const FD = new FormData(form);
            // 我们定义了数据成功发送时会发生的事件
            XHR.addEventListener("load", (event) => {
              alert(event.target.responseText);
            });
            // 我们定义了失败的情形下会发生的事件
            XHR.addEventListener("error", (event) => {
              alert("哎呀！出了一些问题。");
            });
            // 我们设置了我们的请求
            XHR.open("POST", "https://example.com/cors.php");
            // 发送的数据是由用户在表单中提供的
            XHR.send(FD);
        }
        // 获取表单元素
        const form = document.getElementById("myForm");
        // 接管表单的 submit 事件
        form.addEventListener("submit", (event) => {
             event.preventDefault();
            sendData();
        });
    });
    ``` 
- 上传图片改变背景
```javascript
/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址
 *  3. 网页运行后，"获取"url网址使用
 * */
document.querySelector('.bg-ipt').addEventListener('change', e => {
  // 1. 选择图片上传，设置body背景
  console.log(e.target.files[0])
  const fd = new FormData()
  // 参数是name, value, filename；变量名（fastapi后端读取时用），值，文件名
  fd.append('img', e.target.files[0])
  axios({
    url: 'http://hmajax.itheima.net/api/uploadimg',
    method: 'POST',
    data: fd
  }).then(result => {
    const imgUrl = result.data.data.url
    document.body.style.backgroundImage = `url(${imgUrl})`

    // 2. 上传成功时，"保存"图片url网址
    localStorage.setItem('bgImg', imgUrl)
  })
})
// 3. 网页运行后，"获取"url网址使用
const bgUrl = localStorage.getItem('bgImg')
console.log(bgUrl)
bgUrl && (document.body.style.backgroundImage = `url(${bgUrl})`)
```

- 处理二进制数据
    - `<inout type="file" class="file">`
    - 可以直接
        - `const file = document.quserSelector(.file);`
        - `file.files[0]` 
    ```javascript
    // 因为我们想获取 DOM 节点，
    // 我们在页面加载时初始化我们的脚本。
    window.addEventListener("load", () => {
        // 这些变量用于存储表单数据
        const text = document.getElementById("theText");
        const file = {
            dom: document.getElementById("theFile"),
            binary: null,
        };
        // 使用 FileReader API 获取文件内容
        const reader = new FileReader();
        // 因为 FileReader 是异步的，会在完成读取文件时存储结果
        reader.addEventListener("load", () => {
             file.binary = reader.result;
        });
        // 页面加载时，如果一个文件已经被选择，那么读取该文件。
        if (file.dom.files[0]) {
             reader.readAsBinaryString(file.dom.files[0]);
        }
        // 如果没有被选择，一旦用户选择了它，就读取文件。
        file.dom.addEventListener("change", () => {
            if (reader.readyState === FileReader.LOADING) {
                reader.abort();
            }
            reader.readAsBinaryString(file.dom.files[0]);
        });
        // 发送数据是我们需要的主要功能
        function sendData() {
            // 如果存在被选择的文件，等待它读取完成
            // 如果没有，延迟函数的执行
            if (!file.binary && file.dom.files.length > 0) {
              setTimeout(sendData, 10);
              return;
             }
            // 要构建我们的多部分表单数据请求，
            // 我们需要一个 XMLHttpRequest 实例
            const XHR = new XMLHttpRequest();
            // 我们需要一个分隔符来定义请求的每一部分。
            const boundary = "blob";
            // 将我们的主体请求存储于一个字符串中
            let data = "";
            // 所以，如果用户已经选择了一个文件
            if (file.dom.files[0]) {
                // 在请求体中开始新的一部分
                data += `--${boundary}\r\n`;
                // 把它描述成表单数据
                data +=
                  "content-disposition: form-data; " +
                  // 定义表单数据的名称
                  `name="${file.dom.name}"; ` +
                  // 提供文件的真实名字
                  `filename="${file.dom.files[0].name}"\r\n`;
                // 和文件的 MIME 类型
                data += `Content-Type: ${file.dom.files[0].type}\r\n`;
                // 元数据和数据之间有一条空行。
                data += "\r\n";
                // 将二进制数据添加到主体请求中
                data += file.binary + "\r\n";
            }
            // 文本数据更简单一些
            // 在主体请求中开始一个新的部分
            data += `--${boundary}\r\n`;
            // 假设这是表单数据，并命名它
            data += `content-disposition: form-data; name="${text.name}"\r\n`;
            // 元数据和数据之间有一条空行。
            data += "\r\n";
            // 添加文本数据到主体请求中
            data += text.value + "\r\n";
            // 一旦完成，“关闭”主体请求
            data += `--${boundary}--`;
            // 定义成功提交数据执行的语句
            XHR.addEventListener("load", (event) => {
              alert("耶！已发送数据并加载响应。");
            });
            // 定义发生错误时做的事
            XHR.addEventListener("error", function (event) {
              alert("哎呀！出现了一些问题。");
            });
            // 建立请求
            XHR.open("POST", "https://example.com/cors.php");
            // 添加需要的 HTTP 头部来处理多部分表单数据 POST 请求
            XHR.setRequestHeader(
              "Content-Type",
              `multipart/form-data; boundary=${boundary}`,
            );
            // 最后，发送数据。
            XHR.send(data);
        }
        // 获取表单元素
        const form = document.getElementById("theForm");
        // 添加 submit 事件处理器
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            sendData();
        });
    });
    ``` 




