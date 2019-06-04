import { Observable } from 'rxjs';
export declare class Store<T> {
    state$: Observable<T>;
    private _state$;
    protected constructor(initialState: T);
    readonly state: T;
    setState(nextState: T): void;
}
