import { TestBed } from '@angular/core/testing';

import { TrainMapStore } from './train-map.store';

describe('TrainMapStore', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainMapStore = TestBed.get(TrainMapStore);
    expect(service).toBeTruthy();
  });
});
