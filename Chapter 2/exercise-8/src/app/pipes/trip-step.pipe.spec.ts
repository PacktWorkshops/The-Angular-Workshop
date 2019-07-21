import { TripStepPipe } from './trip-step.pipe';
import { TripStep } from '../enums/trip-step';

describe('TripStepPipe', () => {
  it('should return a step for departures', () => {
    const pipe = new TripStepPipe();
    expect(pipe.transform('station A', TripStep.Departure)).toBe('Depart at station A');
  });

  it('should return a step for arrives', () => {
    const pipe = new TripStepPipe();
    expect(pipe.transform('station A', TripStep.Arrive)).toBe('Arrive at station A');
  });

  it('should return a step for transfers', () => {
    const pipe = new TripStepPipe();
    expect(pipe.transform('station A', TripStep.Transfer)).toBe('Transfer to station A');
  });

  it('should return the input value if no condtion is satisfied', () => {
    const pipe = new TripStepPipe();
    expect(pipe.transform('station A', null)).toBe('station A');
  });
});
