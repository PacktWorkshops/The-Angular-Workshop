import { Injectable, Component, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatMenuModule, MatToolbarModule, MatAutocompleteModule, MatFormFieldModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProfileState {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class Store {
    /**
     * @protected
     * @param {?} initialState
     */
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    /**
     * @return {?}
     */
    get state() {
        return this._state$.getValue();
    }
    /**
     * @param {?} nextState
     * @return {?}
     */
    setState(nextState) {
        this._state$.next(nextState);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProfileStore extends Store {
    constructor() {
        super(new ProfileState());
    }
    /**
     * @param {?} first_name
     * @param {?} last_name
     * @param {?} prefeered_location
     * @return {?}
     */
    updateUser(first_name, last_name, prefeered_location) {
        this.setState(Object.assign({}, this.state, { profile_data: Object.assign({}, this.state.profile_data, { first_name: first_name, last_name: last_name, prefeered_location: prefeered_location }) }));
    }
}
ProfileStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProfileStore.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProfileComponent {
    /**
     * @param {?} profile
     */
    constructor(profile) {
        this.profile = profile;
    }
}
ProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-profile',
                template: "\n<mat-toolbar color=\"primary\">\n    <div *ngIf=\"(profile.state$ | async).profile_data; let profile_details; else refresh\" class=\"card-title\">\n        {{profile_details.prefeered_location}}</div>\n      <ng-template #refresh>------- ------</ng-template>\n</mat-toolbar>\n\n<div class=\"card-image profile-large\">\n  <img src=\"/assets/components/user-icon.svg\" style=\"margin: 30px\" height=\"100\" width=\"100\"\n    alt=\"sample\" class=\"responsive-img profile-post-image\">\n</div>\n<div *ngIf=\"(profile.state$ | async).profile_data; let profile_details; else refresh\" class=\"card-title\">\n  {{profile_details.first_name}}  {{profile_details.last_name}}</div>\n<ng-template #refresh>------- ------</ng-template>\n\n\n<div class=\"example-container\">\n  <div>\n    <mat-form-field>\n      <input #firstName matInput placeholder=\"First name\">\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field>\n      <input #lastName matInput placeholder=\"Last name\">\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field>\n      <mat-select #pLocationName placeholder=\"Preferred Train Station\">\n        <mat-option value=\"Lagos, Nigeria\">Lagos, Nigeria</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n<button\n  (click)=\"profile.updateUser(firstName.value, lastName.value, pLocationName.value); firstName.value = ''; lastName.value = ''; pLocationName.value = ''\"\n  mat-raised-button color=\"accent\">Submit</button>\n",
                providers: [ProfileStore],
                styles: [""]
            }] }
];
/** @nocollapse */
ProfileComponent.ctorParameters = () => [
    { type: ProfileStore }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProfileModule {
}
ProfileModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ProfileComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    MatInputModule,
                    MatButtonModule,
                    MatSelectModule,
                    MatIconModule,
                    MatCardModule,
                    MatMenuModule,
                    MatToolbarModule,
                    MatAutocompleteModule,
                    MatFormFieldModule
                ],
                exports: [ProfileComponent]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ProfileComponent, ProfileModule, ProfileState, ProfileStore, Store as ɵa };
//# sourceMappingURL=ata-ui.js.map
