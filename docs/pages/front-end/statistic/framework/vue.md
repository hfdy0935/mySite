---
title: Vue
titleTemplate: 前端汇总
---

<script setup lang="ts">
import WebsiteBox from '/components/WebsiteBox/index.vue';
import {website1, website2, website3, website4, website5, website6, website7, website8,website9} from './data/vue-website.ts';

</script>

## 1. Vue

<WebsiteBox :data="website1"/>

## 2. 路由

<WebsiteBox :data="website2"/>

## 3. 状态管理

<WebsiteBox :data="website3"/>

## 4. 服务端渲染

<WebsiteBox :data="website4"/>

## 5. 静态站点生成

<WebsiteBox :data="website5"/>

## 6. 工程化

<WebsiteBox :data="website6"/>

:::tip 通过 create vue 创建
| `npm create vue@latest` |[GitHub](https://github.com/vuejs/create-vue?tab=readme-ov-file)|
:::

## 7. 其他资源

### 7.1 资源汇总

<br/>
<WebsiteBox :data="website7"/>

### 7.2 markdown 查看编辑器

<br/>
<WebsiteBox :data="website8"/>

## 8. 移动端、小程序

<WebsiteBox :data="website9"/>
