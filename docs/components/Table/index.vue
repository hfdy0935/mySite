<template>
    <table>
        <tr>
            <th style="text-align:center">名称</th>
            <th style="text-align:center">链接</th>
        </tr>
        <tr v-for="(item, key) of data" :key>
            <td align="center" style="padding:30px">{{ item.name }}</td>
            <td style="display:flex">
                <template v-for="(link, key) of item.links" :key>
                    <div style="width:40px;margin:30px"><a v-if="link" :href="link" target="_blank">{{ key }}</a></div>
                    <!-- &emsp;&emsp; -->
                </template>
            </td>
        </tr>
    </table>
</template>

<script setup lang="ts">
defineOptions({ name: 'Table' });
interface propsType {
    name: string,
    links: {
        website: string,
        github: string
    }
};
const { data } = defineProps<{ data: propsType[] }>();
</script>

<style scoped></style>