---
title: numpy1
titleTemplate: Python笔记
---

```python
#每个cell多个输出
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = "all"
```

```python
import numpy as np
#查看版本
np.__version__
```

    '1.23.5'

```python
#设置打印精度
np.set_printoptions(precision=3)
```

```python
a=np.linspace(1,11,50)
print(a)
```

    [ 1.     1.204  1.408  1.612  1.816  2.02   2.224  2.429  2.633  2.837
      3.041  3.245  3.449  3.653  3.857  4.061  4.265  4.469  4.673  4.878
      5.082  5.286  5.49   5.694  5.898  6.102  6.306  6.51   6.714  6.918
      7.122  7.327  7.531  7.735  7.939  8.143  8.347  8.551  8.755  8.959
      9.163  9.367  9.571  9.776  9.98  10.184 10.388 10.592 10.796 11.   ]
    

### 1. 产生数组（默认浮点数）

（1）列表/元组生成数组，<b>a=np.array(l)</b>
<br>&emsp;&emsp;&emsp;直接生成数组，<b>a=np.array([[1,2,3],[4,5,6]])</b>，可以任意维度
<br>&emsp;&emsp;&emsp;数组生成列表，<b>l=a.tolist()</b>

```python
l=[1,2,3]
t1=1,2,3
t2=(1,2,3)
np.array(t1)
np.array(t2)

a=np.array([[1,2,3],[4,5,6]])
a

a.tolist()
```

    array([1, 2, 3])

    array([1, 2, 3])

    array([[1, 2, 3],
           [4, 5, 6]])

    [[1, 2, 3], [4, 5, 6]]

![image.png](/pages/python/basic/science-compute/images/type.png)

（2）全0数组，<b>np.zeros(size)</b>，大于一维用列表或元组表示大小；默认浮点型，可指定类型
<br>&emsp;&emsp;&emsp;全0数组，<b>np.zeros_like(a)</b>，生成大小和数组a一样的全0数组
<br>&emsp;&emsp;&emsp;全1数组，<b>np.ones(size)</b>，同上
<br>&emsp;&emsp;&emsp;全n数组，<b>np.full(size,value)</b>
<br>&emsp;&emsp;&emsp;全n数组，<b>a.fill(5)</b>，a大小为size
<br>&emsp;&emsp;&emsp;空数组，<b>np.empty(size)</b>
<br>&emsp;&emsp;&emsp;类似单位矩阵的数组，<b>np.eye(N,M,k)</b>，大小为M*N，没有M时为N*N，k表示主对角线偏移量(正右负左)
<br>&emsp;&emsp;&emsp;类似单位矩阵的数组，<b>np.identity(n)</b>，n*n
<br>&emsp;&emsp;&emsp;从一个数组中筛选出非零元素<b>np.nonzero(a)</b>，返回非零元素索引
<br>&emsp;&emsp;&emsp;&emsp;&emsp;<b>np.nonzero(a==0)</b>，nonzero实际判断的是a==0结果是否为True，
<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;返回为元素为0即a==0结果为True的索引

<br><br>加<b>dtype=</b>指定数据类型

```python
np.zeros(5)
np.zeros((5,5),dtype=np.int16)

np.ones(5)
np.ones((5,5),dtype='bool')

np.full([4,4],10)

a=np.array([1,2,3],dtype=np.float16)
a.fill(3.2)
a

b=np.zeros_like(a)
b
```

    array([0., 0., 0., 0., 0.])

    array([[0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0]], dtype=int16)

    array([1., 1., 1., 1., 1.])

    array([[ True,  True,  True,  True,  True],
           [ True,  True,  True,  True,  True],
           [ True,  True,  True,  True,  True],
           [ True,  True,  True,  True,  True],
           [ True,  True,  True,  True,  True]])

    array([[10, 10, 10, 10],
           [10, 10, 10, 10],
           [10, 10, 10, 10],
           [10, 10, 10, 10]])

    array([3.2, 3.2, 3.2], dtype=float16)

    array([0., 0., 0.], dtype=float16)

