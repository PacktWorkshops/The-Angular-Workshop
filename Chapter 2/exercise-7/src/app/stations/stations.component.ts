import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  @Input() stations: string[];
  @Output() stationSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(station: string) {
    this.stationSelected.emit(station);
  }

}
