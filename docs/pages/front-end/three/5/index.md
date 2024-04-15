---
title: 渲染器设置及渲染循环
titleTemplate: 前端笔记/three
---

## 1. 渲染器设置
```tsx
const renderer = new THREE.WebGLRenderer({
    antialias: true, // 抗锯齿
    alpha: true // 背景透明,
    logarithmicDepthBuffer: true // 渲染时前后物体颜色重叠时用
});
// 或
// renderer.antialias = true;
```

- 其他部分方法：

|                            方法                             |   描述   |
| :---------------------------------------------------------: | :------: |
|             `getPixelSize()`、`setPixelSize()`              |  像素比  |
|            `getSize(target)`、`setSize(target)`             |          |
|         `getClearColor(target)`、`setClearColor()`          | 背景颜色 |
|            `getClearAlpha()`、`setClearAlpha()`             |          |
| `clear()`、`clearColor()`、`clearDepth()`、`clearStencil()` |          |
|                          `render`                           |   渲染   |
> 获取`window`的像素比：`window.devicePixelRatio`
## 2. 类的定义
<table>
<tr>
<td>

```tsx
class WebGLRenderer {
    constructor( parameters = {} ) {
        const {
            canvas = createCanvasElement(),
            context = null,
            depth = true,
            stencil = true,
            alpha = false,
            antialias = false,
            premultipliedAlpha = true,
            preserveDrawingBuffer = false,
            powerPreference = 'default',
            failIfMajorPerformanceCaveat = false,
        } = parameters;
        // ...
    }
}
```
</td>
</tr>
</table>

## 3. 渲染循环
|                         |                              说明                               |
| :---------------------: | :-------------------------------------------------------------: |
| `requestAnimationFrame` | `window`的方法，专门用于动画渲染，页面切换后不会运行，约60帧/秒 |
|      `setInterval`      |                               ...                               |
```tsx
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();
```
- 计算两帧之间时间间隔和帧率
```tsx
const clock = new THREE.Clock();
function render() {
    const spt = clock.getDelta()*1000;//毫秒
    console.log('两帧渲染时间间隔(毫秒)',spt);
    console.log('帧率FPS',1000/spt);
    renderer.render(scene, camera); //执行渲染操作
    mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
};
render();
```
