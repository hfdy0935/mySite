---
title: 简易跳一跳
titleTemplate: 前端笔记/three
---

## 1. 组件
```tsx
import { defineComponent, ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useJumpGameStore, type aBoxAttrType } from '@/stores/jumpGame';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ElMessage } from 'element-plus';
import './index.scss';

export default defineComponent({
    name: 'FirstPractice',
    setup() {
        const container = ref<HTMLDivElement>();
        const { playerPosition, score, boxAttrArr } = storeToRefs(useJumpGameStore());
        const { createNextBox, addBoxAttrToArr, shiftBoxAttrArr, reset } = useJumpGameStore();
        const scene = new THREE.Scene();
        // scene.receiveShadow = true;
        const camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 10000);
        camera.position.set(playerPosition.value[0] - 300, 300, playerPosition.value[2] + 200);
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        // renderer.shadowMap.enabled = true;
        renderer.setSize(600, 600);
        renderer.setPixelRatio(Math.max(window.devicePixelRatio, 2));

        // 初始化
        let playerMesh: any;
        let controls: any;
        let pointLight: any;
        const initAdd = () => {
            camera.position.set(playerPosition.value[0] - 300, 300, playerPosition.value[2] + 200);
            boxAttrArr.value.forEach((item: aBoxAttrType) => {
                if (item) {
                    const geometry = new THREE.BoxGeometry(...item.geometry);
                    const material = new THREE.MeshPhysicalMaterial({ color: item.color });
                    const mesh = new THREE.Mesh(geometry, material);
                    // mesh.castShadow = true;
                    // mesh.receiveShadow = true;
                    mesh.position.set(...item.position);
                    mesh.name = 'pathBox';
                    scene.add(mesh);
                }
            });

            // 主角
            const playerGeometry = new THREE.BoxGeometry(20, 50, 20);
            const playerMaterial = new THREE.MeshBasicMaterial({ color: 'red' });
            playerMesh = new THREE.Mesh(playerGeometry, playerMaterial);
            playerMesh.position.set(...playerPosition.value);
            playerMesh.name = 'player';
            playerMesh.castShadow = true;
            scene.add(playerMesh);

            // 轨道控制器
            controls = new OrbitControls(camera, renderer.domElement);
            controls.target.set(...playerPosition.value);
            controls.target.y = 0;
            controls.update();

            // 灯光
            pointLight = new THREE.PointLight(0xffffff, 500000);
            pointLight.position.set(playerPosition.value[0] - 300, 300, playerPosition.value[2] + 200);
            pointLight.castShadow = true;
            scene.add(pointLight);

            scene.add(new THREE.AxesHelper(10000));
        };
        initAdd();

        // 移除scene中第一个mesh
        const removeFirstMeshFromScene = () => {
            const box = scene.children.filter((item: any) => item.name === 'pathBox');
            if (box.length < 5) {
                return;
            }
            scene.remove(box[0]);
        };

        // 蓄力程度
        const range = ref<number>(0);
        const isIncreasingRange = ref<boolean>(false);
        const handleMousedown = () => {
            isIncreasingRange.value = true;
        };
        const handleMouseup = () => {
            isIncreasingRange.value = false;
            playerMesh.position.y = 50;
            handleJump();
        };
        // 判断是否能跳到目标上
        const isInTarget = (target: aBoxAttrType, message: string) => {
            if (
                playerPosition.value[0] <= target.position[0] + target.geometry[0] / 2 &&
                playerPosition.value[0] >= target.position[0] - target.geometry[0] / 2 &&
                playerPosition.value[2] <= target.position[2] + target.geometry[2] / 2 &&
                playerPosition.value[2] >= target.position[2] - target.geometry[2] / 2
            ) {
                console.log(message);
                console.log(
                    `x需要满足： ${target.position[0] - target.geometry[0] / 2} <= ${playerPosition.value[0]} <= ${target.position[0] + target.geometry[0] / 2}`
                );
                console.log(
                    `z需要满足：${target.position[2] - target.geometry[2] / 2} <= ${playerPosition.value[2]} <= ${target.position[2] + target.geometry[2] / 2}`
                );
                console.log('------------------------------------------------------------------------------------------------');
                return true;
            }
            return false;
        };
        const canJumpToTarget = () => {
            // next、current是下一个和目前的方块属性数组
            const next = boxAttrArr.value[3];
            const current = boxAttrArr.value[2];
            const nextNext = boxAttrArr.value[4];
            if (isInTarget(current, '情况1：还在原方块')) {
                // 还在原方块
                return 1;
            } else if (isInTarget(next, '情况2：跳到下一个方块')) {
                // 跳到下一个方块
                return 2;
            } else if (isInTarget(nextNext, '情况2.5：跳到下下个方块')) {
                // 跳到下下个方块
                return 3;
            } else {
                console.log('情况3：失败');
                console.log(
                    `x需要满足： ${current.position[0] - current.geometry[0] / 2} <= ${playerPosition.value[0]} <= ${current.position[0] + current.geometry[0] / 2} 或 ${next.position[0] - next.geometry[0] / 2} <= ${playerPosition.value[0]} <= ${next.position[0] + next.geometry[0] / 2}`
                );
                console.log(
                    `z需要满足： ${current.position[2] - current.geometry[2] / 2} <= ${playerPosition.value[2]} <= ${current.position[2] + current.geometry[2] / 2} 或 ${next.position[2] - next.geometry[2] / 2} <= ${playerPosition.value[2]} <= ${next.position[2] + next.geometry[2] / 2}`
                );
                return 0;
            }
        };
        // 跳
        const isJumping: any = ref(null);
        // 游戏失败的提示是否显示
        const isFailTipShow = ref<boolean>(false);
        // 跳到下一格方块或者失败了点击充值复活后生成新的方块
        const successJump = () => {
            const newBox = createNextBox();
            newBox.name = 'pathBox';
            removeFirstMeshFromScene();
            scene.add(newBox);
            score.value++;
            addBoxAttrToArr(newBox);
            shiftBoxAttrArr();
        };
        // 跳的函数
        const handleJump = () => {
            // 节流
            if (isJumping.value) {
                return;
            }
            isJumping.value = true;
            // 距离
            const deltaX = boxAttrArr.value[3].position[0] - boxAttrArr.value[2].position[0] ? range.value : 0;
            const deltaZ = boxAttrArr.value[3].position[2] - boxAttrArr.value[2].position[2] ? -range.value : 0;
            const direction = deltaX ? 'x' : 'z';
            // 2：还在原来的方块上，1：跳到下一个了，0：失败了
            playerMove(deltaX, deltaZ, playerMesh, camera).then(() => {
                const canReach: number = canJumpToTarget();
                if (canReach === 2) {
                    successJump();
                } else if (canReach === 3) {
                    ElMessage({ type: 'warning', message: '非会员禁止跳两跳' });
                    isFailTipShow.value = true;
                } else if (canReach === 0) {
                    isFailTipShow.value = true;
                }
                range.value = 0;
                isJumping.value = false;
            });
        };

        // 根据前后两次的位置生成样条曲线
        const generateCatmullRomCurve3 = (deltaX: number, deltaZ: number, totalStep: number) => {
            const h = totalStep;
            const x1 = playerMesh.position.x;
            const x2 = boxAttrArr.value[3].position[0];
            const z1 = playerMesh.position.z;
            const z2 = boxAttrArr.value[3].position[2];
            // 生成样条曲线
            let arr;
            if (deltaX > 0) {
                if (z1 === z2) {
                    needMoveX.value = deltaX;
                    needMoveZ.value = 0;
                    arr = [
                        new THREE.Vector3(x1, playerMesh.position.y, z1),
                        new THREE.Vector3((x1 + deltaX) / 2, playerMesh.position.y + h, z1),
                        new THREE.Vector3(x1 + deltaX, playerMesh.position.y, z1)
                    ];
                } else {
                    const z3 = (z2 - z1) / (Math.sqrt((z2 - z1) ** 2 + (x2 - x1) ** 2) / deltaX) + z1;
                    const x3 = (x2 - x1) / (Math.sqrt((z2 - z1) ** 2 + (x2 - x1) ** 2) / deltaX) + x1;
                    needMoveX.value = x3 - x1;
                    needMoveZ.value = z3 - z1;
                    // Math.sqrt((z2-z1)**2+(x2-x1)**2)/deltaX = (z2-z1)/(z3-z1) => z3
                    // Math.sqrt((z2-z1)**2+(x2-x1)**2)/deltaX = (x2-x1)/(x3-x1) => x3

                    arr = [
                        new THREE.Vector3(x1, playerMesh.position.y, z1),
                        new THREE.Vector3((x1 + x3) / 2, playerMesh.position.y + h, (z1 + z3) / 2),
                        new THREE.Vector3(x3, playerMesh.position.y, z3)
                    ];
                }
            } else {
                if (x1 === x2) {
                    needMoveX.value = 0;
                    needMoveZ.value = deltaZ;
                    arr = [
                        new THREE.Vector3(x1, playerMesh.position.y, z1),
                        new THREE.Vector3(x1, playerMesh.position.y + h, (z1 + deltaZ) / 2),
                        new THREE.Vector3(x1, playerMesh.position.y, z1 + deltaZ)
                    ];
                } else {
                    const z3 = (z2 - z1) / (Math.sqrt((z2 - z1) ** 2 + (x2 - x1) ** 2) / -deltaZ) + z1;
                    const x3 = (x2 - x1) / (Math.sqrt((z2 - z1) ** 2 + (x2 - x1) ** 2) / -deltaZ) + x1;
                    needMoveX.value = x3 - x1;
                    needMoveZ.value = z3 - z1;
                    arr = [
                        new THREE.Vector3(x1, playerMesh.position.y, z1),
                        new THREE.Vector3((x1 + x3) / 2, playerMesh.position.y + h, (z1 + z3) / 2),
                        new THREE.Vector3(x3, playerMesh.position.y, z3)
                    ];
                }
            }
            const curve = new THREE.CatmullRomCurve3(arr);
            return curve;
        };
        // 是否需要斜着移动，原来的路线判断不出来，计算路线的时候调整
        const needMoveX = ref<number>(0);
        const needMoveZ = ref<number>(0);
        // 相机、玩家移动
        const playerMove = (deltaX: number, deltaZ: number, playerMesh: any, camera: any) => {
            let timer: any;
            const totalStep = Math.floor(Math.max(deltaX, Math.abs(deltaZ)));
            // 样条曲线
            const curve = generateCatmullRomCurve3(deltaX, deltaZ, totalStep);
            const geometry = new THREE.BufferGeometry();
            geometry.setFromPoints(curve.getPoints(totalStep));
            const material = new THREE.LineBasicMaterial({ color: 'cyan' });
            const curveMesh = new THREE.Line(geometry, material);
            scene.add(curveMesh);

            return new Promise(resolve => {
                let num = 0;
                timer = setInterval(() => {
                    // 移动主角
                    playerMesh.position.x += needMoveX.value / totalStep;
                    playerMesh.position.z += needMoveZ.value / totalStep;
                    // 更改仓库中储存的主角位置
                    playerPosition.value[0] += needMoveX.value / totalStep;
                    playerPosition.value[2] += needMoveZ.value / totalStep;

                    playerMesh.position.y = curve.getPoints(totalStep)[num].y;
                    camera.position.set(playerMesh.position.x - 300, 300, playerMesh.position.z + 200);
                    controls.target.set(...Object.values(playerMesh.position));
                    controls.target.y = 0;
                    controls.update();
                    pointLight.position.set(playerMesh.position.x - 300, 300, playerMesh.position.z + 200);
                    num += 1;
                    if (num > totalStep) {
                        scene.remove(curveMesh);
                        clearInterval(timer);
                        resolve('ok');
                    }
                }, 1);
            });
        };
        // 失败事件
        const failEvent = () => {
            isFailTipShow.value = false;
            restart();
        };
        // 充值复活
        const reCharge = () => {
            isFailTipShow.value = false;
            const x = boxAttrArr.value[2].position[0];
            const z = boxAttrArr.value[2].position[2];
            playerPosition.value[0] = x;
            playerPosition.value[2] = z;
            // playerMesh.position.set(...playerPosition.value);
            scene.clear();
            initAdd();
            // successJump();
            ElMessage({ type: 'success', message: '复活成功' });
        };

        // 重置
        const restart = () => {
            reset();
            scene.clear();
            initAdd();
        };

        function animate() {
            if (isIncreasingRange.value) {
                range.value += 3;
                if (playerMesh.position.y > 5) {
                    playerMesh.position.y -= 0.3;
                }
            }
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        onMounted(() => {
            container.value!.appendChild(renderer.domElement);
            container.value!.ondblclick = () => {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    container.value!.requestFullscreen();
                }
            };
        });

        const saveAsImage = () => {
            renderer.render(scene, camera);
            const data = renderer.domElement.toDataURL();
            const a = document.createElement('a');
            a.href = data;
            a.download = 'download.png';
            a.click();
            a.remove();
        };
        const clipToClipBoard = () => {
            renderer.render(scene, camera);
            renderer.domElement.toBlob((blob: any) => {
                const data = [new ClipboardItem({ [blob.type]: blob })];
                navigator.clipboard
                    .write(data)
                    .then(() => {
                        ElMessage({ type: 'success', message: '复制成功' });
                    })
                    .catch(() => {
                        ElMessage({ type: 'error', message: '复制失败' });
                    });
            });
        };

        return () => (
            <>
                <el-dialog
                    v-model={isFailTipShow.value}
                    beforeClose={failEvent}
                    v-slots={{
                        header: () => <h1 style='color:red;font-size:30px;font-weight:bolder'>你挂了</h1>,
                        footer: () => (
                            <el-button onClick={reCharge} type='success' style='transform:scale(1.2,1.2)'>
                                充值6块复活
                            </el-button>
                        )
                    }}></el-dialog>
                <el-card style='width:70%;display:flex;justify-content:space-evenly;'>
                    <el-button type='primary' onMousedown={handleMousedown} onMouseup={handleMouseup} disabled={isJumping.value}>
                        跳
                    </el-button>
                    &emsp;
                    <span>距离：{range.value}</span>&emsp;
                    <span>分数：{score.value}</span>&emsp;
                    <el-button type='danger' onClick={restart} disabled={isJumping.value}>
                        重置
                    </el-button>
                </el-card>

                <div ref={container} class='jump-container'></div>
                {/* <el-button
                    onClick={() => {
                        saveAsImage();
                    }}
                    type='primary'>
                    保存为图片
                </el-button>
                <el-button
                    onClick={() => {
                        clipToClipBoard();
                    }}
                    type='success'>
                    复制到剪贴板
                </el-button> */}
            </>
        );
    }
});

```