```python
np.empty([5,5])

np.eye(3)
np.eye(3,2)
np.eye(4,4,-2)
np.identity(3)

a=np.array([1,2,3,4,9,0,6,4,2,0,9,7,4,3,0,0,0])
np.nonzero(a)
np.nonzero(a==0)
```

    array([[0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.]])

    array([[1., 0., 0.],
           [0., 1., 0.],
           [0., 0., 1.]])

    array([[1., 0.],
           [0., 1.],
           [0., 0.]])

    array([[0., 0., 0., 0.],
           [0., 0., 0., 0.],
           [1., 0., 0., 0.],
           [0., 1., 0., 0.]])

    array([[1., 0., 0.],
           [0., 1., 0.],
           [0., 0., 1.]])

    (array([ 0,  1,  2,  3,  4,  6,  7,  8, 10, 11, 12, 13], dtype=int64),)

    (array([ 5,  9, 14, 15, 16], dtype=int64),)

（3）整数/小数序列，<b>np.arange([s,]e[,n])</b>，s开始e结束，左闭右开，步长为n（不写默认1），起始值、结束值、步长都可以是小数，s不写默认0开始
<br>&emsp;&emsp;&emsp;整数序列，<b>range(s,e,n)</b>，起始值、结束值、步长只能取整数，左闭右开
<br>&emsp;&emsp;&emsp;等差数列，<b>np.linspace(s,e,n=50)</b>，s开始e结束，数量为n(不写默认50)，默认endpoint=True，左闭右闭
<br>&emsp;&emsp;&emsp;等比数列，<b>np.logspace(s,e,n=50,base=10)</b>，默认10^s到10^e，可指定数量和底数，默认endpoint=True，左闭右闭

```python
np.arange(10,1,-1)
np.arange(1.5,10.5,1.0)

for i in range(5,-2,-1):
    print(i)
    
np.linspace(-3,10,15,endpoint=False)

np.logspace(0,10,11,base=2)
```

    array([10,  9,  8,  7,  6,  5,  4,  3,  2])

    array([1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5])

    5
    4
    3
    2
    1
    0
    -1
    

    array([-3.        , -2.13333333, -1.26666667, -0.4       ,  0.46666667,
            1.33333333,  2.2       ,  3.06666667,  3.93333333,  4.8       ,
            5.66666667,  6.53333333,  7.4       ,  8.26666667,  9.13333333])

    array([1.000e+00, 2.000e+00, 4.000e+00, 8.000e+00, 1.600e+01, 3.200e+01,
           6.400e+01, 1.280e+02, 2.560e+02, 5.120e+02, 1.024e+03])

（4）生成0-1的随机数，<b>np.random.rand(size)</b>，大于一维不能用列表/元组表示
<br>&emsp;&emsp;&emsp;标准正态分布随机数，<b>np.random.randn(size)</b>，均值为0，标准差为1，大于一维不能用列表/元组表示
<br>&emsp;&emsp;&emsp;指定均值和标准差的正态分布，<b>np.random.normal(m,s,size)</b>，m均值，s标准差，大于一维用列表或元组表示大小
<br>&emsp;&emsp;&emsp;随机整数，<b>np.random.randint(s,e,size)</b>，左闭右开
<br>&emsp;&emsp;&emsp;设置种子，<b>np.random.seed()</b>，相同种子下产生相同的随机数
<br>&emsp;&emsp;&emsp;随机抽取样本，<b>np.random.choice(a, size=None,replace=True,p=None)</b>，a中抽size个(不指定则抽一个)，a必须是一维，replace默认True表示可重复，指定False表示不重复；p每个元素的抽取概率
<br>&emsp;&emsp;&emsp;随机打乱顺序，<b>np.random.shuffle(a)</b>
<br>&emsp;&emsp;&emsp;生成格网数据<b>xx,yy=np.meshgrid(a,b)</b>，以a为x，以b为y的所有点的横纵坐标

