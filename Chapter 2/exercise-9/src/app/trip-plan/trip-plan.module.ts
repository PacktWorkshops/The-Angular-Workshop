import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripPlanComponent } from './trip-plan.component';
import { StationsComponent } from './stations/stations.component';

@NgModule({
  declarations: [
    TripPlanComponent,
    StationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TripPlanComponent
  ]
})
export class TripPlanModule { }
