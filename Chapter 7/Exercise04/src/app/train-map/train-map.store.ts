import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { Store } from '../store';
import { ITrainMap } from './train-map.interface';
import { Subscription, from, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export enum TrainMapActions {
  REPLACE = '[TrainMap] Replace',
  SELECT = '[TrainMap] Select'
}

export interface ITrainMapSelection {
  id: number;
}

export interface ITrainMapAction {
  type: string;
  payload?: ITrainMap | ITrainMap[];
  request?: ITrainMapSelection;
}

export class TrainMapState {
  maps: ITrainMap[] = [];
  selected: ITrainMap;
}

@Injectable({
  providedIn: 'root'
})
export class TrainMapStore extends Store<TrainMapState> implements OnDestroy {

  public actions: EventEmitter<ITrainMapAction> = new EventEmitter();
  private _pipe$: Subscription;

  constructor() {
    super(new TrainMapState());
    this.init();
  }

  init() {
    this._pipe$ = from(this.actions).pipe(
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
            return trainMap.id === action.request.id;
          });
          return {
            ...state,
            selected: response.length ? response[0] : null
          };
        default:
        return state;
    }
  }

  ngOnDestroy() {
    this._pipe$.unsubscribe();
  }
}
