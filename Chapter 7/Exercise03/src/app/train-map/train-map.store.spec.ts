import { TestBed } from '@angular/core/testing';
import { MAPS } from './train-map-api.service.spec';
import { TrainMapStore, TrainMapState, TrainMapActions } from './train-map.store';

describe('TrainMapStore', () => {
  let state: TrainMapState;
  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    state = new TrainMapState();
  });

  it(`should be created`, () => {
    const service: TrainMapStore = TestBed.get(TrainMapStore);
    expect(service).toBeTruthy();
  });


  it(`should set ITrainMap[] on state when ${TrainMapActions.REPLACE} dispatched`, () => {
    const service: TrainMapStore = TestBed.get(TrainMapStore);
    service.actions.emit({
      type: TrainMapActions.REPLACE,
      payload: MAPS
    });
    service.state$.subscribe(() => {
      expect(service.state.maps.length).toBe(2);
    });
  });


});
