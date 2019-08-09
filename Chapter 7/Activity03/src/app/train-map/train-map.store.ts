import { Injectable, EventEmitter } from '@angular/core';
import { ITrainMap } from './train-map.interface';
import { Store } from '../store';
import { Subscription, from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ITrainMapSelection {
  id: string;
}

export interface ITrainMapAction {
  type: string;
  payload?: ITrainMap[];
  select?: ITrainMapSelection;
}

export enum TrainMapActions {
  REPLACE = '[TrainMap] Replace',
  SELECT = '[TrainMap] Select'
}

export class TrainMapState {
  maps: ITrainMap[] = [];
  selected: ITrainMap;
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
      case TrainMapActions.SELECT:
          const response = state.maps.filter((trainMap: ITrainMap) => {
            return trainMap.id === action.select.id;
          });
          return {
            ...state,
            selected: response.length ? response[0] : null
          };
      default:
        return state;
     }
  }
}
