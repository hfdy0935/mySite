import { basicTopNav, basicSidebar } from './basic';
import { threeTopNav, threeSidebar } from './three';
import { statisticTopNav, statisticSideBar } from './statistic';

export const frontEndTopNav = {
    text: '前端',
    items: [
        statisticTopNav,
        {
            text: '笔记',
            items: [basicTopNav, threeTopNav]
        }
    ]
};

export const frontEndSideBar = {
    ...basicSidebar,
    ...threeSidebar,
    ...statisticSideBar
};
