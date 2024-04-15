import { basicTopNav, basicSidebar } from './basic';
import { networkTopNav, networkSideBar } from './network';
import { statisticTopNav, statisticSideBar } from './statistic';

export const pythonTopNav = {
    text: 'Python',
    items: [
        statisticTopNav,
        {
            text: '笔记',
            items: [basicTopNav, networkTopNav]
        }
    ]
};

export const pythonSideBar = {
    ...basicSidebar,
    ...networkSideBar,
    ...statisticSideBar
};
