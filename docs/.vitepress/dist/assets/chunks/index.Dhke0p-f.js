import{l as g,ax as D,R as o,Y as i,Z as u,D as S,x as e,a5 as C,X as k,ak as p,S as f,_ as m,a6 as B,a7 as I,$ as w,r as F,a0 as G,j as H,F as _,ad as M}from"./framework.CL7hJqEm.js";import{A,C as N,a as R,s as P,u as T,R as j,b as $}from"./theme.BrA1YWp_.js";const z=r=>(B("data-v-48e75644"),r=r(),I(),r),E=["href"],L=z(()=>C("br",null,null,-1)),X=["title"],Y=g({name:"SingleWebsite",__name:"SingleWebsite",props:{data:{},fontColorStyle:{}},setup(r){D(a=>({c186a3fa:(a.isDark,"white")}));const{data:c,fontColorStyle:l}=r,{logo:t="",name:d,url:s,description:y="",github:n=""}=c,h=a=>{window.open(a)};return(a,v)=>(o(),i(e(R),{hoverable:!0,class:"card"},{default:u(()=>[S(e(N),null,{avatar:u(()=>[S(e(A),{src:e(t),onClick:v[0]||(v[0]=V=>h(e(s))),style:{cursor:"pointer"}},null,8,["src"])]),title:u(()=>[C("span",{onClick:v[1]||(v[1]=V=>h(e(s))),style:p([a.fontColorStyle,{cursor:"pointer"}])},k(e(d)),5)]),description:u(()=>[e(n)?(o(),f("a",{key:0,href:e(n),style:p(a.fontColorStyle),target:"_blank"},"GitHub",12,E)):m("",!0),L,C("span",{style:p(a.fontColorStyle),title:e(y)},k(e(y)),13,X)]),_:1})]),_:1}))}}),W=w(Y,[["__scopeId","data-v-48e75644"]]),Z=r=>(B("data-v-97525ef2"),r=r(),I(),r),q=["href"],J=Z(()=>C("br",null,null,-1)),K=["title"],O=g({name:"DoubleWebsite",__name:"DoubleWebsite",props:{data:{},fontColorStyle:{}},setup(r){D(t=>({"1e493643":(t.isDark,"white")}));const c=t=>{window.open(t)},l=F("0");return(t,d)=>(o(),i(e(R),{hoverable:!0,"tab-list":t.data.map((s,y)=>({key:""+y,tab:s.name})),"active-tab-key":l.value,onTabChange:d[2]||(d[2]=s=>{l.value=s}),class:"card",style:p(t.fontColorStyle)},{default:u(()=>[S(e(N),null,{avatar:u(()=>[S(e(A),{src:t.data[l.value].logo||"",onClick:d[0]||(d[0]=s=>c(t.data[l.value].url)),style:{cursor:"pointer"}},null,8,["src"])]),title:u(()=>[C("span",{onClick:d[1]||(d[1]=s=>c(t.data[l.value].url)),style:p([t.fontColorStyle,{cursor:"pointer"}])},k(t.data[l.value].name),5)]),description:u(()=>[t.data[l.value].github?(o(),f("a",{key:0,href:t.data[l.value].github,style:p(t.fontColorStyle),target:"_blank"},"GitHub",12,q)):m("",!0),J,t.data[l.value].description?(o(),f("span",{key:1,style:p(t.fontColorStyle),title:t.data[l.value].description},k(t.data[l.value].description),13,K)):m("",!0)]),_:1})]),_:1},8,["tab-list","active-tab-key","style"]))}}),b=w(O,[["__scopeId","data-v-97525ef2"]]),Q={class:"out"},U=g({name:"WebsiteBox",__name:"index",props:{data:{}},setup(r){const{data:c}=r,l=c.length,t=Math.floor((l+1)/2),{isDark:d}=G(),s=H(()=>({color:d.value?"white":"black"})),{isStyleSame:y}=P(T());return(n,h)=>(o(),f("div",Q,[(o(!0),f(_,null,M(e(t),a=>(o(),i(e(j),{gutter:16,index:a,class:"row"},{default:u(()=>[S(e($),{span:12},{default:u(()=>[Array.isArray(n.data[a*2-2])?(o(),i(b,{key:1,data:n.data[a*2-2],fontColorStyle:s.value},null,8,["data","fontColorStyle"])):(o(),f(_,{key:0},[e(y)?(o(),i(b,{key:0,data:[n.data[a*2-2]],fontColorStyle:s.value},null,8,["data","fontColorStyle"])):(o(),i(W,{key:1,data:n.data[a*2-2],fontColorStyle:s.value},null,8,["data","fontColorStyle"]))],64))]),_:2},1024),a*2-1<e(l)?(o(),i(e($),{key:0,span:12},{default:u(()=>[Array.isArray(n.data[a*2-1])?(o(),i(b,{key:1,data:n.data[a*2-1],fontColorStyle:s.value},null,8,["data","fontColorStyle"])):(o(),f(_,{key:0},[e(y)?(o(),i(b,{key:0,data:[n.data[a*2-1]],fontColorStyle:s.value},null,8,["data","fontColorStyle"])):(o(),i(W,{key:1,data:n.data[a*2-1],fontColorStyle:s.value},null,8,["data","fontColorStyle"]))],64))]),_:2},1024)):m("",!0)]),_:2},1032,["index"]))),256))]))}}),et=w(U,[["__scopeId","data-v-e9d10719"]]),at="/mySite/";export{et as W,at as b};
