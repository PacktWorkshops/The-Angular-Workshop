import { Injectable } from '@angular/core';
import { TrainMapApiService } from './train-map-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainMap {
  constructor(private api: TrainMapApiService) { }
  select() {
    return this.api.fetchMaps();
  }

}
