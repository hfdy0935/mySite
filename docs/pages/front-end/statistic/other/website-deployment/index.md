---
title: 服务器部署
titleTemplate: 前端汇总
---

<script setup lang="ts">
import WebsiteBox from '/components/WebsiteBox/index.vue';
import { website1 } from './data/website';
import {useData} from 'vitepress';

console.log(useData());
</script>

## 服务器部署相关

<WebsiteBox :data="website1"/>

