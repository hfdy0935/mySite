---
title: requests
titleTemplate: Python笔记
---

<!-- {a,a} -->

## 1. requests库入门

```python
import requests
```

（1）Request库的7个主要方法：
<br><b>&emsp;&emsp;requests.request(method,url,**kwargs)</b>，构造一个请求，支撑以下各方法的基础；
<br><b>&emsp;&emsp;request.get()</b>，获取HTML网页的主要方法，对应于HTTP的GET；
<br><b>&emsp;&emsp;request.head()</b>，获取HTML网页头信息的方法，对应于HTTP的HEAD；
<br><b>&emsp;&emsp;request.post()</b>，向HTML网页提交POST请求的方法，对应于HTTP的POST；
<br><b>&emsp;&emsp;request.put()</b>，向HTML网页提交PUT请求的方法，对应于HTTP的PUT；
<br><b>&emsp;&emsp;request.patch()</b>，向HTML网页提交局部修改请求，对应于HTTP的PATCH；
<br><b>&emsp;&emsp;request.delete()</b>，向HTML网页提交删除请求，对应于HTTP的DELETE。

（2）<b>r=requests.get(url, params=None, **kwargs)</b>
<br>&emsp;&emsp;构造一个向服务器请求资源的Request对象，返回Request包含服务器资源。
<br>&emsp;&emsp;url：拟获取页面的url链接；
<br>&emsp;&emsp;params：url中的额外参数，字典或字节流格式，可选；
<br>&emsp;&emsp;\*\*kwargs：12个控制访问的参数
<br>&emsp;&emsp;r：爬虫返回的全部内容。<br>
<br>（3）Respone对象的属性:
<br>&emsp;&emsp;<b>r.url</b>：url
<br>&emsp;&emsp;<b>r.status_code</b>：HTTP请求的返回状态，200表示连接成功，404表示连接失败，其他的也是失败；
<br>&emsp;&emsp;<b>r.text：HTTP</b>：相应内容的字符串形式，即url对应的页面内容；
<br>&emsp;&emsp;<b>r.encoding</b>：从HTTP header中猜测的相应内容编码方式；
<br>&emsp;&emsp;<b>r.apparent_encoding</b>：从内容中分析出的相应内容编码方式（备选编码方式）；
<br>&emsp;&emsp;<b>r.content</b>：HTTP相应内容的二进制形式；
<br>&emsp;&emsp;<b>r.headers</b>：返回获取到页面的头部信息（<b>响应头信息</b>）；
<br>&emsp;&emsp;<b>r.raise_for_status()</b>：如果不是200，产生异常requests.HTTPError。
<br>r.encoding是根据头部信息猜的，r.apparent_coding是根据内容分析的，后者比前者准确。<br>

```python
r=requests.get('https://www.baidu.com')
print(r.status_code)#请求的状态码为200，访问成功
print(type(r))#查看类型
```

    200
    <class 'requests.models.Response'>
    
```python
print(r.encoding)
print(r.apparent_encoding)
print(r.url)
```

    ISO-8859-1
    utf-8
    https://www.baidu.com/
    

```python
r.text#打印网页内容
```

    '<!DOCTYPE html>\r\n<!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/bdorz/baidu.min.css><title>ç\x99¾åº¦ä¸\x80ä¸\x8bï¼\x8cä½\xa0å°±ç\x9f¥é\x81\x93</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus=autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=ç\x99¾åº¦ä¸\x80ä¸\x8b class="bg s_btn" autofocus></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>æ\x96°é\x97»</a> <a href=https://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>å\x9c°å\x9b¾</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>è§\x86é¢\x91</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>è´´å\x90§</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>ç\x99»å½\x95</a> </noscript> <script>document.write(\'<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u=\'+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ \'" name="tj_login" class="lb">ç\x99»å½\x95</a>\');\r\n                </script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">æ\x9b´å¤\x9aäº§å\x93\x81</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>å\x85³äº\x8eç\x99¾åº¦</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>&copy;2017&nbsp;Baidu&nbsp;<a href=http://www.baidu.com/duty/>ä½¿ç\x94¨ç\x99¾åº¦å\x89\x8då¿\x85è¯»</a>&nbsp; <a href=http://jianyi.baidu.com/ class=cp-feedback>æ\x84\x8fè§\x81å\x8f\x8dé¦\x88</a>&nbsp;äº¬ICPè¯\x81030173å\x8f·&nbsp; <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> </body> </html>\r\n'

```python
r.encoding='utf-8'#改变编码类型
```

```python
r.text#打印网页内容
```

    '<!DOCTYPE html>\r\n<!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/bdorz/baidu.min.css><title>百度一下，你就知道</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus=autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=百度一下 class="bg s_btn" autofocus></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>新闻</a> <a href=https://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>地图</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>视频</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>贴吧</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>登录</a> </noscript> <script>document.write(\'<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u=\'+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ \'" name="tj_login" class="lb">登录</a>\');\r\n                </script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">更多产品</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>关于百度</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>&copy;2017&nbsp;Baidu&nbsp;<a href=http://www.baidu.com/duty/>使用百度前必读</a>&nbsp; <a href=http://jianyi.baidu.com/ class=cp-feedback>意见反馈</a>&nbsp;京ICP证030173号&nbsp; <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> </body> </html>\r\n'

