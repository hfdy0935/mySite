---
title: os
titleTemplate: Python笔记
---

## os

标准库，提供通用的、基本的操作系统交互功能

```python
import os
```

```python
#显示当前使用的平台
#nt表示Windows、posix表示Linux
os.name
```

    'nt'

```python
#返回当前进程的工作目录
os.getcwd()
```

    'D:\\桌面\\python\\文件处理\\ipynb'

```python
#改变当工作目录，切换到指定路径
print(os.getcwd())
#os.dir也可以是相对路径，
#../表示上一级
#./表示这级目录下的文件或文件夹
os.chdir('D:\桌面\python\爬虫')
print(os.getcwd())
#再切回来
os.chdir('D:/桌面/python/文件处理/ipynb')
print(os.getcwd())
```

    D:\桌面\python\文件处理\ipynb
    D:\桌面\python\爬虫
    D:\桌面\python\文件处理\ipynb
    

```python
#递归创建目录/文件夹
#绝对路径和相对路径都行
#如果已存在，会报错
# os.makedirs('D:/桌面/python/文件处理/data/data1/data2/data3')
os.makedirs('../data/data1/data2/data3')
```

```python
#只能创建一层文件夹，已存在时会报错
os.mkdir('../data/data1/data2/data3/单个文件夹1')
os.mkdir('D:/桌面/python/文件处理/data/data1/data2/data3/单个文件夹2')

#如果中间有不存在的文件夹会报错
# os.mkdir('../data/data1/data2/data3/data4/单个文件夹1')
```

```python
#列出目录下所有文件和文件夹
#列表形式
os.listdir('../data/')
```

    ['data1', 'fy.png', 'HDF', 'NC', 'raw', 'shp']

```python
os.listdir('D:/桌面/python/科学计算与可视化/最新代码')
```

    ['.ipynb_checkpoints',
     '.virtual_documents',
     'data',
     'data.zip',
     'ipynb',
     'ipynb.zip',
     'matplotlib.pdf',
     'numpy.pdf',
     'pandas.pdf',
     'pyecharts.pdf',
     'sysu_practise.pdf']

```python
#删除指定路径的文件
#如果指定的是个目录，则会抛出异常WinErroe
#如果不存在，会报错WinError
#绝对相对路径都行
for i in range(2):
    try:
        os.remove('../data/删除.txt')
    except Exception as a:
        print(f'发生异常：{a}')
    finally:
        print(f'执行次数：{i+1}\n')
#第一次能删除，第二次不存在返回异常
```

    执行次数：1
    
    发生异常：[WinError 2] 系统找不到指定的文件。: '../data/删除.txt'
    执行次数：2
    
    

```python
#重命名，原文件消失
#参数为原文件名、目标文件名
#可以先指定路径，再直接写文件名
#或者参数中写路径，可以是不同文件后缀、不同路径
# os.chdir('../data')
os.rename('../data/rename.txt','../data/data1/重命名.py')
```

```python
#确认某文件夹或文件是否存在
os.path.exists('../data/data1')
if not os.path.exists('../data/data3'):
    print('路径不存在')
if os.path.exists('../data/fy.png'):
    print('文件存在')
```

    True

    路径不存在
    文件存在
    

```python
# 连接路径，自动补分隔符
os.path.join('a', 'b/c/s')
```

    'a\\b/c/s'

