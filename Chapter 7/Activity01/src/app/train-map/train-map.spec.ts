import { TestBed } from '@angular/core/testing';

import { TrainMap } from './train-map';

describe('TrainMap', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainMap = TestBed.get(TrainMap);
    expect(service).toBeTruthy();
  });
});
