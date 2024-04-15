---
title: 组件库、工具
titleTemplate: 前端汇总
---

<script setup lang="ts">
import WebsiteBox from '/components/WebsiteBox/index.vue';
import {website1,website2,website3,website4} from './data/tools-website.ts';
</script>

## 1. 组件库

<WebsiteBox :data="website1" />

::: warning 更多组件库见&emsp;<a href="https://ui-libs.vercel.app/" target="_blank">https://ui-libs.vercel.app/</a>
:::

## 2. 打包工具

<WebsiteBox :data="website2" />

## 3. 其他工具

<WebsiteBox :data="website3" />

## 4. JavaScript框架语法特性对比

<WebsiteBox :data="website4" />