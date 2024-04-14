---
title: AJAX
titleTemplate: 前端笔记
---

## 1. 简介

`Asynchronous Javascript And XML (AJAX)`，异步的 Javascript 和 XML

-   是一种技术，**不用刷新页面**，与服务器进行通信，交换数据或更新页面
-   天生**异步**
    -   获取结果：地狱回调、`Promise`链式、`async/await`同步一样的写法
-   实现方式有
    -   原生：`XMLHttpRequest`、`fetch`
    -   封装：`axios`
-   优点：无需刷新页面与服务器通信；根据用户事件更新部分页面内容
-   缺点：无法回退；存在跨域问题；SEO 不友好

-   数据传输
    -   XML，`Extensible Markup Language`，可扩展标记语言，没有预定义标签
    -   JSON，更简洁
-   HTTP（hypertext transport protocol）超文本传输协议
    -   请求报文
    -   响应报文
-   `url`
    -   Uniform Resource Locator 统一资源定位符
    -   协议+域名+资源路径
    -   URL 查询参数，跟在地址后面，不同参数用&连接
-   请求类型
    -   `GET`获取（**默认**）
    -   `POST`提交
    -   `PUT`修改（全部）
    -   `DELETE`删除
    -   `PATCH`修改（部分）
-   HTTP 响应状态吗
    -   1xx 信息
    -   2xx 成功
    -   3xx 重定向消息
    -   4xx 客户端错误
    -   5xx 服务端错误

## 2. XMLHttpRequest

### 2.1 基础

-   步骤：
    -   创建对象`const xhr = new XMLHttpRequest();`
    -   配置请求方法和 url，url ( + '?' + 查询参数)，`xhr.open(method, url[, async])`，
        -   第三个参数为是否异步，默认异步`true`，省略
    -   监听`loadend`事件，接收响应结果，或者后面判断**响应状态**
    -   发起请求`xhr.send()`，POST 请求的请求体写成`send`的参数
        -   请求体一般是表单或`JSON.stringify(对象)`，对象的时候要设置请求头类型为`application/json`，不然报错亲测
        -   `FormData`的时候别写不然出错
-   设置响应体数据类型
    -   `xhr.responseType='json';`
-   设置请求头，多个要分别设置
    -   ` xhr.setRequestHeader('User-Agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36');`
-   响应状态码
    -   `xhr.status`
-   响应状态文本
    -   `ok`、`not found`等
-   设置请求超时
    -   `xhr.timeout=2000;`
-   请求超时回调函数
    -   `xhr.ontimeout=function(){alert('请求超时');}`
-   设置网络异常回调函数
    -   `xhr.onerror = function(){console.error('出错了');}`
-   取消请求
    -   `xhr.abort();`
-   获取响应
    -   `xhr.response`
-   获取所有响应头组成的字符串
    -   `xhr.getAllResponseHeaders();`

