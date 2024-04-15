<template>
    <div class="outer">
        <div class="title">卡片Tab风格偏好</div>
        <div class="switch">
            <div class="text1">个性</div>
            <Switch v-model:checked="isStyleSame" size="small" />
            <div class="text2">统一</div>
        </div>
    </div>
</template>


<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useWebsiteBoxStyleStore } from '../../stores';
import { Switch } from 'ant-design-vue';
defineOptions({ name: 'WebsiteStyleSwitch' })

// 表格样式是否统一ccc
const { isStyleSame } = storeToRefs(useWebsiteBoxStyleStore());
</script>


<style scoped lang="scss">
.outer {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;

    .title {
        font-size: 12px;
    }

    .switch {
        display: flex;
        font-size: 12px;
        align-items: center;

        @mixin text {
            width: 30px;
            height: 20px;
            margin: 0 13px;
            font-weight: bold;
        }

        .text1 {
            @include text;
            color: transparent;
            background-image: -webkit-linear-gradient(315deg, red, orange, yellow, green, cyan, blue, purple);
            background-clip: text;
        }

        .text2 {
            @include text;
        }
    }

}
</style>