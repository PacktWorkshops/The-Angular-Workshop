import { Component, Input } from '@angular/core';
import { TrainMap, TrainStop } from './../../services/map/map.service';

@Component({
  selector: 'ata-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  public stops: TrainStop[] = [];

  @Input() map: TrainMap;

  constructor() {}

  getPosition(stop: TrainStop) {
    const percentage = (stop.distance / this.map.length) * 100;
    return (percentage === 100 ? `calc(${percentage}% - 18px)` : `${percentage}%`) ;
  }

}