```python
#搜索当前目录下的所有文件中以指定后缀结尾的文件
import glob
os.chdir('D:/桌面/python/文件处理/data/NC/RSR/')
#不区分大小写
glob.glob('*.nc')
```

    ['FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701000000_20200701001459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701001500_20200701002959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701010000_20200701011459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701020000_20200701021459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701024500_20200701025959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701030000_20200701031459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701031500_20200701032959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701040000_20200701041459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701050000_20200701051459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701054500_20200701055959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701060000_20200701061459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701061500_20200701062959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701070000_20200701071459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701080000_20200701081459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701084500_20200701085959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701090000_20200701091459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701091500_20200701092959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701100000_20200701101459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701110000_20200701111459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701114500_20200701115959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701120000_20200701121459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701121500_20200701122959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701130000_20200701131459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701140000_20200701141459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701144500_20200701145959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701150000_20200701151459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701151500_20200701152959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701160000_20200701161459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701170000_20200701171459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701174500_20200701175959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701180000_20200701181459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701181500_20200701182959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701190000_20200701191459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701200000_20200701201459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701204500_20200701205959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701210000_20200701211459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701211500_20200701212959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701220000_20200701221459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701230000_20200701231459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200701234500_20200701235959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702000000_20200702001459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702001500_20200702002959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702010000_20200702011459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702020000_20200702021459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702024500_20200702025959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702030000_20200702031459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702031500_20200702032959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702040000_20200702041459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702050000_20200702051459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702054500_20200702055959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702060000_20200702061459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702061500_20200702062959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702070000_20200702071459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702080000_20200702081459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702084500_20200702085959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702090000_20200702091459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702091500_20200702092959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702100000_20200702101459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702110000_20200702111459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702114500_20200702115959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702120000_20200702121459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702121500_20200702122959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702130000_20200702131459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702140000_20200702141459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702144500_20200702145959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702150000_20200702151459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702151500_20200702152959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702160000_20200702161459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702170000_20200702171459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702174500_20200702175959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702180000_20200702181459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702181500_20200702182959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702190000_20200702191459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702200000_20200702201459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702204500_20200702205959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702210000_20200702211459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702211500_20200702212959_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702220000_20200702221459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702230000_20200702231459_4000M_V0001.NC',
     'FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20200702234500_20200702235959_4000M_V0001.NC']

调用命令行

```python
# os.popen(cmd)
#如
os.popen('start chrome --remote-debugging-port=9527 --user-data-dir="E:\selenium"')
```

    <os._wrap_close at 0x20d2c54dc30>

```python
# 相对路径转绝对路径
os.path.abspath()
# 绝对路径转相对路径
os.path.relpath()
# 返回模块路径中的文件夹路径
os.path.dirname(__file__)
# 判断是否是路径
os.path.isdir('/1.png')
```

```python
path_j=os.getcwd() # 绝对路径
print(path_j)

# 转为相对路径
path_x=os.path.relpath(path_j)
print(path_x)

# 再转为绝对路径
print(os.path.abspath(path_x))
```

    D:\桌面\python\文件处理\ipynb
    .
    D:\桌面\python\文件处理\ipynb
    

```python
path='D:\桌面'
print(os.path.relpath(path))
os.path.relpath(path) # 反斜杠用双线转义
```

    ..\..\..
    

    '..\\..\\..'

```python
path='D:\桌面\python\GIS\data'
os.path.relpath(path)
```

    '..\\..\\GIS\\data'

```python
path='../../爬虫/ipynb/js逆向/js入门.html'
os.path.abspath(path)
```

    'D:\\桌面\\python\\爬虫\\ipynb\\js逆向\\js入门.html'



读取一个文件夹下的多个文件

```python
import os
import glob
import pandas as pd
import numpy as np
```

```python
#将当前工作目录切换到要读取的文件夹，该文件夹内有80个nc文件和一个pdf文件
#FY-4A在2020.07.01-2020.07.02两天的的RSR数据
#绝对路径和相对路径都行
os.chdir('D:/桌面/python/文件处理/data/NC/RSR/')

#使用glob.glob()获取文件夹下所有指定类型的文件，返回存储有所有文件名的列表
file_list=glob.glob('*.nc')
```

```python
len(file_list)
```

    80

