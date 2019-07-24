import { Injectable } from '@angular/core';
import { TrainMapService } from './train-map.service';
import { TrainMapStore, TrainMapActions, ITrainMapSelection } from './train-map.store';
import { ITrainMap } from './train-map.interface';

@Injectable({
  providedIn: 'root'
})
export class TrainMap {
  constructor(public store: TrainMapStore,
              public api: TrainMapService) { }

  select(selection: ITrainMapSelection) {
    return this.api.fetchMap()
    .subscribe((res: ITrainMap[]) => {
      this.store.actions.emit({ type: TrainMapActions.REPLACE, payload: res });
      this.store.actions.emit({ type: TrainMapActions.SELECT, request: selection });
    });
  }

  state() {
    return this.store.state$;
  }

}
