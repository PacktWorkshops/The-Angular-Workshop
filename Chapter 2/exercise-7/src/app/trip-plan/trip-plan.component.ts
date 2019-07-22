import { Component, OnInit, Input } from '@angular/core';
import { TripStep } from '../enums/trip-step';

@Component({
  selector: 'app-trip-plan',
  templateUrl: './trip-plan.component.html',
  styleUrls: ['./trip-plan.component.css']
})
export class TripPlanComponent implements OnInit {

  hour: number;
  stations: string[];
  tripStep = TripStep;

  constructor() { }

  ngOnInit() {
    this.hour = Date.now();

    this.stations = ['Apollo Ave.', 'Oaks Bottom', 'Developer Dr'];
  }

  onSelectStation(station: string) {
    console.log('station selected ', station);
  }

}
