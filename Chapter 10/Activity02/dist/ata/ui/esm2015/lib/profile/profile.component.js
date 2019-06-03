/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ProfileStore } from './profile.store';
export class ProfileComponent {
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
if (false) {
    /** @type {?} */
    ProfileComponent.prototype.profile;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXRhL3VpLyIsInNvdXJjZXMiOlsibGliL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFBb0IsT0FBcUI7UUFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztJQUFHLENBQUM7OztZQVA5QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHk5Q0FBdUM7Z0JBRXZDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQzs7YUFDMUI7Ozs7WUFOUSxZQUFZOzs7O0lBUU4sbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9maWxlU3RvcmUgfSBmcm9tICcuL3Byb2ZpbGUuc3RvcmUnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2ZpbGUuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtQcm9maWxlU3RvcmVdXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHVibGljIHByb2ZpbGU6IFByb2ZpbGVTdG9yZSkge30gXG59XG4iXX0=