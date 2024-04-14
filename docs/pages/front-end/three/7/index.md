---
title: gsap库
titleTemplate: 前端笔记/three
---

```tsx
// 设置动画
var animate1 = gsap.to(cube.position, {
  x: 5,
  duration: 5,
  ease: "power1.inOut",
  //   设置重复的次数，无限次循环-1
  repeat: -1,
  //   往返运动
  yoyo: true,
  //   delay，延迟2秒运动
  delay: 2,
  // 当动画完成时，执行回调函数
  onComplete: () => {
    console.log("动画完成");
  },
  //当动画开始时，执行回调函数
  onStart: () => {
    console.log("动画开始");
  },
});
// 动画暂停和继续
window.addEventListener("dblclick", () => {
  //   console.log(animate1);
  if (animate1.isActive()) {
    //   暂停
    animate1.pause();
  } else {
    //   恢复
    animate1.resume();
  }
});
```
- 还有很多，见<a href="https://gsap.com/" target="_blank">GSAP官网</a>