## 2. 仓库
```tsx
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import * as THREE from 'three';

export const useJumpGameStore = defineStore(
    'jumpGame',
    () => {
        // 分数
        const score = ref(0);
        // 显示方块的数组
        const boxAttrArr = ref<aBoxAttrType[]>(new Array(3).fill(''));

        // 生成方块
        const createNextBox = () => {
            // 上一个的属性
            const oldMesh = boxAttrArr.value[boxAttrArr.value.length - 1];
            const [x, y, z] = oldMesh.position;
            const [width, height, depth] = oldMesh.geometry;

            const newWidth = Math.random() * 100 + 80;
            const newDepth = Math.random() * 100 + 80;
            const geometry = new THREE.BoxGeometry(newWidth, height, newDepth);
            const material = new THREE.MeshPhysicalMaterial({
                color: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
            });
            const mesh = new THREE.Mesh(geometry, material);
            // 随机距离
            const distance = Math.random() * 200 + 40;
            // 随机方向
            const direction = Math.random() > 0.5;
            // 计算生成的位置
            const newX = direction ? x + width / 2 + distance + newWidth / 2 : x;
            const newZ = direction ? z : z - depth / 2 - distance - newDepth / 2;
            mesh.position.set(newX, y, newZ);
            mesh.name = 'pathBox';
            return mesh;
        };
        // 初始化
        const initBoxAttrArr = () => {
            // 第一个
            const geometry = new THREE.BoxGeometry(100, 50, 100);
            const material = new THREE.MeshPhysicalMaterial({ color: 'deepskyblue' });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, 0, 0);
            boxAttrArr.value[2] = {
                geometry: [100, 50, 100],
                color: 'deepskyblue',
                position: [0, 0, 0]
            };
            // 第二第三个
            const nextMesh = createNextBox();
            const { width: width1, height: height1, depth: depth1 } = nextMesh.geometry.parameters;
            boxAttrArr.value.push({
                geometry: [width1, height1, depth1],
                color: nextMesh.material.color,
                position: [...Object.values(nextMesh.position)] as [number, number, number]
            });
            const nextNextMesh = createNextBox();
            const { width: width2, height: height2, depth: depth2 } = nextNextMesh.geometry.parameters;
            boxAttrArr.value.push({
                geometry: [width2, height2, depth2],
                color: nextNextMesh.material.color,
                position: [...Object.values(nextNextMesh.position)] as [number, number, number]
            });
        };
        initBoxAttrArr();

        // 主角位置
        const playerPosition = ref<[number, number, number]>([0, 50, 0]);

        // 把新方块的属性添加到数组
        const addBoxAttrToArr = (mesh: any) => {
            const { width, height, depth } = mesh.geometry.parameters;
            boxAttrArr.value.push({
                geometry: [width, height, depth],
                color: mesh.material.color,
                position: [...Object.values(mesh.position)] as [number, number, number]
            });
        };
        const shiftBoxAttrArr = () => {
            boxAttrArr.value.shift();
        };

        // 重置
        const reset = () => {
            boxAttrArr.value = ['', '', ''];
            initBoxAttrArr();
            score.value = 0;
            playerPosition.value = [0, 50, 0];
        };

        return { playerPosition, score, boxAttrArr, createNextBox, addBoxAttrToArr, shiftBoxAttrArr, reset };
    },
    {
        persist: {
            storage: sessionStorage
        }
    }
);

export interface aBoxAttrType {
    geometry: [number, number, number];
    color: string | number;
    position: [number, number, number];
}

```