```javascript
/**
 * 目标: 根据省份和城市名字, 查询对应的地区列表
 */
// 1. 查询按钮-点击事件
document.querySelector('.sel-btn').addEventListener('click', () => {
    // 2. 收集省份和城市名字
    const pname = document.querySelector('.province').value;
    const cname = document.querySelector('.city').value;
    // 3. 组织查询参数字符串
    const qObj = {
        pname,
        cname
    };
    // 查询参数对象 -> 查询参数字符串
    // 没有前面的?，只是中间用&连起来了
    const paramsObj = new URLSearchParams(qObj);
    const queryString = paramsObj.toString();
    console.log(queryString);
    // 4. 使用XHR对象，查询地区列表
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://hmajax.itheima.net/api/area?${queryString}`);
    xhr.addEventListener('loadend', () => {
        console.log(xhr.response);
        // 返回的json解析成对象
        const data = JSON.parse(xhr.response);
        console.log(data);
        const htmlStr = data.list
            .map(areaName => {
                return `<li class="list-group-item">${areaName}</li>`;
            })
            .join('');
        console.log(htmlStr);
        document.querySelector('.list-group').innerHTML = htmlStr;
    });
    xhr.send();
});
```

```javascript
// 目标：使用xhr进行数据提交-完成注册功能
document.querySelector('.reg-btn').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://hmajax.itheima.net/api/register');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                // 处理返回数据
                console.log(xhr.response);
            }
        }
    };
    // 设置请求头-告诉服务器内容类型（JSON字符串）
    xhr.setRequestHeader('Content-Type', 'application/json');
    // 准备提交的数据
    const userObj = {
        username: 'itheima007',
        password: '7654321'
    };
    const userStr = JSON.stringify(userObj);
    // 设置请求体，发起请求
    xhr.send(userStr);
});
```

### 2.2 重复发送请求

-   重复发送请求，若发送时已有正在发送的
    -   取消前面的，发送现在的
    ```javascript
    let isSending = false;
    url = 'http://127.0.0.1:8000';
    btn.onclick = function () {
        if (isSending) xhr.abort();
        xhr = new XMLHttpRequest();
        isSending = true;
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.response);
                isSending = false;
            }
        };
    };
    ```
-   不打扰前面的，这次的不发送了
    ```javascript
    let isSending = false;
    url = 'http://127.0.0.1:8000';
    btn.onclick = function () {
        if (isSending) return;
        xhr = new XMLHttpRequest();
        isSending = true;
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.response);
                isSending = false;
            }
        };
    };
    ```

### 2.3 Promise

-   用 Promise 封装或用 async/await，避免多层调用时地狱回调
-   `Promise`注意事项：
    -   `Promise.all([promise1, promise2, ...])`，将多个`promise`包装成一个新的`promise`，全兑现才执行`.then()`
    -   `Promise.any([promise1, promise2, ...])`，将多个`promise`包装成一个新的`promise`，只要有一个兑现了就`.then()`
    -   状态：
        -   待定`pending`
        -   兑现`fulfilled`，会调用之后的`.then()`
        -   拒绝`rejected`，会调用之后的`.catch()`
    ```javascript
    // 如果只处理成功/失败的，可以选择性接收`resolve`和`reject`
    const p = new Promise((resolve, reject) => {
        // 2. 执行XHR异步代码，获取省份列表
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://hmajax.itheima.net/api/province');
        // 设置请求头，设置多个要分别设置
        xhr.setRequestHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36');
        xhr.addEventListener('loadend', () => {
            // xhr如何判断响应成功还是失败的？
            // 2xx开头的都是成功响应状态码
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(new Error(xhr.response));
            }
        });
        xhr.send();
    });
    p.then(result => {
        console.log(result);
        document.querySelector('.my-p').innerHTML = result.list.join('<br>');
    }).catch(error => {
        // 错误对象要用console.dir详细打印
        console.dir(error);
        // 服务器返回错误提示消息，插入到p标签显示
        document.querySelector('.my-p').innerHTML = error.message;
    });
    ```
-   可以自己封装一个函数

    ```javascript
    // * 目标：封装_简易axios函数_注册用户
    // *  1. 判断有data选项，携带请求体
    // *  2. 转换数据类型，在send中发送
    // *  3. 使用myAxios函数，完成注册用户
    function myAxios(config) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            if (config.params) {
                const paramsObj = new URLSearchParams(config.params);
                const queryString = paramsObj.toString();
                config.url += `?${queryString}`;
            }
            xhr.open(config.method || 'GET', config.url);
            xhr.addEventListener('loadend', () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(new Error(xhr.response));
                }
            });
            // 1. 判断有data选项，携带请求体
            if (config.data) {
                // 2. 转换数据类型，在send中发送
                const jsonStr = JSON.stringify(config.data);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(jsonStr);
            } else {
                // 如果没有请求体数据，正常的发起请求
                xhr.send();
            }
        });
    }
    document.querySelector('.reg-btn').addEventListener('click', () => {
        // 3. 使用myAxios函数，完成注册用户
        myAxios({
            url: 'http://hmajax.itheima.net/api/register',
            method: 'POST',
            data: {
                username: 'itheima999',
                password: '666666'
            }
        })
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.dir(error);
            });
    });
    ```

-   似乎不支持 async/await 这种写法

## 3. fetch

### 3.1 基础

-   查询参数还是通过`new URLSearchParams(params)`，然后加到 url 中
-   POST 请求的请求体写在`body`那，把对象处理成 json 字符串再发送，同时指定`headers: {'Content-Type': 'application/json'},`
    -   `FormData`的时候别写不然出错
-   **请求头**
    -   可以用普通对象，通过`.`或`[]`增删改查；
    -   也可以用`Headers`对象，通过`.append(key, value)`、`.delete(key)`、`.set(key, value)`、`.get(key)`增删改查
    -   `FormData`对象类似操作
    -   `axios`中也可以这样用
-   返回数据的形式有`blob()`、`json()`、`text()`
-   **响应头**
-   `const headers = res.headers`，是个`Headers`对象，用`headers.get('key')`获取对应的某个响应头
    -   如`headers.get('Content-Type')`、`headers.get('response_code')`
    -   FastAPI 中设置的响应头可在这获取

### 3.2 链式调用

-   Promise 链式调用，本身返回的就是 Promise，不用创建 Promise 对象

```javascript
let body = JSON.stringify(data);
fetch(url, {
    method: 'GET', // 默认可省
    headers: {},
    mode: 'cors', // no-cors, *cors, same-origin
    body: body
})
    .then(result => {
        console.log(result.json);
    })
    .then(() => {
        console.log('succeed');
    })
    .catch(err => {
        console.error('出错了');
    });
