import { Pipe, PipeTransform } from '@angular/core';
import { TripStep } from '../../core/enums/trip-step';

@Pipe({
  name: 'tripStep'
})
export class TripStepPipe implements PipeTransform {

  transform(value: string, tripStep: TripStep): any {
    if (tripStep === TripStep.Departure) {
      return `Depart at ${value}`;
    }
    if (tripStep === TripStep.Arrive) {
      return `Arrive at ${value}`;
    }
    if (tripStep === TripStep.Transfer) {
      return `Transfer to ${value}`;
    }
    return value;
  }

}