```python
r.headers#返回获取到的页面的头部信息
```

    {'Cache-Control': 'private, no-cache, no-store, proxy-revalidate, no-transform', 'Connection': 'keep-alive', 'Content-Encoding': 'gzip', 'Content-Type': 'text/html', 'Date': 'Sun, 21 May 2023 07:40:57 GMT', 'Last-Modified': 'Mon, 23 Jan 2017 13:24:18 GMT', 'Pragma': 'no-cache', 'Server': 'bfe/1.0.8.18', 'Set-Cookie': 'BDORZ=27315; max-age=86400; domain=.baidu.com; path=/', 'Transfer-Encoding': 'chunked'}

（4）Request库的异常：
<br>&emsp;&emsp;**requests.ConnectError**：网络连接错误异常，如DNS查询失败、拒绝连接等；
<br>&emsp;&emsp;**requests.HTTPErroe**：HTTP错误异常；
<br>&emsp;&emsp;**requests.URLRequired**：URL确实异常；
<br>&emsp;&emsp;**requests.TooManyRedirects**：超过最大重定向次数，产生重定向异常；
<br>&emsp;&emsp;**requests.ConnectTimeout**：远程服务器超时异常；
<br>&emsp;&emsp;**requests.Timeout**：请求URL超时，产生超时异常。<br>

```python
#爬取网页的通用框架
def getHTMLTEXT(url):
    try:
        r=requests.get(url,timeout=30)
        r.raise_for_status()
        r.encoding=r.apparent_encoding
        return r.text
    except:
        return'产生异常'
```

```python
#正常情况
if __name__=='__main__':
    url='http://www.baidu.com'
    print(getHTMLTEXT(url))
```

    <!DOCTYPE html>
    <!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min.css><title>百度一下，你就知道</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=百度一下 class="bg s_btn"></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>新闻</a> <a href=http://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>地图</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>视频</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>贴吧</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>登录</a> </noscript> <script>document.write('<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u='+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ '" name="tj_login" class="lb">登录</a>');</script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">更多产品</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>关于百度</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>&copy;2017&nbsp;Baidu&nbsp;<a href=http://www.baidu.com/duty/>使用百度前必读</a>&nbsp; <a href=http://jianyi.baidu.com/ class=cp-feedback>意见反馈</a>&nbsp;京ICP证030173号&nbsp; <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> </body> </html>
    
    

```python
#异常情况
if __name__=='__main__':
    url='www.baidu.com'
    print(getHTMLTEXT(url))
```

    产生异常
    

（5）爬取网页的通用框架<br><span style='color:red'><b>网络连接有风险，异常处理很重要</b></span><br>
<b>def getHTMLTEXT(url):
<br>&emsp;&emsp;   try:
<br>&emsp;&emsp;&emsp;&emsp;r=requests.get(url,timeout=30)
<br>&emsp;&emsp;&emsp;&emsp;r.raise_for_status()
<br>&emsp;&emsp;&emsp;&emsp;r.encoding=r.apparent_encoding
<br>&emsp;&emsp;&emsp;&emsp;return r.text
<br>&emsp;&emsp;except:
<br>&emsp;&emsp;&emsp;&emsp;return'产生异常'</b>
<br><br>
<b>if \_\_name\_\_=='\_\_main\_\_':
<br>&emsp;&emsp;url='http://www.baidu.com'
<br>&emsp;&emsp;print(getHTMLTEXT(url))</b>

```python
def getHTMLTEXT(url):
    try:
        r=requests.get(url,timeout=30)
        
        #在方法内部判断r.status_code是否等于200，如果不是200，产生异常requests.HTTPError。不需要增加额外的if语句，该语句便于利用try‐except进行异常处理
        r.raise_for_status()
        
        r.encoding=r.apparent_encoding
        return r.text
    except:
        return'产生异常'

if __name__=='__main__':
      url='http://www.baidu.com'
      print(getHTMLTEXT(url))
```

    <!DOCTYPE html>
    <!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min.css><title>百度一下，你就知道</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=百度一下 class="bg s_btn"></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>新闻</a> <a href=http://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>地图</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>视频</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>贴吧</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>登录</a> </noscript> <script>document.write('<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u='+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ '" name="tj_login" class="lb">登录</a>');</script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">更多产品</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>关于百度</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>&copy;2017&nbsp;Baidu&nbsp;<a href=http://www.baidu.com/duty/>使用百度前必读</a>&nbsp; <a href=http://jianyi.baidu.com/ class=cp-feedback>意见反馈</a>&nbsp;京ICP证030173号&nbsp; <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> </body> </html>
    
    

（6）HTTP协议，Hypertext Transfer Protocol超文本传输协议。
<br>&emsp;&emsp;基于“请求与响应”（用户请求、服务器相应）模式的、无状态（第一次请求与第二次请求没关联）的应用层协议（工作在TCP协议之上）。
<br>&emsp;&emsp;采用URL作为定位网络资源的标识，相当于文件路径，格式http://host[:port][path]
<br>&emsp;&emsp;&emsp;&emsp;host：合法的internet主机域名或IP地址；
<br>&emsp;&emsp;&emsp;&emsp;port：端口号，缺省端口为80；
<br>&emsp;&emsp;&emsp;&emsp;path：请求资源的路径。
<br>&emsp;&emsp;HTTP协议对资源的操作：GET、HEAD、POST、PUT、PATCH、DELETE，与上面Requests库的6个主要方法对应。
<br>&emsp;&emsp;读取资源用GET全部资源、HEAD头部信息；用户向云端提交用PUT、POST、PATCH，删除用DELETE。<br>
<br>&emsp;&emsp;HTTP协议对资源的操作：
<br>&emsp;&emsp;&emsp;&emsp;GET：请求获取URL位置的资源；
<br>&emsp;&emsp;&emsp;&emsp;HEAD：请求获取URL位置资源的头部信息；
<br>&emsp;&emsp;&emsp;&emsp;POST：请求想URL位置的资源后附加新信息；
<br>&emsp;&emsp;&emsp;&emsp;PUT：请求向URL位置存储一个资源，覆盖原位置的资源；
<br>&emsp;&emsp;&emsp;&emsp;PATCH：请求<b>局部更新</b>URL位置的资源，改变部分内容；
<br>&emsp;&emsp;&emsp;&emsp;DELETE：请求删除URL位置存储的资源。
<br>&emsp;&emsp;&emsp;&emsp;PATCH修改局部节省网络带宽，PUT需要重新提交所有的。

