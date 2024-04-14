---
title: numpy2
titleTemplate: Python笔记
---

### 4. 数组统计

&emsp;&emsp;<b>np.sort(a, axis=1)</b>，不改变原数组顺序
<br>&emsp;&emsp;&emsp;&emsp;默认每行排序，指定为0表示对所有列排序，指定为1表示对所有行排序
<br>&emsp;&emsp;<b>a.sort(axis=1)</b>会改变原数组顺序
<br>&emsp;&emsp;&emsp;&emsp;默认每行排序，指定为0表示对所有列排序，指定为1表示对所有行排序
<br>&emsp;&emsp;<b>np.argsort(a,axis=1)</b>返回排序后的索引，a不变
<br>&emsp;&emsp;<b>a.argsort(axis=1)</b>，a改变

<br>&emsp;&emsp;<b>np.sum(a)、a.sum()</b>，求和，不指定维度表示对所有数求和，指定维度表示对所有行/列求和
<br>&emsp;&emsp;<b>np.product(a)</b>，连乘积，默认所有元素连乘，指定axis=0每列连乘，axis=1每行连乘
<br>&emsp;&emsp;&emsp;&emsp;求和和求积，加参数<b>keepdims=True</b>，保持和原来一样的维度
<br>&emsp;&emsp;<b>np.max(a)、a.max()</b>，最大值，同理
<br>&emsp;&emsp;<b>np.argmax(a)、a.argmax()</b>，最大值索引，同理
<br>&emsp;&emsp;<b>np.argmin(a)、a.argmin()</b>，最小值索引，同理
<br>&emsp;&emsp;<b>np.mean(a)、a.mean()</b>，均值，同理
<br>&emsp;&emsp;<b>np.std(a)、a.std()</b>，标准差，同理
<br>&emsp;&emsp;<b>np.var(a)、a.var()</b>，方差，同理，默认ddof=0计算偏样本方差（/n)，ddof=1计算无偏样本方差(/(n-1))
<br>&emsp;&emsp;<b>np.median(a)</b>，中值，同理
<br>&emsp;&emsp;<b>np.cumsum(a)、a.cumsum()</b>，累加值，默认所有元素累加，指定axis=0每列累加，axis=1每行累加
<br>&emsp;&emsp;<b>np.cumpord(a)、a.cumpord()</b>，累乘值，默认所有元素累乘，指定axis=0每列累乘，axis=1每行累乘
<br>&emsp;&emsp;<b>np.cov(a,b)</b>，协方差
<br>&emsp;&emsp;<b>np.abs(a)</b>，绝对值
<br>&emsp;&emsp;<b>np.exp(a)</b>，指数
<br>&emsp;&emsp;<b>np.percentile(a,b)</b>，返回数组a从小到大排列百分位b的数
<br>&emsp;&emsp;<b>np.sqrt(a)、a\**0.5</b>，各元素平方根
<br>&emsp;&emsp;<b>np.square(a)、a\**2、np.power(a,2)</b>，各元素平方
<br>&emsp;&emsp;<b>np.log(a)、np.log2(a)、np.log10(a)</b>，各元素对数（e、2、10为底）
<br>&emsp;&emsp;<b>np.ceil(a)</b>，各元素大于它的最小整数，天花板值
<br>&emsp;&emsp;<b>np.floor(a)</b>，各元素小于它的最大整数，地板值
<br>&emsp;&emsp;<b>np.rint(a)</b>，各元素四舍五入
<br>&emsp;&emsp;<b>np.sin(a)、np.cos(a)、np.tan(a)、np.cosh(a)、np.sinh(a)、np.tanh(a)</b>，三角函数
<br>&emsp;&emsp;<b>np.sign(a)</b>，符号函数，正数为1，负数为-1，0为0
<br>&emsp;&emsp;<b>np.set_printoptions(precision=2)</b>，显示小数点后两位
<br>&emsp;&emsp;<b>np.isnan(a).any()</b>，b中只要有为空值就返回True
<br>&emsp;&emsp;<b>np.isnan(a).all()</b>，b中所有值都为空才返回True
<br>&emsp;&emsp;<b>np.isnan(a)</b>，对b中每个元素判断是否为空，返回布尔值列表
<br>&emsp;&emsp;<b>np.greater(a,100)</b>，返回布尔类型数组，a中是否比100大判断结果

```python
import numpy as np
a=np.random.randint(-10,11,(5,5))
np.greater(a,0)
```

    array([[False, False,  True, False, False],
           [ True, False,  True, False,  True],
           [False, False,  True, False,  True],
           [False, False,  True,  True, False],
           [ True, False,  True, False,  True]])

