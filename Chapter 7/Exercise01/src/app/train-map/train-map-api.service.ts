import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainMapApiService {

  constructor(private http: HttpClient) { }
  fetchMaps(): Observable<any> {
    // TODO: make the actual request
    return new Observable();
  }

}
