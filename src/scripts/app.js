import $ from 'jquery-browserify';
import StickyHeaderView from './StickyHeader/StickyHeaderView';
import MobileNavView from './MobileNav/MobileNavView';
import SurveyView from './SurveyView/SurveyView';

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
        this.$stickyHeaderViewElement = null;
        this.stickyHeaderView = null;
        this.$mobileNavViewElement = null;
        this.mobileNavView = null;
        this.$surveyViewElement = null;
        this.surveyView = null;

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
        this.$stickyHeaderViewElement = this.$element.find('[data-controller="js-stickyHeader"]');
        this.stickyHeaderView = new StickyHeaderView(this.$stickyHeaderViewElement);
        this.$mobileNavViewElement = this.$element.find('.js-mainNavView');
        this.mobileNavView = new MobileNavView(this.$mobileNavViewElement);
        this.$surveyViewElement = this.$element.find('.js-surveyView');
        this.surveyView = new SurveyView(this.$surveyViewElement);


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
        this.stickyHeaderView.disable();
        this.mobileNavView.disable();
        this.surveyView.disable();

        return this._destroy();
    }

    /**
     * @method _destroy
     * @private
     * @chainable
     */
    _destroy() {
        this.$element = null;
        this.$stickyHeaderViewElement = null;
        this.stickyHeaderView = null;
        this.$mobileNavViewElement = null;
        this.mobileNavView = null;
        this.$surveyViewElement = null;
        this.surveyView = null;

        return this;
    }
}
