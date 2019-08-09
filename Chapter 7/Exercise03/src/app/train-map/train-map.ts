import { Injectable } from '@angular/core';
import { TrainMapApiService } from './train-map-api.service';
import { TrainMapStore, TrainMapActions, TrainMapState } from './train-map.store';
import { Observable } from 'rxjs';
import { ITrainMap } from './train-map.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainMap {
  constructor(private api: TrainMapApiService,
              private store: TrainMapStore) { }
  select(): void {
    this.api.fetchMaps().pipe(
      map((res: ITrainMap[]) => this.store.actions.emit({ type: TrainMapActions.REPLACE, payload: res }))
    ).subscribe();
  }
  state(): Observable<TrainMapState> {
    return this.store.state$;
  }

}
