# 说明
在开发 H5 页面弹窗时，默认在滑动弹窗，底下的 body 也会滚动。这种情况，只要包括弹窗的父元素禁用 touchmove 事件即可。
但假如弹窗里也有内容需要滚动，禁用父元素的 touchmove 事件会导致弹窗内的内容无法滚动。
scroll-in-modal 就是感觉 H5 端下弹窗内部内容滚动。

# 使用

```javascript
import scrollInModal from 'scrollInModal';
const containerDom = document.getElementById('container');
const scrollDom = documentt.getElementById('scroll-content');

scrollInModal(containerDom, scrollDom);
```