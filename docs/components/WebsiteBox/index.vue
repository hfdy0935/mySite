<template>
    <div class="out">
        <Row :gutter="16" v-for="index in rowNum" :index class="row">
            <!-- 左边的列 -->
            <Col :span="12">
            <template v-if="!Array.isArray(data[index * 2 - 2])">
                <DoubleWebsite v-if="isStyleSame" :data="[data[index * 2 - 2]]" :fontColorStyle />
                <SingleWebsite v-else :data="data[index * 2 - 2]" :fontColorStyle />
            </template>
            <DoubleWebsite v-else :data="data[index * 2 - 2]" :fontColorStyle />
            </Col>
            <!-- 右边的列 -->
            <Col :span="12" v-if="index * 2 - 1 < num">
            <template v-if="!Array.isArray(data[index * 2 - 1])">
                <DoubleWebsite v-if="isStyleSame" :data="[data[index * 2 - 1]]" :fontColorStyle />
                
                <SingleWebsite v-else :data="data[index * 2 - 1]" :fontColorStyle />
            </template>
            <DoubleWebsite v-else :data="data[index * 2 - 1]" :fontColorStyle />
            </Col>
        </Row>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import { storeToRefs } from 'pinia';
import { useWebsiteBoxStyleStore } from '../../stores';
import { Row, Col } from 'ant-design-vue';
import SingleWebsite from './children/SingleWebsite.vue';
import DoubleWebsite from './children/DoubleWebsite.vue';
defineOptions({ name: 'WebsiteBox' });
interface oneWebsiteType {
    logo?: string,
    name: string,
    url: string,
    github?: string,
    description: string
};
const { data } = defineProps<{
    data: (oneWebsiteType | oneWebsiteType[])[],
}>();
const num = data.length;
const rowNum = Math.floor((num + 1) / 2);

// 根据白天/暗黑模式切换卡片背景颜色
const { isDark } = useData();
const fontColorStyle = computed(() => {
    return {
        color: isDark.value ? 'white' : 'black'
    }
});
// 表格样式是否统一ccc
const { isStyleSame } = storeToRefs(useWebsiteBoxStyleStore());
</script>

<style scoped lang="scss">
.row {
    margin-bottom: 20px;
}
</style>