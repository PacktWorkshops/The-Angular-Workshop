import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from './../store/store';
import { TrainMap } from './map.service';

export enum TrainMapActions {
    REPLACE = '[TrainMap] Replace'
}

export interface TrainMapAction {
    type: string;
    payload?: TrainMap | TrainMap[];
  }

export class TrainMapState {
    maps: TrainMap[] = [];
}

@Injectable()
export class TrainMapStore extends Store {

  public state$: Observable<TrainMapState>;

  constructor() {
    super(new TrainMapState());
    this.debug = true;
  }

  reducer(state: TrainMapState, action?: TrainMapAction ) {
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
