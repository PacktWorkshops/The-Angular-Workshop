import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TrainMap } from 'src/app/services/map/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('mapSelect', {static: false}) mapSelect: ElementRef;

  constructor(public controller: TrainMap) { }

  ngOnInit() {
    this.controller.select({
      id: 0
    });
  }

  onMapSelect(ev: Event) {
    const selected = this.mapSelect.nativeElement.selectedOptions[0];
    this.controller.select({
      id: parseInt(selected.getAttribute('value'), 10)
    });
  }

}
