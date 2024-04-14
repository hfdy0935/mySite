export const basicTopNav = {
    text: '基础',
    link: '/pages/python/basic/syntax/syntax1'
};

export const basicSidebar = {
    '/pages/python/basic/': [
        {
            text: '语法',
            collapsed: false,
            items: [
                {
                    text: '语法1',
                    link: '/pages/python/basic/syntax/syntax1'
                },
                {
                    text: '语法2',
                    link: '/pages/python/basic/syntax/syntax2'
                },
                {
                    text: '语法3',
                    link: '/pages/python/basic/syntax/syntax3'
                },
                {
                    text: '语法4',
                    link: '/pages/python/basic/syntax/syntax4'
                },
                {
                    text: '语法5',
                    link: '/pages/python/basic/syntax/syntax5'
                }
            ]
        },
        {
            text: '科学计算与可视化',
            collapsed: false,
            items: [
                {
                    text: 'numpy',
                    collapsed: true,
                    items: [
                        {
                            text: 'numpy1',
                            link: '/pages/python/basic/science-compute/numpy1'
                        },
                        {
                            text: 'numpy2',
                            link: '/pages/python/basic/science-compute/numpy2'
                        }
                    ]
                },
                {
                    text: 'pandas',
                    collapsed: true,
                    items: [
                        {
                            text: 'pandas1',
                            link: '/pages/python/basic/science-compute/pandas1'
                        },
                        {
                            text: 'pandas2',
                            link: '/pages/python/basic/science-compute/pandas2'
                        },
                        {
                            text: 'pandas3',
                            link: '/pages/python/basic/science-compute/pandas3'
                        },
                        {
                            text: 'pandas4',
                            link: '/pages/python/basic/science-compute/pandas4'
                        },
                        {
                            text: 'pandas5',
                            link: '/pages/python/basic/science-compute/pandas5'
                        }
                    ]
                },
                {
                    text: 'matplotlib',
                    collapsed: true,
                    items: [
                        {
                            text: 'matplotlib1',
                            link: '/pages/python/basic/science-compute/matplotlib1'
                        },
                        {
                            text: 'matplotlib2',
                            link: '/pages/python/basic/science-compute/matplotlib2'
                        }
                    ]
                }
            ]
        },
        {
            text: '一些基本的库',
            collapsed: false,
            items: [
                {
                    text: 'os',
                    link: '/pages/python/basic/library/os'
                },
                {
                    text: 'pyautogui',
                    link: '/pages/python/basic/library/pyautogui'
                },
                {
                    text: 'tkinter',
                    link: '/pages/python/basic/library/tkinter'
                }
            ]
        }
    ]
};
