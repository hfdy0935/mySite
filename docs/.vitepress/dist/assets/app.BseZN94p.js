import{a4 as o,ay as p,az as u,aA as l,aB as c,aC as f,aD as d,aE as m,aF as h,aG as A,aH as g,aq as P,l as _,a0 as v,p as E,z as y,aI as C,aJ as w,aK as R,E as T}from"./chunks/framework.CL7hJqEm.js";import{c as b}from"./chunks/theme.wBegIpMR.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(b),D=_({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return E(()=>{y(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&C(),w(),R(),s.setup&&s.setup(),()=>T(s.Layout)}});async function S(){globalThis.__VITEPRESS__=!0;const e=I(),a=F();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function F(){return h(D)}function I(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[])),o&&(e=!1),r},s.NotFound)}o&&S().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{S as createApp};
