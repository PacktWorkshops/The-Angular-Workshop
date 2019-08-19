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

  it(`should set ITrainMap[] on state when calling setState`, () => {
    const service: TrainMapStore = TestBed.get(TrainMapStore);
    service.setState({
      maps: MAPS,
      selected: MAPS[0]
    });
    expect(service.state.maps.length).toBe(2);
    expect(service.state.selected).toBeTruthy();
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

  it(`should set ITrainMap on state when ${TrainMapActions.SELECT} dispatched`, () => {
    const service: TrainMapStore = TestBed.get(TrainMapStore);
    service.actions.emit({
      type: TrainMapActions.REPLACE,
      payload: MAPS
    });
    service.actions.emit({
      type: TrainMapActions.SELECT,
      select: {
        id: '1'
      }
    });
    service.state$.subscribe(() => {
      expect(service.state.selected).toEqual(MAPS[1]);
    });
  });

  it(`should set ITrainMap[] on state when calling reducer`, () => {
    const service: TrainMapStore = TestBed.get(TrainMapStore);
    const trainMapState = service.reducer({
      maps: MAPS,
      selected: MAPS[0]
    }, {
      type: TrainMapActions.REPLACE,
      payload: MAPS
    });
    expect(trainMapState.maps.length).toBe(2);
  });


});
