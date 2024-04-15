<template>
    <Card :hoverable="true" :tab-list="data.map((item, index) => ({ key: '' + index, tab: item.name }))"
        :active-tab-key="key" @tabChange="newKey => { key = newKey }" class="card" :style="fontColorStyle">
        <CardMeta>
            <template #avatar>
                <Avatar :src="data[key].logo || ''" @click="openPage(data[key].url)" style="cursor:pointer"></Avatar>
            </template>
            <template #title>
                <span @click="openPage(data[key].url)" :style="fontColorStyle" style="cursor:pointer">{{ data[key].name
                    }}</span>
            </template>
            <template #description>
                <a :href="data[key].github" v-if="data[key].github" :style="fontColorStyle"
                    target="_blank">GitHub</a><br />
                <span :style="fontColorStyle" :title="data[key].description" v-if="data[key].description">{{ data[key].description }}</span>
            </template>
        </CardMeta>
    </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Card, CardMeta, Avatar } from 'ant-design-vue';
import type { oneWebsiteType } from '../types';
defineOptions({ name: 'DoubleWebsite' });
const { data, fontColorStyle } = defineProps<{
    data: oneWebsiteType[],
    fontColorStyle: { color: string }
}>();
// 打开对应网站页面
const openPage = (url: string) => {
    window.open(url);
};
// 现在激活的是哪个tab
const key = ref<string>('0');
</script>

<style scoped lang="scss">
.card {
    height: 180px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