```python
np.random.rand(5,5)

np.random.randn(5,5)

np.random.normal(5,2,(4,4,3))

np.random.randint(0,10,(3,3),dtype=np.uint8)
```

    array([[0.61823114, 0.09070441, 0.88927277, 0.7979933 , 0.7408253 ],
           [0.67315699, 0.74753282, 0.26699712, 0.02025396, 0.04906689],
           [0.16912001, 0.56387069, 0.35220519, 0.13229567, 0.19757338],
           [0.34270011, 0.32493955, 0.88296248, 0.90980066, 0.51474069],
           [0.05287168, 0.80212982, 0.96582017, 0.52803462, 0.303364  ]])

    array([[-1.26812204, -1.99250511, -0.61672649, -0.23858718, -0.48047639],
           [ 0.56519143, -0.36974333,  2.9945252 , -0.89757564,  1.55414257],
           [ 0.83889759,  4.40697629,  0.95564026,  0.22193729,  1.57908176],
           [-2.72048552,  1.31399723, -0.22146374, -1.08876778,  1.12488992],
           [-0.96124365, -0.58770688,  0.82383683,  1.56408983,  2.68659856]])

    array([[[ 5.34494491,  5.27561953,  3.56286185],
            [ 5.25010433,  2.93460452,  3.05172853],
            [ 6.19456902,  4.06872467,  2.53154205],
            [ 5.16481518,  2.12340241,  1.07550256]],
    
           [[ 7.21941194,  4.7072247 ,  7.26708579],
            [ 6.66642337,  7.88442465,  3.50691308],
            [ 1.69986446,  5.70027334,  5.48241083],
            [ 4.74963455,  5.64216374,  7.28267349]],
    
           [[ 4.63443845,  5.2271177 ,  5.37025454],
            [ 2.24815774,  5.99921761,  5.51726811],
            [ 3.19451798,  4.2895553 ,  3.23345032],
            [ 1.27150478,  7.35696687,  8.38730138]],
    
           [[ 3.94095313,  7.0416058 ,  2.81322351],
            [ 6.36734244,  1.6888907 ,  4.9020541 ],
            [ 1.47898721, -0.12448101,  6.37742554],
            [ 3.45140012,  3.83484998,  5.01649794]]])

    array([[5, 5, 9],
           [5, 8, 1],
           [9, 2, 1]], dtype=uint8)

