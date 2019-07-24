import { Component, OnInit, Input } from '@angular/core';
import { ITrainMap } from './train-map.interface';

@Component({
  selector: 'app-train-map',
  templateUrl: './train-map.component.html',
  styleUrls: ['./train-map.component.css']
})
export class TrainMapComponent implements OnInit {

  @Input('map') map: ITrainMap;

  constructor() { }

  ngOnInit() {
  }

}
