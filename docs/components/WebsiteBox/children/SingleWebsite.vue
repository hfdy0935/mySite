<template>
    <Card :hoverable="true" class="card">
        <CardMeta>
            <template #avatar>
                <Avatar :src="logo" @click="openPage(url)" style="cursor:pointer">
                </Avatar>
            </template>
            <template #title>
                <span @click="openPage(url)" :style="fontColorStyle" style="cursor:pointer">{{ name
                    }}</span>
            </template>
            <template #description>
                <a :href="github" v-if="github" :style="fontColorStyle" target="_blank">GitHub</a><br />
                <span :style="fontColorStyle" :title="description">{{ description }}</span>
            </template>
        </CardMeta>
    </Card>
</template>

<script setup lang="ts">
import { Card, CardMeta, Avatar } from 'ant-design-vue';
import type { oneWebsiteType } from '../types';
defineOptions({ name: 'SingleWebsite' });
const { data, fontColorStyle } = defineProps<{
    data: oneWebsiteType,
    fontColorStyle: { color: string }
}>();
const { logo = '', name, url, description = '', github = '' } = data;
// 打开对应网站页面
const openPage = (url: string) => {
    window.open(url);
};



</script>

<style scoped lang="scss">
.card {
    height: 180px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    background-color: v-bind(isDark, 'black', 'white');
    cursor: auto;

    a {
        transition: all 0.2s ease;
    }

    &:hover {
        border: 1px solid white;

        a {
            color: red !important;
        }
    }
}
</style>