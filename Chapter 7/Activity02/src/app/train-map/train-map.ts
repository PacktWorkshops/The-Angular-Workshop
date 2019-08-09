import { Injectable } from '@angular/core';
import { TrainMapApiService } from './train-map-api.service';
import { TrainMapStore, TrainMapActions, TrainMapState, ITrainMapSelection } from './train-map.store';
import { Observable } from 'rxjs';
import { ITrainMap } from './train-map.interface';
import { map, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainMap {
  constructor(private api: TrainMapApiService,
              private store: TrainMapStore) { }
  select(selection: ITrainMapSelection): void {
    this.api.fetchMaps().subscribe((res: ITrainMap[]) => {
      this.store.actions.emit({ type: TrainMapActions.REPLACE, payload: res });
      this.store.actions.emit({ type: TrainMapActions.SELECT, select: selection });
    });
  }
  state(): Observable<TrainMapState> {
    return this.store.state$;
  }

}
