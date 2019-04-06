(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@okode/ngx-custom-palette', ['exports', '@angular/core'], factory) :
    (factory((global.okode = global.okode || {}, global.okode['ngx-custom-palette'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonItemDirective = /** @class */ (function () {
        function IonItemDirective(el) {
            this.el = el;
            this.shadowCustomCss = "\n    .item-native {\n      border: none;\n      padding: 0px;\n    }\n    .item-native .item-inner {\n      border: 0px;\n      padding: 0px;\n    }\n    .item-highlight {\n      display: none !important;\n    }\n  ";
        }
        /**
         * @return {?}
         */
        IonItemDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var inputSelector = 'ion-input, ion-select, ion-textarea, ion-datetime';
                /** @type {?} */
                var input = this.el.nativeElement.querySelector(inputSelector);
                if (input && this.el.nativeElement.querySelector('ion-label')) {
                    this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
                }
                this.setShadowStyle(this.getShadow());
            };
        /**
         * @private
         * @return {?}
         */
        IonItemDirective.prototype.getShadow = /**
         * @private
         * @return {?}
         */
            function () {
                return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
            };
        /**
         * @private
         * @param {?} shadow
         * @return {?}
         */
        IonItemDirective.prototype.setShadowStyle = /**
         * @private
         * @param {?} shadow
         * @return {?}
         */
            function (shadow) {
                if (shadow) {
                    shadow.innerHTML += "<style>" + this.shadowCustomCss + "</style>";
                }
            };
        IonItemDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-item"
                    },] }
        ];
        /** @nocollapse */
        IonItemDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return IonItemDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonInputDirective = /** @class */ (function () {
        function IonInputDirective(el) {
            this.el = el;
            this.shadowCustomCss = "";
        }
        IonInputDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-input"
                    },] }
        ];
        /** @nocollapse */
        IonInputDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return IonInputDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonSelectDirective = /** @class */ (function () {
        function IonSelectDirective(el) {
            this.el = el;
            this.shadowCustomCss = "\n    .select-icon-inner {\n      left: -5px;\n      margin-top: -5px;\n      border-top: 5px solid;\n      border-right: 5px solid transparent;\n      border-left: 5px solid transparent;\n      opacity: .33;\n    }\n  ";
        }
        /**
         * @return {?}
         */
        IonSelectDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.setShadowStyle(this.getShadow());
            };
        /**
         * @private
         * @return {?}
         */
        IonSelectDirective.prototype.getShadow = /**
         * @private
         * @return {?}
         */
            function () {
                return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
            };
        /**
         * @private
         * @param {?} shadow
         * @return {?}
         */
        IonSelectDirective.prototype.setShadowStyle = /**
         * @private
         * @param {?} shadow
         * @return {?}
         */
            function (shadow) {
                if (shadow) {
                    shadow.innerHTML += "<style>" + this.shadowCustomCss + "</style>";
                }
            };
        IonSelectDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-select"
                    },] }
        ];
        /** @nocollapse */
        IonSelectDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return IonSelectDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DECLARATIONS = [
        IonItemDirective,
        IonInputDirective,
        IonSelectDirective
    ];
    var OkodeNgxCustomPaletteModule = /** @class */ (function () {
        function OkodeNgxCustomPaletteModule() {
        }
        OkodeNgxCustomPaletteModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: DECLARATIONS,
                        exports: DECLARATIONS,
                        providers: []
                    },] }
        ];
        return OkodeNgxCustomPaletteModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.OkodeNgxCustomPaletteModule = OkodeNgxCustomPaletteModule;
    exports.ɵb = IonInputDirective;
    exports.ɵa = IonItemDirective;
    exports.ɵc = IonSelectDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=okode-ngx-custom-palette.umd.js.map