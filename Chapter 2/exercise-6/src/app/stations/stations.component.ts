import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  @Input() stations: string[];

  constructor() { }

  ngOnInit() {
  }

}
