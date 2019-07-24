import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TrainMapModule } from '../train-map/train-map.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    TrainMapModule
  ]
})
export class DashboardModule { }
