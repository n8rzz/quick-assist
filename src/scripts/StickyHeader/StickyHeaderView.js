import $ from 'jquery-browserify';
// import Debouce from '../Util/Debounce';
import windowScrollPositionHelper from '../Helpers/WindowScrollPositionHelper';

const CLASS_NAMES = {
    IS_STATIC: 'mix-page-hd_static',
    IS_STICKY: 'mix-page-hd_sticky'
}

/**
 * @class StickyHeader
 * @author Nate Geslin
 */
export default class StickyHeaderView {
    constructor($element) {
        this.$element = $element;

        return this._init();
    }

    /**
     * @method _init
     * @private
     * @chainable
     */
    _init() {
        console.log('StickyHeader', this.$element);

        return this._setupHandlers()
                   ._createChildren()
                   ._enable();
    }

    /**
     * @method _setupHandlers
     * @private
     * @chainable
     */
    _setupHandlers() {
        window.addEventListener('scroll', () => this._onScrollHandler());

        return this;
    }

    /**
     * @method _createChildren
     * @private
     * @chainable
     */
    _createChildren() {
        return this;
    }

    /**
     * @method _enable
     * @private
     * @chainable
     */
    _enable() {
        return this;
    }

    /**
     * @method disable
     * @public
     * @chainable
     */
    disable() {
        return this._destroy();
    }

    /**
     * @method _destroy
     * @private
     * @chainable
     */
    _destroy() {
        this.$element = null;

        return this;
    }

    _onScrollHandler() {
        console.log('scroll');
    }
}
