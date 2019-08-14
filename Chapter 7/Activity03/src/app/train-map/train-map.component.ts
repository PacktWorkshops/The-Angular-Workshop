import { Component, Input } from '@angular/core';
import { ITrainMap, ITrainStop } from './train-map.interface';

@Component({
  selector: 'app-train-map',
  templateUrl: './train-map.component.html',
  styleUrls: ['./train-map.component.css']
})
export class TrainMapComponent {

  @Input() map: ITrainMap;

  constructor() { }

  getPosition(stop: ITrainStop) {
    return (stop.tripCompletion === 100 ? `calc(${stop.tripCompletion}% - 18px)` : `${stop.tripCompletion}%`) ;
  }


}
