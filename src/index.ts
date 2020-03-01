/**
 * @export
 * @param {HTMLElement} 禁止滚动的容器 DOM
 * @param {HTMLElement} 可以滚动的元素 DOM
 */
export default function scrollInModal(
    containerDom: HTMLElement,
    scrollDom: HTMLElement
) {
    let startY = 0;
    containerDom.addEventListener("touchstart", e => {
        startY = e.targetTouches[0].clientY;
    });

    containerDom.addEventListener("touchmove", e => {
        let offsetHeight = scrollDom.offsetHeight,
            scrollHeight = scrollDom.scrollHeight,
            scrollTop = scrollDom.scrollTop;
        let touches = e.targetTouches;
        let curTarget: HTMLElement | null = e.target as HTMLElement;
        let isEleInScrollNode = false; // 是否是滚动容器内的 dom 元素

        while (curTarget && curTarget !== containerDom) {
            if (curTarget === scrollDom) {
                isEleInScrollNode = true;
                break;
            }
            curTarget = curTarget.parentElement;
        }

        if (isEleInScrollNode) {
            let touch = touches[0];
            let moveY = touch.clientY;
            if (moveY > startY && scrollTop === 0) {
                // 滑动到弹窗顶部临界条件
                e.preventDefault();
                return false;
            } else if (
                moveY < startY &&
                scrollTop + offsetHeight >= scrollHeight
            ) {
                // 滑动到底部临界条件
                e.preventDefault();
                return false;
            }
        } else {
            e.preventDefault();
            return false;
        }
    });
}
