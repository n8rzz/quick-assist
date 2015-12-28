/**
 * Pixel value for the window scroll
 *
 * @const SCROLL_THRESHOLD
 * @type number
 */
const SCROLL_THRESHOLD = 40;

/**
 * Has the window scrolled beyond a pre-defined threshold
 *
 * @method didWindowScroll
 * @return {boolean}
 */
export function didWindowScroll() {
    return window.scrollY > SCROLL_THRESHOLD;
}


