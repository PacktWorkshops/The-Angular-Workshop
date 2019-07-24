import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from './../store/store';
import { TrainMap } from './map.service';

export enum TrainMapActions {
    REPLACE = '[TrainMap] Replace',
    SELECT = '[TrainMap] Select'
}

export interface TrainMapRequest {
    id: number;
}

export interface TrainMapAction {
    type: string;
    payload?: TrainMap | TrainMap[];
    request?: TrainMapRequest;
}

export class TrainMapState {
    maps: TrainMap[] = [];
    selected: TrainMap;
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
        case TrainMapActions.SELECT:
          const response = state.maps.filter((map) => {
            return map.id === action.request.id;
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
