import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainMap } from './train-map';

@Injectable({
  providedIn: 'root'
})
export class TrainMapService {

  constructor(private http: HttpClient) { }

  fetchMap() {

  }
}
