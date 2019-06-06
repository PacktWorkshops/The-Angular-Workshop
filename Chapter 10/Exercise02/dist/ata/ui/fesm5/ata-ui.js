import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UiService = /** @class */ (function () {
    function UiService() {
    }
    UiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UiService.ctorParameters = function () { return []; };
    /** @nocollapse */ UiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UiService_Factory() { return new UiService(); }, token: UiService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [UiComponent],
                    imports: [],
                    exports: [UiComponent]
                },] }
    ];
    return UiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { UiComponent, UiModule, UiService };
//# sourceMappingURL=ata-ui.js.map
