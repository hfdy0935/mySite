---
title: cookie、防盗链
titleTemplate: Python笔记
---

f12开发者工具/右键检查看到的元素页面是经过js渲染后显示的实时页面代码，不是页面源代码a

## 1. 处理cookie

get和post可以带cookie和headers，但都是一次性请求，后面的请求还得带；
<br>session会话：一连串的请求，过程中cookie不会丢失，后面的操作和get、post一样
<br>&emsp;&emsp;后面每次使用<b>session.get()、session.post()</b>，不用再指定data、headers、params等

```python
import requests

#登录
#实例化一个session对象
session=requests.session()
#后面和get、post用法一样
url='https://passport.17k.com/ck/user/login'
data={
    'loginName':'18893521427',
     'password':'09354121794zzw#'
}
r=session.post(url,data=data)
```

```python
r.cookies
```

    <RequestsCookieJar[Cookie(version=0, name='accessToken', value='avatarUrl%3Dhttps%253A%252F%252Fcdn.static.17k.com%252Fuser%252Favatar%252F11%252F91%252F61%252F100556191.jpg-88x88%253Fv%253D1689171648000%26id%3D100556191%26nickname%3D1952620883zzw%26e%3D1704754538%26s%3De3a1ec636e60929b', port=None, port_specified=False, domain='.17k.com', domain_specified=True, domain_initial_dot=False, path='/', path_specified=True, secure=False, expires=1704754538, discard=False, comment=None, comment_url=None, rest={}, rfc2109=False), Cookie(version=0, name='c_channel', value='0', port=None, port_specified=False, domain='.17k.com', domain_specified=True, domain_initial_dot=False, path='/', path_specified=True, secure=False, expires=1704754538, discard=False, comment=None, comment_url=None, rest={}, rfc2109=False), Cookie(version=0, name='c_csc', value='web', port=None, port_specified=False, domain='.17k.com', domain_specified=True, domain_initial_dot=False, path='/', path_specified=True, secure=False, expires=1704754538, discard=False, comment=None, comment_url=None, rest={}, rfc2109=False), Cookie(version=0, name='uuid', value='9CDD3D0F-DDA5-AD5F-F995-F7005D57E5C5', port=None, port_specified=False, domain='.17k.com', domain_specified=True, domain_initial_dot=False, path='/', path_specified=True, secure=False, expires=None, discard=True, comment=None, comment_url=None, rest={}, rfc2109=False)]>

```python
#获拿书架上的资源
r=session.get('https://www.17k.com/ck/book/search/merge?_versions=990&appKey=2406394919')
dic=r.json()
for i in dic['data']['lists']['interest']['lists']:
    print(i['key'])
    #其他数据也可以爬
```

    近战狂兵
    第九特区
    网游之天下无双
    为退婚，我把冰山总裁祸害哭了
    狂飙
    平步青云
    福宝三岁半，她被八个舅舅团宠了
    永生世界
    重回1990
    公子凶猛
    大唐之神级败家子
    长生
    仙穹彼岸
    我是剑仙
    独断万古
    大国上医
    风起龙城
    阳间借命人
    浩劫余生
    都市医神狂婿
    修罗武神
    九星霸体诀
    万古第一神
    霸婿崛起
    最强上门女婿
    

```python

```

## 2. 防盗链
<br>请求头中的参数<b>Referer</b>，表示在哪个地址发送的该请求，即上一级请求
<br>如果不加这个参数，表示直接从爬虫这访问video_url，会被拦截

```python
#页面源代码没有视频，通过发送请求，由js脚本添加上去
#梨视频
#显示的srcUrl会把cont-1720157替换成systemtime，所以显示的地址打不开，这里需要替换
import re
import requests

url='https://www.pearvideo.com/video_1720157'#页面链接
#拿到视频的Id
contId=re.findall('\d+',url)[0]
#请求链接
video_url=f'https://www.pearvideo.com/videoStatus.jsp?contId={contId}&mrd=0.21559213649288078'

hd={
    'user-agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36 Edg/114.0.1823.79',
    'Referer':'https://www.pearvideo.com/video_1720157'
}

try:
    r=requests.get(video_url,headers=hd)
    r.encoding=r.apparent_encoding
except:
    print('爬取失败')
```

```python
r.json()
```

    {'resultCode': '1',
     'resultMsg': 'success',
     'reqId': 'b1081f34-ecf8-4d52-b26a-82764db53427',
     'systemTime': '1689206132625',
     'videoInfo': {'playSta': '1',
      'video_image': 'https://image.pearvideo.com/cont/20210210/cont-1720157-12553572.png',
      'videos': {'hdUrl': '',
       'hdflvUrl': '',
       'sdUrl': '',
       'sdflvUrl': '',
       'srcUrl': 'https://video.pearvideo.com/mp4/short/20210211/1689206132625-15605582-hd.mp4'}}}

```python
#把systemTime替换为cont-contId,得到最终视频链接
src=r.json()['videoInfo']['videos']['srcUrl']
src=src.replace(r.json()['systemTime'],f'cont-{contId}')
src
```

    'https://video.pearvideo.com/mp4/short/20210211/cont-1720157-15605582-hd.mp4'

```python
#访问最终链接获得视频
with open('../data/梨视频.mp4','wb')as f:
    f.write(requests.get(src).content)
```

