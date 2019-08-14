import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITrainMap } from './train-map.interface';

export const BASE_API_PATH = 'http://localhost:4300/api';

@Injectable({
  providedIn: 'root'
})
export class TrainMapApiService {

  constructor(private http: HttpClient) { }

  fetchMaps(): Observable<ITrainMap[]> {
    return this.http.get<ITrainMap[]>(`${BASE_API_PATH}/map`);
  }

}
