import { Injectable } from '@angular/core';
import { Car } from './car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[] = [{
    id: 1,
    make: 'Toyota',
    model: 'Camry XLE',
    year: 2019,
  image_url:'camry.jpg'    
},
{
  id: 2,
  make: 'Toyota',
  model: 'Highlander',
  year: 2010,
  image_url:'highlander.jpg'
},
{
  id: 3,
  make: 'Toyota',
  model: 'Corolla',
  year: 2019,
  image_url:'corolla.png'
}];

  constructor() { }

  public getCars(): any {
    const carssObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.cars);
           }, 1000);
    });

    return carssObservable;
}
}