```python
a=np.random.randint(0,11,[3,3])
a

np.sort(a)#默认每行排序
np.sort(a,axis=1)#每行排序
np.sort(a,axis=0)#每列排序

b=np.array([1,2,3,np.nan,1,2,3])
np.isnan(b).any()
np.isnan(b).all()
np.isnan(b)
```

    array([[ 2,  2,  9],
           [ 4,  3,  3],
           [10,  7,  0]])

    array([[ 2,  2,  9],
           [ 3,  3,  4],
           [ 0,  7, 10]])

    array([[ 2,  2,  9],
           [ 3,  3,  4],
           [ 0,  7, 10]])

    array([[ 2,  2,  0],
           [ 4,  3,  3],
           [10,  7,  9]])

    True

    False

    array([False, False, False,  True, False, False, False])

```python
a

b=a.copy()
b.sort()#默认每行排序
b

b=a.copy()
b.sort(axis=1)#每列排序
b

b=a.copy()
b.sort(axis=0)#每行排序
b
```

    array([[ 2,  2,  9],
           [ 4,  3,  3],
           [10,  7,  0]])

    array([[ 2,  2,  9],
           [ 3,  3,  4],
           [ 0,  7, 10]])

    array([[ 2,  2,  9],
           [ 3,  3,  4],
           [ 0,  7, 10]])

    array([[ 2,  2,  0],
           [ 4,  3,  3],
           [10,  7,  9]])

```python
a

b=a.copy()
b.argsort()#按行
b

b=a.copy()
b.sort(axis=0)#按列
b
```

    array([[ 2,  2,  9],
           [ 4,  3,  3],
           [10,  7,  0]])

    array([[0, 1, 2],
           [1, 2, 0],
           [2, 1, 0]], dtype=int64)

    array([[ 2,  2,  9],
           [ 4,  3,  3],
           [10,  7,  0]])

    array([[ 2,  2,  0],
           [ 4,  3,  3],
           [10,  7,  9]])

```python
a

np.sum(a)
a.sum()
np.sum(a,axis=0)
a.sum(axis=1)

np.max(a)
a.max()
np.max(a,axis=0)
a.max(axis=1)

a.std()
np.std(a,axis=0)
np.var(a,axis=1)
```

    array([[ 2,  2,  9],
           [ 4,  3,  3],
           [10,  7,  0]])

    40

    40

    array([16, 12, 12])

    array([13, 10, 17])

    10

    10

    array([10,  7,  9])

    array([ 9,  4, 10])

    3.235604395235786

    array([3.39934634, 2.1602469 , 3.74165739])

    array([10.88888889,  0.22222222, 17.55555556])

```python
np.median(a)
np.median(a,axis=0)
np.median(a,axis=1)

np.cumsum(a)
np.cumsum(a,axis=0)
np.cumsum(a,axis=1)

np.product(a)
np.product(a,axis=0)
np.product(a,axis=1)
```

    3.0

    array([4., 3., 3.])

    array([2., 3., 7.])

    array([ 2,  4, 13, 17, 20, 23, 33, 40, 40])

    array([[ 2,  2,  9],
           [ 6,  5, 12],
           [16, 12, 12]])

    array([[ 2,  4, 13],
           [ 4,  7, 10],
           [10, 17, 17]])

    0

    array([80, 42,  0])

    array([36, 36,  0])

```python
np.cov(a[0],a[1])
```

    array([[16.33333333, -1.16666667],
           [-1.16666667,  0.33333333]])

```python
b=np.random.randint(-10,11,20)
b
np.sign(b)
```

    array([ 4,  8,  0,  0, 10,  1,  4,  9,  7,  0, -5, -2,  5, -6,  8, -6, -9,
            7, -3,  9])

    array([ 1,  1,  0,  0,  1,  1,  1,  1,  1,  0, -1, -1,  1, -1,  1, -1, -1,
            1, -1,  1])

### 5. 数组形状变化
（1）<b>np.flatten(a)、a.flatten()</b>把多维数组转换成一维数组，修改结果不影响原数组
<br>&emsp;&emsp;&emsp;<b>np.ravel(a)、a.ravel()</b>，把多维数组转换成一维数组，修改结果会改变原数组

