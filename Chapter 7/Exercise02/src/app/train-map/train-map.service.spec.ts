import { TestBed } from '@angular/core/testing';

import { TrainMapService } from './train-map.service';

describe('TrainMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainMapService = TestBed.get(TrainMapService);
    expect(service).toBeTruthy();
  });
});
