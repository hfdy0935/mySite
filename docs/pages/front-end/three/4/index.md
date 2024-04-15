---
title: 轨道控制器
titleTemplate: 前端笔记/three
---

- 监听变化事件，重新渲染
- 左键旋转，滚轮缩放，右键平移

:ballot_box_with_check: 轨道控制器变化本质上是在改`Camera`的参数；
:white_check_mark: 通过`OrbitControls`的实例设置相机位置、观察目标等；
:white_check_mark: 比如`orbitControls.update()`内部调用`camera.lookAt(controls.target)`；

## 1. 例子
```tsx
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => { renderer.render(scene, camera) });
// 设置渲染循环后就不用监听change再渲染了，因为渲染循环一直在进行
```
- 当相机`lookAt`变化时，轨道绕着转的中心点也要改
```tsx

// 辅助观察坐标系，参数是坐标轴长度
const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);
// ......
// 改变了相机看的位置
camera.lookAt(1000, 1000, 1000);
// 对若需要更新轨道中心
controls.target.set(1000,1000,1000)
controls.update();
// 确保轨道跟着相机
```
## 2. 类的定义
<table>
<tr>
<td>

```tsx
class OrbitControls extends EventDispatcher {
    constructor( object, domElement ) {
		super();
        // ...
    }
}
```
</td>
</tr>
</table>
