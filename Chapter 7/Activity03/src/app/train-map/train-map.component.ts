import { Component, OnInit, Input } from '@angular/core';
import { ITrainMap, ITrainStop } from './train-map.interface';

@Component({
  selector: 'app-train-map',
  templateUrl: './train-map.component.html',
  styleUrls: ['./train-map.component.css']
})
export class TrainMapComponent implements OnInit {

  @Input() map: ITrainMap;

  constructor() { }

  ngOnInit() {
  }

  getPosition(stop: ITrainStop) {
    console.log((stop.tripCompletion === 100 ? `calc(${stop.tripCompletion}% - 18px)` : `${stop.tripCompletion}%`));
    return (stop.tripCompletion === 100 ? `calc(${stop.tripCompletion}% - 18px)` : `${stop.tripCompletion}%`) ;
  }


}
