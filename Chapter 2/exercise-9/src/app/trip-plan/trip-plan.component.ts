import { Component, OnInit, Input } from '@angular/core';
import { TripStep } from '../core/enums/trip-step';
import { Station } from '../core/models/station';

@Component({
  selector: 'app-trip-plan',
  templateUrl: './trip-plan.component.html',
  styleUrls: ['./trip-plan.component.css']
})
export class TripPlanComponent implements OnInit {

  hour: number;
  stations: Station[];
  tripStep = TripStep;

  constructor() { }

  ngOnInit() {
    this.hour = Date.now();

    this.stations = [
      {
        name: 'Apollo Ave.',
        color: 'blue',
        size: 100
      },
      {
        name: 'Oaks Bottom',
        color: 'green',
        size: 80
      },
      {
        name: 'Developer Dr',
        color: 'green',
        size: 100
      }
    ];
  }

  onSelectStation(station: string) {
    console.log('station selected ', station);
  }

}
