import { base } from '../../../../../../constant';

const basePath = base || '/';

export const website1 = [
    {
        logo: basePath + 'assets/front-end/statistic/other/Docker.webp',
        name: 'Docker',
        url: 'https://www.docker.com/',
        description: '开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化'
    },
    {
        logo: basePath + 'assets/front-end/statistic/other/Nginx.ico',
        name: 'Nginx',
        url: 'https://nginx.org/',
        description: '高性能的HTTP和反向代理web服务器',
        github: 'https://github.com/nginx/nginx'
    },
    {
        logo: basePath + 'assets/front-end/statistic/other/Apache.png',
        name: 'Apache',
        url: 'https://apache.org/',
        description: 'Apache软件基金会的一个开放源码的网页服务器',
        github: 'https://github.com/apache'
    },
];