import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TrainMapService } from './../../services/map/map.service';
import { TrainMapStore } from './../../services/map/map.store';
import { TrainMap } from './../../services/map/map';
import { MapModule } from './../../components/map/map.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MapModule
  ],
  providers: [
    TrainMap,
    TrainMapStore,
    TrainMapService
  ]
})
export class DashboardModule { }
