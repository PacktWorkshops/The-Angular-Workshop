(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common'), require('@angular/forms'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@ata/ui', ['exports', '@angular/core', 'rxjs', '@angular/common', '@angular/forms', '@angular/material'], factory) :
    (global = global || self, factory((global.ata = global.ata || {}, global.ata.ui = {}), global.ng.core, global.rxjs, global.ng.common, global.ng.forms, global.ng.material));
}(this, function (exports, core, rxjs, common, forms, material) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileState = /** @class */ (function () {
        function ProfileState() {
        }
        return ProfileState;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    Store = /** @class */ (function () {
        function Store(initialState) {
            this._state$ = new rxjs.BehaviorSubject(initialState);
            this.state$ = this._state$.asObservable();
        }
        Object.defineProperty(Store.prototype, "state", {
            get: /**
             * @return {?}
             */
            function () {
                return this._state$.getValue();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} nextState
         * @return {?}
         */
        Store.prototype.setState = /**
         * @param {?} nextState
         * @return {?}
         */
        function (nextState) {
            this._state$.next(nextState);
        };
        return Store;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileStore = /** @class */ (function (_super) {
        __extends(ProfileStore, _super);
        function ProfileStore() {
            return _super.call(this, new ProfileState()) || this;
        }
        /**
         * @param {?} first_name
         * @param {?} last_name
         * @param {?} prefeered_location
         * @return {?}
         */
        ProfileStore.prototype.updateUser = /**
         * @param {?} first_name
         * @param {?} last_name
         * @param {?} prefeered_location
         * @return {?}
         */
        function (first_name, last_name, prefeered_location) {
            this.setState(__assign({}, this.state, { profile_data: __assign({}, this.state.profile_data, { first_name: first_name, last_name: last_name, prefeered_location: prefeered_location }) }));
        };
        ProfileStore.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ProfileStore.ctorParameters = function () { return []; };
        return ProfileStore;
    }(Store));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileComponent = /** @class */ (function () {
        function ProfileComponent(profile) {
            this.profile = profile;
        }
        ProfileComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-profile',
                        template: "\n<mat-toolbar color=\"primary\">\n    <div *ngIf=\"(profile.state$ | async).profile_data; let profile_details; else refresh\" class=\"card-title\">\n        {{profile_details.prefeered_location}}</div>\n      <ng-template #refresh>------- ------</ng-template>\n</mat-toolbar>\n\n<div class=\"card-image profile-large\">\n  <img src=\"/assets/components/user-icon.svg\" style=\"margin: 30px\" height=\"100\" width=\"100\"\n    alt=\"sample\" class=\"responsive-img profile-post-image\">\n</div>\n<div *ngIf=\"(profile.state$ | async).profile_data; let profile_details; else refresh\" class=\"card-title\">\n  {{profile_details.first_name}}  {{profile_details.last_name}}</div>\n<ng-template #refresh>------- ------</ng-template>\n\n\n<div class=\"example-container\">\n  <div>\n    <mat-form-field>\n      <input #firstName matInput placeholder=\"First name\">\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field>\n      <input #lastName matInput placeholder=\"Last name\">\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field>\n      <mat-select #pLocationName placeholder=\"Preferred Train Station\">\n        <mat-option value=\"Lagos, Nigeria\">Lagos, Nigeria</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n<button\n  (click)=\"profile.updateUser(firstName.value, lastName.value, pLocationName.value); firstName.value = ''; lastName.value = ''; pLocationName.value = ''\"\n  mat-raised-button color=\"accent\">Submit</button>\n",
                        providers: [ProfileStore],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ProfileComponent.ctorParameters = function () { return [
            { type: ProfileStore }
        ]; };
        return ProfileComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileModule = /** @class */ (function () {
        function ProfileModule() {
        }
        ProfileModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ProfileComponent],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            material.MatInputModule,
                            material.MatButtonModule,
                            material.MatSelectModule,
                            material.MatIconModule,
                            material.MatCardModule,
                            material.MatMenuModule,
                            material.MatToolbarModule,
                            material.MatAutocompleteModule,
                            material.MatFormFieldModule
                        ],
                        exports: [ProfileComponent]
                    },] }
        ];
        return ProfileModule;
    }());

    exports.ProfileComponent = ProfileComponent;
    exports.ProfileModule = ProfileModule;
    exports.ProfileState = ProfileState;
    exports.ProfileStore = ProfileStore;
    exports.ɵa = Store;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ata-ui.umd.js.map
