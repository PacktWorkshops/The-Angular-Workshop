/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
/**
 * @template T
 */
var /**
 * @template T
 */
Store = /** @class */ (function () {
    function Store(initialState) {
        this._state$ = new BehaviorSubject(initialState);
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
 * @template T
 */
export { Store };
if (false) {
    /** @type {?} */
    Store.prototype.state$;
    /**
     * @type {?}
     * @private
     */
    Store.prototype._state$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXRhL3VpLyIsInNvdXJjZXMiOlsibGliL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7O0FBRWpEOzs7O0lBSUksZUFBdUIsWUFBZTtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsc0JBQUksd0JBQUs7Ozs7UUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCx3QkFBUTs7OztJQUFSLFVBQVUsU0FBWTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUwsWUFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7Ozs7Ozs7SUFoQkcsdUJBQXNCOzs7OztJQUN0Qix3QkFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yZTxUPiB7XG4gICAgc3RhdGUkOiBPYnNlcnZhYmxlPFQ+O1xuICAgIHByaXZhdGUgX3N0YXRlJDogQmVoYXZpb3JTdWJqZWN0PFQ+O1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yIChpbml0aWFsU3RhdGU6IFQpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdChpbml0aWFsU3RhdGUpO1xuICAgICAgICB0aGlzLnN0YXRlJCA9IHRoaXMuX3N0YXRlJC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBnZXQgc3RhdGUgKCk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGUkLmdldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgc2V0U3RhdGUgKG5leHRTdGF0ZTogVCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zdGF0ZSQubmV4dChuZXh0U3RhdGUpO1xuICAgIH1cblxufVxuIl19