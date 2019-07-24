import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITrainMap } from './train-map.interface';

export const BASE_API_PATH = 'http://localhost:4300/api';

@Injectable({
  providedIn: 'root'
})
export class TrainMapService {

  constructor(private http: HttpClient) { }

  fetchMap(): Observable<ITrainMap[]> {
    return this.http.get<ITrainMap[]>(`${BASE_API_PATH}/map`);
  }
}