&emsp;&emsp;&emsp;<b>a.swapaxes(ax1,ax2)</b>，调换数组a的两个维度
<br>&emsp;&emsp;&emsp;<b>a.reshape()</b>不改变原数组a的形状，<b>a.resize()</b>改变a的形状
<br>&emsp;&emsp;&emsp;<b>a.T</b>，数组转置
<br>&emsp;&emsp;&emsp;<b>a.transpose</b>，数组转置，处理高维数组更灵活，如a.transpose((2,0,1))指定各个维度的顺序
<br>&emsp;&emsp;&emsp;<b>np.flip(a)</b>，不指定axis默认上下左右翻转，
<br>&emsp;&emsp;&emsp;&emsp;&emsp;axis=1把a左右翻转，axis=0上下翻转，axis=-1上下左右翻转，和cv2中翻转图像同理

```python
a=np.random.randint(0,11,[3,3])
a
b=a.flatten()
b[1]=999
a#不变

a=np.random.randint(0,11,[3,3])
a
b=a.ravel()
b[1]=999
a#变了

a.T
```

    array([[0, 4, 1],
           [9, 8, 5],
           [5, 5, 7]])

    array([[0, 4, 1],
           [9, 8, 5],
           [5, 5, 7]])

    array([[ 8,  4,  4],
           [10,  7,  9],
           [ 9,  3,  1]])

    array([[  8, 999,   4],
           [ 10,   7,   9],
           [  9,   3,   1]])

    array([[  8,  10,   9],
           [999,   7,   3],
           [  4,   9,   1]])

```python
a=np.ones([3,2])
a.shape

a.reshape(2,3)
a.shape

a.resize(2,3)
a.shape

a=np.random.randint(0,11,(4,3))
a
np.flip(a)
np.flip(a,axis=0)
```

    (3, 2)

    array([[1., 1., 1.],
           [1., 1., 1.]])

    (3, 2)

    (2, 3)

    array([[ 0,  9,  3],
           [ 6, 10,  2],
           [ 1,  4,  4],
           [ 1,  0,  9]])

    array([[ 9,  0,  1],
           [ 4,  4,  1],
           [ 2, 10,  6],
           [ 3,  9,  0]])

    array([[ 1,  0,  9],
           [ 1,  4,  4],
           [ 6, 10,  2],
           [ 0,  9,  3]])

```python
import numpy as np
```

（2）数组连接，注意维度，横拼行要相等，竖拼列要相等
<br>&emsp;&emsp;&emsp;<b>np.concatenate((a,b),axis=0)</b>，默认拼列，竖着拼，指定axis=1可以横着拼
<br>&emsp;&emsp;&emsp;<b>np.hstack([a,b])、np.hstack((a,b))</b>，横着拼
<br>&emsp;&emsp;&emsp;<b>np.vstack([a,b])、np.vstack((a,b))</b>，竖着拼
<br>&emsp;&emsp;&emsp;<b>np.dstack([a,b])、np.dstack((a,b))</b>，第三个维度拼
<br>&emsp;&emsp;&emsp;<b>np.stack(arrays,axis=0)</b>，指定维度，可以在其他维度拼

&emsp;&emsp;&emsp;<b>a.repeat(n)、np.repeat(a,n)</b>，把数组a在某方向上重复n次。
<br>&emsp;&emsp;&emsp;&emsp;&emsp;不指定默认会展开成一维（每个元素重复完再重复下一个元素）；
<br>&emsp;&emsp;&emsp;&emsp;&emsp;指定axis=0竖重复，axis=1横重复，重复完某一行/列再重复下一行/列；
<br>&emsp;&emsp;&emsp;<b>np.tile(a,(3,2))</b>，返回新数组，a行方向重复三次，列方向重复两次

&emsp;&emsp;&emsp;<b>np.vsplit(a,3)</b>，把数组a在竖直方向平均拆分3份
<br>&emsp;&emsp;&emsp;<b>np.vsplit(a,(1,2,4))</b>，把数组a在竖直方向索引为1、2、4行之前拆开，共4份
<br>&emsp;&emsp;&emsp;<b>np.hsplit(a,3)</b>，水平
<br>&emsp;&emsp;&emsp;<b>np.split(n,3)</b>，默认axis=0拆列即横向分割，指定axis=1拆行即纵向分割

```python
a=np.random.randint(0,11,(3,2))
b=np.random.randint(0,11,(3,2))

np.hstack([a,b])
np.vstack([a,b])

a
a.repeat(2)
a.repeat(2,axis=0)
a.repeat(2,axis=1)
```

    array([[ 6, 10,  3,  8],
           [ 6,  1,  6,  4],
           [ 9,  5, 10,  6]])

    array([[ 6, 10],
           [ 6,  1],
           [ 9,  5],
           [ 3,  8],
           [ 6,  4],
           [10,  6]])

    array([[ 6, 10],
           [ 6,  1],
           [ 9,  5]])

    array([ 6,  6, 10, 10,  6,  6,  1,  1,  9,  9,  5,  5])

    array([[ 6, 10],
           [ 6, 10],
           [ 6,  1],
           [ 6,  1],
           [ 9,  5],
           [ 9,  5]])

    array([[ 6,  6, 10, 10],
           [ 6,  6,  1,  1],
           [ 9,  9,  5,  5]])

