import { Component,OnInit } from '@angular/core';
import { Car } from './car.model';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exercise-observable';
  cars: Car[] = [];

  constructor(private carservice: CarService) {}
  ngOnInit() {
    const carsObservable = this.carservice.getCars();
    carsObservable.subscribe((carsData: Car[]) => {
        this.cars = carsData;
    });
}
}
