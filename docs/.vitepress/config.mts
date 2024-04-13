import { defineConfig } from 'vitepress';
// 顶部导航配置
import { frontEndTopNav, frontEndSideBar } from '../pages/front-end';
import { pythonTopNav, pythonSideBar } from '../pages/python';
// base
import { base } from '../constant';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'mySite',
    base,
    description: 'A VitePress Site',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/assets/logo.svg',
        siteTitle: false,
        nav: [frontEndTopNav, pythonTopNav],
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        outline: [2, 6],
        outlineTitle: '本页目录',
        lightModeSwitchTitle: '切换为浅色模式',
        darkModeSwitchTitle: '切换为深色模式',

        sidebar: {
            ...frontEndSideBar,
            ...pythonSideBar
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
        // lastUpdated: {
        //     // 最后更新时间
        //     text: '更新于',
        //     formatOptions: {
        //         dateStyle: 'full',
        //         timeStyle: 'medium'
        //     }
        // },
        search: {
            // 搜索
            provider: 'local'
        }
    },
    markdown: {
        // 显示行号
        lineNumbers: true,
        // 图片懒加载
        image: {
            lazyLoading: true
        }
    },
    lastUpdated: true // 最后更新时间
});
