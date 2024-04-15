---
title: PyMongo
titleTemplate: Python笔记
---

- 最推荐的学习方式：看源码

![alt text](/pages/python/network/back-end/images/image.png)

![alt text](/pages/python/network/back-end/images/image-1.png)
- 以下是常用的配置

## 1. 数据库
- `database`

```python
from pymongo import MongoClient
# 不传的话默认就是这两个值
client = MongoClient(host='127.0.0.1', port=27017)
# 远程连接格式，远程设置了账号密码
remote_client = MongoClient(f'mongodb://{username}:{password}@{host}:{post}')

test_db.client == client # True
test_db.name # test_db，数据库名
# 删库
client.drop_database('test_db')
# 关闭
client.close()
```

## 2. 集合——表
- `collection`  

```python
# 接收集合名，创建并返回集合
collection = test_db.create_collection('test_collection')
# 获取集合
# test_db = client['test_db']
test_db = client.test_db
# 数据库内集合名列表
test_db.list_collection_names() 
# 不包含系统集合
test_db.list_collection_names(include_system_collections=False)
# 查看指定条件有多少文档（行）
collection.count_documents({})
# 删除集合
collection.drop()
```

## 3. 文档——行(json格式)
- `document`

### 3.1 增删改查
- `create`、`update`、`read`、`delete`

- 增
```python
collection.insert_one(dic1)
collection.insert_many([dic1, dic2, dic3])
```

- 查询条件
```python
# 条件
# 后面要么是值，要么是模糊的条件，如比较、正则表达式等
# 某个字段多个查询条件 => 字典的多个item
condition1 = {'name':'xxx'}
condition2 = {'age':{'$gt':10}}
condition3= ={'c':{'$regex':'[456789]','$options':'i'}}
condition4 = {'address':{'$or':[{'$eq':'北京'},{'$eq':'上海'}]}}
condition5 = {'a':{'$in':['北京','上海']}} # nin同理，用正则表达式更方便
```
| 语法   | 含义       |
| ------ | ---------- |
| $eq    | 等于       |
| $ne    | 不等于     |
| $lt    | 小于       |
| lte    | 小于等于   |
| $gt    | 大于       |
| $gte   | 大于等于   |
| $or    | 或         |
| $in    | 在...中    |
| $nin   | 不在...中  |
| $regex | 正则表达式 |

- 删
```python
collection.delete_one(condition1)
collection.delete_many(condition2)
```

- 改
```python
collection.update_one(condition1,{'$set':new_data})
collection.update_many(condition2,{'$set':new_data})
```

- 查
```python
# 有_id字段
a = collection.find_one(condition1)
# 可迭代游标对象
for i in collection.find(condition2):
    print(i)
```

### 3.2 其他操作
```python
# 计数
collection.find_one(condition1).count()
# 限制数量
collection.find_one(condition1).limit(10)
# 往后移三位
collection.find_one(condition1).skip(3)
# 根据name排序，1升序、-1降序
collection.find_one(condition1).sort({'name':1})
```

### 3.3 存储二进制文件
- `GridFS`或`BSON`
  
### 3.4 导入导出
- 可以导出为xlsx、csv、json等
- 只用过json
- 可以通过`mongodb compass`导出，也可以命令行导出（要安装额外的命令行工具）如`mongodb-database-tools-windows-x86_64-100.9.4`

```bash
# 不指定用默认可以不写对应配置
# q即查询，o即out
mongoexport -h IP --port 端口 -u 用户名 -p 密码 -d 数据库 -c 集合名 -f 字段 -q 条件导出 -o 文件路径
# 导出为csv，必须指定字段
mongoexport -d mySite -c python --type csv -f "category1_name,category2_name"   -o t.csv
mongoimport -h IP --port 端口 -u 用户名 -p 密码 -d 数据库 -c 表名 --drop --file 文件名
# --drop表示若已存在则先删除再导入


options:
  --help                    produce help message
  -v [ --verbose ]          be more verbose (include multiple times for more 
                            verbosity e.g. -vvvvv)
  --version                 print the program's version and exit
  -h [ --host ] arg         mongo host to connect to ( <set name>/s1,s2 for 
                            sets)
  --port arg                server port. Can also use --host hostname:port
  --ipv6                    enable IPv6 support (disabled by default)
  -u [ --username ] arg     username
  -p [ --password ] arg     password
  --dbpath arg              directly access mongod database files in the given 
                            path, instead of connecting to a mongod  server - 
                            needs to lock the data directory, so cannot be used
                            if a mongod is currently accessing the same path
  --directoryperdb          if dbpath specified, each db is in a separate 
                            directory
  --journal                 enable journaling
  -d [ --db ] arg           database to use
  -c [ --collection ] arg   collection to use (some commands)
  -f [ --fields ] arg       comma separated list of field names e.g. -f 
                            name,age
  --fieldFile arg           file with fields names - 1 per line
  -q [ --query ] arg        query filter, as a JSON string
  --csv                     export to csv instead of json
  -o [ --out ] arg          output file; if not specified, stdout is used
  --jsonArray               output to a json array rather than one object per 
                            line
  -k [ --slaveOk ] arg (=1) use secondaries for export if available, default 
                            true
```

- -h:指明数据库宿主机的IP
- -u:指明数据库的用户名
- -p:指明数据库的密码
- -d:指明数据库的名字
- -c:指明collection的名字
- -f:指明要导出那些列
- -o:指明到要导出的文件名
- -q:指明导出数据的过滤条件

## 3.5 宝塔部署经历
- 设白名单，远程更新；（！防止被黑客删库:cry:）
- 或者只开服务器本地的127.0.0.1:27017，让服务器上的后端操作，更新时手动在服务器上上传更新
