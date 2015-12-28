/**
 * @const SCROLL_THRESHOLD
 * @type number
 */
const SCROLL_THRESHOLD = 40;

/**
 * @class windowScrollPositionHelper
 * @author Nate Geslin
 */
export default class windowScrollPositionHelper {
    didScroll() {
        return window.scrollY > SCROLL_THRESHOLD;
    }
}
