import { Observable, BehaviorSubject, from, Subscription } from 'rxjs';
import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';

export interface AbstractAction {
  type: string;
  payload?: any;
  request?: any;
}

export interface AbstractState {
  [key: string]: any;
}

export class Store implements OnDestroy {

  private _pipe$: Subscription;
  private _state$: BehaviorSubject<AbstractState>;
  public state$: Observable<AbstractState>;
  public actions: EventEmitter<AbstractAction> = new EventEmitter();
  public debug = false;

    protected constructor (initialState: AbstractState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable() as Observable<AbstractState>;
        this.init();
    }

    get state(): AbstractState {
        return this._state$.getValue();
    }

    setState(nextState: AbstractState): void {
        this.next(nextState);
    }

    init() {
      this._pipe$ = from(this.actions).pipe(
        map((a: AbstractAction) => this.reducer(this.state, a)),
        map((s: AbstractState) => this.setState(s)),
      ).subscribe();
    }

    log(s: AbstractState) {
      console.log('STATE: ', s);
    }

    reducer(state: AbstractState, action?: AbstractAction) {
      return state;
    }

    next(nextState?: AbstractState) {
      this._state$.next(nextState || this.state);
      if (this.debug === true) {
        this.log(this.state);
      }
    }

    ngOnDestroy() {
      this._pipe$.unsubscribe();
    }
}
