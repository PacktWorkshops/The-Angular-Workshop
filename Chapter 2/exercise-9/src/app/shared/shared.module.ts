import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusDirective } from './directives/focus.directive';
import { TripStepPipe } from './pipes/trip-step.pipe';

@NgModule({
  declarations: [
    FocusDirective,
    TripStepPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
