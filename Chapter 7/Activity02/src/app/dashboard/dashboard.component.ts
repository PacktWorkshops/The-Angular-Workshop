import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TrainMap } from '../train-map/train-map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('mapSelect', {static: false}) mapSelect: ElementRef;

  constructor(public facade: TrainMap) { }

  ngOnInit() {
    this.facade.select({ id: 0 });
  }

  onMapSelect(ev: Event) {
    const selected = this.mapSelect.nativeElement.selectedOptions[0];
    this.facade.select({
      id: parseInt(selected.getAttribute('value'), 10)
    });
  }

}
