---
title: FastAPI
titleTemplate: Python笔记
---

<b><h1>FastAPI官网：[https://fastapi.tiangolo.com/zh/](https://fastapi.tiangolo.com/zh/)</h1></b>
**API（Application Programming Interface）应用程序接口**
<!-- # cSpell:ignore fastapi -->
<!-- # cSpell:ignore uvicorn -->
- `# cSpell:ignore fastapi`，告诉vscode不检查fastapi是否Unknown word
- `# cSpell:ignore uvicorn`，同理
  

## 1. 安装和运行
- 安装
    ```python
    pip install fastapi
    # 安装uvicorn，记得添加到环境变量
    pip install "uvicorn[standard]"
    # 安装fastapi和uvicorn
    pip install "fastapi[all]"
    ```
- 简易例子
    ```python
    from fastapi import FastAPI
    from fastapi.responses import HTMLResponse
    import json
    app = FastAPI()
    @app.get('/')
    def f():
        return HTMLResponse(content = '<h1>标题</h1>', status_code = 200, media_type = 'text/html')
    ```
- 运行
    - 终端转到py文件所在目录
        - `uvicorn server:app --reload`
        - `server.py`里面的`app`
        - `reload`，保存时会自动刷新
        - 还可以加`--host 127.0.0.1`ip、`--port 8000`端口号
    - 或者`server.py`中
    ```python
    import uvicorn
    if __name__ == '__main__':
        uvicorn.run(app = 'server:app', host = '127.0.0.1', port = 8000, reload = True)
    # 之后运行， python server.py
    ``` 
- `app = FastAPI(docs_url=None, redoc_url=None)`，关闭自带的文档页面


## 2. 请求类型
- `GET`、`POST`、`PUT`等
- 响应多种请求类型
    ```python
    @app.api_route('/form', methods = ['POST', 'GET'])
    async def fun():
        return Response('<h1>打开成功</h1>', media_type = 'text/html')
    ```

## 3. 类型提示和默认值
- 变量、函数后+冒号+类型提示内容
    - 多个类型中间加`|`
    - 或者`Union[str,List[str]]`这样写，要引入`from typing import Union, List`
    - `Union`可以嵌套
- 自己以后看起来直观，编辑器能记住，下次输入时有提示；同时也对参数起到**类型检测**的作用
- 也可以是带有子类型的类型
- 函数的形参中可以指定默认值，指定了就不是必须参数了
- 类型：
    - `str`、`int`、`float`、`bool`、`bytes`、`list`、`tuple`、`set`、`dict`、`None`，不用导入
    - 从`fastapi`导入
        - `Request`、`Response`、`UploadFile`等
    - 从`typing`导入
        - `Tuple`、`List`、`Dict`、`Set`、、`Any`、`Optional`
    - 自定义的继承BaseModel的类
        - `from pydantic import BaseModel`
    - `np.ndarray`、`pd.DataFrame`等
- 嵌套
    ```python
    # 用typing的类型一样写法，建议用
    a: list[int, float, str, tuple[int, int], dict] = [1, 1.1, 'a', (1, 1), {'name': 'n'}]

    # 多个里面任意一个就行
    def f(x: int|float|str) -> None:
        pass
    # 或者用
    def f(x: Union[int, float, str]) -> None:
        pass
    
    # 任意类型
    def f(x: Any) -> None:
        print('s')
    
    # 可选
    def f(x: Optional[int]) -> None:
        pass
    # 等价于
    def f(x: Union[int, None]) -> None:
        pass
    # 或者
    def f(x: int|None) -> None:
        pass

    # 指定参数默认值，就不是必须参数了
    ``` 
    ```python
    def get_items(item_a: str, item_b: int, item_c: float, item_d: bool, item_e: bytes) -> tuple(str, int, float, bool, bytes):
        return item_a, item_b, item_c, item_d, item_d, item_e

    def process_items(items: List[str]) -> None:
        for item in items:
            print(item)
    # 元祖、集合、字典
    from typing import Tuple, Set, Dict
    def process_items(items_t: Tuple[int, int, str], items_s: Set[bytes], prices: Dict[str, float]) -> bool:
        return True
    # 类
    class Person:
        def __init__(self, name: str) -> None:
            self.name = name
        def get_person_name(one_person: Person) -> str:
            return one_person.name
    ``` 
- 为类型注解提供额外的元数据
    - 比如说后面的`Query()`、`Path()`、`Body()`、`Field()`、`Form()`、`File()`、`Cookie()`、`Header()`、`Depends()`等
    ```python
    from typing import Annotated, Optional
    def f(
        a1: int, 
        a2: Annotated[str, "参数a2的描述"], 
        a3: Annotated[Optional[str], "描述"]
    ) -> bool:
        return False
    ```
- 路径、查询、请求体等参数都用类型注解，进行限制则用元数据


## 4. 路径参数
- **注意路由匹配顺序**
- 可以直接指定默认值
- 也可以用`Path()`路径元数据，参数有：
    - `default = `，默认值，`...`表示必传参数（或者**直接不写这项**），或者也可以直接`Path(...)`
    - `le = `、`ge = `、`lt = `、`gt = `，小于等于多少、大于等于多少、小于多少、大于多少
    - `max_length = `、`min_length = `最大、最小长度
    - `pattern = `正则表达式
    - `title = `参数说明
    - `description = `，参数说明
    - `alias = `别名参数
    - `examples = []`里面写例子，符合注解的类型
    ```python
    from fastapi import FastAPI, Path
    from fastapi.responses import JSONResponse
    app = FastAPI()
    @app.get('/position/{country}/{province}')
    def f(
        country: str = Path(default = None, description = "国家"),
        province: str = None
        ):
        return JSONResponse(content = {'country': country, 'province': province})
    ```

- 提取包含路径的路径参数
- 不声明则匹配不到
    ```python
    # 假设路径为"/files//home/johndoe/myfile.txt"
    # 要提取其中的"/home/johndoe/myfile.txt"
    @app.get('/files/{file_path:path}')
    def f(file_path: str):
        return {'file_path': file_path}
    ```
- 别名参数
    - 比如`item-query`在python中作为变量名不合法
    - `q: Union[str, None] = Query(default = None, alias = 'item-query)`提取到q 
- 这种写法
    ```python
    from typing import Annotated
    from fastapi import FastAPI, Path, Query
    
    app = FastAPI()
    
    # Annotated，注释的意思
    async def read_items(
        item_id: Annotated[int, Path(title="The ID of the item to get")],
        q: Annotated[str | None, Query(alias="item-query")] = None,
    ):
        results = {"item_id": item_id}
        if q:
            results.update({"q": q})
        return results
    ``` 

## 5. 查询参数
声明不属于路径参数的其他函数参数时，自动解释为查询参数
- `GET`请求中，`?`后面，开头必须要有`?`；不同参数用`&`连接
- 直接在函数中接收参数，**变量名要一致**；指定类型
- 可以指定默认值，则不是必要参数
- 可以通过`Query()`进行检测，参数同上
- 也可以用`Annotated[]`

- 对所有参数：**有默认值的参数放到没默认值的参数的后面**

## 6. 请求体
- `POST`请求中的参数，主要类型有
    - 表单，用`Form()`提取，见后面
    - 对象
        - 用继承`BaseModel`的类（数据模型）提取
            - 这时函数形参中数据名可以随意，如：`data: Item(...)`，这里随便起了个名`data`
            - 之后，可以用`data.name`获取某个属性；`data.dict()`转为字典，作为参数时可以用`**data.dict()`解包
        - 或者用`Body()`提取请求体中的**参数**
            - 用任意变量如`item`接收，得到的是一个字典，如`item['userName']`获取其中的某个字段
            - 不写`Body()`会被认为是查询参数
            - 缺点是不能像前面那样规定请求体的参数
        - AJAX上传的时候注意把对象要**序列化**为**可传输的字节**，`JSON.stringify(aObject)`
- 这里只提取对象类型的请求体
    ```python
    from fastapi import FastAPI, Body
    from typing import Annotated, Union
    from pydantic import BaseModel

    class Item(BaseModel):
        name: str
        description: str | None = None
        price: float
        tax: float | None = None
        
    app = FastAPI()

    @app.post("/items/")
    async def create_item(item: Item):
        # 获取其中的变量
        print(item.name, item.description, item.price, item.tax)
        # 转为字典
        dic = item.dict()
        print(dic.get('name', 0))
        return item
        
    # 也可以
    @app.post("/items/")
    async def create_item(
        name: str = Body(...), 
        description: Annotated(Union[str, None], Body(default = None)), 
        price: float = Body(...), 
        tax: Annotated[Union[float, None], Body(...)],
        query_params: str = 'default_string' # 这个是查询参数
        ):
        return True
    ```
- 嵌入单个请求体参数
    ```python
    # 这时候期望接收
    # {
    #     "item": {
    #         "name": "Foo",
    #         "description": "The pretender",
    #         "price": 42.0,
    #         "tax": 3.2
    #     }
    # }
    # 而不是
    # {
    #     "name": "Foo",
    #     "description": "The pretender",
    #     "price": 42.0,
    #     "tax": 3.2
    # }
    @app.put("/items/{item_id}")
    async def update_item(item_id: int, item: Annotated[Item, Body(embed=True)]):
        results = {"item_id": item_id, "item": item}
        return results

        
    # 这个也可以用嵌套模型
    # 如多层嵌套的json
    class goods(BaseModel):
        name: str
        description: str | None = None
        price: float
        tax: float | None = None
    class Item(BaseModel):
        item: goods|None = None
        
    @app.put("/items/{item_id}")
    async def update_item(item_id: int, item: Item):
        results = {"item_id": item_id, "item": item}
        return results
    ```
- 使用`pydantic`的`Field()`在`pydantic`模型内部声明和校验元数据，参数同上


## 7. 其他数据类型
- 例
    ```python
    from pydantic import HttpUrl, EmailStr
    from datetime import datetime, time, timedelta
    from uuid import UUID
    # 函数内参数有原生数据类型，可以执行正常的日期操作，比如相加减
    ```


## 8. Cookie和Headers
- 指定元数据`Cookie`才能被识别为`Cookie`，不然会被认为是查询参数
    - 参数同上
    ```python
    from fastapi import Cookie
    app = FastAPI()

    @app.get("/items/")
    async def read_items(ads_id: str | None = Cookie(default=None)):
        return {"ads_id": ads_id}
    ```
- 指定元数据`Header`才能被识别为`Header`，不然会被认为是查询参数
    - 参数同上
    - 默认把`user-agent`转换为`user_agent`
        - 参数`convert_underscores=False`禁用转换
    - 大小写不敏感，可以写`user-Agent`或`user-agent`
    ```python
    @app.get("/items/")
    async def read_items(x_token: list[str] | None = Header(default=None)):
        return {"X-Token values": x_token}
    ```

## 9. 装饰器中的响应
- **响应模型**：装饰器参数`response_model = `
    - 设置继承`BaseModel`的类，表示响应类型为它，里面的参数和它一致
    - 也可以是模型列表、字典等，`list[Item]`、`dict[str, float]`等
    ```python
    class UserIn(BaseModel):
        username: str
        password: str
        email: EmailStr
        full_name: str | None = None


    class UserOut(BaseModel):
        username: str
        email: EmailStr
        full_name: str | None = None


    @app.post("/user/", response_model = UserOut)
    async def create_user(user: UserIn) -> Any:
        return user
    # 返回的没有密码，即使返回的是UserIn类型
    ```
- 装饰器参数`response_model_exclude_unset = True`
    - 设置`response_model`之后，用这个**排除设置默认值的部分**，即**只保留后面传了参的部分**
- 装饰器参数`status_code = 200`响应状态码
    - 可以在这设置也可以用`Response`、`HTMLResponse`等里面设置
- **响应描述**
    - `summary = "xxxxx"`
    - `response_description = "xxxxxxxx"`



## 10. 表单和文件
- 表单在`POST`的**请求体**中
    - 前端中创建表单对象发送
    - 提取里面**单个数据**要指定元数据为`Form()`（直接继承`Body`的类），不然会被看做查询参数或请求体参数
    - 变量名要和表单中的`name`字段**对应**
    - 也可以用<a href="#Request" style="color: blue"><b>Request</b></a>提取
    - 写入csv要指定`encoding = 'utf-8-sig'`
- 文件可以来自表单/单独输入框
    - 前端中加入表单/创建表单发送更方便
    - 类型注解为`UploadFile`、`bytes`，**推荐第一个**
        - 通过类型注解可设置为可选上传文件
    - 元数据为`File()`，不指定会被看做查询参数
        - 属性有`description`、
    - 文件名要和上传时的文件名**对应**
    - 假设文件名为`file1`
        - 属性有：
            - `file1.filename`获取文件名
            - `file1.size`获取大小，**字节数**
            - `file1.file.read()`获取二进制内容，进行后续入库等操作
            - `file1.content_type`媒体类型/MIME类型，字符串
        - 方法有：
            - `await file1.write(data)`，往它里面写入东西
            - `await file1.read([size])`按指定数量字节/字符读取它
                - 不指定`size`默认全读
                - 这里用`await`，注意与`file1.file.read()`区分
            - `await file1.seek(offset)`移动至它`offset(int)`**字节位置**
                - `await file1.seek(0)`开头；可以试试**用于裁剪音视频等**
                - 用于读取之后再次读取
            - `await file1.close()`关闭文件
    - 多个文件
        - `files: list[UploadFile]`
        - 后面遍历列表拿到每个文件 
- 可以在一个路径操作中声明多个 File 与 Form 参数，但不能同时声明要接收 JSON 的 Body 字段
    - 因为此时请求体的编码为 `multipart/form-data`，不是 `application/json`
    ```javascript
    // 包含了表单中设置的所有字段和上传的文件
    // 格式是： 名 值
    // 假设原来有username和password
    const form = document.querySelector('form');
    const inputFile = document.querySelector('input[type="file"]');
    const userForm = new formData(form);
    // 可以再往里面加数据
    // 格式为：名   值
    // 这里分别要用id: int = Form(...)，和f1: UploadFile = File(...)接收
    userForm.append('id', 123456);
    userForme.append('f1', inputFile.files[0]);
    // 最后发出去

    // 上传表单时不用设置headers{'Content-Type': 'application/json'}等
    // 但只传对象时需要上传`JSON.stringify(obectName)`，且设置上述请求头类型
    ``` 

    ```python
    from fastapi import FastAPI, Form, File, UploadFile
    from fastapi.responses import JSONResponse
    import aiofiles
    app = FastAPI()

    @app.post("/login/")
    async def login(
        username: str = Form(), 
        password: str = Form(),
        id: int = Form(),
        f1: UploadFile = File(...)
    ) -> JSONResponse:
    '''
    函数的说明部分
    '''
        try:
            async with aiofiles.open('./t.txt', 'w', encoding = 'utf-8') as f:
                await f.write(f'{username:<20}{password:<20}{id:<10}')
            async with aiofiles.open(f'./{f1.filename}', 'wb') as f:
                await f.write(f1.file.read())
            print(file.size)
            return JSONResponse(content = {'status': 'succeed'})
        except:
            return JSONResponse(content = {'status': 'failed'})
    ```


## 11. 依赖项
- 把实现具体功能、处理传入参数的函数抽离出去
  ```python
  from typing import Union

  from fastapi import Depends, FastAPI

  app = FastAPI()


  async def common_parameters(
      q: Union[str, None] = None, skip: int = 0, limit: int = 100
  ):
      return {"q": q, "skip": skip, "limit": limit}


  @app.get("/items/")
  async def read_items(commons: dict = Depends(common_parameters)):
      return commons


  @app.get("/users/")
  async def read_users(commons: dict = Depends(common_parameters)):
      return commons
  ```

- 类作为依赖项

  ```python
  from fastapi import Depends, FastAPI

  app = FastAPI()


  fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]


  class CommonQueryParams:
      def __init__(self, q: str | None = None, skip: int = 0, limit: int = 100):
          self.q = q
          self.skip = skip
          self.limit = limit


  @app.get("/items/")
  async def read_items(commons: CommonQueryParams = Depends(CommonQueryParams)):
      response = {}
      if commons.q:
          response.update({"q": commons.q})
      items = fake_items_db[commons.skip : commons.skip + commons.limit]
      response.update({"items": items})
      return response
  ```



## 12. 中间件及CORS跨域资源共享
- 中间件
- "中间件"是一个函数,它在每个请求被特定的路径操作处理之前,以及在每个响应返回之前工作
  ```python
  import time

  from fastapi import FastAPI, Request

  app = FastAPI()


  @app.middleware("http")
  async def add_process_time_header(request: Request, call_next):
      start_time = time.time()
      response = await call_next(request)
      process_time = time.time() - start_time
      response.headers["X-Process-Time"] = str(process_time)
      return response
  ```
  

- **源**是协议`http`、`https`、域`xxx.xom`、`localhost`等、端口`8000`等的组合
- 有一个不同就是跨域
    ```python
    from fastapi import FastAPI
    from fastapi.middleware.cors import CORSMiddleware

    app = FastAPI()

    origins = [
        "http://localhost.tiangolo.com",
        "https://localhost.tiangolo.com",
        "http://localhost",
        "http://localhost:8080",
    ]

    # 通配符*表示所有
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins, # 允许跨域请求的源列表，*表示所有
        allow_credentials=True, # 允许携带cookie
        allow_methods=["*"], # 允许的请求方法
        allow_headers=["*"], # 允许的请求头
    )
    # 还有
    # allow_origin_regex = ''    # 正则表达式匹配允许跨域的源

    @app.get("/")
    async def main():
        return {"message": "Hello World"}
    ```
- 也可以通过设置响应头的方式解决跨域
    ```python
    headers = {'Access-Control-Allow-Origin':'*'}
    return JSONResponse(content = json.dumps(response_dict), headers = headers)
    ```




## 13. Request
- `fastapi`中的`类`
```python
from fastapi import FastAPI, Request 
```
- `request.method`
- `request.url`
- `request.client`，ip + port，字典
    - `request.client.host`
    - `request.client.port`
    - `request.headers.host`、`request.headers.port`这样也行，不管这个`port`有点问题
- `request.headers`，请求头，字典
    - `request.headers.get('user-agent', 0)`，获取某一项
- `request.cookies`，cookie，字典
- `request.path_params`，路径参数，字典，路径中的{}，key是这里的名，value是值
- `request.query_params`，查询参数，跟在?后面的，可根据名字取出值，**函数形参那不用写**

- 表单内容
    - 另一种方法是函数形参中指定`username: str = Form()`
    - `form = await request.form()`
    - 或者`async with request.form() as form:`
        - `form`是个字典
        - `form.get('username',0)`
        - `form['username]`
        - `form.get('file',0)`，只能获取文件名，要获取文件内容用UploadFile吧


## 14. `Response`
- - `fastapi`中的`类`
- 路由中默认`status_code = 200`
```python
from fastapi import Response
from fastapi.responses import HTMLResponse, PlainTextResponse, JSONResponse, RedirectResponse, StreamingResponse, FileResponse
```
- 可以在函数形参中接收`(response: Response)`
- 也可以在函数返回值中返回，同时设置参数
- 或者在函数中实例化对象，再设置参数，最后返回对象
    ```python
    @app.get('/')
    async def main():
        response = Response()
        response.set_cookie()
    ```

- 建议用具体的响应而不是笼统的`Response`
- 主类`Response`，其他类都来自它，只能接受**字节流或字节数组**，如果要返回字典需要先`json.dumps(字典)`再返回；但用`JSONResponse()`就没这个烦恼，会自动转化
    - 参数有：
        - `content`：str或bytes
        - `status_code`
        - `headers`：字符串组成的字典
        - `media_type`：媒体类型
            - `application/`，后面有
                - `json`、`xml`、`pdf`、`msword`word、`javascript`、`zip`、`octet-stream`（未知，以二进制文件对待）
            - `text/`
                - `html`、`plain`txt、`css`、`javascript`
            - `image/`
                - `jpeg`、`png`、`gif`、`tiff`、`svg+xml`、`x-icon`
            - `audio/`
                - `mp3`、`mp4`
            - `video/`
                - `mp4`、`webm`
    - `return Response(content=xxx, status_code=xxx, media_type=xxx)`
    ```python
        Response(
            content: Any = None,
            status_code: int = 200,
            headers: Optional[Mapping[str, str]] = None,
            media_type: Optional[str] = None,
            background: Optional[starlette.background.BackgroundTask] = None,
        ) -> None
    ```

- `HTMLResponse`，HTML响应
    - 可以在路由中指定`response_class = HTMLResponse`
    - 或者返回值指定`return HTMLResponse(htmlStr, status_code = 200)`，自定义响应HTML内容和状态码
- `PlainTextResponse`，接受文本或字节并返回纯文本响应
    - 可在路由中指定状态
    - 设置return
- `JSONResponse`，JSON响应
    - 可在路由中指定状态
    - 设置return，返回的是`application/json`
    - JSON兼容编码器
        - `from fastapi.encoders import jsonable_encoder`
        - 将数据类型（如Pydantic模型）转为与JSON兼容的数据类型（如dict）
        - `json_compatible_item_data = jsonable_encoder(item)`，item是请求体数据
- `RedirectResponse`，重定向响应
    - `return RedirectResponse('https://www.baidu.com')`
- `StreamingResponse`，异步生成器或普通生成器/迭代器，流式传输响应主体
    ```python
    # 用的不多，感觉还是FileResponse好用
    async def fake_video_streamer():
        for i in range(10):
            yield b"some fake video bytes"
    @app.get("/")    
    async def main():
        return StreamingResponse(fake_video_streamer())

    # 
    some_file_path = "large-video-file.mp4"
    @app.get("/")
    def main():
        def iterfile():
            with open(some_file_path, mode="rb") as file_like:
                yield from file_like
        return StreamingResponse(iterfile(), media_type="video/mp4")
    ``` 
- 不同写法
    ```python
    @app.get('/1')
    async def p1():
        response = Response(content = '<h1>404 Not Found</h1>')
        # response.media_type = 'application/javascript' # 不起作用
        response.status_code = 404
        # headers貌似只能单独添加，写一起response.headers = {xx:xx, xxx:xxx}不行
        response.headers['X-Custom-Header'] = 'Custom Value'
        response.headers['User-Agent'] = 'myUserAgent'
        response.set_cookie('session_id', '123456')
        return response

    # 这种用的最多
    @app.get('/2')
    async def p2():
        # 可设置和自定义请求头
        headers = {'X-Custom-Header': 'Custom Value', 'User-Agent': 'myUserAgent', 'myHeaders': 'valueXxx'}
        # media_type只有在里面设置才生效
        content = '<h1>404 Not Found</h1>'
        response = Response(content = content, headers = headers, status_code = 404, media_type = 'text/plain')
        response.set_cookie('session_id', '123456')
        response.set_cookie('session_id', '123456aaaaa') # 会覆盖
        response.set_cookie('myCookie', '654321')
        response.delete_cookie('session_id') 
        return response

    # 没法设置cookie
    @app.get('/3')
    async def f3():
        return Response(content = '<h1>404 Not Found</h1>', 
        headers = {'X-Custom-Header': 'Custom Value', 
        'User-Agent': 'myUserAgent', 'myHeaders': 'valueXxx'}, 
        status_code = 404, media_type = 'text/html')
    ```
- `FileResponse`，异步传输文件作为响应
    - 参数有：
        - `path`，路径
        - `headers`，响应头
        - `media_type`
        - `file_name`，如果给出则包含在响应的`Content-Disposition`中

- 返回值也可以用自定义的类
```python
from pydantic import BaseModel
class Item(BaseModel):
    name: str
    age: int
    song: str = '无'

@app.get('/form')
async def f():
    filename = '梨视频.mp4'
    with open(filename,'rb') as f:
        b64_str = base64.b64encode(f.read()).decode('utf-8')
        
        return Item(name = 'yourName', age = 20, song = b64_str)
```














## 15. 错误处理
- 直接`return`，设置对应状态码
- `HTTPException`
    - `details = `可以设置`str`、任何能转换为`JSON`的值（`dict`、`list`等）
    - `headers = `，响应头**字典**
```python
@app.get('/admin')
def admin(request: Request):
    if ! request.headers.get('passport', 0):
        return HTMLResponse(content = '403 Forbidden', status = 404)
    return HTMLResponse(content = '<h1>Welcome</h1>')

from fastapi import HTTPException
@app.get('/admin1')
def admin(request: Request):
    if ! request.headers.get('passport', 0):
        raise HTTPException(status_code = 404, detail = '403 Forbidden')
    return HTMLResponse(content = '<h1>Welcome</h1>')
```


- 响应文件和文件名
    ```python
    @app.post('/getVideo')
    async def video():
        async with aiofiles.open('./梨视频.mp4', 'rb') as f:
            headers = {
                'response_code': 'xsjsdkfheiurjk19238yrhfejkdsvnbk=',
                'filename': str('梨视频.mp4'.encode('utf-8'))
                }
            return Response(content = await f.read(), headers = headers, media_type = 'video/mp4')
    ```
    ```javascript
    // 初始化视频
    const video = document.querySelector('.video-player video');
    (async () => {
        const res = await fetch('http://127.0.0.1:8000/getVideo', {
            method: 'POST'
        });
        const result = await res.blob();
        console.log(res.headers.get('response_code'));
        console.log(res.headers.get('Content-Type')); // 即media_type
        
        let byteString = res.headers.get('filename');
        // 提取字节串部分并将其转换为字节数组
        const byteValues = byteString.split('\\x').slice(1).map(hex => parseInt(hex, 16));
        const utf8Bytes = new Uint8Array(byteValues);

        // 使用 TextDecoder 对象进行解码
        const textDecoder = new TextDecoder('utf-8');
        const decodedString = textDecoder.decode(utf8Bytes);

        console.log(decodedString);  // 输出: "梨视频"，自己加后缀
        const videoUrl = URL.createObjectURL(result);
        video.src = videoUrl;
    })();
    ```


## 16. 路由分发
- 不同部分的路由实现，写在不同的模块中
- `router`也可以包含子分支，用法和app.include_router类似
  ```python
  # home.py中
  from fastapi import APIRouter
  router = APIRouter()
  @router.get('xxx')
  def f():
      pass


  # search.py中
  from fastapi import APIRouter
  router = APIRouter(prefix = '/search', tags = ['search相关的路由'])
  @router.get('xxx')
  def f():
      pass


  # server.py中
  from fastapi import FastAPI
  import home
  import search

  app = FastAPI()
  # prefix会自动加到对应路由前面
  app.include_router(home.router, prefix = '/home',tags = ['home相关的路由'])
  app.include_router(search.router)
  ```

## 17. 后台任务
- 耗时比较长，给前端返回结果，任务在后台进行
  ```python
  from fastapi import BackgroundTasks, FastAPI

  app = FastAPI()


  def write_notification(email: str, message=""):
      with open("log.txt", mode="w") as email_file:
          content = f"notification for {email}: {message}"
          email_file.write(content)


  @app.post("/send-notification/{email}")
  async def send_notification(email: str, background_tasks: BackgroundTasks):
      background_tasks.add_task(write_notification, email, message="some notification")
      return {"message": "Notification sent in the background"}
  ```

## 18. 静态文件
- 这个 "子应用" 会被 "挂载" 到第一个 "/static" 指向的子路径。因此，任何以"/static"开头的路径都会被它处理。
- directory="static" 指向包含你的静态文件的目录名字。
- name="static" 提供了一个能被FastAPI内部使用的名字。
  ```python
  from fastapi import FastAPI
  from fastapi.staticfiles import StaticFiles

  app = FastAPI()

  app.mount("/static", StaticFiles(directory="static"), name="static")

  ```

- 所有请求都找，不管是静态文件还是比如AJAX请求，找不到就404
  ```python
  from fastapi import FastAPI
  from fastapi.staticfiles import StaticFiles
  import uvicorn

  app = FastAPI()
  # 'http:127.0.0.1:9999/'下的所有请求都去找本py文件相同文件夹下的文件
  app.mount('/', StaticFiles(directory = './'), name = 'static')
  # 'http:127.0.0.1:9999/static'下的所有请求都去找audio文件夹下的文件
  app.mount('/static', StaticFiles(directory = 'audio'), name = 'static_dir1')

  # 这个不起作用，因为'static/'开头的路由匹配到前面的，找不到a这个静态文件，已经返回404了
  # 同理如果这个在前面，则'static'挂载不起作用
  @app.get('/static/a')
  def f():
      return {'msg':200}

  if __name__ == '__main__':
      uvicorn.run(app, host = '127.0.0.1', port = 9999, reload = True)
  ```

## 19. 其他
- `Annotated`中不能设置默认值
- 可以在前面写多个装饰器，用来响应多个请求
- 如果某个特定参数不指定特殊默认值/类型提示，会被当做路径参数或请求体参数处理。比如`File()`、`Form()`、`Request`等


