import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainMapComponent } from './train-map.component';

@NgModule({
  declarations: [TrainMapComponent],
  imports: [
    CommonModule
  ],
  exports: [TrainMapComponent]
})
export class TrainMapModule { }
