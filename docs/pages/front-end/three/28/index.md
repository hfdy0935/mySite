---
title: 关键帧动画
titleTemplate: 前端笔记/three
---

## 1. 创建
```tsx
// 关键帧数据
class KeyframeTrack {
    // name是 `名字.属性`格式
    constructor( name, times, values, interpolation ){}
}

// 关键帧动画
class AnimationClip {
    constructor( name, duration = - 1, tracks, blendMode = NormalAnimationBlendMode ){}
}
```

```tsx
// 给需要设置关键帧动画的模型命名
mesh.name = "Box";
const times = [0, 3, 6]; //时间轴上，设置三个时刻0、3、6秒
// times中三个不同时间点，物体分别对应values中的三个xyz坐标
const values = [0, 0, 0, 100, 0, 0, 0, 0, 100];
// 0~3秒，物体从(0,0,0)逐渐移动到(100,0,0),3~6秒逐渐从(100,0,0)移动到(0,0,100)
const posKF = new THREE.KeyframeTrack('Box.position', times, values);
// 从2秒到5秒，物体从红色逐渐变化为蓝色
const colorKF = new THREE.KeyframeTrack('Box.material.color', [2, 5], [1, 0, 0, 0, 0, 1]);
// 基于关键帧数据，创建一个clip关键帧动画对象，命名"test"，持续时间6秒。
const clip = new THREE.AnimationClip("test", 6, [posKF, colorKF]);
// 动画时长
clip..duration;
```


## 2. 播放、暂停、倍速、循环
```tsx
// 播放关键帧动画
class AnimationMixer extends EventDispatcher {
    constructor( root ) {
        super();
    }
}
```

```tsx
// 播放关键帧动画
//包含关键帧动画的模型对象作为AnimationMixer的参数创建一个播放器mixer
const mixer = new THREE.AnimationMixer(mesh);
//AnimationMixer的`.clipAction()`返回一个AnimationAction对象
const clipAction = mixer.clipAction(clip); 
//.play()控制动画播放，默认循环播放
clipAction.play(); 
// 默认循环播放，以下设置不循环播放
clipAction.loop = THREE.LoopOnce;
// 物体状态停留在动画结束的时候
clipAction.clampWhenFinished = true;
//动画停止结束，回到开始状态
clipAction.stop();
// 是否暂停 boolean，可获取和修改
clipAction.paused;
// 倍速，默认1，可获取可修改
clipAction.timeScale;
// 目前时刻，可获取可修改
clipAction.time;
//重新开始新的动画播放
clipAction.reset();
// 设置权重0-1，0表示不影响，1影响最大，加载多个动作时可以设置不同动作的权重
clipAction.weight;
// 动画完成后恢复初始播放状态
mixer.addEventListener('finished', function () {
    bu.innerHTML = '播放';//播放完成，按钮显示为“播放”
});


// 更新
const clock = new THREE.Clock();
// 在渲染循环中写
const frameT = clock.getDelta();
mixer.update(frameT);
```

## 3. 查看gltf模型的动画数据

```tsx
loader.load("../工厂.glb", function (gltf) { 
    console.log('控制台查看gltf对象结构', gltf);
    // console.log('动画数据', gltf.animations);
    model.add(gltf.scene); 

    //包含关键帧动画的模型作为参数创建一个播放器
    const mixer = new THREE.AnimationMixer(gltf.scene);
    //  获取gltf.animations[0]的第一个clip动画对象
    const clipAction = mixer.clipAction(gltf.animations[0]); //创建动画clipAction对象
    clipAction.play(); //播放动画

    // 如果想播放动画,需要周期性执行`mixer.update()`更新AnimationMixer时间数据
    const clock = new THREE.Clock();
    function loop() {
        requestAnimationFrame(loop);
        //clock.getDelta()方法获得loop()两次执行时间间隔
        const frameT = clock.getDelta();
        // 更新播放器相关的时间
        mixer.update(frameT);
    }
    loop();
});
```

## 4. 变形动画原理

:ballot_box_with_check: .morphAttributes设置几何体变形目标顶点数据
```tsx
//几何体两组顶点一一对应，位置不同，然后通过权重系数，可以控制模型形状在两组顶点之间变化
const geometry = new THREE.BoxGeometry(50, 50, 50);
// 为geometry提供变形目标的顶点数据(注意和原始geometry顶点数量一致)
const target1 = new THREE.BoxGeometry(50, 200, 50).attributes.position;//变高
const target2 = new THREE.BoxGeometry(10, 50, 10).attributes.position;//变细
// 几何体顶点变形目标数据，可以设置1组或多组
geometry.morphAttributes.position = [target1, target2];

const mesh = new THREE.Mesh(geometry, material);
```

:ballot_box_with_check: .morphTargetInfluences权重系数控制变形程度；
:white_check_mark: 一个网格模型的几何体geometry可以有多个变形目标，只要对应权重不为0，每个变形目标的形状都会影响模型的形状；
```tsx
//权重0：物体形状对应geometry.attributes.position表示形状
mesh.morphTargetInfluences[0] = 0.0;
//权重1：物体形状对应target1表示形状
mesh.morphTargetInfluences[0] = 1.0;
//权重0.5：物体形状对应geometry和target1变形中间状态
mesh.morphTargetInfluences[0] = 0.5;
```


## 5. 骨骼关节
- `Bone`

:ballot_box_with_check: 创建实例后可以直接添加，设置位置、旋转、缩放等；

```tsx
class Bone extends Object3D {
    constructor() {
        super();
    }
}
```

```tsx
const Bone1 = new THREE.Bone(); //关节1，用来作为根关节
const Bone2 = new THREE.Bone(); //关节2
const Bone3 = new THREE.Bone(); //关节3

// 设置关节父子关系   多个骨头关节构成一个树结构
Bone1.add(Bone2);
Bone2.add(Bone3);

//根关节Bone1默认位置是(0,0,0)
Bone2.position.y = 60; //Bone2相对父对象Bone1位置
Bone3.position.y = 30; //Bone3相对父对象Bone2位置
//平移Bone1，Bone2、Bone3跟着平移
Bone1.position.set(50,0,50);

// 骨骼关节旋转
Bone1.rotateX(Math.PI / 6);
Bone2.rotateX(Math.PI / 6);
```

:white_check_mark: 可视化
```tsx
// 骨骼关节可以和普通网格模型一样作为其他模型子对象，添加到场景中
const group = new THREE.Group();
group.add(Bone1);

// SkeletonHelper会可视化参数模型对象所包含的所有骨骼关节
const skeletonHelper = new THREE.SkeletonHelper(group);
group.add(skeletonHelper);
```

:white_check_mark: 查看外部模型的骨骼动画
```tsx
const loader = new GLTFLoader(); 
loader.load("../骨骼动画.glb", function (gltf) {
    console.log('控制台查看gltf对象结构', gltf);
    model.add(gltf.scene);
    // 骨骼辅助显示
    const skeletonHelper = new THREE.SkeletonHelper(gltf.scene);
    model.add(skeletonHelper); 
});
```

:white_check_mark: 访问骨骼网格模型的骨架SkinnedMesh.skeleton
```tsx
// 根据节点名字获取某个骨骼网格模型
const SkinnedMesh = gltf.scene.getObjectByName('身体');
console.log('骨架', SkinnedMesh.skeleton);
```
:white_check_mark: 骨架的骨骼关节属性.skeleton.bones
```tsx
console.log('骨架所有关节', SkinnedMesh.skeleton.bones);
console.log('根关节', SkinnedMesh.skeleton.bones[0]);
```


