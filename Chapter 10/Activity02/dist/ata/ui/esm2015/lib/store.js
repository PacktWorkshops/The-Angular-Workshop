/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
/**
 * @template T
 */
export class Store {
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
if (false) {
    /** @type {?} */
    Store.prototype.state$;
    /**
     * @type {?}
     * @private
     */
    Store.prototype._state$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXRhL3VpLyIsInNvdXJjZXMiOlsibGliL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7O0FBRWpELE1BQU0sT0FBTyxLQUFLOzs7OztJQUlkLFlBQXVCLFlBQWU7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBRSxTQUFZO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FFSjs7O0lBaEJHLHVCQUFzQjs7Ozs7SUFDdEIsd0JBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgU3RvcmU8VD4ge1xuICAgIHN0YXRlJDogT2JzZXJ2YWJsZTxUPjtcbiAgICBwcml2YXRlIF9zdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxUPjtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvciAoaW5pdGlhbFN0YXRlOiBUKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgdGhpcy5zdGF0ZSQgPSB0aGlzLl9zdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXRlICgpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlJC5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIHNldFN0YXRlIChuZXh0U3RhdGU6IFQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc3RhdGUkLm5leHQobmV4dFN0YXRlKTtcbiAgICB9XG5cbn1cbiJdfQ==