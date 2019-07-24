import { Injectable } from '@angular/core';
import { TrainMapService } from './train-map.service';

@Injectable({
  providedIn: 'root'
})
export class TrainMap {
  constructor(public api: TrainMapService) { }
  select() {
    return this.api.fetchMap();
  }
}
