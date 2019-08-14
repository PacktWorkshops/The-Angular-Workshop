import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-plan',
  templateUrl: './trip-plan.component.html',
  styleUrls: ['./trip-plan.component.css']
})
export class TripPlanComponent implements OnInit {

  hour: number;
  stations: string[];

  constructor() { }

  ngOnInit() {
    this.hour = Date.now();

    this.stations = ['Apollo Ave.', 'Oaks Bottom', 'Developer Dr'];
  }

}
