---
title: 基础
titleTemplate: 前端汇总
---


::: tip for me

1. 东西很多 :cold_sweat:
2. 理解**整体的思想、方法**，一些 API 参数等知道有这么个方法就行，用到再查
3. 不用自己做笔记，偶尔翻翻，搓一下代码找找手感 :slightly_smiling_face:
   :::

## 1. 学习路线

<WebsiteBox :data="website1" />

## 2. 综合

<WebsiteBox :data="website2"></WebsiteBox>

## 3. JavaScript

<WebsiteBox :data="website3"/>
<Table :data="table1" />

>[!WARNING] 相关的书
> :one: &emsp;JavaScript权威指南<br/>
> :two: &emsp;JavaScript高级程序设计

## 4. TypeScript

<WebsiteBox :data="website4"/>
<Table :data="table2" />

## 5. CSS 预处理器

<WebsiteBox :data="website5"/>

## 6. 一些其他重要的

<WebsiteBox :data="website6"/>

## 7. Node 及相关

<WebsiteBox :data="website7"/>



<script setup lang="ts">
import WebsiteBox from '/components/WebsiteBox/index.vue';
import {website1, website2, website3,website4,website5,website6,website7} from './data/website.ts';
import {table1,table2} from './data/table.ts';
import {Switch} from 'ant-design-vue';
import Table from '/components/Table/index.vue';

</script>