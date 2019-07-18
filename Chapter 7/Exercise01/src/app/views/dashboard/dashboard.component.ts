import { Component, OnInit } from '@angular/core';
import { TrainMap } from 'src/app/services/map/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public controller: TrainMap) { }

  ngOnInit() {
    this.controller.fetch({
      name: 'Green Line',
      direction: 'west'
    });
  }

}
