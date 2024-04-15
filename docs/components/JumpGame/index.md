---
layout: false
---

<script setup lang="ts">
import { defineClientComponent } from 'vitepress';

// 客户端才有的pinia持久化存储中的localStorage和sessionStorage
const JumpGame = defineClientComponent(() => {
    return import('./index.vue');
});
</script>

<JumpGame/>

