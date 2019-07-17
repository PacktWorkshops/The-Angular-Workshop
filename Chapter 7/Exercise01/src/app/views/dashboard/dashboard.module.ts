import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TrainMapService } from 'src/app/services/map/map.service';
import { TrainMapStore } from 'src/app/services/map/map.store';
import { TrainMap } from 'src/app/services/map/map';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule
  ],
  providers: [
    TrainMap,
    TrainMapStore,
    TrainMapService
  ]
})
export class DashboardModule { }