<br><br>&emsp;&emsp;&emsp;HTTPS 协议（HyperText Transfer Protocol over Secure Socket Layer）
<br>&emsp;&emsp;&emsp;&emsp;可以理解为HTTP+SSL/TLS， 即 HTTP 下加入 SSL 层
<br>&emsp;&emsp;&emsp;&emsp;HTTPS 的安全基础是 SSL，因此加密的详细内容就需要 SSL，用于安全的 HTTP 数据传输。

<br>&emsp;&emsp;&emsp;&emsp;加密方式：对称密钥加密（客户端给服务器的内容含密文+密钥），易被拦截解密修改
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;非对称密钥加密：服务器把公钥发给客户端，客户端加密后把密文发给服务器。服务器发的公钥被拦截篡改...
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;证书密钥加密：https采用，证书认证机构给公钥加签名，再发给客户端，只有具有该签名的公钥才能在客户端运行

```python
r=requests.head('http://httpbin.org/get')
r.headers
```

    {'Date': 'Sun, 21 May 2023 08:29:44 GMT', 'Content-Type': 'application/json', 'Content-Length': '310', 'Connection': 'keep-alive', 'Server': 'gunicorn/19.9.0', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true'}

```python
r.text#内容是空
```

    ''

```python
#新建字典向服务器提交，放到了表单form字段下
#PUT方法和POST方法区别
payload={'key1':'value1','key2':'value2'}
r=requests.post('http://httpbin.org/post',data=payload)
print(r.text)
```

    {
      "args": {}, 
      "data": "", 
      "files": {}, 
      "form": {
        "key1": "value1", 
        "key2": "value2"
      }, 
      "headers": {
        "Accept": "*/*", 
        "Accept-Encoding": "gzip, deflate, br", 
        "Content-Length": "23", 
        "Content-Type": "application/x-www-form-urlencoded", 
        "Host": "httpbin.org", 
        "User-Agent": "python-requests/2.28.1", 
        "X-Amzn-Trace-Id": "Root=1-6469d71a-616e538a70e8fd493f21ef90"
      }, 
      "json": null, 
      "origin": "58.249.112.27", 
      "url": "http://httpbin.org/post"
    }
    

```python
#存在了data字段下
r=requests.post('http://httpbin.org/post',data='ABC')
print(r.text)
```

    {
      "args": {}, 
      "data": "ABC", 
      "files": {}, 
      "form": {}, 
      "headers": {
        "Accept": "*/*", 
        "Accept-Encoding": "gzip, deflate, br", 
        "Content-Length": "3", 
        "Host": "httpbin.org", 
        "User-Agent": "python-requests/2.28.1", 
        "X-Amzn-Trace-Id": "Root=1-6469d75e-22635f7c5864c684034627dd"
      }, 
      "json": null, 
      "origin": "58.249.112.27", 
      "url": "http://httpbin.org/post"
    }
    
    

（7）Requests库主要方法解析
<br><b>&emsp;&emsp;requests.request(method,url,**kwargs)</b>，构造一个请求，支撑以下各方法的基础；
<br>&emsp;&emsp;&emsp;&emsp;method：请求方式，对应'GET','HEAD','POST','PUT','PATCH','delete','OPTIONS'；
<br>&emsp;&emsp;&emsp;&emsp;<b>url</b>：拟获取页面的url链接；
<br>&emsp;&emsp;&emsp;&emsp;**kwargs：控制访问的参数，共13个。
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>params</b>：字典或字节序列，作为参数增加到url中；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>data</b>：字典、字节序列或文件对象，作为Request携带的内容；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;json：JSON格式的数据，作为Request的内容；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>headers</b>：字典，HTTP定制头，向某一个url访问时发起的HTTP的头字段；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cookies：字典或CookieJa，Request中的cookie；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;auth：元组，支持HTTP认证功能；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;files：字典类型，传输文件，向链接提交文件；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>timeout</b>：设置超时时间，秒；如果时间内没请求内容没返回回来，会产生异常；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;proxies：字典类型，设定访问代理服务器，可以增加登录认证；可以有效隐藏用户爬取网页时的源IP地址信息，有效防止对爬虫的逆追踪；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;allow_redirects：True/False，默认True，重定向开关；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stream：True/False，默认True，获取内容立即下载开关；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;verify：True/False，默认True，认证SSL证书开关；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;xcert：本地SSL证书路径。
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

<b>&emsp;&emsp;request.get(url,params=None,**kwargs)</b>，获取HTML网页的主要方法，对应于HTTP的GET；
<br>&emsp;&emsp;&emsp;&emsp;params：url中的额外参数，字典或字节流格式，可选；
<br>&emsp;&emsp;&emsp;&emsp;**karags：12个控制访问的参数（除了params），对应request里面的。

<b>&emsp;&emsp;request.head(url,**kwargs)</b>，获取HTML网页头信息的方法，对应于HTTP的HEAD；
<br>&emsp;&emsp;&emsp;&emsp;**kwargs：13个控制访问的参数，与request一样。

&emsp;&emsp;<b>request.post(url,data=None,json=None,**kwargs)</b>，向HTML网页提交POST请求的方法，对应于HTTP的POST；
<br>&emsp;&emsp;&emsp;&emsp;data：字典、字节序列或文件，Request的内容；
<br>&emsp;&emsp;&emsp;&emsp;json：JSON格式的数据，Request的内容；
<br>&emsp;&emsp;&emsp;&emsp;**kwargs：11个控制访问的参数，Request中除了data和json的11个。

<b>&emsp;&emsp;request.put(url,data=None,**kwargs)</b>，向HTML网页提交PUT请求的方法，对应于HTTP的PUT；
<br>&emsp;&emsp;&emsp;&emsp;data：字典、字节序列或文件，Request的内容；
<br>&emsp;&emsp;&emsp;&emsp;**kwargs：12个~

<b>&emsp;&emsp;request.patch(url,data=None,**kwargs)</b>，向HTML网页提交局部修改请求，对应于HTTP的PATCH；
<br>&emsp;&emsp;&emsp;&emsp;**kwargs：12个~

<b>&emsp;&emsp;request.delete(url,**kwargs)</b>，向HTML网页提交删除请求，对应于HTTP的DELETE。
<br>&emsp;&emsp;&emsp;&emsp;**kwargs：13个~

浏览器页面右击->检查->网络，可以查看所有请求的信息，包括User-Agent、返回了什么、返回类型、状态码等
<br>get用来获取一个页面的源代码，指定参数params可以在url后面加一些内容
<br>post用来发送请求以获取响应，指定参数data可以携带一些参数，与js有关，get获取不了

```python
kv={'key1':'value1','key2':'value2'}
hd={'user-agent':'Chrome1/10'}#Chrome浏览器第十个版本
fs={'file':open('data.xlsx','rb')}
pxs={'http':'http://user:pass@10.10.10.1:1234'
     'https':'https:10,10,10,1:4321'}

r1=requests.request('GET','http://python123.io/ws',params=kv)
r2=requests.request('POST','http://python123.io/ws',data=kv)
r3=requests.request('POST','http://python123.io/ws',json=kv)
r4=requests.request('POST','http://python123.io/ws',header=hd)
r5=requests.request('POST','http://python123.io/ws',files=fs)
r6=requests.request('GET','http://www.baidu.com',proxies=pxs)

print(r1.url)#键值对放在url链接里
print(r2.url)#键值对放在url链接对应位置的地方，作为数据存储
print(r3.url)
```

    https://python123.io/ws?key1=value1&key2=value2
    http://python123.io/ws
    http://python123.io/ws
    

```python
#例子，爬取100次测试时间
import requests
import time

def re(url):
    try:
        r=requests.get(url,timeout=30)
        r.raise_for_status()
        r.encoding=r.apparent_encoding
        return r.text
    except:
        return '访问失败'

url="http://www.baidu.com"
t1=time.time()
for i in range(100):
    re(url)
t2=time.time()
print('总耗时：',t2-t1,'秒')
```

    总耗时： 10.941176891326904 秒
    

```python
#搜狗翻译请求
url="https://fanyi.sogou.com/reventondc/suggV3"

w=input('输入要查询的单词：')
data={}
data["from"]="auto"
data["to"]="zh-CHS"
data["client"]="wap"
data["text"]=w
data["uuid"]="920a6f56-fc77-4d75-b1f8-a52919dc12a2"
data["pid"]="sogou-dict-vr"
data["addSugg"]="on"

#在data赋值完成后，将data转码为utf-8
import urllib.request
import urllib.parse
data = urllib.parse.urlencode(data).encode('utf-8')
response = urllib.request.urlopen(url,data)

html = response.read().decode('utf-8')

import json
dic=json.loads(html)

import pandas as pd
import numpy as np
import pyautogui

try:
    word=[]
    pro=[]
    mean=[]
    word.append(dic['sugg'][0]['k'])
    tmp=dic['sugg'][0]['v'].split('.')
    pro.append(tmp[0])
    mean.append(tmp[1])
    df1=pd.DataFrame({'单词':word,'词性':pro,'意思':mean})
    print(df1)
    
    c=pyautogui.confirm(text='是否显示拓展单词和短语？',buttons=['是','否'])
    if c=='是':
        word,pro,mean=[],[],[]
        for i in dic['sugg']:
            word.append(i['k'])
            m=i['v'].split('.')
            #判断一下，短语没有.，m长度为1
            if len(m)==1:
                m=[' ']+m
            pro.append(m[0])
            mean.append(m[1])
        df2=pd.DataFrame({'单词':word,'词性':pro,'意思':mean})
        df2.drop(0,inplace=True)
        print(df2)
        pyautogui.alert('已显示')
except:
    print('查不到！')
```

    输入要查询的单词： history
            单词 词性                           意思
    0  history  n  历史；过去；历史剧；充满大事的历史；带有某种特征的历史
                        单词 词性              意思
    1      history-sheeter  n   有犯罪记录的人；有前科的人
    2       history-making          历史性；列入史册的
    3  history-making bout            编造历史的回合
    4      history teacher          历史老师；历史教师
    5       history relate               历史关系
    6          history of…               …的历史
    7         history list      历史清单；历史列表；历史表
    8       history lesson     历史课；历史教训；历史的教训
    9   history instructor     历史教员；历史讲师；历史教师
    

```python
#百度翻译请求
import requests
 
url = "https://fanyi.baidu.com/sug"
 
s= input("请输入你要翻译的英文单词：")
date = {
    'kw': s
}

# 发送post请求，发送的数据必须放在字典中，通过data参数进行传递
resp = requests.post(url, data=date)
# print(resp.text)  # 这样中文会出现代码，不利于提取数据
#返回内容为json形式时才能用.json()
resp_json = resp.json()  # 将服务器返回的内容直接处理成json() => 也即python中的字典dict
print(resp_json['data'][0]['v'])  # 拿到返回字典的内容
resp.close()
```

    请输入你要翻译的英文单词： run
    vt.& vi. 跑; 移动; （使）流动 n. 奔跑; 行程; 放映期; 一系列 vi. 逃跑; 
    

```python
#字符串类型
resp.json()
```

    {'errno': 0,
     'data': [{'k': 'run',
       'v': 'vt.& vi. 跑; 移动; （使）流动 n. 奔跑; 行程; 放映期; 一系列 vi. 逃跑; '},
      {'k': 'RUN', 'v': 'abbr. running 运转; residential universal network 家居'},
      {'k': 'Runa', 'v': '[地名] [葡萄牙] 鲁纳'},
      {'k': 'rune', 'v': 'n. 古代北欧文字; 芬兰古诗; 神秘的符号'},
      {'k': 'rung', 'v': 'n. 阶梯，梯级; （地位等的上升）一级; （椅子等）横档 v. 把…圈起来( ring的过去分词)'}]}

## 2. 网络爬虫的”盗亦有道“

网络爬虫的尺寸：
<br>&emsp;&emsp;（1）爬取网页，小规模数据量小，爬取速度不敏感，用Requests库，占90%以上；
<br>&emsp;&emsp;（2）爬取网站，中规模，数据规模较大，爬取速度敏感，用Scrapy库；
<br>&emsp;&emsp;（3）爬取全网，大规模，搜索引擎爬取速度关键，如百度谷歌。<br>
<br>网络爬虫引发的问题：
<br>&emsp;&emsp;（1）骚扰问题；
<br>&emsp;&emsp;（2）法律风险。<br>
<br>限制网络爬虫的方式：
<br>&emsp;&emsp;（1）来源审查，判断来访HTTP协议头的User-Agent域，只响应浏览器或友好爬虫的访问；
<br>&emsp;&emsp;（2）发布公告：Robots协议，告知所有爬虫网站的爬取策略，要求爬虫遵守。<br>
<br>Robots协议（Robots Exclusion Standard网络爬虫排除标准）：
<br>&emsp;&emsp;作用：网站告知哪些页面可以抓取，哪些不可以；
<br>&emsp;&emsp;形式：在网站根目录下放置robots.txt文件，写明了哪些可爬哪些不能爬；
<br>&emsp;&emsp;基本语法：
<br>&emsp;&emsp;&emsp;&emsp;#注释、\*代表所有、/代表根目录；
<br>&emsp;&emsp;&emsp;&emsp;User-agent：\*，表明哪些爬虫；
<br>&emsp;&emsp;&emsp;&emsp;Disallow：/，表明不允许爬取的目录。
<br>&emsp;&emsp;如果没有robots.txt，允许所有爬虫无限制爬取所有内容。
<br>&emsp;&emsp;Robots协议的使用：
<br>&emsp;&emsp;&emsp;&emsp;任何爬虫自动/人工识别robots.txt，再爬取；
<br>&emsp;&emsp;&emsp;&emsp;Robots是建议但非约束性，可以不遵守，但存在法律风险。

## 3. Requests库网络爬虫实战

（1）京东商品页面

```python
url="https://item.jd.com/2967929.html"
try:
    r=requests.get(url)
    r.raise_for_status()
    r.encoding=r.apparent_encoding
    print(r.text[:1000])
except:
    print("爬取失败")
```

    <!DOCTYPE HTML>
    <html lang="zh-CN">
    <head>
        <!-- shouji -->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>【华为荣耀8】荣耀8 4GB+64GB 全网通4G手机 魅海蓝【行情 报价 价格 评测】-京东</title>
        <meta name="keywords" content="HUAWEI荣耀8,华为荣耀8,华为荣耀8报价,HUAWEI荣耀8报价"/>
        <meta name="description" content="【华为荣耀8】京东JD.COM提供华为荣耀8正品行货，并包括HUAWEI荣耀8网购指南，以及华为荣耀8图片、荣耀8参数、荣耀8评论、荣耀8心得、荣耀8技巧等信息，网购华为荣耀8上京东,放心又轻松" />
        <meta name="format-detection" content="telephone=no">
        <meta http-equiv="mobile-agent" content="format=xhtml; url=//item.m.jd.com/product/2967929.html">
        <meta http-equiv="mobile-agent" content="format=html5; url=//item.m.jd.com/product/2967929.html">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <link rel="canonical" href="//item.jd.com/2967929.html"/>
            <link rel="dns-prefetch" href="//misc.360buyimg.com"/>
        <link rel="dns-prefetch" href="//static.360buyimg.com"/>
        <link rel="dns-prefetch" href="//storage.jd.com"/>
        <link rel="dns-pr
    

（2）亚马逊商品页面的爬取

```python
url="https://www.amazon.cn/s?k=%E6%97%A0%E4%BA%BA%E6%9C%BA&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=36YDRGFHLAED&sprefix=%E6%97%A0%E4%BA%BA%E6%9C%BA%2Caps%2C136&ref=nb_sb_noss_1"
try:
    r=requests.get(url)
    r.raise_for_status()
    r.encoding=r.apparent_encoding
    print(r.text[:1000])
except:
    print("爬取失败")
```

    爬取失败
    

```python
r.status_code
```

    503

```python
r.encoding=r.apparent_encoding
```

```python
r.text#被查到用爬虫了
```

    '<!DOCTYPE html>\n<!--[if lt IE 7]> <html lang="zh-CN" class="a-no-js a-lt-ie9 a-lt-ie8 a-lt-ie7"> <![endif]-->\n<!--[if IE 7]>    <html lang="zh-CN" class="a-no-js a-lt-ie9 a-lt-ie8"> <![endif]-->\n<!--[if IE 8]>    <html lang="zh-CN" class="a-no-js a-lt-ie9"> <![endif]-->\n<!--[if gt IE 8]><!-->\n<html class="a-no-js" lang="zh-CN"><!--<![endif]--><head>\n<meta http-equiv="content-type" content="text/html; charset=UTF-8">\n<meta charset="utf-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n<title dir="ltr">Amazon.cn</title>\n<meta name="viewport" content="width=device-width">\n<link rel="stylesheet" href="https://images-na.ssl-images-amazon.com/images/G/01/AUIClients/AmazonUI-3c913031596ca78a3768f4e934b1cc02ce238101.secure.min._V1_.css">\n<script>\n\nif (true === true) {\n    var ue_t0 = (+ new Date()),\n        ue_csm = window,\n        ue = { t0: ue_t0, d: function() { return (+new Date() - ue_t0); } },\n        ue_furl = "fls-cn.amazon.cn",\n        ue_mid = "AAHKV2X7AFYLW",\n        ue_sid = (document.cookie.match(/session-id=([0-9-]+)/) || [])[1],\n        ue_sn = "opfcaptcha.amazon.cn",\n        ue_id = \'6GPTJR4QBP2SKFYM29XN\';\n}\n</script>\n</head>\n<body>\n\n<!--\n        To discuss automated access to Amazon data please contact api-services-support@amazon.com.\n        For information about migrating to our APIs refer to our Marketplace APIs at https://developer.amazonservices.com.cn/index.html/ref=rm_c_sv, or our Product Advertising API at https://associates.amazon.cn/gp/advertising/api/detail/main.html/ref=rm_c_ac for advertising use cases.\n-->\n\n<!--\nCorreios.DoNotSend\n-->\n\n<div class="a-container a-padding-double-large" style="min-width:350px;padding:44px 0 !important">\n\n    <div class="a-row a-spacing-double-large" style="width: 350px; margin: 0 auto">\n\n        <div class="a-row a-spacing-medium a-text-center"><i class="a-icon a-logo"></i></div>\n\n        <div class="a-box a-alert a-alert-info a-spacing-base">\n            <div class="a-box-inner">\n                <i class="a-icon a-icon-alert"></i>\n                <h4>请输入您在下方看到的字符</h4>\n                <p class="a-last">抱歉，我们只是想确认一下当前访问者并非自动程序。为了达到最佳效果，请确保您浏览器上的 Cookie 已启用。</p>\n                </div>\n            </div>\n\n            <div class="a-section">\n\n                <div class="a-box a-color-offset-background">\n                    <div class="a-box-inner a-padding-extra-large">\n\n                        <form method="get" action="/errors/validateCaptcha" name="">\n                            <input type=hidden name="amzn" value="f2Cfl+/xqA40g3GC2hOcOQ==" /><input type=hidden name="amzn-r" value="&#047;dp&#047;B08ZMR5NBG&#047;ref&#061;sr_1_2?__mk_zh_CN&#061;&#037;E4&#037;BA&#037;9A&#037;E9&#037;A9&#037;AC&#037;E9&#037;80&#037;8A&#037;E7&#037;BD&#037;91&#037;E7&#037;AB&#037;99&amp;crid&#061;36YDRGFHLAED&amp;keywords&#061;&#037;E6&#037;97&#037;A0&#037;E4&#037;BA&#037;BA&#037;E6&#037;9C&#037;BA&amp;qid&#061;1684677337&amp;sprefix&#061;&#037;E6&#037;0A&#037;97&#037;A0&#037;E4&#037;BA&#037;BA&#037;E6&#037;9C&#037;BA&#037;2Caps&#037;2C136&amp;sr&#061;8&#045;2" />\n                            <div class="a-row a-spacing-large">\n                                <div class="a-box">\n                                    <div class="a-box-inner">\n                                        <h4>请输入您在这个图片中看到的字符：</h4>\n                                        <div class="a-row a-text-center">\n                                            <img src="https://images-na.ssl-images-amazon.com/captcha/xsqyeruq/Captcha_tcrmvetiob.jpg">\n                                        </div>\n                                        <div class="a-row a-spacing-base">\n                                            <div class="a-row">\n                                                <div class="a-column a-span6">\n                                                    <label for="captchacharacters">输入字符</label>\n                                                </div>\n                                                <div class="a-column a-span6 a-span-last a-text-right">\n                                                    <a onclick="window.location.reload()">换一张图</a>\n                                                </div>\n                                            </div>\n                                            <input autocomplete="off" spellcheck="false" id="captchacharacters" name="field-keywords" class="a-span12" autocapitalize="off" autocorrect="off" type="text">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class="a-section a-spacing-extra-large">\n\n                                <div class="a-row">\n                                    <span class="a-button a-button-primary a-span12">\n                                        <span class="a-button-inner">\n                                            <button type="submit" class="a-button-text">继续购物</button>\n                                        </span>\n                                    </span>\n                                </div>\n\n                            </div>\n                        </form>\n\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="a-divider a-divider-section"><div class="a-divider-inner"></div></div>\n\n        <div class="a-text-center a-spacing-small a-size-mini">\n            <a href="https://www.amazon.cn/gp/help/customer/display.html/ref=footer_claim?ie=UTF8&nodeId=200347160">使用条件</a>\n            <span class="a-letter-space"></span>\n            <span class="a-letter-space"></span>\n            <span class="a-letter-space"></span>\n            <span class="a-letter-space"></span>\n            <a href="https://www.amazon.cn/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=200347130">隐私声明</a>\n        </div>\n\n        <div class="a-text-center a-size-mini a-color-secondary">\n          &copy; 1996-2015, Amazon.com, Inc. or its affiliates\n          <script>\n           if (true === true) {\n             document.write(\'<img src="https://fls-cn.amaz\'+\'on.cn/\'+\'1/oc-csi/1/OP/requestId=6GPTJR4QBP2SKFYM29XN&js=1" />\');\n           };\n          </script>\n          <noscript>\n            <img src="https://fls-cn.amazon.cn/1/oc-csi/1/OP/requestId=6GPTJR4QBP2SKFYM29XN&js=0" />\n          </noscript>\n        </div>\n    </div>\n    <script>\n    if (true === true) {\n        var head = document.getElementsByTagName(\'head\')[0],\n            prefix = "https://images-cn.ssl-images-amazon.com/images/G/01/csminstrumentation/",\n            elem = document.createElement("script");\n        elem.src = prefix + "csm-captcha-instrumentation.min.js";\n        head.appendChild(elem);\n\n        elem = document.createElement("script");\n        elem.src = prefix + "rd-script-6d68177fa6061598e9509dc4b5bdd08d.js";\n        head.appendChild(elem);\n    }\n    </script>\n</body></html>\n'

```python
#改user-agent
r.request.headers#'User-Agent': 'python-requests/2.28.1'
```

    {'User-Agent': 'python-requests/2.28.1', 'Accept-Encoding': 'gzip, deflate, br', 'Accept': '*/*', 'Connection': 'keep-alive'}

```python
#更改头部信息再爬取
kv={'user-agent':'Mozilla/5.0'}
url="https://www.amazon.cn/s?k=%E6%97%A0%E4%BA%BA%E6%9C%BA&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&crid=36YDRGFHLAED&sprefix=%E6%97%A0%E4%BA%BA%E6%9C%BA%2Caps%2C136&ref=nb_sb_noss_1"
try:
    r=requests.get(url,headers=kv)
    r.raise_for_status()
    r.encoding=r.apparent_encoding
    print(r.text[:1000])
except:
    print('爬取失败')
```

    <!DOCTYPE html>
    <!--[if lt IE 7]> <html lang="zh-CN" class="a-no-js a-lt-ie9 a-lt-ie8 a-lt-ie7"> <![endif]-->
    <!--[if IE 7]>    <html lang="zh-CN" class="a-no-js a-lt-ie9 a-lt-ie8"> <![endif]-->
    <!--[if IE 8]>    <html lang="zh-CN" class="a-no-js a-lt-ie9"> <![endif]-->
    <!--[if gt IE 8]><!-->
    <html class="a-no-js" lang="zh-CN"><!--<![endif]--><head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title dir="ltr">Amazon.cn</title>
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="https://images-na.ssl-images-amazon.com/images/G/01/AUIClients/AmazonUI-3c913031596ca78a3768f4e934b1cc02ce238101.secure.min._V1_.css">
    <script>
    
    if (true === true) {
        var ue_t0 = (+ new Date()),
            ue_csm = window,
            ue = { t0: ue_t0, d: function() { return (+new Date() - ue_t0); } },
            ue_furl = "fls-cn.amazon.cn",
            ue_mid = "AAHKV2X7AFYLW",
          
    

（3）百度360搜索关键词提交
<br>替换keyword，向搜索引擎提交关键词

```python
#百度
kv={'wd':'python'}
try:
    r=requests.get("http://www.baidu.com/s",params=kv)
    r.raise_for_status()
    r.encoding=r.apparent_encoding
    # print(r.text[:1000])
    #url已经改了
    print(r.request.url)
    print(len(r.text))
except:
    print('爬取失败')
```

    http://www.baidu.com/s?wd=python
    922935
    

```python
#360
kv={'q':'python'}
try:
    r=requests.get("http://www.so.com/s",params=kv)
    r.raise_for_status()
    r.encoding=r.apparent_encoding
    # print(r.text[:1000])
    #url已经改了
    print(r.request.url)
    print(len(r.text))
except:
    print('爬取失败')
```

    https://www.so.com/s?q=python
    462806
    

（4）网络图片的爬取和存储

```python
url="http://satellite.nsmc.org.cn/PortalSite/images/Home/FY3G-banner.jpg"
try:
    r=requests.get(url)
    r.raise_for_status()
    print(r.status_code)
    #保存图片
    #二进制形式打开文件并写入
    with open("../data/FY3G.jpg","wb") as f:
        f.write(r.content)
except:
    print('爬取失败')
```

    200
    

```python
#网易新闻的一张图片
url='https://nimg.ws.126.net/?url=https%3A%2F%2Fcms-bucket.ws.126.net%2F2023%2F0704%2F7c4c98e0p00rx909h004ec000s600e3c.png&thumbnail=300y150&quality=100&type=jpg'

kv={
    'url': 'https://cms-bucket.ws.126.net/2023/0704/7c4c98e0p00rx909h004ec000s600e3c.png',
    'thumbnail': '300y150',
    'quality': '100',
    'type': 'jpg'
}
hd={
    'user-agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36 Edg/114.0.1823.67'
}
r=requests.post(url,data=kv,headers=hd)

#wb表示以二进制形式打开并写入
with open('../data/wangyi.jpg','wb') as f:
    f.write(r.content)
```

```python
import os

root='../data/'
url='https://ossweb-img.qq.com/upload/webplat/info/202305/e05beab787614818e475f8fff534199b.files/image001.png'
path=root+url.split('/')[-1]#以反斜杠分割的最后一部分，即图片名称
try:
    #判断根目录是否存在
    if not os.path.exists(root):
        os.mkdir(root)
    if not os.path.exists(path):
        r=requests.get(url)
        #保存图片
        with open(path,'wb') as f:
            f.write(r.content)
            f.close()
            print(f'图片"{url}"保存成功！')
    else:
        print('文件已存在')
except:
    print('爬取失败')
```

    图片"https://ossweb-img.qq.com/upload/webplat/info/202305/e05beab787614818e475f8fff534199b.files/image001.png"保存成功！
    

（5）IP地址归属地的自动查询

```python
#手动点击提交实际上是以链接方式发送给服务器，可以用python代码实现
url='https://ip.cn/ip/'
try:
    r=requests.get(url+'58.249.112.27'+'.html')
    r.raise_for_status()
    r.encoding=r.apparent_encoding
    print(r.text[4161:4175])
except:
    print('爬取失败')
```

    中国  广东省 广州市 联通
    

（6）肯德基指定城市的门店爬取

```python
import time
import pyautogui
import pandas as pd

city=input('输入要查的城市名：')
hd={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 \
                    (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36 Edg/91.0.864.48'}
url='http://www.kfc.com.cn/kfccda/ashx/GetStoreList.ashx?op=keyword'
rownum,storeName,addressDetail,pro,provinceName,cityName=[],[],[],[],[],[]
t1=time.time()
for i in range(1,101):
    try:
        kd={
            'cname':'',
            'pid':'',
            'keyword':city,
            'pageIndex': i,
            'pageSize': 10
        }  
        r=requests.post(url,data=kd,headers=hd)
        num=1
        for item in r.json()['Table1']:
            t2=time.time()
            print('\r                                                           ',end='')
            print(f'\r正在爬取第{(i-1)*10+num}个门店的信息...，整体已用时{round(t2-t1,2)}秒',end='')
            rownum.append(item['rownum'])
            storeName.append(item['storeName'])
            addressDetail.append(item['addressDetail'])
            pro.append(item['pro'])
            provinceName.append(item['provinceName'])
            cityName.append(item['cityName'])
            num+=1
            time.sleep(0.1)
        
    except Exception as a:
        print(f'报错{a}')
print('\n爬取完毕！')
c=pyautogui.confirm(text='是否存为excel？',buttons=['是','否'])
if c=='是':
    df=pd.DataFrame({'店名':storeName,'详细地址':addressDetail,'亮点':pro,'所在省':provinceName,'所在城市':cityName})
    df.index=range(1,len(df)+1)
    #排除查找错误的城市
    df=df[df.所在城市==df.所在城市[1]]
    df.to_excel(f'../data/{df.所在城市[1]}肯德基查询结果.xlsx')
    pyautogui.alert(text=f'保存成功！\n路径为： "../data/{df.所在城市[1]}肯德基查询结果.xlsx"')
```

    输入要查的城市名： 成都
    正在爬取第77个门店的信息...，整体已用时10.58秒                               
    爬取完毕！
    

## 4. 自动生成user-agent

![image.png](/pages/python/network/spider/images/requests-1.png)

```python
from fake_useragent import UserAgent
```

```python
ua=UserAgent()
for i in range(10):
    print(ua.random)
```

    Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.82
    Mozilla/5.0 (Windows NT 10.0; rv:114.0) Gecko/20100101 Firefox/114.0
    Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.86
    Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36
    

```python
#生成指定浏览器的UA
for i in range(10):
    print(UserAgent(browsers='chrome').random)
print('-'*80)
for i in range(10):
    print(UserAgent(browsers='edge').random)
print('-'*80)
for i in range(10):
    print(UserAgent(browsers='firefox').random)
print('-'*80)
for i in range(10):
    print(UserAgent(browsers='safari').random)
```

    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 OPR/100.0.0.0
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36
    --------------------------------------------------------------------------------
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.86
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.82
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.86
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.183
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.86
    --------------------------------------------------------------------------------
    Mozilla/5.0 (Windows NT 10.0; rv:109.0) Gecko/20100101 Firefox/115.0
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/114.0
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/114.0
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/114.0
    Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0
    Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0
    Mozilla/5.0 (Windows NT 10.0; rv:109.0) Gecko/20100101 Firefox/115.0
    Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0
    Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/114.0
    Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/114.0
    --------------------------------------------------------------------------------
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15
    

## 5. 代理IP

免费的有风险

快代理，有免费有付费
[快代理](https://www.kuaidaili.com/)

- 爬取到上面的免费IP，注意是http
- 筛选掉响应时间太长的
- 后面用这些代理进行requests请求，proxies参数是个字典
    - 格式：<b>proxies={'http':'http://1.1.1.1:1111'}</b>，用https时注意切换https
    - 可以每次random.choice(proxies_list)，再组装成**字典**
- 可以搭配随机User-Agent一起使用

