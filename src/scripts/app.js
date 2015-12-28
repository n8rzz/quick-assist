import $ from 'jquery-browserify';
// import BiographyCard from './BiographyCard/BiographyCardView';

/**
 * Base view controller
 *  All other views and controllers are instantiated from this class
 *
 * @class App
 * @author Nate Geslin
 */
export default class App {
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
        return this;
    }

    /**
     * @method _disable
     * @private
     * @chainable
     */
    _disable() {
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
}
