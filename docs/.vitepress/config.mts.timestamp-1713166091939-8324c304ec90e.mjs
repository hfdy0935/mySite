// docs/.vitepress/config.mts
import { defineConfig } from "file:///F:/myWebsite/node_modules/vitepress/dist/node/index.js";

// docs/pages/front-end/basic/index.ts
var basicTopNav = {
  text: "\u57FA\u7840",
  link: "/pages/front-end/basic/html"
};
var basicSidebar = {
  "/pages/front-end/basic/": [
    {
      text: "1. HTML",
      collapsed: false,
      items: [
        {
          text: "HTML",
          link: "/pages/front-end/basic/html"
        },
        {
          text: "HTML5",
          link: "/pages/front-end/basic/html5"
        }
      ]
    },
    {
      text: "2. CSS",
      collapsed: false,
      items: [
        {
          text: "CSS",
          link: "/pages/front-end/basic/css"
        },
        {
          text: "CSS3",
          link: "/pages/front-end/basic/css3"
        }
      ]
    },
    {
      text: "3. JavaScript",
      collapsed: false,
      items: [
        {
          text: "JavaScript\u57FA\u7840",
          link: "/pages/front-end/basic/javascript-basic"
        },
        {
          text: "JavaScript\u5BF9\u8C61",
          link: "/pages/front-end/basic/javascript-object"
        },
        {
          text: "Web APIs",
          link: "/pages/front-end/basic/javascript-WebAPIs"
        }
      ]
    },
    {
      text: "4. AJAX",
      collapsed: false,
      items: [
        {
          text: "AJAX",
          link: "/pages/front-end/basic/ajax"
        }
      ]
    }
  ]
};

// docs/pages/front-end/three/index.ts
var threeTopNav = {
  text: "Three.js",
  link: "/pages/front-end/three/1/"
};
var threeSidebar = {
  "/pages/front-end/three/": [
    {
      text: "1. Hello Cube",
      link: "/pages/front-end/three/1/"
    },
    {
      text: "2. \u7F51\u683C\u6750\u8D28",
      link: "/pages/front-end/three/2/"
    },
    {
      text: "3. \u5149\u6E90",
      link: "/pages/front-end/three/3/"
    },
    {
      text: "4. \u8F68\u9053\u63A7\u5236\u5668",
      link: "/pages/front-end/three/4/"
    },
    {
      text: "5. \u6E32\u67D3\u5668\u8BBE\u7F6E\u53CA\u6E32\u67D3\u5FAA\u73AF",
      link: "/pages/front-end/three/5/"
    },
    {
      text: "6. Canvas\u753B\u5E03\u5E03\u5C40\u548C\u5168\u5C4F",
      link: "/pages/front-end/three/3/"
    },
    {
      text: "7. gsap\u5E93",
      link: "/pages/front-end/three/7/"
    },
    {
      text: "8. \u5E38\u89C1\u51E0\u4F55\u4F53",
      link: "/pages/front-end/three/8/"
    },
    {
      text: "9. \u51E0\u4F55\u4F53BufferGeometry",
      link: "/pages/front-end/three/9/"
    },
    {
      text: "10. \u70B9\u6A21\u578BPoints",
      link: "/pages/front-end/three/10/"
    },
    {
      text: "11. \u7EBF\u6A21\u578BLine",
      link: "/pages/front-end/three/11/"
    },
    {
      text: "12. \u7F51\u683C\u3001\u70B9\u3001\u7EBF\u53CA\u5BF9\u5E94\u6750\u8D28\u603B\u7ED3",
      link: "/pages/front-end/three/12/"
    },
    {
      text: "13. \u6A21\u578B\u5BF9\u8C61\u3001\u6750\u8D28",
      link: "/pages/front-end/three/13/"
    },
    {
      text: "14. \u5C42\u7EA7\u6A21\u578B\uFF08\u573A\u666F\u56FE\uFF09",
      link: "/pages/front-end/three/14/"
    },
    {
      text: "15. \u7EB9\u7406\u8D34\u56FE",
      link: "/pages/front-end/three/15/"
    },
    {
      text: "16. \u8F85\u52A9\u5668\u6C47\u603B",
      link: "/pages/front-end/three/16/"
    },
    {
      text: "17. \u52A0\u8F7DGLTF\u6A21\u578B",
      link: "/pages/front-end/three/17/"
    },
    {
      text: "18. PBR\u6750\u8D28\u4E0E\u7EB9\u7406\u8D34\u56FE",
      link: "/pages/front-end/three/18/"
    },
    {
      text: "19. \u751F\u6210\u66F2\u7EBF\u3001\u51E0\u4F55\u4F53",
      link: "/pages/front-end/three/19/"
    },
    {
      text: "20. Shape",
      link: "/pages/front-end/three/20/"
    },
    {
      text: "21. EdgesGeometry",
      link: "/pages/front-end/three/21/"
    },
    {
      text: "22. \u51E0\u4F55\u4F53\u989C\u8272\u76F8\u5173",
      link: "/pages/front-end/three/22/"
    },
    {
      text: "23. \u7B80\u6613\u8DF3\u4E00\u8DF3",
      link: "/pages/front-end/three/23/"
    },
    {
      text: "24. \u5149\u6E90\u548C\u9634\u5F71",
      link: "/pages/front-end/three/24/"
    },
    {
      text: "25. \u7CBE\u7075\u6A21\u578B",
      link: "/pages/front-end/three/25/"
    },
    {
      text: "26. \u5C04\u7EBF\u62FE\u53D6\u6A21\u578B",
      link: "/pages/front-end/three/26/"
    },
    {
      text: "27. \u573A\u666F\u6807\u6CE8\u6807\u7B7E\u4FE1\u606F",
      link: "/pages/front-end/three/27/"
    },
    {
      text: "28. \u5173\u952E\u5E27\u52A8\u753B",
      link: "/pages/front-end/three/28/"
    }
  ]
};