```python
a=np.random.randint(0,11,(3,3))
a
np.tile(a,(3,2))
np.tile(a,(1,2))
np.tile(a,(0,2))
```

    array([[10,  1,  8],
           [ 9,  6,  6],
           [10,  6,  3]])

    array([[10,  1,  8, 10,  1,  8],
           [ 9,  6,  6,  9,  6,  6],
           [10,  6,  3, 10,  6,  3],
           [10,  1,  8, 10,  1,  8],
           [ 9,  6,  6,  9,  6,  6],
           [10,  6,  3, 10,  6,  3],
           [10,  1,  8, 10,  1,  8],
           [ 9,  6,  6,  9,  6,  6],
           [10,  6,  3, 10,  6,  3]])

    array([[10,  1,  8, 10,  1,  8],
           [ 9,  6,  6,  9,  6,  6],
           [10,  6,  3, 10,  6,  3]])

    array([], shape=(0, 6), dtype=int32)

```python
a=np.random.randint(0,11,(6,3))
a

np.vsplit(a,3)
np.vsplit(a,[1,2,4])
np.hsplit(a,3)
np.split(a,2)
```

    array([[ 0,  2,  9],
           [ 3,  6, 10],
           [ 3,  0,  0],
           [ 7,  7,  4],
           [10,  7,  3],
           [ 0,  8,  0]])

    [array([[ 0,  2,  9],
            [ 3,  6, 10]]),
     array([[3, 0, 0],
            [7, 7, 4]]),
     array([[10,  7,  3],
            [ 0,  8,  0]])]

    [array([[0, 2, 9]]),
     array([[ 3,  6, 10]]),
     array([[3, 0, 0],
            [7, 7, 4]]),
     array([[10,  7,  3],
            [ 0,  8,  0]])]

    [array([[ 0],
            [ 3],
            [ 3],
            [ 7],
            [10],
            [ 0]]),
     array([[2],
            [6],
            [0],
            [7],
            [7],
            [8]]),
     array([[ 9],
            [10],
            [ 0],
            [ 4],
            [ 3],
            [ 0]])]

    [array([[ 0,  2,  9],
            [ 3,  6, 10],
            [ 3,  0,  0]]),
     array([[ 7,  7,  4],
            [10,  7,  3],
            [ 0,  8,  0]])]

（3）补充
<br>&emsp;&emsp;&emsp;指定维度为None或np.newaxis来改变形状

```python
a=np.random.randint(0,11,10)#1行10列
a

a[None,:]
a[:,None]#10行1列
a[np.newaxis,:]
a[:,np.newaxis]#10行1列
b=a[:,None,None]#第一个维度为10，再新建两个维度
b
b[1]
```

    array([3, 4, 7, 7, 8, 0, 3, 5, 4, 5])

    array([[3, 4, 7, 7, 8, 0, 3, 5, 4, 5]])

    array([[3],
           [4],
           [7],
           [7],
           [8],
           [0],
           [3],
           [5],
           [4],
           [5]])

    array([[3, 4, 7, 7, 8, 0, 3, 5, 4, 5]])

    array([[3],
           [4],
           [7],
           [7],
           [8],
           [0],
           [3],
           [5],
           [4],
           [5]])

    array([[[3]],
    
           [[4]],
    
           [[7]],
    
           [[7]],
    
           [[8]],
    
           [[0]],
    
           [[3]],
    
           [[5]],
    
           [[4]],
    
           [[5]]])

    array([[4]])

### 6. 数组运算
&emsp;&emsp;数组与数做+-*/、%、//运算，所有元素都做
<br>&emsp;&emsp;两相同大小的数组相加减，对应位置相加减（不同的广播运算，后面有）
<br>&emsp;&emsp;<b>a\*b</b>，数组对应位置元素相乘，矩阵乘法，注意大小
<br>&emsp;&emsp;<b>np.multiply(a,b)</b>点乘，数组矩阵对应位置元素相乘除
<br>&emsp;&emsp;<b>a@b、np.dot(a,b)、np.matmul(a,b)</b>叉乘，对数组元素相乘再求和，对矩阵矩阵乘法（前列=后行）
<br>&emsp;&emsp;&emsp;&emsp;<b>np.matmul(a,b)</b>适合处理更高维度的数组；<b>np.dot(a,b)</b>适合处理矩阵、向量。

