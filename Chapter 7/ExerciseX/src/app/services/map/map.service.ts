import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TrainStop {
  location: string;
  distance: number;
  id: string;
}

export interface TrainMap {
  id: number;
  name: string;
  length: number;
  capacity: number;
  direction: string;
  items: TrainStop[];
}

export const BASE_API_PATH = 'http://localhost:4300/api';

@Injectable({
  providedIn: 'root'
})
export class TrainMapService {

  constructor(private http: HttpClient) {}

  fetchMap(): Observable<TrainMap[]> {
    return this.http.get<TrainMap[]>(`${BASE_API_PATH}/map`);
  }
}
