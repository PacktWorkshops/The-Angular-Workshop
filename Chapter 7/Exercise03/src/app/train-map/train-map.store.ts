import { Injectable, EventEmitter } from '@angular/core';
import { ITrainMap } from './train-map.interface';
import { Store } from '../store';
import { Subscription, from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ITrainMapAction {
  type: string;
  payload?: ITrainMap | ITrainMap[];
}

export enum TrainMapActions {
  REPLACE = '[TrainMap] Replace'
}

export class TrainMapState {
  maps: ITrainMap[] = [];
}

@Injectable({
  providedIn: 'root'
})
export class TrainMapStore extends Store<TrainMapState> {
  public actions: EventEmitter<ITrainMapAction> = new EventEmitter();
  private _action$: Subscription;
  constructor() {
    super(new TrainMapState());
    this._action$ = from(this.actions).pipe(
      map((a: ITrainMapAction) => this.reducer(this.state, a)),
      map((s: TrainMapState) => this.setState(s)),
    ).subscribe();
  }
  reducer(state: TrainMapState, action?: ITrainMapAction ) {
    switch (action.type) {
      case TrainMapActions.REPLACE:
      return {
          ...state,
          maps: action.payload
      };
      default:
        return state;
     }
  }
}
