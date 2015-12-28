import $ from 'jquery-browserify';

/**
 * @property CLASS_NAMES
 * @type {Object}
 * @constant
 */
const CLASS_NAMES = {
    IS_OPEN: 'trigger_isOpen',
    IS_HIDDEN_SM: 'u-isHiddenSM'
}

/**
 * Class to handle the hiding and showing of the mobile navigation menu
 *
 *
 * @class MobileNavView
 * @author Nate Geslin
 */
export default class MobileNavView {
    constructor($element) {
        /**
         * @property $element
         * @type {JQuery|HTML Element}
         * @default .js-mobileNav
         */
        this.$element = $element;
        /**
         * @property _isEnabled
         * @type {boolean}
         * @default false
         * @private
         */
        this._isEnabled = false;
        /**
         * @property $manNav
         * @type {JQuery|HTML Element}
         * @default null
         */
        this.$mainNav = null;
        /**
         * @property $mobileNavTrigger
         * @type {JQuery|HTML Element}
         * @default null
         */
        this.$mobileNavTrigger = null;


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
        this.$mainNav = this.$element.find('.js-mainNavList');
        this.$mobileNavTrigger = this.$element.find('.js-mobileNavTrigger');

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
        this.$mobileNavTrigger.on('click', (event) => this._onClickHandler(event));
        this.$mobileNavTrigger.on('touchstart', (event => this._onClickHandler(event)));

        return this;
    }

    /**
     * @method _disable
     * @public
     * @chainable
     */
    disable() {
        if (!this._isEnabled) {
            return this;
        }

        this._isEnabled = false;
        this.$mobileNavTrigger.off('click', () => this._onClickHandler());
        this.$mobileNavTrigger.of('touchstart', (event => this._onClickHandler(event)));

        return this._destroy();
    }

    /**
     * @method _destroy
     * @private
     * @chainable
     */
    _destroy() {
        this.$mainNav = null;
        this.$mobileNavTrigger = null;

        return this;
    }

    /**
     * @method _onClickHandler
     * @param {Event}
     * @callback
     */
    _onClickHandler(event) {
        event.preventDefault()

        this.$mobileNavTrigger.toggleClass(CLASS_NAMES.IS_OPEN);
        this.$mainNav.toggleClass(CLASS_NAMES.IS_HIDDEN_SM);
    }
}
