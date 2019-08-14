import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-plan',
  templateUrl: './trip-plan.component.html',
  styleUrls: ['./trip-plan.component.css']
})
export class TripPlanComponent implements OnInit {

  hour: string;
  stations: string[];

  constructor() { }

  ngOnInit() {
    const now = new Date();
    const format = { hour: 'numeric', minute: 'numeric' };
    this.hour = now.toLocaleString('en-US', format);

    this.stations = ['Apollo Ave.', 'Oaks Bottom', 'Developer Dr'];
  }

}
