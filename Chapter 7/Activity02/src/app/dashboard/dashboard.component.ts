import { Component, OnInit } from '@angular/core';
import { TrainMap } from '../train-map/train-map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor(public facade: TrainMap) { }

  ngOnInit() {
    this.facade.select({ id: '1' });
  }

  get state() {
    return this.facade.state();
  }

}
