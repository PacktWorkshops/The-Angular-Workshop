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
    const percentage = (stop.distance / this.map.length) * 100;
    return (percentage === 100 ? `calc(${percentage}% - 18px)` : `${percentage}%`) ;
  }

}
