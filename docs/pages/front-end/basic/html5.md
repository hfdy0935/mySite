---
title: HTML5
titleTemplate: 前端笔记
---

## 1. 优势

-   针对`javascript`，新增很多可操作接口
-   新增语义化标签和全局属性
-   新增能音视频标签
-   侧重语义化，对 SEO 更友好
-   可移植性好，可以大量应用在移动设备上

## 2. 新增布局标签

-   `header`双标签，整个页面/部分区域的头部
-   `footer`双标签，整个页面/部分区域的底部
-   `nav`双标签，导航，内的`a`**横向排列**
-   `article`双标签，文章、帖子、杂志、新闻、博客、评论等
-   `section`双标签，**某段**文字
-   `aside`双标签，侧边栏
-   注意：
    -   `article`中可以有多个`section`
    -   `article`比`section`更强调独立性

## 3. 新增状态标签

-   `meter`

    -   定义已知内的测量标量
    -   `max`最大默认 1、`min`最小默认 0、`value`当前，`optimum`最佳
    -   <10 危险红色，10-20 警告橙色，>20 正常
    -   可通过 CSS 设置宽高

    ```html
    <meter max="100" min="0" value="5" low="10" high="20" optimum="80"></meter>
    <meter max="100" min="0" value="15" low="10" high="20" optimum="80"></meter>
    <meter max="100" min="0" value="60" low="10" high="20" optimum="80"></meter>meter>
    ```

    <meter max="100" min="0" value="5" low="10" high="20" optimum="80"></meter>
    <meter max="100" min="0" value="15" low="10" high="20" optimum="80"></meter>
    <meter max="100" min="0" value="60" low="10" high="20" optimum="80"></meter>

-   `progress`
    -   显示某个任务完成的进度指示器
    -   `max`，`value`
    -   可通过 CSS 设置宽高
    ```html
    <progress max="100" value="70"></progress>
    ```
    <progress max="100" value="70"></progress>

## 4. 新增列表标签

-   `datalist`，搜索框的关键字
    -   双标签，内有 option 标签，不同 value
    -   输入框使用`list="id"`，通过 id 和`datalist`联系起来
-   `details`用于展示问题和答案，或对专有名词进行解释

    -   双标签
    -   内有`summary`双标签，用于指定问题或专有名词，后面写其他标签

    ```html
    <form action="#">
        <input type="text" list="name" />
        <input type="submit" value="搜索" />
    </form>
    <datalist id="name">
        <option value="周杰伦">周杰伦</option>
        <option value="周冬雨">周冬雨</option>
        <option value="马冬梅">马冬梅</option>
        <option value="温兆伦">温兆伦</option>
    </datalist>
    <details>
        <summary>如何一夜暴富？</summary>
        <p>中彩票</p>
        <p>做梦</p>
    </details>
    ```

      <form action="#">
          <input type="text" list="name">
          <input type="submit" value="搜索">
      </form>
      <datalist id="name">
          <option value="周杰伦">周杰伦</option>
          <option value="周冬雨">周冬雨</option>
          <option value="马冬梅">马冬梅</option>
          <option value="温兆伦">温兆伦</option>
      </datalist>
      <details>
          <summary>如何一夜暴富？</summary>
          <p>中彩票</p>
          <p>做梦</p>
      </details>

## 5. 新增文本标签

-   `ruby`双标签，注音
    -   内写文本
    -   内`rt`双标签写拼音
-   `mark`双标签，标记文本，用于搜索结果中的关键字等
    ```html
    <ruby>
        <span>魑魅魍魉</span>
        <rt>chī mèi wǎng liǎng</rt>
    </ruby>
    <br /><br /><br />
    <div>
        <ruby>
            <span>魑</span>
            <rt>chī</rt>
        </ruby>
        <ruby>
            <span>魅</span>
            <rt>mèi</rt>
        </ruby>
    </div>
    <p>Lorem ipsum <mark>dolor</mark> sit amet.</p>
    ```
      <ruby>
          <span>魑魅魍魉</span>
          <rt>chī mèi wǎng liǎng</rt>
      </ruby>
      <br><br><br>
      <div>
          <ruby>
              <span>魑</span>
              <rt>chī</rt>
          </ruby>
          <ruby>
              <span>魅</span>
              <rt>mèi</rt>
          </ruby>
      </div>
      <p>Lorem ipsum <mark>dolor</mark> sit amet.</p>

## 6. 新增表单控件标签

-   `input`输入文本/密码标签、`textarea`的属性`placeholder`，提示文本
-   `required`必填项
-   `autofocus`自动获取焦点
-   `autocomplete="on"`获取历史填写记录，填写提示框，不能用于密码和多行
-   `pattern`输入不为空的情况下，正则表达式匹配所填，限制不了多行输入

## 7. 表单新增属性

-   `input`的`file`
    -   `email`、`url`、`number`、
    -   `search`、`tel`、`range`、
    -   `color`、`date`、`month`、
    -   `week`、`time`、`datetime-local`
-   `form`
    -   `novalidate`，提交时不验证所有的标签

## 8. 新增视频标签

-   `video`
    -   属性`src`、`width`、`height`，或用 CSS 设置宽高，保持比例（通常设置宽/高，一个）
    -   属性`controls`、`autoplay`、`loop`、`muted`静音、`poster`封面地址、`preload`预加载

## 9. 新增音频标签

-   `audio`
    -   `src`、`width`、`controls`、`loop`、`autoplay`、`muted`、`preload`

## 10. 新增全局属性

-   `contenteditable`：`true`、`false`，用户是否可编辑
-   `draggable`：`true`、`false`，是否可拖动
-   `hidden`：隐藏元素，占位
-   `spellcheck`：`true`、`false`，拼写检查，浏览器得开设置
-   `contextmenu`，规定元素的鼠标右键选项
-   `data-*`：把\*数据藏到该属性所在的元素，用 js 取出

## 11. HTML5 兼容性处理

```html
<!-- 设置IE总是使用最新的文档模式渲染 -->
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<!-- 优先使用webkit(Chromium)内核进行渲染，针对360等浏览器 -->
<meta name="renderer" content="webkit" />
```