```

### 3.3 async/await

```javascript
// 请求体
// 对象
let data = {requestTime: Date.now().toString()};
// 表单/文件
let form = new FormData(document.querySelector('form'));
// 这样就有该表单的所有文件了
//如果想加额外的不在该表单中的数据，格式是名-值
form.append('username', 'abc123'); // 加对象
form append('file1', document.querySelector('file').files[0]); // 加文件
btn.addEventListener('click', async e => {
    try {
        const requestMessage = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // 返回二进制数据
        const result = await requestMessage.blob();
        // 假如是个音视频，需要加载到音视频标签上
        document.video.src = URL.createObjectURL(result);
        if (requestMessage.ok) {
            console.log(requestMessage.status);
        }
    } catch( error) {
        console.error('出错了');
    }
})
```

## 4. Axios

-   封装了 XMLHttpRequest
-   引入
    ```html
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <!-- 或下载到本地引入 -->
    <script src="./axios.min.js"></script>
    ```

### 4.1 请求配置

-   `url`，不带查询参数
-   `params`
    -   查询参数，**对象**，键值要和后端确认好
    ```javascript
    axios({
        url: 'http://hmajax.itheima.net/api/area',
        params: {
            pname: '甘肃省',
            cname: '武威市'
        }
    })
        .then(result => {
            console.log(result);
            let p = document.createElement('p');
            p.innerHTML = result.data.list.join('<br>');
            document.querySelector('body').appendChild(p);
        })
        .catch(err => {
            console.error('出错了');
        });
    ```
-   `method`
    -   请求方法，默认`GET`
-   `data`
    -   `POST`时提交的数据，**请求体**
    -   表单
    -   对象或`JSON.stringify(对象)`，要指定**类型**
-   `headers`
    -   请求头，对象
    -   可以一次写多个
-   `timeout`，ms
-   `responseType: 'json'`
-   `responseEncoding: 'utf-8'`，默认
-   `xsrfCookieName: 'XSRF-TOKEN'`， 默认
-   `xsrfHeadName: 'X-XSRF-TOKEN'`，默认
    ```javascript
    const btn = document.querySelector('button');
    btn.addEventListener('click', async e => {
        const response = await axios({
            url: 'http://hmajax.itheima.net/api/register',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username: '09354121794sss',
                password: '123456vgr'
            }
        });
        console.log(response.json());
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
    });
    ```

### 4.2 其他

-   `axios.get()`、取消请求等
-   其他详见<b>[Axios 官网](https://www.axios-http.cn/)</b>
