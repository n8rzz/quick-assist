import $ from 'jquery-browserify';
import { didWindowScroll } from '../Helpers/windowScrollPositionHelper';

const CLASS_NAMES = {
    IS_STATIC: 'mix-page-hd_static',
    IS_STICKY: 'mix-page-hd_sticky'
};

/**
 * @class StickyHeader
 * @author Nate Geslin
 */
export default class StickyHeaderView {
    constructor($element) {
        /**
         * @property $element
         * @type {JQuery|HTML Element}
         * @default $element
         */
        this.$element = $element;
        /**
        * @property _isEnabled
        * @type {boolean}
        * @default false
        */
        this._isEnabled = false;
        /**
         * Has the IS_STICKY class already been applied?
         *
        * @property _isSticky
        * @type {boolean}
        * @default galse
        */
        this._isSticky = false;


        return this._init();
    }

    /**
     * @method _init
     * @private
     * @chainable
     */
    _init() {

        return this._createChildren()
                   ._enable();
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
        if (this._isEnabled) {
            return this;
        }

        this._isEnabled = true;
        window.addEventListener('scroll', () => this._onScrollHandler());

        return this;
    }

    /**
     * @method disable
     * @public
     * @chainable
     */
    disable() {
        if (!this._isEnabled) {
            return this;
        }

        this._isEnabled = false;
        window.removeEventListener('scroll', () => this._onScrollHandler());

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

    /**
     * TODO: implement a short debouce to prevent constant checks of the window scroll position
     *
     * @method _onScrollHandler
     * @private
     * @callback
     */
    _onScrollHandler() {
        if (didWindowScroll() && !this._isSticky) {
            this.$element.removeClass(CLASS_NAMES.IS_STATIC).addClass(CLASS_NAMES.IS_STICKY);
            this._isSticky = true;

        } else if (!didWindowScroll()) {
            this.$element.removeClass(CLASS_NAMES.IS_STICKY).addClass(CLASS_NAMES.IS_STATIC);
            this._isSticky = false;
        }
    }
}
