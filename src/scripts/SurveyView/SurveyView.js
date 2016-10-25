export default class StickyHeader {
    constructor($elementOrUndefined) {
        if (typeof $elementOrUndefined === 'undefined') {
            return;
        }

        this._$element = null;
        this._$trigger = null
        this._$view = null;


        return this._init($elementOrUndefined)
                   ._setupHandlers();
    }

    _init($elementOrUndefined) {
        this._$element = $elementOrUndefined;
        this._$trigger = this._$element.find('.js-surveyTrigger');
        this._$view = this._$element.find('.js-surveyFrame');

        return this;
    }

    _setupHandlers() {
        this._$trigger.on('click', (e) => this.onClick(e));

        return this;
    }

    disable() {
        this._$trigger.off('click', (e) => this.onClick(e));

        return this;
    }

    destroy() {
        this._$element = null;
        this._$trigger = null
        this._$view = null;

        return this;
    }

    onClick(e) {
        e.preventDefault();

        if (this._$view.hasClass('u-isVisuallyHidden')) {
            this._$view.removeClass('u-isVisuallyHidden');

            return;
        }

        this._$view.addClass('u-isVisuallyHidden');
    };
}