对于单个复数或复数数组，可以直接获取实部和虚部

```python
import numpy as np
a=np.zeros((2,2),dtype=np.complex128)
for i in range(2):
    for j in range(2):
        a[i,j]=(np.random.randint(-20,-2))**(1/2)
print(a)
print('*'*120)
print(a.real)
print('*'*120)
print(a.imag)
```

    [[1.49987989e-16+2.44948974j 2.52467405e-16+4.12310563j]
     [2.20776341e-16+3.60555128j 2.44929360e-16+4.j        ]]
    ************************************************************************************************************************
    [[1.49987989e-16 2.52467405e-16]
     [2.20776341e-16 2.44929360e-16]]
    ************************************************************************************************************************
    [[2.44948974 4.12310563]
     [3.60555128 4.        ]]
    

```python
a=np.eye(4)
a+2
a*5
```

    array([[3., 2., 2., 2.],
           [2., 3., 2., 2.],
           [2., 2., 3., 2.],
           [2., 2., 2., 3.]])

    array([[5., 0., 0., 0.],
           [0., 5., 0., 0.],
           [0., 0., 5., 0.],
           [0., 0., 0., 5.]])

```python
a=np.array([1,2,3])
b=a.copy()
a*b
np.multiply(a,b)

a@b
np.dot(a,b)
np.dot(b,a)
```

    array([1, 4, 9])

    array([1, 4, 9])

    14

    14

    14

### 7. 矩阵
&emsp;&emsp;&emsp;<b>k1=np.matrix([[1,2,3],[4,5,6]])</b>，创建矩阵
<br>&emsp;&emsp;&emsp;<b>k2=np.matrix(a)</b>，从数组创建矩阵
<br>&emsp;&emsp;&emsp;<b>k2=k1.T</b>，转置
<br>&emsp;&emsp;&emsp;<b>k1*k2</b>，矩阵乘法，数组对应位置元素相乘
<br>&emsp;&emsp;&emsp;<b>np.dot(k1,k2)</b>，矩阵乘法，数组矩阵乘法
<br>&emsp;&emsp;&emsp;<b>np.multiply(k1,k1)</b>，数组和矩阵对应位置元素相乘
<br>&emsp;&emsp;&emsp;<b>k1@k2</b>，矩阵乘法，数组矩阵乘法
<br>&emsp;&emsp;&emsp;<b>k1.I</b>，方阵求逆，非方阵求伪逆矩阵
<br>&emsp;&emsp;&emsp;<b>np.linalg.det(k2)</b>，方阵行列式的值
<br>&emsp;&emsp;&emsp;<b>np.linalg.matrix_rank(k2)</b>，矩阵的秩
<br>&emsp;&emsp;&emsp;<b>w,v = np.linalg.eig(a)</b>，计算特征值和特征向量
<br>&emsp;&emsp;&emsp;&emsp;&emsp;w: 多个特征值组成的一个矢量；  v: 多个特征向量组成的一个矩阵

```python
k1=np.matrix([[1,2,3],[4,5,6]])

k1*k1.T
np.multiply(k1,k1)
k1@k1.T
np.dot(k1,k1.T)

k2=np.matrix([[1,2,3],[4,5,6],[1,2,3]])#两行相同，行列数值为0
np.linalg.det(k2)
np.linalg.matrix_rank(k2)
```

    matrix([[14, 32],
            [32, 77]])

    matrix([[ 1,  4,  9],
            [16, 25, 36]])

    matrix([[14, 32],
            [32, 77]])

    matrix([[14, 32],
            [32, 77]])

    0.0

    2

### 8. 广播

规则：为缺失的维度补维度，缺失元素用已有值填充

```python
a=np.arange(3)
b=np.arange(3).reshape(-1,1)
a
b
a+b
a*b

```

    array([0, 1, 2])

    array([[0],
           [1],
           [2]])

    array([[0, 1, 2],
           [1, 2, 3],
           [2, 3, 4]])

    array([[0, 0, 0],
           [0, 1, 2],
           [0, 2, 4]])

### 9. 保存读入

```python
a=np.random.randint(1,101,(20,20),np.uint16)
np.save('../data/a.npy',a)#把数组存为npy文件
b=np.load('../data/a.npy')#读入npy文件

np.savetxt('../data/arr.csv',a,delimiter=',')#a存为csv文件，分隔符为逗号
c=np.loadtxt('../data/arr.csv',delimiter=',')#读入csv
```