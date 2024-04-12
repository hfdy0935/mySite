---
title: 基础
titleTemplate: Python
---

<script setup lang="ts">
import WebsiteBox from '/components/WebsiteBox/index.vue';
import Table from '/components/Table/index.vue';
import {website1, website2, website3,website4,website5} from './data/website.ts';
import {table1,table2} from './data/table.ts';
</script>

## 1. Python 语法

<WebsiteBox :data="website1"/>

<Table :data="table1"/>

## 2. 数据科学

<WebsiteBox :data="website2"/>

## 3. 机器学习

<WebsiteBox :data="website3"/>

<Table :data="table2"/>

## 4. 后端

<WebsiteBox :data="website4"/>

## 5. 其他工具库

<WebsiteBox :data="website5"/>
