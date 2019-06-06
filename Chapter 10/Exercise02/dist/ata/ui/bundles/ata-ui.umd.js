(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ata/ui', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.ata = global.ata || {}, global.ata.ui = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiService = /** @class */ (function () {
        function UiService() {
        }
        UiService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UiService.ctorParameters = function () { return []; };
        /** @nocollapse */ UiService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UiService_Factory() { return new UiService(); }, token: UiService, providedIn: "root" });
        return UiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiComponent = /** @class */ (function () {
        function UiComponent() {
        }
        /**
         * @return {?}
         */
        UiComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        UiComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-ui',
                        template: "\n    <p>\n      ng-packagr is awesome!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        UiComponent.ctorParameters = function () { return []; };
        return UiComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiModule = /** @class */ (function () {
        function UiModule() {
        }
        UiModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [UiComponent],
                        imports: [],
                        exports: [UiComponent]
                    },] }
        ];
        return UiModule;
    }());

    exports.UiComponent = UiComponent;
    exports.UiModule = UiModule;
    exports.UiService = UiService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ata-ui.umd.js.map