```python
#循环遍历file_list，一次读取文件
name=[]
year=[]
month=[]
day=[]
hour=[]
minute=[]
for filename in file_list:
    name.append(filename)
    year.append(filename[44:48])#左闭右开
    month.append(filename[48:50])
    day.append(filename[50:52])
    hour.append(filename[52:54])
    minute.append(filename[54:56])
df=pd.DataFrame({'filename':name,'year':year,'month':month,'day':day,'hour':hour,'minute':minute},index=np.arange(1,len(file_list)+1,1))
df
```

<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>filename</th>
      <th>year</th>
      <th>month</th>
      <th>day</th>
      <th>hour</th>
      <th>minute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20...</td>
      <td>2020</td>
      <td>07</td>
      <td>01</td>
      <td>00</td>
      <td>00</td>
    </tr>
    <tr>
      <th>2</th>
      <td>FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20...</td>
      <td>2020</td>
      <td>07</td>
      <td>01</td>
      <td>00</td>
      <td>15</td>
    </tr>
    <tr>
      <th>3</th>
      <td>FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20...</td>
      <td>2020</td>
      <td>07</td>
      <td>01</td>
      <td>01</td>
      <td>00</td>
    </tr>
    <tr>
      <th>4</th>
      <td>FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20...</td>
      <td>2020</td>
      <td>07</td>
      <td>01</td>
      <td>02</td>
      <td>00</td>
    </tr>
    <tr>
      <th>5</th>
      <td>FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20...</td>
      <td>2020</td>
      <td>07</td>
      <td>01</td>
      <td>02</td>
      <td>45</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>76</th>
      <td>FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20...</td>
      <td>2020</td>
      <td>07</td>
      <td>02</td>
      <td>21</td>
      <td>00</td>
    </tr>
    <tr>
      <th>77</th>
      <td>FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20...</td>
      <td>2020</td>
      <td>07</td>
      <td>02</td>
      <td>21</td>
      <td>15</td>
    </tr>
    <tr>
      <th>78</th>
      <td>FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20...</td>
      <td>2020</td>
      <td>07</td>
      <td>02</td>
      <td>22</td>
      <td>00</td>
    </tr>
    <tr>
      <th>79</th>
      <td>FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20...</td>
      <td>2020</td>
      <td>07</td>
      <td>02</td>
      <td>23</td>
      <td>00</td>
    </tr>
    <tr>
      <th>80</th>
      <td>FY4A-_AGRI--_N_DISK_1047E_L2-_RSR-_MULT_NOM_20...</td>
      <td>2020</td>
      <td>07</td>
      <td>02</td>
      <td>23</td>
      <td>45</td>
    </tr>
  </tbody>
</table>
<p>80 rows × 6 columns</p>
</div>

```python
#依次读取所有文件，提取每个文件中的RSR作为一帧写入视频
import netCDF4 as nc
import cv2
import os
import glob

fourcc=cv2.VideoWriter_fourcc(*'mp4v')
vw=cv2.VideoWriter('D:/out.mp4',fourcc,50,(800,800))

os.chdir('G:/biyelunwen/data/RSR/7/')
file_list=glob.glob('*.nc')
p1='G:/biyelunwen/data/RSR/7/'

cv2.namedWindow('RSR',cv2.WINDOW_NORMAL)
cv2.resizeWindow('RSR',800,800)

for i in range(len(file_list)):
    RSR_path=p1+file_list[i]
    data=nc.Dataset(RSR_path)
    RSR=data['RSR'][:]
    # RSR=cv2.resize(RSR,(800,800))
    RSR=RSR/RSR.max()
    RSR_scaled = (RSR * 255).astype('uint8')
    vw.write(RSR_scaled)
    
    cv2.imshow('RSR',RSR_scaled)
    data.close()
    
    print('\r                                    ',end='')
    print(f'\r进度:{i+1}/{len(file_list)}',end='')

    if cv2.waitKey(50)==ord('q'):
        break
        
vw.release()
cv2.destroyAllWindows()
```

    进度:43/1238                          


