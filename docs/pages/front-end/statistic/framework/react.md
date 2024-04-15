---
title: React
titleTemplate: 前端汇总
---

<script setup lang="ts">
import WebsiteBox from '/components/WebsiteBox/index.vue';
import {website1,website2,website3,website4,website5,website6,website7} from './data/react-website.ts';


</script>

## 1. React

<WebsiteBox :data="website1" />

## 2. 路由

<WebsiteBox :data="website2" />

## 3. 状态管理

<WebsiteBox :data="website3" />

## 4. 服务端渲染

<WebsiteBox :data="website4" />

## 5. 静态站点生成

<WebsiteBox :data="website5" />

## 6. 工程化

<WebsiteBox :data="website6" />

## 7. 移动端（Android、IOS）

<WebsiteBox :data="website7" />
