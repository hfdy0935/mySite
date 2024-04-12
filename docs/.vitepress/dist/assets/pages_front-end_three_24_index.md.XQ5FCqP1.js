import{$ as s,S as t,R as a,aw as e}from"./chunks/framework.CL7hJqEm.js";const i="/mySite/assets/image.CT6EwExG.png",E=JSON.parse('{"title":"光源和阴影","titleTemplate":"前端笔记/three","description":"","frontmatter":{"title":"光源和阴影","titleTemplate":"前端笔记/three"},"headers":[],"relativePath":"pages/front-end/three/24/index.md","filePath":"pages/front-end/three/24/index.md","lastUpdated":null}'),n={name:"pages/front-end/three/24/index.md"},l=e('<p>☑️ <code>PointLight</code>、<code>SpotLight</code>、<code>DirectionalLight</code>可以产生阴影； <img src="'+i+`" alt="alt text" loading="lazy"></p><h2 id="_1-平行光阴影配置" tabindex="-1">1. 平行光阴影配置 <a class="header-anchor" href="#_1-平行光阴影配置" aria-label="Permalink to &quot;1. 平行光阴影配置&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">配置</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><code>.castShadow</code></td><td style="text-align:center;">产生阴影的模型对象</td></tr><tr><td style="text-align:center;"><code>.catsShadow</code></td><td style="text-align:center;">产生阴影的光源对象</td></tr><tr><td style="text-align:center;"><code>.receiveShadow</code></td><td style="text-align:center;">接收阴影的模型</td></tr><tr><td style="text-align:center;"><code>.shadowMap.enabled</code></td><td style="text-align:center;">WebGL渲染器允许阴影渲染</td></tr><tr><td style="text-align:center;"><code>.shadow.camera</code></td><td style="text-align:center;">设置光源阴影渲染范围</td></tr></tbody></table><ul><li>例子</li></ul><div class="language-tsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置产生投影的网格模型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mesh.castShadow </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 平行光</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> directionalLight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DirectionalLight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0xffffff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 光源默认不产生阴影，需要手动开启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">directionalLight.castShadow </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置渲染器，允许光源阴影渲染</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">renderer.shadowMap.enabled </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查看平行光阴影相机属性（正投影相机），有正投影相机的参数和方法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如left、right、top、bottom、near、far、position等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;阴影相机属性&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,directionalLight.shadow.camera);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_2-阴影贴图尺寸和阴影半径" tabindex="-1">2. 阴影贴图尺寸和阴影半径 <a class="header-anchor" href="#_2-阴影贴图尺寸和阴影半径" aria-label="Permalink to &quot;2. 阴影贴图尺寸和阴影半径&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">配置</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><code>light.shadow.mapSize</code></td><td style="text-align:center;">阴影贴图尺寸，把阴影看作贴图，用<code>.set(x,y)</code>设置</td></tr><tr><td style="text-align:center;"><code>light.shadow.radius</code></td><td style="text-align:center;">弱化模糊阴影边缘</td></tr></tbody></table>`,7),h=[l];function r(d,p,k,c,o,g){return a(),t("div",null,h)}const b=s(n,[["render",r]]);export{E as __pageData,b as default};