```python
np.random.seed(1)#指定随机种子
np.random.randint(1,10,1)
np.random.seed(1)
np.random.randint(1,10,1)

np.random.seed()#恢复随机种子
a=np.random.randint(0,11,5)
a
np.random.choice(a,1)

np.random.shuffle(a)
a

xx,yy=np.meshgrid(np.arange(0,11,1),
                 np.arange(0,6,1))
xx#所有坐标的x
yy#所有坐标的y
```

    array([6])

    array([6])

    array([0, 6, 0, 1, 4])

    array([0])

    array([6, 4, 1, 0, 0])

    array([[ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10],
           [ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10],
           [ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10],
           [ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10],
           [ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10],
           [ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10]])

    array([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
           [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
           [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
           [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
           [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]])

### 2. 数组属性

&emsp;&emsp;&emsp;<b>type(a)</b>，查看数组a类型
<br>&emsp;&emsp;&emsp;<b>a.dtype</b>，查看数组a中数据类型
<br>&emsp;&emsp;&emsp;<b>a.shape、np.shape(a)</b>，查看a的形状
<br>&emsp;&emsp;&emsp;<b>a.size、np.size(a)</b>，查看a中元素个数
<br>&emsp;&emsp;&emsp;<b>a.ndim</b>，查看a的维度
<br>&emsp;&emsp;&emsp;<b>a1=a</b>，浅拷贝，修改其中一个，二者都会改变
<br>&emsp;&emsp;&emsp;<b>a1=a.copy()</b>，深拷贝，改变其中一个对另一个没影响

&emsp;&emsp;&emsp;类型转换，a为整数数组，可以1*1.0转换成浮点数；或者<b>a.dtype=np.float16</b>；
<br>&emsp;&emsp;&emsp;<b>a.astype(np.float16)</b>不能改变a的数据类型，可以赋值给别的变量

```python
a=np.array([[1,2,3,4],[4,5,6,7]],)

type(a)

a.dtype

a.shape
np.shape(a)

a.size
np.size(a)

a.ndim

b=a.astype(np.float32)#改不了a的
a.dtype
b

a.dtype=np.float16#能改
a
```

    numpy.ndarray

    dtype('int32')

    (2, 4)

    (2, 4)

    8

    8

    2

    dtype('int32')

    array([[1., 2., 3., 4.],
           [4., 5., 6., 7.]], dtype=float32)

    array([[6.0e-08, 0.0e+00, 1.2e-07, 0.0e+00, 1.8e-07, 0.0e+00, 2.4e-07,
            0.0e+00],
           [2.4e-07, 0.0e+00, 3.0e-07, 0.0e+00, 3.6e-07, 0.0e+00, 4.2e-07,
            0.0e+00]], dtype=float16)

```python
a=np.array([[1,2,3,4],[4,5,6,7]],)
a1=a
a[1,1]=999
a1[1,2]=888
a1
a

a=np.array([[1,2,3,4],[4,5,6,7]],)
a1=a.copy()
a[1,1]=999
a1

a=np.array([[1,2,3,4],[4,5,6,7]],)
a1=a.copy()
a1[1,1]=999
a
```

    array([[  1,   2,   3,   4],
           [  4, 999, 888,   7]])

    array([[  1,   2,   3,   4],
           [  4, 999, 888,   7]])

    array([[1, 2, 3, 4],
           [4, 5, 6, 7]])

    array([[1, 2, 3, 4],
           [4, 5, 6, 7]])

### 3. 索引和切片

（1）索引，<b>a[0]、a[:]</b>数组中一维索引为0的数、数组a所有元素，多维数组第一个维度索引为0的部分
<br>&emsp;&emsp;&emsp;<b>a[0,1]</b>，二维数组a中索引，用某位置的:表示该维度所有数
<br>&emsp;&emsp;&emsp;索引正向递增从0开始，反向递减从-1开始
<br>&emsp;&emsp;&emsp;可以通过索引和切片修改数组，如a[1]=999；b=a[1],b=999。都会改变a。

```python
a=np.random.randint(0,11,30)
a=a.reshape(5,6)
a
a[1][1]
a[1,1]
a[:,1]#索引为1的列
a[:][1]#索引为1的行
a[1,:]#索引为1的行
a[1][:]#索引为1的行

a[-1]#最后一行
a[:][-1]#最后一行
a[:,-1]#最后一列
```

    array([[ 7,  6,  5,  4,  5,  4],
           [ 9,  1,  2,  9,  8,  9],
           [ 7,  1,  6,  6,  8,  6],
           [ 5, 10,  8, 10, 10, 10],
           [ 5,  4,  2,  6,  2,  4]])

    1

    1

    array([ 6,  1,  1, 10,  4])

    array([9, 1, 2, 9, 8, 9])

    array([9, 1, 2, 9, 8, 9])

    array([9, 1, 2, 9, 8, 9])

    array([5, 4, 2, 6, 2, 4])

    array([5, 4, 2, 6, 2, 4])

    array([ 4,  9,  6, 10,  4])

（2）切片
<br>&emsp;&emsp;&emsp;索引形式为<b>s:e:step</b>，左闭右开，s不写默认从头开始，e不写默认到结尾，step不写默认1

```python
a=np.zeros((8,8),dtype=np.uint8)
a[::2,1::2]=1
a[1::2,::2]=1
a

a[-2,-1]

b=np.arange(5)
b
b[::-1]#翻转
```

    array([[0, 1, 0, 1, 0, 1, 0, 1],
           [1, 0, 1, 0, 1, 0, 1, 0],
           [0, 1, 0, 1, 0, 1, 0, 1],
           [1, 0, 1, 0, 1, 0, 1, 0],
           [0, 1, 0, 1, 0, 1, 0, 1],
           [1, 0, 1, 0, 1, 0, 1, 0],
           [0, 1, 0, 1, 0, 1, 0, 1],
           [1, 0, 1, 0, 1, 0, 1, 0]], dtype=uint8)

    1

    array([0, 1, 2, 3, 4])

    array([4, 3, 2, 1, 0])

```python
#列表中不会改变
l=[1,2,3,4]
b=l[1]
b=99
l
```

    [1, 2, 3, 4]

（3）花式索引
<br>&emsp;&emsp;&emsp;索引可以是列表/元组，这样就可以取不相邻的行/列，类型可以是bool

```python
a=np.random.randint(0,21,(7,7))
a

index=[1,2,-3]
a[index]#索引为1、2、-3的行，不写列表示所有列

a[:,index]#索引为1、2、-3的列，行得写

a[::2,::2]#每隔两行两列取

a[range(7),range(7)]#主对角线元素

a[range(7),range(6,-1,-1)]#副对角线元素
```

    array([[13, 15, 10,  6,  1, 20, 16],
           [ 8, 16,  5, 11, 17, 11, 14],
           [ 2, 11,  5, 15, 17,  6,  3],
           [ 3, 18, 17, 13, 10, 11,  5],
           [18,  7,  5,  0, 12, 19, 17],
           [18,  9, 12,  3,  7,  1,  6],
           [ 1,  0, 19, 17, 15,  2, 17]])

    array([[ 8, 16,  5, 11, 17, 11, 14],
           [ 2, 11,  5, 15, 17,  6,  3],
           [18,  7,  5,  0, 12, 19, 17]])

    array([[15, 10,  1],
           [16,  5, 17],
           [11,  5, 17],
           [18, 17, 10],
           [ 7,  5, 12],
           [ 9, 12,  7],
           [ 0, 19, 15]])

    array([[13, 10,  1, 16],
           [ 2,  5, 17,  3],
           [18,  5, 12, 17],
           [ 1, 19, 15, 17]])

    array([13, 16,  5, 13, 12,  1, 17])

    array([16, 11, 17, 13,  5,  9,  1])

```python
#maks与a的shape要相等
a=np.random.randint(0,11,9)
mask=np.array([0,2,2,0,0,1,0,0,1],dtype=bool)
a
a[mask]#只取出来了对应位置的四个数

a=np.random.randint(0,11,[3,3])
mask=np.array([[0,1,0],
              [1,0,1],
              [0,1,0]],dtype='bool')
a
a[mask]
```

    array([6, 0, 6, 9, 9, 7, 3, 9, 3])

    array([0, 6, 7, 3])

    array([[ 8,  1, 10],
           [10,  6,  5],
           [ 3,  3,  1]])

    array([ 1, 10,  5,  3])

(4)where语句
<br>&emsp;&emsp;&emsp;<b>np.where(语句)</b>，返回满足条件的数的索引
<br>&emsp;&emsp;&emsp;<b>np.where(语句,x,y)</b>，满足语句显示为x，不满足显示为y，不改变原数组

```python
a=np.random.randint(0,11,[3,3])
a>5

np.where(a>5)#返回满足条件的数的索引

#这两个效果一样
a[a>5]
a[np.where(a>5)]

#找大于5的数显示为1，否则显示为9，原数据不变
np.where(a>5,1,0)
```

    array([[False,  True,  True],
           [False,  True,  True],
           [False, False, False]])

    (array([0, 0, 1, 1], dtype=int64), array([1, 2, 1, 2], dtype=int64))

    array([10,  7,  9,  6])

    array([10,  7,  9,  6])

    array([[0, 1, 1],
           [0, 1, 1],
           [0, 0, 0]])
