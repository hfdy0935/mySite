// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import './style.css';
import 'ant-design-vue/dist/reset.css';
// 侧边栏菜单前面的表格风格切换开关
import WebsiteStyleSwitch from '/components/WebsiteStyleSwitch/index.vue';

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            'sidebar-nav-before': () => h(WebsiteStyleSwitch)
        });
    },
    enhanceApp({ app, router, siteData }) {
        // ...
        const pinia = createPinia();
        pinia.use(piniaPluginPersistedstate);
        app.use(pinia);
        // app.use(Antd);
    },

} satisfies Theme;
