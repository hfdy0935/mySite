---
title: 分享、收藏、实习平台
titleTemplate: 前端汇总
---

<script setup lang="ts">
import WebsiteBox from '/components/WebsiteBox/index.vue';
import { website1, website2, website3, website4 } from './data/website';

</script>

## 1. Git 相关

<WebsiteBox :data="website1"/>

## 2. 技术分享交流

<WebsiteBox :data="website2"/>

## 3. 实习相关

### 3.1 准备

<br/>
<WebsiteBox :data="website3"/>

### 3.2 简历投递

:::tip 以上网站的渠道或者直接找官网投递
:::

## 4. 一些文档、经验、博客、总结、分享网站

<WebsiteBox :data="website4"/>
