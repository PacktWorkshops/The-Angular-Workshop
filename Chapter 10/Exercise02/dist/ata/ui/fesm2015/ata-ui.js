import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiService {
    constructor() { }
}
UiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UiService.ctorParameters = () => [];
/** @nocollapse */ UiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UiService_Factory() { return new UiService(); }, token: UiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UiComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ui',
                template: `
    <p>
      ng-packagr is awesome!
    </p>
  `
            }] }
];
/** @nocollapse */
UiComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiModule {
}
UiModule.decorators = [
    { type: NgModule, args: [{
                declarations: [UiComponent],
                imports: [],
                exports: [UiComponent]
            },] }
];

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
