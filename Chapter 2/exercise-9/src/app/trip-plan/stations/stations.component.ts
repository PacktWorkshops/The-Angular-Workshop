import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Station } from '../../core/models/station';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  @Input() stations: Station[];
  @Output() stationSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(station: string) {
    this.stationSelected.emit(station);
  }

}
