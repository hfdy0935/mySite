export const statisticTopNav = {
    text: '汇总',
    link: '/pages/front-end/statistic/basic/'
};

export const statisticSideBar = {
    '/pages/front-end/statistic/': [
        {
            text: '基础',
            link: '/pages/front-end/statistic/basic/'
        },
        {
            text: '框架及相关',
            collapsed: false,
            items: [
                { text: 'Vue', link: '/pages/front-end/statistic/framework/vue' },
                { text: 'React', link: '/pages/front-end/statistic/framework/react' },
                { text: '组件库、工具', link: '/pages/front-end/statistic/framework/tools' }
            ]
        },
        {
            text: '分享、收藏、实习平台',
            link: '/pages/front-end/statistic/platform/'
        },
        {
            text: 'WebGIS',
            link: '/pages/front-end/statistic/web-gis/'
        },
        {
            text: '其他',
            collapsed: false,
            items: [
                { text: '有用的第三方库', link: '/pages/front-end/statistic/other/useful-library/' },
                { text: '资源网站', link: '/pages/front-end/statistic/other/resources-website/' },
                { text: '统计网站', link: '/pages/front-end/statistic/other/statistic-website/' },
                { text: '工具网站', link: '/pages/front-end/statistic/other/tools-website/' },
                { text: '服务器部署', link: '/pages/front-end/statistic/other/website-deployment/' }
            ]
        }
    ]
};
