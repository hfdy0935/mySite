---
title: Canvas画布布局和全屏
titleTemplate: 前端笔记/three
---

```tsx
window.onresize = ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    // 如有需要，更新投影矩阵
    camera.updateProjectionMatrix();
    // 如有需要，设置渲染器的像素比
    renderer.setPixelRatio(window.devicePixelRatio);
};
// 双击全屏
window.addEventListener("dblclick", () => {
  const fullScreenElement = document.fullscreenElement;
  if (!fullScreenElement) {
    // 双击控制屏幕进入全屏，退出全屏
    // 让画布对象全屏
    renderer.domElement.requestFullscreen();
  } else {
    //   退出全屏，使用document对象
    document.exitFullscreen();
  }
});
```