// docs/pages/front-end/statistic/index.ts
var statisticTopNav = {
  text: "\u6C47\u603B",
  link: "/pages/front-end/statistic/basic/"
};
var statisticSideBar = {
  "/pages/front-end/statistic/": [
    {
      text: "\u57FA\u7840",
      link: "/pages/front-end/statistic/basic/"
    },
    {
      text: "\u6846\u67B6\u53CA\u76F8\u5173",
      collapsed: false,
      items: [
        { text: "Vue", link: "/pages/front-end/statistic/framework/vue" },
        { text: "React", link: "/pages/front-end/statistic/framework/react" },
        { text: "\u7EC4\u4EF6\u5E93\u3001\u5DE5\u5177", link: "/pages/front-end/statistic/framework/tools" }
      ]
    },
    {
      text: "\u5206\u4EAB\u3001\u6536\u85CF\u3001\u5B9E\u4E60\u5E73\u53F0",
      link: "/pages/front-end/statistic/platform/"
    },
    {
      text: "WebGIS",
      link: "/pages/front-end/statistic/web-gis/"
    },
    {
      text: "\u5176\u4ED6",
      collapsed: false,
      items: [
        { text: "\u6709\u7528\u7684\u7B2C\u4E09\u65B9\u5E93", link: "/pages/front-end/statistic/other/useful-library/" },
        { text: "\u8D44\u6E90\u7F51\u7AD9", link: "/pages/front-end/statistic/other/resources-website/" },
        { text: "\u7EDF\u8BA1\u7F51\u7AD9", link: "/pages/front-end/statistic/other/statistic-website/" },
        { text: "\u5DE5\u5177\u7F51\u7AD9", link: "/pages/front-end/statistic/other/tools-website/" },
        { text: "\u670D\u52A1\u5668\u90E8\u7F72", link: "/pages/front-end/statistic/other/website-deployment/" }
      ]
    }
  ]
};

// docs/pages/front-end/index.ts
var frontEndTopNav = {
  text: "\u524D\u7AEF",
  items: [
    statisticTopNav,
    {
      text: "\u7B14\u8BB0",
      items: [basicTopNav, threeTopNav]
    }
  ]
};
var frontEndSideBar = {
  ...basicSidebar,
  ...threeSidebar,
  ...statisticSideBar
};

// docs/pages/python/basic/index.ts
var basicTopNav2 = {
  text: "\u57FA\u7840",
  link: "/pages/python/basic/syntax/syntax1"
};
var basicSidebar2 = {
  "/pages/python/basic/": [
    {
      text: "\u8BED\u6CD5",
      collapsed: false,
      items: [
        {
          text: "\u8BED\u6CD51",
          link: "/pages/python/basic/syntax/syntax1"
        },
        {
          text: "\u8BED\u6CD52",
          link: "/pages/python/basic/syntax/syntax2"
        },
        {
          text: "\u8BED\u6CD53",
          link: "/pages/python/basic/syntax/syntax3"
        },
        {
          text: "\u8BED\u6CD54",
          link: "/pages/python/basic/syntax/syntax4"
        },
        {
          text: "\u8BED\u6CD55",
          link: "/pages/python/basic/syntax/syntax5"
        }
      ]
    },
    {
      text: "\u79D1\u5B66\u8BA1\u7B97\u4E0E\u53EF\u89C6\u5316",
      collapsed: false,
      items: [
        {
          text: "numpy",
          collapsed: true,
          items: [
            {
              text: "numpy1",
              link: "/pages/python/basic/science-compute/numpy1"
            },
            {
              text: "numpy2",
              link: "/pages/python/basic/science-compute/numpy2"
            }
          ]
        },
        {
          text: "pandas",
          collapsed: true,
          items: [
            {
              text: "pandas1",
              link: "/pages/python/basic/science-compute/pandas1"
            },
            {
              text: "pandas2",
              link: "/pages/python/basic/science-compute/pandas2"
            },
            {
              text: "pandas3",
              link: "/pages/python/basic/science-compute/pandas3"
            },
            {
              text: "pandas4",
              link: "/pages/python/basic/science-compute/pandas4"
            },
            {
              text: "pandas5",
              link: "/pages/python/basic/science-compute/pandas5"
            }
          ]
        },
        {
          text: "matplotlib",
          collapsed: true,
          items: [
            {
              text: "matplotlib1",
              link: "/pages/python/basic/science-compute/matplotlib1"
            },
            {
              text: "matplotlib2",
              link: "/pages/python/basic/science-compute/matplotlib2"
            }
          ]
        }
      ]
    },
    {
      text: "\u4E00\u4E9B\u57FA\u672C\u7684\u5E93",
      collapsed: false,
      items: [
        {
          text: "os",
          link: "/pages/python/basic/library/os"
        },
        {
          text: "pyautogui",
          link: "/pages/python/basic/library/pyautogui"
        },
        {
          text: "tkinter",
          link: "/pages/python/basic/library/tkinter"
        }
      ]
    }
  ]
};

// docs/pages/python/network/index.ts
var networkTopNav = {
  text: "\u7F51\u7EDC",
  link: "/pages/python/network/back-end/fastapi"
};
var networkSideBar = {
  "/pages/python/network/": [
    {
      text: "\u540E\u7AEF\u76F8\u5173",
      items: [
        {
          text: "FastAPI",
          link: "/pages/python/network/back-end/fastapi"
        },
        {
          text: "PyMongo",
          link: "/pages/python/network/back-end/pymongo"
        }
      ]
    },
    {
      text: "\u722C\u866B",
      collapsed: false,
      items: [
        {
          text: "requests",
          link: "/pages/python/network/spider/requests"
        },
        {
          text: "BeautifulSoup",
          link: "/pages/python/network/spider/BeautifulSoup"
        },
        {
          text: "xpath",
          link: "/pages/python/network/spider/Xpath"
        },
        {
          text: "\u6B63\u5219\u8868\u8FBE\u5F0F",
          link: "/pages/python/network/spider/re"
        },
        {
          text: "PyQuery",
          link: "/pages/python/network/spider/PyQuery"
        },
        {
          text: "cookie\u3001\u9632\u76D7\u94FE",
          link: "/pages/python/network/spider/cookie\u3001\u9632\u76D7\u94FE"
        },
        {
          text: "\u591A\u7EBF\u7A0B\u3001\u591A\u8FDB\u7A0B",
          link: "/pages/python/network/spider/\u591A\u7EBF\u7A0B\u3001\u591A\u8FDB\u7A0B"
        },
        {
          text: "\u5F02\u6B65",
          link: "/pages/python/network/spider/\u5F02\u6B65"
        },
        {
          text: "Selenium",
          link: "/pages/python/network/spider/Selenium"
        },
        {
          text: "JS\u9006\u5411",
          link: "/pages/python/network/spider/JS\u9006\u5411"
        },
        {
          text: "Scrapy",
          link: "/pages/python/network/spider/Scrapy"
        }
      ]
    }
  ]
};

