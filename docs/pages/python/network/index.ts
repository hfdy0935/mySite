export const networkTopNav = {
    text: '网络',
    link: '/pages/python/network/back-end/fastapi'
};

export const networkSideBar = {
    '/pages/python/network/': [
        {
            text:'后端相关',
            items:[
                {
                    text: 'FastAPI',
                    link: '/pages/python/network/back-end/fastapi'
                },
                {
                    text: 'PyMongo',
                    link: '/pages/python/network/back-end/pymongo'
                }
            ]
        },
        {
            text: '爬虫',
            collapsed: false,
            items: [
                {
                    text: 'requests',
                    link: '/pages/python/network/spider/requests'
                },
                {
                    text: 'BeautifulSoup',
                    link: '/pages/python/network/spider/BeautifulSoup'
                },
                {
                    text: 'xpath',
                    link: '/pages/python/network/spider/Xpath'
                },
                {
                    text: '正则表达式',
                    link: '/pages/python/network/spider/re'
                },
                {
                    text: 'PyQuery',
                    link: '/pages/python/network/spider/PyQuery'
                },
                {
                    text: 'cookie、防盗链',
                    link: '/pages/python/network/spider/cookie、防盗链'
                },
                {
                    text: '多线程、多进程',
                    link: '/pages/python/network/spider/多线程、多进程'
                },
                {
                    text: '异步',
                    link: '/pages/python/network/spider/异步'
                },
                {
                    text: 'Selenium',
                    link: '/pages/python/network/spider/Selenium'
                },
                {
                    text: 'JS逆向',
                    link: '/pages/python/network/spider/JS逆向'
                },
                {
                    text: 'Scrapy',
                    link: '/pages/python/network/spider/Scrapy'
                }
            ]
        }
    ]
};