// docs/pages/python/statistic/index.ts
var statisticTopNav2 = {
  text: "\u6C47\u603B",
  link: "/pages/python/statistic/all"
};
var statisticSideBar2 = {
  "/pages/python/statistic/": [
    {
      text: "\u6C47\u603B",
      link: "/pages/python/statistic/all"
    }
  ]
};

// docs/pages/python/index.ts
var pythonTopNav = {
  text: "Python",
  items: [
    statisticTopNav2,
    {
      text: "\u7B14\u8BB0",
      items: [basicTopNav2, networkTopNav]
    }
  ]
};
var pythonSideBar = {
  ...basicSidebar2,
  ...networkSideBar,
  ...statisticSideBar2
};

// docs/constant/index.ts
var base = "/mySite/";

// docs/.vitepress/config.mts
var config_default = defineConfig({
  title: "mySite",
  base,
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/assets/logo.svg",
    siteTitle: false,
    nav: [frontEndTopNav, pythonTopNav],
    darkModeSwitchLabel: "\u5916\u89C2",
    sidebarMenuLabel: "\u83DC\u5355",
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    outline: [2, 6],
    outlineTitle: "\u672C\u9875\u76EE\u5F55",
    lightModeSwitchTitle: "\u5207\u6362\u4E3A\u6D45\u8272\u6A21\u5F0F",
    darkModeSwitchTitle: "\u5207\u6362\u4E3A\u6DF1\u8272\u6A21\u5F0F",
    sidebar: {
      ...frontEndSideBar,
      ...pythonSideBar
    },
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    lastUpdated: {
      // 最后更新时间
      text: "\u66F4\u65B0\u4E8E",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium"
      }
    },
    search: {
      // 搜索
      provider: "local"
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
  lastUpdated: true
  // 最后更新时间
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy9wYWdlcy9mcm9udC1lbmQvYmFzaWMvaW5kZXgudHMiLCAiZG9jcy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvaW5kZXgudHMiLCAiZG9jcy9wYWdlcy9mcm9udC1lbmQvc3RhdGlzdGljL2luZGV4LnRzIiwgImRvY3MvcGFnZXMvZnJvbnQtZW5kL2luZGV4LnRzIiwgImRvY3MvcGFnZXMvcHl0aG9uL2Jhc2ljL2luZGV4LnRzIiwgImRvY3MvcGFnZXMvcHl0aG9uL25ldHdvcmsvaW5kZXgudHMiLCAiZG9jcy9wYWdlcy9weXRob24vc3RhdGlzdGljL2luZGV4LnRzIiwgImRvY3MvcGFnZXMvcHl0aG9uL2luZGV4LnRzIiwgImRvY3MvY29uc3RhbnQvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxteVdlYnNpdGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxteVdlYnNpdGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215V2Vic2l0ZS9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcyc7XG4vLyBcdTk4NzZcdTkwRThcdTU0OENcdTVERTZcdTRGQTdcdTVCRkNcdTgyMkFcdTkxNERcdTdGNkVcbmltcG9ydCB7IGZyb250RW5kVG9wTmF2LCBmcm9udEVuZFNpZGVCYXIgfSBmcm9tICcuLi9wYWdlcy9mcm9udC1lbmQnO1xuaW1wb3J0IHsgcHl0aG9uVG9wTmF2LCBweXRob25TaWRlQmFyIH0gZnJvbSAnLi4vcGFnZXMvcHl0aG9uJztcbi8vIGJhc2VcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgdGl0bGU6ICdteVNpdGUnLFxuICAgIGJhc2UsXG4gICAgZGVzY3JpcHRpb246ICdBIFZpdGVQcmVzcyBTaXRlJyxcbiAgICB0aGVtZUNvbmZpZzoge1xuICAgICAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG4gICAgICAgIGxvZ286ICcvYXNzZXRzL2xvZ28uc3ZnJyxcbiAgICAgICAgc2l0ZVRpdGxlOiBmYWxzZSxcbiAgICAgICAgbmF2OiBbZnJvbnRFbmRUb3BOYXYsIHB5dGhvblRvcE5hdl0sXG4gICAgICAgIGRhcmtNb2RlU3dpdGNoTGFiZWw6ICdcdTU5MTZcdTg5QzInLFxuICAgICAgICBzaWRlYmFyTWVudUxhYmVsOiAnXHU4M0RDXHU1MzU1JyxcbiAgICAgICAgcmV0dXJuVG9Ub3BMYWJlbDogJ1x1NTZERVx1NTIzMFx1OTg3Nlx1OTBFOCcsXG4gICAgICAgIG91dGxpbmU6IFsyLCA2XSxcbiAgICAgICAgb3V0bGluZVRpdGxlOiAnXHU2NzJDXHU5ODc1XHU3NkVFXHU1RjU1JyxcbiAgICAgICAgbGlnaHRNb2RlU3dpdGNoVGl0bGU6ICdcdTUyMDdcdTYzNjJcdTRFM0FcdTZENDVcdTgyNzJcdTZBMjFcdTVGMEYnLFxuICAgICAgICBkYXJrTW9kZVN3aXRjaFRpdGxlOiAnXHU1MjA3XHU2MzYyXHU0RTNBXHU2REYxXHU4MjcyXHU2QTIxXHU1RjBGJyxcblxuICAgICAgICBzaWRlYmFyOiB7XG4gICAgICAgICAgICAuLi5mcm9udEVuZFNpZGVCYXIsXG4gICAgICAgICAgICAuLi5weXRob25TaWRlQmFyXG4gICAgICAgIH0sXG4gICAgICAgIHNvY2lhbExpbmtzOiBbeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MnIH1dLFxuICAgICAgICBsYXN0VXBkYXRlZDoge1xuICAgICAgICAgICAgLy8gXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XG4gICAgICAgICAgICB0ZXh0OiAnXHU2NkY0XHU2NUIwXHU0RThFJyxcbiAgICAgICAgICAgIGZvcm1hdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBkYXRlU3R5bGU6ICdmdWxsJyxcbiAgICAgICAgICAgICAgICB0aW1lU3R5bGU6ICdtZWRpdW0nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgLy8gXHU2NDFDXHU3RDIyXG4gICAgICAgICAgICBwcm92aWRlcjogJ2xvY2FsJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtYXJrZG93bjoge1xuICAgICAgICAvLyBcdTY2M0VcdTc5M0FcdTg4NENcdTUzRjdcbiAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgICAgIC8vIFx1NTZGRVx1NzI0N1x1NjFEMlx1NTJBMFx1OEY3RFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgbGF6eUxvYWRpbmc6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbGFzdFVwZGF0ZWQ6IHRydWUgLy8gXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcbXlXZWJzaXRlXFxcXGRvY3NcXFxccGFnZXNcXFxcZnJvbnQtZW5kXFxcXGJhc2ljXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxteVdlYnNpdGVcXFxcZG9jc1xcXFxwYWdlc1xcXFxmcm9udC1lbmRcXFxcYmFzaWNcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215V2Vic2l0ZS9kb2NzL3BhZ2VzL2Zyb250LWVuZC9iYXNpYy9pbmRleC50c1wiO2V4cG9ydCBjb25zdCBiYXNpY1RvcE5hdiA9IHtcclxuICAgIHRleHQ6ICdcdTU3RkFcdTc4NDAnLFxyXG4gICAgbGluazogJy9wYWdlcy9mcm9udC1lbmQvYmFzaWMvaHRtbCdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBiYXNpY1NpZGViYXIgPSB7XHJcbiAgICAnL3BhZ2VzL2Zyb250LWVuZC9iYXNpYy8nOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnMS4gSFRNTCcsXHJcbiAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0hUTUwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvZnJvbnQtZW5kL2Jhc2ljL2h0bWwnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdIVE1MNScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9mcm9udC1lbmQvYmFzaWMvaHRtbDUnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzIuIENTUycsXHJcbiAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NTUycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9mcm9udC1lbmQvYmFzaWMvY3NzJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ1NTMycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9mcm9udC1lbmQvYmFzaWMvY3NzMydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnMy4gSmF2YVNjcmlwdCcsXHJcbiAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0phdmFTY3JpcHRcdTU3RkFcdTc4NDAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvZnJvbnQtZW5kL2Jhc2ljL2phdmFzY3JpcHQtYmFzaWMnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdKYXZhU2NyaXB0XHU1QkY5XHU4QzYxJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL2Zyb250LWVuZC9iYXNpYy9qYXZhc2NyaXB0LW9iamVjdCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1dlYiBBUElzJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL2Zyb250LWVuZC9iYXNpYy9qYXZhc2NyaXB0LVdlYkFQSXMnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzQuIEFKQVgnLFxyXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBSkFYJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL2Zyb250LWVuZC9iYXNpYy9hamF4J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXG15V2Vic2l0ZVxcXFxkb2NzXFxcXHBhZ2VzXFxcXGZyb250LWVuZFxcXFx0aHJlZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbXlXZWJzaXRlXFxcXGRvY3NcXFxccGFnZXNcXFxcZnJvbnQtZW5kXFxcXHRocmVlXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9teVdlYnNpdGUvZG9jcy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvaW5kZXgudHNcIjtleHBvcnQgY29uc3QgdGhyZWVUb3BOYXYgPSB7XHJcbiAgICB0ZXh0OiAnVGhyZWUuanMnLFxyXG4gICAgbGluazogJy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvMS8nXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdGhyZWVTaWRlYmFyID0ge1xyXG4gICAgJy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvJzogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzEuIEhlbGxvIEN1YmUnLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzEvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnMi4gXHU3RjUxXHU2ODNDXHU2NzUwXHU4RDI4JyxcclxuICAgICAgICAgICAgbGluazonL3BhZ2VzL2Zyb250LWVuZC90aHJlZS8yLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzMuIFx1NTE0OVx1NkU5MCcsXHJcbiAgICAgICAgICAgIGxpbms6Jy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvMy8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICc0LiBcdThGNjhcdTkwNTNcdTYzQTdcdTUyMzZcdTU2NjgnLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzQvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnNS4gXHU2RTMyXHU2N0QzXHU1NjY4XHU4QkJFXHU3RjZFXHU1M0NBXHU2RTMyXHU2N0QzXHU1RkFBXHU3M0FGJyxcclxuICAgICAgICAgICAgbGluazonL3BhZ2VzL2Zyb250LWVuZC90aHJlZS81LydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzYuIENhbnZhc1x1NzUzQlx1NUUwM1x1NUUwM1x1NUM0MFx1NTQ4Q1x1NTE2OFx1NUM0RicsXHJcbiAgICAgICAgICAgIGxpbms6Jy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvMy8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICc3LiBnc2FwXHU1RTkzJyxcclxuICAgICAgICAgICAgbGluazonL3BhZ2VzL2Zyb250LWVuZC90aHJlZS83LydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzguIFx1NUUzOFx1ODlDMVx1NTFFMFx1NEY1NVx1NEY1MycsXHJcbiAgICAgICAgICAgIGxpbms6Jy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvOC8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICc5LiBcdTUxRTBcdTRGNTVcdTRGNTNCdWZmZXJHZW9tZXRyeScsXHJcbiAgICAgICAgICAgIGxpbms6Jy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvOS8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcxMC4gXHU3MEI5XHU2QTIxXHU1NzhCUG9pbnRzJyxcclxuICAgICAgICAgICAgbGluazonL3BhZ2VzL2Zyb250LWVuZC90aHJlZS8xMC8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcxMS4gXHU3RUJGXHU2QTIxXHU1NzhCTGluZScsXHJcbiAgICAgICAgICAgIGxpbms6Jy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvMTEvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnMTIuIFx1N0Y1MVx1NjgzQ1x1MzAwMVx1NzBCOVx1MzAwMVx1N0VCRlx1NTNDQVx1NUJGOVx1NUU5NFx1Njc1MFx1OEQyOFx1NjAzQlx1N0VEMycsXHJcbiAgICAgICAgICAgIGxpbms6Jy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvMTIvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnMTMuIFx1NkEyMVx1NTc4Qlx1NUJGOVx1OEM2MVx1MzAwMVx1Njc1MFx1OEQyOCcsXHJcbiAgICAgICAgICAgIGxpbms6Jy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvMTMvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnMTQuIFx1NUM0Mlx1N0VBN1x1NkEyMVx1NTc4Qlx1RkYwOFx1NTczQVx1NjY2Rlx1NTZGRVx1RkYwOScsXHJcbiAgICAgICAgICAgIGxpbms6Jy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvMTQvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnMTUuIFx1N0VCOVx1NzQwNlx1OEQzNFx1NTZGRScsXHJcbiAgICAgICAgICAgIGxpbms6Jy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvMTUvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnMTYuIFx1OEY4NVx1NTJBOVx1NTY2OFx1NkM0N1x1NjAzQicsXHJcbiAgICAgICAgICAgIGxpbms6Jy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvMTYvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnMTcuIFx1NTJBMFx1OEY3REdMVEZcdTZBMjFcdTU3OEInLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzE3LydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzE4LiBQQlJcdTY3NTBcdThEMjhcdTRFMEVcdTdFQjlcdTc0MDZcdThEMzRcdTU2RkUnLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzE4LydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzE5LiBcdTc1MUZcdTYyMTBcdTY2RjJcdTdFQkZcdTMwMDFcdTUxRTBcdTRGNTVcdTRGNTMnLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzE5LydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzIwLiBTaGFwZScsXHJcbiAgICAgICAgICAgIGxpbms6Jy9wYWdlcy9mcm9udC1lbmQvdGhyZWUvMjAvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnMjEuIEVkZ2VzR2VvbWV0cnknLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzIxLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzIyLiBcdTUxRTBcdTRGNTVcdTRGNTNcdTk4OUNcdTgyNzJcdTc2RjhcdTUxNzMnLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzIyLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzIzLiBcdTdCODBcdTY2MTNcdThERjNcdTRFMDBcdThERjMnLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzIzLydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzI0LiBcdTUxNDlcdTZFOTBcdTU0OENcdTk2MzRcdTVGNzEnLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzI0LydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzI1LiBcdTdDQkVcdTcwNzVcdTZBMjFcdTU3OEInLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzI1LydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzI2LiBcdTVDMDRcdTdFQkZcdTYyRkVcdTUzRDZcdTZBMjFcdTU3OEInLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzI2LydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzI3LiBcdTU3M0FcdTY2NkZcdTY4MDdcdTZDRThcdTY4MDdcdTdCN0VcdTRGRTFcdTYwNkYnLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzI3LydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJzI4LiBcdTUxNzNcdTk1MkVcdTVFMjdcdTUyQThcdTc1M0InLFxyXG4gICAgICAgICAgICBsaW5rOicvcGFnZXMvZnJvbnQtZW5kL3RocmVlLzI4LydcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6XFxcXG15V2Vic2l0ZVxcXFxkb2NzXFxcXHBhZ2VzXFxcXGZyb250LWVuZFxcXFxzdGF0aXN0aWNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG15V2Vic2l0ZVxcXFxkb2NzXFxcXHBhZ2VzXFxcXGZyb250LWVuZFxcXFxzdGF0aXN0aWNcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215V2Vic2l0ZS9kb2NzL3BhZ2VzL2Zyb250LWVuZC9zdGF0aXN0aWMvaW5kZXgudHNcIjtleHBvcnQgY29uc3Qgc3RhdGlzdGljVG9wTmF2ID0ge1xyXG4gICAgdGV4dDogJ1x1NkM0N1x1NjAzQicsXHJcbiAgICBsaW5rOiAnL3BhZ2VzL2Zyb250LWVuZC9zdGF0aXN0aWMvYmFzaWMvJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXRpc3RpY1NpZGVCYXIgPSB7XHJcbiAgICAnL3BhZ2VzL2Zyb250LWVuZC9zdGF0aXN0aWMvJzogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1NTdGQVx1Nzg0MCcsXHJcbiAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvZnJvbnQtZW5kL3N0YXRpc3RpYy9iYXNpYy8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTY4NDZcdTY3QjZcdTUzQ0FcdTc2RjhcdTUxNzMnLFxyXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnVnVlJywgbGluazogJy9wYWdlcy9mcm9udC1lbmQvc3RhdGlzdGljL2ZyYW1ld29yay92dWUnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdSZWFjdCcsIGxpbms6ICcvcGFnZXMvZnJvbnQtZW5kL3N0YXRpc3RpYy9mcmFtZXdvcmsvcmVhY3QnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTdFQzRcdTRFRjZcdTVFOTNcdTMwMDFcdTVERTVcdTUxNzcnLCBsaW5rOiAnL3BhZ2VzL2Zyb250LWVuZC9zdGF0aXN0aWMvZnJhbWV3b3JrL3Rvb2xzJyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1NTIwNlx1NEVBQlx1MzAwMVx1NjUzNlx1ODVDRlx1MzAwMVx1NUI5RVx1NEU2MFx1NUU3M1x1NTNGMCcsXHJcbiAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvZnJvbnQtZW5kL3N0YXRpc3RpYy9wbGF0Zm9ybS8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdXZWJHSVMnLFxyXG4gICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL2Zyb250LWVuZC9zdGF0aXN0aWMvd2ViLWdpcy8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTUxNzZcdTRFRDYnLFxyXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU2NzA5XHU3NTI4XHU3Njg0XHU3QjJDXHU0RTA5XHU2NUI5XHU1RTkzJywgbGluazogJy9wYWdlcy9mcm9udC1lbmQvc3RhdGlzdGljL290aGVyL3VzZWZ1bC1saWJyYXJ5LycgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1OEQ0NFx1NkU5MFx1N0Y1MVx1N0FEOScsIGxpbms6ICcvcGFnZXMvZnJvbnQtZW5kL3N0YXRpc3RpYy9vdGhlci9yZXNvdXJjZXMtd2Vic2l0ZS8nIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTdFREZcdThCQTFcdTdGNTFcdTdBRDknLCBsaW5rOiAnL3BhZ2VzL2Zyb250LWVuZC9zdGF0aXN0aWMvb3RoZXIvc3RhdGlzdGljLXdlYnNpdGUvJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU1REU1XHU1MTc3XHU3RjUxXHU3QUQ5JywgbGluazogJy9wYWdlcy9mcm9udC1lbmQvc3RhdGlzdGljL290aGVyL3Rvb2xzLXdlYnNpdGUvJyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU2NzBEXHU1MkExXHU1NjY4XHU5MEU4XHU3RjcyJywgbGluazogJy9wYWdlcy9mcm9udC1lbmQvc3RhdGlzdGljL290aGVyL3dlYnNpdGUtZGVwbG95bWVudC8nIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxteVdlYnNpdGVcXFxcZG9jc1xcXFxwYWdlc1xcXFxmcm9udC1lbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG15V2Vic2l0ZVxcXFxkb2NzXFxcXHBhZ2VzXFxcXGZyb250LWVuZFxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovbXlXZWJzaXRlL2RvY3MvcGFnZXMvZnJvbnQtZW5kL2luZGV4LnRzXCI7aW1wb3J0IHsgYmFzaWNUb3BOYXYsIGJhc2ljU2lkZWJhciB9IGZyb20gJy4vYmFzaWMnO1xyXG5pbXBvcnQgeyB0aHJlZVRvcE5hdiwgdGhyZWVTaWRlYmFyIH0gZnJvbSAnLi90aHJlZSc7XHJcbmltcG9ydCB7IHN0YXRpc3RpY1RvcE5hdiwgc3RhdGlzdGljU2lkZUJhciB9IGZyb20gJy4vc3RhdGlzdGljJztcclxuXHJcbmV4cG9ydCBjb25zdCBmcm9udEVuZFRvcE5hdiA9IHtcclxuICAgIHRleHQ6ICdcdTUyNERcdTdBRUYnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgICBzdGF0aXN0aWNUb3BOYXYsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU3QjE0XHU4QkIwJyxcclxuICAgICAgICAgICAgaXRlbXM6IFtiYXNpY1RvcE5hdiwgdGhyZWVUb3BOYXZdXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZyb250RW5kU2lkZUJhciA9IHtcclxuICAgIC4uLmJhc2ljU2lkZWJhcixcclxuICAgIC4uLnRocmVlU2lkZWJhcixcclxuICAgIC4uLnN0YXRpc3RpY1NpZGVCYXJcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxteVdlYnNpdGVcXFxcZG9jc1xcXFxwYWdlc1xcXFxweXRob25cXFxcYmFzaWNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG15V2Vic2l0ZVxcXFxkb2NzXFxcXHBhZ2VzXFxcXHB5dGhvblxcXFxiYXNpY1xcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovbXlXZWJzaXRlL2RvY3MvcGFnZXMvcHl0aG9uL2Jhc2ljL2luZGV4LnRzXCI7ZXhwb3J0IGNvbnN0IGJhc2ljVG9wTmF2ID0ge1xyXG4gICAgdGV4dDogJ1x1NTdGQVx1Nzg0MCcsXHJcbiAgICBsaW5rOiAnL3BhZ2VzL3B5dGhvbi9iYXNpYy9zeW50YXgvc3ludGF4MSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBiYXNpY1NpZGViYXIgPSB7XHJcbiAgICAnL3BhZ2VzL3B5dGhvbi9iYXNpYy8nOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU4QkVEXHU2Q0Q1JyxcclxuICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU4QkVEXHU2Q0Q1MScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vYmFzaWMvc3ludGF4L3N5bnRheDEnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdThCRURcdTZDRDUyJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL3B5dGhvbi9iYXNpYy9zeW50YXgvc3ludGF4MidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1OEJFRFx1NkNENTMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvcHl0aG9uL2Jhc2ljL3N5bnRheC9zeW50YXgzJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU4QkVEXHU2Q0Q1NCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vYmFzaWMvc3ludGF4L3N5bnRheDQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdThCRURcdTZDRDU1JyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL3B5dGhvbi9iYXNpYy9zeW50YXgvc3ludGF4NSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU3OUQxXHU1QjY2XHU4QkExXHU3Qjk3XHU0RTBFXHU1M0VGXHU4OUM2XHU1MzE2JyxcclxuICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnbnVtcHknLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnbnVtcHkxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvcHl0aG9uL2Jhc2ljL3NjaWVuY2UtY29tcHV0ZS9udW1weTEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdudW1weTInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vYmFzaWMvc2NpZW5jZS1jb21wdXRlL251bXB5MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ3BhbmRhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdwYW5kYXMxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvcHl0aG9uL2Jhc2ljL3NjaWVuY2UtY29tcHV0ZS9wYW5kYXMxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAncGFuZGFzMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL3B5dGhvbi9iYXNpYy9zY2llbmNlLWNvbXB1dGUvcGFuZGFzMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ3BhbmRhczMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vYmFzaWMvc2NpZW5jZS1jb21wdXRlL3BhbmRhczMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdwYW5kYXM0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvcHl0aG9uL2Jhc2ljL3NjaWVuY2UtY29tcHV0ZS9wYW5kYXM0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAncGFuZGFzNScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL3B5dGhvbi9iYXNpYy9zY2llbmNlLWNvbXB1dGUvcGFuZGFzNSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ21hdHBsb3RsaWInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnbWF0cGxvdGxpYjEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vYmFzaWMvc2NpZW5jZS1jb21wdXRlL21hdHBsb3RsaWIxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnbWF0cGxvdGxpYjInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vYmFzaWMvc2NpZW5jZS1jb21wdXRlL21hdHBsb3RsaWIyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTRFMDBcdTRFOUJcdTU3RkFcdTY3MkNcdTc2ODRcdTVFOTMnLFxyXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vYmFzaWMvbGlicmFyeS9vcydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ3B5YXV0b2d1aScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vYmFzaWMvbGlicmFyeS9weWF1dG9ndWknXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICd0a2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL3B5dGhvbi9iYXNpYy9saWJyYXJ5L3RraW50ZXInXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcbXlXZWJzaXRlXFxcXGRvY3NcXFxccGFnZXNcXFxccHl0aG9uXFxcXG5ldHdvcmtcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG15V2Vic2l0ZVxcXFxkb2NzXFxcXHBhZ2VzXFxcXHB5dGhvblxcXFxuZXR3b3JrXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9teVdlYnNpdGUvZG9jcy9wYWdlcy9weXRob24vbmV0d29yay9pbmRleC50c1wiO2V4cG9ydCBjb25zdCBuZXR3b3JrVG9wTmF2ID0ge1xyXG4gICAgdGV4dDogJ1x1N0Y1MVx1N0VEQycsXHJcbiAgICBsaW5rOiAnL3BhZ2VzL3B5dGhvbi9uZXR3b3JrL2JhY2stZW5kL2Zhc3RhcGknXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV0d29ya1NpZGVCYXIgPSB7XHJcbiAgICAnL3BhZ2VzL3B5dGhvbi9uZXR3b3JrLyc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6J1x1NTQwRVx1N0FFRlx1NzZGOFx1NTE3MycsXHJcbiAgICAgICAgICAgIGl0ZW1zOltcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRmFzdEFQSScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vbmV0d29yay9iYWNrLWVuZC9mYXN0YXBpJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUHlNb25nbycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vbmV0d29yay9iYWNrLWVuZC9weW1vbmdvJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTcyMkNcdTg2NkInLFxyXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdyZXF1ZXN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vbmV0d29yay9zcGlkZXIvcmVxdWVzdHMnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdCZWF1dGlmdWxTb3VwJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL3B5dGhvbi9uZXR3b3JrL3NwaWRlci9CZWF1dGlmdWxTb3VwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAneHBhdGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvcHl0aG9uL25ldHdvcmsvc3BpZGVyL1hwYXRoJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU2QjYzXHU1MjE5XHU4ODY4XHU4RkJFXHU1RjBGJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL3B5dGhvbi9uZXR3b3JrL3NwaWRlci9yZSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1B5UXVlcnknLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvcHl0aG9uL25ldHdvcmsvc3BpZGVyL1B5UXVlcnknXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdjb29raWVcdTMwMDFcdTk2MzJcdTc2RDdcdTk0RkUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvcHl0aG9uL25ldHdvcmsvc3BpZGVyL2Nvb2tpZVx1MzAwMVx1OTYzMlx1NzZEN1x1OTRGRSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1NTkxQVx1N0VCRlx1N0EwQlx1MzAwMVx1NTkxQVx1OEZEQlx1N0EwQicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vbmV0d29yay9zcGlkZXIvXHU1OTFBXHU3RUJGXHU3QTBCXHUzMDAxXHU1OTFBXHU4RkRCXHU3QTBCJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU1RjAyXHU2QjY1JyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL3B5dGhvbi9uZXR3b3JrL3NwaWRlci9cdTVGMDJcdTZCNjUnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZWxlbml1bScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vbmV0d29yay9zcGlkZXIvU2VsZW5pdW0nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdKU1x1OTAwNlx1NTQxMScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9wYWdlcy9weXRob24vbmV0d29yay9zcGlkZXIvSlNcdTkwMDZcdTU0MTEnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdTY3JhcHknLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvcGFnZXMvcHl0aG9uL25ldHdvcmsvc3BpZGVyL1NjcmFweSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxteVdlYnNpdGVcXFxcZG9jc1xcXFxwYWdlc1xcXFxweXRob25cXFxcc3RhdGlzdGljXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxteVdlYnNpdGVcXFxcZG9jc1xcXFxwYWdlc1xcXFxweXRob25cXFxcc3RhdGlzdGljXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9teVdlYnNpdGUvZG9jcy9wYWdlcy9weXRob24vc3RhdGlzdGljL2luZGV4LnRzXCI7ZXhwb3J0IGNvbnN0IHN0YXRpc3RpY1RvcE5hdiA9IHtcclxuICAgIHRleHQ6ICdcdTZDNDdcdTYwM0InLFxyXG4gICAgbGluazogJy9wYWdlcy9weXRob24vc3RhdGlzdGljL2FsbCdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdGF0aXN0aWNTaWRlQmFyID0ge1xyXG4gICAgJy9wYWdlcy9weXRob24vc3RhdGlzdGljLyc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTZDNDdcdTYwM0InLFxyXG4gICAgICAgICAgICBsaW5rOiAnL3BhZ2VzL3B5dGhvbi9zdGF0aXN0aWMvYWxsJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxteVdlYnNpdGVcXFxcZG9jc1xcXFxwYWdlc1xcXFxweXRob25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG15V2Vic2l0ZVxcXFxkb2NzXFxcXHBhZ2VzXFxcXHB5dGhvblxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovbXlXZWJzaXRlL2RvY3MvcGFnZXMvcHl0aG9uL2luZGV4LnRzXCI7aW1wb3J0IHsgYmFzaWNUb3BOYXYsIGJhc2ljU2lkZWJhciB9IGZyb20gJy4vYmFzaWMnO1xyXG5pbXBvcnQgeyBuZXR3b3JrVG9wTmF2LCBuZXR3b3JrU2lkZUJhciB9IGZyb20gJy4vbmV0d29yayc7XHJcbmltcG9ydCB7IHN0YXRpc3RpY1RvcE5hdiwgc3RhdGlzdGljU2lkZUJhciB9IGZyb20gJy4vc3RhdGlzdGljJztcclxuXHJcbmV4cG9ydCBjb25zdCBweXRob25Ub3BOYXYgPSB7XHJcbiAgICB0ZXh0OiAnUHl0aG9uJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgc3RhdGlzdGljVG9wTmF2LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1N0IxNFx1OEJCMCcsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbYmFzaWNUb3BOYXYsIG5ldHdvcmtUb3BOYXZdXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHB5dGhvblNpZGVCYXIgPSB7XHJcbiAgICAuLi5iYXNpY1NpZGViYXIsXHJcbiAgICAuLi5uZXR3b3JrU2lkZUJhcixcclxuICAgIC4uLnN0YXRpc3RpY1NpZGVCYXJcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxteVdlYnNpdGVcXFxcZG9jc1xcXFxjb25zdGFudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbXlXZWJzaXRlXFxcXGRvY3NcXFxcY29uc3RhbnRcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L215V2Vic2l0ZS9kb2NzL2NvbnN0YW50L2luZGV4LnRzXCI7ZXhwb3J0IGNvbnN0IGJhc2UgPSAnL215U2l0ZS8nO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNRLFNBQVMsb0JBQW9COzs7QUNBVyxJQUFNLGNBQWM7QUFBQSxFQUM5VCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQ1Y7QUFFTyxJQUFNLGVBQWU7QUFBQSxFQUN4QiwyQkFBMkI7QUFBQSxJQUN2QjtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0g7QUFBQSxVQUNJLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1Y7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNIO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNJLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNWO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDSDtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNJLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNWO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDSDtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1Y7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSjs7O0FDaEU4UyxJQUFNLGNBQWM7QUFBQSxFQUM5VCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQ1Y7QUFFTyxJQUFNLGVBQWU7QUFBQSxFQUN4QiwyQkFBMkI7QUFBQSxJQUN2QjtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sTUFBSztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixNQUFLO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLE1BQUs7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sTUFBSztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixNQUFLO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLE1BQUs7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sTUFBSztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixNQUFLO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLE1BQUs7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sTUFBSztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixNQUFLO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLE1BQUs7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sTUFBSztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixNQUFLO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLE1BQUs7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sTUFBSztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixNQUFLO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLE1BQUs7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sTUFBSztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixNQUFLO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLE1BQUs7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sTUFBSztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixNQUFLO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLE1BQUs7QUFBQSxJQUNU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QUNKOzs7QUNSTyxJQUFNLGVBQWU7QUFBQSxFQUN4QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDSEM7QUFBQSxJQUNBO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixPQUFPLENBQUNDLGNBQWEsYUFBYTtBQUFBLElBQ3RDO0FBQUEsRUFDSjtBQUNKO0FBRU8sSUFBTSxnQkFBZ0I7QUFBQSxFQUN6QixHQUFHQztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsR0FBR0M7QUFDUDs7O0FDbkJtUSxJQUFNLE9BQU87OztBVFFoUixJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUN4QixPQUFPO0FBQUEsRUFDUDtBQUFBLEVBQ0EsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBO0FBQUEsSUFFVCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsSUFDWCxLQUFLLENBQUMsZ0JBQWdCLFlBQVk7QUFBQSxJQUNsQyxxQkFBcUI7QUFBQSxJQUNyQixrQkFBa0I7QUFBQSxJQUNsQixrQkFBa0I7QUFBQSxJQUNsQixTQUFTLENBQUMsR0FBRyxDQUFDO0FBQUEsSUFDZCxjQUFjO0FBQUEsSUFDZCxzQkFBc0I7QUFBQSxJQUN0QixxQkFBcUI7QUFBQSxJQUVyQixTQUFTO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxHQUFHO0FBQUEsSUFDUDtBQUFBLElBQ0EsYUFBYSxDQUFDLEVBQUUsTUFBTSxVQUFVLE1BQU0scUNBQXFDLENBQUM7QUFBQSxJQUM1RSxhQUFhO0FBQUE7QUFBQSxNQUVULE1BQU07QUFBQSxNQUNOLGVBQWU7QUFBQSxRQUNYLFdBQVc7QUFBQSxRQUNYLFdBQVc7QUFBQSxNQUNmO0FBQUEsSUFDSjtBQUFBLElBQ0EsUUFBUTtBQUFBO0FBQUEsTUFFSixVQUFVO0FBQUEsSUFDZDtBQUFBLEVBQ0o7QUFBQSxFQUNBLFVBQVU7QUFBQTtBQUFBLElBRU4sYUFBYTtBQUFBO0FBQUEsSUFFYixPQUFPO0FBQUEsTUFDSCxhQUFhO0FBQUEsSUFDakI7QUFBQSxFQUNKO0FBQUEsRUFDQSxhQUFhO0FBQUE7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsiYmFzaWNUb3BOYXYiLCAiYmFzaWNTaWRlYmFyIiwgInN0YXRpc3RpY1RvcE5hdiIsICJzdGF0aXN0aWNTaWRlQmFyIiwgInN0YXRpc3RpY1RvcE5hdiIsICJiYXNpY1RvcE5hdiIsICJiYXNpY1NpZGViYXIiLCAic3RhdGlzdGljU2lkZUJhciJdCn0K
